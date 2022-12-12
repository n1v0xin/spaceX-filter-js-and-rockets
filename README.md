# JavaScript & Rockets

## Welcome to our little coding exercise! 👋

Here you will be given the opportunity to play with JavaScript and Rockets in the same project. For this, we recommend you to block 1-2 hours of your time to complete it.

<img align="center" src="https://i.imgur.com/ekyJNd9.jpg" width="600">

---

## Exercise

Using the past launches endpoint from the [SpaceX API][spacex-api] consolidate a list of all the missions that were launched in 2018 that carried a payload belonging to NASA. Missions should appear in inverse chronological order, with the exception of those that carried more payloads should appear first.

Display the outcome of your solution by rendering the list to the screen as JSON while keeping an indentation of 2 spaces. To make the evaluation process simpler we only care to see the flight number, the mission name, and the amount of payloads carried by each mission.

## Expected output

Your solution is expected to render the following:

```json
[
  {
    "flight_number": 62,
    "mission_name": "Iridium NEXT Mission 6",
    "payloads_count": 2
  },
  {
    "flight_number": 72,
    "mission_name": "CRS-16",
    "payloads_count": 1
  },
  {
    "flight_number": 64,
    "mission_name": "CRS-15",
    "payloads_count": 1
  },
  {
    "flight_number": 60,
    "mission_name": "TESS",
    "payloads_count": 1
  },
  {
    "flight_number": 59,
    "mission_name": "CRS-14",
    "payloads_count": 1
  }
]
```

## Clarifications

- You can use any **utility** library you see fit
- You are not allowed to use any of the filter parameters provided by the [SpaceX API docs][spacex-api-docs]
- It doesn't matter to which NASA program each payload belongs to as long as NASA is the customer
- Payloads are carried in the second stage of a rocket and they can belong to multiple customers

## Helpful links

- [SpaceX API Docs][spacex-api-docs]

[spacex-api]: https://api.spacexdata.com/v3/launches/past
[spacex-api-docs]: https://docs.spacexdata.com/?version=latest#fce450d6-e064-499a-b88d-34cc22991bcc
