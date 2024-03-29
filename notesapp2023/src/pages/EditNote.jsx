import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { ImFloppyDisk } from "react-icons/im";
import { AiOutlineArrowLeft } from "react-icons/ai";
import useCreateDate from "../components/useCreateDate";

const EditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const note = notes.find((item) => item.id === id);
  const [title, setTitle] = useState(note.title);
  const [details, setDetails] = useState(note.details);
  const date = useCreateDate();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();

    if (title && details) {
      const newNote = { ...note, title, details, date };

      const newNotes = notes.map((item) => {
        if (item.id === id) {
          item = newNote;
        }
        return item;
      });

      setNotes(newNotes);
    }

    // redirect to home page
    navigate("/");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete the note?")) {
      const newNotes = notes.filter((item) => item.id !== id);
      setNotes(newNotes);
    }
    navigate("/");
  };

  return (
    <section>
      <header className='create-note__header'>
        <Link to='/' className='btn'>
          <AiOutlineArrowLeft />
        </Link>
        <button className='btn lg primary' onClick={handleForm}>
          <ImFloppyDisk />
        </button>
        <button className='btn lg danger' onClick={handleDelete}>
          <BsTrash />
        </button>
      </header>
      <form className='create-note__form' onSubmit={handleForm}>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoFocus
        />
        <textarea
          rows='28'
          placeholder='My note...'
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default EditNote;
