// ButtonJ.js
import React from 'react'
import './button.css'
import Button from '@mui/material/Button'

export default function ButtonJ({ text, icon, color, onClick }) {
  return (
    <div>
      <Button
        onClick={onClick}
        variant="contained"
        sx={{ textTransform: "none", backgroundColor: color }}
      >
        {icon}
        {text}
      </Button>
    </div>
  )
}
