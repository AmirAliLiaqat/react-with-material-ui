
import React, { useEffect, useState, useRef, useMemo } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Overlay, OverlayImage, OverlaySVG, Icon } from './styles';
import { getCloudfrontUrl } from '@/utils/cloudfront';
interface Props {
  source: string;
  zoomOutIcon: React.ReactNode;
  zoomInIcon: React.ReactNode;
  minimizeIcon: React.ReactNode;
  polygons: Polygon[];
  activePolygonId: string;
}
interface Polygon {
  svg?: string | undefined;
  id: string;
  points: number[][];
  color: string;
  strokeColor: string;
  strokeWidth: number;
}
const getCenterPointInAxis = (pts: number[]) => (Math.min(...pts) + Math.max(...pts)) / 2;
const makeStyle = (color: string, strokeColor: string, strokeWidth: number | string) => ({
  fill: color,
  stroke: strokeColor || 'black',
  strokeWidth: strokeWidth || 1,
  cursor: 'pointer',
});
const maximizedStyle = {
  right: '32px',
};
const minimizedStyle = {
  left: '0px',
  marginLeft: '2px',
};
export const MapLocation = ({
  source,
  polygons,
  activePolygonId,
  zoomOutIcon,
  zoomInIcon,
  minimizeIcon,
  drawCrosshair,
}: Props) => {
  const [overlay, setOverlay] = useState({
    viewBoxW: 1494,
    viewBoxH: 902,
  });
  const olImageReference = useRef<HTMLImageElement | null>(null);
  const svgReference = useRef<SVGSVGElement | null>(null);
  const [drawSVG, setDrawSVG] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDeckPlan, setShowDeckPlan] = useState(true);
  const activePolygon = (): Polygon | undefined => {
    if (!polygons || !activePolygonId) return undefined;
    return polygons.find(({ id }) => id === activePolygonId);
  };
  drawCrosshair = (): boolean => {
    if (polygons && activePolygonId && activePolygon()) return true;
    // do not draw crosshair when no active polygon
    return false;
  };
  const crosshair = (): { x: number; y: number } => {
    if (!drawCrosshair()) return { x: 0, y: 0 };
    // return active polygon centroid coordinates
    const { points } = activePolygon() || {};
    const range = points?.reduce(
      ({ x, y }, [pt1, pt2]) => ({
        x: [...x, pt1],
        y: [...y, pt2],
      }),
      { x: [] as number[], y: [] as number[] } // Provide initial empty arrays as the type annotation
    );
    return {
      x: getCenterPointInAxis(range?.x || []),
      y: getCenterPointInAxis(range?.y || []),
    };
  };
  const calculatePolygons = (): Polygon[] => {
    if (polygons.length > 0) {
      const result = polygons?.map((x) => ({ ...x, svg: x.points.flat(10).join(',') }));
      return result;
    }
    return [];
  };
  const viewBox = {
    viewBoxW: 1494,
    viewBoxH: 902,
  };
  useEffect(() => {
    drawCrosshair();
    activePolygon();
    calculatePolygons();
  }, [polygons]);
  const loaded = () => {
    if (olImageReference.current && olImageReference.current.naturalWidth) {
      viewBox.viewBoxW = olImageReference.current.naturalWidth;
    }
    if (olImageReference.current && olImageReference.current.naturalHeight) {
      viewBox.viewBoxH = olImageReference.current?.naturalHeight;
    }
    setOverlay(viewBox);
    setDrawSVG(true);
  };
  const expandDeckPlan = () => {
    setIsExpanded(!isExpanded);
  };
  const minimizeDeckPlan = () => {
    setShowDeckPlan(!showDeckPlan);
  };
  const renderedOverlay = useMemo(() => {
    const calculateViewBox = (): string => `0 0 ${overlay.viewBoxW} ${overlay.viewBoxH}`;
    const calcCrosshairStyle = () => {
      const x = Math.sqrt((0.0025 * overlay.viewBoxW) ** 2 + (0.0025 * overlay.viewBoxH) ** 2);
      return {
        stroke: 'rgb(255,0,0)',
        strokeWidth: 0.5 * x,
      };
    };
    return (
      <>
        <Overlay style={{ width: isExpanded ? '500px' : '300px', transition: 'width 1s' }}>
          {source === '' ? (
            <CircularProgress />
          ) : (
            <div>
              {showDeckPlan ? (
                <OverlayImage
                  id="deck-plan"
                  ref={olImageReference}
                  alt="deck plan"
                  src={getCloudfrontUrl(source)}
                  crossOrigin="use-credentials"
                  onLoad={loaded}
                />
              ) : undefined}
              <Icon
                style={showDeckPlan ? maximizedStyle : minimizedStyle}
                onClick={() => minimizeDeckPlan()}
              >
                {' '}
                {minimizeIcon}{' '}
              </Icon>
              {isExpanded && showDeckPlan && (
                <Icon onClick={() => expandDeckPlan()}> {zoomOutIcon} </Icon>
              )}
              {!isExpanded && showDeckPlan && (
                <Icon onClick={() => expandDeckPlan()}> {zoomInIcon} </Icon>
              )}
              {drawSVG && showDeckPlan && (
                <OverlaySVG ref={svgReference} viewBox={calculateViewBox()}>
                  {drawCrosshair() && (
                    <>
                      <line
                        x1={crosshair().x}
                        y1="0"
                        x2={crosshair().x}
                        y2="99999"
                        style={calcCrosshairStyle()}
                      />
                      <line
                        x1="0"
                        y1={crosshair().y}
                        x2="9999"
                        y2={crosshair().y}
                        style={calcCrosshairStyle()}
                      />
                    </>
                  )}
                  {calculatePolygons().map((polygon) => (
                    <polygon
                      key={polygon.id}
                      id={polygon.id}
                      points={polygon.svg}
                      style={makeStyle(polygon.color, polygon.strokeColor, polygon.strokeWidth)}
                    />
                  ))}
                </OverlaySVG>
              )}
            </div>
          )}
        </Overlay>
      </>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    source,
    isExpanded,
    overlay,
    showDeckPlan,
    drawSVG,
    olImageReference,
    loaded,
    minimizeDeckPlan,
    expandDeckPlan,
    svgReference,
    crosshair,
    drawCrosshair,
    calculatePolygons,
    makeStyle,
  ]);
  return <>{renderedOverlay}</>;
};
import React, { useEffect, useState, useRef, useMemo } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Overlay, OverlayImage, OverlaySVG, Icon } from './styles';
import { getCloudfrontUrl } from '@/utils/cloudfront';
interface Props {
  source: string;
  zoomOutIcon: React.ReactNode;
  zoomInIcon: React.ReactNode;
  minimizeIcon: React.ReactNode;
  polygons: Polygon[];
  activePolygonId: string;
}
interface Polygon {
  svg?: string | undefined;
  id: string;
  points: number[][];
  color: string;
  strokeColor: string;
  strokeWidth: number;
}
const getCenterPointInAxis = (pts: number[]) => (Math.min(...pts) + Math.max(...pts)) / 2;
const makeStyle = (color: string, strokeColor: string, strokeWidth: number | string) => ({
  fill: color,
  stroke: strokeColor || 'black',
  strokeWidth: strokeWidth || 1,
  cursor: 'pointer',
});
const maximizedStyle = {
  right: '32px',
};
const minimizedStyle = {
  left: '0px',
  marginLeft: '2px',
};
export const MapLocation = ({
  source,
  polygons,
  activePolygonId,
  zoomOutIcon,
  zoomInIcon,
  minimizeIcon,
  drawCrosshair,
}: Props) => {
  const [overlay, setOverlay] = useState({
    viewBoxW: 1494,
    viewBoxH: 902,
  });
  const olImageReference = useRef<HTMLImageElement | null>(null);
  const svgReference = useRef<SVGSVGElement | null>(null);
  const [drawSVG, setDrawSVG] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showDeckPlan, setShowDeckPlan] = useState(true);
  const activePolygon = (): Polygon | undefined => {
    if (!polygons || !activePolygonId) return undefined;
    return polygons.find(({ id }) => id === activePolygonId);
  };
  drawCrosshair = (): boolean => {
    if (polygons && activePolygonId && activePolygon()) return true;
    // do not draw crosshair when no active polygon
    return false;
  };
  const crosshair = (): { x: number; y: number } => {
    if (!drawCrosshair()) return { x: 0, y: 0 };
    // return active polygon centroid coordinates
    const { points } = activePolygon() || {};
    const range = points?.reduce(
      ({ x, y }, [pt1, pt2]) => ({
        x: [...x, pt1],
        y: [...y, pt2],
      }),
      { x: [] as number[], y: [] as number[] } // Provide initial empty arrays as the type annotation
    );
    return {
      x: getCenterPointInAxis(range?.x || []),
      y: getCenterPointInAxis(range?.y || []),
    };
  };
  const calculatePolygons = (): Polygon[] => {
    if (polygons.length > 0) {
      const result = polygons?.map((x) => ({ ...x, svg: x.points.flat(10).join(',') }));
      return result;
    }
    return [];
  };
  const viewBox = {
    viewBoxW: 1494,
    viewBoxH: 902,
  };
  useEffect(() => {
    drawCrosshair();
    activePolygon();
    calculatePolygons();
  }, [polygons]);
  const loaded = () => {
    if (olImageReference.current && olImageReference.current.naturalWidth) {
      viewBox.viewBoxW = olImageReference.current.naturalWidth;
    }
    if (olImageReference.current && olImageReference.current.naturalHeight) {
      viewBox.viewBoxH = olImageReference.current?.naturalHeight;
    }
    setOverlay(viewBox);
    setDrawSVG(true);
  };
  const expandDeckPlan = () => {
    setIsExpanded(!isExpanded);
  };
  const minimizeDeckPlan = () => {
    setShowDeckPlan(!showDeckPlan);
  };
  const renderedOverlay = useMemo(() => {
    const calculateViewBox = (): string => `0 0 ${overlay.viewBoxW} ${overlay.viewBoxH}`;
    const calcCrosshairStyle = () => {
      const x = Math.sqrt((0.0025 * overlay.viewBoxW) ** 2 + (0.0025 * overlay.viewBoxH) ** 2);
      return {
        stroke: 'rgb(255,0,0)',
        strokeWidth: 0.5 * x,
      };
    };
    return (
      <>
        <Overlay style={{ width: isExpanded ? '500px' : '300px', transition: 'width 1s' }}>
          {source === '' ? (
            <CircularProgress />
          ) : (
            <div>
              {showDeckPlan ? (
                <OverlayImage
                  id="deck-plan"
                  ref={olImageReference}
                  alt="deck plan"
                  src={getCloudfrontUrl(source)}
                  crossOrigin="use-credentials"
                  onLoad={loaded}
                />
              ) : undefined}
              <Icon
                style={showDeckPlan ? maximizedStyle : minimizedStyle}
                onClick={() => minimizeDeckPlan()}
              >
                {' '}
                {minimizeIcon}{' '}
              </Icon>
              {isExpanded && showDeckPlan && (
                <Icon onClick={() => expandDeckPlan()}> {zoomOutIcon} </Icon>
              )}
              {!isExpanded && showDeckPlan && (
                <Icon onClick={() => expandDeckPlan()}> {zoomInIcon} </Icon>
              )}
              {drawSVG && showDeckPlan && (
                <OverlaySVG ref={svgReference} viewBox={calculateViewBox()}>
                  {drawCrosshair() && (
                    <>
                      <line
                        x1={crosshair().x}
                        y1="0"
                        x2={crosshair().x}
                        y2="99999"
                        style={calcCrosshairStyle()}
                      />
                      <line
                        x1="0"
                        y1={crosshair().y}
                        x2="9999"
                        y2={crosshair().y}
                        style={calcCrosshairStyle()}
                      />
                    </>
                  )}
                  {calculatePolygons().map((polygon) => (
                    <polygon
                      key={polygon.id}
                      id={polygon.id}
                      points={polygon.svg}
                      style={makeStyle(polygon.color, polygon.strokeColor, polygon.strokeWidth)}
                    />
                  ))}
                </OverlaySVG>
              )}
            </div>
          )}
        </Overlay>
      </>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    source,
    isExpanded,
    overlay,
    showDeckPlan,
    drawSVG,
    olImageReference,
    loaded,
    minimizeDeckPlan,
    expandDeckPlan,
    svgReference,
    crosshair,
    drawCrosshair,
    calculatePolygons,
    makeStyle,
  ]);
  return <>{renderedOverlay}</>;
};