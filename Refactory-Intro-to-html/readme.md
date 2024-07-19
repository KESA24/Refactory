# Introduction to Html 

There are three online repository services. These are like the different network providers in Uganda like Airtel,MTN, Africell, Uganda Telecom..so git is a universal service.
Github
Bitbucket
Gitlab
Self Hosted Git
We shall use github for this.

"Remote" stands for the different accounts online that the repository can live in/ copies of your code that exist online on the platforms listed above.
"Origin" is a name given to a remote url, it can be anything. That is to say the url you copy from; e.g github. In this case, the repository url that you created will be called "origin". This name can be anything as ong as it points to the right url

"origin" = "https://github.com/KESA24/Refactory-Intro-to-html.git"
so you/I can rename this to "kesa" ="https://github.com/KESA24/Refactory-Intro-to-html.git"

This is good if you are working with so many online repositories referencing the same repo. (like twinss..)

You can rename the remote name from e.g "origin" to "Kesa" using the command git  remote rename. 
e.g you can type" git  remote renanme origin kesa"...get it?

You can also remove a remote by using the command "git remove", using the example above we can type the command          "git remove rigin" and this remote/url will be cleared from git

Introduction to Remote Repository, website -git-tower.com.

Read me is like a signpost to your repository. Its like a summary of what the project is about. 
Readmes use a markdown language, you  read more about markdown.org to learn more about it. The extension .md, uses this format/language. Please read more to understand the different formatting and styles you can add to your document. e.g in the heading above, the # introduced the underline and made it a heading

Make sure to commit all changes, as they wont be pushed if you do not commit
We commit to our local repository.
We push to the online repository
So you must commit to push

The command "git pull" get changes made in the online repository and adds them to the local repository

Git Branches
1. Master: This branch is the main/viable version of the project/product at a given time.
2.Branches: Use branches to work on product parts before merging to the final product. The command to create a branch is "git checkout -b "branch name"" for example, "git checkout -b "desserts:"

Branches can be merged using the git merge "branch name". You checkout the branch that you want a branch merged to and type this comman there.
We go back to a file version by typing the command "git reset --hard [git log reference number generated when you commit changes hence commit importance]"

#CSS Introduction
Css is used to design and improve how an html document looks like.

Css selectors are used to select an element. These are like names of the elemnts in an html page

elements with "ids" are called with '#[idname]'. On each page, there should only one element with a particular id, as in normal life, one item has one particular id.

1.By default,all elements have a default style.
2.You can specify style for a given element using the elemnt selector and all elements on the page will change.
 3.If you define a class and assign it to the elements on the page, it overides the element 
 selector and the default selector.
  4.If you define an id and assign it to an element, it overides the class, the element and the default styles.
     id>class>element>default.

The CSS Universal selector is * sign
You can also group select elements in html if they all have the same look--->; h1,h2,p{}

Inline (defined in the element),Internal(defined in style tag in the html document/file in the head section) and External CSS(defined in a separate file and linked in the head section )