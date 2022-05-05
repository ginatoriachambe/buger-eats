# Buger-Eats
Buger eats is a project that use cypress to test a Brazilian Web Application called "BugerEats" made to manage food deliveryman. I created this project following the Cypress course from QANinja taught by Fernando Papito.

You can find the course here [QANinja Website](https://qaninja.com.br/)

## Problem to solve
The goal was to improve the way I created projects for cypress. Before taking this course I created and organized projects taking into account the basic configuration that is taught in the cypress documentation. This way of working led me to several difficulties such as code repetition, I spent too much time writing code both when creating and updating test cases, and I had difficulty solving bugs because the code was long.

## The solution
Through my research and connections on linkedin, I discovered QANinja which is a platform that provides training aimed at qas. And I am happy to have successfully completed this course and to have achieved all the goals I had when looking for solutions to solve my problem.

## The results
After successfully completing the course, today I can create more organized projects with cypress, I can make the code more and more reusable, which helps me save the time I need to analyze new possible test cases. I also learned how to use GitActions and Cypress Dashboard together to manage test cases running on cypress
  
## Pre requisites to run my tests:
 1. Have NodeJs installed
 2. Have Cypress installed
 3. The webapp page you can find here [BugerEats WebApp](https://buger-eats-qa.vercel.app/)

## How to run my tests locally
1. Download the source code and run this command to install all the dependencies:
```bash
npm install cypress --save-dev
```
2. If you want to see the cypress running the tests on the browsers that you have your machine please run this command below and after that select what spec you want to run:
```bash
npm run test
```
3. If you want to run the tests on background and see the tests report on cypress dashboard you can run this command:
```bash
npx cypress run --record --key 258c5501-85bf-4d51-9462-f740b89428eb
```
Click here [Cypress Dashboard](https://dashboard.cypress.io/projects/qmozyr/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D) to see the tests running on dashboard

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
 
