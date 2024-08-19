export const userInfo = {
  data: {
    firstName: "Arnold",
    lastName: "Shwarzenegger",
    occupation: "Renaissance man",
    email: "arnie.shwartz1948@gmail.com",
    phone: "789 666 987",
    linkedin: "https://www.linkedin.com/in/arnie-shwartz",
    github: "https://github.com/arnie-shwartz",
  },
  label: {
    objectName: "userInfo",
    header: "Your information",
    firstName: "First name",
    lastName: "Last name",
    occupation: "Occupation",
    email: "Email",
    phone: "Phone",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
  visible: true,
};
export const summary = {
  data: {
    summary:
      "Write something about you. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ultricies tempus lectus, id condimentum massa egestas sodales. Morbi ut aliquet nisi. Etiam et orci ipsum. Nunc vel euismod sapien, id cursus nibh. Maecenas vitae mi faucibus, condimentum orci eget, finibus orci. Curabitur vitae lectus hendrerit, commodo nisi in, sollicitudin dolor.",
  },
  label: {
    objectName: "summary",
    header: "Summary",
    summary: " ",
  },
  visible: true,
};
export const experience = {
  data: [
    {
      place: "Holyowood",
      dates: "1968-2015",
      position: "Actor",
      duties: "Acting",
    },
    {
      place: "California",
      dates: "2003-2011",
      position: "Governor",
      duties: "Governing stuff",
    },
  ],
  label: {
    objectName: "experience",
    header: "Experience",
    experience: " ",
    place: "Workplace",
    dates: "Dates",
    position: "Position",
    duties: "Duties",
    template: {
      place: "",
      dates: "",
      position: "",
      duties: "",
    },
  },
  visible: true,
};
export const education = {
  data: [
    {
      place: "Austria",
      dates: "1955-1970",
      fieldOfStudy: "veri important study",
      duties: "lerning stuff",
    },
  ],
  label: {
    objectName: "education",
    header: "Education",
    experience: " ",
    place: "Place",
    dates: "Dates",
    fieldOfStudy: "Field",
    duties: "Skills",
    template: {
      place: "",
      dates: "",
      fieldOfStudy: "",
      duties: "",
    },
  },
  visible: true,
};
export const skills = {
  data: [
    {
      skill: "Lifting weights heavier than feels",
    },
  ],
  label: {
    objectName: "skills",
    header: "Skills",
    skill: "Skill",
    template: {
      skill: "",
    },
  },
  visible: true,
};
