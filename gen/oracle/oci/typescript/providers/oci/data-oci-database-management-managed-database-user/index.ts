// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseManagementManagedDatabaseUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_user#id DataOciDatabaseManagementManagedDatabaseUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_user#managed_database_id DataOciDatabaseManagementManagedDatabaseUser#managed_database_id}
  */
  readonly managedDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_user#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUser#opc_named_credential_id}
  */
  readonly opcNamedCredentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_user#user_name DataOciDatabaseManagementManagedDatabaseUser#user_name}
  */
  readonly userName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_user oci_database_management_managed_database_user}
*/
export class DataOciDatabaseManagementManagedDatabaseUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_managed_database_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseUser to import
  * @param importFromId The id of the existing DataOciDatabaseManagementManagedDatabaseUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_managed_database_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/database_management_managed_database_user oci_database_management_managed_database_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseManagementManagedDatabaseUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseManagementManagedDatabaseUserConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_managed_database_user',
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
    this._id = config.id;
    this._managedDatabaseId = config.managedDatabaseId;
    this._opcNamedCredentialId = config.opcNamedCredentialId;
    this._userName = config.userName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_shared - computed: true, optional: false, required: false
  public get allShared() {
    return this.getStringAttribute('all_shared');
  }

  // authentication - computed: true, optional: false, required: false
  public get authentication() {
    return this.getStringAttribute('authentication');
  }

  // common - computed: true, optional: false, required: false
  public get common() {
    return this.getStringAttribute('common');
  }

  // consumer_group - computed: true, optional: false, required: false
  public get consumerGroup() {
    return this.getStringAttribute('consumer_group');
  }

  // default_collation - computed: true, optional: false, required: false
  public get defaultCollation() {
    return this.getStringAttribute('default_collation');
  }

  // default_tablespace - computed: true, optional: false, required: false
  public get defaultTablespace() {
    return this.getStringAttribute('default_tablespace');
  }

  // editions_enabled - computed: true, optional: false, required: false
  public get editionsEnabled() {
    return this.getStringAttribute('editions_enabled');
  }

  // external_name - computed: true, optional: false, required: false
  public get externalName() {
    return this.getStringAttribute('external_name');
  }

  // external_shared - computed: true, optional: false, required: false
  public get externalShared() {
    return this.getStringAttribute('external_shared');
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

  // implicit - computed: true, optional: false, required: false
  public get implicit() {
    return this.getStringAttribute('implicit');
  }

  // inherited - computed: true, optional: false, required: false
  public get inherited() {
    return this.getStringAttribute('inherited');
  }

  // local_temp_tablespace - computed: true, optional: false, required: false
  public get localTempTablespace() {
    return this.getStringAttribute('local_temp_tablespace');
  }

  // managed_database_id - computed: false, optional: false, required: true
  private _managedDatabaseId?: string; 
  public get managedDatabaseId() {
    return this.getStringAttribute('managed_database_id');
  }
  public set managedDatabaseId(value: string) {
    this._managedDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDatabaseIdInput() {
    return this._managedDatabaseId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // opc_named_credential_id - computed: false, optional: true, required: false
  private _opcNamedCredentialId?: string; 
  public get opcNamedCredentialId() {
    return this.getStringAttribute('opc_named_credential_id');
  }
  public set opcNamedCredentialId(value: string) {
    this._opcNamedCredentialId = value;
  }
  public resetOpcNamedCredentialId() {
    this._opcNamedCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opcNamedCredentialIdInput() {
    return this._opcNamedCredentialId;
  }

  // oracle_maintained - computed: true, optional: false, required: false
  public get oracleMaintained() {
    return this.getStringAttribute('oracle_maintained');
  }

  // password_versions - computed: true, optional: false, required: false
  public get passwordVersions() {
    return this.getStringAttribute('password_versions');
  }

  // profile - computed: true, optional: false, required: false
  public get profile() {
    return this.getStringAttribute('profile');
  }

  // proxy_connect - computed: true, optional: false, required: false
  public get proxyConnect() {
    return this.getStringAttribute('proxy_connect');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // temp_tablespace - computed: true, optional: false, required: false
  public get tempTablespace() {
    return this.getStringAttribute('temp_tablespace');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_expiring - computed: true, optional: false, required: false
  public get timeExpiring() {
    return this.getStringAttribute('time_expiring');
  }

  // time_last_login - computed: true, optional: false, required: false
  public get timeLastLogin() {
    return this.getStringAttribute('time_last_login');
  }

  // time_locked - computed: true, optional: false, required: false
  public get timeLocked() {
    return this.getStringAttribute('time_locked');
  }

  // time_password_changed - computed: true, optional: false, required: false
  public get timePasswordChanged() {
    return this.getStringAttribute('time_password_changed');
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      managed_database_id: cdktf.stringToTerraform(this._managedDatabaseId),
      opc_named_credential_id: cdktf.stringToTerraform(this._opcNamedCredentialId),
      user_name: cdktf.stringToTerraform(this._userName),
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
      managed_database_id: {
        value: cdktf.stringToHclTerraform(this._managedDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      opc_named_credential_id: {
        value: cdktf.stringToHclTerraform(this._opcNamedCredentialId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
