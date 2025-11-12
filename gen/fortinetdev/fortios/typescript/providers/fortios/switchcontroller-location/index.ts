// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchcontrollerLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#get_all_tables SwitchcontrollerLocation#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#id SwitchcontrollerLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#name SwitchcontrollerLocation#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#vdomparam SwitchcontrollerLocation#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * address_civic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#address_civic SwitchcontrollerLocation#address_civic}
  */
  readonly addressCivic?: SwitchcontrollerLocationAddressCivic;
  /**
  * coordinates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#coordinates SwitchcontrollerLocation#coordinates}
  */
  readonly coordinates?: SwitchcontrollerLocationCoordinates;
  /**
  * elin_number block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#elin_number SwitchcontrollerLocation#elin_number}
  */
  readonly elinNumber?: SwitchcontrollerLocationElinNumber;
}
export interface SwitchcontrollerLocationAddressCivic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#additional SwitchcontrollerLocation#additional}
  */
  readonly additional?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#additional_code SwitchcontrollerLocation#additional_code}
  */
  readonly additionalCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#block SwitchcontrollerLocation#block}
  */
  readonly block?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#branch_road SwitchcontrollerLocation#branch_road}
  */
  readonly branchRoad?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#building SwitchcontrollerLocation#building}
  */
  readonly building?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#city SwitchcontrollerLocation#city}
  */
  readonly city?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#city_division SwitchcontrollerLocation#city_division}
  */
  readonly cityDivision?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#country SwitchcontrollerLocation#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#country_subdivision SwitchcontrollerLocation#country_subdivision}
  */
  readonly countrySubdivision?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#county SwitchcontrollerLocation#county}
  */
  readonly county?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#direction SwitchcontrollerLocation#direction}
  */
  readonly direction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#floor SwitchcontrollerLocation#floor}
  */
  readonly floor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#landmark SwitchcontrollerLocation#landmark}
  */
  readonly landmark?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#language SwitchcontrollerLocation#language}
  */
  readonly language?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#name SwitchcontrollerLocation#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#number SwitchcontrollerLocation#number}
  */
  readonly number?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#number_suffix SwitchcontrollerLocation#number_suffix}
  */
  readonly numberSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#parent_key SwitchcontrollerLocation#parent_key}
  */
  readonly parentKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#place_type SwitchcontrollerLocation#place_type}
  */
  readonly placeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#post_office_box SwitchcontrollerLocation#post_office_box}
  */
  readonly postOfficeBox?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#postal_community SwitchcontrollerLocation#postal_community}
  */
  readonly postalCommunity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#primary_road SwitchcontrollerLocation#primary_road}
  */
  readonly primaryRoad?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#road_section SwitchcontrollerLocation#road_section}
  */
  readonly roadSection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#room SwitchcontrollerLocation#room}
  */
  readonly room?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#script SwitchcontrollerLocation#script}
  */
  readonly script?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#seat SwitchcontrollerLocation#seat}
  */
  readonly seat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#street SwitchcontrollerLocation#street}
  */
  readonly street?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#street_name_post_mod SwitchcontrollerLocation#street_name_post_mod}
  */
  readonly streetNamePostMod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#street_name_pre_mod SwitchcontrollerLocation#street_name_pre_mod}
  */
  readonly streetNamePreMod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#street_suffix SwitchcontrollerLocation#street_suffix}
  */
  readonly streetSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#sub_branch_road SwitchcontrollerLocation#sub_branch_road}
  */
  readonly subBranchRoad?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#trailing_str_suffix SwitchcontrollerLocation#trailing_str_suffix}
  */
  readonly trailingStrSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#unit SwitchcontrollerLocation#unit}
  */
  readonly unit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#zip SwitchcontrollerLocation#zip}
  */
  readonly zip?: string;
}

