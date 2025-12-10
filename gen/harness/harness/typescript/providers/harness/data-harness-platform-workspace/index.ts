// https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessPlatformWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the Workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_workspace#description DataHarnessPlatformWorkspace#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_workspace#id DataHarnessPlatformWorkspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of the Workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_workspace#identifier DataHarnessPlatformWorkspace#identifier}
  */
  readonly identifier: string;
  /**
  * Organization Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_workspace#org_id DataHarnessPlatformWorkspace#org_id}
  */
  readonly orgId: string;
  /**
  * Project Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_workspace#project_id DataHarnessPlatformWorkspace#project_id}
  */
  readonly projectId: string;
  /**
  * Repository Branch in which the code should be accessed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_workspace#repository_branch DataHarnessPlatformWorkspace#repository_branch}
  */
  readonly repositoryBranch?: string;
  /**
  * Repository Tag in which the code should be accessed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_workspace#repository_commit DataHarnessPlatformWorkspace#repository_commit}
  */
  readonly repositoryCommit?: string;
  /**
  * Repository Commit SHA in which the code should be accessed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_workspace#repository_sha DataHarnessPlatformWorkspace#repository_sha}
  */
  readonly repositorySha?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_workspace#tags DataHarnessPlatformWorkspace#tags}
  */
  readonly tags?: string[];
  /**
  * Variable sets to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_workspace#variable_sets DataHarnessPlatformWorkspace#variable_sets}
  */
  readonly variableSets?: string[];
  /**
  * connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_workspace#connector DataHarnessPlatformWorkspace#connector}
  */
  readonly connector?: DataHarnessPlatformWorkspaceConnector[] | cdktf.IResolvable;
  /**
  * environment_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_workspace#environment_variable DataHarnessPlatformWorkspace#environment_variable}
  */
  readonly environmentVariable?: DataHarnessPlatformWorkspaceEnvironmentVariable[] | cdktf.IResolvable;
  /**
  * terraform_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_workspace#terraform_variable DataHarnessPlatformWorkspace#terraform_variable}
  */
  readonly terraformVariable?: DataHarnessPlatformWorkspaceTerraformVariable[] | cdktf.IResolvable;
  /**
  * terraform_variable_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_workspace#terraform_variable_file DataHarnessPlatformWorkspace#terraform_variable_file}
  */
  readonly terraformVariableFile?: DataHarnessPlatformWorkspaceTerraformVariableFile[] | cdktf.IResolvable;
}
export interface DataHarnessPlatformWorkspaceConnector {
  /**
  * Connector Ref is the reference to the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_workspace#connector_ref DataHarnessPlatformWorkspace#connector_ref}
  */
  readonly connectorRef: string;
  /**
  * Type is the connector type of the connector. Supported types: aws, azure, gcp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_workspace#type DataHarnessPlatformWorkspace#type}
  */
  readonly type: string;
}

