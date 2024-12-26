import React, { useState } from 'react';
import { TextField, FormControl, InputLabel, MenuItem, Select, Button, FormHelperText, Stack } from '@mui/material';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
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

    // Name validation
    if (!formData.name) {
      formErrors.name = 'Name is required';
      isValid = false;
    }

    // Address validation
    if (!formData.address) {
      formErrors.address = 'Address is required';
      isValid = false;
    }

    // Mobile number validation (non-empty, numeric, 10 digits)
    if (!formData.mobile) {
      formErrors.mobile = 'Mobile number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      formErrors.mobile = 'Mobile number must be 10 digits';
      isValid = false;
    }

    // Email validation (non-empty and valid format)
    if (!formData.email) {
      formErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      formErrors.email = 'Invalid email format';
      isValid = false;
    }

    // Gender validation
    if (!formData.gender) {
      formErrors.gender = 'Gender is required';
      isValid = false;
    }

    // Date of Birth validation
    if (!formData.dob) {
      formErrors.dob = 'Date of Birth is required';
      isValid = false;
    } else if (new Date(formData.dob) > new Date()) {
      formErrors.dob = 'Date of Birth cannot be in the future';
      isValid = false;
    }

    // Course validation
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
      const successMessage = `
        Data stored successfully! 
        \nName: ${formData.name}
        \nAddress: ${formData.address}
        \nMobile: ${formData.mobile}
        \nEmail: ${formData.email}
        \nGender: ${formData.gender}
        \nDate of Birth: ${formData.dob}
        \nCourse: ${formData.course}
      `;
      alert(successMessage);

      setFormData({
        name: '',
        address: '',
        mobile: '',
        email: '',
        gender: '',
        dob: '',
        course: '',
      });
      setErrors({
        name: '',
        address: '',
        mobile: '',
        email: '',
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
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: '',
    });
    setErrors({
      name: '',
      address: '',
      mobile: '',
      email: '',
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
          sx={{ mb: 2 }}
        />

        {/* Address Field */}
        <TextField
          name="address"
          label="Address"
          variant="outlined"
          fullWidth
          value={formData.address}
          onChange={handleChange}
          error={!!errors.address}
          helperText={errors.address}
          sx={{ mb: 2 }}
        />

        {/* Mobile Field */}
        <TextField
          name="mobile"
          label="Mobile"
          variant="outlined"
          fullWidth
          value={formData.mobile}
          onChange={handleChange}
          error={!!errors.mobile}
          helperText={errors.mobile}
          sx={{ mb: 2 }}
        />

        {/* Email Field */}
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          sx={{ mb: 2 }}
        />

        {/* Gender Dropdown */}
        <FormControl fullWidth error={!!errors.gender} sx={{ mb: 2 }}>
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
          fullWidth
          InputLabelProps={{ shrink: true }}
          value={formData.dob}
          onChange={handleChange}
          error={!!errors.dob}
          helperText={errors.dob}
          sx={{ mb: 2 }}
        />

        {/* Course Dropdown */}
        <FormControl fullWidth error={!!errors.course} sx={{ mb: 2 }}>
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
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Register
          </Button>
          <Button variant="outlined" color="secondary" type="button" fullWidth onClick={handleReset}>
            Cancel
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default RegistrationForm;
