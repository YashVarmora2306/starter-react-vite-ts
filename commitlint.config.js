export default {
    parserPreset: {
        parserOpts: {
            headerPattern: /^\[(\w+)]\s?:\s(.+)$/,
            headerCorrespondence: ["type", "subject"],
        },
    },
    rules: {
        "type-enum": [
            2,
            "always",
            [
                "FEAT",
                "FIX",
                "DOCS",
                "STYLE",
                "REFACTOR",
                "TEST",
                "CHORE",
                "PERF",
                "CI"
            ],
        ],
        "subject-empty": [2, "never"],
        "type-empty": [2, "never"]
      },
}