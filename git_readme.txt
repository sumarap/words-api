


Working with multiple git user accounts

Created  a ~/.ssh/config file to allow accessing of git using multiple git accounts

Use the text of the key file, before the _rsa
~/.ssh/github_sumarap_rsa
Use "github_sumarap" 

Instead of using this to add a git remote to a project...
git remote add origin git@github.com:sumarap/words-api.git

..use (github-sumarap) to match the value in the .ssh/config file, like  this:
git remote add origin git@github-sumarap:sumarap/words-api.git


