import $ from 'jquery'
import coolingCenter from '../src/js/coolingCenter'
import decorations from '../src/js/decorations'
import facilityStyle from '../src/js/facility-style'
import FinderApp from 'nyc-lib/nyc/ol/FinderApp'
import App from '../src/js/App';
import GeoJson from 'ol/format/GeoJSON'
import CsvPoint from 'nyc-lib/nyc/ol/format/CsvPoint'
import IconArcGis from 'nyc-lib/nyc/ol/style/IconArcGis'
import Layer from 'ol/layer/Vector'
import Source from 'ol/source/Vector'
import Filters from 'nyc-lib/nyc/ol/Filters'

jest.mock('nyc-lib/nyc/ol/FinderApp')
jest.mock('nyc-lib/nyc/ol/format/CsvPoint')
jest.mock('ol/format/GeoJSON')
jest.mock('nyc-lib/nyc/ol/style/IconArcGis')
jest.mock('ol/layer/Vector')


const mockContent = {
  messages: {
    cc_url: 'http://cc-endpoint'
  },
  message: (key) => {
    return mockContent.messages[key]
  }
}
const addDescription = App.prototype.addDescription
const constructIconUrl = App.prototype.constructIconUrl
const fetchIconUrl = App.prototype.fetchIconUrl
const filterIcons = App.prototype.filterIcons
const filterIconsUrl = App.prototype.filterIconsUrl


beforeEach(() => {
  FinderApp.mockClear()
  CsvPoint.mockClear()
  GeoJson.mockClear()
  IconArcGis.mockClear()
  App.prototype.addDescription = jest.fn()
  App.prototype.constructIconUrl = jest.fn()
  App.prototype.fetchIconUrl = jest.fn()
  App.prototype.filterIcons = jest.fn()
  App.prototype.filterIconsUrl = jest.fn()

})

afterEach(() => {
  App.prototype.constructIconUrl = constructIconUrl
  App.prototype.fetchIconUrl = fetchIconUrl
  App.prototype.filterIcons = filterIcons
  App.prototype.filterIconsUrl = filterIconsUrl

})

