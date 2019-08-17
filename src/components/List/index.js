import React from 'react' ;
import './index.css' ;
import ListItem from '../ListItem' ;

const List = ({ notes, activeId, onListItemClick }) => {
    return (
        <div className="list">
            {notes.map((item) => {
                const { id, title, contents } = item ;
                return (
                    <ListItem 
                        key={id}
                        id={id}
                        active={id === activeId}
                        title={title}
                        contents={contents}
                        onClick={() => onListItemClick(id)}
                    />
                );
            })}
        </div>
    ) ;
} ;

export default List ;