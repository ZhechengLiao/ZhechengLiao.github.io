const projectSections = [
  // {
  //   title: "Current Role",
  //   data: [
  //     {
  //       tags: ["nextjs", "typescript", "mongodb", "socket.io", "material-ui"],
  //       bgImage: "/img/fiveable.png",
  //       description: `I started at Fiveable as a part time Junior Software Engineer at Hours, but was then promoted to a full time Software Engineer I role after a couple months. The codebase is a MongoDB, SocketIO, Express, and NextJS stack, with Material UI as a design framework. I work alongside designers, product managers, and other engineers to turn ticketed ideas into reality.`,
  //       title: "Fiveable",
  //       subtext: "Software Engineer I, Sep 2020 - Present",
  //       buttons: [{ href: "https://fiveable.me", type: "link", text: "Fiveable Homepage" }],
  //     },
  //   ],
  // },

  {
    title: "Projects",
    data: [
      {
        tags: ["Python", "NumPy", "Pandas"],
        bgImage: "https://raw.githubusercontent.com/ZhechengLiao/cdn/master/uploads/nn.jpg",

        description: `Atomgrad is a simple version AI frame work like pytorch following micrograd. Build from scratch to implement neuron network training and a lot of deep learning alogrithm, including transformers, GPT, stable diffusion, etc...(This is only for learning deep learning)`,
        title: "Atomgrad",
        buttons: [
          {
            href: "https://github.com/ZhechengLiao/atomgrad",
            type: "github",
          },

        ],
      },
      {
        tags: ["Python", "Physics", "Web Crawler"],
        bgImage: "https://raw.githubusercontent.com/ZhechengLiao/cdn/master/uploads/Davinci.png",
        description: `As we all know, Leonardo Da Vinci was a talented scientists in lots of areas, such as physics, math, art, and etc. I'd like to build a pretrained GPT model like Davinci to help human accelerate basic science like physics and math. This is the dataset for the GPT model.`,
        title: "Davinci Dataset",
        buttons: [
          {
            href: "https://github.com/ZhechengLiao/Davinci_Dataset",
            type: "github",
          },
        ],
      },
      {
        tags: ["Tensorflow", "PyTorch", "Tensorflow", "Python", "NLP", "Data Science", "Pandas", "NumPy"],
        title: "NLP - Comment Toxic Classifier",
        bgImage: 
          "https://raw.githubusercontent.com/ZhechengLiao/cdn/master/uploads/toxic.png",
        description: `This project is help me understand the flow of NLP development by using Tensorflow and PyTorch.`,
        buttons: [
          {
            href: "https://github.com/ZhechengLiao/NLP-comment-toxic",
            type: "github",
          },
        ],
      },
      {
        tags: ["Python", "HuggingFace", "Math", "PyTorch"],
        title: "WebUI Stable Diffusion",
        description: `During working at TaDa, I help them build a web version Stable Diffusion for users to play around with generating images.`,
        bgImage: "https://raw.githubusercontent.com/ZhechengLiao/cdn/master/uploads/sd.png",
        buttons: [
          {
            href: "https://github.com/ZhechengLiao/Web3Demo-Test/tree/patch-1",
            type: "github",
          },
        ],
      },
    ],
  },

  {
    title: "Certifications",
    collapsible: true,
    data: [
      {
        tags: ["Kaggle"],
        title: "Intermediate Machine Learning",
        description: ``,
        buttons: [
          {
            href: "https://www.kaggle.com/learn/certification/zhechengliao/intermediate-machine-learning",
            type: "link",
            text: "Show credential",
          },
        ],
      },
      {
        tags: ["Kaggle"],
        title: "Intro to Machine Learning",
        description: ``,
        buttons: [
          {
            href: "https://www.kaggle.com/learn/certification/zhechengliao/intro-to-machine-learning",
            type: "link",
            text: "Show credential",
          },
        ],
      },
      {
        tags: ["Coursera"],
        title: "Machine Learning Foundations",
        description: ``,
        buttons: [
          {
            href: "https://www.coursera.org/account/accomplishments/certificate/VAVFEUK4TPKE",
            type: "link",
            text: "Show credential",
          },
        ],
      },
      {
        tags: ["DataCamp"],
        title: "Intermediate Python",
        description: ``,
        buttons: [
          {
            href: "https://www.datacamp.com/statement-of-accomplishment/course/3cb9b4595c7bc9065fbb901913c07de9692a0a29?raw=1",
            type: "link",
            text: "Show credential",
          },
        ],
      },
      {
        tags: ["Coursera"],
        title: "Python Data Structures",
        description: ``,
        buttons: [
          {
            href: "https://www.coursera.org/account/accomplishments/certificate/6WCHQD8YNW99",
            type: "link",
            text: "Show credential",
          },
        ],
      },
      {
        tags: ["Coursera"],
        title: "Using Python to Access Web Data",
        description: ``,
        buttons: [
          {
            href: "https://www.coursera.org/account/accomplishments/certificate/9CDMVGUCQVVZ",
            type: "link",
            text: "Show credential",
          },
        ],
      },


    ],
  }

];

export default projectSections;
