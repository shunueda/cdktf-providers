// https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * App instance count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#app_inst_count Application#app_inst_count}
  */
  readonly appInstCount?: number;
  /**
  * List of datastore ids containing private registry credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#datastore_id_list Application#datastore_id_list}
  */
  readonly datastoreIdList?: string[];
  /**
  * Detailed description of the edge application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#description Application#description}
  */
  readonly description?: string;
  /**
  * Flag to represent where app bundle is already imported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#is_imported Application#is_imported}
  */
  readonly isImported?: boolean | cdktf.IResolvable;
  /**
  * path to manifest.json
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#manifest_file Application#manifest_file}
  */
  readonly manifestFile?: string;
  /**
  * User defined name of the edge application, unique across the enterprise. Once object is created, name can’t be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * user defined network options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#networks Application#networks}
  */
  readonly networks?: number;
  /**
  * origin of object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#origin_type Application#origin_type}
  */
  readonly originType?: string;
  /**
  * project access list of the app bundle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#project_access_list Application#project_access_list}
  */
  readonly projectAccessList?: string[];
  /**
  * User defined title of the edge application. Title can be changed at any time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#title Application#title}
  */
  readonly title: string;
  /**
  * User defined version for the given edge-app
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#user_defined_version Application#user_defined_version}
  */
  readonly userDefinedVersion?: string;
  /**
  * manifest block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#manifest Application#manifest}
  */
  readonly manifest?: ApplicationManifest;
  /**
  * parent_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#parent_detail Application#parent_detail}
  */
  readonly parentDetail?: ApplicationParentDetail[] | cdktf.IResolvable;
}
export interface ApplicationRevision {
}

