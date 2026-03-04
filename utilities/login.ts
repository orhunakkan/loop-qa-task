import { type Page } from '@playwright/test';
import { LoginPage } from '../pages/login.page';

/**
 * Reusable login helper.
 * Navigates to the app and authenticates with the given credentials.
 */
export async function login(
    page: Page,
    username: string | any = process.env.APP_USERNAME,
    password: string | any = process.env.APP_PASSWORD,
) {
    const loginPage = new LoginPage(page);

    await page.goto('/');
    await loginPage.usernameInput.fill(username);
    await loginPage.passwordInput.fill(password);
    await loginPage.signInButton.click();
}
