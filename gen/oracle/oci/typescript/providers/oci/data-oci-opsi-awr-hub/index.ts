// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/opsi_awr_hub
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOpsiAwrHubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/opsi_awr_hub#awr_hub_id DataOciOpsiAwrHub#awr_hub_id}
  */
  readonly awrHubId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/opsi_awr_hub oci_opsi_awr_hub}
*/
export class DataOciOpsiAwrHub extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opsi_awr_hub";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOpsiAwrHub resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOpsiAwrHub to import
  * @param importFromId The id of the existing DataOciOpsiAwrHub that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/opsi_awr_hub#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOpsiAwrHub to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opsi_awr_hub", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/opsi_awr_hub oci_opsi_awr_hub} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOpsiAwrHubConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOpsiAwrHubConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opsi_awr_hub',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awrHubId = config.awrHubId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // awr_hub_id - computed: false, optional: false, required: true
  private _awrHubId?: string; 
  public get awrHubId() {
    return this.getStringAttribute('awr_hub_id');
  }
  public set awrHubId(value: string) {
    this._awrHubId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awrHubIdInput() {
    return this._awrHubId;
  }

  // awr_mailbox_url - computed: true, optional: false, required: false
  public get awrMailboxUrl() {
    return this.getStringAttribute('awr_mailbox_url');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // hub_dst_timezone_version - computed: true, optional: false, required: false
  public get hubDstTimezoneVersion() {
    return this.getStringAttribute('hub_dst_timezone_version');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // object_storage_bucket_name - computed: true, optional: false, required: false
  public get objectStorageBucketName() {
    return this.getStringAttribute('object_storage_bucket_name');
  }

  // operations_insights_warehouse_id - computed: true, optional: false, required: false
  public get operationsInsightsWarehouseId() {
    return this.getStringAttribute('operations_insights_warehouse_id');
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
      awr_hub_id: cdktf.stringToTerraform(this._awrHubId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      awr_hub_id: {
        value: cdktf.stringToHclTerraform(this._awrHubId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
