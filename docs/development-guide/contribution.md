---
sidebar_position: 1
---

# Contribution

In akkhayar, we encourage anyone to contribe to our open sourced projects. This is a ready-made guidelines on the process and priciples involved with contribution that we would like you to follow.

## Trunk Based Development

The trunk based development model is used in akkhayar to manage continuous integration. This is a way we handle each and every developer's code that comes into the project; how it is merged, reviewed and finally shipped. On top of that, we also use GitHub issues to track miscellanous details.

### ![git-branch](/img/git-branch-light.svg) Short Lived Feature Branches (feature/name)

Before you do anything, break down your work into something doable in a short lived feature branch. A short lived feature branch must have a short life and it is destined to come back as pull requests into the main/trunk, merged and deleted after a few days.

> One key rule is the length of life of the branch before it gets merged and deleted. Simply put, the branch should only last a couple of days. Any longer than two days, and there is a risk of the branch becoming a long-lived feature branch (the antithesis of trunk-based development). 
> - [trunkbaseddevelopment.com](https://trunkbaseddevelopment.com/short-lived-feature-branches/#:~:text=One%20key%20rule%20is%20the%20length%20of%20life%20of%20the%20branch%20before%20it%20gets%20merged%20and%20deleted.%20Simply%20put%2C%20the%20branch%20should%20only%20last%20a%20couple%20of%20days.%20Any%20longer%20than%20two%20days%2C%20and%20there%20is%20a%20risk%20of%20the%20branch%20becoming%20a%20long%2Dlived%20feature%20branch%20(the%20antithesis%20of%20trunk%2Dbased%20development).)

### General Guidelines

Once you have a feature proposal, you can start working on it by following the steps below: 

1. Create an issue by clicking on the `New issue` button in the project repository page. Give it a name that describes at a glance the work being done. Label it as an `enhancement`.
2. After the issue is made, create a branch inside the issue. You can do this by clicking on the `Create branch` button in the issue page under "Development" section of the right sidebar. The branch name must be in the format of `feature/<feature>`, e.g., `feature/add-navbar`. You can now begin development on the feature through the branch, for more details on how see [ides](./editors-and-ides).

3. When you are done, create a pull request to merge the branch into `main`. The pull request should be named in the format of `review feature/<feature>`, e.g., `review feature/add-navbar`.
4. Reiterate on the pull request until it is approved and merged into `main`.
5. Delete the branch.
6. Close the issue.
7. Celebrate 🎉!

## Reviews

Feature branches are reviewed by at least 1 person, and in some cases, up to 2 or 3 people. The review process ensure that the code is high quality and that the changes are well updated to the documentation. 
