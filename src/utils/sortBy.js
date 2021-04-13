export function sortBy(repoList, order) {
  console.log('order = ', order);

  if (order === 'asc') {
    const list = ascSort(repoList)

    const test = list.map(item => item.stars)
    console.log(test)

    return list
  } else {
    const list = descSort(repoList)

    const test = list.map(item => item.stars)
    console.log(test)

    return list
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