export function switchcontrollerLocationAddressCivicToTerraform(struct?: SwitchcontrollerLocationAddressCivicOutputReference | SwitchcontrollerLocationAddressCivic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional: cdktf.stringToTerraform(struct!.additional),
    additional_code: cdktf.stringToTerraform(struct!.additionalCode),
    block: cdktf.stringToTerraform(struct!.block),
    branch_road: cdktf.stringToTerraform(struct!.branchRoad),
    building: cdktf.stringToTerraform(struct!.building),
    city: cdktf.stringToTerraform(struct!.city),
    city_division: cdktf.stringToTerraform(struct!.cityDivision),
    country: cdktf.stringToTerraform(struct!.country),
    country_subdivision: cdktf.stringToTerraform(struct!.countrySubdivision),
    county: cdktf.stringToTerraform(struct!.county),
    direction: cdktf.stringToTerraform(struct!.direction),
    floor: cdktf.stringToTerraform(struct!.floor),
    landmark: cdktf.stringToTerraform(struct!.landmark),
    language: cdktf.stringToTerraform(struct!.language),
    name: cdktf.stringToTerraform(struct!.name),
    number: cdktf.stringToTerraform(struct!.number),
    number_suffix: cdktf.stringToTerraform(struct!.numberSuffix),
    parent_key: cdktf.stringToTerraform(struct!.parentKey),
    place_type: cdktf.stringToTerraform(struct!.placeType),
    post_office_box: cdktf.stringToTerraform(struct!.postOfficeBox),
    postal_community: cdktf.stringToTerraform(struct!.postalCommunity),
    primary_road: cdktf.stringToTerraform(struct!.primaryRoad),
    road_section: cdktf.stringToTerraform(struct!.roadSection),
    room: cdktf.stringToTerraform(struct!.room),
    script: cdktf.stringToTerraform(struct!.script),
    seat: cdktf.stringToTerraform(struct!.seat),
    street: cdktf.stringToTerraform(struct!.street),
    street_name_post_mod: cdktf.stringToTerraform(struct!.streetNamePostMod),
    street_name_pre_mod: cdktf.stringToTerraform(struct!.streetNamePreMod),
    street_suffix: cdktf.stringToTerraform(struct!.streetSuffix),
    sub_branch_road: cdktf.stringToTerraform(struct!.subBranchRoad),
    trailing_str_suffix: cdktf.stringToTerraform(struct!.trailingStrSuffix),
    unit: cdktf.stringToTerraform(struct!.unit),
    zip: cdktf.stringToTerraform(struct!.zip),
  }
}


