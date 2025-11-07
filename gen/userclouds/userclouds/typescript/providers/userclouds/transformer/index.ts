// https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransformerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#description Transformer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#function Transformer#function}
  */
  readonly function: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#id Transformer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#input_data_type Transformer#input_data_type}
  */
  readonly inputDataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#input_type Transformer#input_type}
  */
  readonly inputType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#input_type_constraints Transformer#input_type_constraints}
  */
  readonly inputTypeConstraints?: TransformerInputTypeConstraints;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#name Transformer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#output_data_type Transformer#output_data_type}
  */
  readonly outputDataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#output_type Transformer#output_type}
  */
  readonly outputType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#output_type_constraints Transformer#output_type_constraints}
  */
  readonly outputTypeConstraints?: TransformerOutputTypeConstraints;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#parameters Transformer#parameters}
  */
  readonly parameters?: string;
  /**
  * Specifies if the tokenizing transformer should return existing token instead of creating a new one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#reuse_existing_token Transformer#reuse_existing_token}
  */
  readonly reuseExistingToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#tag_ids Transformer#tag_ids}
  */
  readonly tagIds?: string[];
  /**
  * Valid values: `passthrough`, `tokenizebyreference`, `tokenizebyvalue`, `transform`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#transform_type Transformer#transform_type}
  */
  readonly transformType: string;
}
export interface TransformerInputTypeConstraintsFields {
  /**
  * Read-only camel-case version of field name, with underscores stripped out. (ex. IDField1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#camel_case_name Transformer#camel_case_name}
  */
  readonly camelCaseName?: string;
  /**
  * If true, field value will be ignored when comparing two composite value for a uniqueness check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#ignore_for_uniqueness Transformer#ignore_for_uniqueness}
  */
  readonly ignoreForUniqueness?: boolean | cdktf.IResolvable;
  /**
  * Each part of name must be capitalized or all-caps, separated by underscores. Names may contain alphanumeric characters, and the first part must start with a letter, while other parts may start with a number. (ex. ID_Field_1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#name Transformer#name}
  */
  readonly name: string;
  /**
  * Whether a value must be specified for the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#required Transformer#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Read-only snake-case version of field name, with all letters lowercase. (ex. id_field_1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#struct_name Transformer#struct_name}
  */
  readonly structName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#type Transformer#type}
  */
  readonly type: string;
}

