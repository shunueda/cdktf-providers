// https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_proximity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConstellixGeoProximityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_proximity#city DataConstellixGeoProximity#city}
  */
  readonly city?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_proximity#country DataConstellixGeoProximity#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_proximity#id DataConstellixGeoProximity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_proximity#latitude DataConstellixGeoProximity#latitude}
  */
  readonly latitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_proximity#longitude DataConstellixGeoProximity#longitude}
  */
  readonly longitude?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_proximity#name DataConstellixGeoProximity#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_proximity#region DataConstellixGeoProximity#region}
  */
  readonly region?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_proximity constellix_geo_proximity}
*/
export class DataConstellixGeoProximity extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "constellix_geo_proximity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConstellixGeoProximity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConstellixGeoProximity to import
  * @param importFromId The id of the existing DataConstellixGeoProximity that should be imported. Refer to the {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_proximity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConstellixGeoProximity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "constellix_geo_proximity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/constellix/constellix/0.4.6/docs/data-sources/geo_proximity constellix_geo_proximity} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConstellixGeoProximityConfig
  */
  public constructor(scope: Construct, id: string, config: DataConstellixGeoProximityConfig) {
    super(scope, id, {
      terraformResourceType: 'constellix_geo_proximity',
      terraformGeneratorMetadata: {
        providerName: 'constellix',
        providerVersion: '0.4.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._city = config.city;
    this._country = config.country;
    this._id = config.id;
    this._latitude = config.latitude;
    this._longitude = config.longitude;
    this._name = config.name;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // city - computed: true, optional: true, required: false
  private _city?: number; 
  public get city() {
    return this.getNumberAttribute('city');
  }
  public set city(value: number) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // country - computed: true, optional: true, required: false
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

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      city: cdktf.numberToTerraform(this._city),
      country: cdktf.stringToTerraform(this._country),
      id: cdktf.stringToTerraform(this._id),
      latitude: cdktf.numberToTerraform(this._latitude),
      longitude: cdktf.numberToTerraform(this._longitude),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      city: {
        value: cdktf.numberToHclTerraform(this._city),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
