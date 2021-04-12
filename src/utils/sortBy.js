export function sortBy(repoList, order) {
  if (order === 'asc') {
    return ascSort(repoList)
  } else {
    return descSort(repoList)
  }
}

function ascSort(repoList) {
  for (let i = 0; i < repoList.length; i++) {
    for (let j = i + 1; j < repoList.length; j++) {
      if (repoList[i].stars > repoList[j].stars) {
        let aux = repoList[i].stars
        repoList[i].stars = repoList[j].stars
        repoList[j].stars = aux
      }
    }
  }

  return repoList
}

function descSort(repoList) {
  for (let i = 0; i < repoList.length; i++) {
    for (let j = i + 1; j < repoList.length; j++) {
      if (repoList[i].stars < repoList[j].stars) {
        let aux = repoList[i].stars
        repoList[i].stars = repoList[j].stars
        repoList[j].stars = aux
      }
    }
  }

  return repoList
}