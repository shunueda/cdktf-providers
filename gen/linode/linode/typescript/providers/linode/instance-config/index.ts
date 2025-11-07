// https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InstanceConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, the Linode will be booted to running state. If false, the Linode will be shutdown. If undefined, no action will be taken.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#booted InstanceConfigA#booted}
  */
  readonly booted?: boolean | cdktf.IResolvable;
  /**
  * Optional field for arbitrary User comments on this Config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#comments InstanceConfigA#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#id InstanceConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A Kernel ID to boot a Linode with. Defaults to “linode/latest-64bit”.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#kernel InstanceConfigA#kernel}
  */
  readonly kernel?: string;
  /**
  * The Config's label for display purposes only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#label InstanceConfigA#label}
  */
  readonly label: string;
  /**
  * The ID of the Linode to create this configuration profile under.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#linode_id InstanceConfigA#linode_id}
  */
  readonly linodeId: number;
  /**
  * The memory limit of the Linode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#memory_limit InstanceConfigA#memory_limit}
  */
  readonly memoryLimit?: number;
  /**
  * The root device to boot. If no value or an invalid value is provided, root device will default to /dev/sda. If the device specified at the root device location is not mounted, the Linode will not boot until a device is mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#root_device InstanceConfigA#root_device}
  */
  readonly rootDevice?: string;
  /**
  * Defines the state of your Linode after booting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#run_level InstanceConfigA#run_level}
  */
  readonly runLevel?: string;
  /**
  * Controls the virtualization mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#virt_mode InstanceConfigA#virt_mode}
  */
  readonly virtMode?: string;
  /**
  * device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#device InstanceConfigA#device}
  */
  readonly device?: InstanceConfigDevice[] | cdktf.IResolvable;
  /**
  * devices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#devices InstanceConfigA#devices}
  */
  readonly devices?: InstanceConfigDevicesA;
  /**
  * helpers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#helpers InstanceConfigA#helpers}
  */
  readonly helpers?: InstanceConfigHelpersA[] | cdktf.IResolvable;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#interface InstanceConfigA#interface}
  */
  readonly interface?: InstanceConfigInterfaceA[] | cdktf.IResolvable;
}
export interface InstanceConfigDevice {
  /**
  * The Disk ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#device_name InstanceConfigA#device_name}
  */
  readonly deviceName: string;
  /**
  * The Disk ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#disk_id InstanceConfigA#disk_id}
  */
  readonly diskId?: number;
  /**
  * The Block Storage volume ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#volume_id InstanceConfigA#volume_id}
  */
  readonly volumeId?: number;
}

export function instanceConfigDeviceToTerraform(struct?: InstanceConfigDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    disk_id: cdktf.numberToTerraform(struct!.diskId),
    volume_id: cdktf.numberToTerraform(struct!.volumeId),
  }
}


export function instanceConfigDeviceToHclTerraform(struct?: InstanceConfigDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_id: {
      value: cdktf.numberToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_id: {
      value: cdktf.numberToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceConfigDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._diskId = undefined;
      this._volumeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._diskId = value.diskId;
      this._volumeId = value.volumeId;
    }
  }

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // disk_id - computed: false, optional: true, required: false
  private _diskId?: number; 
  public get diskId() {
    return this.getNumberAttribute('disk_id');
  }
  public set diskId(value: number) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: number; 
  public get volumeId() {
    return this.getNumberAttribute('volume_id');
  }
  public set volumeId(value: number) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}

