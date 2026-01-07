const logotext = "MUHAMMAD AHMER";
const meta = {
    title: "Muhammad Ahmer - Petroleum & Gas Engineer",
    description: "Dynamic Petroleum & Gas Engineer specializing in EOR, Reservoir Simulation, and Offshore Operations. IOSH Certified with hands-on experience in SSGC, quality control, and current role in offshore project engineering at Amcorp.",
    keywords: "Petroleum Engineer, Gas Engineer, EOR, Reservoir Simulation, Offshore Operations, IOSH Certified, SSGC, Project Engineer, Nanofluid Research",
};

const introdata = {
    title: "I'm Muhammad Ahmer",
    animated: {
        first: "Petroleum & Gas Engineer",
        second: "EOR & Reservoir Simulation Expert",
        third: "IOSH Managing Safely Certified",
        fourth: "Offshore Project Engineer",
        fifth: "Nanofluid Researcher",
        sixth: "Quality Control Specialist",
    },
    description: "Results-driven Petroleum Engineer with B.E. degree (CGPA 3.5/4.0) and diverse experience spanning offshore operations, gas distribution systems, quality control, and management roles. Proven expertise in Enhanced Oil Recovery, reservoir simulation, and nanofluid research. Committed to operational excellence and safety compliance in energy sector.",
    your_img_url: "https://scontent.fkhi22-1.fna.fbcdn.net/v/t39.30808-6/492345370_2528892244119703_4097270085710169491_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHMaJyAfSkVz-63NApVxxYnMK9PjvHq4Skwr0-O8erhKSb_FCEK9_JS3zNId9ZvPWpFNow__B7I9CTSPeqlHOpt&_nc_ohc=LxdvrekM2tEQ7kNvwGN-R_5&_nc_oc=AdlUeEV780G_cwVrid-_qUzJapuL_TlkaoM15fq2VUG3pHoXFOLmWxiAgg8y_cOnGmk&_nc_zt=23&_nc_ht=scontent.fkhi22-1.fna&_nc_gid=cFcnA1lLIddSalfEz3on2Q&oh=00_AfrcmeuG_C3IA54MAPJje3Dc6WZN-erlKJNrYRA7hvDKAw&oe=69640781",
    call_to_action: "Seeking challenging roles in Petroleum Engineering, EOR Projects, or Offshore Operations",
};

const dataabout = {
    title: "Professional Profile",
    aboutme: "Bachelor of Engineering in Petroleum & Gas Technology from Dawood University (2024) with CGPA 3.5/4.0. Currently serving as Project Engineer at Amcorp Engineering, overseeing offshore construction operations for Dolphin X1 Well. Previously held management roles at Universal Motors and quality control position at Alson's Auto Parts. Completed internship at SSGC, gaining practical gas distribution experience. Conducted significant research on Al₂O₃-PAM nanofluids for Enhanced Oil Recovery. IOSH Managing Safely certified professional with strong commitment to HSE standards.",
    achievements: [
        "Graduated with CGPA 3.5/4.0 in Petroleum Engineering",
        "Published research on nanofluid applications in EOR",
        "Successfully completed offshore project assignments",
        "IOSH Managing Safely certification holder",
        "Multiple industry internships completed"
    ]
};

const worktimeline = [
    {
        jobtitle: "Project Engineer (Offshore Operations)",
        where: "Amcorp Engineering and Construction Pvt Ltd",
        date: "November 2025 - Present",
        location: "Sirani Block, Sindh (Offshore Project)",
        description: "Managing integrated construction and barge operations for Dolphin X1 Well. Responsibilities include reviewing earthwork specifications, ensuring regulatory compliance, monitoring safety protocols, coordinating with contractors, and maintaining project documentation for offshore drilling operations.",
        achievements: [
            "Ensured 100% compliance with offshore safety regulations",
            "Coordinated multi-disciplinary contractor teams",
            "Maintained detailed project progress reports"
        ]
    },
    {
        jobtitle: "Management Officer",
        where: "Universal Motors Ltd",
        date: "July 2025 - October 2025",
        location: "Karachi, Pakistan",
        description: "Supported daily management operations including inter-departmental coordination, process optimization, and administrative functions. Assisted in workflow management and operational efficiency improvements.",
        achievements: [
            "Improved inter-department communication efficiency by 25%",
            "Assisted in streamlining operational processes"
        ]
    },
    {
        jobtitle: "Management Trainee Officer (Quality Control)",
        where: "Alson's Auto Parts (Pvt) Limited",
        date: "November 2024 - May 2025",
        location: "Karachi, Pakistan",
        description: "Responsible for quality assurance in plastic manufacturing department. Monitored production processes, conducted quality inspections, identified defects, and implemented corrective actions to maintain product standards.",
        achievements: [
            "Reduced defect rate by 15% through improved monitoring",
            "Implemented quality check protocols",
            "Trained junior staff on quality standards"
        ]
    },
    {
        jobtitle: "Engineering Intern",
        where: "Sui Southern Gas Company Limited (SSGC)",
        date: "September 2023 - October 2023",
        location: "Karachi, Pakistan",
        description: "Gained comprehensive exposure to natural gas distribution systems, pipeline operations, safety protocols, and regulatory compliance. Assisted in system optimization projects and safety audits.",
        achievements: [
            "Participated in gas flow optimization project",
            "Assisted in safety compliance audits",
            "Learned industry-standard operational protocols"
        ]
    }
];

