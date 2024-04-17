"use client";
import { ExpandMoreRounded } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Typography, Paper, Grid
} from "@mui/material";
import React, { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>("faq-1");

  const styles = {
    accordionRoot: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      marginBottom: '20px',
      padding: '10px',
      borderRadius: '15px',
      boxShadow: 'none',
    },
    accordionSummaryRoot: {
      padding: '0 1rem',
      minHeight: '48px',
      '&.MuiExpanded': {
        minHeight: '48px',
      },
    },
    accordionDetailsRoot: {
      padding: '0 1rem 1rem',
    },
    expandIcon: {
      color: 'white',
    },
    errorIcon: {
      verticalAlign: 'middle',
      color: 'red',
    },
    typographyQs: {
      fontWeight: 'Bold',
      fontFamily: 'var(--font-whyte-inktrap), sans-serif',
    },
    typographyAns: {
      fontWeight: 'Normal',
      fontFamily: 'var(--font-whyte-inktrap), sans-serif',
    },
  };

  const faqList: FAQItem[] = [
    {
      id: "faq-1",
      question: "What is the AI Hackathon?",
      answer: "UC Berkeley’s AI Hackathon is a 2-day hackathon, where students will creatively collaborate on innovative technology, and attend workshops and panels to learn more about emerging tech!"
    },
    {
      id: "faq-2",
      question: "How many people can be on a single team?",
      answer: "Up to 4 people can be part of a single team."
    },
    {
      id: "faq-3",
      question: "Do I have to have a team to participate?",
      answer: "No. We will have team matching during the event itself, or you can come with a team or solo. Whatever works for you!"
    },
    {
      id: "faq-4",
      question: "What experience level is needed to attend?",
      answer: "All experience levels are welcome!"
    },
    {
      id: "faq-5",
      question: "Do I have to be in-person?",
      answer: "Yes, you and your team will all have to be in-person at UC Berkeley to participate in the hackathon."
    },
  ];

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const generateAccordions = () => {
    return faqList.map((faq, index) => (
      <Accordion
        key={faq.id}
        expanded={expanded === faq.id}
        onChange={handleChange(faq.id)}
        style={styles.accordionRoot}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreRounded style={styles.expandIcon} />}
          aria-controls={`panel${index}a-content`}
          id={`panel${index}a-header`}
          style={styles.accordionSummaryRoot}
        >
          <Typography style={styles.typographyQs}>{faq.question}</Typography>
        </AccordionSummary>
        <AccordionDetails style={styles.accordionDetailsRoot}>
          <Typography style={styles.typographyAns}>{faq.answer}</Typography>
        </AccordionDetails>
      </Accordion>
    ));
  };

  return (
    <div className="md:items-between relative z-10 mx-auto px-8 pb-12 pt-36 sm:px-16 md:px-20 md:py-40">
    <Container id="card" disableGutters>
      <Paper elevation={0} style={{ padding: 20, marginTop: 20, backgroundColor: "transparent" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography style={{
              fontFamily: 'var(--font-pp-neue-bit), sans-serif', color: 'white', fontSize: '50px', marginBottom: '-30px',
            }}>{"Frequently Asked Questions"}</Typography>
            <h1 className="flex flex-col font-pp-neue-bit text-electric-blue text-[40px] mt-0">
              - we’ve got the answers.
            </h1>

          </Grid>
          <Grid item xs={6}>
            <Container style={{ marginTop: 20, }} disableGutters component="section" id="faq-accordion">
              {generateAccordions()}
            </Container>
          </Grid>
        </Grid>
      </Paper>
    </Container>
    </div>
  );
};

export default FAQ;
