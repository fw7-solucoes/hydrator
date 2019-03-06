/**
 * Extract fields from a model and return a new object.
 */
const hydrate = (model, ignoredFields = []) => {
  if (!model) return null

  const modelFields = Reflect.ownKeys(model.dataValues)

  // Removing ignored fields.
  const result = modelFields.reduce((newObject, currentKey) => {
    if (ignoredFields.includes(currentKey)) {
      return newObject
    }

    return Object.assign(newObject, {
      [currentKey]: model.get(currentKey)
    })
  }, {})

  return result
}

module.exports = {
  hydrate
}
