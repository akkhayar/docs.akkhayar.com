---
sidebar_position: 1
---

# Contributing

The Akkhayar organization hosts a collection of projects that are maintained by internal contributors. If you are interested in joining us, this document serves as a guide on how to contribute to its projects.

## Code of Conduct

See our code of conduct [here](/community/code-of-conduct) adapted from the Contributor Covenant.

## Get Involved

If you are interested in getting started, fill up the [recruitment form](/join-us) to join the organization. You will most likely be accepted, given you meet these [core criteria](/join-us#criteria). Once you are accepted you will become an internal contributor. Internal contributors have access to work through branches on their associated project repository.

:::note

Currently, **we do not** accept pull requests from external contributors (forks). You must be an internal contributor before you can contribute to the projects. But, feel free to open issues and discussions on the project repository.

:::

### Features & Bugs

There are a few ways to contribute to Akkhayar's projects. 

:::note

When designing the application, refer to the UI/UX document attached in the project readme. 

:::

Here are some ideas to get started:

1. Use the application. Does everything work as expected? Can you reckon an improvement? Opening an issue to delegate or work on it.
2. Go through the open issues. If you find an issue you would like to fix, open a pull request.
3. Take a look at the features requested by others in the community or on the stores of the apps and consider opening a pull request if you see something you want to work on.

## Development

Here are some guidelines to follow when developing Akkhayar's projects before we take a look at the full workflow. These guidelines are not set in stone, but they are a good starting point.

### Issue Tracking

Issues are used to track the progress of features, bugs, and other tasks. They are also a place of communication between the contributor and the team.

### Branching

Branches are used to isolate development environments for features, bugs, and every other change that can be made. They are ultimately merged back into the main branch. Branches are named in the format of `feature/<feature>`, e.g., `feature/add-navbar`. Ensure that the feature branch is short-lived and is merged back into the main branch within **a week**. See [trunk-based development](#trunk-based-development) for more details.

### Workflow

Now that you have a general idea of how the development process works, let's take a look at the workflow in more detail:

1. **Create an issue**

   Click on the `New issue` button in the project repository. Give it a name that describes at a glance the work being done. Label it appropriately.

2. **Create a branch inside the issue.**

   Click on the `Create branch` button on the issue page under the "Development" section of the sidebar from the right. The branch name must be in the format of `feature/<feature>`, e.g., `feature/add-navbar`. This is your isolated development environment where you can implement new features, fix bugs, and do anything you need to do to complete the issue. See how this workflow connects with certain [ides](./editors-and-ides).

3. **Create a pull request**

   Send a pull request to the `main` branch. The pull request should be named in the format of `review: feature/<feature>`, e.g., `review: feature/add-navbar`.
4. **Verify that all status checks have passed.**
   The pull request will be automatically checked by GitHub Actions. If the checks fail, iterate on the changes until it passes.
4. **Once everything passes, request a reviewer to merge into `main`.**
5. **When the PR is merged, close the issue & branch.**
6. **Celebrate 🎉!**

### Workflow Diagram

Take a look at the diagram below to get a more refined idea of the development flow.

![development-flow-diagram](/img/dev-flow.svg)

That concludes the development workflow. The next section will go into more detail about the development process and the ideas behind it.

## Trunk Based Development

The trunk-based development model is used in akkhayar. It is the way we propose a feature/bug, implement the proposal, and combine it back into the project.

### ![](/img/git-branch-light.svg) Short Lived Feature Branches

> One key rule is the length of life of the branch before it gets merged and deleted. Simply put, the branch should only last a couple of days. Any longer than two days, and there is a risk of the branch becoming a long-lived feature branch (the antithesis of trunk-based development).
>
> — [trunkbaseddevelopment.com](<https://trunkbaseddevelopment.com/short-lived-feature-branches/#:~:text=One%20key%20rule%20is%20the%20length%20of%20life%20of%20the%20branch%20before%20it%20gets%20merged%20and%20deleted.%20Simply%20put%2C%20the%20branch%20should%20only%20last%20a%20couple%20of%20days.%20Any%20longer%20than%20two%20days%2C%20and%20there%20is%20a%20risk%20of%20the%20branch%20becoming%20a%20long%2Dlived%20feature%20branch%20(the%20antithesis%20of%20trunk%2Dbased%20development).>)

A short-lived feature branch must have a short life and it is destined to come back as pull requests into the main/trunk, merged and deleted after a few days. **You are expected to send a pull request within seven days after that**, so we can still delegate the issue to someone else if you are unavailable.

## Discussions

Discussions related to a project is held in the `#| discussion` channel of the project's category. The project repository's discussion space is used as a bulletin board for laying out the project's roadmap, discussing new features, and other project-related topics. It is also used as a place to ask questions and get help from other contributors.

## Reviews

Pull requests are reviewed by at least 1 code owner after successful checks. If you have failing checks on your pull requests, just iterate on the changes until it passes. If you are unsure about the issue, feel free to request an edit from a code owner. The review process ensures that the code is high quality and that the changes are well-updated in the documentation.

# Version Control

We use Git as a version control system in Akkhayar

Here are five core ideas in Git that we need to understand:

1. Repository
2. Branch
3. Commit
4. Push & Pull Request
5. Git Ignore

There are a lot of YouTube crash courses for Git in Burmese, and even more in English.
Here is a useful playlist: https://www.youtube.com/watch?v=DB_MEZZdiIs&list=PLD_eiqVVLZDge73nM5J-LyPgbfVL6vnDc

## Commit Messages

When writing commit messages, they should always be structured as follows:

```py
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

This is in adherence to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.
The commit message contains the following structural elements, to communicate intent to other contributors:

| Element     | Description                                             |
| ----------- | ------------------------------------------------------- |
| type        | the type of change does this commit contain             |
| scope       | the part of the codebase this commit affects (optional) |
| description | ...                                                     |
| body        | additional context and details about the change.        |
| footer      | metadata about breaking changes and issue references.   |

### Types of commit content

| Type     | Description                                                                                            | Example                           |
| -------- | ------------------------------------------------------------------------------------------------------ | --------------------------------- |
| fix      | a bug fix                                                                                              | fix: typo in code                 |
| feat     | a new feature                                                                                          | feat: added navbar                |
| docs     | documentation only changes                                                                             | docs: add new documentation       |
| style    | changes that do not affect the meaning of the code (white space, formatting, missing semi-colons, etc) | style: remove trailing spaces     |
| refactor | a code change that neither fixes a bug nor adds a feature                                              | refactor: remove redundant code   |
| test     | adding missing tests or correcting existing tests                                                      | test: add unit test for component |
| ci       | changes to our CI configuration files and scripts (example scopes: Docker, Github Runners)             | ci: update dockerfile             |
| chore    | other changes that don't modify src or test files                                                      | chore: add pnpm build script      |

# Conclusion

Help us by following these guidelines when contributing to Akkhayar's projects. If you have any questions, feel free to open an issue or through discord.
