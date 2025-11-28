// https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/data-sources/unix_connection_datasource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSaviyntUnixConnectionDatasourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * If false, do not store connection_attributes in state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/data-sources/unix_connection_datasource#authenticate DataSaviyntUnixConnectionDatasource#authenticate}
  */
  readonly authenticate: boolean | cdktf.IResolvable;
  /**
  * The key of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/data-sources/unix_connection_datasource#connection_key DataSaviyntUnixConnectionDatasource#connection_key}
  */
  readonly connectionKey?: number;
  /**
  * The name of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/data-sources/unix_connection_datasource#connection_name DataSaviyntUnixConnectionDatasource#connection_name}
  */
  readonly connectionName?: string;
}
export interface DataSaviyntUnixConnectionDatasourceConnectionAttributesConnectionTimeoutConfig {
}

export function dataSaviyntUnixConnectionDatasourceConnectionAttributesConnectionTimeoutConfigToTerraform(struct?: DataSaviyntUnixConnectionDatasourceConnectionAttributesConnectionTimeoutConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSaviyntUnixConnectionDatasourceConnectionAttributesConnectionTimeoutConfigToHclTerraform(struct?: DataSaviyntUnixConnectionDatasourceConnectionAttributesConnectionTimeoutConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSaviyntUnixConnectionDatasourceConnectionAttributesConnectionTimeoutConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSaviyntUnixConnectionDatasourceConnectionAttributesConnectionTimeoutConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSaviyntUnixConnectionDatasourceConnectionAttributesConnectionTimeoutConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // connection_timeout - computed: true, optional: false, required: false
  public get connectionTimeout() {
    return this.getNumberAttribute('connection_timeout');
  }

  // read_timeout - computed: true, optional: false, required: false
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }

  // retry_count - computed: true, optional: false, required: false
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }

  // retry_failure_status_code - computed: true, optional: false, required: false
  public get retryFailureStatusCode() {
    return this.getNumberAttribute('retry_failure_status_code');
  }

  // retry_wait - computed: true, optional: false, required: false
  public get retryWait() {
    return this.getNumberAttribute('retry_wait');
  }

  // retry_wait_max_value - computed: true, optional: false, required: false
  public get retryWaitMaxValue() {
    return this.getNumberAttribute('retry_wait_max_value');
  }

  // token_refresh_max_try_count - computed: true, optional: false, required: false
  public get tokenRefreshMaxTryCount() {
    return this.getNumberAttribute('token_refresh_max_try_count');
  }
}
export interface DataSaviyntUnixConnectionDatasourceConnectionAttributes {
}

