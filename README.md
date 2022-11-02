# Airbnb Clone

## Context 
The goal of this project is to focus on Frontend development, ie :
- fidelity with official website [airbnb.com](https://airbnb.com)
- UX / UI (responsive, clarity, animations)

Pages to implement :
- Home (filters, grid with defaults houses results)
- House detail page
- Displaying results is basically the same template as "home" (no need to display on a map)

We don't want to spend much time on backend. That's why we'll just implement a basic API that is only able to provide data. 
Which means: 
- no authentification system
- only GET requests (no POST, PUT, PATCH, DELETE, etc.)

First idea is to use a JSON file containing data, then use GraphQL on Frontend-side to make queries.


## 1. Run project
To launch this project, just run the command : 
```
ng serve
```

## 2. TODO :

### 2.1 Interface
- [ ] Système de routing

#### 2.1.1 Navbar
- [ ] dates filter
- [ ] filter by category (navbar)
- [ ] filter modal : by price, number of rooms, type, equipements


#### 2.1.2 Body
- [ ] implement search Engine
- [ ] create cards
- [ ] implement like system
- [ ] create navigation
- [ ] implement filters
- [ ] implement google maps

### 2.2 API
- [ ] create API  
- [ ] Translation system ?

### 2.3 Limits

- [ ] first, we won't implement an authentification system, we'll just use a basic profile with "liked houses"


