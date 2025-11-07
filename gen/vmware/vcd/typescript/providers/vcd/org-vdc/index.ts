// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgVdcConfig extends cdktf.TerraformMetaArguments {
  /**
  * The allocation model used by this VDC; must be one of {AllocationVApp, AllocationPool, ReservationPool, Flex}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#allocation_model OrgVdc#allocation_model}
  */
  readonly allocationModel: string;
  /**
  * Set to false to disallow creation of the VDC if the AllocationModel is AllocationPool or ReservationPool and the ComputeCapacity you specified is greater than what the backing Provider VDC can supply. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#allow_over_commit OrgVdc#allow_over_commit}
  */
  readonly allowOverCommit?: boolean | cdktf.IResolvable;
  /**
  * Percentage of allocated CPU resources guaranteed to vApps deployed in this VDC. For example, if this value is 0.75, then 75% of allocated resources are guaranteed. Required when AllocationModel is AllocationVApp or AllocationPool. If the element is empty, vCD sets a value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#cpu_guaranteed OrgVdc#cpu_guaranteed}
  */
  readonly cpuGuaranteed?: number;
  /**
  * Specifies the clock frequency, in Megahertz, for any virtual CPU that is allocated to a VM. A VM with 2 vCPUs will consume twice as much of this value. Ignored for ReservationPool. Required when AllocationModel is AllocationVApp or AllocationPool, and may not be less than 256 MHz. Defaults to 1000 MHz if the element is empty or missing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#cpu_speed OrgVdc#cpu_speed}
  */
  readonly cpuSpeed?: number;
  /**
  * ID of default Compute policy for this VDC, which can be a VM Sizing Policy, VM Placement Policy or vGPU Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#default_compute_policy_id OrgVdc#default_compute_policy_id}
  */
  readonly defaultComputePolicyId?: string;
  /**
  * ID of default VM Compute policy, which can be a VM Sizing Policy, VM Placement Policy or vGPU Policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#default_vm_sizing_policy_id OrgVdc#default_vm_sizing_policy_id}
  */
  readonly defaultVmSizingPolicyId?: string;
  /**
  * When destroying use delete_force=True to remove a VDC and any objects it contains, regardless of their state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#delete_force OrgVdc#delete_force}
  */
  readonly deleteForce?: boolean | cdktf.IResolvable;
  /**
  * When destroying use delete_recursive=True to remove the VDC and any objects it contains that are in a state that normally allows removal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#delete_recursive OrgVdc#delete_recursive}
  */
  readonly deleteRecursive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#description OrgVdc#description}
  */
  readonly description?: string;
  /**
  * ID of NSX-T Edge Cluster (provider vApp networking services and DHCP capability for Isolated networks)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#edge_cluster_id OrgVdc#edge_cluster_id}
  */
  readonly edgeClusterId?: string;
  /**
  * Set to true to indicate if the Flex VDC is to be elastic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#elasticity OrgVdc#elasticity}
  */
  readonly elasticity?: boolean | cdktf.IResolvable;
  /**
  * Request for fast provisioning. Request will be honored only if the underlying datas tore supports it. Fast provisioning can reduce the time it takes to create virtual machines by using vSphere linked clones. If you disable fast provisioning, all provisioning operations will result in full clones.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#enable_fast_provisioning OrgVdc#enable_fast_provisioning}
  */
  readonly enableFastProvisioning?: boolean | cdktf.IResolvable;
  /**
  * Set to true to enable distributed firewall - Only applies to NSX-V VDCs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#enable_nsxv_distributed_firewall OrgVdc#enable_nsxv_distributed_firewall}
  */
  readonly enableNsxvDistributedFirewall?: boolean | cdktf.IResolvable;
  /**
  * Boolean to request thin provisioning. Request will be honored only if the underlying datastore supports it. Thin provisioning saves storage space by committing it on demand. This allows over-allocation of storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#enable_thin_provisioning OrgVdc#enable_thin_provisioning}
  */
  readonly enableThinProvisioning?: boolean | cdktf.IResolvable;
  /**
  * True if discovery of vCenter VMs is enabled for resource pools backing this VDC. If left unspecified, the actual behaviour depends on enablement at the organization level and at the system level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#enable_vm_discovery OrgVdc#enable_vm_discovery}
  */
  readonly enableVmDiscovery?: boolean | cdktf.IResolvable;
  /**
  * True if this VDC is enabled for use by the organization VDCs. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#enabled OrgVdc#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#id OrgVdc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set to true to indicate if the Flex VDC is to include memory overhead into its accounting for admission control.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#include_vm_memory_overhead OrgVdc#include_vm_memory_overhead}
  */
  readonly includeVmMemoryOverhead?: boolean | cdktf.IResolvable;
  /**
  * Percentage of allocated memory resources guaranteed to vApps deployed in this VDC. For example, if this value is 0.75, then 75% of allocated resources are guaranteed. Required when AllocationModel is AllocationVApp or AllocationPool. When Allocation model is AllocationPool minimum value is 0.2. If the element is empty, vCD sets a value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#memory_guaranteed OrgVdc#memory_guaranteed}
  */
  readonly memoryGuaranteed?: number;
  /**
  * Key and value pairs for Org VDC metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#metadata OrgVdc#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#name OrgVdc#name}
  */
  readonly name: string;
  /**
  * The name of a network pool in the Provider VDC. Required if this VDC will contain routed or isolated networks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#network_pool_name OrgVdc#network_pool_name}
  */
  readonly networkPoolName?: string;
  /**
  * Maximum number of network objects that can be deployed in this VDC. Defaults to 0, which means no networks can be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#network_quota OrgVdc#network_quota}
  */
  readonly networkQuota?: number;
  /**
  * Maximum number of virtual NICs allowed in this VDC. Defaults to 0, which specifies an unlimited number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#nic_quota OrgVdc#nic_quota}
  */
  readonly nicQuota?: number;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#org OrgVdc#org}
  */
  readonly org?: string;
  /**
  * A reference to the Provider VDC from which this organization VDC is provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#provider_vdc_name OrgVdc#provider_vdc_name}
  */
  readonly providerVdcName: string;
  /**
  * Set of VM Placement Policy IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#vm_placement_policy_ids OrgVdc#vm_placement_policy_ids}
  */
  readonly vmPlacementPolicyIds?: string[];
  /**
  * The maximum number of VMs that can be created in this VDC. Includes deployed and undeployed VMs in vApps and vApp templates. Defaults to 0, which specifies an unlimited number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#vm_quota OrgVdc#vm_quota}
  */
  readonly vmQuota?: number;
  /**
  * Set of VM Sizing Policy IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#vm_sizing_policy_ids OrgVdc#vm_sizing_policy_ids}
  */
  readonly vmSizingPolicyIds?: string[];
  /**
  * Set of VM vGPU Policy IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#vm_vgpu_policy_ids OrgVdc#vm_vgpu_policy_ids}
  */
  readonly vmVgpuPolicyIds?: string[];
  /**
  * compute_capacity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#compute_capacity OrgVdc#compute_capacity}
  */
  readonly computeCapacity: OrgVdcComputeCapacity;
  /**
  * metadata_entry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#metadata_entry OrgVdc#metadata_entry}
  */
  readonly metadataEntry?: OrgVdcMetadataEntry[] | cdktf.IResolvable;
  /**
  * storage_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#storage_profile OrgVdc#storage_profile}
  */
  readonly storageProfile: OrgVdcStorageProfile[] | cdktf.IResolvable;
}
export interface OrgVdcComputeCapacityCpu {
  /**
  * Capacity that is committed to be available. Value in MB or MHz. Used with AllocationPool (Allocation pool) and ReservationPool (Reservation pool).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#allocated OrgVdc#allocated}
  */
  readonly allocated?: number;
  /**
  * Capacity limit relative to the value specified for Allocation. It must not be less than that value. If it is greater than that value, it implies over provisioning. A value of 0 specifies unlimited units. Value in MB or MHz. Used with AllocationVApp (Pay as you go).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#limit OrgVdc#limit}
  */
  readonly limit?: number;
}

