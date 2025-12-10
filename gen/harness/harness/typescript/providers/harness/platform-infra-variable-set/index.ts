// https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformInfraVariableSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#description PlatformInfraVariableSet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#id PlatformInfraVariableSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#identifier PlatformInfraVariableSet#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#name PlatformInfraVariableSet#name}
  */
  readonly name: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#org_id PlatformInfraVariableSet#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#project_id PlatformInfraVariableSet#project_id}
  */
  readonly projectId?: string;
  /**
  * Tags to associate with the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#tags PlatformInfraVariableSet#tags}
  */
  readonly tags?: string[];
  /**
  * connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#connector PlatformInfraVariableSet#connector}
  */
  readonly connector?: PlatformInfraVariableSetConnector[] | cdktf.IResolvable;
  /**
  * environment_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#environment_variable PlatformInfraVariableSet#environment_variable}
  */
  readonly environmentVariable?: PlatformInfraVariableSetEnvironmentVariable[] | cdktf.IResolvable;
  /**
  * terraform_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#terraform_variable PlatformInfraVariableSet#terraform_variable}
  */
  readonly terraformVariable?: PlatformInfraVariableSetTerraformVariable[] | cdktf.IResolvable;
  /**
  * terraform_variable_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#terraform_variable_file PlatformInfraVariableSet#terraform_variable_file}
  */
  readonly terraformVariableFile?: PlatformInfraVariableSetTerraformVariableFile[] | cdktf.IResolvable;
}
export interface PlatformInfraVariableSetConnector {
  /**
  * Connector Ref is the reference to the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#connector_ref PlatformInfraVariableSet#connector_ref}
  */
  readonly connectorRef: string;
  /**
  * Type is the connector type of the connector. Supported types: aws, azure, gcp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#type PlatformInfraVariableSet#type}
  */
  readonly type: string;
}

