// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/snowflake_semantic_layer_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnowflakeSemanticLayerCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Semantic Layer credenttial configuration details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/snowflake_semantic_layer_credential#configuration SnowflakeSemanticLayerCredential#configuration}
  */
  readonly configuration: SnowflakeSemanticLayerCredentialConfiguration;
  /**
  * Snowflake credential details, but used in the context of the Semantic Layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/snowflake_semantic_layer_credential#credential SnowflakeSemanticLayerCredential#credential}
  */
  readonly credential: SnowflakeSemanticLayerCredentialCredential;
}
export interface SnowflakeSemanticLayerCredentialConfiguration {
  /**
  * The adapter version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/snowflake_semantic_layer_credential#adapter_version SnowflakeSemanticLayerCredential#adapter_version}
  */
  readonly adapterVersion: string;
  /**
  * The name of the configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/snowflake_semantic_layer_credential#name SnowflakeSemanticLayerCredential#name}
  */
  readonly name: string;
  /**
  * The ID of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/snowflake_semantic_layer_credential#project_id SnowflakeSemanticLayerCredential#project_id}
  */
  readonly projectId: number;
}

export function snowflakeSemanticLayerCredentialConfigurationToTerraform(struct?: SnowflakeSemanticLayerCredentialConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adapter_version: cdktf.stringToTerraform(struct!.adapterVersion),
    name: cdktf.stringToTerraform(struct!.name),
    project_id: cdktf.numberToTerraform(struct!.projectId),
  }
}


