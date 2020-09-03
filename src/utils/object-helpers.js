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
  let biggestId = Math.max(...groups.map(i => i.id))

  console.log(groups.length === 0)

  if (groups.length === 0) {
    biggestId = 0
  } else {
    biggestId += 1
  }

  return biggestId
}

export const newLogin = (groups, idOfSelectedGroup, login) => {
  groups[idOfSelectedGroup].login = login.customLoginInput
  groups[idOfSelectedGroup].password = login.customPasswordInput

  return groups
}
