// https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualEnvironmentContainerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#description VirtualEnvironmentContainer#description}
  */
  readonly description?: string;
  /**
  * A hook script
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#hook_script_file_id VirtualEnvironmentContainer#hook_script_file_id}
  */
  readonly hookScriptFileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#id VirtualEnvironmentContainer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The node name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#node_name VirtualEnvironmentContainer#node_name}
  */
  readonly nodeName: string;
  /**
  * The ID of the pool to assign the container to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#pool_id VirtualEnvironmentContainer#pool_id}
  */
  readonly poolId?: string;
  /**
  * Whether to set the protection flag of the container. This will prevent the container itself and its disk for remove/update operations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#protection VirtualEnvironmentContainer#protection}
  */
  readonly protection?: boolean | cdktf.IResolvable;
  /**
  * Automatically start container when the host system boots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#start_on_boot VirtualEnvironmentContainer#start_on_boot}
  */
  readonly startOnBoot?: boolean | cdktf.IResolvable;
  /**
  * Whether to start the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#started VirtualEnvironmentContainer#started}
  */
  readonly started?: boolean | cdktf.IResolvable;
  /**
  * Tags of the container. This is only meta information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#tags VirtualEnvironmentContainer#tags}
  */
  readonly tags?: string[];
  /**
  * Whether to create a template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#template VirtualEnvironmentContainer#template}
  */
  readonly template?: boolean | cdktf.IResolvable;
  /**
  * Clone container timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#timeout_clone VirtualEnvironmentContainer#timeout_clone}
  */
  readonly timeoutClone?: number;
  /**
  * Create container timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#timeout_create VirtualEnvironmentContainer#timeout_create}
  */
  readonly timeoutCreate?: number;
  /**
  * Delete container timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#timeout_delete VirtualEnvironmentContainer#timeout_delete}
  */
  readonly timeoutDelete?: number;
  /**
  * Start container timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#timeout_start VirtualEnvironmentContainer#timeout_start}
  */
  readonly timeoutStart?: number;
  /**
  * Update container timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#timeout_update VirtualEnvironmentContainer#timeout_update}
  */
  readonly timeoutUpdate?: number;
  /**
  * Whether the container runs as unprivileged on the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#unprivileged VirtualEnvironmentContainer#unprivileged}
  */
  readonly unprivileged?: boolean | cdktf.IResolvable;
  /**
  * The VM identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#vm_id VirtualEnvironmentContainer#vm_id}
  */
  readonly vmId?: number;
  /**
  * clone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#clone VirtualEnvironmentContainer#clone}
  */
  readonly clone?: VirtualEnvironmentContainerClone;
  /**
  * console block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#console VirtualEnvironmentContainer#console}
  */
  readonly console?: VirtualEnvironmentContainerConsole;
  /**
  * cpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#cpu VirtualEnvironmentContainer#cpu}
  */
  readonly cpu?: VirtualEnvironmentContainerCpu;
  /**
  * device_passthrough block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#device_passthrough VirtualEnvironmentContainer#device_passthrough}
  */
  readonly devicePassthrough?: VirtualEnvironmentContainerDevicePassthrough[] | cdktf.IResolvable;
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#disk VirtualEnvironmentContainer#disk}
  */
  readonly disk?: VirtualEnvironmentContainerDisk;
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#features VirtualEnvironmentContainer#features}
  */
  readonly features?: VirtualEnvironmentContainerFeatures;
  /**
  * initialization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#initialization VirtualEnvironmentContainer#initialization}
  */
  readonly initialization?: VirtualEnvironmentContainerInitialization;
  /**
  * memory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#memory VirtualEnvironmentContainer#memory}
  */
  readonly memory?: VirtualEnvironmentContainerMemory;
  /**
  * mount_point block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#mount_point VirtualEnvironmentContainer#mount_point}
  */
  readonly mountPoint?: VirtualEnvironmentContainerMountPoint[] | cdktf.IResolvable;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#network_interface VirtualEnvironmentContainer#network_interface}
  */
  readonly networkInterface?: VirtualEnvironmentContainerNetworkInterface[] | cdktf.IResolvable;
  /**
  * operating_system block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#operating_system VirtualEnvironmentContainer#operating_system}
  */
  readonly operatingSystem?: VirtualEnvironmentContainerOperatingSystem;
  /**
  * startup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#startup VirtualEnvironmentContainer#startup}
  */
  readonly startup?: VirtualEnvironmentContainerStartup;
  /**
  * wait_for_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#wait_for_ip VirtualEnvironmentContainer#wait_for_ip}
  */
  readonly waitForIp?: VirtualEnvironmentContainerWaitForIp;
}
export interface VirtualEnvironmentContainerClone {
  /**
  * The ID of the target datastore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#datastore_id VirtualEnvironmentContainer#datastore_id}
  */
  readonly datastoreId?: string;
  /**
  * The name of the source node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#node_name VirtualEnvironmentContainer#node_name}
  */
  readonly nodeName?: string;
  /**
  * The ID of the source container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#vm_id VirtualEnvironmentContainer#vm_id}
  */
  readonly vmId: number;
}

export function virtualEnvironmentContainerCloneToTerraform(struct?: VirtualEnvironmentContainerCloneOutputReference | VirtualEnvironmentContainerClone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datastore_id: cdktf.stringToTerraform(struct!.datastoreId),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    vm_id: cdktf.numberToTerraform(struct!.vmId),
  }
}


