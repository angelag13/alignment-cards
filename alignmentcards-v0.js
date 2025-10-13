export const categories = [

  {
    "code": "AP", 
    "name": "Alignment Principles", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  }
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
    "hopedFor": "Deep learning, curiosity, and intellectual honesty.",
    "rewarded": "High grades, test performance, and conformity to rubrics.",
    "pathology": "Superficial learning incentives: systems that overvalue measurable performance create environments where students optimize for scores, not understanding.",
    "affirmativePrinciple": "Reward authentic learning.",
    "definition": "Align evaluation systems with genuine understanding and intrinsic motivation, not just measurable outcomes.",
    "human": "Students cram, cheat, or memorize rather than engage deeply with material.",
    "organizational": "Companies chase quarterly results instead of developing sustainable innovation.",
    "expert": "Scholars overpublish low-impact work to meet citation or tenure metrics.",
    "machine": "AI systems overfit benchmarks or exploit dataset quirks rather than developing true generalization.",
    "failureModes": { 
      "human": "Student memorizes facts instead of grasping concepts.", 
      "organizational": "Sales teams inflate metrics to meet bonus thresholds.", 
      "expert": "Publish-or-perish culture floods journals with redundant research.", 
      "machine": "Language model scores high on tests but fails in real-world reasoning." 
    }
  },

  {
    "category": "AB",
    "name": "Innovation in the Workplace",
    "hopedFor": "Creative, risk-taking employees who find better ways to do things.",
    "rewarded": "Those who meet deadlines, avoid failure, and stay within policy.",
    "pathology": "Innovation aversion: risk and creativity are rhetorically valued but punished when short-term efficiency dominates decision-making.",
    "affirmativePrinciple": "Normalize responsible risk-taking.",
    "definition": "Systems should distinguish between productive risk and negligence, rewarding initiative even when outcomes fail.",
    "human": "People suppress new ideas out of fear of failure or criticism.",
    "organizational": "Bureaucracies discourage experimentation to avoid liability and inefficiency.",
    "expert": "Peer review and institutional norms punish unconventional approaches.",
    "machine": "Reinforcement learning agents stick to low-risk behaviors to minimize loss.",
    "failureModes": { 
      "human": "Employee hides an innovative solution fearing disapproval.", 
      "organizational": "Company stagnates because creative projects are deprioritized.", 
      "expert": "Novel proposals rejected as too speculative by conservative reviewers.", 
      "machine": "RL agent converges on a safe but suboptimal policy." 
    }
  },

  {
    "category": "AB",
    "name": "Public Service and Governance",
    "hopedFor": "Honest, transparent, citizen-centered governance.",
    "rewarded": "Political image management, short-term wins, and avoidance of controversy.",
    "pathology": "Symbolic accountability: systems reward optics over outcomes, incentivizing performative compliance rather than genuine public benefit.",
    "affirmativePrinciple": "Reward substance over symbolism.",
    "definition": "Design feedback systems that measure and reward real-world impact rather than surface indicators.",
    "human": "Individuals focus on appearing competent instead of being effective.",
    "organizational": "Agencies prioritize PR-friendly metrics over tangible improvement.",
    "expert": "Consultants produce reports that look successful but lack depth or impact.",
    "machine": "Social media algorithms maximize engagement rather than user well-being or truth.",
    "failureModes": { 
      "human": "Politician avoids unpopular but necessary reform.", 
      "organizational": "Department measures success by number of press releases, not outcomes.", 
      "expert": "Performance reports optimized for optics rather than progress.", 
      "machine": "Recommender system promotes polarizing content for clicks." 
    }
  }
];
