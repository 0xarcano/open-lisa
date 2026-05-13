#!/usr/bin/env node
import { main } from "./cli.js"

main(["install", ...process.argv.slice(2)]).then(
  (code) => {
    process.exitCode = code
  },
  (error) => {
    console.error(error instanceof Error ? error.message : String(error))
    process.exitCode = 1
  },
)
