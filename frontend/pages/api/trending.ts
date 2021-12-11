// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   id: string;
//   name: string;
//   name_seo: string;
//   artist: {
//     id: string;
//     name: string;
//     artist_name: string;
//     muted: boolean,
//     place: null,
//     country: null,
//     followers: number,
//     follows: number,
//     liked: number,
//     releases: number,
//     favorites: number,
//     description: null,
//     profile_image_path: string;
//     cover_image_path: string;
//     favorite_genres: string[],
//     created: string;
//       location: null,
//         social_accounts: string[],
//           video_shout_out_count: number,
//             external_songs_count: null,
//               external_videos_count: 0,
//                 crews: []
//     },
// artist_name: * MrNobody ®,
// duration: 381,
//   bpm: 121,
//     likes: 2,
//       faves: 0,
//         plays: 8,
//           reposts: 0,
//             comments: 0,
//               description: 4.8,
//                 tags: null,
//                   source_info: 10526.924519014374,
//                     cover_image_path: https://dz2l6nhikl0ua.cloudfront.net/assets/cover_image/0197777d-aac2-11eb-b46c-064f3e9f608e.jpeg?cb=20211011141907,
// cover_image_aspect_ratio: 700: 700,
//   music_file_path: https://dz2l6nhikl0ua.cloudfront.net/assets/music_file/e08d3e58-aac1-11eb-b46c-064f3e9f608e.m4a?cb=20211011141907,
// music_file_mimetype: audio / mp4,
//   song_genres: [
//     {
//       id: 2,
//       name: House
//     },
//     {
//       id: 5,
//       name: Hip - Hop & Rap
//     },
//     {
//       id: 8,
//       name: Reggae / Dub
//     },
//     {
//       id: 11,
//       name: Movie Score
//     },
//     {
//       id: 20,
//       name: EDM
//     },
//     {
//       id: 31,
//       name: Trap
//     },
//     {
//       id: 42,
//       name: Electronic
//     },
//     {
//       id: 43,
//       name: Pop
//     }
//   ],
//     song_release: 2021 - 09 - 01T23: 12: 59 + 0200,
//       mix_packs: [],
//         linked_crews: []
// }

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(response)
}

