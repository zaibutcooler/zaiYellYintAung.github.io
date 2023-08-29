const serviceDatas = [
  {
    title: "Transform Your Ideas into Stunning Websites",
    subTitle: "Web-App Development",
    description:
      "In the world of digital presence, a well-crafted website is essential to attract and engage customers. Our web development service brings your vision to life with modern designs and seamless functionality.",
    services: [
      { text: "1-page responsive website", plan: "basic" },
      { text: "Basic UI/UX design", plan: "basic" },
      { text: "Contact form integration", plan: "basic" },
      { text: "3-5 page responsive website", plan: "standard" },
      { text: "Customized UI/UX design", plan: "standard" },
      { text: "Contact form with advanced features", plan: "standard" },
      { text: "Social media integration", plan: "standard" },
      { text: "Fully customized multi-page website", plan: "premium" },
      { text: "High-end UI/UX design with animations", plan: "premium" },
      {
        text: "Advanced contact forms and interactive elements",
        plan: "premium",
      },
      { text: "E-commerce integration", plan: "premium" },
      { text: "Content management system (CMS)", plan: "premium" },
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
      { text: "UI/UX design for a user-friendly experience", plan: "basic" },
      { text: "Development of core app features", plan: "basic" },
      { text: "Basic testing and bug fixing", plan: "basic" },
      { text: "Advanced UI/UX design with animations", plan: "standard" },
      { text: "Full app development with extended features", plan: "standard" },
      { text: "Thorough testing and quality assurance", plan: "standard" },
      {
        text: "Fully customized app design and functionality",
        plan: "premium",
      },
      { text: "Integration of advanced app features", plan: "premium" },
      {
        text: "Comprehensive testing, performance optimization",
        plan: "premium",
      },
      { text: "Deployment assistance and support", plan: "premium" },
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
      { text: "Wireframing and prototyping", plan: "basic" },
      { text: "Creation of visually appealing UI elements", plan: "basic" },
      { text: "Basic user flow optimization", plan: "basic" },
      { text: "Advanced user-centered design concepts", plan: "standard" },
      { text: "Customized UI components and animations", plan: "standard" },
      { text: "User journey mapping and optimization", plan: "standard" },
      { text: "Comprehensive user research and analysis", plan: "premium" },
      {
        text: "Personalized UI/UX strategy for target audience",
        plan: "premium",
      },
      {
        text: "Usability testing and feedback implementation",
        plan: "premium",
      },
      { text: "Continuous design refinement based on data", plan: "premium" },
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
      { text: "Product catalog setup and management", plan: "basic" },
      { text: "Basic e-commerce website design", plan: "basic" },
      { text: "Integration of essential payment methods", plan: "basic" },
      { text: "Advanced product categorization and search", plan: "standard" },
      { text: "Customized e-commerce platform design", plan: "standard" },
      { text: "Integration of multiple payment gateways", plan: "standard" },
      { text: "Comprehensive product recommendation system", plan: "premium" },
      { text: "Personalized shopping experience for users", plan: "premium" },
      { text: "Advanced inventory management", plan: "premium" },
      { text: "AI-powered customer behavior analysis", plan: "premium" },
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
      { text: "Consultation and AI solution design", plan: "basic" },
      { text: "Basic AI algorithm implementation", plan: "basic" },
      { text: "Data preprocessing and training", plan: "basic" },
      { text: "Advanced AI model architecture design", plan: "standard" },
      { text: "Custom AI solution development", plan: "standard" },
      { text: "Fine-tuning and optimization", plan: "standard" },
      { text: "Comprehensive AI strategy and implementation", plan: "premium" },
      { text: "Tailored AI algorithms for complex tasks", plan: "premium" },
      { text: "Advanced data analysis and insights", plan: "premium" },
      { text: "AI model monitoring and adaptation", plan: "premium" },
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
      { text: "Target website analysis and scraping strategy", plan: "basic" },
      { text: "Basic data extraction and formatting", plan: "basic" },
      { text: "Data delivery in a usable format", plan: "basic" },
      { text: "Advanced web scraping techniques", plan: "standard" },
      { text: "Customized data parsing and cleaning", plan: "standard" },
      { text: "Data transformation and integration", plan: "standard" },
      { text: "Comprehensive web scraping solution", plan: "premium" },
      {
        text: "Personalized data aggregation and correlation",
        plan: "premium",
      },
      { text: "Real-time data retrieval and updates", plan: "premium" },
      { text: "Automated data delivery pipelines", plan: "premium" },
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
      { text: "Data analysis and feature selection", plan: "basic" },
      {
        text: "Basic machine learning algorithm implementation",
        plan: "basic",
      },
      {
        text: "Model training and initial performance evaluation",
        plan: "basic",
      },
      { text: "Advanced machine learning model design", plan: "standard" },
      {
        text: "Customized model training and hyperparameter tuning",
        plan: "standard",
      },
      { text: "Comprehensive model validation and testing", plan: "standard" },
      { text: "End-to-end machine learning solution", plan: "premium" },
      { text: "Tailored models for complex prediction tasks", plan: "premium" },
      { text: "Real-world model deployment and monitoring", plan: "premium" },
      { text: "Continuous model improvement and adaptation", plan: "premium" },
    ],
    duration: "6 weeks",
    type: "AI Development",
    note: "Data preprocessing, model training, and validation.",
  },
];

export default serviceDatas;
