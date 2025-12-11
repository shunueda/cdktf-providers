import * as cdktf from 'cdktf';
import { EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsOverride,
environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsOverrideToTerraform,
environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsOverrideToHclTerraform,
EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsOverrideOutputReference,
EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataConfig,
environmentTemplateSpecHooksOnFailureWorkflowHandlerDataConfigToTerraform,
environmentTemplateSpecHooksOnFailureWorkflowHandlerDataConfigToHclTerraform,
EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataConfigOutputReference,
EnvironmentTemplateSpecHooksOnFailureDriver,
environmentTemplateSpecHooksOnFailureDriverToTerraform,
environmentTemplateSpecHooksOnFailureDriverToHclTerraform,
EnvironmentTemplateSpecHooksOnFailureDriverOutputReference,
EnvironmentTemplateSpecHooksOnFailureOptions,
environmentTemplateSpecHooksOnFailureOptionsToTerraform,
environmentTemplateSpecHooksOnFailureOptionsToHclTerraform,
EnvironmentTemplateSpecHooksOnFailureOptionsOutputReference,
EnvironmentTemplateSpecHooksOnFailureSkipConfig,
environmentTemplateSpecHooksOnFailureSkipConfigToTerraform,
environmentTemplateSpecHooksOnFailureSkipConfigToHclTerraform,
EnvironmentTemplateSpecHooksOnFailureSkipConfigOutputReference } from './structs2000'
import { EnvironmentTemplateSpecHooksOnFailureAgentPools,
environmentTemplateSpecHooksOnFailureAgentPoolsToTerraform,
environmentTemplateSpecHooksOnFailureAgentPoolsToHclTerraform,
EnvironmentTemplateSpecHooksOnFailureAgentPoolsList,
EnvironmentTemplateSpecHooksOnFailureAgents,
environmentTemplateSpecHooksOnFailureAgentsToTerraform,
environmentTemplateSpecHooksOnFailureAgentsToHclTerraform,
EnvironmentTemplateSpecHooksOnFailureAgentsList } from './structs1600'
export interface EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#jsonschema EnvironmentTemplate#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#uischema EnvironmentTemplate#uischema}
  */
  readonly uischema?: string;
}

export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsSchemaToTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsSchemaOutputReference | EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsSchemaToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsSchemaOutputReference | EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsSchema): any {
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

export class EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsSchema | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsSchema | undefined) {
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
export interface EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#description EnvironmentTemplate#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render environment variable on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#display_metadata EnvironmentTemplate#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the environment variable is immutable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#immutable EnvironmentTemplate#immutable}
  */
  readonly immutable?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the variable is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#required EnvironmentTemplate#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#sensitive EnvironmentTemplate#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#override EnvironmentTemplate#override}
  */
  readonly override?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#schema EnvironmentTemplate#schema}
  */
  readonly schema?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsSchema;
}

export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsOutputReference | EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptions): any {
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
    override: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsOverrideToTerraform(struct!.override),
    schema: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsSchemaToTerraform(struct!.schema),
  }
}


export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsOutputReference | EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptions): any {
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
      value: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsOverrideList",
    },
    schema: {
      value: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptions | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptions | undefined) {
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
  private _override = new EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsOverride) {
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
  private _schema = new EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsSchema) {
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
export interface EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvs {
  /**
  * Key of the environment variable to be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Deprecated: use options.sensitive. Determines whether the value is sensitive or not, accordingly applies encryption on it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#sensitive EnvironmentTemplate#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * Value of the environment variable to be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#options EnvironmentTemplate#options}
  */
  readonly options?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptions;
}

export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsToTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    value: cdktf.stringToTerraform(struct!.value),
    options: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsToTerraform(struct!.options),
  }
}


export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvs | cdktf.IResolvable): any {
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
      value: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvs | cdktf.IResolvable | undefined) {
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
  private _options = new EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOptions) {
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

export class EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvs[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOutputReference {
    return new EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#type EnvironmentTemplate#type}
  */
  readonly type?: string;
}

export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsOverrideToTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsOverrideOutputReference | EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsOverrideToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsOverrideOutputReference | EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsOverride): any {
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

export class EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsOverride | undefined) {
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
export interface EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#jsonschema EnvironmentTemplate#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#uischema EnvironmentTemplate#uischema}
  */
  readonly uischema?: string;
}

export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsSchemaToTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsSchemaOutputReference | EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsSchemaToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsSchemaOutputReference | EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsSchema): any {
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

export class EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsSchema | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsSchema | undefined) {
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
export interface EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#description EnvironmentTemplate#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#display_metadata EnvironmentTemplate#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#required EnvironmentTemplate#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#sensitive EnvironmentTemplate#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#override EnvironmentTemplate#override}
  */
  readonly override?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#schema EnvironmentTemplate#schema}
  */
  readonly schema?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsSchema;
}

export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsOutputReference | EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsOverrideToTerraform(struct!.override),
    schema: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsSchemaToTerraform(struct!.schema),
  }
}


export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsOutputReference | EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptions): any {
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
      value: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsOverrideList",
    },
    schema: {
      value: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptions | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptions | undefined) {
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
  private _override = new EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsOverride) {
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
  private _schema = new EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsSchema) {
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
export interface EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFiles {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#data EnvironmentTemplate#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#mount_path EnvironmentTemplate#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#name EnvironmentTemplate#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#sensitive EnvironmentTemplate#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#options EnvironmentTemplate#options}
  */
  readonly options?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptions;
}

export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesToTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsToTerraform(struct!.options),
  }
}


export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFiles | cdktf.IResolvable): any {
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
      value: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFiles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFiles | cdktf.IResolvable | undefined) {
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
  private _options = new EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOptions) {
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

export class EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFiles[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOutputReference {
    return new EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsOverride {
  /**
  * Display overridden values on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#display_overridden EnvironmentTemplate#display_overridden}
  */
  readonly displayOverridden?: boolean | cdktf.IResolvable;
  /**
  * If the override type is restricted_key_values, values it is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#restricted_key_values EnvironmentTemplate#restricted_key_values}
  */
  readonly restrictedKeyValues?: { [key: string]: string };
  /**
  * If the override type is restricted, values it is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#restricted_values EnvironmentTemplate#restricted_values}
  */
  readonly restrictedValues?: string[];
  /**
  * Used to alias a variable and restrict the override scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#selectors EnvironmentTemplate#selectors}
  */
  readonly selectors?: string[];
  /**
  * Specify the type of ovverride this variable supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#type EnvironmentTemplate#type}
  */
  readonly type?: string;
}

export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsOverrideToTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsOverrideOutputReference | EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsOverride): any {
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


export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsOverrideToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsOverrideOutputReference | EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsOverride): any {
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

export class EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsOverride | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsOverride | undefined) {
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
export interface EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#jsonschema EnvironmentTemplate#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#uischema EnvironmentTemplate#uischema}
  */
  readonly uischema?: string;
}

export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsSchemaToTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsSchemaOutputReference | EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsSchemaToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsSchemaOutputReference | EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsSchema): any {
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

export class EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsSchema | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsSchema | undefined) {
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
export interface EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptions {
  /**
  * Description of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#description EnvironmentTemplate#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render variable on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#display_metadata EnvironmentTemplate#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the variable is immutable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#immutable EnvironmentTemplate#immutable}
  */
  readonly immutable?: boolean | cdktf.IResolvable;
  /**
  * Specify whether this variable is required or optional, by default it is optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#required EnvironmentTemplate#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the value is sensitive or not, accordingly applies encryption on it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#sensitive EnvironmentTemplate#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#override EnvironmentTemplate#override}
  */
  readonly override?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#schema EnvironmentTemplate#schema}
  */
  readonly schema?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsSchema;
}

export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsOutputReference | EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptions): any {
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
    override: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsOverrideToTerraform(struct!.override),
    schema: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsSchemaToTerraform(struct!.schema),
  }
}


export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsOutputReference | EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptions): any {
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
      value: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsOverrideList",
    },
    schema: {
      value: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptions | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptions | undefined) {
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
  private _override = new EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsOverride) {
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
  private _schema = new EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsSchema) {
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
export interface EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariables {
  /**
  * Name of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#name EnvironmentTemplate#name}
  */
  readonly name: string;
  /**
  * Value of the variable in the specified format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: string;
  /**
  * Specify the variable value type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#value_type EnvironmentTemplate#value_type}
  */
  readonly valueType: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#options EnvironmentTemplate#options}
  */
  readonly options?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptions;
}

export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesToTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
    options: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsToTerraform(struct!.options),
  }
}


