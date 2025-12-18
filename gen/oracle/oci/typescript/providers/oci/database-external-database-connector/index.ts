// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseExternalDatabaseConnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#connector_agent_id DatabaseExternalDatabaseConnector#connector_agent_id}
  */
  readonly connectorAgentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#connector_type DatabaseExternalDatabaseConnector#connector_type}
  */
  readonly connectorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#defined_tags DatabaseExternalDatabaseConnector#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#display_name DatabaseExternalDatabaseConnector#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#external_database_id DatabaseExternalDatabaseConnector#external_database_id}
  */
  readonly externalDatabaseId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#freeform_tags DatabaseExternalDatabaseConnector#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#id DatabaseExternalDatabaseConnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * connection_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#connection_credentials DatabaseExternalDatabaseConnector#connection_credentials}
  */
  readonly connectionCredentials: DatabaseExternalDatabaseConnectorConnectionCredentials;
  /**
  * connection_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#connection_string DatabaseExternalDatabaseConnector#connection_string}
  */
  readonly connectionString: DatabaseExternalDatabaseConnectorConnectionString;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#timeouts DatabaseExternalDatabaseConnector#timeouts}
  */
  readonly timeouts?: DatabaseExternalDatabaseConnectorTimeouts;
}
export interface DatabaseExternalDatabaseConnectorConnectionCredentials {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#credential_name DatabaseExternalDatabaseConnector#credential_name}
  */
  readonly credentialName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#credential_type DatabaseExternalDatabaseConnector#credential_type}
  */
  readonly credentialType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#password DatabaseExternalDatabaseConnector#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#role DatabaseExternalDatabaseConnector#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#ssl_secret_id DatabaseExternalDatabaseConnector#ssl_secret_id}
  */
  readonly sslSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#username DatabaseExternalDatabaseConnector#username}
  */
  readonly username?: string;
}

