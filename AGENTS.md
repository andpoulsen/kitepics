# Project workflow

These rules apply to all future code changes in this repository.

## Branches and pull requests

1. Start from the current `main` branch.
2. Create an issue-specific feature branch before editing code. Use a name that includes the Linear issue identifier, for example `feature/kit-14-asset-structure`.
3. Keep the change scoped to the issue and commit it on the feature branch.
4. Push the feature branch and open a pull request targeting `main`.
5. Review the pull request. Self-approval is acceptable when appropriate.
6. Merge to `main` only after the local checks and visual verification pass.

## Linear issue status

Keep the Linear issue status aligned with the actual workflow:

1. Move the issue from `Todo` to `In Progress` when work begins on the feature branch.
2. Move the issue to `In Review` when the pull request is opened.
3. After the pull request is merged, leave the issue in `In Review` while the post-merge deployment and verification are running.
4. Identify the GitHub Pages Action run for the merge commit and wait until it has completed with a successful conclusion.
5. Only after that successful Action run, load and check the live site. For user-facing changes, include visual verification at the agreed desktop and mobile viewport sizes.
6. Move the issue to `Done` only after the pull request is merged and closed, the deployment Action has completed successfully, and the live site has passed the required functional and visual checks.

Never move an issue to `Done` immediately after merge. Do not start the live-site check before the deployment Action for that merge has completed successfully. Do not mark an issue `Done` merely because the code is committed, the pull request is approved, or the deployment job succeeds without the subsequent live-site check.

## Verification before merge

1. Load the site locally with the available MCP/browser tooling, or an equivalent local browser workflow.
2. Check the visual appearance at agreed desktop and mobile viewport sizes.
3. Capture screenshots before deployment, or produce an equivalent visual-diff result.
4. Confirm that the layout, typography, colors, spacing, navigation, images, and interactive behavior work as expected.
5. Confirm that referenced CSS, JavaScript, image, and font assets load without errors.

## Verification after merge

1. Confirm that the merge to `main` triggers the GitHub Pages deployment for the merge commit.
2. Poll or watch that exact Action run; do not treat its appearance as completion.
3. Require the Action run to be terminal and successful before opening the live URL.
4. Load the public site at https://andpoulsen.github.io/kitepics/.
5. Check the deployed site at the same desktop and mobile viewport sizes used locally.
6. Capture matching post-deployment screenshots, or produce an equivalent visual-diff result.
7. Compare the local and deployed results and investigate any unexplained visual or functional regression.
8. Only after these checks pass, move the related Linear issue to `Done`.

Do not treat a successful deployment job or HTTP 200 response as sufficient on its own. The deployed site's appearance and important assets must also be checked.
