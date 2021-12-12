export const fetchLanguageRepos = (lang) => {
  const endPoint = `https://api.github.com/search/repositories?q=language:${lang}+stars:>=10000&sort=stars&order=desc`

  return fetch(endPoint)
    .then(res => res.json())
    .then(data => {
      if (!data.items) {
        throw new Error(data.message)
      } 
        return data.items
    })
}