export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariables | cdktf.IResolvable): any {
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
      value: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariables | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariables | cdktf.IResolvable | undefined) {
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
  private _options = new EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOptions) {
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

export class EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariables[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOutputReference {
    return new EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsData {
  /**
  * envs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#envs EnvironmentTemplate#envs}
  */
  readonly envs?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvs[] | cdktf.IResolvable;
  /**
  * files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#files EnvironmentTemplate#files}
  */
  readonly files?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFiles[] | cdktf.IResolvable;
  /**
  * variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#variables EnvironmentTemplate#variables}
  */
  readonly variables?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariables[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataToTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataOutputReference | EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    envs: cdktf.listMapper(environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsToTerraform, true)(struct!.envs),
    files: cdktf.listMapper(environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesToTerraform, true)(struct!.files),
    variables: cdktf.listMapper(environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesToTerraform, true)(struct!.variables),
  }
}


export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataOutputReference | EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    envs: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsToHclTerraform, true)(struct!.envs),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsList",
    },
    files: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesToHclTerraform, true)(struct!.files),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesList",
    },
    variables: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesToHclTerraform, true)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsData | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsData | undefined) {
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
  private _envs = new EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvsList(this, "envs", false);
  public get envs() {
    return this._envs;
  }
  public putEnvs(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataEnvs[] | cdktf.IResolvable) {
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
  private _files = new EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFilesList(this, "files", false);
  public get files() {
    return this._files;
  }
  public putFiles(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataFiles[] | cdktf.IResolvable) {
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
  private _variables = new EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataVariables[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputs {
  /**
  * Name of the config context
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#name EnvironmentTemplate#name}
  */
  readonly name?: string;
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#data EnvironmentTemplate#data}
  */
  readonly data?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsData;
}

export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsToTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    data: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataToTerraform(struct!.data),
  }
}


export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputs | cdktf.IResolvable): any {
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
      value: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputs | cdktf.IResolvable | undefined) {
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
  private _data = new EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsData) {
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

export class EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputs[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsOutputReference {
    return new EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerData {
  /**
  * Specify the output data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#outputs EnvironmentTemplate#outputs}
  */
  readonly outputs?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#config EnvironmentTemplate#config}
  */
  readonly config?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataConfig;
  /**
  * inputs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#inputs EnvironmentTemplate#inputs}
  */
  readonly inputs?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputs[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataToTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataOutputReference | EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    outputs: cdktf.stringToTerraform(struct!.outputs),
    config: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataConfigToTerraform(struct!.config),
    inputs: cdktf.listMapper(environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsToTerraform, true)(struct!.inputs),
  }
}


export function environmentTemplateSpecHooksOnFailureWorkflowHandlerDataToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataOutputReference | EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerData): any {
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
      value: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataConfigList",
    },
    inputs: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsToHclTerraform, true)(struct!.inputs),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerData | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerData | undefined) {
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
  private _config = new EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataConfig) {
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
  private _inputs = new EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputsList(this, "inputs", false);
  public get inputs() {
    return this._inputs;
  }
  public putInputs(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataInputs[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnFailureWorkflowHandler {
  /**
  * Name of the workflow handler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#name EnvironmentTemplate#name}
  */
  readonly name?: string;
  /**
  * data block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#data EnvironmentTemplate#data}
  */
  readonly data?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerData;
}

export function environmentTemplateSpecHooksOnFailureWorkflowHandlerToTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerOutputReference | EnvironmentTemplateSpecHooksOnFailureWorkflowHandler): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    data: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataToTerraform(struct!.data),
  }
}


export function environmentTemplateSpecHooksOnFailureWorkflowHandlerToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerOutputReference | EnvironmentTemplateSpecHooksOnFailureWorkflowHandler): any {
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
      value: environmentTemplateSpecHooksOnFailureWorkflowHandlerDataToHclTerraform(struct!.data),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnFailureWorkflowHandler | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandler | undefined) {
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
  private _data = new EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerDataOutputReference(this, "data");
  public get data() {
    return this._data;
  }
  public putData(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerData) {
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
export interface EnvironmentTemplateSpecHooksOnFailure {
  /**
  * specify hook dependencies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#depends_on EnvironmentTemplate#depends_on}
  */
  readonly dependsOn?: string[];
  /**
  * description of hook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#description EnvironmentTemplate#description}
  */
  readonly description?: string;
  /**
  * Hook are executed only once for all runs combined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#execute_once EnvironmentTemplate#execute_once}
  */
  readonly executeOnce?: boolean | cdktf.IResolvable;
  /**
  * name of the hook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#name EnvironmentTemplate#name}
  */
  readonly name?: string;
  /**
  * Specify the on failure action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#on_failure EnvironmentTemplate#on_failure}
  */
  readonly onFailure?: string;
  /**
  * Specify the timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#timeout_seconds EnvironmentTemplate#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Specify the type of hook
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#type EnvironmentTemplate#type}
  */
  readonly type?: string;
  /**
  * agent_pools block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#agent_pools EnvironmentTemplate#agent_pools}
  */
  readonly agentPools?: EnvironmentTemplateSpecHooksOnFailureAgentPools[] | cdktf.IResolvable;
  /**
  * agents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#agents EnvironmentTemplate#agents}
  */
  readonly agents?: EnvironmentTemplateSpecHooksOnFailureAgents[] | cdktf.IResolvable;
  /**
  * driver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#driver EnvironmentTemplate#driver}
  */
  readonly driver?: EnvironmentTemplateSpecHooksOnFailureDriver;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#options EnvironmentTemplate#options}
  */
  readonly options?: EnvironmentTemplateSpecHooksOnFailureOptions;
  /**
  * skip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#skip_config EnvironmentTemplate#skip_config}
  */
  readonly skipConfig?: EnvironmentTemplateSpecHooksOnFailureSkipConfig;
  /**
  * workflow_handler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#workflow_handler EnvironmentTemplate#workflow_handler}
  */
  readonly workflowHandler?: EnvironmentTemplateSpecHooksOnFailureWorkflowHandler;
}

export function environmentTemplateSpecHooksOnFailureToTerraform(struct?: EnvironmentTemplateSpecHooksOnFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    depends_on: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dependsOn),
    description: cdktf.stringToTerraform(struct!.description),
    execute_once: cdktf.booleanToTerraform(struct!.executeOnce),
    name: cdktf.stringToTerraform(struct!.name),
    on_failure: cdktf.stringToTerraform(struct!.onFailure),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    type: cdktf.stringToTerraform(struct!.type),
    agent_pools: cdktf.listMapper(environmentTemplateSpecHooksOnFailureAgentPoolsToTerraform, true)(struct!.agentPools),
    agents: cdktf.listMapper(environmentTemplateSpecHooksOnFailureAgentsToTerraform, true)(struct!.agents),
    driver: environmentTemplateSpecHooksOnFailureDriverToTerraform(struct!.driver),
    options: environmentTemplateSpecHooksOnFailureOptionsToTerraform(struct!.options),
    skip_config: environmentTemplateSpecHooksOnFailureSkipConfigToTerraform(struct!.skipConfig),
    workflow_handler: environmentTemplateSpecHooksOnFailureWorkflowHandlerToTerraform(struct!.workflowHandler),
  }
}


export function environmentTemplateSpecHooksOnFailureToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnFailure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    depends_on: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dependsOn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execute_once: {
      value: cdktf.booleanToHclTerraform(struct!.executeOnce),
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
    on_failure: {
      value: cdktf.stringToHclTerraform(struct!.onFailure),
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
    agent_pools: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnFailureAgentPoolsToHclTerraform, true)(struct!.agentPools),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnFailureAgentPoolsList",
    },
    agents: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnFailureAgentsToHclTerraform, true)(struct!.agents),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnFailureAgentsList",
    },
    driver: {
      value: environmentTemplateSpecHooksOnFailureDriverToHclTerraform(struct!.driver),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnFailureDriverList",
    },
    options: {
      value: environmentTemplateSpecHooksOnFailureOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnFailureOptionsList",
    },
    skip_config: {
      value: environmentTemplateSpecHooksOnFailureSkipConfigToHclTerraform(struct!.skipConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnFailureSkipConfigList",
    },
    workflow_handler: {
      value: environmentTemplateSpecHooksOnFailureWorkflowHandlerToHclTerraform(struct!.workflowHandler),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnFailureOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnFailure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dependsOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._executeOnce !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeOnce = this._executeOnce;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._onFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.onFailure = this._onFailure;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._agentPools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentPools = this._agentPools?.internalValue;
    }
    if (this._agents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.agents = this._agents?.internalValue;
    }
    if (this._driver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._skipConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipConfig = this._skipConfig?.internalValue;
    }
    if (this._workflowHandler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowHandler = this._workflowHandler?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecHooksOnFailure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dependsOn = undefined;
      this._description = undefined;
      this._executeOnce = undefined;
      this._name = undefined;
      this._onFailure = undefined;
      this._timeoutSeconds = undefined;
      this._type = undefined;
      this._agentPools.internalValue = undefined;
      this._agents.internalValue = undefined;
      this._driver.internalValue = undefined;
      this._options.internalValue = undefined;
      this._skipConfig.internalValue = undefined;
      this._workflowHandler.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dependsOn = value.dependsOn;
      this._description = value.description;
      this._executeOnce = value.executeOnce;
      this._name = value.name;
      this._onFailure = value.onFailure;
      this._timeoutSeconds = value.timeoutSeconds;
      this._type = value.type;
      this._agentPools.internalValue = value.agentPools;
      this._agents.internalValue = value.agents;
      this._driver.internalValue = value.driver;
      this._options.internalValue = value.options;
      this._skipConfig.internalValue = value.skipConfig;
      this._workflowHandler.internalValue = value.workflowHandler;
    }
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn?: string[]; 
  public get dependsOn() {
    return this.getListAttribute('depends_on');
  }
  public set dependsOn(value: string[]) {
    this._dependsOn = value;
  }
  public resetDependsOn() {
    this._dependsOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn;
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

  // execute_once - computed: false, optional: true, required: false
  private _executeOnce?: boolean | cdktf.IResolvable; 
  public get executeOnce() {
    return this.getBooleanAttribute('execute_once');
  }
  public set executeOnce(value: boolean | cdktf.IResolvable) {
    this._executeOnce = value;
  }
  public resetExecuteOnce() {
    this._executeOnce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeOnceInput() {
    return this._executeOnce;
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

  // on_failure - computed: false, optional: true, required: false
  private _onFailure?: string; 
  public get onFailure() {
    return this.getStringAttribute('on_failure');
  }
  public set onFailure(value: string) {
    this._onFailure = value;
  }
  public resetOnFailure() {
    this._onFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailureInput() {
    return this._onFailure;
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

  // agent_pools - computed: false, optional: true, required: false
  private _agentPools = new EnvironmentTemplateSpecHooksOnFailureAgentPoolsList(this, "agent_pools", false);
  public get agentPools() {
    return this._agentPools;
  }
  public putAgentPools(value: EnvironmentTemplateSpecHooksOnFailureAgentPools[] | cdktf.IResolvable) {
    this._agentPools.internalValue = value;
  }
  public resetAgentPools() {
    this._agentPools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentPoolsInput() {
    return this._agentPools.internalValue;
  }

  // agents - computed: false, optional: true, required: false
  private _agents = new EnvironmentTemplateSpecHooksOnFailureAgentsList(this, "agents", false);
  public get agents() {
    return this._agents;
  }
  public putAgents(value: EnvironmentTemplateSpecHooksOnFailureAgents[] | cdktf.IResolvable) {
    this._agents.internalValue = value;
  }
  public resetAgents() {
    this._agents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentsInput() {
    return this._agents.internalValue;
  }

  // driver - computed: false, optional: true, required: false
  private _driver = new EnvironmentTemplateSpecHooksOnFailureDriverOutputReference(this, "driver");
  public get driver() {
    return this._driver;
  }
  public putDriver(value: EnvironmentTemplateSpecHooksOnFailureDriver) {
    this._driver.internalValue = value;
  }
  public resetDriver() {
    this._driver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver.internalValue;
  }

  // options - computed: false, optional: true, required: false
  private _options = new EnvironmentTemplateSpecHooksOnFailureOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: EnvironmentTemplateSpecHooksOnFailureOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // skip_config - computed: false, optional: true, required: false
  private _skipConfig = new EnvironmentTemplateSpecHooksOnFailureSkipConfigOutputReference(this, "skip_config");
  public get skipConfig() {
    return this._skipConfig;
  }
  public putSkipConfig(value: EnvironmentTemplateSpecHooksOnFailureSkipConfig) {
    this._skipConfig.internalValue = value;
  }
  public resetSkipConfig() {
    this._skipConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipConfigInput() {
    return this._skipConfig.internalValue;
  }

  // workflow_handler - computed: false, optional: true, required: false
  private _workflowHandler = new EnvironmentTemplateSpecHooksOnFailureWorkflowHandlerOutputReference(this, "workflow_handler");
  public get workflowHandler() {
    return this._workflowHandler;
  }
  public putWorkflowHandler(value: EnvironmentTemplateSpecHooksOnFailureWorkflowHandler) {
    this._workflowHandler.internalValue = value;
  }
  public resetWorkflowHandler() {
    this._workflowHandler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowHandlerInput() {
    return this._workflowHandler.internalValue;
  }
}

export class EnvironmentTemplateSpecHooksOnFailureList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnFailure[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnFailureOutputReference {
    return new EnvironmentTemplateSpecHooksOnFailureOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitAgentPools {
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#name EnvironmentTemplate#name}
  */
  readonly name?: string;
  /**
  * Indicates if a resource is from system catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#system_catalog EnvironmentTemplate#system_catalog}
  */
  readonly systemCatalog?: boolean | cdktf.IResolvable;
  /**
  * version of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#version EnvironmentTemplate#version}
  */
  readonly version?: string;
  /**
  * state of the resource version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#version_state EnvironmentTemplate#version_state}
  */
  readonly versionState?: string;
}

export function environmentTemplateSpecHooksOnInitAgentPoolsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitAgentPools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    system_catalog: cdktf.booleanToTerraform(struct!.systemCatalog),
    version: cdktf.stringToTerraform(struct!.version),
    version_state: cdktf.stringToTerraform(struct!.versionState),
  }
}


export function environmentTemplateSpecHooksOnInitAgentPoolsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitAgentPools | cdktf.IResolvable): any {
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
    system_catalog: {
      value: cdktf.booleanToHclTerraform(struct!.systemCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_state: {
      value: cdktf.stringToHclTerraform(struct!.versionState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitAgentPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitAgentPools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._systemCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemCatalog = this._systemCatalog;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._versionState !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionState = this._versionState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitAgentPools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._systemCatalog = undefined;
      this._version = undefined;
      this._versionState = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._systemCatalog = value.systemCatalog;
      this._version = value.version;
      this._versionState = value.versionState;
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

  // system_catalog - computed: false, optional: true, required: false
  private _systemCatalog?: boolean | cdktf.IResolvable; 
  public get systemCatalog() {
    return this.getBooleanAttribute('system_catalog');
  }
  public set systemCatalog(value: boolean | cdktf.IResolvable) {
    this._systemCatalog = value;
  }
  public resetSystemCatalog() {
    this._systemCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCatalogInput() {
    return this._systemCatalog;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // version_state - computed: false, optional: true, required: false
  private _versionState?: string; 
  public get versionState() {
    return this.getStringAttribute('version_state');
  }
  public set versionState(value: string) {
    this._versionState = value;
  }
  public resetVersionState() {
    this._versionState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStateInput() {
    return this._versionState;
  }
}

export class EnvironmentTemplateSpecHooksOnInitAgentPoolsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitAgentPools[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitAgentPoolsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitAgentPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitAgents {
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#name EnvironmentTemplate#name}
  */
  readonly name?: string;
  /**
  * Indicates if a resource is from system catalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#system_catalog EnvironmentTemplate#system_catalog}
  */
  readonly systemCatalog?: boolean | cdktf.IResolvable;
  /**
  * version of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#version EnvironmentTemplate#version}
  */
  readonly version?: string;
  /**
  * state of the resource version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#version_state EnvironmentTemplate#version_state}
  */
  readonly versionState?: string;
}

export function environmentTemplateSpecHooksOnInitAgentsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitAgents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    system_catalog: cdktf.booleanToTerraform(struct!.systemCatalog),
    version: cdktf.stringToTerraform(struct!.version),
    version_state: cdktf.stringToTerraform(struct!.versionState),
  }
}


export function environmentTemplateSpecHooksOnInitAgentsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitAgents | cdktf.IResolvable): any {
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
    system_catalog: {
      value: cdktf.booleanToHclTerraform(struct!.systemCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_state: {
      value: cdktf.stringToHclTerraform(struct!.versionState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitAgentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitAgents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._systemCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemCatalog = this._systemCatalog;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._versionState !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionState = this._versionState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitAgents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._systemCatalog = undefined;
      this._version = undefined;
      this._versionState = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._systemCatalog = value.systemCatalog;
      this._version = value.version;
      this._versionState = value.versionState;
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

  // system_catalog - computed: false, optional: true, required: false
  private _systemCatalog?: boolean | cdktf.IResolvable; 
  public get systemCatalog() {
    return this.getBooleanAttribute('system_catalog');
  }
  public set systemCatalog(value: boolean | cdktf.IResolvable) {
    this._systemCatalog = value;
  }
  public resetSystemCatalog() {
    this._systemCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemCatalogInput() {
    return this._systemCatalog;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // version_state - computed: false, optional: true, required: false
  private _versionState?: string; 
  public get versionState() {
    return this.getStringAttribute('version_state');
  }
  public set versionState(value: string) {
    this._versionState = value;
  }
  public resetVersionState() {
    this._versionState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionStateInput() {
    return this._versionState;
  }
}

export class EnvironmentTemplateSpecHooksOnInitAgentsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitAgents[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitAgentsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitAgentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerImagePullCredentials {
  /**
  * Specify the registry password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#password EnvironmentTemplate#password}
  */
  readonly password?: string;
  /**
  * Specify the container image registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#registry EnvironmentTemplate#registry}
  */
  readonly registry?: string;
  /**
  * Specify the registry username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#username EnvironmentTemplate#username}
  */
  readonly username?: string;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerImagePullCredentialsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerImagePullCredentialsOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerImagePullCredentials): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerImagePullCredentialsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerImagePullCredentialsOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerImagePullCredentials): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerImagePullCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerImagePullCredentials | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerImagePullCredentials | undefined) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeConfigOptions {
  /**
  * Specify the kube config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#kube_config EnvironmentTemplate#kube_config}
  */
  readonly kubeConfig?: string;
  /**
  * Specify if out of cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#out_of_cluster EnvironmentTemplate#out_of_cluster}
  */
  readonly outOfCluster?: boolean | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeConfigOptionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeConfigOptionsOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeConfigOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kube_config: cdktf.stringToTerraform(struct!.kubeConfig),
    out_of_cluster: cdktf.booleanToTerraform(struct!.outOfCluster),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeConfigOptionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeConfigOptionsOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeConfigOptions): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeConfigOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeConfigOptions | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeConfigOptions | undefined) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * match_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_fields EnvironmentTemplate#match_fields}
  */
  readonly matchFields?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, true)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, true)(struct!.matchFields),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, true)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | undefined) {
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
  private _matchExpressions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
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
  private _matchFields = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#weight EnvironmentTemplate#weight}
  */
  readonly weight?: number;
  /**
  * preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#preference EnvironmentTemplate#preference}
  */
  readonly preference?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    preference: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _preference = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * match_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_fields EnvironmentTemplate#match_fields}
  */
  readonly matchFields?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, true)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, true)(struct!.matchFields),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, true)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
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
  private _matchFields = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * node_selector_terms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#node_selector_terms EnvironmentTemplate#node_selector_terms}
  */
  readonly nodeSelectorTerms?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, true)(struct!.nodeSelectorTerms),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, true)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | undefined) {
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
  private _nodeSelectorTerms = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#preferred_during_scheduling_ignored_during_execution EnvironmentTemplate#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#required_during_scheduling_ignored_during_execution EnvironmentTemplate#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinity | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinity | undefined) {
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
  private _preferredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
  private _requiredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
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
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined) {
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
  private _matchExpressions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
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
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined) {
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
  private _matchExpressions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#namespaces EnvironmentTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#topology_key EnvironmentTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#label_selector EnvironmentTemplate#label_selector}
  */
  readonly labelSelector?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#namespace_selector EnvironmentTemplate#namespace_selector}
  */
  readonly namespaceSelector?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorList",
    },
    namespace_selector: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined) {
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
  private _labelSelector = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
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
  private _namespaceSelector = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#weight EnvironmentTemplate#weight}
  */
  readonly weight?: number;
  /**
  * pod_affinity_term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#pod_affinity_term EnvironmentTemplate#pod_affinity_term}
  */
  readonly podAffinityTerm?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _podAffinityTerm = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
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
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined) {
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
  private _matchExpressions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
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
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined) {
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
  private _matchExpressions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#namespaces EnvironmentTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#topology_key EnvironmentTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#label_selector EnvironmentTemplate#label_selector}
  */
  readonly labelSelector?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#namespace_selector EnvironmentTemplate#namespace_selector}
  */
  readonly namespaceSelector?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorList",
    },
    namespace_selector: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
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
  private _namespaceSelector = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#preferred_during_scheduling_ignored_during_execution EnvironmentTemplate#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#required_during_scheduling_ignored_during_execution EnvironmentTemplate#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinity | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinity | undefined) {
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
  private _preferredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
  private _requiredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
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
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined) {
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
  private _matchExpressions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
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
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined) {
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
  private _matchExpressions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#namespaces EnvironmentTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#topology_key EnvironmentTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#label_selector EnvironmentTemplate#label_selector}
  */
  readonly labelSelector?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#namespace_selector EnvironmentTemplate#namespace_selector}
  */
  readonly namespaceSelector?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorList",
    },
    namespace_selector: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined) {
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
  private _labelSelector = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
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
  private _namespaceSelector = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#weight EnvironmentTemplate#weight}
  */
  readonly weight?: number;
  /**
  * pod_affinity_term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#pod_affinity_term EnvironmentTemplate#pod_affinity_term}
  */
  readonly podAffinityTerm?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _podAffinityTerm = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
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
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined) {
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
  private _matchExpressions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
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
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined) {
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
  private _matchExpressions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#namespaces EnvironmentTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#topology_key EnvironmentTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#label_selector EnvironmentTemplate#label_selector}
  */
  readonly labelSelector?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#namespace_selector EnvironmentTemplate#namespace_selector}
  */
  readonly namespaceSelector?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorList",
    },
    namespace_selector: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
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
  private _namespaceSelector = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#preferred_during_scheduling_ignored_during_execution EnvironmentTemplate#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#required_during_scheduling_ignored_during_execution EnvironmentTemplate#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinity | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinity | undefined) {
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
  private _preferredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
  private _requiredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinity {
  /**
  * node_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#node_affinity EnvironmentTemplate#node_affinity}
  */
  readonly nodeAffinity?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinity;
  /**
  * pod_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#pod_affinity EnvironmentTemplate#pod_affinity}
  */
  readonly podAffinity?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinity;
  /**
  * pod_anti_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#pod_anti_affinity EnvironmentTemplate#pod_anti_affinity}
  */
  readonly podAntiAffinity?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinity;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityList",
    },
    pod_affinity: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityList",
    },
    pod_anti_affinity: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinity | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinity | undefined) {
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
  private _nodeAffinity = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityNodeAffinity) {
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
  private _podAffinity = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAffinity) {
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
  private _podAntiAffinity = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityPodAntiAffinity) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextPrivileged {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextPrivilegedToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextPrivilegedOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextPrivileged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextPrivilegedToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextPrivilegedOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextPrivileged): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextPrivilegedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextPrivileged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextPrivileged | undefined) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem | undefined) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContext {
  /**
  * privileged block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#privileged EnvironmentTemplate#privileged}
  */
  readonly privileged?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextPrivileged;
  /**
  * read_only_root_file_system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#read_only_root_file_system EnvironmentTemplate#read_only_root_file_system}
  */
  readonly readOnlyRootFileSystem?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    privileged: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextPrivilegedToTerraform(struct!.privileged),
    read_only_root_file_system: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemToTerraform(struct!.readOnlyRootFileSystem),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    privileged: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextPrivilegedToHclTerraform(struct!.privileged),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextPrivilegedList",
    },
    read_only_root_file_system: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemToHclTerraform(struct!.readOnlyRootFileSystem),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContext | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContext | undefined) {
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
  private _privileged = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextPrivilegedOutputReference(this, "privileged");
  public get privileged() {
    return this._privileged;
  }
  public putPrivileged(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextPrivileged) {
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
  private _readOnlyRootFileSystem = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference(this, "read_only_root_file_system");
  public get readOnlyRootFileSystem() {
    return this._readOnlyRootFileSystem;
  }
  public putReadOnlyRootFileSystem(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextReadOnlyRootFileSystem) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#effect EnvironmentTemplate#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#toleration_seconds EnvironmentTemplate#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: string;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsTolerationsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsTolerations | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsTolerationsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsTolerations | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsTolerations | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsTolerationsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsTolerations[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsTolerationsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptions {
  /**
  * Specify the labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#labels EnvironmentTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Specify the namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#namespace EnvironmentTemplate#namespace}
  */
  readonly namespace?: string;
  /**
  * Specify the node selectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#node_selector EnvironmentTemplate#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Specify the resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#resources EnvironmentTemplate#resources}
  */
  readonly resources?: string[];
  /**
  * Specify the service account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#service_account_name EnvironmentTemplate#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#affinity EnvironmentTemplate#affinity}
  */
  readonly affinity?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinity;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#security_context EnvironmentTemplate#security_context}
  */
  readonly securityContext?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContext;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#tolerations EnvironmentTemplate#tolerations}
  */
  readonly tolerations?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsTolerations[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptions): any {
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
    affinity: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityToTerraform(struct!.affinity),
    security_context: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextToTerraform(struct!.securityContext),
    tolerations: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsTolerationsToTerraform, true)(struct!.tolerations),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptions): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityList",
    },
    security_context: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextList",
    },
    tolerations: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptions | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptions | undefined) {
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
  private _affinity = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsAffinity) {
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
  private _securityContext = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsSecurityContext) {
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
  private _tolerations = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsTolerations[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsUsePvc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsUsePvcToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsUsePvcOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsUsePvc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsUsePvcToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsUsePvcOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsUsePvc): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsUsePvcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsUsePvc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsUsePvc | undefined) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptions {
  /**
  * If enabled, contents of the volume will be backed up after the job completes and restored before the next job starts across multiple runs of the environment. Scope of backup and restore is limited to the environment and resource template where this driver is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#enable_backup_and_restore EnvironmentTemplate#enable_backup_and_restore}
  */
  readonly enableBackupAndRestore?: boolean | cdktf.IResolvable;
  /**
  * Specify the container mount path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#mount_path EnvironmentTemplate#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Specify the persistent volume claim size in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#pvc_size_gb EnvironmentTemplate#pvc_size_gb}
  */
  readonly pvcSizeGb?: string;
  /**
  * Specify the persistent volume claim storage class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#pvc_storage_class EnvironmentTemplate#pvc_storage_class}
  */
  readonly pvcStorageClass?: string;
  /**
  * use_pvc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#use_pvc EnvironmentTemplate#use_pvc}
  */
  readonly usePvc?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsUsePvc;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_backup_and_restore: cdktf.booleanToTerraform(struct!.enableBackupAndRestore),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    pvc_size_gb: cdktf.stringToTerraform(struct!.pvcSizeGb),
    pvc_storage_class: cdktf.stringToTerraform(struct!.pvcStorageClass),
    use_pvc: environmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsUsePvcToTerraform(struct!.usePvc),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptions): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsUsePvcToHclTerraform(struct!.usePvc),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsUsePvcList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptions | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptions | undefined) {
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
  private _usePvc = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsUsePvcOutputReference(this, "use_pvc");
  public get usePvc() {
    return this._usePvc;
  }
  public putUsePvc(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsUsePvc) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesUsePvc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesUsePvcToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesUsePvcOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesUsePvc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesUsePvcToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesUsePvcOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesUsePvc): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesUsePvcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesUsePvc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesUsePvc | undefined) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumes {
  /**
  * If enabled, contents of the volume will be backed up after the job completes and restored before the next job starts across multiple runs of the environment. Scope of backup and restore is limited to the environment and resource template where this driver is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#enable_backup_and_restore EnvironmentTemplate#enable_backup_and_restore}
  */
  readonly enableBackupAndRestore?: boolean | cdktf.IResolvable;
  /**
  * Specify the container mount path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#mount_path EnvironmentTemplate#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Specify the persistent volume claim size in GB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#pvc_size_gb EnvironmentTemplate#pvc_size_gb}
  */
  readonly pvcSizeGb?: string;
  /**
  * Specify the persistent volume claim storage class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#pvc_storage_class EnvironmentTemplate#pvc_storage_class}
  */
  readonly pvcStorageClass?: string;
  /**
  * use_pvc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#use_pvc EnvironmentTemplate#use_pvc}
  */
  readonly usePvc?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesUsePvc;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_backup_and_restore: cdktf.booleanToTerraform(struct!.enableBackupAndRestore),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    pvc_size_gb: cdktf.stringToTerraform(struct!.pvcSizeGb),
    pvc_storage_class: cdktf.stringToTerraform(struct!.pvcStorageClass),
    use_pvc: environmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesUsePvcToTerraform(struct!.usePvc),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumes | cdktf.IResolvable): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesUsePvcToHclTerraform(struct!.usePvc),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesUsePvcList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumes | cdktf.IResolvable | undefined) {
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
  private _usePvc = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesUsePvcOutputReference(this, "use_pvc");
  public get usePvc() {
    return this._usePvc;
  }
  public putUsePvc(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesUsePvc) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumes[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainer {
  /**
  * Specify the set of arguments to be passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#arguments EnvironmentTemplate#arguments}
  */
  readonly arguments?: string[];
  /**
  * Specify the set of commands to be executed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#commands EnvironmentTemplate#commands}
  */
  readonly commands?: string[];
  /**
  * Specify the cpu limit in milli
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#cpu_limit_milli EnvironmentTemplate#cpu_limit_milli}
  */
  readonly cpuLimitMilli?: string;
  /**
  * Specify the environment variables to be set in key,value pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#env_vars EnvironmentTemplate#env_vars}
  */
  readonly envVars?: { [key: string]: string };
  /**
  * Specify the file data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#files EnvironmentTemplate#files}
  */
  readonly files?: { [key: string]: string };
  /**
  * Specify the container image for the driver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#image EnvironmentTemplate#image}
  */
  readonly image?: string;
  /**
  * Specify the memory limit to be allocated in MB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#memory_limit_mb EnvironmentTemplate#memory_limit_mb}
  */
  readonly memoryLimitMb?: string;
  /**
  * Specify the working directory path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#working_dir_path EnvironmentTemplate#working_dir_path}
  */
  readonly workingDirPath?: string;
  /**
  * image_pull_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#image_pull_credentials EnvironmentTemplate#image_pull_credentials}
  */
  readonly imagePullCredentials?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerImagePullCredentials;
  /**
  * kube_config_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#kube_config_options EnvironmentTemplate#kube_config_options}
  */
  readonly kubeConfigOptions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeConfigOptions;
  /**
  * kube_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#kube_options EnvironmentTemplate#kube_options}
  */
  readonly kubeOptions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptions;
  /**
  * volume_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#volume_options EnvironmentTemplate#volume_options}
  */
  readonly volumeOptions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptions;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#volumes EnvironmentTemplate#volumes}
  */
  readonly volumes?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumes[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainer): any {
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
    image_pull_credentials: environmentTemplateSpecHooksOnInitDriverDataConfigContainerImagePullCredentialsToTerraform(struct!.imagePullCredentials),
    kube_config_options: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeConfigOptionsToTerraform(struct!.kubeConfigOptions),
    kube_options: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsToTerraform(struct!.kubeOptions),
    volume_options: environmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsToTerraform(struct!.volumeOptions),
    volumes: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesToTerraform, true)(struct!.volumes),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigContainerToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainer): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerImagePullCredentialsToHclTerraform(struct!.imagePullCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerImagePullCredentialsList",
    },
    kube_config_options: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeConfigOptionsToHclTerraform(struct!.kubeConfigOptions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeConfigOptionsList",
    },
    kube_options: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsToHclTerraform(struct!.kubeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsList",
    },
    volume_options: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsToHclTerraform(struct!.volumeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsList",
    },
    volumes: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesToHclTerraform, true)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainer | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainer | undefined) {
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
  private _imagePullCredentials = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerImagePullCredentialsOutputReference(this, "image_pull_credentials");
  public get imagePullCredentials() {
    return this._imagePullCredentials;
  }
  public putImagePullCredentials(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerImagePullCredentials) {
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
  private _kubeConfigOptions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeConfigOptionsOutputReference(this, "kube_config_options");
  public get kubeConfigOptions() {
    return this._kubeConfigOptions;
  }
  public putKubeConfigOptions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeConfigOptions) {
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
  private _kubeOptions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptionsOutputReference(this, "kube_options");
  public get kubeOptions() {
    return this._kubeOptions;
  }
  public putKubeOptions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerKubeOptions) {
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
  private _volumeOptions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptionsOutputReference(this, "volume_options");
  public get volumeOptions() {
    return this._volumeOptions;
  }
  public putVolumeOptions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumeOptions) {
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
  private _volumes = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerVolumes[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionImagePullCredentials {
  /**
  * Specify the registry password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#password EnvironmentTemplate#password}
  */
  readonly password?: string;
  /**
  * Specify the container image registry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#registry EnvironmentTemplate#registry}
  */
  readonly registry?: string;
  /**
  * Specify the registry username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#username EnvironmentTemplate#username}
  */
  readonly username?: string;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionImagePullCredentialsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionImagePullCredentialsOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionImagePullCredentials): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionImagePullCredentialsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionImagePullCredentialsOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionImagePullCredentials): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionImagePullCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionImagePullCredentials | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionImagePullCredentials | undefined) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * match_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_fields EnvironmentTemplate#match_fields}
  */
  readonly matchFields?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, true)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, true)(struct!.matchFields),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, true)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | undefined) {
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
  private _matchExpressions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
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
  private _matchFields = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#weight EnvironmentTemplate#weight}
  */
  readonly weight?: number;
  /**
  * preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#preference EnvironmentTemplate#preference}
  */
  readonly preference?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    preference: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _preference = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * match_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_fields EnvironmentTemplate#match_fields}
  */
  readonly matchFields?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, true)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, true)(struct!.matchFields),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, true)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
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
  private _matchFields = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * node_selector_terms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#node_selector_terms EnvironmentTemplate#node_selector_terms}
  */
  readonly nodeSelectorTerms?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, true)(struct!.nodeSelectorTerms),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, true)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | undefined) {
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
  private _nodeSelectorTerms = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#preferred_during_scheduling_ignored_during_execution EnvironmentTemplate#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#required_during_scheduling_ignored_during_execution EnvironmentTemplate#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinity | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinity | undefined) {
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
  private _preferredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
  private _requiredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
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
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined) {
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
  private _matchExpressions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
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
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined) {
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
  private _matchExpressions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#namespaces EnvironmentTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#topology_key EnvironmentTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#label_selector EnvironmentTemplate#label_selector}
  */
  readonly labelSelector?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#namespace_selector EnvironmentTemplate#namespace_selector}
  */
  readonly namespaceSelector?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorList",
    },
    namespace_selector: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined) {
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
  private _labelSelector = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
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
  private _namespaceSelector = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#weight EnvironmentTemplate#weight}
  */
  readonly weight?: number;
  /**
  * pod_affinity_term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#pod_affinity_term EnvironmentTemplate#pod_affinity_term}
  */
  readonly podAffinityTerm?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _podAffinityTerm = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
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
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined) {
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
  private _matchExpressions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
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
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined) {
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
  private _matchExpressions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#namespaces EnvironmentTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#topology_key EnvironmentTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#label_selector EnvironmentTemplate#label_selector}
  */
  readonly labelSelector?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#namespace_selector EnvironmentTemplate#namespace_selector}
  */
  readonly namespaceSelector?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorList",
    },
    namespace_selector: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
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
  private _namespaceSelector = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#preferred_during_scheduling_ignored_during_execution EnvironmentTemplate#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#required_during_scheduling_ignored_during_execution EnvironmentTemplate#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinity | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinity | undefined) {
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
  private _preferredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
  private _requiredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector): any {
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
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | undefined) {
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
  private _matchExpressions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector): any {
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
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | undefined) {
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
  private _matchExpressions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#namespaces EnvironmentTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#topology_key EnvironmentTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#label_selector EnvironmentTemplate#label_selector}
  */
  readonly labelSelector?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#namespace_selector EnvironmentTemplate#namespace_selector}
  */
  readonly namespaceSelector?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorList",
    },
    namespace_selector: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | undefined) {
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
  private _labelSelector = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
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
  private _namespaceSelector = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#weight EnvironmentTemplate#weight}
  */
  readonly weight?: number;
  /**
  * pod_affinity_term block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#pod_affinity_term EnvironmentTemplate#pod_affinity_term}
  */
  readonly podAffinityTerm?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weight: cdktf.numberToTerraform(struct!.weight),
    pod_affinity_term: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _podAffinityTerm = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector): any {
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
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | undefined) {
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
  private _matchExpressions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#values EnvironmentTemplate#values}
  */
  readonly values?: string[];
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_labels EnvironmentTemplate#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * match_expressions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#match_expressions EnvironmentTemplate#match_expressions}
  */
  readonly matchExpressions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    match_expressions: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, true)(struct!.matchExpressions),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector): any {
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
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, true)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | undefined) {
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
  private _matchExpressions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#namespaces EnvironmentTemplate#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#topology_key EnvironmentTemplate#topology_key}
  */
  readonly topologyKey?: string;
  /**
  * label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#label_selector EnvironmentTemplate#label_selector}
  */
  readonly labelSelector?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * namespace_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#namespace_selector EnvironmentTemplate#namespace_selector}
  */
  readonly namespaceSelector?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    label_selector: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    namespace_selector: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorList",
    },
    namespace_selector: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _labelSelector = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
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
  private _namespaceSelector = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinity {
  /**
  * preferred_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#preferred_during_scheduling_ignored_during_execution EnvironmentTemplate#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * required_during_scheduling_ignored_during_execution block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#required_during_scheduling_ignored_during_execution EnvironmentTemplate#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, true)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinity | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinity | undefined) {
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
  private _preferredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
  private _requiredDuringSchedulingIgnoredDuringExecution = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinity {
  /**
  * node_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#node_affinity EnvironmentTemplate#node_affinity}
  */
  readonly nodeAffinity?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinity;
  /**
  * pod_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#pod_affinity EnvironmentTemplate#pod_affinity}
  */
  readonly podAffinity?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinity;
  /**
  * pod_anti_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#pod_anti_affinity EnvironmentTemplate#pod_anti_affinity}
  */
  readonly podAntiAffinity?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinity;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityList",
    },
    pod_affinity: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityList",
    },
    pod_anti_affinity: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinity | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinity | undefined) {
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
  private _nodeAffinity = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityNodeAffinity) {
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
  private _podAffinity = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAffinity) {
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
  private _podAntiAffinity = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityPodAntiAffinity) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextPrivileged {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextPrivilegedToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextPrivilegedOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextPrivileged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextPrivilegedToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextPrivilegedOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextPrivileged): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextPrivilegedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextPrivileged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextPrivileged | undefined) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem | undefined) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContext {
  /**
  * privileged block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#privileged EnvironmentTemplate#privileged}
  */
  readonly privileged?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextPrivileged;
  /**
  * read_only_root_file_system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#read_only_root_file_system EnvironmentTemplate#read_only_root_file_system}
  */
  readonly readOnlyRootFileSystem?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    privileged: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextPrivilegedToTerraform(struct!.privileged),
    read_only_root_file_system: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemToTerraform(struct!.readOnlyRootFileSystem),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    privileged: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextPrivilegedToHclTerraform(struct!.privileged),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextPrivilegedList",
    },
    read_only_root_file_system: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemToHclTerraform(struct!.readOnlyRootFileSystem),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContext | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContext | undefined) {
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
  private _privileged = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextPrivilegedOutputReference(this, "privileged");
  public get privileged() {
    return this._privileged;
  }
  public putPrivileged(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextPrivileged) {
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
  private _readOnlyRootFileSystem = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystemOutputReference(this, "read_only_root_file_system");
  public get readOnlyRootFileSystem() {
    return this._readOnlyRootFileSystem;
  }
  public putReadOnlyRootFileSystem(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextReadOnlyRootFileSystem) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#effect EnvironmentTemplate#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#operator EnvironmentTemplate#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#toleration_seconds EnvironmentTemplate#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: string;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsTolerationsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsTolerations | cdktf.IResolvable): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsTolerationsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsTolerations | cdktf.IResolvable): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsTolerations | cdktf.IResolvable | undefined) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsTolerationsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsTolerations[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsTolerationsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptions {
  /**
  * Specify the labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#labels EnvironmentTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Specify the namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#namespace EnvironmentTemplate#namespace}
  */
  readonly namespace?: string;
  /**
  * Specify the node selectors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#node_selector EnvironmentTemplate#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Specify the resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#resources EnvironmentTemplate#resources}
  */
  readonly resources?: string[];
  /**
  * Specify the service account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#service_account_name EnvironmentTemplate#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#affinity EnvironmentTemplate#affinity}
  */
  readonly affinity?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinity;
  /**
  * security_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#security_context EnvironmentTemplate#security_context}
  */
  readonly securityContext?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContext;
  /**
  * tolerations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#tolerations EnvironmentTemplate#tolerations}
  */
  readonly tolerations?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsTolerations[] | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptions): any {
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
    affinity: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityToTerraform(struct!.affinity),
    security_context: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextToTerraform(struct!.securityContext),
    tolerations: cdktf.listMapper(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsTolerationsToTerraform, true)(struct!.tolerations),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptions): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityList",
    },
    security_context: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextList",
    },
    tolerations: {
      value: cdktf.listMapperHcl(environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsTolerationsToHclTerraform, true)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptions | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptions | undefined) {
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
  private _affinity = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsAffinity) {
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
  private _securityContext = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsSecurityContext) {
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
  private _tolerations = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsTolerations[] | cdktf.IResolvable) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionSkipBuild {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: boolean | cdktf.IResolvable;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionSkipBuildToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionSkipBuildOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionSkipBuild): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.booleanToTerraform(struct!.value),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionSkipBuildToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionSkipBuildOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionSkipBuild): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionSkipBuildOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionSkipBuild | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionSkipBuild | undefined) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunction {
  /**
  * Configure the CPU Limits as the maximum amount of a resource to be used by a function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#cpu_limit_milli EnvironmentTemplate#cpu_limit_milli}
  */
  readonly cpuLimitMilli?: string;
  /**
  * Specify the function dependencies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#function_dependencies EnvironmentTemplate#function_dependencies}
  */
  readonly functionDependencies?: string[];
  /**
  * Image of the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#image EnvironmentTemplate#image}
  */
  readonly image?: string;
  /**
  * Configure the inactivity timeout in seconds. After this time, the function will be terminated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#inactivity_timeout_seconds EnvironmentTemplate#inactivity_timeout_seconds}
  */
  readonly inactivityTimeoutSeconds?: number;
  /**
  * Specify the language of the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#language EnvironmentTemplate#language}
  */
  readonly language?: string;
  /**
  * Specify the language version for the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#language_version EnvironmentTemplate#language_version}
  */
  readonly languageVersion?: string;
  /**
  * Specify the maximum number of concurrent requests that can be handled by the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#max_concurrency EnvironmentTemplate#max_concurrency}
  */
  readonly maxConcurrency?: number;
  /**
  * Configure the Memory Limits as the maximum amount of a resource to be used by a function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#memory_limit_mb EnvironmentTemplate#memory_limit_mb}
  */
  readonly memoryLimitMb?: string;
  /**
  * Specify the name of the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#name EnvironmentTemplate#name}
  */
  readonly name?: string;
  /**
  * Specify the number of replicas for the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#num_replicas EnvironmentTemplate#num_replicas}
  */
  readonly numReplicas?: number;
  /**
  * Specify the source of the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#source EnvironmentTemplate#source}
  */
  readonly source?: string;
  /**
  * Specify the system packages for the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#system_packages EnvironmentTemplate#system_packages}
  */
  readonly systemPackages?: string[];
  /**
  * Specify the target platforms for the function
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#target_platforms EnvironmentTemplate#target_platforms}
  */
  readonly targetPlatforms?: string[];
  /**
  * image_pull_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#image_pull_credentials EnvironmentTemplate#image_pull_credentials}
  */
  readonly imagePullCredentials?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionImagePullCredentials;
  /**
  * kube_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#kube_options EnvironmentTemplate#kube_options}
  */
  readonly kubeOptions?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptions;
  /**
  * skip_build block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#skip_build EnvironmentTemplate#skip_build}
  */
  readonly skipBuild?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionSkipBuild;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunction): any {
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
    image_pull_credentials: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionImagePullCredentialsToTerraform(struct!.imagePullCredentials),
    kube_options: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsToTerraform(struct!.kubeOptions),
    skip_build: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionSkipBuildToTerraform(struct!.skipBuild),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigFunctionToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunction): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionImagePullCredentialsToHclTerraform(struct!.imagePullCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionImagePullCredentialsList",
    },
    kube_options: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsToHclTerraform(struct!.kubeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsList",
    },
    skip_build: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionSkipBuildToHclTerraform(struct!.skipBuild),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionSkipBuildList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunction | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunction | undefined) {
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
  private _imagePullCredentials = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionImagePullCredentialsOutputReference(this, "image_pull_credentials");
  public get imagePullCredentials() {
    return this._imagePullCredentials;
  }
  public putImagePullCredentials(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionImagePullCredentials) {
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
  private _kubeOptions = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptionsOutputReference(this, "kube_options");
  public get kubeOptions() {
    return this._kubeOptions;
  }
  public putKubeOptions(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionKubeOptions) {
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
  private _skipBuild = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionSkipBuildOutputReference(this, "skip_build");
  public get skipBuild() {
    return this._skipBuild;
  }
  public putSkipBuild(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionSkipBuild) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigHttp {
  /**
  * Specify the request body
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#body EnvironmentTemplate#body}
  */
  readonly body?: string;
  /**
  * Provide ca cert for the http request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#ca_cert EnvironmentTemplate#ca_cert}
  */
  readonly caCert?: string;
  /**
  * Specify the http endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#endpoint EnvironmentTemplate#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Specify the http headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#headers EnvironmentTemplate#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * Provide skip TLS verify for the http request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#insecure EnvironmentTemplate#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Specify the http method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#method EnvironmentTemplate#method}
  */
  readonly method?: string;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigHttpToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigHttpOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigHttp): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataConfigHttpToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigHttpOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigHttp): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigHttp | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigHttp | undefined) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfigPollingConfig {
  /**
  * Specify the repeat
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#repeat EnvironmentTemplate#repeat}
  */
  readonly repeat?: string;
  /**
  * Specify the until
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#until EnvironmentTemplate#until}
  */
  readonly until?: string;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigPollingConfigToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigPollingConfigOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigPollingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    repeat: cdktf.stringToTerraform(struct!.repeat),
    until: cdktf.stringToTerraform(struct!.until),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigPollingConfigToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigPollingConfigOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfigPollingConfig): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigPollingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfigPollingConfig | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigPollingConfig | undefined) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataConfig {
  /**
  * Specify the max retry count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#max_retry_count EnvironmentTemplate#max_retry_count}
  */
  readonly maxRetryCount?: number;
  /**
  * Specify the success condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#success_condition EnvironmentTemplate#success_condition}
  */
  readonly successCondition?: string;
  /**
  * Specify the timeout in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#timeout_seconds EnvironmentTemplate#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * Specify the type of workflow handler
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#type EnvironmentTemplate#type}
  */
  readonly type?: string;
  /**
  * container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#container EnvironmentTemplate#container}
  */
  readonly container?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainer;
  /**
  * function block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#function EnvironmentTemplate#function}
  */
  readonly function?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunction;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#http EnvironmentTemplate#http}
  */
  readonly http?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigHttp;
  /**
  * polling_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#polling_config EnvironmentTemplate#polling_config}
  */
  readonly pollingConfig?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigPollingConfig;
}

