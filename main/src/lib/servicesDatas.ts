const serviceDatas = [
  {
    title: "Transform Your Ideas into Stunning Websites",
    subTitle: "Web-App Development",
    description:
      "In the world of digital presence, a well-crafted website is essential to attract and engage customers. Our web development service brings your vision to life with modern designs and seamless functionality.",
    services: [
      { text: " Nice Bro haha 1-page responsive website", plan: "basic" },
      { text: " Nice Bro haha Basic UI/UX design", plan: "basic" },
      { text: " Nice Bro haha Contact form integration", plan: "basic" },
      { text: " Nice Bro haha 3-5 page responsive website", plan: "standard" },
      { text: " Nice Bro haha Customized UI/UX design", plan: "standard" },
      {
        text: " Nice Bro haha Contact form with advanced features",
        plan: "standard",
      },
      { text: " Nice Bro haha Social media integration", plan: "standard" },
      {
        text: " Nice Bro haha Fully customized multi-page website",
        plan: "premium",
      },
    ],
    duration: "4 weeks",
    type: "Web Development",
    note: "Responsive layouts for optimal user experience.",
  }, //done
  {
    title: "Crafting Intuitive Mobile Apps for Your Business",
    subTitle: "Mobile App Development",
    description:
      "Capture the mobile market with our top-notch mobile app development service. We design and build apps that cater to user needs while aligning with your business goals.",
    services: [
      {
        text: " Nice Bro haha UI/UX design for a user-friendly experience",
        plan: "basic",
      },
      {
        text: " Nice Bro haha Development of core app features",
        plan: "basic",
      },
      { text: " Nice Bro haha Basic testing and bug fixing", plan: "basic" },
      {
        text: " Nice Bro haha Advanced UI/UX design with animations",
        plan: "standard",
      },
      {
        text: " Nice Bro haha Full app development with extended features",
        plan: "standard",
      },
      {
        text: " Nice Bro haha Thorough testing and quality assurance",
        plan: "standard",
      },
      {
        text: " Nice Bro haha Fully customized app design and functionality",
        plan: "premium",
      },
    ],
    duration: "6 weeks",
    type: "Mobile Development",
    note: "Cross-platform compatibility for wider reach.",
  }, //done
  {
    title: "Enhance User Interaction with Elegant UI/UX Designs",
    subTitle: "UI/UX Design",
    description:
      "User experience is paramount. Our UI/UX design service focuses on creating interfaces that not only look captivating but also provide seamless user journeys, resulting in happy and loyal users.",
    services: [
      {
        text: " Nice Bro haha Advanced user-centered design concepts",
        plan: "standard",
      },
      {
        text: " Nice Bro haha Customized UI components and animations",
        plan: "standard",
      },
      {
        text: " Nice Bro haha User journey mapping and optimization",
        plan: "standard",
      },
      {
        text: " Nice Bro haha Comprehensive user research and analysis",
        plan: "premium",
      },
      {
        text: " Nice Bro haha Personalized UI/UX strategy for target audience",
        plan: "premium",
      },
      {
        text: " Nice Bro haha Usability testing and feedback implementation",
        plan: "premium",
      },
      {
        text: " Nice Bro haha Continuous design refinement based on data",
        plan: "premium",
      },
    ],
    duration: "3 weeks",
    type: "UI/UX Design",
    note: "Iterative design process for optimal results.",
  }, //done
  {
    title: "Launching Your Online Store with E-Commerce Expertise",
    subTitle: "E-commerce Platform Development",
    description:
      "Embark on your e-commerce journey with confidence. Our e-commerce solution service covers everything from product showcasing to secure payment gateways, empowering your business to thrive online.",
    services: [
      {
        text: " Nice Bro haha Product catalog setup and management",
        plan: "basic",
      },
      { text: " Nice Bro haha Basic e-commerce website design", plan: "basic" },
      {
        text: " Nice Bro haha Integration of essential payment methods",
        plan: "basic",
      },
      {
        text: " Nice Bro haha Advanced product categorization and search",
        plan: "standard",
      },
      {
        text: " Nice Bro haha Customized e-commerce platform design",
        plan: "standard",
      },
      {
        text: " Nice Bro haha Integration of multiple payment gateways",
        plan: "standard",
      },
      {
        text: " Nice Bro haha Comprehensive product recommendation system",
        plan: "premium",
      },
    ],
    duration: "5 weeks",
    type: "E-commerce Platform Development",
    note: "Scalable architecture for future growth.",
  }, //done
  {
    title: "AI Development for Intelligent Solutions",
    subTitle: "AI Development",
    description:
      "Leverage the power of AI to create smart applications that automate processes, analyze data, and make informed decisions. Our AI development service transforms your ideas into intelligent solutions.",
    services: [
      {
        text: " Nice Bro haha Consultation and AI solution design",
        plan: "basic",
      },
      {
        text: " Nice Bro haha Basic AI algorithm implementation",
        plan: "basic",
      },
      { text: " Nice Bro haha Data preprocessing and training", plan: "basic" },
      {
        text: " Nice Bro haha Advanced AI model architecture design",
        plan: "standard",
      },
      {
        text: " Nice Bro haha Custom AI solution development",
        plan: "standard",
      },
      { text: " Nice Bro haha Fine-tuning and optimization", plan: "standard" },
      {
        text: " Nice Bro haha Comprehensive AI strategy and implementation",
        plan: "premium",
      },
    ],
    duration: "8 weeks",
    type: "AI Development",
    note: "Custom AI algorithms tailored to your needs.",
  }, //done
  {
    title: "Web Scraping Services for Data Retrieval",
    subTitle: "Web Scraping",
    description:
      "Access valuable data from websites efficiently with our web scraping services. We gather and deliver the information you need, empowering your business with actionable insights.",
    services: [
      {
        text: " Nice Bro haha Target website analysis and scraping strategy",
        plan: "basic",
      },
      {
        text: " Nice Bro haha Basic data extraction and formatting",
        plan: "basic",
      },
      {
        text: " Nice Bro haha Data delivery in a usable format",
        plan: "basic",
      },
      {
        text: " Nice Bro haha Advanced web scraping techniques",
        plan: "standard",
      },
      {
        text: " Nice Bro haha Personalized data aggregation and correlation",
        plan: "premium",
      },
      {
        text: " Nice Bro haha Real-time data retrieval and updates",
        plan: "premium",
      },
      {
        text: " Nice Bro haha Automated data delivery pipelines",
        plan: "premium",
      },
    ],
    duration: "2 weeks",
    type: "Web Scraping",
    note: "Ethical and efficient data extraction practices.",
  }, //done
  {
    title: "Building Machine Learning Models for Predictive Insights",
    subTitle: "Machine Learning Models",
    description:
      "Make sense of your data with machine learning models. Our service develops predictive models that uncover patterns, trends, and insights, enabling you to make informed decisions.",
    services: [
      {
        text: " Nice Bro haha Data analysis and feature selection",
        plan: "basic",
      },
      {
        text: " Nice Bro haha Basic machine learning algorithm implementation",
        plan: "basic",
      },
      {
        text: " Nice Bro haha Model training and initial performance evaluation",
        plan: "basic",
      },
      {
        text: " Nice Bro haha Advanced machine learning model design",
        plan: "standard",
      },
      {
        text: " Nice Bro haha Customized model training and hyperparameter tuning",
        plan: "standard",
      },
      {
        text: " Nice Bro haha Comprehensive model validation and testing",
        plan: "standard",
      },
      {
        text: " Nice Bro haha End-to-end machine learning solution",
        plan: "premium",
      },
    ],
    duration: "6 weeks",
    type: "AI Development",
    note: "Data preprocessing, model training, and validation.",
  },
];

export default serviceDatas;
