// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_migration_plan_available_shapes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCloudMigrationsMigrationPlanAvailableShapesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_migration_plan_available_shapes#availability_domain DataOciCloudMigrationsMigrationPlanAvailableShapes#availability_domain}
  */
  readonly availabilityDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_migration_plan_available_shapes#compartment_id DataOciCloudMigrationsMigrationPlanAvailableShapes#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_migration_plan_available_shapes#dvh_host_id DataOciCloudMigrationsMigrationPlanAvailableShapes#dvh_host_id}
  */
  readonly dvhHostId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_migration_plan_available_shapes#id DataOciCloudMigrationsMigrationPlanAvailableShapes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_migration_plan_available_shapes#migration_plan_id DataOciCloudMigrationsMigrationPlanAvailableShapes#migration_plan_id}
  */
  readonly migrationPlanId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_migration_plan_available_shapes#reserved_capacity_id DataOciCloudMigrationsMigrationPlanAvailableShapes#reserved_capacity_id}
  */
  readonly reservedCapacityId?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_migration_plan_available_shapes#filter DataOciCloudMigrationsMigrationPlanAvailableShapes#filter}
  */
  readonly filter?: DataOciCloudMigrationsMigrationPlanAvailableShapesFilter[] | cdktf.IResolvable;
}
export interface DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems {
}

export function dataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsToTerraform(struct?: DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsToHclTerraform(struct?: DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // gpu_description - computed: true, optional: false, required: false
  public get gpuDescription() {
    return this.getStringAttribute('gpu_description');
  }

  // gpus - computed: true, optional: false, required: false
  public get gpus() {
    return this.getNumberAttribute('gpus');
  }

  // local_disk_description - computed: true, optional: false, required: false
  public get localDiskDescription() {
    return this.getStringAttribute('local_disk_description');
  }

  // local_disks - computed: true, optional: false, required: false
  public get localDisks() {
    return this.getNumberAttribute('local_disks');
  }

  // local_disks_total_size_in_gbs - computed: true, optional: false, required: false
  public get localDisksTotalSizeInGbs() {
    return this.getNumberAttribute('local_disks_total_size_in_gbs');
  }

  // max_vnic_attachments - computed: true, optional: false, required: false
  public get maxVnicAttachments() {
    return this.getNumberAttribute('max_vnic_attachments');
  }

  // memory_in_gbs - computed: true, optional: false, required: false
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }

  // min_total_baseline_ocpus_required - computed: true, optional: false, required: false
  public get minTotalBaselineOcpusRequired() {
    return this.getNumberAttribute('min_total_baseline_ocpus_required');
  }

  // networking_bandwidth_in_gbps - computed: true, optional: false, required: false
  public get networkingBandwidthInGbps() {
    return this.getNumberAttribute('networking_bandwidth_in_gbps');
  }

  // ocpus - computed: true, optional: false, required: false
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }

  // pagination_token - computed: true, optional: false, required: false
  public get paginationToken() {
    return this.getStringAttribute('pagination_token');
  }

  // processor_description - computed: true, optional: false, required: false
  public get processorDescription() {
    return this.getStringAttribute('processor_description');
  }

  // shape - computed: true, optional: false, required: false
  public get shape() {
    return this.getStringAttribute('shape');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }
}

