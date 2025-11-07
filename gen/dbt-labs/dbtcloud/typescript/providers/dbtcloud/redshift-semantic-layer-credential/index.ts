// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/redshift_semantic_layer_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedshiftSemanticLayerCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Semantic Layer credential configuration details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/redshift_semantic_layer_credential#configuration RedshiftSemanticLayerCredential#configuration}
  */
  readonly configuration: RedshiftSemanticLayerCredentialConfiguration;
  /**
  * Redshift credential details, but used in the context of the Semantic Layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/redshift_semantic_layer_credential#credential RedshiftSemanticLayerCredential#credential}
  */
  readonly credential: RedshiftSemanticLayerCredentialCredential;
}
export interface RedshiftSemanticLayerCredentialConfiguration {
  /**
  * The adapter version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/redshift_semantic_layer_credential#adapter_version RedshiftSemanticLayerCredential#adapter_version}
  */
  readonly adapterVersion: string;
  /**
  * The name of the configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/redshift_semantic_layer_credential#name RedshiftSemanticLayerCredential#name}
  */
  readonly name: string;
  /**
  * The ID of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/redshift_semantic_layer_credential#project_id RedshiftSemanticLayerCredential#project_id}
  */
  readonly projectId: number;
}

export function redshiftSemanticLayerCredentialConfigurationToTerraform(struct?: RedshiftSemanticLayerCredentialConfiguration | cdktf.IResolvable): any {
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


export function redshiftSemanticLayerCredentialConfigurationToHclTerraform(struct?: RedshiftSemanticLayerCredentialConfiguration | cdktf.IResolvable): any {
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

export class RedshiftSemanticLayerCredentialConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RedshiftSemanticLayerCredentialConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RedshiftSemanticLayerCredentialConfiguration | cdktf.IResolvable | undefined) {
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
export interface RedshiftSemanticLayerCredentialCredential {
  /**
  * Default schema name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/redshift_semantic_layer_credential#default_schema RedshiftSemanticLayerCredential#default_schema}
  */
  readonly defaultSchema: string;
  /**
  * Whether the Redshift credential is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/redshift_semantic_layer_credential#is_active RedshiftSemanticLayerCredential#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Number of threads to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/redshift_semantic_layer_credential#num_threads RedshiftSemanticLayerCredential#num_threads}
  */
  readonly numThreads: number;
  /**
  * The password for the Redshift account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/redshift_semantic_layer_credential#password RedshiftSemanticLayerCredential#password}
  */
  readonly password?: string;
  /**
  * Project ID to create the Redshift credential in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/redshift_semantic_layer_credential#project_id RedshiftSemanticLayerCredential#project_id}
  */
  readonly projectId: number;
  /**
  * The username for the Redshift account. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/redshift_semantic_layer_credential#username RedshiftSemanticLayerCredential#username}
  */
  readonly username?: string;
}

export function redshiftSemanticLayerCredentialCredentialToTerraform(struct?: RedshiftSemanticLayerCredentialCredential | cdktf.IResolvable): any {
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
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function redshiftSemanticLayerCredentialCredentialToHclTerraform(struct?: RedshiftSemanticLayerCredentialCredential | cdktf.IResolvable): any {
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

export class RedshiftSemanticLayerCredentialCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RedshiftSemanticLayerCredentialCredential | cdktf.IResolvable | undefined {
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
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedshiftSemanticLayerCredentialCredential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultSchema = undefined;
      this._isActive = undefined;
      this._numThreads = undefined;
      this._password = undefined;
      this._projectId = undefined;
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
      this._username = value.username;
    }
  }

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getNumberAttribute('credential_id');
  }

  // default_schema - computed: false, optional: false, required: true
  private _defaultSchema?: string; 
  public get defaultSchema() {
    return this.getStringAttribute('default_schema');
  }
  public set defaultSchema(value: string) {
    this._defaultSchema = value;
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

  // username - computed: true, optional: true, required: false
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

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/redshift_semantic_layer_credential dbtcloud_redshift_semantic_layer_credential}
*/
export class RedshiftSemanticLayerCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_redshift_semantic_layer_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedshiftSemanticLayerCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedshiftSemanticLayerCredential to import
  * @param importFromId The id of the existing RedshiftSemanticLayerCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/redshift_semantic_layer_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedshiftSemanticLayerCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_redshift_semantic_layer_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/redshift_semantic_layer_credential dbtcloud_redshift_semantic_layer_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedshiftSemanticLayerCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: RedshiftSemanticLayerCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_redshift_semantic_layer_credential',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.3.0'
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
  private _configuration = new RedshiftSemanticLayerCredentialConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: RedshiftSemanticLayerCredentialConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // credential - computed: false, optional: false, required: true
  private _credential = new RedshiftSemanticLayerCredentialCredentialOutputReference(this, "credential");
  public get credential() {
    return this._credential;
  }
  public putCredential(value: RedshiftSemanticLayerCredentialCredential) {
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
      configuration: redshiftSemanticLayerCredentialConfigurationToTerraform(this._configuration.internalValue),
      credential: redshiftSemanticLayerCredentialCredentialToTerraform(this._credential.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: redshiftSemanticLayerCredentialConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RedshiftSemanticLayerCredentialConfiguration",
      },
      credential: {
        value: redshiftSemanticLayerCredentialCredentialToHclTerraform(this._credential.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RedshiftSemanticLayerCredentialCredential",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
