import React from 'react';
import BookModal from '../containers/BookModal';
import DeleteModal from './DeleteModal';
import PropTypes from 'prop-types';

const deleteData = (id) => {
    fetch(`https://library-api.glitch.me/api/books/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },


    });
    //this.getApi();
}

const putData = (values) => {
    fetch(`https://library-api.glitch.me/api/books/${values.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)

    });
    //this.getApi();
}

const BookRow = (props) => {
    return (
        <tr className="table-body">
            <td>{props.book.title}</td>
            <td>{props.book.author}</td>
            <td className="highlight">
                <BookModal
                    id={props.book.id}
                    btnText="Edit book"
                    header="Edit book details"
                    title={props.book.title}
                    author={props.book.author}
                    handleData={putData}
                />

            </td>
            <td className="highlight">
                <DeleteModal
                    id={props.book.id}
                    btnText="Delete"
                    header="Confirm deleting book?"
                    handleData={deleteData}
                />
            </td>
        </tr>

    );
}

BookRow.propTypes = {
    book: PropTypes.object.isRequired
};

export default BookRow;
