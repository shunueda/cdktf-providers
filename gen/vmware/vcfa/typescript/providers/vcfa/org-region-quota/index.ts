// https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_region_quota
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgRegionQuotaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the Org Region Quota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_region_quota#description OrgRegionQuota#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_region_quota#id OrgRegionQuota#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Parent Organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_region_quota#org_id OrgRegionQuota#org_id}
  */
  readonly orgId: string;
  /**
  * Parent Region ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_region_quota#region_id OrgRegionQuota#region_id}
  */
  readonly regionId: string;
  /**
  * A set of Region VM Class IDs to assign to this Org Region Quota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_region_quota#region_vm_class_ids OrgRegionQuota#region_vm_class_ids}
  */
  readonly regionVmClassIds: string[];
  /**
  * A set of Supervisor IDs that back this Org Region Quota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_region_quota#supervisor_ids OrgRegionQuota#supervisor_ids}
  */
  readonly supervisorIds: string[];
  /**
  * region_storage_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_region_quota#region_storage_policy OrgRegionQuota#region_storage_policy}
  */
  readonly regionStoragePolicy: OrgRegionQuotaRegionStoragePolicy[] | cdktf.IResolvable;
  /**
  * zone_resource_allocations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_region_quota#zone_resource_allocations OrgRegionQuota#zone_resource_allocations}
  */
  readonly zoneResourceAllocations: OrgRegionQuotaZoneResourceAllocations[] | cdktf.IResolvable;
}
export interface OrgRegionQuotaRegionStoragePolicy {
  /**
  * The ID of the Region Storage Policy for this Org Region Quota
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_region_quota#region_storage_policy_id OrgRegionQuota#region_storage_policy_id}
  */
  readonly regionStoragePolicyId: string;
  /**
  * Maximum allowed storage allocation in mebibytes. Minimum value: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_region_quota#storage_limit_mib OrgRegionQuota#storage_limit_mib}
  */
  readonly storageLimitMib: number;
}

export function orgRegionQuotaRegionStoragePolicyToTerraform(struct?: OrgRegionQuotaRegionStoragePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region_storage_policy_id: cdktf.stringToTerraform(struct!.regionStoragePolicyId),
    storage_limit_mib: cdktf.numberToTerraform(struct!.storageLimitMib),
  }
}


