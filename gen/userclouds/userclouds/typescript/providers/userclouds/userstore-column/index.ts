// https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserstoreColumnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#access_policy UserstoreColumn#access_policy}
  */
  readonly accessPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#constraints UserstoreColumn#constraints}
  */
  readonly constraints?: UserstoreColumnConstraints;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#data_type UserstoreColumn#data_type}
  */
  readonly dataType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#default_token_access_policy UserstoreColumn#default_token_access_policy}
  */
  readonly defaultTokenAccessPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#default_transformer UserstoreColumn#default_transformer}
  */
  readonly defaultTransformer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#default_value UserstoreColumn#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#id UserstoreColumn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Valid values: `indexed`, `none`, `unique`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#index_type UserstoreColumn#index_type}
  */
  readonly indexType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#is_array UserstoreColumn#is_array}
  */
  readonly isArray: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#name UserstoreColumn#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#search_indexed UserstoreColumn#search_indexed}
  */
  readonly searchIndexed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#table UserstoreColumn#table}
  */
  readonly table?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#type UserstoreColumn#type}
  */
  readonly type?: string;
}
export interface UserstoreColumnConstraintsFields {
  /**
  * Read-only camel-case version of field name, with underscores stripped out. (ex. IDField1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#camel_case_name UserstoreColumn#camel_case_name}
  */
  readonly camelCaseName?: string;
  /**
  * If true, field value will be ignored when comparing two composite value for a uniqueness check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#ignore_for_uniqueness UserstoreColumn#ignore_for_uniqueness}
  */
  readonly ignoreForUniqueness?: boolean | cdktf.IResolvable;
  /**
  * Each part of name must be capitalized or all-caps, separated by underscores. Names may contain alphanumeric characters, and the first part must start with a letter, while other parts may start with a number. (ex. ID_Field_1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#name UserstoreColumn#name}
  */
  readonly name: string;
  /**
  * Whether a value must be specified for the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#required UserstoreColumn#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Read-only snake-case version of field name, with all letters lowercase. (ex. id_field_1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#struct_name UserstoreColumn#struct_name}
  */
  readonly structName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#type UserstoreColumn#type}
  */
  readonly type: string;
}

