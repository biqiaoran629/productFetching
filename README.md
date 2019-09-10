# productFetching
fill in the details here
# Considerations
### Given more time, what can be improved?
* it should handle more product types by having more matching patterns - I noticed at least one more pattern can be mapped. 
* implement adapters towards all open source softwares. So when they change their API, I only have to change what's in the adapter, and not have to scan the whole repo.

# Question and Answers
* What were the biggest challenges you faced in writing the challenge?

  * **Time Management.** A week/ 4 hours is pretty short, considering I am not familiar with this particular project. Although I know what the general idea is, but it takes time to fill in the details. Research, design, setup, code, test, integration test, deploy can all take time, so I have to pick the most important ones to complete first. Because each topic can go really deep, so I have to try not to focus something too hard and get the general app running first.
  * **Limited Constraints.** I usually work with tight constraints and limited scope, so putting everything up from the ground up is definitely a big challenge to me. However, I think I am able to pick the most important info from the email, and treat this as a ticket from my PO, and stand on his/her POV and figure out what are the most important things for this project. I didn't spend too much time on research, where I can code up all patterns. I didn't spend too much time on writing the perfect error handling mechnism, although given more time I could. The most important thing is to have a app running, and that should be my focus.

* Can you explain your thought process on how you solved the problem, and what iterations you went through to get to this solution?
  * 

* If you had to scale this application to handle millions of people adding in ASIN's in a given day, what considerations would you make?
  * **Add Duplicate Servers, Load Balancer** With duplicate servers + load balancer, our system can be more reliable and handle more traffic. We should also use some backup servers as reliability should be more emphasized if a million users are using the app.
  * **Add Cache before DB** We should populate populer entries to the cache (maybe 20%) so it will be a faster get from the database.
  * **Implement Rate Limiter** With a million user, we don't want any user to spam requests so that it slows down for other users. So if we had a rate limiter based on userId/token, this will solve the problem. 

* Why did you choose the technologies you used?