import { type Page, type Locator } from '@playwright/test';

export class LoginPage {
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly signInButton: Locator;
    readonly projectsHeading: Locator;

    constructor(private readonly page: Page) {
        this.usernameInput = this.page.getByLabel('Username');
        this.passwordInput = this.page.getByLabel('Password');
        this.signInButton = this.page.getByRole('button', { name: 'Sign in' });
        this.projectsHeading = this.page.getByRole('heading', { name: 'Projects', level: 1 });
    }
}
