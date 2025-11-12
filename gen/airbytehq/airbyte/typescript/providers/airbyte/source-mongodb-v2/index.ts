// https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceMongodbV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#configuration SourceMongodbV2#configuration}
  */
  readonly configuration: SourceMongodbV2Configuration;
  /**
  * The UUID of the connector definition. One of configuration.sourceType or definitionId must be provided. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#definition_id SourceMongodbV2#definition_id}
  */
  readonly definitionId?: string;
  /**
  * Name of the source e.g. dev-mysql-instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#name SourceMongodbV2#name}
  */
  readonly name: string;
  /**
  * Optional secretID obtained through the public API OAuth redirect flow. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#secret_id SourceMongodbV2#secret_id}
  */
  readonly secretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#workspace_id SourceMongodbV2#workspace_id}
  */
  readonly workspaceId: string;
}
export interface SourceMongodbV2ConfigurationDatabaseConfigMongoDbAtlasReplicaSet {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#additional_properties SourceMongodbV2#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The authentication source where the user information is stored.  See https://www.mongodb.com/docs/manual/reference/connection-string/#mongodb-urioption-urioption.authSource for more details. Default: "admin"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#auth_source SourceMongodbV2#auth_source}
  */
  readonly authSource?: string;
  /**
  * The connection string of the cluster that you want to replicate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#connection_string SourceMongodbV2#connection_string}
  */
  readonly connectionString: string;
  /**
  * The names of the MongoDB databases that contain the collection(s) to replicate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#databases SourceMongodbV2#databases}
  */
  readonly databases: string[];
  /**
  * The password associated with this username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#password SourceMongodbV2#password}
  */
  readonly password: string;
  /**
  * When enabled, syncs will validate and structure records against the stream's schema. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#schema_enforced SourceMongodbV2#schema_enforced}
  */
  readonly schemaEnforced?: boolean | cdktf.IResolvable;
  /**
  * The username which is used to access the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#username SourceMongodbV2#username}
  */
  readonly username: string;
}