export function snowflakeSemanticLayerCredentialConfigurationToHclTerraform(struct?: SnowflakeSemanticLayerCredentialConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adapter_version: {
      value: cdktf.stringToHclTerraform(struct!.adapterVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.numberToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnowflakeSemanticLayerCredentialConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnowflakeSemanticLayerCredentialConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adapterVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.adapterVersion = this._adapterVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnowflakeSemanticLayerCredentialConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adapterVersion = undefined;
      this._name = undefined;
      this._projectId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adapterVersion = value.adapterVersion;
      this._name = value.name;
      this._projectId = value.projectId;
    }
  }

  // adapter_version - computed: false, optional: false, required: true
  private _adapterVersion?: string; 
  public get adapterVersion() {
    return this.getStringAttribute('adapter_version');
  }
  public set adapterVersion(value: string) {
    this._adapterVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adapterVersionInput() {
    return this._adapterVersion;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface SnowflakeSemanticLayerCredentialCredential {
  /**
  * The type of Snowflake credential ('password' or 'keypair')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/snowflake_semantic_layer_credential#auth_type SnowflakeSemanticLayerCredential#auth_type}
  */
  readonly authType: string;
  /**
  * The catalog to connect use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/snowflake_semantic_layer_credential#database SnowflakeSemanticLayerCredential#database}
  */
  readonly database?: string;
  /**
  * Whether the Snowflake credential is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/snowflake_semantic_layer_credential#is_active SnowflakeSemanticLayerCredential#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Number of threads to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/snowflake_semantic_layer_credential#num_threads SnowflakeSemanticLayerCredential#num_threads}
  */
  readonly numThreads: number;
  /**
  * The password for the Snowflake account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/snowflake_semantic_layer_credential#password SnowflakeSemanticLayerCredential#password}
  */
  readonly password?: string;
  /**
  * The private key for the Snowflake account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/snowflake_semantic_layer_credential#private_key SnowflakeSemanticLayerCredential#private_key}
  */
  readonly privateKey?: string;
  /**
  * The passphrase for the private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/snowflake_semantic_layer_credential#private_key_passphrase SnowflakeSemanticLayerCredential#private_key_passphrase}
  */
  readonly privateKeyPassphrase?: string;
  /**
  * Project ID to create the Snowflake credential in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/snowflake_semantic_layer_credential#project_id SnowflakeSemanticLayerCredential#project_id}
  */
  readonly projectId: number;
  /**
  * The role to assume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/snowflake_semantic_layer_credential#role SnowflakeSemanticLayerCredential#role}
  */
  readonly role?: string;
  /**
  * The schema where to create models. This is an optional field ONLY if the credential is used for Semantic Layer configuration, otherwise it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/snowflake_semantic_layer_credential#schema SnowflakeSemanticLayerCredential#schema}
  */
  readonly schema?: string;
  /**
  * This field indicates that the credential is used as part of the Semantic Layer configuration. It is used to create a Snowflake credential for the Semantic Layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/snowflake_semantic_layer_credential#semantic_layer_credential SnowflakeSemanticLayerCredential#semantic_layer_credential}
  */
  readonly semanticLayerCredential?: boolean | cdktf.IResolvable;
  /**
  * The username for the Snowflake account. This is an optional field ONLY if the credential is used for Semantic Layer configuration, otherwise it is required. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/snowflake_semantic_layer_credential#user SnowflakeSemanticLayerCredential#user}
  */
  readonly user?: string;
  /**
  * The warehouse to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/snowflake_semantic_layer_credential#warehouse SnowflakeSemanticLayerCredential#warehouse}
  */
  readonly warehouse?: string;
}

export function snowflakeSemanticLayerCredentialCredentialToTerraform(struct?: SnowflakeSemanticLayerCredentialCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    database: cdktf.stringToTerraform(struct!.database),
    is_active: cdktf.booleanToTerraform(struct!.isActive),
    num_threads: cdktf.numberToTerraform(struct!.numThreads),
    password: cdktf.stringToTerraform(struct!.password),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    private_key_passphrase: cdktf.stringToTerraform(struct!.privateKeyPassphrase),
    project_id: cdktf.numberToTerraform(struct!.projectId),
    role: cdktf.stringToTerraform(struct!.role),
    schema: cdktf.stringToTerraform(struct!.schema),
    semantic_layer_credential: cdktf.booleanToTerraform(struct!.semanticLayerCredential),
    user: cdktf.stringToTerraform(struct!.user),
    warehouse: cdktf.stringToTerraform(struct!.warehouse),
  }
}


export function snowflakeSemanticLayerCredentialCredentialToHclTerraform(struct?: SnowflakeSemanticLayerCredentialCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_active: {
      value: cdktf.booleanToHclTerraform(struct!.isActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    num_threads: {
      value: cdktf.numberToHclTerraform(struct!.numThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_passphrase: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyPassphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.numberToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    semantic_layer_credential: {
      value: cdktf.booleanToHclTerraform(struct!.semanticLayerCredential),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warehouse: {
      value: cdktf.stringToHclTerraform(struct!.warehouse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SnowflakeSemanticLayerCredentialCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SnowflakeSemanticLayerCredentialCredential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._isActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isActive = this._isActive;
    }
    if (this._numThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.numThreads = this._numThreads;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._privateKeyPassphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPassphrase = this._privateKeyPassphrase;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._semanticLayerCredential !== undefined) {
      hasAnyValues = true;
      internalValueResult.semanticLayerCredential = this._semanticLayerCredential;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._warehouse !== undefined) {
      hasAnyValues = true;
      internalValueResult.warehouse = this._warehouse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SnowflakeSemanticLayerCredentialCredential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._database = undefined;
      this._isActive = undefined;
      this._numThreads = undefined;
      this._password = undefined;
      this._privateKey = undefined;
      this._privateKeyPassphrase = undefined;
      this._projectId = undefined;
      this._role = undefined;
      this._schema = undefined;
      this._semanticLayerCredential = undefined;
      this._user = undefined;
      this._warehouse = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._database = value.database;
      this._isActive = value.isActive;
      this._numThreads = value.numThreads;
      this._password = value.password;
      this._privateKey = value.privateKey;
      this._privateKeyPassphrase = value.privateKeyPassphrase;
      this._projectId = value.projectId;
      this._role = value.role;
      this._schema = value.schema;
      this._semanticLayerCredential = value.semanticLayerCredential;
      this._user = value.user;
      this._warehouse = value.warehouse;
    }
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getNumberAttribute('credential_id');
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // num_threads - computed: false, optional: false, required: true
  private _numThreads?: number; 
  public get numThreads() {
    return this.getNumberAttribute('num_threads');
  }
  public set numThreads(value: number) {
    this._numThreads = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numThreadsInput() {
    return this._numThreads;
  }

  // password - computed: true, optional: true, required: false
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

  // private_key - computed: true, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_passphrase - computed: true, optional: true, required: false
  private _privateKeyPassphrase?: string; 
  public get privateKeyPassphrase() {
    return this.getStringAttribute('private_key_passphrase');
  }
  public set privateKeyPassphrase(value: string) {
    this._privateKeyPassphrase = value;
  }
  public resetPrivateKeyPassphrase() {
    this._privateKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPassphraseInput() {
    return this._privateKeyPassphrase;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // role - computed: false, optional: true, required: false
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

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // semantic_layer_credential - computed: true, optional: true, required: false
  private _semanticLayerCredential?: boolean | cdktf.IResolvable; 
  public get semanticLayerCredential() {
    return this.getBooleanAttribute('semantic_layer_credential');
  }
  public set semanticLayerCredential(value: boolean | cdktf.IResolvable) {
    this._semanticLayerCredential = value;
  }
  public resetSemanticLayerCredential() {
    this._semanticLayerCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticLayerCredentialInput() {
    return this._semanticLayerCredential;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // warehouse - computed: false, optional: true, required: false
  private _warehouse?: string; 
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
  public set warehouse(value: string) {
    this._warehouse = value;
  }
  public resetWarehouse() {
    this._warehouse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseInput() {
    return this._warehouse;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/snowflake_semantic_layer_credential dbtcloud_snowflake_semantic_layer_credential}
*/
export class SnowflakeSemanticLayerCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_snowflake_semantic_layer_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnowflakeSemanticLayerCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnowflakeSemanticLayerCredential to import
  * @param importFromId The id of the existing SnowflakeSemanticLayerCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/snowflake_semantic_layer_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnowflakeSemanticLayerCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_snowflake_semantic_layer_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/snowflake_semantic_layer_credential dbtcloud_snowflake_semantic_layer_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnowflakeSemanticLayerCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: SnowflakeSemanticLayerCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_snowflake_semantic_layer_credential',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._credential.internalValue = config.credential;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: false, required: true
  private _configuration = new SnowflakeSemanticLayerCredentialConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: SnowflakeSemanticLayerCredentialConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // credential - computed: false, optional: false, required: true
  private _credential = new SnowflakeSemanticLayerCredentialCredentialOutputReference(this, "credential");
  public get credential() {
    return this._credential;
  }
  public putCredential(value: SnowflakeSemanticLayerCredentialCredential) {
    this._credential.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: snowflakeSemanticLayerCredentialConfigurationToTerraform(this._configuration.internalValue),
      credential: snowflakeSemanticLayerCredentialCredentialToTerraform(this._credential.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: snowflakeSemanticLayerCredentialConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SnowflakeSemanticLayerCredentialConfiguration",
      },
      credential: {
        value: snowflakeSemanticLayerCredentialCredentialToHclTerraform(this._credential.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SnowflakeSemanticLayerCredentialCredential",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
