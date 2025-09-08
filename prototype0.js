export const cards = [
  {
    "name": "Negative Side Effects",
    "definition": "Ensuring AI systems achieve goals without causing unintended harm to the environment or other systems.",
    "failureMode": "The AI completes the given task but damages surrounding objects or creates any other undesirable consequences.",
    "example": "A cleaning robot knocks over a vase while trying to reach dirt along its path."
  },

  {
    "name": "Reward Hacking",
    "definition": "Preventing AI from exploiting loopholes in its reward function instead of solving the intended problem.",
    "failureMode": "The AI finds a shortcut to maximize reward without doing the intended work.",
    "example": "A cleaning robot learns to dump the trash bin out and pick the same trash up repeatedly for more rewards."
  },

  {
    "name": "Scalable Oversight",
    "definition": "Enabling humans to efficiently supervise AI on complex tasks without needing to check every detail manually or frequently.",
    "failureMode": "The AI takes harmful or low-quality actions because human supervisors can't feasibly review everything.",
    "example": "A language model generates misleading content because reviewers can't check thousands of outputs in real time."
  },

  {
    "name": "Safe Exploration",
    "definition": "Allowing AI to explore its environment safely while learning, without taking dangerous actions.",
    "failureMode": "The AI experiments with risky behaviors that could cause accidents or harm.",
    "example": "A delivery drone tests a shortcut over a crowded park and crashes into a passerby."
  },

  {
    "name": "Robustness to Distributional Shift",
    "definition": "Making sure AI performs safely even when real-world inputs differ from training data.",
    "failureMode": "The AI encounters unfamiliar scenarios and makes poor or unsafe decisions.",
    "example": "A self-driving car trained in sunny weather malfunctions during heavy snow."
  }
];
