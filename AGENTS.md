# Project workflow

These rules apply to all future code changes in this repository.

## Branches and pull requests

1. Start from the current `main` branch.
2. Create an issue-specific feature branch before editing code. Use a name that includes the Linear issue identifier, for example `feature/kit-14-asset-structure`.
3. Keep the change scoped to the issue and commit it on the feature branch.
4. Push the feature branch and open a pull request targeting `main`.
5. Review the pull request. Self-approval is acceptable when appropriate.
6. Merge to `main` only after the local checks and visual verification pass.

## Verification before merge

1. Load the site locally with the available MCP/browser tooling, or an equivalent local browser workflow.
2. Check the visual appearance at agreed desktop and mobile viewport sizes.
3. Capture screenshots before deployment, or produce an equivalent visual-diff result.
4. Confirm that the layout, typography, colors, spacing, navigation, images, and interactive behavior work as expected.
5. Confirm that referenced CSS, JavaScript, image, and font assets load without errors.

## Verification after merge

1. Confirm that the merge to `main` triggers the GitHub Pages deployment.
2. Wait for the deployment to complete successfully.
3. Load the public site at https://andpoulsen.github.io/kitepics/.
4. Check the deployed site at the same desktop and mobile viewport sizes used locally.
5. Capture matching post-deployment screenshots, or produce an equivalent visual-diff result.
6. Compare the local and deployed results and investigate any unexplained visual or functional regression.

Do not treat a successful deployment job or HTTP 200 response as sufficient on its own. The deployed site's appearance and important assets must also be checked.
