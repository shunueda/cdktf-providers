// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformWorkspaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cost estimation enabled determines if cost estimation operations are performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#cost_estimation_enabled PlatformWorkspace#cost_estimation_enabled}
  */
  readonly costEstimationEnabled: boolean | cdktf.IResolvable;
  /**
  * Default pipelines associated with this workspace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#default_pipelines PlatformWorkspace#default_pipelines}
  */
  readonly defaultPipelines?: { [key: string]: string };
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#description PlatformWorkspace#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#id PlatformWorkspace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#identifier PlatformWorkspace#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#name PlatformWorkspace#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#org_id PlatformWorkspace#org_id}
  */
  readonly orgId: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#project_id PlatformWorkspace#project_id}
  */
  readonly projectId: string;
  /**
  * Provider connector is the reference to the connector for the infrastructure provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#provider_connector PlatformWorkspace#provider_connector}
  */
  readonly providerConnector?: string;
  /**
  * Provisioner type defines the provisioning tool to use (terraform or opentofu)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#provisioner_type PlatformWorkspace#provisioner_type}
  */
  readonly provisionerType: string;
  /**
  * Provisioner version defines the provisioner version to use. The latest version of Opentofu should always be supported, Terraform is only supported up to version 1.5.7.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#provisioner_version PlatformWorkspace#provisioner_version}
  */
  readonly provisionerVersion: string;
  /**
  * Repository is the name of the repository to fetch the code from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#repository PlatformWorkspace#repository}
  */
  readonly repository: string;
  /**
  * Repository branch is the name of the branch to fetch the code from. This cannot be set if repository commit or sha is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#repository_branch PlatformWorkspace#repository_branch}
  */
  readonly repositoryBranch?: string;
  /**
  * Repository commit is tag to fetch the code from. This cannot be set if repository branch or sha is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#repository_commit PlatformWorkspace#repository_commit}
  */
  readonly repositoryCommit?: string;
  /**
  * Repository connector is the reference to the connector used to fetch the code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#repository_connector PlatformWorkspace#repository_connector}
  */
  readonly repositoryConnector: string;
  /**
  * Repository path is the path in which the code resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#repository_path PlatformWorkspace#repository_path}
  */
  readonly repositoryPath: string;
  /**
  * Repository commit is commit SHA to fetch the code from. This cannot be set if repository branch or commit is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#repository_sha PlatformWorkspace#repository_sha}
  */
  readonly repositorySha?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#tags PlatformWorkspace#tags}
  */
  readonly tags?: string[];
  /**
  * Variable sets to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#variable_sets PlatformWorkspace#variable_sets}
  */
  readonly variableSets?: string[];
  /**
  * connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#connector PlatformWorkspace#connector}
  */
  readonly connector?: PlatformWorkspaceConnector[] | cdktf.IResolvable;
  /**
  * environment_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#environment_variable PlatformWorkspace#environment_variable}
  */
  readonly environmentVariable?: PlatformWorkspaceEnvironmentVariable[] | cdktf.IResolvable;
  /**
  * terraform_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#terraform_variable PlatformWorkspace#terraform_variable}
  */
  readonly terraformVariable?: PlatformWorkspaceTerraformVariable[] | cdktf.IResolvable;
  /**
  * terraform_variable_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#terraform_variable_file PlatformWorkspace#terraform_variable_file}
  */
  readonly terraformVariableFile?: PlatformWorkspaceTerraformVariableFile[] | cdktf.IResolvable;
}
export interface PlatformWorkspaceConnector {
  /**
  * Connector Ref is the reference to the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#connector_ref PlatformWorkspace#connector_ref}
  */
  readonly connectorRef: string;
  /**
  * Type is the connector type of the connector. Supported types: aws, azure, gcp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#type PlatformWorkspace#type}
  */
  readonly type: string;
}

