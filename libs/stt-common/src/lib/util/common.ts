import { UserCategory } from '../models/enums/UserCategory';


export class Common {
  static getblackListedRoutes(): string[] {
    return [
      'localhost:4200',
      'localhost:4300',
      'https://sttadminpanel.z20.web.core.windows.net/',
      'https://sttschoolpanel.z20.web.core.windows.net/'
    ];
  }

  static getCategory(cat: number) {
    return this.camel2title(UserCategory[cat]);
  }

  private static camel2title(camelCase: string) {
    if (!camelCase) {
      return '';
    }
    // no side-effects
    return (
      camelCase
        // inject space before the upper case letters
        .replace(/([A-Z])/g, function(match) {
          return ' ' + match;
        })
        // replace first char with upper case
        .replace(/^./, function(match) {
          return match.toUpperCase();
        })
    );
  }

  static getMapStyle(): any[] {
    return [
      {
        featureType: 'all',
        elementType: 'geometry.fill',
        stylers: [
          {
            weight: 2.0
          }
        ]
      },
      {
        featureType: 'all',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#9c9c9c'
          }
        ]
      },
      {
        featureType: 'all',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [
          {
            color: '#f2f2f2'
          }
        ]
      },
      {
        featureType: 'landscape',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#ffffff'
          }
        ]
      },
      {
        featureType: 'landscape.man_made',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#ffffff'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'all',
        stylers: [
          {
            saturation: -100
          },
          {
            lightness: 45
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#eeeeee'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#7b7b7b'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#ffffff'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'all',
        stylers: [
          {
            visibility: 'simplified'
          }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'transit',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'all',
        stylers: [
          {
            color: '#46bcec'
          },
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#c8d7d4'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
          {
            color: '#070707'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            color: '#ffffff'
          }
        ]
      }
    ];
  }
}

export class MessageConstants {
  static SchoolSaved = 'School was saved';
  static SchoolBusSaved = 'School bus was saved';
  static UserAddedToSchool = 'User addded to school';
  static SchoolDeleted = 'School was deleted';
  static UserDetached = 'User was removed from this school';
  static UserSaved = 'User was saved';
  static UserDeleted = 'User was deleted';
  static SchoolBusDeleted = 'School bus was deleted';
  static BoundSaved = 'Bound was saved';
  static BoundDeleted = 'Bound was deleted';
}