export class DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference {
    return new DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection {
}

export function dataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionToTerraform(struct?: DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionToHclTerraform(struct?: DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference {
    return new DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudMigrationsMigrationPlanAvailableShapesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_migration_plan_available_shapes#name DataOciCloudMigrationsMigrationPlanAvailableShapes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_migration_plan_available_shapes#regex DataOciCloudMigrationsMigrationPlanAvailableShapes#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_migration_plan_available_shapes#values DataOciCloudMigrationsMigrationPlanAvailableShapes#values}
  */
  readonly values: string[];
}

export function dataOciCloudMigrationsMigrationPlanAvailableShapesFilterToTerraform(struct?: DataOciCloudMigrationsMigrationPlanAvailableShapesFilter | cdktf.IResolvable): any {
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


export function dataOciCloudMigrationsMigrationPlanAvailableShapesFilterToHclTerraform(struct?: DataOciCloudMigrationsMigrationPlanAvailableShapesFilter | cdktf.IResolvable): any {
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

export class DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudMigrationsMigrationPlanAvailableShapesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciCloudMigrationsMigrationPlanAvailableShapesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciCloudMigrationsMigrationPlanAvailableShapesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference {
    return new DataOciCloudMigrationsMigrationPlanAvailableShapesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_migration_plan_available_shapes oci_cloud_migrations_migration_plan_available_shapes}
*/
export class DataOciCloudMigrationsMigrationPlanAvailableShapes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_cloud_migrations_migration_plan_available_shapes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCloudMigrationsMigrationPlanAvailableShapes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCloudMigrationsMigrationPlanAvailableShapes to import
  * @param importFromId The id of the existing DataOciCloudMigrationsMigrationPlanAvailableShapes that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_migration_plan_available_shapes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCloudMigrationsMigrationPlanAvailableShapes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_cloud_migrations_migration_plan_available_shapes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/cloud_migrations_migration_plan_available_shapes oci_cloud_migrations_migration_plan_available_shapes} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCloudMigrationsMigrationPlanAvailableShapesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCloudMigrationsMigrationPlanAvailableShapesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_cloud_migrations_migration_plan_available_shapes',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._dvhHostId = config.dvhHostId;
    this._id = config.id;
    this._migrationPlanId = config.migrationPlanId;
    this._reservedCapacityId = config.reservedCapacityId;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // availability_domain - computed: false, optional: true, required: false
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  public resetAvailabilityDomain() {
    this._availabilityDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // available_shapes_collection - computed: true, optional: false, required: false
  private _availableShapesCollection = new DataOciCloudMigrationsMigrationPlanAvailableShapesAvailableShapesCollectionList(this, "available_shapes_collection", false);
  public get availableShapesCollection() {
    return this._availableShapesCollection;
  }

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // dvh_host_id - computed: false, optional: true, required: false
  private _dvhHostId?: string; 
  public get dvhHostId() {
    return this.getStringAttribute('dvh_host_id');
  }
  public set dvhHostId(value: string) {
    this._dvhHostId = value;
  }
  public resetDvhHostId() {
    this._dvhHostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dvhHostIdInput() {
    return this._dvhHostId;
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

  // migration_plan_id - computed: false, optional: false, required: true
  private _migrationPlanId?: string; 
  public get migrationPlanId() {
    return this.getStringAttribute('migration_plan_id');
  }
  public set migrationPlanId(value: string) {
    this._migrationPlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationPlanIdInput() {
    return this._migrationPlanId;
  }

  // reserved_capacity_id - computed: false, optional: true, required: false
  private _reservedCapacityId?: string; 
  public get reservedCapacityId() {
    return this.getStringAttribute('reserved_capacity_id');
  }
  public set reservedCapacityId(value: string) {
    this._reservedCapacityId = value;
  }
  public resetReservedCapacityId() {
    this._reservedCapacityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedCapacityIdInput() {
    return this._reservedCapacityId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciCloudMigrationsMigrationPlanAvailableShapesFilter[] | cdktf.IResolvable) {
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
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      dvh_host_id: cdktf.stringToTerraform(this._dvhHostId),
      id: cdktf.stringToTerraform(this._id),
      migration_plan_id: cdktf.stringToTerraform(this._migrationPlanId),
      reserved_capacity_id: cdktf.stringToTerraform(this._reservedCapacityId),
      filter: cdktf.listMapper(dataOciCloudMigrationsMigrationPlanAvailableShapesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dvh_host_id: {
        value: cdktf.stringToHclTerraform(this._dvhHostId),
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
      migration_plan_id: {
        value: cdktf.stringToHclTerraform(this._migrationPlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserved_capacity_id: {
        value: cdktf.stringToHclTerraform(this._reservedCapacityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciCloudMigrationsMigrationPlanAvailableShapesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciCloudMigrationsMigrationPlanAvailableShapesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
