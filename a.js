// Function to load and initialize WASM exports
async function loadWasmExports(input) {
  try {
    const result = await WebAssembly.instantiateStreaming(fetch(input));

    // Assign exported functions to window object
    for (const [key, value] of Object.entries(result.instance.exports)) {
      if (typeof value === "function") {
        console.log(`Function ${key} is exported`);
        window[key] = value;
      }
    }
  } catch (error) {
    console.error("Error loading WASM:", error);
  }
}

// Main async function to run our code
async function main() {
  await loadWasmExports("add.wasm");

  // Now we can use the exported functions
  console.log(add(1, 2));
}

// Run the main function
main().catch((error) => console.error("Error in main:", error));
