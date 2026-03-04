import { type Page, type Locator } from '@playwright/test';

export class ProjectBoardPage {
    readonly projectButton: Locator;
    readonly projectHeading: Locator;
    readonly columnSection: Locator;
    readonly taskHeading: Locator;
    readonly taskCard: Locator;

    constructor(
        private readonly page: Page,
        projectName: string,
        taskName: string,
        columnName: string,
    ) {
        this.projectButton = this.page.getByRole('button', {
            name: new RegExp(projectName),
        });

        this.projectHeading = this.page.getByRole('heading', {
            name: projectName,
            level: 1,
        });

        this.columnSection = this.page
            .getByRole('heading', {
                name: new RegExp(`^${columnName}\\s*\\(`),
                level: 2,
            })
            .locator('..');

        this.taskHeading = this.columnSection.getByRole('heading', {
            name: taskName,
            level: 3,
        });

        this.taskCard = this.taskHeading.locator('../..');
    }
}
