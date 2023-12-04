---
sidebar_position: 3
---

# Version Control

GitHub is used as a version control system in Akkhayar. It is a mature software with evidence for the fruition of effective collaboration. It is integral that we learn how to use it effectively. 

Here are five core ideas in GitHub that we need to understand:
1. Repository
2. Branch
3. Commit
4. Push & Pull Request
5. Git Ignore

There are a lot of YouTube crash courses for GitHub in Burmese, and even more in English. 
I will link a playlist that I find useful here:

https://www.youtube.com/watch?v=DB_MEZZdiIs&list=PLD_eiqVVLZDge73nM5J-LyPgbfVL6vnDc


## Commit Messages
When writing commit messages, it should always be sturctured as follows:

```py
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

This is in adherence to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.
The commit message contains the following structural elements, to communicate intent to the consumers of your library:


| Element | Description |
| ------- | ----------- |
| type    | what type of change this commit contains. |
| scope   | what part of the codebase this commit affects. |
| description | why the change is needed. |
| body    | additional context and details about the change. |
| footer  | metadata about breaking changes and issue references. |

### Types of commit content

| Type | Description | Example |
| ---- | ----------- | ------- |
| fix | a bug fix | fix: typo in code |
| feat | a new feature | feat: added navbar |
| docs | documentation only changes | docs: add new documentation |
| style | changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) | style: remove trailing spaces |
| refactor | a code change that neither fixes a bug nor adds a feature | refactor: remove redundant code |
| test | adding missing tests or correcting existing tests | test: add unit test for component |
| ci | changes to our CI configuration files and scripts (example scopes: Docker, Github Runners) | ci: update dockerfile |
| chore | other changes that don't modify src or test files | chore: add pnpm build script |
