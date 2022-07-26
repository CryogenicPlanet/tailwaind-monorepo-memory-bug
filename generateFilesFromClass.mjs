#!/usr/bin/env zx
const css = require('css')

const file = fs.readFileSync("./generatedTailwind.css", "utf8")

const cssTree = css.parse(file)

let classNames = cssTree.stylesheet.rules.filter((rule => rule.selectors?.[0].startsWith("."))) 

const mediaQueries = cssTree.stylesheet.rules.filter((rule => rule.type === "media"))

const extraClassNames = mediaQueries.map((query => query.rules.filter((rule => rule.selectors?.[0].startsWith("."))))).flat()

classNames = classNames.concat(extraClassNames)

// console.log(classNames)

const classXyz = classNames.map((className => className.selectors?.[0].slice(1))).join(" ")
// console.log(classXyz)

const div = `<div className="${classXyz}"></div>`

console.log(div)