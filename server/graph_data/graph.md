# Locations
```python
{
    "E7 4043": 1,
    "E7 4th Floor Intersection": 2,
    "E7 4th Floor Elevator Entrance": 3,
    "E7 4th Floor Doorway Intersection": 4,
    "E5 4th Floor to 3rd Floor Stairway Entrance": 5,
    "E5 4th Floor to 3rd Floor Stairway Exit": 6,
    "E7 3rd Floor Elevator Exit": 7,
    "E7 3rd Floor Hallway": 8,
    "E7 3rd Floor Hallway Left of Stairs": 9,
    "E5 3rd Floor End of Hallway Next to Stairs": 10,
    "E5 Bridge": 11
}
```

# Graph
```python
{
    1: {
        fwd_adj_list: [],
        left_adj_list: [2],
        right_adj_list: [],
        longitude: 43.47316,
        latitude: -80.5399,
        name: "E7 4043"
        image: "https://i.ibb.co/8gpbV4R/E7-4043.jpg",
    },
    2: {
        fwd_adj_list: [],
        left_adj_list: [3],
        right_adj_list: [4],
        longitude: 43.4731,
        latitude: -80.5397,
        name: "E7 4th Floor Intersection",
        image: "https://i.ibb.co/vY3f0qT/E7-4th-Floor-Intersection.jpg",
    },
    3: {
        fwd_adj_list: [7],
        left_adj_list: [],
        right_adj_list: [],
        longitude: 43.47303,
        latitude: -80.53969,
        name: "E7 4th Floor Elevator Entrance",
        image: "https://i.ibb.co/1KjqmXR/E7-4th-Floor-Elevator-Entrance.jpg",
    },
    4: {
        fwd_adj_list: [5],
        left_adj_list: [],
        right_adj_list: [],
        longitude: 43.47296,
        latitude: -80.53982,
        name: "E7 4th Floor Doorway Intersection",
        image: "https://i.ibb.co/kQZ1sXp/E7-4th-Floor-Doorway-Intersection.jpg",
    },
    5: {
        fwd_adj_list: [6],
        left_adj_list: [],
        right_adj_list: [],
        longitude: 43.47283,
        latitude: -80.53986,
        name: "E5 4th Floor to 3rd Floor Stairway Entrance",
        image: "https://i.ibb.co/Jp3R833/E5-4th-Floor-to-3rd-Floor-Stairway-Entrance.jpg",
    },
    6: {
        fwd_adj_list: [],
        left_adj_list: [11],
        right_adj_list: [],
        longitude: 43.4726,
        latitude: -80.54,
        name: "E5 4th Floor to 3rd Floor Stairway Exit",
        image: "https://i.ibb.co/hy2Fyh2/E5-4th-Floor-to-3rd-Floor-Stairway-Exit.jpg",
    },
    7: {
        fwd_adj_list: [],
        left_adj_list: [8],
        right_adj_list: [],
        longitude: 43.47303,
        latitude: -80.53969,
        name: "E7 3rd Floor Elevator Exit",
        image: "https://i.ibb.co/Pc6HR3S/E7-3rd-Floor-Elevator-Exit.jpg",
    },
    8: {
        fwd_adj_list: [9],
        left_adj_list: [],
        right_adj_list: [],
        longitude: 43.47289,
        latitude: -80.53978,
        name: "E7 3rd Floor Hallway",
        image: "https://i.ibb.co/SNpBLTW/E7-3rd-Floor-Hallway.jpg",
    },
    9: {
        fwd_adj_list: [10],
        left_adj_list: [],
        right_adj_list: [],
        longitude: 43.47273,
        latitude: -80.54001,
        name: "E7 3rd Floor Hallway Left of Stairs",
        image: "https://i.ibb.co/XYDYb6m/E7-3rd-Floor-Hallway-Left-of-Stairs.jpg",
    },
    10: {
        fwd_adj_list: [],
        left_adj_list: [11],
        right_adj_list: [],
        longitude: 43.47263,
        latitude: -80.54,
        name: "E5 3rd Floor End of Hallway Next to Stairs",
        image: "https://i.ibb.co/SskyqMN/E5-3rd-Floor-End-of-Hallway-Next-to-Stairs.jpg",
    },
    11: {
        fwd_adj_list: [],
        left_adj_list: [],
        right_adj_list: [],
        longitude: 43.47267,
        latitude: -80.54,
        name: "E5 Bridge",
        image: "https://i.ibb.co/jZSWG6s/E5-Bridge.jpg",
    },
}
```