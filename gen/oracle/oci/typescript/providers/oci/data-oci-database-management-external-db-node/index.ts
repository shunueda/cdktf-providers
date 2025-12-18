// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_external_db_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementExternalDbNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_external_db_node#external_db_node_id DataOciDatabaseManagementExternalDbNode#external_db_node_id}
  */
  readonly externalDbNodeId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_external_db_node oci_database_management_external_db_node}
*/
export class DataOciDatabaseManagementExternalDbNode extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_external_db_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementExternalDbNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementExternalDbNode to import
  * @param importFromId The id of the existing DataOciDatabaseManagementExternalDbNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_external_db_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementExternalDbNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_external_db_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_management_external_db_node oci_database_management_external_db_node} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementExternalDbNodeConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementExternalDbNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_external_db_node',
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
    this._externalDbNodeId = config.externalDbNodeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_details - computed: true, optional: false, required: false
  private _additionalDetails = new cdktf.StringMap(this, "additional_details");
  public get additionalDetails() {
    return this._additionalDetails;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // component_name - computed: true, optional: false, required: false
  public get componentName() {
    return this.getStringAttribute('component_name');
  }

  // cpu_core_count - computed: true, optional: false, required: false
  public get cpuCoreCount() {
    return this.getNumberAttribute('cpu_core_count');
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

  // domain_name - computed: true, optional: false, required: false
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }

  // external_connector_id - computed: true, optional: false, required: false
  public get externalConnectorId() {
    return this.getStringAttribute('external_connector_id');
  }

  // external_db_node_id - computed: false, optional: false, required: true
  private _externalDbNodeId?: string; 
  public get externalDbNodeId() {
    return this.getStringAttribute('external_db_node_id');
  }
  public set externalDbNodeId(value: string) {
    this._externalDbNodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDbNodeIdInput() {
    return this._externalDbNodeId;
  }

  // external_db_system_id - computed: true, optional: false, required: false
  public get externalDbSystemId() {
    return this.getStringAttribute('external_db_system_id');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // memory_size_in_gbs - computed: true, optional: false, required: false
  public get memorySizeInGbs() {
    return this.getNumberAttribute('memory_size_in_gbs');
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
      external_db_node_id: cdktf.stringToTerraform(this._externalDbNodeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      external_db_node_id: {
        value: cdktf.stringToHclTerraform(this._externalDbNodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
