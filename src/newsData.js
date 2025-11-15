const newsData = [
  {
    id: 1,
    title: "Revolutionary AI Technology Transforms Healthcare Industry",
    description:
      "New artificial intelligence system helps doctors diagnose diseases with unprecedented accuracy.",
    fullText:
      "A groundbreaking artificial intelligence system has been developed that is revolutionizing the healthcare industry. The technology, which uses advanced machine learning algorithms, can analyze medical images and patient data to assist doctors in diagnosing diseases with remarkable accuracy. Early trials have shown a 95% success rate in identifying various conditions, including cancers, cardiovascular diseases, and neurological disorders. Medical professionals are calling this development a game-changer that will save countless lives and reduce healthcare costs globally.",
    imageUrl:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    date: "2025-11-14",
  },
  {
    id: 2,
    title: "Global Climate Summit Reaches Historic Agreement",
    description:
      "World leaders commit to ambitious carbon reduction targets in landmark environmental deal.",
    fullText:
      "In a historic moment for environmental policy, world leaders from over 150 countries have reached a comprehensive agreement on climate action. The summit, held in Geneva, resulted in binding commitments to reduce global carbon emissions by 50% by 2035. The agreement includes substantial financial support for developing nations to transition to renewable energy sources, strict regulations on industrial emissions, and innovative carbon capture technologies. Environmental groups have praised the deal as a crucial step in combating climate change, though some activists argue that more aggressive action is still needed.",
    imageUrl:
      "https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg",
    date: "2025-11-13",
  },
  {
    id: 3,
    title: "Tech Giant Unveils Next-Generation Smartphone",
    description:
      "Latest device features revolutionary battery technology and holographic display capabilities.",
    fullText:
      "A leading technology company has unveiled its most advanced smartphone to date, featuring innovations that could reshape the mobile industry. The device boasts a revolutionary solid-state battery that provides five days of continuous use and charges to full capacity in just 15 minutes. Additionally, the phone includes a holographic display system that projects 3D images without the need for special glasses. The device also features enhanced AI capabilities, advanced camera systems with 200-megapixel sensors, and satellite connectivity for use in remote areas. Industry analysts predict the new features will set new standards for mobile technology.",
    imageUrl:
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
    date: "2025-11-12",
  },
  {
    id: 4,
    title: "Archaeological Discovery Rewrites Ancient History",
    description:
      "Researchers uncover lost civilization in Amazon rainforest using advanced scanning technology.",
    fullText:
      "A team of archaeologists has made a stunning discovery in the Amazon rainforest that could fundamentally change our understanding of ancient civilizations. Using LIDAR scanning technology, researchers identified the remains of a sophisticated urban center covering over 1,000 square kilometers. The city, estimated to have been inhabited between 500 BCE and 1500 CE, features complex road networks, agricultural systems, and monumental architecture. Initial excavations have revealed advanced engineering techniques and artistic achievements previously unknown in the region. This discovery challenges previous assumptions about the density and complexity of pre-Columbian Amazonian societies.",
    imageUrl:
      "https://images.pexels.com/photos/1615776/pexels-photo-1615776.jpeg",
    date: "2025-11-11",
  },
  {
    id: 5,
    title: "Breakthrough in Renewable Energy Storage",
    description:
      "Scientists develop new battery technology that could solve renewable energy's biggest challenge.",

    fullText:
      "Scientists at a leading research institution have announced a major breakthrough in energy storage technology that could accelerate the global transition to renewable energy. The new battery system uses abundant, non-toxic materials and can store energy at a fraction of the cost of current lithium-ion batteries. With a storage capacity 10 times greater than existing technologies and a lifespan of over 30 years, this innovation addresses one of the primary obstacles to widespread adoption of solar and wind power. The technology is expected to be commercially available within two years and could dramatically reduce the cost of clean energy worldwide.",
    imageUrl:
      "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg",
    date: "2025-11-10",
  },
  {
    id: 6,
    title: "Space Agency Announces Plans for Lunar Base",
    description:
      "Ambitious project aims to establish permanent human presence on the Moon by 2030.",
    fullText:
      "A major space agency has revealed detailed plans for establishing the first permanent human base on the Moon. The Lunar Gateway project will begin construction in 2027, with the goal of housing up to 12 astronauts by 2030. The base will serve as a research facility, testing ground for Mars missions, and potential launching point for deeper space exploration. The project involves international collaboration and utilizes innovative technologies including 3D-printed habitats using lunar regolith, advanced life support systems, and nuclear power generation. This represents a significant milestone in humanity's expansion beyond Earth.",
    imageUrl:
      "https://images.pexels.com/photos/586056/pexels-photo-586056.jpeg",
    date: "2025-11-09",
  },
  {
    id: 7,
    title: "Medical Breakthrough Offers Hope for Alzheimer's Patients",
    description:
      "New drug shows remarkable results in clinical trials, potentially reversing cognitive decline.",
    fullText:
      "A pharmaceutical company has announced promising results from Phase 3 clinical trials of a new drug targeting Alzheimer's disease. The medication, which works by clearing harmful protein deposits in the brain and promoting neural regeneration, showed significant improvements in memory and cognitive function in 78% of trial participants. Some patients experienced what researchers describe as a reversal of disease progression, regaining abilities that had been lost. While more research is needed to understand long-term effects, this development represents one of the most significant advances in Alzheimer's treatment in decades and offers new hope to millions of patients and their families.",
    imageUrl:
      "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg",
    date: "2025-11-08",
  },
  {
    id: 8,
    title: "Major Cybersecurity Threat Averted by Global Coalition",
    description:
      "International cooperation prevents massive ransomware attack targeting critical infrastructure.",
    fullText:
      "A coordinated international effort successfully prevented what could have been the most devastating cyberattack in history. Intelligence agencies and cybersecurity firms worked together to identify and neutralize a sophisticated ransomware operation targeting power grids, water systems, and financial institutions across multiple continents. The operation, which took six months to track and dismantle, involved advanced artificial intelligence and zero-day exploits. Authorities arrested 47 individuals across 12 countries and seized servers containing the malware. This incident highlights both the growing threat of cyber warfare and the importance of international cooperation in digital security.",
    imageUrl:
      "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
    date: "2025-11-07",
  },
  {
    id: 9,
    title: "Revolutionary Transportation System Tests Successfully",
    description:
      "High-speed hyperloop completes first passenger journey, reaching speeds of 700 mph.",

    fullText:
      "The future of transportation took a significant step forward as a hyperloop system successfully completed its first passenger journey. The test route, spanning 50 miles between two major cities, saw the passenger pod reach speeds of 700 mph while maintaining smooth, comfortable conditions for passengers. The journey took just 10 minutes, compared to over an hour by conventional train. The hyperloop technology uses magnetic levitation and low-pressure tubes to achieve unprecedented speeds while consuming significantly less energy than traditional transportation methods. Commercial operations are expected to begin within three years, potentially revolutionizing intercity travel.",
    imageUrl:
      "https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg",
    date: "2025-11-06",
  },
  {
    id: 10,
    title: "Ocean Cleanup Project Exceeds All Expectations",
    description:
      "Innovative system removes millions of tons of plastic from Pacific Ocean.",
    fullText:
      "An ambitious ocean cleanup initiative has surpassed its goals, removing over 5 million tons of plastic waste from the Great Pacific Garbage Patch in just two years. The project employs a fleet of autonomous vessels equipped with advanced filtering systems that can distinguish between plastic waste and marine life. The collected plastic is being recycled into building materials and consumer products, creating a circular economy model. The project's success has inspired similar initiatives in other ocean regions and demonstrated that large-scale environmental restoration is achievable with the right technology and commitment.",
    imageUrl:
      "https://images.pexels.com/photos/5587919/pexels-photo-5587919.jpeg",
    date: "2025-11-05",
  },
  {
    id: 11,
    title: "Quantum Computer Achieves Unprecedented Computational Power",
    description:
      "New quantum system solves complex problems in seconds that would take classical computers millennia.",
    fullText:
      "Researchers have unveiled a quantum computer that represents a quantum leap in computational capability. The system, featuring 1,000 stable qubits, successfully solved optimization problems in mere seconds that would require the world's most powerful supercomputers thousands of years to complete. This breakthrough has immediate applications in drug discovery, financial modeling, climate prediction, and cryptography. The team overcame previous limitations in quantum coherence and error correction, bringing practical quantum computing significantly closer to reality. This achievement marks a pivotal moment in the evolution of computing technology.",
    imageUrl:
      "https://images.pexels.com/photos/4218883/pexels-photo-4218883.jpeg",
    date: "2025-11-04",
  },
  {
    id: 12,
    title: "Global Food Security Initiative Launches",
    description:
      "New agricultural technology promises to end hunger while reducing environmental impact.",
    fullText:
      "A comprehensive global initiative combining vertical farming, precision agriculture, and biotechnology has launched with the ambitious goal of eliminating food insecurity by 2035. The program integrates drought-resistant crop varieties, automated farming systems, and efficient water management to increase food production while reducing environmental impact. Early implementations in regions facing food scarcity have already shown yields increased by 400% compared to traditional farming methods. The initiative includes training programs for local farmers and creates sustainable economic opportunities in developing regions.",
    imageUrl:
      "https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg",
    date: "2025-11-03",
  },
  {
    id: 13,
    title: "Breakthrough in Nuclear Fusion Energy",
    description:
      "Scientists achieve sustained fusion reaction, paving way for unlimited clean energy.",

    fullText:
      "In a landmark achievement for clean energy, scientists have successfully maintained a stable nuclear fusion reaction for over 10 minutes, producing significantly more energy than was consumed. This breakthrough brings commercial fusion power substantially closer to reality. The reactor design uses advanced superconducting magnets and precise plasma control systems to maintain the extreme conditions necessary for fusion. Unlike nuclear fission, fusion produces no long-lived radioactive waste and uses abundant fuel sources. Experts predict that fusion power plants could begin supplying electricity to the grid within the next decade, providing a virtually limitless source of clean energy.",
    imageUrl:
      "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg",
    date: "2025-11-02",
  },
  {
    id: 14,
    title: "AI System Achieves Breakthrough in Language Understanding",
    description:
      "Advanced artificial intelligence demonstrates human-level comprehension and reasoning abilities.",
    fullText:
      "Researchers have developed an artificial intelligence system that demonstrates unprecedented language understanding and reasoning capabilities, approaching human-level performance on complex cognitive tasks. The system can engage in nuanced conversations, understand context and subtext, and even recognize and respond appropriately to emotional cues. Unlike previous AI models, this system shows genuine understanding rather than pattern matching, and can explain its reasoning process. This breakthrough has significant implications for education, healthcare, customer service, and many other fields. However, it also raises important questions about AI safety and ethics that society must address.",
    imageUrl:
      "https://images.pexels.com/photos/8438979/pexels-photo-8438979.jpeg",
    date: "2025-11-01",
  },
  {
    id: 15,
    title: "Revolutionary Gene Therapy Cures Inherited Disease",
    description:
      "One-time treatment successfully corrects genetic disorder in groundbreaking clinical trial.",
    fullText:
      "A revolutionary gene therapy has successfully cured a previously untreatable inherited disease in a groundbreaking clinical trial. The treatment uses CRISPR technology to correct the faulty gene responsible for the condition, providing what appears to be a permanent cure with a single treatment. All 50 trial participants showed complete resolution of symptoms within six months, with no adverse effects. This success opens the door for similar approaches to thousands of genetic diseases that currently have no cure. While the treatment is currently expensive, researchers are working on manufacturing methods that will make it more accessible worldwide.",
    imageUrl:
      "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg",
    date: "2025-10-31",
  },
  {
    id: 16,
    title: "Historic Peace Agreement Ends Decades of Conflict",
    description:
      "Diplomatic breakthrough brings hope for stability in long-troubled region.",
    fullText:
      "After months of intensive negotiations, former adversaries have signed a comprehensive peace agreement ending decades of armed conflict that claimed hundreds of thousands of lives. The agreement includes provisions for power-sharing, economic cooperation, refugee return, and transitional justice mechanisms. International peacekeepers will oversee implementation, while a substantial reconstruction fund will help rebuild infrastructure and communities devastated by war. Both sides have agreed to disarmament timelines and democratic reforms. World leaders have hailed the agreement as a model for conflict resolution and a beacon of hope for other regions struggling with prolonged violence.",
    imageUrl:
      "https://images.pexels.com/photos/8939965/pexels-photo-8939965.jpeg",
    date: "2025-10-30",
  },
  {
    id: 17,
    title: "Autonomous Vehicles Reduce Traffic Deaths by 80%",
    description:
      "Five-year study shows dramatic improvement in road safety from self-driving technology.",

    fullText:
      "A comprehensive five-year study has revealed that autonomous vehicles have reduced traffic fatalities by 80% in cities where they operate. The research, covering millions of miles of autonomous driving across multiple urban areas, demonstrates that self-driving technology virtually eliminates human error, the cause of over 90% of traditional traffic accidents. The vehicles' advanced sensors, artificial intelligence, and constant connectivity allow them to react faster and more predictably than human drivers. Traffic congestion has also decreased by 40%, and air quality has improved significantly. These findings are accelerating regulatory approval for wider autonomous vehicle deployment.",
    imageUrl:
      "https://images.pexels.com/photos/2882234/pexels-photo-2882234.jpeg",
    date: "2025-10-29",
  },
  {
    id: 18,
    title: "Scientists Discover Potential Life on Europa",
    description:
      "Probe detects complex organic molecules in subsurface ocean of Jupiter's moon.",
    fullText:
      "A space probe orbiting Jupiter's moon Europa has detected complex organic molecules and chemical signatures consistent with biological activity in samples from the moon's subsurface ocean. The discovery includes amino acids, lipids, and other compounds essential for life as we know it. Additionally, thermal vents on the ocean floor provide energy sources similar to those supporting life in Earth's deep oceans. While not definitive proof of life, these findings represent the most compelling evidence yet for extraterrestrial biology in our solar system. A follow-up mission with more advanced instruments is already being planned to investigate further.",
    imageUrl: "https://images.pexels.com/photos/87651/pexels-photo-87651.jpeg",
    date: "2025-10-28",
  },
  {
    id: 19,
    title: "Universal Basic Income Trial Shows Remarkable Success",
    description:
      "Three-year pilot program demonstrates significant improvements in health, education, and economic activity.",
    fullText:
      "The results of a large-scale universal basic income trial involving 100,000 participants have exceeded researchers' expectations. The three-year program provided monthly payments with no strings attached, and the outcomes challenge many preconceptions about such policies. Employment rates remained stable, with many participants using the financial security to pursue education, start businesses, or care for family members. Mental health improved significantly, domestic violence decreased, and children's educational outcomes showed marked improvement. Healthcare costs dropped due to better preventive care and reduced stress-related illnesses. These findings are influencing policy discussions worldwide about the future of social safety nets.",
    imageUrl:
      "https://images.pexels.com/photos/6457579/pexels-photo-6457579.jpeg",
    date: "2025-10-27",
  },
  {
    id: 20,
    title: "Coral Reefs Show Signs of Recovery",
    description:
      "Innovative restoration techniques bring damaged ecosystems back from the brink.",
    fullText:
      "Marine biologists are celebrating unexpected success in coral reef restoration efforts, with damaged reefs showing remarkable recovery using innovative techniques. The approach combines selective breeding of heat-resistant coral species, precise pH management, and protective structures that reduce stress on growing corals. Reefs that were declared functionally dead five years ago now show 70% coral cover and thriving fish populations. The techniques also involve community engagement, with local populations trained in reef management and provided alternative livelihoods to reduce fishing pressure. This success story offers hope for other endangered marine ecosystems and demonstrates that ecosystem restoration is achievable with proper resources and commitment.",
    imageUrl:
      "https://images.pexels.com/photos/3046637/pexels-photo-3046637.jpeg",
    date: "2025-10-26",
  },
  {
    id: 21,
    title:
      "Next-Generation Vaccine Technology Promises Universal Flu Protection",

    description:
      "Revolutionary approach could eliminate need for annual flu shots and prevent future pandemics.",
    fullText:
      "Scientists have developed a revolutionary vaccine technology that provides protection against all known strains of influenza and potentially other rapidly mutating viruses. Unlike traditional vaccines that target specific strains, this approach trains the immune system to recognize conserved viral features that remain constant across mutations. Clinical trials show 95% efficacy against all flu strains tested, including highly pathogenic varieties. The vaccine provides protection for at least five years with a single dose. This technology could also be adapted for other challenging pathogens and represents a significant advance in pandemic prevention capabilities.",
    imageUrl:
      "https://images.pexels.com/photos/3952241/pexels-photo-3952241.jpeg",
    date: "2025-10-25",
  },
  {
    id: 22,
    title: "Vertical Farming Revolution Transforms Urban Food Production",
    description:
      "Indoor agricultural facilities produce fresh food in the heart of cities with 95% less water.",
    fullText:
      "Vertical farming has evolved from experimental concept to mainstream food production method, with over 1,000 large-scale facilities now operating in major cities worldwide. These high-tech indoor farms use LED lighting, hydroponics, and automation to grow fresh produce year-round, regardless of weather or season. The systems use 95% less water than traditional farming, require no pesticides, and eliminate transportation costs and emissions by locating food production near consumers. A single vertical farm occupying a city block can produce as much food as a traditional 100-acre farm. This transformation is enhancing food security, creating urban jobs, and making fresh, healthy food accessible in communities that previously lacked it.",
    imageUrl:
      "https://images.pexels.com/photos/4505445/pexels-photo-4505445.jpeg",
    date: "2025-10-24",
  },
  {
    id: 23,
    title: "Breakthrough Material Makes Carbon Capture Economically Viable",
    description:
      "New compound efficiently removes CO2 from atmosphere at fraction of previous costs.",
    fullText:
      "Engineers have developed a revolutionary material that could make large-scale carbon capture economically feasible for the first time. The porous crystalline compound can selectively absorb carbon dioxide from the air with unprecedented efficiency and releases it for storage or utilization using minimal energy. The material is made from abundant, inexpensive elements and can be produced at scale. Pilot facilities have demonstrated the ability to capture CO2 at a cost of under $50 per ton, compared to $300-600 per ton for previous technologies. This breakthrough could accelerate efforts to reverse climate change by actively removing greenhouse gases from the atmosphere.",
    imageUrl:
      "https://images.pexels.com/photos/4090938/pexels-photo-4090938.jpeg",
    date: "2025-10-23",
  },
  {
    id: 24,
    title: "Advanced Brain-Computer Interface Restores Communication",
    description:
      "Paralyzed patients able to control devices and communicate using thought alone.",
    fullText:
      "A next-generation brain-computer interface has enabled paralyzed patients to control computers, robotic limbs, and communication devices using only their thoughts. The wireless system uses advanced neural sensors and machine learning to interpret brain signals with remarkable accuracy. Patients who had been unable to communicate for years can now type messages at 40 words per minute and control wheelchairs, robotic arms, and smart home devices. The technology also shows promise for treating neurological conditions like epilepsy and Parkinson's disease. While currently expensive and requiring surgery, researchers are working on less invasive versions that could benefit millions of people with disabilities.",
    imageUrl:
      "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    date: "2025-10-22",
  },
  {
    id: 25,

    title: "Renewable Energy Surpasses Fossil Fuels Globally",
    description:
      "Historic milestone as clean energy sources generate majority of world's electricity for first time.",
    fullText:
      "For the first time in modern history, renewable energy sources have generated more electricity globally than fossil fuels. Solar, wind, hydroelectric, and other clean energy technologies now account for 52% of worldwide electricity production. This historic milestone comes earlier than most experts predicted, driven by dramatic cost reductions in solar and wind technology, innovative energy storage solutions, and supportive government policies. The transition is accelerating, with renewables expected to reach 75% of generation within the next decade. This shift is reducing greenhouse gas emissions, improving air quality, and creating millions of jobs in the clean energy sector.",
    imageUrl:
      "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg",
    date: "2025-10-21",
  },

];

export default newsData;
