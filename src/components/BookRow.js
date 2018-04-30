import React from 'react';
import BookModal from '../containers/BookModal';

const BookRow = (props) => {
    return (
        <tr className="table-body">
            <td>{props.details.title}</td>
            <td>{props.details.author}</td>
            <td className="highlight">
            <BookModal 
                btnText="Edit book"
                header="Edit book details"
                title={props.details.title}
                author={props.details.author}
                controlTitleFunc={props.controlTitleFunc}
                controlAuthorFunc={props.controlAuthorFunc}
                postData={props.postData}
            />
            
            </td>
            <td className="highlight">Delete</td>
        </tr>
    );
}

export default BookRow;