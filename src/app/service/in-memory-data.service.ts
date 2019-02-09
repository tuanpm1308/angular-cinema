import { Showtime } from './../interface/showtime';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
// import mockData from './mock-data.json';
import { Database } from '../interface/database';
import { ShowtimeDate } from '../interface/showtime-date';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const data: Database = this.getMockData();

    // setup demo showtimes data
    const randomDate = [
      [1, 0, 1, 0, 1, 0, 0],
      [0, 1, 1, 0, 0, 0, 1],
      [1, 0, 1, 1, 0, 1, 0],
      [1, 1, 0, 1, 1, 0, 0],
      [0, 1, 1, 0, 0, 1, 1],
      [1, 0, 0, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 1, 0],
      [1, 0, 0, 0, 1, 0, 1]
    ];

    for (const i in data.showtimes) {
      if (data.showtimes[i]) {
        const today = new Date();
        const showtime = data.showtimes[i].showtimes[0];
        data.showtimes[i].showtimes = [];

        for (let c = 0; c < 7; c++) {
          if (randomDate[i][c]) {
            const newShowtime: ShowtimeDate = {
              date: this.dateToString(today),
              times: showtime.times
            };

            data.showtimes[i].showtimes.push(newShowtime);
          }

          today.setDate(today.getDate() + 1);
        }
      }
    }

    return data;
  }

  private dateToString(date: Date): string {
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
  }

  private getMockData(): Database {
    return {
      movies: [
        {
          id: 1,
          imdbId: 'tt2386490',
          imdbRating: 8.1,
          title: 'How to Train Your Dragon: The Hidden World',
          poster: 'https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_SX300.jpg',
          backdrop: 'https://m.media-amazon.com/images/M/MV5BMzI3MTc2NDY4MV5BMl5BanBnXkFtZTgwNDU3NTI2NjM@._V1_SX1777_CR0,0,1777,736_AL_.jpg',
          trailer: 'https://www.youtube.com/watch?v=OFeI5ohUVSA',
          overview: 'The adventures of Hiccup and Toothless continue in the third part of the beloved How to Train Your Dragon series. But when Toothless meets a new love interest and there’s a threat in the village, their friendship is tested like never before. A DreamWorks animation featuring Jay Baruchel, Cate Blanchett, Kristen Wiig and T.J. Miller.',
          director: 'Dean DeBlois',
          cast: [
            'Jay Baruchel',
            'Cate Blanchett',
            'Kristen Wiig',
            'Gerard Butler',
            'Jonah Hill'
          ],
          release_date: '02/01/2019',
          start_date: '02/01/2019',
          end_date: '04/01/2019',
          runtime: 104,
          mpaa: 'PG'
        },
        {
          id: 2,
          imdbId: 'tt0437086',
          imdbRating: 6,
          title: 'Alita: Battle Angel',
          poster: 'https://m.media-amazon.com/images/M/MV5BNzVhMjcxYjYtOTVhOS00MzQ1LWFiNTAtZmY2ZmJjNjIxMjllXkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_SX300.jpg',
          backdrop: 'https://m.media-amazon.com/images/M/MV5BMjA3NjEwMDY3N15BMl5BanBnXkFtZTgwNTQ1MTQzNDM@._V1_SX1777_CR0,0,1777,960_AL_.jpg',
          trailer: 'https://www.youtube.com/watch?v=w7pYhpJaJW8',
          overview:
            'An action-packed story of one young woman\'s journey to discover the truth of who she is and her fight to change the world.',
          director: 'Robert Rodriguez',
          cast: ['Eiza González', 'Jennifer Connelly', 'Jackie Earle Haley'],
          release_date: '02/05/2019',
          start_date: '02/05/2019',
          end_date: '04/05/2019',
          runtime: 132,
          mpaa: 'PG-13'
        },
        {
          id: 3,
          imdbId: 'tt6823368',
          imdbRating: 7.3,
          title: 'Glass',
          poster: 'https://m.media-amazon.com/images/M/MV5BMTY1OTA2MjI5OV5BMl5BanBnXkFtZTgwNzkxMjU4NjM@._V1_SX300.jpg',
          backdrop: 'https://m.media-amazon.com/images/M/MV5BY2IwMWE4YjctNTVlMy00MDUwLTkxOGYtMmJlNDEwYmViN2YxXkEyXkFqcGdeQXVyMzQ5ODY3NjA@._V1_SX1777_CR0,0,1777,999_AL_.jpg',
          trailer: 'https://www.youtube.com/watch?v=95ghQs5AmNk',
          overview:
            'Starring an incredible trio of Bruce Willis, Samuel L. Jackson, and James McAvoy, Glass is the latest film from director M. Night Shyamalan and follows the stories of David Dunn and Kevin Crumb, who come up against each other as Dunn pursues The Beast, determined to put an end to the superhuman nightmare. When the mysterious Elijah Price, aka Mr. Glass, reappears in Dunn’s life, the three men are forced to accept they’re part of something much larger – and it’s Mr. Glass who holds the secrets that could change everything. Anya Taylor-Joy returns as Casey Cooke, and Sarah Paulson stars as psychologist Dr. Ellie Staple, who is drawn into the men’s parallel reality.',
          director: 'M. Night Shyamalan',
          cast: [
            'Samuel L. Jackson',
            'Anya Taylor-Joy',
            'Bruce Willis',
            'Gerard Butler',
            'James McAvoy'
          ],
          release_date: '01/18/2019',
          start_date: '01/18/2019',
          end_date: '03/18/2019',
          runtime: 129,
          mpaa: 'PG-13'
        },
        {
          id: 4,
          imdbId: 'tt1477834',
          imdbRating: 7.5,
          title: 'Aquaman',
          poster: 'https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SX300.jpg',
          backdrop: 'https://m.media-amazon.com/images/M/MV5BMTg1MjMyOTQ2MV5BMl5BanBnXkFtZTgwNDA5NDcxNzM@._V1_.jpg',
          trailer: 'https://www.youtube.com/watch?v=WDkg3h8PCVU',
          overview:
            'The reluctant King of Atlantis is torn between his two homes as surface dwellers and the citizens of Atlantis collide. Following on from the events of Justice League, Aquaman stars Jason Momoa as the half-Atlantean, alongside Amber Heard, Patrick Wilson, Willem Dafoe and Nicole Kidman.',
          director: 'James Wan',
          cast: [
            'Jason Momoa',
            'Amber Heard',
            'Nicole Kidman',
            'Patrick Wilson',
            'Willem Dafoe'
          ],
          release_date: '12/21/2018',
          start_date: '12/21/2018',
          end_date: '03/12/2019',
          runtime: 143,
          mpaa: 'PG-13'
        },
        {
          id: 5,
          imdbId: 'tt5028340',
          imdbRating: 7.2,
          title: 'Mary Poppins Returns',
          poster: 'https://m.media-amazon.com/images/M/MV5BMTk0NDIzMTA1MF5BMl5BanBnXkFtZTgwMzM0MTUzNjM@._V1_SX300.jpg',
          backdrop: 'https://m.media-amazon.com/images/M/MV5BMTA4MTEyMDQ4MzdeQTJeQWpwZ15BbWU4MDIxNzA0MDcz._V1_SX1500_CR0,0,1500,999_AL_.jpg',
          trailer: 'https://www.youtube.com/watch?v=PzcaR1N0pTI',
          overview:
            'It’s 1930s London and everyone’s favourite nanny has returned – Mary Poppins (Emily Blunt) is ready to spread joy and magic in the much-anticipated sequel to the 1964 classic. This time, she finds that the Banks children have grown up and found themselves in need of a friendly face – as well as a little bit of magic. A Disney musical and sequel starring Emily Blunt, Lin-Manuel Miranda, and Ben Wishaw, along with Dick Van Dyke, Emily Mortimer, Colin Firth, and Meryl Streep.',
          director: 'Rob Marshall',
          cast: [
            'Emily Blunt',
            'Meryl Streep',
            'Dick Van Dyke',
            'Ben Whishaw',
            'Emily Mortimer'
          ],
          release_date: '12/21/2018',
          start_date: '12/21/2018',
          end_date: '03/12/2019',
          runtime: 130,
          mpaa: 'PG'
        },
        {
          id: 6,
          imdbId: 'tt6966692',
          imdbRating: 8.3,
          title: 'Green Book',
          poster: 'https://m.media-amazon.com/images/M/MV5BMjMyNzExNzQ5OV5BMl5BanBnXkFtZTgwNjM2MjIxNjM@._V1_SX300.jpg',
          backdrop: 'https://m.media-amazon.com/images/M/MV5BMmE2OGVkNjktZGFhMS00YTZkLTg5Y2ItYmExZDgyMzA4YmU1XkEyXkFqcGdeQXVyNTc5OTMwOTQ@._V1_.jpg',
          trailer: 'https://www.youtube.com/watch?v=QkZxoko_HC0',
          overview:
            'Two unlikely travelling companions must navigate the terrifying racism of the deep south in 1962, in this road-trip comedy-drama based on a true story. Directed by Peter Farrelly, Green Book stars Academy Award winner Mahershala Ali and two-time nominee Viggo Mortensen, alongside Linda Cardellini.',
          director: 'Peter Farrelly',
          cast: ['Mahershala Ali', 'Viggo Mortensen', 'Linda Cardellini'],
          release_date: '11/16/2018',
          start_date: '11/16/2018',
          end_date: '03/16/2019',
          runtime: 130,
          mpaa: 'PG-13'
        },
        {
          id: 7,
          imdbId: 'tt5848272',
          imdbRating: 7.3,
          title: 'Ralph Breaks the Internet',
          poster: 'https://m.media-amazon.com/images/M/MV5BMTYyNzEyNDAzOV5BMl5BanBnXkFtZTgwNTk3NDczNjM@._V1_SX300.jpg',
          backdrop: 'https://m.media-amazon.com/images/M/MV5BMTgxNTM2Njk3M15BMl5BanBnXkFtZTgwOTQyMjI5NDM@._V1_SX1777_CR0,0,1777,744_AL_.jpg',
          trailer: 'https://www.youtube.com/watch?v=T73h5bmD8Dc',
          overview: 'Just because he’s a Bad Guy, doesn’t mean he’s a bad guy. Ralph is back, and it’s on his wide shoulders to save Sugar Rush from extinction.',
          director: 'Phil Johnston, Rich Moore',
          cast: ['Alan Tudyk', 'John C. Reilly', 'Sarah Silverman'],
          release_date: '11/21/2018',
          start_date: '11/21/2018',
          end_date: '02/21/2019',
          runtime: 112,
          mpaa: 'PG'
        },
        {
          id: 8,
          imdbId: 'tt5886046',
          imdbRating: 6.4,
          title: 'Escape Room',
          poster: 'https://m.media-amazon.com/images/M/MV5BMjQ2NDMwMTY3MF5BMl5BanBnXkFtZTgwNDg5OTc1NjM@._V1_SX300.jpg',
          backdrop: 'https://m.media-amazon.com/images/M/MV5BMTk3OTI0NDQ4OF5BMl5BanBnXkFtZTgwNTYwMDg1NjM@._V1_.jpg',
          trailer: 'https://www.youtube.com/watch?v=6dSKUoV0SNI',
          overview:
            'Six strangers, all from wildly different walks of life, are invited to try out a brand-new escape room challenge and the chance to win a million dollars. But the hidden organisers have more planned than a puzzle… Escape Room is the latest horror from Insidious: Hidden Key director Adam Robitel, and stars Deborah Ann Woll, Taylor Russell, and Logan Miller.',
          director: 'Adam Robitel',
          cast: ['Deborah Ann Woll', 'Taylor Russel'],
          release_date: '01/04/2019',
          start_date: '01/04/2019',
          end_date: '04/01/2019',
          runtime: 99,
          mpaa: 'PG-13'
        }
      ],
      showtimes: [
        {
          movieId: 1,
          showtimes: [
            {
              date: '02/07/2019',
              times: [
                {
                  type: '3D',
                  time: '10:20 AM'
                },
                '11:00 AM',
                '1:00 PM',
                {
                  type: '3D',
                  time: '2:00 PM'
                },
                '4:00 PM',
                '6:00 PM',
                {
                  type: '3D',
                  time: '8:00 PM'
                },
                '10:00 PM'
              ]
            }
          ]
        },
        {
          movieId: 2,
          showtimes: [
            {
              date: '02/07/2019',
              times: ['12:45 PM', '4:20 PM', '6:30 PM', '8:00 PM', '10:00 PM']
            }
          ]
        },
        {
          movieId: 3,
          showtimes: [
            {
              date: '02/07/2019',
              times: [
                '10:20 AM',
                '12:00 PM',
                '1:45 PM',
                '3:00 PM',
                '5:30 PM',
                '6:45 PM'
              ]
            }
          ]
        },
        {
          movieId: 4,
          showtimes: [
            {
              date: '02/07/2019',
              times: [
                {
                  type: '3D',
                  time: '10:20 AM'
                },
                '11:00 AM',
                '1:00 PM',
                {
                  type: '3D',
                  time: '2:00 PM'
                },
                '4:00 PM',
                '6:00 PM',
                {
                  type: '3D',
                  time: '8:00 PM'
                },
                '10:00 PM'
              ]
            }
          ]
        },
        {
          movieId: 5,
          showtimes: [
            {
              date: '02/07/2019',
              times: [
                '10:20 AM',
                '12:00 PM',
                '1:45 PM',
                '3:00 PM',
                '5:30 PM',
                '6:45 PM'
              ]
            }
          ]
        },
        {
          movieId: 6,
          showtimes: [
            {
              date: '02/07/2019',
              times: ['12:45 PM', '4:20 PM', '6:30 PM', '8:00 PM', '10:00 PM']
            }
          ]
        },
        {
          movieId: 7,
          showtimes: [
            {
              date: '02/07/2019',
              times: [
                '10:20 AM',
                '12:00 PM',
                '1:45 PM',
                '3:00 PM',
                '5:30 PM',
                '6:45 PM'
              ]
            }
          ]
        },
        {
          movieId: 8,
          showtimes: [
            {
              date: '02/07/2019',
              times: [
                {
                  type: '3D',
                  time: '10:20 AM'
                },
                '11:00 AM',
                '1:00 PM',
                {
                  type: '3D',
                  time: '2:00 PM'
                },
                '4:00 PM',
                '6:00 PM',
                {
                  type: '3D',
                  time: '8:00 PM'
                },
                '10:00 PM'
              ]
            }
          ]
        }
      ]
    };
  }
}
