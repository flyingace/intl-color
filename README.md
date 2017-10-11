# UI/UX Challenge for International Color

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

There is a near-complete version of this application which can be viewed [here](https://flyingace.github.io/intl-color/). I making two of the data fields editable and then this should be complete. I will update this README and all files once that is done.

Notes:
1. I have substituted a json file with more rows but with exactly the same data structure so that I could more easily
 test multiple filtering combinations. The only change that I've made is that where in the provided json file the 
 modifiedDates ended with values that had two spaces before the time zone differential (eg, '2014-11-08T11:44:51  +05:00') I have removed those two spaces since that better corresponds to a standard that the moment.js library I'm 
 using can parse. The file is called 'bug-tracker-data.json'.
2. In the Overview document it says "When filtering/searching by date, the resulting data set should return all 
records greater than or equal to that date." I would suggest changing the language there so that it's clearer whether
 you mean all records _before_ and including that date or _after_ and including that date. I read this to mean 
 _after_ and including this date.
 
