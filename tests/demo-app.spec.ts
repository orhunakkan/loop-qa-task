import { test, expect } from '@playwright/test';
import testCases from '../fixtures/test-data.json' with { type: 'json' };
import { ProjectBoardPage } from '../pages/project-board.page';
import { login } from '../utilities/login';

test.describe('Demo App - Data-Driven Tests', () => {
    for (const testCase of testCases) {
        test(testCase.title, async ({ page }) => {
            await login(page);

            const board = new ProjectBoardPage(page, testCase.project, testCase.taskName, testCase.column);

            // Navigate to the project
            await board.projectButton.click();

            // Verify the task is in the expected column
            await expect(board.taskHeading).toBeVisible();

            // Verify every tag is present on the task card
            for (const tag of testCase.tags) {
                await expect(board.taskCard.getByText(tag, { exact: true })).toBeVisible();
            }
        });
    }
});
