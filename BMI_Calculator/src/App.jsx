import React, { useState } from "react";
import { TextField, Button, Paper, Typography, Box } from "@mui/material";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) return;

    const h = height / 100; // convert cm to meters
    const bmiValue = weight / (h * h);
    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) setMessage("Underweight");
    else if (bmiValue >= 18.5 && bmiValue < 24.9) setMessage("Normal weight");
    else if (bmiValue >= 25 && bmiValue < 29.9) setMessage("Overweight");
    else setMessage("Obese");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      marginLeft="140%"
      width="100%"
    >
      <Paper elevation={3} sx={{ p: 4, width: 300, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          BMI Calculator
        </Typography>

        <TextField
          label="Weight (kg)"
          type="number"
          fullWidth
          margin="normal"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <TextField
          label="Height (cm)"
          type="number"
          fullWidth
          margin="normal"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={calculateBMI}
        >
          Calculate
        </Button>

        {bmi && (
          <Box mt={3}>
            <Typography variant="h6">Your BMI: {bmi}</Typography>
            <Typography color="text.secondary">{message}</Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default BMICalculator;
