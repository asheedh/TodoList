import { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faFloppyDisk, faTrash } from '@fortawesome/free-solid-svg-icons';

function TodoItem({ id, item, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedItem, setEditedItem] = useState(item);
    const [status, setStatus] = useState(false);

    const handleEdit = () => {
        if (isEditing) {
            onEdit(id, editedItem);
        }
        setIsEditing(!isEditing);
    };
    const save = <FontAwesomeIcon icon={faFloppyDisk} />
    const edit = <FontAwesomeIcon icon={faEdit} />
    const Delete = <FontAwesomeIcon icon={faTrash} />
    return (
        <div className="container">
            <div className="TodoItem">
                <div className="content">
                    {isEditing ? (
                        <input
                            type="text"
                            value={editedItem}
                            onChange={(e) => setEditedItem(e.target.value)}
                        />
                    ) : (
                        <p>{item}</p>
                    )}
                </div>

                <div>
                    <button onClick={() => (setStatus(!status))}> {status ? "✔️": "❌"} </button>
                </div>
            </div>
            <div className="actions">
                    <button onClick={handleEdit}>{isEditing ? save : edit }</button>
                    <button onClick={() => onDelete(id)}>{Delete}</button>
            </div>
        </div>
        
    );
}

TodoItem.propTypes = {
    id: PropTypes.number.isRequired,
    item: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
};

export default TodoItem;
