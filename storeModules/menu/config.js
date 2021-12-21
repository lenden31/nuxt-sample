const getCategoryTitle = (obj, categoriesLib) => {
  if (obj.subcategory) {
    return categoriesLib[obj.category].children[obj.subcategory].title
  } else {
    return categoriesLib[obj.category].title
  }
}

export { getCategoryTitle }
