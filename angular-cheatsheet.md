# Angular Cheatsheet

# Module VS Component
- component : building block of application with an associated template

## @NgModule : 
A module is a collection of components, services, directives, pipes, etc.

- declarations : to make directives (including components and pipes) from the current module available to other directives in the current module. Selectors of directives, components or pipes are only matched against the HTML if they are declared or imported
  
- imports : makes the exported declarations of other modules available in the current module
  
- providers : are to make services and values known to dependency injection.

- bootstrap : The root component that Angular creates and inserts into the index.html host web page

- services : reusable code that is shared by the Components so that rewriting of code is not required

## Other
- pipe : for data transformation (ex: transform string, currency amounts, dates,etc.)
- directive (attribute): change the appearence of dom elements