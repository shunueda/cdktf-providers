// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exascale_db_storage_vaults
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDatabaseExascaleDbStorageVaultsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exascale_db_storage_vaults#attached_shape_attributes DataOciDatabaseExascaleDbStorageVaults#attached_shape_attributes}
  */
  readonly attachedShapeAttributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exascale_db_storage_vaults#attached_shape_attributes_not_equal_to DataOciDatabaseExascaleDbStorageVaults#attached_shape_attributes_not_equal_to}
  */
  readonly attachedShapeAttributesNotEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exascale_db_storage_vaults#cluster_placement_group_id DataOciDatabaseExascaleDbStorageVaults#cluster_placement_group_id}
  */
  readonly clusterPlacementGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exascale_db_storage_vaults#compartment_id DataOciDatabaseExascaleDbStorageVaults#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exascale_db_storage_vaults#display_name DataOciDatabaseExascaleDbStorageVaults#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exascale_db_storage_vaults#exadata_infrastructure_id DataOciDatabaseExascaleDbStorageVaults#exadata_infrastructure_id}
  */
  readonly exadataInfrastructureId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exascale_db_storage_vaults#id DataOciDatabaseExascaleDbStorageVaults#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exascale_db_storage_vaults#state DataOciDatabaseExascaleDbStorageVaults#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exascale_db_storage_vaults#vm_cluster_count_greater_than_or_equal_to DataOciDatabaseExascaleDbStorageVaults#vm_cluster_count_greater_than_or_equal_to}
  */
  readonly vmClusterCountGreaterThanOrEqualTo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exascale_db_storage_vaults#vm_cluster_count_less_than_or_equal_to DataOciDatabaseExascaleDbStorageVaults#vm_cluster_count_less_than_or_equal_to}
  */
  readonly vmClusterCountLessThanOrEqualTo?: number;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exascale_db_storage_vaults#filter DataOciDatabaseExascaleDbStorageVaults#filter}
  */
  readonly filter?: DataOciDatabaseExascaleDbStorageVaultsFilter[] | cdktf.IResolvable;
}
export interface DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage {
}

