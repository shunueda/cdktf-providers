// https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_data_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserstoreColumnDataTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_data_type#composite_attributes UserstoreColumnDataType#composite_attributes}
  */
  readonly compositeAttributes?: UserstoreColumnDataTypeCompositeAttributes;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_data_type#description UserstoreColumnDataType#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_data_type#id UserstoreColumnDataType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether the data type can be used for a composite field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_data_type#is_composite_field_type UserstoreColumnDataType#is_composite_field_type}
  */
  readonly isCompositeFieldType?: boolean | cdktf.IResolvable;
  /**
  * Whether this is a native non-editable data type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_data_type#is_native UserstoreColumnDataType#is_native}
  */
  readonly isNative?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_data_type#name UserstoreColumnDataType#name}
  */
  readonly name: string;
}
export interface UserstoreColumnDataTypeCompositeAttributesFields {
  /**
  * Read-only camel-case version of field name, with underscores stripped out. (ex. IDField1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_data_type#camel_case_name UserstoreColumnDataType#camel_case_name}
  */
  readonly camelCaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_data_type#data_type UserstoreColumnDataType#data_type}
  */
  readonly dataType: string;
  /**
  * If true, field value will be ignored when comparing two composite values for a uniqueness check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_data_type#ignore_for_uniqueness UserstoreColumnDataType#ignore_for_uniqueness}
  */
  readonly ignoreForUniqueness?: boolean | cdktf.IResolvable;
  /**
  * Each part of name must be capitalized or all-caps, separated by underscores. Names may contain alphanumeric characters, and the first part must start with a letter, while other parts may start with a number. (ex. ID_Field_1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_data_type#name UserstoreColumnDataType#name}
  */
  readonly name: string;
  /**
  * Whether a value must be specified for the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_data_type#required UserstoreColumnDataType#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Read-only snake-case version of field name, with all letters lowercase. (ex. id_field_1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_data_type#struct_name UserstoreColumnDataType#struct_name}
  */
  readonly structName?: string;
}

export function userstoreColumnDataTypeCompositeAttributesFieldsToTerraform(struct?: UserstoreColumnDataTypeCompositeAttributesFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    camel_case_name: cdktf.stringToTerraform(struct!.camelCaseName),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    ignore_for_uniqueness: cdktf.booleanToTerraform(struct!.ignoreForUniqueness),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    struct_name: cdktf.stringToTerraform(struct!.structName),
  }
}


export function userstoreColumnDataTypeCompositeAttributesFieldsToHclTerraform(struct?: UserstoreColumnDataTypeCompositeAttributesFields | cdktf.IResolvable): any {
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
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserstoreColumnDataTypeCompositeAttributesFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserstoreColumnDataTypeCompositeAttributesFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._camelCaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.camelCaseName = this._camelCaseName;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserstoreColumnDataTypeCompositeAttributesFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._camelCaseName = undefined;
      this._dataType = undefined;
      this._ignoreForUniqueness = undefined;
      this._name = undefined;
      this._required = undefined;
      this._structName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._camelCaseName = value.camelCaseName;
      this._dataType = value.dataType;
      this._ignoreForUniqueness = value.ignoreForUniqueness;
      this._name = value.name;
      this._required = value.required;
      this._structName = value.structName;
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

  // data_type - computed: true, optional: false, required: true
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
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
}

