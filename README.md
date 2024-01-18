# Styled Components Auto Sorting VScode Extension

Styled Components Sorting Extension for VS Code

## Features

Sorts styled components in a file.

- Sorts by Alphabetical order
- Sorts by Mozilla's Ordering CSS Properties(Coming Soon)
- Sorts by Naver's Ordering CSS Properties(Coming Soon)

## Extension Usage

This extension provides the functionality to automatically sort style elements in styled-components. You can instantly organize style elements in alphabetical order by using the following key bindings while focusing on text in the editor:

- _Mac_: **`Cmd + Shift + S`**
- _Windows/Linux_: **`Ctrl + Shift + S`**

Using these key bindings will sort all styled-components style definitions in the currently active file. This helps in enhancing the consistency and readability of your code.

**_How to Use_**

1. Open a file that contains styled-components style definitions.
2. Ensure the file is active in the editor.
3. Press `Cmd + Shift + S` (on Mac) or `Ctrl + Shift + S` (on Windows/Linux) to sort the style elements.
4. Review the sorted style elements.

This feature operates on `JavaScript` and `TypeScript` files using styled-components.

## Extension Settings

This extension contributes to the VS Code settings, allowing you to customize its behavior according to your preferences. You can find these settings by going to `Code > Preferences > Settings` and searching for the extension's name.

The following settings are provided by this extension:

- `styledComponentsSorting.enable`: Enable or disable the styled components sorting feature. Set to true to enable and false to disable.
- `styledComponentsSorting.sortOnSave`: Automatically sort styled components when the file is saved. Set to true to enable auto-sorting on save.
- `styledComponentsSorting.sortOrder`: Define the order in which the styled components should be sorted. Options include `alphabetical`, grouped, etc.
  To modify these settings, you can add them to your workspace or user settings JSON file. For example:

```json
{
  "styledComponentsSorting.enable": true,
  "styledComponentsSorting.sortOnSave": false,
  "styledComponentsSorting.sortOrder": "alphabetical"
}
```

These settings allow you to tailor the extension's functionality to better suit your workflow.

## Known Issues

Plz mail to me if you have any issues.
mail: `orirori512@naver.com`

## Release Notes

Users appreciate release notes as you update your extension.

### 0.0.1

Initial release of styled-components-sorting

### 0.0.2

Change Extension Icon

### 0.0.3

Update README.md

**Enjoy!**