export function orgRegionQuotaRegionStoragePolicyToHclTerraform(struct?: OrgRegionQuotaRegionStoragePolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region_storage_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.regionStoragePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_limit_mib: {
      value: cdktf.numberToHclTerraform(struct!.storageLimitMib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgRegionQuotaRegionStoragePolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgRegionQuotaRegionStoragePolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionStoragePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionStoragePolicyId = this._regionStoragePolicyId;
    }
    if (this._storageLimitMib !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageLimitMib = this._storageLimitMib;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgRegionQuotaRegionStoragePolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regionStoragePolicyId = undefined;
      this._storageLimitMib = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regionStoragePolicyId = value.regionStoragePolicyId;
      this._storageLimitMib = value.storageLimitMib;
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

  // region_storage_policy_id - computed: false, optional: false, required: true
  private _regionStoragePolicyId?: string; 
  public get regionStoragePolicyId() {
    return this.getStringAttribute('region_storage_policy_id');
  }
  public set regionStoragePolicyId(value: string) {
    this._regionStoragePolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionStoragePolicyIdInput() {
    return this._regionStoragePolicyId;
  }

  // storage_limit_mib - computed: false, optional: false, required: true
  private _storageLimitMib?: number; 
  public get storageLimitMib() {
    return this.getNumberAttribute('storage_limit_mib');
  }
  public set storageLimitMib(value: number) {
    this._storageLimitMib = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLimitMibInput() {
    return this._storageLimitMib;
  }

  // storage_used_mib - computed: true, optional: false, required: false
  public get storageUsedMib() {
    return this.getNumberAttribute('storage_used_mib');
  }
}

export class OrgRegionQuotaRegionStoragePolicyList extends cdktf.ComplexList {
  public internalValue? : OrgRegionQuotaRegionStoragePolicy[] | cdktf.IResolvable

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
  public get(index: number): OrgRegionQuotaRegionStoragePolicyOutputReference {
    return new OrgRegionQuotaRegionStoragePolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgRegionQuotaZoneResourceAllocations {
  /**
  * CPU limit in MHz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_region_quota#cpu_limit_mhz OrgRegionQuota#cpu_limit_mhz}
  */
  readonly cpuLimitMhz: number;
  /**
  * CPU reservation in MHz
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_region_quota#cpu_reservation_mhz OrgRegionQuota#cpu_reservation_mhz}
  */
  readonly cpuReservationMhz: number;
  /**
  * Memory limit in MiB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_region_quota#memory_limit_mib OrgRegionQuota#memory_limit_mib}
  */
  readonly memoryLimitMib: number;
  /**
  * Memory reservation in MiB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_region_quota#memory_reservation_mib OrgRegionQuota#memory_reservation_mib}
  */
  readonly memoryReservationMib: number;
  /**
  * Region Zone ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_region_quota#region_zone_id OrgRegionQuota#region_zone_id}
  */
  readonly regionZoneId: string;
}

export function orgRegionQuotaZoneResourceAllocationsToTerraform(struct?: OrgRegionQuotaZoneResourceAllocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_limit_mhz: cdktf.numberToTerraform(struct!.cpuLimitMhz),
    cpu_reservation_mhz: cdktf.numberToTerraform(struct!.cpuReservationMhz),
    memory_limit_mib: cdktf.numberToTerraform(struct!.memoryLimitMib),
    memory_reservation_mib: cdktf.numberToTerraform(struct!.memoryReservationMib),
    region_zone_id: cdktf.stringToTerraform(struct!.regionZoneId),
  }
}


export function orgRegionQuotaZoneResourceAllocationsToHclTerraform(struct?: OrgRegionQuotaZoneResourceAllocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_limit_mhz: {
      value: cdktf.numberToHclTerraform(struct!.cpuLimitMhz),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cpu_reservation_mhz: {
      value: cdktf.numberToHclTerraform(struct!.cpuReservationMhz),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_limit_mib: {
      value: cdktf.numberToHclTerraform(struct!.memoryLimitMib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory_reservation_mib: {
      value: cdktf.numberToHclTerraform(struct!.memoryReservationMib),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    region_zone_id: {
      value: cdktf.stringToHclTerraform(struct!.regionZoneId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgRegionQuotaZoneResourceAllocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgRegionQuotaZoneResourceAllocations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuLimitMhz !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimitMhz = this._cpuLimitMhz;
    }
    if (this._cpuReservationMhz !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuReservationMhz = this._cpuReservationMhz;
    }
    if (this._memoryLimitMib !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryLimitMib = this._memoryLimitMib;
    }
    if (this._memoryReservationMib !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryReservationMib = this._memoryReservationMib;
    }
    if (this._regionZoneId !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionZoneId = this._regionZoneId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgRegionQuotaZoneResourceAllocations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpuLimitMhz = undefined;
      this._cpuReservationMhz = undefined;
      this._memoryLimitMib = undefined;
      this._memoryReservationMib = undefined;
      this._regionZoneId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpuLimitMhz = value.cpuLimitMhz;
      this._cpuReservationMhz = value.cpuReservationMhz;
      this._memoryLimitMib = value.memoryLimitMib;
      this._memoryReservationMib = value.memoryReservationMib;
      this._regionZoneId = value.regionZoneId;
    }
  }

  // cpu_limit_mhz - computed: false, optional: false, required: true
  private _cpuLimitMhz?: number; 
  public get cpuLimitMhz() {
    return this.getNumberAttribute('cpu_limit_mhz');
  }
  public set cpuLimitMhz(value: number) {
    this._cpuLimitMhz = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitMhzInput() {
    return this._cpuLimitMhz;
  }

  // cpu_reservation_mhz - computed: false, optional: false, required: true
  private _cpuReservationMhz?: number; 
  public get cpuReservationMhz() {
    return this.getNumberAttribute('cpu_reservation_mhz');
  }
  public set cpuReservationMhz(value: number) {
    this._cpuReservationMhz = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuReservationMhzInput() {
    return this._cpuReservationMhz;
  }

  // memory_limit_mib - computed: false, optional: false, required: true
  private _memoryLimitMib?: number; 
  public get memoryLimitMib() {
    return this.getNumberAttribute('memory_limit_mib');
  }
  public set memoryLimitMib(value: number) {
    this._memoryLimitMib = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitMibInput() {
    return this._memoryLimitMib;
  }

  // memory_reservation_mib - computed: false, optional: false, required: true
  private _memoryReservationMib?: number; 
  public get memoryReservationMib() {
    return this.getNumberAttribute('memory_reservation_mib');
  }
  public set memoryReservationMib(value: number) {
    this._memoryReservationMib = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryReservationMibInput() {
    return this._memoryReservationMib;
  }

  // region_zone_id - computed: false, optional: false, required: true
  private _regionZoneId?: string; 
  public get regionZoneId() {
    return this.getStringAttribute('region_zone_id');
  }
  public set regionZoneId(value: string) {
    this._regionZoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionZoneIdInput() {
    return this._regionZoneId;
  }

  // region_zone_name - computed: true, optional: false, required: false
  public get regionZoneName() {
    return this.getStringAttribute('region_zone_name');
  }
}

export class OrgRegionQuotaZoneResourceAllocationsList extends cdktf.ComplexList {
  public internalValue? : OrgRegionQuotaZoneResourceAllocations[] | cdktf.IResolvable

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
  public get(index: number): OrgRegionQuotaZoneResourceAllocationsOutputReference {
    return new OrgRegionQuotaZoneResourceAllocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_region_quota vcfa_org_region_quota}
*/
export class OrgRegionQuota extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcfa_org_region_quota";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgRegionQuota resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgRegionQuota to import
  * @param importFromId The id of the existing OrgRegionQuota that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_region_quota#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgRegionQuota to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcfa_org_region_quota", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcfa/1.0.0/docs/resources/org_region_quota vcfa_org_region_quota} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgRegionQuotaConfig
  */
  public constructor(scope: Construct, id: string, config: OrgRegionQuotaConfig) {
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
    this._description = config.description;
    this._id = config.id;
    this._orgId = config.orgId;
    this._regionId = config.regionId;
    this._regionVmClassIds = config.regionVmClassIds;
    this._supervisorIds = config.supervisorIds;
    this._regionStoragePolicy.internalValue = config.regionStoragePolicy;
    this._zoneResourceAllocations.internalValue = config.zoneResourceAllocations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // region_vm_class_ids - computed: false, optional: false, required: true
  private _regionVmClassIds?: string[]; 
  public get regionVmClassIds() {
    return cdktf.Fn.tolist(this.getListAttribute('region_vm_class_ids'));
  }
  public set regionVmClassIds(value: string[]) {
    this._regionVmClassIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionVmClassIdsInput() {
    return this._regionVmClassIds;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // supervisor_ids - computed: false, optional: false, required: true
  private _supervisorIds?: string[]; 
  public get supervisorIds() {
    return cdktf.Fn.tolist(this.getListAttribute('supervisor_ids'));
  }
  public set supervisorIds(value: string[]) {
    this._supervisorIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supervisorIdsInput() {
    return this._supervisorIds;
  }

  // region_storage_policy - computed: false, optional: false, required: true
  private _regionStoragePolicy = new OrgRegionQuotaRegionStoragePolicyList(this, "region_storage_policy", true);
  public get regionStoragePolicy() {
    return this._regionStoragePolicy;
  }
  public putRegionStoragePolicy(value: OrgRegionQuotaRegionStoragePolicy[] | cdktf.IResolvable) {
    this._regionStoragePolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionStoragePolicyInput() {
    return this._regionStoragePolicy.internalValue;
  }

  // zone_resource_allocations - computed: false, optional: false, required: true
  private _zoneResourceAllocations = new OrgRegionQuotaZoneResourceAllocationsList(this, "zone_resource_allocations", true);
  public get zoneResourceAllocations() {
    return this._zoneResourceAllocations;
  }
  public putZoneResourceAllocations(value: OrgRegionQuotaZoneResourceAllocations[] | cdktf.IResolvable) {
    this._zoneResourceAllocations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneResourceAllocationsInput() {
    return this._zoneResourceAllocations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
      region_id: cdktf.stringToTerraform(this._regionId),
      region_vm_class_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regionVmClassIds),
      supervisor_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supervisorIds),
      region_storage_policy: cdktf.listMapper(orgRegionQuotaRegionStoragePolicyToTerraform, true)(this._regionStoragePolicy.internalValue),
      zone_resource_allocations: cdktf.listMapper(orgRegionQuotaZoneResourceAllocationsToTerraform, true)(this._zoneResourceAllocations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      region_vm_class_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regionVmClassIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      supervisor_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._supervisorIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      region_storage_policy: {
        value: cdktf.listMapperHcl(orgRegionQuotaRegionStoragePolicyToHclTerraform, true)(this._regionStoragePolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrgRegionQuotaRegionStoragePolicyList",
      },
      zone_resource_allocations: {
        value: cdktf.listMapperHcl(orgRegionQuotaZoneResourceAllocationsToHclTerraform, true)(this._zoneResourceAllocations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrgRegionQuotaZoneResourceAllocationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
