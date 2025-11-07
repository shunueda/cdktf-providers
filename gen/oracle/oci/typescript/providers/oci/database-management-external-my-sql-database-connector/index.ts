// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_external_my_sql_database_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseManagementExternalMySqlDatabaseConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_external_my_sql_database_connector#check_connection_status_trigger DatabaseManagementExternalMySqlDatabaseConnector#check_connection_status_trigger}
  */
  readonly checkConnectionStatusTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_external_my_sql_database_connector#compartment_id DatabaseManagementExternalMySqlDatabaseConnector#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_external_my_sql_database_connector#id DatabaseManagementExternalMySqlDatabaseConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_external_my_sql_database_connector#is_test_connection_param DatabaseManagementExternalMySqlDatabaseConnector#is_test_connection_param}
  */
  readonly isTestConnectionParam: boolean | cdktf.IResolvable;
  /**
  * connector_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_external_my_sql_database_connector#connector_details DatabaseManagementExternalMySqlDatabaseConnector#connector_details}
  */
  readonly connectorDetails: DatabaseManagementExternalMySqlDatabaseConnectorConnectorDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_external_my_sql_database_connector#timeouts DatabaseManagementExternalMySqlDatabaseConnector#timeouts}
  */
  readonly timeouts?: DatabaseManagementExternalMySqlDatabaseConnectorTimeouts;
}
export interface DatabaseManagementExternalMySqlDatabaseConnectorConnectorDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_external_my_sql_database_connector#credential_type DatabaseManagementExternalMySqlDatabaseConnector#credential_type}
  */
  readonly credentialType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_external_my_sql_database_connector#display_name DatabaseManagementExternalMySqlDatabaseConnector#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_external_my_sql_database_connector#external_database_id DatabaseManagementExternalMySqlDatabaseConnector#external_database_id}
  */
  readonly externalDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_external_my_sql_database_connector#host_name DatabaseManagementExternalMySqlDatabaseConnector#host_name}
  */
  readonly hostName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_external_my_sql_database_connector#macs_agent_id DatabaseManagementExternalMySqlDatabaseConnector#macs_agent_id}
  */
  readonly macsAgentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_external_my_sql_database_connector#network_protocol DatabaseManagementExternalMySqlDatabaseConnector#network_protocol}
  */
  readonly networkProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_external_my_sql_database_connector#port DatabaseManagementExternalMySqlDatabaseConnector#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_external_my_sql_database_connector#ssl_secret_id DatabaseManagementExternalMySqlDatabaseConnector#ssl_secret_id}
  */
  readonly sslSecretId: string;
}

export function databaseManagementExternalMySqlDatabaseConnectorConnectorDetailsToTerraform(struct?: DatabaseManagementExternalMySqlDatabaseConnectorConnectorDetailsOutputReference | DatabaseManagementExternalMySqlDatabaseConnectorConnectorDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    external_database_id: cdktf.stringToTerraform(struct!.externalDatabaseId),
    host_name: cdktf.stringToTerraform(struct!.hostName),
    macs_agent_id: cdktf.stringToTerraform(struct!.macsAgentId),
    network_protocol: cdktf.stringToTerraform(struct!.networkProtocol),
    port: cdktf.numberToTerraform(struct!.port),
    ssl_secret_id: cdktf.stringToTerraform(struct!.sslSecretId),
  }
}


