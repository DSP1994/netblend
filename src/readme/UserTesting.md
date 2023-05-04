# **User Stories**

---

### **Authentications**

---

1. As a **user** I would like to **create an account** so that I can **access all the site features**

   - I can click on **sign in** and new icons appear in the **nav bar**.

2. As a **user** I would like to **login** so that I can **use with the content available only to users**

   - I can click on **sign in** and new icons appear in the **nav bar**.

3. As a **user** I would like to **logout** so that I can **exit my account & stop someone else using it**

   - I can click **sign out**.

4. As a **user** I would like to **quickly see my logged in/out status** so that I can **decide on what to do next**

   - In the top right of my screen I can see my **profile** and a **sign out** button which incidates if I am logged in. Or I see a **sign in** button to indicate I am logged out.

5. As an **admin** I would like to **refresh access tokens** so that **users can remain logged in for 24h**
   - Within the CurrentUserContext.js code, I have used the code provided by the CI to refresh access codes to keep a user logged in for 24 hours.

### **Navigation**

---

6. As a **user** I would like a **nav bar on every page** so that I can **easily navigate through the site**

   - By clicking through each page on the **nav bar** I can clearly see it reoccuring on each page, allowing for easy navigation.

7. As a **user** I would like to **use infinite scroll** so that I don't **have to click onto another page**
   - By adding more than 10 posts to the site I was able to scroll down and the page automatically refreshed to provide more posts.

### **Posts**

---

8. As a **user** I would like to **create a new post** so that I can **share my pictures with friends**

   - By clicking **add photo** I am able to create a new post.

9. As a **user** I would like to **view all posts** so that I can **see all the content**

   - By clicking **home** or the **icon** I get directed to the main homepage to view all content.

10. As a **user** I would like to **view the posts' details** so that I can **see more information about it**

    - When I click on a post I am able to see the **caption and any comments** associated with it.

11. As a **user** I want to be able to **like a post** so that I can **show how I feel about it**

    - Whether I am on the home page, or a particular post, I can see a **heart icon** which when clicked, turns red, or empties if I unlike.

12. As a **user** I would like to **view liked posts** so that I can **so that I can see the posts I have previously liked**

    - Once I have liked a post, I can go back through and see these likes by clicking **liked posts**.

13. As a **user** I would like to **search posts** so that I can **find a post by author or title effectively**

    - At the top of the home page is a little **search bar** which allows me to search through all avaliable posts.

14. As a **user** I would like to **follow users** so that I can **see their posts**

    - I can click on the most **popular users** on the right hand side (on PC) and press the **follow button**. Or at the top of the screen (on mobile) I get directed to their **profile page** and I can click the **follow button** there instead.

15. As a **user** I would like to **edit my post** so that I can **change my content**

    - When I click on my post, three dots appear which I am able to click on to **edit** my post. This takes me to a familiar page, that looks like the upload page, but has all my content already prefilled out, so I am able to **change** things.

16. As a **user** I would like to **delete my post** so that **I have the freedom to change my content**
    - When I click on my post, three dots appear which I am able to click on to **delete** my post.

---

### **Comments**

17. As a **user** I would like to **create a comment** so that I can **express my thoughts**

    - On my own, and other peoples posts, I am able to **create and leave a comment** to express any thoughts.

18. As a **user** I would like to **see the comment date** so that I can **know if I'm replying to a recent conversation**

    - When viewing other comments **I am able**to see whether or not it is a recent comment.

19. As a **user** I would like to **view other comments** so that I can **see what others think**

    - There is a **comments section** below or to the side of each post I click on.

20. As a **user** I would like to **edit my comment** so that I can **change my mind**

    - Once I have posted my comment, three dots appear again, and I am able to **edit** my comment.

21. As a **user** I would like to **delete my comment** so that **no one can see it**

    - Once I have posted my comment, three dots appear again, and I am able to **delete** my comment

---

### **Profiles**

22. As a **user** I would like to **view a profile page** so that I can **see information about them**

    - When I click on someones **profile picture** I get redirected to their **profile page**

23. As a **user** I would like to **see most popular profiles** so that I can **see if their content is something I'd want to follow**

    - On the right hand side, or at the top (on mobile view) there is a list of **popular profiles** on posts, events and articles.

24. As a **user** I would like to **see stats via a user profile** so that I can **see how many followers/following/posts they have**

    - When I click on a **profile** I am able to see how many **posts, followers and following** they have.

25. As a **user** I would like to **follow/unfollow a user** so that I can **keep tabs on users I like, and stop liking**

    - I am able to press the **follow** button, and then again when it says **unfollow** to my hearts content.

26. As a **user** I would like to **view all posts by a user** so that I can **go through their previously posted content**

    - When on another users **profile** I am able to see a list of all their **posts**.

27. As a **user** I would like to **edit my profile** so that I can **update my personal details**

    - On my own personal **profile** I can press the three dots and **edit my profile**.

28. As a **user** I would like to **update my username/password** so that I can **change them as I please**

    - On my own personal **profile** I can press the three dots and **update my user/password**.

29. As a **user** I would like to **set my avatar** so that I can **put a photo onto my profile**

    - On my own personal **profile** I can press the three dots and **amend my profile picture**.

30. As a **user** I would like to **view other users avatars** so that I can **recognise another user**
    - When on any page that has a user post/article/event, I am able to see their **profile picture**, as well as on the **popular profile section**.

---

### **Events**

31. As a **user** I would like to **create an event** so that I can **inform friends and other people of my event**

    - By clicking **create event** I am able to create a new event via filling out the form.

32. As a **user** I would like to **edit an event** so that I can **change any details where needed**

    - When I click on my event, three dots appear which I am able to click on to **edit** my event. This takes me to a familiar page, that looks like the create page, but has all my content already prefilled out, so I am able to **change** things.

33. As a **user** I would like to **delete an event** so that I can **delete events that are no longer happening/have finished**

    - When I click on my event, three dots appear which I am able to click on to **delete** my event.

34. As a **user** I would like to **search all events** so that I can **find events near me or by name**

    - At the top of the events page is a little **search bar** which allows me to search through all avaliable events.

35. As a **user** I would like to **see all events** so that I can **see all of the events happening**

    - By clicking on the **events** tab, I can see a list of all the events within the community.

---

### **Articles**

36. As a **user** I would like to **create an article** so that I can **share more information than on a comment**

    - By clicking **create article** I am able to create a new article via filling out the form.

37. As a **user** I would like to **edit an article** so that I can **amend the information I provided**

    - When I click on my article, three dots appear which I am able to click on to **edit** it. This takes me to a familiar page, that looks like the create page, but has all my content already prefilled out, so I am able to **change** things.

38. As a **user** I would like to **delete an article** so that I can **remove information that is no longer required**

    - When I click on my article, three dots appear which I am able to click on to **delete** my article.

39. As a **user** I would like to **search all articles** so that I can **find the article I’m looking for**

    - At the top of the articles page is a little **search bar** which allows me to search through all avaliable articles.

40. As a **user** I would like to **view all articles** so that I can **take a gander through everyones thoughts**

    - By clicking on the **articles** tab, I can see a list of all the articles within the community.

41. As a **user** I would like to **view article details** so that I can **view it in a large window and not be distracted by other articles**
    - I can simply click on the **article** and it directs me to the articles page where I can read at my own leisure.

---
