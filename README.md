# Christmas Movies Advent Calendar

## Description

In the spirit of the Christmas holiday, this site presents an advent calendar that suggests a classic Christmas-themed movie to watch for each day of the month of December, leading up to Christmas. When clicking on a box on the advent calendar, users will be presented with a pop-up screen containing the information for the corresponding day's movie. This information includes the movie title, poster, release year, rating, a brief description, and the trailer. While suggesting classic Christmas movies to watch is the main goal of this site, sprinkled in between, for a few of the days, are fun and hands-on Christmas activity suggestions for users to participate in (either alone or with their family and friends) and take a break from the screen. The goal of including these activities is for users to also spend quality time with those whom they care about during this holiday season.

The inspiration for this site includes the holiday season decorations that can be found around NYC, advent calendar products that are advertised during the time leading up to the holiday season, and [The Best Classic Christmas Movies of All Time](https://www.townandcountrymag.com/leisure/arts-and-culture/news/g962/the-most-classic-christmas-movies/?fbclid=IwAR2vrxQmr6iWwD-KkpG38YMeedu1kxiCW8nWK7pR8JAdn8S0KJTi1ETt1Vo).

## Challenges faced/Unsolved problems

A challenge of making this site was positioning the calendar and making sure that it stays in the same place regardless of the screen size and the load. Something strange that sometimes happens is on reload, the position of the calendar might shift upwards, causing it to be cut off, even though the previous load was done correctly. This is still unsolved because the cause is not yet clearly identified. Another challenge is embedding the trailer videos from Youtube. Even though the embedded link and code comes from Youtube's share option, there are multiple errors in the console that seem to identify problems with requests sent to Youtube. However, the embedded links are working as expected, so these request errors do not seem to affect the functionality of the site.

## Link to website

https://happy-holidays-advent-calendar.netlify.app/

## References

- Page loader: [How to show Page Loading div until the page has finished loading?](https://www.geeksforgeeks.org/how-to-show-page-loading-div-until-the-page-has-finished-loading/)
- Advent calendar: [Advent Calendar | 3d | css](https://codepen.io/MarkBoots/pen/LYrQgXO?editors=1100)
- Movie ideas: [The Best Classic Christmas Movies of All Time](https://www.townandcountrymag.com/leisure/arts-and-culture/news/g962/the-most-classic-christmas-movies/?fbclid=IwAR2vrxQmr6iWwD-KkpG38YMeedu1kxiCW8nWK7pR8JAdn8S0KJTi1ETt1Vo)
- Movie Details: [IMDb](https://www.imdb.com/)
