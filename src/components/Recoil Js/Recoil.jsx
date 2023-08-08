import { userDetail, empDetail } from './Atom';
import { charCount } from './Selector';
import { useRecoilState, useRecoilValue } from 'recoil';

export const Recoil = () => {
    const [userData, setUserData] = useRecoilState(userDetail);
    const empData = useRecoilValue(empDetail);
    const counter = useRecoilValue(charCount);

    const nameChange = (e) => {
        setUserData({
            ...userData,
            name: e.target.value
        })
    }
    
    return(
        <>
            <div className="text-center my-5">
                <h1>Recoil</h1>
                <h3>State Management Library</h3> <br />
                <input type="text" className='p-2' value={userData.name} onChange={nameChange} /> <br /><br />
                <p>User Name: {userData.name}</p> <br />
                <p>Emp Name: {empData.name}</p> <br />
                <p>Char Count: {counter}</p>
            </div>
        </>
    )
}
