module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/AlstonDias/github-action-ci-cd/",
    plugins: ['@semantic-release/commit-analyzer', '@semantic-release/release-notes-generator', '@semantic-release/npm', ['@semantic-release/github', {
        assets: [
            { path: "build.zip", label: "Build" },
            { path: "coverage.zip", label: "Coverage" }
        ]
    }]
    ]
}