const education = [
    {
        degree: "Bachelor of Engineering in Petroleum & Gas Technology",
        institution: "Dawood University of Engineering & Technology",
        period: "December 2020 - July 2024",
        cgpa: "CGPA: 3.5/4.0 (First Class)",
        specialization: "Petroleum Engineering with focus on EOR and Reservoir Management",
        project: {
            title: "Investigation of Nanofluid using Aluminium Oxide (Al₂O₃) with Polyacrylamide (PAM) for Enhanced Oil Recovery",
            description: "Comprehensive research involving experimental analysis of nanofluid properties, displacement efficiency testing, and performance modeling for improved oil recovery applications.",
            outcomes: [
                "Demonstrated 18-22% improvement in oil displacement efficiency",
                "Developed cost-effective nanofluid formulation",
                "Presented findings to academic and industry panels"
            ]
        },
        relevant_courses: [
            "Reservoir Engineering",
            "Enhanced Oil Recovery",
            "Drilling Technology",
            "Natural Gas Engineering",
            "Petroleum Geology",
            "Health, Safety & Environment"
        ]
    }
];

const skills = [
    // Core Petroleum Engineering
    { name: "Enhanced Oil Recovery (EOR)", value: 92, category: "core" },
    { name: "Reservoir Simulation", value: 90, category: "core" },
    { name: "Nanofluid Research & Application", value: 88, category: "research" },
    { name: "Drilling Operations", value: 85, category: "operations" },
    { name: "Production Optimization", value: 87, category: "operations" },
    { name: "Natural Gas Processing", value: 86, category: "processing" },
    
    // Offshore & Field Operations
    { name: "Offshore Project Management", value: 95, category: "operations" },
    { name: "Pipeline Operations", value: 83, category: "operations" },
    { name: "Well Completion", value: 82, category: "operations" },
    
    // Safety & Compliance
    { name: "HSE Management", value: 91, category: "safety" },
    { name: "IOSH Safety Standards", value: 90, category: "safety" },
    { name: "Risk Assessment", value: 88, category: "safety" },
    { name: "Process Safety", value: 87, category: "safety" },
    
    // Quality & Management
    { name: "Quality Control Systems", value: 89, category: "management" },
    { name: "Project Coordination", value: 85, category: "management" },
    { name: "Operational Management", value: 84, category: "management" },
    
    // Technical Knowledge
    { name: "Petroleum Geology", value: 83, category: "technical" },
    { name: "Gas Distribution Systems", value: 87, category: "technical" },
    { name: "Separation Processes", value: 84, category: "technical" },
    { name: "Pipeline Integrity", value: 82, category: "technical" },
    
    // Software & Tools
    { name: "Microsoft Office Suite", value: 95, category: "software" },
    { name: "Technical Documentation", value: 90, category: "software" },
    { name: "Data Analysis", value: 88, category: "software" },
];

