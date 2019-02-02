import { Movie } from './../interface/movie';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const movies = [
      {
        id: 1,
        imdbId: 'tt2386490',
        imdbRating: 8.1,
        title: 'How to Train Your Dragon: The Hidden World',
        poster: 'https://m.media-amazon.com/images/M/MV5BMjIwMDIwNjAyOF5BMl5BanBnXkFtZTgwNDE1MDc2NTM@._V1_SX300.jpg',
        trailer: 'https://www.youtube.com/watch?v=OFeI5ohUVSA',
        overview: 'The adventures of Hiccup and Toothless continue in the third part of the beloved How to Train Your Dragon series. But when Toothless meets a new love interest and there’s a threat in the village, their friendship is tested like never before. A DreamWorks animation featuring Jay Baruchel, Cate Blanchett, Kristen Wiig and T.J. Miller.',
        director: 'Dean DeBlois',
        cast: ['Jay Baruchel', 'Cate Blanchett', 'Kristen Wiig', 'Gerard Butler', 'Jonah Hill'],
        relealse_date: '02/01/2019',
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
        trailer: 'https://www.youtube.com/watch?v=w7pYhpJaJW8',
        overview: 'An action-packed story of one young woman\'s journey to discover the truth of who she is and her fight to change the world.',
        director: 'Robert Rodriguez',
        cast: ['Eiza González', 'Jennifer Connelly', 'Jackie Earle Haley'],
        relealse_date: '02/05/2019',
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
        trailer: 'https://www.youtube.com/watch?v=95ghQs5AmNk',
        overview: 'Starring an incredible trio of Bruce Willis, Samuel L. Jackson, and James McAvoy, Glass is the latest film from director M. Night Shyamalan and follows the stories of David Dunn and Kevin Crumb, who come up against each other as Dunn pursues The Beast, determined to put an end to the superhuman nightmare. When the mysterious Elijah Price, aka Mr. Glass, reappears in Dunn’s life, the three men are forced to accept they’re part of something much larger – and it’s Mr. Glass who holds the secrets that could change everything. Anya Taylor-Joy returns as Casey Cooke, and Sarah Paulson stars as psychologist Dr. Ellie Staple, who is drawn into the men’s parallel reality.',
        director: 'M. Night Shyamalan',
        cast: ['Samuel L. Jackson', 'Anya Taylor-Joy', 'Bruce Willis', 'Gerard Butler', 'James McAvoy'],
        relealse_date: '01/18/2019',
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
        trailer: 'https://www.youtube.com/watch?v=WDkg3h8PCVU',
        overview: 'The reluctant King of Atlantis is torn between his two homes as surface dwellers and the citizens of Atlantis collide. Following on from the events of Justice League, Aquaman stars Jason Momoa as the half-Atlantean, alongside Amber Heard, Patrick Wilson, Willem Dafoe and Nicole Kidman.',
        director: 'James Wan',
        cast: ['Jason Momoa', 'Amber Heard', 'Nicole Kidman', 'Patrick Wilson', 'Willem Dafoe'],
        relealse_date: '12/21/2018',
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
        trailer: 'https://www.youtube.com/watch?v=PzcaR1N0pTI',
        overview: 'It’s 1930s London and everyone’s favourite nanny has returned – Mary Poppins (Emily Blunt) is ready to spread joy and magic in the much-anticipated sequel to the 1964 classic. This time, she finds that the Banks children have grown up and found themselves in need of a friendly face – as well as a little bit of magic. A Disney musical and sequel starring Emily Blunt, Lin-Manuel Miranda, and Ben Wishaw, along with Dick Van Dyke, Emily Mortimer, Colin Firth, and Meryl Streep.',
        director: 'Rob Marshall',
        cast: ['Emily Blunt', 'Meryl Streep', 'Dick Van Dyke', 'Ben Whishaw', 'Emily Mortimer'],
        relealse_date: '12/21/2018',
        start_date: '12/21/2018',
        end_date: '03/12/2019',
        runtime: 130,
        mpaa: 'PG'
      }
    ];

    const showtimes = [
      {
        date: '02/01/2019',
        movies: [
          {
            id: 1,
            showtimes: [
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
              '8:00 PM'
            ]
          },
          {
            id: 2,
            showtimes: [
              '12:45 PM',
              '4:20 PM',
              '6:30 PM',
              '8:00 PM',
              '10:00 PM'
            ]
          },
          {
            id: 3,
            showtimes: [
              '10:20 AM',
              '12:00 PM',
              '1:45 PM',
              '3:00 PM',
              '5:30 PM',
              '6:45 PM'
            ]
          },
          {
            id: 4,
            showtimes: [
              '10:20 AM',
              '12:00 PM',
              '1:45 PM',
              '3:00 PM',
              '5:30 PM',
              '6:45 PM'
            ]
          },
          {
            id: 5,
            showtimes: [
              '10:20 AM',
              '12:00 PM',
              '1:45 PM',
              '3:00 PM',
              '5:30 PM',
              '6:45 PM'
            ]
          }
        ]
      }
    ];

    return {movies: movies, showtimes: showtimes};
  }
}
