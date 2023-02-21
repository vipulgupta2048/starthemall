# Star Them All 

> Looking to preserve your Github commit graph by starring repos. Look no further. 

Star them all is brute force bag of scripted soltuion that does exactly what it says. It stars every single repository that your GitHub user is currently associated with even your repositories.

## Motiavtion

After reading into https://github.com/isaacs/github/issues/1138, and actually trying to find solutions keep the Github commit graph when leaving an organization. I came up with this rather crude solution of starring everything you were ever associated with. 

### But, why star them all, why not the ones you contributed to

That's because GitHub doesn't provide the contribution data for more than a 100 entries. Atleast not in a straightforward way as I figured after reading this [Stackoverflow post](https://stackoverflow.com/questions/20714593/github-api-repositories-contributed-to) and several other solutions. 

## Okay, how does it work? 

While I could have written the solution myself reading through the GitHub API docs and experimenting, I found a few scripts around the web that helped me achieve what I wanted to do. 

We use Sarav's script to pull all repositories associated with the current user into a text file. And, then use GitHub API to star this list of repositories. Mind you some repositories 404'ed for me hence I chose to port the solution to Node instead for better error handling instead. 

## How to run 

You would need Node.js and npm installed in your machine as well as fill out the `TOKEN` environment variables in the scripts `fetch-repos.sh` and `index.js`. Once done, run the following commands:

```bash
npm ci
chmod u+x fetch-repos.sh
./fetch-repos.sh > output.txt
node index.js

```  