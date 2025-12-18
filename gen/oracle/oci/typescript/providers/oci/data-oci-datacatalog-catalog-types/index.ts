// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_catalog_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatacatalogCatalogTypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_catalog_types#catalog_id DataOciDatacatalogCatalogTypes#catalog_id}
  */
  readonly catalogId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_catalog_types#external_type_name DataOciDatacatalogCatalogTypes#external_type_name}
  */
  readonly externalTypeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_catalog_types#fields DataOciDatacatalogCatalogTypes#fields}
  */
  readonly fields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_catalog_types#id DataOciDatacatalogCatalogTypes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_catalog_types#is_approved DataOciDatacatalogCatalogTypes#is_approved}
  */
  readonly isApproved?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_catalog_types#is_internal DataOciDatacatalogCatalogTypes#is_internal}
  */
  readonly isInternal?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_catalog_types#is_tag DataOciDatacatalogCatalogTypes#is_tag}
  */
  readonly isTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_catalog_types#name DataOciDatacatalogCatalogTypes#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_catalog_types#state DataOciDatacatalogCatalogTypes#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_catalog_types#type_category DataOciDatacatalogCatalogTypes#type_category}
  */
  readonly typeCategory?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_catalog_types#filter DataOciDatacatalogCatalogTypes#filter}
  */
  readonly filter?: DataOciDatacatalogCatalogTypesFilter[] | cdktf.IResolvable;
}
export interface DataOciDatacatalogCatalogTypesTypeCollectionItems {
}

