// https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProxmoxVirtualEnvironmentVm2Config extends cdktf.TerraformMetaArguments {
  /**
  * The cloning configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#clone DataProxmoxVirtualEnvironmentVm2#clone}
  */
  readonly clone?: DataProxmoxVirtualEnvironmentVm2Clone;
  /**
  * The CPU configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#cpu DataProxmoxVirtualEnvironmentVm2#cpu}
  */
  readonly cpu?: DataProxmoxVirtualEnvironmentVm2Cpu;
  /**
  * The description of the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#description DataProxmoxVirtualEnvironmentVm2#description}
  */
  readonly description?: string;
  /**
  * The unique identifier of the VM in the Proxmox cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#id DataProxmoxVirtualEnvironmentVm2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The name of the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#name DataProxmoxVirtualEnvironmentVm2#name}
  */
  readonly name?: string;
  /**
  * The name of the node where the VM is provisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#node_name DataProxmoxVirtualEnvironmentVm2#node_name}
  */
  readonly nodeName: string;
  /**
  * The RNG (Random Number Generator) configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#rng DataProxmoxVirtualEnvironmentVm2#rng}
  */
  readonly rng?: DataProxmoxVirtualEnvironmentVm2Rng;
  /**
  * The tags assigned to the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#tags DataProxmoxVirtualEnvironmentVm2#tags}
  */
  readonly tags?: string[];
  /**
  * Whether the VM is a template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#template DataProxmoxVirtualEnvironmentVm2#template}
  */
  readonly template?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#timeouts DataProxmoxVirtualEnvironmentVm2#timeouts}
  */
  readonly timeouts?: DataProxmoxVirtualEnvironmentVm2Timeouts;
  /**
  * The VGA configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#vga DataProxmoxVirtualEnvironmentVm2#vga}
  */
  readonly vga?: DataProxmoxVirtualEnvironmentVm2Vga;
}
export interface DataProxmoxVirtualEnvironmentVm2Clone {
  /**
  * The ID of the VM to clone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#id DataProxmoxVirtualEnvironmentVm2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
  /**
  * The number of retries to perform when cloning the VM (default: 3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#retries DataProxmoxVirtualEnvironmentVm2#retries}
  */
  readonly retries?: number;
}

export function dataProxmoxVirtualEnvironmentVm2CloneToTerraform(struct?: DataProxmoxVirtualEnvironmentVm2Clone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    retries: cdktf.numberToTerraform(struct!.retries),
  }
}


export function dataProxmoxVirtualEnvironmentVm2CloneToHclTerraform(struct?: DataProxmoxVirtualEnvironmentVm2Clone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataProxmoxVirtualEnvironmentVm2CloneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxVirtualEnvironmentVm2Clone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualEnvironmentVm2Clone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._retries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._retries = value.retries;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // retries - computed: true, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }
}
export interface DataProxmoxVirtualEnvironmentVm2Cpu {
  /**
  * List of host cores used to execute guest processes, for example: '0,5,8-11'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#affinity DataProxmoxVirtualEnvironmentVm2#affinity}
  */
  readonly affinity?: string;
  /**
  * The CPU architecture.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#architecture DataProxmoxVirtualEnvironmentVm2#architecture}
  */
  readonly architecture?: string;
  /**
  * The number of CPU cores per socket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#cores DataProxmoxVirtualEnvironmentVm2#cores}
  */
  readonly cores?: number;
  /**
  * Set of additional CPU flags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#flags DataProxmoxVirtualEnvironmentVm2#flags}
  */
  readonly flags?: string[];
  /**
  * The number of hotplugged vCPUs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#hotplugged DataProxmoxVirtualEnvironmentVm2#hotplugged}
  */
  readonly hotplugged?: number;
  /**
  * Limit of CPU usage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#limit DataProxmoxVirtualEnvironmentVm2#limit}
  */
  readonly limit?: number;
  /**
  * Enable NUMA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#numa DataProxmoxVirtualEnvironmentVm2#numa}
  */
  readonly numa?: boolean | cdktf.IResolvable;
  /**
  * The number of CPU sockets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#sockets DataProxmoxVirtualEnvironmentVm2#sockets}
  */
  readonly sockets?: number;
  /**
  * Emulated CPU type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#type DataProxmoxVirtualEnvironmentVm2#type}
  */
  readonly type?: string;
  /**
  * CPU weight for a VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#units DataProxmoxVirtualEnvironmentVm2#units}
  */
  readonly units?: number;
}

