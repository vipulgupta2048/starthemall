# Star Them All 

> Looking to preserve your Github commit graph by starring repos. Look no further. 

Star them all is brute force bag of scripted soltuion that does exactly what it says. It stars every single repository that your GitHub user is currently associated with. Private, public repositories - everything. 

## Why do this? - Motiavtion

You can lose years worth of contributions when you leave your company since private contributions go away when you leave an organization. 

After reading about https://github.com/isaacs/github/issues/1138, I built this solution to keep the GitHub commit graph pristine when leaving an organization. This is crude solution to star everything you were ever associated with. 

Follow [GitHub's best practices](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-personal-account/best-practices-for-leaving-your-company) on leaving a company when you use the same personal/work GitHub account. 

### But, why star them all, why not the ones you contributed to

That's because GitHub doesn't provide the contribution data for more than a 100 entries. Atleast not in a straightforward way as I figured after reading this [Stackoverflow post](https://stackoverflow.com/questions/20714593/github-api-repositories-contributed-to) and several other solutions. 

This script was created in a pre-vibe coding world. Feel free to contribute improvements!

## Okay, how does it work? 

We use Sarav's script to pull all repositories associated with the current user into a text file. Next, use GitHub API to star this list of repositories. 

## How to run 

You would need Node.js and NPM installed in your machine as well as fill out the `TOKEN` environment variables in the scripts `fetch-repos.sh` and `index.js`. Once done, run the following commands:

```bash
npm ci
chmod u+x fetch-repos.sh
./fetch-repos.sh > output.txt
node index.js
```
