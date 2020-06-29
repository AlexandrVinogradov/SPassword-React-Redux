export const idNormalizer = (groups, action) => {
  const items = groups.filter(g => {
    return g.name !== action.name
  })

  let newId = -1

  items.map(u => {
    newId += 1
    u.id = newId
  })

  return items
}

export const findNextId = groups => {
  const biggestId = Math.max(...groups.map(i => i.id))
  return biggestId + 1
}


export const newLogin = (groups, idOfSelectedGroup, login) => {

  groups[idOfSelectedGroup].login = login.customLoginInput
  groups[idOfSelectedGroup].password = login.customPasswordInput

  return groups
}