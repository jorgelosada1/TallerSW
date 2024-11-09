// Nav.js
import React, { useState } from 'react';
import ButtonJ from '../button/ButtonJ';
import AddIcon from '@mui/icons-material/Add';
import './nav.css';
import { Typography } from '@mui/material';
import Modal from '../modal/modal';

export default function Nav() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClick = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className='nav'>
      <Typography color='white' fontSize='22px' fontWeight={600}>PANEL DE ESTUDIANTES</Typography>
      <ButtonJ onClick={handleClick} text={"Nuevo"} icon={<AddIcon />} color={"#FFD166"} />
      <Modal open={isModalOpen} onClose={handleClose} />
    </div>
  );
}