describe('constructor', () => {
  test('constructor - data as service url', () => {
    mockContent.messages.cc_url = 'http://cc-endpoint'
    const app = new App(mockContent)

    expect(app instanceof FinderApp).toBe(true)
    expect(FinderApp).toHaveBeenCalledTimes(1)

    expect(FinderApp.mock.calls[0][0].title).toBe('<span class=cc_title>Cooling Center Finder</span>')
    expect(FinderApp.mock.calls[0][0].splashOptions.message).toBe('Splash Message')
    expect(FinderApp.mock.calls[0][0].splashOptions.buttonText).toEqual(['Screen reader instructions', 'View map to find your closest Cooling Center'])
    expect(FinderApp.mock.calls[0][0].facilityUrl).toBe('http://cc-endpoint')

    expect(GeoJson).toHaveBeenCalledTimes(1)
    expect(GeoJson.mock.calls[0][0].dataProjection).toBe('EPSG:2263')
    expect(GeoJson.mock.calls[0][0].featureProjection).toBe('EPSG:3857')
    
    expect(FinderApp.mock.calls[0][0].facilityTabTitle).toBe('Cooling Centers')

    expect(FinderApp.mock.calls[0][0].decorations.length).toBe(2)
    expect(FinderApp.mock.calls[0][0].decorations[0].content).toBe(mockContent)
    expect(FinderApp.mock.calls[0][0].decorations[0].facilityStyle).toBe(facilityStyle)
    expect(FinderApp.mock.calls[0][0].decorations[1]).toBe(decorations)

    expect(FinderApp.mock.calls[0][0].geoclientUrl).toBe(coolingCenter.GEOCLIENT_URL)
    expect(FinderApp.mock.calls[0][0].directionsUrl).toBe(coolingCenter.DIRECTIONS_URL)

    expect(FinderApp.mock.calls[0][0].filterChoiceOptions.length).toBe(2)
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].title).toBe('Facility Type')
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices.length).toBe(5)

    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[0].name).toBe('FACILITY_TYPE')
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[0].values).toEqual(['Community Center'])
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[0].label).toBe('<span class=legend_comm>Community Center</span>')
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[0].checked).toBe(true)

    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[1].name).toBe('FACILITY_TYPE')
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[1].values).toEqual(['Senior Center'])
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[1].label).toBe('<span class=legend_senior>Senior Center</span>')
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[1].checked).toBe(true)

    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[2].name).toBe('FACILITY_TYPE')
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[2].values).toEqual(['Cornerstone Program'])
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[2].label).toBe('Cornerstone Programs')
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[2].checked).toBe(true)

    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[3].name).toBe('FACILITY_TYPE')
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[3].values).toEqual(['Library'])
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[3].label).toBe('Libraries')
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[3].checked).toBe(true)
    
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[4].name).toBe('FACILITY_TYPE')
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[4].values).toEqual(['School'])
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[4].label).toBe('Schools')
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[4].checked).toBe(true)

    expect(App.prototype.addDescription).toHaveBeenCalledTimes(1)
    expect(App.prototype.constructIconUrl).toHaveBeenCalledTimes(1)
    expect(App.prototype.constructIconUrl.mock.calls[0][0]).toBe('http://cc-endpoint')
    expect(App.prototype.fetchIconUrl).toHaveBeenCalledTimes(1)
  })
  test('constructor - data as csv', () => {
    mockContent.messages.cc_url = ''
    
    const app = new App(mockContent)

    expect(app instanceof FinderApp).toBe(true)
    expect(FinderApp).toHaveBeenCalledTimes(1)

    expect(FinderApp.mock.calls[0][0].title).toBe('<span class=cc_title>Cooling Center Finder</span>')
    expect(FinderApp.mock.calls[0][0].splashOptions.message).toBe('Splash Message')
    expect(FinderApp.mock.calls[0][0].splashOptions.buttonText).toEqual(['Screen reader instructions', 'View map to find your closest Cooling Center'])
    expect(FinderApp.mock.calls[0][0].facilityUrl).toBe(coolingCenter.CENTER_CSV_URL)

    expect(CsvPoint).toHaveBeenCalledTimes(1)
    expect(CsvPoint.mock.calls[0][0].x).toBe('X')
    expect(CsvPoint.mock.calls[0][0].y).toBe('Y')    
    expect(CsvPoint.mock.calls[0][0].dataProjection).toBe('EPSG:2263')
    
    expect(FinderApp.mock.calls[0][0].facilityTabTitle).toBe('Cooling Centers')

    expect(FinderApp.mock.calls[0][0].decorations.length).toBe(2)
    expect(FinderApp.mock.calls[0][0].decorations[0].content).toBe(mockContent)
    expect(FinderApp.mock.calls[0][0].decorations[0].facilityStyle).toBe(facilityStyle)
    expect(FinderApp.mock.calls[0][0].decorations[1]).toBe(decorations)

    expect(FinderApp.mock.calls[0][0].geoclientUrl).toBe(coolingCenter.GEOCLIENT_URL)
    expect(FinderApp.mock.calls[0][0].directionsUrl).toBe(coolingCenter.DIRECTIONS_URL)

    expect(FinderApp.mock.calls[0][0].filterChoiceOptions.length).toBe(2)
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].title).toBe('Facility Type')
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices.length).toBe(5)

    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[0].name).toBe('FACILITY_TYPE')
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[0].values).toEqual(['Community Center'])
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[0].label).toBe('<span class=legend_comm>Community Center</span>')
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[0].checked).toBe(true)

    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[1].name).toBe('FACILITY_TYPE')
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[1].values).toEqual(['Senior Center'])
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[1].label).toBe('<span class=legend_senior>Senior Center</span>')
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[1].checked).toBe(true)

    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[2].name).toBe('FACILITY_TYPE')
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[2].values).toEqual(['Cornerstone Program'])
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[2].label).toBe('Cornerstone Programs')
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[2].checked).toBe(true)

    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[3].name).toBe('FACILITY_TYPE')
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[3].values).toEqual(['Library'])
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[3].label).toBe('Libraries')
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[3].checked).toBe(true)

    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[4].name).toBe('FACILITY_TYPE')
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[4].values).toEqual(['School'])
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[4].label).toBe('Schools')
    expect(FinderApp.mock.calls[0][0].filterChoiceOptions[0].choices[4].checked).toBe(true)

    expect(App.prototype.addDescription).toHaveBeenCalledTimes(1)
    expect(App.prototype.constructIconUrl).toHaveBeenCalledTimes(0)
    expect(App.prototype.fetchIconUrl).toHaveBeenCalledTimes(0)
    expect(App.prototype.filterIcons).toHaveBeenCalledTimes(1)
    expect(App.prototype.filterIconsUrl).toHaveBeenCalledTimes(0)

  })
})

describe('addDescription', () => {
  let list
  beforeEach(() => {
    list = $('<div id="facilities"><div class="list"></div></div>')
    $('body').append(list)
  })
  afterEach(() => {
    list.remove()
  })

  test('addDescription', () => {
    const app = new App(mockContent)
    app.addDescription = addDescription
    app.addDescription()

    expect($('#facilities .list').prev()[0]).not.toBe(undefined)
    expect($('div.description')).toEqual($(`<div class="description"><div class="desc"><div class="panel_note">${coolingCenter.DESCRIPTION_HTML}</div></div></div>`))

  })
})
describe('constructIconUrl', () => {
  test('constructIconUrl', () => {
    expect.assertions(1)
    let arcGisUrl = 'http://cc-endpoint/query?param1=value1&param2=value2&token=tokenvalue'
    
    let app = new App(mockContent)
    app.constructIconUrl = constructIconUrl

    expect(app.constructIconUrl(arcGisUrl)).toBe('http://cc-endpoint/?f=pjson&token=tokenvalue')
  })
})

