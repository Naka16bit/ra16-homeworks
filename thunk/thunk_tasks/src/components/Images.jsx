import {useSelector, useDispatch} from 'react-redux'
import {addImage} from '../redux_toolkit/slices/images';


function Images() {
    const dispatch = useDispatch();
    const {imgList} = useSelector(state => state.images);

    function readFile(e) {
        const file = e.target.files[0];
        const reader = new FileReader();
      
        reader.readAsDataURL(file);
      
        reader.onload = function() {
          dispatch(addImage(reader.result))
        };
    }
    console.log(imgList);

    return(
        <div>
            <h2>Фото профиля</h2>
            <div className="file-input">
                <input 
                    type="file"
                    onChange={(e) => readFile(e)} 
                    name="file"/>
            </div>
            <ul className="images-list">
                {imgList.slice(0, 1).map(({id, src}) => 
                    <li key={id} className="main-photo"> 
                        <img src={src} width="200" height="200"/> 
                    </li>)}
                {imgList.slice(1).map(({id, src}) => 
                    <li key={id} className="photo"> 
                        <img src={src} width="50" height="50"/> 
                    </li>)}
            </ul>
        </div>
    );
};

export default Images;
