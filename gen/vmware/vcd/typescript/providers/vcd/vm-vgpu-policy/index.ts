// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmVgpuPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the vGPU policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy#description VmVgpuPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy#id VmVgpuPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique name of the vGPU policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy#name VmVgpuPolicy#name}
  */
  readonly name: string;
  /**
  * cpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy#cpu VmVgpuPolicy#cpu}
  */
  readonly cpu?: VmVgpuPolicyCpu;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy#memory VmVgpuPolicy#memory}
  */
  readonly memory?: VmVgpuPolicyMemory;
  /**
  * provider_vdc_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy#provider_vdc_scope VmVgpuPolicy#provider_vdc_scope}
  */
  readonly providerVdcScope?: VmVgpuPolicyProviderVdcScope[] | cdktf.IResolvable;
  /**
  * vgpu_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy#vgpu_profile VmVgpuPolicy#vgpu_profile}
  */
  readonly vgpuProfile: VmVgpuPolicyVgpuProfile;
}
export interface VmVgpuPolicyCpu {
  /**
  * The number of cores per socket for a VM. This is a VM hardware configuration. The number of vCPUs that is defined in the VM sizing policy must be divisible by the number of cores per socket. If the number of vCPUs is not divisible by the number of cores per socket, the number of cores per socket becomes invalid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy#cores_per_socket VmVgpuPolicy#cores_per_socket}
  */
  readonly coresPerSocket?: string;
  /**
  * Defines the number of vCPUs configured for a VM. This is a VM hardware configuration. When a tenant assigns the VM sizing policy to a VM, this count becomes the configured number of vCPUs for the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy#count VmVgpuPolicy#count}
  */
  readonly count?: string;
  /**
  * Defines the CPU limit in MHz for a VM. If not defined in the VDC compute policy, CPU limit is equal to the vCPU speed multiplied by the number of vCPUs. -1 means unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy#limit_in_mhz VmVgpuPolicy#limit_in_mhz}
  */
  readonly limitInMhz?: string;
  /**
  * Defines how much of the CPU resources of a VM are reserved. The allocated CPU for a VM equals the number of vCPUs times the vCPU speed in MHz. The value of the attribute ranges between 0 and one. Value of 0 CPU reservation guarantee defines no CPU reservation. Value of 1 defines 100% of CPU reserved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy#reservation_guarantee VmVgpuPolicy#reservation_guarantee}
  */
  readonly reservationGuarantee?: string;
  /**
  * Defines the number of CPU shares for a VM. Shares specify the relative importance of a VM within a virtual data center. If a VM has twice as many shares of CPU as another VM, it is entitled to consume twice as much CPU when these two virtual machines are competing for resources. If not defined in the VDC compute policy, normal shares are applied to the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy#shares VmVgpuPolicy#shares}
  */
  readonly shares?: string;
  /**
  * Defines the vCPU speed of a core in MHz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy#speed_in_mhz VmVgpuPolicy#speed_in_mhz}
  */
  readonly speedInMhz?: string;
}

export function vmVgpuPolicyCpuToTerraform(struct?: VmVgpuPolicyCpuOutputReference | VmVgpuPolicyCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cores_per_socket: cdktf.stringToTerraform(struct!.coresPerSocket),
    count: cdktf.stringToTerraform(struct!.count),
    limit_in_mhz: cdktf.stringToTerraform(struct!.limitInMhz),
    reservation_guarantee: cdktf.stringToTerraform(struct!.reservationGuarantee),
    shares: cdktf.stringToTerraform(struct!.shares),
    speed_in_mhz: cdktf.stringToTerraform(struct!.speedInMhz),
  }
}


