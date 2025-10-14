export const categories = [

  {
    "code": "AP", 
    "name": "Alignment Principles", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  },
  {
    "code": "AB",
    "name": "Rewarding A While Hoping for B",
    "pathology": "incentive misalignment",
    "color": "#FFF4E6",
    "description": "Cases where systems, organizations, or agents express a desire for one behavior or outcome (B) but set up incentives that reward another (A), leading to misaligned incentives and unintended consequences."
  }
];


export const cards = [

  {
    "category": "AP",
    "name": "Beneficence",
    "definition": "Act to promote the well-being of others.",
    "human": "Seeking to improve others' conditions, not just avoid harm.",
    "organizational": "Pursuing mission outcomes that serve societal good.",
    "professional": "Keeping public safety and welfare in sight even while working primarily for the client.",
    "machine": "Designing systems that anticipate and promote human flourishing.",
    "failureModes": {
      "human": "A person drives in a manner that causes traffic backups for others.",
      "organizational": "The classic movie plot where a rapacious billionaire threatens civilization to enrich his company.",
      "professional": "An expert who disregards public interest, acting as if the consequences of what they help build are other people's problems.",
      "machine": "The machine consumes all the world's resources to create as many paperclips as it can."
    }
  },

  { 
    "category": "AP", 
    "name": "Justice", 
    "definition": "Ensure fairness, equity, and impartiality in decisions and outcomes.", 
    "human": "Treating others fairly, resisting bias, and upholding equality of opportunity.", 
    "organizational": "Applying policies and practices that distribute benefits and burdens equitably.", 
    "professional": "Ensuring that expertise and recommendations are not skewed by favoritism or personal gain.", 
    "machine": "Building models and algorithms that prevent bias and treat users equitably.", 
    "failureModes": { 
      "human": "A hiring manager favors friends over qualified candidates.", 
      "organizational": "A company's algorithm systematically disadvantages minority groups.", 
      "professional": "A doctor provides better care to wealthier patients.", 
      "machine": "A facial recognition system misidentifies certain demographic groups far more often than others."
    }
  },

  { 
    "category": "AP", 
    "name": "Accountability", 
    "definition": "Accept responsibility for actions, decisions, and outcomes.", 
    "human": "Owning one's mistakes and taking steps to correct them.", 
    "organizational": "Establishing governance and oversight mechanisms to track responsibility.", 
    "professional": "Maintaining professional integrity by standing behind one's work.", 
    "machine": "Including audit trails, explainability, and channels for redress when systems err.", 
    "failureModes": { 
      "human": "Someone blames coworkers for an error they caused.", 
      "organizational": "A corporation shifts blame for a harmful product onto users.", 
      "professional": "An engineer ignores warnings about a faulty design and denies involvement after failure.", 
      "machine": "An autonomous system causes harm, but no one can explain or fix why it acted that way."
    }
  },

  { 
    "category": "AP", 
    "name": "Transparency", 
    "definition": "Operate openly so others can understand reasoning, goals, and limits.", 
    "human": "Being honest about intentions and sharing information when appropriate.", 
    "organizational": "Communicating decisions, policies, and data use clearly to stakeholders.", 
    "professional": "Disclosing conflicts of interest and explaining recommendations to clients.", 
    "machine": "Providing interpretable models and clear explanations of outputs and limitations.", 
    "failureModes": { 
      "human": "A person withholds key information to gain an advantage.", 
      "organizational": "A tech company hides how user data is collected and sold.", 
      "professional": "An analyst conceals the assumptions behind their conclusions.", 
      "machine": "A black-box AI makes a critical decision no one can explain or review."
    }
  },

  { 
    "category": "AP", 
    "name": "Autonomy Respect", 
    "definition": "Recognize and support the capacity of others to make informed decisions.", 
    "human": "Respecting others' choices even when they differ from one's own preferences.", 
    "organizational": "Empowering employees and customers with clear choices and consent.", 
    "professional": "Ensuring clients understand options and make informed decisions.", 
    "machine": "Designing systems that preserve user agency and allow meaningful consent or override.", 
    "failureModes": { 
      "human": "A person manipulates a friend into doing something against their will.", 
      "organizational": "A company uses dark patterns to trick users into subscriptions.", 
      "professional": "A consultant withholds alternatives to push a preferred solution.", 
      "machine": "A voice assistant overrides user preferences or coerces choices."
    }
  },

  { 
    "category": "AP", 
    "name": "Non-Maleficence", 
    "definition": "Avoid causing harm to others, directly or indirectly.", 
    "human": "Acting carefully to prevent harm, even unintentionally.", 
    "organizational": "Anticipating and mitigating risks to customers and communities.", 
    "professional": "Following safety standards and ethical guidelines to minimize harm.", 
    "machine": "Testing systems rigorously to avoid unsafe or harmful behaviors.", 
    "failureModes": { 
      "human": "A distracted driver causes an avoidable accident.", 
      "organizational": "A company releases a product with known safety flaws.", 
      "professional": "An engineer ignores safety test results to meet a deadline.", 
      "machine": "An autonomous vehicle fails to detect pedestrians in poor lighting."
    }
  },

  { 
    "category": "AP", 
    "name": "Integrity", 
    "definition": "Act consistently with moral and ethical values, even when under pressure.", 
    "human": "Doing what is right even when it's difficult or unseen.", 
    "organizational": "Upholding mission and values despite market or political pressure.", 
    "professional": "Maintaining honesty and standards even under client or institutional pressure.", 
    "machine": "Operating according to built-in ethical constraints rather than being swayed by external manipulation.", 
    "failureModes": { 
      "human": "A person cheats to achieve a goal more easily.", 
      "organizational": "A firm falsifies reports to maintain profits.", 
      "professional": "A researcher fabricates results to secure funding.", 
      "machine": "A system is manipulated to produce deceptive outputs that benefit one actor over others."
    }
  },

  { 
    "category": "AB", 
    "name": "Academic Integrity and Grades", 
    "definition": "Systems often claim to value deep learning and intellectual honesty but reward high grades, test performance, and conformity to rubrics, creating superficial learning incentives.", 
    "human": "Students focus on memorization and test-taking rather than genuine understanding.", 
    "organizational": "Companies chase quarterly metrics instead of sustainable innovation.", 
    "professional": "Scholars overpublish low-impact work to meet citation or tenure expectations.", 
    "machine": "AI systems overfit benchmarks or exploit dataset quirks instead of developing true generalization.", 
    "failureModes": { 
      "human": "A student memorizes facts to pass exams but cannot apply them later.", 
      "organizational": "Sales teams inflate metrics to meet bonus thresholds.", 
      "professional": "Publish-or-perish culture floods journals with redundant research.", 
      "machine": "A model performs well on test data but fails in real-world use." 
    } 
  },
  
  { 
    "category": "AB", 
    "name": "Innovation in the Workplace", 
    "definition": "Organizations hope for creativity and initiative but reward rule-following, predictability, and short-term efficiency, discouraging experimentation and responsible risk-taking.", 
    "human": "People suppress creative ideas out of fear of criticism or failure.", 
    "organizational": "Bureaucracies avoid experimentation to reduce liability and inefficiency.", 
    "professional": "Peer review systems punish unconventional or speculative work.", 
    "machine": "Reinforcement learning agents avoid exploration to minimize loss.", 
    "failureModes": { 
      "human": "An employee hides a new idea fearing disapproval.", 
      "organizational": "A company stagnates because creative projects are deprioritized.", 
      "professional": "Novel proposals are rejected as too risky by conservative reviewers.", 
      "machine": "An RL agent converges on a safe but suboptimal policy." 
    } 
  },
  
  { 
    "category": "AB", 
    "name": "Public Service and Governance", 
    "definition": "Public institutions claim to value transparency and public benefit but reward image management, short-term wins, and avoidance of controversy, creating symbolic accountability.", 
    "human": "Individuals focus on appearing competent rather than being effective.", 
    "organizational": "Agencies prioritize PR-friendly metrics over real improvement.", 
    "professional": "Consultants produce reports that look successful but lack depth or impact.", 
    "machine": "Algorithms optimize engagement instead of user well-being or truth.", 
    "failureModes": { 
      "human": "A politician avoids unpopular but necessary reforms.", 
      "organizational": "Departments measure success by press coverage rather than outcomes.", 
      "professional": "Reports are optimized for optics rather than meaningful progress.", 
      "machine": "A recommender system promotes polarizing content for clicks." 
    } 
  }
];