export function environmentTemplateSpecHooksOnInitDriverDataConfigToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_retry_count: cdktf.numberToTerraform(struct!.maxRetryCount),
    success_condition: cdktf.stringToTerraform(struct!.successCondition),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    type: cdktf.stringToTerraform(struct!.type),
    container: environmentTemplateSpecHooksOnInitDriverDataConfigContainerToTerraform(struct!.container),
    function: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionToTerraform(struct!.function),
    http: environmentTemplateSpecHooksOnInitDriverDataConfigHttpToTerraform(struct!.http),
    polling_config: environmentTemplateSpecHooksOnInitDriverDataConfigPollingConfigToTerraform(struct!.pollingConfig),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataConfigToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataConfigOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataConfig): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataConfigContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerList",
    },
    function: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigFunctionToHclTerraform(struct!.function),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionList",
    },
    http: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigHttpList",
    },
    polling_config: {
      value: environmentTemplateSpecHooksOnInitDriverDataConfigPollingConfigToHclTerraform(struct!.pollingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataConfigPollingConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataConfig | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfig | undefined) {
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
  private _container = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigContainer) {
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
  private _function = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunctionOutputReference(this, "function");
  public get function() {
    return this._function;
  }
  public putFunction(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigFunction) {
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
  private _http = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigHttp) {
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
  private _pollingConfig = new EnvironmentTemplateSpecHooksOnInitDriverDataConfigPollingConfigOutputReference(this, "polling_config");
  public get pollingConfig() {
    return this._pollingConfig;
  }
  public putPollingConfig(value: EnvironmentTemplateSpecHooksOnInitDriverDataConfigPollingConfig) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsOverride {
  /**
  * Display overridden values on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#display_overridden EnvironmentTemplate#display_overridden}
  */
  readonly displayOverridden?: boolean | cdktf.IResolvable;
  /**
  * If the override type is restricted_key_values, values it is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#restricted_key_values EnvironmentTemplate#restricted_key_values}
  */
  readonly restrictedKeyValues?: { [key: string]: string };
  /**
  * If the override type is restricted, values it is restricted to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#restricted_values EnvironmentTemplate#restricted_values}
  */
  readonly restrictedValues?: string[];
  /**
  * Used to alias a variable and restrict the override scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#selectors EnvironmentTemplate#selectors}
  */
  readonly selectors?: string[];
  /**
  * Specify the type of ovverride this variable supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#type EnvironmentTemplate#type}
  */
  readonly type?: string;
}

export function environmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsOverrideToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsOverrideOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsOverride): any {
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


export function environmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsOverrideToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsOverrideOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsOverride): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsOverride | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsOverride | undefined) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#jsonschema EnvironmentTemplate#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#uischema EnvironmentTemplate#uischema}
  */
  readonly uischema?: string;
}

