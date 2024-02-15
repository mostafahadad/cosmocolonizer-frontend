import React from 'react';
import { Typography, TextField } from "@mui/material";

export default function FormField({ label, fieldName, value, handleChange }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
        <Typography variant="body1" component="label" htmlFor={fieldName} style={{ marginRight: 10, flexBasis: '160px' }}>
          {label}:
        </Typography>
        <TextField
          id={fieldName}
          variant="outlined"
          type="text"
          name={fieldName}
          value={value || ''}
          onChange={handleChange}
          size="small"
          style={{ flexGrow: 1 }}
        />
      </div>
    );
}
