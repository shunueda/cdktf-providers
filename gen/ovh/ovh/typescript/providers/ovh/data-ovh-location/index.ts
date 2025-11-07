// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/location#name DataOvhLocation#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/location ovh_location}
*/
export class DataOvhLocation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhLocation to import
  * @param importFromId The id of the existing DataOvhLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/location ovh_location} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhLocationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOvhLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_location',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_zones - computed: true, optional: false, required: false
  public get availabilityZones() {
    return this.getListAttribute('availability_zones');
  }

  // cardinal_point - computed: true, optional: false, required: false
  public get cardinalPoint() {
    return this.getStringAttribute('cardinal_point');
  }

  // city_code - computed: true, optional: false, required: false
  public get cityCode() {
    return this.getStringAttribute('city_code');
  }

  // city_latitude - computed: true, optional: false, required: false
  public get cityLatitude() {
    return this.getNumberAttribute('city_latitude');
  }

  // city_longitude - computed: true, optional: false, required: false
  public get cityLongitude() {
    return this.getNumberAttribute('city_longitude');
  }

  // city_name - computed: true, optional: false, required: false
  public get cityName() {
    return this.getStringAttribute('city_name');
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // country_name - computed: true, optional: false, required: false
  public get countryName() {
    return this.getStringAttribute('country_name');
  }

  // geography_code - computed: true, optional: false, required: false
  public get geographyCode() {
    return this.getStringAttribute('geography_code');
  }

  // geography_name - computed: true, optional: false, required: false
  public get geographyName() {
    return this.getStringAttribute('geography_name');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // opening_year - computed: true, optional: false, required: false
  public get openingYear() {
    return this.getNumberAttribute('opening_year');
  }

  // specific_type - computed: true, optional: false, required: false
  public get specificType() {
    return this.getStringAttribute('specific_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
