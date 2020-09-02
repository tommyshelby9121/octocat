# 🤖 Commands

## Prerequisites
Anything in between `<>` means required and anything in between `[]` means optional.

## Getting User Info
In order to get user information from github with OctoCat you can do the following;

### `!userinfo <username>`

Here, the first and only parameter is the username of the user whose information you are trying to retrieve. In order to get your own information, you are not required to provide a parameter, just doing `!userinfo` will grab your own information.

Example: `!userinfo tommyshelby9121`

This gets all the publicly information available and is sorted and displayed by relevance.

## Creating Repositories
In order to create a repository with OctoCat, you can do the following;

### `!createrepo <name> [visibility]`

Here, the first parameter is the name which you wish to use for your repository. And if you want the repository to be public, you don't have to provide a second parameter as it defaults to public. But if you want it to be private, you must specify.

Example: `!createrepo foobar private`

This creates a repository called `foobar` and makes it private.

## Deleting Repositories

In order to delete a repository with OctoCat, you can do the following;

### `!deleterepo <name>`

Here, the first and only parameter is the name of the repository which you wish to delete.

> **Note:** If you execute this command there is no going back. Your repository will get deleted and there is nothing you nor I can do about it. So please proceed with caution.