export function platformWorkspaceConnectorToTerraform(struct?: PlatformWorkspaceConnector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_ref: cdktf.stringToTerraform(struct!.connectorRef),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function platformWorkspaceConnectorToHclTerraform(struct?: PlatformWorkspaceConnector | cdktf.IResolvable): any {
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

export class PlatformWorkspaceConnectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformWorkspaceConnector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlatformWorkspaceConnector | cdktf.IResolvable | undefined) {
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

export class PlatformWorkspaceConnectorList extends cdktf.ComplexList {
  public internalValue? : PlatformWorkspaceConnector[] | cdktf.IResolvable

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
  public get(index: number): PlatformWorkspaceConnectorOutputReference {
    return new PlatformWorkspaceConnectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformWorkspaceEnvironmentVariable {
  /**
  * Key is the identifier for the variable. Must be unique within the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#key PlatformWorkspace#key}
  */
  readonly key: string;
  /**
  * Value is the value of the variable. For string value types this field should contain the value of the variable. For secret value types this should contain a reference to a valid harness secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#value PlatformWorkspace#value}
  */
  readonly value: string;
  /**
  * Value type indicates the value type of the variable. Currently we support string and secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#value_type PlatformWorkspace#value_type}
  */
  readonly valueType: string;
}

export function platformWorkspaceEnvironmentVariableToTerraform(struct?: PlatformWorkspaceEnvironmentVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function platformWorkspaceEnvironmentVariableToHclTerraform(struct?: PlatformWorkspaceEnvironmentVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformWorkspaceEnvironmentVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformWorkspaceEnvironmentVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformWorkspaceEnvironmentVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
      this._valueType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
      this._valueType = value.valueType;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class PlatformWorkspaceEnvironmentVariableList extends cdktf.ComplexList {
  public internalValue? : PlatformWorkspaceEnvironmentVariable[] | cdktf.IResolvable

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
  public get(index: number): PlatformWorkspaceEnvironmentVariableOutputReference {
    return new PlatformWorkspaceEnvironmentVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformWorkspaceTerraformVariable {
  /**
  * Key is the identifier for the variable. Must be unique within the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#key PlatformWorkspace#key}
  */
  readonly key: string;
  /**
  * Value is the value of the variable. For string value types this field should contain the value of the variable. For secret value types this should contain a reference to a valid harness secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#value PlatformWorkspace#value}
  */
  readonly value: string;
  /**
  * Value type indicates the value type of the variable. Currently we support string and secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#value_type PlatformWorkspace#value_type}
  */
  readonly valueType: string;
}

export function platformWorkspaceTerraformVariableToTerraform(struct?: PlatformWorkspaceTerraformVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function platformWorkspaceTerraformVariableToHclTerraform(struct?: PlatformWorkspaceTerraformVariable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformWorkspaceTerraformVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformWorkspaceTerraformVariable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformWorkspaceTerraformVariable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
      this._valueType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
      this._valueType = value.valueType;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class PlatformWorkspaceTerraformVariableList extends cdktf.ComplexList {
  public internalValue? : PlatformWorkspaceTerraformVariable[] | cdktf.IResolvable

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
  public get(index: number): PlatformWorkspaceTerraformVariableOutputReference {
    return new PlatformWorkspaceTerraformVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformWorkspaceTerraformVariableFile {
  /**
  * Repository is the name of the repository to fetch the code from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#repository PlatformWorkspace#repository}
  */
  readonly repository: string;
  /**
  * Repository branch is the name of the branch to fetch the variables from. This cannot be set if repository commit or sha is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#repository_branch PlatformWorkspace#repository_branch}
  */
  readonly repositoryBranch?: string;
  /**
  * Repository commit is tag to fetch the variables from. This cannot be set if repository branch or sha is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#repository_commit PlatformWorkspace#repository_commit}
  */
  readonly repositoryCommit?: string;
  /**
  * Repository connector is the reference to the connector used to fetch the variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#repository_connector PlatformWorkspace#repository_connector}
  */
  readonly repositoryConnector: string;
  /**
  * Repository path is the path in which the variables reside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#repository_path PlatformWorkspace#repository_path}
  */
  readonly repositoryPath?: string;
  /**
  * Repository commit is SHA to fetch the variables from. This cannot be set if repository branch or commit is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#repository_sha PlatformWorkspace#repository_sha}
  */
  readonly repositorySha?: string;
}

export function platformWorkspaceTerraformVariableFileToTerraform(struct?: PlatformWorkspaceTerraformVariableFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repository: cdktf.stringToTerraform(struct!.repository),
    repository_branch: cdktf.stringToTerraform(struct!.repositoryBranch),
    repository_commit: cdktf.stringToTerraform(struct!.repositoryCommit),
    repository_connector: cdktf.stringToTerraform(struct!.repositoryConnector),
    repository_path: cdktf.stringToTerraform(struct!.repositoryPath),
    repository_sha: cdktf.stringToTerraform(struct!.repositorySha),
  }
}


export function platformWorkspaceTerraformVariableFileToHclTerraform(struct?: PlatformWorkspaceTerraformVariableFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_branch: {
      value: cdktf.stringToHclTerraform(struct!.repositoryBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_commit: {
      value: cdktf.stringToHclTerraform(struct!.repositoryCommit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_connector: {
      value: cdktf.stringToHclTerraform(struct!.repositoryConnector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_path: {
      value: cdktf.stringToHclTerraform(struct!.repositoryPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_sha: {
      value: cdktf.stringToHclTerraform(struct!.repositorySha),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformWorkspaceTerraformVariableFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformWorkspaceTerraformVariableFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._repositoryBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryBranch = this._repositoryBranch;
    }
    if (this._repositoryCommit !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryCommit = this._repositoryCommit;
    }
    if (this._repositoryConnector !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryConnector = this._repositoryConnector;
    }
    if (this._repositoryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryPath = this._repositoryPath;
    }
    if (this._repositorySha !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositorySha = this._repositorySha;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformWorkspaceTerraformVariableFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._repository = undefined;
      this._repositoryBranch = undefined;
      this._repositoryCommit = undefined;
      this._repositoryConnector = undefined;
      this._repositoryPath = undefined;
      this._repositorySha = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._repository = value.repository;
      this._repositoryBranch = value.repositoryBranch;
      this._repositoryCommit = value.repositoryCommit;
      this._repositoryConnector = value.repositoryConnector;
      this._repositoryPath = value.repositoryPath;
      this._repositorySha = value.repositorySha;
    }
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // repository_branch - computed: false, optional: true, required: false
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

  // repository_commit - computed: false, optional: true, required: false
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

  // repository_connector - computed: false, optional: false, required: true
  private _repositoryConnector?: string; 
  public get repositoryConnector() {
    return this.getStringAttribute('repository_connector');
  }
  public set repositoryConnector(value: string) {
    this._repositoryConnector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryConnectorInput() {
    return this._repositoryConnector;
  }

  // repository_path - computed: false, optional: true, required: false
  private _repositoryPath?: string; 
  public get repositoryPath() {
    return this.getStringAttribute('repository_path');
  }
  public set repositoryPath(value: string) {
    this._repositoryPath = value;
  }
  public resetRepositoryPath() {
    this._repositoryPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPathInput() {
    return this._repositoryPath;
  }

  // repository_sha - computed: false, optional: true, required: false
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
}

export class PlatformWorkspaceTerraformVariableFileList extends cdktf.ComplexList {
  public internalValue? : PlatformWorkspaceTerraformVariableFile[] | cdktf.IResolvable

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
  public get(index: number): PlatformWorkspaceTerraformVariableFileOutputReference {
    return new PlatformWorkspaceTerraformVariableFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace harness_platform_workspace}
*/
export class PlatformWorkspace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_workspace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformWorkspace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformWorkspace to import
  * @param importFromId The id of the existing PlatformWorkspace that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformWorkspace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_workspace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_workspace harness_platform_workspace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformWorkspaceConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformWorkspaceConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_workspace',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._costEstimationEnabled = config.costEstimationEnabled;
    this._defaultPipelines = config.defaultPipelines;
    this._description = config.description;
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._providerConnector = config.providerConnector;
    this._provisionerType = config.provisionerType;
    this._provisionerVersion = config.provisionerVersion;
    this._repository = config.repository;
    this._repositoryBranch = config.repositoryBranch;
    this._repositoryCommit = config.repositoryCommit;
    this._repositoryConnector = config.repositoryConnector;
    this._repositoryPath = config.repositoryPath;
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

  // cost_estimation_enabled - computed: false, optional: false, required: true
  private _costEstimationEnabled?: boolean | cdktf.IResolvable; 
  public get costEstimationEnabled() {
    return this.getBooleanAttribute('cost_estimation_enabled');
  }
  public set costEstimationEnabled(value: boolean | cdktf.IResolvable) {
    this._costEstimationEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get costEstimationEnabledInput() {
    return this._costEstimationEnabled;
  }

  // default_pipelines - computed: false, optional: true, required: false
  private _defaultPipelines?: { [key: string]: string }; 
  public get defaultPipelines() {
    return this.getStringMapAttribute('default_pipelines');
  }
  public set defaultPipelines(value: { [key: string]: string }) {
    this._defaultPipelines = value;
  }
  public resetDefaultPipelines() {
    this._defaultPipelines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPipelinesInput() {
    return this._defaultPipelines;
  }

  // description - computed: false, optional: true, required: false
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

  // provider_connector - computed: false, optional: true, required: false
  private _providerConnector?: string; 
  public get providerConnector() {
    return this.getStringAttribute('provider_connector');
  }
  public set providerConnector(value: string) {
    this._providerConnector = value;
  }
  public resetProviderConnector() {
    this._providerConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerConnectorInput() {
    return this._providerConnector;
  }

  // provisioner_type - computed: false, optional: false, required: true
  private _provisionerType?: string; 
  public get provisionerType() {
    return this.getStringAttribute('provisioner_type');
  }
  public set provisionerType(value: string) {
    this._provisionerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerTypeInput() {
    return this._provisionerType;
  }

  // provisioner_version - computed: false, optional: false, required: true
  private _provisionerVersion?: string; 
  public get provisionerVersion() {
    return this.getStringAttribute('provisioner_version');
  }
  public set provisionerVersion(value: string) {
    this._provisionerVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerVersionInput() {
    return this._provisionerVersion;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // repository_branch - computed: false, optional: true, required: false
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

  // repository_commit - computed: false, optional: true, required: false
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

  // repository_connector - computed: false, optional: false, required: true
  private _repositoryConnector?: string; 
  public get repositoryConnector() {
    return this.getStringAttribute('repository_connector');
  }
  public set repositoryConnector(value: string) {
    this._repositoryConnector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryConnectorInput() {
    return this._repositoryConnector;
  }

  // repository_path - computed: false, optional: false, required: true
  private _repositoryPath?: string; 
  public get repositoryPath() {
    return this.getStringAttribute('repository_path');
  }
  public set repositoryPath(value: string) {
    this._repositoryPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryPathInput() {
    return this._repositoryPath;
  }

  // repository_sha - computed: false, optional: true, required: false
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

  // variable_sets - computed: false, optional: true, required: false
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
  private _connector = new PlatformWorkspaceConnectorList(this, "connector", true);
  public get connector() {
    return this._connector;
  }
  public putConnector(value: PlatformWorkspaceConnector[] | cdktf.IResolvable) {
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
  private _environmentVariable = new PlatformWorkspaceEnvironmentVariableList(this, "environment_variable", true);
  public get environmentVariable() {
    return this._environmentVariable;
  }
  public putEnvironmentVariable(value: PlatformWorkspaceEnvironmentVariable[] | cdktf.IResolvable) {
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
  private _terraformVariable = new PlatformWorkspaceTerraformVariableList(this, "terraform_variable", true);
  public get terraformVariable() {
    return this._terraformVariable;
  }
  public putTerraformVariable(value: PlatformWorkspaceTerraformVariable[] | cdktf.IResolvable) {
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
  private _terraformVariableFile = new PlatformWorkspaceTerraformVariableFileList(this, "terraform_variable_file", true);
  public get terraformVariableFile() {
    return this._terraformVariableFile;
  }
  public putTerraformVariableFile(value: PlatformWorkspaceTerraformVariableFile[] | cdktf.IResolvable) {
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
      cost_estimation_enabled: cdktf.booleanToTerraform(this._costEstimationEnabled),
      default_pipelines: cdktf.hashMapper(cdktf.stringToTerraform)(this._defaultPipelines),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      provider_connector: cdktf.stringToTerraform(this._providerConnector),
      provisioner_type: cdktf.stringToTerraform(this._provisionerType),
      provisioner_version: cdktf.stringToTerraform(this._provisionerVersion),
      repository: cdktf.stringToTerraform(this._repository),
      repository_branch: cdktf.stringToTerraform(this._repositoryBranch),
      repository_commit: cdktf.stringToTerraform(this._repositoryCommit),
      repository_connector: cdktf.stringToTerraform(this._repositoryConnector),
      repository_path: cdktf.stringToTerraform(this._repositoryPath),
      repository_sha: cdktf.stringToTerraform(this._repositorySha),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      variable_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._variableSets),
      connector: cdktf.listMapper(platformWorkspaceConnectorToTerraform, true)(this._connector.internalValue),
      environment_variable: cdktf.listMapper(platformWorkspaceEnvironmentVariableToTerraform, true)(this._environmentVariable.internalValue),
      terraform_variable: cdktf.listMapper(platformWorkspaceTerraformVariableToTerraform, true)(this._terraformVariable.internalValue),
      terraform_variable_file: cdktf.listMapper(platformWorkspaceTerraformVariableFileToTerraform, true)(this._terraformVariableFile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cost_estimation_enabled: {
        value: cdktf.booleanToHclTerraform(this._costEstimationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_pipelines: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._defaultPipelines),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      provider_connector: {
        value: cdktf.stringToHclTerraform(this._providerConnector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioner_type: {
        value: cdktf.stringToHclTerraform(this._provisionerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioner_version: {
        value: cdktf.stringToHclTerraform(this._provisionerVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
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
      repository_connector: {
        value: cdktf.stringToHclTerraform(this._repositoryConnector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_path: {
        value: cdktf.stringToHclTerraform(this._repositoryPath),
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
        value: cdktf.listMapperHcl(platformWorkspaceConnectorToHclTerraform, true)(this._connector.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PlatformWorkspaceConnectorList",
      },
      environment_variable: {
        value: cdktf.listMapperHcl(platformWorkspaceEnvironmentVariableToHclTerraform, true)(this._environmentVariable.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PlatformWorkspaceEnvironmentVariableList",
      },
      terraform_variable: {
        value: cdktf.listMapperHcl(platformWorkspaceTerraformVariableToHclTerraform, true)(this._terraformVariable.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PlatformWorkspaceTerraformVariableList",
      },
      terraform_variable_file: {
        value: cdktf.listMapperHcl(platformWorkspaceTerraformVariableFileToHclTerraform, true)(this._terraformVariableFile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PlatformWorkspaceTerraformVariableFileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
