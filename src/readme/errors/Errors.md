# **_Errors, Bugs and Fixes_**

## **Error One**

![Broken Heroku](./1.%20Readme-Broken-Heroku.png)

## **Fix One**

### **I had to add in the correct node for Heroku to conect**

## ![Fixed Heroku](./1.%20Readme-Fixed.png)

---

## **Error Two**

![Broken CORS](./2.%20Readme-Broken.png)

## **Fix Two**

### **In order to fix this, I needed to head into my heroku page and remove the trailing forward slash from my Client Original Dev in my config vars**

---

## **Error Three**

![Broken Backend](./3.%20Readme-Broken-SignUp-Errors.png)
![Broken Backend](./3.1%20Readme-Broken-Expanded-Errors.png)
![Broken Backend](./3.2%20Readme-Broken-Using-Consolelog-To-Find-Error.png)
![Broken Backend](./3.3%20Readme-Broken-Same-Error.png)
![Broken Backend](./3.4%20Readme-Broken-Backend.png)

## **Fix Three**

I removed the backslashes '\' as though this is the correct way to break up strings, this actually broke my code. Which now leaves me with a 'line too long' warning in my settings.
![Fixed Backend](./3.%20Readme-Fixed-Removed-Slashes.png)

---

## **Error Four**

![Broken SignIn](./4.%20Readme-Broken-SignIn.png)

## **Fix Four**

### **Somehow I had called the SignIn function twice, so removed the second one, and the error disappeared**

![Fixed SignIn](./4.%20Readme-Fix-Two-Calls.png)

---

## **Error Five**

![Broken Props](./5.%20Readme-Broken-Props.png)

## **Fix Five**

### **I moved my props into the () in order to amend this error.**

---

## **Error Six**

![Broken URL](./6.%20Readme-Broken-URL.png)

## **Fix Six**

### **Removed forward slash and curly bracket from profile.js line 22**

---

## **Error Seven**

![Broken Profile Page](./7.%20Readme-Broken-ProfilePage-Error.png)

## **Fix Seven**

### **Uncommented the profilePage line so it loaded correctly. I had commented it out earlier in the project**

![Fix Profile Page](./7.%20Readme-Fix-Uncommented-PageProfile.png)

---

## **Error Eight**

![Broken Article](./8.%20Readme-Articles-Broken-1.png)
![Broken Article](./8.%20Readme-Articles-Broken-2.png)
![Broken Article](./8.%20Readme-Articles-Broken-3.png)

## **Fix Eight**

### **This took me a really long time to figure out, but I had used [] instead of {} in my Article Function. Quick typo, long fix**

---

## **Error Nine**

![Broken Eventpage](./9.%20Readme-Broken-Eventpage1.png)

## **Fix Nine**

### **I had to put the OwnerDropdown in the {} brackets**

![Fixed EventPage](./9.%20Readme-Fix-Eventpage.png)

---

## **Error Ten**

![Broken Edit Article](./10.%20Readme-Broken-Edit-Article.png)

## **Fix Ten**

### **I had accidentally added 's' to Articles meaning the app couldn't find the correct page when I clicked edit**

---

## **Error Eleven**

![Broken Form](./11.%20Readme-Broken-Form.png)

## **Fix Eleven**

### **I had to change the 'post' to 'put' and add the {id} to the URL**

![Fixed Form](./11.%20Readme-Fix-Form.png)

---

## **Error Twelve**

![Broken CSS Names](./12.%20Readme-Broken-Names.png)

## **Fix Twelve**

### **I had not spelt flex-column correctly**

![Fixed CSS Names](./12.%20Readme-Fixed-Names.png)

---

## **Error Thirteen**

### **Thirteen, unlucky for some, this happened to be the MOST difficult and frustrating error I had during my project. So much so, that I spent the better part of 8 hours, five or six different tutors assiting, over the course of a week and a half.**

![Broken Following](./13.%20Readme-Broken-Following-Users-1.png)
![Broken Following](./13.%20Readme-Broken-Following-Users-2.png)
![Broken Following](./13.%20Readme-Broken-Following-Users-3.png)

## **Fix Thirteen**

### **In order to remedy this error, I had to reset my entire API Database and all it's contents. Followers, profiles, posts, articles, event, everything. A complete reset of my ElphantSQL as well. According to one of the tutors he believed that the issue stemmed from the 'superuser was created before adding the post_save signal so the superuser didn't have a profile assigned, so the profile/user IDs didn't match.', which in turn meant that each time a user followed another user, a different unique ID was created which did not match the person you were trying to follow.**

---
