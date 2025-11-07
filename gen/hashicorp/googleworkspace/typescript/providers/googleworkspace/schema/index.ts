// https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Display name for the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#display_name Schema#display_name}
  */
  readonly displayName?: string;
  /**
  * The schema's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#schema_name Schema#schema_name}
  */
  readonly schemaName: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#fields Schema#fields}
  */
  readonly fields: SchemaFields[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#timeouts Schema#timeouts}
  */
  readonly timeouts?: SchemaTimeouts;
}
export interface SchemaFieldsNumericIndexingSpec {
  /**
  * Maximum value of this field. This is meant to be indicative rather than enforced. Values outside this range will still be indexed, but search may not be as performant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#max_value Schema#max_value}
  */
  readonly maxValue?: number;
  /**
  * Minimum value of this field. This is meant to be indicative rather than enforced. Values outside this range will still be indexed, but search may not be as performant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#min_value Schema#min_value}
  */
  readonly minValue?: number;
}

export function schemaFieldsNumericIndexingSpecToTerraform(struct?: SchemaFieldsNumericIndexingSpecOutputReference | SchemaFieldsNumericIndexingSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_value: cdktf.numberToTerraform(struct!.maxValue),
    min_value: cdktf.numberToTerraform(struct!.minValue),
  }
}


