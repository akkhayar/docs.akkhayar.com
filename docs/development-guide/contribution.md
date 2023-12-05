---
sidebar_position: 1
---

# Contribution

We encourage anyone to contribe to our source available projects. We have a few guidelines that we would like you to follow to ensure that the project is well maintained and that the community is well informed about the changes that are being made to the code base.

## Trunk Based Development

The way widespread collaboration and resillient ci-cd is done in Akkhayar is through trunk based development. A slight nuance is that in akkhayar, all contributions are tracked in GitHub issues, so the creation of the branch is done through the issue page.

### ![git-branch](/img/git-branch-light.svg) Short Lived Feature Branches (feature/name)

Before you do anything, break down your work into something doable in a short lived feature branch. A short lived  feature branch simply means that the life of the branch is short and they are destined to come back as pull requests into the main/trunk, merged and deleted after a few days.

> One key rule is the length of life of the branch before it gets merged and deleted. Simply put, the branch should only last a couple of days. Any longer than two days, and there is a risk of the branch becoming a long-lived feature branch (the antithesis of trunk-based development). 
> - [trunkbaseddevelopment.com](https://trunkbaseddevelopment.com/short-lived-feature-branches/#:~:text=One%20key%20rule%20is%20the%20length%20of%20life%20of%20the%20branch%20before%20it%20gets%20merged%20and%20deleted.%20Simply%20put%2C%20the%20branch%20should%20only%20last%20a%20couple%20of%20days.%20Any%20longer%20than%20two%20days%2C%20and%20there%20is%20a%20risk%20of%20the%20branch%20becoming%20a%20long%2Dlived%20feature%20branch%20(the%20antithesis%20of%20trunk%2Dbased%20development).)

### General Guidelines

Once you have a feature proposal,  you can start working on it by following the steps below: 

1. You can create an issue by clicking on the `New issue` button in the project repository page. Give it a name that describes at a glance the work being done. Label it as an `enhancement`. That is where you will start; create an issue in the project repository and label it as an `enhancement`. Give it a name that describes at a glance the work being done.
2. Create a feature branch under the issue. You can do this by clicking on the `Create branch` button in the issue page under "Development" section of the right sidebar. The branch name should be in the format of `feature/<feature>`, e.g., `feature/add-navbar`.
3. When you are done, create a pull request to merge the branch into `main`. The pull request should be named in the format of `review feature/<feature>`, e.g., `review feature/add-navbar`.
4. Reiterate on the pull request until it is approved and merged into `main`.
5. Delete the branch.
6. Close the issue.
7. Celebrate 🎉!

## Reviews

Feature branches are reviewed by at least 1 person, and in some cases, up to 2 or 3 people. The review process ensure that the code is high quality and that the changes are well updated to the documentation. 