export function switchcontrollerLocationAddressCivicToHclTerraform(struct?: SwitchcontrollerLocationAddressCivicOutputReference | SwitchcontrollerLocationAddressCivic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional: {
      value: cdktf.stringToHclTerraform(struct!.additional),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    additional_code: {
      value: cdktf.stringToHclTerraform(struct!.additionalCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block: {
      value: cdktf.stringToHclTerraform(struct!.block),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branch_road: {
      value: cdktf.stringToHclTerraform(struct!.branchRoad),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    building: {
      value: cdktf.stringToHclTerraform(struct!.building),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    city_division: {
      value: cdktf.stringToHclTerraform(struct!.cityDivision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country_subdivision: {
      value: cdktf.stringToHclTerraform(struct!.countrySubdivision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    county: {
      value: cdktf.stringToHclTerraform(struct!.county),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    floor: {
      value: cdktf.stringToHclTerraform(struct!.floor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    landmark: {
      value: cdktf.stringToHclTerraform(struct!.landmark),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number: {
      value: cdktf.stringToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_suffix: {
      value: cdktf.stringToHclTerraform(struct!.numberSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_key: {
      value: cdktf.stringToHclTerraform(struct!.parentKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    place_type: {
      value: cdktf.stringToHclTerraform(struct!.placeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_office_box: {
      value: cdktf.stringToHclTerraform(struct!.postOfficeBox),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postal_community: {
      value: cdktf.stringToHclTerraform(struct!.postalCommunity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_road: {
      value: cdktf.stringToHclTerraform(struct!.primaryRoad),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    road_section: {
      value: cdktf.stringToHclTerraform(struct!.roadSection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    room: {
      value: cdktf.stringToHclTerraform(struct!.room),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seat: {
      value: cdktf.stringToHclTerraform(struct!.seat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    street: {
      value: cdktf.stringToHclTerraform(struct!.street),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    street_name_post_mod: {
      value: cdktf.stringToHclTerraform(struct!.streetNamePostMod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    street_name_pre_mod: {
      value: cdktf.stringToHclTerraform(struct!.streetNamePreMod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    street_suffix: {
      value: cdktf.stringToHclTerraform(struct!.streetSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_branch_road: {
      value: cdktf.stringToHclTerraform(struct!.subBranchRoad),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trailing_str_suffix: {
      value: cdktf.stringToHclTerraform(struct!.trailingStrSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zip: {
      value: cdktf.stringToHclTerraform(struct!.zip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerLocationAddressCivicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchcontrollerLocationAddressCivic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additional !== undefined) {
      hasAnyValues = true;
      internalValueResult.additional = this._additional;
    }
    if (this._additionalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalCode = this._additionalCode;
    }
    if (this._block !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block;
    }
    if (this._branchRoad !== undefined) {
      hasAnyValues = true;
      internalValueResult.branchRoad = this._branchRoad;
    }
    if (this._building !== undefined) {
      hasAnyValues = true;
      internalValueResult.building = this._building;
    }
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._cityDivision !== undefined) {
      hasAnyValues = true;
      internalValueResult.cityDivision = this._cityDivision;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._countrySubdivision !== undefined) {
      hasAnyValues = true;
      internalValueResult.countrySubdivision = this._countrySubdivision;
    }
    if (this._county !== undefined) {
      hasAnyValues = true;
      internalValueResult.county = this._county;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._floor !== undefined) {
      hasAnyValues = true;
      internalValueResult.floor = this._floor;
    }
    if (this._landmark !== undefined) {
      hasAnyValues = true;
      internalValueResult.landmark = this._landmark;
    }
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    if (this._numberSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberSuffix = this._numberSuffix;
    }
    if (this._parentKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentKey = this._parentKey;
    }
    if (this._placeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.placeType = this._placeType;
    }
    if (this._postOfficeBox !== undefined) {
      hasAnyValues = true;
      internalValueResult.postOfficeBox = this._postOfficeBox;
    }
    if (this._postalCommunity !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCommunity = this._postalCommunity;
    }
    if (this._primaryRoad !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryRoad = this._primaryRoad;
    }
    if (this._roadSection !== undefined) {
      hasAnyValues = true;
      internalValueResult.roadSection = this._roadSection;
    }
    if (this._room !== undefined) {
      hasAnyValues = true;
      internalValueResult.room = this._room;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._seat !== undefined) {
      hasAnyValues = true;
      internalValueResult.seat = this._seat;
    }
    if (this._street !== undefined) {
      hasAnyValues = true;
      internalValueResult.street = this._street;
    }
    if (this._streetNamePostMod !== undefined) {
      hasAnyValues = true;
      internalValueResult.streetNamePostMod = this._streetNamePostMod;
    }
    if (this._streetNamePreMod !== undefined) {
      hasAnyValues = true;
      internalValueResult.streetNamePreMod = this._streetNamePreMod;
    }
    if (this._streetSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.streetSuffix = this._streetSuffix;
    }
    if (this._subBranchRoad !== undefined) {
      hasAnyValues = true;
      internalValueResult.subBranchRoad = this._subBranchRoad;
    }
    if (this._trailingStrSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.trailingStrSuffix = this._trailingStrSuffix;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._zip !== undefined) {
      hasAnyValues = true;
      internalValueResult.zip = this._zip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerLocationAddressCivic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additional = undefined;
      this._additionalCode = undefined;
      this._block = undefined;
      this._branchRoad = undefined;
      this._building = undefined;
      this._city = undefined;
      this._cityDivision = undefined;
      this._country = undefined;
      this._countrySubdivision = undefined;
      this._county = undefined;
      this._direction = undefined;
      this._floor = undefined;
      this._landmark = undefined;
      this._language = undefined;
      this._name = undefined;
      this._number = undefined;
      this._numberSuffix = undefined;
      this._parentKey = undefined;
      this._placeType = undefined;
      this._postOfficeBox = undefined;
      this._postalCommunity = undefined;
      this._primaryRoad = undefined;
      this._roadSection = undefined;
      this._room = undefined;
      this._script = undefined;
      this._seat = undefined;
      this._street = undefined;
      this._streetNamePostMod = undefined;
      this._streetNamePreMod = undefined;
      this._streetSuffix = undefined;
      this._subBranchRoad = undefined;
      this._trailingStrSuffix = undefined;
      this._unit = undefined;
      this._zip = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additional = value.additional;
      this._additionalCode = value.additionalCode;
      this._block = value.block;
      this._branchRoad = value.branchRoad;
      this._building = value.building;
      this._city = value.city;
      this._cityDivision = value.cityDivision;
      this._country = value.country;
      this._countrySubdivision = value.countrySubdivision;
      this._county = value.county;
      this._direction = value.direction;
      this._floor = value.floor;
      this._landmark = value.landmark;
      this._language = value.language;
      this._name = value.name;
      this._number = value.number;
      this._numberSuffix = value.numberSuffix;
      this._parentKey = value.parentKey;
      this._placeType = value.placeType;
      this._postOfficeBox = value.postOfficeBox;
      this._postalCommunity = value.postalCommunity;
      this._primaryRoad = value.primaryRoad;
      this._roadSection = value.roadSection;
      this._room = value.room;
      this._script = value.script;
      this._seat = value.seat;
      this._street = value.street;
      this._streetNamePostMod = value.streetNamePostMod;
      this._streetNamePreMod = value.streetNamePreMod;
      this._streetSuffix = value.streetSuffix;
      this._subBranchRoad = value.subBranchRoad;
      this._trailingStrSuffix = value.trailingStrSuffix;
      this._unit = value.unit;
      this._zip = value.zip;
    }
  }

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

  // parent_key - computed: true, optional: true, required: false
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
}
export interface SwitchcontrollerLocationCoordinates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#altitude SwitchcontrollerLocation#altitude}
  */
  readonly altitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#altitude_unit SwitchcontrollerLocation#altitude_unit}
  */
  readonly altitudeUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#datum SwitchcontrollerLocation#datum}
  */
  readonly datum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#latitude SwitchcontrollerLocation#latitude}
  */
  readonly latitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#longitude SwitchcontrollerLocation#longitude}
  */
  readonly longitude?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#parent_key SwitchcontrollerLocation#parent_key}
  */
  readonly parentKey?: string;
}

export function switchcontrollerLocationCoordinatesToTerraform(struct?: SwitchcontrollerLocationCoordinatesOutputReference | SwitchcontrollerLocationCoordinates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    altitude: cdktf.stringToTerraform(struct!.altitude),
    altitude_unit: cdktf.stringToTerraform(struct!.altitudeUnit),
    datum: cdktf.stringToTerraform(struct!.datum),
    latitude: cdktf.stringToTerraform(struct!.latitude),
    longitude: cdktf.stringToTerraform(struct!.longitude),
    parent_key: cdktf.stringToTerraform(struct!.parentKey),
  }
}


export function switchcontrollerLocationCoordinatesToHclTerraform(struct?: SwitchcontrollerLocationCoordinatesOutputReference | SwitchcontrollerLocationCoordinates): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    altitude: {
      value: cdktf.stringToHclTerraform(struct!.altitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    altitude_unit: {
      value: cdktf.stringToHclTerraform(struct!.altitudeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datum: {
      value: cdktf.stringToHclTerraform(struct!.datum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latitude: {
      value: cdktf.stringToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    longitude: {
      value: cdktf.stringToHclTerraform(struct!.longitude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_key: {
      value: cdktf.stringToHclTerraform(struct!.parentKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerLocationCoordinatesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchcontrollerLocationCoordinates | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._altitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.altitude = this._altitude;
    }
    if (this._altitudeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.altitudeUnit = this._altitudeUnit;
    }
    if (this._datum !== undefined) {
      hasAnyValues = true;
      internalValueResult.datum = this._datum;
    }
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    if (this._parentKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentKey = this._parentKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerLocationCoordinates | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._altitude = undefined;
      this._altitudeUnit = undefined;
      this._datum = undefined;
      this._latitude = undefined;
      this._longitude = undefined;
      this._parentKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._altitude = value.altitude;
      this._altitudeUnit = value.altitudeUnit;
      this._datum = value.datum;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
      this._parentKey = value.parentKey;
    }
  }

  // altitude - computed: false, optional: true, required: false
  private _altitude?: string; 
  public get altitude() {
    return this.getStringAttribute('altitude');
  }
  public set altitude(value: string) {
    this._altitude = value;
  }
  public resetAltitude() {
    this._altitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altitudeInput() {
    return this._altitude;
  }

  // altitude_unit - computed: true, optional: true, required: false
  private _altitudeUnit?: string; 
  public get altitudeUnit() {
    return this.getStringAttribute('altitude_unit');
  }
  public set altitudeUnit(value: string) {
    this._altitudeUnit = value;
  }
  public resetAltitudeUnit() {
    this._altitudeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altitudeUnitInput() {
    return this._altitudeUnit;
  }

  // datum - computed: true, optional: true, required: false
  private _datum?: string; 
  public get datum() {
    return this.getStringAttribute('datum');
  }
  public set datum(value: string) {
    this._datum = value;
  }
  public resetDatum() {
    this._datum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datumInput() {
    return this._datum;
  }

  // latitude - computed: false, optional: true, required: false
  private _latitude?: string; 
  public get latitude() {
    return this.getStringAttribute('latitude');
  }
  public set latitude(value: string) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: false, optional: true, required: false
  private _longitude?: string; 
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
  public set longitude(value: string) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
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
}
export interface SwitchcontrollerLocationElinNumber {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#elin_num SwitchcontrollerLocation#elin_num}
  */
  readonly elinNum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#parent_key SwitchcontrollerLocation#parent_key}
  */
  readonly parentKey?: string;
}

export function switchcontrollerLocationElinNumberToTerraform(struct?: SwitchcontrollerLocationElinNumberOutputReference | SwitchcontrollerLocationElinNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elin_num: cdktf.stringToTerraform(struct!.elinNum),
    parent_key: cdktf.stringToTerraform(struct!.parentKey),
  }
}


export function switchcontrollerLocationElinNumberToHclTerraform(struct?: SwitchcontrollerLocationElinNumberOutputReference | SwitchcontrollerLocationElinNumber): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    elin_num: {
      value: cdktf.stringToHclTerraform(struct!.elinNum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_key: {
      value: cdktf.stringToHclTerraform(struct!.parentKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchcontrollerLocationElinNumberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SwitchcontrollerLocationElinNumber | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._elinNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.elinNum = this._elinNum;
    }
    if (this._parentKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentKey = this._parentKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchcontrollerLocationElinNumber | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._elinNum = undefined;
      this._parentKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._elinNum = value.elinNum;
      this._parentKey = value.parentKey;
    }
  }

  // elin_num - computed: false, optional: true, required: false
  private _elinNum?: string; 
  public get elinNum() {
    return this.getStringAttribute('elin_num');
  }
  public set elinNum(value: string) {
    this._elinNum = value;
  }
  public resetElinNum() {
    this._elinNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elinNumInput() {
    return this._elinNum;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location fortios_switchcontroller_location}
*/
export class SwitchcontrollerLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_switchcontroller_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchcontrollerLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchcontrollerLocation to import
  * @param importFromId The id of the existing SwitchcontrollerLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchcontrollerLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_switchcontroller_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/switchcontroller_location fortios_switchcontroller_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchcontrollerLocationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchcontrollerLocationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_switchcontroller_location',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._name = config.name;
    this._vdomparam = config.vdomparam;
    this._addressCivic.internalValue = config.addressCivic;
    this._coordinates.internalValue = config.coordinates;
    this._elinNumber.internalValue = config.elinNumber;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // name - computed: true, optional: true, required: false
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

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // address_civic - computed: false, optional: true, required: false
  private _addressCivic = new SwitchcontrollerLocationAddressCivicOutputReference(this, "address_civic");
  public get addressCivic() {
    return this._addressCivic;
  }
  public putAddressCivic(value: SwitchcontrollerLocationAddressCivic) {
    this._addressCivic.internalValue = value;
  }
  public resetAddressCivic() {
    this._addressCivic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressCivicInput() {
    return this._addressCivic.internalValue;
  }

  // coordinates - computed: false, optional: true, required: false
  private _coordinates = new SwitchcontrollerLocationCoordinatesOutputReference(this, "coordinates");
  public get coordinates() {
    return this._coordinates;
  }
  public putCoordinates(value: SwitchcontrollerLocationCoordinates) {
    this._coordinates.internalValue = value;
  }
  public resetCoordinates() {
    this._coordinates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatesInput() {
    return this._coordinates.internalValue;
  }

  // elin_number - computed: false, optional: true, required: false
  private _elinNumber = new SwitchcontrollerLocationElinNumberOutputReference(this, "elin_number");
  public get elinNumber() {
    return this._elinNumber;
  }
  public putElinNumber(value: SwitchcontrollerLocationElinNumber) {
    this._elinNumber.internalValue = value;
  }
  public resetElinNumber() {
    this._elinNumber.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elinNumberInput() {
    return this._elinNumber.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      address_civic: switchcontrollerLocationAddressCivicToTerraform(this._addressCivic.internalValue),
      coordinates: switchcontrollerLocationCoordinatesToTerraform(this._coordinates.internalValue),
      elin_number: switchcontrollerLocationElinNumberToTerraform(this._elinNumber.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_civic: {
        value: switchcontrollerLocationAddressCivicToHclTerraform(this._addressCivic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerLocationAddressCivicList",
      },
      coordinates: {
        value: switchcontrollerLocationCoordinatesToHclTerraform(this._coordinates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerLocationCoordinatesList",
      },
      elin_number: {
        value: switchcontrollerLocationElinNumberToHclTerraform(this._elinNumber.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchcontrollerLocationElinNumberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