export function sourceMongodbV2ConfigurationDatabaseConfigMongoDbAtlasReplicaSetToTerraform(struct?: SourceMongodbV2ConfigurationDatabaseConfigMongoDbAtlasReplicaSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    auth_source: cdktf.stringToTerraform(struct!.authSource),
    connection_string: cdktf.stringToTerraform(struct!.connectionString),
    databases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.databases),
    password: cdktf.stringToTerraform(struct!.password),
    schema_enforced: cdktf.booleanToTerraform(struct!.schemaEnforced),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function sourceMongodbV2ConfigurationDatabaseConfigMongoDbAtlasReplicaSetToHclTerraform(struct?: SourceMongodbV2ConfigurationDatabaseConfigMongoDbAtlasReplicaSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_source: {
      value: cdktf.stringToHclTerraform(struct!.authSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_string: {
      value: cdktf.stringToHclTerraform(struct!.connectionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    databases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.databases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_enforced: {
      value: cdktf.booleanToHclTerraform(struct!.schemaEnforced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class SourceMongodbV2ConfigurationDatabaseConfigMongoDbAtlasReplicaSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMongodbV2ConfigurationDatabaseConfigMongoDbAtlasReplicaSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._authSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSource = this._authSource;
    }
    if (this._connectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString;
    }
    if (this._databases !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._schemaEnforced !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaEnforced = this._schemaEnforced;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMongodbV2ConfigurationDatabaseConfigMongoDbAtlasReplicaSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._authSource = undefined;
      this._connectionString = undefined;
      this._databases = undefined;
      this._password = undefined;
      this._schemaEnforced = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._authSource = value.authSource;
      this._connectionString = value.connectionString;
      this._databases = value.databases;
      this._password = value.password;
      this._schemaEnforced = value.schemaEnforced;
      this._username = value.username;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // auth_source - computed: true, optional: true, required: false
  private _authSource?: string; 
  public get authSource() {
    return this.getStringAttribute('auth_source');
  }
  public set authSource(value: string) {
    this._authSource = value;
  }
  public resetAuthSource() {
    this._authSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSourceInput() {
    return this._authSource;
  }

  // connection_string - computed: false, optional: false, required: true
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // databases - computed: false, optional: false, required: true
  private _databases?: string[]; 
  public get databases() {
    return this.getListAttribute('databases');
  }
  public set databases(value: string[]) {
    this._databases = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases;
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

  // schema_enforced - computed: true, optional: true, required: false
  private _schemaEnforced?: boolean | cdktf.IResolvable; 
  public get schemaEnforced() {
    return this.getBooleanAttribute('schema_enforced');
  }
  public set schemaEnforced(value: boolean | cdktf.IResolvable) {
    this._schemaEnforced = value;
  }
  public resetSchemaEnforced() {
    this._schemaEnforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaEnforcedInput() {
    return this._schemaEnforced;
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
export interface SourceMongodbV2ConfigurationDatabaseConfigSelfManagedReplicaSet {
  /**
  * Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#additional_properties SourceMongodbV2#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * The authentication source where the user information is stored. Default: "admin"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#auth_source SourceMongodbV2#auth_source}
  */
  readonly authSource?: string;
  /**
  * The connection string of the cluster that you want to replicate.  https://www.mongodb.com/docs/manual/reference/connection-string/#find-your-self-hosted-deployment-s-connection-string for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#connection_string SourceMongodbV2#connection_string}
  */
  readonly connectionString: string;
  /**
  * The names of the MongoDB databases that contain the collection(s) to replicate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#databases SourceMongodbV2#databases}
  */
  readonly databases: string[];
  /**
  * The password associated with this username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#password SourceMongodbV2#password}
  */
  readonly password?: string;
  /**
  * When enabled, syncs will validate and structure records against the stream's schema. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#schema_enforced SourceMongodbV2#schema_enforced}
  */
  readonly schemaEnforced?: boolean | cdktf.IResolvable;
  /**
  * The username which is used to access the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#username SourceMongodbV2#username}
  */
  readonly username?: string;
}

export function sourceMongodbV2ConfigurationDatabaseConfigSelfManagedReplicaSetToTerraform(struct?: SourceMongodbV2ConfigurationDatabaseConfigSelfManagedReplicaSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.stringToTerraform(struct!.additionalProperties),
    auth_source: cdktf.stringToTerraform(struct!.authSource),
    connection_string: cdktf.stringToTerraform(struct!.connectionString),
    databases: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.databases),
    password: cdktf.stringToTerraform(struct!.password),
    schema_enforced: cdktf.booleanToTerraform(struct!.schemaEnforced),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function sourceMongodbV2ConfigurationDatabaseConfigSelfManagedReplicaSetToHclTerraform(struct?: SourceMongodbV2ConfigurationDatabaseConfigSelfManagedReplicaSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_source: {
      value: cdktf.stringToHclTerraform(struct!.authSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_string: {
      value: cdktf.stringToHclTerraform(struct!.connectionString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    databases: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.databases),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_enforced: {
      value: cdktf.booleanToHclTerraform(struct!.schemaEnforced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class SourceMongodbV2ConfigurationDatabaseConfigSelfManagedReplicaSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMongodbV2ConfigurationDatabaseConfigSelfManagedReplicaSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._authSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSource = this._authSource;
    }
    if (this._connectionString !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionString = this._connectionString;
    }
    if (this._databases !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._schemaEnforced !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaEnforced = this._schemaEnforced;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMongodbV2ConfigurationDatabaseConfigSelfManagedReplicaSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._authSource = undefined;
      this._connectionString = undefined;
      this._databases = undefined;
      this._password = undefined;
      this._schemaEnforced = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._authSource = value.authSource;
      this._connectionString = value.connectionString;
      this._databases = value.databases;
      this._password = value.password;
      this._schemaEnforced = value.schemaEnforced;
      this._username = value.username;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // auth_source - computed: true, optional: true, required: false
  private _authSource?: string; 
  public get authSource() {
    return this.getStringAttribute('auth_source');
  }
  public set authSource(value: string) {
    this._authSource = value;
  }
  public resetAuthSource() {
    this._authSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSourceInput() {
    return this._authSource;
  }

  // connection_string - computed: false, optional: false, required: true
  private _connectionString?: string; 
  public get connectionString() {
    return this.getStringAttribute('connection_string');
  }
  public set connectionString(value: string) {
    this._connectionString = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionStringInput() {
    return this._connectionString;
  }

  // databases - computed: false, optional: false, required: true
  private _databases?: string[]; 
  public get databases() {
    return this.getListAttribute('databases');
  }
  public set databases(value: string[]) {
    this._databases = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases;
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

  // schema_enforced - computed: true, optional: true, required: false
  private _schemaEnforced?: boolean | cdktf.IResolvable; 
  public get schemaEnforced() {
    return this.getBooleanAttribute('schema_enforced');
  }
  public set schemaEnforced(value: boolean | cdktf.IResolvable) {
    this._schemaEnforced = value;
  }
  public resetSchemaEnforced() {
    this._schemaEnforced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaEnforcedInput() {
    return this._schemaEnforced;
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
export interface SourceMongodbV2ConfigurationDatabaseConfig {
  /**
  * MongoDB Atlas-hosted cluster configured as a replica set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#mongo_db_atlas_replica_set SourceMongodbV2#mongo_db_atlas_replica_set}
  */
  readonly mongoDbAtlasReplicaSet?: SourceMongodbV2ConfigurationDatabaseConfigMongoDbAtlasReplicaSet;
  /**
  * MongoDB self-hosted cluster configured as a replica set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#self_managed_replica_set SourceMongodbV2#self_managed_replica_set}
  */
  readonly selfManagedReplicaSet?: SourceMongodbV2ConfigurationDatabaseConfigSelfManagedReplicaSet;
}

export function sourceMongodbV2ConfigurationDatabaseConfigToTerraform(struct?: SourceMongodbV2ConfigurationDatabaseConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mongo_db_atlas_replica_set: sourceMongodbV2ConfigurationDatabaseConfigMongoDbAtlasReplicaSetToTerraform(struct!.mongoDbAtlasReplicaSet),
    self_managed_replica_set: sourceMongodbV2ConfigurationDatabaseConfigSelfManagedReplicaSetToTerraform(struct!.selfManagedReplicaSet),
  }
}


export function sourceMongodbV2ConfigurationDatabaseConfigToHclTerraform(struct?: SourceMongodbV2ConfigurationDatabaseConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mongo_db_atlas_replica_set: {
      value: sourceMongodbV2ConfigurationDatabaseConfigMongoDbAtlasReplicaSetToHclTerraform(struct!.mongoDbAtlasReplicaSet),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMongodbV2ConfigurationDatabaseConfigMongoDbAtlasReplicaSet",
    },
    self_managed_replica_set: {
      value: sourceMongodbV2ConfigurationDatabaseConfigSelfManagedReplicaSetToHclTerraform(struct!.selfManagedReplicaSet),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMongodbV2ConfigurationDatabaseConfigSelfManagedReplicaSet",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceMongodbV2ConfigurationDatabaseConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMongodbV2ConfigurationDatabaseConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mongoDbAtlasReplicaSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongoDbAtlasReplicaSet = this._mongoDbAtlasReplicaSet?.internalValue;
    }
    if (this._selfManagedReplicaSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfManagedReplicaSet = this._selfManagedReplicaSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMongodbV2ConfigurationDatabaseConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mongoDbAtlasReplicaSet.internalValue = undefined;
      this._selfManagedReplicaSet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mongoDbAtlasReplicaSet.internalValue = value.mongoDbAtlasReplicaSet;
      this._selfManagedReplicaSet.internalValue = value.selfManagedReplicaSet;
    }
  }

  // mongo_db_atlas_replica_set - computed: false, optional: true, required: false
  private _mongoDbAtlasReplicaSet = new SourceMongodbV2ConfigurationDatabaseConfigMongoDbAtlasReplicaSetOutputReference(this, "mongo_db_atlas_replica_set");
  public get mongoDbAtlasReplicaSet() {
    return this._mongoDbAtlasReplicaSet;
  }
  public putMongoDbAtlasReplicaSet(value: SourceMongodbV2ConfigurationDatabaseConfigMongoDbAtlasReplicaSet) {
    this._mongoDbAtlasReplicaSet.internalValue = value;
  }
  public resetMongoDbAtlasReplicaSet() {
    this._mongoDbAtlasReplicaSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongoDbAtlasReplicaSetInput() {
    return this._mongoDbAtlasReplicaSet.internalValue;
  }

  // self_managed_replica_set - computed: false, optional: true, required: false
  private _selfManagedReplicaSet = new SourceMongodbV2ConfigurationDatabaseConfigSelfManagedReplicaSetOutputReference(this, "self_managed_replica_set");
  public get selfManagedReplicaSet() {
    return this._selfManagedReplicaSet;
  }
  public putSelfManagedReplicaSet(value: SourceMongodbV2ConfigurationDatabaseConfigSelfManagedReplicaSet) {
    this._selfManagedReplicaSet.internalValue = value;
  }
  public resetSelfManagedReplicaSet() {
    this._selfManagedReplicaSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedReplicaSetInput() {
    return this._selfManagedReplicaSet.internalValue;
  }
}
export interface SourceMongodbV2Configuration {
  /**
  * Configures the MongoDB cluster type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#database_config SourceMongodbV2#database_config}
  */
  readonly databaseConfig: SourceMongodbV2ConfigurationDatabaseConfig;
  /**
  * The maximum number of documents to sample when attempting to discover the unique fields for a collection. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#discover_sample_size SourceMongodbV2#discover_sample_size}
  */
  readonly discoverSampleSize?: number;
  /**
  * The amount of time the connector will wait when it discovers a document. Defaults to 600 seconds. Valid range: 5 seconds to 1200 seconds. Default: 600
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#discover_timeout_seconds SourceMongodbV2#discover_timeout_seconds}
  */
  readonly discoverTimeoutSeconds?: number;
  /**
  * The amount of time an initial load is allowed to continue for before catching up on CDC logs. Default: 8
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#initial_load_timeout_hours SourceMongodbV2#initial_load_timeout_hours}
  */
  readonly initialLoadTimeoutHours?: number;
  /**
  * The amount of time the connector will wait when it launches to determine if there is new data to sync or not. Defaults to 300 seconds. Valid range: 120 seconds to 1200 seconds. Default: 300
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#initial_waiting_seconds SourceMongodbV2#initial_waiting_seconds}
  */
  readonly initialWaitingSeconds?: number;
  /**
  * Determines whether Airbyte should fail or re-sync data in case of an stale/invalid cursor value into the WAL. If 'Fail sync' is chosen, a user will have to manually reset the connection before being able to continue syncing data. If 'Re-sync data' is chosen, Airbyte will automatically trigger a refresh but could lead to higher cloud costs and data loss. Default: "Fail sync"; must be one of ["Fail sync", "Re-sync data"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#invalid_cdc_cursor_position_behavior SourceMongodbV2#invalid_cdc_cursor_position_behavior}
  */
  readonly invalidCdcCursorPositionBehavior?: string;
  /**
  * The size of the internal queue. This may interfere with memory consumption and efficiency of the connector, please be careful. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#queue_size SourceMongodbV2#queue_size}
  */
  readonly queueSize?: number;
  /**
  * Determines how Airbyte looks up the value of an updated document. If 'Lookup' is chosen, the current value of the document will be read. If 'Post Image' is chosen, then the version of the document immediately after an update will be read. WARNING : Severe data loss will occur if this option is chosen and the appropriate settings are not set on your Mongo instance : https://www.mongodb.com/docs/manual/changeStreams/#change-streams-with-document-pre-and-post-images. Default: "Lookup"; must be one of ["Lookup", "Post Image"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#update_capture_mode SourceMongodbV2#update_capture_mode}
  */
  readonly updateCaptureMode?: string;
}

export function sourceMongodbV2ConfigurationToTerraform(struct?: SourceMongodbV2Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_config: sourceMongodbV2ConfigurationDatabaseConfigToTerraform(struct!.databaseConfig),
    discover_sample_size: cdktf.numberToTerraform(struct!.discoverSampleSize),
    discover_timeout_seconds: cdktf.numberToTerraform(struct!.discoverTimeoutSeconds),
    initial_load_timeout_hours: cdktf.numberToTerraform(struct!.initialLoadTimeoutHours),
    initial_waiting_seconds: cdktf.numberToTerraform(struct!.initialWaitingSeconds),
    invalid_cdc_cursor_position_behavior: cdktf.stringToTerraform(struct!.invalidCdcCursorPositionBehavior),
    queue_size: cdktf.numberToTerraform(struct!.queueSize),
    update_capture_mode: cdktf.stringToTerraform(struct!.updateCaptureMode),
  }
}


export function sourceMongodbV2ConfigurationToHclTerraform(struct?: SourceMongodbV2Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_config: {
      value: sourceMongodbV2ConfigurationDatabaseConfigToHclTerraform(struct!.databaseConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SourceMongodbV2ConfigurationDatabaseConfig",
    },
    discover_sample_size: {
      value: cdktf.numberToHclTerraform(struct!.discoverSampleSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    discover_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.discoverTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_load_timeout_hours: {
      value: cdktf.numberToHclTerraform(struct!.initialLoadTimeoutHours),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_waiting_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialWaitingSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_cdc_cursor_position_behavior: {
      value: cdktf.stringToHclTerraform(struct!.invalidCdcCursorPositionBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queue_size: {
      value: cdktf.numberToHclTerraform(struct!.queueSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_capture_mode: {
      value: cdktf.stringToHclTerraform(struct!.updateCaptureMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SourceMongodbV2ConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMongodbV2Configuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseConfig = this._databaseConfig?.internalValue;
    }
    if (this._discoverSampleSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoverSampleSize = this._discoverSampleSize;
    }
    if (this._discoverTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoverTimeoutSeconds = this._discoverTimeoutSeconds;
    }
    if (this._initialLoadTimeoutHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialLoadTimeoutHours = this._initialLoadTimeoutHours;
    }
    if (this._initialWaitingSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialWaitingSeconds = this._initialWaitingSeconds;
    }
    if (this._invalidCdcCursorPositionBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidCdcCursorPositionBehavior = this._invalidCdcCursorPositionBehavior;
    }
    if (this._queueSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueSize = this._queueSize;
    }
    if (this._updateCaptureMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateCaptureMode = this._updateCaptureMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMongodbV2Configuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._databaseConfig.internalValue = undefined;
      this._discoverSampleSize = undefined;
      this._discoverTimeoutSeconds = undefined;
      this._initialLoadTimeoutHours = undefined;
      this._initialWaitingSeconds = undefined;
      this._invalidCdcCursorPositionBehavior = undefined;
      this._queueSize = undefined;
      this._updateCaptureMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._databaseConfig.internalValue = value.databaseConfig;
      this._discoverSampleSize = value.discoverSampleSize;
      this._discoverTimeoutSeconds = value.discoverTimeoutSeconds;
      this._initialLoadTimeoutHours = value.initialLoadTimeoutHours;
      this._initialWaitingSeconds = value.initialWaitingSeconds;
      this._invalidCdcCursorPositionBehavior = value.invalidCdcCursorPositionBehavior;
      this._queueSize = value.queueSize;
      this._updateCaptureMode = value.updateCaptureMode;
    }
  }

  // database_config - computed: false, optional: false, required: true
  private _databaseConfig = new SourceMongodbV2ConfigurationDatabaseConfigOutputReference(this, "database_config");
  public get databaseConfig() {
    return this._databaseConfig;
  }
  public putDatabaseConfig(value: SourceMongodbV2ConfigurationDatabaseConfig) {
    this._databaseConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseConfigInput() {
    return this._databaseConfig.internalValue;
  }

  // discover_sample_size - computed: true, optional: true, required: false
  private _discoverSampleSize?: number; 
  public get discoverSampleSize() {
    return this.getNumberAttribute('discover_sample_size');
  }
  public set discoverSampleSize(value: number) {
    this._discoverSampleSize = value;
  }
  public resetDiscoverSampleSize() {
    this._discoverSampleSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverSampleSizeInput() {
    return this._discoverSampleSize;
  }

  // discover_timeout_seconds - computed: true, optional: true, required: false
  private _discoverTimeoutSeconds?: number; 
  public get discoverTimeoutSeconds() {
    return this.getNumberAttribute('discover_timeout_seconds');
  }
  public set discoverTimeoutSeconds(value: number) {
    this._discoverTimeoutSeconds = value;
  }
  public resetDiscoverTimeoutSeconds() {
    this._discoverTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverTimeoutSecondsInput() {
    return this._discoverTimeoutSeconds;
  }

  // initial_load_timeout_hours - computed: true, optional: true, required: false
  private _initialLoadTimeoutHours?: number; 
  public get initialLoadTimeoutHours() {
    return this.getNumberAttribute('initial_load_timeout_hours');
  }
  public set initialLoadTimeoutHours(value: number) {
    this._initialLoadTimeoutHours = value;
  }
  public resetInitialLoadTimeoutHours() {
    this._initialLoadTimeoutHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialLoadTimeoutHoursInput() {
    return this._initialLoadTimeoutHours;
  }

  // initial_waiting_seconds - computed: true, optional: true, required: false
  private _initialWaitingSeconds?: number; 
  public get initialWaitingSeconds() {
    return this.getNumberAttribute('initial_waiting_seconds');
  }
  public set initialWaitingSeconds(value: number) {
    this._initialWaitingSeconds = value;
  }
  public resetInitialWaitingSeconds() {
    this._initialWaitingSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialWaitingSecondsInput() {
    return this._initialWaitingSeconds;
  }

  // invalid_cdc_cursor_position_behavior - computed: true, optional: true, required: false
  private _invalidCdcCursorPositionBehavior?: string; 
  public get invalidCdcCursorPositionBehavior() {
    return this.getStringAttribute('invalid_cdc_cursor_position_behavior');
  }
  public set invalidCdcCursorPositionBehavior(value: string) {
    this._invalidCdcCursorPositionBehavior = value;
  }
  public resetInvalidCdcCursorPositionBehavior() {
    this._invalidCdcCursorPositionBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidCdcCursorPositionBehaviorInput() {
    return this._invalidCdcCursorPositionBehavior;
  }

  // queue_size - computed: true, optional: true, required: false
  private _queueSize?: number; 
  public get queueSize() {
    return this.getNumberAttribute('queue_size');
  }
  public set queueSize(value: number) {
    this._queueSize = value;
  }
  public resetQueueSize() {
    this._queueSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueSizeInput() {
    return this._queueSize;
  }

  // update_capture_mode - computed: true, optional: true, required: false
  private _updateCaptureMode?: string; 
  public get updateCaptureMode() {
    return this.getStringAttribute('update_capture_mode');
  }
  public set updateCaptureMode(value: string) {
    this._updateCaptureMode = value;
  }
  public resetUpdateCaptureMode() {
    this._updateCaptureMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateCaptureModeInput() {
    return this._updateCaptureMode;
  }
}
export interface SourceMongodbV2ResourceAllocationDefault {
}

export function sourceMongodbV2ResourceAllocationDefaultToTerraform(struct?: SourceMongodbV2ResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMongodbV2ResourceAllocationDefaultToHclTerraform(struct?: SourceMongodbV2ResourceAllocationDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMongodbV2ResourceAllocationDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMongodbV2ResourceAllocationDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMongodbV2ResourceAllocationDefault | undefined) {
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
export interface SourceMongodbV2ResourceAllocationJobSpecificResourceRequirements {
}

export function sourceMongodbV2ResourceAllocationJobSpecificResourceRequirementsToTerraform(struct?: SourceMongodbV2ResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMongodbV2ResourceAllocationJobSpecificResourceRequirementsToHclTerraform(struct?: SourceMongodbV2ResourceAllocationJobSpecificResourceRequirements): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMongodbV2ResourceAllocationJobSpecificResourceRequirementsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMongodbV2ResourceAllocationJobSpecificResourceRequirements | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMongodbV2ResourceAllocationJobSpecificResourceRequirements | undefined) {
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
export interface SourceMongodbV2ResourceAllocationJobSpecific {
}

export function sourceMongodbV2ResourceAllocationJobSpecificToTerraform(struct?: SourceMongodbV2ResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMongodbV2ResourceAllocationJobSpecificToHclTerraform(struct?: SourceMongodbV2ResourceAllocationJobSpecific): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMongodbV2ResourceAllocationJobSpecificOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SourceMongodbV2ResourceAllocationJobSpecific | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMongodbV2ResourceAllocationJobSpecific | undefined) {
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
  private _resourceRequirements = new SourceMongodbV2ResourceAllocationJobSpecificResourceRequirementsOutputReference(this, "resource_requirements");
  public get resourceRequirements() {
    return this._resourceRequirements;
  }
}

export class SourceMongodbV2ResourceAllocationJobSpecificList extends cdktf.ComplexList {

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
  public get(index: number): SourceMongodbV2ResourceAllocationJobSpecificOutputReference {
    return new SourceMongodbV2ResourceAllocationJobSpecificOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SourceMongodbV2ResourceAllocation {
}

export function sourceMongodbV2ResourceAllocationToTerraform(struct?: SourceMongodbV2ResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function sourceMongodbV2ResourceAllocationToHclTerraform(struct?: SourceMongodbV2ResourceAllocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SourceMongodbV2ResourceAllocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SourceMongodbV2ResourceAllocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SourceMongodbV2ResourceAllocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new SourceMongodbV2ResourceAllocationDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // job_specific - computed: true, optional: false, required: false
  private _jobSpecific = new SourceMongodbV2ResourceAllocationJobSpecificList(this, "job_specific", false);
  public get jobSpecific() {
    return this._jobSpecific;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2 airbyte_source_mongodb_v2}
*/
export class SourceMongodbV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "airbyte_source_mongodb_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceMongodbV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceMongodbV2 to import
  * @param importFromId The id of the existing SourceMongodbV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceMongodbV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "airbyte_source_mongodb_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/airbytehq/airbyte/0.13.0/docs/resources/source_mongodb_v2 airbyte_source_mongodb_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceMongodbV2Config
  */
  public constructor(scope: Construct, id: string, config: SourceMongodbV2Config) {
    super(scope, id, {
      terraformResourceType: 'airbyte_source_mongodb_v2',
      terraformGeneratorMetadata: {
        providerName: 'airbyte',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
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
    this._secretId = config.secretId;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new SourceMongodbV2ConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SourceMongodbV2Configuration) {
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
  private _resourceAllocation = new SourceMongodbV2ResourceAllocationOutputReference(this, "resource_allocation");
  public get resourceAllocation() {
    return this._resourceAllocation;
  }

  // secret_id - computed: false, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // source_id - computed: true, optional: false, required: false
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
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
      configuration: sourceMongodbV2ConfigurationToTerraform(this._configuration.internalValue),
      definition_id: cdktf.stringToTerraform(this._definitionId),
      name: cdktf.stringToTerraform(this._name),
      secret_id: cdktf.stringToTerraform(this._secretId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: sourceMongodbV2ConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SourceMongodbV2Configuration",
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
      secret_id: {
        value: cdktf.stringToHclTerraform(this._secretId),
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
