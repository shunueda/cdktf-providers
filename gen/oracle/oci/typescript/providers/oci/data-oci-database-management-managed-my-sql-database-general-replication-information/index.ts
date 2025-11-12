// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_my_sql_database_general_replication_information
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedMySqlDatabaseGeneralReplicationInformationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_my_sql_database_general_replication_information#id DataOciDatabaseManagementManagedMySqlDatabaseGeneralReplicationInformation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_my_sql_database_general_replication_information#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseGeneralReplicationInformation#managed_my_sql_database_id}
  */
  readonly managedMySqlDatabaseId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_my_sql_database_general_replication_information oci_database_management_managed_my_sql_database_general_replication_information}
*/
export class DataOciDatabaseManagementManagedMySqlDatabaseGeneralReplicationInformation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_my_sql_database_general_replication_information";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabaseGeneralReplicationInformation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedMySqlDatabaseGeneralReplicationInformation to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedMySqlDatabaseGeneralReplicationInformation that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_my_sql_database_general_replication_information#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedMySqlDatabaseGeneralReplicationInformation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_my_sql_database_general_replication_information", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_my_sql_database_general_replication_information oci_database_management_managed_my_sql_database_general_replication_information} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedMySqlDatabaseGeneralReplicationInformationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedMySqlDatabaseGeneralReplicationInformationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_my_sql_database_general_replication_information',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._managedMySqlDatabaseId = config.managedMySqlDatabaseId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apply_status_summary - computed: true, optional: false, required: false
  public get applyStatusSummary() {
    return this.getStringAttribute('apply_status_summary');
  }

  // binary_log_format - computed: true, optional: false, required: false
  public get binaryLogFormat() {
    return this.getStringAttribute('binary_log_format');
  }

  // binary_logging - computed: true, optional: false, required: false
  public get binaryLogging() {
    return this.getStringAttribute('binary_logging');
  }

  // executed_gtid_set - computed: true, optional: false, required: false
  public get executedGtidSet() {
    return this.getStringAttribute('executed_gtid_set');
  }

  // fetch_status_summary - computed: true, optional: false, required: false
  public get fetchStatusSummary() {
    return this.getStringAttribute('fetch_status_summary');
  }

  // gtid_mode - computed: true, optional: false, required: false
  public get gtidMode() {
    return this.getStringAttribute('gtid_mode');
  }

  // high_availability_member_state - computed: true, optional: false, required: false
  public get highAvailabilityMemberState() {
    return this.getStringAttribute('high_availability_member_state');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
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

  // inbound_replications_count - computed: true, optional: false, required: false
  public get inboundReplicationsCount() {
    return this.getNumberAttribute('inbound_replications_count');
  }

  // instance_type - computed: true, optional: false, required: false
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }

  // is_high_availability_enabled - computed: true, optional: false, required: false
  public get isHighAvailabilityEnabled() {
    return this.getBooleanAttribute('is_high_availability_enabled');
  }

  // managed_my_sql_database_id - computed: false, optional: false, required: true
  private _managedMySqlDatabaseId?: string; 
  public get managedMySqlDatabaseId() {
    return this.getStringAttribute('managed_my_sql_database_id');
  }
  public set managedMySqlDatabaseId(value: string) {
    this._managedMySqlDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedMySqlDatabaseIdInput() {
    return this._managedMySqlDatabaseId;
  }

  // outbound_replications_count - computed: true, optional: false, required: false
  public get outboundReplicationsCount() {
    return this.getNumberAttribute('outbound_replications_count');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getStringAttribute('read_only');
  }

  // seconds_behind_source_max - computed: true, optional: false, required: false
  public get secondsBehindSourceMax() {
    return this.getStringAttribute('seconds_behind_source_max');
  }

  // server_id - computed: true, optional: false, required: false
  public get serverId() {
    return this.getStringAttribute('server_id');
  }

  // server_uuid - computed: true, optional: false, required: false
  public get serverUuid() {
    return this.getStringAttribute('server_uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      managed_my_sql_database_id: cdktf.stringToTerraform(this._managedMySqlDatabaseId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_my_sql_database_id: {
        value: cdktf.stringToHclTerraform(this._managedMySqlDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
