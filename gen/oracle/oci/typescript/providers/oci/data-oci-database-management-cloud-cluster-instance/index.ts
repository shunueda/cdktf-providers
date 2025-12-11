// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_cloud_cluster_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementCloudClusterInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_cloud_cluster_instance#cloud_cluster_instance_id DataOciDatabaseManagementCloudClusterInstance#cloud_cluster_instance_id}
  */
  readonly cloudClusterInstanceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_cloud_cluster_instance oci_database_management_cloud_cluster_instance}
*/
export class DataOciDatabaseManagementCloudClusterInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_cloud_cluster_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementCloudClusterInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementCloudClusterInstance to import
  * @param importFromId The id of the existing DataOciDatabaseManagementCloudClusterInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_cloud_cluster_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementCloudClusterInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_cloud_cluster_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/database_management_cloud_cluster_instance oci_database_management_cloud_cluster_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementCloudClusterInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementCloudClusterInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_cloud_cluster_instance',
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
    this._cloudClusterInstanceId = config.cloudClusterInstanceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adr_home_directory - computed: true, optional: false, required: false
  public get adrHomeDirectory() {
    return this.getStringAttribute('adr_home_directory');
  }

  // cloud_cluster_id - computed: true, optional: false, required: false
  public get cloudClusterId() {
    return this.getStringAttribute('cloud_cluster_id');
  }

  // cloud_cluster_instance_id - computed: false, optional: false, required: true
  private _cloudClusterInstanceId?: string; 
  public get cloudClusterInstanceId() {
    return this.getStringAttribute('cloud_cluster_instance_id');
  }
  public set cloudClusterInstanceId(value: string) {
    this._cloudClusterInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudClusterInstanceIdInput() {
    return this._cloudClusterInstanceId;
  }

  // cloud_connector_id - computed: true, optional: false, required: false
  public get cloudConnectorId() {
    return this.getStringAttribute('cloud_connector_id');
  }

  // cloud_db_node_id - computed: true, optional: false, required: false
  public get cloudDbNodeId() {
    return this.getStringAttribute('cloud_db_node_id');
  }

  // cloud_db_system_id - computed: true, optional: false, required: false
  public get cloudDbSystemId() {
    return this.getStringAttribute('cloud_db_system_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // component_name - computed: true, optional: false, required: false
  public get componentName() {
    return this.getStringAttribute('component_name');
  }

  // crs_base_directory - computed: true, optional: false, required: false
  public get crsBaseDirectory() {
    return this.getStringAttribute('crs_base_directory');
  }

  // dbaas_id - computed: true, optional: false, required: false
  public get dbaasId() {
    return this.getStringAttribute('dbaas_id');
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

  // node_role - computed: true, optional: false, required: false
  public get nodeRole() {
    return this.getStringAttribute('node_role');
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
      cloud_cluster_instance_id: cdktf.stringToTerraform(this._cloudClusterInstanceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_cluster_instance_id: {
        value: cdktf.stringToHclTerraform(this._cloudClusterInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
