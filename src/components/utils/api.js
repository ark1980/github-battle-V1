const client_id = 'Iv1.9a48d64bf825266d';
const secret_id = 'f19154a1af7f54a5bd753c732949d0c2cb081b28';
const params = `?client_id=${client_id}&client_secret=${secret_id}`

// handeling error 
const getErrorMsg = (message, username) => {
  if (message === 'Not Found') {
    return `${username} doesn't exist`
  }

  return message
}

const getProfile = async (username) => {
  const res = await fetch(`https://api.github.com/users/${username}${params}`)
  const profile = await res.json()
    if (profile.message) {
      throw new Error(getErrorMsg(profile.message, username))
    }

    return profile
}

const getRepos = async (username) => {
  const res = fetch(`https://api.github.com/users/${username}/repos${params}&per_page=100`)
  const repos = (await res).json();
    if (repos.message) {
      throw new Error(getErrorMsg(repos.message, username))
    }

    return repos
}

const getStarCount = (repos) => {
  return repos.reduce((count, { stargazers_count }) => count + stargazers_count , 0)
}

const calculateScore = (followers, repos) => {
  return (followers * 3) + getStarCount(repos)
}

const getUserData = async (player) => {
  const [profile, repos] = await Promise.all([
    getProfile(player),
    getRepos(player)
  ])
  return ({
    profile,
    score: calculateScore(profile.followers, repos)
  })
}

const sortPlayers = (players) => {
  return players.sort((a, b) => b.score - a.score)
}

export const battle = async (players) => {
  const results = await Promise.all([
    getUserData(players[0]),
    getUserData(players[1])
  ]);
  return sortPlayers(results);
}


// fetching popular repos from Github
export const fetchLanguageRepos = async (lang) => {
  const endPoint = `https://api.github.com/search/repositories?q=stars:>1+language:${lang}&sort=stars&order=desc&type=Repositories`

  const res = await fetch(endPoint);
  const data = await res.json();
  if (!data.items) {
    throw new Error(data.message);
  }
  return data.items;
}


