// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#date_expected_capacity_handover DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#date_expected_capacity_handover}
  */
  readonly dateExpectedCapacityHandover?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#id DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#occ_availability_catalog_id DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#occ_availability_catalog_id}
  */
  readonly occAvailabilityCatalogId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#resource_name DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#resource_name}
  */
  readonly resourceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#resource_type DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#resource_type}
  */
  readonly resourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#workload_type DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#workload_type}
  */
  readonly workloadType?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#filter DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#filter}
  */
  readonly filter?: DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter[] | cdktf.IResolvable;
}
export interface DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems {
}

export function dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsToTerraform(struct?: DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsToHclTerraform(struct?: DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_quantity - computed: true, optional: false, required: false
  public get availableQuantity() {
    return this.getStringAttribute('available_quantity');
  }

  // catalog_id - computed: true, optional: false, required: false
  public get catalogId() {
    return this.getStringAttribute('catalog_id');
  }

  // date_expected_capacity_handover - computed: true, optional: false, required: false
  public get dateExpectedCapacityHandover() {
    return this.getStringAttribute('date_expected_capacity_handover');
  }

  // date_final_customer_order - computed: true, optional: false, required: false
  public get dateFinalCustomerOrder() {
    return this.getStringAttribute('date_final_customer_order');
  }

  // demanded_quantity - computed: true, optional: false, required: false
  public get demandedQuantity() {
    return this.getStringAttribute('demanded_quantity');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // total_available_quantity - computed: true, optional: false, required: false
  public get totalAvailableQuantity() {
    return this.getStringAttribute('total_available_quantity');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }

  // workload_type - computed: true, optional: false, required: false
  public get workloadType() {
    return this.getStringAttribute('workload_type');
  }
}

export class DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference {
    return new DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection {
}

export function dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionToTerraform(struct?: DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionToHclTerraform(struct?: DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference {
    return new DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#name DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#regex DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#values DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#values}
  */
  readonly values: string[];
}

export function dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterToTerraform(struct?: DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter | cdktf.IResolvable): any {
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


export function dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterToHclTerraform(struct?: DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter | cdktf.IResolvable): any {
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

export class DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference {
    return new DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities oci_capacity_management_occ_availability_catalog_occ_availabilities}
*/
export class DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_capacity_management_occ_availability_catalog_occ_availabilities";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities to import
  * @param importFromId The id of the existing DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_capacity_management_occ_availability_catalog_occ_availabilities", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities oci_capacity_management_occ_availability_catalog_occ_availabilities} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_capacity_management_occ_availability_catalog_occ_availabilities',
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
    this._dateExpectedCapacityHandover = config.dateExpectedCapacityHandover;
    this._id = config.id;
    this._occAvailabilityCatalogId = config.occAvailabilityCatalogId;
    this._resourceName = config.resourceName;
    this._resourceType = config.resourceType;
    this._workloadType = config.workloadType;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // date_expected_capacity_handover - computed: false, optional: true, required: false
  private _dateExpectedCapacityHandover?: string; 
  public get dateExpectedCapacityHandover() {
    return this.getStringAttribute('date_expected_capacity_handover');
  }
  public set dateExpectedCapacityHandover(value: string) {
    this._dateExpectedCapacityHandover = value;
  }
  public resetDateExpectedCapacityHandover() {
    this._dateExpectedCapacityHandover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateExpectedCapacityHandoverInput() {
    return this._dateExpectedCapacityHandover;
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

  // occ_availability_catalog_id - computed: false, optional: false, required: true
  private _occAvailabilityCatalogId?: string; 
  public get occAvailabilityCatalogId() {
    return this.getStringAttribute('occ_availability_catalog_id');
  }
  public set occAvailabilityCatalogId(value: string) {
    this._occAvailabilityCatalogId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get occAvailabilityCatalogIdInput() {
    return this._occAvailabilityCatalogId;
  }

  // occ_availability_collection - computed: true, optional: false, required: false
  private _occAvailabilityCollection = new DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList(this, "occ_availability_collection", false);
  public get occAvailabilityCollection() {
    return this._occAvailabilityCollection;
  }

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // workload_type - computed: false, optional: true, required: false
  private _workloadType?: string; 
  public get workloadType() {
    return this.getStringAttribute('workload_type');
  }
  public set workloadType(value: string) {
    this._workloadType = value;
  }
  public resetWorkloadType() {
    this._workloadType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadTypeInput() {
    return this._workloadType;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter[] | cdktf.IResolvable) {
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
      date_expected_capacity_handover: cdktf.stringToTerraform(this._dateExpectedCapacityHandover),
      id: cdktf.stringToTerraform(this._id),
      occ_availability_catalog_id: cdktf.stringToTerraform(this._occAvailabilityCatalogId),
      resource_name: cdktf.stringToTerraform(this._resourceName),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      workload_type: cdktf.stringToTerraform(this._workloadType),
      filter: cdktf.listMapper(dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      date_expected_capacity_handover: {
        value: cdktf.stringToHclTerraform(this._dateExpectedCapacityHandover),
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
      occ_availability_catalog_id: {
        value: cdktf.stringToHclTerraform(this._occAvailabilityCatalogId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_name: {
        value: cdktf.stringToHclTerraform(this._resourceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_type: {
        value: cdktf.stringToHclTerraform(this._workloadType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
