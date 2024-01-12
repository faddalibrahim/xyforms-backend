const form = {
  name: "Example Form 1",
  description: "Hey this is a form to collect blah blah",
  sections: [
    {
      id: "Section 1 ID",
      title: "Section 1",
      subtitle: "Section 1 Subtitle",
      questions: [
        {
          id: "Question 1 ID",
          question: "What is your level of education",
          type: "radio",
          required: true,
          options: [
            {
              id: "Option 1 ID",
              option: "High School",
            },
          ],
        },
        {
          id: "Question 2 ID",
          question: "What is name",
          type: "text",
          required: true,
        },
        {
          id: "Question 3 ID",
          question: "Write a Bio",
          type: "textarea",
          required: true,
        },
        {
          id: "Question 3 ID",
          question: "Date of birth",
          type: "date",
          required: true,
        },
      ],
    },
  ],
};

export default form;
