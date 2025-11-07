// https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/data-sources/org_region_quota
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataVcfaOrgRegionQuotaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/data-sources/org_region_quota#id DataVcfaOrgRegionQuota#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Parent Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/data-sources/org_region_quota#org_id DataVcfaOrgRegionQuota#org_id}
  */
  readonly orgId: string;
  /**
  * Parent Region ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/data-sources/org_region_quota#region_id DataVcfaOrgRegionQuota#region_id}
  */
  readonly regionId: string;
}
export interface DataVcfaOrgRegionQuotaRegionStoragePolicy {
}

export function dataVcfaOrgRegionQuotaRegionStoragePolicyToTerraform(struct?: DataVcfaOrgRegionQuotaRegionStoragePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcfaOrgRegionQuotaRegionStoragePolicyToHclTerraform(struct?: DataVcfaOrgRegionQuotaRegionStoragePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcfaOrgRegionQuotaRegionStoragePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcfaOrgRegionQuotaRegionStoragePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcfaOrgRegionQuotaRegionStoragePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // region_storage_policy_id - computed: true, optional: false, required: false
  public get regionStoragePolicyId() {
    return this.getStringAttribute('region_storage_policy_id');
  }

  // storage_limit_mib - computed: true, optional: false, required: false
  public get storageLimitMib() {
    return this.getNumberAttribute('storage_limit_mib');
  }

  // storage_used_mib - computed: true, optional: false, required: false
  public get storageUsedMib() {
    return this.getNumberAttribute('storage_used_mib');
  }
}

export class DataVcfaOrgRegionQuotaRegionStoragePolicyList extends cdktf.ComplexList {

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
  public get(index: number): DataVcfaOrgRegionQuotaRegionStoragePolicyOutputReference {
    return new DataVcfaOrgRegionQuotaRegionStoragePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataVcfaOrgRegionQuotaZoneResourceAllocations {
}

export function dataVcfaOrgRegionQuotaZoneResourceAllocationsToTerraform(struct?: DataVcfaOrgRegionQuotaZoneResourceAllocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataVcfaOrgRegionQuotaZoneResourceAllocationsToHclTerraform(struct?: DataVcfaOrgRegionQuotaZoneResourceAllocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataVcfaOrgRegionQuotaZoneResourceAllocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataVcfaOrgRegionQuotaZoneResourceAllocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataVcfaOrgRegionQuotaZoneResourceAllocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cpu_limit_mhz - computed: true, optional: false, required: false
  public get cpuLimitMhz() {
    return this.getNumberAttribute('cpu_limit_mhz');
  }

  // cpu_reservation_mhz - computed: true, optional: false, required: false
  public get cpuReservationMhz() {
    return this.getNumberAttribute('cpu_reservation_mhz');
  }

  // memory_limit_mib - computed: true, optional: false, required: false
  public get memoryLimitMib() {
    return this.getNumberAttribute('memory_limit_mib');
  }

  // memory_reservation_mib - computed: true, optional: false, required: false
  public get memoryReservationMib() {
    return this.getNumberAttribute('memory_reservation_mib');
  }

  // region_zone_id - computed: true, optional: false, required: false
  public get regionZoneId() {
    return this.getStringAttribute('region_zone_id');
  }

  // region_zone_name - computed: true, optional: false, required: false
  public get regionZoneName() {
    return this.getStringAttribute('region_zone_name');
  }
}

export class DataVcfaOrgRegionQuotaZoneResourceAllocationsList extends cdktf.ComplexList {

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
  public get(index: number): DataVcfaOrgRegionQuotaZoneResourceAllocationsOutputReference {
    return new DataVcfaOrgRegionQuotaZoneResourceAllocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/data-sources/org_region_quota vcfa_org_region_quota}
*/
export class DataVcfaOrgRegionQuota extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcfa_org_region_quota";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataVcfaOrgRegionQuota resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataVcfaOrgRegionQuota to import
  * @param importFromId The id of the existing DataVcfaOrgRegionQuota that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/data-sources/org_region_quota#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataVcfaOrgRegionQuota to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcfa_org_region_quota", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/data-sources/org_region_quota vcfa_org_region_quota} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataVcfaOrgRegionQuotaConfig
  */
  public constructor(scope: Construct, id: string, config: DataVcfaOrgRegionQuotaConfig) {
    super(scope, id, {
      terraformResourceType: 'vcfa_org_region_quota',
      terraformGeneratorMetadata: {
        providerName: 'vcfa',
        providerVersion: '1.0.0'
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
    this._orgId = config.orgId;
    this._regionId = config.regionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // region_id - computed: false, optional: false, required: true
  private _regionId?: string; 
  public get regionId() {
    return this.getStringAttribute('region_id');
  }
  public set regionId(value: string) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_storage_policy - computed: true, optional: false, required: false
  private _regionStoragePolicy = new DataVcfaOrgRegionQuotaRegionStoragePolicyList(this, "region_storage_policy", true);
  public get regionStoragePolicy() {
    return this._regionStoragePolicy;
  }

  // region_vm_class_ids - computed: true, optional: false, required: false
  public get regionVmClassIds() {
    return cdktf.Fn.tolist(this.getListAttribute('region_vm_class_ids'));
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // supervisor_ids - computed: true, optional: false, required: false
  public get supervisorIds() {
    return cdktf.Fn.tolist(this.getListAttribute('supervisor_ids'));
  }

  // zone_resource_allocations - computed: true, optional: false, required: false
  private _zoneResourceAllocations = new DataVcfaOrgRegionQuotaZoneResourceAllocationsList(this, "zone_resource_allocations", true);
  public get zoneResourceAllocations() {
    return this._zoneResourceAllocations;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
      region_id: cdktf.stringToTerraform(this._regionId),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.stringToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
