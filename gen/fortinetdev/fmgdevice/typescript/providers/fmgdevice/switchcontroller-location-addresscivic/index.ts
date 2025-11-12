// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerLocationAddresscivicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#additional SwitchcontrollerLocationAddresscivic#additional}
  */
  readonly additional?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#additional_code SwitchcontrollerLocationAddresscivic#additional_code}
  */
  readonly additionalCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#block SwitchcontrollerLocationAddresscivic#block}
  */
  readonly block?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#branch_road SwitchcontrollerLocationAddresscivic#branch_road}
  */
  readonly branchRoad?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#building SwitchcontrollerLocationAddresscivic#building}
  */
  readonly building?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#city SwitchcontrollerLocationAddresscivic#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#city_division SwitchcontrollerLocationAddresscivic#city_division}
  */
  readonly cityDivision?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#country SwitchcontrollerLocationAddresscivic#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#country_subdivision SwitchcontrollerLocationAddresscivic#country_subdivision}
  */
  readonly countrySubdivision?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#county SwitchcontrollerLocationAddresscivic#county}
  */
  readonly county?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#device_name SwitchcontrollerLocationAddresscivic#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#device_vdom SwitchcontrollerLocationAddresscivic#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#direction SwitchcontrollerLocationAddresscivic#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#floor SwitchcontrollerLocationAddresscivic#floor}
  */
  readonly floor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#id SwitchcontrollerLocationAddresscivic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#landmark SwitchcontrollerLocationAddresscivic#landmark}
  */
  readonly landmark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#language SwitchcontrollerLocationAddresscivic#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#location SwitchcontrollerLocationAddresscivic#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#name SwitchcontrollerLocationAddresscivic#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#number SwitchcontrollerLocationAddresscivic#number}
  */
  readonly number?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#number_suffix SwitchcontrollerLocationAddresscivic#number_suffix}
  */
  readonly numberSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#parent_key SwitchcontrollerLocationAddresscivic#parent_key}
  */
  readonly parentKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#place_type SwitchcontrollerLocationAddresscivic#place_type}
  */
  readonly placeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#post_office_box SwitchcontrollerLocationAddresscivic#post_office_box}
  */
  readonly postOfficeBox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#postal_community SwitchcontrollerLocationAddresscivic#postal_community}
  */
  readonly postalCommunity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#primary_road SwitchcontrollerLocationAddresscivic#primary_road}
  */
  readonly primaryRoad?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#road_section SwitchcontrollerLocationAddresscivic#road_section}
  */
  readonly roadSection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#room SwitchcontrollerLocationAddresscivic#room}
  */
  readonly room?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#script SwitchcontrollerLocationAddresscivic#script}
  */
  readonly script?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#seat SwitchcontrollerLocationAddresscivic#seat}
  */
  readonly seat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#street SwitchcontrollerLocationAddresscivic#street}
  */
  readonly street?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#street_name_post_mod SwitchcontrollerLocationAddresscivic#street_name_post_mod}
  */
  readonly streetNamePostMod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#street_name_pre_mod SwitchcontrollerLocationAddresscivic#street_name_pre_mod}
  */
  readonly streetNamePreMod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#street_suffix SwitchcontrollerLocationAddresscivic#street_suffix}
  */
  readonly streetSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#sub_branch_road SwitchcontrollerLocationAddresscivic#sub_branch_road}
  */
  readonly subBranchRoad?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#trailing_str_suffix SwitchcontrollerLocationAddresscivic#trailing_str_suffix}
  */
  readonly trailingStrSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#unit SwitchcontrollerLocationAddresscivic#unit}
  */
  readonly unit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#zip SwitchcontrollerLocationAddresscivic#zip}
  */
  readonly zip?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic fmgdevice_switchcontroller_location_addresscivic}