export function applicationRevisionToTerraform(struct?: ApplicationRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function applicationRevisionToHclTerraform(struct?: ApplicationRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApplicationRevisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationRevision | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class ApplicationRevisionList extends cdktf.ComplexList {

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
  public get(index: number): ApplicationRevisionOutputReference {
    return new ApplicationRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationManifestConfigurationCustomConfigVariableGroupsCondition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#name Application#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#operator Application#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#value Application#value}
  */
  readonly value?: string;
}

export function applicationManifestConfigurationCustomConfigVariableGroupsConditionToTerraform(struct?: ApplicationManifestConfigurationCustomConfigVariableGroupsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operator: cdktf.stringToTerraform(struct!.operator),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationManifestConfigurationCustomConfigVariableGroupsConditionToHclTerraform(struct?: ApplicationManifestConfigurationCustomConfigVariableGroupsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationManifestConfigurationCustomConfigVariableGroupsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationManifestConfigurationCustomConfigVariableGroupsCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationManifestConfigurationCustomConfigVariableGroupsCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operator = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operator = value.operator;
      this._value = value.value;
    }
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationManifestConfigurationCustomConfigVariableGroupsConditionList extends cdktf.ComplexList {
  public internalValue? : ApplicationManifestConfigurationCustomConfigVariableGroupsCondition[] | cdktf.IResolvable

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
  public get(index: number): ApplicationManifestConfigurationCustomConfigVariableGroupsConditionOutputReference {
    return new ApplicationManifestConfigurationCustomConfigVariableGroupsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationManifestConfigurationCustomConfigVariableGroupsVariablesOptions {
  /**
  * Display label of the key in User-Agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#label Application#label}
  */
  readonly label?: string;
  /**
  * Value of the key to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#value Application#value}
  */
  readonly value?: string;
}

export function applicationManifestConfigurationCustomConfigVariableGroupsVariablesOptionsToTerraform(struct?: ApplicationManifestConfigurationCustomConfigVariableGroupsVariablesOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label: cdktf.stringToTerraform(struct!.label),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationManifestConfigurationCustomConfigVariableGroupsVariablesOptionsToHclTerraform(struct?: ApplicationManifestConfigurationCustomConfigVariableGroupsVariablesOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationManifestConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationManifestConfigurationCustomConfigVariableGroupsVariablesOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationManifestConfigurationCustomConfigVariableGroupsVariablesOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._label = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._label = value.label;
      this._value = value.value;
    }
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationManifestConfigurationCustomConfigVariableGroupsVariablesOptionsList extends cdktf.ComplexList {
  public internalValue? : ApplicationManifestConfigurationCustomConfigVariableGroupsVariablesOptions[] | cdktf.IResolvable

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
  public get(index: number): ApplicationManifestConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference {
    return new ApplicationManifestConfigurationCustomConfigVariableGroupsVariablesOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationManifestConfigurationCustomConfigVariableGroupsVariables {
  /**
  * Default value of the variable. (Optional. Default: <Default value based on type>)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#default Application#default}
  */
  readonly default?: string;
  /**
  * Encoding of file content. Applicable if format is VARIABLE_FORMAT_FILE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#encode Application#encode}
  */
  readonly encode?: string;
  /**
  * Format of the user variable. (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#format Application#format}
  */
  readonly format: string;
  /**
  * Label for the variable (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#label Application#label}
  */
  readonly label: string;
  /**
  * Max length of the value of the variable(Optional. Default: 1024)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#max_length Application#max_length}
  */
  readonly maxLength?: string;
  /**
  * Name of the Variable (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#process_input Application#process_input}
  */
  readonly processInput?: string;
  /**
  * This variable MUST be specified when creating an App Instance. (Optional. Default: False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#required Application#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#type Application#type}
  */
  readonly type?: string;
  /**
  * User-specified value of the variable.(Required if required is true. Optional otherwise)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#value Application#value}
  */
  readonly value?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#options Application#options}
  */
  readonly options?: ApplicationManifestConfigurationCustomConfigVariableGroupsVariablesOptions[] | cdktf.IResolvable;
}

export function applicationManifestConfigurationCustomConfigVariableGroupsVariablesToTerraform(struct?: ApplicationManifestConfigurationCustomConfigVariableGroupsVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    encode: cdktf.stringToTerraform(struct!.encode),
    format: cdktf.stringToTerraform(struct!.format),
    label: cdktf.stringToTerraform(struct!.label),
    max_length: cdktf.stringToTerraform(struct!.maxLength),
    name: cdktf.stringToTerraform(struct!.name),
    process_input: cdktf.stringToTerraform(struct!.processInput),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    options: cdktf.listMapper(applicationManifestConfigurationCustomConfigVariableGroupsVariablesOptionsToTerraform, true)(struct!.options),
  }
}


export function applicationManifestConfigurationCustomConfigVariableGroupsVariablesToHclTerraform(struct?: ApplicationManifestConfigurationCustomConfigVariableGroupsVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encode: {
      value: cdktf.stringToHclTerraform(struct!.encode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_length: {
      value: cdktf.stringToHclTerraform(struct!.maxLength),
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
    process_input: {
      value: cdktf.stringToHclTerraform(struct!.processInput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
    options: {
      value: cdktf.listMapperHcl(applicationManifestConfigurationCustomConfigVariableGroupsVariablesOptionsToHclTerraform, true)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationManifestConfigurationCustomConfigVariableGroupsVariablesOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationManifestConfigurationCustomConfigVariableGroupsVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationManifestConfigurationCustomConfigVariableGroupsVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._encode !== undefined) {
      hasAnyValues = true;
      internalValueResult.encode = this._encode;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._processInput !== undefined) {
      hasAnyValues = true;
      internalValueResult.processInput = this._processInput;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationManifestConfigurationCustomConfigVariableGroupsVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._encode = undefined;
      this._format = undefined;
      this._label = undefined;
      this._maxLength = undefined;
      this._name = undefined;
      this._processInput = undefined;
      this._required = undefined;
      this._type = undefined;
      this._value = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._encode = value.encode;
      this._format = value.format;
      this._label = value.label;
      this._maxLength = value.maxLength;
      this._name = value.name;
      this._processInput = value.processInput;
      this._required = value.required;
      this._type = value.type;
      this._value = value.value;
      this._options.internalValue = value.options;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // encode - computed: false, optional: true, required: false
  private _encode?: string; 
  public get encode() {
    return this.getStringAttribute('encode');
  }
  public set encode(value: string) {
    this._encode = value;
  }
  public resetEncode() {
    this._encode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodeInput() {
    return this._encode;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: string; 
  public get maxLength() {
    return this.getStringAttribute('max_length');
  }
  public set maxLength(value: string) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
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

  // process_input - computed: false, optional: true, required: false
  private _processInput?: string; 
  public get processInput() {
    return this.getStringAttribute('process_input');
  }
  public set processInput(value: string) {
    this._processInput = value;
  }
  public resetProcessInput() {
    this._processInput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processInputInput() {
    return this._processInput;
  }

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // type - computed: false, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // options - computed: false, optional: true, required: false
  private _options = new ApplicationManifestConfigurationCustomConfigVariableGroupsVariablesOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: ApplicationManifestConfigurationCustomConfigVariableGroupsVariablesOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class ApplicationManifestConfigurationCustomConfigVariableGroupsVariablesList extends cdktf.ComplexList {
  public internalValue? : ApplicationManifestConfigurationCustomConfigVariableGroupsVariables[] | cdktf.IResolvable

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
  public get(index: number): ApplicationManifestConfigurationCustomConfigVariableGroupsVariablesOutputReference {
    return new ApplicationManifestConfigurationCustomConfigVariableGroupsVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationManifestConfigurationCustomConfigVariableGroups {
  /**
  * Name of the Variable Group(Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#name Application#name}
  */
  readonly name?: string;
  /**
  * Indicates if the variable group is required to be specified for the App Instance. (Optional. Default:False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#required Application#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#condition Application#condition}
  */
  readonly condition?: ApplicationManifestConfigurationCustomConfigVariableGroupsCondition[] | cdktf.IResolvable;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#variables Application#variables}
  */
  readonly variables?: ApplicationManifestConfigurationCustomConfigVariableGroupsVariables[] | cdktf.IResolvable;
}

export function applicationManifestConfigurationCustomConfigVariableGroupsToTerraform(struct?: ApplicationManifestConfigurationCustomConfigVariableGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    condition: cdktf.listMapper(applicationManifestConfigurationCustomConfigVariableGroupsConditionToTerraform, true)(struct!.condition),
    variables: cdktf.listMapper(applicationManifestConfigurationCustomConfigVariableGroupsVariablesToTerraform, true)(struct!.variables),
  }
}


export function applicationManifestConfigurationCustomConfigVariableGroupsToHclTerraform(struct?: ApplicationManifestConfigurationCustomConfigVariableGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    condition: {
      value: cdktf.listMapperHcl(applicationManifestConfigurationCustomConfigVariableGroupsConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationManifestConfigurationCustomConfigVariableGroupsConditionList",
    },
    variables: {
      value: cdktf.listMapperHcl(applicationManifestConfigurationCustomConfigVariableGroupsVariablesToHclTerraform, true)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationManifestConfigurationCustomConfigVariableGroupsVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationManifestConfigurationCustomConfigVariableGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationManifestConfigurationCustomConfigVariableGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationManifestConfigurationCustomConfigVariableGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._required = undefined;
      this._condition.internalValue = undefined;
      this._variables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._required = value.required;
      this._condition.internalValue = value.condition;
      this._variables.internalValue = value.variables;
    }
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new ApplicationManifestConfigurationCustomConfigVariableGroupsConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: ApplicationManifestConfigurationCustomConfigVariableGroupsCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new ApplicationManifestConfigurationCustomConfigVariableGroupsVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: ApplicationManifestConfigurationCustomConfigVariableGroupsVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }
}

export class ApplicationManifestConfigurationCustomConfigVariableGroupsList extends cdktf.ComplexList {
  public internalValue? : ApplicationManifestConfigurationCustomConfigVariableGroups[] | cdktf.IResolvable

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
  public get(index: number): ApplicationManifestConfigurationCustomConfigVariableGroupsOutputReference {
    return new ApplicationManifestConfigurationCustomConfigVariableGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationManifestConfigurationCustomConfig {
  /**
  * Add the Custom Config to App Instance (Optional. Default: False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#add Application#add}
  */
  readonly add?: boolean | cdktf.IResolvable;
  /**
  * Allow Appinstance storage to be resized after app instance is created. (Optional. Default: False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#allow_storage_resize Application#allow_storage_resize}
  */
  readonly allowStorageResize?: boolean | cdktf.IResolvable;
  /**
  * Field delimiter used in specifying variables in template. (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#field_delimiter Application#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Name of CustomConfig (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#name Application#name}
  */
  readonly name?: string;
  /**
  * Override existing custom config from App Bundle Manifest (Optional. Default: False)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#override Application#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
  /**
  * base64 encrypted template string. (Optional)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#template Application#template}
  */
  readonly template?: string;
  /**
  * variable_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#variable_groups Application#variable_groups}
  */
  readonly variableGroups?: ApplicationManifestConfigurationCustomConfigVariableGroups[] | cdktf.IResolvable;
}

export function applicationManifestConfigurationCustomConfigToTerraform(struct?: ApplicationManifestConfigurationCustomConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.booleanToTerraform(struct!.add),
    allow_storage_resize: cdktf.booleanToTerraform(struct!.allowStorageResize),
    field_delimiter: cdktf.stringToTerraform(struct!.fieldDelimiter),
    name: cdktf.stringToTerraform(struct!.name),
    override: cdktf.booleanToTerraform(struct!.override),
    template: cdktf.stringToTerraform(struct!.template),
    variable_groups: cdktf.listMapper(applicationManifestConfigurationCustomConfigVariableGroupsToTerraform, true)(struct!.variableGroups),
  }
}


export function applicationManifestConfigurationCustomConfigToHclTerraform(struct?: ApplicationManifestConfigurationCustomConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.booleanToHclTerraform(struct!.add),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_storage_resize: {
      value: cdktf.booleanToHclTerraform(struct!.allowStorageResize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    field_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.fieldDelimiter),
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
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_groups: {
      value: cdktf.listMapperHcl(applicationManifestConfigurationCustomConfigVariableGroupsToHclTerraform, true)(struct!.variableGroups),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationManifestConfigurationCustomConfigVariableGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationManifestConfigurationCustomConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationManifestConfigurationCustomConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add;
    }
    if (this._allowStorageResize !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowStorageResize = this._allowStorageResize;
    }
    if (this._fieldDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDelimiter = this._fieldDelimiter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._variableGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableGroups = this._variableGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationManifestConfigurationCustomConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add = undefined;
      this._allowStorageResize = undefined;
      this._fieldDelimiter = undefined;
      this._name = undefined;
      this._override = undefined;
      this._template = undefined;
      this._variableGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add = value.add;
      this._allowStorageResize = value.allowStorageResize;
      this._fieldDelimiter = value.fieldDelimiter;
      this._name = value.name;
      this._override = value.override;
      this._template = value.template;
      this._variableGroups.internalValue = value.variableGroups;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add?: boolean | cdktf.IResolvable; 
  public get add() {
    return this.getBooleanAttribute('add');
  }
  public set add(value: boolean | cdktf.IResolvable) {
    this._add = value;
  }
  public resetAdd() {
    this._add = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add;
  }

  // allow_storage_resize - computed: false, optional: true, required: false
  private _allowStorageResize?: boolean | cdktf.IResolvable; 
  public get allowStorageResize() {
    return this.getBooleanAttribute('allow_storage_resize');
  }
  public set allowStorageResize(value: boolean | cdktf.IResolvable) {
    this._allowStorageResize = value;
  }
  public resetAllowStorageResize() {
    this._allowStorageResize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowStorageResizeInput() {
    return this._allowStorageResize;
  }

  // field_delimiter - computed: false, optional: true, required: false
  private _fieldDelimiter?: string; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter;
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

  // override - computed: false, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // variable_groups - computed: false, optional: true, required: false
  private _variableGroups = new ApplicationManifestConfigurationCustomConfigVariableGroupsList(this, "variable_groups", false);
  public get variableGroups() {
    return this._variableGroups;
  }
  public putVariableGroups(value: ApplicationManifestConfigurationCustomConfigVariableGroups[] | cdktf.IResolvable) {
    this._variableGroups.internalValue = value;
  }
  public resetVariableGroups() {
    this._variableGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableGroupsInput() {
    return this._variableGroups.internalValue;
  }
}

export class ApplicationManifestConfigurationCustomConfigList extends cdktf.ComplexList {
  public internalValue? : ApplicationManifestConfigurationCustomConfig[] | cdktf.IResolvable

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
  public get(index: number): ApplicationManifestConfigurationCustomConfigOutputReference {
    return new ApplicationManifestConfigurationCustomConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationManifestConfiguration {
  /**
  * custom_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#custom_config Application#custom_config}
  */
  readonly customConfig?: ApplicationManifestConfigurationCustomConfig[] | cdktf.IResolvable;
}

export function applicationManifestConfigurationToTerraform(struct?: ApplicationManifestConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_config: cdktf.listMapper(applicationManifestConfigurationCustomConfigToTerraform, true)(struct!.customConfig),
  }
}


export function applicationManifestConfigurationToHclTerraform(struct?: ApplicationManifestConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_config: {
      value: cdktf.listMapperHcl(applicationManifestConfigurationCustomConfigToHclTerraform, true)(struct!.customConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationManifestConfigurationCustomConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationManifestConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationManifestConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customConfig = this._customConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationManifestConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customConfig.internalValue = value.customConfig;
    }
  }

  // custom_config - computed: false, optional: true, required: false
  private _customConfig = new ApplicationManifestConfigurationCustomConfigList(this, "custom_config", false);
  public get customConfig() {
    return this._customConfig;
  }
  public putCustomConfig(value: ApplicationManifestConfigurationCustomConfig[] | cdktf.IResolvable) {
    this._customConfig.internalValue = value;
  }
  public resetCustomConfig() {
    this._customConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigInput() {
    return this._customConfig.internalValue;
  }
}

export class ApplicationManifestConfigurationList extends cdktf.ComplexList {
  public internalValue? : ApplicationManifestConfiguration[] | cdktf.IResolvable

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
  public get(index: number): ApplicationManifestConfigurationOutputReference {
    return new ApplicationManifestConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationManifestContainerDetail {
  /**
  * Create options direct the creation of the Docker container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#container_create_option Application#container_create_option}
  */
  readonly containerCreateOption?: string;
}

export function applicationManifestContainerDetailToTerraform(struct?: ApplicationManifestContainerDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_create_option: cdktf.stringToTerraform(struct!.containerCreateOption),
  }
}


export function applicationManifestContainerDetailToHclTerraform(struct?: ApplicationManifestContainerDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_create_option: {
      value: cdktf.stringToHclTerraform(struct!.containerCreateOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationManifestContainerDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationManifestContainerDetail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerCreateOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerCreateOption = this._containerCreateOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationManifestContainerDetail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerCreateOption = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerCreateOption = value.containerCreateOption;
    }
  }

  // container_create_option - computed: false, optional: true, required: false
  private _containerCreateOption?: string; 
  public get containerCreateOption() {
    return this.getStringAttribute('container_create_option');
  }
  public set containerCreateOption(value: string) {
    this._containerCreateOption = value;
  }
  public resetContainerCreateOption() {
    this._containerCreateOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerCreateOptionInput() {
    return this._containerCreateOption;
  }
}

export class ApplicationManifestContainerDetailList extends cdktf.ComplexList {
  public internalValue? : ApplicationManifestContainerDetail[] | cdktf.IResolvable

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
  public get(index: number): ApplicationManifestContainerDetailOutputReference {
    return new ApplicationManifestContainerDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationManifestDesc {
  /**
  * UI map: AppEditPage:DeveloperPane:Developer_Agreement_Field, AppDetailsPage:DeveloperPane:Developer_Agreement_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#agreement_list Application#agreement_list}
  */
  readonly agreementList?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#app_category Application#app_category}
  */
  readonly appCategory: string;
  /**
  * UI map: AppMarketplacePage:AppCard:DescriptionField, AppEditPage:IdentityPane:CategoryField, AppDetailsPage:IdentityPane:CategoryField
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#category Application#category}
  */
  readonly category?: string;
  /**
  * UI map: AppMarketplacePage:AppCard:License, AppEditPage:IdentityPane:License, AppDetailsPage:IdentityPane:License
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#license_list Application#license_list}
  */
  readonly licenseList?: { [key: string]: string };
  /**
  * UI map: AppEditPage:IdentityPane:Logo, AppDetailsPage:IdentityPane:Logo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#logo Application#logo}
  */
  readonly logo?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#os Application#os}
  */
  readonly os?: string;
  /**
  * UI map: AppEditPage:IdentityPane:Screenshot_Fields, AppDetailsPage:IdentityPane:Screenshot_Fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#screenshot_list Application#screenshot_list}
  */
  readonly screenshotList?: { [key: string]: string };
  /**
  * UI map: AppEditPage:DeveloperPane:Support_Description_Field, AppDetailsPage:DeveloperPane:Support_Description_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#support Application#support}
  */
  readonly support?: string;
}

export function applicationManifestDescToTerraform(struct?: ApplicationManifestDesc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agreement_list: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.agreementList),
    app_category: cdktf.stringToTerraform(struct!.appCategory),
    category: cdktf.stringToTerraform(struct!.category),
    license_list: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.licenseList),
    logo: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.logo),
    os: cdktf.stringToTerraform(struct!.os),
    screenshot_list: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.screenshotList),
    support: cdktf.stringToTerraform(struct!.support),
  }
}


export function applicationManifestDescToHclTerraform(struct?: ApplicationManifestDesc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agreement_list: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.agreementList),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    app_category: {
      value: cdktf.stringToHclTerraform(struct!.appCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_list: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.licenseList),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    logo: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.logo),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    screenshot_list: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.screenshotList),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    support: {
      value: cdktf.stringToHclTerraform(struct!.support),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationManifestDescOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationManifestDesc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agreementList !== undefined) {
      hasAnyValues = true;
      internalValueResult.agreementList = this._agreementList;
    }
    if (this._appCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.appCategory = this._appCategory;
    }
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._licenseList !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseList = this._licenseList;
    }
    if (this._logo !== undefined) {
      hasAnyValues = true;
      internalValueResult.logo = this._logo;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._screenshotList !== undefined) {
      hasAnyValues = true;
      internalValueResult.screenshotList = this._screenshotList;
    }
    if (this._support !== undefined) {
      hasAnyValues = true;
      internalValueResult.support = this._support;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationManifestDesc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agreementList = undefined;
      this._appCategory = undefined;
      this._category = undefined;
      this._licenseList = undefined;
      this._logo = undefined;
      this._os = undefined;
      this._screenshotList = undefined;
      this._support = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agreementList = value.agreementList;
      this._appCategory = value.appCategory;
      this._category = value.category;
      this._licenseList = value.licenseList;
      this._logo = value.logo;
      this._os = value.os;
      this._screenshotList = value.screenshotList;
      this._support = value.support;
    }
  }

  // agreement_list - computed: false, optional: true, required: false
  private _agreementList?: { [key: string]: string }; 
  public get agreementList() {
    return this.getStringMapAttribute('agreement_list');
  }
  public set agreementList(value: { [key: string]: string }) {
    this._agreementList = value;
  }
  public resetAgreementList() {
    this._agreementList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agreementListInput() {
    return this._agreementList;
  }

  // app_category - computed: false, optional: false, required: true
  private _appCategory?: string; 
  public get appCategory() {
    return this.getStringAttribute('app_category');
  }
  public set appCategory(value: string) {
    this._appCategory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appCategoryInput() {
    return this._appCategory;
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // license_list - computed: false, optional: true, required: false
  private _licenseList?: { [key: string]: string }; 
  public get licenseList() {
    return this.getStringMapAttribute('license_list');
  }
  public set licenseList(value: { [key: string]: string }) {
    this._licenseList = value;
  }
  public resetLicenseList() {
    this._licenseList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseListInput() {
    return this._licenseList;
  }

  // logo - computed: false, optional: true, required: false
  private _logo?: { [key: string]: string }; 
  public get logo() {
    return this.getStringMapAttribute('logo');
  }
  public set logo(value: { [key: string]: string }) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // os - computed: false, optional: true, required: false
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // screenshot_list - computed: false, optional: true, required: false
  private _screenshotList?: { [key: string]: string }; 
  public get screenshotList() {
    return this.getStringMapAttribute('screenshot_list');
  }
  public set screenshotList(value: { [key: string]: string }) {
    this._screenshotList = value;
  }
  public resetScreenshotList() {
    this._screenshotList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get screenshotListInput() {
    return this._screenshotList;
  }

  // support - computed: false, optional: true, required: false
  private _support?: string; 
  public get support() {
    return this.getStringAttribute('support');
  }
  public set support(value: string) {
    this._support = value;
  }
  public resetSupport() {
    this._support = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportInput() {
    return this._support;
  }
}

export class ApplicationManifestDescList extends cdktf.ComplexList {
  public internalValue? : ApplicationManifestDesc[] | cdktf.IResolvable

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
  public get(index: number): ApplicationManifestDescOutputReference {
    return new ApplicationManifestDescOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationManifestImagesParams {
  /**
  * Name of the Parameter (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#name Application#name}
  */
  readonly name?: string;
  /**
  * Value of the parameter (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#value Application#value}
  */
  readonly value?: string;
}

export function applicationManifestImagesParamsToTerraform(struct?: ApplicationManifestImagesParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationManifestImagesParamsToHclTerraform(struct?: ApplicationManifestImagesParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationManifestImagesParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationManifestImagesParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationManifestImagesParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationManifestImagesParamsList extends cdktf.ComplexList {
  public internalValue? : ApplicationManifestImagesParams[] | cdktf.IResolvable

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
  public get(index: number): ApplicationManifestImagesParamsOutputReference {
    return new ApplicationManifestImagesParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationManifestImages {
  /**
  * UI map: AppEditPage:DrivesPane:Cleartext, AppDetailsPage:DrivesPane:ClearText_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#cleartext Application#cleartext}
  */
  readonly cleartext?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:DrivesPane:Drive_Type_Field, AppDetailsPage:DrivesPane:Drive_Type_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#drvtype Application#drvtype}
  */
  readonly drvtype?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Ignorepurge, AppDetailsPage:DrivesPane:Ignorepurgee_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#ignorepurge Application#ignorepurge}
  */
  readonly ignorepurge?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:DrivesPane:Image_Format_Field, AppDetailsPage:DrivesPane:Image_Format_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#imageformat Application#imageformat}
  */
  readonly imageformat?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Image_ID_Field, AppDetailsPage:DrivesPane:Image_ID_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#imageid Application#imageid}
  */
  readonly imageid?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Image_Name_Field, AppDetailsPage:DrivesPane:Image_Name_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#imagename Application#imagename}
  */
  readonly imagename?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Max_Size_Field, AppDetailsPage:DrivesPane:Max_Size_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#maxsize Application#maxsize}
  */
  readonly maxsize?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Mountpath, AppDetailsPage:DrivesPane:Mountpath_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#mountpath Application#mountpath}
  */
  readonly mountpath?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Preserve_Field, AppDetailsPage:DrivesPane:Preserve_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#preserve Application#preserve}
  */
  readonly preserve?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#readonly Application#readonly}
  */
  readonly readonly?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:DrivesPane:Target_Field, AppDetailsPage:DrivesPane:Target_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#target Application#target}
  */
  readonly target?: string;
  /**
  * UI map: AppEditPage:DrivesPane:Volume_Label, AppDetailsPage:DrivesPane:Volume_Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#volumelabel Application#volumelabel}
  */
  readonly volumelabel?: string;
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#params Application#params}
  */
  readonly params?: ApplicationManifestImagesParams[] | cdktf.IResolvable;
}

export function applicationManifestImagesToTerraform(struct?: ApplicationManifestImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleartext: cdktf.booleanToTerraform(struct!.cleartext),
    drvtype: cdktf.stringToTerraform(struct!.drvtype),
    ignorepurge: cdktf.booleanToTerraform(struct!.ignorepurge),
    imageformat: cdktf.stringToTerraform(struct!.imageformat),
    imageid: cdktf.stringToTerraform(struct!.imageid),
    imagename: cdktf.stringToTerraform(struct!.imagename),
    maxsize: cdktf.stringToTerraform(struct!.maxsize),
    mountpath: cdktf.stringToTerraform(struct!.mountpath),
    preserve: cdktf.booleanToTerraform(struct!.preserve),
    readonly: cdktf.booleanToTerraform(struct!.readonly),
    target: cdktf.stringToTerraform(struct!.target),
    volumelabel: cdktf.stringToTerraform(struct!.volumelabel),
    params: cdktf.listMapper(applicationManifestImagesParamsToTerraform, true)(struct!.params),
  }
}


export function applicationManifestImagesToHclTerraform(struct?: ApplicationManifestImages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleartext: {
      value: cdktf.booleanToHclTerraform(struct!.cleartext),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    drvtype: {
      value: cdktf.stringToHclTerraform(struct!.drvtype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignorepurge: {
      value: cdktf.booleanToHclTerraform(struct!.ignorepurge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    imageformat: {
      value: cdktf.stringToHclTerraform(struct!.imageformat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imageid: {
      value: cdktf.stringToHclTerraform(struct!.imageid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imagename: {
      value: cdktf.stringToHclTerraform(struct!.imagename),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maxsize: {
      value: cdktf.stringToHclTerraform(struct!.maxsize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mountpath: {
      value: cdktf.stringToHclTerraform(struct!.mountpath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    preserve: {
      value: cdktf.booleanToHclTerraform(struct!.preserve),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    readonly: {
      value: cdktf.booleanToHclTerraform(struct!.readonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumelabel: {
      value: cdktf.stringToHclTerraform(struct!.volumelabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    params: {
      value: cdktf.listMapperHcl(applicationManifestImagesParamsToHclTerraform, true)(struct!.params),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationManifestImagesParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationManifestImagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationManifestImages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleartext !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleartext = this._cleartext;
    }
    if (this._drvtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.drvtype = this._drvtype;
    }
    if (this._ignorepurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorepurge = this._ignorepurge;
    }
    if (this._imageformat !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageformat = this._imageformat;
    }
    if (this._imageid !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageid = this._imageid;
    }
    if (this._imagename !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagename = this._imagename;
    }
    if (this._maxsize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxsize = this._maxsize;
    }
    if (this._mountpath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountpath = this._mountpath;
    }
    if (this._preserve !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserve = this._preserve;
    }
    if (this._readonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readonly = this._readonly;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    if (this._volumelabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumelabel = this._volumelabel;
    }
    if (this._params?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationManifestImages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cleartext = undefined;
      this._drvtype = undefined;
      this._ignorepurge = undefined;
      this._imageformat = undefined;
      this._imageid = undefined;
      this._imagename = undefined;
      this._maxsize = undefined;
      this._mountpath = undefined;
      this._preserve = undefined;
      this._readonly = undefined;
      this._target = undefined;
      this._volumelabel = undefined;
      this._params.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cleartext = value.cleartext;
      this._drvtype = value.drvtype;
      this._ignorepurge = value.ignorepurge;
      this._imageformat = value.imageformat;
      this._imageid = value.imageid;
      this._imagename = value.imagename;
      this._maxsize = value.maxsize;
      this._mountpath = value.mountpath;
      this._preserve = value.preserve;
      this._readonly = value.readonly;
      this._target = value.target;
      this._volumelabel = value.volumelabel;
      this._params.internalValue = value.params;
    }
  }

  // cleartext - computed: false, optional: true, required: false
  private _cleartext?: boolean | cdktf.IResolvable; 
  public get cleartext() {
    return this.getBooleanAttribute('cleartext');
  }
  public set cleartext(value: boolean | cdktf.IResolvable) {
    this._cleartext = value;
  }
  public resetCleartext() {
    this._cleartext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleartextInput() {
    return this._cleartext;
  }

  // drvtype - computed: false, optional: true, required: false
  private _drvtype?: string; 
  public get drvtype() {
    return this.getStringAttribute('drvtype');
  }
  public set drvtype(value: string) {
    this._drvtype = value;
  }
  public resetDrvtype() {
    this._drvtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drvtypeInput() {
    return this._drvtype;
  }

  // ignorepurge - computed: false, optional: true, required: false
  private _ignorepurge?: boolean | cdktf.IResolvable; 
  public get ignorepurge() {
    return this.getBooleanAttribute('ignorepurge');
  }
  public set ignorepurge(value: boolean | cdktf.IResolvable) {
    this._ignorepurge = value;
  }
  public resetIgnorepurge() {
    this._ignorepurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorepurgeInput() {
    return this._ignorepurge;
  }

  // imageformat - computed: false, optional: true, required: false
  private _imageformat?: string; 
  public get imageformat() {
    return this.getStringAttribute('imageformat');
  }
  public set imageformat(value: string) {
    this._imageformat = value;
  }
  public resetImageformat() {
    this._imageformat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageformatInput() {
    return this._imageformat;
  }

  // imageid - computed: true, optional: true, required: false
  private _imageid?: string; 
  public get imageid() {
    return this.getStringAttribute('imageid');
  }
  public set imageid(value: string) {
    this._imageid = value;
  }
  public resetImageid() {
    this._imageid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageidInput() {
    return this._imageid;
  }

  // imagename - computed: false, optional: true, required: false
  private _imagename?: string; 
  public get imagename() {
    return this.getStringAttribute('imagename');
  }
  public set imagename(value: string) {
    this._imagename = value;
  }
  public resetImagename() {
    this._imagename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagenameInput() {
    return this._imagename;
  }

  // maxsize - computed: false, optional: true, required: false
  private _maxsize?: string; 
  public get maxsize() {
    return this.getStringAttribute('maxsize');
  }
  public set maxsize(value: string) {
    this._maxsize = value;
  }
  public resetMaxsize() {
    this._maxsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxsizeInput() {
    return this._maxsize;
  }

  // mountpath - computed: false, optional: true, required: false
  private _mountpath?: string; 
  public get mountpath() {
    return this.getStringAttribute('mountpath');
  }
  public set mountpath(value: string) {
    this._mountpath = value;
  }
  public resetMountpath() {
    this._mountpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountpathInput() {
    return this._mountpath;
  }

  // preserve - computed: false, optional: true, required: false
  private _preserve?: boolean | cdktf.IResolvable; 
  public get preserve() {
    return this.getBooleanAttribute('preserve');
  }
  public set preserve(value: boolean | cdktf.IResolvable) {
    this._preserve = value;
  }
  public resetPreserve() {
    this._preserve = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveInput() {
    return this._preserve;
  }

  // readonly - computed: false, optional: true, required: false
  private _readonly?: boolean | cdktf.IResolvable; 
  public get readonly() {
    return this.getBooleanAttribute('readonly');
  }
  public set readonly(value: boolean | cdktf.IResolvable) {
    this._readonly = value;
  }
  public resetReadonly() {
    this._readonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyInput() {
    return this._readonly;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // volumelabel - computed: false, optional: true, required: false
  private _volumelabel?: string; 
  public get volumelabel() {
    return this.getStringAttribute('volumelabel');
  }
  public set volumelabel(value: string) {
    this._volumelabel = value;
  }
  public resetVolumelabel() {
    this._volumelabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumelabelInput() {
    return this._volumelabel;
  }

  // params - computed: false, optional: true, required: false
  private _params = new ApplicationManifestImagesParamsList(this, "params", false);
  public get params() {
    return this._params;
  }
  public putParams(value: ApplicationManifestImagesParams[] | cdktf.IResolvable) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }
}

export class ApplicationManifestImagesList extends cdktf.ComplexList {
  public internalValue? : ApplicationManifestImages[] | cdktf.IResolvable

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
  public get(index: number): ApplicationManifestImagesOutputReference {
    return new ApplicationManifestImagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationManifestInterfacesAclsActionsLimitValue {
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#limitburst Application#limitburst}
  */
  readonly limitburst?: number;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#limitrate Application#limitrate}
  */
  readonly limitrate?: number;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#limitunit Application#limitunit}
  */
  readonly limitunit?: string;
}

export function applicationManifestInterfacesAclsActionsLimitValueToTerraform(struct?: ApplicationManifestInterfacesAclsActionsLimitValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limitburst: cdktf.numberToTerraform(struct!.limitburst),
    limitrate: cdktf.numberToTerraform(struct!.limitrate),
    limitunit: cdktf.stringToTerraform(struct!.limitunit),
  }
}


export function applicationManifestInterfacesAclsActionsLimitValueToHclTerraform(struct?: ApplicationManifestInterfacesAclsActionsLimitValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limitburst: {
      value: cdktf.numberToHclTerraform(struct!.limitburst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limitrate: {
      value: cdktf.numberToHclTerraform(struct!.limitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limitunit: {
      value: cdktf.stringToHclTerraform(struct!.limitunit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationManifestInterfacesAclsActionsLimitValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationManifestInterfacesAclsActionsLimitValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limitburst !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitburst = this._limitburst;
    }
    if (this._limitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitrate = this._limitrate;
    }
    if (this._limitunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitunit = this._limitunit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationManifestInterfacesAclsActionsLimitValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limitburst = undefined;
      this._limitrate = undefined;
      this._limitunit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limitburst = value.limitburst;
      this._limitrate = value.limitrate;
      this._limitunit = value.limitunit;
    }
  }

  // limitburst - computed: false, optional: true, required: false
  private _limitburst?: number; 
  public get limitburst() {
    return this.getNumberAttribute('limitburst');
  }
  public set limitburst(value: number) {
    this._limitburst = value;
  }
  public resetLimitburst() {
    this._limitburst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitburstInput() {
    return this._limitburst;
  }

  // limitrate - computed: false, optional: true, required: false
  private _limitrate?: number; 
  public get limitrate() {
    return this.getNumberAttribute('limitrate');
  }
  public set limitrate(value: number) {
    this._limitrate = value;
  }
  public resetLimitrate() {
    this._limitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitrateInput() {
    return this._limitrate;
  }

  // limitunit - computed: false, optional: true, required: false
  private _limitunit?: string; 
  public get limitunit() {
    return this.getStringAttribute('limitunit');
  }
  public set limitunit(value: string) {
    this._limitunit = value;
  }
  public resetLimitunit() {
    this._limitunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitunitInput() {
    return this._limitunit;
  }
}

export class ApplicationManifestInterfacesAclsActionsLimitValueList extends cdktf.ComplexList {
  public internalValue? : ApplicationManifestInterfacesAclsActionsLimitValue[] | cdktf.IResolvable

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
  public get(index: number): ApplicationManifestInterfacesAclsActionsLimitValueOutputReference {
    return new ApplicationManifestInterfacesAclsActionsLimitValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationManifestInterfacesAclsActionsPortmapto {
  /**
  * Application Port value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#app_port Application#app_port}
  */
  readonly appPort?: number;
}

export function applicationManifestInterfacesAclsActionsPortmaptoToTerraform(struct?: ApplicationManifestInterfacesAclsActionsPortmapto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_port: cdktf.numberToTerraform(struct!.appPort),
  }
}


export function applicationManifestInterfacesAclsActionsPortmaptoToHclTerraform(struct?: ApplicationManifestInterfacesAclsActionsPortmapto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_port: {
      value: cdktf.numberToHclTerraform(struct!.appPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationManifestInterfacesAclsActionsPortmaptoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationManifestInterfacesAclsActionsPortmapto | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.appPort = this._appPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationManifestInterfacesAclsActionsPortmapto | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appPort = value.appPort;
    }
  }

  // app_port - computed: false, optional: true, required: false
  private _appPort?: number; 
  public get appPort() {
    return this.getNumberAttribute('app_port');
  }
  public set appPort(value: number) {
    this._appPort = value;
  }
  public resetAppPort() {
    this._appPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPortInput() {
    return this._appPort;
  }
}

export class ApplicationManifestInterfacesAclsActionsPortmaptoList extends cdktf.ComplexList {
  public internalValue? : ApplicationManifestInterfacesAclsActionsPortmapto[] | cdktf.IResolvable

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
  public get(index: number): ApplicationManifestInterfacesAclsActionsPortmaptoOutputReference {
    return new ApplicationManifestInterfacesAclsActionsPortmaptoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationManifestInterfacesAclsActions {
  /**
  * Drop the packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#drop Application#drop}
  */
  readonly drop?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#limit Application#limit}
  */
  readonly limit?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#limitburst Application#limitburst}
  */
  readonly limitburst?: number;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#limitrate Application#limitrate}
  */
  readonly limitrate?: number;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#limitunit Application#limitunit}
  */
  readonly limitunit?: string;
  /**
  * UI map: AppDetailsPage:EnvironmentsPane, AppDetailsPage:EnvironmentsPane
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#portmap Application#portmap}
  */
  readonly portmap?: boolean | cdktf.IResolvable;
  /**
  * limit_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#limit_value Application#limit_value}
  */
  readonly limitValue?: ApplicationManifestInterfacesAclsActionsLimitValue[] | cdktf.IResolvable;
  /**
  * portmapto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#portmapto Application#portmapto}
  */
  readonly portmapto?: ApplicationManifestInterfacesAclsActionsPortmapto[] | cdktf.IResolvable;
}

export function applicationManifestInterfacesAclsActionsToTerraform(struct?: ApplicationManifestInterfacesAclsActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop: cdktf.booleanToTerraform(struct!.drop),
    limit: cdktf.booleanToTerraform(struct!.limit),
    limitburst: cdktf.numberToTerraform(struct!.limitburst),
    limitrate: cdktf.numberToTerraform(struct!.limitrate),
    limitunit: cdktf.stringToTerraform(struct!.limitunit),
    portmap: cdktf.booleanToTerraform(struct!.portmap),
    limit_value: cdktf.listMapper(applicationManifestInterfacesAclsActionsLimitValueToTerraform, true)(struct!.limitValue),
    portmapto: cdktf.listMapper(applicationManifestInterfacesAclsActionsPortmaptoToTerraform, true)(struct!.portmapto),
  }
}


export function applicationManifestInterfacesAclsActionsToHclTerraform(struct?: ApplicationManifestInterfacesAclsActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop: {
      value: cdktf.booleanToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit: {
      value: cdktf.booleanToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limitburst: {
      value: cdktf.numberToHclTerraform(struct!.limitburst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limitrate: {
      value: cdktf.numberToHclTerraform(struct!.limitrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limitunit: {
      value: cdktf.stringToHclTerraform(struct!.limitunit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    portmap: {
      value: cdktf.booleanToHclTerraform(struct!.portmap),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit_value: {
      value: cdktf.listMapperHcl(applicationManifestInterfacesAclsActionsLimitValueToHclTerraform, true)(struct!.limitValue),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationManifestInterfacesAclsActionsLimitValueList",
    },
    portmapto: {
      value: cdktf.listMapperHcl(applicationManifestInterfacesAclsActionsPortmaptoToHclTerraform, true)(struct!.portmapto),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationManifestInterfacesAclsActionsPortmaptoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationManifestInterfacesAclsActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationManifestInterfacesAclsActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._limitburst !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitburst = this._limitburst;
    }
    if (this._limitrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitrate = this._limitrate;
    }
    if (this._limitunit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitunit = this._limitunit;
    }
    if (this._portmap !== undefined) {
      hasAnyValues = true;
      internalValueResult.portmap = this._portmap;
    }
    if (this._limitValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitValue = this._limitValue?.internalValue;
    }
    if (this._portmapto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portmapto = this._portmapto?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationManifestInterfacesAclsActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._drop = undefined;
      this._limit = undefined;
      this._limitburst = undefined;
      this._limitrate = undefined;
      this._limitunit = undefined;
      this._portmap = undefined;
      this._limitValue.internalValue = undefined;
      this._portmapto.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._drop = value.drop;
      this._limit = value.limit;
      this._limitburst = value.limitburst;
      this._limitrate = value.limitrate;
      this._limitunit = value.limitunit;
      this._portmap = value.portmap;
      this._limitValue.internalValue = value.limitValue;
      this._portmapto.internalValue = value.portmapto;
    }
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: boolean | cdktf.IResolvable; 
  public get drop() {
    return this.getBooleanAttribute('drop');
  }
  public set drop(value: boolean | cdktf.IResolvable) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: boolean | cdktf.IResolvable; 
  public get limit() {
    return this.getBooleanAttribute('limit');
  }
  public set limit(value: boolean | cdktf.IResolvable) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // limitburst - computed: false, optional: true, required: false
  private _limitburst?: number; 
  public get limitburst() {
    return this.getNumberAttribute('limitburst');
  }
  public set limitburst(value: number) {
    this._limitburst = value;
  }
  public resetLimitburst() {
    this._limitburst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitburstInput() {
    return this._limitburst;
  }

  // limitrate - computed: false, optional: true, required: false
  private _limitrate?: number; 
  public get limitrate() {
    return this.getNumberAttribute('limitrate');
  }
  public set limitrate(value: number) {
    this._limitrate = value;
  }
  public resetLimitrate() {
    this._limitrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitrateInput() {
    return this._limitrate;
  }

  // limitunit - computed: false, optional: true, required: false
  private _limitunit?: string; 
  public get limitunit() {
    return this.getStringAttribute('limitunit');
  }
  public set limitunit(value: string) {
    this._limitunit = value;
  }
  public resetLimitunit() {
    this._limitunit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitunitInput() {
    return this._limitunit;
  }

  // portmap - computed: false, optional: true, required: false
  private _portmap?: boolean | cdktf.IResolvable; 
  public get portmap() {
    return this.getBooleanAttribute('portmap');
  }
  public set portmap(value: boolean | cdktf.IResolvable) {
    this._portmap = value;
  }
  public resetPortmap() {
    this._portmap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portmapInput() {
    return this._portmap;
  }

  // limit_value - computed: false, optional: true, required: false
  private _limitValue = new ApplicationManifestInterfacesAclsActionsLimitValueList(this, "limit_value", false);
  public get limitValue() {
    return this._limitValue;
  }
  public putLimitValue(value: ApplicationManifestInterfacesAclsActionsLimitValue[] | cdktf.IResolvable) {
    this._limitValue.internalValue = value;
  }
  public resetLimitValue() {
    this._limitValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitValueInput() {
    return this._limitValue.internalValue;
  }

  // portmapto - computed: false, optional: true, required: false
  private _portmapto = new ApplicationManifestInterfacesAclsActionsPortmaptoList(this, "portmapto", false);
  public get portmapto() {
    return this._portmapto;
  }
  public putPortmapto(value: ApplicationManifestInterfacesAclsActionsPortmapto[] | cdktf.IResolvable) {
    this._portmapto.internalValue = value;
  }
  public resetPortmapto() {
    this._portmapto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portmaptoInput() {
    return this._portmapto.internalValue;
  }
}

export class ApplicationManifestInterfacesAclsActionsList extends cdktf.ComplexList {
  public internalValue? : ApplicationManifestInterfacesAclsActions[] | cdktf.IResolvable

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
  public get(index: number): ApplicationManifestInterfacesAclsActionsOutputReference {
    return new ApplicationManifestInterfacesAclsActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationManifestInterfacesAclsMatches {
  /**
  * Type of Match (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#type Application#type}
  */
  readonly type?: string;
  /**
  * Value of match (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#value Application#value}
  */
  readonly value?: string;
}

export function applicationManifestInterfacesAclsMatchesToTerraform(struct?: ApplicationManifestInterfacesAclsMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationManifestInterfacesAclsMatchesToHclTerraform(struct?: ApplicationManifestInterfacesAclsMatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationManifestInterfacesAclsMatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationManifestInterfacesAclsMatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationManifestInterfacesAclsMatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // type - computed: false, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationManifestInterfacesAclsMatchesList extends cdktf.ComplexList {
  public internalValue? : ApplicationManifestInterfacesAclsMatches[] | cdktf.IResolvable

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
  public get(index: number): ApplicationManifestInterfacesAclsMatchesOutputReference {
    return new ApplicationManifestInterfacesAclsMatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationManifestInterfacesAcls {
  /**
  * Name of the Access Control List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#name Application#name}
  */
  readonly name?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#actions Application#actions}
  */
  readonly actions?: ApplicationManifestInterfacesAclsActions[] | cdktf.IResolvable;
  /**
  * matches block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#matches Application#matches}
  */
  readonly matches?: ApplicationManifestInterfacesAclsMatches[] | cdktf.IResolvable;
}

export function applicationManifestInterfacesAclsToTerraform(struct?: ApplicationManifestInterfacesAcls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    actions: cdktf.listMapper(applicationManifestInterfacesAclsActionsToTerraform, true)(struct!.actions),
    matches: cdktf.listMapper(applicationManifestInterfacesAclsMatchesToTerraform, true)(struct!.matches),
  }
}


export function applicationManifestInterfacesAclsToHclTerraform(struct?: ApplicationManifestInterfacesAcls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    actions: {
      value: cdktf.listMapperHcl(applicationManifestInterfacesAclsActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationManifestInterfacesAclsActionsList",
    },
    matches: {
      value: cdktf.listMapperHcl(applicationManifestInterfacesAclsMatchesToHclTerraform, true)(struct!.matches),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationManifestInterfacesAclsMatchesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationManifestInterfacesAclsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationManifestInterfacesAcls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._matches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matches = this._matches?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationManifestInterfacesAcls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._actions.internalValue = undefined;
      this._matches.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._actions.internalValue = value.actions;
      this._matches.internalValue = value.matches;
    }
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

  // actions - computed: false, optional: true, required: false
  private _actions = new ApplicationManifestInterfacesAclsActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: ApplicationManifestInterfacesAclsActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // matches - computed: false, optional: true, required: false
  private _matches = new ApplicationManifestInterfacesAclsMatchesList(this, "matches", false);
  public get matches() {
    return this._matches;
  }
  public putMatches(value: ApplicationManifestInterfacesAclsMatches[] | cdktf.IResolvable) {
    this._matches.internalValue = value;
  }
  public resetMatches() {
    this._matches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchesInput() {
    return this._matches.internalValue;
  }
}

export class ApplicationManifestInterfacesAclsList extends cdktf.ComplexList {
  public internalValue? : ApplicationManifestInterfacesAcls[] | cdktf.IResolvable

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
  public get(index: number): ApplicationManifestInterfacesAclsOutputReference {
    return new ApplicationManifestInterfacesAclsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationManifestInterfaces {
  /**
  * If true, a physical adapter is assigned to the edge application directly. If false, a network instance is assigned to the edge application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#directattach Application#directattach}
  */
  readonly directattach?: boolean | cdktf.IResolvable;
  /**
  * Interface name used by the edge application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#name Application#name}
  */
  readonly name?: string;
  /**
  * Indicates if the interface is optional for edge application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#optional Application#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * If true, DHCP network can't be assigned and user needs to provide a static IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#privateip Application#privateip}
  */
  readonly privateip?: boolean | cdktf.IResolvable;
  /**
  * Physical Adapter type for this interface. Applicable only when "direct attach" flag is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#type Application#type}
  */
  readonly type?: string;
  /**
  * acls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#acls Application#acls}
  */
  readonly acls?: ApplicationManifestInterfacesAcls[] | cdktf.IResolvable;
}

export function applicationManifestInterfacesToTerraform(struct?: ApplicationManifestInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directattach: cdktf.booleanToTerraform(struct!.directattach),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
    privateip: cdktf.booleanToTerraform(struct!.privateip),
    type: cdktf.stringToTerraform(struct!.type),
    acls: cdktf.listMapper(applicationManifestInterfacesAclsToTerraform, true)(struct!.acls),
  }
}


export function applicationManifestInterfacesToHclTerraform(struct?: ApplicationManifestInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directattach: {
      value: cdktf.booleanToHclTerraform(struct!.directattach),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    privateip: {
      value: cdktf.booleanToHclTerraform(struct!.privateip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acls: {
      value: cdktf.listMapperHcl(applicationManifestInterfacesAclsToHclTerraform, true)(struct!.acls),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationManifestInterfacesAclsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationManifestInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationManifestInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directattach !== undefined) {
      hasAnyValues = true;
      internalValueResult.directattach = this._directattach;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._privateip !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateip = this._privateip;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._acls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.acls = this._acls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationManifestInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directattach = undefined;
      this._name = undefined;
      this._optional = undefined;
      this._privateip = undefined;
      this._type = undefined;
      this._acls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directattach = value.directattach;
      this._name = value.name;
      this._optional = value.optional;
      this._privateip = value.privateip;
      this._type = value.type;
      this._acls.internalValue = value.acls;
    }
  }

  // directattach - computed: false, optional: true, required: false
  private _directattach?: boolean | cdktf.IResolvable; 
  public get directattach() {
    return this.getBooleanAttribute('directattach');
  }
  public set directattach(value: boolean | cdktf.IResolvable) {
    this._directattach = value;
  }
  public resetDirectattach() {
    this._directattach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directattachInput() {
    return this._directattach;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // privateip - computed: false, optional: true, required: false
  private _privateip?: boolean | cdktf.IResolvable; 
  public get privateip() {
    return this.getBooleanAttribute('privateip');
  }
  public set privateip(value: boolean | cdktf.IResolvable) {
    this._privateip = value;
  }
  public resetPrivateip() {
    this._privateip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateipInput() {
    return this._privateip;
  }

  // type - computed: false, optional: true, required: false
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

  // acls - computed: false, optional: true, required: false
  private _acls = new ApplicationManifestInterfacesAclsList(this, "acls", false);
  public get acls() {
    return this._acls;
  }
  public putAcls(value: ApplicationManifestInterfacesAcls[] | cdktf.IResolvable) {
    this._acls.internalValue = value;
  }
  public resetAcls() {
    this._acls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclsInput() {
    return this._acls.internalValue;
  }
}

export class ApplicationManifestInterfacesList extends cdktf.ComplexList {
  public internalValue? : ApplicationManifestInterfaces[] | cdktf.IResolvable

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
  public get(index: number): ApplicationManifestInterfacesOutputReference {
    return new ApplicationManifestInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationManifestModule {
  /**
  * Extra information to module to make configuration easier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#environment Application#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Type of modules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#module_type Application#module_type}
  */
  readonly moduleType?: string;
  /**
  * Send messages between modules or send messages from modules to iot hub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#routes Application#routes}
  */
  readonly routes?: { [key: string]: string };
  /**
  * Base64 encoded module twin details, desired properties of the module will be updated to reflect these values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#twin_detail Application#twin_detail}
  */
  readonly twinDetail?: string;
}

export function applicationManifestModuleToTerraform(struct?: ApplicationManifestModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    module_type: cdktf.stringToTerraform(struct!.moduleType),
    routes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.routes),
    twin_detail: cdktf.stringToTerraform(struct!.twinDetail),
  }
}


export function applicationManifestModuleToHclTerraform(struct?: ApplicationManifestModule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environment),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    module_type: {
      value: cdktf.stringToHclTerraform(struct!.moduleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.routes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    twin_detail: {
      value: cdktf.stringToHclTerraform(struct!.twinDetail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationManifestModuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationManifestModule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._moduleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleType = this._moduleType;
    }
    if (this._routes !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes;
    }
    if (this._twinDetail !== undefined) {
      hasAnyValues = true;
      internalValueResult.twinDetail = this._twinDetail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationManifestModule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environment = undefined;
      this._moduleType = undefined;
      this._routes = undefined;
      this._twinDetail = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environment = value.environment;
      this._moduleType = value.moduleType;
      this._routes = value.routes;
      this._twinDetail = value.twinDetail;
    }
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // module_type - computed: false, optional: true, required: false
  private _moduleType?: string; 
  public get moduleType() {
    return this.getStringAttribute('module_type');
  }
  public set moduleType(value: string) {
    this._moduleType = value;
  }
  public resetModuleType() {
    this._moduleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleTypeInput() {
    return this._moduleType;
  }

  // routes - computed: false, optional: true, required: false
  private _routes?: { [key: string]: string }; 
  public get routes() {
    return this.getStringMapAttribute('routes');
  }
  public set routes(value: { [key: string]: string }) {
    this._routes = value;
  }
  public resetRoutes() {
    this._routes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes;
  }

  // twin_detail - computed: false, optional: true, required: false
  private _twinDetail?: string; 
  public get twinDetail() {
    return this.getStringAttribute('twin_detail');
  }
  public set twinDetail(value: string) {
    this._twinDetail = value;
  }
  public resetTwinDetail() {
    this._twinDetail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twinDetailInput() {
    return this._twinDetail;
  }
}

export class ApplicationManifestModuleList extends cdktf.ComplexList {
  public internalValue? : ApplicationManifestModule[] | cdktf.IResolvable

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
  public get(index: number): ApplicationManifestModuleOutputReference {
    return new ApplicationManifestModuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationManifestOwner {
  /**
  * UI map: AppEditPage:IdentityPane:Category_Field, AppDetailsPage:IdentityPane:Category_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#company Application#company}
  */
  readonly company?: string;
  /**
  * UI map: AppEditPage:DeveloperPane:Email_Field, AppDetailsPage:DeveloperPane:Email_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#email Application#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#group Application#group}
  */
  readonly group?: string;
  /**
  * UI map: AppEditPage:DeveloperPane:Name_Field, AppDetailsPage:DeveloperPane:Name_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#user Application#user}
  */
  readonly user?: string;
  /**
  * UI map: AppEditPage:DeveloperPane:Website_Field, AppDetailsPage:DeveloperPane:Website_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#website Application#website}
  */
  readonly website?: string;
}

export function applicationManifestOwnerToTerraform(struct?: ApplicationManifestOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    company: cdktf.stringToTerraform(struct!.company),
    email: cdktf.stringToTerraform(struct!.email),
    group: cdktf.stringToTerraform(struct!.group),
    user: cdktf.stringToTerraform(struct!.user),
    website: cdktf.stringToTerraform(struct!.website),
  }
}


export function applicationManifestOwnerToHclTerraform(struct?: ApplicationManifestOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    company: {
      value: cdktf.stringToHclTerraform(struct!.company),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    website: {
      value: cdktf.stringToHclTerraform(struct!.website),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationManifestOwnerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationManifestOwner | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._company !== undefined) {
      hasAnyValues = true;
      internalValueResult.company = this._company;
    }
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._website !== undefined) {
      hasAnyValues = true;
      internalValueResult.website = this._website;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationManifestOwner | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._company = undefined;
      this._email = undefined;
      this._group = undefined;
      this._user = undefined;
      this._website = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._company = value.company;
      this._email = value.email;
      this._group = value.group;
      this._user = value.user;
      this._website = value.website;
    }
  }

  // company - computed: false, optional: true, required: false
  private _company?: string; 
  public get company() {
    return this.getStringAttribute('company');
  }
  public set company(value: string) {
    this._company = value;
  }
  public resetCompany() {
    this._company = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // user - computed: false, optional: true, required: false
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

  // website - computed: false, optional: true, required: false
  private _website?: string; 
  public get website() {
    return this.getStringAttribute('website');
  }
  public set website(value: string) {
    this._website = value;
  }
  public resetWebsite() {
    this._website = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websiteInput() {
    return this._website;
  }
}

export class ApplicationManifestOwnerList extends cdktf.ComplexList {
  public internalValue? : ApplicationManifestOwner[] | cdktf.IResolvable

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
  public get(index: number): ApplicationManifestOwnerOutputReference {
    return new ApplicationManifestOwnerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationManifestPermissions {
}

export function applicationManifestPermissionsToTerraform(struct?: ApplicationManifestPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function applicationManifestPermissionsToHclTerraform(struct?: ApplicationManifestPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApplicationManifestPermissionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationManifestPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationManifestPermissions | cdktf.IResolvable | undefined) {
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

export class ApplicationManifestPermissionsList extends cdktf.ComplexList {
  public internalValue? : ApplicationManifestPermissions[] | cdktf.IResolvable

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
  public get(index: number): ApplicationManifestPermissionsOutputReference {
    return new ApplicationManifestPermissionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationManifestResources {
  /**
  * Name of the Resource (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#name Application#name}
  */
  readonly name?: string;
  /**
  * Value of Resource (Required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#value Application#value}
  */
  readonly value?: string;
}

export function applicationManifestResourcesToTerraform(struct?: ApplicationManifestResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function applicationManifestResourcesToHclTerraform(struct?: ApplicationManifestResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationManifestResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationManifestResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationManifestResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApplicationManifestResourcesList extends cdktf.ComplexList {
  public internalValue? : ApplicationManifestResources[] | cdktf.IResolvable

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
  public get(index: number): ApplicationManifestResourcesOutputReference {
    return new ApplicationManifestResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationManifest {
  /**
  * UI map: N/A - not exposed to users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#ac_kind Application#ac_kind}
  */
  readonly acKind: string;
  /**
  * UI map: N/A - not exposed to users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#ac_version Application#ac_version}
  */
  readonly acVersion: string;
  /**
  * App (bundle) type. The correct values are: "APP_TYPE_UNSPECIFIED","APP_TYPE_VM","APP_TYPE_VM_RUNTIME","APP_TYPE_CONTAINER","APP_TYPE_MODULE", "APP_TYPE_DOCKER_COMPOSE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#app_type Application#app_type}
  */
  readonly appType?: string;
  /**
  * Enable CpuPinning
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#cpu_pinning_enabled Application#cpu_pinning_enabled}
  */
  readonly cpuPinningEnabled?: boolean | cdktf.IResolvable;
  /**
  * Deployment type for the app. The correct values are: "DEPLOYMENT_TYPE_UNSPECIFIED","DEPLOYMENT_TYPE_STAND_ALONE","DEPLOYMENT_TYPE_AZURE","DEPLOYMENT_TYPE_K3S","DEPLOYMENT_TYPE_AWS","DEPLOYMENT_TYPE_K3S_AZURE","DEPLOYMENT_TYPE_K3S_AWS","DEPLOYMENT_TYPE_VMWARE_VCE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#deployment_type Application#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * UI map: AppDetailsPage:IdentityPane:DescriptionField, AppMarketplacePage:AppCard:DescriptionField
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#description Application#description}
  */
  readonly description?: string;
  /**
  * UI map: AppEditPage:IdentityPane:Title_Field, AppDetailsPage:IdentityPane:Title_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#display_name Application#display_name}
  */
  readonly displayName?: string;
  /**
  * Docker compose tar image name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#docker_compose_tar_image_name Application#docker_compose_tar_image_name}
  */
  readonly dockerComposeTarImageName?: string;
  /**
  * Docker compose base64 encoded plain text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#docker_compose_yaml_text Application#docker_compose_yaml_text}
  */
  readonly dockerComposeYamlText?: string;
  /**
  * UI map: AppEditPage:IdentityPane:ENABLEVMCONFIG_Field, AppDetailsPage:IdentityPane:ENABLEVMCONFIG_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#enable_oem_win_license_key Application#enable_oem_win_license_key}
  */
  readonly enableOemWinLicenseKey?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:IdentityPane:VNC_Field, AppDetailsPage:IdentityPane:VNC_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#enablevnc Application#enablevnc}
  */
  readonly enablevnc?: boolean | cdktf.IResolvable;
  /**
  * UI map: AppEditPage:IdentityPane:Name_Field, AppDetailsPage:IdentityPane:Name_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * Size of persistent blank storage for runtime in bytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#persistent_runtime_size_bytes Application#persistent_runtime_size_bytes}
  */
  readonly persistentRuntimeSizeBytes?: string;
  /**
  * Indicates the internal communication protocol to pass configuration between Zedcloud and docker-compose runtime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#runtime_protocol_version Application#runtime_protocol_version}
  */
  readonly runtimeProtocolVersion?: string;
  /**
  * Indicates the version of container orchestration software
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#runtime_version Application#runtime_version}
  */
  readonly runtimeVersion?: string;
  /**
  * UI map: AppEditPage:IdentityPane:VM_Mode_Field, AppDetailsPage:IdentityPane:VM_Mode_Field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#vmmode Application#vmmode}
  */
  readonly vmmode?: string;
  /**
  * configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#configuration Application#configuration}
  */
  readonly configuration?: ApplicationManifestConfiguration[] | cdktf.IResolvable;
  /**
  * container_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#container_detail Application#container_detail}
  */
  readonly containerDetail?: ApplicationManifestContainerDetail[] | cdktf.IResolvable;
  /**
  * desc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#desc Application#desc}
  */
  readonly desc?: ApplicationManifestDesc[] | cdktf.IResolvable;
  /**
  * images block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#images Application#images}
  */
  readonly images?: ApplicationManifestImages[] | cdktf.IResolvable;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#interfaces Application#interfaces}
  */
  readonly interfaces?: ApplicationManifestInterfaces[] | cdktf.IResolvable;
  /**
  * module block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#module Application#module}
  */
  readonly module?: ApplicationManifestModule[] | cdktf.IResolvable;
  /**
  * owner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#owner Application#owner}
  */
  readonly owner?: ApplicationManifestOwner[] | cdktf.IResolvable;
  /**
  * permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#permissions Application#permissions}
  */
  readonly permissions?: ApplicationManifestPermissions[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#resources Application#resources}
  */
  readonly resources?: ApplicationManifestResources[] | cdktf.IResolvable;
}

export function applicationManifestToTerraform(struct?: ApplicationManifestOutputReference | ApplicationManifest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ac_kind: cdktf.stringToTerraform(struct!.acKind),
    ac_version: cdktf.stringToTerraform(struct!.acVersion),
    app_type: cdktf.stringToTerraform(struct!.appType),
    cpu_pinning_enabled: cdktf.booleanToTerraform(struct!.cpuPinningEnabled),
    deployment_type: cdktf.stringToTerraform(struct!.deploymentType),
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    docker_compose_tar_image_name: cdktf.stringToTerraform(struct!.dockerComposeTarImageName),
    docker_compose_yaml_text: cdktf.stringToTerraform(struct!.dockerComposeYamlText),
    enable_oem_win_license_key: cdktf.booleanToTerraform(struct!.enableOemWinLicenseKey),
    enablevnc: cdktf.booleanToTerraform(struct!.enablevnc),
    name: cdktf.stringToTerraform(struct!.name),
    persistent_runtime_size_bytes: cdktf.stringToTerraform(struct!.persistentRuntimeSizeBytes),
    runtime_protocol_version: cdktf.stringToTerraform(struct!.runtimeProtocolVersion),
    runtime_version: cdktf.stringToTerraform(struct!.runtimeVersion),
    vmmode: cdktf.stringToTerraform(struct!.vmmode),
    configuration: cdktf.listMapper(applicationManifestConfigurationToTerraform, true)(struct!.configuration),
    container_detail: cdktf.listMapper(applicationManifestContainerDetailToTerraform, true)(struct!.containerDetail),
    desc: cdktf.listMapper(applicationManifestDescToTerraform, true)(struct!.desc),
    images: cdktf.listMapper(applicationManifestImagesToTerraform, true)(struct!.images),
    interfaces: cdktf.listMapper(applicationManifestInterfacesToTerraform, true)(struct!.interfaces),
    module: cdktf.listMapper(applicationManifestModuleToTerraform, true)(struct!.module),
    owner: cdktf.listMapper(applicationManifestOwnerToTerraform, true)(struct!.owner),
    permissions: cdktf.listMapper(applicationManifestPermissionsToTerraform, true)(struct!.permissions),
    resources: cdktf.listMapper(applicationManifestResourcesToTerraform, true)(struct!.resources),
  }
}


export function applicationManifestToHclTerraform(struct?: ApplicationManifestOutputReference | ApplicationManifest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ac_kind: {
      value: cdktf.stringToHclTerraform(struct!.acKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ac_version: {
      value: cdktf.stringToHclTerraform(struct!.acVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_type: {
      value: cdktf.stringToHclTerraform(struct!.appType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_pinning_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.cpuPinningEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deployment_type: {
      value: cdktf.stringToHclTerraform(struct!.deploymentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_compose_tar_image_name: {
      value: cdktf.stringToHclTerraform(struct!.dockerComposeTarImageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_compose_yaml_text: {
      value: cdktf.stringToHclTerraform(struct!.dockerComposeYamlText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_oem_win_license_key: {
      value: cdktf.booleanToHclTerraform(struct!.enableOemWinLicenseKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enablevnc: {
      value: cdktf.booleanToHclTerraform(struct!.enablevnc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent_runtime_size_bytes: {
      value: cdktf.stringToHclTerraform(struct!.persistentRuntimeSizeBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.runtimeProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runtime_version: {
      value: cdktf.stringToHclTerraform(struct!.runtimeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vmmode: {
      value: cdktf.stringToHclTerraform(struct!.vmmode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    configuration: {
      value: cdktf.listMapperHcl(applicationManifestConfigurationToHclTerraform, true)(struct!.configuration),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationManifestConfigurationList",
    },
    container_detail: {
      value: cdktf.listMapperHcl(applicationManifestContainerDetailToHclTerraform, true)(struct!.containerDetail),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationManifestContainerDetailList",
    },
    desc: {
      value: cdktf.listMapperHcl(applicationManifestDescToHclTerraform, true)(struct!.desc),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationManifestDescList",
    },
    images: {
      value: cdktf.listMapperHcl(applicationManifestImagesToHclTerraform, true)(struct!.images),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationManifestImagesList",
    },
    interfaces: {
      value: cdktf.listMapperHcl(applicationManifestInterfacesToHclTerraform, true)(struct!.interfaces),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationManifestInterfacesList",
    },
    module: {
      value: cdktf.listMapperHcl(applicationManifestModuleToHclTerraform, true)(struct!.module),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationManifestModuleList",
    },
    owner: {
      value: cdktf.listMapperHcl(applicationManifestOwnerToHclTerraform, true)(struct!.owner),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationManifestOwnerList",
    },
    permissions: {
      value: cdktf.listMapperHcl(applicationManifestPermissionsToHclTerraform, true)(struct!.permissions),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationManifestPermissionsList",
    },
    resources: {
      value: cdktf.listMapperHcl(applicationManifestResourcesToHclTerraform, true)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationManifestResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationManifestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationManifest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.acKind = this._acKind;
    }
    if (this._acVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.acVersion = this._acVersion;
    }
    if (this._appType !== undefined) {
      hasAnyValues = true;
      internalValueResult.appType = this._appType;
    }
    if (this._cpuPinningEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuPinningEnabled = this._cpuPinningEnabled;
    }
    if (this._deploymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentType = this._deploymentType;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._dockerComposeTarImageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerComposeTarImageName = this._dockerComposeTarImageName;
    }
    if (this._dockerComposeYamlText !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerComposeYamlText = this._dockerComposeYamlText;
    }
    if (this._enableOemWinLicenseKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOemWinLicenseKey = this._enableOemWinLicenseKey;
    }
    if (this._enablevnc !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablevnc = this._enablevnc;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._persistentRuntimeSizeBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentRuntimeSizeBytes = this._persistentRuntimeSizeBytes;
    }
    if (this._runtimeProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeProtocolVersion = this._runtimeProtocolVersion;
    }
    if (this._runtimeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeVersion = this._runtimeVersion;
    }
    if (this._vmmode !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmmode = this._vmmode;
    }
    if (this._configuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration?.internalValue;
    }
    if (this._containerDetail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerDetail = this._containerDetail?.internalValue;
    }
    if (this._desc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.desc = this._desc?.internalValue;
    }
    if (this._images?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images?.internalValue;
    }
    if (this._interfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaces = this._interfaces?.internalValue;
    }
    if (this._module?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.module = this._module?.internalValue;
    }
    if (this._owner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner?.internalValue;
    }
    if (this._permissions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationManifest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acKind = undefined;
      this._acVersion = undefined;
      this._appType = undefined;
      this._cpuPinningEnabled = undefined;
      this._deploymentType = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._dockerComposeTarImageName = undefined;
      this._dockerComposeYamlText = undefined;
      this._enableOemWinLicenseKey = undefined;
      this._enablevnc = undefined;
      this._name = undefined;
      this._persistentRuntimeSizeBytes = undefined;
      this._runtimeProtocolVersion = undefined;
      this._runtimeVersion = undefined;
      this._vmmode = undefined;
      this._configuration.internalValue = undefined;
      this._containerDetail.internalValue = undefined;
      this._desc.internalValue = undefined;
      this._images.internalValue = undefined;
      this._interfaces.internalValue = undefined;
      this._module.internalValue = undefined;
      this._owner.internalValue = undefined;
      this._permissions.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acKind = value.acKind;
      this._acVersion = value.acVersion;
      this._appType = value.appType;
      this._cpuPinningEnabled = value.cpuPinningEnabled;
      this._deploymentType = value.deploymentType;
      this._description = value.description;
      this._displayName = value.displayName;
      this._dockerComposeTarImageName = value.dockerComposeTarImageName;
      this._dockerComposeYamlText = value.dockerComposeYamlText;
      this._enableOemWinLicenseKey = value.enableOemWinLicenseKey;
      this._enablevnc = value.enablevnc;
      this._name = value.name;
      this._persistentRuntimeSizeBytes = value.persistentRuntimeSizeBytes;
      this._runtimeProtocolVersion = value.runtimeProtocolVersion;
      this._runtimeVersion = value.runtimeVersion;
      this._vmmode = value.vmmode;
      this._configuration.internalValue = value.configuration;
      this._containerDetail.internalValue = value.containerDetail;
      this._desc.internalValue = value.desc;
      this._images.internalValue = value.images;
      this._interfaces.internalValue = value.interfaces;
      this._module.internalValue = value.module;
      this._owner.internalValue = value.owner;
      this._permissions.internalValue = value.permissions;
      this._resources.internalValue = value.resources;
    }
  }

  // ac_kind - computed: false, optional: false, required: true
  private _acKind?: string; 
  public get acKind() {
    return this.getStringAttribute('ac_kind');
  }
  public set acKind(value: string) {
    this._acKind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acKindInput() {
    return this._acKind;
  }

  // ac_version - computed: false, optional: false, required: true
  private _acVersion?: string; 
  public get acVersion() {
    return this.getStringAttribute('ac_version');
  }
  public set acVersion(value: string) {
    this._acVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acVersionInput() {
    return this._acVersion;
  }

  // app_type - computed: false, optional: true, required: false
  private _appType?: string; 
  public get appType() {
    return this.getStringAttribute('app_type');
  }
  public set appType(value: string) {
    this._appType = value;
  }
  public resetAppType() {
    this._appType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeInput() {
    return this._appType;
  }

  // cpu_pinning_enabled - computed: false, optional: true, required: false
  private _cpuPinningEnabled?: boolean | cdktf.IResolvable; 
  public get cpuPinningEnabled() {
    return this.getBooleanAttribute('cpu_pinning_enabled');
  }
  public set cpuPinningEnabled(value: boolean | cdktf.IResolvable) {
    this._cpuPinningEnabled = value;
  }
  public resetCpuPinningEnabled() {
    this._cpuPinningEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPinningEnabledInput() {
    return this._cpuPinningEnabled;
  }

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // docker_compose_tar_image_name - computed: false, optional: true, required: false
  private _dockerComposeTarImageName?: string; 
  public get dockerComposeTarImageName() {
    return this.getStringAttribute('docker_compose_tar_image_name');
  }
  public set dockerComposeTarImageName(value: string) {
    this._dockerComposeTarImageName = value;
  }
  public resetDockerComposeTarImageName() {
    this._dockerComposeTarImageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerComposeTarImageNameInput() {
    return this._dockerComposeTarImageName;
  }

  // docker_compose_yaml_text - computed: false, optional: true, required: false
  private _dockerComposeYamlText?: string; 
  public get dockerComposeYamlText() {
    return this.getStringAttribute('docker_compose_yaml_text');
  }
  public set dockerComposeYamlText(value: string) {
    this._dockerComposeYamlText = value;
  }
  public resetDockerComposeYamlText() {
    this._dockerComposeYamlText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerComposeYamlTextInput() {
    return this._dockerComposeYamlText;
  }

  // enable_oem_win_license_key - computed: false, optional: true, required: false
  private _enableOemWinLicenseKey?: boolean | cdktf.IResolvable; 
  public get enableOemWinLicenseKey() {
    return this.getBooleanAttribute('enable_oem_win_license_key');
  }
  public set enableOemWinLicenseKey(value: boolean | cdktf.IResolvable) {
    this._enableOemWinLicenseKey = value;
  }
  public resetEnableOemWinLicenseKey() {
    this._enableOemWinLicenseKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOemWinLicenseKeyInput() {
    return this._enableOemWinLicenseKey;
  }

  // enablevnc - computed: false, optional: true, required: false
  private _enablevnc?: boolean | cdktf.IResolvable; 
  public get enablevnc() {
    return this.getBooleanAttribute('enablevnc');
  }
  public set enablevnc(value: boolean | cdktf.IResolvable) {
    this._enablevnc = value;
  }
  public resetEnablevnc() {
    this._enablevnc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablevncInput() {
    return this._enablevnc;
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

  // persistent_runtime_size_bytes - computed: false, optional: true, required: false
  private _persistentRuntimeSizeBytes?: string; 
  public get persistentRuntimeSizeBytes() {
    return this.getStringAttribute('persistent_runtime_size_bytes');
  }
  public set persistentRuntimeSizeBytes(value: string) {
    this._persistentRuntimeSizeBytes = value;
  }
  public resetPersistentRuntimeSizeBytes() {
    this._persistentRuntimeSizeBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentRuntimeSizeBytesInput() {
    return this._persistentRuntimeSizeBytes;
  }

  // runtime_protocol_version - computed: false, optional: true, required: false
  private _runtimeProtocolVersion?: string; 
  public get runtimeProtocolVersion() {
    return this.getStringAttribute('runtime_protocol_version');
  }
  public set runtimeProtocolVersion(value: string) {
    this._runtimeProtocolVersion = value;
  }
  public resetRuntimeProtocolVersion() {
    this._runtimeProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeProtocolVersionInput() {
    return this._runtimeProtocolVersion;
  }

  // runtime_version - computed: false, optional: true, required: false
  private _runtimeVersion?: string; 
  public get runtimeVersion() {
    return this.getStringAttribute('runtime_version');
  }
  public set runtimeVersion(value: string) {
    this._runtimeVersion = value;
  }
  public resetRuntimeVersion() {
    this._runtimeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeVersionInput() {
    return this._runtimeVersion;
  }

  // vmmode - computed: false, optional: true, required: false
  private _vmmode?: string; 
  public get vmmode() {
    return this.getStringAttribute('vmmode');
  }
  public set vmmode(value: string) {
    this._vmmode = value;
  }
  public resetVmmode() {
    this._vmmode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmmodeInput() {
    return this._vmmode;
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration = new ApplicationManifestConfigurationList(this, "configuration", false);
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: ApplicationManifestConfiguration[] | cdktf.IResolvable) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // container_detail - computed: false, optional: true, required: false
  private _containerDetail = new ApplicationManifestContainerDetailList(this, "container_detail", false);
  public get containerDetail() {
    return this._containerDetail;
  }
  public putContainerDetail(value: ApplicationManifestContainerDetail[] | cdktf.IResolvable) {
    this._containerDetail.internalValue = value;
  }
  public resetContainerDetail() {
    this._containerDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerDetailInput() {
    return this._containerDetail.internalValue;
  }

  // desc - computed: false, optional: true, required: false
  private _desc = new ApplicationManifestDescList(this, "desc", false);
  public get desc() {
    return this._desc;
  }
  public putDesc(value: ApplicationManifestDesc[] | cdktf.IResolvable) {
    this._desc.internalValue = value;
  }
  public resetDesc() {
    this._desc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc.internalValue;
  }

  // images - computed: false, optional: true, required: false
  private _images = new ApplicationManifestImagesList(this, "images", false);
  public get images() {
    return this._images;
  }
  public putImages(value: ApplicationManifestImages[] | cdktf.IResolvable) {
    this._images.internalValue = value;
  }
  public resetImages() {
    this._images.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images.internalValue;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new ApplicationManifestInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: ApplicationManifestInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // module - computed: false, optional: true, required: false
  private _module = new ApplicationManifestModuleList(this, "module", false);
  public get module() {
    return this._module;
  }
  public putModule(value: ApplicationManifestModule[] | cdktf.IResolvable) {
    this._module.internalValue = value;
  }
  public resetModule() {
    this._module.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleInput() {
    return this._module.internalValue;
  }

  // owner - computed: false, optional: true, required: false
  private _owner = new ApplicationManifestOwnerList(this, "owner", false);
  public get owner() {
    return this._owner;
  }
  public putOwner(value: ApplicationManifestOwner[] | cdktf.IResolvable) {
    this._owner.internalValue = value;
  }
  public resetOwner() {
    this._owner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
  }

  // permissions - computed: false, optional: true, required: false
  private _permissions = new ApplicationManifestPermissionsList(this, "permissions", false);
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: ApplicationManifestPermissions[] | cdktf.IResolvable) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new ApplicationManifestResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: ApplicationManifestResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}
export interface ApplicationParentDetail {
  /**
  * Relation with child and parent object exists or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#reference_exists Application#reference_exists}
  */
  readonly referenceExists?: boolean | cdktf.IResolvable;
  /**
  * Update required flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#update_available Application#update_available}
  */
  readonly updateAvailable?: boolean | cdktf.IResolvable;
}

export function applicationParentDetailToTerraform(struct?: ApplicationParentDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    reference_exists: cdktf.booleanToTerraform(struct!.referenceExists),
    update_available: cdktf.booleanToTerraform(struct!.updateAvailable),
  }
}


export function applicationParentDetailToHclTerraform(struct?: ApplicationParentDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    reference_exists: {
      value: cdktf.booleanToHclTerraform(struct!.referenceExists),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update_available: {
      value: cdktf.booleanToHclTerraform(struct!.updateAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationParentDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationParentDetail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._referenceExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceExists = this._referenceExists;
    }
    if (this._updateAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateAvailable = this._updateAvailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationParentDetail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._referenceExists = undefined;
      this._updateAvailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._referenceExists = value.referenceExists;
      this._updateAvailable = value.updateAvailable;
    }
  }

  // id_of_parent_object - computed: true, optional: false, required: false
  public get idOfParentObject() {
    return this.getStringAttribute('id_of_parent_object');
  }

  // reference_exists - computed: false, optional: true, required: false
  private _referenceExists?: boolean | cdktf.IResolvable; 
  public get referenceExists() {
    return this.getBooleanAttribute('reference_exists');
  }
  public set referenceExists(value: boolean | cdktf.IResolvable) {
    this._referenceExists = value;
  }
  public resetReferenceExists() {
    this._referenceExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceExistsInput() {
    return this._referenceExists;
  }

  // update_available - computed: false, optional: true, required: false
  private _updateAvailable?: boolean | cdktf.IResolvable; 
  public get updateAvailable() {
    return this.getBooleanAttribute('update_available');
  }
  public set updateAvailable(value: boolean | cdktf.IResolvable) {
    this._updateAvailable = value;
  }
  public resetUpdateAvailable() {
    this._updateAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateAvailableInput() {
    return this._updateAvailable;
  }

  // version_of_parent_object - computed: true, optional: false, required: false
  public get versionOfParentObject() {
    return this.getNumberAttribute('version_of_parent_object');
  }
}

export class ApplicationParentDetailList extends cdktf.ComplexList {
  public internalValue? : ApplicationParentDetail[] | cdktf.IResolvable

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
  public get(index: number): ApplicationParentDetailOutputReference {
    return new ApplicationParentDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application zedcloud_application}
*/
export class Application extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Application resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Application to import
  * @param importFromId The id of the existing Application that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Application to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/resources/application zedcloud_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'zedcloud_application',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appInstCount = config.appInstCount;
    this._datastoreIdList = config.datastoreIdList;
    this._description = config.description;
    this._isImported = config.isImported;
    this._manifestFile = config.manifestFile;
    this._name = config.name;
    this._networks = config.networks;
    this._originType = config.originType;
    this._projectAccessList = config.projectAccessList;
    this._title = config.title;
    this._userDefinedVersion = config.userDefinedVersion;
    this._manifest.internalValue = config.manifest;
    this._parentDetail.internalValue = config.parentDetail;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_inst_count - computed: false, optional: true, required: false
  private _appInstCount?: number; 
  public get appInstCount() {
    return this.getNumberAttribute('app_inst_count');
  }
  public set appInstCount(value: number) {
    this._appInstCount = value;
  }
  public resetAppInstCount() {
    this._appInstCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appInstCountInput() {
    return this._appInstCount;
  }

  // cpus - computed: true, optional: false, required: false
  public get cpus() {
    return this.getNumberAttribute('cpus');
  }

  // datastore_id_list - computed: false, optional: true, required: false
  private _datastoreIdList?: string[]; 
  public get datastoreIdList() {
    return this.getListAttribute('datastore_id_list');
  }
  public set datastoreIdList(value: string[]) {
    this._datastoreIdList = value;
  }
  public resetDatastoreIdList() {
    this._datastoreIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreIdListInput() {
    return this._datastoreIdList;
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

  // drives - computed: true, optional: false, required: false
  public get drives() {
    return this.getNumberAttribute('drives');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_imported - computed: false, optional: true, required: false
  private _isImported?: boolean | cdktf.IResolvable; 
  public get isImported() {
    return this.getBooleanAttribute('is_imported');
  }
  public set isImported(value: boolean | cdktf.IResolvable) {
    this._isImported = value;
  }
  public resetIsImported() {
    this._isImported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isImportedInput() {
    return this._isImported;
  }

  // manifest_file - computed: false, optional: true, required: false
  private _manifestFile?: string; 
  public get manifestFile() {
    return this.getStringAttribute('manifest_file');
  }
  public set manifestFile(value: string) {
    this._manifestFile = value;
  }
  public resetManifestFile() {
    this._manifestFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestFileInput() {
    return this._manifestFile;
  }

  // memory - computed: true, optional: false, required: false
  public get memory() {
    return this.getNumberAttribute('memory');
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

  // networks - computed: true, optional: true, required: false
  private _networks?: number; 
  public get networks() {
    return this.getNumberAttribute('networks');
  }
  public set networks(value: number) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // origin_type - computed: true, optional: true, required: false
  private _originType?: string; 
  public get originType() {
    return this.getStringAttribute('origin_type');
  }
  public set originType(value: string) {
    this._originType = value;
  }
  public resetOriginType() {
    this._originType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originTypeInput() {
    return this._originType;
  }

  // project_access_list - computed: false, optional: true, required: false
  private _projectAccessList?: string[]; 
  public get projectAccessList() {
    return this.getListAttribute('project_access_list');
  }
  public set projectAccessList(value: string[]) {
    this._projectAccessList = value;
  }
  public resetProjectAccessList() {
    this._projectAccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectAccessListInput() {
    return this._projectAccessList;
  }

  // revision - computed: true, optional: false, required: false
  private _revision = new ApplicationRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }

  // storage - computed: true, optional: false, required: false
  public get storage() {
    return this.getNumberAttribute('storage');
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // user_defined_version - computed: true, optional: true, required: false
  private _userDefinedVersion?: string; 
  public get userDefinedVersion() {
    return this.getStringAttribute('user_defined_version');
  }
  public set userDefinedVersion(value: string) {
    this._userDefinedVersion = value;
  }
  public resetUserDefinedVersion() {
    this._userDefinedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDefinedVersionInput() {
    return this._userDefinedVersion;
  }

  // manifest - computed: false, optional: true, required: false
  private _manifest = new ApplicationManifestOutputReference(this, "manifest");
  public get manifest() {
    return this._manifest;
  }
  public putManifest(value: ApplicationManifest) {
    this._manifest.internalValue = value;
  }
  public resetManifest() {
    this._manifest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestInput() {
    return this._manifest.internalValue;
  }

  // parent_detail - computed: false, optional: true, required: false
  private _parentDetail = new ApplicationParentDetailList(this, "parent_detail", false);
  public get parentDetail() {
    return this._parentDetail;
  }
  public putParentDetail(value: ApplicationParentDetail[] | cdktf.IResolvable) {
    this._parentDetail.internalValue = value;
  }
  public resetParentDetail() {
    this._parentDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDetailInput() {
    return this._parentDetail.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_inst_count: cdktf.numberToTerraform(this._appInstCount),
      datastore_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._datastoreIdList),
      description: cdktf.stringToTerraform(this._description),
      is_imported: cdktf.booleanToTerraform(this._isImported),
      manifest_file: cdktf.stringToTerraform(this._manifestFile),
      name: cdktf.stringToTerraform(this._name),
      networks: cdktf.numberToTerraform(this._networks),
      origin_type: cdktf.stringToTerraform(this._originType),
      project_access_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._projectAccessList),
      title: cdktf.stringToTerraform(this._title),
      user_defined_version: cdktf.stringToTerraform(this._userDefinedVersion),
      manifest: applicationManifestToTerraform(this._manifest.internalValue),
      parent_detail: cdktf.listMapper(applicationParentDetailToTerraform, true)(this._parentDetail.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_inst_count: {
        value: cdktf.numberToHclTerraform(this._appInstCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      datastore_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._datastoreIdList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_imported: {
        value: cdktf.booleanToHclTerraform(this._isImported),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manifest_file: {
        value: cdktf.stringToHclTerraform(this._manifestFile),
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
      networks: {
        value: cdktf.numberToHclTerraform(this._networks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      origin_type: {
        value: cdktf.stringToHclTerraform(this._originType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_access_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._projectAccessList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_defined_version: {
        value: cdktf.stringToHclTerraform(this._userDefinedVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manifest: {
        value: applicationManifestToHclTerraform(this._manifest.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationManifestList",
      },
      parent_detail: {
        value: cdktf.listMapperHcl(applicationParentDetailToHclTerraform, true)(this._parentDetail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationParentDetailList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
