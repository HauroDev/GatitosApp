// @ts-check
import { test, expect } from '@playwright/test'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
const LOCAL_HOST_URL = 'http://localhost:5173/'

test('app de gatitos que muestran fraces random y imagenes', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL)

  // Expect a title "to contain" a substring.
  const text = await page.getByRole('paragraph')
  const image = await page.getByRole('img')

  const textContent = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  console.log('\ntext: ', textContent)
  console.log('\nimage: ', imageSrc)
  await expect(textContent?.length).toBeGreaterThan(0)
  await expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})