export function virtualEnvironmentContainerCloneToHclTerraform(struct?: VirtualEnvironmentContainerCloneOutputReference | VirtualEnvironmentContainerClone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datastore_id: {
      value: cdktf.stringToHclTerraform(struct!.datastoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_id: {
      value: cdktf.numberToHclTerraform(struct!.vmId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentContainerCloneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentContainerClone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datastoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreId = this._datastoreId;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._vmId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmId = this._vmId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentContainerClone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datastoreId = undefined;
      this._nodeName = undefined;
      this._vmId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datastoreId = value.datastoreId;
      this._nodeName = value.nodeName;
      this._vmId = value.vmId;
    }
  }

  // datastore_id - computed: false, optional: true, required: false
  private _datastoreId?: string; 
  public get datastoreId() {
    return this.getStringAttribute('datastore_id');
  }
  public set datastoreId(value: string) {
    this._datastoreId = value;
  }
  public resetDatastoreId() {
    this._datastoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreIdInput() {
    return this._datastoreId;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // vm_id - computed: false, optional: false, required: true
  private _vmId?: number; 
  public get vmId() {
    return this.getNumberAttribute('vm_id');
  }
  public set vmId(value: number) {
    this._vmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }
}
export interface VirtualEnvironmentContainerConsole {
  /**
  * Whether to enable the console device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#enabled VirtualEnvironmentContainer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of available TTY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#tty_count VirtualEnvironmentContainer#tty_count}
  */
  readonly ttyCount?: number;
  /**
  * The console mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#type VirtualEnvironmentContainer#type}
  */
  readonly type?: string;
}

export function virtualEnvironmentContainerConsoleToTerraform(struct?: VirtualEnvironmentContainerConsoleOutputReference | VirtualEnvironmentContainerConsole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    tty_count: cdktf.numberToTerraform(struct!.ttyCount),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualEnvironmentContainerConsoleToHclTerraform(struct?: VirtualEnvironmentContainerConsoleOutputReference | VirtualEnvironmentContainerConsole): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tty_count: {
      value: cdktf.numberToHclTerraform(struct!.ttyCount),
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

export class VirtualEnvironmentContainerConsoleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentContainerConsole | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ttyCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttyCount = this._ttyCount;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentContainerConsole | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._ttyCount = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._ttyCount = value.ttyCount;
      this._type = value.type;
    }
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

  // tty_count - computed: false, optional: true, required: false
  private _ttyCount?: number; 
  public get ttyCount() {
    return this.getNumberAttribute('tty_count');
  }
  public set ttyCount(value: number) {
    this._ttyCount = value;
  }
  public resetTtyCount() {
    this._ttyCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttyCountInput() {
    return this._ttyCount;
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
}
export interface VirtualEnvironmentContainerCpu {
  /**
  * The CPU architecture
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#architecture VirtualEnvironmentContainer#architecture}
  */
  readonly architecture?: string;
  /**
  * The number of CPU cores
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#cores VirtualEnvironmentContainer#cores}
  */
  readonly cores?: number;
  /**
  * The CPU units
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#units VirtualEnvironmentContainer#units}
  */
  readonly units?: number;
}

export function virtualEnvironmentContainerCpuToTerraform(struct?: VirtualEnvironmentContainerCpuOutputReference | VirtualEnvironmentContainerCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    architecture: cdktf.stringToTerraform(struct!.architecture),
    cores: cdktf.numberToTerraform(struct!.cores),
    units: cdktf.numberToTerraform(struct!.units),
  }
}


export function virtualEnvironmentContainerCpuToHclTerraform(struct?: VirtualEnvironmentContainerCpuOutputReference | VirtualEnvironmentContainerCpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class VirtualEnvironmentContainerCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentContainerCpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._architecture !== undefined) {
      hasAnyValues = true;
      internalValueResult.architecture = this._architecture;
    }
    if (this._cores !== undefined) {
      hasAnyValues = true;
      internalValueResult.cores = this._cores;
    }
    if (this._units !== undefined) {
      hasAnyValues = true;
      internalValueResult.units = this._units;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentContainerCpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._architecture = undefined;
      this._cores = undefined;
      this._units = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._architecture = value.architecture;
      this._cores = value.cores;
      this._units = value.units;
    }
  }

  // architecture - computed: false, optional: true, required: false
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

  // cores - computed: false, optional: true, required: false
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

  // units - computed: false, optional: true, required: false
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
export interface VirtualEnvironmentContainerDevicePassthrough {
  /**
  * Deny the container to write to the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#deny_write VirtualEnvironmentContainer#deny_write}
  */
  readonly denyWrite?: boolean | cdktf.IResolvable;
  /**
  * Group ID to be assigned to the device node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#gid VirtualEnvironmentContainer#gid}
  */
  readonly gid?: number;
  /**
  * Access mode to be set on the device node (e.g. 0666)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#mode VirtualEnvironmentContainer#mode}
  */
  readonly mode?: string;
  /**
  * Device to pass through to the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#path VirtualEnvironmentContainer#path}
  */
  readonly path: string;
  /**
  * Device UID in the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#uid VirtualEnvironmentContainer#uid}
  */
  readonly uid?: number;
}

export function virtualEnvironmentContainerDevicePassthroughToTerraform(struct?: VirtualEnvironmentContainerDevicePassthrough | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deny_write: cdktf.booleanToTerraform(struct!.denyWrite),
    gid: cdktf.numberToTerraform(struct!.gid),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    uid: cdktf.numberToTerraform(struct!.uid),
  }
}


export function virtualEnvironmentContainerDevicePassthroughToHclTerraform(struct?: VirtualEnvironmentContainerDevicePassthrough | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deny_write: {
      value: cdktf.booleanToHclTerraform(struct!.denyWrite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.numberToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentContainerDevicePassthroughOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualEnvironmentContainerDevicePassthrough | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denyWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyWrite = this._denyWrite;
    }
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentContainerDevicePassthrough | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._denyWrite = undefined;
      this._gid = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._denyWrite = value.denyWrite;
      this._gid = value.gid;
      this._mode = value.mode;
      this._path = value.path;
      this._uid = value.uid;
    }
  }

  // deny_write - computed: false, optional: true, required: false
  private _denyWrite?: boolean | cdktf.IResolvable; 
  public get denyWrite() {
    return this.getBooleanAttribute('deny_write');
  }
  public set denyWrite(value: boolean | cdktf.IResolvable) {
    this._denyWrite = value;
  }
  public resetDenyWrite() {
    this._denyWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyWriteInput() {
    return this._denyWrite;
  }

  // gid - computed: false, optional: true, required: false
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: number; 
  public get uid() {
    return this.getNumberAttribute('uid');
  }
  public set uid(value: number) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}

export class VirtualEnvironmentContainerDevicePassthroughList extends cdktf.ComplexList {
  public internalValue? : VirtualEnvironmentContainerDevicePassthrough[] | cdktf.IResolvable

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
  public get(index: number): VirtualEnvironmentContainerDevicePassthroughOutputReference {
    return new VirtualEnvironmentContainerDevicePassthroughOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualEnvironmentContainerDisk {
  /**
  * Explicitly enable or disable ACL support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#acl VirtualEnvironmentContainer#acl}
  */
  readonly acl?: boolean | cdktf.IResolvable;
  /**
  * The datastore id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#datastore_id VirtualEnvironmentContainer#datastore_id}
  */
  readonly datastoreId?: string;
  /**
  * Extra mount options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#mount_options VirtualEnvironmentContainer#mount_options}
  */
  readonly mountOptions?: string[];
  /**
  * Enable user quotas for the container rootfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#quota VirtualEnvironmentContainer#quota}
  */
  readonly quota?: boolean | cdktf.IResolvable;
  /**
  * Will include this volume to a storage replica job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#replicate VirtualEnvironmentContainer#replicate}
  */
  readonly replicate?: boolean | cdktf.IResolvable;
  /**
  * The rootfs size in gigabytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#size VirtualEnvironmentContainer#size}
  */
  readonly size?: number;
}

export function virtualEnvironmentContainerDiskToTerraform(struct?: VirtualEnvironmentContainerDiskOutputReference | VirtualEnvironmentContainerDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: cdktf.booleanToTerraform(struct!.acl),
    datastore_id: cdktf.stringToTerraform(struct!.datastoreId),
    mount_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mountOptions),
    quota: cdktf.booleanToTerraform(struct!.quota),
    replicate: cdktf.booleanToTerraform(struct!.replicate),
    size: cdktf.numberToTerraform(struct!.size),
  }
}


export function virtualEnvironmentContainerDiskToHclTerraform(struct?: VirtualEnvironmentContainerDiskOutputReference | VirtualEnvironmentContainerDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: cdktf.booleanToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    datastore_id: {
      value: cdktf.stringToHclTerraform(struct!.datastoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mountOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    quota: {
      value: cdktf.booleanToHclTerraform(struct!.quota),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replicate: {
      value: cdktf.booleanToHclTerraform(struct!.replicate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentContainerDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentContainerDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._datastoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreId = this._datastoreId;
    }
    if (this._mountOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions;
    }
    if (this._quota !== undefined) {
      hasAnyValues = true;
      internalValueResult.quota = this._quota;
    }
    if (this._replicate !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicate = this._replicate;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentContainerDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acl = undefined;
      this._datastoreId = undefined;
      this._mountOptions = undefined;
      this._quota = undefined;
      this._replicate = undefined;
      this._size = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acl = value.acl;
      this._datastoreId = value.datastoreId;
      this._mountOptions = value.mountOptions;
      this._quota = value.quota;
      this._replicate = value.replicate;
      this._size = value.size;
    }
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: boolean | cdktf.IResolvable; 
  public get acl() {
    return this.getBooleanAttribute('acl');
  }
  public set acl(value: boolean | cdktf.IResolvable) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // datastore_id - computed: false, optional: true, required: false
  private _datastoreId?: string; 
  public get datastoreId() {
    return this.getStringAttribute('datastore_id');
  }
  public set datastoreId(value: string) {
    this._datastoreId = value;
  }
  public resetDatastoreId() {
    this._datastoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreIdInput() {
    return this._datastoreId;
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string[]; 
  public get mountOptions() {
    return this.getListAttribute('mount_options');
  }
  public set mountOptions(value: string[]) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions;
  }

  // quota - computed: false, optional: true, required: false
  private _quota?: boolean | cdktf.IResolvable; 
  public get quota() {
    return this.getBooleanAttribute('quota');
  }
  public set quota(value: boolean | cdktf.IResolvable) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota;
  }

  // replicate - computed: false, optional: true, required: false
  private _replicate?: boolean | cdktf.IResolvable; 
  public get replicate() {
    return this.getBooleanAttribute('replicate');
  }
  public set replicate(value: boolean | cdktf.IResolvable) {
    this._replicate = value;
  }
  public resetReplicate() {
    this._replicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicateInput() {
    return this._replicate;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }
}
export interface VirtualEnvironmentContainerFeatures {
  /**
  * Whether the container supports FUSE mounts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#fuse VirtualEnvironmentContainer#fuse}
  */
  readonly fuse?: boolean | cdktf.IResolvable;
  /**
  * Whether the container supports `keyctl()` system call
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#keyctl VirtualEnvironmentContainer#keyctl}
  */
  readonly keyctl?: boolean | cdktf.IResolvable;
  /**
  * List of allowed mount types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#mount VirtualEnvironmentContainer#mount}
  */
  readonly mount?: string[];
  /**
  * Whether the container runs as nested
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#nesting VirtualEnvironmentContainer#nesting}
  */
  readonly nesting?: boolean | cdktf.IResolvable;
}

export function virtualEnvironmentContainerFeaturesToTerraform(struct?: VirtualEnvironmentContainerFeaturesOutputReference | VirtualEnvironmentContainerFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fuse: cdktf.booleanToTerraform(struct!.fuse),
    keyctl: cdktf.booleanToTerraform(struct!.keyctl),
    mount: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mount),
    nesting: cdktf.booleanToTerraform(struct!.nesting),
  }
}


export function virtualEnvironmentContainerFeaturesToHclTerraform(struct?: VirtualEnvironmentContainerFeaturesOutputReference | VirtualEnvironmentContainerFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fuse: {
      value: cdktf.booleanToHclTerraform(struct!.fuse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keyctl: {
      value: cdktf.booleanToHclTerraform(struct!.keyctl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mount: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mount),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    nesting: {
      value: cdktf.booleanToHclTerraform(struct!.nesting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentContainerFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentContainerFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.fuse = this._fuse;
    }
    if (this._keyctl !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyctl = this._keyctl;
    }
    if (this._mount !== undefined) {
      hasAnyValues = true;
      internalValueResult.mount = this._mount;
    }
    if (this._nesting !== undefined) {
      hasAnyValues = true;
      internalValueResult.nesting = this._nesting;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentContainerFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fuse = undefined;
      this._keyctl = undefined;
      this._mount = undefined;
      this._nesting = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fuse = value.fuse;
      this._keyctl = value.keyctl;
      this._mount = value.mount;
      this._nesting = value.nesting;
    }
  }

  // fuse - computed: false, optional: true, required: false
  private _fuse?: boolean | cdktf.IResolvable; 
  public get fuse() {
    return this.getBooleanAttribute('fuse');
  }
  public set fuse(value: boolean | cdktf.IResolvable) {
    this._fuse = value;
  }
  public resetFuse() {
    this._fuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fuseInput() {
    return this._fuse;
  }

  // keyctl - computed: false, optional: true, required: false
  private _keyctl?: boolean | cdktf.IResolvable; 
  public get keyctl() {
    return this.getBooleanAttribute('keyctl');
  }
  public set keyctl(value: boolean | cdktf.IResolvable) {
    this._keyctl = value;
  }
  public resetKeyctl() {
    this._keyctl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyctlInput() {
    return this._keyctl;
  }

  // mount - computed: false, optional: true, required: false
  private _mount?: string[]; 
  public get mount() {
    return this.getListAttribute('mount');
  }
  public set mount(value: string[]) {
    this._mount = value;
  }
  public resetMount() {
    this._mount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
  }

  // nesting - computed: false, optional: true, required: false
  private _nesting?: boolean | cdktf.IResolvable; 
  public get nesting() {
    return this.getBooleanAttribute('nesting');
  }
  public set nesting(value: boolean | cdktf.IResolvable) {
    this._nesting = value;
  }
  public resetNesting() {
    this._nesting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nestingInput() {
    return this._nesting;
  }
}
export interface VirtualEnvironmentContainerInitializationDns {
  /**
  * The DNS search domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#domain VirtualEnvironmentContainer#domain}
  */
  readonly domain?: string;
  /**
  * The DNS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#server VirtualEnvironmentContainer#server}
  */
  readonly server?: string;
  /**
  * The list of DNS servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#servers VirtualEnvironmentContainer#servers}
  */
  readonly servers?: string[];
}

export function virtualEnvironmentContainerInitializationDnsToTerraform(struct?: VirtualEnvironmentContainerInitializationDnsOutputReference | VirtualEnvironmentContainerInitializationDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    server: cdktf.stringToTerraform(struct!.server),
    servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.servers),
  }
}


export function virtualEnvironmentContainerInitializationDnsToHclTerraform(struct?: VirtualEnvironmentContainerInitializationDnsOutputReference | VirtualEnvironmentContainerInitializationDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.servers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentContainerInitializationDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentContainerInitializationDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._servers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentContainerInitializationDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domain = undefined;
      this._server = undefined;
      this._servers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domain = value.domain;
      this._server = value.server;
      this._servers = value.servers;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // servers - computed: false, optional: true, required: false
  private _servers?: string[]; 
  public get servers() {
    return this.getListAttribute('servers');
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  public resetServers() {
    this._servers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }
}
export interface VirtualEnvironmentContainerInitializationIpConfigIpv4 {
  /**
  * The IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#address VirtualEnvironmentContainer#address}
  */
  readonly address?: string;
  /**
  * The IPv4 gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#gateway VirtualEnvironmentContainer#gateway}
  */
  readonly gateway?: string;
}

export function virtualEnvironmentContainerInitializationIpConfigIpv4ToTerraform(struct?: VirtualEnvironmentContainerInitializationIpConfigIpv4OutputReference | VirtualEnvironmentContainerInitializationIpConfigIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    gateway: cdktf.stringToTerraform(struct!.gateway),
  }
}


export function virtualEnvironmentContainerInitializationIpConfigIpv4ToHclTerraform(struct?: VirtualEnvironmentContainerInitializationIpConfigIpv4OutputReference | VirtualEnvironmentContainerInitializationIpConfigIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentContainerInitializationIpConfigIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentContainerInitializationIpConfigIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentContainerInitializationIpConfigIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._gateway = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._gateway = value.gateway;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }
}
export interface VirtualEnvironmentContainerInitializationIpConfigIpv6 {
  /**
  * The IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#address VirtualEnvironmentContainer#address}
  */
  readonly address?: string;
  /**
  * The IPv6 gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#gateway VirtualEnvironmentContainer#gateway}
  */
  readonly gateway?: string;
}

export function virtualEnvironmentContainerInitializationIpConfigIpv6ToTerraform(struct?: VirtualEnvironmentContainerInitializationIpConfigIpv6OutputReference | VirtualEnvironmentContainerInitializationIpConfigIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    gateway: cdktf.stringToTerraform(struct!.gateway),
  }
}


export function virtualEnvironmentContainerInitializationIpConfigIpv6ToHclTerraform(struct?: VirtualEnvironmentContainerInitializationIpConfigIpv6OutputReference | VirtualEnvironmentContainerInitializationIpConfigIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentContainerInitializationIpConfigIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentContainerInitializationIpConfigIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentContainerInitializationIpConfigIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._gateway = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._gateway = value.gateway;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }
}
export interface VirtualEnvironmentContainerInitializationIpConfig {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#ipv4 VirtualEnvironmentContainer#ipv4}
  */
  readonly ipv4?: VirtualEnvironmentContainerInitializationIpConfigIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#ipv6 VirtualEnvironmentContainer#ipv6}
  */
  readonly ipv6?: VirtualEnvironmentContainerInitializationIpConfigIpv6;
}

export function virtualEnvironmentContainerInitializationIpConfigToTerraform(struct?: VirtualEnvironmentContainerInitializationIpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: virtualEnvironmentContainerInitializationIpConfigIpv4ToTerraform(struct!.ipv4),
    ipv6: virtualEnvironmentContainerInitializationIpConfigIpv6ToTerraform(struct!.ipv6),
  }
}


export function virtualEnvironmentContainerInitializationIpConfigToHclTerraform(struct?: VirtualEnvironmentContainerInitializationIpConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: virtualEnvironmentContainerInitializationIpConfigIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualEnvironmentContainerInitializationIpConfigIpv4List",
    },
    ipv6: {
      value: virtualEnvironmentContainerInitializationIpConfigIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualEnvironmentContainerInitializationIpConfigIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentContainerInitializationIpConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualEnvironmentContainerInitializationIpConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentContainerInitializationIpConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new VirtualEnvironmentContainerInitializationIpConfigIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: VirtualEnvironmentContainerInitializationIpConfigIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new VirtualEnvironmentContainerInitializationIpConfigIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: VirtualEnvironmentContainerInitializationIpConfigIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}

export class VirtualEnvironmentContainerInitializationIpConfigList extends cdktf.ComplexList {
  public internalValue? : VirtualEnvironmentContainerInitializationIpConfig[] | cdktf.IResolvable

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
  public get(index: number): VirtualEnvironmentContainerInitializationIpConfigOutputReference {
    return new VirtualEnvironmentContainerInitializationIpConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualEnvironmentContainerInitializationUserAccount {
  /**
  * The SSH keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#keys VirtualEnvironmentContainer#keys}
  */
  readonly keys?: string[];
  /**
  * The SSH password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#password VirtualEnvironmentContainer#password}
  */
  readonly password?: string;
}

export function virtualEnvironmentContainerInitializationUserAccountToTerraform(struct?: VirtualEnvironmentContainerInitializationUserAccountOutputReference | VirtualEnvironmentContainerInitializationUserAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function virtualEnvironmentContainerInitializationUserAccountToHclTerraform(struct?: VirtualEnvironmentContainerInitializationUserAccountOutputReference | VirtualEnvironmentContainerInitializationUserAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentContainerInitializationUserAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentContainerInitializationUserAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentContainerInitializationUserAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keys = undefined;
      this._password = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keys = value.keys;
      this._password = value.password;
    }
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}
export interface VirtualEnvironmentContainerInitialization {
  /**
  * The hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#hostname VirtualEnvironmentContainer#hostname}
  */
  readonly hostname?: string;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#dns VirtualEnvironmentContainer#dns}
  */
  readonly dns?: VirtualEnvironmentContainerInitializationDns;
  /**
  * ip_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#ip_config VirtualEnvironmentContainer#ip_config}
  */
  readonly ipConfig?: VirtualEnvironmentContainerInitializationIpConfig[] | cdktf.IResolvable;
  /**
  * user_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#user_account VirtualEnvironmentContainer#user_account}
  */
  readonly userAccount?: VirtualEnvironmentContainerInitializationUserAccount;
}

export function virtualEnvironmentContainerInitializationToTerraform(struct?: VirtualEnvironmentContainerInitializationOutputReference | VirtualEnvironmentContainerInitialization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    dns: virtualEnvironmentContainerInitializationDnsToTerraform(struct!.dns),
    ip_config: cdktf.listMapper(virtualEnvironmentContainerInitializationIpConfigToTerraform, true)(struct!.ipConfig),
    user_account: virtualEnvironmentContainerInitializationUserAccountToTerraform(struct!.userAccount),
  }
}


export function virtualEnvironmentContainerInitializationToHclTerraform(struct?: VirtualEnvironmentContainerInitializationOutputReference | VirtualEnvironmentContainerInitialization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns: {
      value: virtualEnvironmentContainerInitializationDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualEnvironmentContainerInitializationDnsList",
    },
    ip_config: {
      value: cdktf.listMapperHcl(virtualEnvironmentContainerInitializationIpConfigToHclTerraform, true)(struct!.ipConfig),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualEnvironmentContainerInitializationIpConfigList",
    },
    user_account: {
      value: virtualEnvironmentContainerInitializationUserAccountToHclTerraform(struct!.userAccount),
      isBlock: true,
      type: "list",
      storageClassType: "VirtualEnvironmentContainerInitializationUserAccountList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentContainerInitializationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentContainerInitialization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._ipConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipConfig = this._ipConfig?.internalValue;
    }
    if (this._userAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAccount = this._userAccount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentContainerInitialization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
      this._dns.internalValue = undefined;
      this._ipConfig.internalValue = undefined;
      this._userAccount.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
      this._dns.internalValue = value.dns;
      this._ipConfig.internalValue = value.ipConfig;
      this._userAccount.internalValue = value.userAccount;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new VirtualEnvironmentContainerInitializationDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: VirtualEnvironmentContainerInitializationDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // ip_config - computed: false, optional: true, required: false
  private _ipConfig = new VirtualEnvironmentContainerInitializationIpConfigList(this, "ip_config", false);
  public get ipConfig() {
    return this._ipConfig;
  }
  public putIpConfig(value: VirtualEnvironmentContainerInitializationIpConfig[] | cdktf.IResolvable) {
    this._ipConfig.internalValue = value;
  }
  public resetIpConfig() {
    this._ipConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipConfigInput() {
    return this._ipConfig.internalValue;
  }

  // user_account - computed: false, optional: true, required: false
  private _userAccount = new VirtualEnvironmentContainerInitializationUserAccountOutputReference(this, "user_account");
  public get userAccount() {
    return this._userAccount;
  }
  public putUserAccount(value: VirtualEnvironmentContainerInitializationUserAccount) {
    this._userAccount.internalValue = value;
  }
  public resetUserAccount() {
    this._userAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccountInput() {
    return this._userAccount.internalValue;
  }
}
export interface VirtualEnvironmentContainerMemory {
  /**
  * The dedicated memory in megabytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#dedicated VirtualEnvironmentContainer#dedicated}
  */
  readonly dedicated?: number;
  /**
  * The swap size in megabytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#swap VirtualEnvironmentContainer#swap}
  */
  readonly swap?: number;
}

export function virtualEnvironmentContainerMemoryToTerraform(struct?: VirtualEnvironmentContainerMemoryOutputReference | VirtualEnvironmentContainerMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dedicated: cdktf.numberToTerraform(struct!.dedicated),
    swap: cdktf.numberToTerraform(struct!.swap),
  }
}


export function virtualEnvironmentContainerMemoryToHclTerraform(struct?: VirtualEnvironmentContainerMemoryOutputReference | VirtualEnvironmentContainerMemory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dedicated: {
      value: cdktf.numberToHclTerraform(struct!.dedicated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    swap: {
      value: cdktf.numberToHclTerraform(struct!.swap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentContainerMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentContainerMemory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dedicated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicated = this._dedicated;
    }
    if (this._swap !== undefined) {
      hasAnyValues = true;
      internalValueResult.swap = this._swap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentContainerMemory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dedicated = undefined;
      this._swap = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dedicated = value.dedicated;
      this._swap = value.swap;
    }
  }

  // dedicated - computed: false, optional: true, required: false
  private _dedicated?: number; 
  public get dedicated() {
    return this.getNumberAttribute('dedicated');
  }
  public set dedicated(value: number) {
    this._dedicated = value;
  }
  public resetDedicated() {
    this._dedicated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedInput() {
    return this._dedicated;
  }

  // swap - computed: false, optional: true, required: false
  private _swap?: number; 
  public get swap() {
    return this.getNumberAttribute('swap');
  }
  public set swap(value: number) {
    this._swap = value;
  }
  public resetSwap() {
    this._swap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapInput() {
    return this._swap;
  }
}
export interface VirtualEnvironmentContainerMountPoint {
  /**
  * Explicitly enable or disable ACL support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#acl VirtualEnvironmentContainer#acl}
  */
  readonly acl?: boolean | cdktf.IResolvable;
  /**
  * Whether to include the mount point in backups (only used for volume mount points)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#backup VirtualEnvironmentContainer#backup}
  */
  readonly backup?: boolean | cdktf.IResolvable;
  /**
  * Extra mount options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#mount_options VirtualEnvironmentContainer#mount_options}
  */
  readonly mountOptions?: string[];
  /**
  * Path to the mount point as seen from inside the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#path VirtualEnvironmentContainer#path}
  */
  readonly path: string;
  /**
  * Enable user quotas inside the container (not supported with volume mounts)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#quota VirtualEnvironmentContainer#quota}
  */
  readonly quota?: boolean | cdktf.IResolvable;
  /**
  * Read-only mount point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#read_only VirtualEnvironmentContainer#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Will include this volume to a storage replica job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#replicate VirtualEnvironmentContainer#replicate}
  */
  readonly replicate?: boolean | cdktf.IResolvable;
  /**
  * Mark this non-volume mount point as available on all nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#shared VirtualEnvironmentContainer#shared}
  */
  readonly shared?: boolean | cdktf.IResolvable;
  /**
  * Volume size (only used for volume mount points)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#size VirtualEnvironmentContainer#size}
  */
  readonly size?: string;
  /**
  * Volume, device or directory to mount into the container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#volume VirtualEnvironmentContainer#volume}
  */
  readonly volume: string;
}

export function virtualEnvironmentContainerMountPointToTerraform(struct?: VirtualEnvironmentContainerMountPoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl: cdktf.booleanToTerraform(struct!.acl),
    backup: cdktf.booleanToTerraform(struct!.backup),
    mount_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mountOptions),
    path: cdktf.stringToTerraform(struct!.path),
    quota: cdktf.booleanToTerraform(struct!.quota),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    replicate: cdktf.booleanToTerraform(struct!.replicate),
    shared: cdktf.booleanToTerraform(struct!.shared),
    size: cdktf.stringToTerraform(struct!.size),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}


export function virtualEnvironmentContainerMountPointToHclTerraform(struct?: VirtualEnvironmentContainerMountPoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl: {
      value: cdktf.booleanToHclTerraform(struct!.acl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backup: {
      value: cdktf.booleanToHclTerraform(struct!.backup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mount_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mountOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quota: {
      value: cdktf.booleanToHclTerraform(struct!.quota),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replicate: {
      value: cdktf.booleanToHclTerraform(struct!.replicate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shared: {
      value: cdktf.booleanToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume: {
      value: cdktf.stringToHclTerraform(struct!.volume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentContainerMountPointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualEnvironmentContainerMountPoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acl !== undefined) {
      hasAnyValues = true;
      internalValueResult.acl = this._acl;
    }
    if (this._backup !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup;
    }
    if (this._mountOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountOptions = this._mountOptions;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._quota !== undefined) {
      hasAnyValues = true;
      internalValueResult.quota = this._quota;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._replicate !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicate = this._replicate;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentContainerMountPoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acl = undefined;
      this._backup = undefined;
      this._mountOptions = undefined;
      this._path = undefined;
      this._quota = undefined;
      this._readOnly = undefined;
      this._replicate = undefined;
      this._shared = undefined;
      this._size = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acl = value.acl;
      this._backup = value.backup;
      this._mountOptions = value.mountOptions;
      this._path = value.path;
      this._quota = value.quota;
      this._readOnly = value.readOnly;
      this._replicate = value.replicate;
      this._shared = value.shared;
      this._size = value.size;
      this._volume = value.volume;
    }
  }

  // acl - computed: false, optional: true, required: false
  private _acl?: boolean | cdktf.IResolvable; 
  public get acl() {
    return this.getBooleanAttribute('acl');
  }
  public set acl(value: boolean | cdktf.IResolvable) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
  }

  // backup - computed: false, optional: true, required: false
  private _backup?: boolean | cdktf.IResolvable; 
  public get backup() {
    return this.getBooleanAttribute('backup');
  }
  public set backup(value: boolean | cdktf.IResolvable) {
    this._backup = value;
  }
  public resetBackup() {
    this._backup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup;
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string[]; 
  public get mountOptions() {
    return this.getListAttribute('mount_options');
  }
  public set mountOptions(value: string[]) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // quota - computed: false, optional: true, required: false
  private _quota?: boolean | cdktf.IResolvable; 
  public get quota() {
    return this.getBooleanAttribute('quota');
  }
  public set quota(value: boolean | cdktf.IResolvable) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // replicate - computed: false, optional: true, required: false
  private _replicate?: boolean | cdktf.IResolvable; 
  public get replicate() {
    return this.getBooleanAttribute('replicate');
  }
  public set replicate(value: boolean | cdktf.IResolvable) {
    this._replicate = value;
  }
  public resetReplicate() {
    this._replicate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicateInput() {
    return this._replicate;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: boolean | cdktf.IResolvable; 
  public get shared() {
    return this.getBooleanAttribute('shared');
  }
  public set shared(value: boolean | cdktf.IResolvable) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // volume - computed: false, optional: false, required: true
  private _volume?: string; 
  public get volume() {
    return this.getStringAttribute('volume');
  }
  public set volume(value: string) {
    this._volume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}

export class VirtualEnvironmentContainerMountPointList extends cdktf.ComplexList {
  public internalValue? : VirtualEnvironmentContainerMountPoint[] | cdktf.IResolvable

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
  public get(index: number): VirtualEnvironmentContainerMountPointOutputReference {
    return new VirtualEnvironmentContainerMountPointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualEnvironmentContainerNetworkInterface {
  /**
  * The bridge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#bridge VirtualEnvironmentContainer#bridge}
  */
  readonly bridge?: string;
  /**
  * Whether to enable the network device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#enabled VirtualEnvironmentContainer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether this interface's firewall rules should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#firewall VirtualEnvironmentContainer#firewall}
  */
  readonly firewall?: boolean | cdktf.IResolvable;
  /**
  * The MAC address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#mac_address VirtualEnvironmentContainer#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Maximum transmission unit (MTU)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#mtu VirtualEnvironmentContainer#mtu}
  */
  readonly mtu?: number;
  /**
  * The network interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#name VirtualEnvironmentContainer#name}
  */
  readonly name: string;
  /**
  * The rate limit in megabytes per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#rate_limit VirtualEnvironmentContainer#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * The VLAN identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#vlan_id VirtualEnvironmentContainer#vlan_id}
  */
  readonly vlanId?: number;
}

export function virtualEnvironmentContainerNetworkInterfaceToTerraform(struct?: VirtualEnvironmentContainerNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bridge: cdktf.stringToTerraform(struct!.bridge),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    firewall: cdktf.booleanToTerraform(struct!.firewall),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
    rate_limit: cdktf.numberToTerraform(struct!.rateLimit),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
  }
}


export function virtualEnvironmentContainerNetworkInterfaceToHclTerraform(struct?: VirtualEnvironmentContainerNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bridge: {
      value: cdktf.stringToHclTerraform(struct!.bridge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    firewall: {
      value: cdktf.booleanToHclTerraform(struct!.firewall),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
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
    rate_limit: {
      value: cdktf.numberToHclTerraform(struct!.rateLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentContainerNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualEnvironmentContainerNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bridge !== undefined) {
      hasAnyValues = true;
      internalValueResult.bridge = this._bridge;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._firewall !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewall = this._firewall;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._rateLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentContainerNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bridge = undefined;
      this._enabled = undefined;
      this._firewall = undefined;
      this._macAddress = undefined;
      this._mtu = undefined;
      this._name = undefined;
      this._rateLimit = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bridge = value.bridge;
      this._enabled = value.enabled;
      this._firewall = value.firewall;
      this._macAddress = value.macAddress;
      this._mtu = value.mtu;
      this._name = value.name;
      this._rateLimit = value.rateLimit;
      this._vlanId = value.vlanId;
    }
  }

  // bridge - computed: false, optional: true, required: false
  private _bridge?: string; 
  public get bridge() {
    return this.getStringAttribute('bridge');
  }
  public set bridge(value: string) {
    this._bridge = value;
  }
  public resetBridge() {
    this._bridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeInput() {
    return this._bridge;
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

  // firewall - computed: false, optional: true, required: false
  private _firewall?: boolean | cdktf.IResolvable; 
  public get firewall() {
    return this.getBooleanAttribute('firewall');
  }
  public set firewall(value: boolean | cdktf.IResolvable) {
    this._firewall = value;
  }
  public resetFirewall() {
    this._firewall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallInput() {
    return this._firewall;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this.getNumberAttribute('rate_limit');
  }
  public set rateLimit(value: number) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

export class VirtualEnvironmentContainerNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : VirtualEnvironmentContainerNetworkInterface[] | cdktf.IResolvable

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
  public get(index: number): VirtualEnvironmentContainerNetworkInterfaceOutputReference {
    return new VirtualEnvironmentContainerNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualEnvironmentContainerOperatingSystem {
  /**
  * The ID of an OS template file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#template_file_id VirtualEnvironmentContainer#template_file_id}
  */
  readonly templateFileId: string;
  /**
  * The type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#type VirtualEnvironmentContainer#type}
  */
  readonly type?: string;
}

export function virtualEnvironmentContainerOperatingSystemToTerraform(struct?: VirtualEnvironmentContainerOperatingSystemOutputReference | VirtualEnvironmentContainerOperatingSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template_file_id: cdktf.stringToTerraform(struct!.templateFileId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualEnvironmentContainerOperatingSystemToHclTerraform(struct?: VirtualEnvironmentContainerOperatingSystemOutputReference | VirtualEnvironmentContainerOperatingSystem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template_file_id: {
      value: cdktf.stringToHclTerraform(struct!.templateFileId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentContainerOperatingSystemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentContainerOperatingSystem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._templateFileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateFileId = this._templateFileId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentContainerOperatingSystem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._templateFileId = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._templateFileId = value.templateFileId;
      this._type = value.type;
    }
  }

  // template_file_id - computed: false, optional: false, required: true
  private _templateFileId?: string; 
  public get templateFileId() {
    return this.getStringAttribute('template_file_id');
  }
  public set templateFileId(value: string) {
    this._templateFileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateFileIdInput() {
    return this._templateFileId;
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
}
export interface VirtualEnvironmentContainerStartup {
  /**
  * A non-negative number defining the delay in seconds before the next container is shut down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#down_delay VirtualEnvironmentContainer#down_delay}
  */
  readonly downDelay?: number;
  /**
  * A non-negative number defining the general startup order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#order VirtualEnvironmentContainer#order}
  */
  readonly order?: number;
  /**
  * A non-negative number defining the delay in seconds before the next container is started
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#up_delay VirtualEnvironmentContainer#up_delay}
  */
  readonly upDelay?: number;
}

export function virtualEnvironmentContainerStartupToTerraform(struct?: VirtualEnvironmentContainerStartupOutputReference | VirtualEnvironmentContainerStartup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    down_delay: cdktf.numberToTerraform(struct!.downDelay),
    order: cdktf.numberToTerraform(struct!.order),
    up_delay: cdktf.numberToTerraform(struct!.upDelay),
  }
}


export function virtualEnvironmentContainerStartupToHclTerraform(struct?: VirtualEnvironmentContainerStartupOutputReference | VirtualEnvironmentContainerStartup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    down_delay: {
      value: cdktf.numberToHclTerraform(struct!.downDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    up_delay: {
      value: cdktf.numberToHclTerraform(struct!.upDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentContainerStartupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentContainerStartup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._downDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.downDelay = this._downDelay;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._upDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.upDelay = this._upDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentContainerStartup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._downDelay = undefined;
      this._order = undefined;
      this._upDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._downDelay = value.downDelay;
      this._order = value.order;
      this._upDelay = value.upDelay;
    }
  }

  // down_delay - computed: false, optional: true, required: false
  private _downDelay?: number; 
  public get downDelay() {
    return this.getNumberAttribute('down_delay');
  }
  public set downDelay(value: number) {
    this._downDelay = value;
  }
  public resetDownDelay() {
    this._downDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downDelayInput() {
    return this._downDelay;
  }

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // up_delay - computed: false, optional: true, required: false
  private _upDelay?: number; 
  public get upDelay() {
    return this.getNumberAttribute('up_delay');
  }
  public set upDelay(value: number) {
    this._upDelay = value;
  }
  public resetUpDelay() {
    this._upDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upDelayInput() {
    return this._upDelay;
  }
}
export interface VirtualEnvironmentContainerWaitForIp {
  /**
  * Wait for at least one IPv4 address (non-loopback, non-link-local)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#ipv4 VirtualEnvironmentContainer#ipv4}
  */
  readonly ipv4?: boolean | cdktf.IResolvable;
  /**
  * Wait for at least one IPv6 address (non-loopback, non-link-local)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#ipv6 VirtualEnvironmentContainer#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
}

export function virtualEnvironmentContainerWaitForIpToTerraform(struct?: VirtualEnvironmentContainerWaitForIpOutputReference | VirtualEnvironmentContainerWaitForIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.booleanToTerraform(struct!.ipv4),
    ipv6: cdktf.booleanToTerraform(struct!.ipv6),
  }
}


export function virtualEnvironmentContainerWaitForIpToHclTerraform(struct?: VirtualEnvironmentContainerWaitForIpOutputReference | VirtualEnvironmentContainerWaitForIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.booleanToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualEnvironmentContainerWaitForIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualEnvironmentContainerWaitForIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualEnvironmentContainerWaitForIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4 = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4 = value.ipv4;
      this._ipv6 = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4?: boolean | cdktf.IResolvable; 
  public get ipv4() {
    return this.getBooleanAttribute('ipv4');
  }
  public set ipv4(value: boolean | cdktf.IResolvable) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: boolean | cdktf.IResolvable; 
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }
  public set ipv6(value: boolean | cdktf.IResolvable) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container proxmox_virtual_environment_container}
*/
export class VirtualEnvironmentContainer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "proxmox_virtual_environment_container";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VirtualEnvironmentContainer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VirtualEnvironmentContainer to import
  * @param importFromId The id of the existing VirtualEnvironmentContainer that should be imported. Refer to the {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VirtualEnvironmentContainer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "proxmox_virtual_environment_container", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bpg/proxmox/0.88.0/docs/resources/virtual_environment_container proxmox_virtual_environment_container} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualEnvironmentContainerConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualEnvironmentContainerConfig) {
    super(scope, id, {
      terraformResourceType: 'proxmox_virtual_environment_container',
      terraformGeneratorMetadata: {
        providerName: 'proxmox',
        providerVersion: '0.88.0',
        providerVersionConstraint: '0.88.0'
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
    this._hookScriptFileId = config.hookScriptFileId;
    this._id = config.id;
    this._nodeName = config.nodeName;
    this._poolId = config.poolId;
    this._protection = config.protection;
    this._startOnBoot = config.startOnBoot;
    this._started = config.started;
    this._tags = config.tags;
    this._template = config.template;
    this._timeoutClone = config.timeoutClone;
    this._timeoutCreate = config.timeoutCreate;
    this._timeoutDelete = config.timeoutDelete;
    this._timeoutStart = config.timeoutStart;
    this._timeoutUpdate = config.timeoutUpdate;
    this._unprivileged = config.unprivileged;
    this._vmId = config.vmId;
    this._clone.internalValue = config.clone;
    this._console.internalValue = config.console;
    this._cpu.internalValue = config.cpu;
    this._devicePassthrough.internalValue = config.devicePassthrough;
    this._disk.internalValue = config.disk;
    this._features.internalValue = config.features;
    this._initialization.internalValue = config.initialization;
    this._memory.internalValue = config.memory;
    this._mountPoint.internalValue = config.mountPoint;
    this._networkInterface.internalValue = config.networkInterface;
    this._operatingSystem.internalValue = config.operatingSystem;
    this._startup.internalValue = config.startup;
    this._waitForIp.internalValue = config.waitForIp;
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

  // hook_script_file_id - computed: false, optional: true, required: false
  private _hookScriptFileId?: string; 
  public get hookScriptFileId() {
    return this.getStringAttribute('hook_script_file_id');
  }
  public set hookScriptFileId(value: string) {
    this._hookScriptFileId = value;
  }
  public resetHookScriptFileId() {
    this._hookScriptFileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hookScriptFileIdInput() {
    return this._hookScriptFileId;
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

  // ipv4 - computed: true, optional: false, required: false
  private _ipv4 = new cdktf.StringMap(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: false, required: false
  private _ipv6 = new cdktf.StringMap(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
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

  // pool_id - computed: false, optional: true, required: false
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  public resetPoolId() {
    this._poolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }

  // protection - computed: false, optional: true, required: false
  private _protection?: boolean | cdktf.IResolvable; 
  public get protection() {
    return this.getBooleanAttribute('protection');
  }
  public set protection(value: boolean | cdktf.IResolvable) {
    this._protection = value;
  }
  public resetProtection() {
    this._protection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionInput() {
    return this._protection;
  }

  // start_on_boot - computed: false, optional: true, required: false
  private _startOnBoot?: boolean | cdktf.IResolvable; 
  public get startOnBoot() {
    return this.getBooleanAttribute('start_on_boot');
  }
  public set startOnBoot(value: boolean | cdktf.IResolvable) {
    this._startOnBoot = value;
  }
  public resetStartOnBoot() {
    this._startOnBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startOnBootInput() {
    return this._startOnBoot;
  }

  // started - computed: false, optional: true, required: false
  private _started?: boolean | cdktf.IResolvable; 
  public get started() {
    return this.getBooleanAttribute('started');
  }
  public set started(value: boolean | cdktf.IResolvable) {
    this._started = value;
  }
  public resetStarted() {
    this._started = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedInput() {
    return this._started;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
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

  // timeout_clone - computed: false, optional: true, required: false
  private _timeoutClone?: number; 
  public get timeoutClone() {
    return this.getNumberAttribute('timeout_clone');
  }
  public set timeoutClone(value: number) {
    this._timeoutClone = value;
  }
  public resetTimeoutClone() {
    this._timeoutClone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutCloneInput() {
    return this._timeoutClone;
  }

  // timeout_create - computed: false, optional: true, required: false
  private _timeoutCreate?: number; 
  public get timeoutCreate() {
    return this.getNumberAttribute('timeout_create');
  }
  public set timeoutCreate(value: number) {
    this._timeoutCreate = value;
  }
  public resetTimeoutCreate() {
    this._timeoutCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutCreateInput() {
    return this._timeoutCreate;
  }

  // timeout_delete - computed: false, optional: true, required: false
  private _timeoutDelete?: number; 
  public get timeoutDelete() {
    return this.getNumberAttribute('timeout_delete');
  }
  public set timeoutDelete(value: number) {
    this._timeoutDelete = value;
  }
  public resetTimeoutDelete() {
    this._timeoutDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutDeleteInput() {
    return this._timeoutDelete;
  }

  // timeout_start - computed: false, optional: true, required: false
  private _timeoutStart?: number; 
  public get timeoutStart() {
    return this.getNumberAttribute('timeout_start');
  }
  public set timeoutStart(value: number) {
    this._timeoutStart = value;
  }
  public resetTimeoutStart() {
    this._timeoutStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutStartInput() {
    return this._timeoutStart;
  }

  // timeout_update - computed: false, optional: true, required: false
  private _timeoutUpdate?: number; 
  public get timeoutUpdate() {
    return this.getNumberAttribute('timeout_update');
  }
  public set timeoutUpdate(value: number) {
    this._timeoutUpdate = value;
  }
  public resetTimeoutUpdate() {
    this._timeoutUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutUpdateInput() {
    return this._timeoutUpdate;
  }

  // unprivileged - computed: false, optional: true, required: false
  private _unprivileged?: boolean | cdktf.IResolvable; 
  public get unprivileged() {
    return this.getBooleanAttribute('unprivileged');
  }
  public set unprivileged(value: boolean | cdktf.IResolvable) {
    this._unprivileged = value;
  }
  public resetUnprivileged() {
    this._unprivileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unprivilegedInput() {
    return this._unprivileged;
  }

  // vm_id - computed: true, optional: true, required: false
  private _vmId?: number; 
  public get vmId() {
    return this.getNumberAttribute('vm_id');
  }
  public set vmId(value: number) {
    this._vmId = value;
  }
  public resetVmId() {
    this._vmId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }

  // clone - computed: false, optional: true, required: false
  private _clone = new VirtualEnvironmentContainerCloneOutputReference(this, "clone");
  public get clone() {
    return this._clone;
  }
  public putClone(value: VirtualEnvironmentContainerClone) {
    this._clone.internalValue = value;
  }
  public resetClone() {
    this._clone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneInput() {
    return this._clone.internalValue;
  }

  // console - computed: false, optional: true, required: false
  private _console = new VirtualEnvironmentContainerConsoleOutputReference(this, "console");
  public get console() {
    return this._console;
  }
  public putConsole(value: VirtualEnvironmentContainerConsole) {
    this._console.internalValue = value;
  }
  public resetConsole() {
    this._console.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console.internalValue;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new VirtualEnvironmentContainerCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: VirtualEnvironmentContainerCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // device_passthrough - computed: false, optional: true, required: false
  private _devicePassthrough = new VirtualEnvironmentContainerDevicePassthroughList(this, "device_passthrough", false);
  public get devicePassthrough() {
    return this._devicePassthrough;
  }
  public putDevicePassthrough(value: VirtualEnvironmentContainerDevicePassthrough[] | cdktf.IResolvable) {
    this._devicePassthrough.internalValue = value;
  }
  public resetDevicePassthrough() {
    this._devicePassthrough.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePassthroughInput() {
    return this._devicePassthrough.internalValue;
  }

  // disk - computed: false, optional: true, required: false
  private _disk = new VirtualEnvironmentContainerDiskOutputReference(this, "disk");
  public get disk() {
    return this._disk;
  }
  public putDisk(value: VirtualEnvironmentContainerDisk) {
    this._disk.internalValue = value;
  }
  public resetDisk() {
    this._disk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // features - computed: false, optional: true, required: false
  private _features = new VirtualEnvironmentContainerFeaturesOutputReference(this, "features");
  public get features() {
    return this._features;
  }
  public putFeatures(value: VirtualEnvironmentContainerFeatures) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // initialization - computed: false, optional: true, required: false
  private _initialization = new VirtualEnvironmentContainerInitializationOutputReference(this, "initialization");
  public get initialization() {
    return this._initialization;
  }
  public putInitialization(value: VirtualEnvironmentContainerInitialization) {
    this._initialization.internalValue = value;
  }
  public resetInitialization() {
    this._initialization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializationInput() {
    return this._initialization.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new VirtualEnvironmentContainerMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: VirtualEnvironmentContainerMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // mount_point - computed: false, optional: true, required: false
  private _mountPoint = new VirtualEnvironmentContainerMountPointList(this, "mount_point", false);
  public get mountPoint() {
    return this._mountPoint;
  }
  public putMountPoint(value: VirtualEnvironmentContainerMountPoint[] | cdktf.IResolvable) {
    this._mountPoint.internalValue = value;
  }
  public resetMountPoint() {
    this._mountPoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPointInput() {
    return this._mountPoint.internalValue;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface = new VirtualEnvironmentContainerNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: VirtualEnvironmentContainerNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  public resetNetworkInterface() {
    this._networkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // operating_system - computed: false, optional: true, required: false
  private _operatingSystem = new VirtualEnvironmentContainerOperatingSystemOutputReference(this, "operating_system");
  public get operatingSystem() {
    return this._operatingSystem;
  }
  public putOperatingSystem(value: VirtualEnvironmentContainerOperatingSystem) {
    this._operatingSystem.internalValue = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem.internalValue;
  }

  // startup - computed: false, optional: true, required: false
  private _startup = new VirtualEnvironmentContainerStartupOutputReference(this, "startup");
  public get startup() {
    return this._startup;
  }
  public putStartup(value: VirtualEnvironmentContainerStartup) {
    this._startup.internalValue = value;
  }
  public resetStartup() {
    this._startup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupInput() {
    return this._startup.internalValue;
  }

  // wait_for_ip - computed: false, optional: true, required: false
  private _waitForIp = new VirtualEnvironmentContainerWaitForIpOutputReference(this, "wait_for_ip");
  public get waitForIp() {
    return this._waitForIp;
  }
  public putWaitForIp(value: VirtualEnvironmentContainerWaitForIp) {
    this._waitForIp.internalValue = value;
  }
  public resetWaitForIp() {
    this._waitForIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForIpInput() {
    return this._waitForIp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      hook_script_file_id: cdktf.stringToTerraform(this._hookScriptFileId),
      id: cdktf.stringToTerraform(this._id),
      node_name: cdktf.stringToTerraform(this._nodeName),
      pool_id: cdktf.stringToTerraform(this._poolId),
      protection: cdktf.booleanToTerraform(this._protection),
      start_on_boot: cdktf.booleanToTerraform(this._startOnBoot),
      started: cdktf.booleanToTerraform(this._started),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      template: cdktf.booleanToTerraform(this._template),
      timeout_clone: cdktf.numberToTerraform(this._timeoutClone),
      timeout_create: cdktf.numberToTerraform(this._timeoutCreate),
      timeout_delete: cdktf.numberToTerraform(this._timeoutDelete),
      timeout_start: cdktf.numberToTerraform(this._timeoutStart),
      timeout_update: cdktf.numberToTerraform(this._timeoutUpdate),
      unprivileged: cdktf.booleanToTerraform(this._unprivileged),
      vm_id: cdktf.numberToTerraform(this._vmId),
      clone: virtualEnvironmentContainerCloneToTerraform(this._clone.internalValue),
      console: virtualEnvironmentContainerConsoleToTerraform(this._console.internalValue),
      cpu: virtualEnvironmentContainerCpuToTerraform(this._cpu.internalValue),
      device_passthrough: cdktf.listMapper(virtualEnvironmentContainerDevicePassthroughToTerraform, true)(this._devicePassthrough.internalValue),
      disk: virtualEnvironmentContainerDiskToTerraform(this._disk.internalValue),
      features: virtualEnvironmentContainerFeaturesToTerraform(this._features.internalValue),
      initialization: virtualEnvironmentContainerInitializationToTerraform(this._initialization.internalValue),
      memory: virtualEnvironmentContainerMemoryToTerraform(this._memory.internalValue),
      mount_point: cdktf.listMapper(virtualEnvironmentContainerMountPointToTerraform, true)(this._mountPoint.internalValue),
      network_interface: cdktf.listMapper(virtualEnvironmentContainerNetworkInterfaceToTerraform, true)(this._networkInterface.internalValue),
      operating_system: virtualEnvironmentContainerOperatingSystemToTerraform(this._operatingSystem.internalValue),
      startup: virtualEnvironmentContainerStartupToTerraform(this._startup.internalValue),
      wait_for_ip: virtualEnvironmentContainerWaitForIpToTerraform(this._waitForIp.internalValue),
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
      hook_script_file_id: {
        value: cdktf.stringToHclTerraform(this._hookScriptFileId),
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
      node_name: {
        value: cdktf.stringToHclTerraform(this._nodeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_id: {
        value: cdktf.stringToHclTerraform(this._poolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection: {
        value: cdktf.booleanToHclTerraform(this._protection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      start_on_boot: {
        value: cdktf.booleanToHclTerraform(this._startOnBoot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      started: {
        value: cdktf.booleanToHclTerraform(this._started),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      template: {
        value: cdktf.booleanToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout_clone: {
        value: cdktf.numberToHclTerraform(this._timeoutClone),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_create: {
        value: cdktf.numberToHclTerraform(this._timeoutCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_delete: {
        value: cdktf.numberToHclTerraform(this._timeoutDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_start: {
        value: cdktf.numberToHclTerraform(this._timeoutStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_update: {
        value: cdktf.numberToHclTerraform(this._timeoutUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unprivileged: {
        value: cdktf.booleanToHclTerraform(this._unprivileged),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vm_id: {
        value: cdktf.numberToHclTerraform(this._vmId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      clone: {
        value: virtualEnvironmentContainerCloneToHclTerraform(this._clone.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentContainerCloneList",
      },
      console: {
        value: virtualEnvironmentContainerConsoleToHclTerraform(this._console.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentContainerConsoleList",
      },
      cpu: {
        value: virtualEnvironmentContainerCpuToHclTerraform(this._cpu.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentContainerCpuList",
      },
      device_passthrough: {
        value: cdktf.listMapperHcl(virtualEnvironmentContainerDevicePassthroughToHclTerraform, true)(this._devicePassthrough.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentContainerDevicePassthroughList",
      },
      disk: {
        value: virtualEnvironmentContainerDiskToHclTerraform(this._disk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentContainerDiskList",
      },
      features: {
        value: virtualEnvironmentContainerFeaturesToHclTerraform(this._features.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentContainerFeaturesList",
      },
      initialization: {
        value: virtualEnvironmentContainerInitializationToHclTerraform(this._initialization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentContainerInitializationList",
      },
      memory: {
        value: virtualEnvironmentContainerMemoryToHclTerraform(this._memory.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentContainerMemoryList",
      },
      mount_point: {
        value: cdktf.listMapperHcl(virtualEnvironmentContainerMountPointToHclTerraform, true)(this._mountPoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentContainerMountPointList",
      },
      network_interface: {
        value: cdktf.listMapperHcl(virtualEnvironmentContainerNetworkInterfaceToHclTerraform, true)(this._networkInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentContainerNetworkInterfaceList",
      },
      operating_system: {
        value: virtualEnvironmentContainerOperatingSystemToHclTerraform(this._operatingSystem.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentContainerOperatingSystemList",
      },
      startup: {
        value: virtualEnvironmentContainerStartupToHclTerraform(this._startup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentContainerStartupList",
      },
      wait_for_ip: {
        value: virtualEnvironmentContainerWaitForIpToHclTerraform(this._waitForIp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualEnvironmentContainerWaitForIpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
