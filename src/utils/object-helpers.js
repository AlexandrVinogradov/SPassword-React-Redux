const idNormalizer = (items, action) => {
  items = items.filter(g => {return g.name !== action.name})

  let newId = -1

  items.map(u => {
    newId += 1
    u.id = newId
  })

  console.log(123);
  return items
}

export default idNormalizer

// groups: state.groups.filter(g => {return g.name !== action.name}),
