const serviceDatas = [
  {
    title: "Transform Your Ideas into Stunning Websites",
    subTitle: "Web-App Development",
    description:
      "In the world of digital presence, a well-crafted website is essential to attract and engage customers. Our web development service brings your vision to life with modern designs and seamless functionality.",
    services: [
      { text: "Create an impressive 1-page responsive website", plan: "basic" },
      {
        text: "Craft a fundamental UI/UX design for a solid foundation",
        plan: "basic",
      },
      {
        text: "Integrate a user-friendly contact form seamlessly",
        plan: "basic",
      },
      {
        text: "Elevate your online presence with a comprehensive 3-5 page responsive website",
        plan: "standard",
      },
      {
        text: "Define your brand with a tailor-made UI/UX design",
        plan: "standard",
      },
      {
        text: "Enhance user interaction with advanced contact form features",
        plan: "standard",
      },
      {
        text: "Extend your reach through seamless social media integration",
        plan: "standard",
      },
      {
        text: "Unleash your vision with a fully customized multi-page website",
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
      "Seize the mobile market with our cutting-edge mobile app development service. We conceive and construct apps that cater to user requirements while aligning seamlessly with your business objectives.",
    services: [
      {
        text: "Craft an intuitive UI/UX design for an exceptional user experience",
        plan: "basic",
      },
      {
        text: "Develop core app features with precision and expertise",
        plan: "basic",
      },
      {
        text: "Conduct basic testing and meticulous bug fixing",
        plan: "basic",
      },
      {
        text: "Create advanced UI/UX designs with captivating animations",
        plan: "standard",
      },
      {
        text: "Undertake full-scale app development with extended features",
        plan: "standard",
      },
      {
        text: "Perform comprehensive testing and ensure top-tier quality assurance",
        plan: "standard",
      },
      {
        text: "Design and develop a fully customized app with tailored functionality",
        plan: "premium",
      },
    ],
    duration: "6 weeks",
    type: "Mobile Development",
    note: "Cross-platform compatibility for broader reach.",
  },
  {
    title: "Enhance User Interaction with Elegant UI/UX Designs",
    subTitle: "UI/UX Design",
    description:
      "User experience takes precedence in all that we do. Our UI/UX design service is dedicated to crafting interfaces that not only captivate the eye but also guide users through seamless journeys, resulting in delighted and loyal users.",
    services: [
      {
        text: "Explore advanced user-centered design concepts to elevate your interface",
        plan: "standard",
      },
      {
        text: "Tailor UI components and animations to match your unique brand identity",
        plan: "standard",
      },
      {
        text: "Map and optimize user journeys for a streamlined experience",
        plan: "standard",
      },
      {
        text: "Conduct comprehensive user research and in-depth analysis for actionable insights",
        plan: "premium",
      },
      {
        text: "Devise a personalized UI/UX strategy tailored to your target audience",
        plan: "premium",
      },
      {
        text: "Implement usability testing and incorporate valuable feedback into the design",
        plan: "premium",
      },
      {
        text: "Refine designs continuously based on data-driven insights for lasting excellence",
        plan: "premium",
      },
    ],
    duration: "3 weeks",
    type: "UI/UX Design",
    note: "Embrace an iterative design process for optimal and sustainable outcomes.",
  },
  {
    title: "Launching Your Online Store with E-Commerce Expertise",
    subTitle: "E-commerce Platform Development",
    description:
      "Embark on your e-commerce journey with confidence. Our e-commerce solution service covers everything from setting up and managing your product catalog to implementing secure payment gateways, empowering your business to thrive in the online marketplace.",
    services: [
      {
        text: "Establish and manage your product catalog with ease and precision",
        plan: "basic",
      },
      {
        text: "Design a basic e-commerce website that aligns with your brand",
        plan: "basic",
      },
      {
        text: "Integrate essential payment methods for seamless transactions",
        plan: "basic",
      },
      {
        text: "Implement advanced product categorization and search functionality",
        plan: "standard",
      },
      {
        text: "Craft a customized e-commerce platform design tailored to your brand's identity",
        plan: "standard",
      },
      {
        text: "Incorporate multiple payment gateways to offer flexibility to your customers",
        plan: "standard",
      },
      {
        text: "Create a comprehensive product recommendation system to enhance user experience",
        plan: "premium",
      },
    ],
    duration: "5 weeks",
    type: "Web Development",
    note: "Build on a scalable architecture to support future growth and expansion.",
  },
  {
    title: "AI Development for Intelligent Solutions",
    subTitle: "AI Development",
    description:
      "Harness the potential of AI to craft intelligent applications that streamline processes, analyze data, and make well-informed decisions. Our AI development service translates your concepts into intelligent solutions.",
    services: [
      {
        text: "Offering consultation and designing AI solutions that suit your needs",
        plan: "basic",
      },
      {
        text: "Implementing basic AI algorithms to kickstart your project",
        plan: "basic",
      },
      {
        text: "Handling data preprocessing and training to prepare your AI models",
        plan: "basic",
      },
      {
        text: "Designing advanced AI model architectures for robust performance",
        plan: "standard",
      },
      {
        text: "Developing custom AI solutions tailored to your unique requirements",
        plan: "standard",
      },
      {
        text: "Fine-tuning and optimizing AI models for optimal results",
        plan: "standard",
      },
      {
        text: "Crafting a comprehensive AI strategy and implementing it effectively",
        plan: "premium",
      },
    ],
    duration: "8 weeks",
    type: "AI Development",
    note: "Crafting custom AI algorithms to precisely meet your specific needs.",
  },
  {
    title: "Web Scraping Services for Data Retrieval",
    subTitle: "Web Scraping",
    description:
      "Efficiently access valuable data from websites with our web scraping services. We specialize in gathering and delivering the information you require, providing your business with actionable insights.",
    services: [
      {
        text: "Conduct in-depth analysis of target websites and develop scraping strategies",
        plan: "basic",
      },
      {
        text: "Perform basic data extraction and format it for usability",
        plan: "basic",
      },
      {
        text: "Deliver data in a user-friendly and actionable format",
        plan: "basic",
      },
      {
        text: "Utilize advanced web scraping techniques for comprehensive data retrieval",
        plan: "standard",
      },
      {
        text: "Aggregate and correlate data tailored to your specific needs",
        plan: "premium",
      },
      {
        text: "Ensure real-time data retrieval and updates to keep you informed",
        plan: "premium",
      },
      {
        text: "Establish automated data delivery pipelines for seamless information flow",
        plan: "premium",
      },
    ],
    duration: "2 weeks",
    type: "Web Development",
    note: "Commitment to ethical and efficient data extraction practices.",
  },
  {
    title: "Building Machine Learning Models for Predictive Insights",
    subTitle: "Machine Learning Models",
    description:
      "Unravel the potential within your data using machine learning models. Our service specializes in crafting predictive models that unveil hidden patterns, trends, and insights, equipping you with the knowledge to make informed decisions.",
    services: [
      {
        text: "Conduct data analysis and select relevant features for model development",
        plan: "basic",
      },
      {
        text: "Implement basic machine learning algorithms to kickstart your project",
        plan: "basic",
      },
      {
        text: "Train models and perform initial performance evaluations for insights",
        plan: "basic",
      },
      {
        text: "Design advanced machine learning models for more accurate predictions",
        plan: "standard",
      },
      {
        text: "Tailor model training and fine-tune hyperparameters to your unique needs",
        plan: "standard",
      },
      {
        text: "Thoroughly validate and test models for robust performance and reliability",
        plan: "standard",
      },
      {
        text: "Provide end-to-end machine learning solutions to meet your goals",
        plan: "premium",
      },
    ],
    duration: "6 weeks",
    type: "AI Development",
    note: "Comprehensive data preprocessing, model training, and validation.",
  },
];

export default serviceDatas;
