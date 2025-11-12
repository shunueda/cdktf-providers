// https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/collection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/collection#collection_name Collection#collection_name}
  */
  readonly collectionName: string;
  /**
  * The connection address of the target Zilliz Cloud cluster.
  * You can obtain this value from the output of the `zillizcloud_cluster` resource, for example:
  * `zillizcloud_cluster.example.connect_address`
  * 
  * **Example:**
  * `https://in01-295cd02566647b7.aws-us-east-2.vectordb.zillizcloud.com:19534`
  * 
  * > **Note:** The address must include the protocol (e.g., `https://`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/collection#connect_address Collection#connect_address}
  */
  readonly connectAddress: string;
  /**
  * The name of the database containing the collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/collection#db_name Collection#db_name}
  */
  readonly dbName: string;
  /**
  * A JSON-formatted map of advanced params.
  * 
  * **Example:**
  * 
  * ```
  * params = {
  * 	"mmap_enabled"      = true
  * 	"ttl_seconds"       = 86400
  * 	"consistency_level" = "Bounded"
  * }
  * ```
  * 
  * > Supports string, integer, and boolean values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/collection#params Collection#params}
  */
  readonly params?: CollectionParams;
  /**
  * Defines the schema for the collection. Changing this block will force resource replacement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/collection#schema Collection#schema}
  */
  readonly schema: CollectionSchema;
}
export interface CollectionParams {
  /**
  * The consistency level for the collection. Possible values are (Bounded|Strong|Session|Eventually). Defaults to "Bounded".
  * Reference: https://github.com/milvus-io/milvus-proto/blob/2.5/go-api/commonpb/common.pb.go#L1001
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/collection#consistency_level Collection#consistency_level}
  */
  readonly consistencyLevel?: string;
  /**
  * Whether to enable memory-mapped files for the collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/collection#mmap_enabled Collection#mmap_enabled}
  */
  readonly mmapEnabled?: boolean | cdktf.IResolvable;
  /**
  * Time-to-live (TTL) in seconds for the collection. After this period, the collection will be automatically deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/collection#ttl_seconds Collection#ttl_seconds}
  */
  readonly ttlSeconds?: number;
}

export function collectionParamsToTerraform(struct?: CollectionParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consistency_level: cdktf.stringToTerraform(struct!.consistencyLevel),
    mmap_enabled: cdktf.booleanToTerraform(struct!.mmapEnabled),
    ttl_seconds: cdktf.numberToTerraform(struct!.ttlSeconds),
  }
}