export function dataProxmoxVirtualEnvironmentVm2CpuToTerraform(struct?: DataProxmoxVirtualEnvironmentVm2Cpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: cdktf.stringToTerraform(struct!.affinity),
    architecture: cdktf.stringToTerraform(struct!.architecture),
    cores: cdktf.numberToTerraform(struct!.cores),
    flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.flags),
    hotplugged: cdktf.numberToTerraform(struct!.hotplugged),
    limit: cdktf.numberToTerraform(struct!.limit),
    numa: cdktf.booleanToTerraform(struct!.numa),
    sockets: cdktf.numberToTerraform(struct!.sockets),
    type: cdktf.stringToTerraform(struct!.type),
    units: cdktf.numberToTerraform(struct!.units),
  }
}


export function dataProxmoxVirtualEnvironmentVm2CpuToHclTerraform(struct?: DataProxmoxVirtualEnvironmentVm2Cpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: cdktf.stringToHclTerraform(struct!.affinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    architecture: {
      value: cdktf.stringToHclTerraform(struct!.architecture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cores: {
      value: cdktf.numberToHclTerraform(struct!.cores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.flags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    hotplugged: {
      value: cdktf.numberToHclTerraform(struct!.hotplugged),
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
    numa: {
      value: cdktf.booleanToHclTerraform(struct!.numa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sockets: {
      value: cdktf.numberToHclTerraform(struct!.sockets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    units: {
      value: cdktf.numberToHclTerraform(struct!.units),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataProxmoxVirtualEnvironmentVm2CpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxVirtualEnvironmentVm2Cpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity;
    }
    if (this._architecture !== undefined) {
      hasAnyValues = true;
      internalValueResult.architecture = this._architecture;
    }
    if (this._cores !== undefined) {
      hasAnyValues = true;
      internalValueResult.cores = this._cores;
    }
    if (this._flags !== undefined) {
      hasAnyValues = true;
      internalValueResult.flags = this._flags;
    }
    if (this._hotplugged !== undefined) {
      hasAnyValues = true;
      internalValueResult.hotplugged = this._hotplugged;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._numa !== undefined) {
      hasAnyValues = true;
      internalValueResult.numa = this._numa;
    }
    if (this._sockets !== undefined) {
      hasAnyValues = true;
      internalValueResult.sockets = this._sockets;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._units !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualEnvironmentVm2Cpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity = undefined;
      this._architecture = undefined;
      this._cores = undefined;
      this._flags = undefined;
      this._hotplugged = undefined;
      this._limit = undefined;
      this._numa = undefined;
      this._sockets = undefined;
      this._type = undefined;
      this._units = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity = value.affinity;
      this._architecture = value.architecture;
      this._cores = value.cores;
      this._flags = value.flags;
      this._hotplugged = value.hotplugged;
      this._limit = value.limit;
      this._numa = value.numa;
      this._sockets = value.sockets;
      this._type = value.type;
      this._units = value.units;
    }
  }

  // affinity - computed: true, optional: true, required: false
  private _affinity?: string; 
  public get affinity() {
    return this.getStringAttribute('affinity');
  }
  public set affinity(value: string) {
    this._affinity = value;
  }
  public resetAffinity() {
    this._affinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity;
  }

  // architecture - computed: true, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // cores - computed: true, optional: true, required: false
  private _cores?: number; 
  public get cores() {
    return this.getNumberAttribute('cores');
  }
  public set cores(value: number) {
    this._cores = value;
  }
  public resetCores() {
    this._cores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coresInput() {
    return this._cores;
  }

  // flags - computed: true, optional: true, required: false
  private _flags?: string[]; 
  public get flags() {
    return cdktf.Fn.tolist(this.getListAttribute('flags'));
  }
  public set flags(value: string[]) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // hotplugged - computed: true, optional: true, required: false
  private _hotplugged?: number; 
  public get hotplugged() {
    return this.getNumberAttribute('hotplugged');
  }
  public set hotplugged(value: number) {
    this._hotplugged = value;
  }
  public resetHotplugged() {
    this._hotplugged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotpluggedInput() {
    return this._hotplugged;
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

  // numa - computed: true, optional: true, required: false
  private _numa?: boolean | cdktf.IResolvable; 
  public get numa() {
    return this.getBooleanAttribute('numa');
  }
  public set numa(value: boolean | cdktf.IResolvable) {
    this._numa = value;
  }
  public resetNuma() {
    this._numa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numaInput() {
    return this._numa;
  }

  // sockets - computed: true, optional: true, required: false
  private _sockets?: number; 
  public get sockets() {
    return this.getNumberAttribute('sockets');
  }
  public set sockets(value: number) {
    this._sockets = value;
  }
  public resetSockets() {
    this._sockets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketsInput() {
    return this._sockets;
  }

  // type - computed: true, optional: true, required: false
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

  // units - computed: true, optional: true, required: false
  private _units?: number; 
  public get units() {
    return this.getNumberAttribute('units');
  }
  public set units(value: number) {
    this._units = value;
  }
  public resetUnits() {
    this._units = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitsInput() {
    return this._units;
  }
}
export interface DataProxmoxVirtualEnvironmentVm2Rng {
  /**
  * Maximum bytes of entropy allowed to get injected into the guest every period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#max_bytes DataProxmoxVirtualEnvironmentVm2#max_bytes}
  */
  readonly maxBytes?: number;
  /**
  * Period in milliseconds to limit entropy injection to the guest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#period DataProxmoxVirtualEnvironmentVm2#period}
  */
  readonly period?: number;
  /**
  * The entropy source for the RNG device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#source DataProxmoxVirtualEnvironmentVm2#source}
  */
  readonly source?: string;
}

export function dataProxmoxVirtualEnvironmentVm2RngToTerraform(struct?: DataProxmoxVirtualEnvironmentVm2Rng | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_bytes: cdktf.numberToTerraform(struct!.maxBytes),
    period: cdktf.numberToTerraform(struct!.period),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dataProxmoxVirtualEnvironmentVm2RngToHclTerraform(struct?: DataProxmoxVirtualEnvironmentVm2Rng | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_bytes: {
      value: cdktf.numberToHclTerraform(struct!.maxBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataProxmoxVirtualEnvironmentVm2RngOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxVirtualEnvironmentVm2Rng | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBytes = this._maxBytes;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualEnvironmentVm2Rng | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxBytes = undefined;
      this._period = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxBytes = value.maxBytes;
      this._period = value.period;
      this._source = value.source;
    }
  }

  // max_bytes - computed: true, optional: true, required: false
  private _maxBytes?: number; 
  public get maxBytes() {
    return this.getNumberAttribute('max_bytes');
  }
  public set maxBytes(value: number) {
    this._maxBytes = value;
  }
  public resetMaxBytes() {
    this._maxBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBytesInput() {
    return this._maxBytes;
  }

  // period - computed: true, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface DataProxmoxVirtualEnvironmentVm2Timeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#read DataProxmoxVirtualEnvironmentVm2#read}
  */
  readonly read?: string;
}

export function dataProxmoxVirtualEnvironmentVm2TimeoutsToTerraform(struct?: DataProxmoxVirtualEnvironmentVm2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataProxmoxVirtualEnvironmentVm2TimeoutsToHclTerraform(struct?: DataProxmoxVirtualEnvironmentVm2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataProxmoxVirtualEnvironmentVm2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxVirtualEnvironmentVm2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualEnvironmentVm2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}
export interface DataProxmoxVirtualEnvironmentVm2Vga {
  /**
  * Enable a specific clipboard.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#clipboard DataProxmoxVirtualEnvironmentVm2#clipboard}
  */
  readonly clipboard?: string;
  /**
  * The VGA memory in megabytes (4-512 MB). Has no effect with serial display. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#memory DataProxmoxVirtualEnvironmentVm2#memory}
  */
  readonly memory?: number;
  /**
  * The VGA type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#type DataProxmoxVirtualEnvironmentVm2#type}
  */
  readonly type?: string;
}

export function dataProxmoxVirtualEnvironmentVm2VgaToTerraform(struct?: DataProxmoxVirtualEnvironmentVm2Vga | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clipboard: cdktf.stringToTerraform(struct!.clipboard),
    memory: cdktf.numberToTerraform(struct!.memory),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataProxmoxVirtualEnvironmentVm2VgaToHclTerraform(struct?: DataProxmoxVirtualEnvironmentVm2Vga | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clipboard: {
      value: cdktf.stringToHclTerraform(struct!.clipboard),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.numberToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataProxmoxVirtualEnvironmentVm2VgaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataProxmoxVirtualEnvironmentVm2Vga | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clipboard !== undefined) {
      hasAnyValues = true;
      internalValueResult.clipboard = this._clipboard;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataProxmoxVirtualEnvironmentVm2Vga | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clipboard = undefined;
      this._memory = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clipboard = value.clipboard;
      this._memory = value.memory;
      this._type = value.type;
    }
  }

  // clipboard - computed: true, optional: true, required: false
  private _clipboard?: string; 
  public get clipboard() {
    return this.getStringAttribute('clipboard');
  }
  public set clipboard(value: string) {
    this._clipboard = value;
  }
  public resetClipboard() {
    this._clipboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clipboardInput() {
    return this._clipboard;
  }

  // memory - computed: true, optional: true, required: false
  private _memory?: number; 
  public get memory() {
    return this.getNumberAttribute('memory');
  }
  public set memory(value: number) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // type - computed: true, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2 proxmox_virtual_environment_vm2}
*/
export class DataProxmoxVirtualEnvironmentVm2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_vm2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProxmoxVirtualEnvironmentVm2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProxmoxVirtualEnvironmentVm2 to import
  * @param importFromId The id of the existing DataProxmoxVirtualEnvironmentVm2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProxmoxVirtualEnvironmentVm2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_vm2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.86.0/docs/data-sources/virtual_environment_vm2 proxmox_virtual_environment_vm2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProxmoxVirtualEnvironmentVm2Config
  */
  public constructor(scope: Construct, id: string, config: DataProxmoxVirtualEnvironmentVm2Config) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_vm2',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.86.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clone.internalValue = config.clone;
    this._cpu.internalValue = config.cpu;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._nodeName = config.nodeName;
    this._rng.internalValue = config.rng;
    this._tags = config.tags;
    this._template = config.template;
    this._timeouts.internalValue = config.timeouts;
    this._vga.internalValue = config.vga;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clone - computed: false, optional: true, required: false
  private _clone = new DataProxmoxVirtualEnvironmentVm2CloneOutputReference(this, "clone");
  public get clone() {
    return this._clone;
  }
  public putClone(value: DataProxmoxVirtualEnvironmentVm2Clone) {
    this._clone.internalValue = value;
  }
  public resetClone() {
    this._clone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneInput() {
    return this._clone.internalValue;
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu = new DataProxmoxVirtualEnvironmentVm2CpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataProxmoxVirtualEnvironmentVm2Cpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
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

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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

  // node_name - computed: false, optional: false, required: true
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // rng - computed: true, optional: true, required: false
  private _rng = new DataProxmoxVirtualEnvironmentVm2RngOutputReference(this, "rng");
  public get rng() {
    return this._rng;
  }
  public putRng(value: DataProxmoxVirtualEnvironmentVm2Rng) {
    this._rng.internalValue = value;
  }
  public resetRng() {
    this._rng.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rngInput() {
    return this._rng.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // template - computed: false, optional: true, required: false
  private _template?: boolean | cdktf.IResolvable; 
  public get template() {
    return this.getBooleanAttribute('template');
  }
  public set template(value: boolean | cdktf.IResolvable) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataProxmoxVirtualEnvironmentVm2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataProxmoxVirtualEnvironmentVm2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vga - computed: true, optional: true, required: false
  private _vga = new DataProxmoxVirtualEnvironmentVm2VgaOutputReference(this, "vga");
  public get vga() {
    return this._vga;
  }
  public putVga(value: DataProxmoxVirtualEnvironmentVm2Vga) {
    this._vga.internalValue = value;
  }
  public resetVga() {
    this._vga.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vgaInput() {
    return this._vga.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clone: dataProxmoxVirtualEnvironmentVm2CloneToTerraform(this._clone.internalValue),
      cpu: dataProxmoxVirtualEnvironmentVm2CpuToTerraform(this._cpu.internalValue),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      node_name: cdktf.stringToTerraform(this._nodeName),
      rng: dataProxmoxVirtualEnvironmentVm2RngToTerraform(this._rng.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      template: cdktf.booleanToTerraform(this._template),
      timeouts: dataProxmoxVirtualEnvironmentVm2TimeoutsToTerraform(this._timeouts.internalValue),
      vga: dataProxmoxVirtualEnvironmentVm2VgaToTerraform(this._vga.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clone: {
        value: dataProxmoxVirtualEnvironmentVm2CloneToHclTerraform(this._clone.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataProxmoxVirtualEnvironmentVm2Clone",
      },
      cpu: {
        value: dataProxmoxVirtualEnvironmentVm2CpuToHclTerraform(this._cpu.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataProxmoxVirtualEnvironmentVm2Cpu",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_name: {
        value: cdktf.stringToHclTerraform(this._nodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rng: {
        value: dataProxmoxVirtualEnvironmentVm2RngToHclTerraform(this._rng.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataProxmoxVirtualEnvironmentVm2Rng",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      template: {
        value: cdktf.booleanToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: dataProxmoxVirtualEnvironmentVm2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataProxmoxVirtualEnvironmentVm2Timeouts",
      },
      vga: {
        value: dataProxmoxVirtualEnvironmentVm2VgaToHclTerraform(this._vga.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataProxmoxVirtualEnvironmentVm2Vga",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
