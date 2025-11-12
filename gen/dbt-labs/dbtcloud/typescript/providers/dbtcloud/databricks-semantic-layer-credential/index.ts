// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/databricks_semantic_layer_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabricksSemanticLayerCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Semantic Layer credential configuration details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/databricks_semantic_layer_credential#configuration DatabricksSemanticLayerCredential#configuration}
  */
  readonly configuration: DatabricksSemanticLayerCredentialConfiguration;
  /**
  * Databricks credential details, but used in the context of the Semantic Layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/databricks_semantic_layer_credential#credential DatabricksSemanticLayerCredential#credential}
  */
  readonly credential: DatabricksSemanticLayerCredentialCredential;
}
export interface DatabricksSemanticLayerCredentialConfiguration {
  /**
  * The adapter version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/databricks_semantic_layer_credential#adapter_version DatabricksSemanticLayerCredential#adapter_version}
  */
  readonly adapterVersion: string;
  /**
  * The name of the configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/databricks_semantic_layer_credential#name DatabricksSemanticLayerCredential#name}
  */
  readonly name: string;
  /**
  * The ID of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/databricks_semantic_layer_credential#project_id DatabricksSemanticLayerCredential#project_id}
  */
  readonly projectId: number;
}

export function databricksSemanticLayerCredentialConfigurationToTerraform(struct?: DatabricksSemanticLayerCredentialConfiguration | cdktf.IResolvable): any {
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


export function databricksSemanticLayerCredentialConfigurationToHclTerraform(struct?: DatabricksSemanticLayerCredentialConfiguration | cdktf.IResolvable): any {
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

export class DatabricksSemanticLayerCredentialConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabricksSemanticLayerCredentialConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatabricksSemanticLayerCredentialConfiguration | cdktf.IResolvable | undefined) {
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
export interface DatabricksSemanticLayerCredentialCredential {
  /**
  * The type of the adapter (databricks or spark). Optional only when semantic_layer_credential is set to true; otherwise, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/databricks_semantic_layer_credential#adapter_type DatabricksSemanticLayerCredential#adapter_type}
  */
  readonly adapterType?: string;
  /**
  * The catalog where to create models (only for the databricks adapter)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/databricks_semantic_layer_credential#catalog DatabricksSemanticLayerCredential#catalog}
  */
  readonly catalog?: string;
  /**
  * Project ID to create the Databricks credential in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/databricks_semantic_layer_credential#project_id DatabricksSemanticLayerCredential#project_id}
  */
  readonly projectId: number;
  /**
  * The schema where to create models. Optional only when semantic_layer_credential is set to true; otherwise, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/databricks_semantic_layer_credential#schema DatabricksSemanticLayerCredential#schema}
  */
  readonly schema?: string;
  /**
  * This field indicates that the credential is used as part of the Semantic Layer configuration. It is used to create a Databricks credential for the Semantic Layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/databricks_semantic_layer_credential#semantic_layer_credential DatabricksSemanticLayerCredential#semantic_layer_credential}
  */
  readonly semanticLayerCredential?: boolean | cdktf.IResolvable;
  /**
  * Target name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/databricks_semantic_layer_credential#target_name DatabricksSemanticLayerCredential#target_name}
  */
  readonly targetName?: string;
  /**
  * Token for Databricks user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/databricks_semantic_layer_credential#token DatabricksSemanticLayerCredential#token}
  */
  readonly token: string;
}

export function databricksSemanticLayerCredentialCredentialToTerraform(struct?: DatabricksSemanticLayerCredentialCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adapter_type: cdktf.stringToTerraform(struct!.adapterType),
    catalog: cdktf.stringToTerraform(struct!.catalog),
    project_id: cdktf.numberToTerraform(struct!.projectId),
    schema: cdktf.stringToTerraform(struct!.schema),
    semantic_layer_credential: cdktf.booleanToTerraform(struct!.semanticLayerCredential),
    target_name: cdktf.stringToTerraform(struct!.targetName),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function databricksSemanticLayerCredentialCredentialToHclTerraform(struct?: DatabricksSemanticLayerCredentialCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adapter_type: {
      value: cdktf.stringToHclTerraform(struct!.adapterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    catalog: {
      value: cdktf.stringToHclTerraform(struct!.catalog),
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
    target_name: {
      value: cdktf.stringToHclTerraform(struct!.targetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabricksSemanticLayerCredentialCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DatabricksSemanticLayerCredentialCredential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adapterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.adapterType = this._adapterType;
    }
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._semanticLayerCredential !== undefined) {
      hasAnyValues = true;
      internalValueResult.semanticLayerCredential = this._semanticLayerCredential;
    }
    if (this._targetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetName = this._targetName;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabricksSemanticLayerCredentialCredential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adapterType = undefined;
      this._catalog = undefined;
      this._projectId = undefined;
      this._schema = undefined;
      this._semanticLayerCredential = undefined;
      this._targetName = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adapterType = value.adapterType;
      this._catalog = value.catalog;
      this._projectId = value.projectId;
      this._schema = value.schema;
      this._semanticLayerCredential = value.semanticLayerCredential;
      this._targetName = value.targetName;
      this._token = value.token;
    }
  }

  // adapter_type - computed: true, optional: true, required: false
  private _adapterType?: string; 
  public get adapterType() {
    return this.getStringAttribute('adapter_type');
  }
  public set adapterType(value: string) {
    this._adapterType = value;
  }
  public resetAdapterType() {
    this._adapterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adapterTypeInput() {
    return this._adapterType;
  }

  // catalog - computed: true, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getNumberAttribute('credential_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // token - computed: false, optional: false, required: true
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/databricks_semantic_layer_credential dbtcloud_databricks_semantic_layer_credential}
*/
export class DatabricksSemanticLayerCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_databricks_semantic_layer_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabricksSemanticLayerCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabricksSemanticLayerCredential to import
  * @param importFromId The id of the existing DatabricksSemanticLayerCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/databricks_semantic_layer_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabricksSemanticLayerCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_databricks_semantic_layer_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/resources/databricks_semantic_layer_credential dbtcloud_databricks_semantic_layer_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabricksSemanticLayerCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: DatabricksSemanticLayerCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_databricks_semantic_layer_credential',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
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
  private _configuration = new DatabricksSemanticLayerCredentialConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: DatabricksSemanticLayerCredentialConfiguration) {
    this._configuration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // credential - computed: false, optional: false, required: true
  private _credential = new DatabricksSemanticLayerCredentialCredentialOutputReference(this, "credential");
  public get credential() {
    return this._credential;
  }
  public putCredential(value: DatabricksSemanticLayerCredentialCredential) {
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
      configuration: databricksSemanticLayerCredentialConfigurationToTerraform(this._configuration.internalValue),
      credential: databricksSemanticLayerCredentialCredentialToTerraform(this._credential.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: databricksSemanticLayerCredentialConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabricksSemanticLayerCredentialConfiguration",
      },
      credential: {
        value: databricksSemanticLayerCredentialCredentialToHclTerraform(this._credential.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DatabricksSemanticLayerCredentialCredential",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
