// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opsi_host_insight
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciOpsiHostInsightConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opsi_host_insight#host_insight_id DataOciOpsiHostInsight#host_insight_id}
  */
  readonly hostInsightId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opsi_host_insight oci_opsi_host_insight}
*/
export class DataOciOpsiHostInsight extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_opsi_host_insight";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciOpsiHostInsight resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciOpsiHostInsight to import
  * @param importFromId The id of the existing DataOciOpsiHostInsight that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opsi_host_insight#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciOpsiHostInsight to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_opsi_host_insight", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/opsi_host_insight oci_opsi_host_insight} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciOpsiHostInsightConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciOpsiHostInsightConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_opsi_host_insight',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hostInsightId = config.hostInsightId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compute_id - computed: true, optional: false, required: false
  public get computeId() {
    return this.getStringAttribute('compute_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // enterprise_manager_bridge_id - computed: true, optional: false, required: false
  public get enterpriseManagerBridgeId() {
    return this.getStringAttribute('enterprise_manager_bridge_id');
  }

  // enterprise_manager_entity_display_name - computed: true, optional: false, required: false
  public get enterpriseManagerEntityDisplayName() {
    return this.getStringAttribute('enterprise_manager_entity_display_name');
  }

  // enterprise_manager_entity_identifier - computed: true, optional: false, required: false
  public get enterpriseManagerEntityIdentifier() {
    return this.getStringAttribute('enterprise_manager_entity_identifier');
  }

  // enterprise_manager_entity_name - computed: true, optional: false, required: false
  public get enterpriseManagerEntityName() {
    return this.getStringAttribute('enterprise_manager_entity_name');
  }

  // enterprise_manager_entity_type - computed: true, optional: false, required: false
  public get enterpriseManagerEntityType() {
    return this.getStringAttribute('enterprise_manager_entity_type');
  }

  // enterprise_manager_identifier - computed: true, optional: false, required: false
  public get enterpriseManagerIdentifier() {
    return this.getStringAttribute('enterprise_manager_identifier');
  }

  // entity_source - computed: true, optional: false, required: false
  public get entitySource() {
    return this.getStringAttribute('entity_source');
  }

  // exadata_insight_id - computed: true, optional: false, required: false
  public get exadataInsightId() {
    return this.getStringAttribute('exadata_insight_id');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // host_display_name - computed: true, optional: false, required: false
  public get hostDisplayName() {
    return this.getStringAttribute('host_display_name');
  }

  // host_insight_id - computed: false, optional: false, required: true
  private _hostInsightId?: string; 
  public get hostInsightId() {
    return this.getStringAttribute('host_insight_id');
  }
  public set hostInsightId(value: string) {
    this._hostInsightId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInsightIdInput() {
    return this._hostInsightId;
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // host_type - computed: true, optional: false, required: false
  public get hostType() {
    return this.getStringAttribute('host_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // management_agent_id - computed: true, optional: false, required: false
  public get managementAgentId() {
    return this.getStringAttribute('management_agent_id');
  }

  // platform_name - computed: true, optional: false, required: false
  public get platformName() {
    return this.getStringAttribute('platform_name');
  }

  // platform_type - computed: true, optional: false, required: false
  public get platformType() {
    return this.getStringAttribute('platform_type');
  }

  // platform_version - computed: true, optional: false, required: false
  public get platformVersion() {
    return this.getStringAttribute('platform_version');
  }

  // processor_count - computed: true, optional: false, required: false
  public get processorCount() {
    return this.getNumberAttribute('processor_count');
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

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host_insight_id: cdktf.stringToTerraform(this._hostInsightId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host_insight_id: {
        value: cdktf.stringToHclTerraform(this._hostInsightId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
