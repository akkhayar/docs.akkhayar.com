---
sidebar_position: 1
---

# Editors and IDEs

## Working on a Feature Branch

When you create a branch under an issue, there will be a dialog containing the commands needed to checkout to that branch. You will do this before beginning any development to make sure that the changes you are making goes to the issued feature branch.

The commands look something like:

```bash
git fetch origin
git checkout <`branch_name`>
```

### Visual Studio Code
You can checkout to this feature branch on **Visual Studio Code** through icons provided by the git extension in the status bar.

:::note

You should still fetch the origin first. This can be done by clicking on the refresh icon on the status bar.

:::

Simply, click on the branch name on the status bar and an input box will appear, select your feature branch and your configuration is complete. Any changes you make to the codebase will commit to that branch.

For other editors, you can use the command line to checkout to the feature branch or use respective extensions to do the same thing as vscode.