export function orgVdcComputeCapacityCpuToTerraform(struct?: OrgVdcComputeCapacityCpuOutputReference | OrgVdcComputeCapacityCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated: cdktf.numberToTerraform(struct!.allocated),
    limit: cdktf.numberToTerraform(struct!.limit),
  }
}


export function orgVdcComputeCapacityCpuToHclTerraform(struct?: OrgVdcComputeCapacityCpuOutputReference | OrgVdcComputeCapacityCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated: {
      value: cdktf.numberToHclTerraform(struct!.allocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgVdcComputeCapacityCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrgVdcComputeCapacityCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocated = this._allocated;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgVdcComputeCapacityCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocated = undefined;
      this._limit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocated = value.allocated;
      this._limit = value.limit;
    }
  }

  // allocated - computed: true, optional: true, required: false
  private _allocated?: number; 
  public get allocated() {
    return this.getNumberAttribute('allocated');
  }
  public set allocated(value: number) {
    this._allocated = value;
  }
  public resetAllocated() {
    this._allocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedInput() {
    return this._allocated;
  }

  // limit - computed: true, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // reserved - computed: true, optional: false, required: false
  public get reserved() {
    return this.getNumberAttribute('reserved');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getNumberAttribute('used');
  }
}
export interface OrgVdcComputeCapacityMemory {
  /**
  * Capacity that is committed to be available. Value in MB or MHz. Used with AllocationPool (Allocation pool) and ReservationPool (Reservation pool).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#allocated OrgVdc#allocated}
  */
  readonly allocated?: number;
  /**
  * Capacity limit relative to the value specified for Allocation. It must not be less than that value. If it is greater than that value, it implies over provisioning. A value of 0 specifies unlimited units. Value in MB or MHz. Used with AllocationVApp (Pay as you go).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#limit OrgVdc#limit}
  */
  readonly limit?: number;
}

export function orgVdcComputeCapacityMemoryToTerraform(struct?: OrgVdcComputeCapacityMemoryOutputReference | OrgVdcComputeCapacityMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocated: cdktf.numberToTerraform(struct!.allocated),
    limit: cdktf.numberToTerraform(struct!.limit),
  }
}