describe('fetchIconUrl', () => {
  const fetch = IconArcGis.fetch
  const setSource = Layer.prototype.setSource
  const arcGisUrl = 'http://cc-endpoint/'

  beforeEach(() => {
    Layer.prototype.setSource = jest.fn()
    IconArcGis.fetch = jest.fn().mockImplementation((arcGisUrl) => {
      return new Promise((resolve, reject)=>{
        resolve(new IconArcGis())
      })
    })
  })
  afterEach(() => {
    IconArcGis.fetch = fetch
    Layer.prototype.setSource = setSource
  })
  
  test('fetchIconUrl', done => {
    expect.assertions(7)
    const app = new App(mockContent)
    app.layer = new Layer()

    app.fetchIconUrl = fetchIconUrl

    app.fetchIconUrl(arcGisUrl)

    setTimeout(() => {
      expect(IconArcGis.fetch).toHaveBeenCalledTimes(1)
      expect(IconArcGis.fetch.mock.calls[0][0]).toBe(arcGisUrl)
      expect(facilityStyle.iconArcGis).not.toBeNull()
      expect(Layer.prototype.setSource).toHaveBeenCalledTimes(2)
      expect(Layer.prototype.setSource.mock.calls[0][0] instanceof Source).toBe(true)
      expect(Layer.prototype.setSource.mock.calls[1][0]).toBe(app.source)
      expect(App.prototype.filterIconsUrl).toHaveBeenCalledTimes(1)
      done()
    }, 100)
  })
})

describe('filterIcons', () => {
  const target = $('<div></div>')
  const filterOptions = {
    target,
    choiceOptions: [
      {
        title: 'Facility Type',
        radio: false,
        choices: [
          {name: 'FACILITY_TYPE', values: ['Community Center'], label: 'Community Center', checked: true},
          {name: 'FACILITY_TYPE', values: ['Senior Center'], label: 'Senior Center', checked: true},
          {name: 'FACILITY_TYPE', values: ['Cornerstone Program'], label: 'Cornerstone Programs', checked: true},
          {name: 'FACILITY_TYPE', values: ['Library'], label: 'Libraries', checked: true},
          {name: 'FACILITY_TYPE', values: ['School'], label: 'Schools', checked: true}
        ]
      }
    ]
  }
  beforeEach(() => {
    $('body').append(target)
  })
  afterEach(() => {
    target.remove()
  })

  test('filterIcons', () => {
    expect.assertions(5)
    
    const app = new App(mockContent)  

    app.filterIcons = filterIcons
    app.filters = new Filters(filterOptions)
    
    app.filterIcons()
  
    const filter = app.filters.choiceControls[0]
    const labels = filter.find('label')

    filter.choices.forEach((ch, i) => {
      const img = $(labels[i]).children().first()
      const type = ch.values[0].replace(/ /g, '-').toLowerCase()
      expect(img.attr('class')).toBe(`cc-icon ${type}`)
    })
  
  })
})


describe('filterIconsUrl', () => {
  const target = $('<div></div>')
  const filterOptions = {
    target,
    choiceOptions: [
      {
        title: 'Facility Type',
        radio: false,
        choices: [
          {name: 'FACILITY_TYPE', values: ['Community Center'], label: 'Community Center', checked: true},
          {name: 'FACILITY_TYPE', values: ['Senior Center'], label: 'Senior Center', checked: true},
          {name: 'FACILITY_TYPE', values: ['Cornerstone Program'], label: 'Cornerstone Programs', checked: true},
          {name: 'FACILITY_TYPE', values: ['Library'], label: 'Libraries', checked: true},
          {name: 'FACILITY_TYPE', values: ['School'], label: 'Schools', checked: true}
        ]
      }
    ]
  }
  beforeEach(() => {
    $('body').append(target)
  })
  afterEach(() => {
    target.remove()
  })

  test('filterIconsUrl', () => {
    expect.assertions(5)
    
    const app = new App(mockContent)  

    app.filterIconsUrl = filterIconsUrl
    app.facilityStyle = {iconArcGis: {renderer: require('../src/js/iconStyle').default}}
    app.filters = new Filters(filterOptions)
    
    app.filterIconsUrl()
  
    const filter = app.filters.choiceControls[0]
    const renderer = app.facilityStyle.iconArcGis.renderer
    const labels = filter.find('label')

    filter.choices.forEach((ch, i) => {
      renderer.uniqueValueInfos.forEach(info => {
        if (`${ch.values[0]},No` === info.value) {
          const sym = info.symbol
          const img = $(labels[i]).children().first()
          expect(img.attr('src')).toBe(`data:${sym.contentType};base64,${sym.imageData}`)
        }
      })
    })
  
  })
})
