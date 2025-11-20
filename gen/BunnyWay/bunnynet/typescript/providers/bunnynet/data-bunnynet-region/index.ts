// https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/data-sources/region
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBunnynetRegionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The code representing a specific region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/data-sources/region#region_code DataBunnynetRegion#region_code}
  */
  readonly regionCode: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/data-sources/region bunnynet_region}
*/
export class DataBunnynetRegion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bunnynet_region";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBunnynetRegion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBunnynetRegion to import
  * @param importFromId The id of the existing DataBunnynetRegion that should be imported. Refer to the {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/data-sources/region#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBunnynetRegion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bunnynet_region", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bunnyway/bunnynet/0.11.2/docs/data-sources/region bunnynet_region} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBunnynetRegionConfig
  */
  public constructor(scope: Construct, id: string, config: DataBunnynetRegionConfig) {
    super(scope, id, {
      terraformResourceType: 'bunnynet_region',
      terraformGeneratorMetadata: {
        providerName: 'bunnynet',
        providerVersion: '0.11.2',
        providerVersionConstraint: '0.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._regionCode = config.regionCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_latency_routing - computed: true, optional: false, required: false
  public get allowLatencyRouting() {
    return this.getBooleanAttribute('allow_latency_routing');
  }

  // continent_code - computed: true, optional: false, required: false
  public get continentCode() {
    return this.getStringAttribute('continent_code');
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // latitude - computed: true, optional: false, required: false
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }

  // longitude - computed: true, optional: false, required: false
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // price_per_gigabyte - computed: true, optional: false, required: false
  public get pricePerGigabyte() {
    return this.getNumberAttribute('price_per_gigabyte');
  }

  // region_code - computed: false, optional: false, required: true
  private _regionCode?: string; 
  public get regionCode() {
    return this.getStringAttribute('region_code');
  }
  public set regionCode(value: string) {
    this._regionCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionCodeInput() {
    return this._regionCode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      region_code: cdktf.stringToTerraform(this._regionCode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      region_code: {
        value: cdktf.stringToHclTerraform(this._regionCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
