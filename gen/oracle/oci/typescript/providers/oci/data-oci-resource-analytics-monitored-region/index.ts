// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/resource_analytics_monitored_region
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciResourceAnalyticsMonitoredRegionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/resource_analytics_monitored_region#monitored_region_id DataOciResourceAnalyticsMonitoredRegion#monitored_region_id}
  */
  readonly monitoredRegionId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/resource_analytics_monitored_region oci_resource_analytics_monitored_region}
*/
export class DataOciResourceAnalyticsMonitoredRegion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_resource_analytics_monitored_region";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciResourceAnalyticsMonitoredRegion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciResourceAnalyticsMonitoredRegion to import
  * @param importFromId The id of the existing DataOciResourceAnalyticsMonitoredRegion that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/resource_analytics_monitored_region#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciResourceAnalyticsMonitoredRegion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_resource_analytics_monitored_region", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/resource_analytics_monitored_region oci_resource_analytics_monitored_region} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciResourceAnalyticsMonitoredRegionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciResourceAnalyticsMonitoredRegionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_resource_analytics_monitored_region',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._monitoredRegionId = config.monitoredRegionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // monitored_region_id - computed: false, optional: false, required: true
  private _monitoredRegionId?: string; 
  public get monitoredRegionId() {
    return this.getStringAttribute('monitored_region_id');
  }
  public set monitoredRegionId(value: string) {
    this._monitoredRegionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredRegionIdInput() {
    return this._monitoredRegionId;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // resource_analytics_instance_id - computed: true, optional: false, required: false
  public get resourceAnalyticsInstanceId() {
    return this.getStringAttribute('resource_analytics_instance_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      monitored_region_id: cdktf.stringToTerraform(this._monitoredRegionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      monitored_region_id: {
        value: cdktf.stringToHclTerraform(this._monitoredRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
