// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_sizing_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VmSizingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_sizing_policy#description VmSizingPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_sizing_policy#id VmSizingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_sizing_policy#name VmSizingPolicy#name}
  */
  readonly name: string;
  /**
  * The name of organization to use - Deprecated and unneeded: will be ignored if used 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_sizing_policy#org VmSizingPolicy#org}
  */
  readonly org?: string;
  /**
  * cpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_sizing_policy#cpu VmSizingPolicy#cpu}
  */
  readonly cpu?: VmSizingPolicyCpu;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_sizing_policy#memory VmSizingPolicy#memory}
  */
  readonly memory?: VmSizingPolicyMemory;
}
export interface VmSizingPolicyCpu {
  /**
  * The number of cores per socket for a VM. This is a VM hardware configuration. The number of vCPUs that is defined in the VM sizing policy must be divisible by the number of cores per socket. If the number of vCPUs is not divisible by the number of cores per socket, the number of cores per socket becomes invalid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_sizing_policy#cores_per_socket VmSizingPolicy#cores_per_socket}
  */
  readonly coresPerSocket?: string;
  /**
  * Defines the number of vCPUs configured for a VM. This is a VM hardware configuration. When a tenant assigns the VM sizing policy to a VM, this count becomes the configured number of vCPUs for the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_sizing_policy#count VmSizingPolicy#count}
  */
  readonly count?: string;
  /**
  * Defines the CPU limit in MHz for a VM. If not defined in the VDC compute policy, CPU limit is equal to the vCPU speed multiplied by the number of vCPUs. -1 means unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_sizing_policy#limit_in_mhz VmSizingPolicy#limit_in_mhz}
  */
  readonly limitInMhz?: string;
  /**
  * Defines how much of the CPU resources of a VM are reserved. The allocated CPU for a VM equals the number of vCPUs times the vCPU speed in MHz. The value of the attribute ranges between 0 and one. Value of 0 CPU reservation guarantee defines no CPU reservation. Value of 1 defines 100% of CPU reserved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_sizing_policy#reservation_guarantee VmSizingPolicy#reservation_guarantee}
  */
  readonly reservationGuarantee?: string;
  /**
  * Defines the number of CPU shares for a VM. Shares specify the relative importance of a VM within a virtual data center. If a VM has twice as many shares of CPU as another VM, it is entitled to consume twice as much CPU when these two virtual machines are competing for resources. If not defined in the VDC compute policy, normal shares are applied to the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_sizing_policy#shares VmSizingPolicy#shares}
  */
  readonly shares?: string;
  /**
  * Defines the vCPU speed of a core in MHz.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_sizing_policy#speed_in_mhz VmSizingPolicy#speed_in_mhz}
  */
  readonly speedInMhz?: string;
}

export function vmSizingPolicyCpuToTerraform(struct?: VmSizingPolicyCpuOutputReference | VmSizingPolicyCpu): any {
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


export function vmSizingPolicyCpuToHclTerraform(struct?: VmSizingPolicyCpuOutputReference | VmSizingPolicyCpu): any {
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

export class VmSizingPolicyCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmSizingPolicyCpu | undefined {
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

  public set internalValue(value: VmSizingPolicyCpu | undefined) {
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
export interface VmSizingPolicyMemory {
  /**
  * Defines the memory limit in MB for a VM. If not defined in the VM sizing policy, memory limit is equal to the allocated memory for the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_sizing_policy#limit_in_mb VmSizingPolicy#limit_in_mb}
  */
  readonly limitInMb?: string;
  /**
  * Defines the reserved amount of memory that is configured for a VM. The value of the attribute ranges between 0 and one. Value of 0 memory reservation guarantee defines no memory reservation. Value of 1 defines 100% of memory reserved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_sizing_policy#reservation_guarantee VmSizingPolicy#reservation_guarantee}
  */
  readonly reservationGuarantee?: string;
  /**
  * Defines the number of memory shares for a VM. Shares specify the relative importance of a VM within a virtual data center. If a VM has twice as many shares of memory as another VM, it is entitled to consume twice as much memory when these two virtual machines are competing for resources. If not defined in the VDC compute policy, normal shares are applied to the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_sizing_policy#shares VmSizingPolicy#shares}
  */
  readonly shares?: string;
  /**
  * Defines the memory configured for a VM in MB. This is a VM hardware configuration. When a tenant assigns the VM sizing policy to a VM, the VM receives the amount of memory defined by this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_sizing_policy#size_in_mb VmSizingPolicy#size_in_mb}
  */
  readonly sizeInMb?: string;
}

export function vmSizingPolicyMemoryToTerraform(struct?: VmSizingPolicyMemoryOutputReference | VmSizingPolicyMemory): any {
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


export function vmSizingPolicyMemoryToHclTerraform(struct?: VmSizingPolicyMemoryOutputReference | VmSizingPolicyMemory): any {
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

export class VmSizingPolicyMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VmSizingPolicyMemory | undefined {
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

  public set internalValue(value: VmSizingPolicyMemory | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_sizing_policy vcd_vm_sizing_policy}
*/
export class VmSizingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_vm_sizing_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VmSizingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VmSizingPolicy to import
  * @param importFromId The id of the existing VmSizingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_sizing_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VmSizingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_vm_sizing_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vm_sizing_policy vcd_vm_sizing_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VmSizingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: VmSizingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_vm_sizing_policy',
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
    this._org = config.org;
    this._cpu.internalValue = config.cpu;
    this._memory.internalValue = config.memory;
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

  // cpu - computed: false, optional: true, required: false
  private _cpu = new VmSizingPolicyCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: VmSizingPolicyCpu) {
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
  private _memory = new VmSizingPolicyMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: VmSizingPolicyMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      cpu: vmSizingPolicyCpuToTerraform(this._cpu.internalValue),
      memory: vmSizingPolicyMemoryToTerraform(this._memory.internalValue),
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
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu: {
        value: vmSizingPolicyCpuToHclTerraform(this._cpu.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmSizingPolicyCpuList",
      },
      memory: {
        value: vmSizingPolicyMemoryToHclTerraform(this._memory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VmSizingPolicyMemoryList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