export function schemaFieldsNumericIndexingSpecToHclTerraform(struct?: SchemaFieldsNumericIndexingSpecOutputReference | SchemaFieldsNumericIndexingSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_value: {
      value: cdktf.numberToHclTerraform(struct!.maxValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_value: {
      value: cdktf.numberToHclTerraform(struct!.minValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaFieldsNumericIndexingSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SchemaFieldsNumericIndexingSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxValue = this._maxValue;
    }
    if (this._minValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minValue = this._minValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaFieldsNumericIndexingSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxValue = undefined;
      this._minValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxValue = value.maxValue;
      this._minValue = value.minValue;
    }
  }

  // max_value - computed: false, optional: true, required: false
  private _maxValue?: number; 
  public get maxValue() {
    return this.getNumberAttribute('max_value');
  }
  public set maxValue(value: number) {
    this._maxValue = value;
  }
  public resetMaxValue() {
    this._maxValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxValueInput() {
    return this._maxValue;
  }

  // min_value - computed: false, optional: true, required: false
  private _minValue?: number; 
  public get minValue() {
    return this.getNumberAttribute('min_value');
  }
  public set minValue(value: number) {
    this._minValue = value;
  }
  public resetMinValue() {
    this._minValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minValueInput() {
    return this._minValue;
  }
}
export interface SchemaFields {
  /**
  * Display Name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#display_name Schema#display_name}
  */
  readonly displayName?: string;
  /**
  * The name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#field_name Schema#field_name}
  */
  readonly fieldName: string;
  /**
  * The type of the field. Acceptable values are: 
  * 	- `BOOL`
  * 	- `DATE`
  * 	- `DOUBLE`
  * 	- `EMAIL`
  * 	- `INT64`
  * 	- `PHONE`
  * 	- `STRING`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#field_type Schema#field_type}
  */
  readonly fieldType: string;
  /**
  * Defaults to `true`. Boolean specifying whether the field is indexed or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#indexed Schema#indexed}
  */
  readonly indexed?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `false`. A boolean specifying whether this is a multi-valued field or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#multi_valued Schema#multi_valued}
  */
  readonly multiValued?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `ALL_DOMAIN_USERS`. Specifies who can view values of this field. See Retrieve users as a non-administrator for more information. Acceptable values are: 
  * 	- `ADMINS_AND_SELF`
  * 	- `ALL_DOMAIN_USERS`
  * 	Note: It may take up to 24 hours for changes to this field to be reflected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#read_access_type Schema#read_access_type}
  */
  readonly readAccessType?: string;
  /**
  * numeric_indexing_spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#numeric_indexing_spec Schema#numeric_indexing_spec}
  */
  readonly numericIndexingSpec?: SchemaFieldsNumericIndexingSpec;
}

export function schemaFieldsToTerraform(struct?: SchemaFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    field_type: cdktf.stringToTerraform(struct!.fieldType),
    indexed: cdktf.booleanToTerraform(struct!.indexed),
    multi_valued: cdktf.booleanToTerraform(struct!.multiValued),
    read_access_type: cdktf.stringToTerraform(struct!.readAccessType),
    numeric_indexing_spec: schemaFieldsNumericIndexingSpecToTerraform(struct!.numericIndexingSpec),
  }
}


export function schemaFieldsToHclTerraform(struct?: SchemaFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_type: {
      value: cdktf.stringToHclTerraform(struct!.fieldType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    indexed: {
      value: cdktf.booleanToHclTerraform(struct!.indexed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multi_valued: {
      value: cdktf.booleanToHclTerraform(struct!.multiValued),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_access_type: {
      value: cdktf.stringToHclTerraform(struct!.readAccessType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    numeric_indexing_spec: {
      value: schemaFieldsNumericIndexingSpecToHclTerraform(struct!.numericIndexingSpec),
      isBlock: true,
      type: "list",
      storageClassType: "SchemaFieldsNumericIndexingSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchemaFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._fieldType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldType = this._fieldType;
    }
    if (this._indexed !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexed = this._indexed;
    }
    if (this._multiValued !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValued = this._multiValued;
    }
    if (this._readAccessType !== undefined) {
      hasAnyValues = true;
      internalValueResult.readAccessType = this._readAccessType;
    }
    if (this._numericIndexingSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.numericIndexingSpec = this._numericIndexingSpec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._fieldName = undefined;
      this._fieldType = undefined;
      this._indexed = undefined;
      this._multiValued = undefined;
      this._readAccessType = undefined;
      this._numericIndexingSpec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._fieldName = value.fieldName;
      this._fieldType = value.fieldType;
      this._indexed = value.indexed;
      this._multiValued = value.multiValued;
      this._readAccessType = value.readAccessType;
      this._numericIndexingSpec.internalValue = value.numericIndexingSpec;
    }
  }

  // display_name - computed: true, optional: true, required: false
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // field_id - computed: true, optional: false, required: false
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // field_type - computed: false, optional: false, required: true
  private _fieldType?: string; 
  public get fieldType() {
    return this.getStringAttribute('field_type');
  }
  public set fieldType(value: string) {
    this._fieldType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldTypeInput() {
    return this._fieldType;
  }

  // indexed - computed: false, optional: true, required: false
  private _indexed?: boolean | cdktf.IResolvable; 
  public get indexed() {
    return this.getBooleanAttribute('indexed');
  }
  public set indexed(value: boolean | cdktf.IResolvable) {
    this._indexed = value;
  }
  public resetIndexed() {
    this._indexed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedInput() {
    return this._indexed;
  }

  // multi_valued - computed: false, optional: true, required: false
  private _multiValued?: boolean | cdktf.IResolvable; 
  public get multiValued() {
    return this.getBooleanAttribute('multi_valued');
  }
  public set multiValued(value: boolean | cdktf.IResolvable) {
    this._multiValued = value;
  }
  public resetMultiValued() {
    this._multiValued = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValuedInput() {
    return this._multiValued;
  }

  // read_access_type - computed: false, optional: true, required: false
  private _readAccessType?: string; 
  public get readAccessType() {
    return this.getStringAttribute('read_access_type');
  }
  public set readAccessType(value: string) {
    this._readAccessType = value;
  }
  public resetReadAccessType() {
    this._readAccessType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readAccessTypeInput() {
    return this._readAccessType;
  }

  // numeric_indexing_spec - computed: false, optional: true, required: false
  private _numericIndexingSpec = new SchemaFieldsNumericIndexingSpecOutputReference(this, "numeric_indexing_spec");
  public get numericIndexingSpec() {
    return this._numericIndexingSpec;
  }
  public putNumericIndexingSpec(value: SchemaFieldsNumericIndexingSpec) {
    this._numericIndexingSpec.internalValue = value;
  }
  public resetNumericIndexingSpec() {
    this._numericIndexingSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numericIndexingSpecInput() {
    return this._numericIndexingSpec.internalValue;
  }
}

export class SchemaFieldsList extends cdktf.ComplexList {
  public internalValue? : SchemaFields[] | cdktf.IResolvable

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
  public get(index: number): SchemaFieldsOutputReference {
    return new SchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SchemaTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#create Schema#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#delete Schema#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#update Schema#update}
  */
  readonly update?: string;
}

export function schemaTimeoutsToTerraform(struct?: SchemaTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function schemaTimeoutsToHclTerraform(struct?: SchemaTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SchemaTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SchemaTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema googleworkspace_schema}
*/
export class Schema extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "googleworkspace_schema";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Schema resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Schema to import
  * @param importFromId The id of the existing Schema that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Schema to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "googleworkspace_schema", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/googleworkspace/0.7.0/docs/resources/schema googleworkspace_schema} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'googleworkspace_schema',
      terraformGeneratorMetadata: {
        providerName: 'googleworkspace',
        providerVersion: '0.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._schemaName = config.schemaName;
    this._fields.internalValue = config.fields;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: true, required: false
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

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // schema_id - computed: true, optional: false, required: false
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }

  // schema_name - computed: false, optional: false, required: true
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // fields - computed: false, optional: false, required: true
  private _fields = new SchemaFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: SchemaFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SchemaTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SchemaTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      fields: cdktf.listMapper(schemaFieldsToTerraform, true)(this._fields.internalValue),
      timeouts: schemaTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_name: {
        value: cdktf.stringToHclTerraform(this._schemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fields: {
        value: cdktf.listMapperHcl(schemaFieldsToHclTerraform, true)(this._fields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SchemaFieldsList",
      },
      timeouts: {
        value: schemaTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SchemaTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