export function dataSaviyntUnixConnectionDatasourceConnectionAttributesToTerraform(struct?: DataSaviyntUnixConnectionDatasourceConnectionAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSaviyntUnixConnectionDatasourceConnectionAttributesToHclTerraform(struct?: DataSaviyntUnixConnectionDatasourceConnectionAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSaviyntUnixConnectionDatasourceConnectionAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSaviyntUnixConnectionDatasourceConnectionAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSaviyntUnixConnectionDatasourceConnectionAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account_entitlement_mapping_command - computed: true, optional: false, required: false
  public get accountEntitlementMappingCommand() {
    return this.getStringAttribute('account_entitlement_mapping_command');
  }

  // accounts_file - computed: true, optional: false, required: false
  public get accountsFile() {
    return this.getStringAttribute('accounts_file');
  }

  // add_access_command - computed: true, optional: false, required: false
  public get addAccessCommand() {
    return this.getStringAttribute('add_access_command');
  }

  // add_group_owner_command - computed: true, optional: false, required: false
  public get addGroupOwnerCommand() {
    return this.getStringAttribute('add_group_owner_command');
  }

  // add_primary_group_command - computed: true, optional: false, required: false
  public get addPrimaryGroupCommand() {
    return this.getStringAttribute('add_primary_group_command');
  }

  // connection_timeout_config - computed: true, optional: false, required: false
  private _connectionTimeoutConfig = new DataSaviyntUnixConnectionDatasourceConnectionAttributesConnectionTimeoutConfigOutputReference(this, "connection_timeout_config");
  public get connectionTimeoutConfig() {
    return this._connectionTimeoutConfig;
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // create_group_command - computed: true, optional: false, required: false
  public get createGroupCommand() {
    return this.getStringAttribute('create_group_command');
  }

  // custom_config_json - computed: true, optional: false, required: false
  public get customConfigJson() {
    return this.getStringAttribute('custom_config_json');
  }

  // delete_group_command - computed: true, optional: false, required: false
  public get deleteGroupCommand() {
    return this.getStringAttribute('delete_group_command');
  }

  // deprovision_account_command - computed: true, optional: false, required: false
  public get deprovisionAccountCommand() {
    return this.getStringAttribute('deprovision_account_command');
  }

  // disable_account_command - computed: true, optional: false, required: false
  public get disableAccountCommand() {
    return this.getStringAttribute('disable_account_command');
  }

  // enable_account_command - computed: true, optional: false, required: false
  public get enableAccountCommand() {
    return this.getStringAttribute('enable_account_command');
  }

  // firefighterid_grant_access_command - computed: true, optional: false, required: false
  public get firefighteridGrantAccessCommand() {
    return this.getStringAttribute('firefighterid_grant_access_command');
  }

  // firefighterid_revoke_access_command - computed: true, optional: false, required: false
  public get firefighteridRevokeAccessCommand() {
    return this.getStringAttribute('firefighterid_revoke_access_command');
  }

  // groups_file - computed: true, optional: false, required: false
  public get groupsFile() {
    return this.getStringAttribute('groups_file');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // inactive_lock_account - computed: true, optional: false, required: false
  public get inactiveLockAccount() {
    return this.getStringAttribute('inactive_lock_account');
  }

  // is_timeout_config_validated - computed: true, optional: false, required: false
  public get isTimeoutConfigValidated() {
    return this.getBooleanAttribute('is_timeout_config_validated');
  }

  // is_timeout_supported - computed: true, optional: false, required: false
  public get isTimeoutSupported() {
    return this.getBooleanAttribute('is_timeout_supported');
  }

  // lock_account_command - computed: true, optional: false, required: false
  public get lockAccountCommand() {
    return this.getStringAttribute('lock_account_command');
  }

  // pass_through_connection_details - computed: true, optional: false, required: false
  public get passThroughConnectionDetails() {
    return this.getStringAttribute('pass_through_connection_details');
  }

  // pem_key_file - computed: true, optional: false, required: false
  public get pemKeyFile() {
    return this.getStringAttribute('pem_key_file');
  }

  // port_number - computed: true, optional: false, required: false
  public get portNumber() {
    return this.getStringAttribute('port_number');
  }

  // provision_account_command - computed: true, optional: false, required: false
  public get provisionAccountCommand() {
    return this.getStringAttribute('provision_account_command');
  }

  // remove_access_command - computed: true, optional: false, required: false
  public get removeAccessCommand() {
    return this.getStringAttribute('remove_access_command');
  }

  // server_type - computed: true, optional: false, required: false
  public get serverType() {
    return this.getStringAttribute('server_type');
  }

  // shadow_file - computed: true, optional: false, required: false
  public get shadowFile() {
    return this.getStringAttribute('shadow_file');
  }

  // status_threshold_config - computed: true, optional: false, required: false
  public get statusThresholdConfig() {
    return this.getStringAttribute('status_threshold_config');
  }

  // unlock_account_command - computed: true, optional: false, required: false
  public get unlockAccountCommand() {
    return this.getStringAttribute('unlock_account_command');
  }

  // update_account_command - computed: true, optional: false, required: false
  public get updateAccountCommand() {
    return this.getStringAttribute('update_account_command');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/data-sources/unix_connection_datasource saviynt_unix_connection_datasource}
*/
export class DataSaviyntUnixConnectionDatasource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_unix_connection_datasource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSaviyntUnixConnectionDatasource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSaviyntUnixConnectionDatasource to import
  * @param importFromId The id of the existing DataSaviyntUnixConnectionDatasource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/data-sources/unix_connection_datasource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSaviyntUnixConnectionDatasource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_unix_connection_datasource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/data-sources/unix_connection_datasource saviynt_unix_connection_datasource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSaviyntUnixConnectionDatasourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataSaviyntUnixConnectionDatasourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_unix_connection_datasource',
      terraformGeneratorMetadata: {
        providerName: 'saviynt',
        providerVersion: '0.3.1',
        providerVersionConstraint: '0.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticate = config.authenticate;
    this._connectionKey = config.connectionKey;
    this._connectionName = config.connectionName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authenticate - computed: false, optional: false, required: true
  private _authenticate?: boolean | cdktf.IResolvable; 
  public get authenticate() {
    return this.getBooleanAttribute('authenticate');
  }
  public set authenticate(value: boolean | cdktf.IResolvable) {
    this._authenticate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateInput() {
    return this._authenticate;
  }

  // connection_attributes - computed: true, optional: false, required: false
  private _connectionAttributes = new DataSaviyntUnixConnectionDatasourceConnectionAttributesOutputReference(this, "connection_attributes");
  public get connectionAttributes() {
    return this._connectionAttributes;
  }

  // connection_key - computed: true, optional: true, required: false
  private _connectionKey?: number; 
  public get connectionKey() {
    return this.getNumberAttribute('connection_key');
  }
  public set connectionKey(value: number) {
    this._connectionKey = value;
  }
  public resetConnectionKey() {
    this._connectionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionKeyInput() {
    return this._connectionKey;
  }

  // connection_name - computed: true, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // default_sav_roles - computed: true, optional: false, required: false
  public get defaultSavRoles() {
    return this.getStringAttribute('default_sav_roles');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // email_template - computed: true, optional: false, required: false
  public get emailTemplate() {
    return this.getStringAttribute('email_template');
  }

  // error_code - computed: true, optional: false, required: false
  public get errorCode() {
    return this.getNumberAttribute('error_code');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // msg - computed: true, optional: false, required: false
  public get msg() {
    return this.getStringAttribute('msg');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authenticate: cdktf.booleanToTerraform(this._authenticate),
      connection_key: cdktf.numberToTerraform(this._connectionKey),
      connection_name: cdktf.stringToTerraform(this._connectionName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authenticate: {
        value: cdktf.booleanToHclTerraform(this._authenticate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connection_key: {
        value: cdktf.numberToHclTerraform(this._connectionKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_name: {
        value: cdktf.stringToHclTerraform(this._connectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
