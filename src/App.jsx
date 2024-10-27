import { Button, Form, Modal } from 'react-bootstrap';
import './App.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, removeBook } from './Redux/Slice/bookSlice';
import Header from './Header';
import Footer from './Footer';



function App() {
  
  // state of modal
  const [show, setShow] = useState(false);

  //state for bbok details
  const [bookName,setbookName] = useState('');
  const [bookAuthor,setbookAuthor] = useState('');

  //Functions of modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  //To add each book to state
  const handleAddBook = () => {

    //Dispatching addBook action to add a book to book:[]
    if(bookName!='' || bookAuthor!=''){
      dispatch(addBook({name:bookName,author:bookAuthor}));

      // After adding book clearing input fields 
    setbookName('');
    setbookAuthor('');

    handleClose();

    }
    else{
      alert("Please fill the fields");
    }

  }

  // Displayng books after adding
  const books = useSelector((state)=>state.bookReducer.books);
  console.log(books);
  
  

  return (
    <>

      <Header/>

      <h1 className='text-center text-danger mt-5'>Book Managment System</h1>
      <div className='text-center mt-5'>
        <button className='btn btn-warning text-light' onClick={handleShow}>ADD BOOK</button>
      </div>

      {/* table to display added books */}
      <div className='d-flex justify-content-center mt-5'>
        <table className='table-bordered table-dark text-light fs-5 w-50 text-center'>
          <thead>
            <tr>
              <th>Book Name</th>
              <th>Book Author</th>
              <th>Remove</th>
            </tr>
          </thead>

          <tbody>
            {
            books?.length>0?books.map((book,index)=>(
              <tr key={index}>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td><Button className='bg-danger' onClick={()=>dispatch(removeBook(index))}><i class="fa-solid fa-trash"></i></Button></td>
            </tr>
            )):<div className='text-danger fs-5'>No Books To display</div>
            }
          </tbody>

        </table>
      </div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton className='bg-dark'>
          <Modal.Title className='text-light'>Add Books</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark'>
            <Form.Control type="text" placeholder="Enter Book Name" onChange={(e)=>setbookName(e.target.value)} value={bookName}/>
            <Form.Control type="text" placeholder="Enter Author Name" className='mt-3' onChange={(e)=>setbookAuthor(e.target.value)} value={bookAuthor}/>
        </Modal.Body>
        <Modal.Footer className='bg-dark'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddBook}>ADD</Button>
        </Modal.Footer>
      </Modal>

      <Footer/>

    </>
  )
}

export default App
