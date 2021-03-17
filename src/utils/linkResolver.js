const linkResolver = doc => {
  // Route for projects
  if (doc.type === "project") {
    return "/work/" + doc.uid
  }

  // Backup for all other types
  return "/"
}

module.exports = linkResolver