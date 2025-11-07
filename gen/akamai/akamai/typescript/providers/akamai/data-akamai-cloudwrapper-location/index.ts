// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAkamaiCloudwrapperLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_location#location_name DataAkamaiCloudwrapperLocation#location_name}
  */
  readonly locationName: string;
  /**
  * Represents the traffic type. LIVE applies to low-latency media traffic, such as live streaming. LIVE_VOD applies to redundant media traffic, like video on demand content. WEB_STANDARD_TLS or WEB_ENHANCED_TLS applies to web content using Standard TLS security or Enhanced TLS security, respectively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_location#traffic_type DataAkamaiCloudwrapperLocation#traffic_type}
  */
  readonly trafficType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_location akamai_cloudwrapper_location}
*/
export class DataAkamaiCloudwrapperLocation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_cloudwrapper_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAkamaiCloudwrapperLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAkamaiCloudwrapperLocation to import
  * @param importFromId The id of the existing DataAkamaiCloudwrapperLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAkamaiCloudwrapperLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_cloudwrapper_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/data-sources/cloudwrapper_location akamai_cloudwrapper_location} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAkamaiCloudwrapperLocationConfig
  */
  public constructor(scope: Construct, id: string, config: DataAkamaiCloudwrapperLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_cloudwrapper_location',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._locationName = config.locationName;
    this._trafficType = config.trafficType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // location_id - computed: true, optional: false, required: false
  public get locationId() {
    return this.getStringAttribute('location_id');
  }

  // location_name - computed: false, optional: false, required: true
  private _locationName?: string; 
  public get locationName() {
    return this.getStringAttribute('location_name');
  }
  public set locationName(value: string) {
    this._locationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationNameInput() {
    return this._locationName;
  }

  // traffic_type - computed: false, optional: false, required: true
  private _trafficType?: string; 
  public get trafficType() {
    return this.getStringAttribute('traffic_type');
  }
  public set trafficType(value: string) {
    this._trafficType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficTypeInput() {
    return this._trafficType;
  }

  // traffic_type_id - computed: true, optional: false, required: false
  public get trafficTypeId() {
    return this.getNumberAttribute('traffic_type_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location_name: cdktf.stringToTerraform(this._locationName),
      traffic_type: cdktf.stringToTerraform(this._trafficType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      location_name: {
        value: cdktf.stringToHclTerraform(this._locationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_type: {
        value: cdktf.stringToHclTerraform(this._trafficType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
