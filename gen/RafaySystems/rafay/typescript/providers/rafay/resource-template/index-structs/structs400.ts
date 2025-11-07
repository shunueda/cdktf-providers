import * as cdktf from 'cdktf';
import { ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFilesOptions,
resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFilesOptionsToTerraform,
resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFilesOptionsToHclTerraform,
ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFilesOptionsOutputReference,
ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataEnvs,
resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataEnvsToTerraform,
resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataEnvsToHclTerraform,
ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataEnvsList,
ResourceTemplateSpecActionsWorkflowsTasksDriverDataConfig,
resourceTemplateSpecActionsWorkflowsTasksDriverDataConfigToTerraform,
resourceTemplateSpecActionsWorkflowsTasksDriverDataConfigToHclTerraform,
ResourceTemplateSpecActionsWorkflowsTasksDriverDataConfigOutputReference } from './structs0'
export interface ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFiles {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#data ResourceTemplate#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#mount_path ResourceTemplate#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#name ResourceTemplate#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#sensitive ResourceTemplate#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#options ResourceTemplate#options}
  */
  readonly options?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFilesOptions;
}

export function resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFilesToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFilesOptionsToTerraform(struct!.options),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFilesToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    options: {
      value: resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFilesOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFilesOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._data = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._sensitive = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._data = value.data;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._sensitive = value.sensitive;
      this._options.internalValue = value.options;
    }
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // options - computed: false, optional: true, required: false
  private _options = new ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFilesOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFilesOptions) {
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

export class ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFilesList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFiles[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFilesOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsOverride {
  /**
  * Display overridden values on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#display_overridden ResourceTemplate#display_overridden}
  */
  readonly displayOverridden?: boolean | cdktf.IResolvable;
  /**
  * If the override type is restricted_key_values, values it is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#restricted_key_values ResourceTemplate#restricted_key_values}
  */
  readonly restrictedKeyValues?: { [key: string]: string };
  /**
  * If the override type is restricted, values it is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#restricted_values ResourceTemplate#restricted_values}
  */
  readonly restrictedValues?: string[];
  /**
  * Used to alias a variable and restrict the override scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#selectors ResourceTemplate#selectors}
  */
  readonly selectors?: string[];
  /**
  * Specify the type of ovverride this variable supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#type ResourceTemplate#type}
  */
  readonly type?: string;
}

export function resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsOverrideToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsOverrideOutputReference | ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_overridden: cdktf.booleanToTerraform(struct!.displayOverridden),
    restricted_key_values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.restrictedKeyValues),
    restricted_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedValues),
    selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectors),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsOverrideToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsOverrideOutputReference | ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_overridden: {
      value: cdktf.booleanToHclTerraform(struct!.displayOverridden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restricted_key_values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.restrictedKeyValues),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    restricted_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayOverridden !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayOverridden = this._displayOverridden;
    }
    if (this._restrictedKeyValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedKeyValues = this._restrictedKeyValues;
    }
    if (this._restrictedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedValues = this._restrictedValues;
    }
    if (this._selectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayOverridden = undefined;
      this._restrictedKeyValues = undefined;
      this._restrictedValues = undefined;
      this._selectors = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayOverridden = value.displayOverridden;
      this._restrictedKeyValues = value.restrictedKeyValues;
      this._restrictedValues = value.restrictedValues;
      this._selectors = value.selectors;
      this._type = value.type;
    }
  }

  // display_overridden - computed: false, optional: true, required: false
  private _displayOverridden?: boolean | cdktf.IResolvable; 
  public get displayOverridden() {
    return this.getBooleanAttribute('display_overridden');
  }
  public set displayOverridden(value: boolean | cdktf.IResolvable) {
    this._displayOverridden = value;
  }
  public resetDisplayOverridden() {
    this._displayOverridden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOverriddenInput() {
    return this._displayOverridden;
  }

  // restricted_key_values - computed: false, optional: true, required: false
  private _restrictedKeyValues?: { [key: string]: string }; 
  public get restrictedKeyValues() {
    return this.getStringMapAttribute('restricted_key_values');
  }
  public set restrictedKeyValues(value: { [key: string]: string }) {
    this._restrictedKeyValues = value;
  }
  public resetRestrictedKeyValues() {
    this._restrictedKeyValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedKeyValuesInput() {
    return this._restrictedKeyValues;
  }

  // restricted_values - computed: false, optional: true, required: false
  private _restrictedValues?: string[]; 
  public get restrictedValues() {
    return this.getListAttribute('restricted_values');
  }
  public set restrictedValues(value: string[]) {
    this._restrictedValues = value;
  }
  public resetRestrictedValues() {
    this._restrictedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedValuesInput() {
    return this._restrictedValues;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors?: string[]; 
  public get selectors() {
    return this.getListAttribute('selectors');
  }
  public set selectors(value: string[]) {
    this._selectors = value;
  }
  public resetSelectors() {
    this._selectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors;
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
}
export interface ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#jsonschema ResourceTemplate#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#uischema ResourceTemplate#uischema}
  */
  readonly uischema?: string;
}

export function resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsSchemaToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsSchemaOutputReference | ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsSchemaToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsSchemaOutputReference | ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jsonschema: {
      value: cdktf.stringToHclTerraform(struct!.jsonschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uischema: {
      value: cdktf.stringToHclTerraform(struct!.uischema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonschema = this._jsonschema;
    }
    if (this._uischema !== undefined) {
      hasAnyValues = true;
      internalValueResult.uischema = this._uischema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonschema = undefined;
      this._uischema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonschema = value.jsonschema;
      this._uischema = value.uischema;
    }
  }

  // jsonschema - computed: false, optional: true, required: false
  private _jsonschema?: string; 
  public get jsonschema() {
    return this.getStringAttribute('jsonschema');
  }
  public set jsonschema(value: string) {
    this._jsonschema = value;
  }
  public resetJsonschema() {
    this._jsonschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonschemaInput() {
    return this._jsonschema;
  }

  // uischema - computed: false, optional: true, required: false
  private _uischema?: string; 
  public get uischema() {
    return this.getStringAttribute('uischema');
  }
  public set uischema(value: string) {
    this._uischema = value;
  }
  public resetUischema() {
    this._uischema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uischemaInput() {
    return this._uischema;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptions {
  /**
  * Description of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#description ResourceTemplate#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render variable on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#display_metadata ResourceTemplate#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the variable is immutable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#immutable ResourceTemplate#immutable}
  */
  readonly immutable?: boolean | cdktf.IResolvable;
  /**
  * Specify whether this variable is required or optional, by default it is optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#required ResourceTemplate#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the value is sensitive or not, accordingly applies encryption on it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#sensitive ResourceTemplate#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#override ResourceTemplate#override}
  */
  readonly override?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#schema ResourceTemplate#schema}
  */
  readonly schema?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsSchema;
}

export function resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsOutputReference | ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    immutable: cdktf.booleanToTerraform(struct!.immutable),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsOverrideToTerraform(struct!.override),
    schema: resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsSchemaToTerraform(struct!.schema),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsOutputReference | ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_metadata: {
      value: cdktf.stringToHclTerraform(struct!.displayMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    immutable: {
      value: cdktf.booleanToHclTerraform(struct!.immutable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsOverrideList",
    },
    schema: {
      value: resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMetadata = this._displayMetadata;
    }
    if (this._immutable !== undefined) {
      hasAnyValues = true;
      internalValueResult.immutable = this._immutable;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayMetadata = undefined;
      this._immutable = undefined;
      this._required = undefined;
      this._sensitive = undefined;
      this._override.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayMetadata = value.displayMetadata;
      this._immutable = value.immutable;
      this._required = value.required;
      this._sensitive = value.sensitive;
      this._override.internalValue = value.override;
      this._schema.internalValue = value.schema;
    }
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

  // display_metadata - computed: true, optional: true, required: false
  private _displayMetadata?: string; 
  public get displayMetadata() {
    return this.getStringAttribute('display_metadata');
  }
  public set displayMetadata(value: string) {
    this._displayMetadata = value;
  }
  public resetDisplayMetadata() {
    this._displayMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayMetadataInput() {
    return this._displayMetadata;
  }

  // immutable - computed: false, optional: true, required: false
  private _immutable?: boolean | cdktf.IResolvable; 
  public get immutable() {
    return this.getBooleanAttribute('immutable');
  }
  public set immutable(value: boolean | cdktf.IResolvable) {
    this._immutable = value;
  }
  public resetImmutable() {
    this._immutable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immutableInput() {
    return this._immutable;
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

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // override - computed: false, optional: true, required: false
  private _override = new ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsOverride) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariables {
  /**
  * Name of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#name ResourceTemplate#name}
  */
  readonly name: string;
  /**
  * Value of the variable in the specified format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#value ResourceTemplate#value}
  */
  readonly value?: string;
  /**
  * Specify the variable value type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#value_type ResourceTemplate#value_type}
  */
  readonly valueType: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#options ResourceTemplate#options}
  */
  readonly options?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptions;
}

export function resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
    options: resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsToTerraform(struct!.options),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariables | cdktf.IResolvable): any {
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
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariables | cdktf.IResolvable | undefined {
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
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueType = undefined;
      this._options.internalValue = undefined;
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
      this._valueType = value.valueType;
      this._options.internalValue = value.options;
    }
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

  // options - computed: false, optional: true, required: false
  private _options = new ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOptions) {
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

export class ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariables[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsData {
  /**
  * envs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#envs ResourceTemplate#envs}
  */
  readonly envs?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataEnvs[] | cdktf.IResolvable;
  /**
  * files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#files ResourceTemplate#files}
  */
  readonly files?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFiles[] | cdktf.IResolvable;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#variables ResourceTemplate#variables}
  */
  readonly variables?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariables[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataOutputReference | ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    envs: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataEnvsToTerraform, true)(struct!.envs),
    files: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFilesToTerraform, true)(struct!.files),
    variables: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesToTerraform, true)(struct!.variables),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataOutputReference | ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    envs: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataEnvsToHclTerraform, true)(struct!.envs),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataEnvsList",
    },
    files: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFilesToHclTerraform, true)(struct!.files),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFilesList",
    },
    variables: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesToHclTerraform, true)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._envs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envs = this._envs?.internalValue;
    }
    if (this._files?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files?.internalValue;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._envs.internalValue = undefined;
      this._files.internalValue = undefined;
      this._variables.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._envs.internalValue = value.envs;
      this._files.internalValue = value.files;
      this._variables.internalValue = value.variables;
    }
  }

  // envs - computed: false, optional: true, required: false
  private _envs = new ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataEnvsList(this, "envs", false);
  public get envs() {
    return this._envs;
  }
  public putEnvs(value: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataEnvs[] | cdktf.IResolvable) {
    this._envs.internalValue = value;
  }
  public resetEnvs() {
    this._envs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envsInput() {
    return this._envs.internalValue;
  }

  // files - computed: false, optional: true, required: false
  private _files = new ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFilesList(this, "files", false);
  public get files() {
    return this._files;
  }
  public putFiles(value: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataFiles[] | cdktf.IResolvable) {
    this._files.internalValue = value;
  }
  public resetFiles() {
    this._files.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataVariables[] | cdktf.IResolvable) {
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
export interface ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputs {
  /**
  * Name of the config context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#name ResourceTemplate#name}
  */
  readonly name?: string;
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#data ResourceTemplate#data}
  */
  readonly data?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsData;
}

export function resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    data: resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataToTerraform(struct!.data),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputs | cdktf.IResolvable): any {
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
    data: {
      value: resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._data.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._data.internalValue = value.data;
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

  // data - computed: false, optional: true, required: false
  private _data = new ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsData) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputs[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksDriverData {
  /**
  * Specify the output data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#outputs ResourceTemplate#outputs}
  */
  readonly outputs?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#config ResourceTemplate#config}
  */
  readonly config?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataConfig;
  /**
  * inputs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#inputs ResourceTemplate#inputs}
  */
  readonly inputs?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputs[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksDriverDataToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataOutputReference | ResourceTemplateSpecActionsWorkflowsTasksDriverData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    outputs: cdktf.stringToTerraform(struct!.outputs),
    config: resourceTemplateSpecActionsWorkflowsTasksDriverDataConfigToTerraform(struct!.config),
    inputs: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsToTerraform, true)(struct!.inputs),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksDriverDataToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksDriverDataOutputReference | ResourceTemplateSpecActionsWorkflowsTasksDriverData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    outputs: {
      value: cdktf.stringToHclTerraform(struct!.outputs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: resourceTemplateSpecActionsWorkflowsTasksDriverDataConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksDriverDataConfigList",
    },
    inputs: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksDriverDataInputsToHclTerraform, true)(struct!.inputs),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksDriverDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksDriverData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputs = this._outputs;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._inputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputs = this._inputs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksDriverData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputs = undefined;
      this._config.internalValue = undefined;
      this._inputs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputs = value.outputs;
      this._config.internalValue = value.config;
      this._inputs.internalValue = value.inputs;
    }
  }

  // outputs - computed: false, optional: true, required: false
  private _outputs?: string; 
  public get outputs() {
    return this.getStringAttribute('outputs');
  }
  public set outputs(value: string) {
    this._outputs = value;
  }
  public resetOutputs() {
    this._outputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInput() {
    return this._outputs;
  }

  // config - computed: false, optional: true, required: false
  private _config = new ResourceTemplateSpecActionsWorkflowsTasksDriverDataConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: ResourceTemplateSpecActionsWorkflowsTasksDriverDataConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // inputs - computed: false, optional: true, required: false
  private _inputs = new ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputsList(this, "inputs", false);
  public get inputs() {
    return this._inputs;
  }
  public putInputs(value: ResourceTemplateSpecActionsWorkflowsTasksDriverDataInputs[] | cdktf.IResolvable) {
    this._inputs.internalValue = value;
  }
  public resetInputs() {
    this._inputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputsInput() {
    return this._inputs.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksDriver {
  /**
  * Name of the workflow handler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#name ResourceTemplate#name}
  */
  readonly name?: string;
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#data ResourceTemplate#data}
  */
  readonly data?: ResourceTemplateSpecActionsWorkflowsTasksDriverData;
}

export function resourceTemplateSpecActionsWorkflowsTasksDriverToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksDriverOutputReference | ResourceTemplateSpecActionsWorkflowsTasksDriver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    data: resourceTemplateSpecActionsWorkflowsTasksDriverDataToTerraform(struct!.data),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksDriverToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksDriverOutputReference | ResourceTemplateSpecActionsWorkflowsTasksDriver): any {
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
    data: {
      value: resourceTemplateSpecActionsWorkflowsTasksDriverDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksDriverDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksDriverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksDriver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._data?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksDriver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._data.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._data.internalValue = value.data;
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

  // data - computed: false, optional: true, required: false
  private _data = new ResourceTemplateSpecActionsWorkflowsTasksDriverDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: ResourceTemplateSpecActionsWorkflowsTasksDriverData) {
    this._data.internalValue = value;
  }
  public resetData() {
    this._data.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalEmail {
}

export function resourceTemplateSpecActionsWorkflowsTasksOptionsApprovalEmailToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalEmailOutputReference | ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksOptionsApprovalEmailToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalEmailOutputReference | ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalEmail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalEmailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalEmail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalEmail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalGithubPullRequest {
}

export function resourceTemplateSpecActionsWorkflowsTasksOptionsApprovalGithubPullRequestToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalGithubPullRequestOutputReference | ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalGithubPullRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksOptionsApprovalGithubPullRequestToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalGithubPullRequestOutputReference | ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalGithubPullRequest): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalGithubPullRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalGithubPullRequest | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalGithubPullRequest | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalInternal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#emails ResourceTemplate#emails}
  */
  readonly emails?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksOptionsApprovalInternalToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalInternalOutputReference | ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    emails: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emails),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksOptionsApprovalInternalToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalInternalOutputReference | ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalInternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    emails: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emails),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalInternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalInternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emails !== undefined) {
      hasAnyValues = true;
      internalValueResult.emails = this._emails;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalInternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._emails = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._emails = value.emails;
    }
  }

  // emails - computed: false, optional: true, required: false
  private _emails?: string[]; 
  public get emails() {
    return this.getListAttribute('emails');
  }
  public set emails(value: string[]) {
    this._emails = value;
  }
  public resetEmails() {
    this._emails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsInput() {
    return this._emails;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalJira {
}

export function resourceTemplateSpecActionsWorkflowsTasksOptionsApprovalJiraToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalJiraOutputReference | ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalJira): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksOptionsApprovalJiraToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalJiraOutputReference | ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalJira): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalJiraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalJira | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalJira | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksOptionsApproval {
  /**
  * Specify the approval options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#type ResourceTemplate#type}
  */
  readonly type?: string;
  /**
  * email block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#email ResourceTemplate#email}
  */
  readonly email?: ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalEmail;
  /**
  * github_pull_request block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#github_pull_request ResourceTemplate#github_pull_request}
  */
  readonly githubPullRequest?: ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalGithubPullRequest;
  /**
  * internal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#internal ResourceTemplate#internal}
  */
  readonly internal?: ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalInternal;
  /**
  * jira block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#jira ResourceTemplate#jira}
  */
  readonly jira?: ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalJira;
}

export function resourceTemplateSpecActionsWorkflowsTasksOptionsApprovalToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalOutputReference | ResourceTemplateSpecActionsWorkflowsTasksOptionsApproval): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    email: resourceTemplateSpecActionsWorkflowsTasksOptionsApprovalEmailToTerraform(struct!.email),
    github_pull_request: resourceTemplateSpecActionsWorkflowsTasksOptionsApprovalGithubPullRequestToTerraform(struct!.githubPullRequest),
    internal: resourceTemplateSpecActionsWorkflowsTasksOptionsApprovalInternalToTerraform(struct!.internal),
    jira: resourceTemplateSpecActionsWorkflowsTasksOptionsApprovalJiraToTerraform(struct!.jira),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksOptionsApprovalToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalOutputReference | ResourceTemplateSpecActionsWorkflowsTasksOptionsApproval): any {
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
    email: {
      value: resourceTemplateSpecActionsWorkflowsTasksOptionsApprovalEmailToHclTerraform(struct!.email),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalEmailList",
    },
    github_pull_request: {
      value: resourceTemplateSpecActionsWorkflowsTasksOptionsApprovalGithubPullRequestToHclTerraform(struct!.githubPullRequest),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalGithubPullRequestList",
    },
    internal: {
      value: resourceTemplateSpecActionsWorkflowsTasksOptionsApprovalInternalToHclTerraform(struct!.internal),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalInternalList",
    },
    jira: {
      value: resourceTemplateSpecActionsWorkflowsTasksOptionsApprovalJiraToHclTerraform(struct!.jira),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalJiraList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksOptionsApproval | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._githubPullRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubPullRequest = this._githubPullRequest?.internalValue;
    }
    if (this._internal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internal = this._internal?.internalValue;
    }
    if (this._jira?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jira = this._jira?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksOptionsApproval | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._email.internalValue = undefined;
      this._githubPullRequest.internalValue = undefined;
      this._internal.internalValue = undefined;
      this._jira.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._email.internalValue = value.email;
      this._githubPullRequest.internalValue = value.githubPullRequest;
      this._internal.internalValue = value.internal;
      this._jira.internalValue = value.jira;
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

  // email - computed: false, optional: true, required: false
  private _email = new ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalEmailOutputReference(this, "email");
  public get email() {
    return this._email;
  }
  public putEmail(value: ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalEmail) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // github_pull_request - computed: false, optional: true, required: false
  private _githubPullRequest = new ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalGithubPullRequestOutputReference(this, "github_pull_request");
  public get githubPullRequest() {
    return this._githubPullRequest;
  }
  public putGithubPullRequest(value: ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalGithubPullRequest) {
    this._githubPullRequest.internalValue = value;
  }
  public resetGithubPullRequest() {
    this._githubPullRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubPullRequestInput() {
    return this._githubPullRequest.internalValue;
  }

  // internal - computed: false, optional: true, required: false
  private _internal = new ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalInternalOutputReference(this, "internal");
  public get internal() {
    return this._internal;
  }
  public putInternal(value: ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalInternal) {
    this._internal.internalValue = value;
  }
  public resetInternal() {
    this._internal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalInput() {
    return this._internal.internalValue;
  }

  // jira - computed: false, optional: true, required: false
  private _jira = new ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalJiraOutputReference(this, "jira");
  public get jira() {
    return this._jira;
  }
  public putJira(value: ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalJira) {
    this._jira.internalValue = value;
  }
  public resetJira() {
    this._jira.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jiraInput() {
    return this._jira.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksOptionsContainer {
  /**
  * Specify the set of arguments to be passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#arguments ResourceTemplate#arguments}
  */
  readonly arguments?: string[];
  /**
  * Specify the set of commands to be executed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#commands ResourceTemplate#commands}
  */
  readonly commands?: string[];
  /**
  * Specify the cpu limit in milli
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#cpu_limit_milli ResourceTemplate#cpu_limit_milli}
  */
  readonly cpuLimitMilli?: string;
  /**
  * Specify the environment variables to be set in key,value pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#envvars ResourceTemplate#envvars}
  */
  readonly envvars?: { [key: string]: string };
  /**
  * Specify the container image to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#image ResourceTemplate#image}
  */
  readonly image?: string;
  /**
  * Specify the memory limit to be allocated in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#memory_limit_mb ResourceTemplate#memory_limit_mb}
  */
  readonly memoryLimitMb?: string;
  /**
  * Specify the success condition of the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#success_condition ResourceTemplate#success_condition}
  */
  readonly successCondition?: string;
  /**
  * Specify the working directory path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#working_dir_path ResourceTemplate#working_dir_path}
  */
  readonly workingDirPath?: string;
}

export function resourceTemplateSpecActionsWorkflowsTasksOptionsContainerToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksOptionsContainerOutputReference | ResourceTemplateSpecActionsWorkflowsTasksOptionsContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.arguments),
    commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commands),
    cpu_limit_milli: cdktf.stringToTerraform(struct!.cpuLimitMilli),
    envvars: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envvars),
    image: cdktf.stringToTerraform(struct!.image),
    memory_limit_mb: cdktf.stringToTerraform(struct!.memoryLimitMb),
    success_condition: cdktf.stringToTerraform(struct!.successCondition),
    working_dir_path: cdktf.stringToTerraform(struct!.workingDirPath),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksOptionsContainerToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksOptionsContainerOutputReference | ResourceTemplateSpecActionsWorkflowsTasksOptionsContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arguments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.arguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cpu_limit_milli: {
      value: cdktf.stringToHclTerraform(struct!.cpuLimitMilli),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    envvars: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envvars),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_limit_mb: {
      value: cdktf.stringToHclTerraform(struct!.memoryLimitMb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_condition: {
      value: cdktf.stringToHclTerraform(struct!.successCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    working_dir_path: {
      value: cdktf.stringToHclTerraform(struct!.workingDirPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksOptionsContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksOptionsContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._cpuLimitMilli !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimitMilli = this._cpuLimitMilli;
    }
    if (this._envvars !== undefined) {
      hasAnyValues = true;
      internalValueResult.envvars = this._envvars;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._memoryLimitMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimitMb = this._memoryLimitMb;
    }
    if (this._successCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.successCondition = this._successCondition;
    }
    if (this._workingDirPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDirPath = this._workingDirPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksOptionsContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arguments = undefined;
      this._commands = undefined;
      this._cpuLimitMilli = undefined;
      this._envvars = undefined;
      this._image = undefined;
      this._memoryLimitMb = undefined;
      this._successCondition = undefined;
      this._workingDirPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arguments = value.arguments;
      this._commands = value.commands;
      this._cpuLimitMilli = value.cpuLimitMilli;
      this._envvars = value.envvars;
      this._image = value.image;
      this._memoryLimitMb = value.memoryLimitMb;
      this._successCondition = value.successCondition;
      this._workingDirPath = value.workingDirPath;
    }
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments?: string[]; 
  public get arguments() {
    return this.getListAttribute('arguments');
  }
  public set arguments(value: string[]) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // commands - computed: false, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // cpu_limit_milli - computed: false, optional: true, required: false
  private _cpuLimitMilli?: string; 
  public get cpuLimitMilli() {
    return this.getStringAttribute('cpu_limit_milli');
  }
  public set cpuLimitMilli(value: string) {
    this._cpuLimitMilli = value;
  }
  public resetCpuLimitMilli() {
    this._cpuLimitMilli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitMilliInput() {
    return this._cpuLimitMilli;
  }

  // envvars - computed: false, optional: true, required: false
  private _envvars?: { [key: string]: string }; 
  public get envvars() {
    return this.getStringMapAttribute('envvars');
  }
  public set envvars(value: { [key: string]: string }) {
    this._envvars = value;
  }
  public resetEnvvars() {
    this._envvars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envvarsInput() {
    return this._envvars;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // memory_limit_mb - computed: false, optional: true, required: false
  private _memoryLimitMb?: string; 
  public get memoryLimitMb() {
    return this.getStringAttribute('memory_limit_mb');
  }
  public set memoryLimitMb(value: string) {
    this._memoryLimitMb = value;
  }
  public resetMemoryLimitMb() {
    this._memoryLimitMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitMbInput() {
    return this._memoryLimitMb;
  }

  // success_condition - computed: false, optional: true, required: false
  private _successCondition?: string; 
  public get successCondition() {
    return this.getStringAttribute('success_condition');
  }
  public set successCondition(value: string) {
    this._successCondition = value;
  }
  public resetSuccessCondition() {
    this._successCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successConditionInput() {
    return this._successCondition;
  }

  // working_dir_path - computed: false, optional: true, required: false
  private _workingDirPath?: string; 
  public get workingDirPath() {
    return this.getStringAttribute('working_dir_path');
  }
  public set workingDirPath(value: string) {
    this._workingDirPath = value;
  }
  public resetWorkingDirPath() {
    this._workingDirPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirPathInput() {
    return this._workingDirPath;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksOptionsHttp {
  /**
  * Specify the body of http request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#body ResourceTemplate#body}
  */
  readonly body?: string;
  /**
  * Provide ca cert for the http request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#ca_cert ResourceTemplate#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Specify the endpoint to be invoked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#endpoint ResourceTemplate#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Specify the http headers in key,value pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#headers ResourceTemplate#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Provide skip TLS verify for the http request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#insecure ResourceTemplate#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Specify the http method to be used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#method ResourceTemplate#method}
  */
  readonly method?: string;
  /**
  * Specify the success condition of the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#success_condition ResourceTemplate#success_condition}
  */
  readonly successCondition?: string;
}

export function resourceTemplateSpecActionsWorkflowsTasksOptionsHttpToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksOptionsHttpOutputReference | ResourceTemplateSpecActionsWorkflowsTasksOptionsHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    method: cdktf.stringToTerraform(struct!.method),
    success_condition: cdktf.stringToTerraform(struct!.successCondition),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksOptionsHttpToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksOptionsHttpOutputReference | ResourceTemplateSpecActionsWorkflowsTasksOptionsHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_condition: {
      value: cdktf.stringToHclTerraform(struct!.successCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksOptionsHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksOptionsHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._successCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.successCondition = this._successCondition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksOptionsHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._caCert = undefined;
      this._endpoint = undefined;
      this._headers = undefined;
      this._insecure = undefined;
      this._method = undefined;
      this._successCondition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._caCert = value.caCert;
      this._endpoint = value.endpoint;
      this._headers = value.headers;
      this._insecure = value.insecure;
      this._method = value.method;
      this._successCondition = value.successCondition;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // success_condition - computed: false, optional: true, required: false
  private _successCondition?: string; 
  public get successCondition() {
    return this.getStringAttribute('success_condition');
  }
  public set successCondition(value: string) {
    this._successCondition = value;
  }
  public resetSuccessCondition() {
    this._successCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successConditionInput() {
    return this._successCondition;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksOptionsNotification {
}

export function resourceTemplateSpecActionsWorkflowsTasksOptionsNotificationToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksOptionsNotificationOutputReference | ResourceTemplateSpecActionsWorkflowsTasksOptionsNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksOptionsNotificationToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksOptionsNotificationOutputReference | ResourceTemplateSpecActionsWorkflowsTasksOptionsNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ResourceTemplateSpecActionsWorkflowsTasksOptionsNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksOptionsNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksOptionsNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksOptionsScript {
  /**
  * Specify the cpu limit in milli
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#cpu_limit_milli ResourceTemplate#cpu_limit_milli}
  */
  readonly cpuLimitMilli?: string;
  /**
  * Specify the environment variables to be set in key,value pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#envvars ResourceTemplate#envvars}
  */
  readonly envvars?: { [key: string]: string };
  /**
  * Specify the memory limit to be allocated in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#memory_limit_mb ResourceTemplate#memory_limit_mb}
  */
  readonly memoryLimitMb?: string;
  /**
  * Specify the script to be executed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#script ResourceTemplate#script}
  */
  readonly script?: string;
  /**
  * Specify the success condition of the script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#success_condition ResourceTemplate#success_condition}
  */
  readonly successCondition?: string;
}

export function resourceTemplateSpecActionsWorkflowsTasksOptionsScriptToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksOptionsScriptOutputReference | ResourceTemplateSpecActionsWorkflowsTasksOptionsScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_limit_milli: cdktf.stringToTerraform(struct!.cpuLimitMilli),
    envvars: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envvars),
    memory_limit_mb: cdktf.stringToTerraform(struct!.memoryLimitMb),
    script: cdktf.stringToTerraform(struct!.script),
    success_condition: cdktf.stringToTerraform(struct!.successCondition),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksOptionsScriptToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksOptionsScriptOutputReference | ResourceTemplateSpecActionsWorkflowsTasksOptionsScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_limit_milli: {
      value: cdktf.stringToHclTerraform(struct!.cpuLimitMilli),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    envvars: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envvars),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    memory_limit_mb: {
      value: cdktf.stringToHclTerraform(struct!.memoryLimitMb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    success_condition: {
      value: cdktf.stringToHclTerraform(struct!.successCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksOptionsScriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksOptionsScript | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuLimitMilli !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimitMilli = this._cpuLimitMilli;
    }
    if (this._envvars !== undefined) {
      hasAnyValues = true;
      internalValueResult.envvars = this._envvars;
    }
    if (this._memoryLimitMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimitMb = this._memoryLimitMb;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._successCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.successCondition = this._successCondition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksOptionsScript | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuLimitMilli = undefined;
      this._envvars = undefined;
      this._memoryLimitMb = undefined;
      this._script = undefined;
      this._successCondition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuLimitMilli = value.cpuLimitMilli;
      this._envvars = value.envvars;
      this._memoryLimitMb = value.memoryLimitMb;
      this._script = value.script;
      this._successCondition = value.successCondition;
    }
  }

  // cpu_limit_milli - computed: false, optional: true, required: false
  private _cpuLimitMilli?: string; 
  public get cpuLimitMilli() {
    return this.getStringAttribute('cpu_limit_milli');
  }
  public set cpuLimitMilli(value: string) {
    this._cpuLimitMilli = value;
  }
  public resetCpuLimitMilli() {
    this._cpuLimitMilli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitMilliInput() {
    return this._cpuLimitMilli;
  }

  // envvars - computed: false, optional: true, required: false
  private _envvars?: { [key: string]: string }; 
  public get envvars() {
    return this.getStringMapAttribute('envvars');
  }
  public set envvars(value: { [key: string]: string }) {
    this._envvars = value;
  }
  public resetEnvvars() {
    this._envvars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envvarsInput() {
    return this._envvars;
  }

  // memory_limit_mb - computed: false, optional: true, required: false
  private _memoryLimitMb?: string; 
  public get memoryLimitMb() {
    return this.getStringAttribute('memory_limit_mb');
  }
  public set memoryLimitMb(value: string) {
    this._memoryLimitMb = value;
  }
  public resetMemoryLimitMb() {
    this._memoryLimitMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitMbInput() {
    return this._memoryLimitMb;
  }

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // success_condition - computed: false, optional: true, required: false
  private _successCondition?: string; 
  public get successCondition() {
    return this.getStringAttribute('success_condition');
  }
  public set successCondition(value: string) {
    this._successCondition = value;
  }
  public resetSuccessCondition() {
    this._successCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successConditionInput() {
    return this._successCondition;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksOptions {
  /**
  * approval block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#approval ResourceTemplate#approval}
  */
  readonly approval?: ResourceTemplateSpecActionsWorkflowsTasksOptionsApproval;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#container ResourceTemplate#container}
  */
  readonly container?: ResourceTemplateSpecActionsWorkflowsTasksOptionsContainer;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#http ResourceTemplate#http}
  */
  readonly http?: ResourceTemplateSpecActionsWorkflowsTasksOptionsHttp;
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#notification ResourceTemplate#notification}
  */
  readonly notification?: ResourceTemplateSpecActionsWorkflowsTasksOptionsNotification;
  /**
  * script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#script ResourceTemplate#script}
  */
  readonly script?: ResourceTemplateSpecActionsWorkflowsTasksOptionsScript;
}

export function resourceTemplateSpecActionsWorkflowsTasksOptionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksOptionsOutputReference | ResourceTemplateSpecActionsWorkflowsTasksOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approval: resourceTemplateSpecActionsWorkflowsTasksOptionsApprovalToTerraform(struct!.approval),
    container: resourceTemplateSpecActionsWorkflowsTasksOptionsContainerToTerraform(struct!.container),
    http: resourceTemplateSpecActionsWorkflowsTasksOptionsHttpToTerraform(struct!.http),
    notification: resourceTemplateSpecActionsWorkflowsTasksOptionsNotificationToTerraform(struct!.notification),
    script: resourceTemplateSpecActionsWorkflowsTasksOptionsScriptToTerraform(struct!.script),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksOptionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksOptionsOutputReference | ResourceTemplateSpecActionsWorkflowsTasksOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approval: {
      value: resourceTemplateSpecActionsWorkflowsTasksOptionsApprovalToHclTerraform(struct!.approval),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalList",
    },
    container: {
      value: resourceTemplateSpecActionsWorkflowsTasksOptionsContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksOptionsContainerList",
    },
    http: {
      value: resourceTemplateSpecActionsWorkflowsTasksOptionsHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksOptionsHttpList",
    },
    notification: {
      value: resourceTemplateSpecActionsWorkflowsTasksOptionsNotificationToHclTerraform(struct!.notification),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksOptionsNotificationList",
    },
    script: {
      value: resourceTemplateSpecActionsWorkflowsTasksOptionsScriptToHclTerraform(struct!.script),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksOptionsScriptList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approval?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.approval = this._approval?.internalValue;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._notification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notification = this._notification?.internalValue;
    }
    if (this._script?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._approval.internalValue = undefined;
      this._container.internalValue = undefined;
      this._http.internalValue = undefined;
      this._notification.internalValue = undefined;
      this._script.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._approval.internalValue = value.approval;
      this._container.internalValue = value.container;
      this._http.internalValue = value.http;
      this._notification.internalValue = value.notification;
      this._script.internalValue = value.script;
    }
  }

  // approval - computed: false, optional: true, required: false
  private _approval = new ResourceTemplateSpecActionsWorkflowsTasksOptionsApprovalOutputReference(this, "approval");
  public get approval() {
    return this._approval;
  }
  public putApproval(value: ResourceTemplateSpecActionsWorkflowsTasksOptionsApproval) {
    this._approval.internalValue = value;
  }
  public resetApproval() {
    this._approval.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalInput() {
    return this._approval.internalValue;
  }

  // container - computed: false, optional: true, required: false
  private _container = new ResourceTemplateSpecActionsWorkflowsTasksOptionsContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: ResourceTemplateSpecActionsWorkflowsTasksOptionsContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new ResourceTemplateSpecActionsWorkflowsTasksOptionsHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: ResourceTemplateSpecActionsWorkflowsTasksOptionsHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // notification - computed: false, optional: true, required: false
  private _notification = new ResourceTemplateSpecActionsWorkflowsTasksOptionsNotificationOutputReference(this, "notification");
  public get notification() {
    return this._notification;
  }
  public putNotification(value: ResourceTemplateSpecActionsWorkflowsTasksOptionsNotification) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // script - computed: false, optional: true, required: false
  private _script = new ResourceTemplateSpecActionsWorkflowsTasksOptionsScriptOutputReference(this, "script");
  public get script() {
    return this._script;
  }
  public putScript(value: ResourceTemplateSpecActionsWorkflowsTasksOptionsScript) {
    this._script.internalValue = value;
  }
  public resetScript() {
    this._script.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksSkipConfig {
  /**
  * Specify the condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#condition ResourceTemplate#condition}
  */
  readonly condition?: string;
  /**
  * Skip this hook/task on destroy action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#skip_on_destroy ResourceTemplate#skip_on_destroy}
  */
  readonly skipOnDestroy?: boolean | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksSkipConfigToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksSkipConfigOutputReference | ResourceTemplateSpecActionsWorkflowsTasksSkipConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    skip_on_destroy: cdktf.booleanToTerraform(struct!.skipOnDestroy),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksSkipConfigToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksSkipConfigOutputReference | ResourceTemplateSpecActionsWorkflowsTasksSkipConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_on_destroy: {
      value: cdktf.booleanToHclTerraform(struct!.skipOnDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksSkipConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksSkipConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._skipOnDestroy !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipOnDestroy = this._skipOnDestroy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksSkipConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._skipOnDestroy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._skipOnDestroy = value.skipOnDestroy;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // skip_on_destroy - computed: false, optional: true, required: false
  private _skipOnDestroy?: boolean | cdktf.IResolvable; 
  public get skipOnDestroy() {
    return this.getBooleanAttribute('skip_on_destroy');
  }
  public set skipOnDestroy(value: boolean | cdktf.IResolvable) {
    this._skipOnDestroy = value;
  }
  public resetSkipOnDestroy() {
    this._skipOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipOnDestroyInput() {
    return this._skipOnDestroy;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerImagePullCredentials {
  /**
  * Specify the registry password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#password ResourceTemplate#password}
  */
  readonly password?: string;
  /**
  * Specify the container image registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#registry ResourceTemplate#registry}
  */
  readonly registry?: string;
  /**
  * Specify the registry username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#username ResourceTemplate#username}
  */
  readonly username?: string;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerImagePullCredentialsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerImagePullCredentialsOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerImagePullCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    registry: cdktf.stringToTerraform(struct!.registry),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerImagePullCredentialsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerImagePullCredentialsOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerImagePullCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
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

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerImagePullCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerImagePullCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerImagePullCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._registry = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._registry = value.registry;
      this._username = value.username;
    }
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

  // registry - computed: false, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
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
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeConfigOptions {
  /**
  * Specify the kube config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#kube_config ResourceTemplate#kube_config}
  */
  readonly kubeConfig?: string;
  /**
  * Specify if out of cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#out_of_cluster ResourceTemplate#out_of_cluster}
  */
  readonly outOfCluster?: boolean | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeConfigOptionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeConfigOptionsOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeConfigOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kube_config: cdktf.stringToTerraform(struct!.kubeConfig),
    out_of_cluster: cdktf.booleanToTerraform(struct!.outOfCluster),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeConfigOptionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeConfigOptionsOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeConfigOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kube_config: {
      value: cdktf.stringToHclTerraform(struct!.kubeConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    out_of_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.outOfCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeConfigOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeConfigOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubeConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeConfig = this._kubeConfig;
    }
    if (this._outOfCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfCluster = this._outOfCluster;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeConfigOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kubeConfig = undefined;
      this._outOfCluster = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kubeConfig = value.kubeConfig;
      this._outOfCluster = value.outOfCluster;
    }
  }

  // kube_config - computed: false, optional: true, required: false
  private _kubeConfig?: string; 
  public get kubeConfig() {
    return this.getStringAttribute('kube_config');
  }
  public set kubeConfig(value: string) {
    this._kubeConfig = value;
  }
  public resetKubeConfig() {
    this._kubeConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeConfigInput() {
    return this._kubeConfig;
  }

  // out_of_cluster - computed: false, optional: true, required: false
  private _outOfCluster?: boolean | cdktf.IResolvable; 
  public get outOfCluster() {
    return this.getBooleanAttribute('out_of_cluster');
  }
  public set outOfCluster(value: boolean | cdktf.IResolvable) {
    this._outOfCluster = value;
  }
  public resetOutOfCluster() {
    this._outOfCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfClusterInput() {
    return this._outOfCluster;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_expressions ResourceTemplate#match_expressions}
  */
  readonly matchExpressions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * match_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_fields ResourceTemplate#match_fields}
  */
  readonly matchFields?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, true)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, true)(struct!.matchFields),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, true)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#weight ResourceTemplate#weight}
  */
  readonly weight?: number;
  /**
  * preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#preference ResourceTemplate#preference}
  */
  readonly preference?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    preference: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preference: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._preference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weight = undefined;
      this._preference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weight = value.weight;
      this._preference.internalValue = value.preference;
    }
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // preference - computed: false, optional: true, required: false
  private _preference = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference) {
    this._preference.internalValue = value;
  }
  public resetPreference() {
    this._preference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference.internalValue;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_expressions ResourceTemplate#match_expressions}
  */
  readonly matchExpressions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * match_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_fields ResourceTemplate#match_fields}
  */
  readonly matchFields?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, true)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, true)(struct!.matchFields),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, true)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * node_selector_terms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#node_selector_terms ResourceTemplate#node_selector_terms}
  */
  readonly nodeSelectorTerms?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, true)(struct!.nodeSelectorTerms),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, true)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeSelectorTerms.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeSelectorTerms.internalValue = value.nodeSelectorTerms;
    }
  }

  // node_selector_terms - computed: false, optional: true, required: false
  private _nodeSelectorTerms = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  public resetNodeSelectorTerms() {
    this._nodeSelectorTerms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#preferred_during_scheduling_ignored_during_execution ResourceTemplate#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#required_during_scheduling_ignored_during_execution ResourceTemplate#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_labels ResourceTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_expressions ResourceTemplate#match_expressions}
  */
  readonly matchExpressions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_labels ResourceTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_expressions ResourceTemplate#match_expressions}
  */
  readonly matchExpressions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#namespaces ResourceTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#topology_key ResourceTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#label_selector ResourceTemplate#label_selector}
  */
  readonly labelSelector?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#namespace_selector ResourceTemplate#namespace_selector}
  */
  readonly namespaceSelector?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorList",
    },
    namespace_selector: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#weight ResourceTemplate#weight}
  */
  readonly weight?: number;
  /**
  * pod_affinity_term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#pod_affinity_term ResourceTemplate#pod_affinity_term}
  */
  readonly podAffinityTerm?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_affinity_term: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weight = undefined;
      this._podAffinityTerm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weight = value.weight;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
    }
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // pod_affinity_term - computed: false, optional: true, required: false
  private _podAffinityTerm = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  public resetPodAffinityTerm() {
    this._podAffinityTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_labels ResourceTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_expressions ResourceTemplate#match_expressions}
  */
  readonly matchExpressions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_labels ResourceTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_expressions ResourceTemplate#match_expressions}
  */
  readonly matchExpressions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#namespaces ResourceTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#topology_key ResourceTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#label_selector ResourceTemplate#label_selector}
  */
  readonly labelSelector?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#namespace_selector ResourceTemplate#namespace_selector}
  */
  readonly namespaceSelector?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorList",
    },
    namespace_selector: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#preferred_during_scheduling_ignored_during_execution ResourceTemplate#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#required_during_scheduling_ignored_during_execution ResourceTemplate#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_labels ResourceTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_expressions ResourceTemplate#match_expressions}
  */
  readonly matchExpressions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_labels ResourceTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_expressions ResourceTemplate#match_expressions}
  */
  readonly matchExpressions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#namespaces ResourceTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#topology_key ResourceTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#label_selector ResourceTemplate#label_selector}
  */
  readonly labelSelector?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#namespace_selector ResourceTemplate#namespace_selector}
  */
  readonly namespaceSelector?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorList",
    },
    namespace_selector: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#weight ResourceTemplate#weight}
  */
  readonly weight?: number;
  /**
  * pod_affinity_term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#pod_affinity_term ResourceTemplate#pod_affinity_term}
  */
  readonly podAffinityTerm?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_affinity_term: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weight = undefined;
      this._podAffinityTerm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weight = value.weight;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
    }
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // pod_affinity_term - computed: false, optional: true, required: false
  private _podAffinityTerm = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  public resetPodAffinityTerm() {
    this._podAffinityTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_labels ResourceTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_expressions ResourceTemplate#match_expressions}
  */
  readonly matchExpressions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_labels ResourceTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_expressions ResourceTemplate#match_expressions}
  */
  readonly matchExpressions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#namespaces ResourceTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#topology_key ResourceTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#label_selector ResourceTemplate#label_selector}
  */
  readonly labelSelector?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#namespace_selector ResourceTemplate#namespace_selector}
  */
  readonly namespaceSelector?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorList",
    },
    namespace_selector: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#preferred_during_scheduling_ignored_during_execution ResourceTemplate#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#required_during_scheduling_ignored_during_execution ResourceTemplate#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinity {
  /**
  * node_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#node_affinity ResourceTemplate#node_affinity}
  */
  readonly nodeAffinity?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinity;
  /**
  * pod_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#pod_affinity ResourceTemplate#pod_affinity}
  */
  readonly podAffinity?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinity;
  /**
  * pod_anti_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#pod_anti_affinity ResourceTemplate#pod_anti_affinity}
  */
  readonly podAntiAffinity?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinity;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityList",
    },
    pod_affinity: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityList",
    },
    pod_anti_affinity: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._podAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity?.internalValue;
    }
    if (this._podAntiAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeAffinity.internalValue = undefined;
      this._podAffinity.internalValue = undefined;
      this._podAntiAffinity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._podAffinity.internalValue = value.podAffinity;
      this._podAntiAffinity.internalValue = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAffinity) {
    this._podAffinity.internalValue = value;
  }
  public resetPodAffinity() {
    this._podAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity.internalValue;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityPodAntiAffinity) {
    this._podAntiAffinity.internalValue = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextPrivileged {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#value ResourceTemplate#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextPrivilegedToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextPrivilegedOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextPrivileged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextPrivilegedToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextPrivilegedOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextPrivileged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextPrivilegedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextPrivileged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextPrivileged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
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
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#value ResourceTemplate#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
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
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContext {
  /**
  * privileged block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#privileged ResourceTemplate#privileged}
  */
  readonly privileged?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextPrivileged;
  /**
  * read_only_root_file_system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#read_only_root_file_system ResourceTemplate#read_only_root_file_system}
  */
  readonly readOnlyRootFileSystem?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    privileged: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextPrivilegedToTerraform(struct!.privileged),
    read_only_root_file_system: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemToTerraform(struct!.readOnlyRootFileSystem),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    privileged: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextPrivilegedToHclTerraform(struct!.privileged),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextPrivilegedList",
    },
    read_only_root_file_system: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemToHclTerraform(struct!.readOnlyRootFileSystem),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privileged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged?.internalValue;
    }
    if (this._readOnlyRootFileSystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFileSystem = this._readOnlyRootFileSystem?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privileged.internalValue = undefined;
      this._readOnlyRootFileSystem.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privileged.internalValue = value.privileged;
      this._readOnlyRootFileSystem.internalValue = value.readOnlyRootFileSystem;
    }
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextPrivilegedOutputReference(this, "privileged");
  public get privileged() {
    return this._privileged;
  }
  public putPrivileged(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextPrivileged) {
    this._privileged.internalValue = value;
  }
  public resetPrivileged() {
    this._privileged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged.internalValue;
  }

  // read_only_root_file_system - computed: false, optional: true, required: false
  private _readOnlyRootFileSystem = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference(this, "read_only_root_file_system");
  public get readOnlyRootFileSystem() {
    return this._readOnlyRootFileSystem;
  }
  public putReadOnlyRootFileSystem(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem) {
    this._readOnlyRootFileSystem.internalValue = value;
  }
  public resetReadOnlyRootFileSystem() {
    this._readOnlyRootFileSystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFileSystemInput() {
    return this._readOnlyRootFileSystem.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#effect ResourceTemplate#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#toleration_seconds ResourceTemplate#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#value ResourceTemplate#value}
  */
  readonly value?: string;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsTolerationsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsTolerationsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsTolerationsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsTolerations[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsTolerationsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptions {
  /**
  * Specify the labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#labels ResourceTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Specify the namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#namespace ResourceTemplate#namespace}
  */
  readonly namespace?: string;
  /**
  * Specify the node selectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#node_selector ResourceTemplate#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Specify the resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#resources ResourceTemplate#resources}
  */
  readonly resources?: string[];
  /**
  * Specify the service account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#service_account_name ResourceTemplate#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#affinity ResourceTemplate#affinity}
  */
  readonly affinity?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinity;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#security_context ResourceTemplate#security_context}
  */
  readonly securityContext?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContext;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#tolerations ResourceTemplate#tolerations}
  */
  readonly tolerations?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsTolerations[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    affinity: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityToTerraform(struct!.affinity),
    security_context: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextToTerraform(struct!.securityContext),
    tolerations: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsTolerationsToTerraform, true)(struct!.tolerations),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    affinity: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityList",
    },
    security_context: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextList",
    },
    tolerations: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._namespace = undefined;
      this._nodeSelector = undefined;
      this._resources = undefined;
      this._serviceAccountName = undefined;
      this._affinity.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._tolerations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._namespace = value.namespace;
      this._nodeSelector = value.nodeSelector;
      this._resources = value.resources;
      this._serviceAccountName = value.serviceAccountName;
      this._affinity.internalValue = value.affinity;
      this._securityContext.internalValue = value.securityContext;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsUsePvc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#value ResourceTemplate#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsUsePvcToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsUsePvcOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsUsePvc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsUsePvcToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsUsePvcOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsUsePvc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsUsePvcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsUsePvc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsUsePvc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
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
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptions {
  /**
  * If enabled, contents of the volume will be backed up after the job completes and restored before the next job starts across multiple runs of the environment. Scope of backup and restore is limited to the environment and resource template where this driver is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#enable_backup_and_restore ResourceTemplate#enable_backup_and_restore}
  */
  readonly enableBackupAndRestore?: boolean | cdktf.IResolvable;
  /**
  * Specify the container mount path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#mount_path ResourceTemplate#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Specify the persistent volume claim size in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#pvc_size_gb ResourceTemplate#pvc_size_gb}
  */
  readonly pvcSizeGb?: string;
  /**
  * Specify the persistent volume claim storage class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#pvc_storage_class ResourceTemplate#pvc_storage_class}
  */
  readonly pvcStorageClass?: string;
  /**
  * use_pvc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#use_pvc ResourceTemplate#use_pvc}
  */
  readonly usePvc?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsUsePvc;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_backup_and_restore: cdktf.booleanToTerraform(struct!.enableBackupAndRestore),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    pvc_size_gb: cdktf.stringToTerraform(struct!.pvcSizeGb),
    pvc_storage_class: cdktf.stringToTerraform(struct!.pvcStorageClass),
    use_pvc: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsUsePvcToTerraform(struct!.usePvc),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_backup_and_restore: {
      value: cdktf.booleanToHclTerraform(struct!.enableBackupAndRestore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvc_size_gb: {
      value: cdktf.stringToHclTerraform(struct!.pvcSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvc_storage_class: {
      value: cdktf.stringToHclTerraform(struct!.pvcStorageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_pvc: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsUsePvcToHclTerraform(struct!.usePvc),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsUsePvcList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableBackupAndRestore !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBackupAndRestore = this._enableBackupAndRestore;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._pvcSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcSizeGb = this._pvcSizeGb;
    }
    if (this._pvcStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcStorageClass = this._pvcStorageClass;
    }
    if (this._usePvc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePvc = this._usePvc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableBackupAndRestore = undefined;
      this._mountPath = undefined;
      this._pvcSizeGb = undefined;
      this._pvcStorageClass = undefined;
      this._usePvc.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableBackupAndRestore = value.enableBackupAndRestore;
      this._mountPath = value.mountPath;
      this._pvcSizeGb = value.pvcSizeGb;
      this._pvcStorageClass = value.pvcStorageClass;
      this._usePvc.internalValue = value.usePvc;
    }
  }

  // enable_backup_and_restore - computed: false, optional: true, required: false
  private _enableBackupAndRestore?: boolean | cdktf.IResolvable; 
  public get enableBackupAndRestore() {
    return this.getBooleanAttribute('enable_backup_and_restore');
  }
  public set enableBackupAndRestore(value: boolean | cdktf.IResolvable) {
    this._enableBackupAndRestore = value;
  }
  public resetEnableBackupAndRestore() {
    this._enableBackupAndRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBackupAndRestoreInput() {
    return this._enableBackupAndRestore;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // pvc_size_gb - computed: false, optional: true, required: false
  private _pvcSizeGb?: string; 
  public get pvcSizeGb() {
    return this.getStringAttribute('pvc_size_gb');
  }
  public set pvcSizeGb(value: string) {
    this._pvcSizeGb = value;
  }
  public resetPvcSizeGb() {
    this._pvcSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcSizeGbInput() {
    return this._pvcSizeGb;
  }

  // pvc_storage_class - computed: false, optional: true, required: false
  private _pvcStorageClass?: string; 
  public get pvcStorageClass() {
    return this.getStringAttribute('pvc_storage_class');
  }
  public set pvcStorageClass(value: string) {
    this._pvcStorageClass = value;
  }
  public resetPvcStorageClass() {
    this._pvcStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcStorageClassInput() {
    return this._pvcStorageClass;
  }

  // use_pvc - computed: false, optional: true, required: false
  private _usePvc = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsUsePvcOutputReference(this, "use_pvc");
  public get usePvc() {
    return this._usePvc;
  }
  public putUsePvc(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsUsePvc) {
    this._usePvc.internalValue = value;
  }
  public resetUsePvc() {
    this._usePvc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePvcInput() {
    return this._usePvc.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesUsePvc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#value ResourceTemplate#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesUsePvcToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesUsePvcOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesUsePvc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesUsePvcToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesUsePvcOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesUsePvc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesUsePvcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesUsePvc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesUsePvc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
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
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumes {
  /**
  * If enabled, contents of the volume will be backed up after the job completes and restored before the next job starts across multiple runs of the environment. Scope of backup and restore is limited to the environment and resource template where this driver is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#enable_backup_and_restore ResourceTemplate#enable_backup_and_restore}
  */
  readonly enableBackupAndRestore?: boolean | cdktf.IResolvable;
  /**
  * Specify the container mount path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#mount_path ResourceTemplate#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Specify the persistent volume claim size in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#pvc_size_gb ResourceTemplate#pvc_size_gb}
  */
  readonly pvcSizeGb?: string;
  /**
  * Specify the persistent volume claim storage class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#pvc_storage_class ResourceTemplate#pvc_storage_class}
  */
  readonly pvcStorageClass?: string;
  /**
  * use_pvc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#use_pvc ResourceTemplate#use_pvc}
  */
  readonly usePvc?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesUsePvc;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_backup_and_restore: cdktf.booleanToTerraform(struct!.enableBackupAndRestore),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    pvc_size_gb: cdktf.stringToTerraform(struct!.pvcSizeGb),
    pvc_storage_class: cdktf.stringToTerraform(struct!.pvcStorageClass),
    use_pvc: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesUsePvcToTerraform(struct!.usePvc),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_backup_and_restore: {
      value: cdktf.booleanToHclTerraform(struct!.enableBackupAndRestore),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvc_size_gb: {
      value: cdktf.stringToHclTerraform(struct!.pvcSizeGb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pvc_storage_class: {
      value: cdktf.stringToHclTerraform(struct!.pvcStorageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_pvc: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesUsePvcToHclTerraform(struct!.usePvc),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesUsePvcList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableBackupAndRestore !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBackupAndRestore = this._enableBackupAndRestore;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._pvcSizeGb !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcSizeGb = this._pvcSizeGb;
    }
    if (this._pvcStorageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcStorageClass = this._pvcStorageClass;
    }
    if (this._usePvc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePvc = this._usePvc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableBackupAndRestore = undefined;
      this._mountPath = undefined;
      this._pvcSizeGb = undefined;
      this._pvcStorageClass = undefined;
      this._usePvc.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableBackupAndRestore = value.enableBackupAndRestore;
      this._mountPath = value.mountPath;
      this._pvcSizeGb = value.pvcSizeGb;
      this._pvcStorageClass = value.pvcStorageClass;
      this._usePvc.internalValue = value.usePvc;
    }
  }

  // enable_backup_and_restore - computed: false, optional: true, required: false
  private _enableBackupAndRestore?: boolean | cdktf.IResolvable; 
  public get enableBackupAndRestore() {
    return this.getBooleanAttribute('enable_backup_and_restore');
  }
  public set enableBackupAndRestore(value: boolean | cdktf.IResolvable) {
    this._enableBackupAndRestore = value;
  }
  public resetEnableBackupAndRestore() {
    this._enableBackupAndRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBackupAndRestoreInput() {
    return this._enableBackupAndRestore;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // pvc_size_gb - computed: false, optional: true, required: false
  private _pvcSizeGb?: string; 
  public get pvcSizeGb() {
    return this.getStringAttribute('pvc_size_gb');
  }
  public set pvcSizeGb(value: string) {
    this._pvcSizeGb = value;
  }
  public resetPvcSizeGb() {
    this._pvcSizeGb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcSizeGbInput() {
    return this._pvcSizeGb;
  }

  // pvc_storage_class - computed: false, optional: true, required: false
  private _pvcStorageClass?: string; 
  public get pvcStorageClass() {
    return this.getStringAttribute('pvc_storage_class');
  }
  public set pvcStorageClass(value: string) {
    this._pvcStorageClass = value;
  }
  public resetPvcStorageClass() {
    this._pvcStorageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcStorageClassInput() {
    return this._pvcStorageClass;
  }

  // use_pvc - computed: false, optional: true, required: false
  private _usePvc = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesUsePvcOutputReference(this, "use_pvc");
  public get usePvc() {
    return this._usePvc;
  }
  public putUsePvc(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesUsePvc) {
    this._usePvc.internalValue = value;
  }
  public resetUsePvc() {
    this._usePvc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePvcInput() {
    return this._usePvc.internalValue;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumes[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainer {
  /**
  * Specify the set of arguments to be passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#arguments ResourceTemplate#arguments}
  */
  readonly arguments?: string[];
  /**
  * Specify the set of commands to be executed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#commands ResourceTemplate#commands}
  */
  readonly commands?: string[];
  /**
  * Specify the cpu limit in milli
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#cpu_limit_milli ResourceTemplate#cpu_limit_milli}
  */
  readonly cpuLimitMilli?: string;
  /**
  * Specify the environment variables to be set in key,value pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#env_vars ResourceTemplate#env_vars}
  */
  readonly envVars?: { [key: string]: string };
  /**
  * Specify the file data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#files ResourceTemplate#files}
  */
  readonly files?: { [key: string]: string };
  /**
  * Specify the container image for the driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#image ResourceTemplate#image}
  */
  readonly image?: string;
  /**
  * Specify the memory limit to be allocated in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#memory_limit_mb ResourceTemplate#memory_limit_mb}
  */
  readonly memoryLimitMb?: string;
  /**
  * Specify the working directory path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#working_dir_path ResourceTemplate#working_dir_path}
  */
  readonly workingDirPath?: string;
  /**
  * image_pull_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#image_pull_credentials ResourceTemplate#image_pull_credentials}
  */
  readonly imagePullCredentials?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerImagePullCredentials;
  /**
  * kube_config_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#kube_config_options ResourceTemplate#kube_config_options}
  */
  readonly kubeConfigOptions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeConfigOptions;
  /**
  * kube_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#kube_options ResourceTemplate#kube_options}
  */
  readonly kubeOptions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptions;
  /**
  * volume_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#volume_options ResourceTemplate#volume_options}
  */
  readonly volumeOptions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptions;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#volumes ResourceTemplate#volumes}
  */
  readonly volumes?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumes[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arguments: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.arguments),
    commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commands),
    cpu_limit_milli: cdktf.stringToTerraform(struct!.cpuLimitMilli),
    env_vars: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.envVars),
    files: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.files),
    image: cdktf.stringToTerraform(struct!.image),
    memory_limit_mb: cdktf.stringToTerraform(struct!.memoryLimitMb),
    working_dir_path: cdktf.stringToTerraform(struct!.workingDirPath),
    image_pull_credentials: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerImagePullCredentialsToTerraform(struct!.imagePullCredentials),
    kube_config_options: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeConfigOptionsToTerraform(struct!.kubeConfigOptions),
    kube_options: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsToTerraform(struct!.kubeOptions),
    volume_options: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsToTerraform(struct!.volumeOptions),
    volumes: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesToTerraform, true)(struct!.volumes),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arguments: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.arguments),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cpu_limit_milli: {
      value: cdktf.stringToHclTerraform(struct!.cpuLimitMilli),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env_vars: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.envVars),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    files: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.files),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_limit_mb: {
      value: cdktf.stringToHclTerraform(struct!.memoryLimitMb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    working_dir_path: {
      value: cdktf.stringToHclTerraform(struct!.workingDirPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_credentials: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerImagePullCredentialsToHclTerraform(struct!.imagePullCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerImagePullCredentialsList",
    },
    kube_config_options: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeConfigOptionsToHclTerraform(struct!.kubeConfigOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeConfigOptionsList",
    },
    kube_options: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsToHclTerraform(struct!.kubeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsList",
    },
    volume_options: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsToHclTerraform(struct!.volumeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesToHclTerraform, true)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.arguments = this._arguments;
    }
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._cpuLimitMilli !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimitMilli = this._cpuLimitMilli;
    }
    if (this._envVars !== undefined) {
      hasAnyValues = true;
      internalValueResult.envVars = this._envVars;
    }
    if (this._files !== undefined) {
      hasAnyValues = true;
      internalValueResult.files = this._files;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._memoryLimitMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimitMb = this._memoryLimitMb;
    }
    if (this._workingDirPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDirPath = this._workingDirPath;
    }
    if (this._imagePullCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullCredentials = this._imagePullCredentials?.internalValue;
    }
    if (this._kubeConfigOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeConfigOptions = this._kubeConfigOptions?.internalValue;
    }
    if (this._kubeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeOptions = this._kubeOptions?.internalValue;
    }
    if (this._volumeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeOptions = this._volumeOptions?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arguments = undefined;
      this._commands = undefined;
      this._cpuLimitMilli = undefined;
      this._envVars = undefined;
      this._files = undefined;
      this._image = undefined;
      this._memoryLimitMb = undefined;
      this._workingDirPath = undefined;
      this._imagePullCredentials.internalValue = undefined;
      this._kubeConfigOptions.internalValue = undefined;
      this._kubeOptions.internalValue = undefined;
      this._volumeOptions.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arguments = value.arguments;
      this._commands = value.commands;
      this._cpuLimitMilli = value.cpuLimitMilli;
      this._envVars = value.envVars;
      this._files = value.files;
      this._image = value.image;
      this._memoryLimitMb = value.memoryLimitMb;
      this._workingDirPath = value.workingDirPath;
      this._imagePullCredentials.internalValue = value.imagePullCredentials;
      this._kubeConfigOptions.internalValue = value.kubeConfigOptions;
      this._kubeOptions.internalValue = value.kubeOptions;
      this._volumeOptions.internalValue = value.volumeOptions;
      this._volumes.internalValue = value.volumes;
    }
  }

  // arguments - computed: false, optional: true, required: false
  private _arguments?: string[]; 
  public get arguments() {
    return this.getListAttribute('arguments');
  }
  public set arguments(value: string[]) {
    this._arguments = value;
  }
  public resetArguments() {
    this._arguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentsInput() {
    return this._arguments;
  }

  // commands - computed: false, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // cpu_limit_milli - computed: false, optional: true, required: false
  private _cpuLimitMilli?: string; 
  public get cpuLimitMilli() {
    return this.getStringAttribute('cpu_limit_milli');
  }
  public set cpuLimitMilli(value: string) {
    this._cpuLimitMilli = value;
  }
  public resetCpuLimitMilli() {
    this._cpuLimitMilli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitMilliInput() {
    return this._cpuLimitMilli;
  }

  // env_vars - computed: false, optional: true, required: false
  private _envVars?: { [key: string]: string }; 
  public get envVars() {
    return this.getStringMapAttribute('env_vars');
  }
  public set envVars(value: { [key: string]: string }) {
    this._envVars = value;
  }
  public resetEnvVars() {
    this._envVars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarsInput() {
    return this._envVars;
  }

  // files - computed: false, optional: true, required: false
  private _files?: { [key: string]: string }; 
  public get files() {
    return this.getStringMapAttribute('files');
  }
  public set files(value: { [key: string]: string }) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // memory_limit_mb - computed: false, optional: true, required: false
  private _memoryLimitMb?: string; 
  public get memoryLimitMb() {
    return this.getStringAttribute('memory_limit_mb');
  }
  public set memoryLimitMb(value: string) {
    this._memoryLimitMb = value;
  }
  public resetMemoryLimitMb() {
    this._memoryLimitMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitMbInput() {
    return this._memoryLimitMb;
  }

  // working_dir_path - computed: false, optional: true, required: false
  private _workingDirPath?: string; 
  public get workingDirPath() {
    return this.getStringAttribute('working_dir_path');
  }
  public set workingDirPath(value: string) {
    this._workingDirPath = value;
  }
  public resetWorkingDirPath() {
    this._workingDirPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirPathInput() {
    return this._workingDirPath;
  }

  // image_pull_credentials - computed: false, optional: true, required: false
  private _imagePullCredentials = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerImagePullCredentialsOutputReference(this, "image_pull_credentials");
  public get imagePullCredentials() {
    return this._imagePullCredentials;
  }
  public putImagePullCredentials(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerImagePullCredentials) {
    this._imagePullCredentials.internalValue = value;
  }
  public resetImagePullCredentials() {
    this._imagePullCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullCredentialsInput() {
    return this._imagePullCredentials.internalValue;
  }

  // kube_config_options - computed: false, optional: true, required: false
  private _kubeConfigOptions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeConfigOptionsOutputReference(this, "kube_config_options");
  public get kubeConfigOptions() {
    return this._kubeConfigOptions;
  }
  public putKubeConfigOptions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeConfigOptions) {
    this._kubeConfigOptions.internalValue = value;
  }
  public resetKubeConfigOptions() {
    this._kubeConfigOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeConfigOptionsInput() {
    return this._kubeConfigOptions.internalValue;
  }

  // kube_options - computed: false, optional: true, required: false
  private _kubeOptions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptionsOutputReference(this, "kube_options");
  public get kubeOptions() {
    return this._kubeOptions;
  }
  public putKubeOptions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerKubeOptions) {
    this._kubeOptions.internalValue = value;
  }
  public resetKubeOptions() {
    this._kubeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeOptionsInput() {
    return this._kubeOptions.internalValue;
  }

  // volume_options - computed: false, optional: true, required: false
  private _volumeOptions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptionsOutputReference(this, "volume_options");
  public get volumeOptions() {
    return this._volumeOptions;
  }
  public putVolumeOptions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumeOptions) {
    this._volumeOptions.internalValue = value;
  }
  public resetVolumeOptions() {
    this._volumeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeOptionsInput() {
    return this._volumeOptions.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionImagePullCredentials {
  /**
  * Specify the registry password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#password ResourceTemplate#password}
  */
  readonly password?: string;
  /**
  * Specify the container image registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#registry ResourceTemplate#registry}
  */
  readonly registry?: string;
  /**
  * Specify the registry username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#username ResourceTemplate#username}
  */
  readonly username?: string;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionImagePullCredentialsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionImagePullCredentialsOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionImagePullCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    registry: cdktf.stringToTerraform(struct!.registry),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionImagePullCredentialsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionImagePullCredentialsOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionImagePullCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
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

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionImagePullCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionImagePullCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionImagePullCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._registry = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._registry = value.registry;
      this._username = value.username;
    }
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

  // registry - computed: false, optional: true, required: false
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
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
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_expressions ResourceTemplate#match_expressions}
  */
  readonly matchExpressions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * match_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_fields ResourceTemplate#match_fields}
  */
  readonly matchFields?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, true)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, true)(struct!.matchFields),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, true)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#weight ResourceTemplate#weight}
  */
  readonly weight?: number;
  /**
  * preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#preference ResourceTemplate#preference}
  */
  readonly preference?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    preference: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preference: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._preference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weight = undefined;
      this._preference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weight = value.weight;
      this._preference.internalValue = value.preference;
    }
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // preference - computed: false, optional: true, required: false
  private _preference = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference) {
    this._preference.internalValue = value;
  }
  public resetPreference() {
    this._preference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference.internalValue;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_expressions ResourceTemplate#match_expressions}
  */
  readonly matchExpressions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * match_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_fields ResourceTemplate#match_fields}
  */
  readonly matchFields?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, true)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, true)(struct!.matchFields),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, true)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * node_selector_terms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#node_selector_terms ResourceTemplate#node_selector_terms}
  */
  readonly nodeSelectorTerms?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, true)(struct!.nodeSelectorTerms),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, true)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeSelectorTerms.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeSelectorTerms.internalValue = value.nodeSelectorTerms;
    }
  }

  // node_selector_terms - computed: false, optional: true, required: false
  private _nodeSelectorTerms = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  public resetNodeSelectorTerms() {
    this._nodeSelectorTerms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#preferred_during_scheduling_ignored_during_execution ResourceTemplate#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#required_during_scheduling_ignored_during_execution ResourceTemplate#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_labels ResourceTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_expressions ResourceTemplate#match_expressions}
  */
  readonly matchExpressions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_labels ResourceTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_expressions ResourceTemplate#match_expressions}
  */
  readonly matchExpressions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#namespaces ResourceTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#topology_key ResourceTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#label_selector ResourceTemplate#label_selector}
  */
  readonly labelSelector?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#namespace_selector ResourceTemplate#namespace_selector}
  */
  readonly namespaceSelector?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorList",
    },
    namespace_selector: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#weight ResourceTemplate#weight}
  */
  readonly weight?: number;
  /**
  * pod_affinity_term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#pod_affinity_term ResourceTemplate#pod_affinity_term}
  */
  readonly podAffinityTerm?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_affinity_term: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weight = undefined;
      this._podAffinityTerm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weight = value.weight;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
    }
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // pod_affinity_term - computed: false, optional: true, required: false
  private _podAffinityTerm = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  public resetPodAffinityTerm() {
    this._podAffinityTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_labels ResourceTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_expressions ResourceTemplate#match_expressions}
  */
  readonly matchExpressions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_labels ResourceTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_expressions ResourceTemplate#match_expressions}
  */
  readonly matchExpressions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#namespaces ResourceTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#topology_key ResourceTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#label_selector ResourceTemplate#label_selector}
  */
  readonly labelSelector?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#namespace_selector ResourceTemplate#namespace_selector}
  */
  readonly namespaceSelector?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorList",
    },
    namespace_selector: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#preferred_during_scheduling_ignored_during_execution ResourceTemplate#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#required_during_scheduling_ignored_during_execution ResourceTemplate#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_labels ResourceTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_expressions ResourceTemplate#match_expressions}
  */
  readonly matchExpressions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_labels ResourceTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_expressions ResourceTemplate#match_expressions}
  */
  readonly matchExpressions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#namespaces ResourceTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#topology_key ResourceTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#label_selector ResourceTemplate#label_selector}
  */
  readonly labelSelector?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#namespace_selector ResourceTemplate#namespace_selector}
  */
  readonly namespaceSelector?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorList",
    },
    namespace_selector: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#weight ResourceTemplate#weight}
  */
  readonly weight?: number;
  /**
  * pod_affinity_term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#pod_affinity_term ResourceTemplate#pod_affinity_term}
  */
  readonly podAffinityTerm?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pod_affinity_term: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weight = undefined;
      this._podAffinityTerm.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weight = value.weight;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
    }
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // pod_affinity_term - computed: false, optional: true, required: false
  private _podAffinityTerm = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  public resetPodAffinityTerm() {
    this._podAffinityTerm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_labels ResourceTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_expressions ResourceTemplate#match_expressions}
  */
  readonly matchExpressions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#values ResourceTemplate#values}
  */
  readonly values?: string[];
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_labels ResourceTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#match_expressions ResourceTemplate#match_expressions}
  */
  readonly matchExpressions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchLabels = undefined;
      this._matchExpressions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchLabels = value.matchLabels;
      this._matchExpressions.internalValue = value.matchExpressions;
    }
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#namespaces ResourceTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#topology_key ResourceTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#label_selector ResourceTemplate#label_selector}
  */
  readonly labelSelector?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#namespace_selector ResourceTemplate#namespace_selector}
  */
  readonly namespaceSelector?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorList",
    },
    namespace_selector: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
      this._labelSelector.internalValue = undefined;
      this._namespaceSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
      this._labelSelector.internalValue = value.labelSelector;
      this._namespaceSelector.internalValue = value.namespaceSelector;
    }
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: true, required: false
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  public resetTopologyKey() {
    this._topologyKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#preferred_during_scheduling_ignored_during_execution ResourceTemplate#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#required_during_scheduling_ignored_during_execution ResourceTemplate#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinity {
  /**
  * node_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#node_affinity ResourceTemplate#node_affinity}
  */
  readonly nodeAffinity?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinity;
  /**
  * pod_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#pod_affinity ResourceTemplate#pod_affinity}
  */
  readonly podAffinity?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinity;
  /**
  * pod_anti_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#pod_anti_affinity ResourceTemplate#pod_anti_affinity}
  */
  readonly podAntiAffinity?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinity;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityList",
    },
    pod_affinity: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityList",
    },
    pod_anti_affinity: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._podAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity?.internalValue;
    }
    if (this._podAntiAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nodeAffinity.internalValue = undefined;
      this._podAffinity.internalValue = undefined;
      this._podAntiAffinity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._podAffinity.internalValue = value.podAffinity;
      this._podAntiAffinity.internalValue = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAffinity) {
    this._podAffinity.internalValue = value;
  }
  public resetPodAffinity() {
    this._podAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity.internalValue;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityPodAntiAffinity) {
    this._podAntiAffinity.internalValue = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextPrivileged {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#value ResourceTemplate#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextPrivilegedToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextPrivilegedOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextPrivileged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextPrivilegedToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextPrivilegedOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextPrivileged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextPrivilegedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextPrivileged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextPrivileged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
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
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#value ResourceTemplate#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
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
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContext {
  /**
  * privileged block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#privileged ResourceTemplate#privileged}
  */
  readonly privileged?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextPrivileged;
  /**
  * read_only_root_file_system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#read_only_root_file_system ResourceTemplate#read_only_root_file_system}
  */
  readonly readOnlyRootFileSystem?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    privileged: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextPrivilegedToTerraform(struct!.privileged),
    read_only_root_file_system: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemToTerraform(struct!.readOnlyRootFileSystem),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    privileged: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextPrivilegedToHclTerraform(struct!.privileged),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextPrivilegedList",
    },
    read_only_root_file_system: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemToHclTerraform(struct!.readOnlyRootFileSystem),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._privileged?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged?.internalValue;
    }
    if (this._readOnlyRootFileSystem?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFileSystem = this._readOnlyRootFileSystem?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._privileged.internalValue = undefined;
      this._readOnlyRootFileSystem.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._privileged.internalValue = value.privileged;
      this._readOnlyRootFileSystem.internalValue = value.readOnlyRootFileSystem;
    }
  }

  // privileged - computed: false, optional: true, required: false
  private _privileged = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextPrivilegedOutputReference(this, "privileged");
  public get privileged() {
    return this._privileged;
  }
  public putPrivileged(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextPrivileged) {
    this._privileged.internalValue = value;
  }
  public resetPrivileged() {
    this._privileged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged.internalValue;
  }

  // read_only_root_file_system - computed: false, optional: true, required: false
  private _readOnlyRootFileSystem = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference(this, "read_only_root_file_system");
  public get readOnlyRootFileSystem() {
    return this._readOnlyRootFileSystem;
  }
  public putReadOnlyRootFileSystem(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem) {
    this._readOnlyRootFileSystem.internalValue = value;
  }
  public resetReadOnlyRootFileSystem() {
    this._readOnlyRootFileSystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFileSystemInput() {
    return this._readOnlyRootFileSystem.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#effect ResourceTemplate#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#operator ResourceTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#toleration_seconds ResourceTemplate#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#value ResourceTemplate#value}
  */
  readonly value?: string;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsTolerationsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsTolerationsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsTolerationsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsTolerations[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsTolerationsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptions {
  /**
  * Specify the labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#labels ResourceTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Specify the namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#namespace ResourceTemplate#namespace}
  */
  readonly namespace?: string;
  /**
  * Specify the node selectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#node_selector ResourceTemplate#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Specify the resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#resources ResourceTemplate#resources}
  */
  readonly resources?: string[];
  /**
  * Specify the service account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#service_account_name ResourceTemplate#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#affinity ResourceTemplate#affinity}
  */
  readonly affinity?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinity;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#security_context ResourceTemplate#security_context}
  */
  readonly securityContext?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContext;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#tolerations ResourceTemplate#tolerations}
  */
  readonly tolerations?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsTolerations[] | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    resources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resources),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    affinity: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityToTerraform(struct!.affinity),
    security_context: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextToTerraform(struct!.securityContext),
    tolerations: cdktf.listMapper(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsTolerationsToTerraform, true)(struct!.tolerations),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    affinity: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityList",
    },
    security_context: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextList",
    },
    tolerations: {
      value: cdktf.listMapperHcl(resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._namespace = undefined;
      this._nodeSelector = undefined;
      this._resources = undefined;
      this._serviceAccountName = undefined;
      this._affinity.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._tolerations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._namespace = value.namespace;
      this._nodeSelector = value.nodeSelector;
      this._resources = value.resources;
      this._serviceAccountName = value.serviceAccountName;
      this._affinity.internalValue = value.affinity;
      this._securityContext.internalValue = value.securityContext;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // resources - computed: false, optional: true, required: false
  private _resources?: string[]; 
  public get resources() {
    return this.getListAttribute('resources');
  }
  public set resources(value: string[]) {
    this._resources = value;
  }
  public resetResources() {
    this._resources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionSkipBuild {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#value ResourceTemplate#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionSkipBuildToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionSkipBuildOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionSkipBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionSkipBuildToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionSkipBuildOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionSkipBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.booleanToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionSkipBuildOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionSkipBuild | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionSkipBuild | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: boolean | cdktf.IResolvable; 
  public get value() {
    return this.getBooleanAttribute('value');
  }
  public set value(value: boolean | cdktf.IResolvable) {
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
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunction {
  /**
  * Configure the CPU Limits as the maximum amount of a resource to be used by a function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#cpu_limit_milli ResourceTemplate#cpu_limit_milli}
  */
  readonly cpuLimitMilli?: string;
  /**
  * Specify the function dependencies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#function_dependencies ResourceTemplate#function_dependencies}
  */
  readonly functionDependencies?: string[];
  /**
  * Image of the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#image ResourceTemplate#image}
  */
  readonly image?: string;
  /**
  * Configure the inactivity timeout in seconds. After this time, the function will be terminated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#inactivity_timeout_seconds ResourceTemplate#inactivity_timeout_seconds}
  */
  readonly inactivityTimeoutSeconds?: number;
  /**
  * Specify the language of the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#language ResourceTemplate#language}
  */
  readonly language?: string;
  /**
  * Specify the language version for the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#language_version ResourceTemplate#language_version}
  */
  readonly languageVersion?: string;
  /**
  * Specify the maximum number of concurrent requests that can be handled by the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#max_concurrency ResourceTemplate#max_concurrency}
  */
  readonly maxConcurrency?: number;
  /**
  * Configure the Memory Limits as the maximum amount of a resource to be used by a function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#memory_limit_mb ResourceTemplate#memory_limit_mb}
  */
  readonly memoryLimitMb?: string;
  /**
  * Specify the name of the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#name ResourceTemplate#name}
  */
  readonly name?: string;
  /**
  * Specify the number of replicas for the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#num_replicas ResourceTemplate#num_replicas}
  */
  readonly numReplicas?: number;
  /**
  * Specify the source of the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#source ResourceTemplate#source}
  */
  readonly source?: string;
  /**
  * Specify the system packages for the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#system_packages ResourceTemplate#system_packages}
  */
  readonly systemPackages?: string[];
  /**
  * Specify the target platforms for the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#target_platforms ResourceTemplate#target_platforms}
  */
  readonly targetPlatforms?: string[];
  /**
  * image_pull_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#image_pull_credentials ResourceTemplate#image_pull_credentials}
  */
  readonly imagePullCredentials?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionImagePullCredentials;
  /**
  * kube_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#kube_options ResourceTemplate#kube_options}
  */
  readonly kubeOptions?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptions;
  /**
  * skip_build block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#skip_build ResourceTemplate#skip_build}
  */
  readonly skipBuild?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionSkipBuild;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_limit_milli: cdktf.stringToTerraform(struct!.cpuLimitMilli),
    function_dependencies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.functionDependencies),
    image: cdktf.stringToTerraform(struct!.image),
    inactivity_timeout_seconds: cdktf.numberToTerraform(struct!.inactivityTimeoutSeconds),
    language: cdktf.stringToTerraform(struct!.language),
    language_version: cdktf.stringToTerraform(struct!.languageVersion),
    max_concurrency: cdktf.numberToTerraform(struct!.maxConcurrency),
    memory_limit_mb: cdktf.stringToTerraform(struct!.memoryLimitMb),
    name: cdktf.stringToTerraform(struct!.name),
    num_replicas: cdktf.numberToTerraform(struct!.numReplicas),
    source: cdktf.stringToTerraform(struct!.source),
    system_packages: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.systemPackages),
    target_platforms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetPlatforms),
    image_pull_credentials: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionImagePullCredentialsToTerraform(struct!.imagePullCredentials),
    kube_options: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsToTerraform(struct!.kubeOptions),
    skip_build: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionSkipBuildToTerraform(struct!.skipBuild),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_limit_milli: {
      value: cdktf.stringToHclTerraform(struct!.cpuLimitMilli),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_dependencies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.functionDependencies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inactivity_timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.inactivityTimeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language_version: {
      value: cdktf.stringToHclTerraform(struct!.languageVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_limit_mb: {
      value: cdktf.stringToHclTerraform(struct!.memoryLimitMb),
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
    num_replicas: {
      value: cdktf.numberToHclTerraform(struct!.numReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system_packages: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.systemPackages),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_platforms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetPlatforms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image_pull_credentials: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionImagePullCredentialsToHclTerraform(struct!.imagePullCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionImagePullCredentialsList",
    },
    kube_options: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsToHclTerraform(struct!.kubeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsList",
    },
    skip_build: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionSkipBuildToHclTerraform(struct!.skipBuild),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionSkipBuildList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuLimitMilli !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimitMilli = this._cpuLimitMilli;
    }
    if (this._functionDependencies !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionDependencies = this._functionDependencies;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._inactivityTimeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactivityTimeoutSeconds = this._inactivityTimeoutSeconds;
    }
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._languageVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageVersion = this._languageVersion;
    }
    if (this._maxConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrency = this._maxConcurrency;
    }
    if (this._memoryLimitMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimitMb = this._memoryLimitMb;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._numReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.numReplicas = this._numReplicas;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._systemPackages !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemPackages = this._systemPackages;
    }
    if (this._targetPlatforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPlatforms = this._targetPlatforms;
    }
    if (this._imagePullCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullCredentials = this._imagePullCredentials?.internalValue;
    }
    if (this._kubeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeOptions = this._kubeOptions?.internalValue;
    }
    if (this._skipBuild?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipBuild = this._skipBuild?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuLimitMilli = undefined;
      this._functionDependencies = undefined;
      this._image = undefined;
      this._inactivityTimeoutSeconds = undefined;
      this._language = undefined;
      this._languageVersion = undefined;
      this._maxConcurrency = undefined;
      this._memoryLimitMb = undefined;
      this._name = undefined;
      this._numReplicas = undefined;
      this._source = undefined;
      this._systemPackages = undefined;
      this._targetPlatforms = undefined;
      this._imagePullCredentials.internalValue = undefined;
      this._kubeOptions.internalValue = undefined;
      this._skipBuild.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuLimitMilli = value.cpuLimitMilli;
      this._functionDependencies = value.functionDependencies;
      this._image = value.image;
      this._inactivityTimeoutSeconds = value.inactivityTimeoutSeconds;
      this._language = value.language;
      this._languageVersion = value.languageVersion;
      this._maxConcurrency = value.maxConcurrency;
      this._memoryLimitMb = value.memoryLimitMb;
      this._name = value.name;
      this._numReplicas = value.numReplicas;
      this._source = value.source;
      this._systemPackages = value.systemPackages;
      this._targetPlatforms = value.targetPlatforms;
      this._imagePullCredentials.internalValue = value.imagePullCredentials;
      this._kubeOptions.internalValue = value.kubeOptions;
      this._skipBuild.internalValue = value.skipBuild;
    }
  }

  // cpu_limit_milli - computed: false, optional: true, required: false
  private _cpuLimitMilli?: string; 
  public get cpuLimitMilli() {
    return this.getStringAttribute('cpu_limit_milli');
  }
  public set cpuLimitMilli(value: string) {
    this._cpuLimitMilli = value;
  }
  public resetCpuLimitMilli() {
    this._cpuLimitMilli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitMilliInput() {
    return this._cpuLimitMilli;
  }

  // function_dependencies - computed: false, optional: true, required: false
  private _functionDependencies?: string[]; 
  public get functionDependencies() {
    return this.getListAttribute('function_dependencies');
  }
  public set functionDependencies(value: string[]) {
    this._functionDependencies = value;
  }
  public resetFunctionDependencies() {
    this._functionDependencies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionDependenciesInput() {
    return this._functionDependencies;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // inactivity_timeout_seconds - computed: false, optional: true, required: false
  private _inactivityTimeoutSeconds?: number; 
  public get inactivityTimeoutSeconds() {
    return this.getNumberAttribute('inactivity_timeout_seconds');
  }
  public set inactivityTimeoutSeconds(value: number) {
    this._inactivityTimeoutSeconds = value;
  }
  public resetInactivityTimeoutSeconds() {
    this._inactivityTimeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityTimeoutSecondsInput() {
    return this._inactivityTimeoutSeconds;
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // language_version - computed: false, optional: true, required: false
  private _languageVersion?: string; 
  public get languageVersion() {
    return this.getStringAttribute('language_version');
  }
  public set languageVersion(value: string) {
    this._languageVersion = value;
  }
  public resetLanguageVersion() {
    this._languageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageVersionInput() {
    return this._languageVersion;
  }

  // max_concurrency - computed: false, optional: true, required: false
  private _maxConcurrency?: number; 
  public get maxConcurrency() {
    return this.getNumberAttribute('max_concurrency');
  }
  public set maxConcurrency(value: number) {
    this._maxConcurrency = value;
  }
  public resetMaxConcurrency() {
    this._maxConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyInput() {
    return this._maxConcurrency;
  }

  // memory_limit_mb - computed: false, optional: true, required: false
  private _memoryLimitMb?: string; 
  public get memoryLimitMb() {
    return this.getStringAttribute('memory_limit_mb');
  }
  public set memoryLimitMb(value: string) {
    this._memoryLimitMb = value;
  }
  public resetMemoryLimitMb() {
    this._memoryLimitMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitMbInput() {
    return this._memoryLimitMb;
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

  // num_replicas - computed: false, optional: true, required: false
  private _numReplicas?: number; 
  public get numReplicas() {
    return this.getNumberAttribute('num_replicas');
  }
  public set numReplicas(value: number) {
    this._numReplicas = value;
  }
  public resetNumReplicas() {
    this._numReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numReplicasInput() {
    return this._numReplicas;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // system_packages - computed: false, optional: true, required: false
  private _systemPackages?: string[]; 
  public get systemPackages() {
    return this.getListAttribute('system_packages');
  }
  public set systemPackages(value: string[]) {
    this._systemPackages = value;
  }
  public resetSystemPackages() {
    this._systemPackages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemPackagesInput() {
    return this._systemPackages;
  }

  // target_platforms - computed: false, optional: true, required: false
  private _targetPlatforms?: string[]; 
  public get targetPlatforms() {
    return this.getListAttribute('target_platforms');
  }
  public set targetPlatforms(value: string[]) {
    this._targetPlatforms = value;
  }
  public resetTargetPlatforms() {
    this._targetPlatforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPlatformsInput() {
    return this._targetPlatforms;
  }

  // image_pull_credentials - computed: false, optional: true, required: false
  private _imagePullCredentials = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionImagePullCredentialsOutputReference(this, "image_pull_credentials");
  public get imagePullCredentials() {
    return this._imagePullCredentials;
  }
  public putImagePullCredentials(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionImagePullCredentials) {
    this._imagePullCredentials.internalValue = value;
  }
  public resetImagePullCredentials() {
    this._imagePullCredentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullCredentialsInput() {
    return this._imagePullCredentials.internalValue;
  }

  // kube_options - computed: false, optional: true, required: false
  private _kubeOptions = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptionsOutputReference(this, "kube_options");
  public get kubeOptions() {
    return this._kubeOptions;
  }
  public putKubeOptions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionKubeOptions) {
    this._kubeOptions.internalValue = value;
  }
  public resetKubeOptions() {
    this._kubeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeOptionsInput() {
    return this._kubeOptions.internalValue;
  }

  // skip_build - computed: false, optional: true, required: false
  private _skipBuild = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionSkipBuildOutputReference(this, "skip_build");
  public get skipBuild() {
    return this._skipBuild;
  }
  public putSkipBuild(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionSkipBuild) {
    this._skipBuild.internalValue = value;
  }
  public resetSkipBuild() {
    this._skipBuild.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipBuildInput() {
    return this._skipBuild.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigHttp {
  /**
  * Specify the request body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#body ResourceTemplate#body}
  */
  readonly body?: string;
  /**
  * Provide ca cert for the http request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#ca_cert ResourceTemplate#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Specify the http endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#endpoint ResourceTemplate#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Specify the http headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#headers ResourceTemplate#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Provide skip TLS verify for the http request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#insecure ResourceTemplate#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Specify the http method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#method ResourceTemplate#method}
  */
  readonly method?: string;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigHttpToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigHttpOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.headers),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    method: cdktf.stringToTerraform(struct!.method),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigHttpToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigHttpOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.headers),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._caCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._body = undefined;
      this._caCert = undefined;
      this._endpoint = undefined;
      this._headers = undefined;
      this._insecure = undefined;
      this._method = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._body = value.body;
      this._caCert = value.caCert;
      this._endpoint = value.endpoint;
      this._headers = value.headers;
      this._insecure = value.insecure;
      this._method = value.method;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // ca_cert - computed: false, optional: true, required: false
  private _caCert?: string; 
  public get caCert() {
    return this.getStringAttribute('ca_cert');
  }
  public set caCert(value: string) {
    this._caCert = value;
  }
  public resetCaCert() {
    this._caCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this.getStringMapAttribute('headers');
  }
  public set headers(value: { [key: string]: string }) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigPollingConfig {
  /**
  * Specify the repeat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#repeat ResourceTemplate#repeat}
  */
  readonly repeat?: string;
  /**
  * Specify the until
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#until ResourceTemplate#until}
  */
  readonly until?: string;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigPollingConfigToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigPollingConfigOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigPollingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repeat: cdktf.stringToTerraform(struct!.repeat),
    until: cdktf.stringToTerraform(struct!.until),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigPollingConfigToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigPollingConfigOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigPollingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    repeat: {
      value: cdktf.stringToHclTerraform(struct!.repeat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    until: {
      value: cdktf.stringToHclTerraform(struct!.until),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigPollingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigPollingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._repeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeat = this._repeat;
    }
    if (this._until !== undefined) {
      hasAnyValues = true;
      internalValueResult.until = this._until;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigPollingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._repeat = undefined;
      this._until = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._repeat = value.repeat;
      this._until = value.until;
    }
  }

  // repeat - computed: false, optional: true, required: false
  private _repeat?: string; 
  public get repeat() {
    return this.getStringAttribute('repeat');
  }
  public set repeat(value: string) {
    this._repeat = value;
  }
  public resetRepeat() {
    this._repeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat;
  }

  // until - computed: false, optional: true, required: false
  private _until?: string; 
  public get until() {
    return this.getStringAttribute('until');
  }
  public set until(value: string) {
    this._until = value;
  }
  public resetUntil() {
    this._until = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untilInput() {
    return this._until;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfig {
  /**
  * Specify the max retry count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#max_retry_count ResourceTemplate#max_retry_count}
  */
  readonly maxRetryCount?: number;
  /**
  * Specify the success condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#success_condition ResourceTemplate#success_condition}
  */
  readonly successCondition?: string;
  /**
  * Specify the timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#timeout_seconds ResourceTemplate#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Specify the type of workflow handler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#type ResourceTemplate#type}
  */
  readonly type?: string;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#container ResourceTemplate#container}
  */
  readonly container?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainer;
  /**
  * function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#function ResourceTemplate#function}
  */
  readonly function?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunction;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#http ResourceTemplate#http}
  */
  readonly http?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigHttp;
  /**
  * polling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#polling_config ResourceTemplate#polling_config}
  */
  readonly pollingConfig?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigPollingConfig;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_retry_count: cdktf.numberToTerraform(struct!.maxRetryCount),
    success_condition: cdktf.stringToTerraform(struct!.successCondition),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    type: cdktf.stringToTerraform(struct!.type),
    container: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerToTerraform(struct!.container),
    function: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionToTerraform(struct!.function),
    http: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigHttpToTerraform(struct!.http),
    polling_config: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigPollingConfigToTerraform(struct!.pollingConfig),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_retry_count: {
      value: cdktf.numberToHclTerraform(struct!.maxRetryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success_condition: {
      value: cdktf.stringToHclTerraform(struct!.successCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerList",
    },
    function: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionToHclTerraform(struct!.function),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionList",
    },
    http: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigHttpList",
    },
    polling_config: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigPollingConfigToHclTerraform(struct!.pollingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigPollingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRetryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetryCount = this._maxRetryCount;
    }
    if (this._successCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.successCondition = this._successCondition;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._function?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._pollingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingConfig = this._pollingConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxRetryCount = undefined;
      this._successCondition = undefined;
      this._timeoutSeconds = undefined;
      this._type = undefined;
      this._container.internalValue = undefined;
      this._function.internalValue = undefined;
      this._http.internalValue = undefined;
      this._pollingConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxRetryCount = value.maxRetryCount;
      this._successCondition = value.successCondition;
      this._timeoutSeconds = value.timeoutSeconds;
      this._type = value.type;
      this._container.internalValue = value.container;
      this._function.internalValue = value.function;
      this._http.internalValue = value.http;
      this._pollingConfig.internalValue = value.pollingConfig;
    }
  }

  // max_retry_count - computed: false, optional: true, required: false
  private _maxRetryCount?: number; 
  public get maxRetryCount() {
    return this.getNumberAttribute('max_retry_count');
  }
  public set maxRetryCount(value: number) {
    this._maxRetryCount = value;
  }
  public resetMaxRetryCount() {
    this._maxRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetryCountInput() {
    return this._maxRetryCount;
  }

  // success_condition - computed: false, optional: true, required: false
  private _successCondition?: string; 
  public get successCondition() {
    return this.getStringAttribute('success_condition');
  }
  public set successCondition(value: string) {
    this._successCondition = value;
  }
  public resetSuccessCondition() {
    this._successCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successConditionInput() {
    return this._successCondition;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
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

  // container - computed: false, optional: true, required: false
  private _container = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // function - computed: false, optional: true, required: false
  private _function = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunctionOutputReference(this, "function");
  public get function() {
    return this._function;
  }
  public putFunction(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigFunction) {
    this._function.internalValue = value;
  }
  public resetFunction() {
    this._function.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // polling_config - computed: false, optional: true, required: false
  private _pollingConfig = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigPollingConfigOutputReference(this, "polling_config");
  public get pollingConfig() {
    return this._pollingConfig;
  }
  public putPollingConfig(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataConfigPollingConfig) {
    this._pollingConfig.internalValue = value;
  }
  public resetPollingConfig() {
    this._pollingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingConfigInput() {
    return this._pollingConfig.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsOverride {
  /**
  * Display overridden values on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#display_overridden ResourceTemplate#display_overridden}
  */
  readonly displayOverridden?: boolean | cdktf.IResolvable;
  /**
  * If the override type is restricted_key_values, values it is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#restricted_key_values ResourceTemplate#restricted_key_values}
  */
  readonly restrictedKeyValues?: { [key: string]: string };
  /**
  * If the override type is restricted, values it is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#restricted_values ResourceTemplate#restricted_values}
  */
  readonly restrictedValues?: string[];
  /**
  * Used to alias a variable and restrict the override scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#selectors ResourceTemplate#selectors}
  */
  readonly selectors?: string[];
  /**
  * Specify the type of ovverride this variable supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#type ResourceTemplate#type}
  */
  readonly type?: string;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsOverrideToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsOverrideOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_overridden: cdktf.booleanToTerraform(struct!.displayOverridden),
    restricted_key_values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.restrictedKeyValues),
    restricted_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedValues),
    selectors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.selectors),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsOverrideToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsOverrideOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_overridden: {
      value: cdktf.booleanToHclTerraform(struct!.displayOverridden),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restricted_key_values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.restrictedKeyValues),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    restricted_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    selectors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.selectors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayOverridden !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayOverridden = this._displayOverridden;
    }
    if (this._restrictedKeyValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedKeyValues = this._restrictedKeyValues;
    }
    if (this._restrictedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedValues = this._restrictedValues;
    }
    if (this._selectors !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayOverridden = undefined;
      this._restrictedKeyValues = undefined;
      this._restrictedValues = undefined;
      this._selectors = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayOverridden = value.displayOverridden;
      this._restrictedKeyValues = value.restrictedKeyValues;
      this._restrictedValues = value.restrictedValues;
      this._selectors = value.selectors;
      this._type = value.type;
    }
  }

  // display_overridden - computed: false, optional: true, required: false
  private _displayOverridden?: boolean | cdktf.IResolvable; 
  public get displayOverridden() {
    return this.getBooleanAttribute('display_overridden');
  }
  public set displayOverridden(value: boolean | cdktf.IResolvable) {
    this._displayOverridden = value;
  }
  public resetDisplayOverridden() {
    this._displayOverridden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOverriddenInput() {
    return this._displayOverridden;
  }

  // restricted_key_values - computed: false, optional: true, required: false
  private _restrictedKeyValues?: { [key: string]: string }; 
  public get restrictedKeyValues() {
    return this.getStringMapAttribute('restricted_key_values');
  }
  public set restrictedKeyValues(value: { [key: string]: string }) {
    this._restrictedKeyValues = value;
  }
  public resetRestrictedKeyValues() {
    this._restrictedKeyValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedKeyValuesInput() {
    return this._restrictedKeyValues;
  }

  // restricted_values - computed: false, optional: true, required: false
  private _restrictedValues?: string[]; 
  public get restrictedValues() {
    return this.getListAttribute('restricted_values');
  }
  public set restrictedValues(value: string[]) {
    this._restrictedValues = value;
  }
  public resetRestrictedValues() {
    this._restrictedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedValuesInput() {
    return this._restrictedValues;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors?: string[]; 
  public get selectors() {
    return this.getListAttribute('selectors');
  }
  public set selectors(value: string[]) {
    this._selectors = value;
  }
  public resetSelectors() {
    this._selectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors;
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
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#jsonschema ResourceTemplate#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#uischema ResourceTemplate#uischema}
  */
  readonly uischema?: string;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsSchemaToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsSchemaOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsSchemaToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsSchemaOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jsonschema: {
      value: cdktf.stringToHclTerraform(struct!.jsonschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uischema: {
      value: cdktf.stringToHclTerraform(struct!.uischema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonschema = this._jsonschema;
    }
    if (this._uischema !== undefined) {
      hasAnyValues = true;
      internalValueResult.uischema = this._uischema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonschema = undefined;
      this._uischema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonschema = value.jsonschema;
      this._uischema = value.uischema;
    }
  }

  // jsonschema - computed: false, optional: true, required: false
  private _jsonschema?: string; 
  public get jsonschema() {
    return this.getStringAttribute('jsonschema');
  }
  public set jsonschema(value: string) {
    this._jsonschema = value;
  }
  public resetJsonschema() {
    this._jsonschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonschemaInput() {
    return this._jsonschema;
  }

  // uischema - computed: false, optional: true, required: false
  private _uischema?: string; 
  public get uischema() {
    return this.getStringAttribute('uischema');
  }
  public set uischema(value: string) {
    this._uischema = value;
  }
  public resetUischema() {
    this._uischema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uischemaInput() {
    return this._uischema;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#description ResourceTemplate#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render environment variable on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#display_metadata ResourceTemplate#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the environment variable is immutable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#immutable ResourceTemplate#immutable}
  */
  readonly immutable?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the variable is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#required ResourceTemplate#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#sensitive ResourceTemplate#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#override ResourceTemplate#override}
  */
  readonly override?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#schema ResourceTemplate#schema}
  */
  readonly schema?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsSchema;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    immutable: cdktf.booleanToTerraform(struct!.immutable),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsOverrideToTerraform(struct!.override),
    schema: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsSchemaToTerraform(struct!.schema),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_metadata: {
      value: cdktf.stringToHclTerraform(struct!.displayMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    immutable: {
      value: cdktf.booleanToHclTerraform(struct!.immutable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsOverrideList",
    },
    schema: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMetadata = this._displayMetadata;
    }
    if (this._immutable !== undefined) {
      hasAnyValues = true;
      internalValueResult.immutable = this._immutable;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayMetadata = undefined;
      this._immutable = undefined;
      this._required = undefined;
      this._sensitive = undefined;
      this._override.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayMetadata = value.displayMetadata;
      this._immutable = value.immutable;
      this._required = value.required;
      this._sensitive = value.sensitive;
      this._override.internalValue = value.override;
      this._schema.internalValue = value.schema;
    }
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

  // display_metadata - computed: true, optional: true, required: false
  private _displayMetadata?: string; 
  public get displayMetadata() {
    return this.getStringAttribute('display_metadata');
  }
  public set displayMetadata(value: string) {
    this._displayMetadata = value;
  }
  public resetDisplayMetadata() {
    this._displayMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayMetadataInput() {
    return this._displayMetadata;
  }

  // immutable - computed: false, optional: true, required: false
  private _immutable?: boolean | cdktf.IResolvable; 
  public get immutable() {
    return this.getBooleanAttribute('immutable');
  }
  public set immutable(value: boolean | cdktf.IResolvable) {
    this._immutable = value;
  }
  public resetImmutable() {
    this._immutable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immutableInput() {
    return this._immutable;
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

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // override - computed: false, optional: true, required: false
  private _override = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsOverride) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvs {
  /**
  * Key of the environment variable to be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#key ResourceTemplate#key}
  */
  readonly key?: string;
  /**
  * Deprecated: use options.sensitive. Determines whether the value is sensitive or not, accordingly applies encryption on it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#sensitive ResourceTemplate#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * Value of the environment variable to be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#value ResourceTemplate#value}
  */
  readonly value?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#options ResourceTemplate#options}
  */
  readonly options?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptions;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    value: cdktf.stringToTerraform(struct!.value),
    options: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsToTerraform(struct!.options),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvs | cdktf.IResolvable): any {
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
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
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

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._sensitive = undefined;
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
      this._key = value.key;
      this._sensitive = value.sensitive;
      this._value = value.value;
      this._options.internalValue = value.options;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
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
  private _options = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOptions) {
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

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsList extends cdktf.ComplexList {
  public internalValue? : ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvs[] | cdktf.IResolvable

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
  public get(index: number): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOutputReference {
    return new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataEnvsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#type ResourceTemplate#type}
  */
  readonly type?: string;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsOverrideToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsOverrideOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsOverrideToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsOverrideOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsOverride): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsOverride | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
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
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#jsonschema ResourceTemplate#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#uischema ResourceTemplate#uischema}
  */
  readonly uischema?: string;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsSchemaToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsSchemaOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsSchemaToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsSchemaOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jsonschema: {
      value: cdktf.stringToHclTerraform(struct!.jsonschema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uischema: {
      value: cdktf.stringToHclTerraform(struct!.uischema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonschema !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonschema = this._jsonschema;
    }
    if (this._uischema !== undefined) {
      hasAnyValues = true;
      internalValueResult.uischema = this._uischema;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonschema = undefined;
      this._uischema = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonschema = value.jsonschema;
      this._uischema = value.uischema;
    }
  }

  // jsonschema - computed: false, optional: true, required: false
  private _jsonschema?: string; 
  public get jsonschema() {
    return this.getStringAttribute('jsonschema');
  }
  public set jsonschema(value: string) {
    this._jsonschema = value;
  }
  public resetJsonschema() {
    this._jsonschema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonschemaInput() {
    return this._jsonschema;
  }

  // uischema - computed: false, optional: true, required: false
  private _uischema?: string; 
  public get uischema() {
    return this.getStringAttribute('uischema');
  }
  public set uischema(value: string) {
    this._uischema = value;
  }
  public resetUischema() {
    this._uischema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uischemaInput() {
    return this._uischema;
  }
}
export interface ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#description ResourceTemplate#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#display_metadata ResourceTemplate#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#required ResourceTemplate#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#sensitive ResourceTemplate#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#override ResourceTemplate#override}
  */
  readonly override?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/resources/resource_template#schema ResourceTemplate#schema}
  */
  readonly schema?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsSchema;
}

export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsToTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsOverrideToTerraform(struct!.override),
    schema: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsSchemaToTerraform(struct!.schema),
  }
}


export function resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsToHclTerraform(struct?: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsOutputReference | ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_metadata: {
      value: cdktf.stringToHclTerraform(struct!.displayMetadata),
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
    sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.sensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsOverrideList",
    },
    schema: {
      value: resourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayMetadata = this._displayMetadata;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._sensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitive = this._sensitive;
    }
    if (this._override?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._displayMetadata = undefined;
      this._required = undefined;
      this._sensitive = undefined;
      this._override.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._displayMetadata = value.displayMetadata;
      this._required = value.required;
      this._sensitive = value.sensitive;
      this._override.internalValue = value.override;
      this._schema.internalValue = value.schema;
    }
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

  // display_metadata - computed: true, optional: true, required: false
  private _displayMetadata?: string; 
  public get displayMetadata() {
    return this.getStringAttribute('display_metadata');
  }
  public set displayMetadata(value: string) {
    this._displayMetadata = value;
  }
  public resetDisplayMetadata() {
    this._displayMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayMetadataInput() {
    return this._displayMetadata;
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

  // sensitive - computed: false, optional: true, required: false
  private _sensitive?: boolean | cdktf.IResolvable; 
  public get sensitive() {
    return this.getBooleanAttribute('sensitive');
  }
  public set sensitive(value: boolean | cdktf.IResolvable) {
    this._sensitive = value;
  }
  public resetSensitive() {
    this._sensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveInput() {
    return this._sensitive;
  }

  // override - computed: false, optional: true, required: false
  private _override = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsOverride) {
    this._override.internalValue = value;
  }
  public resetOverride() {
    this._override.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: ResourceTemplateSpecActionsWorkflowsTasksWorkflowHandlerDataInputsDataFilesOptionsSchema) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}
