var MOCKS = {
  services: [
    {
      'name': 'users',
      'tier': 'data',
      'metrics': [
        {
          'time': 3600,
          'cpu': 10
        },
        {
          'time': 7200,
          'cpu': 20
        },
        {
          'time': 10800,
          'cpu': 32
        },
        {
          'time': 14400,
          'cpu': 28
        },
        {
          'time': 18000,
          'cpu': 26
        },
        {
          'time': 21600,
          'cpu': 2
        }
      ],
      'uptime': 22543,
      'builds': [
        {
          'build': 1,
          'time': 43757,
          'error': false
        },
        {
          'build': 2,
          'time': 63579,
          'error': true
        },
        {
          'build': 3,
          'time': 36113,
          'error': false
        }
      ]
    },
    {
      'name': 'media',
      'tier': 'application',
      'metrics': [
        {
          'time': 28800,
          'cpu': 98
        },
        {
          'time': 32400,
          'cpu': 5
        },
        {
          'time': 36000,
          'cpu': 50
        },
        {
          'time': 39600,
          'cpu': 72
        },
        {
          'time': 43200,
          'cpu': 45
        },
        {
          'time': 46800,
          'cpu': 62
        },
        {
          'time': 50400,
          'cpu': 95
        },
        {
          'time': 54000,
          'cpu': 3
        },
        {
          'time': 57600,
          'cpu': 75
        },
        {
          'time': 61200,
          'cpu': 76
        }
      ],
      'uptime': 63190,
      'builds': [

      ]
    },
    {
      'name': 'profile',
      'tier': 'application',
      'metrics': [
        {
          'time': 3600,
          'cpu': 29
        },
        {
          'time': 7200,
          'cpu': 90
        },
        {
          'time': 10800,
          'cpu': 9
        },
        {
          'time': 14400,
          'cpu': 33
        },
        {
          'time': 18000,
          'cpu': 26
        }
      ],
      'uptime': 20884,
      'builds': [

      ]
    }
  ]
}

if (typeof module !== 'undefined')
  module.exports = MOCKS