export class InstanceConfigDeviceList extends cdktf.ComplexList {
  public internalValue? : InstanceConfigDevice[] | cdktf.IResolvable

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
  public get(index: number): InstanceConfigDeviceOutputReference {
    return new InstanceConfigDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceConfigDevicesSdaA {
  /**
  * The Disk ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#disk_id InstanceConfigA#disk_id}
  */
  readonly diskId?: number;
  /**
  * The Block Storage volume ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#volume_id InstanceConfigA#volume_id}
  */
  readonly volumeId?: number;
}

export function instanceConfigDevicesSdaAToTerraform(struct?: InstanceConfigDevicesSdaAOutputReference | InstanceConfigDevicesSdaA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_id: cdktf.numberToTerraform(struct!.diskId),
    volume_id: cdktf.numberToTerraform(struct!.volumeId),
  }
}


export function instanceConfigDevicesSdaAToHclTerraform(struct?: InstanceConfigDevicesSdaAOutputReference | InstanceConfigDevicesSdaA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_id: {
      value: cdktf.numberToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_id: {
      value: cdktf.numberToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigDevicesSdaAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigDevicesSdaA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigDevicesSdaA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskId = undefined;
      this._volumeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskId = value.diskId;
      this._volumeId = value.volumeId;
    }
  }

  // disk_id - computed: false, optional: true, required: false
  private _diskId?: number; 
  public get diskId() {
    return this.getNumberAttribute('disk_id');
  }
  public set diskId(value: number) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: number; 
  public get volumeId() {
    return this.getNumberAttribute('volume_id');
  }
  public set volumeId(value: number) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface InstanceConfigDevicesSdbA {
  /**
  * The Disk ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#disk_id InstanceConfigA#disk_id}
  */
  readonly diskId?: number;
  /**
  * The Block Storage volume ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#volume_id InstanceConfigA#volume_id}
  */
  readonly volumeId?: number;
}

export function instanceConfigDevicesSdbAToTerraform(struct?: InstanceConfigDevicesSdbAOutputReference | InstanceConfigDevicesSdbA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_id: cdktf.numberToTerraform(struct!.diskId),
    volume_id: cdktf.numberToTerraform(struct!.volumeId),
  }
}


export function instanceConfigDevicesSdbAToHclTerraform(struct?: InstanceConfigDevicesSdbAOutputReference | InstanceConfigDevicesSdbA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_id: {
      value: cdktf.numberToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_id: {
      value: cdktf.numberToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigDevicesSdbAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigDevicesSdbA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigDevicesSdbA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskId = undefined;
      this._volumeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskId = value.diskId;
      this._volumeId = value.volumeId;
    }
  }

  // disk_id - computed: false, optional: true, required: false
  private _diskId?: number; 
  public get diskId() {
    return this.getNumberAttribute('disk_id');
  }
  public set diskId(value: number) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: number; 
  public get volumeId() {
    return this.getNumberAttribute('volume_id');
  }
  public set volumeId(value: number) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface InstanceConfigDevicesSdcA {
  /**
  * The Disk ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#disk_id InstanceConfigA#disk_id}
  */
  readonly diskId?: number;
  /**
  * The Block Storage volume ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#volume_id InstanceConfigA#volume_id}
  */
  readonly volumeId?: number;
}

export function instanceConfigDevicesSdcAToTerraform(struct?: InstanceConfigDevicesSdcAOutputReference | InstanceConfigDevicesSdcA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_id: cdktf.numberToTerraform(struct!.diskId),
    volume_id: cdktf.numberToTerraform(struct!.volumeId),
  }
}


export function instanceConfigDevicesSdcAToHclTerraform(struct?: InstanceConfigDevicesSdcAOutputReference | InstanceConfigDevicesSdcA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_id: {
      value: cdktf.numberToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_id: {
      value: cdktf.numberToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigDevicesSdcAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigDevicesSdcA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigDevicesSdcA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskId = undefined;
      this._volumeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskId = value.diskId;
      this._volumeId = value.volumeId;
    }
  }

  // disk_id - computed: false, optional: true, required: false
  private _diskId?: number; 
  public get diskId() {
    return this.getNumberAttribute('disk_id');
  }
  public set diskId(value: number) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: number; 
  public get volumeId() {
    return this.getNumberAttribute('volume_id');
  }
  public set volumeId(value: number) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface InstanceConfigDevicesSddA {
  /**
  * The Disk ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#disk_id InstanceConfigA#disk_id}
  */
  readonly diskId?: number;
  /**
  * The Block Storage volume ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#volume_id InstanceConfigA#volume_id}
  */
  readonly volumeId?: number;
}

export function instanceConfigDevicesSddAToTerraform(struct?: InstanceConfigDevicesSddAOutputReference | InstanceConfigDevicesSddA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_id: cdktf.numberToTerraform(struct!.diskId),
    volume_id: cdktf.numberToTerraform(struct!.volumeId),
  }
}


export function instanceConfigDevicesSddAToHclTerraform(struct?: InstanceConfigDevicesSddAOutputReference | InstanceConfigDevicesSddA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_id: {
      value: cdktf.numberToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_id: {
      value: cdktf.numberToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigDevicesSddAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigDevicesSddA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigDevicesSddA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskId = undefined;
      this._volumeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskId = value.diskId;
      this._volumeId = value.volumeId;
    }
  }

  // disk_id - computed: false, optional: true, required: false
  private _diskId?: number; 
  public get diskId() {
    return this.getNumberAttribute('disk_id');
  }
  public set diskId(value: number) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: number; 
  public get volumeId() {
    return this.getNumberAttribute('volume_id');
  }
  public set volumeId(value: number) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface InstanceConfigDevicesSdeA {
  /**
  * The Disk ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#disk_id InstanceConfigA#disk_id}
  */
  readonly diskId?: number;
  /**
  * The Block Storage volume ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#volume_id InstanceConfigA#volume_id}
  */
  readonly volumeId?: number;
}

export function instanceConfigDevicesSdeAToTerraform(struct?: InstanceConfigDevicesSdeAOutputReference | InstanceConfigDevicesSdeA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_id: cdktf.numberToTerraform(struct!.diskId),
    volume_id: cdktf.numberToTerraform(struct!.volumeId),
  }
}


export function instanceConfigDevicesSdeAToHclTerraform(struct?: InstanceConfigDevicesSdeAOutputReference | InstanceConfigDevicesSdeA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_id: {
      value: cdktf.numberToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_id: {
      value: cdktf.numberToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigDevicesSdeAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigDevicesSdeA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigDevicesSdeA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskId = undefined;
      this._volumeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskId = value.diskId;
      this._volumeId = value.volumeId;
    }
  }

  // disk_id - computed: false, optional: true, required: false
  private _diskId?: number; 
  public get diskId() {
    return this.getNumberAttribute('disk_id');
  }
  public set diskId(value: number) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: number; 
  public get volumeId() {
    return this.getNumberAttribute('volume_id');
  }
  public set volumeId(value: number) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface InstanceConfigDevicesSdfA {
  /**
  * The Disk ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#disk_id InstanceConfigA#disk_id}
  */
  readonly diskId?: number;
  /**
  * The Block Storage volume ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#volume_id InstanceConfigA#volume_id}
  */
  readonly volumeId?: number;
}

export function instanceConfigDevicesSdfAToTerraform(struct?: InstanceConfigDevicesSdfAOutputReference | InstanceConfigDevicesSdfA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_id: cdktf.numberToTerraform(struct!.diskId),
    volume_id: cdktf.numberToTerraform(struct!.volumeId),
  }
}


export function instanceConfigDevicesSdfAToHclTerraform(struct?: InstanceConfigDevicesSdfAOutputReference | InstanceConfigDevicesSdfA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_id: {
      value: cdktf.numberToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_id: {
      value: cdktf.numberToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigDevicesSdfAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigDevicesSdfA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigDevicesSdfA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskId = undefined;
      this._volumeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskId = value.diskId;
      this._volumeId = value.volumeId;
    }
  }

  // disk_id - computed: false, optional: true, required: false
  private _diskId?: number; 
  public get diskId() {
    return this.getNumberAttribute('disk_id');
  }
  public set diskId(value: number) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: number; 
  public get volumeId() {
    return this.getNumberAttribute('volume_id');
  }
  public set volumeId(value: number) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface InstanceConfigDevicesSdgA {
  /**
  * The Disk ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#disk_id InstanceConfigA#disk_id}
  */
  readonly diskId?: number;
  /**
  * The Block Storage volume ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#volume_id InstanceConfigA#volume_id}
  */
  readonly volumeId?: number;
}

export function instanceConfigDevicesSdgAToTerraform(struct?: InstanceConfigDevicesSdgAOutputReference | InstanceConfigDevicesSdgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_id: cdktf.numberToTerraform(struct!.diskId),
    volume_id: cdktf.numberToTerraform(struct!.volumeId),
  }
}


export function instanceConfigDevicesSdgAToHclTerraform(struct?: InstanceConfigDevicesSdgAOutputReference | InstanceConfigDevicesSdgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_id: {
      value: cdktf.numberToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_id: {
      value: cdktf.numberToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigDevicesSdgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigDevicesSdgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigDevicesSdgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskId = undefined;
      this._volumeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskId = value.diskId;
      this._volumeId = value.volumeId;
    }
  }

  // disk_id - computed: false, optional: true, required: false
  private _diskId?: number; 
  public get diskId() {
    return this.getNumberAttribute('disk_id');
  }
  public set diskId(value: number) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: number; 
  public get volumeId() {
    return this.getNumberAttribute('volume_id');
  }
  public set volumeId(value: number) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface InstanceConfigDevicesSdhA {
  /**
  * The Disk ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#disk_id InstanceConfigA#disk_id}
  */
  readonly diskId?: number;
  /**
  * The Block Storage volume ID to map to this disk slot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#volume_id InstanceConfigA#volume_id}
  */
  readonly volumeId?: number;
}

export function instanceConfigDevicesSdhAToTerraform(struct?: InstanceConfigDevicesSdhAOutputReference | InstanceConfigDevicesSdhA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disk_id: cdktf.numberToTerraform(struct!.diskId),
    volume_id: cdktf.numberToTerraform(struct!.volumeId),
  }
}


export function instanceConfigDevicesSdhAToHclTerraform(struct?: InstanceConfigDevicesSdhAOutputReference | InstanceConfigDevicesSdhA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disk_id: {
      value: cdktf.numberToHclTerraform(struct!.diskId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_id: {
      value: cdktf.numberToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigDevicesSdhAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigDevicesSdhA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._diskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskId = this._diskId;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigDevicesSdhA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._diskId = undefined;
      this._volumeId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._diskId = value.diskId;
      this._volumeId = value.volumeId;
    }
  }

  // disk_id - computed: false, optional: true, required: false
  private _diskId?: number; 
  public get diskId() {
    return this.getNumberAttribute('disk_id');
  }
  public set diskId(value: number) {
    this._diskId = value;
  }
  public resetDiskId() {
    this._diskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskIdInput() {
    return this._diskId;
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: number; 
  public get volumeId() {
    return this.getNumberAttribute('volume_id');
  }
  public set volumeId(value: number) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface InstanceConfigDevicesA {
  /**
  * sda block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#sda InstanceConfigA#sda}
  */
  readonly sda?: InstanceConfigDevicesSdaA;
  /**
  * sdb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#sdb InstanceConfigA#sdb}
  */
  readonly sdb?: InstanceConfigDevicesSdbA;
  /**
  * sdc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#sdc InstanceConfigA#sdc}
  */
  readonly sdc?: InstanceConfigDevicesSdcA;
  /**
  * sdd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#sdd InstanceConfigA#sdd}
  */
  readonly sdd?: InstanceConfigDevicesSddA;
  /**
  * sde block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#sde InstanceConfigA#sde}
  */
  readonly sde?: InstanceConfigDevicesSdeA;
  /**
  * sdf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#sdf InstanceConfigA#sdf}
  */
  readonly sdf?: InstanceConfigDevicesSdfA;
  /**
  * sdg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#sdg InstanceConfigA#sdg}
  */
  readonly sdg?: InstanceConfigDevicesSdgA;
  /**
  * sdh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#sdh InstanceConfigA#sdh}
  */
  readonly sdh?: InstanceConfigDevicesSdhA;
}

export function instanceConfigDevicesAToTerraform(struct?: InstanceConfigDevicesAOutputReference | InstanceConfigDevicesA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sda: instanceConfigDevicesSdaAToTerraform(struct!.sda),
    sdb: instanceConfigDevicesSdbAToTerraform(struct!.sdb),
    sdc: instanceConfigDevicesSdcAToTerraform(struct!.sdc),
    sdd: instanceConfigDevicesSddAToTerraform(struct!.sdd),
    sde: instanceConfigDevicesSdeAToTerraform(struct!.sde),
    sdf: instanceConfigDevicesSdfAToTerraform(struct!.sdf),
    sdg: instanceConfigDevicesSdgAToTerraform(struct!.sdg),
    sdh: instanceConfigDevicesSdhAToTerraform(struct!.sdh),
  }
}


export function instanceConfigDevicesAToHclTerraform(struct?: InstanceConfigDevicesAOutputReference | InstanceConfigDevicesA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sda: {
      value: instanceConfigDevicesSdaAToHclTerraform(struct!.sda),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigDevicesSdaAList",
    },
    sdb: {
      value: instanceConfigDevicesSdbAToHclTerraform(struct!.sdb),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigDevicesSdbAList",
    },
    sdc: {
      value: instanceConfigDevicesSdcAToHclTerraform(struct!.sdc),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigDevicesSdcAList",
    },
    sdd: {
      value: instanceConfigDevicesSddAToHclTerraform(struct!.sdd),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigDevicesSddAList",
    },
    sde: {
      value: instanceConfigDevicesSdeAToHclTerraform(struct!.sde),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigDevicesSdeAList",
    },
    sdf: {
      value: instanceConfigDevicesSdfAToHclTerraform(struct!.sdf),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigDevicesSdfAList",
    },
    sdg: {
      value: instanceConfigDevicesSdgAToHclTerraform(struct!.sdg),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigDevicesSdgAList",
    },
    sdh: {
      value: instanceConfigDevicesSdhAToHclTerraform(struct!.sdh),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigDevicesSdhAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigDevicesAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigDevicesA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sda?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sda = this._sda?.internalValue;
    }
    if (this._sdb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdb = this._sdb?.internalValue;
    }
    if (this._sdc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdc = this._sdc?.internalValue;
    }
    if (this._sdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdd = this._sdd?.internalValue;
    }
    if (this._sde?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sde = this._sde?.internalValue;
    }
    if (this._sdf?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdf = this._sdf?.internalValue;
    }
    if (this._sdg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdg = this._sdg?.internalValue;
    }
    if (this._sdh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdh = this._sdh?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigDevicesA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sda.internalValue = undefined;
      this._sdb.internalValue = undefined;
      this._sdc.internalValue = undefined;
      this._sdd.internalValue = undefined;
      this._sde.internalValue = undefined;
      this._sdf.internalValue = undefined;
      this._sdg.internalValue = undefined;
      this._sdh.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sda.internalValue = value.sda;
      this._sdb.internalValue = value.sdb;
      this._sdc.internalValue = value.sdc;
      this._sdd.internalValue = value.sdd;
      this._sde.internalValue = value.sde;
      this._sdf.internalValue = value.sdf;
      this._sdg.internalValue = value.sdg;
      this._sdh.internalValue = value.sdh;
    }
  }

  // sda - computed: false, optional: true, required: false
  private _sda = new InstanceConfigDevicesSdaAOutputReference(this, "sda");
  public get sda() {
    return this._sda;
  }
  public putSda(value: InstanceConfigDevicesSdaA) {
    this._sda.internalValue = value;
  }
  public resetSda() {
    this._sda.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdaInput() {
    return this._sda.internalValue;
  }

  // sdb - computed: false, optional: true, required: false
  private _sdb = new InstanceConfigDevicesSdbAOutputReference(this, "sdb");
  public get sdb() {
    return this._sdb;
  }
  public putSdb(value: InstanceConfigDevicesSdbA) {
    this._sdb.internalValue = value;
  }
  public resetSdb() {
    this._sdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdbInput() {
    return this._sdb.internalValue;
  }

  // sdc - computed: false, optional: true, required: false
  private _sdc = new InstanceConfigDevicesSdcAOutputReference(this, "sdc");
  public get sdc() {
    return this._sdc;
  }
  public putSdc(value: InstanceConfigDevicesSdcA) {
    this._sdc.internalValue = value;
  }
  public resetSdc() {
    this._sdc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdcInput() {
    return this._sdc.internalValue;
  }

  // sdd - computed: false, optional: true, required: false
  private _sdd = new InstanceConfigDevicesSddAOutputReference(this, "sdd");
  public get sdd() {
    return this._sdd;
  }
  public putSdd(value: InstanceConfigDevicesSddA) {
    this._sdd.internalValue = value;
  }
  public resetSdd() {
    this._sdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sddInput() {
    return this._sdd.internalValue;
  }

  // sde - computed: false, optional: true, required: false
  private _sde = new InstanceConfigDevicesSdeAOutputReference(this, "sde");
  public get sde() {
    return this._sde;
  }
  public putSde(value: InstanceConfigDevicesSdeA) {
    this._sde.internalValue = value;
  }
  public resetSde() {
    this._sde.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdeInput() {
    return this._sde.internalValue;
  }

  // sdf - computed: false, optional: true, required: false
  private _sdf = new InstanceConfigDevicesSdfAOutputReference(this, "sdf");
  public get sdf() {
    return this._sdf;
  }
  public putSdf(value: InstanceConfigDevicesSdfA) {
    this._sdf.internalValue = value;
  }
  public resetSdf() {
    this._sdf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdfInput() {
    return this._sdf.internalValue;
  }

  // sdg - computed: false, optional: true, required: false
  private _sdg = new InstanceConfigDevicesSdgAOutputReference(this, "sdg");
  public get sdg() {
    return this._sdg;
  }
  public putSdg(value: InstanceConfigDevicesSdgA) {
    this._sdg.internalValue = value;
  }
  public resetSdg() {
    this._sdg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdgInput() {
    return this._sdg.internalValue;
  }

  // sdh - computed: false, optional: true, required: false
  private _sdh = new InstanceConfigDevicesSdhAOutputReference(this, "sdh");
  public get sdh() {
    return this._sdh;
  }
  public putSdh(value: InstanceConfigDevicesSdhA) {
    this._sdh.internalValue = value;
  }
  public resetSdh() {
    this._sdh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdhInput() {
    return this._sdh.internalValue;
  }
}
export interface InstanceConfigHelpersA {
  /**
  * Populates the /dev directory early during boot without udev.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#devtmpfs_automount InstanceConfigA#devtmpfs_automount}
  */
  readonly devtmpfsAutomount?: boolean | cdktf.IResolvable;
  /**
  * Helps maintain correct inittab/upstart console device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#distro InstanceConfigA#distro}
  */
  readonly distro?: boolean | cdktf.IResolvable;
  /**
  * Creates a modules dependency file for the Kernel you run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#modules_dep InstanceConfigA#modules_dep}
  */
  readonly modulesDep?: boolean | cdktf.IResolvable;
  /**
  * Automatically configures static networking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#network InstanceConfigA#network}
  */
  readonly network?: boolean | cdktf.IResolvable;
  /**
  * Disables updatedb cron job to avoid disk thrashing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#updatedb_disabled InstanceConfigA#updatedb_disabled}
  */
  readonly updatedbDisabled?: boolean | cdktf.IResolvable;
}

export function instanceConfigHelpersAToTerraform(struct?: InstanceConfigHelpersA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    devtmpfs_automount: cdktf.booleanToTerraform(struct!.devtmpfsAutomount),
    distro: cdktf.booleanToTerraform(struct!.distro),
    modules_dep: cdktf.booleanToTerraform(struct!.modulesDep),
    network: cdktf.booleanToTerraform(struct!.network),
    updatedb_disabled: cdktf.booleanToTerraform(struct!.updatedbDisabled),
  }
}


export function instanceConfigHelpersAToHclTerraform(struct?: InstanceConfigHelpersA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    devtmpfs_automount: {
      value: cdktf.booleanToHclTerraform(struct!.devtmpfsAutomount),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    distro: {
      value: cdktf.booleanToHclTerraform(struct!.distro),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    modules_dep: {
      value: cdktf.booleanToHclTerraform(struct!.modulesDep),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network: {
      value: cdktf.booleanToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    updatedb_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.updatedbDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigHelpersAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceConfigHelpersA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devtmpfsAutomount !== undefined) {
      hasAnyValues = true;
      internalValueResult.devtmpfsAutomount = this._devtmpfsAutomount;
    }
    if (this._distro !== undefined) {
      hasAnyValues = true;
      internalValueResult.distro = this._distro;
    }
    if (this._modulesDep !== undefined) {
      hasAnyValues = true;
      internalValueResult.modulesDep = this._modulesDep;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._updatedbDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedbDisabled = this._updatedbDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigHelpersA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devtmpfsAutomount = undefined;
      this._distro = undefined;
      this._modulesDep = undefined;
      this._network = undefined;
      this._updatedbDisabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devtmpfsAutomount = value.devtmpfsAutomount;
      this._distro = value.distro;
      this._modulesDep = value.modulesDep;
      this._network = value.network;
      this._updatedbDisabled = value.updatedbDisabled;
    }
  }

  // devtmpfs_automount - computed: false, optional: true, required: false
  private _devtmpfsAutomount?: boolean | cdktf.IResolvable; 
  public get devtmpfsAutomount() {
    return this.getBooleanAttribute('devtmpfs_automount');
  }
  public set devtmpfsAutomount(value: boolean | cdktf.IResolvable) {
    this._devtmpfsAutomount = value;
  }
  public resetDevtmpfsAutomount() {
    this._devtmpfsAutomount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devtmpfsAutomountInput() {
    return this._devtmpfsAutomount;
  }

  // distro - computed: false, optional: true, required: false
  private _distro?: boolean | cdktf.IResolvable; 
  public get distro() {
    return this.getBooleanAttribute('distro');
  }
  public set distro(value: boolean | cdktf.IResolvable) {
    this._distro = value;
  }
  public resetDistro() {
    this._distro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distroInput() {
    return this._distro;
  }

  // modules_dep - computed: false, optional: true, required: false
  private _modulesDep?: boolean | cdktf.IResolvable; 
  public get modulesDep() {
    return this.getBooleanAttribute('modules_dep');
  }
  public set modulesDep(value: boolean | cdktf.IResolvable) {
    this._modulesDep = value;
  }
  public resetModulesDep() {
    this._modulesDep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modulesDepInput() {
    return this._modulesDep;
  }

  // network - computed: false, optional: true, required: false
  private _network?: boolean | cdktf.IResolvable; 
  public get network() {
    return this.getBooleanAttribute('network');
  }
  public set network(value: boolean | cdktf.IResolvable) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // updatedb_disabled - computed: false, optional: true, required: false
  private _updatedbDisabled?: boolean | cdktf.IResolvable; 
  public get updatedbDisabled() {
    return this.getBooleanAttribute('updatedb_disabled');
  }
  public set updatedbDisabled(value: boolean | cdktf.IResolvable) {
    this._updatedbDisabled = value;
  }
  public resetUpdatedbDisabled() {
    this._updatedbDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedbDisabledInput() {
    return this._updatedbDisabled;
  }
}

export class InstanceConfigHelpersAList extends cdktf.ComplexList {
  public internalValue? : InstanceConfigHelpersA[] | cdktf.IResolvable

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
  public get(index: number): InstanceConfigHelpersAOutputReference {
    return new InstanceConfigHelpersAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceConfigInterfaceIpv4A {
  /**
  * The public IP that will be used for the one-to-one NAT purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#nat_1_1 InstanceConfigA#nat_1_1}
  */
  readonly nat11?: string;
  /**
  * The IP from the VPC subnet to use for this interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#vpc InstanceConfigA#vpc}
  */
  readonly vpc?: string;
}

export function instanceConfigInterfaceIpv4AToTerraform(struct?: InstanceConfigInterfaceIpv4AOutputReference | InstanceConfigInterfaceIpv4A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nat_1_1: cdktf.stringToTerraform(struct!.nat11),
    vpc: cdktf.stringToTerraform(struct!.vpc),
  }
}


export function instanceConfigInterfaceIpv4AToHclTerraform(struct?: InstanceConfigInterfaceIpv4AOutputReference | InstanceConfigInterfaceIpv4A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nat_1_1: {
      value: cdktf.stringToHclTerraform(struct!.nat11),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc: {
      value: cdktf.stringToHclTerraform(struct!.vpc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigInterfaceIpv4AOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigInterfaceIpv4A | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nat11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat11 = this._nat11;
    }
    if (this._vpc !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpc = this._vpc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigInterfaceIpv4A | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nat11 = undefined;
      this._vpc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nat11 = value.nat11;
      this._vpc = value.vpc;
    }
  }

  // nat_1_1 - computed: true, optional: true, required: false
  private _nat11?: string; 
  public get nat11() {
    return this.getStringAttribute('nat_1_1');
  }
  public set nat11(value: string) {
    this._nat11 = value;
  }
  public resetNat11() {
    this._nat11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat11Input() {
    return this._nat11;
  }

  // vpc - computed: true, optional: true, required: false
  private _vpc?: string; 
  public get vpc() {
    return this.getStringAttribute('vpc');
  }
  public set vpc(value: string) {
    this._vpc = value;
  }
  public resetVpc() {
    this._vpc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcInput() {
    return this._vpc;
  }
}
export interface InstanceConfigInterfaceIpv6RangeA {
  /**
  * A prefix to add to this interface, or `auto` for a new IPv6 prefix to be automatically allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#range InstanceConfigA#range}
  */
  readonly range?: string;
}

export function instanceConfigInterfaceIpv6RangeAToTerraform(struct?: InstanceConfigInterfaceIpv6RangeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: cdktf.stringToTerraform(struct!.range),
  }
}


export function instanceConfigInterfaceIpv6RangeAToHclTerraform(struct?: InstanceConfigInterfaceIpv6RangeA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range: {
      value: cdktf.stringToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigInterfaceIpv6RangeAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceConfigInterfaceIpv6RangeA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigInterfaceIpv6RangeA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._range = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._range = value.range;
    }
  }

  // assigned_range - computed: true, optional: false, required: false
  public get assignedRange() {
    return this.getStringAttribute('assigned_range');
  }

  // range - computed: false, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }
}

export class InstanceConfigInterfaceIpv6RangeAList extends cdktf.ComplexList {
  public internalValue? : InstanceConfigInterfaceIpv6RangeA[] | cdktf.IResolvable

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
  public get(index: number): InstanceConfigInterfaceIpv6RangeAOutputReference {
    return new InstanceConfigInterfaceIpv6RangeAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceConfigInterfaceIpv6SlaacA {
  /**
  * A SLAAC prefix to add to this interface, or `auto` for a new IPv6 prefix to be automatically allocated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#range InstanceConfigA#range}
  */
  readonly range?: string;
}

export function instanceConfigInterfaceIpv6SlaacAToTerraform(struct?: InstanceConfigInterfaceIpv6SlaacA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: cdktf.stringToTerraform(struct!.range),
  }
}


export function instanceConfigInterfaceIpv6SlaacAToHclTerraform(struct?: InstanceConfigInterfaceIpv6SlaacA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range: {
      value: cdktf.stringToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigInterfaceIpv6SlaacAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceConfigInterfaceIpv6SlaacA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigInterfaceIpv6SlaacA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._range = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._range = value.range;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // assigned_range - computed: true, optional: false, required: false
  public get assignedRange() {
    return this.getStringAttribute('assigned_range');
  }

  // range - computed: false, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }
}

export class InstanceConfigInterfaceIpv6SlaacAList extends cdktf.ComplexList {
  public internalValue? : InstanceConfigInterfaceIpv6SlaacA[] | cdktf.IResolvable

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
  public get(index: number): InstanceConfigInterfaceIpv6SlaacAOutputReference {
    return new InstanceConfigInterfaceIpv6SlaacAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InstanceConfigInterfaceIpv6A {
  /**
  * If true, connections from the interface to IPv6 addresses outside the VPC, and connections from IPv6 addresses outside the VPC to the interface will be permitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#is_public InstanceConfigA#is_public}
  */
  readonly isPublic?: boolean | cdktf.IResolvable;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#range InstanceConfigA#range}
  */
  readonly range?: InstanceConfigInterfaceIpv6RangeA[] | cdktf.IResolvable;
  /**
  * slaac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#slaac InstanceConfigA#slaac}
  */
  readonly slaac?: InstanceConfigInterfaceIpv6SlaacA[] | cdktf.IResolvable;
}

export function instanceConfigInterfaceIpv6AToTerraform(struct?: InstanceConfigInterfaceIpv6AOutputReference | InstanceConfigInterfaceIpv6A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_public: cdktf.booleanToTerraform(struct!.isPublic),
    range: cdktf.listMapper(instanceConfigInterfaceIpv6RangeAToTerraform, true)(struct!.range),
    slaac: cdktf.listMapper(instanceConfigInterfaceIpv6SlaacAToTerraform, true)(struct!.slaac),
  }
}


export function instanceConfigInterfaceIpv6AToHclTerraform(struct?: InstanceConfigInterfaceIpv6AOutputReference | InstanceConfigInterfaceIpv6A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_public: {
      value: cdktf.booleanToHclTerraform(struct!.isPublic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    range: {
      value: cdktf.listMapperHcl(instanceConfigInterfaceIpv6RangeAToHclTerraform, true)(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigInterfaceIpv6RangeAList",
    },
    slaac: {
      value: cdktf.listMapperHcl(instanceConfigInterfaceIpv6SlaacAToHclTerraform, true)(struct!.slaac),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigInterfaceIpv6SlaacAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigInterfaceIpv6AOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InstanceConfigInterfaceIpv6A | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isPublic !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPublic = this._isPublic;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    if (this._slaac?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaac = this._slaac?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InstanceConfigInterfaceIpv6A | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isPublic = undefined;
      this._range.internalValue = undefined;
      this._slaac.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isPublic = value.isPublic;
      this._range.internalValue = value.range;
      this._slaac.internalValue = value.slaac;
    }
  }

  // is_public - computed: true, optional: true, required: false
  private _isPublic?: boolean | cdktf.IResolvable; 
  public get isPublic() {
    return this.getBooleanAttribute('is_public');
  }
  public set isPublic(value: boolean | cdktf.IResolvable) {
    this._isPublic = value;
  }
  public resetIsPublic() {
    this._isPublic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPublicInput() {
    return this._isPublic;
  }

  // range - computed: false, optional: true, required: false
  private _range = new InstanceConfigInterfaceIpv6RangeAList(this, "range", false);
  public get range() {
    return this._range;
  }
  public putRange(value: InstanceConfigInterfaceIpv6RangeA[] | cdktf.IResolvable) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }

  // slaac - computed: false, optional: true, required: false
  private _slaac = new InstanceConfigInterfaceIpv6SlaacAList(this, "slaac", false);
  public get slaac() {
    return this._slaac;
  }
  public putSlaac(value: InstanceConfigInterfaceIpv6SlaacA[] | cdktf.IResolvable) {
    this._slaac.internalValue = value;
  }
  public resetSlaac() {
    this._slaac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaacInput() {
    return this._slaac.internalValue;
  }
}
export interface InstanceConfigInterfaceA {
  /**
  * List of VPC IPs or IP ranges inside the VPC subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#ip_ranges InstanceConfigA#ip_ranges}
  */
  readonly ipRanges?: string[];
  /**
  * This Network Interface's private IP address in Classless Inter-Domain Routing (CIDR) notation.This attribute is only allowed for VLAN interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#ipam_address InstanceConfigA#ipam_address}
  */
  readonly ipamAddress?: string;
  /**
  * The name of the VALN. This attribute is required for VLAN interfaces. This attribute is only allowed for VLAN interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#label InstanceConfigA#label}
  */
  readonly label?: string;
  /**
  * Whether the interface is the primary interface that should have the default route for this Linode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#primary InstanceConfigA#primary}
  */
  readonly primary?: boolean | cdktf.IResolvable;
  /**
  * The type of interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#purpose InstanceConfigA#purpose}
  */
  readonly purpose: string;
  /**
  * The ID of the subnet which the VPC interface is connected to.This attribute is required for VPC interfaces.This attribute is only allowed for VPC interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#subnet_id InstanceConfigA#subnet_id}
  */
  readonly subnetId?: number;
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#ipv4 InstanceConfigA#ipv4}
  */
  readonly ipv4?: InstanceConfigInterfaceIpv4A;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#ipv6 InstanceConfigA#ipv6}
  */
  readonly ipv6?: InstanceConfigInterfaceIpv6A;
}

export function instanceConfigInterfaceAToTerraform(struct?: InstanceConfigInterfaceA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipRanges),
    ipam_address: cdktf.stringToTerraform(struct!.ipamAddress),
    label: cdktf.stringToTerraform(struct!.label),
    primary: cdktf.booleanToTerraform(struct!.primary),
    purpose: cdktf.stringToTerraform(struct!.purpose),
    subnet_id: cdktf.numberToTerraform(struct!.subnetId),
    ipv4: instanceConfigInterfaceIpv4AToTerraform(struct!.ipv4),
    ipv6: instanceConfigInterfaceIpv6AToTerraform(struct!.ipv6),
  }
}


export function instanceConfigInterfaceAToHclTerraform(struct?: InstanceConfigInterfaceA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipam_address: {
      value: cdktf.stringToHclTerraform(struct!.ipamAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.booleanToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    purpose: {
      value: cdktf.stringToHclTerraform(struct!.purpose),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.numberToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4: {
      value: instanceConfigInterfaceIpv4AToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigInterfaceIpv4AList",
    },
    ipv6: {
      value: instanceConfigInterfaceIpv6AToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "InstanceConfigInterfaceIpv6AList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InstanceConfigInterfaceAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InstanceConfigInterfaceA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRanges = this._ipRanges;
    }
    if (this._ipamAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipamAddress = this._ipamAddress;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._purpose !== undefined) {
      hasAnyValues = true;
      internalValueResult.purpose = this._purpose;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
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

  public set internalValue(value: InstanceConfigInterfaceA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipRanges = undefined;
      this._ipamAddress = undefined;
      this._label = undefined;
      this._primary = undefined;
      this._purpose = undefined;
      this._subnetId = undefined;
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
      this._ipRanges = value.ipRanges;
      this._ipamAddress = value.ipamAddress;
      this._label = value.label;
      this._primary = value.primary;
      this._purpose = value.purpose;
      this._subnetId = value.subnetId;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // ip_ranges - computed: false, optional: true, required: false
  private _ipRanges?: string[]; 
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
  public set ipRanges(value: string[]) {
    this._ipRanges = value;
  }
  public resetIpRanges() {
    this._ipRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRangesInput() {
    return this._ipRanges;
  }

  // ipam_address - computed: false, optional: true, required: false
  private _ipamAddress?: string; 
  public get ipamAddress() {
    return this.getStringAttribute('ipam_address');
  }
  public set ipamAddress(value: string) {
    this._ipamAddress = value;
  }
  public resetIpamAddress() {
    this._ipamAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipamAddressInput() {
    return this._ipamAddress;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: boolean | cdktf.IResolvable; 
  public get primary() {
    return this.getBooleanAttribute('primary');
  }
  public set primary(value: boolean | cdktf.IResolvable) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // purpose - computed: false, optional: false, required: true
  private _purpose?: string; 
  public get purpose() {
    return this.getStringAttribute('purpose');
  }
  public set purpose(value: string) {
    this._purpose = value;
  }
  // Temporarily expose input value. Use with caution.
  public get purposeInput() {
    return this._purpose;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: number; 
  public get subnetId() {
    return this.getNumberAttribute('subnet_id');
  }
  public set subnetId(value: number) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getNumberAttribute('vpc_id');
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new InstanceConfigInterfaceIpv4AOutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: InstanceConfigInterfaceIpv4A) {
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
  private _ipv6 = new InstanceConfigInterfaceIpv6AOutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: InstanceConfigInterfaceIpv6A) {
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

export class InstanceConfigInterfaceAList extends cdktf.ComplexList {
  public internalValue? : InstanceConfigInterfaceA[] | cdktf.IResolvable

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
  public get(index: number): InstanceConfigInterfaceAOutputReference {
    return new InstanceConfigInterfaceAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config linode_instance_config}
*/
export class InstanceConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_instance_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InstanceConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InstanceConfigA to import
  * @param importFromId The id of the existing InstanceConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InstanceConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_instance_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/resources/instance_config linode_instance_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InstanceConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: InstanceConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_instance_config',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._booted = config.booted;
    this._comments = config.comments;
    this._id = config.id;
    this._kernel = config.kernel;
    this._label = config.label;
    this._linodeId = config.linodeId;
    this._memoryLimit = config.memoryLimit;
    this._rootDevice = config.rootDevice;
    this._runLevel = config.runLevel;
    this._virtMode = config.virtMode;
    this._device.internalValue = config.device;
    this._devices.internalValue = config.devices;
    this._helpers.internalValue = config.helpers;
    this._interface.internalValue = config.interface;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // booted - computed: true, optional: true, required: false
  private _booted?: boolean | cdktf.IResolvable; 
  public get booted() {
    return this.getBooleanAttribute('booted');
  }
  public set booted(value: boolean | cdktf.IResolvable) {
    this._booted = value;
  }
  public resetBooted() {
    this._booted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootedInput() {
    return this._booted;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
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

  // kernel - computed: false, optional: true, required: false
  private _kernel?: string; 
  public get kernel() {
    return this.getStringAttribute('kernel');
  }
  public set kernel(value: string) {
    this._kernel = value;
  }
  public resetKernel() {
    this._kernel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelInput() {
    return this._kernel;
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // linode_id - computed: false, optional: false, required: true
  private _linodeId?: number; 
  public get linodeId() {
    return this.getNumberAttribute('linode_id');
  }
  public set linodeId(value: number) {
    this._linodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linodeIdInput() {
    return this._linodeId;
  }

  // memory_limit - computed: true, optional: true, required: false
  private _memoryLimit?: number; 
  public get memoryLimit() {
    return this.getNumberAttribute('memory_limit');
  }
  public set memoryLimit(value: number) {
    this._memoryLimit = value;
  }
  public resetMemoryLimit() {
    this._memoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLimitInput() {
    return this._memoryLimit;
  }

  // root_device - computed: false, optional: true, required: false
  private _rootDevice?: string; 
  public get rootDevice() {
    return this.getStringAttribute('root_device');
  }
  public set rootDevice(value: string) {
    this._rootDevice = value;
  }
  public resetRootDevice() {
    this._rootDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDeviceInput() {
    return this._rootDevice;
  }

  // run_level - computed: false, optional: true, required: false
  private _runLevel?: string; 
  public get runLevel() {
    return this.getStringAttribute('run_level');
  }
  public set runLevel(value: string) {
    this._runLevel = value;
  }
  public resetRunLevel() {
    this._runLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runLevelInput() {
    return this._runLevel;
  }

  // virt_mode - computed: false, optional: true, required: false
  private _virtMode?: string; 
  public get virtMode() {
    return this.getStringAttribute('virt_mode');
  }
  public set virtMode(value: string) {
    this._virtMode = value;
  }
  public resetVirtMode() {
    this._virtMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtModeInput() {
    return this._virtMode;
  }

  // device - computed: false, optional: true, required: false
  private _device = new InstanceConfigDeviceList(this, "device", true);
  public get device() {
    return this._device;
  }
  public putDevice(value: InstanceConfigDevice[] | cdktf.IResolvable) {
    this._device.internalValue = value;
  }
  public resetDevice() {
    this._device.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device.internalValue;
  }

  // devices - computed: false, optional: true, required: false
  private _devices = new InstanceConfigDevicesAOutputReference(this, "devices");
  public get devices() {
    return this._devices;
  }
  public putDevices(value: InstanceConfigDevicesA) {
    this._devices.internalValue = value;
  }
  public resetDevices() {
    this._devices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // helpers - computed: false, optional: true, required: false
  private _helpers = new InstanceConfigHelpersAList(this, "helpers", false);
  public get helpers() {
    return this._helpers;
  }
  public putHelpers(value: InstanceConfigHelpersA[] | cdktf.IResolvable) {
    this._helpers.internalValue = value;
  }
  public resetHelpers() {
    this._helpers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpersInput() {
    return this._helpers.internalValue;
  }

  // interface - computed: false, optional: true, required: false
  private _interface = new InstanceConfigInterfaceAList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: InstanceConfigInterfaceA[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      booted: cdktf.booleanToTerraform(this._booted),
      comments: cdktf.stringToTerraform(this._comments),
      id: cdktf.stringToTerraform(this._id),
      kernel: cdktf.stringToTerraform(this._kernel),
      label: cdktf.stringToTerraform(this._label),
      linode_id: cdktf.numberToTerraform(this._linodeId),
      memory_limit: cdktf.numberToTerraform(this._memoryLimit),
      root_device: cdktf.stringToTerraform(this._rootDevice),
      run_level: cdktf.stringToTerraform(this._runLevel),
      virt_mode: cdktf.stringToTerraform(this._virtMode),
      device: cdktf.listMapper(instanceConfigDeviceToTerraform, true)(this._device.internalValue),
      devices: instanceConfigDevicesAToTerraform(this._devices.internalValue),
      helpers: cdktf.listMapper(instanceConfigHelpersAToTerraform, true)(this._helpers.internalValue),
      interface: cdktf.listMapper(instanceConfigInterfaceAToTerraform, true)(this._interface.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      booted: {
        value: cdktf.booleanToHclTerraform(this._booted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      kernel: {
        value: cdktf.stringToHclTerraform(this._kernel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linode_id: {
        value: cdktf.numberToHclTerraform(this._linodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_limit: {
        value: cdktf.numberToHclTerraform(this._memoryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      root_device: {
        value: cdktf.stringToHclTerraform(this._rootDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      run_level: {
        value: cdktf.stringToHclTerraform(this._runLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virt_mode: {
        value: cdktf.stringToHclTerraform(this._virtMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.listMapperHcl(instanceConfigDeviceToHclTerraform, true)(this._device.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InstanceConfigDeviceList",
      },
      devices: {
        value: instanceConfigDevicesAToHclTerraform(this._devices.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceConfigDevicesAList",
      },
      helpers: {
        value: cdktf.listMapperHcl(instanceConfigHelpersAToHclTerraform, true)(this._helpers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceConfigHelpersAList",
      },
      interface: {
        value: cdktf.listMapperHcl(instanceConfigInterfaceAToHclTerraform, true)(this._interface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InstanceConfigInterfaceAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