// returns top 5
const response = [
  {
    "id": "019d5f3d - aac2 - 11eb- b46c - 064f3e9f608e",
    "name": "Lose Control",
    "name_seo": "lose-control-738",
    "artist": {
      "id": "c534b1ad-5169-11e6-9c9a-02fe9cf35e65",
      "name": "test_11_05_2021",
      "artist_name": "test_11_05_2021",
      "muted": false,
      "place": null,
      "country": null,
      "followers": 0,
      "follows": 0,
      "liked": 0,
      "releases": 0,
      "favorites": 0,
      "description": null,
      "profile_image_path": "https://api-stg.jam-community.com/img/user_logo_default.png",
      "cover_image_path": "https://api-stg.jam-community.com/img/user_bgr_default.png",
      "favorite_genres": [],
      "created": "2021-05-11T09:43:07+0200",
      "location": null,
      "social_accounts": [],
      "video_shout_out_count": 0,
      "external_songs_count": null,
      "external_videos_count": 0,
      "crews": []
    },
    "artist_name": "*                      MrNobody ®",
    "duration": 381,
    "bpm": 121,
    "likes": 2,
    "faves": 0,
    "plays": 8,
    "reposts": 0,
    "comments": 0,
    "description": "4.8",
    "tags": null,
    "source_info": "10526.924519014374",
    "cover_image_path": "https://dz2l6nhikl0ua.cloudfront.net/assets/cover_image/0197777d-aac2-11eb-b46c-064f3e9f608e.jpeg?cb=20211011141907",
    "cover_image_aspect_ratio": "700:700",
    "music_file_path": "https://dz2l6nhikl0ua.cloudfront.net/assets/music_file/e08d3e58-aac1-11eb-b46c-064f3e9f608e.m4a?cb=20211011141907",
    "music_file_mimetype": "audio/mp4",
    "song_genres": [
      {
        "id": 2,
        "name": "House"
      },
      {
        "id": 5,
        "name": "Hip-Hop & Rap"
      },
      {
        "id": 8,
        "name": "Reggae/Dub"
      },
      {
        "id": 11,
        "name": "Movie Score"
      },
      {
        "id": 20,
        "name": "EDM"
      },
      {
        "id": 31,
        "name": "Trap"
      },
      {
        "id": 42,
        "name": "Electronic"
      },
      {
        "id": 43,
        "name": "Pop"
      }
    ],
    "song_release": "2021-09-01T23:12:59+0200",
    "mix_packs": [],
    "linked_crews": []
  },
  {
    "id": "77f281a9-a1da-11eb-b46c-064f3e9f608e",
    "name": "Ambience",
    "name_seo": "ambience-136",
    "artist": {
      "id": "c534b1ad-5169-11e6-9c9a-02fe9cf35e65",
      "name": "test_11_05_2021",
      "artist_name": "test_11_05_2021",
      "muted": false,
      "place": null,
      "country": null,
      "followers": 0,
      "follows": 0,
      "liked": 0,
      "releases": 0,
      "favorites": 0,
      "description": null,
      "profile_image_path": "https://api-stg.jam-community.com/img/user_logo_default.png",
      "cover_image_path": "https://api-stg.jam-community.com/img/user_bgr_default.png",
      "favorite_genres": [],
      "created": "2021-05-11T09:43:07+0200",
      "location": null,
      "social_accounts": [],
      "video_shout_out_count": 0,
      "external_songs_count": null,
      "external_videos_count": 0,
      "crews": []
    },
    "artist_name": "*                      MrNobody ®",
    "duration": 420,
    "bpm": 121,
    "likes": 4,
    "faves": 0,
    "plays": 8,
    "reposts": 0,
    "comments": 7,
    "description": "10.4",
    "tags": null,
    "source_info": "10472.868422227299",
    "cover_image_path": "https://dz2l6nhikl0ua.cloudfront.net/assets/cover_image/77ed0746-a1da-11eb-b46c-064f3e9f608e.jpeg?cb=20211011141907",
    "cover_image_aspect_ratio": "700:700",
    "music_file_path": "https://dz2l6nhikl0ua.cloudfront.net/assets/music_file/577f37c2-a1da-11eb-b46c-064f3e9f608e.m4a?cb=20211011141907",
    "music_file_mimetype": "audio/mp4",
    "song_genres": [
      {
        "id": 2,
        "name": "House"
      },
      {
        "id": 5,
        "name": "Hip-Hop & Rap"
      },
      {
        "id": 6,
        "name": "Lounge"
      },
      {
        "id": 9,
        "name": "Dubstep"
      },
      {
        "id": 18,
        "name": "Classical"
      },
      {
        "id": 20,
        "name": "EDM"
      },
      {
        "id": 31,
        "name": "Trap"
      },
      {
        "id": 42,
        "name": "Electronic"
      },
      {
        "id": 43,
        "name": "Pop"
      }
    ],
    "song_release": "2021-10-01T15:15:25+0200",
    "mix_packs": [],
    "linked_crews": []
  },
  {
    "id": "918a97e3-a01a-11eb-b46c-064f3e9f608e",
    "name": "House Music",
    "name_seo": "house-music-362",
    "artist": {
      "id": "c534b1ad-5169-11e6-9c9a-02fe9cf35e65",
      "name": "test_11_05_2021",
      "artist_name": "test_11_05_2021",
      "muted": false,
      "place": null,
      "country": null,
      "followers": 0,
      "follows": 0,
      "liked": 0,
      "releases": 0,
      "favorites": 0,
      "description": null,
      "profile_image_path": "https://api-stg.jam-community.com/img/user_logo_default.png",
      "cover_image_path": "https://api-stg.jam-community.com/img/user_bgr_default.png",
      "favorite_genres": [],
      "created": "2021-05-11T09:43:07+0200",
      "location": null,
      "social_accounts": [],
      "video_shout_out_count": 0,
      "external_songs_count": null,
      "external_videos_count": 0,
      "crews": []
    },
    "artist_name": "*                      MrNobody ®",
    "duration": 439,
    "bpm": 130,
    "likes": 2,
    "faves": 0,
    "plays": 8,
    "reposts": 0,
    "comments": 0,
    "description": "8.8",
    "tags": null,
    "source_info": "10462.10853822715",
    "cover_image_path": "https://dz2l6nhikl0ua.cloudfront.net/assets/cover_image/917852c7-a01a-11eb-b46c-064f3e9f608e.jpeg?cb=20211011141907",
    "cover_image_aspect_ratio": "700:700",
    "music_file_path": "https://dz2l6nhikl0ua.cloudfront.net/assets/music_file/6cfa1f57-a01a-11eb-b46c-064f3e9f608e.m4a?cb=20211011141907",
    "music_file_mimetype": "audio/mp4",
    "song_genres": [
      {
        "id": 2,
        "name": "House"
      },
      {
        "id": 5,
        "name": "Hip-Hop & Rap"
      },
      {
        "id": 11,
        "name": "Movie Score"
      },
      {
        "id": 20,
        "name": "EDM"
      },
      {
        "id": 31,
        "name": "Trap"
      },
      {
        "id": 32,
        "name": "Synthwave"
      },
      {
        "id": 42,
        "name": "Electronic"
      },
      {
        "id": 43,
        "name": "Pop"
      }
    ],
    "song_release": "2021-09-01T09:49:13+0200",
    "mix_packs": [],
    "linked_crews": []
  },
  {
    "id": "8492bffb-9baa-11eb-b46c-064f3e9f608e",
    "name": "Never Forget",
    "name_seo": "never-forget-5315",
    "artist": {
      "id": "c534b1ad-5169-11e6-9c9a-02fe9cf35e65",
      "name": "test_11_05_2021",
      "artist_name": "test_11_05_2021",
      "muted": false,
      "place": null,
      "country": null,
      "followers": 0,
      "follows": 0,
      "liked": 0,
      "releases": 0,
      "favorites": 0,
      "description": null,
      "profile_image_path": "https://api-stg.jam-community.com/img/user_logo_default.png",
      "cover_image_path": "https://api-stg.jam-community.com/img/user_bgr_default.png",
      "favorite_genres": [],
      "created": "2021-05-11T09:43:07+0200",
      "location": null,
      "social_accounts": [],
      "video_shout_out_count": 0,
      "external_songs_count": null,
      "external_videos_count": 0,
      "crews": []
    },
    "artist_name": "*                      MrNobody ®",
    "duration": 374,
    "bpm": 118,
    "likes": 3,
    "faves": 0,
    "plays": 5,
    "reposts": 0,
    "comments": 2,
    "description": "6.6",
    "tags": null,
    "source_info": "10434.876377268542",
    "cover_image_path": "https://dz2l6nhikl0ua.cloudfront.net/assets/cover_image/848cb9fd-9baa-11eb-b46c-064f3e9f608e.jpeg?cb=20211011141907",
    "cover_image_aspect_ratio": "700:700",
    "music_file_path": "https://dz2l6nhikl0ua.cloudfront.net/assets/music_file/5ecdba90-9baa-11eb-b46c-064f3e9f608e.m4a?cb=20211011141907",
    "music_file_mimetype": "audio/mp4",
    "song_genres": [
      {
        "id": 2,
        "name": "House"
      },
      {
        "id": 3,
        "name": "Drum & Bass"
      },
      {
        "id": 18,
        "name": "Classical"
      },
      {
        "id": 20,
        "name": "EDM"
      },
      {
        "id": 31,
        "name": "Trap"
      },
      {
        "id": 32,
        "name": "Synthwave"
      },
      {
        "id": 42,
        "name": "Electronic"
      },
      {
        "id": 43,
        "name": "Pop"
      }
    ],
    "song_release": "2021-10-01T18:17:03+0200",
    "mix_packs": [],
    "linked_crews": []
  },
  {
    "id": "3f4cae49-71f0-11eb-8a0d-022ed69f96e6",
    "name": "mix",
    "name_seo": "mix",
    "artist": {
      "id": "15ba7568-6c67-11eb-8a0d-022ed69f96e6",
      "name": "aarelxuxmn",
      "artist_name": "aarelxuxmn",
      "muted": false,
      "place": null,
      "country": null,
      "followers": 0,
      "follows": 0,
      "liked": 0,
      "releases": 4,
      "favorites": 0,
      "description": null,
      "profile_image_path": "https://dz2l6nhikl0ua.cloudfront.net/assets/profile_image/b15f841d-7065-11eb-8a0d-022ed69f96e6.jpeg?cb=20210216154603",
      "cover_image_path": "https://api-stg.jam-community.com/img/user_bgr_default.png",
      "favorite_genres": [],
      "created": "2021-02-11T13:45:56+0100",
      "location": null,
      "social_accounts": [],
      "video_shout_out_count": 0,
      "external_songs_count": null,
      "external_videos_count": 0,
      "crews": []
    },
    "artist_name": "aarelxuxmn",
    "duration": 33,
    "bpm": 0,
    "likes": 1,
    "faves": 0,
    "plays": 32,
    "reposts": 0,
    "comments": 0,
    "description": null,
    "tags": null,
    "source_info": "ST_Electro_Lite ST_Rock_Lite",
    "cover_image_path": "https://dz2l6nhikl0ua.cloudfront.net/assets/cover_image/3f41907e-71f0-11eb-8a0d-022ed69f96e6.jpeg?cb=20210218145023",
    "cover_image_aspect_ratio": "700:700",
    "music_file_path": "https://dz2l6nhikl0ua.cloudfront.net/assets/music_file/3f28ee9e-71f0-11eb-8a0d-022ed69f96e6.m4a?cb=20210218145023",
    "music_file_mimetype": "audio/mp4",
    "song_genres": [
      {
        "id": 28,
        "name": "Classic Rock"
      }
    ],
    "song_release": "2021-10-13T14:50:23+0200",
    "mix_packs": [],
    "linked_crews": []
  },
  {
    "id": "ad47128d-50d4-11eb-9268-022ed69f96e6",
    "name": "House Noir 1",
    "name_seo": "house-noir-1-8",
    "artist": {
      "id": "59bc488f-50d4-11eb-9268-022ed69f96e6",
      "name": "asmstaging",
      "artist_name": "asmstaging",
      "muted": false,
      "place": null,
      "country": null,
      "followers": 0,
      "follows": 0,
      "liked": 0,
      "releases": 2,
      "favorites": 0,
      "description": null,
      "profile_image_path": "https://api-stg.jam-community.com/img/user_logo_default.png",
      "cover_image_path": "https://api-stg.jam-community.com/img/user_bgr_default.png",
      "favorite_genres": [],
      "created": "2021-01-07T11:37:33+0100",
      "location": null,
      "social_accounts": [],
      "video_shout_out_count": 0,
      "external_songs_count": null,
      "external_videos_count": 0,
      "crews": []
    },
    "artist_name": "asmstaging",
    "duration": 43,
    "bpm": 125,
    "likes": 1,
    "faves": 0,
    "plays": 13,
    "reposts": 0,
    "comments": 1,
    "description": null,
    "tags": null,
    "source_info": "ST_House_Lite",
    "cover_image_path": "https://dz2l6nhikl0ua.cloudfront.net/assets/cover_image/ad3e2556-50d4-11eb-9268-022ed69f96e6.jpeg?cb=20210107113953",
    "cover_image_aspect_ratio": "700:700",
    "music_file_path": "https://dz2l6nhikl0ua.cloudfront.net/assets/music_file/ab131091-50d4-11eb-9268-022ed69f96e6.m4a?cb=20210107113949",
    "music_file_mimetype": "audio/mp4",
    "song_genres": [
      {
        "id": 2,
        "name": "House"
      }
    ],
    "song_release": "2021-11-18T11:39:53+0100",
    "mix_packs": [],
    "linked_crews": []
  }
]

