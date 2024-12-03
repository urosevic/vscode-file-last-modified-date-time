// The module 'vscode' contains the VS Code extensibility API
const vscode = require('vscode');
const fs = require('fs'); // Required for file stats
const dayjs = require('dayjs'); // Required modern API to formad date and time
const localizedFormat = require('dayjs/plugin/localizedFormat');
const advancedFormat = require('dayjs/plugin/advancedFormat');
const updateLocale = require('dayjs/plugin/updateLocale');

dayjs.extend(localizedFormat);
dayjs.extend(advancedFormat);
dayjs.extend(updateLocale);

function activate(context) {
  let statusBarItem;

  // Create or update the status bar item
  const createOrUpdateStatusBar = () => {
    const config = vscode.workspace.getConfiguration('file-last-modified-date-time');
    const position = config.get('statusBarAlignment', 'right');
    const priority = config.get('statusBarPriority', 100);

    // Dispose old status bar item if it exists
    if (statusBarItem) {
      statusBarItem.dispose();
    }

    // Create a new status bar item
    const alignment =
      position.toLowerCase() === 'left'
        ? vscode.StatusBarAlignment.Left
        : vscode.StatusBarAlignment.Right;
    statusBarItem = vscode.window.createStatusBarItem(alignment, priority);
    statusBarItem.show();

    // Update status bar content
    updateStatusBar();
  };

  // Update the status bar with the last modified datetime
  const updateStatusBar = () => {
    const editor = vscode.window.activeTextEditor;
    if (editor && 'file' === editor.document.uri.scheme) {
      const filePath = editor.document.fileName;

      // Get file stats
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Error reading file stats: ${err.message}`);
          statusBarItem.text = "Error: Unable to read file stats.";
          return;
        }

        // Get configuration for formatting
        const config = vscode.workspace.getConfiguration('file-last-modified-date-time');
        const locale = config.get('locale', 'en');
        const format = config.get('dateTimeFormat', 'MM/DD/YYYY h:m:s a');
        const label = config.get('label', 'Last Modified');

        // Dynamically load and set the Day.js locale
        try {
          require(`dayjs/locale/${locale}`);
          dayjs.locale(locale);
        } catch {
          console.warn(`Locale "${locale}" not found. Falling back to "en".`);
          dayjs.locale('en');
        }

        // Format the last modified time
        const lastModified = dayjs(stats.mtime).format(format);
        statusBarItem.text = `${label}: ${lastModified}`;
      });
    } else {
      statusBarItem.text = "No file open.";
    }
  };

  // Register commands or events
  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor(updateStatusBar),
    vscode.workspace.onDidSaveTextDocument(updateStatusBar),
    vscode.workspace.onDidChangeConfiguration((e) => {
      if (e.affectsConfiguration('file-last-modified-date-time')) {
        createOrUpdateStatusBar(); // Recreate the status bar when config changes
      }
    })
  );

  // Initialize status bar
  createOrUpdateStatusBar();
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
