// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/service_catalog_service_catalog_associations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciServiceCatalogServiceCatalogAssociationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/service_catalog_service_catalog_associations#entity_id DataOciServiceCatalogServiceCatalogAssociations#entity_id}
  */
  readonly entityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/service_catalog_service_catalog_associations#entity_type DataOciServiceCatalogServiceCatalogAssociations#entity_type}
  */
  readonly entityType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/service_catalog_service_catalog_associations#id DataOciServiceCatalogServiceCatalogAssociations#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/service_catalog_service_catalog_associations#service_catalog_association_id DataOciServiceCatalogServiceCatalogAssociations#service_catalog_association_id}
  */
  readonly serviceCatalogAssociationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/service_catalog_service_catalog_associations#service_catalog_id DataOciServiceCatalogServiceCatalogAssociations#service_catalog_id}
  */
  readonly serviceCatalogId?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/service_catalog_service_catalog_associations#filter DataOciServiceCatalogServiceCatalogAssociations#filter}
  */
  readonly filter?: DataOciServiceCatalogServiceCatalogAssociationsFilter[] | cdktf.IResolvable;
}
export interface DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems {
}

export function dataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsToTerraform(struct?: DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsToHclTerraform(struct?: DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_catalog_id - computed: true, optional: false, required: false
  public get serviceCatalogId() {
    return this.getStringAttribute('service_catalog_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }
}

export class DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference {
    return new DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection {
}

export function dataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionToTerraform(struct?: DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionToHclTerraform(struct?: DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference {
    return new DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciServiceCatalogServiceCatalogAssociationsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/service_catalog_service_catalog_associations#name DataOciServiceCatalogServiceCatalogAssociations#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/service_catalog_service_catalog_associations#regex DataOciServiceCatalogServiceCatalogAssociations#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/service_catalog_service_catalog_associations#values DataOciServiceCatalogServiceCatalogAssociations#values}
  */
  readonly values: string[];
}

export function dataOciServiceCatalogServiceCatalogAssociationsFilterToTerraform(struct?: DataOciServiceCatalogServiceCatalogAssociationsFilter | cdktf.IResolvable): any {
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


export function dataOciServiceCatalogServiceCatalogAssociationsFilterToHclTerraform(struct?: DataOciServiceCatalogServiceCatalogAssociationsFilter | cdktf.IResolvable): any {
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

export class DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciServiceCatalogServiceCatalogAssociationsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciServiceCatalogServiceCatalogAssociationsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciServiceCatalogServiceCatalogAssociationsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciServiceCatalogServiceCatalogAssociationsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference {
    return new DataOciServiceCatalogServiceCatalogAssociationsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/service_catalog_service_catalog_associations oci_service_catalog_service_catalog_associations}
*/
export class DataOciServiceCatalogServiceCatalogAssociations extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_service_catalog_service_catalog_associations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciServiceCatalogServiceCatalogAssociations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciServiceCatalogServiceCatalogAssociations to import
  * @param importFromId The id of the existing DataOciServiceCatalogServiceCatalogAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/service_catalog_service_catalog_associations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciServiceCatalogServiceCatalogAssociations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_service_catalog_service_catalog_associations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/service_catalog_service_catalog_associations oci_service_catalog_service_catalog_associations} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciServiceCatalogServiceCatalogAssociationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciServiceCatalogServiceCatalogAssociationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_service_catalog_service_catalog_associations',
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
    this._entityId = config.entityId;
    this._entityType = config.entityType;
    this._id = config.id;
    this._serviceCatalogAssociationId = config.serviceCatalogAssociationId;
    this._serviceCatalogId = config.serviceCatalogId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // entity_id - computed: false, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // entity_type - computed: false, optional: true, required: false
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  public resetEntityType() {
    this._entityType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
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

  // service_catalog_association_collection - computed: true, optional: false, required: false
  private _serviceCatalogAssociationCollection = new DataOciServiceCatalogServiceCatalogAssociationsServiceCatalogAssociationCollectionList(this, "service_catalog_association_collection", false);
  public get serviceCatalogAssociationCollection() {
    return this._serviceCatalogAssociationCollection;
  }

  // service_catalog_association_id - computed: false, optional: true, required: false
  private _serviceCatalogAssociationId?: string; 
  public get serviceCatalogAssociationId() {
    return this.getStringAttribute('service_catalog_association_id');
  }
  public set serviceCatalogAssociationId(value: string) {
    this._serviceCatalogAssociationId = value;
  }
  public resetServiceCatalogAssociationId() {
    this._serviceCatalogAssociationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCatalogAssociationIdInput() {
    return this._serviceCatalogAssociationId;
  }

  // service_catalog_id - computed: false, optional: true, required: false
  private _serviceCatalogId?: string; 
  public get serviceCatalogId() {
    return this.getStringAttribute('service_catalog_id');
  }
  public set serviceCatalogId(value: string) {
    this._serviceCatalogId = value;
  }
  public resetServiceCatalogId() {
    this._serviceCatalogId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceCatalogIdInput() {
    return this._serviceCatalogId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciServiceCatalogServiceCatalogAssociationsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciServiceCatalogServiceCatalogAssociationsFilter[] | cdktf.IResolvable) {
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
      entity_id: cdktf.stringToTerraform(this._entityId),
      entity_type: cdktf.stringToTerraform(this._entityType),
      id: cdktf.stringToTerraform(this._id),
      service_catalog_association_id: cdktf.stringToTerraform(this._serviceCatalogAssociationId),
      service_catalog_id: cdktf.stringToTerraform(this._serviceCatalogId),
      filter: cdktf.listMapper(dataOciServiceCatalogServiceCatalogAssociationsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_type: {
        value: cdktf.stringToHclTerraform(this._entityType),
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
      service_catalog_association_id: {
        value: cdktf.stringToHclTerraform(this._serviceCatalogAssociationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_catalog_id: {
        value: cdktf.stringToHclTerraform(this._serviceCatalogId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciServiceCatalogServiceCatalogAssociationsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciServiceCatalogServiceCatalogAssociationsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