export function userstoreColumnConstraintsFieldsToTerraform(struct?: UserstoreColumnConstraintsFields | cdktf.IResolvable): any {
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


export function userstoreColumnConstraintsFieldsToHclTerraform(struct?: UserstoreColumnConstraintsFields | cdktf.IResolvable): any {
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

export class UserstoreColumnConstraintsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserstoreColumnConstraintsFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UserstoreColumnConstraintsFields | cdktf.IResolvable | undefined) {
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

export class UserstoreColumnConstraintsFieldsList extends cdktf.ComplexList {
  public internalValue? : UserstoreColumnConstraintsFields[] | cdktf.IResolvable

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
  public get(index: number): UserstoreColumnConstraintsFieldsOutputReference {
    return new UserstoreColumnConstraintsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserstoreColumnConstraints {
  /**
  * The set of fields associated with a column of type composite. Fields cannot be specified if the column type is not composite.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#fields UserstoreColumn#fields}
  */
  readonly fields?: UserstoreColumnConstraintsFields[] | cdktf.IResolvable;
  /**
  * Can be enabled when unique_id_required is enabled. If true, values for the associated column cannot be modified, but can be added or removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#immutable_required UserstoreColumn#immutable_required}
  */
  readonly immutableRequired?: boolean | cdktf.IResolvable;
  /**
  * Can be enabled for array columns that have UniqueRequired or UniqueIDRequired enabled. When enabled, a mutation request will update the specified subset of values for the associated column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#partial_updates UserstoreColumn#partial_updates}
  */
  readonly partialUpdates?: boolean | cdktf.IResolvable;
  /**
  * Can be enabled for column type composite or address. If true, each value for the associated column must have a unique string ID, which can either be provided or generated by backend.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#unique_id_required UserstoreColumn#unique_id_required}
  */
  readonly uniqueIdRequired?: boolean | cdktf.IResolvable;
  /**
  * If true, each value for the associated column must be unique for the user. This is primarily useful for array columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#unique_required UserstoreColumn#unique_required}
  */
  readonly uniqueRequired?: boolean | cdktf.IResolvable;
}

export function userstoreColumnConstraintsToTerraform(struct?: UserstoreColumnConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(userstoreColumnConstraintsFieldsToTerraform, false)(struct!.fields),
    immutable_required: cdktf.booleanToTerraform(struct!.immutableRequired),
    partial_updates: cdktf.booleanToTerraform(struct!.partialUpdates),
    unique_id_required: cdktf.booleanToTerraform(struct!.uniqueIdRequired),
    unique_required: cdktf.booleanToTerraform(struct!.uniqueRequired),
  }
}


export function userstoreColumnConstraintsToHclTerraform(struct?: UserstoreColumnConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(userstoreColumnConstraintsFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "UserstoreColumnConstraintsFieldsList",
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

export class UserstoreColumnConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserstoreColumnConstraints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UserstoreColumnConstraints | cdktf.IResolvable | undefined) {
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
  private _fields = new UserstoreColumnConstraintsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: UserstoreColumnConstraintsFields[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column userclouds_userstore_column}
*/
export class UserstoreColumn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "userclouds_userstore_column";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserstoreColumn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserstoreColumn to import
  * @param importFromId The id of the existing UserstoreColumn that should be imported. Refer to the {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserstoreColumn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "userclouds_userstore_column", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/userclouds/userclouds/0.1.8/docs/resources/userstore_column userclouds_userstore_column} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserstoreColumnConfig
  */
  public constructor(scope: Construct, id: string, config: UserstoreColumnConfig) {
    super(scope, id, {
      terraformResourceType: 'userclouds_userstore_column',
      terraformGeneratorMetadata: {
        providerName: 'userclouds',
        providerVersion: '0.1.8',
        providerVersionConstraint: '0.1.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessPolicy = config.accessPolicy;
    this._constraints.internalValue = config.constraints;
    this._dataType = config.dataType;
    this._defaultTokenAccessPolicy = config.defaultTokenAccessPolicy;
    this._defaultTransformer = config.defaultTransformer;
    this._defaultValue = config.defaultValue;
    this._id = config.id;
    this._indexType = config.indexType;
    this._isArray = config.isArray;
    this._name = config.name;
    this._searchIndexed = config.searchIndexed;
    this._table = config.table;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy - computed: true, optional: true, required: false
  private _accessPolicy?: string; 
  public get accessPolicy() {
    return this.getStringAttribute('access_policy');
  }
  public set accessPolicy(value: string) {
    this._accessPolicy = value;
  }
  public resetAccessPolicy() {
    this._accessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyInput() {
    return this._accessPolicy;
  }

  // constraints - computed: true, optional: true, required: false
  private _constraints = new UserstoreColumnConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: UserstoreColumnConstraints) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // data_type - computed: false, optional: false, required: true
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

  // default_token_access_policy - computed: true, optional: true, required: false
  private _defaultTokenAccessPolicy?: string; 
  public get defaultTokenAccessPolicy() {
    return this.getStringAttribute('default_token_access_policy');
  }
  public set defaultTokenAccessPolicy(value: string) {
    this._defaultTokenAccessPolicy = value;
  }
  public resetDefaultTokenAccessPolicy() {
    this._defaultTokenAccessPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTokenAccessPolicyInput() {
    return this._defaultTokenAccessPolicy;
  }

  // default_transformer - computed: true, optional: true, required: false
  private _defaultTransformer?: string; 
  public get defaultTransformer() {
    return this.getStringAttribute('default_transformer');
  }
  public set defaultTransformer(value: string) {
    this._defaultTransformer = value;
  }
  public resetDefaultTransformer() {
    this._defaultTransformer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTransformerInput() {
    return this._defaultTransformer;
  }

  // default_value - computed: true, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

  // index_type - computed: false, optional: false, required: true
  private _indexType?: string; 
  public get indexType() {
    return this.getStringAttribute('index_type');
  }
  public set indexType(value: string) {
    this._indexType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexTypeInput() {
    return this._indexType;
  }

  // is_array - computed: false, optional: false, required: true
  private _isArray?: boolean | cdktf.IResolvable; 
  public get isArray() {
    return this.getBooleanAttribute('is_array');
  }
  public set isArray(value: boolean | cdktf.IResolvable) {
    this._isArray = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isArrayInput() {
    return this._isArray;
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

  // search_indexed - computed: true, optional: true, required: false
  private _searchIndexed?: boolean | cdktf.IResolvable; 
  public get searchIndexed() {
    return this.getBooleanAttribute('search_indexed');
  }
  public set searchIndexed(value: boolean | cdktf.IResolvable) {
    this._searchIndexed = value;
  }
  public resetSearchIndexed() {
    this._searchIndexed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchIndexedInput() {
    return this._searchIndexed;
  }

  // table - computed: true, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // type - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policy: cdktf.stringToTerraform(this._accessPolicy),
      constraints: userstoreColumnConstraintsToTerraform(this._constraints.internalValue),
      data_type: cdktf.stringToTerraform(this._dataType),
      default_token_access_policy: cdktf.stringToTerraform(this._defaultTokenAccessPolicy),
      default_transformer: cdktf.stringToTerraform(this._defaultTransformer),
      default_value: cdktf.stringToTerraform(this._defaultValue),
      id: cdktf.stringToTerraform(this._id),
      index_type: cdktf.stringToTerraform(this._indexType),
      is_array: cdktf.booleanToTerraform(this._isArray),
      name: cdktf.stringToTerraform(this._name),
      search_indexed: cdktf.booleanToTerraform(this._searchIndexed),
      table: cdktf.stringToTerraform(this._table),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_policy: {
        value: cdktf.stringToHclTerraform(this._accessPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      constraints: {
        value: userstoreColumnConstraintsToHclTerraform(this._constraints.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UserstoreColumnConstraints",
      },
      data_type: {
        value: cdktf.stringToHclTerraform(this._dataType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_token_access_policy: {
        value: cdktf.stringToHclTerraform(this._defaultTokenAccessPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_transformer: {
        value: cdktf.stringToHclTerraform(this._defaultTransformer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_value: {
        value: cdktf.stringToHclTerraform(this._defaultValue),
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
      index_type: {
        value: cdktf.stringToHclTerraform(this._indexType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_array: {
        value: cdktf.booleanToHclTerraform(this._isArray),
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
      search_indexed: {
        value: cdktf.booleanToHclTerraform(this._searchIndexed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      table: {
        value: cdktf.stringToHclTerraform(this._table),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
