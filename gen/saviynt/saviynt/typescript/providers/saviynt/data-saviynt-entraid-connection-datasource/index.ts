// https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/data-sources/entraid_connection_datasource
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSaviyntEntraidConnectionDatasourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * If false, do not store connection_attributes in state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/data-sources/entraid_connection_datasource#authenticate DataSaviyntEntraidConnectionDatasource#authenticate}
  */
  readonly authenticate: boolean | cdktf.IResolvable;
  /**
  * The key of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/data-sources/entraid_connection_datasource#connection_key DataSaviyntEntraidConnectionDatasource#connection_key}
  */
  readonly connectionKey?: number;
  /**
  * The name of the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/data-sources/entraid_connection_datasource#connection_name DataSaviyntEntraidConnectionDatasource#connection_name}
  */
  readonly connectionName?: string;
}
export interface DataSaviyntEntraidConnectionDatasourceConnectionAttributesConnectionTimeoutConfig {
}

export function dataSaviyntEntraidConnectionDatasourceConnectionAttributesConnectionTimeoutConfigToTerraform(struct?: DataSaviyntEntraidConnectionDatasourceConnectionAttributesConnectionTimeoutConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSaviyntEntraidConnectionDatasourceConnectionAttributesConnectionTimeoutConfigToHclTerraform(struct?: DataSaviyntEntraidConnectionDatasourceConnectionAttributesConnectionTimeoutConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSaviyntEntraidConnectionDatasourceConnectionAttributesConnectionTimeoutConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSaviyntEntraidConnectionDatasourceConnectionAttributesConnectionTimeoutConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSaviyntEntraidConnectionDatasourceConnectionAttributesConnectionTimeoutConfig | undefined) {
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
export interface DataSaviyntEntraidConnectionDatasourceConnectionAttributes {
}

export function dataSaviyntEntraidConnectionDatasourceConnectionAttributesToTerraform(struct?: DataSaviyntEntraidConnectionDatasourceConnectionAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSaviyntEntraidConnectionDatasourceConnectionAttributesToHclTerraform(struct?: DataSaviyntEntraidConnectionDatasourceConnectionAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSaviyntEntraidConnectionDatasourceConnectionAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSaviyntEntraidConnectionDatasourceConnectionAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSaviyntEntraidConnectionDatasourceConnectionAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aad_tenant_id - computed: true, optional: false, required: false
  public get aadTenantId() {
    return this.getStringAttribute('aad_tenant_id');
  }

  // account_attributes - computed: true, optional: false, required: false
  public get accountAttributes() {
    return this.getStringAttribute('account_attributes');
  }

  // account_import_fields - computed: true, optional: false, required: false
  public get accountImportFields() {
    return this.getStringAttribute('account_import_fields');
  }

  // accounts_filter - computed: true, optional: false, required: false
  public get accountsFilter() {
    return this.getStringAttribute('accounts_filter');
  }

  // add_access_json - computed: true, optional: false, required: false
  public get addAccessJson() {
    return this.getStringAttribute('add_access_json');
  }

  // authentication_endpoint - computed: true, optional: false, required: false
  public get authenticationEndpoint() {
    return this.getStringAttribute('authentication_endpoint');
  }

  // azure_management_endpoint - computed: true, optional: false, required: false
  public get azureManagementEndpoint() {
    return this.getStringAttribute('azure_management_endpoint');
  }

  // config_json - computed: true, optional: false, required: false
  public get configJson() {
    return this.getStringAttribute('config_json');
  }

  // connection_timeout_config - computed: true, optional: false, required: false
  private _connectionTimeoutConfig = new DataSaviyntEntraidConnectionDatasourceConnectionAttributesConnectionTimeoutConfigOutputReference(this, "connection_timeout_config");
  public get connectionTimeoutConfig() {
    return this._connectionTimeoutConfig;
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // create_account_json - computed: true, optional: false, required: false
  public get createAccountJson() {
    return this.getStringAttribute('create_account_json');
  }

  // create_channel_json - computed: true, optional: false, required: false
  public get createChannelJson() {
    return this.getStringAttribute('create_channel_json');
  }

  // create_group_json - computed: true, optional: false, required: false
  public get createGroupJson() {
    return this.getStringAttribute('create_group_json');
  }

  // create_new_endpoints - computed: true, optional: false, required: false
  public get createNewEndpoints() {
    return this.getStringAttribute('create_new_endpoints');
  }

  // create_team_json - computed: true, optional: false, required: false
  public get createTeamJson() {
    return this.getStringAttribute('create_team_json');
  }

  // createusers - computed: true, optional: false, required: false
  public get createusers() {
    return this.getStringAttribute('createusers');
  }

  // delete_group_json - computed: true, optional: false, required: false
  public get deleteGroupJson() {
    return this.getStringAttribute('delete_group_json');
  }

  // deltatokens_json - computed: true, optional: false, required: false
  public get deltatokensJson() {
    return this.getStringAttribute('deltatokens_json');
  }

  // disable_account_json - computed: true, optional: false, required: false
  public get disableAccountJson() {
    return this.getStringAttribute('disable_account_json');
  }

  // enable_account_json - computed: true, optional: false, required: false
  public get enableAccountJson() {
    return this.getStringAttribute('enable_account_json');
  }

  // endpoints_filter - computed: true, optional: false, required: false
  public get endpointsFilter() {
    return this.getStringAttribute('endpoints_filter');
  }

  // entitlement_attribute - computed: true, optional: false, required: false
  public get entitlementAttribute() {
    return this.getStringAttribute('entitlement_attribute');
  }

  // entitlement_filter_json - computed: true, optional: false, required: false
  public get entitlementFilterJson() {
    return this.getStringAttribute('entitlement_filter_json');
  }

  // import_user_json - computed: true, optional: false, required: false
  public get importUserJson() {
    return this.getStringAttribute('import_user_json');
  }

  // is_timeout_config_validated - computed: true, optional: false, required: false
  public get isTimeoutConfigValidated() {
    return this.getBooleanAttribute('is_timeout_config_validated');
  }

  // is_timeout_supported - computed: true, optional: false, required: false
  public get isTimeoutSupported() {
    return this.getBooleanAttribute('is_timeout_supported');
  }

  // microsoft_graph_endpoint - computed: true, optional: false, required: false
  public get microsoftGraphEndpoint() {
    return this.getStringAttribute('microsoft_graph_endpoint');
  }

  // modifyuserdatajson - computed: true, optional: false, required: false
  public get modifyuserdatajson() {
    return this.getStringAttribute('modifyuserdatajson');
  }

  // pam_config - computed: true, optional: false, required: false
  public get pamConfig() {
    return this.getStringAttribute('pam_config');
  }

  // remove_access_json - computed: true, optional: false, required: false
  public get removeAccessJson() {
    return this.getStringAttribute('remove_access_json');
  }

  // remove_account_json - computed: true, optional: false, required: false
  public get removeAccountJson() {
    return this.getStringAttribute('remove_account_json');
  }

  // status_threshold_config - computed: true, optional: false, required: false
  public get statusThresholdConfig() {
    return this.getStringAttribute('status_threshold_config');
  }

  // update_account_json - computed: true, optional: false, required: false
  public get updateAccountJson() {
    return this.getStringAttribute('update_account_json');
  }

  // update_group_json - computed: true, optional: false, required: false
  public get updateGroupJson() {
    return this.getStringAttribute('update_group_json');
  }

  // update_user_json - computed: true, optional: false, required: false
  public get updateUserJson() {
    return this.getStringAttribute('update_user_json');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/data-sources/entraid_connection_datasource saviynt_entraid_connection_datasource}
*/
export class DataSaviyntEntraidConnectionDatasource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "saviynt_entraid_connection_datasource";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSaviyntEntraidConnectionDatasource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSaviyntEntraidConnectionDatasource to import
  * @param importFromId The id of the existing DataSaviyntEntraidConnectionDatasource that should be imported. Refer to the {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/data-sources/entraid_connection_datasource#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSaviyntEntraidConnectionDatasource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "saviynt_entraid_connection_datasource", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/saviynt/saviynt/0.3.1/docs/data-sources/entraid_connection_datasource saviynt_entraid_connection_datasource} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSaviyntEntraidConnectionDatasourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataSaviyntEntraidConnectionDatasourceConfig) {
    super(scope, id, {
      terraformResourceType: 'saviynt_entraid_connection_datasource',
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
  private _connectionAttributes = new DataSaviyntEntraidConnectionDatasourceConnectionAttributesOutputReference(this, "connection_attributes");
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
