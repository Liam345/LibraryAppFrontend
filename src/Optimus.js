import React, { Component } from 'react';
import BookRow from './components/BookRow';
import BookModal from './containers/BookModal';
class Optimus extends Component {

  constructor(props){
    super(props);
    this.state = {
      bookList:[],
      author:"",
      title:"",
    }
  }

  postData = () => {
    let values = {
        title:this.state.title,
        author:this.state.author
    };
    console.log(values);
    console.log("...from post data");
      fetch('https://library-api.glitch.me/api/books',{
        method:'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(values)
  
      });

      this.setState({
        title:"",
        author:""
      });

      this.getApi();

  }

  handleTitleChange = (e) =>{
    console.log(e.target.value);
    this.setState({title:e.target.value});
    console.log("... From Main class Title " );
  }

  handleAuthorChange = (e) =>{
    console.log(e.target.value);
    this.setState({author:e.target.value});
    console.log("... From Main class Author " );
  }
  getApi = () => {
    fetch('https://library-api.glitch.me/api/books',{
      cache:'reload',
      method:'GET'
    })
    .then(response => response.json())
    .then(data => this.setState({bookList:data}));
  }

  componentDidMount(){
    this.getApi();
  }

  

  render() {
    const bookRows = this.state.bookList.map((book, index) => {
        // return (
        //     <BookRow 
        //         key={index}
        //         details={book}
        //         // title={this.state.title}
        //         // author={this.state.author}
        //         controlTitleFunc={this.handleTitleChange}
        //         controlAuthorFunc={this.handleAuthorChange}
        //         postData={this.postData}/>
        // )


      return (  <tr key={index} className="table-body">
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td className="highlight">
            <BookModal
                 
                btnText="Edit book"
                header="Edit book details"
                title={book.title}
                author={book.author}
                controlTitleFunc={this.handleTitleChange}
                controlAuthorFunc={this.handleAuthorChange}
                postData={this.postData}
            />
            
            </td>
            <td className="highlight">Delete</td>
        </tr>
    )

    });
    return (
      <div className="container">
      <table className="table table-striped table-bordered">
      <thead className="table-header">
      <tr>
      <th>Book Title</th>
      <th>Author</th>
      <th></th>
      <th><BookModal 
      btnText="Add book"
      header="Add a new book"
      title={this.state.title}
      author={this.state.author}
      controlTitleFunc={this.handleTitleChange}
      controlAuthorFunc={this.handleAuthorChange}
      postData={this.postData}
      /></th>
      </tr>
      </thead>
      <tbody>
        {bookRows}         
        </tbody>
            </table>
            
            </div>
    );
  }
}

export default Optimus;