export function databaseExternalDatabaseConnectorConnectionCredentialsToTerraform(struct?: DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference | DatabaseExternalDatabaseConnectorConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential_name: cdktf.stringToTerraform(struct!.credentialName),
    credential_type: cdktf.stringToTerraform(struct!.credentialType),
    password: cdktf.stringToTerraform(struct!.password),
    role: cdktf.stringToTerraform(struct!.role),
    ssl_secret_id: cdktf.stringToTerraform(struct!.sslSecretId),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function databaseExternalDatabaseConnectorConnectionCredentialsToHclTerraform(struct?: DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference | DatabaseExternalDatabaseConnectorConnectionCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credential_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.sslSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseExternalDatabaseConnectorConnectionCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialName = this._credentialName;
    }
    if (this._credentialType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialType = this._credentialType;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._sslSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSecretId = this._sslSecretId;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExternalDatabaseConnectorConnectionCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._credentialName = undefined;
      this._credentialType = undefined;
      this._password = undefined;
      this._role = undefined;
      this._sslSecretId = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._credentialName = value.credentialName;
      this._credentialType = value.credentialType;
      this._password = value.password;
      this._role = value.role;
      this._sslSecretId = value.sslSecretId;
      this._username = value.username;
    }
  }

  // credential_name - computed: true, optional: true, required: false
  private _credentialName?: string; 
  public get credentialName() {
    return this.getStringAttribute('credential_name');
  }
  public set credentialName(value: string) {
    this._credentialName = value;
  }
  public resetCredentialName() {
    this._credentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialNameInput() {
    return this._credentialName;
  }

  // credential_type - computed: true, optional: true, required: false
  private _credentialType?: string; 
  public get credentialType() {
    return this.getStringAttribute('credential_type');
  }
  public set credentialType(value: string) {
    this._credentialType = value;
  }
  public resetCredentialType() {
    this._credentialType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeInput() {
    return this._credentialType;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // ssl_secret_id - computed: true, optional: true, required: false
  private _sslSecretId?: string; 
  public get sslSecretId() {
    return this.getStringAttribute('ssl_secret_id');
  }
  public set sslSecretId(value: string) {
    this._sslSecretId = value;
  }
  public resetSslSecretId() {
    this._sslSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSecretIdInput() {
    return this._sslSecretId;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DatabaseExternalDatabaseConnectorConnectionString {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#hostname DatabaseExternalDatabaseConnector#hostname}
  */
  readonly hostname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#port DatabaseExternalDatabaseConnector#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#protocol DatabaseExternalDatabaseConnector#protocol}
  */
  readonly protocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#service DatabaseExternalDatabaseConnector#service}
  */
  readonly service: string;
}

export function databaseExternalDatabaseConnectorConnectionStringToTerraform(struct?: DatabaseExternalDatabaseConnectorConnectionStringOutputReference | DatabaseExternalDatabaseConnectorConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function databaseExternalDatabaseConnectorConnectionStringToHclTerraform(struct?: DatabaseExternalDatabaseConnectorConnectionStringOutputReference | DatabaseExternalDatabaseConnectorConnectionString): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabaseExternalDatabaseConnectorConnectionStringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatabaseExternalDatabaseConnectorConnectionString | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabaseExternalDatabaseConnectorConnectionString | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._port = undefined;
      this._protocol = undefined;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._port = value.port;
      this._protocol = value.protocol;
      this._service = value.service;
    }
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface DatabaseExternalDatabaseConnectorTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#create DatabaseExternalDatabaseConnector#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#delete DatabaseExternalDatabaseConnector#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#update DatabaseExternalDatabaseConnector#update}
  */
  readonly update?: string;
}

export function databaseExternalDatabaseConnectorTimeoutsToTerraform(struct?: DatabaseExternalDatabaseConnectorTimeouts | cdktf.IResolvable): any {
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


export function databaseExternalDatabaseConnectorTimeoutsToHclTerraform(struct?: DatabaseExternalDatabaseConnectorTimeouts | cdktf.IResolvable): any {
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

export class DatabaseExternalDatabaseConnectorTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabaseExternalDatabaseConnectorTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabaseExternalDatabaseConnectorTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector oci_database_external_database_connector}
*/
export class DatabaseExternalDatabaseConnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_external_database_connector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabaseExternalDatabaseConnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabaseExternalDatabaseConnector to import
  * @param importFromId The id of the existing DatabaseExternalDatabaseConnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabaseExternalDatabaseConnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_external_database_connector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/database_external_database_connector oci_database_external_database_connector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseExternalDatabaseConnectorConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseExternalDatabaseConnectorConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_external_database_connector',
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
    this._connectorAgentId = config.connectorAgentId;
    this._connectorType = config.connectorType;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._externalDatabaseId = config.externalDatabaseId;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._connectionCredentials.internalValue = config.connectionCredentials;
    this._connectionString.internalValue = config.connectionString;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // connection_status - computed: true, optional: false, required: false
  public get connectionStatus() {
    return this.getStringAttribute('connection_status');
  }

  // connector_agent_id - computed: false, optional: false, required: true
  private _connectorAgentId?: string; 
  public get connectorAgentId() {
    return this.getStringAttribute('connector_agent_id');
  }
  public set connectorAgentId(value: string) {
    this._connectorAgentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorAgentIdInput() {
    return this._connectorAgentId;
  }

  // connector_type - computed: true, optional: true, required: false
  private _connectorType?: string; 
  public get connectorType() {
    return this.getStringAttribute('connector_type');
  }
  public set connectorType(value: string) {
    this._connectorType = value;
  }
  public resetConnectorType() {
    this._connectorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorTypeInput() {
    return this._connectorType;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
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

  // time_connection_status_last_updated - computed: true, optional: false, required: false
  public get timeConnectionStatusLastUpdated() {
    return this.getStringAttribute('time_connection_status_last_updated');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // connection_credentials - computed: false, optional: false, required: true
  private _connectionCredentials = new DatabaseExternalDatabaseConnectorConnectionCredentialsOutputReference(this, "connection_credentials");
  public get connectionCredentials() {
    return this._connectionCredentials;
  }
  public putConnectionCredentials(value: DatabaseExternalDatabaseConnectorConnectionCredentials) {
    this._connectionCredentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionCredentialsInput() {
    return this._connectionCredentials.internalValue;
  }

  // connection_string - computed: false, optional: false, required: true
  private _connectionString = new DatabaseExternalDatabaseConnectorConnectionStringOutputReference(this, "connection_string");
  public get connectionString() {
    return this._connectionString;
  }
  public putConnectionString(value: DatabaseExternalDatabaseConnectorConnectionString) {
    this._connectionString.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatabaseExternalDatabaseConnectorTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatabaseExternalDatabaseConnectorTimeouts) {
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
      connector_agent_id: cdktf.stringToTerraform(this._connectorAgentId),
      connector_type: cdktf.stringToTerraform(this._connectorType),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      external_database_id: cdktf.stringToTerraform(this._externalDatabaseId),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      connection_credentials: databaseExternalDatabaseConnectorConnectionCredentialsToTerraform(this._connectionCredentials.internalValue),
      connection_string: databaseExternalDatabaseConnectorConnectionStringToTerraform(this._connectionString.internalValue),
      timeouts: databaseExternalDatabaseConnectorTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connector_agent_id: {
        value: cdktf.stringToHclTerraform(this._connectorAgentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connector_type: {
        value: cdktf.stringToHclTerraform(this._connectorType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_database_id: {
        value: cdktf.stringToHclTerraform(this._externalDatabaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_credentials: {
        value: databaseExternalDatabaseConnectorConnectionCredentialsToHclTerraform(this._connectionCredentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseExternalDatabaseConnectorConnectionCredentialsList",
      },
      connection_string: {
        value: databaseExternalDatabaseConnectorConnectionStringToHclTerraform(this._connectionString.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabaseExternalDatabaseConnectorConnectionStringList",
      },
      timeouts: {
        value: databaseExternalDatabaseConnectorTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabaseExternalDatabaseConnectorTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
