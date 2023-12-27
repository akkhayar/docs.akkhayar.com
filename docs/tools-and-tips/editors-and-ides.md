---
sidebar_position: 1
---

# Editors and IDEs


## Working on a Feature Branch

When you create a branch under an issue, there will be a dialog containing the commands needed to checkout to that branch. You will do this before beginning any development to make sure that the changes you are making goes to the issued feature branch.

It looks something like:

```bash
git fetch origin
git checkout <`branch_name`>
```

The same thing can be done if you're on **Visual Studio Code** through icons provided by the git extension to the status bar--you still need to fetch the origin first. Simply, click on the branch name on the status bar and a list box will appear, select your feature branch and your vscode will be configured to commit to that branch.

For other editors, you can use the command line to checkout to the feature branch or use respective extensions to do the same thing as vscode.