const services = [
    {
        icon: "🛢️",
        title: "EOR Consultation & Implementation",
        description: "Expert guidance on Enhanced Oil Recovery techniques including chemical, thermal, and nanofluid applications. From feasibility studies to implementation strategies.",
        tags: ["EOR", "Reservoir", "Consultation"]
    },
    {
        icon: "⚓",
        title: "Offshore Project Engineering",
        description: "Comprehensive offshore operation management including construction supervision, safety compliance, contractor coordination, and project documentation.",
        tags: ["Offshore", "Project Management", "Safety"]
    },
    {
        icon: "🛡️",
        title: "HSE Compliance & IOSH Implementation",
        description: "IOSH-certified safety management services including risk assessments, safety audits, compliance monitoring, and HSE system implementation.",
        tags: ["HSE", "IOSH", "Safety"]
    },
    {
        icon: "🔬",
        title: "Nanofluid Research for EOR",
        description: "Specialized research and development services for nanofluid applications in oil recovery, including formulation, testing, and performance optimization.",
        tags: ["Research", "Nanofluid", "Innovation"]
    },
    {
        icon: "📊",
        title: "Reservoir Analysis & Simulation",
        description: "Advanced reservoir characterization, simulation modeling, production forecasting, and optimization strategies for maximum recovery.",
        tags: ["Reservoir", "Simulation", "Analysis"]
    },
    {
        icon: "🏭",
        title: "Gas Distribution System Optimization",
        description: "Optimization of natural gas distribution networks, pipeline efficiency improvements, safety enhancements, and regulatory compliance.",
        tags: ["Gas", "Distribution", "Optimization"]
    },
    {
        icon: "✅",
        title: "Quality Control Systems",
        description: "Development and implementation of quality control protocols, defect analysis, process improvement, and quality assurance systems.",
        tags: ["Quality", "Control", "Process"]
    },
    {
        icon: "📋",
        title: "Technical Documentation & Reporting",
        description: "Professional technical writing including research papers, project reports, compliance documentation, and operational manuals.",
        tags: ["Documentation", "Reporting", "Technical"]
    },
];

const certifications = [
    {
        name: "IOSH Managing Safely",
        issuer: "Institution of Occupational Safety and Health",
        date: "2024",
        credential_id: "MS-2024-001",
        validity: "Lifetime"
    },
    {
        name: "Microsoft Office Specialist",
        issuer: "Microsoft Corporation",
        date: "2023",
        credential_id: "MOS-2023-001",
        validity: "Lifetime"
    }
];

const projects = [
    {
        title: "Dolphin X1 Offshore Construction",
        type: "Professional Project",
        period: "Nov 2025 - Present",
        description: "Offshore construction and barge operations management for oil well development",
        role: "Project Engineer",
        technologies: ["Offshore Operations", "Safety Management", "Project Coordination"]
    },
    {
        title: "Al₂O₃-PAM Nanofluid EOR Research",
        type: "Academic Research",
        period: "Jan 2024 - Jun 2024",
        description: "Experimental investigation of nanofluid efficiency in enhanced oil recovery",
        role: "Lead Researcher",
        technologies: ["Nanofluids", "EOR", "Laboratory Analysis"]
    },
    {
        title: "SSGC Gas Distribution Optimization",
        type: "Internship Project",
        period: "Sep 2023 - Oct 2023",
        description: "Analysis and optimization suggestions for gas distribution network",
        role: "Engineering Intern",
        technologies: ["Gas Distribution", "System Analysis", "Safety Protocols"]
    }
];

const contactConfig = {
    YOUR_EMAIL: "petroleumengineer.ahmer@gmail.com",
    YOUR_FONE: "+92 334 0394856  , +92 370 9968447 , +92 348 2418379",
    YOUR_ALT_PHONE: "+92 348 2418379",
    YOUR_ADDRESS: "House No C#72, Mehmoodabad No#2, Karachi, Pakistan",
    description: "Open to petroleum engineering opportunities, consulting projects, research collaborations, and offshore operations roles. Available for interviews and technical discussions.",
    AVAILABILITY: "Immediately Available",
    YOUR_SERVICE_ID: "service_typk4ap",
    YOUR_TEMPLATE_ID: "template_6wmko2g",
    YOUR_USER_ID: "yut-FZq_0rW77IMEI",
};

const socialprofils = {
    linkedin: {
        url: "https://www.linkedin.com/in/muhammad-ahmer-215351325/",
        label: "LinkedIn Profile"
    },
    facebook: {
        url: "https://www.facebook.com/ahmer.rauf.5",
        label: "Facebook Profile"
    },
    portfolio: {
        url: "https://ahmer-portfolio-master.onrender.com/",
        label: "Online Portfolio"
    },
    email: {
        url: "mailto:petroleumengineer.ahmer@gmail.com",
        label: "Professional Email"
    }
};

const availability = {
    status: "Available",
    notice_period: "Immediate",
    employment_type: ["Full-time", "Contract", "Consultancy"],
    preferred_locations: ["Karachi", "Anywhere in Pakistan", "International"],
    salary_expectations: "Negotiable based on role and responsibilities",
    visa_status: "Pakistani National"
};

const languages = [
    { language: "English", proficiency: "Professional Working Proficiency" },
    { language: "Urdu", proficiency: "Native Proficiency" },
    { language: "Sindhi", proficiency: "Native Proficiency" }
];

export {
    logotext,
    meta,
    introdata,
    dataabout,
    worktimeline,
    education,
    skills,
    services,
    certifications,
    projects,
    contactConfig,
    socialprofils,
    availability,
    languages
};