export function dataHarnessPlatformWorkspaceConnectorToTerraform(struct?: DataHarnessPlatformWorkspaceConnector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_ref: cdktf.stringToTerraform(struct!.connectorRef),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataHarnessPlatformWorkspaceConnectorToHclTerraform(struct?: DataHarnessPlatformWorkspaceConnector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connector_ref: {
      value: cdktf.stringToHclTerraform(struct!.connectorRef),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessPlatformWorkspaceConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataHarnessPlatformWorkspaceConnector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorRef = this._connectorRef;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformWorkspaceConnector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorRef = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorRef = value.connectorRef;
      this._type = value.type;
    }
  }

  // connector_ref - computed: false, optional: false, required: true
  private _connectorRef?: string; 
  public get connectorRef() {
    return this.getStringAttribute('connector_ref');
  }
  public set connectorRef(value: string) {
    this._connectorRef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorRefInput() {
    return this._connectorRef;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataHarnessPlatformWorkspaceConnectorList extends cdktf.ComplexList {
  public internalValue? : DataHarnessPlatformWorkspaceConnector[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessPlatformWorkspaceConnectorOutputReference {
    return new DataHarnessPlatformWorkspaceConnectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformWorkspaceEnvironmentVariable {
}

export function dataHarnessPlatformWorkspaceEnvironmentVariableToTerraform(struct?: DataHarnessPlatformWorkspaceEnvironmentVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformWorkspaceEnvironmentVariableToHclTerraform(struct?: DataHarnessPlatformWorkspaceEnvironmentVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformWorkspaceEnvironmentVariableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataHarnessPlatformWorkspaceEnvironmentVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformWorkspaceEnvironmentVariable | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_type - computed: true, optional: false, required: false
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
}

export class DataHarnessPlatformWorkspaceEnvironmentVariableList extends cdktf.ComplexList {
  public internalValue? : DataHarnessPlatformWorkspaceEnvironmentVariable[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessPlatformWorkspaceEnvironmentVariableOutputReference {
    return new DataHarnessPlatformWorkspaceEnvironmentVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformWorkspaceTerraformVariable {
}

export function dataHarnessPlatformWorkspaceTerraformVariableToTerraform(struct?: DataHarnessPlatformWorkspaceTerraformVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformWorkspaceTerraformVariableToHclTerraform(struct?: DataHarnessPlatformWorkspaceTerraformVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformWorkspaceTerraformVariableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataHarnessPlatformWorkspaceTerraformVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformWorkspaceTerraformVariable | cdktf.IResolvable | undefined) {
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

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // value_type - computed: true, optional: false, required: false
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
}

export class DataHarnessPlatformWorkspaceTerraformVariableList extends cdktf.ComplexList {
  public internalValue? : DataHarnessPlatformWorkspaceTerraformVariable[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessPlatformWorkspaceTerraformVariableOutputReference {
    return new DataHarnessPlatformWorkspaceTerraformVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformWorkspaceTerraformVariableFile {
}

export function dataHarnessPlatformWorkspaceTerraformVariableFileToTerraform(struct?: DataHarnessPlatformWorkspaceTerraformVariableFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataHarnessPlatformWorkspaceTerraformVariableFileToHclTerraform(struct?: DataHarnessPlatformWorkspaceTerraformVariableFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataHarnessPlatformWorkspaceTerraformVariableFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataHarnessPlatformWorkspaceTerraformVariableFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessPlatformWorkspaceTerraformVariableFile | cdktf.IResolvable | undefined) {
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

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }

  // repository_branch - computed: true, optional: false, required: false
  public get repositoryBranch() {
    return this.getStringAttribute('repository_branch');
  }

  // repository_commit - computed: true, optional: false, required: false
  public get repositoryCommit() {
    return this.getStringAttribute('repository_commit');
  }

  // repository_connector - computed: true, optional: false, required: false
  public get repositoryConnector() {
    return this.getStringAttribute('repository_connector');
  }

  // repository_path - computed: true, optional: false, required: false
  public get repositoryPath() {
    return this.getStringAttribute('repository_path');
  }

  // repository_sha - computed: true, optional: false, required: false
  public get repositorySha() {
    return this.getStringAttribute('repository_sha');
  }
}

export class DataHarnessPlatformWorkspaceTerraformVariableFileList extends cdktf.ComplexList {
  public internalValue? : DataHarnessPlatformWorkspaceTerraformVariableFile[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessPlatformWorkspaceTerraformVariableFileOutputReference {
    return new DataHarnessPlatformWorkspaceTerraformVariableFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_workspace harness_platform_workspace}
*/
export class DataHarnessPlatformWorkspace extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessPlatformWorkspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessPlatformWorkspace to import
  * @param importFromId The id of the existing DataHarnessPlatformWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessPlatformWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/data-sources/platform_workspace harness_platform_workspace} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessPlatformWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessPlatformWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_workspace',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.4',
        providerVersionConstraint: '0.39.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._identifier = config.identifier;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._repositoryBranch = config.repositoryBranch;
    this._repositoryCommit = config.repositoryCommit;
    this._repositorySha = config.repositorySha;
    this._tags = config.tags;
    this._variableSets = config.variableSets;
    this._connector.internalValue = config.connector;
    this._environmentVariable.internalValue = config.environmentVariable;
    this._terraformVariable.internalValue = config.terraformVariable;
    this._terraformVariableFile.internalValue = config.terraformVariableFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cost_estimation_enabled - computed: true, optional: false, required: false
  public get costEstimationEnabled() {
    return this.getBooleanAttribute('cost_estimation_enabled');
  }

  // default_pipelines - computed: true, optional: false, required: false
  private _defaultPipelines = new cdktf.StringMap(this, "default_pipelines");
  public get defaultPipelines() {
    return this._defaultPipelines;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // identifier - computed: false, optional: false, required: true
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // provider_connector - computed: true, optional: false, required: false
  public get providerConnector() {
    return this.getStringAttribute('provider_connector');
  }

  // provisioner_type - computed: true, optional: false, required: false
  public get provisionerType() {
    return this.getStringAttribute('provisioner_type');
  }

  // provisioner_version - computed: true, optional: false, required: false
  public get provisionerVersion() {
    return this.getStringAttribute('provisioner_version');
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }

  // repository_branch - computed: true, optional: true, required: false
  private _repositoryBranch?: string; 
  public get repositoryBranch() {
    return this.getStringAttribute('repository_branch');
  }
  public set repositoryBranch(value: string) {
    this._repositoryBranch = value;
  }
  public resetRepositoryBranch() {
    this._repositoryBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryBranchInput() {
    return this._repositoryBranch;
  }

  // repository_commit - computed: true, optional: true, required: false
  private _repositoryCommit?: string; 
  public get repositoryCommit() {
    return this.getStringAttribute('repository_commit');
  }
  public set repositoryCommit(value: string) {
    this._repositoryCommit = value;
  }
  public resetRepositoryCommit() {
    this._repositoryCommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryCommitInput() {
    return this._repositoryCommit;
  }

  // repository_connector - computed: true, optional: false, required: false
  public get repositoryConnector() {
    return this.getStringAttribute('repository_connector');
  }

  // repository_path - computed: true, optional: false, required: false
  public get repositoryPath() {
    return this.getStringAttribute('repository_path');
  }

  // repository_sha - computed: true, optional: true, required: false
  private _repositorySha?: string; 
  public get repositorySha() {
    return this.getStringAttribute('repository_sha');
  }
  public set repositorySha(value: string) {
    this._repositorySha = value;
  }
  public resetRepositorySha() {
    this._repositorySha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryShaInput() {
    return this._repositorySha;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // variable_sets - computed: true, optional: true, required: false
  private _variableSets?: string[]; 
  public get variableSets() {
    return this.getListAttribute('variable_sets');
  }
  public set variableSets(value: string[]) {
    this._variableSets = value;
  }
  public resetVariableSets() {
    this._variableSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableSetsInput() {
    return this._variableSets;
  }

  // connector - computed: false, optional: true, required: false
  private _connector = new DataHarnessPlatformWorkspaceConnectorList(this, "connector", true);
  public get connector() {
    return this._connector;
  }
  public putConnector(value: DataHarnessPlatformWorkspaceConnector[] | cdktf.IResolvable) {
    this._connector.internalValue = value;
  }
  public resetConnector() {
    this._connector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorInput() {
    return this._connector.internalValue;
  }

  // environment_variable - computed: false, optional: true, required: false
  private _environmentVariable = new DataHarnessPlatformWorkspaceEnvironmentVariableList(this, "environment_variable", true);
  public get environmentVariable() {
    return this._environmentVariable;
  }
  public putEnvironmentVariable(value: DataHarnessPlatformWorkspaceEnvironmentVariable[] | cdktf.IResolvable) {
    this._environmentVariable.internalValue = value;
  }
  public resetEnvironmentVariable() {
    this._environmentVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariableInput() {
    return this._environmentVariable.internalValue;
  }

  // terraform_variable - computed: false, optional: true, required: false
  private _terraformVariable = new DataHarnessPlatformWorkspaceTerraformVariableList(this, "terraform_variable", true);
  public get terraformVariable() {
    return this._terraformVariable;
  }
  public putTerraformVariable(value: DataHarnessPlatformWorkspaceTerraformVariable[] | cdktf.IResolvable) {
    this._terraformVariable.internalValue = value;
  }
  public resetTerraformVariable() {
    this._terraformVariable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformVariableInput() {
    return this._terraformVariable.internalValue;
  }

  // terraform_variable_file - computed: false, optional: true, required: false
  private _terraformVariableFile = new DataHarnessPlatformWorkspaceTerraformVariableFileList(this, "terraform_variable_file", true);
  public get terraformVariableFile() {
    return this._terraformVariableFile;
  }
  public putTerraformVariableFile(value: DataHarnessPlatformWorkspaceTerraformVariableFile[] | cdktf.IResolvable) {
    this._terraformVariableFile.internalValue = value;
  }
  public resetTerraformVariableFile() {
    this._terraformVariableFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terraformVariableFileInput() {
    return this._terraformVariableFile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      repository_branch: cdktf.stringToTerraform(this._repositoryBranch),
      repository_commit: cdktf.stringToTerraform(this._repositoryCommit),
      repository_sha: cdktf.stringToTerraform(this._repositorySha),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      variable_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._variableSets),
      connector: cdktf.listMapper(dataHarnessPlatformWorkspaceConnectorToTerraform, true)(this._connector.internalValue),
      environment_variable: cdktf.listMapper(dataHarnessPlatformWorkspaceEnvironmentVariableToTerraform, true)(this._environmentVariable.internalValue),
      terraform_variable: cdktf.listMapper(dataHarnessPlatformWorkspaceTerraformVariableToTerraform, true)(this._terraformVariable.internalValue),
      terraform_variable_file: cdktf.listMapper(dataHarnessPlatformWorkspaceTerraformVariableFileToTerraform, true)(this._terraformVariableFile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_branch: {
        value: cdktf.stringToHclTerraform(this._repositoryBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_commit: {
        value: cdktf.stringToHclTerraform(this._repositoryCommit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_sha: {
        value: cdktf.stringToHclTerraform(this._repositorySha),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      variable_sets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._variableSets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      connector: {
        value: cdktf.listMapperHcl(dataHarnessPlatformWorkspaceConnectorToHclTerraform, true)(this._connector.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataHarnessPlatformWorkspaceConnectorList",
      },
      environment_variable: {
        value: cdktf.listMapperHcl(dataHarnessPlatformWorkspaceEnvironmentVariableToHclTerraform, true)(this._environmentVariable.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataHarnessPlatformWorkspaceEnvironmentVariableList",
      },
      terraform_variable: {
        value: cdktf.listMapperHcl(dataHarnessPlatformWorkspaceTerraformVariableToHclTerraform, true)(this._terraformVariable.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataHarnessPlatformWorkspaceTerraformVariableList",
      },
      terraform_variable_file: {
        value: cdktf.listMapperHcl(dataHarnessPlatformWorkspaceTerraformVariableFileToHclTerraform, true)(this._terraformVariableFile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataHarnessPlatformWorkspaceTerraformVariableFileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