export function platformInfraVariableSetConnectorToTerraform(struct?: PlatformInfraVariableSetConnector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_ref: cdktf.stringToTerraform(struct!.connectorRef),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function platformInfraVariableSetConnectorToHclTerraform(struct?: PlatformInfraVariableSetConnector | cdktf.IResolvable): any {
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

export class PlatformInfraVariableSetConnectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformInfraVariableSetConnector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlatformInfraVariableSetConnector | cdktf.IResolvable | undefined) {
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

export class PlatformInfraVariableSetConnectorList extends cdktf.ComplexList {
  public internalValue? : PlatformInfraVariableSetConnector[] | cdktf.IResolvable

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
  public get(index: number): PlatformInfraVariableSetConnectorOutputReference {
    return new PlatformInfraVariableSetConnectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformInfraVariableSetEnvironmentVariable {
  /**
  * Key is the identifier for the variable. Must be unique within the Variable Set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#key PlatformInfraVariableSet#key}
  */
  readonly key: string;
  /**
  * Value is the value of the variable. For string value types this field should contain the value of the variable. For secret value types this should contain a reference to a valid harness secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#value PlatformInfraVariableSet#value}
  */
  readonly value: string;
  /**
  * Value type indicates the value type of the variable. Currently we support string and secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#value_type PlatformInfraVariableSet#value_type}
  */
  readonly valueType: string;
}

export function platformInfraVariableSetEnvironmentVariableToTerraform(struct?: PlatformInfraVariableSetEnvironmentVariable | cdktf.IResolvable): any {
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


export function platformInfraVariableSetEnvironmentVariableToHclTerraform(struct?: PlatformInfraVariableSetEnvironmentVariable | cdktf.IResolvable): any {
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

export class PlatformInfraVariableSetEnvironmentVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformInfraVariableSetEnvironmentVariable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlatformInfraVariableSetEnvironmentVariable | cdktf.IResolvable | undefined) {
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

export class PlatformInfraVariableSetEnvironmentVariableList extends cdktf.ComplexList {
  public internalValue? : PlatformInfraVariableSetEnvironmentVariable[] | cdktf.IResolvable

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
  public get(index: number): PlatformInfraVariableSetEnvironmentVariableOutputReference {
    return new PlatformInfraVariableSetEnvironmentVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformInfraVariableSetTerraformVariable {
  /**
  * Key is the identifier for the variable. Must be unique within the Variable Set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#key PlatformInfraVariableSet#key}
  */
  readonly key: string;
  /**
  * Value is the value of the variable. For string value types this field should contain the value of the variable. For secret value types this should contain a reference to a valid harness secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#value PlatformInfraVariableSet#value}
  */
  readonly value: string;
  /**
  * Value type indicates the value type of the variable. Currently we support string and secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#value_type PlatformInfraVariableSet#value_type}
  */
  readonly valueType: string;
}

export function platformInfraVariableSetTerraformVariableToTerraform(struct?: PlatformInfraVariableSetTerraformVariable | cdktf.IResolvable): any {
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


export function platformInfraVariableSetTerraformVariableToHclTerraform(struct?: PlatformInfraVariableSetTerraformVariable | cdktf.IResolvable): any {
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

export class PlatformInfraVariableSetTerraformVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformInfraVariableSetTerraformVariable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlatformInfraVariableSetTerraformVariable | cdktf.IResolvable | undefined) {
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

export class PlatformInfraVariableSetTerraformVariableList extends cdktf.ComplexList {
  public internalValue? : PlatformInfraVariableSetTerraformVariable[] | cdktf.IResolvable

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
  public get(index: number): PlatformInfraVariableSetTerraformVariableOutputReference {
    return new PlatformInfraVariableSetTerraformVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformInfraVariableSetTerraformVariableFile {
  /**
  * Repository is the name of the repository to fetch the code from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#repository PlatformInfraVariableSet#repository}
  */
  readonly repository: string;
  /**
  * Repository branch is the name of the branch to fetch the variables from. This cannot be set if repository commit or sha is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#repository_branch PlatformInfraVariableSet#repository_branch}
  */
  readonly repositoryBranch?: string;
  /**
  * Repository commit is tag to fetch the variables from. This cannot be set if repository branch or sha is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#repository_commit PlatformInfraVariableSet#repository_commit}
  */
  readonly repositoryCommit?: string;
  /**
  * Repository connector is the reference to the connector used to fetch the variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#repository_connector PlatformInfraVariableSet#repository_connector}
  */
  readonly repositoryConnector: string;
  /**
  * Repository path is the path in which the variables reside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#repository_path PlatformInfraVariableSet#repository_path}
  */
  readonly repositoryPath?: string;
  /**
  * Repository commit is SHA to fetch the variables from. This cannot be set if repository branch or commit is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#repository_sha PlatformInfraVariableSet#repository_sha}
  */
  readonly repositorySha?: string;
}

export function platformInfraVariableSetTerraformVariableFileToTerraform(struct?: PlatformInfraVariableSetTerraformVariableFile | cdktf.IResolvable): any {
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


export function platformInfraVariableSetTerraformVariableFileToHclTerraform(struct?: PlatformInfraVariableSetTerraformVariableFile | cdktf.IResolvable): any {
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

export class PlatformInfraVariableSetTerraformVariableFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformInfraVariableSetTerraformVariableFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlatformInfraVariableSetTerraformVariableFile | cdktf.IResolvable | undefined) {
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

export class PlatformInfraVariableSetTerraformVariableFileList extends cdktf.ComplexList {
  public internalValue? : PlatformInfraVariableSetTerraformVariableFile[] | cdktf.IResolvable

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
  public get(index: number): PlatformInfraVariableSetTerraformVariableFileOutputReference {
    return new PlatformInfraVariableSetTerraformVariableFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set harness_platform_infra_variable_set}
*/
export class PlatformInfraVariableSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_infra_variable_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformInfraVariableSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformInfraVariableSet to import
  * @param importFromId The id of the existing PlatformInfraVariableSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformInfraVariableSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_infra_variable_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.4/docs/resources/platform_infra_variable_set harness_platform_infra_variable_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformInfraVariableSetConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformInfraVariableSetConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_infra_variable_set',
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
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._tags = config.tags;
    this._connector.internalValue = config.connector;
    this._environmentVariable.internalValue = config.environmentVariable;
    this._terraformVariable.internalValue = config.terraformVariable;
    this._terraformVariableFile.internalValue = config.terraformVariableFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // connector - computed: false, optional: true, required: false
  private _connector = new PlatformInfraVariableSetConnectorList(this, "connector", true);
  public get connector() {
    return this._connector;
  }
  public putConnector(value: PlatformInfraVariableSetConnector[] | cdktf.IResolvable) {
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
  private _environmentVariable = new PlatformInfraVariableSetEnvironmentVariableList(this, "environment_variable", true);
  public get environmentVariable() {
    return this._environmentVariable;
  }
  public putEnvironmentVariable(value: PlatformInfraVariableSetEnvironmentVariable[] | cdktf.IResolvable) {
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
  private _terraformVariable = new PlatformInfraVariableSetTerraformVariableList(this, "terraform_variable", true);
  public get terraformVariable() {
    return this._terraformVariable;
  }
  public putTerraformVariable(value: PlatformInfraVariableSetTerraformVariable[] | cdktf.IResolvable) {
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
  private _terraformVariableFile = new PlatformInfraVariableSetTerraformVariableFileList(this, "terraform_variable_file", true);
  public get terraformVariableFile() {
    return this._terraformVariableFile;
  }
  public putTerraformVariableFile(value: PlatformInfraVariableSetTerraformVariableFile[] | cdktf.IResolvable) {
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
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      connector: cdktf.listMapper(platformInfraVariableSetConnectorToTerraform, true)(this._connector.internalValue),
      environment_variable: cdktf.listMapper(platformInfraVariableSetEnvironmentVariableToTerraform, true)(this._environmentVariable.internalValue),
      terraform_variable: cdktf.listMapper(platformInfraVariableSetTerraformVariableToTerraform, true)(this._terraformVariable.internalValue),
      terraform_variable_file: cdktf.listMapper(platformInfraVariableSetTerraformVariableFileToTerraform, true)(this._terraformVariableFile.internalValue),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      connector: {
        value: cdktf.listMapperHcl(platformInfraVariableSetConnectorToHclTerraform, true)(this._connector.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PlatformInfraVariableSetConnectorList",
      },
      environment_variable: {
        value: cdktf.listMapperHcl(platformInfraVariableSetEnvironmentVariableToHclTerraform, true)(this._environmentVariable.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PlatformInfraVariableSetEnvironmentVariableList",
      },
      terraform_variable: {
        value: cdktf.listMapperHcl(platformInfraVariableSetTerraformVariableToHclTerraform, true)(this._terraformVariable.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PlatformInfraVariableSetTerraformVariableList",
      },
      terraform_variable_file: {
        value: cdktf.listMapperHcl(platformInfraVariableSetTerraformVariableFileToHclTerraform, true)(this._terraformVariableFile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PlatformInfraVariableSetTerraformVariableFileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