export function environmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsSchemaToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsSchemaOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsSchemaToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsSchemaOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsSchema): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsSchema | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsSchema | undefined) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#description EnvironmentTemplate#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render environment variable on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#display_metadata EnvironmentTemplate#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the environment variable is immutable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#immutable EnvironmentTemplate#immutable}
  */
  readonly immutable?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the variable is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#required EnvironmentTemplate#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#sensitive EnvironmentTemplate#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#override EnvironmentTemplate#override}
  */
  readonly override?: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#schema EnvironmentTemplate#schema}
  */
  readonly schema?: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsSchema;
}

export function environmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptions): any {
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
    override: environmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsOverrideToTerraform(struct!.override),
    schema: environmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsSchemaToTerraform(struct!.schema),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptions): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsOverrideList",
    },
    schema: {
      value: environmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptions | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptions | undefined) {
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
  private _override = new EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsOverride) {
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
  private _schema = new EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsSchema) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvs {
  /**
  * Key of the environment variable to be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#key EnvironmentTemplate#key}
  */
  readonly key?: string;
  /**
  * Deprecated: use options.sensitive. Determines whether the value is sensitive or not, accordingly applies encryption on it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#sensitive EnvironmentTemplate#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * Value of the environment variable to be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#value EnvironmentTemplate#value}
  */
  readonly value?: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#options EnvironmentTemplate#options}
  */
  readonly options?: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptions;
}

