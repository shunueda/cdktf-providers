// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DestinationMongodbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#configuration DestinationMongodb#configuration}
  */
  readonly configuration: DestinationMongodbConfiguration;
  /**
  * The UUID of the connector definition. One of configuration.destinationType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#definition_id DestinationMongodb#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the destination e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#name DestinationMongodb#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#workspace_id DestinationMongodb#workspace_id}
  */
  readonly workspaceId: string;
}
export interface DestinationMongodbConfigurationAuthTypeLoginPassword {
  /**
  * Password associated with the username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#password DestinationMongodb#password}
  */
  readonly password: string;
  /**
  * Username to use to access the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#username DestinationMongodb#username}
  */
  readonly username: string;
}

export function destinationMongodbConfigurationAuthTypeLoginPasswordToTerraform(struct?: DestinationMongodbConfigurationAuthTypeLoginPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function destinationMongodbConfigurationAuthTypeLoginPasswordToHclTerraform(struct?: DestinationMongodbConfigurationAuthTypeLoginPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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

export class DestinationMongodbConfigurationAuthTypeLoginPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMongodbConfigurationAuthTypeLoginPassword | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMongodbConfigurationAuthTypeLoginPassword | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DestinationMongodbConfigurationAuthTypeNone {
}

export function destinationMongodbConfigurationAuthTypeNoneToTerraform(struct?: DestinationMongodbConfigurationAuthTypeNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationMongodbConfigurationAuthTypeNoneToHclTerraform(struct?: DestinationMongodbConfigurationAuthTypeNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationMongodbConfigurationAuthTypeNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMongodbConfigurationAuthTypeNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMongodbConfigurationAuthTypeNone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DestinationMongodbConfigurationAuthType {
  /**
  * Login/Password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#login_password DestinationMongodb#login_password}
  */
  readonly loginPassword?: DestinationMongodbConfigurationAuthTypeLoginPassword;
  /**
  * None.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#none DestinationMongodb#none}
  */
  readonly none?: DestinationMongodbConfigurationAuthTypeNone;
}

export function destinationMongodbConfigurationAuthTypeToTerraform(struct?: DestinationMongodbConfigurationAuthType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    login_password: destinationMongodbConfigurationAuthTypeLoginPasswordToTerraform(struct!.loginPassword),
    none: destinationMongodbConfigurationAuthTypeNoneToTerraform(struct!.none),
  }
}


export function destinationMongodbConfigurationAuthTypeToHclTerraform(struct?: DestinationMongodbConfigurationAuthType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    login_password: {
      value: destinationMongodbConfigurationAuthTypeLoginPasswordToHclTerraform(struct!.loginPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMongodbConfigurationAuthTypeLoginPassword",
    },
    none: {
      value: destinationMongodbConfigurationAuthTypeNoneToHclTerraform(struct!.none),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMongodbConfigurationAuthTypeNone",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationMongodbConfigurationAuthTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMongodbConfigurationAuthType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loginPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginPassword = this._loginPassword?.internalValue;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMongodbConfigurationAuthType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loginPassword.internalValue = undefined;
      this._none.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loginPassword.internalValue = value.loginPassword;
      this._none.internalValue = value.none;
    }
  }

  // login_password - computed: false, optional: true, required: false
  private _loginPassword = new DestinationMongodbConfigurationAuthTypeLoginPasswordOutputReference(this, "login_password");
  public get loginPassword() {
    return this._loginPassword;
  }
  public putLoginPassword(value: DestinationMongodbConfigurationAuthTypeLoginPassword) {
    this._loginPassword.internalValue = value;
  }
  public resetLoginPassword() {
    this._loginPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPasswordInput() {
    return this._loginPassword.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none = new DestinationMongodbConfigurationAuthTypeNoneOutputReference(this, "none");
  public get none() {
    return this._none;
  }
  public putNone(value: DestinationMongodbConfigurationAuthTypeNone) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }
}
export interface DestinationMongodbConfigurationInstanceTypeMongoDbAtlas {
  /**
  * URL of a cluster to connect to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#cluster_url DestinationMongodb#cluster_url}
  */
  readonly clusterUrl: string;
  /**
  * Default: "atlas"; must be "atlas"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#instance DestinationMongodb#instance}
  */
  readonly instance?: string;
}

export function destinationMongodbConfigurationInstanceTypeMongoDbAtlasToTerraform(struct?: DestinationMongodbConfigurationInstanceTypeMongoDbAtlas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_url: cdktf.stringToTerraform(struct!.clusterUrl),
    instance: cdktf.stringToTerraform(struct!.instance),
  }
}


export function destinationMongodbConfigurationInstanceTypeMongoDbAtlasToHclTerraform(struct?: DestinationMongodbConfigurationInstanceTypeMongoDbAtlas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_url: {
      value: cdktf.stringToHclTerraform(struct!.clusterUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance: {
      value: cdktf.stringToHclTerraform(struct!.instance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationMongodbConfigurationInstanceTypeMongoDbAtlasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMongodbConfigurationInstanceTypeMongoDbAtlas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterUrl = this._clusterUrl;
    }
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMongodbConfigurationInstanceTypeMongoDbAtlas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterUrl = undefined;
      this._instance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterUrl = value.clusterUrl;
      this._instance = value.instance;
    }
  }

  // cluster_url - computed: false, optional: false, required: true
  private _clusterUrl?: string; 
  public get clusterUrl() {
    return this.getStringAttribute('cluster_url');
  }
  public set clusterUrl(value: string) {
    this._clusterUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterUrlInput() {
    return this._clusterUrl;
  }

  // instance - computed: true, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }
}
export interface DestinationMongodbConfigurationInstanceTypeReplicaSet {
  /**
  * Default: "replica"; must be "replica"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#instance DestinationMongodb#instance}
  */
  readonly instance?: string;
  /**
  * A replica set name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#replica_set DestinationMongodb#replica_set}
  */
  readonly replicaSet?: string;
  /**
  * The members of a replica set. Please specify `host`:`port` of each member seperated by comma.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#server_addresses DestinationMongodb#server_addresses}
  */
  readonly serverAddresses: string;
}

export function destinationMongodbConfigurationInstanceTypeReplicaSetToTerraform(struct?: DestinationMongodbConfigurationInstanceTypeReplicaSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance: cdktf.stringToTerraform(struct!.instance),
    replica_set: cdktf.stringToTerraform(struct!.replicaSet),
    server_addresses: cdktf.stringToTerraform(struct!.serverAddresses),
  }
}


export function destinationMongodbConfigurationInstanceTypeReplicaSetToHclTerraform(struct?: DestinationMongodbConfigurationInstanceTypeReplicaSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance: {
      value: cdktf.stringToHclTerraform(struct!.instance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_set: {
      value: cdktf.stringToHclTerraform(struct!.replicaSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_addresses: {
      value: cdktf.stringToHclTerraform(struct!.serverAddresses),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationMongodbConfigurationInstanceTypeReplicaSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMongodbConfigurationInstanceTypeReplicaSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    if (this._replicaSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaSet = this._replicaSet;
    }
    if (this._serverAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAddresses = this._serverAddresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMongodbConfigurationInstanceTypeReplicaSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instance = undefined;
      this._replicaSet = undefined;
      this._serverAddresses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instance = value.instance;
      this._replicaSet = value.replicaSet;
      this._serverAddresses = value.serverAddresses;
    }
  }

  // instance - computed: true, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // replica_set - computed: false, optional: true, required: false
  private _replicaSet?: string; 
  public get replicaSet() {
    return this.getStringAttribute('replica_set');
  }
  public set replicaSet(value: string) {
    this._replicaSet = value;
  }
  public resetReplicaSet() {
    this._replicaSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaSetInput() {
    return this._replicaSet;
  }

  // server_addresses - computed: false, optional: false, required: true
  private _serverAddresses?: string; 
  public get serverAddresses() {
    return this.getStringAttribute('server_addresses');
  }
  public set serverAddresses(value: string) {
    this._serverAddresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAddressesInput() {
    return this._serverAddresses;
  }
}
export interface DestinationMongodbConfigurationInstanceTypeStandaloneMongoDbInstance {
  /**
  * The Host of a Mongo database to be replicated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#host DestinationMongodb#host}
  */
  readonly host: string;
  /**
  * Default: "standalone"; must be "standalone"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#instance DestinationMongodb#instance}
  */
  readonly instance?: string;
  /**
  * The Port of a Mongo database to be replicated. Default: 27017
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#port DestinationMongodb#port}
  */
  readonly port?: number;
  /**
  * Indicates whether TLS encryption protocol will be used to connect to MongoDB. It is recommended to use TLS connection if possible. For more information see <a href="https://docs.airbyte.com/integrations/sources/mongodb-v2">documentation</a>. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#tls DestinationMongodb#tls}
  */
  readonly tls?: boolean | cdktf.IResolvable;
}

export function destinationMongodbConfigurationInstanceTypeStandaloneMongoDbInstanceToTerraform(struct?: DestinationMongodbConfigurationInstanceTypeStandaloneMongoDbInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    instance: cdktf.stringToTerraform(struct!.instance),
    port: cdktf.numberToTerraform(struct!.port),
    tls: cdktf.booleanToTerraform(struct!.tls),
  }
}


export function destinationMongodbConfigurationInstanceTypeStandaloneMongoDbInstanceToHclTerraform(struct?: DestinationMongodbConfigurationInstanceTypeStandaloneMongoDbInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance: {
      value: cdktf.stringToHclTerraform(struct!.instance),
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
    tls: {
      value: cdktf.booleanToHclTerraform(struct!.tls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationMongodbConfigurationInstanceTypeStandaloneMongoDbInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMongodbConfigurationInstanceTypeStandaloneMongoDbInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMongodbConfigurationInstanceTypeStandaloneMongoDbInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._instance = undefined;
      this._port = undefined;
      this._tls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._instance = value.instance;
      this._port = value.port;
      this._tls = value.tls;
    }
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // instance - computed: true, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // tls - computed: true, optional: true, required: false
  private _tls?: boolean | cdktf.IResolvable; 
  public get tls() {
    return this.getBooleanAttribute('tls');
  }
  public set tls(value: boolean | cdktf.IResolvable) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }
}
export interface DestinationMongodbConfigurationInstanceType {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#mongo_db_atlas DestinationMongodb#mongo_db_atlas}
  */
  readonly mongoDbAtlas?: DestinationMongodbConfigurationInstanceTypeMongoDbAtlas;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#replica_set DestinationMongodb#replica_set}
  */
  readonly replicaSet?: DestinationMongodbConfigurationInstanceTypeReplicaSet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#standalone_mongo_db_instance DestinationMongodb#standalone_mongo_db_instance}
  */
  readonly standaloneMongoDbInstance?: DestinationMongodbConfigurationInstanceTypeStandaloneMongoDbInstance;
}

export function destinationMongodbConfigurationInstanceTypeToTerraform(struct?: DestinationMongodbConfigurationInstanceType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mongo_db_atlas: destinationMongodbConfigurationInstanceTypeMongoDbAtlasToTerraform(struct!.mongoDbAtlas),
    replica_set: destinationMongodbConfigurationInstanceTypeReplicaSetToTerraform(struct!.replicaSet),
    standalone_mongo_db_instance: destinationMongodbConfigurationInstanceTypeStandaloneMongoDbInstanceToTerraform(struct!.standaloneMongoDbInstance),
  }
}


export function destinationMongodbConfigurationInstanceTypeToHclTerraform(struct?: DestinationMongodbConfigurationInstanceType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mongo_db_atlas: {
      value: destinationMongodbConfigurationInstanceTypeMongoDbAtlasToHclTerraform(struct!.mongoDbAtlas),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMongodbConfigurationInstanceTypeMongoDbAtlas",
    },
    replica_set: {
      value: destinationMongodbConfigurationInstanceTypeReplicaSetToHclTerraform(struct!.replicaSet),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMongodbConfigurationInstanceTypeReplicaSet",
    },
    standalone_mongo_db_instance: {
      value: destinationMongodbConfigurationInstanceTypeStandaloneMongoDbInstanceToHclTerraform(struct!.standaloneMongoDbInstance),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMongodbConfigurationInstanceTypeStandaloneMongoDbInstance",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationMongodbConfigurationInstanceTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMongodbConfigurationInstanceType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mongoDbAtlas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongoDbAtlas = this._mongoDbAtlas?.internalValue;
    }
    if (this._replicaSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaSet = this._replicaSet?.internalValue;
    }
    if (this._standaloneMongoDbInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standaloneMongoDbInstance = this._standaloneMongoDbInstance?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMongodbConfigurationInstanceType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mongoDbAtlas.internalValue = undefined;
      this._replicaSet.internalValue = undefined;
      this._standaloneMongoDbInstance.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mongoDbAtlas.internalValue = value.mongoDbAtlas;
      this._replicaSet.internalValue = value.replicaSet;
      this._standaloneMongoDbInstance.internalValue = value.standaloneMongoDbInstance;
    }
  }

  // mongo_db_atlas - computed: false, optional: true, required: false
  private _mongoDbAtlas = new DestinationMongodbConfigurationInstanceTypeMongoDbAtlasOutputReference(this, "mongo_db_atlas");
  public get mongoDbAtlas() {
    return this._mongoDbAtlas;
  }
  public putMongoDbAtlas(value: DestinationMongodbConfigurationInstanceTypeMongoDbAtlas) {
    this._mongoDbAtlas.internalValue = value;
  }
  public resetMongoDbAtlas() {
    this._mongoDbAtlas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongoDbAtlasInput() {
    return this._mongoDbAtlas.internalValue;
  }

  // replica_set - computed: false, optional: true, required: false
  private _replicaSet = new DestinationMongodbConfigurationInstanceTypeReplicaSetOutputReference(this, "replica_set");
  public get replicaSet() {
    return this._replicaSet;
  }
  public putReplicaSet(value: DestinationMongodbConfigurationInstanceTypeReplicaSet) {
    this._replicaSet.internalValue = value;
  }
  public resetReplicaSet() {
    this._replicaSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaSetInput() {
    return this._replicaSet.internalValue;
  }

  // standalone_mongo_db_instance - computed: false, optional: true, required: false
  private _standaloneMongoDbInstance = new DestinationMongodbConfigurationInstanceTypeStandaloneMongoDbInstanceOutputReference(this, "standalone_mongo_db_instance");
  public get standaloneMongoDbInstance() {
    return this._standaloneMongoDbInstance;
  }
  public putStandaloneMongoDbInstance(value: DestinationMongodbConfigurationInstanceTypeStandaloneMongoDbInstance) {
    this._standaloneMongoDbInstance.internalValue = value;
  }
  public resetStandaloneMongoDbInstance() {
    this._standaloneMongoDbInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standaloneMongoDbInstanceInput() {
    return this._standaloneMongoDbInstance.internalValue;
  }
}
export interface DestinationMongodbConfigurationTunnelMethodNoTunnel {
}

export function destinationMongodbConfigurationTunnelMethodNoTunnelToTerraform(struct?: DestinationMongodbConfigurationTunnelMethodNoTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationMongodbConfigurationTunnelMethodNoTunnelToHclTerraform(struct?: DestinationMongodbConfigurationTunnelMethodNoTunnel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationMongodbConfigurationTunnelMethodNoTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMongodbConfigurationTunnelMethodNoTunnel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMongodbConfigurationTunnelMethodNoTunnel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DestinationMongodbConfigurationTunnelMethodPasswordAuthentication {
  /**
  * Hostname of the jump server host that allows inbound ssh tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#tunnel_host DestinationMongodb#tunnel_host}
  */
  readonly tunnelHost: string;
  /**
  * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#tunnel_port DestinationMongodb#tunnel_port}
  */
  readonly tunnelPort?: number;
  /**
  * OS-level username for logging into the jump server host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#tunnel_user DestinationMongodb#tunnel_user}
  */
  readonly tunnelUser: string;
  /**
  * OS-level password for logging into the jump server host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#tunnel_user_password DestinationMongodb#tunnel_user_password}
  */
  readonly tunnelUserPassword: string;
}

export function destinationMongodbConfigurationTunnelMethodPasswordAuthenticationToTerraform(struct?: DestinationMongodbConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tunnel_host: cdktf.stringToTerraform(struct!.tunnelHost),
    tunnel_port: cdktf.numberToTerraform(struct!.tunnelPort),
    tunnel_user: cdktf.stringToTerraform(struct!.tunnelUser),
    tunnel_user_password: cdktf.stringToTerraform(struct!.tunnelUserPassword),
  }
}


export function destinationMongodbConfigurationTunnelMethodPasswordAuthenticationToHclTerraform(struct?: DestinationMongodbConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tunnel_host: {
      value: cdktf.stringToHclTerraform(struct!.tunnelHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_port: {
      value: cdktf.numberToHclTerraform(struct!.tunnelPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel_user: {
      value: cdktf.stringToHclTerraform(struct!.tunnelUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_user_password: {
      value: cdktf.stringToHclTerraform(struct!.tunnelUserPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationMongodbConfigurationTunnelMethodPasswordAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMongodbConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tunnelHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelHost = this._tunnelHost;
    }
    if (this._tunnelPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelPort = this._tunnelPort;
    }
    if (this._tunnelUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelUser = this._tunnelUser;
    }
    if (this._tunnelUserPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelUserPassword = this._tunnelUserPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMongodbConfigurationTunnelMethodPasswordAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tunnelHost = undefined;
      this._tunnelPort = undefined;
      this._tunnelUser = undefined;
      this._tunnelUserPassword = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tunnelHost = value.tunnelHost;
      this._tunnelPort = value.tunnelPort;
      this._tunnelUser = value.tunnelUser;
      this._tunnelUserPassword = value.tunnelUserPassword;
    }
  }

  // tunnel_host - computed: false, optional: false, required: true
  private _tunnelHost?: string; 
  public get tunnelHost() {
    return this.getStringAttribute('tunnel_host');
  }
  public set tunnelHost(value: string) {
    this._tunnelHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelHostInput() {
    return this._tunnelHost;
  }

  // tunnel_port - computed: true, optional: true, required: false
  private _tunnelPort?: number; 
  public get tunnelPort() {
    return this.getNumberAttribute('tunnel_port');
  }
  public set tunnelPort(value: number) {
    this._tunnelPort = value;
  }
  public resetTunnelPort() {
    this._tunnelPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelPortInput() {
    return this._tunnelPort;
  }

  // tunnel_user - computed: false, optional: false, required: true
  private _tunnelUser?: string; 
  public get tunnelUser() {
    return this.getStringAttribute('tunnel_user');
  }
  public set tunnelUser(value: string) {
    this._tunnelUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelUserInput() {
    return this._tunnelUser;
  }

  // tunnel_user_password - computed: false, optional: false, required: true
  private _tunnelUserPassword?: string; 
  public get tunnelUserPassword() {
    return this.getStringAttribute('tunnel_user_password');
  }
  public set tunnelUserPassword(value: string) {
    this._tunnelUserPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelUserPasswordInput() {
    return this._tunnelUserPassword;
  }
}
export interface DestinationMongodbConfigurationTunnelMethodSshKeyAuthentication {
  /**
  * OS-level user account ssh key credentials in RSA PEM format ( created with ssh-keygen -t rsa -m PEM -f myuser_rsa )
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#ssh_key DestinationMongodb#ssh_key}
  */
  readonly sshKey: string;
  /**
  * Hostname of the jump server host that allows inbound ssh tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#tunnel_host DestinationMongodb#tunnel_host}
  */
  readonly tunnelHost: string;
  /**
  * Port on the proxy/jump server that accepts inbound ssh connections. Default: 22
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#tunnel_port DestinationMongodb#tunnel_port}
  */
  readonly tunnelPort?: number;
  /**
  * OS-level username for logging into the jump server host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#tunnel_user DestinationMongodb#tunnel_user}
  */
  readonly tunnelUser: string;
}

export function destinationMongodbConfigurationTunnelMethodSshKeyAuthenticationToTerraform(struct?: DestinationMongodbConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    tunnel_host: cdktf.stringToTerraform(struct!.tunnelHost),
    tunnel_port: cdktf.numberToTerraform(struct!.tunnelPort),
    tunnel_user: cdktf.stringToTerraform(struct!.tunnelUser),
  }
}


export function destinationMongodbConfigurationTunnelMethodSshKeyAuthenticationToHclTerraform(struct?: DestinationMongodbConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_host: {
      value: cdktf.stringToHclTerraform(struct!.tunnelHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_port: {
      value: cdktf.numberToHclTerraform(struct!.tunnelPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tunnel_user: {
      value: cdktf.stringToHclTerraform(struct!.tunnelUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationMongodbConfigurationTunnelMethodSshKeyAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMongodbConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    if (this._tunnelHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelHost = this._tunnelHost;
    }
    if (this._tunnelPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelPort = this._tunnelPort;
    }
    if (this._tunnelUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelUser = this._tunnelUser;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMongodbConfigurationTunnelMethodSshKeyAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sshKey = undefined;
      this._tunnelHost = undefined;
      this._tunnelPort = undefined;
      this._tunnelUser = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sshKey = value.sshKey;
      this._tunnelHost = value.tunnelHost;
      this._tunnelPort = value.tunnelPort;
      this._tunnelUser = value.tunnelUser;
    }
  }

  // ssh_key - computed: false, optional: false, required: true
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // tunnel_host - computed: false, optional: false, required: true
  private _tunnelHost?: string; 
  public get tunnelHost() {
    return this.getStringAttribute('tunnel_host');
  }
  public set tunnelHost(value: string) {
    this._tunnelHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelHostInput() {
    return this._tunnelHost;
  }

  // tunnel_port - computed: true, optional: true, required: false
  private _tunnelPort?: number; 
  public get tunnelPort() {
    return this.getNumberAttribute('tunnel_port');
  }
  public set tunnelPort(value: number) {
    this._tunnelPort = value;
  }
  public resetTunnelPort() {
    this._tunnelPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelPortInput() {
    return this._tunnelPort;
  }

  // tunnel_user - computed: false, optional: false, required: true
  private _tunnelUser?: string; 
  public get tunnelUser() {
    return this.getStringAttribute('tunnel_user');
  }
  public set tunnelUser(value: string) {
    this._tunnelUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelUserInput() {
    return this._tunnelUser;
  }
}
export interface DestinationMongodbConfigurationTunnelMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#no_tunnel DestinationMongodb#no_tunnel}
  */
  readonly noTunnel?: DestinationMongodbConfigurationTunnelMethodNoTunnel;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#password_authentication DestinationMongodb#password_authentication}
  */
  readonly passwordAuthentication?: DestinationMongodbConfigurationTunnelMethodPasswordAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#ssh_key_authentication DestinationMongodb#ssh_key_authentication}
  */
  readonly sshKeyAuthentication?: DestinationMongodbConfigurationTunnelMethodSshKeyAuthentication;
}

export function destinationMongodbConfigurationTunnelMethodToTerraform(struct?: DestinationMongodbConfigurationTunnelMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_tunnel: destinationMongodbConfigurationTunnelMethodNoTunnelToTerraform(struct!.noTunnel),
    password_authentication: destinationMongodbConfigurationTunnelMethodPasswordAuthenticationToTerraform(struct!.passwordAuthentication),
    ssh_key_authentication: destinationMongodbConfigurationTunnelMethodSshKeyAuthenticationToTerraform(struct!.sshKeyAuthentication),
  }
}


export function destinationMongodbConfigurationTunnelMethodToHclTerraform(struct?: DestinationMongodbConfigurationTunnelMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_tunnel: {
      value: destinationMongodbConfigurationTunnelMethodNoTunnelToHclTerraform(struct!.noTunnel),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMongodbConfigurationTunnelMethodNoTunnel",
    },
    password_authentication: {
      value: destinationMongodbConfigurationTunnelMethodPasswordAuthenticationToHclTerraform(struct!.passwordAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMongodbConfigurationTunnelMethodPasswordAuthentication",
    },
    ssh_key_authentication: {
      value: destinationMongodbConfigurationTunnelMethodSshKeyAuthenticationToHclTerraform(struct!.sshKeyAuthentication),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMongodbConfigurationTunnelMethodSshKeyAuthentication",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationMongodbConfigurationTunnelMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMongodbConfigurationTunnelMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noTunnel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTunnel = this._noTunnel?.internalValue;
    }
    if (this._passwordAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordAuthentication = this._passwordAuthentication?.internalValue;
    }
    if (this._sshKeyAuthentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeyAuthentication = this._sshKeyAuthentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMongodbConfigurationTunnelMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._noTunnel.internalValue = undefined;
      this._passwordAuthentication.internalValue = undefined;
      this._sshKeyAuthentication.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._noTunnel.internalValue = value.noTunnel;
      this._passwordAuthentication.internalValue = value.passwordAuthentication;
      this._sshKeyAuthentication.internalValue = value.sshKeyAuthentication;
    }
  }

  // no_tunnel - computed: false, optional: true, required: false
  private _noTunnel = new DestinationMongodbConfigurationTunnelMethodNoTunnelOutputReference(this, "no_tunnel");
  public get noTunnel() {
    return this._noTunnel;
  }
  public putNoTunnel(value: DestinationMongodbConfigurationTunnelMethodNoTunnel) {
    this._noTunnel.internalValue = value;
  }
  public resetNoTunnel() {
    this._noTunnel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTunnelInput() {
    return this._noTunnel.internalValue;
  }

  // password_authentication - computed: false, optional: true, required: false
  private _passwordAuthentication = new DestinationMongodbConfigurationTunnelMethodPasswordAuthenticationOutputReference(this, "password_authentication");
  public get passwordAuthentication() {
    return this._passwordAuthentication;
  }
  public putPasswordAuthentication(value: DestinationMongodbConfigurationTunnelMethodPasswordAuthentication) {
    this._passwordAuthentication.internalValue = value;
  }
  public resetPasswordAuthentication() {
    this._passwordAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAuthenticationInput() {
    return this._passwordAuthentication.internalValue;
  }

  // ssh_key_authentication - computed: false, optional: true, required: false
  private _sshKeyAuthentication = new DestinationMongodbConfigurationTunnelMethodSshKeyAuthenticationOutputReference(this, "ssh_key_authentication");
  public get sshKeyAuthentication() {
    return this._sshKeyAuthentication;
  }
  public putSshKeyAuthentication(value: DestinationMongodbConfigurationTunnelMethodSshKeyAuthentication) {
    this._sshKeyAuthentication.internalValue = value;
  }
  public resetSshKeyAuthentication() {
    this._sshKeyAuthentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyAuthenticationInput() {
    return this._sshKeyAuthentication.internalValue;
  }
}
export interface DestinationMongodbConfiguration {
  /**
  * Authorization type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#auth_type DestinationMongodb#auth_type}
  */
  readonly authType: DestinationMongodbConfigurationAuthType;
  /**
  * Name of the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#database DestinationMongodb#database}
  */
  readonly database: string;
  /**
  * MongoDb instance to connect to. For MongoDB Atlas and Replica Set TLS connection is used by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#instance_type DestinationMongodb#instance_type}
  */
  readonly instanceType?: DestinationMongodbConfigurationInstanceType;
  /**
  * Whether to initiate an SSH tunnel before connecting to the database, and if so, which kind of authentication to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#tunnel_method DestinationMongodb#tunnel_method}
  */
  readonly tunnelMethod?: DestinationMongodbConfigurationTunnelMethod;
}

export function destinationMongodbConfigurationToTerraform(struct?: DestinationMongodbConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: destinationMongodbConfigurationAuthTypeToTerraform(struct!.authType),
    database: cdktf.stringToTerraform(struct!.database),
    instance_type: destinationMongodbConfigurationInstanceTypeToTerraform(struct!.instanceType),
    tunnel_method: destinationMongodbConfigurationTunnelMethodToTerraform(struct!.tunnelMethod),
  }
}


export function destinationMongodbConfigurationToHclTerraform(struct?: DestinationMongodbConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: destinationMongodbConfigurationAuthTypeToHclTerraform(struct!.authType),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMongodbConfigurationAuthType",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: destinationMongodbConfigurationInstanceTypeToHclTerraform(struct!.instanceType),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMongodbConfigurationInstanceType",
    },
    tunnel_method: {
      value: destinationMongodbConfigurationTunnelMethodToHclTerraform(struct!.tunnelMethod),
      isBlock: true,
      type: "struct",
      storageClassType: "DestinationMongodbConfigurationTunnelMethod",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DestinationMongodbConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMongodbConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType?.internalValue;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._instanceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType?.internalValue;
    }
    if (this._tunnelMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelMethod = this._tunnelMethod?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMongodbConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType.internalValue = undefined;
      this._database = undefined;
      this._instanceType.internalValue = undefined;
      this._tunnelMethod.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType.internalValue = value.authType;
      this._database = value.database;
      this._instanceType.internalValue = value.instanceType;
      this._tunnelMethod.internalValue = value.tunnelMethod;
    }
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType = new DestinationMongodbConfigurationAuthTypeOutputReference(this, "auth_type");
  public get authType() {
    return this._authType;
  }
  public putAuthType(value: DestinationMongodbConfigurationAuthType) {
    this._authType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType.internalValue;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType = new DestinationMongodbConfigurationInstanceTypeOutputReference(this, "instance_type");
  public get instanceType() {
    return this._instanceType;
  }
  public putInstanceType(value: DestinationMongodbConfigurationInstanceType) {
    this._instanceType.internalValue = value;
  }
  public resetInstanceType() {
    this._instanceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType.internalValue;
  }

  // tunnel_method - computed: false, optional: true, required: false
  private _tunnelMethod = new DestinationMongodbConfigurationTunnelMethodOutputReference(this, "tunnel_method");
  public get tunnelMethod() {
    return this._tunnelMethod;
  }
  public putTunnelMethod(value: DestinationMongodbConfigurationTunnelMethod) {
    this._tunnelMethod.internalValue = value;
  }
  public resetTunnelMethod() {
    this._tunnelMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelMethodInput() {
    return this._tunnelMethod.internalValue;
  }
}
export interface DestinationMongodbResourceAllocationDefault {
}

export function destinationMongodbResourceAllocationDefaultToTerraform(struct?: DestinationMongodbResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationMongodbResourceAllocationDefaultToHclTerraform(struct?: DestinationMongodbResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationMongodbResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMongodbResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMongodbResourceAllocationDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface DestinationMongodbResourceAllocationJobSpecificResourceRequirements {
}

export function destinationMongodbResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: DestinationMongodbResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationMongodbResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: DestinationMongodbResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationMongodbResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMongodbResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMongodbResourceAllocationJobSpecificResourceRequirements | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit - computed: true, optional: false, required: false
  public get cpuLimit() {
    return this.getStringAttribute('cpu_limit');
  }

  // cpu_request - computed: true, optional: false, required: false
  public get cpuRequest() {
    return this.getStringAttribute('cpu_request');
  }

  // ephemeral_storage_limit - computed: true, optional: false, required: false
  public get ephemeralStorageLimit() {
    return this.getStringAttribute('ephemeral_storage_limit');
  }

  // ephemeral_storage_request - computed: true, optional: false, required: false
  public get ephemeralStorageRequest() {
    return this.getStringAttribute('ephemeral_storage_request');
  }

  // memory_limit - computed: true, optional: false, required: false
  public get memoryLimit() {
    return this.getStringAttribute('memory_limit');
  }

  // memory_request - computed: true, optional: false, required: false
  public get memoryRequest() {
    return this.getStringAttribute('memory_request');
  }
}
export interface DestinationMongodbResourceAllocationJobSpecific {
}

export function destinationMongodbResourceAllocationJobSpecificToTerraform(struct?: DestinationMongodbResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationMongodbResourceAllocationJobSpecificToHclTerraform(struct?: DestinationMongodbResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationMongodbResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DestinationMongodbResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMongodbResourceAllocationJobSpecific | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // job_type - computed: true, optional: false, required: false
  public get jobType() {
    return this.getStringAttribute('job_type');
  }

  // resource_requirements - computed: true, optional: false, required: false
  private _resourceRequirements = new DestinationMongodbResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class DestinationMongodbResourceAllocationJobSpecificList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DestinationMongodbResourceAllocationJobSpecificOutputReference {
    return new DestinationMongodbResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DestinationMongodbResourceAllocation {
}

export function destinationMongodbResourceAllocationToTerraform(struct?: DestinationMongodbResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function destinationMongodbResourceAllocationToHclTerraform(struct?: DestinationMongodbResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DestinationMongodbResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DestinationMongodbResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DestinationMongodbResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new DestinationMongodbResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new DestinationMongodbResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb airbyte_destination_mongodb}
*/
export class DestinationMongodb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_destination_mongodb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DestinationMongodb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DestinationMongodb to import
  * @param importFromId The id of the existing DestinationMongodb that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DestinationMongodb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_destination_mongodb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/destination_mongodb airbyte_destination_mongodb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DestinationMongodbConfig
  */
  public constructor(scope: Construct, id: string, config: DestinationMongodbConfig) {
    super(scope, id, {
      terraformResourceType: 'airbyte_destination_mongodb',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration.internalValue = config.configuration;
    this._definitionId = config.definitionId;
    this._name = config.name;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new DestinationMongodbConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DestinationMongodbConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // definition_id - computed: true, optional: true, required: false
  private _definitionId?: string; 
  public get definitionId() {
    return this.getStringAttribute('definition_id');
  }
  public set definitionId(value: string) {
    this._definitionId = value;
  }
  public resetDefinitionId() {
    this._definitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionIdInput() {
    return this._definitionId;
  }

  // destination_id - computed: true, optional: false, required: false
  public get destinationId() {
    return this.getStringAttribute('destination_id');
  }

  // destination_type - computed: true, optional: false, required: false
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // resource_allocation - computed: true, optional: false, required: false
  private _resourceAllocation = new DestinationMongodbResourceAllocationOutputReference(this, "resource_allocation");
  public get resourceAllocation() {
    return this._resourceAllocation;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: destinationMongodbConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: destinationMongodbConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DestinationMongodbConfiguration",
      },
      definition_id: {
        value: cdktf.stringToHclTerraform(this._definitionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
