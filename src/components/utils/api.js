export const fetchLanguageRepos = (lang) => {
  const endPoint = `https://api.github.com/search/repositories?q=stars:>1+language:${lang}&sort=stars&order=desc&type=Repositories`

  return fetch(endPoint)
    .then(res => res.json())
    .then(data => {
      if (!data.items) {
        throw new Error(data.message)
      } 
        return data.items
    })
}


