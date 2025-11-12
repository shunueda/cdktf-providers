// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/location#id Location#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/location#ipfrom Location#ipfrom}
  */
  readonly ipfrom: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/location#ipto Location#ipto}
  */
  readonly ipto: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/location#latitude Location#latitude}
  */
  readonly latitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/location#longitude Location#longitude}
  */
  readonly longitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/location#preferredlocation Location#preferredlocation}
  */
  readonly preferredlocation: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/location citrixadc_location}
*/
export class Location extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Location resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Location to import
  * @param importFromId The id of the existing Location that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Location to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/location citrixadc_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocationConfig
  */
  public constructor(scope: Construct, id: string, config: LocationConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_location',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
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
    this._ipfrom = config.ipfrom;
    this._ipto = config.ipto;
    this._latitude = config.latitude;
    this._longitude = config.longitude;
    this._preferredlocation = config.preferredlocation;
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

  // ipfrom - computed: false, optional: false, required: true
  private _ipfrom?: string; 
  public get ipfrom() {
    return this.getStringAttribute('ipfrom');
  }
  public set ipfrom(value: string) {
    this._ipfrom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfromInput() {
    return this._ipfrom;
  }

  // ipto - computed: false, optional: false, required: true
  private _ipto?: string; 
  public get ipto() {
    return this.getStringAttribute('ipto');
  }
  public set ipto(value: string) {
    this._ipto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iptoInput() {
    return this._ipto;
  }

  // latitude - computed: true, optional: true, required: false
  private _latitude?: number; 
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }
  public set latitude(value: number) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: true, optional: true, required: false
  private _longitude?: number; 
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }
  public set longitude(value: number) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // preferredlocation - computed: false, optional: false, required: true
  private _preferredlocation?: string; 
  public get preferredlocation() {
    return this.getStringAttribute('preferredlocation');
  }
  public set preferredlocation(value: string) {
    this._preferredlocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredlocationInput() {
    return this._preferredlocation;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipfrom: cdktf.stringToTerraform(this._ipfrom),
      ipto: cdktf.stringToTerraform(this._ipto),
      latitude: cdktf.numberToTerraform(this._latitude),
      longitude: cdktf.numberToTerraform(this._longitude),
      preferredlocation: cdktf.stringToTerraform(this._preferredlocation),
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
      ipfrom: {
        value: cdktf.stringToHclTerraform(this._ipfrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipto: {
        value: cdktf.stringToHclTerraform(this._ipto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      latitude: {
        value: cdktf.numberToHclTerraform(this._latitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      longitude: {
        value: cdktf.numberToHclTerraform(this._longitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preferredlocation: {
        value: cdktf.stringToHclTerraform(this._preferredlocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
