let pyodide = null;

function waitForPyodideToLoad() {
  return new Promise((resolve, reject) => {
    const check = () => {
      if (window.loadPyodide) {
        resolve();
      } else {
        setTimeout(check, 50);
      }
    };
    check();
  });
}

export async function loadPyodideAndPackages() {
  if (!pyodide) {
    await waitForPyodideToLoad();
    pyodide = await window.loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.23.4/full/",
    });
  }
}

export async function runPython(code) {
  try {
    await loadPyodideAndPackages();
    const result = await pyodide.runPythonAsync(code);
    return result.toString();
  } catch (err) {
    return `Error: ${err.message}`;
  }
}