*/
export class SwitchcontrollerLocationAddresscivic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_switchcontroller_location_addresscivic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerLocationAddresscivic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerLocationAddresscivic to import
  * @param importFromId The id of the existing SwitchcontrollerLocationAddresscivic that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerLocationAddresscivic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_switchcontroller_location_addresscivic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/switchcontroller_location_addresscivic fmgdevice_switchcontroller_location_addresscivic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerLocationAddresscivicConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerLocationAddresscivicConfig) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_switchcontroller_location_addresscivic',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additional = config.additional;
    this._additionalCode = config.additionalCode;
    this._block = config.block;
    this._branchRoad = config.branchRoad;
    this._building = config.building;
    this._city = config.city;
    this._cityDivision = config.cityDivision;
    this._country = config.country;
    this._countrySubdivision = config.countrySubdivision;
    this._county = config.county;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._direction = config.direction;
    this._floor = config.floor;
    this._id = config.id;
    this._landmark = config.landmark;
    this._language = config.language;
    this._location = config.location;
    this._name = config.name;
    this._number = config.number;
    this._numberSuffix = config.numberSuffix;
    this._parentKey = config.parentKey;
    this._placeType = config.placeType;
    this._postOfficeBox = config.postOfficeBox;
    this._postalCommunity = config.postalCommunity;
    this._primaryRoad = config.primaryRoad;
    this._roadSection = config.roadSection;
    this._room = config.room;
    this._script = config.script;
    this._seat = config.seat;
    this._street = config.street;
    this._streetNamePostMod = config.streetNamePostMod;
    this._streetNamePreMod = config.streetNamePreMod;
    this._streetSuffix = config.streetSuffix;
    this._subBranchRoad = config.subBranchRoad;
    this._trailingStrSuffix = config.trailingStrSuffix;
    this._unit = config.unit;
    this._zip = config.zip;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional - computed: false, optional: true, required: false
  private _additional?: string; 
  public get additional() {
    return this.getStringAttribute('additional');
  }
  public set additional(value: string) {
    this._additional = value;
  }
  public resetAdditional() {
    this._additional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalInput() {
    return this._additional;
  }

  // additional_code - computed: false, optional: true, required: false
  private _additionalCode?: string; 
  public get additionalCode() {
    return this.getStringAttribute('additional_code');
  }
  public set additionalCode(value: string) {
    this._additionalCode = value;
  }
  public resetAdditionalCode() {
    this._additionalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalCodeInput() {
    return this._additionalCode;
  }

  // block - computed: false, optional: true, required: false
  private _block?: string; 
  public get block() {
    return this.getStringAttribute('block');
  }
  public set block(value: string) {
    this._block = value;
  }
  public resetBlock() {
    this._block = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
  }

  // branch_road - computed: false, optional: true, required: false
  private _branchRoad?: string; 
  public get branchRoad() {
    return this.getStringAttribute('branch_road');
  }
  public set branchRoad(value: string) {
    this._branchRoad = value;
  }
  public resetBranchRoad() {
    this._branchRoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchRoadInput() {
    return this._branchRoad;
  }

  // building - computed: false, optional: true, required: false
  private _building?: string; 
  public get building() {
    return this.getStringAttribute('building');
  }
  public set building(value: string) {
    this._building = value;
  }
  public resetBuilding() {
    this._building = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildingInput() {
    return this._building;
  }

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // city_division - computed: false, optional: true, required: false
  private _cityDivision?: string; 
  public get cityDivision() {
    return this.getStringAttribute('city_division');
  }
  public set cityDivision(value: string) {
    this._cityDivision = value;
  }
  public resetCityDivision() {
    this._cityDivision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityDivisionInput() {
    return this._cityDivision;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // country_subdivision - computed: false, optional: true, required: false
  private _countrySubdivision?: string; 
  public get countrySubdivision() {
    return this.getStringAttribute('country_subdivision');
  }
  public set countrySubdivision(value: string) {
    this._countrySubdivision = value;
  }
  public resetCountrySubdivision() {
    this._countrySubdivision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countrySubdivisionInput() {
    return this._countrySubdivision;
  }

  // county - computed: false, optional: true, required: false
  private _county?: string; 
  public get county() {
    return this.getStringAttribute('county');
  }
  public set county(value: string) {
    this._county = value;
  }
  public resetCounty() {
    this._county = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countyInput() {
    return this._county;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // floor - computed: false, optional: true, required: false
  private _floor?: string; 
  public get floor() {
    return this.getStringAttribute('floor');
  }
  public set floor(value: string) {
    this._floor = value;
  }
  public resetFloor() {
    this._floor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floorInput() {
    return this._floor;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // landmark - computed: false, optional: true, required: false
  private _landmark?: string; 
  public get landmark() {
    return this.getStringAttribute('landmark');
  }
  public set landmark(value: string) {
    this._landmark = value;
  }
  public resetLandmark() {
    this._landmark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get landmarkInput() {
    return this._landmark;
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // number - computed: false, optional: true, required: false
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // number_suffix - computed: false, optional: true, required: false
  private _numberSuffix?: string; 
  public get numberSuffix() {
    return this.getStringAttribute('number_suffix');
  }
  public set numberSuffix(value: string) {
    this._numberSuffix = value;
  }
  public resetNumberSuffix() {
    this._numberSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberSuffixInput() {
    return this._numberSuffix;
  }

  // parent_key - computed: false, optional: true, required: false
  private _parentKey?: string; 
  public get parentKey() {
    return this.getStringAttribute('parent_key');
  }
  public set parentKey(value: string) {
    this._parentKey = value;
  }
  public resetParentKey() {
    this._parentKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentKeyInput() {
    return this._parentKey;
  }

  // place_type - computed: false, optional: true, required: false
  private _placeType?: string; 
  public get placeType() {
    return this.getStringAttribute('place_type');
  }
  public set placeType(value: string) {
    this._placeType = value;
  }
  public resetPlaceType() {
    this._placeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placeTypeInput() {
    return this._placeType;
  }

  // post_office_box - computed: false, optional: true, required: false
  private _postOfficeBox?: string; 
  public get postOfficeBox() {
    return this.getStringAttribute('post_office_box');
  }
  public set postOfficeBox(value: string) {
    this._postOfficeBox = value;
  }
  public resetPostOfficeBox() {
    this._postOfficeBox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postOfficeBoxInput() {
    return this._postOfficeBox;
  }

  // postal_community - computed: false, optional: true, required: false
  private _postalCommunity?: string; 
  public get postalCommunity() {
    return this.getStringAttribute('postal_community');
  }
  public set postalCommunity(value: string) {
    this._postalCommunity = value;
  }
  public resetPostalCommunity() {
    this._postalCommunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCommunityInput() {
    return this._postalCommunity;
  }

  // primary_road - computed: false, optional: true, required: false
  private _primaryRoad?: string; 
  public get primaryRoad() {
    return this.getStringAttribute('primary_road');
  }
  public set primaryRoad(value: string) {
    this._primaryRoad = value;
  }
  public resetPrimaryRoad() {
    this._primaryRoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryRoadInput() {
    return this._primaryRoad;
  }

  // road_section - computed: false, optional: true, required: false
  private _roadSection?: string; 
  public get roadSection() {
    return this.getStringAttribute('road_section');
  }
  public set roadSection(value: string) {
    this._roadSection = value;
  }
  public resetRoadSection() {
    this._roadSection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roadSectionInput() {
    return this._roadSection;
  }

  // room - computed: false, optional: true, required: false
  private _room?: string; 
  public get room() {
    return this.getStringAttribute('room');
  }
  public set room(value: string) {
    this._room = value;
  }
  public resetRoom() {
    this._room = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roomInput() {
    return this._room;
  }

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // seat - computed: false, optional: true, required: false
  private _seat?: string; 
  public get seat() {
    return this.getStringAttribute('seat');
  }
  public set seat(value: string) {
    this._seat = value;
  }
  public resetSeat() {
    this._seat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seatInput() {
    return this._seat;
  }

  // street - computed: false, optional: true, required: false
  private _street?: string; 
  public get street() {
    return this.getStringAttribute('street');
  }
  public set street(value: string) {
    this._street = value;
  }
  public resetStreet() {
    this._street = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetInput() {
    return this._street;
  }

  // street_name_post_mod - computed: false, optional: true, required: false
  private _streetNamePostMod?: string; 
  public get streetNamePostMod() {
    return this.getStringAttribute('street_name_post_mod');
  }
  public set streetNamePostMod(value: string) {
    this._streetNamePostMod = value;
  }
  public resetStreetNamePostMod() {
    this._streetNamePostMod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetNamePostModInput() {
    return this._streetNamePostMod;
  }

  // street_name_pre_mod - computed: false, optional: true, required: false
  private _streetNamePreMod?: string; 
  public get streetNamePreMod() {
    return this.getStringAttribute('street_name_pre_mod');
  }
  public set streetNamePreMod(value: string) {
    this._streetNamePreMod = value;
  }
  public resetStreetNamePreMod() {
    this._streetNamePreMod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetNamePreModInput() {
    return this._streetNamePreMod;
  }

  // street_suffix - computed: false, optional: true, required: false
  private _streetSuffix?: string; 
  public get streetSuffix() {
    return this.getStringAttribute('street_suffix');
  }
  public set streetSuffix(value: string) {
    this._streetSuffix = value;
  }
  public resetStreetSuffix() {
    this._streetSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetSuffixInput() {
    return this._streetSuffix;
  }

  // sub_branch_road - computed: false, optional: true, required: false
  private _subBranchRoad?: string; 
  public get subBranchRoad() {
    return this.getStringAttribute('sub_branch_road');
  }
  public set subBranchRoad(value: string) {
    this._subBranchRoad = value;
  }
  public resetSubBranchRoad() {
    this._subBranchRoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subBranchRoadInput() {
    return this._subBranchRoad;
  }

  // trailing_str_suffix - computed: false, optional: true, required: false
  private _trailingStrSuffix?: string; 
  public get trailingStrSuffix() {
    return this.getStringAttribute('trailing_str_suffix');
  }
  public set trailingStrSuffix(value: string) {
    this._trailingStrSuffix = value;
  }
  public resetTrailingStrSuffix() {
    this._trailingStrSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trailingStrSuffixInput() {
    return this._trailingStrSuffix;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // zip - computed: false, optional: true, required: false
  private _zip?: string; 
  public get zip() {
    return this.getStringAttribute('zip');
  }
  public set zip(value: string) {
    this._zip = value;
  }
  public resetZip() {
    this._zip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipInput() {
    return this._zip;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      additional: cdktf.stringToTerraform(this._additional),
      additional_code: cdktf.stringToTerraform(this._additionalCode),
      block: cdktf.stringToTerraform(this._block),
      branch_road: cdktf.stringToTerraform(this._branchRoad),
      building: cdktf.stringToTerraform(this._building),
      city: cdktf.stringToTerraform(this._city),
      city_division: cdktf.stringToTerraform(this._cityDivision),
      country: cdktf.stringToTerraform(this._country),
      country_subdivision: cdktf.stringToTerraform(this._countrySubdivision),
      county: cdktf.stringToTerraform(this._county),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      direction: cdktf.stringToTerraform(this._direction),
      floor: cdktf.stringToTerraform(this._floor),
      id: cdktf.stringToTerraform(this._id),
      landmark: cdktf.stringToTerraform(this._landmark),
      language: cdktf.stringToTerraform(this._language),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      number: cdktf.stringToTerraform(this._number),
      number_suffix: cdktf.stringToTerraform(this._numberSuffix),
      parent_key: cdktf.stringToTerraform(this._parentKey),
      place_type: cdktf.stringToTerraform(this._placeType),
      post_office_box: cdktf.stringToTerraform(this._postOfficeBox),
      postal_community: cdktf.stringToTerraform(this._postalCommunity),
      primary_road: cdktf.stringToTerraform(this._primaryRoad),
      road_section: cdktf.stringToTerraform(this._roadSection),
      room: cdktf.stringToTerraform(this._room),
      script: cdktf.stringToTerraform(this._script),
      seat: cdktf.stringToTerraform(this._seat),
      street: cdktf.stringToTerraform(this._street),
      street_name_post_mod: cdktf.stringToTerraform(this._streetNamePostMod),
      street_name_pre_mod: cdktf.stringToTerraform(this._streetNamePreMod),
      street_suffix: cdktf.stringToTerraform(this._streetSuffix),
      sub_branch_road: cdktf.stringToTerraform(this._subBranchRoad),
      trailing_str_suffix: cdktf.stringToTerraform(this._trailingStrSuffix),
      unit: cdktf.stringToTerraform(this._unit),
      zip: cdktf.stringToTerraform(this._zip),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional: {
        value: cdktf.stringToHclTerraform(this._additional),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_code: {
        value: cdktf.stringToHclTerraform(this._additionalCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block: {
        value: cdktf.stringToHclTerraform(this._block),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      branch_road: {
        value: cdktf.stringToHclTerraform(this._branchRoad),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      building: {
        value: cdktf.stringToHclTerraform(this._building),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      city: {
        value: cdktf.stringToHclTerraform(this._city),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      city_division: {
        value: cdktf.stringToHclTerraform(this._cityDivision),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country_subdivision: {
        value: cdktf.stringToHclTerraform(this._countrySubdivision),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      county: {
        value: cdktf.stringToHclTerraform(this._county),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      floor: {
        value: cdktf.stringToHclTerraform(this._floor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      landmark: {
        value: cdktf.stringToHclTerraform(this._landmark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      language: {
        value: cdktf.stringToHclTerraform(this._language),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number: {
        value: cdktf.stringToHclTerraform(this._number),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      number_suffix: {
        value: cdktf.stringToHclTerraform(this._numberSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_key: {
        value: cdktf.stringToHclTerraform(this._parentKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      place_type: {
        value: cdktf.stringToHclTerraform(this._placeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_office_box: {
        value: cdktf.stringToHclTerraform(this._postOfficeBox),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postal_community: {
        value: cdktf.stringToHclTerraform(this._postalCommunity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_road: {
        value: cdktf.stringToHclTerraform(this._primaryRoad),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      road_section: {
        value: cdktf.stringToHclTerraform(this._roadSection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      room: {
        value: cdktf.stringToHclTerraform(this._room),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script: {
        value: cdktf.stringToHclTerraform(this._script),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      seat: {
        value: cdktf.stringToHclTerraform(this._seat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      street: {
        value: cdktf.stringToHclTerraform(this._street),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      street_name_post_mod: {
        value: cdktf.stringToHclTerraform(this._streetNamePostMod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      street_name_pre_mod: {
        value: cdktf.stringToHclTerraform(this._streetNamePreMod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      street_suffix: {
        value: cdktf.stringToHclTerraform(this._streetSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_branch_road: {
        value: cdktf.stringToHclTerraform(this._subBranchRoad),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trailing_str_suffix: {
        value: cdktf.stringToHclTerraform(this._trailingStrSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unit: {
        value: cdktf.stringToHclTerraform(this._unit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zip: {
        value: cdktf.stringToHclTerraform(this._zip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
