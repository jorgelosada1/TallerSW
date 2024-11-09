import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Swal from 'sweetalert2';
import useStore from '../../store';

export default function Modal({ open, onClose }) {
    const [studentName, setStudentName] = useState('');
    const [studentCod, setStudentCod] = useState('');
    const addItem = useStore((state) => state.addItem); 

    const handleInputChange = (event) => {
        setStudentName(event.target.value);
    };

    const handleInputChangecod = (event) => {
        setStudentCod(event.target.value);
    };

    const handleConfirm = async () => {
        if (studentName.trim() === '' || studentCod.trim() === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, complete todos los campos.',
                position: 'top',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                backdrop: true,
                toast: true,
                customClass: {
                    popup: 'custom-swal-popup'
                },
            });
            return;
        }

        try {
            await addItem({ nombre: studentName, codigo: studentCod }); 
            Swal.fire({
                icon: 'success',
                title: 'Registro de estudiante exitoso',
                showConfirmButton: false,
                timer: 1500,
            });
            handleClose(); 
        } catch (error) {
            console.error('Error al agregar el estudiante:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo registrar el estudiante. Intenta de nuevo.',
            });
        }
    };

    const handleCancelar = () => {
        Swal.fire({
            icon: 'error',
            title: 'Cancelado',
            showConfirmButton: false,
            timer: 1500,
        });
        handleClose();
    };

    const handleClose = () => {
        setStudentName('');
        setStudentCod('');
        onClose();
    };

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="dialog-title">
            <DialogTitle id="dialog-title">
                Añadir nuevo estudiante
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Ingrese los datos del estudiante:
                </DialogContentText>
                <TextField
                    id="student-name"
                    label="Nombre del estudiante"
                    value={studentName}
                    onChange={handleInputChange}
                    variant="outlined"
                    size="small"
                    fullWidth
                    margin="dense"
                    required
                />
                <TextField
                    id="student-cod"
                    label="Código del estudiante"
                    value={studentCod}
                    onChange={handleInputChangecod}
                    variant="outlined"
                    size="small"
                    fullWidth
                    margin="dense"
                    required
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCancelar} color="primary">
                    Cancelar
                </Button>
                <Button onClick={handleConfirm} color="primary">
                    Confirmar
                </Button>
            </DialogActions>
        </Dialog>
    );
}
