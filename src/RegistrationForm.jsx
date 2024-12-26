import React, { useState } from 'react';
import { TextField, FormControl, InputLabel, MenuItem, Select, Button, FormHelperText, Stack, Typography } from '@mui/material';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    course: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    gender: '',
    dob: '',
    course: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    // Name validation (non-empty)
    if (!formData.name) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    // Gender validation (non-empty)
    if (!formData.gender) {
      formErrors.gender = 'Gender is required';
      isValid = false;
    }

    // Date of Birth validation (non-empty and not in the future)
    if (!formData.dob) {
      formErrors.dob = 'Date of Birth is required';
      isValid = false;
    } else if (new Date(formData.dob) > new Date()) {
      formErrors.dob = 'Date of Birth cannot be in the future';
      isValid = false;
    }

    // Course validation (non-empty)
    if (!formData.course) {
      formErrors.course = 'Course is required';
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Create the success alert message with user data
      const successMessage = `
        Data stored successfully! 
        \nName: ${formData.name}
        \nGender: ${formData.gender}
        \nDate of Birth: ${formData.dob}
        \nCourse: ${formData.course}
      `;
      
      // Display the alert with the user data
      alert(successMessage);
      
      // Reset the form
      setFormData({
        name: '',
        gender: '',
        dob: '',
        course: '',
      });
      setErrors({
        name: '',
        gender: '',
        dob: '',
        course: '',
      });
    } else {
      alert('Please fill in all fields correctly');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      gender: '',
      dob: '',
      course: '',
    });
    setErrors({
      name: '',
      gender: '',
      dob: '',
      course: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <h2 className="form-header">Student Register</h2>

        {/* Name Field */}
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          className="form-input"
          sx={{ mb: 2 }}
        />

        {/* Gender Dropdown */}
        <FormControl fullWidth className="form-input" error={!!errors.gender} sx={{ mb: 2 }}>
          <InputLabel>Gender</InputLabel>
          <Select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            label="Gender"
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
          {errors.gender && <FormHelperText>{errors.gender}</FormHelperText>}
        </FormControl>

        {/* Date of Birth Field */}
        <TextField
          name="dob"
          label="Date of Birth"
          type="date"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={formData.dob}
          onChange={handleChange}
          error={!!errors.dob}
          helperText={errors.dob}
          className="form-input"
          sx={{ mb: 2 }}
        />

        {/* Course Dropdown */}
        <FormControl fullWidth className="form-input" error={!!errors.course} sx={{ mb: 2 }}>
          <InputLabel>Course</InputLabel>
          <Select
            name="course"
            value={formData.course}
            onChange={handleChange}
            label="Course"
          >
            <MenuItem value="Biology">Biology</MenuItem>
            <MenuItem value="Computer Science">Computer Science</MenuItem>
            <MenuItem value="Commerce">Commerce</MenuItem>
            <MenuItem value="Humanities">Humanities</MenuItem>
          </Select>
          {errors.course && <FormHelperText>{errors.course}</FormHelperText>}
        </FormControl>

        {/* Action Buttons */}
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            className="btn-register"
          >
            Register
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            type="button"
            fullWidth
            onClick={handleReset}
            className="btn-cancel"
          >
            Cancel
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default RegistrationForm;
