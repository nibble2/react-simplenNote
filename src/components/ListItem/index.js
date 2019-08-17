import React from 'react' ;
import './index.css' ;
const ListItem = ({ active, title, contents, onClick }) => {
    return (
        <div 
            className={active ? "list-item active" : "list-item"}
            onClick={onClick}
        >
            <div className="title">{title ? title: '제목'}</div>
            <div className="list-item-contents">{contents ? contents : '내용'}</div>
        </div>
    ) ;
} ;

export default ListItem ;