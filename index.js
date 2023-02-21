const { Octokit } = require("@octokit/rest");
const { createReadStream } = require('fs')
const readline = require('readline');

async function starThemAll() {
  const octokit = new Octokit({
    auth: "TOKEN",
  });

  const names = createReadStream('output.txt')
  const repoNames = readline.createInterface({
    input: names,
    crlfDelay: Infinity
  });

  console.log("Starring them all ... \nError Log as follows:")
  for await (const repo of repoNames) {
    try {
      await octokit.request('PUT /user/starred/{owner}/{repo}', {
        owner: (repo.split('/'))[3],
        repo: (repo.split('/'))[4],
      })
    } catch (e) {
      if (e.status === 404) {
        console.log(repo)
      }

    }
  }
}


starThemAll()