export function dataOciDatacatalogCatalogTypesTypeCollectionItemsToTerraform(struct?: DataOciDatacatalogCatalogTypesTypeCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatacatalogCatalogTypesTypeCollectionItemsToHclTerraform(struct?: DataOciDatacatalogCatalogTypesTypeCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatacatalogCatalogTypesTypeCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatacatalogCatalogTypesTypeCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog_id - computed: true, optional: false, required: false
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type_category - computed: true, optional: false, required: false
  public get typeCategory() {
    return this.getStringAttribute('type_category');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataOciDatacatalogCatalogTypesTypeCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference {
    return new DataOciDatacatalogCatalogTypesTypeCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatacatalogCatalogTypesTypeCollection {
}

export function dataOciDatacatalogCatalogTypesTypeCollectionToTerraform(struct?: DataOciDatacatalogCatalogTypesTypeCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatacatalogCatalogTypesTypeCollectionToHclTerraform(struct?: DataOciDatacatalogCatalogTypesTypeCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatacatalogCatalogTypesTypeCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatacatalogCatalogTypesTypeCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatacatalogCatalogTypesTypeCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // count - computed: true, optional: false, required: false
  public get count() {
    return this.getNumberAttribute('count');
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciDatacatalogCatalogTypesTypeCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciDatacatalogCatalogTypesTypeCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatacatalogCatalogTypesTypeCollectionOutputReference {
    return new DataOciDatacatalogCatalogTypesTypeCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatacatalogCatalogTypesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_catalog_types#name DataOciDatacatalogCatalogTypes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_catalog_types#regex DataOciDatacatalogCatalogTypes#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_catalog_types#values DataOciDatacatalogCatalogTypes#values}
  */
  readonly values: string[];
}

export function dataOciDatacatalogCatalogTypesFilterToTerraform(struct?: DataOciDatacatalogCatalogTypesFilter | cdktf.IResolvable): any {
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


export function dataOciDatacatalogCatalogTypesFilterToHclTerraform(struct?: DataOciDatacatalogCatalogTypesFilter | cdktf.IResolvable): any {
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

export class DataOciDatacatalogCatalogTypesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatacatalogCatalogTypesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatacatalogCatalogTypesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatacatalogCatalogTypesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatacatalogCatalogTypesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatacatalogCatalogTypesFilterOutputReference {
    return new DataOciDatacatalogCatalogTypesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_catalog_types oci_datacatalog_catalog_types}
*/
export class DataOciDatacatalogCatalogTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_datacatalog_catalog_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatacatalogCatalogTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatacatalogCatalogTypes to import
  * @param importFromId The id of the existing DataOciDatacatalogCatalogTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_catalog_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatacatalogCatalogTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_datacatalog_catalog_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/datacatalog_catalog_types oci_datacatalog_catalog_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatacatalogCatalogTypesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatacatalogCatalogTypesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_datacatalog_catalog_types',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._catalogId = config.catalogId;
    this._externalTypeName = config.externalTypeName;
    this._fields = config.fields;
    this._id = config.id;
    this._isApproved = config.isApproved;
    this._isInternal = config.isInternal;
    this._isTag = config.isTag;
    this._name = config.name;
    this._state = config.state;
    this._typeCategory = config.typeCategory;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // catalog_id - computed: false, optional: false, required: true
  private _catalogId?: string; 
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }
  public set catalogId(value: string) {
    this._catalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogIdInput() {
    return this._catalogId;
  }

  // external_type_name - computed: false, optional: true, required: false
  private _externalTypeName?: string; 
  public get externalTypeName() {
    return this.getStringAttribute('external_type_name');
  }
  public set externalTypeName(value: string) {
    this._externalTypeName = value;
  }
  public resetExternalTypeName() {
    this._externalTypeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTypeNameInput() {
    return this._externalTypeName;
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return cdktf.Fn.tolist(this.getListAttribute('fields'));
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
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

  // is_approved - computed: false, optional: true, required: false
  private _isApproved?: string; 
  public get isApproved() {
    return this.getStringAttribute('is_approved');
  }
  public set isApproved(value: string) {
    this._isApproved = value;
  }
  public resetIsApproved() {
    this._isApproved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isApprovedInput() {
    return this._isApproved;
  }

  // is_internal - computed: false, optional: true, required: false
  private _isInternal?: string; 
  public get isInternal() {
    return this.getStringAttribute('is_internal');
  }
  public set isInternal(value: string) {
    this._isInternal = value;
  }
  public resetIsInternal() {
    this._isInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInternalInput() {
    return this._isInternal;
  }

  // is_tag - computed: false, optional: true, required: false
  private _isTag?: string; 
  public get isTag() {
    return this.getStringAttribute('is_tag');
  }
  public set isTag(value: string) {
    this._isTag = value;
  }
  public resetIsTag() {
    this._isTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTagInput() {
    return this._isTag;
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // type_category - computed: false, optional: true, required: false
  private _typeCategory?: string; 
  public get typeCategory() {
    return this.getStringAttribute('type_category');
  }
  public set typeCategory(value: string) {
    this._typeCategory = value;
  }
  public resetTypeCategory() {
    this._typeCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeCategoryInput() {
    return this._typeCategory;
  }

  // type_collection - computed: true, optional: false, required: false
  private _typeCollection = new DataOciDatacatalogCatalogTypesTypeCollectionList(this, "type_collection", false);
  public get typeCollection() {
    return this._typeCollection;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatacatalogCatalogTypesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatacatalogCatalogTypesFilter[] | cdktf.IResolvable) {
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
      catalog_id: cdktf.stringToTerraform(this._catalogId),
      external_type_name: cdktf.stringToTerraform(this._externalTypeName),
      fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fields),
      id: cdktf.stringToTerraform(this._id),
      is_approved: cdktf.stringToTerraform(this._isApproved),
      is_internal: cdktf.stringToTerraform(this._isInternal),
      is_tag: cdktf.stringToTerraform(this._isTag),
      name: cdktf.stringToTerraform(this._name),
      state: cdktf.stringToTerraform(this._state),
      type_category: cdktf.stringToTerraform(this._typeCategory),
      filter: cdktf.listMapper(dataOciDatacatalogCatalogTypesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      catalog_id: {
        value: cdktf.stringToHclTerraform(this._catalogId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_type_name: {
        value: cdktf.stringToHclTerraform(this._externalTypeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fields),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_approved: {
        value: cdktf.stringToHclTerraform(this._isApproved),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_internal: {
        value: cdktf.stringToHclTerraform(this._isInternal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_tag: {
        value: cdktf.stringToHclTerraform(this._isTag),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type_category: {
        value: cdktf.stringToHclTerraform(this._typeCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatacatalogCatalogTypesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatacatalogCatalogTypesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
