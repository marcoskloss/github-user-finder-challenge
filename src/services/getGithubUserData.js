const USER_DATA_BASE_API_URL = 'https://api.github.com/users/{username}'
const USER_REPOS_BASE_API_URL = 'https://api.github.com/users/{username}/repos'

export async function getGithubUserData(user) {
  const url = USER_DATA_BASE_API_URL.replace('{username}', user)
  const response = await fetch(url)
  const data = await response.json()
  const { followers, following, avatar_url, email, bio } = data

  const repoList = await getGithubUserRepoList(user)

  return {
    userData: {
      followers,
      following,
      avatar_url,
      email,
      bio
    },
    repoList
  }
}

async function getGithubUserRepoList(user) {
  const url = USER_REPOS_BASE_API_URL.replace('{username}', user)
  const response = await fetch(url)
  const data = await response.json()
  
  const reposList = data.map(repo => {
    return {
      fullName: repo.full_name,
      description: repo.description,
      languages: repo.languages,
      stars: repo.stargazers_count,
      link: repo.html_url
    }
  })

  return reposList
}