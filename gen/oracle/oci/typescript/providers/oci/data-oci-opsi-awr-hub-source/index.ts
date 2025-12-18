// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_awr_hub_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOpsiAwrHubSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_awr_hub_source#awr_hub_source_id DataOciOpsiAwrHubSource#awr_hub_source_id}
  */
  readonly awrHubSourceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_awr_hub_source oci_opsi_awr_hub_source}
*/
export class DataOciOpsiAwrHubSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opsi_awr_hub_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOpsiAwrHubSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOpsiAwrHubSource to import
  * @param importFromId The id of the existing DataOciOpsiAwrHubSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_awr_hub_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOpsiAwrHubSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opsi_awr_hub_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/opsi_awr_hub_source oci_opsi_awr_hub_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOpsiAwrHubSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOpsiAwrHubSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opsi_awr_hub_source',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awrHubSourceId = config.awrHubSourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_opsi_id - computed: true, optional: false, required: false
  public get associatedOpsiId() {
    return this.getStringAttribute('associated_opsi_id');
  }

  // associated_resource_id - computed: true, optional: false, required: false
  public get associatedResourceId() {
    return this.getStringAttribute('associated_resource_id');
  }

  // awr_hub_id - computed: true, optional: false, required: false
  public get awrHubId() {
    return this.getStringAttribute('awr_hub_id');
  }

  // awr_hub_opsi_source_id - computed: true, optional: false, required: false
  public get awrHubOpsiSourceId() {
    return this.getStringAttribute('awr_hub_opsi_source_id');
  }

  // awr_hub_source_id - computed: false, optional: false, required: true
  private _awrHubSourceId?: string; 
  public get awrHubSourceId() {
    return this.getStringAttribute('awr_hub_source_id');
  }
  public set awrHubSourceId(value: string) {
    this._awrHubSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awrHubSourceIdInput() {
    return this._awrHubSourceId;
  }

  // awr_source_database_id - computed: true, optional: false, required: false
  public get awrSourceDatabaseId() {
    return this.getStringAttribute('awr_source_database_id');
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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // hours_since_last_import - computed: true, optional: false, required: false
  public get hoursSinceLastImport() {
    return this.getNumberAttribute('hours_since_last_import');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_registered_with_awr_hub - computed: true, optional: false, required: false
  public get isRegisteredWithAwrHub() {
    return this.getBooleanAttribute('is_registered_with_awr_hub');
  }

  // max_snapshot_identifier - computed: true, optional: false, required: false
  public get maxSnapshotIdentifier() {
    return this.getNumberAttribute('max_snapshot_identifier');
  }

  // min_snapshot_identifier - computed: true, optional: false, required: false
  public get minSnapshotIdentifier() {
    return this.getNumberAttribute('min_snapshot_identifier');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // source_mail_box_url - computed: true, optional: false, required: false
  public get sourceMailBoxUrl() {
    return this.getStringAttribute('source_mail_box_url');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
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

  // time_first_snapshot_generated - computed: true, optional: false, required: false
  public get timeFirstSnapshotGenerated() {
    return this.getStringAttribute('time_first_snapshot_generated');
  }

  // time_last_snapshot_generated - computed: true, optional: false, required: false
  public get timeLastSnapshotGenerated() {
    return this.getStringAttribute('time_last_snapshot_generated');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
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
      awr_hub_source_id: cdktf.stringToTerraform(this._awrHubSourceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      awr_hub_source_id: {
        value: cdktf.stringToHclTerraform(this._awrHubSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
