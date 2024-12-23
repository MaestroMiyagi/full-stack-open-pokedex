const { test, expect } = require('@playwright/test');

test('La página principal se puede abrir', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('ivysaur')).toBeVisible();
  await expect(
    page.getByText(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  ).toBeVisible();
});