export function orgVdcComputeCapacityMemoryToHclTerraform(struct?: OrgVdcComputeCapacityMemoryOutputReference | OrgVdcComputeCapacityMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocated: {
      value: cdktf.numberToHclTerraform(struct!.allocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgVdcComputeCapacityMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrgVdcComputeCapacityMemory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocated = this._allocated;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgVdcComputeCapacityMemory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocated = undefined;
      this._limit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocated = value.allocated;
      this._limit = value.limit;
    }
  }

  // allocated - computed: true, optional: true, required: false
  private _allocated?: number; 
  public get allocated() {
    return this.getNumberAttribute('allocated');
  }
  public set allocated(value: number) {
    this._allocated = value;
  }
  public resetAllocated() {
    this._allocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedInput() {
    return this._allocated;
  }

  // limit - computed: true, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // reserved - computed: true, optional: false, required: false
  public get reserved() {
    return this.getNumberAttribute('reserved');
  }

  // used - computed: true, optional: false, required: false
  public get used() {
    return this.getNumberAttribute('used');
  }
}
export interface OrgVdcComputeCapacity {
  /**
  * cpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#cpu OrgVdc#cpu}
  */
  readonly cpu: OrgVdcComputeCapacityCpu;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#memory OrgVdc#memory}
  */
  readonly memory: OrgVdcComputeCapacityMemory;
}

export function orgVdcComputeCapacityToTerraform(struct?: OrgVdcComputeCapacityOutputReference | OrgVdcComputeCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: orgVdcComputeCapacityCpuToTerraform(struct!.cpu),
    memory: orgVdcComputeCapacityMemoryToTerraform(struct!.memory),
  }
}


export function orgVdcComputeCapacityToHclTerraform(struct?: OrgVdcComputeCapacityOutputReference | OrgVdcComputeCapacity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: orgVdcComputeCapacityCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "list",
      storageClassType: "OrgVdcComputeCapacityCpuList",
    },
    memory: {
      value: orgVdcComputeCapacityMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "list",
      storageClassType: "OrgVdcComputeCapacityMemoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgVdcComputeCapacityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OrgVdcComputeCapacity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgVdcComputeCapacity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
    }
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu = new OrgVdcComputeCapacityCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: OrgVdcComputeCapacityCpu) {
    this._cpu.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: false, required: true
  private _memory = new OrgVdcComputeCapacityMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: OrgVdcComputeCapacityMemory) {
    this._memory.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }
}
export interface OrgVdcMetadataEntry {
  /**
  * Domain for this metadata entry. true, if it belongs to SYSTEM. false, if it belongs to GENERAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#is_system OrgVdc#is_system}
  */
  readonly isSystem?: boolean | cdktf.IResolvable;
  /**
  * Key of this metadata entry. Required if the metadata entry is not empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#key OrgVdc#key}
  */
  readonly key?: string;
  /**
  * Type of this metadata entry. One of: 'MetadataStringValue', 'MetadataNumberValue', 'MetadataBooleanValue', 'MetadataDateTimeValue'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#type OrgVdc#type}
  */
  readonly type?: string;
  /**
  * User access level for this metadata entry. One of: 'READWRITE', 'READONLY', 'PRIVATE'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#user_access OrgVdc#user_access}
  */
  readonly userAccess?: string;
  /**
  * Value of this metadata entry. Required if the metadata entry is not empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#value OrgVdc#value}
  */
  readonly value?: string;
}