export function vmVgpuPolicyCpuToHclTerraform(struct?: VmVgpuPolicyCpuOutputReference | VmVgpuPolicyCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cores_per_socket: {
      value: cdktf.stringToHclTerraform(struct!.coresPerSocket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit_in_mhz: {
      value: cdktf.stringToHclTerraform(struct!.limitInMhz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reservation_guarantee: {
      value: cdktf.stringToHclTerraform(struct!.reservationGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shares: {
      value: cdktf.stringToHclTerraform(struct!.shares),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    speed_in_mhz: {
      value: cdktf.stringToHclTerraform(struct!.speedInMhz),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmVgpuPolicyCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmVgpuPolicyCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coresPerSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.coresPerSocket = this._coresPerSocket;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._limitInMhz !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitInMhz = this._limitInMhz;
    }
    if (this._reservationGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationGuarantee = this._reservationGuarantee;
    }
    if (this._shares !== undefined) {
      hasAnyValues = true;
      internalValueResult.shares = this._shares;
    }
    if (this._speedInMhz !== undefined) {
      hasAnyValues = true;
      internalValueResult.speedInMhz = this._speedInMhz;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmVgpuPolicyCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coresPerSocket = undefined;
      this._count = undefined;
      this._limitInMhz = undefined;
      this._reservationGuarantee = undefined;
      this._shares = undefined;
      this._speedInMhz = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coresPerSocket = value.coresPerSocket;
      this._count = value.count;
      this._limitInMhz = value.limitInMhz;
      this._reservationGuarantee = value.reservationGuarantee;
      this._shares = value.shares;
      this._speedInMhz = value.speedInMhz;
    }
  }

  // cores_per_socket - computed: false, optional: true, required: false
  private _coresPerSocket?: string; 
  public get coresPerSocket() {
    return this.getStringAttribute('cores_per_socket');
  }
  public set coresPerSocket(value: string) {
    this._coresPerSocket = value;
  }
  public resetCoresPerSocket() {
    this._coresPerSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coresPerSocketInput() {
    return this._coresPerSocket;
  }

  // count - computed: false, optional: true, required: false
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // limit_in_mhz - computed: false, optional: true, required: false
  private _limitInMhz?: string; 
  public get limitInMhz() {
    return this.getStringAttribute('limit_in_mhz');
  }
  public set limitInMhz(value: string) {
    this._limitInMhz = value;
  }
  public resetLimitInMhz() {
    this._limitInMhz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInMhzInput() {
    return this._limitInMhz;
  }

  // reservation_guarantee - computed: false, optional: true, required: false
  private _reservationGuarantee?: string; 
  public get reservationGuarantee() {
    return this.getStringAttribute('reservation_guarantee');
  }
  public set reservationGuarantee(value: string) {
    this._reservationGuarantee = value;
  }
  public resetReservationGuarantee() {
    this._reservationGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationGuaranteeInput() {
    return this._reservationGuarantee;
  }

  // shares - computed: false, optional: true, required: false
  private _shares?: string; 
  public get shares() {
    return this.getStringAttribute('shares');
  }
  public set shares(value: string) {
    this._shares = value;
  }
  public resetShares() {
    this._shares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharesInput() {
    return this._shares;
  }

  // speed_in_mhz - computed: false, optional: true, required: false
  private _speedInMhz?: string; 
  public get speedInMhz() {
    return this.getStringAttribute('speed_in_mhz');
  }
  public set speedInMhz(value: string) {
    this._speedInMhz = value;
  }
  public resetSpeedInMhz() {
    this._speedInMhz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInMhzInput() {
    return this._speedInMhz;
  }
}
export interface VmVgpuPolicyMemory {
  /**
  * Defines the memory limit in MB for a VM. If not defined in the VM sizing policy, memory limit is equal to the allocated memory for the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy#limit_in_mb VmVgpuPolicy#limit_in_mb}
  */
  readonly limitInMb?: string;
  /**
  * Defines the reserved amount of memory that is configured for a VM. The value of the attribute ranges between 0 and one. Value of 0 memory reservation guarantee defines no memory reservation. Value of 1 defines 100% of memory reserved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy#reservation_guarantee VmVgpuPolicy#reservation_guarantee}
  */
  readonly reservationGuarantee?: string;
  /**
  * Defines the number of memory shares for a VM. Shares specify the relative importance of a VM within a virtual data center. If a VM has twice as many shares of memory as another VM, it is entitled to consume twice as much memory when these two virtual machines are competing for resources. If not defined in the VDC compute policy, normal shares are applied to the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy#shares VmVgpuPolicy#shares}
  */
  readonly shares?: string;
  /**
  * Defines the memory configured for a VM in MB. This is a VM hardware configuration. When a tenant assigns the VM sizing policy to a VM, the VM receives the amount of memory defined by this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy#size_in_mb VmVgpuPolicy#size_in_mb}
  */
  readonly sizeInMb?: string;
}

export function vmVgpuPolicyMemoryToTerraform(struct?: VmVgpuPolicyMemoryOutputReference | VmVgpuPolicyMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit_in_mb: cdktf.stringToTerraform(struct!.limitInMb),
    reservation_guarantee: cdktf.stringToTerraform(struct!.reservationGuarantee),
    shares: cdktf.stringToTerraform(struct!.shares),
    size_in_mb: cdktf.stringToTerraform(struct!.sizeInMb),
  }
}


export function vmVgpuPolicyMemoryToHclTerraform(struct?: VmVgpuPolicyMemoryOutputReference | VmVgpuPolicyMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit_in_mb: {
      value: cdktf.stringToHclTerraform(struct!.limitInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reservation_guarantee: {
      value: cdktf.stringToHclTerraform(struct!.reservationGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shares: {
      value: cdktf.stringToHclTerraform(struct!.shares),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_in_mb: {
      value: cdktf.stringToHclTerraform(struct!.sizeInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmVgpuPolicyMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmVgpuPolicyMemory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limitInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitInMb = this._limitInMb;
    }
    if (this._reservationGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservationGuarantee = this._reservationGuarantee;
    }
    if (this._shares !== undefined) {
      hasAnyValues = true;
      internalValueResult.shares = this._shares;
    }
    if (this._sizeInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeInMb = this._sizeInMb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmVgpuPolicyMemory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limitInMb = undefined;
      this._reservationGuarantee = undefined;
      this._shares = undefined;
      this._sizeInMb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limitInMb = value.limitInMb;
      this._reservationGuarantee = value.reservationGuarantee;
      this._shares = value.shares;
      this._sizeInMb = value.sizeInMb;
    }
  }

  // limit_in_mb - computed: false, optional: true, required: false
  private _limitInMb?: string; 
  public get limitInMb() {
    return this.getStringAttribute('limit_in_mb');
  }
  public set limitInMb(value: string) {
    this._limitInMb = value;
  }
  public resetLimitInMb() {
    this._limitInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInMbInput() {
    return this._limitInMb;
  }

  // reservation_guarantee - computed: false, optional: true, required: false
  private _reservationGuarantee?: string; 
  public get reservationGuarantee() {
    return this.getStringAttribute('reservation_guarantee');
  }
  public set reservationGuarantee(value: string) {
    this._reservationGuarantee = value;
  }
  public resetReservationGuarantee() {
    this._reservationGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservationGuaranteeInput() {
    return this._reservationGuarantee;
  }

  // shares - computed: false, optional: true, required: false
  private _shares?: string; 
  public get shares() {
    return this.getStringAttribute('shares');
  }
  public set shares(value: string) {
    this._shares = value;
  }
  public resetShares() {
    this._shares = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharesInput() {
    return this._shares;
  }

  // size_in_mb - computed: false, optional: true, required: false
  private _sizeInMb?: string; 
  public get sizeInMb() {
    return this.getStringAttribute('size_in_mb');
  }
  public set sizeInMb(value: string) {
    this._sizeInMb = value;
  }
  public resetSizeInMb() {
    this._sizeInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInMbInput() {
    return this._sizeInMb;
  }
}
export interface VmVgpuPolicyProviderVdcScope {
  /**
  * Set of cluster names within the provider virtual data center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy#cluster_names VmVgpuPolicy#cluster_names}
  */
  readonly clusterNames?: string[];
  /**
  * Identifier for the provider virtual data center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy#provider_vdc_id VmVgpuPolicy#provider_vdc_id}
  */
  readonly providerVdcId: string;
  /**
  * Optional identifier for a VM group within the provider VDC scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy#vm_group_id VmVgpuPolicy#vm_group_id}
  */
  readonly vmGroupId?: string;
}

export function vmVgpuPolicyProviderVdcScopeToTerraform(struct?: VmVgpuPolicyProviderVdcScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterNames),
    provider_vdc_id: cdktf.stringToTerraform(struct!.providerVdcId),
    vm_group_id: cdktf.stringToTerraform(struct!.vmGroupId),
  }
}


export function vmVgpuPolicyProviderVdcScopeToHclTerraform(struct?: VmVgpuPolicyProviderVdcScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    provider_vdc_id: {
      value: cdktf.stringToHclTerraform(struct!.providerVdcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_group_id: {
      value: cdktf.stringToHclTerraform(struct!.vmGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmVgpuPolicyProviderVdcScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VmVgpuPolicyProviderVdcScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNames = this._clusterNames;
    }
    if (this._providerVdcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerVdcId = this._providerVdcId;
    }
    if (this._vmGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmGroupId = this._vmGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmVgpuPolicyProviderVdcScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterNames = undefined;
      this._providerVdcId = undefined;
      this._vmGroupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterNames = value.clusterNames;
      this._providerVdcId = value.providerVdcId;
      this._vmGroupId = value.vmGroupId;
    }
  }

  // cluster_names - computed: false, optional: true, required: false
  private _clusterNames?: string[]; 
  public get clusterNames() {
    return cdktf.Fn.tolist(this.getListAttribute('cluster_names'));
  }
  public set clusterNames(value: string[]) {
    this._clusterNames = value;
  }
  public resetClusterNames() {
    this._clusterNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNamesInput() {
    return this._clusterNames;
  }

  // provider_vdc_id - computed: false, optional: false, required: true
  private _providerVdcId?: string; 
  public get providerVdcId() {
    return this.getStringAttribute('provider_vdc_id');
  }
  public set providerVdcId(value: string) {
    this._providerVdcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerVdcIdInput() {
    return this._providerVdcId;
  }

  // vm_group_id - computed: false, optional: true, required: false
  private _vmGroupId?: string; 
  public get vmGroupId() {
    return this.getStringAttribute('vm_group_id');
  }
  public set vmGroupId(value: string) {
    this._vmGroupId = value;
  }
  public resetVmGroupId() {
    this._vmGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmGroupIdInput() {
    return this._vmGroupId;
  }
}

export class VmVgpuPolicyProviderVdcScopeList extends cdktf.ComplexList {
  public internalValue? : VmVgpuPolicyProviderVdcScope[] | cdktf.IResolvable

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
  public get(index: number): VmVgpuPolicyProviderVdcScopeOutputReference {
    return new VmVgpuPolicyProviderVdcScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VmVgpuPolicyVgpuProfile {
  /**
  * Specifies the number of vGPU profiles. Must be at least 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy#count VmVgpuPolicy#count}
  */
  readonly count: number;
  /**
  * The identifier of the vGPU profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy#id VmVgpuPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function vmVgpuPolicyVgpuProfileToTerraform(struct?: VmVgpuPolicyVgpuProfileOutputReference | VmVgpuPolicyVgpuProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function vmVgpuPolicyVgpuProfileToHclTerraform(struct?: VmVgpuPolicyVgpuProfileOutputReference | VmVgpuPolicyVgpuProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VmVgpuPolicyVgpuProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmVgpuPolicyVgpuProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VmVgpuPolicyVgpuProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._id = value.id;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy vcd_vm_vgpu_policy}
*/
export class VmVgpuPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_vm_vgpu_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmVgpuPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmVgpuPolicy to import
  * @param importFromId The id of the existing VmVgpuPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmVgpuPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_vm_vgpu_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_vgpu_policy vcd_vm_vgpu_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmVgpuPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: VmVgpuPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_vm_vgpu_policy',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
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
    this._name = config.name;
    this._cpu.internalValue = config.cpu;
    this._memory.internalValue = config.memory;
    this._providerVdcScope.internalValue = config.providerVdcScope;
    this._vgpuProfile.internalValue = config.vgpuProfile;
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

  // cpu - computed: false, optional: true, required: false
  private _cpu = new VmVgpuPolicyCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: VmVgpuPolicyCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new VmVgpuPolicyMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: VmVgpuPolicyMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // provider_vdc_scope - computed: false, optional: true, required: false
  private _providerVdcScope = new VmVgpuPolicyProviderVdcScopeList(this, "provider_vdc_scope", true);
  public get providerVdcScope() {
    return this._providerVdcScope;
  }
  public putProviderVdcScope(value: VmVgpuPolicyProviderVdcScope[] | cdktf.IResolvable) {
    this._providerVdcScope.internalValue = value;
  }
  public resetProviderVdcScope() {
    this._providerVdcScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerVdcScopeInput() {
    return this._providerVdcScope.internalValue;
  }

  // vgpu_profile - computed: false, optional: false, required: true
  private _vgpuProfile = new VmVgpuPolicyVgpuProfileOutputReference(this, "vgpu_profile");
  public get vgpuProfile() {
    return this._vgpuProfile;
  }
  public putVgpuProfile(value: VmVgpuPolicyVgpuProfile) {
    this._vgpuProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vgpuProfileInput() {
    return this._vgpuProfile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      cpu: vmVgpuPolicyCpuToTerraform(this._cpu.internalValue),
      memory: vmVgpuPolicyMemoryToTerraform(this._memory.internalValue),
      provider_vdc_scope: cdktf.listMapper(vmVgpuPolicyProviderVdcScopeToTerraform, true)(this._providerVdcScope.internalValue),
      vgpu_profile: vmVgpuPolicyVgpuProfileToTerraform(this._vgpuProfile.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu: {
        value: vmVgpuPolicyCpuToHclTerraform(this._cpu.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmVgpuPolicyCpuList",
      },
      memory: {
        value: vmVgpuPolicyMemoryToHclTerraform(this._memory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmVgpuPolicyMemoryList",
      },
      provider_vdc_scope: {
        value: cdktf.listMapperHcl(vmVgpuPolicyProviderVdcScopeToHclTerraform, true)(this._providerVdcScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "VmVgpuPolicyProviderVdcScopeList",
      },
      vgpu_profile: {
        value: vmVgpuPolicyVgpuProfileToHclTerraform(this._vgpuProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmVgpuPolicyVgpuProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
