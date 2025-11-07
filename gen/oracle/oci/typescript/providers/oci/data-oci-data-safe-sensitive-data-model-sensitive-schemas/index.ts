// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#id DataOciDataSafeSensitiveDataModelSensitiveSchemas#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#schema_name DataOciDataSafeSensitiveDataModelSensitiveSchemas#schema_name}
  */
  readonly schemaName?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#sensitive_data_model_id DataOciDataSafeSensitiveDataModelSensitiveSchemas#sensitive_data_model_id}
  */
  readonly sensitiveDataModelId: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#filter DataOciDataSafeSensitiveDataModelSensitiveSchemas#filter}
  */
  readonly filter?: DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter[] | cdktf.IResolvable;
}
export interface DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems {
}

export function dataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsToTerraform(struct?: DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsToHclTerraform(struct?: DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
}

export class DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference {
    return new DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection {
}

export function dataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionToTerraform(struct?: DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionToHclTerraform(struct?: DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference {
    return new DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#name DataOciDataSafeSensitiveDataModelSensitiveSchemas#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#regex DataOciDataSafeSensitiveDataModelSensitiveSchemas#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#values DataOciDataSafeSensitiveDataModelSensitiveSchemas#values}
  */
  readonly values: string[];
}

export function dataOciDataSafeSensitiveDataModelSensitiveSchemasFilterToTerraform(struct?: DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciDataSafeSensitiveDataModelSensitiveSchemasFilterToHclTerraform(struct?: DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference {
    return new DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas oci_data_safe_sensitive_data_model_sensitive_schemas}
*/
export class DataOciDataSafeSensitiveDataModelSensitiveSchemas extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_data_safe_sensitive_data_model_sensitive_schemas";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelSensitiveSchemas resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDataSafeSensitiveDataModelSensitiveSchemas to import
  * @param importFromId The id of the existing DataOciDataSafeSensitiveDataModelSensitiveSchemas that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDataSafeSensitiveDataModelSensitiveSchemas to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_data_safe_sensitive_data_model_sensitive_schemas", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas oci_data_safe_sensitive_data_model_sensitive_schemas} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_data_safe_sensitive_data_model_sensitive_schemas',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
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
    this._schemaName = config.schemaName;
    this._sensitiveDataModelId = config.sensitiveDataModelId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string[]; 
  public get schemaName() {
    return this.getListAttribute('schema_name');
  }
  public set schemaName(value: string[]) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // sensitive_data_model_id - computed: false, optional: false, required: true
  private _sensitiveDataModelId?: string; 
  public get sensitiveDataModelId() {
    return this.getStringAttribute('sensitive_data_model_id');
  }
  public set sensitiveDataModelId(value: string) {
    this._sensitiveDataModelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitiveDataModelIdInput() {
    return this._sensitiveDataModelId;
  }

  // sensitive_schema_collection - computed: true, optional: false, required: false
  private _sensitiveSchemaCollection = new DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList(this, "sensitive_schema_collection", false);
  public get sensitiveSchemaCollection() {
    return this._sensitiveSchemaCollection;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      schema_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemaName),
      sensitive_data_model_id: cdktf.stringToTerraform(this._sensitiveDataModelId),
      filter: cdktf.listMapper(dataOciDataSafeSensitiveDataModelSensitiveSchemasFilterToTerraform, true)(this._filter.internalValue),
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
      schema_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schemaName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sensitive_data_model_id: {
        value: cdktf.stringToHclTerraform(this._sensitiveDataModelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDataSafeSensitiveDataModelSensitiveSchemasFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