export function orgVdcMetadataEntryToTerraform(struct?: OrgVdcMetadataEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_system: cdktf.booleanToTerraform(struct!.isSystem),
    key: cdktf.stringToTerraform(struct!.key),
    type: cdktf.stringToTerraform(struct!.type),
    user_access: cdktf.stringToTerraform(struct!.userAccess),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function orgVdcMetadataEntryToHclTerraform(struct?: OrgVdcMetadataEntry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_system: {
      value: cdktf.booleanToHclTerraform(struct!.isSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_access: {
      value: cdktf.stringToHclTerraform(struct!.userAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgVdcMetadataEntryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgVdcMetadataEntry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSystem = this._isSystem;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAccess = this._userAccess;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgVdcMetadataEntry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isSystem = undefined;
      this._key = undefined;
      this._type = undefined;
      this._userAccess = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isSystem = value.isSystem;
      this._key = value.key;
      this._type = value.type;
      this._userAccess = value.userAccess;
      this._value = value.value;
    }
  }

  // is_system - computed: false, optional: true, required: false
  private _isSystem?: boolean | cdktf.IResolvable; 
  public get isSystem() {
    return this.getBooleanAttribute('is_system');
  }
  public set isSystem(value: boolean | cdktf.IResolvable) {
    this._isSystem = value;
  }
  public resetIsSystem() {
    this._isSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSystemInput() {
    return this._isSystem;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_access - computed: false, optional: true, required: false
  private _userAccess?: string; 
  public get userAccess() {
    return this.getStringAttribute('user_access');
  }
  public set userAccess(value: string) {
    this._userAccess = value;
  }
  public resetUserAccess() {
    this._userAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccessInput() {
    return this._userAccess;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class OrgVdcMetadataEntryList extends cdktf.ComplexList {
  public internalValue? : OrgVdcMetadataEntry[] | cdktf.IResolvable

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
  public get(index: number): OrgVdcMetadataEntryOutputReference {
    return new OrgVdcMetadataEntryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrgVdcStorageProfile {
  /**
  * True if this is default storage profile for this VDC. The default storage profile is used when an object that can specify a storage profile is created with no storage profile specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#default OrgVdc#default}
  */
  readonly default: boolean | cdktf.IResolvable;
  /**
  * True if this storage profile is enabled for use in the VDC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#enabled OrgVdc#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of MB allocated for this storage profile. A value of 0 specifies unlimited MB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#limit OrgVdc#limit}
  */
  readonly limit: number;
  /**
  * Name of Provider VDC storage profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#name OrgVdc#name}
  */
  readonly name: string;
}

export function orgVdcStorageProfileToTerraform(struct?: OrgVdcStorageProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.booleanToTerraform(struct!.default),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    limit: cdktf.numberToTerraform(struct!.limit),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function orgVdcStorageProfileToHclTerraform(struct?: OrgVdcStorageProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgVdcStorageProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrgVdcStorageProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgVdcStorageProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._enabled = undefined;
      this._limit = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._enabled = value.enabled;
      this._limit = value.limit;
      this._name = value.name;
    }
  }

  // default - computed: false, optional: false, required: true
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // storage_used_in_mb - computed: true, optional: false, required: false
  public get storageUsedInMb() {
    return this.getNumberAttribute('storage_used_in_mb');
  }
}

export class OrgVdcStorageProfileList extends cdktf.ComplexList {
  public internalValue? : OrgVdcStorageProfile[] | cdktf.IResolvable

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
  public get(index: number): OrgVdcStorageProfileOutputReference {
    return new OrgVdcStorageProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc vcd_org_vdc}
*/
export class OrgVdc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_org_vdc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgVdc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgVdc to import
  * @param importFromId The id of the existing OrgVdc that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgVdc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_org_vdc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_vdc vcd_org_vdc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgVdcConfig
  */
  public constructor(scope: Construct, id: string, config: OrgVdcConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_org_vdc',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allocationModel = config.allocationModel;
    this._allowOverCommit = config.allowOverCommit;
    this._cpuGuaranteed = config.cpuGuaranteed;
    this._cpuSpeed = config.cpuSpeed;
    this._defaultComputePolicyId = config.defaultComputePolicyId;
    this._defaultVmSizingPolicyId = config.defaultVmSizingPolicyId;
    this._deleteForce = config.deleteForce;
    this._deleteRecursive = config.deleteRecursive;
    this._description = config.description;
    this._edgeClusterId = config.edgeClusterId;
    this._elasticity = config.elasticity;
    this._enableFastProvisioning = config.enableFastProvisioning;
    this._enableNsxvDistributedFirewall = config.enableNsxvDistributedFirewall;
    this._enableThinProvisioning = config.enableThinProvisioning;
    this._enableVmDiscovery = config.enableVmDiscovery;
    this._enabled = config.enabled;
    this._id = config.id;
    this._includeVmMemoryOverhead = config.includeVmMemoryOverhead;
    this._memoryGuaranteed = config.memoryGuaranteed;
    this._metadata = config.metadata;
    this._name = config.name;
    this._networkPoolName = config.networkPoolName;
    this._networkQuota = config.networkQuota;
    this._nicQuota = config.nicQuota;
    this._org = config.org;
    this._providerVdcName = config.providerVdcName;
    this._vmPlacementPolicyIds = config.vmPlacementPolicyIds;
    this._vmQuota = config.vmQuota;
    this._vmSizingPolicyIds = config.vmSizingPolicyIds;
    this._vmVgpuPolicyIds = config.vmVgpuPolicyIds;
    this._computeCapacity.internalValue = config.computeCapacity;
    this._metadataEntry.internalValue = config.metadataEntry;
    this._storageProfile.internalValue = config.storageProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocation_model - computed: false, optional: false, required: true
  private _allocationModel?: string; 
  public get allocationModel() {
    return this.getStringAttribute('allocation_model');
  }
  public set allocationModel(value: string) {
    this._allocationModel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationModelInput() {
    return this._allocationModel;
  }

  // allow_over_commit - computed: true, optional: true, required: false
  private _allowOverCommit?: boolean | cdktf.IResolvable; 
  public get allowOverCommit() {
    return this.getBooleanAttribute('allow_over_commit');
  }
  public set allowOverCommit(value: boolean | cdktf.IResolvable) {
    this._allowOverCommit = value;
  }
  public resetAllowOverCommit() {
    this._allowOverCommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOverCommitInput() {
    return this._allowOverCommit;
  }

  // cpu_guaranteed - computed: true, optional: true, required: false
  private _cpuGuaranteed?: number; 
  public get cpuGuaranteed() {
    return this.getNumberAttribute('cpu_guaranteed');
  }
  public set cpuGuaranteed(value: number) {
    this._cpuGuaranteed = value;
  }
  public resetCpuGuaranteed() {
    this._cpuGuaranteed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuGuaranteedInput() {
    return this._cpuGuaranteed;
  }

  // cpu_speed - computed: true, optional: true, required: false
  private _cpuSpeed?: number; 
  public get cpuSpeed() {
    return this.getNumberAttribute('cpu_speed');
  }
  public set cpuSpeed(value: number) {
    this._cpuSpeed = value;
  }
  public resetCpuSpeed() {
    this._cpuSpeed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSpeedInput() {
    return this._cpuSpeed;
  }

  // default_compute_policy_id - computed: true, optional: true, required: false
  private _defaultComputePolicyId?: string; 
  public get defaultComputePolicyId() {
    return this.getStringAttribute('default_compute_policy_id');
  }
  public set defaultComputePolicyId(value: string) {
    this._defaultComputePolicyId = value;
  }
  public resetDefaultComputePolicyId() {
    this._defaultComputePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultComputePolicyIdInput() {
    return this._defaultComputePolicyId;
  }

  // default_vm_sizing_policy_id - computed: true, optional: true, required: false
  private _defaultVmSizingPolicyId?: string; 
  public get defaultVmSizingPolicyId() {
    return this.getStringAttribute('default_vm_sizing_policy_id');
  }
  public set defaultVmSizingPolicyId(value: string) {
    this._defaultVmSizingPolicyId = value;
  }
  public resetDefaultVmSizingPolicyId() {
    this._defaultVmSizingPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVmSizingPolicyIdInput() {
    return this._defaultVmSizingPolicyId;
  }

  // delete_force - computed: false, optional: true, required: false
  private _deleteForce?: boolean | cdktf.IResolvable; 
  public get deleteForce() {
    return this.getBooleanAttribute('delete_force');
  }
  public set deleteForce(value: boolean | cdktf.IResolvable) {
    this._deleteForce = value;
  }
  public resetDeleteForce() {
    this._deleteForce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteForceInput() {
    return this._deleteForce;
  }

  // delete_recursive - computed: false, optional: true, required: false
  private _deleteRecursive?: boolean | cdktf.IResolvable; 
  public get deleteRecursive() {
    return this.getBooleanAttribute('delete_recursive');
  }
  public set deleteRecursive(value: boolean | cdktf.IResolvable) {
    this._deleteRecursive = value;
  }
  public resetDeleteRecursive() {
    this._deleteRecursive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteRecursiveInput() {
    return this._deleteRecursive;
  }

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

  // edge_cluster_id - computed: true, optional: true, required: false
  private _edgeClusterId?: string; 
  public get edgeClusterId() {
    return this.getStringAttribute('edge_cluster_id');
  }
  public set edgeClusterId(value: string) {
    this._edgeClusterId = value;
  }
  public resetEdgeClusterId() {
    this._edgeClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeClusterIdInput() {
    return this._edgeClusterId;
  }

  // elasticity - computed: true, optional: true, required: false
  private _elasticity?: boolean | cdktf.IResolvable; 
  public get elasticity() {
    return this.getBooleanAttribute('elasticity');
  }
  public set elasticity(value: boolean | cdktf.IResolvable) {
    this._elasticity = value;
  }
  public resetElasticity() {
    this._elasticity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticityInput() {
    return this._elasticity;
  }

  // enable_fast_provisioning - computed: false, optional: true, required: false
  private _enableFastProvisioning?: boolean | cdktf.IResolvable; 
  public get enableFastProvisioning() {
    return this.getBooleanAttribute('enable_fast_provisioning');
  }
  public set enableFastProvisioning(value: boolean | cdktf.IResolvable) {
    this._enableFastProvisioning = value;
  }
  public resetEnableFastProvisioning() {
    this._enableFastProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFastProvisioningInput() {
    return this._enableFastProvisioning;
  }

  // enable_nsxv_distributed_firewall - computed: true, optional: true, required: false
  private _enableNsxvDistributedFirewall?: boolean | cdktf.IResolvable; 
  public get enableNsxvDistributedFirewall() {
    return this.getBooleanAttribute('enable_nsxv_distributed_firewall');
  }
  public set enableNsxvDistributedFirewall(value: boolean | cdktf.IResolvable) {
    this._enableNsxvDistributedFirewall = value;
  }
  public resetEnableNsxvDistributedFirewall() {
    this._enableNsxvDistributedFirewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableNsxvDistributedFirewallInput() {
    return this._enableNsxvDistributedFirewall;
  }

  // enable_thin_provisioning - computed: false, optional: true, required: false
  private _enableThinProvisioning?: boolean | cdktf.IResolvable; 
  public get enableThinProvisioning() {
    return this.getBooleanAttribute('enable_thin_provisioning');
  }
  public set enableThinProvisioning(value: boolean | cdktf.IResolvable) {
    this._enableThinProvisioning = value;
  }
  public resetEnableThinProvisioning() {
    this._enableThinProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableThinProvisioningInput() {
    return this._enableThinProvisioning;
  }

  // enable_vm_discovery - computed: false, optional: true, required: false
  private _enableVmDiscovery?: boolean | cdktf.IResolvable; 
  public get enableVmDiscovery() {
    return this.getBooleanAttribute('enable_vm_discovery');
  }
  public set enableVmDiscovery(value: boolean | cdktf.IResolvable) {
    this._enableVmDiscovery = value;
  }
  public resetEnableVmDiscovery() {
    this._enableVmDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVmDiscoveryInput() {
    return this._enableVmDiscovery;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // include_vm_memory_overhead - computed: true, optional: true, required: false
  private _includeVmMemoryOverhead?: boolean | cdktf.IResolvable; 
  public get includeVmMemoryOverhead() {
    return this.getBooleanAttribute('include_vm_memory_overhead');
  }
  public set includeVmMemoryOverhead(value: boolean | cdktf.IResolvable) {
    this._includeVmMemoryOverhead = value;
  }
  public resetIncludeVmMemoryOverhead() {
    this._includeVmMemoryOverhead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeVmMemoryOverheadInput() {
    return this._includeVmMemoryOverhead;
  }

  // memory_guaranteed - computed: true, optional: true, required: false
  private _memoryGuaranteed?: number; 
  public get memoryGuaranteed() {
    return this.getNumberAttribute('memory_guaranteed');
  }
  public set memoryGuaranteed(value: number) {
    this._memoryGuaranteed = value;
  }
  public resetMemoryGuaranteed() {
    this._memoryGuaranteed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryGuaranteedInput() {
    return this._memoryGuaranteed;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // network_pool_name - computed: false, optional: true, required: false
  private _networkPoolName?: string; 
  public get networkPoolName() {
    return this.getStringAttribute('network_pool_name');
  }
  public set networkPoolName(value: string) {
    this._networkPoolName = value;
  }
  public resetNetworkPoolName() {
    this._networkPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPoolNameInput() {
    return this._networkPoolName;
  }

  // network_quota - computed: false, optional: true, required: false
  private _networkQuota?: number; 
  public get networkQuota() {
    return this.getNumberAttribute('network_quota');
  }
  public set networkQuota(value: number) {
    this._networkQuota = value;
  }
  public resetNetworkQuota() {
    this._networkQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkQuotaInput() {
    return this._networkQuota;
  }

  // nic_quota - computed: false, optional: true, required: false
  private _nicQuota?: number; 
  public get nicQuota() {
    return this.getNumberAttribute('nic_quota');
  }
  public set nicQuota(value: number) {
    this._nicQuota = value;
  }
  public resetNicQuota() {
    this._nicQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicQuotaInput() {
    return this._nicQuota;
  }

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // provider_vdc_name - computed: false, optional: false, required: true
  private _providerVdcName?: string; 
  public get providerVdcName() {
    return this.getStringAttribute('provider_vdc_name');
  }
  public set providerVdcName(value: string) {
    this._providerVdcName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerVdcNameInput() {
    return this._providerVdcName;
  }

  // vm_placement_policy_ids - computed: true, optional: true, required: false
  private _vmPlacementPolicyIds?: string[]; 
  public get vmPlacementPolicyIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vm_placement_policy_ids'));
  }
  public set vmPlacementPolicyIds(value: string[]) {
    this._vmPlacementPolicyIds = value;
  }
  public resetVmPlacementPolicyIds() {
    this._vmPlacementPolicyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmPlacementPolicyIdsInput() {
    return this._vmPlacementPolicyIds;
  }

  // vm_quota - computed: false, optional: true, required: false
  private _vmQuota?: number; 
  public get vmQuota() {
    return this.getNumberAttribute('vm_quota');
  }
  public set vmQuota(value: number) {
    this._vmQuota = value;
  }
  public resetVmQuota() {
    this._vmQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmQuotaInput() {
    return this._vmQuota;
  }

  // vm_sizing_policy_ids - computed: true, optional: true, required: false
  private _vmSizingPolicyIds?: string[]; 
  public get vmSizingPolicyIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vm_sizing_policy_ids'));
  }
  public set vmSizingPolicyIds(value: string[]) {
    this._vmSizingPolicyIds = value;
  }
  public resetVmSizingPolicyIds() {
    this._vmSizingPolicyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizingPolicyIdsInput() {
    return this._vmSizingPolicyIds;
  }

  // vm_vgpu_policy_ids - computed: true, optional: true, required: false
  private _vmVgpuPolicyIds?: string[]; 
  public get vmVgpuPolicyIds() {
    return cdktf.Fn.tolist(this.getListAttribute('vm_vgpu_policy_ids'));
  }
  public set vmVgpuPolicyIds(value: string[]) {
    this._vmVgpuPolicyIds = value;
  }
  public resetVmVgpuPolicyIds() {
    this._vmVgpuPolicyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmVgpuPolicyIdsInput() {
    return this._vmVgpuPolicyIds;
  }

  // compute_capacity - computed: false, optional: false, required: true
  private _computeCapacity = new OrgVdcComputeCapacityOutputReference(this, "compute_capacity");
  public get computeCapacity() {
    return this._computeCapacity;
  }
  public putComputeCapacity(value: OrgVdcComputeCapacity) {
    this._computeCapacity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeCapacityInput() {
    return this._computeCapacity.internalValue;
  }

  // metadata_entry - computed: false, optional: true, required: false
  private _metadataEntry = new OrgVdcMetadataEntryList(this, "metadata_entry", true);
  public get metadataEntry() {
    return this._metadataEntry;
  }
  public putMetadataEntry(value: OrgVdcMetadataEntry[] | cdktf.IResolvable) {
    this._metadataEntry.internalValue = value;
  }
  public resetMetadataEntry() {
    this._metadataEntry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataEntryInput() {
    return this._metadataEntry.internalValue;
  }

  // storage_profile - computed: false, optional: false, required: true
  private _storageProfile = new OrgVdcStorageProfileList(this, "storage_profile", true);
  public get storageProfile() {
    return this._storageProfile;
  }
  public putStorageProfile(value: OrgVdcStorageProfile[] | cdktf.IResolvable) {
    this._storageProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageProfileInput() {
    return this._storageProfile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allocation_model: cdktf.stringToTerraform(this._allocationModel),
      allow_over_commit: cdktf.booleanToTerraform(this._allowOverCommit),
      cpu_guaranteed: cdktf.numberToTerraform(this._cpuGuaranteed),
      cpu_speed: cdktf.numberToTerraform(this._cpuSpeed),
      default_compute_policy_id: cdktf.stringToTerraform(this._defaultComputePolicyId),
      default_vm_sizing_policy_id: cdktf.stringToTerraform(this._defaultVmSizingPolicyId),
      delete_force: cdktf.booleanToTerraform(this._deleteForce),
      delete_recursive: cdktf.booleanToTerraform(this._deleteRecursive),
      description: cdktf.stringToTerraform(this._description),
      edge_cluster_id: cdktf.stringToTerraform(this._edgeClusterId),
      elasticity: cdktf.booleanToTerraform(this._elasticity),
      enable_fast_provisioning: cdktf.booleanToTerraform(this._enableFastProvisioning),
      enable_nsxv_distributed_firewall: cdktf.booleanToTerraform(this._enableNsxvDistributedFirewall),
      enable_thin_provisioning: cdktf.booleanToTerraform(this._enableThinProvisioning),
      enable_vm_discovery: cdktf.booleanToTerraform(this._enableVmDiscovery),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      include_vm_memory_overhead: cdktf.booleanToTerraform(this._includeVmMemoryOverhead),
      memory_guaranteed: cdktf.numberToTerraform(this._memoryGuaranteed),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      network_pool_name: cdktf.stringToTerraform(this._networkPoolName),
      network_quota: cdktf.numberToTerraform(this._networkQuota),
      nic_quota: cdktf.numberToTerraform(this._nicQuota),
      org: cdktf.stringToTerraform(this._org),
      provider_vdc_name: cdktf.stringToTerraform(this._providerVdcName),
      vm_placement_policy_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vmPlacementPolicyIds),
      vm_quota: cdktf.numberToTerraform(this._vmQuota),
      vm_sizing_policy_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vmSizingPolicyIds),
      vm_vgpu_policy_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vmVgpuPolicyIds),
      compute_capacity: orgVdcComputeCapacityToTerraform(this._computeCapacity.internalValue),
      metadata_entry: cdktf.listMapper(orgVdcMetadataEntryToTerraform, true)(this._metadataEntry.internalValue),
      storage_profile: cdktf.listMapper(orgVdcStorageProfileToTerraform, true)(this._storageProfile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocation_model: {
        value: cdktf.stringToHclTerraform(this._allocationModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_over_commit: {
        value: cdktf.booleanToHclTerraform(this._allowOverCommit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cpu_guaranteed: {
        value: cdktf.numberToHclTerraform(this._cpuGuaranteed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_speed: {
        value: cdktf.numberToHclTerraform(this._cpuSpeed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_compute_policy_id: {
        value: cdktf.stringToHclTerraform(this._defaultComputePolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_vm_sizing_policy_id: {
        value: cdktf.stringToHclTerraform(this._defaultVmSizingPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_force: {
        value: cdktf.booleanToHclTerraform(this._deleteForce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delete_recursive: {
        value: cdktf.booleanToHclTerraform(this._deleteRecursive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_cluster_id: {
        value: cdktf.stringToHclTerraform(this._edgeClusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elasticity: {
        value: cdktf.booleanToHclTerraform(this._elasticity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_fast_provisioning: {
        value: cdktf.booleanToHclTerraform(this._enableFastProvisioning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_nsxv_distributed_firewall: {
        value: cdktf.booleanToHclTerraform(this._enableNsxvDistributedFirewall),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_thin_provisioning: {
        value: cdktf.booleanToHclTerraform(this._enableThinProvisioning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_vm_discovery: {
        value: cdktf.booleanToHclTerraform(this._enableVmDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_vm_memory_overhead: {
        value: cdktf.booleanToHclTerraform(this._includeVmMemoryOverhead),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      memory_guaranteed: {
        value: cdktf.numberToHclTerraform(this._memoryGuaranteed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_pool_name: {
        value: cdktf.stringToHclTerraform(this._networkPoolName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_quota: {
        value: cdktf.numberToHclTerraform(this._networkQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nic_quota: {
        value: cdktf.numberToHclTerraform(this._nicQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_vdc_name: {
        value: cdktf.stringToHclTerraform(this._providerVdcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm_placement_policy_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vmPlacementPolicyIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vm_quota: {
        value: cdktf.numberToHclTerraform(this._vmQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vm_sizing_policy_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vmSizingPolicyIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vm_vgpu_policy_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vmVgpuPolicyIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      compute_capacity: {
        value: orgVdcComputeCapacityToHclTerraform(this._computeCapacity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OrgVdcComputeCapacityList",
      },
      metadata_entry: {
        value: cdktf.listMapperHcl(orgVdcMetadataEntryToHclTerraform, true)(this._metadataEntry.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrgVdcMetadataEntryList",
      },
      storage_profile: {
        value: cdktf.listMapperHcl(orgVdcStorageProfileToHclTerraform, true)(this._storageProfile.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrgVdcStorageProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
