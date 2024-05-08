export const useSortedPosts = (selectedSort, posts) => {
    if (selectedSort){
        return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
}

export const usePosts = (word, posts, selectedSort) => {

    const sortedPosts = useSortedPosts(selectedSort, posts)
    console.log('searching....', word);

    if (word == undefined)
    {
      return posts
    } else {
      //const postsFound = posts.filter(p => p.title.toLowerCase().includes(word.toLowerCase().trim()))
      return sortedPosts.filter(p => p.title.toLowerCase().includes(word.toLowerCase().trim()))
    }
  }