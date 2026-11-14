
import React, { useState } from "react";

const learningTopics = [
  {
    name: "Linux",
    icon: "🐧",
    description: "Linux commands, administration and troubleshooting.",
    topics: ["Concepts", "Commands", "Practical", "Troubleshooting"],
  },
  {
    name: "Git & GitHub",
    icon: "🐙",
    description: "Version control, branching and collaboration.",
    topics: ["Concepts", "Commands", "Practical", "Troubleshooting"],
  },
  {
    name: "Docker",
    icon: "🐳",
    description: "Containers, images and Docker workflows.",
    topics: ["Concepts", "Commands", "Practical", "Troubleshooting"],
  },
  {
    name: "Kubernetes",
    icon: "☸️",
    description: "Container orchestration and cluster management.",
    topics: ["Concepts", "Commands", "Practical", "Troubleshooting"],
  },
  {
    name: "Jenkins",
    icon: "🔧",
    description: "CI/CD pipelines and automation.",
    topics: ["Concepts", "Commands", "Practical", "Troubleshooting"],
  },
  {
    name: "AWS",
    icon: "☁️",
    description: "Cloud infrastructure and AWS services.",
    topics: ["Concepts", "Commands", "Practical", "Troubleshooting"],
  },
  {
    name: "Terraform",
    icon: "🏗️",
    description: "Infrastructure as Code and automation.",
    topics: ["Concepts", "Commands", "Practical", "Troubleshooting"],
  },
  {
    name: "Ansible",
    icon: "⚙️",
    description: "Configuration management and automation.",
    topics: ["Concepts", "Commands", "Practical", "Troubleshooting"],
  },
  {
    name: "Prometheus & Grafana",
    icon: "📊",
    description: "Monitoring, metrics and observability.",
    topics: ["Concepts", "Commands", "Practical", "Troubleshooting"],
  },
  {
    name: "Helm",
    icon: "⎈",
    description: "Kubernetes package management.",
    topics: ["Concepts", "Commands", "Practical", "Troubleshooting"],
  },
  {
    name: "SonarQube",
    icon: "🔍",
    description: "Code quality and static code analysis.",
    topics: ["Concepts", "Commands", "Practical", "Troubleshooting"],
  },
  {
    name: "Trivy",
    icon: "🛡️",
    description: "Container and dependency vulnerability scanning.",
    topics: ["Concepts", "Commands", "Practical", "Troubleshooting"],
  },
];

function Progress() {
  const [search, setSearch] = useState("");
  const [selectedTech, setSelectedTech] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Concepts");

  const filteredTopics = learningTopics.filter((topic) =>
    topic.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="learning-hub">
      <section className="learning-hero">
        <div className="learning-container">
          <span className="learning-eyebrow">
            MY KNOWLEDGE BASE
          </span>

          <h1>
            DevOps Learning <span>Hub.</span>
          </h1>

          <p>
            A personal knowledge base where I document my learning,
            practical experiments, commands and troubleshooting notes.
          </p>

          <div className="learning-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search technologies..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSelectedTech(null);
              }}
            />
          </div>
        </div>
      </section>

      <section className="learning-content">
        <div className="learning-container">
          {selectedTech ? (
            <div className="technology-detail">
              <button
                className="learning-back"
                onClick={() => setSelectedTech(null)}
              >
                ← Back to all technologies
              </button>

              <div className="technology-heading">
                <span className="technology-icon">
                  {selectedTech.icon}
                </span>

                <div>
                  <h2>{selectedTech.name}</h2>
                  <p>{selectedTech.description}</p>
                </div>
              </div>

              <div className="learning-categories">
                {selectedTech.topics.map((category) => (
                  <button
                    key={category}
                    className={
                      selectedCategory === category ? "active" : ""
                    }
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="learning-empty">
                <span>📝</span>
                <h3>{selectedCategory}</h3>
                <p>
                  Notes for {selectedTech.name} will appear here.
                  Learning notes will be added in the next step.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="learning-section-heading">
                <div>
                  <span className="learning-eyebrow">
                    EXPLORE & LEARN
                  </span>
                  <h2>Technologies</h2>
                  <p>
                    Explore topics and access my learning notes.
                  </p>
                </div>

                <span className="technology-count">
                  {filteredTopics.length} Technologies
                </span>
              </div>

              <div className="technology-grid">
                {filteredTopics.map((topic) => (
                  <button
                    className="technology-card"
                    key={topic.name}
                    onClick={() => {
                      setSelectedTech(topic);
                      setSelectedCategory("Concepts");
                    }}
                  >
                    <span className="technology-icon">
                      {topic.icon}
                    </span>

                    <h3>{topic.name}</h3>
                    <p>{topic.description}</p>

                    <span className="technology-explore">
                      Explore notes →
                    </span>
                  </button>
                ))}
              </div>

              {filteredTopics.length === 0 && (
                <div className="learning-empty">
                  <h3>No technology found</h3>
                  <p>Try searching with another name.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default Progress;
