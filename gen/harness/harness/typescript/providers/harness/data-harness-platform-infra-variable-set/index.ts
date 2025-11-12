// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessPlatformInfraVariableSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#id DataHarnessPlatformInfraVariableSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#identifier DataHarnessPlatformInfraVariableSet#identifier}
  */
  readonly identifier: string;
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#name DataHarnessPlatformInfraVariableSet#name}
  */
  readonly name?: string;
  /**
  * Unique identifier of the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#org_id DataHarnessPlatformInfraVariableSet#org_id}
  */
  readonly orgId?: string;
  /**
  * Unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#project_id DataHarnessPlatformInfraVariableSet#project_id}
  */
  readonly projectId?: string;
  /**
  * connector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#connector DataHarnessPlatformInfraVariableSet#connector}
  */
  readonly connector?: DataHarnessPlatformInfraVariableSetConnector[] | cdktf.IResolvable;
  /**
  * environment_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#environment_variable DataHarnessPlatformInfraVariableSet#environment_variable}
  */
  readonly environmentVariable?: DataHarnessPlatformInfraVariableSetEnvironmentVariable[] | cdktf.IResolvable;
  /**
  * terraform_variable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#terraform_variable DataHarnessPlatformInfraVariableSet#terraform_variable}
  */
  readonly terraformVariable?: DataHarnessPlatformInfraVariableSetTerraformVariable[] | cdktf.IResolvable;
  /**
  * terraform_variable_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#terraform_variable_file DataHarnessPlatformInfraVariableSet#terraform_variable_file}
  */
  readonly terraformVariableFile?: DataHarnessPlatformInfraVariableSetTerraformVariableFile[] | cdktf.IResolvable;
}
export interface DataHarnessPlatformInfraVariableSetConnector {
  /**
  * Connector Ref is the reference to the connector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#connector_ref DataHarnessPlatformInfraVariableSet#connector_ref}
  */
  readonly connectorRef: string;
  /**
  * Type is the connector type of the connector. Supported types: aws, azure, gcp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#type DataHarnessPlatformInfraVariableSet#type}
  */
  readonly type: string;
}

