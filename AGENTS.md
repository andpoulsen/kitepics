# Project workflow

These rules apply to all future code changes in this repository.

## Branches and pull requests

1. Start from the current `main` branch.
2. Create an issue-specific feature branch before editing code. Use a name that includes the Linear issue identifier, for example `feature/kit-14-asset-structure`.
3. Keep the change scoped to the issue and commit it on the feature branch.
4. Push the feature branch and open a pull request targeting `main`.
5. If the work comes from a Linear issue, include the Linear issue identifier in the pull request title, for example `KIT-14: Asset structure`.
6. Review the pull request. Self-approval is acceptable when appropriate.
7. Merge to `main` only after the local checks and visual verification pass.

## Linear issue status

Keep the Linear issue status aligned with the actual workflow:

1. Move the issue from `Todo` to `In Progress` when work begins on the feature branch.
2. Move the issue to `In Review` when the pull request is opened.
3. After the pull request is merged, leave the issue in `In Review` while the post-merge deployment and verification are running.
4. Identify the GitHub Pages Action run for the merge commit and wait until it has completed with a successful conclusion.
5. Only after that successful Action run, load and check the live site. For user-facing changes, include visual verification at the agreed desktop and mobile viewport sizes.
6. Record the verification evidence in Linear, such as the merge commit, Action run, live URL, and screenshot or visual-diff result, and wait for the comment or attachment operation to succeed.
7. Only then, as a separate final operation, move the issue to `Done` and read the issue back to confirm that the status is actually `Done`.

Never move an issue to `Done` immediately after merge. Do not start the live-site check before the deployment Action for that merge has completed successfully. Do not mark an issue `Done` merely because the code is committed, the pull request is approved, or the deployment job succeeds without the subsequent live-site check. The `Done` mutation must never run in parallel with Action polling, the live-site check, a Linear comment, or an attachment upload; all preceding steps must be awaited and complete successfully first.

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
8. Record the evidence in Linear and wait for the successful response.
9. As the final serialized step, move the related Linear issue to `Done`.
10. Read the issue back and confirm that Linear reports `Done`; if it does not, stop and investigate instead of assuming completion.

Do not treat a successful deployment job or HTTP 200 response as sufficient on its own. The deployed site's appearance and important assets must also be checked.

## Completion gate

The finalization sequence is a hard gate, not a checklist to perform concurrently:

1. `merge` the pull request.
2. Wait for the GitHub Pages Action for that exact merge commit to report terminal `success`.
3. Check the deployed site and capture the required evidence.
4. Await the successful Linear comment or attachment operation.
5. Call the Linear status update to `Done` as a standalone operation.
6. Read the issue back and verify the resulting status.

If any step fails or its result is ambiguous, keep the issue in `In Review` and resolve the ambiguity before changing the status.
