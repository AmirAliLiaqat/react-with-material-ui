import React from 'react';
import {Button, ButtonGroup} from '@mui/material';

const ButtonGroups = () => {
  return (
    <>
        <h1>👉 Button Group</h1>
        <br/>
        <ButtonGroup>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
        <br/>
        <br/>
        <ButtonGroup variant='contained'>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
        <br/>
        <br/>
        <ButtonGroup variant='contained' disabled>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
        <br/>
        <br/>
        <ButtonGroup variant='contained' orientation='vertical'>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>&nbsp;
        <ButtonGroup variant='outlined' orientation='vertical'>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
        </ButtonGroup>
    </>
  )
}

export default ButtonGroups
