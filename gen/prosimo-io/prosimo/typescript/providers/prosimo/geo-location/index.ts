// https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/geo_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GeoLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/geo_location#id GeoLocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * allow_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/geo_location#allow_list GeoLocation#allow_list}
  */
  readonly allowList: GeoLocationAllowListStruct[] | cdktf.IResolvable;
}
export interface GeoLocationAllowListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/geo_location#city_name GeoLocation#city_name}
  */
  readonly cityName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/geo_location#country_name GeoLocation#country_name}
  */
  readonly countryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/geo_location#state_name GeoLocation#state_name}
  */
  readonly stateName?: string;
}

export function geoLocationAllowListStructToTerraform(struct?: GeoLocationAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    city_name: cdktf.stringToTerraform(struct!.cityName),
    country_name: cdktf.stringToTerraform(struct!.countryName),
    state_name: cdktf.stringToTerraform(struct!.stateName),
  }
}


export function geoLocationAllowListStructToHclTerraform(struct?: GeoLocationAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    city_name: {
      value: cdktf.stringToHclTerraform(struct!.cityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country_name: {
      value: cdktf.stringToHclTerraform(struct!.countryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state_name: {
      value: cdktf.stringToHclTerraform(struct!.stateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GeoLocationAllowListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GeoLocationAllowListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cityName = this._cityName;
    }
    if (this._countryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryName = this._countryName;
    }
    if (this._stateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stateName = this._stateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GeoLocationAllowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cityName = undefined;
      this._countryName = undefined;
      this._stateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cityName = value.cityName;
      this._countryName = value.countryName;
      this._stateName = value.stateName;
    }
  }

  // city_name - computed: false, optional: true, required: false
  private _cityName?: string; 
  public get cityName() {
    return this.getStringAttribute('city_name');
  }
  public set cityName(value: string) {
    this._cityName = value;
  }
  public resetCityName() {
    this._cityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityNameInput() {
    return this._cityName;
  }

  // country_name - computed: false, optional: false, required: true
  private _countryName?: string; 
  public get countryName() {
    return this.getStringAttribute('country_name');
  }
  public set countryName(value: string) {
    this._countryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryNameInput() {
    return this._countryName;
  }

  // state_name - computed: false, optional: true, required: false
  private _stateName?: string; 
  public get stateName() {
    return this.getStringAttribute('state_name');
  }
  public set stateName(value: string) {
    this._stateName = value;
  }
  public resetStateName() {
    this._stateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateNameInput() {
    return this._stateName;
  }
}

export class GeoLocationAllowListStructList extends cdktf.ComplexList {
  public internalValue? : GeoLocationAllowListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): GeoLocationAllowListStructOutputReference {
    return new GeoLocationAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/geo_location prosimo_geo_location}
*/
export class GeoLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prosimo_geo_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GeoLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GeoLocation to import
  * @param importFromId The id of the existing GeoLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/geo_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GeoLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prosimo_geo_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/prosimo-io/prosimo/4.5.3/docs/resources/geo_location prosimo_geo_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GeoLocationConfig
  */
  public constructor(scope: Construct, id: string, config: GeoLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'prosimo_geo_location',
      terraformGeneratorMetadata: {
        providerName: 'prosimo',
        providerVersion: '4.5.3',
        providerVersionConstraint: '4.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._allowList.internalValue = config.allowList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // allow_list - computed: false, optional: false, required: true
  private _allowList = new GeoLocationAllowListStructList(this, "allow_list", false);
  public get allowList() {
    return this._allowList;
  }
  public putAllowList(value: GeoLocationAllowListStruct[] | cdktf.IResolvable) {
    this._allowList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListInput() {
    return this._allowList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      allow_list: cdktf.listMapper(geoLocationAllowListStructToTerraform, true)(this._allowList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_list: {
        value: cdktf.listMapperHcl(geoLocationAllowListStructToHclTerraform, true)(this._allowList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GeoLocationAllowListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
