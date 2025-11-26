// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/postgres_semantic_layer_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresSemanticLayerCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Semantic Layer credential configuration details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/postgres_semantic_layer_credential#configuration PostgresSemanticLayerCredential#configuration}
  */
  readonly configuration: PostgresSemanticLayerCredentialConfiguration;
  /**
  * Postgres credential details, but used in the context of the Semantic Layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/postgres_semantic_layer_credential#credential PostgresSemanticLayerCredential#credential}
  */
  readonly credential: PostgresSemanticLayerCredentialCredential;
}
export interface PostgresSemanticLayerCredentialConfiguration {
  /**
  * The adapter version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/postgres_semantic_layer_credential#adapter_version PostgresSemanticLayerCredential#adapter_version}
  */
  readonly adapterVersion: string;
  /**
  * The name of the configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/postgres_semantic_layer_credential#name PostgresSemanticLayerCredential#name}
  */
  readonly name: string;
  /**
  * The ID of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/postgres_semantic_layer_credential#project_id PostgresSemanticLayerCredential#project_id}
  */
  readonly projectId: number;
}

export function postgresSemanticLayerCredentialConfigurationToTerraform(struct?: PostgresSemanticLayerCredentialConfiguration | cdktf.IResolvable): any {
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


export function postgresSemanticLayerCredentialConfigurationToHclTerraform(struct?: PostgresSemanticLayerCredentialConfiguration | cdktf.IResolvable): any {
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

export class PostgresSemanticLayerCredentialConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PostgresSemanticLayerCredentialConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PostgresSemanticLayerCredentialConfiguration | cdktf.IResolvable | undefined) {
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
export interface PostgresSemanticLayerCredentialCredential {
  /**
  * Default schema name. Optional only when semantic_layer_credential is set to true; otherwise, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/postgres_semantic_layer_credential#default_schema PostgresSemanticLayerCredential#default_schema}
  */
  readonly defaultSchema?: string;
  /**
  * Whether the Postgres/Redshift/AlloyDB credential is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/postgres_semantic_layer_credential#is_active PostgresSemanticLayerCredential#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Number of threads to use (required for Redshift)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/postgres_semantic_layer_credential#num_threads PostgresSemanticLayerCredential#num_threads}
  */
  readonly numThreads?: number;
  /**
  * Password for Postgres/Redshift/AlloyDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/postgres_semantic_layer_credential#password PostgresSemanticLayerCredential#password}
  */
  readonly password?: string;
  /**
  * Project ID to create the Postgres/Redshift/AlloyDB credential in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/postgres_semantic_layer_credential#project_id PostgresSemanticLayerCredential#project_id}
  */
  readonly projectId: number;
  /**
  * This field indicates that the credential is used as part of the Semantic Layer configuration. It is used to create a Postgres credential for the Semantic Layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/postgres_semantic_layer_credential#semantic_layer_credential PostgresSemanticLayerCredential#semantic_layer_credential}
  */
  readonly semanticLayerCredential?: boolean | cdktf.IResolvable;
  /**
  * Default schema name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/postgres_semantic_layer_credential#target_name PostgresSemanticLayerCredential#target_name}
  */
  readonly targetName?: string;
  /**
  * Type of connection. One of (postgres/redshift). Use postgres for alloydb connections. Optional only when semantic_layer_credential is set to true; otherwise, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/postgres_semantic_layer_credential#type PostgresSemanticLayerCredential#type}
  */
  readonly type?: string;
  /**
  * Username for Postgres/Redshift/AlloyDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/postgres_semantic_layer_credential#username PostgresSemanticLayerCredential#username}
  */
  readonly username: string;
}

export function postgresSemanticLayerCredentialCredentialToTerraform(struct?: PostgresSemanticLayerCredentialCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_schema: cdktf.stringToTerraform(struct!.defaultSchema),
    is_active: cdktf.booleanToTerraform(struct!.isActive),
    num_threads: cdktf.numberToTerraform(struct!.numThreads),
    password: cdktf.stringToTerraform(struct!.password),
    project_id: cdktf.numberToTerraform(struct!.projectId),
    semantic_layer_credential: cdktf.booleanToTerraform(struct!.semanticLayerCredential),
    target_name: cdktf.stringToTerraform(struct!.targetName),
    type: cdktf.stringToTerraform(struct!.type),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function postgresSemanticLayerCredentialCredentialToHclTerraform(struct?: PostgresSemanticLayerCredentialCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_schema: {
      value: cdktf.stringToHclTerraform(struct!.defaultSchema),
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
    project_id: {
      value: cdktf.numberToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    semantic_layer_credential: {
      value: cdktf.booleanToHclTerraform(struct!.semanticLayerCredential),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_name: {
      value: cdktf.stringToHclTerraform(struct!.targetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class PostgresSemanticLayerCredentialCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PostgresSemanticLayerCredentialCredential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSchema = this._defaultSchema;
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
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._semanticLayerCredential !== undefined) {
      hasAnyValues = true;
      internalValueResult.semanticLayerCredential = this._semanticLayerCredential;
    }
    if (this._targetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetName = this._targetName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresSemanticLayerCredentialCredential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultSchema = undefined;
      this._isActive = undefined;
      this._numThreads = undefined;
      this._password = undefined;
      this._projectId = undefined;
      this._semanticLayerCredential = undefined;
      this._targetName = undefined;
      this._type = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultSchema = value.defaultSchema;
      this._isActive = value.isActive;
      this._numThreads = value.numThreads;
      this._password = value.password;
      this._projectId = value.projectId;
      this._semanticLayerCredential = value.semanticLayerCredential;
      this._targetName = value.targetName;
      this._type = value.type;
      this._username = value.username;
    }
  }

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getNumberAttribute('credential_id');
  }

  // default_schema - computed: true, optional: true, required: false
  private _defaultSchema?: string; 
  public get defaultSchema() {
    return this.getStringAttribute('default_schema');
  }
  public set defaultSchema(value: string) {
    this._defaultSchema = value;
  }
  public resetDefaultSchema() {
    this._defaultSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSchemaInput() {
    return this._defaultSchema;
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

  // num_threads - computed: true, optional: true, required: false
  private _numThreads?: number; 
  public get numThreads() {
    return this.getNumberAttribute('num_threads');
  }
  public set numThreads(value: number) {
    this._numThreads = value;
  }
  public resetNumThreads() {
    this._numThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numThreadsInput() {
    return this._numThreads;
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

  // target_name - computed: true, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/postgres_semantic_layer_credential dbtcloud_postgres_semantic_layer_credential}
*/
export class PostgresSemanticLayerCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_postgres_semantic_layer_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostgresSemanticLayerCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresSemanticLayerCredential to import
  * @param importFromId The id of the existing PostgresSemanticLayerCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/postgres_semantic_layer_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresSemanticLayerCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_postgres_semantic_layer_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.2/docs/resources/postgres_semantic_layer_credential dbtcloud_postgres_semantic_layer_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresSemanticLayerCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresSemanticLayerCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_postgres_semantic_layer_credential',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
  private _configuration = new PostgresSemanticLayerCredentialConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: PostgresSemanticLayerCredentialConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // credential - computed: false, optional: false, required: true
  private _credential = new PostgresSemanticLayerCredentialCredentialOutputReference(this, "credential");
  public get credential() {
    return this._credential;
  }
  public putCredential(value: PostgresSemanticLayerCredentialCredential) {
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
      configuration: postgresSemanticLayerCredentialConfigurationToTerraform(this._configuration.internalValue),
      credential: postgresSemanticLayerCredentialCredentialToTerraform(this._credential.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: postgresSemanticLayerCredentialConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PostgresSemanticLayerCredentialConfiguration",
      },
      credential: {
        value: postgresSemanticLayerCredentialCredentialToHclTerraform(this._credential.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PostgresSemanticLayerCredentialCredential",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