export function environmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    value: cdktf.stringToTerraform(struct!.value),
    options: environmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsToTerraform(struct!.options),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvs | cdktf.IResolvable): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvs | cdktf.IResolvable | undefined) {
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
  private _options = new EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOptions) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvs[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataEnvsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsOverride {
  /**
  * Specify the type of override this file supports
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#type EnvironmentTemplate#type}
  */
  readonly type?: string;
}

export function environmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsOverrideToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsOverrideOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsOverride): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsOverrideToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsOverrideOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsOverride): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsOverrideOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsOverride | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsOverride | undefined) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsSchema {
  /**
  * JSONSchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#jsonschema EnvironmentTemplate#jsonschema}
  */
  readonly jsonschema?: string;
  /**
  * UISchema definition of given variable that conforms to react-jsonschema-form library norms
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#uischema EnvironmentTemplate#uischema}
  */
  readonly uischema?: string;
}

export function environmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsSchemaToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsSchemaOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonschema: cdktf.stringToTerraform(struct!.jsonschema),
    uischema: cdktf.stringToTerraform(struct!.uischema),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsSchemaToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsSchemaOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsSchema): any {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsSchema | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsSchema | undefined) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptions {
  /**
  * Description of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#description EnvironmentTemplate#description}
  */
  readonly description?: string;
  /**
  * Display metadata to render file on UI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#display_metadata EnvironmentTemplate#display_metadata}
  */
  readonly displayMetadata?: string;
  /**
  * Determines whether the file is required / mandatory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#required EnvironmentTemplate#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#sensitive EnvironmentTemplate#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * override block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#override EnvironmentTemplate#override}
  */
  readonly override?: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsOverride;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#schema EnvironmentTemplate#schema}
  */
  readonly schema?: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsSchema;
}