export function dataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageToTerraform(struct?: DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageToHclTerraform(struct?: DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // available_size_in_gbs - computed: true, optional: false, required: false
  public get availableSizeInGbs() {
    return this.getNumberAttribute('available_size_in_gbs');
  }

  // total_size_in_gbs - computed: true, optional: false, required: false
  public get totalSizeInGbs() {
    return this.getNumberAttribute('total_size_in_gbs');
  }
}

export class DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference {
    return new DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults {
}

export function dataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsToTerraform(struct?: DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsToHclTerraform(struct?: DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_flash_cache_in_percent - computed: true, optional: false, required: false
  public get additionalFlashCacheInPercent() {
    return this.getNumberAttribute('additional_flash_cache_in_percent');
  }

  // attached_shape_attributes - computed: true, optional: false, required: false
  public get attachedShapeAttributes() {
    return this.getListAttribute('attached_shape_attributes');
  }

  // autoscale_limit_in_gbs - computed: true, optional: false, required: false
  public get autoscaleLimitInGbs() {
    return this.getNumberAttribute('autoscale_limit_in_gbs');
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // cluster_placement_group_id - computed: true, optional: false, required: false
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // exadata_infrastructure_id - computed: true, optional: false, required: false
  public get exadataInfrastructureId() {
    return this.getStringAttribute('exadata_infrastructure_id');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // high_capacity_database_storage - computed: true, optional: false, required: false
  private _highCapacityDatabaseStorage = new DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsHighCapacityDatabaseStorageList(this, "high_capacity_database_storage", false);
  public get highCapacityDatabaseStorage() {
    return this._highCapacityDatabaseStorage;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_autoscale_enabled - computed: true, optional: false, required: false
  public get isAutoscaleEnabled() {
    return this.getBooleanAttribute('is_autoscale_enabled');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // vm_cluster_count - computed: true, optional: false, required: false
  public get vmClusterCount() {
    return this.getNumberAttribute('vm_cluster_count');
  }

  // vm_cluster_ids - computed: true, optional: false, required: false
  public get vmClusterIds() {
    return this.getListAttribute('vm_cluster_ids');
  }
}

export class DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference {
    return new DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDatabaseExascaleDbStorageVaultsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exascale_db_storage_vaults#name DataOciDatabaseExascaleDbStorageVaults#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exascale_db_storage_vaults#regex DataOciDatabaseExascaleDbStorageVaults#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exascale_db_storage_vaults#values DataOciDatabaseExascaleDbStorageVaults#values}
  */
  readonly values: string[];
}

export function dataOciDatabaseExascaleDbStorageVaultsFilterToTerraform(struct?: DataOciDatabaseExascaleDbStorageVaultsFilter | cdktf.IResolvable): any {
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


export function dataOciDatabaseExascaleDbStorageVaultsFilterToHclTerraform(struct?: DataOciDatabaseExascaleDbStorageVaultsFilter | cdktf.IResolvable): any {
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

export class DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciDatabaseExascaleDbStorageVaultsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciDatabaseExascaleDbStorageVaultsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciDatabaseExascaleDbStorageVaultsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciDatabaseExascaleDbStorageVaultsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference {
    return new DataOciDatabaseExascaleDbStorageVaultsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exascale_db_storage_vaults oci_database_exascale_db_storage_vaults}
*/
export class DataOciDatabaseExascaleDbStorageVaults extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_database_exascale_db_storage_vaults";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDatabaseExascaleDbStorageVaults resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDatabaseExascaleDbStorageVaults to import
  * @param importFromId The id of the existing DataOciDatabaseExascaleDbStorageVaults that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exascale_db_storage_vaults#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDatabaseExascaleDbStorageVaults to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_database_exascale_db_storage_vaults", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/database_exascale_db_storage_vaults oci_database_exascale_db_storage_vaults} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDatabaseExascaleDbStorageVaultsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDatabaseExascaleDbStorageVaultsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_database_exascale_db_storage_vaults',
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
    this._attachedShapeAttributes = config.attachedShapeAttributes;
    this._attachedShapeAttributesNotEqualTo = config.attachedShapeAttributesNotEqualTo;
    this._clusterPlacementGroupId = config.clusterPlacementGroupId;
    this._compartmentId = config.compartmentId;
    this._displayName = config.displayName;
    this._exadataInfrastructureId = config.exadataInfrastructureId;
    this._id = config.id;
    this._state = config.state;
    this._vmClusterCountGreaterThanOrEqualTo = config.vmClusterCountGreaterThanOrEqualTo;
    this._vmClusterCountLessThanOrEqualTo = config.vmClusterCountLessThanOrEqualTo;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attached_shape_attributes - computed: false, optional: true, required: false
  private _attachedShapeAttributes?: string; 
  public get attachedShapeAttributes() {
    return this.getStringAttribute('attached_shape_attributes');
  }
  public set attachedShapeAttributes(value: string) {
    this._attachedShapeAttributes = value;
  }
  public resetAttachedShapeAttributes() {
    this._attachedShapeAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedShapeAttributesInput() {
    return this._attachedShapeAttributes;
  }

  // attached_shape_attributes_not_equal_to - computed: false, optional: true, required: false
  private _attachedShapeAttributesNotEqualTo?: string; 
  public get attachedShapeAttributesNotEqualTo() {
    return this.getStringAttribute('attached_shape_attributes_not_equal_to');
  }
  public set attachedShapeAttributesNotEqualTo(value: string) {
    this._attachedShapeAttributesNotEqualTo = value;
  }
  public resetAttachedShapeAttributesNotEqualTo() {
    this._attachedShapeAttributesNotEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attachedShapeAttributesNotEqualToInput() {
    return this._attachedShapeAttributesNotEqualTo;
  }

  // cluster_placement_group_id - computed: false, optional: true, required: false
  private _clusterPlacementGroupId?: string; 
  public get clusterPlacementGroupId() {
    return this.getStringAttribute('cluster_placement_group_id');
  }
  public set clusterPlacementGroupId(value: string) {
    this._clusterPlacementGroupId = value;
  }
  public resetClusterPlacementGroupId() {
    this._clusterPlacementGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPlacementGroupIdInput() {
    return this._clusterPlacementGroupId;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // display_name - computed: false, optional: true, required: false
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

  // exadata_infrastructure_id - computed: false, optional: true, required: false
  private _exadataInfrastructureId?: string; 
  public get exadataInfrastructureId() {
    return this.getStringAttribute('exadata_infrastructure_id');
  }
  public set exadataInfrastructureId(value: string) {
    this._exadataInfrastructureId = value;
  }
  public resetExadataInfrastructureId() {
    this._exadataInfrastructureId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exadataInfrastructureIdInput() {
    return this._exadataInfrastructureId;
  }

  // exascale_db_storage_vaults - computed: true, optional: false, required: false
  private _exascaleDbStorageVaults = new DataOciDatabaseExascaleDbStorageVaultsExascaleDbStorageVaultsList(this, "exascale_db_storage_vaults", false);
  public get exascaleDbStorageVaults() {
    return this._exascaleDbStorageVaults;
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

  // vm_cluster_count_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _vmClusterCountGreaterThanOrEqualTo?: number; 
  public get vmClusterCountGreaterThanOrEqualTo() {
    return this.getNumberAttribute('vm_cluster_count_greater_than_or_equal_to');
  }
  public set vmClusterCountGreaterThanOrEqualTo(value: number) {
    this._vmClusterCountGreaterThanOrEqualTo = value;
  }
  public resetVmClusterCountGreaterThanOrEqualTo() {
    this._vmClusterCountGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmClusterCountGreaterThanOrEqualToInput() {
    return this._vmClusterCountGreaterThanOrEqualTo;
  }

  // vm_cluster_count_less_than_or_equal_to - computed: false, optional: true, required: false
  private _vmClusterCountLessThanOrEqualTo?: number; 
  public get vmClusterCountLessThanOrEqualTo() {
    return this.getNumberAttribute('vm_cluster_count_less_than_or_equal_to');
  }
  public set vmClusterCountLessThanOrEqualTo(value: number) {
    this._vmClusterCountLessThanOrEqualTo = value;
  }
  public resetVmClusterCountLessThanOrEqualTo() {
    this._vmClusterCountLessThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmClusterCountLessThanOrEqualToInput() {
    return this._vmClusterCountLessThanOrEqualTo;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciDatabaseExascaleDbStorageVaultsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciDatabaseExascaleDbStorageVaultsFilter[] | cdktf.IResolvable) {
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
      attached_shape_attributes: cdktf.stringToTerraform(this._attachedShapeAttributes),
      attached_shape_attributes_not_equal_to: cdktf.stringToTerraform(this._attachedShapeAttributesNotEqualTo),
      cluster_placement_group_id: cdktf.stringToTerraform(this._clusterPlacementGroupId),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_name: cdktf.stringToTerraform(this._displayName),
      exadata_infrastructure_id: cdktf.stringToTerraform(this._exadataInfrastructureId),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      vm_cluster_count_greater_than_or_equal_to: cdktf.numberToTerraform(this._vmClusterCountGreaterThanOrEqualTo),
      vm_cluster_count_less_than_or_equal_to: cdktf.numberToTerraform(this._vmClusterCountLessThanOrEqualTo),
      filter: cdktf.listMapper(dataOciDatabaseExascaleDbStorageVaultsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attached_shape_attributes: {
        value: cdktf.stringToHclTerraform(this._attachedShapeAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attached_shape_attributes_not_equal_to: {
        value: cdktf.stringToHclTerraform(this._attachedShapeAttributesNotEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_placement_group_id: {
        value: cdktf.stringToHclTerraform(this._clusterPlacementGroupId),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exadata_infrastructure_id: {
        value: cdktf.stringToHclTerraform(this._exadataInfrastructureId),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_cluster_count_greater_than_or_equal_to: {
        value: cdktf.numberToHclTerraform(this._vmClusterCountGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vm_cluster_count_less_than_or_equal_to: {
        value: cdktf.numberToHclTerraform(this._vmClusterCountLessThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciDatabaseExascaleDbStorageVaultsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciDatabaseExascaleDbStorageVaultsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
