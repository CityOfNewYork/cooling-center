import decorations from '../src/js/decorations'
import Olfeature from 'ol/feature'
import {center1} from './features.mock'
import nyc from 'nyc-lib/nyc'

describe('decorations', () => {
  let container
  beforeEach(() => {
    $.resetMocks()
    container = $('<div></div>')
    $('body').append(container)
  })
  afterEach(() => {
    container.remove()
    jest.resetModules()
  })
  test('extendfeature', () => {
    center1.extendFeature()
    expect.assertions(3)
    
    expect(center1.getId()).toBe(center1.get('OBJECTID'))
    expect(center1.get('search_label')).not.toBeNull()
    expect(center1.get('search_label')).toBe(`<b><span class="srch-lbl-lg">${center1.get('FACILITY_NAME')}</span></b><br>
      <span class="srch-lbl-sm">${center1.get('ADDRESS')}</span>`)
    
  })
  
  test('getAccessible', () => {
    expect.assertions(2)
    expect(center1.getAccessible()).toBe(`${center1.get('HANDICAP_ACCESS')}`)
    expect(center1.getAccessible()).not.toBeNull()
  })
  test('getAddress1', () => {
    expect.assertions(2)
    expect(center1.getAddress1()).toBe(`${center1.get('ADDRESS')}`)
    expect(center1.getAddress1()).not.toBeNull()
  })
  test('getCityStateZip', () => {
    expect.assertions(1)
    expect(center1.getCityStateZip()).toBe("")
  })
  test('getHours', () => {
    expect.assertions(2)
    expect(center1.getHours()).toBe(`${center1.get('HOURS')}`)
    expect(center1.getHours()).not.toBeNull()
  })
  test('getExHours', () => {
    expect.assertions(2)
    expect(center1.getExHours()).toBe(`${center1.get('EXTENDED_HOURS')}`)
    expect(center1.getExHours()).not.toBeNull()
  })
  test('getName', () => {
    expect.assertions(2)
    expect(center1.getName()).toBe(`${center1.get('FACILITY_NAME')}`)
    expect(center1.getName()).not.toBeNull()
  })
  test('getPhone', () => {
    expect.assertions(2)
    expect(center1.getPhone()).toBe(`${center1.get('PHONE')}`)
    expect(center1.getPhone()).not.toBeNull()
  })
  test('getStatus', () => {
    expect.assertions(2)
    expect(center1.getStatus()).toBe(`${center1.get('STATUS')}`)
    expect(center1.getStatus()).not.toBeNull()
  })
  test('getType', () => {
    expect.assertions(2)
    expect(center1.getType()).toBe(`${center1.get('FACILITY_TYPE')}`)
    expect(center1.getType()).not.toBeNull()
  })
  test('getZip', () => {
    expect.assertions(2)
    expect(center1.getZip()).toBe(`${center1.get('ZIP_CODE')}`)
    expect(center1.getZip()).not.toBeNull()
  })
  test('detailsHtml - status OPEN', () => {
    expect.assertions(2)
    expect(center1.getStatus()).toBe('OPEN')
    expect(center1.detailsHtml().html()).toBe('<ul><li><b>Status: </b>OPEN</li><li><b>Facility Type: </b>Library</li><li><b>Address: </b>4790 Broadway</li><li><b>Phone: </b>(212)942-2445</li><li><b>Hours: </b>HOURS</li><li><b>Extended Hours: </b>No</li><li><b>Wheelchair Accessible: </b>Yes</li></ul>')
  })

  /* TODO */
  test('detailsHtml - status CLOSED', () => {
  })

})