const express = require("express")
const app = express()
const morgan = require("morgan")

app.use("/combined", morgan("combined"))
app.use("/common", morgan("common"))
app.use("/dev", morgan("dev"))
app.use("/short", morgan("short"))
app.use("/tiny", morgan("tiny"))

app.use("/:logFormat", (request, response) => {
  const formats = ["combined", "common", "dev", "short", "tiny"]
  const { logFormat } = request.params
  if (!formats.includes(logFormat)){
    response.send(`${logFormat} is not a valid format. Try: ${formats.join(", ")}`)
  } else {
    response.send(`Check the console for an example of the ${logFormat} format`)
  }
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))
