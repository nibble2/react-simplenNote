import React from 'react' ;
import './index.css' ;
const Header = ({ onAddNote, onDeleteNote }) => {
    return (
        <div className="header">
            <div className="title">
                <a href ="https://github.com/nibble2" target="_blank">
                    <img className="logo" src="https://vignette.wikia.nocookie.net/tomandjerry/images/a/a1/TuffyNew.png/revision/latest?cb=20150819040947" />
                 </a>   
                <span>nibble's Simple Note</span>
            </div>
            <div className="buttons">
                 <button onClick={onAddNote}>추가</button>
                 <button onClick={onDeleteNote}>삭제</button>
            </div>
        </div>
    ) ;
} ;

export default Header ;