export function transformerInputTypeConstraintsFieldsToTerraform(struct?: TransformerInputTypeConstraintsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    camel_case_name: cdktf.stringToTerraform(struct!.camelCaseName),
    ignore_for_uniqueness: cdktf.booleanToTerraform(struct!.ignoreForUniqueness),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    struct_name: cdktf.stringToTerraform(struct!.structName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function transformerInputTypeConstraintsFieldsToHclTerraform(struct?: TransformerInputTypeConstraintsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    camel_case_name: {
      value: cdktf.stringToHclTerraform(struct!.camelCaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_for_uniqueness: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreForUniqueness),
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
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    struct_name: {
      value: cdktf.stringToHclTerraform(struct!.structName),
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

export class TransformerInputTypeConstraintsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransformerInputTypeConstraintsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._camelCaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.camelCaseName = this._camelCaseName;
    }
    if (this._ignoreForUniqueness !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreForUniqueness = this._ignoreForUniqueness;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._structName !== undefined) {
      hasAnyValues = true;
      internalValueResult.structName = this._structName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformerInputTypeConstraintsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._camelCaseName = undefined;
      this._ignoreForUniqueness = undefined;
      this._name = undefined;
      this._required = undefined;
      this._structName = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._camelCaseName = value.camelCaseName;
      this._ignoreForUniqueness = value.ignoreForUniqueness;
      this._name = value.name;
      this._required = value.required;
      this._structName = value.structName;
      this._type = value.type;
    }
  }

  // camel_case_name - computed: true, optional: true, required: false
  private _camelCaseName?: string; 
  public get camelCaseName() {
    return this.getStringAttribute('camel_case_name');
  }
  public set camelCaseName(value: string) {
    this._camelCaseName = value;
  }
  public resetCamelCaseName() {
    this._camelCaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get camelCaseNameInput() {
    return this._camelCaseName;
  }

  // ignore_for_uniqueness - computed: true, optional: true, required: false
  private _ignoreForUniqueness?: boolean | cdktf.IResolvable; 
  public get ignoreForUniqueness() {
    return this.getBooleanAttribute('ignore_for_uniqueness');
  }
  public set ignoreForUniqueness(value: boolean | cdktf.IResolvable) {
    this._ignoreForUniqueness = value;
  }
  public resetIgnoreForUniqueness() {
    this._ignoreForUniqueness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreForUniquenessInput() {
    return this._ignoreForUniqueness;
  }

  // name - computed: true, optional: false, required: true
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

  // required - computed: true, optional: true, required: false
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

  // struct_name - computed: true, optional: true, required: false
  private _structName?: string; 
  public get structName() {
    return this.getStringAttribute('struct_name');
  }
  public set structName(value: string) {
    this._structName = value;
  }
  public resetStructName() {
    this._structName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structNameInput() {
    return this._structName;
  }

  // type - computed: true, optional: false, required: true
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

export class TransformerInputTypeConstraintsFieldsList extends cdktf.ComplexList {
  public internalValue? : TransformerInputTypeConstraintsFields[] | cdktf.IResolvable

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
  public get(index: number): TransformerInputTypeConstraintsFieldsOutputReference {
    return new TransformerInputTypeConstraintsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransformerInputTypeConstraints {
  /**
  * The set of fields associated with a column of type composite. Fields cannot be specified if the column type is not composite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#fields Transformer#fields}
  */
  readonly fields?: TransformerInputTypeConstraintsFields[] | cdktf.IResolvable;
  /**
  * Can be enabled when unique_id_required is enabled. If true, values for the associated column cannot be modified, but can be added or removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#immutable_required Transformer#immutable_required}
  */
  readonly immutableRequired?: boolean | cdktf.IResolvable;
  /**
  * Can be enabled for array columns that have UniqueRequired or UniqueIDRequired enabled. When enabled, a mutation request will update the specified subset of values for the associated column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#partial_updates Transformer#partial_updates}
  */
  readonly partialUpdates?: boolean | cdktf.IResolvable;
  /**
  * Can be enabled for column type composite or address. If true, each value for the associated column must have a unique string ID, which can either be provided or generated by backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#unique_id_required Transformer#unique_id_required}
  */
  readonly uniqueIdRequired?: boolean | cdktf.IResolvable;
  /**
  * If true, each value for the associated column must be unique for the user. This is primarily useful for array columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#unique_required Transformer#unique_required}
  */
  readonly uniqueRequired?: boolean | cdktf.IResolvable;
}

export function transformerInputTypeConstraintsToTerraform(struct?: TransformerInputTypeConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(transformerInputTypeConstraintsFieldsToTerraform, false)(struct!.fields),
    immutable_required: cdktf.booleanToTerraform(struct!.immutableRequired),
    partial_updates: cdktf.booleanToTerraform(struct!.partialUpdates),
    unique_id_required: cdktf.booleanToTerraform(struct!.uniqueIdRequired),
    unique_required: cdktf.booleanToTerraform(struct!.uniqueRequired),
  }
}


export function transformerInputTypeConstraintsToHclTerraform(struct?: TransformerInputTypeConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(transformerInputTypeConstraintsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "TransformerInputTypeConstraintsFieldsList",
    },
    immutable_required: {
      value: cdktf.booleanToHclTerraform(struct!.immutableRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    partial_updates: {
      value: cdktf.booleanToHclTerraform(struct!.partialUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unique_id_required: {
      value: cdktf.booleanToHclTerraform(struct!.uniqueIdRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unique_required: {
      value: cdktf.booleanToHclTerraform(struct!.uniqueRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransformerInputTypeConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransformerInputTypeConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._immutableRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.immutableRequired = this._immutableRequired;
    }
    if (this._partialUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.partialUpdates = this._partialUpdates;
    }
    if (this._uniqueIdRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueIdRequired = this._uniqueIdRequired;
    }
    if (this._uniqueRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueRequired = this._uniqueRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformerInputTypeConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
      this._immutableRequired = undefined;
      this._partialUpdates = undefined;
      this._uniqueIdRequired = undefined;
      this._uniqueRequired = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
      this._immutableRequired = value.immutableRequired;
      this._partialUpdates = value.partialUpdates;
      this._uniqueIdRequired = value.uniqueIdRequired;
      this._uniqueRequired = value.uniqueRequired;
    }
  }

  // fields - computed: true, optional: true, required: false
  private _fields = new TransformerInputTypeConstraintsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: TransformerInputTypeConstraintsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // immutable_required - computed: true, optional: true, required: false
  private _immutableRequired?: boolean | cdktf.IResolvable; 
  public get immutableRequired() {
    return this.getBooleanAttribute('immutable_required');
  }
  public set immutableRequired(value: boolean | cdktf.IResolvable) {
    this._immutableRequired = value;
  }
  public resetImmutableRequired() {
    this._immutableRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immutableRequiredInput() {
    return this._immutableRequired;
  }

  // partial_updates - computed: true, optional: true, required: false
  private _partialUpdates?: boolean | cdktf.IResolvable; 
  public get partialUpdates() {
    return this.getBooleanAttribute('partial_updates');
  }
  public set partialUpdates(value: boolean | cdktf.IResolvable) {
    this._partialUpdates = value;
  }
  public resetPartialUpdates() {
    this._partialUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialUpdatesInput() {
    return this._partialUpdates;
  }

  // unique_id_required - computed: true, optional: true, required: false
  private _uniqueIdRequired?: boolean | cdktf.IResolvable; 
  public get uniqueIdRequired() {
    return this.getBooleanAttribute('unique_id_required');
  }
  public set uniqueIdRequired(value: boolean | cdktf.IResolvable) {
    this._uniqueIdRequired = value;
  }
  public resetUniqueIdRequired() {
    this._uniqueIdRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueIdRequiredInput() {
    return this._uniqueIdRequired;
  }

  // unique_required - computed: true, optional: true, required: false
  private _uniqueRequired?: boolean | cdktf.IResolvable; 
  public get uniqueRequired() {
    return this.getBooleanAttribute('unique_required');
  }
  public set uniqueRequired(value: boolean | cdktf.IResolvable) {
    this._uniqueRequired = value;
  }
  public resetUniqueRequired() {
    this._uniqueRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueRequiredInput() {
    return this._uniqueRequired;
  }
}
export interface TransformerOutputTypeConstraintsFields {
  /**
  * Read-only camel-case version of field name, with underscores stripped out. (ex. IDField1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#camel_case_name Transformer#camel_case_name}
  */
  readonly camelCaseName?: string;
  /**
  * If true, field value will be ignored when comparing two composite value for a uniqueness check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#ignore_for_uniqueness Transformer#ignore_for_uniqueness}
  */
  readonly ignoreForUniqueness?: boolean | cdktf.IResolvable;
  /**
  * Each part of name must be capitalized or all-caps, separated by underscores. Names may contain alphanumeric characters, and the first part must start with a letter, while other parts may start with a number. (ex. ID_Field_1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#name Transformer#name}
  */
  readonly name: string;
  /**
  * Whether a value must be specified for the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#required Transformer#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Read-only snake-case version of field name, with all letters lowercase. (ex. id_field_1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#struct_name Transformer#struct_name}
  */
  readonly structName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#type Transformer#type}
  */
  readonly type: string;
}

export function transformerOutputTypeConstraintsFieldsToTerraform(struct?: TransformerOutputTypeConstraintsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    camel_case_name: cdktf.stringToTerraform(struct!.camelCaseName),
    ignore_for_uniqueness: cdktf.booleanToTerraform(struct!.ignoreForUniqueness),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    struct_name: cdktf.stringToTerraform(struct!.structName),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function transformerOutputTypeConstraintsFieldsToHclTerraform(struct?: TransformerOutputTypeConstraintsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    camel_case_name: {
      value: cdktf.stringToHclTerraform(struct!.camelCaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_for_uniqueness: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreForUniqueness),
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
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    struct_name: {
      value: cdktf.stringToHclTerraform(struct!.structName),
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

export class TransformerOutputTypeConstraintsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TransformerOutputTypeConstraintsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._camelCaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.camelCaseName = this._camelCaseName;
    }
    if (this._ignoreForUniqueness !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreForUniqueness = this._ignoreForUniqueness;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._structName !== undefined) {
      hasAnyValues = true;
      internalValueResult.structName = this._structName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformerOutputTypeConstraintsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._camelCaseName = undefined;
      this._ignoreForUniqueness = undefined;
      this._name = undefined;
      this._required = undefined;
      this._structName = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._camelCaseName = value.camelCaseName;
      this._ignoreForUniqueness = value.ignoreForUniqueness;
      this._name = value.name;
      this._required = value.required;
      this._structName = value.structName;
      this._type = value.type;
    }
  }

  // camel_case_name - computed: true, optional: true, required: false
  private _camelCaseName?: string; 
  public get camelCaseName() {
    return this.getStringAttribute('camel_case_name');
  }
  public set camelCaseName(value: string) {
    this._camelCaseName = value;
  }
  public resetCamelCaseName() {
    this._camelCaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get camelCaseNameInput() {
    return this._camelCaseName;
  }

  // ignore_for_uniqueness - computed: true, optional: true, required: false
  private _ignoreForUniqueness?: boolean | cdktf.IResolvable; 
  public get ignoreForUniqueness() {
    return this.getBooleanAttribute('ignore_for_uniqueness');
  }
  public set ignoreForUniqueness(value: boolean | cdktf.IResolvable) {
    this._ignoreForUniqueness = value;
  }
  public resetIgnoreForUniqueness() {
    this._ignoreForUniqueness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreForUniquenessInput() {
    return this._ignoreForUniqueness;
  }

  // name - computed: true, optional: false, required: true
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

  // required - computed: true, optional: true, required: false
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

  // struct_name - computed: true, optional: true, required: false
  private _structName?: string; 
  public get structName() {
    return this.getStringAttribute('struct_name');
  }
  public set structName(value: string) {
    this._structName = value;
  }
  public resetStructName() {
    this._structName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structNameInput() {
    return this._structName;
  }

  // type - computed: true, optional: false, required: true
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

export class TransformerOutputTypeConstraintsFieldsList extends cdktf.ComplexList {
  public internalValue? : TransformerOutputTypeConstraintsFields[] | cdktf.IResolvable

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
  public get(index: number): TransformerOutputTypeConstraintsFieldsOutputReference {
    return new TransformerOutputTypeConstraintsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TransformerOutputTypeConstraints {
  /**
  * The set of fields associated with a column of type composite. Fields cannot be specified if the column type is not composite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#fields Transformer#fields}
  */
  readonly fields?: TransformerOutputTypeConstraintsFields[] | cdktf.IResolvable;
  /**
  * Can be enabled when unique_id_required is enabled. If true, values for the associated column cannot be modified, but can be added or removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#immutable_required Transformer#immutable_required}
  */
  readonly immutableRequired?: boolean | cdktf.IResolvable;
  /**
  * Can be enabled for array columns that have UniqueRequired or UniqueIDRequired enabled. When enabled, a mutation request will update the specified subset of values for the associated column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#partial_updates Transformer#partial_updates}
  */
  readonly partialUpdates?: boolean | cdktf.IResolvable;
  /**
  * Can be enabled for column type composite or address. If true, each value for the associated column must have a unique string ID, which can either be provided or generated by backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#unique_id_required Transformer#unique_id_required}
  */
  readonly uniqueIdRequired?: boolean | cdktf.IResolvable;
  /**
  * If true, each value for the associated column must be unique for the user. This is primarily useful for array columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#unique_required Transformer#unique_required}
  */
  readonly uniqueRequired?: boolean | cdktf.IResolvable;
}

export function transformerOutputTypeConstraintsToTerraform(struct?: TransformerOutputTypeConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(transformerOutputTypeConstraintsFieldsToTerraform, false)(struct!.fields),
    immutable_required: cdktf.booleanToTerraform(struct!.immutableRequired),
    partial_updates: cdktf.booleanToTerraform(struct!.partialUpdates),
    unique_id_required: cdktf.booleanToTerraform(struct!.uniqueIdRequired),
    unique_required: cdktf.booleanToTerraform(struct!.uniqueRequired),
  }
}


export function transformerOutputTypeConstraintsToHclTerraform(struct?: TransformerOutputTypeConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(transformerOutputTypeConstraintsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "TransformerOutputTypeConstraintsFieldsList",
    },
    immutable_required: {
      value: cdktf.booleanToHclTerraform(struct!.immutableRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    partial_updates: {
      value: cdktf.booleanToHclTerraform(struct!.partialUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unique_id_required: {
      value: cdktf.booleanToHclTerraform(struct!.uniqueIdRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unique_required: {
      value: cdktf.booleanToHclTerraform(struct!.uniqueRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransformerOutputTypeConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TransformerOutputTypeConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._immutableRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.immutableRequired = this._immutableRequired;
    }
    if (this._partialUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.partialUpdates = this._partialUpdates;
    }
    if (this._uniqueIdRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueIdRequired = this._uniqueIdRequired;
    }
    if (this._uniqueRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueRequired = this._uniqueRequired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransformerOutputTypeConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
      this._immutableRequired = undefined;
      this._partialUpdates = undefined;
      this._uniqueIdRequired = undefined;
      this._uniqueRequired = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
      this._immutableRequired = value.immutableRequired;
      this._partialUpdates = value.partialUpdates;
      this._uniqueIdRequired = value.uniqueIdRequired;
      this._uniqueRequired = value.uniqueRequired;
    }
  }

  // fields - computed: true, optional: true, required: false
  private _fields = new TransformerOutputTypeConstraintsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: TransformerOutputTypeConstraintsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // immutable_required - computed: true, optional: true, required: false
  private _immutableRequired?: boolean | cdktf.IResolvable; 
  public get immutableRequired() {
    return this.getBooleanAttribute('immutable_required');
  }
  public set immutableRequired(value: boolean | cdktf.IResolvable) {
    this._immutableRequired = value;
  }
  public resetImmutableRequired() {
    this._immutableRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immutableRequiredInput() {
    return this._immutableRequired;
  }

  // partial_updates - computed: true, optional: true, required: false
  private _partialUpdates?: boolean | cdktf.IResolvable; 
  public get partialUpdates() {
    return this.getBooleanAttribute('partial_updates');
  }
  public set partialUpdates(value: boolean | cdktf.IResolvable) {
    this._partialUpdates = value;
  }
  public resetPartialUpdates() {
    this._partialUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialUpdatesInput() {
    return this._partialUpdates;
  }

  // unique_id_required - computed: true, optional: true, required: false
  private _uniqueIdRequired?: boolean | cdktf.IResolvable; 
  public get uniqueIdRequired() {
    return this.getBooleanAttribute('unique_id_required');
  }
  public set uniqueIdRequired(value: boolean | cdktf.IResolvable) {
    this._uniqueIdRequired = value;
  }
  public resetUniqueIdRequired() {
    this._uniqueIdRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueIdRequiredInput() {
    return this._uniqueIdRequired;
  }

  // unique_required - computed: true, optional: true, required: false
  private _uniqueRequired?: boolean | cdktf.IResolvable; 
  public get uniqueRequired() {
    return this.getBooleanAttribute('unique_required');
  }
  public set uniqueRequired(value: boolean | cdktf.IResolvable) {
    this._uniqueRequired = value;
  }
  public resetUniqueRequired() {
    this._uniqueRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueRequiredInput() {
    return this._uniqueRequired;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer userclouds_transformer}
*/
export class Transformer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "userclouds_transformer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Transformer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Transformer to import
  * @param importFromId The id of the existing Transformer that should be imported. Refer to the {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Transformer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "userclouds_transformer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/transformer userclouds_transformer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransformerConfig
  */
  public constructor(scope: Construct, id: string, config: TransformerConfig) {
    super(scope, id, {
      terraformResourceType: 'userclouds_transformer',
      terraformGeneratorMetadata: {
        providerName: 'userclouds',
        providerVersion: '0.1.8'
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
    this._function = config.function;
    this._id = config.id;
    this._inputDataType = config.inputDataType;
    this._inputType = config.inputType;
    this._inputTypeConstraints.internalValue = config.inputTypeConstraints;
    this._name = config.name;
    this._outputDataType = config.outputDataType;
    this._outputType = config.outputType;
    this._outputTypeConstraints.internalValue = config.outputTypeConstraints;
    this._parameters = config.parameters;
    this._reuseExistingToken = config.reuseExistingToken;
    this._tagIds = config.tagIds;
    this._transformType = config.transformType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // function - computed: false, optional: false, required: true
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
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

  // input_data_type - computed: false, optional: false, required: true
  private _inputDataType?: string; 
  public get inputDataType() {
    return this.getStringAttribute('input_data_type');
  }
  public set inputDataType(value: string) {
    this._inputDataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDataTypeInput() {
    return this._inputDataType;
  }

  // input_type - computed: true, optional: true, required: false
  private _inputType?: string; 
  public get inputType() {
    return this.getStringAttribute('input_type');
  }
  public set inputType(value: string) {
    this._inputType = value;
  }
  public resetInputType() {
    this._inputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTypeInput() {
    return this._inputType;
  }

  // input_type_constraints - computed: true, optional: true, required: false
  private _inputTypeConstraints = new TransformerInputTypeConstraintsOutputReference(this, "input_type_constraints");
  public get inputTypeConstraints() {
    return this._inputTypeConstraints;
  }
  public putInputTypeConstraints(value: TransformerInputTypeConstraints) {
    this._inputTypeConstraints.internalValue = value;
  }
  public resetInputTypeConstraints() {
    this._inputTypeConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputTypeConstraintsInput() {
    return this._inputTypeConstraints.internalValue;
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

  // output_data_type - computed: false, optional: false, required: true
  private _outputDataType?: string; 
  public get outputDataType() {
    return this.getStringAttribute('output_data_type');
  }
  public set outputDataType(value: string) {
    this._outputDataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDataTypeInput() {
    return this._outputDataType;
  }

  // output_type - computed: true, optional: true, required: false
  private _outputType?: string; 
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  public resetOutputType() {
    this._outputType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }

  // output_type_constraints - computed: true, optional: true, required: false
  private _outputTypeConstraints = new TransformerOutputTypeConstraintsOutputReference(this, "output_type_constraints");
  public get outputTypeConstraints() {
    return this._outputTypeConstraints;
  }
  public putOutputTypeConstraints(value: TransformerOutputTypeConstraints) {
    this._outputTypeConstraints.internalValue = value;
  }
  public resetOutputTypeConstraints() {
    this._outputTypeConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeConstraintsInput() {
    return this._outputTypeConstraints.internalValue;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: string; 
  public get parameters() {
    return this.getStringAttribute('parameters');
  }
  public set parameters(value: string) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // reuse_existing_token - computed: true, optional: true, required: false
  private _reuseExistingToken?: boolean | cdktf.IResolvable; 
  public get reuseExistingToken() {
    return this.getBooleanAttribute('reuse_existing_token');
  }
  public set reuseExistingToken(value: boolean | cdktf.IResolvable) {
    this._reuseExistingToken = value;
  }
  public resetReuseExistingToken() {
    this._reuseExistingToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reuseExistingTokenInput() {
    return this._reuseExistingToken;
  }

  // tag_ids - computed: true, optional: true, required: false
  private _tagIds?: string[]; 
  public get tagIds() {
    return this.getListAttribute('tag_ids');
  }
  public set tagIds(value: string[]) {
    this._tagIds = value;
  }
  public resetTagIds() {
    this._tagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdsInput() {
    return this._tagIds;
  }

  // transform_type - computed: false, optional: false, required: true
  private _transformType?: string; 
  public get transformType() {
    return this.getStringAttribute('transform_type');
  }
  public set transformType(value: string) {
    this._transformType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transformTypeInput() {
    return this._transformType;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      function: cdktf.stringToTerraform(this._function),
      id: cdktf.stringToTerraform(this._id),
      input_data_type: cdktf.stringToTerraform(this._inputDataType),
      input_type: cdktf.stringToTerraform(this._inputType),
      input_type_constraints: transformerInputTypeConstraintsToTerraform(this._inputTypeConstraints.internalValue),
      name: cdktf.stringToTerraform(this._name),
      output_data_type: cdktf.stringToTerraform(this._outputDataType),
      output_type: cdktf.stringToTerraform(this._outputType),
      output_type_constraints: transformerOutputTypeConstraintsToTerraform(this._outputTypeConstraints.internalValue),
      parameters: cdktf.stringToTerraform(this._parameters),
      reuse_existing_token: cdktf.booleanToTerraform(this._reuseExistingToken),
      tag_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagIds),
      transform_type: cdktf.stringToTerraform(this._transformType),
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
      function: {
        value: cdktf.stringToHclTerraform(this._function),
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
      input_data_type: {
        value: cdktf.stringToHclTerraform(this._inputDataType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_type: {
        value: cdktf.stringToHclTerraform(this._inputType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      input_type_constraints: {
        value: transformerInputTypeConstraintsToHclTerraform(this._inputTypeConstraints.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TransformerInputTypeConstraints",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_data_type: {
        value: cdktf.stringToHclTerraform(this._outputDataType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_type: {
        value: cdktf.stringToHclTerraform(this._outputType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_type_constraints: {
        value: transformerOutputTypeConstraintsToHclTerraform(this._outputTypeConstraints.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TransformerOutputTypeConstraints",
      },
      parameters: {
        value: cdktf.stringToHclTerraform(this._parameters),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reuse_existing_token: {
        value: cdktf.booleanToHclTerraform(this._reuseExistingToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tag_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      transform_type: {
        value: cdktf.stringToHclTerraform(this._transformType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