export function collectionParamsToHclTerraform(struct?: CollectionParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consistency_level: {
      value: cdktf.stringToHclTerraform(struct!.consistencyLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mmap_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.mmapEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ttl_seconds: {
      value: cdktf.numberToHclTerraform(struct!.ttlSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectionParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectionParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consistencyLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.consistencyLevel = this._consistencyLevel;
    }
    if (this._mmapEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.mmapEnabled = this._mmapEnabled;
    }
    if (this._ttlSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlSeconds = this._ttlSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectionParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consistencyLevel = undefined;
      this._mmapEnabled = undefined;
      this._ttlSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consistencyLevel = value.consistencyLevel;
      this._mmapEnabled = value.mmapEnabled;
      this._ttlSeconds = value.ttlSeconds;
    }
  }

  // consistency_level - computed: true, optional: true, required: false
  private _consistencyLevel?: string; 
  public get consistencyLevel() {
    return this.getStringAttribute('consistency_level');
  }
  public set consistencyLevel(value: string) {
    this._consistencyLevel = value;
  }
  public resetConsistencyLevel() {
    this._consistencyLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consistencyLevelInput() {
    return this._consistencyLevel;
  }

  // mmap_enabled - computed: false, optional: true, required: false
  private _mmapEnabled?: boolean | cdktf.IResolvable; 
  public get mmapEnabled() {
    return this.getBooleanAttribute('mmap_enabled');
  }
  public set mmapEnabled(value: boolean | cdktf.IResolvable) {
    this._mmapEnabled = value;
  }
  public resetMmapEnabled() {
    this._mmapEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mmapEnabledInput() {
    return this._mmapEnabled;
  }

  // ttl_seconds - computed: false, optional: true, required: false
  private _ttlSeconds?: number; 
  public get ttlSeconds() {
    return this.getNumberAttribute('ttl_seconds');
  }
  public set ttlSeconds(value: number) {
    this._ttlSeconds = value;
  }
  public resetTtlSeconds() {
    this._ttlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlSecondsInput() {
    return this._ttlSeconds;
  }
}
export interface CollectionSchemaFields {
  /**
  * The data type of the field (e.g., "INT64", "FLOAT", "STRING", etc.).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/collection#data_type Collection#data_type}
  */
  readonly dataType: string;
  /**
  * Additional parameters for element type, if applicable (e.g., for array fields).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/collection#element_type_params Collection#element_type_params}
  */
  readonly elementTypeParams?: { [key: string]: string };
  /**
  * The name of the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/collection#field_name Collection#field_name}
  */
  readonly fieldName: string;
  /**
  * Whether this field is the primary key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/collection#is_primary Collection#is_primary}
  */
  readonly isPrimary?: boolean | cdktf.IResolvable;
}

export function collectionSchemaFieldsToTerraform(struct?: CollectionSchemaFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_type: cdktf.stringToTerraform(struct!.dataType),
    element_type_params: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.elementTypeParams),
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    is_primary: cdktf.booleanToTerraform(struct!.isPrimary),
  }
}


export function collectionSchemaFieldsToHclTerraform(struct?: CollectionSchemaFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_type: {
      value: cdktf.stringToHclTerraform(struct!.dataType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    element_type_params: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.elementTypeParams),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_primary: {
      value: cdktf.booleanToHclTerraform(struct!.isPrimary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectionSchemaFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectionSchemaFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._elementTypeParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.elementTypeParams = this._elementTypeParams;
    }
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._isPrimary !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrimary = this._isPrimary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectionSchemaFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataType = undefined;
      this._elementTypeParams = undefined;
      this._fieldName = undefined;
      this._isPrimary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataType = value.dataType;
      this._elementTypeParams = value.elementTypeParams;
      this._fieldName = value.fieldName;
      this._isPrimary = value.isPrimary;
    }
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

  // element_type_params - computed: true, optional: true, required: false
  private _elementTypeParams?: { [key: string]: string }; 
  public get elementTypeParams() {
    return this.getStringMapAttribute('element_type_params');
  }
  public set elementTypeParams(value: { [key: string]: string }) {
    this._elementTypeParams = value;
  }
  public resetElementTypeParams() {
    this._elementTypeParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementTypeParamsInput() {
    return this._elementTypeParams;
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

  // is_primary - computed: true, optional: true, required: false
  private _isPrimary?: boolean | cdktf.IResolvable; 
  public get isPrimary() {
    return this.getBooleanAttribute('is_primary');
  }
  public set isPrimary(value: boolean | cdktf.IResolvable) {
    this._isPrimary = value;
  }
  public resetIsPrimary() {
    this._isPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrimaryInput() {
    return this._isPrimary;
  }
}

export class CollectionSchemaFieldsList extends cdktf.ComplexList {
  public internalValue? : CollectionSchemaFields[] | cdktf.IResolvable

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
  public get(index: number): CollectionSchemaFieldsOutputReference {
    return new CollectionSchemaFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectionSchema {
  /**
  * Whether to enable automatic ID generation for the collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/collection#auto_id Collection#auto_id}
  */
  readonly autoId?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable dynamic fields for the collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/collection#enabled_dynamic_field Collection#enabled_dynamic_field}
  */
  readonly enabledDynamicField?: boolean | cdktf.IResolvable;
  /**
  * List of field definitions for the collection schema. Each field describes a column in the collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/collection#fields Collection#fields}
  */
  readonly fields: CollectionSchemaFields[] | cdktf.IResolvable;
}

export function collectionSchemaToTerraform(struct?: CollectionSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_id: cdktf.booleanToTerraform(struct!.autoId),
    enabled_dynamic_field: cdktf.booleanToTerraform(struct!.enabledDynamicField),
    fields: cdktf.listMapper(collectionSchemaFieldsToTerraform, false)(struct!.fields),
  }
}


export function collectionSchemaToHclTerraform(struct?: CollectionSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_id: {
      value: cdktf.booleanToHclTerraform(struct!.autoId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled_dynamic_field: {
      value: cdktf.booleanToHclTerraform(struct!.enabledDynamicField),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fields: {
      value: cdktf.listMapperHcl(collectionSchemaFieldsToHclTerraform, false)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "CollectionSchemaFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectionSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CollectionSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoId !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoId = this._autoId;
    }
    if (this._enabledDynamicField !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledDynamicField = this._enabledDynamicField;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectionSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoId = undefined;
      this._enabledDynamicField = undefined;
      this._fields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoId = value.autoId;
      this._enabledDynamicField = value.enabledDynamicField;
      this._fields.internalValue = value.fields;
    }
  }

  // auto_id - computed: true, optional: true, required: false
  private _autoId?: boolean | cdktf.IResolvable; 
  public get autoId() {
    return this.getBooleanAttribute('auto_id');
  }
  public set autoId(value: boolean | cdktf.IResolvable) {
    this._autoId = value;
  }
  public resetAutoId() {
    this._autoId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoIdInput() {
    return this._autoId;
  }

  // enabled_dynamic_field - computed: true, optional: true, required: false
  private _enabledDynamicField?: boolean | cdktf.IResolvable; 
  public get enabledDynamicField() {
    return this.getBooleanAttribute('enabled_dynamic_field');
  }
  public set enabledDynamicField(value: boolean | cdktf.IResolvable) {
    this._enabledDynamicField = value;
  }
  public resetEnabledDynamicField() {
    this._enabledDynamicField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledDynamicFieldInput() {
    return this._enabledDynamicField;
  }

  // fields - computed: false, optional: false, required: true
  private _fields = new CollectionSchemaFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: CollectionSchemaFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/collection zillizcloud_collection}
*/
export class Collection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zillizcloud_collection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Collection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Collection to import
  * @param importFromId The id of the existing Collection that should be imported. Refer to the {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/collection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Collection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zillizcloud_collection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zilliztech/zillizcloud/0.6.23/docs/resources/collection zillizcloud_collection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CollectionConfig
  */
  public constructor(scope: Construct, id: string, config: CollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'zillizcloud_collection',
      terraformGeneratorMetadata: {
        providerName: 'zillizcloud',
        providerVersion: '0.6.23',
        providerVersionConstraint: '0.6.23'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._collectionName = config.collectionName;
    this._connectAddress = config.connectAddress;
    this._dbName = config.dbName;
    this._params.internalValue = config.params;
    this._schema.internalValue = config.schema;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collection_name - computed: false, optional: false, required: true
  private _collectionName?: string; 
  public get collectionName() {
    return this.getStringAttribute('collection_name');
  }
  public set collectionName(value: string) {
    this._collectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionNameInput() {
    return this._collectionName;
  }

  // connect_address - computed: false, optional: false, required: true
  private _connectAddress?: string; 
  public get connectAddress() {
    return this.getStringAttribute('connect_address');
  }
  public set connectAddress(value: string) {
    this._connectAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectAddressInput() {
    return this._connectAddress;
  }

  // db_name - computed: false, optional: false, required: true
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // params - computed: false, optional: true, required: false
  private _params = new CollectionParamsOutputReference(this, "params");
  public get params() {
    return this._params;
  }
  public putParams(value: CollectionParams) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }

  // schema - computed: false, optional: false, required: true
  private _schema = new CollectionSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: CollectionSchema) {
    this._schema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collection_name: cdktf.stringToTerraform(this._collectionName),
      connect_address: cdktf.stringToTerraform(this._connectAddress),
      db_name: cdktf.stringToTerraform(this._dbName),
      params: collectionParamsToTerraform(this._params.internalValue),
      schema: collectionSchemaToTerraform(this._schema.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collection_name: {
        value: cdktf.stringToHclTerraform(this._collectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connect_address: {
        value: cdktf.stringToHclTerraform(this._connectAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_name: {
        value: cdktf.stringToHclTerraform(this._dbName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      params: {
        value: collectionParamsToHclTerraform(this._params.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CollectionParams",
      },
      schema: {
        value: collectionSchemaToHclTerraform(this._schema.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CollectionSchema",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
