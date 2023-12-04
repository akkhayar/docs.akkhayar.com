---
sidebar_position: 1
---

# Open Contribution

We encourage anyone to contribe to our source available projects at a comfortable level. The process by which the contribution occur is called "Open Contribution".

## Trunk Based Development

The way widespread collaboration and resillient ci-cd is done in Akkhayar is through trunk based development.

### Contribution Workflow

Before you do anything, break down your work into modular steps as a preliminary step. Make sure that the work you are proposing and executing can be done with short lived feature branches. A short lived feature branch is a branch directly off `main` or in a fork of the whole repository. Regardless, they are short lived and are destined to come back as "pull requests" into the main/trunk.

> One key rule is the length of life of the branch before it gets merged and deleted. Simply put, the branch should only last a couple of days. Any longer than two days, and there is a risk of the branch becoming a long-lived feature branch (the antithesis of trunk-based development). [*](https://trunkbaseddevelopment.com/short-lived-feature-branches/#:~:text=One%20key%20rule%20is%20the%20length%20of%20life%20of%20the%20branch%20before%20it%20gets%20merged%20and%20deleted.%20Simply%20put%2C%20the%20branch%20should%20only%20last%20a%20couple%20of%20days.%20Any%20longer%20than%20two%20days%2C%20and%20there%20is%20a%20risk%20of%20the%20branch%20becoming%20a%20long%2Dlived%20feature%20branch%20(the%20antithesis%20of%20trunk%2Dbased%20development).)

With that being said, let's get into how to contribute to a project. 

In akkhayar, all contributions are tracked in GitHub issues.

1. To start working on a feature, create an issue in the project repository and label it as an `enhancement`. Name the issue in a way that is descriptive at a glance to the work that needs to be done.

2. Within the issue, you must create a branch (short lived feature branch) dedicated to addressing the issue. The branch name should be in the format of `feature/<feature>`, e.g., `feature/add-navbar`.

3. Work on the issue in the branch. When you are done, create a pull request to merge the branch into `main`. The pull request should be named in the format of `review feature/<feature>`, e.g., `review feature/add-navbar`.

4. Reiterate on the pull request until it is approved and merged into `main`.

5. Delete the branch.
6. Close the issue.
7. Celebrate!

### Reviews

Feature branches are reviewed by at least 1 person. The project maintainer. However, in some cases, there should also be a second reviewer from a contributor who is not the author of the pull request.

Reviews ensure that the code is high quality and that a good amount of people are well informed about the changes that are being made to the code base.
