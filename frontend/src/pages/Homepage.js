import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid, Box, Card, CardContent, Button } from "@mui/material";  // Import Button from MUI
import styled from "styled-components";
import studentImage from "../assets/students.png";

const Homepage = () => {
  return (
    <StyledContainer >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={10}>
          {/* Main Card */}
          <Card
            variant="outlined"
            sx={{
              borderRadius: "12px",
              overflow: "hidden",
              padding: 3,
              width: "100%", // Ensure full width
              maxWidth: "1200px", // Max width for larger screens
              boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)", // Add shadow
            }}
          >
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  {/* Image Card */}
                  <Card
                    variant="outlined"
                    sx={{
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "8px",
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Add shadow to image card
                    }}
                  >
                    <img
                      src={studentImage}
                      alt="students"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover", // Ensure the image covers its container
                        borderRadius: "8px",
                      }}
                    />
                  </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                  {/* Text Content */}
                  <StyledTitle>
                    Online
                    <br />
                    College Management
                    <br />
                    System
                  </StyledTitle>
                  <StyledText>
                  Streamline college operations with an easy-to-use platform for admins, 
                  teachers, and students. Admins manage records, teachers track progress and 
                  provide feedback, while students access grades, attendance, and communicate 
                  with ease.
                  </StyledText>
                  <StyledBox>
                    <StyledLink to="/choose">
                      {/* Replace LightPurpleButton with regular Button and apply reddish-orange color */}
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          backgroundColor: "#FF4500", // Reddish-orange color for button
                          color: "white", // White text color for contrast
                          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                          "&:hover": {
                            backgroundColor: "#E03C00", // Darker reddish-orange on hover
                          },
                        }}
                      >
                        Login
                      </Button>
                    </StyledLink>
                    <StyledText>
                      Don't have an ADMIN Account?{" "}
                      <Link to="/Adminregister" style={{ color: "#FF4500" }}>
                        Sign up
                      </Link>
                    </StyledText>
                  </StyledBox>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-top: 80px; /* Add space at the top */
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  color: #252525; /* Keep the heading text black */
  font-weight: bold;
  margin-bottom: 20px;
  letter-spacing: normal;
`;

const StyledText = styled.p`
  color: #555; /* Neutral color for text */
  margin-top: 20px;
  margin-bottom: 20px;
  letter-spacing: normal;
  line-height: 1.6;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 16px;
  padding: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