export class UserstoreColumnDataTypeCompositeAttributesFieldsList extends cdktf.ComplexList {
  public internalValue? : UserstoreColumnDataTypeCompositeAttributesFields[] | cdktf.IResolvable

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
  public get(index: number): UserstoreColumnDataTypeCompositeAttributesFieldsOutputReference {
    return new UserstoreColumnDataTypeCompositeAttributesFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserstoreColumnDataTypeCompositeAttributes {
  /**
  * The set of fields associated with a composite data type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_data_type#fields UserstoreColumnDataType#fields}
  */
  readonly fields?: UserstoreColumnDataTypeCompositeAttributesFields[] | cdktf.IResolvable;
  /**
  * Whether the composite data type must include an id field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_data_type#include_id UserstoreColumnDataType#include_id}
  */
  readonly includeId?: boolean | cdktf.IResolvable;
}

export function userstoreColumnDataTypeCompositeAttributesToTerraform(struct?: UserstoreColumnDataTypeCompositeAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(userstoreColumnDataTypeCompositeAttributesFieldsToTerraform, false)(struct!.fields),
    include_id: cdktf.booleanToTerraform(struct!.includeId),
  }
}


export function userstoreColumnDataTypeCompositeAttributesToHclTerraform(struct?: UserstoreColumnDataTypeCompositeAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(userstoreColumnDataTypeCompositeAttributesFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "UserstoreColumnDataTypeCompositeAttributesFieldsList",
    },
    include_id: {
      value: cdktf.booleanToHclTerraform(struct!.includeId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserstoreColumnDataTypeCompositeAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserstoreColumnDataTypeCompositeAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    if (this._includeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeId = this._includeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserstoreColumnDataTypeCompositeAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fields.internalValue = undefined;
      this._includeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fields.internalValue = value.fields;
      this._includeId = value.includeId;
    }
  }

  // fields - computed: true, optional: true, required: false
  private _fields = new UserstoreColumnDataTypeCompositeAttributesFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: UserstoreColumnDataTypeCompositeAttributesFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // include_id - computed: true, optional: true, required: false
  private _includeId?: boolean | cdktf.IResolvable; 
  public get includeId() {
    return this.getBooleanAttribute('include_id');
  }
  public set includeId(value: boolean | cdktf.IResolvable) {
    this._includeId = value;
  }
  public resetIncludeId() {
    this._includeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeIdInput() {
    return this._includeId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_data_type userclouds_userstore_column_data_type}
*/
export class UserstoreColumnDataType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "userclouds_userstore_column_data_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserstoreColumnDataType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserstoreColumnDataType to import
  * @param importFromId The id of the existing UserstoreColumnDataType that should be imported. Refer to the {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_data_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserstoreColumnDataType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "userclouds_userstore_column_data_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column_data_type userclouds_userstore_column_data_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserstoreColumnDataTypeConfig
  */
  public constructor(scope: Construct, id: string, config: UserstoreColumnDataTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'userclouds_userstore_column_data_type',
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
    this._compositeAttributes.internalValue = config.compositeAttributes;
    this._description = config.description;
    this._id = config.id;
    this._isCompositeFieldType = config.isCompositeFieldType;
    this._isNative = config.isNative;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // composite_attributes - computed: true, optional: true, required: false
  private _compositeAttributes = new UserstoreColumnDataTypeCompositeAttributesOutputReference(this, "composite_attributes");
  public get compositeAttributes() {
    return this._compositeAttributes;
  }
  public putCompositeAttributes(value: UserstoreColumnDataTypeCompositeAttributes) {
    this._compositeAttributes.internalValue = value;
  }
  public resetCompositeAttributes() {
    this._compositeAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compositeAttributesInput() {
    return this._compositeAttributes.internalValue;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
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

  // is_composite_field_type - computed: true, optional: true, required: false
  private _isCompositeFieldType?: boolean | cdktf.IResolvable; 
  public get isCompositeFieldType() {
    return this.getBooleanAttribute('is_composite_field_type');
  }
  public set isCompositeFieldType(value: boolean | cdktf.IResolvable) {
    this._isCompositeFieldType = value;
  }
  public resetIsCompositeFieldType() {
    this._isCompositeFieldType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCompositeFieldTypeInput() {
    return this._isCompositeFieldType;
  }

  // is_native - computed: true, optional: true, required: false
  private _isNative?: boolean | cdktf.IResolvable; 
  public get isNative() {
    return this.getBooleanAttribute('is_native');
  }
  public set isNative(value: boolean | cdktf.IResolvable) {
    this._isNative = value;
  }
  public resetIsNative() {
    this._isNative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNativeInput() {
    return this._isNative;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      composite_attributes: userstoreColumnDataTypeCompositeAttributesToTerraform(this._compositeAttributes.internalValue),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_composite_field_type: cdktf.booleanToTerraform(this._isCompositeFieldType),
      is_native: cdktf.booleanToTerraform(this._isNative),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      composite_attributes: {
        value: userstoreColumnDataTypeCompositeAttributesToHclTerraform(this._compositeAttributes.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UserstoreColumnDataTypeCompositeAttributes",
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
      is_composite_field_type: {
        value: cdktf.booleanToHclTerraform(this._isCompositeFieldType),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_native: {
        value: cdktf.booleanToHclTerraform(this._isNative),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