export function dataHarnessPlatformInfraVariableSetConnectorToTerraform(struct?: DataHarnessPlatformInfraVariableSetConnector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_ref: cdktf.stringToTerraform(struct!.connectorRef),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataHarnessPlatformInfraVariableSetConnectorToHclTerraform(struct?: DataHarnessPlatformInfraVariableSetConnector | cdktf.IResolvable): any {
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

export class DataHarnessPlatformInfraVariableSetConnectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformInfraVariableSetConnector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataHarnessPlatformInfraVariableSetConnector | cdktf.IResolvable | undefined) {
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

export class DataHarnessPlatformInfraVariableSetConnectorList extends cdktf.ComplexList {
  public internalValue? : DataHarnessPlatformInfraVariableSetConnector[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessPlatformInfraVariableSetConnectorOutputReference {
    return new DataHarnessPlatformInfraVariableSetConnectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformInfraVariableSetEnvironmentVariable {
  /**
  * Key is the identifier for the variable. Must be unique within the Variable Set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#key DataHarnessPlatformInfraVariableSet#key}
  */
  readonly key: string;
  /**
  * Value is the value of the variable. For string value types this field should contain the value of the variable. For secret value types this should contain a reference to a valid harness secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#value DataHarnessPlatformInfraVariableSet#value}
  */
  readonly value: string;
  /**
  * Value type indicates the value type of the variable. Currently we support string and secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#value_type DataHarnessPlatformInfraVariableSet#value_type}
  */
  readonly valueType: string;
}

export function dataHarnessPlatformInfraVariableSetEnvironmentVariableToTerraform(struct?: DataHarnessPlatformInfraVariableSetEnvironmentVariable | cdktf.IResolvable): any {
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


export function dataHarnessPlatformInfraVariableSetEnvironmentVariableToHclTerraform(struct?: DataHarnessPlatformInfraVariableSetEnvironmentVariable | cdktf.IResolvable): any {
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

export class DataHarnessPlatformInfraVariableSetEnvironmentVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformInfraVariableSetEnvironmentVariable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataHarnessPlatformInfraVariableSetEnvironmentVariable | cdktf.IResolvable | undefined) {
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

export class DataHarnessPlatformInfraVariableSetEnvironmentVariableList extends cdktf.ComplexList {
  public internalValue? : DataHarnessPlatformInfraVariableSetEnvironmentVariable[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessPlatformInfraVariableSetEnvironmentVariableOutputReference {
    return new DataHarnessPlatformInfraVariableSetEnvironmentVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformInfraVariableSetTerraformVariable {
  /**
  * Key is the identifier for the variable. Must be unique within the Variable Set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#key DataHarnessPlatformInfraVariableSet#key}
  */
  readonly key: string;
  /**
  * Value is the value of the variable. For string value types this field should contain the value of the variable. For secret value types this should contain a reference to a valid harness secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#value DataHarnessPlatformInfraVariableSet#value}
  */
  readonly value: string;
  /**
  * Value type indicates the value type of the variable. Currently we support string and secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#value_type DataHarnessPlatformInfraVariableSet#value_type}
  */
  readonly valueType: string;
}

export function dataHarnessPlatformInfraVariableSetTerraformVariableToTerraform(struct?: DataHarnessPlatformInfraVariableSetTerraformVariable | cdktf.IResolvable): any {
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


export function dataHarnessPlatformInfraVariableSetTerraformVariableToHclTerraform(struct?: DataHarnessPlatformInfraVariableSetTerraformVariable | cdktf.IResolvable): any {
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

export class DataHarnessPlatformInfraVariableSetTerraformVariableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformInfraVariableSetTerraformVariable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataHarnessPlatformInfraVariableSetTerraformVariable | cdktf.IResolvable | undefined) {
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

export class DataHarnessPlatformInfraVariableSetTerraformVariableList extends cdktf.ComplexList {
  public internalValue? : DataHarnessPlatformInfraVariableSetTerraformVariable[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessPlatformInfraVariableSetTerraformVariableOutputReference {
    return new DataHarnessPlatformInfraVariableSetTerraformVariableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataHarnessPlatformInfraVariableSetTerraformVariableFile {
  /**
  * Repository is the name of the repository to fetch the code from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#repository DataHarnessPlatformInfraVariableSet#repository}
  */
  readonly repository: string;
  /**
  * Repository branch is the name of the branch to fetch the variables from. This cannot be set if repository commit or sha is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#repository_branch DataHarnessPlatformInfraVariableSet#repository_branch}
  */
  readonly repositoryBranch?: string;
  /**
  * Repository commit is tag to fetch the variables from. This cannot be set if repository branch or sha is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#repository_commit DataHarnessPlatformInfraVariableSet#repository_commit}
  */
  readonly repositoryCommit?: string;
  /**
  * Repository connector is the reference to the connector used to fetch the variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#repository_connector DataHarnessPlatformInfraVariableSet#repository_connector}
  */
  readonly repositoryConnector: string;
  /**
  * Repository path is the path in which the variables reside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#repository_path DataHarnessPlatformInfraVariableSet#repository_path}
  */
  readonly repositoryPath?: string;
  /**
  * Repository commit is SHA to fetch the variables from. This cannot be set if repository branch or commit is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#repository_sha DataHarnessPlatformInfraVariableSet#repository_sha}
  */
  readonly repositorySha?: string;
}

export function dataHarnessPlatformInfraVariableSetTerraformVariableFileToTerraform(struct?: DataHarnessPlatformInfraVariableSetTerraformVariableFile | cdktf.IResolvable): any {
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


export function dataHarnessPlatformInfraVariableSetTerraformVariableFileToHclTerraform(struct?: DataHarnessPlatformInfraVariableSetTerraformVariableFile | cdktf.IResolvable): any {
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

export class DataHarnessPlatformInfraVariableSetTerraformVariableFileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessPlatformInfraVariableSetTerraformVariableFile | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataHarnessPlatformInfraVariableSetTerraformVariableFile | cdktf.IResolvable | undefined) {
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

export class DataHarnessPlatformInfraVariableSetTerraformVariableFileList extends cdktf.ComplexList {
  public internalValue? : DataHarnessPlatformInfraVariableSetTerraformVariableFile[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessPlatformInfraVariableSetTerraformVariableFileOutputReference {
    return new DataHarnessPlatformInfraVariableSetTerraformVariableFileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set harness_platform_infra_variable_set}
*/
export class DataHarnessPlatformInfraVariableSet extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_infra_variable_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessPlatformInfraVariableSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessPlatformInfraVariableSet to import
  * @param importFromId The id of the existing DataHarnessPlatformInfraVariableSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessPlatformInfraVariableSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_infra_variable_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/data-sources/platform_infra_variable_set harness_platform_infra_variable_set} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessPlatformInfraVariableSetConfig
  */
  public constructor(scope: Construct, id: string, config: DataHarnessPlatformInfraVariableSetConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_infra_variable_set',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0',
        providerVersionConstraint: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._identifier = config.identifier;
    this._name = config.name;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._connector.internalValue = config.connector;
    this._environmentVariable.internalValue = config.environmentVariable;
    this._terraformVariable.internalValue = config.terraformVariable;
    this._terraformVariableFile.internalValue = config.terraformVariableFile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // connector - computed: false, optional: true, required: false
  private _connector = new DataHarnessPlatformInfraVariableSetConnectorList(this, "connector", true);
  public get connector() {
    return this._connector;
  }
  public putConnector(value: DataHarnessPlatformInfraVariableSetConnector[] | cdktf.IResolvable) {
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
  private _environmentVariable = new DataHarnessPlatformInfraVariableSetEnvironmentVariableList(this, "environment_variable", true);
  public get environmentVariable() {
    return this._environmentVariable;
  }
  public putEnvironmentVariable(value: DataHarnessPlatformInfraVariableSetEnvironmentVariable[] | cdktf.IResolvable) {
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
  private _terraformVariable = new DataHarnessPlatformInfraVariableSetTerraformVariableList(this, "terraform_variable", true);
  public get terraformVariable() {
    return this._terraformVariable;
  }
  public putTerraformVariable(value: DataHarnessPlatformInfraVariableSetTerraformVariable[] | cdktf.IResolvable) {
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
  private _terraformVariableFile = new DataHarnessPlatformInfraVariableSetTerraformVariableFileList(this, "terraform_variable_file", true);
  public get terraformVariableFile() {
    return this._terraformVariableFile;
  }
  public putTerraformVariableFile(value: DataHarnessPlatformInfraVariableSetTerraformVariableFile[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      connector: cdktf.listMapper(dataHarnessPlatformInfraVariableSetConnectorToTerraform, true)(this._connector.internalValue),
      environment_variable: cdktf.listMapper(dataHarnessPlatformInfraVariableSetEnvironmentVariableToTerraform, true)(this._environmentVariable.internalValue),
      terraform_variable: cdktf.listMapper(dataHarnessPlatformInfraVariableSetTerraformVariableToTerraform, true)(this._terraformVariable.internalValue),
      terraform_variable_file: cdktf.listMapper(dataHarnessPlatformInfraVariableSetTerraformVariableFileToTerraform, true)(this._terraformVariableFile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      connector: {
        value: cdktf.listMapperHcl(dataHarnessPlatformInfraVariableSetConnectorToHclTerraform, true)(this._connector.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataHarnessPlatformInfraVariableSetConnectorList",
      },
      environment_variable: {
        value: cdktf.listMapperHcl(dataHarnessPlatformInfraVariableSetEnvironmentVariableToHclTerraform, true)(this._environmentVariable.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataHarnessPlatformInfraVariableSetEnvironmentVariableList",
      },
      terraform_variable: {
        value: cdktf.listMapperHcl(dataHarnessPlatformInfraVariableSetTerraformVariableToHclTerraform, true)(this._terraformVariable.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataHarnessPlatformInfraVariableSetTerraformVariableList",
      },
      terraform_variable_file: {
        value: cdktf.listMapperHcl(dataHarnessPlatformInfraVariableSetTerraformVariableFileToHclTerraform, true)(this._terraformVariableFile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataHarnessPlatformInfraVariableSetTerraformVariableFileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
