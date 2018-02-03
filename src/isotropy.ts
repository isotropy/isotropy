#!/usr/bin/env node

import lib from "lib-isotropy";
import yargs = require("yargs");

lib({ items: yargs.argv._, named: yargs.argv }, process.cwd());