export function environmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_metadata: cdktf.stringToTerraform(struct!.displayMetadata),
    required: cdktf.booleanToTerraform(struct!.required),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    override: environmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsOverrideToTerraform(struct!.override),
    schema: environmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsSchemaToTerraform(struct!.schema),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsOutputReference | EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptions): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsOverrideToHclTerraform(struct!.override),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsOverrideList",
    },
    schema: {
      value: environmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptions | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptions | undefined) {
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
  private _override = new EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsOverrideOutputReference(this, "override");
  public get override() {
    return this._override;
  }
  public putOverride(value: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsOverride) {
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
  private _schema = new EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsSchema) {
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
export interface EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFiles {
  /**
  * data is the base64 encoded contents of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#data EnvironmentTemplate#data}
  */
  readonly data?: string;
  /**
  * specify mount path of the file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#mount_path EnvironmentTemplate#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Name or relative path of a artifact
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#name EnvironmentTemplate#name}
  */
  readonly name?: string;
  /**
  * Deprected: use options.sensitive. data is encrypted  if sensitive is set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#sensitive EnvironmentTemplate#sensitive}
  */
  readonly sensitive?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.55/docs/resources/environment_template#options EnvironmentTemplate#options}
  */
  readonly options?: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptions;
}

export function environmentTemplateSpecHooksOnInitDriverDataInputsDataFilesToTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data: cdktf.stringToTerraform(struct!.data),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sensitive: cdktf.booleanToTerraform(struct!.sensitive),
    options: environmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsToTerraform(struct!.options),
  }
}


export function environmentTemplateSpecHooksOnInitDriverDataInputsDataFilesToHclTerraform(struct?: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFiles | cdktf.IResolvable): any {
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
      value: environmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFiles | cdktf.IResolvable | undefined {
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

  public set internalValue(value: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFiles | cdktf.IResolvable | undefined) {
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
  private _options = new EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOptions) {
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

export class EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesList extends cdktf.ComplexList {
  public internalValue? : EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFiles[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOutputReference {
    return new EnvironmentTemplateSpecHooksOnInitDriverDataInputsDataFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
