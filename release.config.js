module.exports = {
    branches: "workflow",
    repositoryUrl: "https://github.com/AlstonDias/github-action-ci-cd",
    plugins: ["@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/github"
    ]
}