export function databaseManagementExternalMySqlDatabaseConnectorConnectorDetailsToHclTerraform(struct?: DatabaseManagementExternalMySqlDatabaseConnectorConnectorDetailsOutputReference | DatabaseManagementExternalMySqlDatabaseConnectorConnectorDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_database_id: {
      value: cdktf.stringToHclTerraform(struct!.externalDatabaseId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    macs_agent_id: {
      value: cdktf.stringToHclTerraform(struct!.macsAgentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_protocol: {
      value: cdktf.stringToHclTerraform(struct!.networkProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.sslSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementExternalMySqlDatabaseConnectorConnectorDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseManagementExternalMySqlDatabaseConnectorConnectorDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._externalDatabaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalDatabaseId = this._externalDatabaseId;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    if (this._macsAgentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.macsAgentId = this._macsAgentId;
    }
    if (this._networkProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProtocol = this._networkProtocol;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._sslSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSecretId = this._sslSecretId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalMySqlDatabaseConnectorConnectorDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentialType = undefined;
      this._displayName = undefined;
      this._externalDatabaseId = undefined;
      this._hostName = undefined;
      this._macsAgentId = undefined;
      this._networkProtocol = undefined;
      this._port = undefined;
      this._sslSecretId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentialType = value.credentialType;
      this._displayName = value.displayName;
      this._externalDatabaseId = value.externalDatabaseId;
      this._hostName = value.hostName;
      this._macsAgentId = value.macsAgentId;
      this._networkProtocol = value.networkProtocol;
      this._port = value.port;
      this._sslSecretId = value.sslSecretId;
    }
  }

  // credential_type - computed: false, optional: false, required: true
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // external_database_id - computed: false, optional: false, required: true
  private _externalDatabaseId?: string; 
  public get externalDatabaseId() {
    return this.getStringAttribute('external_database_id');
  }
  public set externalDatabaseId(value: string) {
    this._externalDatabaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDatabaseIdInput() {
    return this._externalDatabaseId;
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // macs_agent_id - computed: false, optional: false, required: true
  private _macsAgentId?: string; 
  public get macsAgentId() {
    return this.getStringAttribute('macs_agent_id');
  }
  public set macsAgentId(value: string) {
    this._macsAgentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macsAgentIdInput() {
    return this._macsAgentId;
  }

  // network_protocol - computed: false, optional: false, required: true
  private _networkProtocol?: string; 
  public get networkProtocol() {
    return this.getStringAttribute('network_protocol');
  }
  public set networkProtocol(value: string) {
    this._networkProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProtocolInput() {
    return this._networkProtocol;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ssl_secret_id - computed: false, optional: false, required: true
  private _sslSecretId?: string; 
  public get sslSecretId() {
    return this.getStringAttribute('ssl_secret_id');
  }
  public set sslSecretId(value: string) {
    this._sslSecretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSecretIdInput() {
    return this._sslSecretId;
  }
}
export interface DatabaseManagementExternalMySqlDatabaseConnectorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_external_my_sql_database_connector#create DatabaseManagementExternalMySqlDatabaseConnector#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_external_my_sql_database_connector#delete DatabaseManagementExternalMySqlDatabaseConnector#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_external_my_sql_database_connector#update DatabaseManagementExternalMySqlDatabaseConnector#update}
  */
  readonly update?: string;
}

export function databaseManagementExternalMySqlDatabaseConnectorTimeoutsToTerraform(struct?: DatabaseManagementExternalMySqlDatabaseConnectorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function databaseManagementExternalMySqlDatabaseConnectorTimeoutsToHclTerraform(struct?: DatabaseManagementExternalMySqlDatabaseConnectorTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseManagementExternalMySqlDatabaseConnectorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseManagementExternalMySqlDatabaseConnectorTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseManagementExternalMySqlDatabaseConnectorTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_external_my_sql_database_connector oci_database_management_external_my_sql_database_connector}
*/
export class DatabaseManagementExternalMySqlDatabaseConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_management_external_my_sql_database_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseManagementExternalMySqlDatabaseConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseManagementExternalMySqlDatabaseConnector to import
  * @param importFromId The id of the existing DatabaseManagementExternalMySqlDatabaseConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_external_my_sql_database_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseManagementExternalMySqlDatabaseConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_management_external_my_sql_database_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/database_management_external_my_sql_database_connector oci_database_management_external_my_sql_database_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseManagementExternalMySqlDatabaseConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseManagementExternalMySqlDatabaseConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_management_external_my_sql_database_connector',
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
    this._checkConnectionStatusTrigger = config.checkConnectionStatusTrigger;
    this._compartmentId = config.compartmentId;
    this._id = config.id;
    this._isTestConnectionParam = config.isTestConnectionParam;
    this._connectorDetails.internalValue = config.connectorDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_services - computed: true, optional: false, required: false
  public get associatedServices() {
    return this.getStringAttribute('associated_services');
  }

  // check_connection_status_trigger - computed: false, optional: true, required: false
  private _checkConnectionStatusTrigger?: number; 
  public get checkConnectionStatusTrigger() {
    return this.getNumberAttribute('check_connection_status_trigger');
  }
  public set checkConnectionStatusTrigger(value: number) {
    this._checkConnectionStatusTrigger = value;
  }
  public resetCheckConnectionStatusTrigger() {
    this._checkConnectionStatusTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkConnectionStatusTriggerInput() {
    return this._checkConnectionStatusTrigger;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // connection_status - computed: true, optional: false, required: false
  public get connectionStatus() {
    return this.getStringAttribute('connection_status');
  }

  // connector_type - computed: true, optional: false, required: false
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }

  // credential_type - computed: true, optional: false, required: false
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }

  // external_database_id - computed: true, optional: false, required: false
  public get externalDatabaseId() {
    return this.getStringAttribute('external_database_id');
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

  // is_test_connection_param - computed: false, optional: false, required: true
  private _isTestConnectionParam?: boolean | cdktf.IResolvable; 
  public get isTestConnectionParam() {
    return this.getBooleanAttribute('is_test_connection_param');
  }
  public set isTestConnectionParam(value: boolean | cdktf.IResolvable) {
    this._isTestConnectionParam = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isTestConnectionParamInput() {
    return this._isTestConnectionParam;
  }

  // macs_agent_id - computed: true, optional: false, required: false
  public get macsAgentId() {
    return this.getStringAttribute('macs_agent_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // network_protocol - computed: true, optional: false, required: false
  public get networkProtocol() {
    return this.getStringAttribute('network_protocol');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // source_database - computed: true, optional: false, required: false
  public get sourceDatabase() {
    return this.getStringAttribute('source_database');
  }

  // source_database_type - computed: true, optional: false, required: false
  public get sourceDatabaseType() {
    return this.getStringAttribute('source_database_type');
  }

  // ssl_secret_id - computed: true, optional: false, required: false
  public get sslSecretId() {
    return this.getStringAttribute('ssl_secret_id');
  }

  // ssl_secret_name - computed: true, optional: false, required: false
  public get sslSecretName() {
    return this.getStringAttribute('ssl_secret_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_connection_status_updated - computed: true, optional: false, required: false
  public get timeConnectionStatusUpdated() {
    return this.getStringAttribute('time_connection_status_updated');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // connector_details - computed: false, optional: false, required: true
  private _connectorDetails = new DatabaseManagementExternalMySqlDatabaseConnectorConnectorDetailsOutputReference(this, "connector_details");
  public get connectorDetails() {
    return this._connectorDetails;
  }
  public putConnectorDetails(value: DatabaseManagementExternalMySqlDatabaseConnectorConnectorDetails) {
    this._connectorDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorDetailsInput() {
    return this._connectorDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseManagementExternalMySqlDatabaseConnectorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseManagementExternalMySqlDatabaseConnectorTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      check_connection_status_trigger: cdktf.numberToTerraform(this._checkConnectionStatusTrigger),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      id: cdktf.stringToTerraform(this._id),
      is_test_connection_param: cdktf.booleanToTerraform(this._isTestConnectionParam),
      connector_details: databaseManagementExternalMySqlDatabaseConnectorConnectorDetailsToTerraform(this._connectorDetails.internalValue),
      timeouts: databaseManagementExternalMySqlDatabaseConnectorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      check_connection_status_trigger: {
        value: cdktf.numberToHclTerraform(this._checkConnectionStatusTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_test_connection_param: {
        value: cdktf.booleanToHclTerraform(this._isTestConnectionParam),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connector_details: {
        value: databaseManagementExternalMySqlDatabaseConnectorConnectorDetailsToHclTerraform(this._connectorDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseManagementExternalMySqlDatabaseConnectorConnectorDetailsList",
      },
      timeouts: {
        value: databaseManagementExternalMySqlDatabaseConnectorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseManagementExternalMySqlDatabaseConnectorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
