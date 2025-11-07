// https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VirtualmachineConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#cpu Virtualmachine#cpu}
  */
  readonly cpu?: number;
  /**
  * To enable VM CPU pinning, ensure that at least one node has the CPU manager enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#cpu_pinning Virtualmachine#cpu_pinning}
  */
  readonly cpuPinning?: boolean | cdktf.IResolvable;
  /**
  * Any text you want that better describes this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#description Virtualmachine#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#efi Virtualmachine#efi}
  */
  readonly efi?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#hostname Virtualmachine#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#id Virtualmachine#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * To enable isolate emulator thread, ensure that at least one node has the CPU manager enabled, also VM CPU pinning must be enabled. Note that enable option will allocate an additional dedicated CPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#isolate_emulator_thread Virtualmachine#isolate_emulator_thread}
  */
  readonly isolateEmulatorThread?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#machine_type Virtualmachine#machine_type}
  */
  readonly machineType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#memory Virtualmachine#memory}
  */
  readonly memory?: string;
  /**
  * A unique name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#name Virtualmachine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#namespace Virtualmachine#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#reserved_memory Virtualmachine#reserved_memory}
  */
  readonly reservedMemory?: string;
  /**
  * restart vm after the vm is updated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#restart_after_update Virtualmachine#restart_after_update}
  */
  readonly restartAfterUpdate?: boolean | cdktf.IResolvable;
  /**
  * more info: https://kubevirt.io/user-guide/virtual_machines/run_strategies/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#run_strategy Virtualmachine#run_strategy}
  */
  readonly runStrategy?: string;
  /**
  * EFI must be enabled to use this feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#secure_boot Virtualmachine#secure_boot}
  */
  readonly secureBoot?: boolean | cdktf.IResolvable;
  /**
  * The `ssh_keys` are added to `cloudinit.user_data` if:
  * 1. Both `cloudinit.user_data_base64` and `cloudinit.user_data_secret_name` are empty.
  * 2. There is no `ssh_authorized_keys` field in `cloudinit.user_data`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#ssh_keys Virtualmachine#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#start Virtualmachine#start}
  */
  readonly start?: boolean | cdktf.IResolvable;
  /**
  * The tag is reflected as label on the VM.
  * For example: `sample-tag = sample` adds label `tag.harvesterhci.io/sample-tag: sample`.
  * For `ssh-user` tag, the value is added to `cloudinit.user_data` if:
  * 1. Both `cloudinit.user_data_base64` and `cloudinit.user_data_secret_name` are empty.
  * 2. There is no `user` field in `cloudinit.user_data`.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#tags Virtualmachine#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * cloudinit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#cloudinit Virtualmachine#cloudinit}
  */
  readonly cloudinit?: VirtualmachineCloudinit;
  /**
  * disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#disk Virtualmachine#disk}
  */
  readonly disk: VirtualmachineDisk[] | cdktf.IResolvable;
  /**
  * input block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#input Virtualmachine#input}
  */
  readonly input?: VirtualmachineInput[] | cdktf.IResolvable;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#network_interface Virtualmachine#network_interface}
  */
  readonly networkInterface: VirtualmachineNetworkInterface[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#timeouts Virtualmachine#timeouts}
  */
  readonly timeouts?: VirtualmachineTimeouts;
  /**
  * tpm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#tpm Virtualmachine#tpm}
  */
  readonly tpm?: VirtualmachineTpm;
}
export interface VirtualmachineCloudinit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#network_data Virtualmachine#network_data}
  */
  readonly networkData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#network_data_base64 Virtualmachine#network_data_base64}
  */
  readonly networkDataBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#network_data_secret_name Virtualmachine#network_data_secret_name}
  */
  readonly networkDataSecretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#type Virtualmachine#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#user_data Virtualmachine#user_data}
  */
  readonly userData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#user_data_base64 Virtualmachine#user_data_base64}
  */
  readonly userDataBase64?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#user_data_secret_name Virtualmachine#user_data_secret_name}
  */
  readonly userDataSecretName?: string;
}

export function virtualmachineCloudinitToTerraform(struct?: VirtualmachineCloudinitOutputReference | VirtualmachineCloudinit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_data: cdktf.stringToTerraform(struct!.networkData),
    network_data_base64: cdktf.stringToTerraform(struct!.networkDataBase64),
    network_data_secret_name: cdktf.stringToTerraform(struct!.networkDataSecretName),
    type: cdktf.stringToTerraform(struct!.type),
    user_data: cdktf.stringToTerraform(struct!.userData),
    user_data_base64: cdktf.stringToTerraform(struct!.userDataBase64),
    user_data_secret_name: cdktf.stringToTerraform(struct!.userDataSecretName),
  }
}


export function virtualmachineCloudinitToHclTerraform(struct?: VirtualmachineCloudinitOutputReference | VirtualmachineCloudinit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_data: {
      value: cdktf.stringToHclTerraform(struct!.networkData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_data_base64: {
      value: cdktf.stringToHclTerraform(struct!.networkDataBase64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_data_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.networkDataSecretName),
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
    user_data: {
      value: cdktf.stringToHclTerraform(struct!.userData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_data_base64: {
      value: cdktf.stringToHclTerraform(struct!.userDataBase64),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_data_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.userDataSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualmachineCloudinitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualmachineCloudinit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkData !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkData = this._networkData;
    }
    if (this._networkDataBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDataBase64 = this._networkDataBase64;
    }
    if (this._networkDataSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkDataSecretName = this._networkDataSecretName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    if (this._userDataBase64 !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDataBase64 = this._userDataBase64;
    }
    if (this._userDataSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDataSecretName = this._userDataSecretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualmachineCloudinit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkData = undefined;
      this._networkDataBase64 = undefined;
      this._networkDataSecretName = undefined;
      this._type = undefined;
      this._userData = undefined;
      this._userDataBase64 = undefined;
      this._userDataSecretName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkData = value.networkData;
      this._networkDataBase64 = value.networkDataBase64;
      this._networkDataSecretName = value.networkDataSecretName;
      this._type = value.type;
      this._userData = value.userData;
      this._userDataBase64 = value.userDataBase64;
      this._userDataSecretName = value.userDataSecretName;
    }
  }

  // network_data - computed: false, optional: true, required: false
  private _networkData?: string; 
  public get networkData() {
    return this.getStringAttribute('network_data');
  }
  public set networkData(value: string) {
    this._networkData = value;
  }
  public resetNetworkData() {
    this._networkData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDataInput() {
    return this._networkData;
  }

  // network_data_base64 - computed: false, optional: true, required: false
  private _networkDataBase64?: string; 
  public get networkDataBase64() {
    return this.getStringAttribute('network_data_base64');
  }
  public set networkDataBase64(value: string) {
    this._networkDataBase64 = value;
  }
  public resetNetworkDataBase64() {
    this._networkDataBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDataBase64Input() {
    return this._networkDataBase64;
  }

  // network_data_secret_name - computed: false, optional: true, required: false
  private _networkDataSecretName?: string; 
  public get networkDataSecretName() {
    return this.getStringAttribute('network_data_secret_name');
  }
  public set networkDataSecretName(value: string) {
    this._networkDataSecretName = value;
  }
  public resetNetworkDataSecretName() {
    this._networkDataSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDataSecretNameInput() {
    return this._networkDataSecretName;
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

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // user_data_base64 - computed: false, optional: true, required: false
  private _userDataBase64?: string; 
  public get userDataBase64() {
    return this.getStringAttribute('user_data_base64');
  }
  public set userDataBase64(value: string) {
    this._userDataBase64 = value;
  }
  public resetUserDataBase64() {
    this._userDataBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataBase64Input() {
    return this._userDataBase64;
  }

  // user_data_secret_name - computed: false, optional: true, required: false
  private _userDataSecretName?: string; 
  public get userDataSecretName() {
    return this.getStringAttribute('user_data_secret_name');
  }
  public set userDataSecretName(value: string) {
    this._userDataSecretName = value;
  }
  public resetUserDataSecretName() {
    this._userDataSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataSecretNameInput() {
    return this._userDataSecretName;
  }
}
export interface VirtualmachineDisk {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#access_mode Virtualmachine#access_mode}
  */
  readonly accessMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#auto_delete Virtualmachine#auto_delete}
  */
  readonly autoDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#boot_order Virtualmachine#boot_order}
  */
  readonly bootOrder?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#bus Virtualmachine#bus}
  */
  readonly bus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#container_image_name Virtualmachine#container_image_name}
  */
  readonly containerImageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#existing_volume_name Virtualmachine#existing_volume_name}
  */
  readonly existingVolumeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#hot_plug Virtualmachine#hot_plug}
  */
  readonly hotPlug?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#image Virtualmachine#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#name Virtualmachine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#size Virtualmachine#size}
  */
  readonly size?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#storage_class_name Virtualmachine#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#type Virtualmachine#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#volume_mode Virtualmachine#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#volume_name Virtualmachine#volume_name}
  */
  readonly volumeName?: string;
}

export function virtualmachineDiskToTerraform(struct?: VirtualmachineDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_mode: cdktf.stringToTerraform(struct!.accessMode),
    auto_delete: cdktf.booleanToTerraform(struct!.autoDelete),
    boot_order: cdktf.numberToTerraform(struct!.bootOrder),
    bus: cdktf.stringToTerraform(struct!.bus),
    container_image_name: cdktf.stringToTerraform(struct!.containerImageName),
    existing_volume_name: cdktf.stringToTerraform(struct!.existingVolumeName),
    hot_plug: cdktf.booleanToTerraform(struct!.hotPlug),
    image: cdktf.stringToTerraform(struct!.image),
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.stringToTerraform(struct!.size),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    type: cdktf.stringToTerraform(struct!.type),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function virtualmachineDiskToHclTerraform(struct?: VirtualmachineDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_mode: {
      value: cdktf.stringToHclTerraform(struct!.accessMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_delete: {
      value: cdktf.booleanToHclTerraform(struct!.autoDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    boot_order: {
      value: cdktf.numberToHclTerraform(struct!.bootOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bus: {
      value: cdktf.stringToHclTerraform(struct!.bus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    container_image_name: {
      value: cdktf.stringToHclTerraform(struct!.containerImageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    existing_volume_name: {
      value: cdktf.stringToHclTerraform(struct!.existingVolumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hot_plug: {
      value: cdktf.booleanToHclTerraform(struct!.hotPlug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
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
    volume_mode: {
      value: cdktf.stringToHclTerraform(struct!.volumeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualmachineDiskOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualmachineDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessMode = this._accessMode;
    }
    if (this._autoDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoDelete = this._autoDelete;
    }
    if (this._bootOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootOrder = this._bootOrder;
    }
    if (this._bus !== undefined) {
      hasAnyValues = true;
      internalValueResult.bus = this._bus;
    }
    if (this._containerImageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerImageName = this._containerImageName;
    }
    if (this._existingVolumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.existingVolumeName = this._existingVolumeName;
    }
    if (this._hotPlug !== undefined) {
      hasAnyValues = true;
      internalValueResult.hotPlug = this._hotPlug;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._volumeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMode = this._volumeMode;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualmachineDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessMode = undefined;
      this._autoDelete = undefined;
      this._bootOrder = undefined;
      this._bus = undefined;
      this._containerImageName = undefined;
      this._existingVolumeName = undefined;
      this._hotPlug = undefined;
      this._image = undefined;
      this._name = undefined;
      this._size = undefined;
      this._storageClassName = undefined;
      this._type = undefined;
      this._volumeMode = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessMode = value.accessMode;
      this._autoDelete = value.autoDelete;
      this._bootOrder = value.bootOrder;
      this._bus = value.bus;
      this._containerImageName = value.containerImageName;
      this._existingVolumeName = value.existingVolumeName;
      this._hotPlug = value.hotPlug;
      this._image = value.image;
      this._name = value.name;
      this._size = value.size;
      this._storageClassName = value.storageClassName;
      this._type = value.type;
      this._volumeMode = value.volumeMode;
      this._volumeName = value.volumeName;
    }
  }

  // access_mode - computed: true, optional: true, required: false
  private _accessMode?: string; 
  public get accessMode() {
    return this.getStringAttribute('access_mode');
  }
  public set accessMode(value: string) {
    this._accessMode = value;
  }
  public resetAccessMode() {
    this._accessMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModeInput() {
    return this._accessMode;
  }

  // auto_delete - computed: true, optional: true, required: false
  private _autoDelete?: boolean | cdktf.IResolvable; 
  public get autoDelete() {
    return this.getBooleanAttribute('auto_delete');
  }
  public set autoDelete(value: boolean | cdktf.IResolvable) {
    this._autoDelete = value;
  }
  public resetAutoDelete() {
    this._autoDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDeleteInput() {
    return this._autoDelete;
  }

  // boot_order - computed: false, optional: true, required: false
  private _bootOrder?: number; 
  public get bootOrder() {
    return this.getNumberAttribute('boot_order');
  }
  public set bootOrder(value: number) {
    this._bootOrder = value;
  }
  public resetBootOrder() {
    this._bootOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootOrderInput() {
    return this._bootOrder;
  }

  // bus - computed: true, optional: true, required: false
  private _bus?: string; 
  public get bus() {
    return this.getStringAttribute('bus');
  }
  public set bus(value: string) {
    this._bus = value;
  }
  public resetBus() {
    this._bus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busInput() {
    return this._bus;
  }

  // container_image_name - computed: false, optional: true, required: false
  private _containerImageName?: string; 
  public get containerImageName() {
    return this.getStringAttribute('container_image_name');
  }
  public set containerImageName(value: string) {
    this._containerImageName = value;
  }
  public resetContainerImageName() {
    this._containerImageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerImageNameInput() {
    return this._containerImageName;
  }

  // existing_volume_name - computed: false, optional: true, required: false
  private _existingVolumeName?: string; 
  public get existingVolumeName() {
    return this.getStringAttribute('existing_volume_name');
  }
  public set existingVolumeName(value: string) {
    this._existingVolumeName = value;
  }
  public resetExistingVolumeName() {
    this._existingVolumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingVolumeNameInput() {
    return this._existingVolumeName;
  }

  // hot_plug - computed: true, optional: true, required: false
  private _hotPlug?: boolean | cdktf.IResolvable; 
  public get hotPlug() {
    return this.getBooleanAttribute('hot_plug');
  }
  public set hotPlug(value: boolean | cdktf.IResolvable) {
    this._hotPlug = value;
  }
  public resetHotPlug() {
    this._hotPlug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotPlugInput() {
    return this._hotPlug;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
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

  // storage_class_name - computed: true, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
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

  // volume_mode - computed: true, optional: true, required: false
  private _volumeMode?: string; 
  public get volumeMode() {
    return this.getStringAttribute('volume_mode');
  }
  public set volumeMode(value: string) {
    this._volumeMode = value;
  }
  public resetVolumeMode() {
    this._volumeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeModeInput() {
    return this._volumeMode;
  }

  // volume_name - computed: true, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}

export class VirtualmachineDiskList extends cdktf.ComplexList {
  public internalValue? : VirtualmachineDisk[] | cdktf.IResolvable

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
  public get(index: number): VirtualmachineDiskOutputReference {
    return new VirtualmachineDiskOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualmachineInput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#bus Virtualmachine#bus}
  */
  readonly bus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#name Virtualmachine#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#type Virtualmachine#type}
  */
  readonly type?: string;
}

export function virtualmachineInputToTerraform(struct?: VirtualmachineInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bus: cdktf.stringToTerraform(struct!.bus),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function virtualmachineInputToHclTerraform(struct?: VirtualmachineInput | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bus: {
      value: cdktf.stringToHclTerraform(struct!.bus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class VirtualmachineInputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualmachineInput | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bus !== undefined) {
      hasAnyValues = true;
      internalValueResult.bus = this._bus;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualmachineInput | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bus = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bus = value.bus;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // bus - computed: false, optional: true, required: false
  private _bus?: string; 
  public get bus() {
    return this.getStringAttribute('bus');
  }
  public set bus(value: string) {
    this._bus = value;
  }
  public resetBus() {
    this._bus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get busInput() {
    return this._bus;
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

export class VirtualmachineInputList extends cdktf.ComplexList {
  public internalValue? : VirtualmachineInput[] | cdktf.IResolvable

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
  public get(index: number): VirtualmachineInputOutputReference {
    return new VirtualmachineInputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualmachineNetworkInterface {
  /**
  * Boot order priority of this network interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#boot_order Virtualmachine#boot_order}
  */
  readonly bootOrder?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#mac_address Virtualmachine#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#model Virtualmachine#model}
  */
  readonly model?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#name Virtualmachine#name}
  */
  readonly name: string;
  /**
  * if the value is empty, management network is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#network_name Virtualmachine#network_name}
  */
  readonly networkName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#type Virtualmachine#type}
  */
  readonly type?: string;
  /**
  * wait for this network interface to obtain an IP address. If a non-management network is used, this feature requires qemu-guest-agent installed and started in the VM, otherwise, VM creation will stuck until timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#wait_for_lease Virtualmachine#wait_for_lease}
  */
  readonly waitForLease?: boolean | cdktf.IResolvable;
}

export function virtualmachineNetworkInterfaceToTerraform(struct?: VirtualmachineNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_order: cdktf.numberToTerraform(struct!.bootOrder),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    model: cdktf.stringToTerraform(struct!.model),
    name: cdktf.stringToTerraform(struct!.name),
    network_name: cdktf.stringToTerraform(struct!.networkName),
    type: cdktf.stringToTerraform(struct!.type),
    wait_for_lease: cdktf.booleanToTerraform(struct!.waitForLease),
  }
}


export function virtualmachineNetworkInterfaceToHclTerraform(struct?: VirtualmachineNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_order: {
      value: cdktf.numberToHclTerraform(struct!.bootOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_address: {
      value: cdktf.stringToHclTerraform(struct!.macAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model: {
      value: cdktf.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_name: {
      value: cdktf.stringToHclTerraform(struct!.networkName),
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
    wait_for_lease: {
      value: cdktf.booleanToHclTerraform(struct!.waitForLease),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualmachineNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VirtualmachineNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootOrder = this._bootOrder;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkName = this._networkName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._waitForLease !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForLease = this._waitForLease;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualmachineNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootOrder = undefined;
      this._macAddress = undefined;
      this._model = undefined;
      this._name = undefined;
      this._networkName = undefined;
      this._type = undefined;
      this._waitForLease = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootOrder = value.bootOrder;
      this._macAddress = value.macAddress;
      this._model = value.model;
      this._name = value.name;
      this._networkName = value.networkName;
      this._type = value.type;
      this._waitForLease = value.waitForLease;
    }
  }

  // boot_order - computed: false, optional: true, required: false
  private _bootOrder?: number; 
  public get bootOrder() {
    return this.getNumberAttribute('boot_order');
  }
  public set bootOrder(value: number) {
    this._bootOrder = value;
  }
  public resetBootOrder() {
    this._bootOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootOrderInput() {
    return this._bootOrder;
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
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

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
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

  // network_name - computed: false, optional: true, required: false
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  public resetNetworkName() {
    this._networkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
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

  // wait_for_lease - computed: false, optional: true, required: false
  private _waitForLease?: boolean | cdktf.IResolvable; 
  public get waitForLease() {
    return this.getBooleanAttribute('wait_for_lease');
  }
  public set waitForLease(value: boolean | cdktf.IResolvable) {
    this._waitForLease = value;
  }
  public resetWaitForLease() {
    this._waitForLease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForLeaseInput() {
    return this._waitForLease;
  }
}

export class VirtualmachineNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : VirtualmachineNetworkInterface[] | cdktf.IResolvable

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
  public get(index: number): VirtualmachineNetworkInterfaceOutputReference {
    return new VirtualmachineNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VirtualmachineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#create Virtualmachine#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#default Virtualmachine#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#delete Virtualmachine#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#read Virtualmachine#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#update Virtualmachine#update}
  */
  readonly update?: string;
}

export function virtualmachineTimeoutsToTerraform(struct?: VirtualmachineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function virtualmachineTimeoutsToHclTerraform(struct?: VirtualmachineTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualmachineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VirtualmachineTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualmachineTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface VirtualmachineTpm {
  /**
  * just add this field for doc generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#name Virtualmachine#name}
  */
  readonly name?: string;
}

export function virtualmachineTpmToTerraform(struct?: VirtualmachineTpmOutputReference | VirtualmachineTpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function virtualmachineTpmToHclTerraform(struct?: VirtualmachineTpmOutputReference | VirtualmachineTpm): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VirtualmachineTpmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VirtualmachineTpm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VirtualmachineTpm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine harvester_virtualmachine}
*/
export class Virtualmachine extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harvester_virtualmachine";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Virtualmachine resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Virtualmachine to import
  * @param importFromId The id of the existing Virtualmachine that should be imported. Refer to the {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Virtualmachine to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harvester_virtualmachine", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harvester/harvester/1.6.0/docs/resources/virtualmachine harvester_virtualmachine} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VirtualmachineConfig
  */
  public constructor(scope: Construct, id: string, config: VirtualmachineConfig) {
    super(scope, id, {
      terraformResourceType: 'harvester_virtualmachine',
      terraformGeneratorMetadata: {
        providerName: 'harvester',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cpu = config.cpu;
    this._cpuPinning = config.cpuPinning;
    this._description = config.description;
    this._efi = config.efi;
    this._hostname = config.hostname;
    this._id = config.id;
    this._isolateEmulatorThread = config.isolateEmulatorThread;
    this._machineType = config.machineType;
    this._memory = config.memory;
    this._name = config.name;
    this._namespace = config.namespace;
    this._reservedMemory = config.reservedMemory;
    this._restartAfterUpdate = config.restartAfterUpdate;
    this._runStrategy = config.runStrategy;
    this._secureBoot = config.secureBoot;
    this._sshKeys = config.sshKeys;
    this._start = config.start;
    this._tags = config.tags;
    this._cloudinit.internalValue = config.cloudinit;
    this._disk.internalValue = config.disk;
    this._input.internalValue = config.input;
    this._networkInterface.internalValue = config.networkInterface;
    this._timeouts.internalValue = config.timeouts;
    this._tpm.internalValue = config.tpm;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cpu - computed: false, optional: true, required: false
  private _cpu?: number; 
  public get cpu() {
    return this.getNumberAttribute('cpu');
  }
  public set cpu(value: number) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // cpu_pinning - computed: false, optional: true, required: false
  private _cpuPinning?: boolean | cdktf.IResolvable; 
  public get cpuPinning() {
    return this.getBooleanAttribute('cpu_pinning');
  }
  public set cpuPinning(value: boolean | cdktf.IResolvable) {
    this._cpuPinning = value;
  }
  public resetCpuPinning() {
    this._cpuPinning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuPinningInput() {
    return this._cpuPinning;
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

  // efi - computed: false, optional: true, required: false
  private _efi?: boolean | cdktf.IResolvable; 
  public get efi() {
    return this.getBooleanAttribute('efi');
  }
  public set efi(value: boolean | cdktf.IResolvable) {
    this._efi = value;
  }
  public resetEfi() {
    this._efi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get efiInput() {
    return this._efi;
  }

  // hostname - computed: true, optional: true, required: false
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

  // isolate_emulator_thread - computed: false, optional: true, required: false
  private _isolateEmulatorThread?: boolean | cdktf.IResolvable; 
  public get isolateEmulatorThread() {
    return this.getBooleanAttribute('isolate_emulator_thread');
  }
  public set isolateEmulatorThread(value: boolean | cdktf.IResolvable) {
    this._isolateEmulatorThread = value;
  }
  public resetIsolateEmulatorThread() {
    this._isolateEmulatorThread = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolateEmulatorThreadInput() {
    return this._isolateEmulatorThread;
  }

  // machine_type - computed: true, optional: true, required: false
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  public resetMachineType() {
    this._machineType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // node_name - computed: true, optional: false, required: false
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }

  // reserved_memory - computed: false, optional: true, required: false
  private _reservedMemory?: string; 
  public get reservedMemory() {
    return this.getStringAttribute('reserved_memory');
  }
  public set reservedMemory(value: string) {
    this._reservedMemory = value;
  }
  public resetReservedMemory() {
    this._reservedMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedMemoryInput() {
    return this._reservedMemory;
  }

  // restart_after_update - computed: false, optional: true, required: false
  private _restartAfterUpdate?: boolean | cdktf.IResolvable; 
  public get restartAfterUpdate() {
    return this.getBooleanAttribute('restart_after_update');
  }
  public set restartAfterUpdate(value: boolean | cdktf.IResolvable) {
    this._restartAfterUpdate = value;
  }
  public resetRestartAfterUpdate() {
    this._restartAfterUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartAfterUpdateInput() {
    return this._restartAfterUpdate;
  }

  // run_strategy - computed: false, optional: true, required: false
  private _runStrategy?: string; 
  public get runStrategy() {
    return this.getStringAttribute('run_strategy');
  }
  public set runStrategy(value: string) {
    this._runStrategy = value;
  }
  public resetRunStrategy() {
    this._runStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runStrategyInput() {
    return this._runStrategy;
  }

  // secure_boot - computed: false, optional: true, required: false
  private _secureBoot?: boolean | cdktf.IResolvable; 
  public get secureBoot() {
    return this.getBooleanAttribute('secure_boot');
  }
  public set secureBoot(value: boolean | cdktf.IResolvable) {
    this._secureBoot = value;
  }
  public resetSecureBoot() {
    this._secureBoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureBootInput() {
    return this._secureBoot;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return this.getListAttribute('ssh_keys');
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
  }

  // start - computed: false, optional: true, required: false
  private _start?: boolean | cdktf.IResolvable; 
  public get start() {
    return this.getBooleanAttribute('start');
  }
  public set start(value: boolean | cdktf.IResolvable) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // cloudinit - computed: false, optional: true, required: false
  private _cloudinit = new VirtualmachineCloudinitOutputReference(this, "cloudinit");
  public get cloudinit() {
    return this._cloudinit;
  }
  public putCloudinit(value: VirtualmachineCloudinit) {
    this._cloudinit.internalValue = value;
  }
  public resetCloudinit() {
    this._cloudinit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudinitInput() {
    return this._cloudinit.internalValue;
  }

  // disk - computed: false, optional: false, required: true
  private _disk = new VirtualmachineDiskList(this, "disk", false);
  public get disk() {
    return this._disk;
  }
  public putDisk(value: VirtualmachineDisk[] | cdktf.IResolvable) {
    this._disk.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk.internalValue;
  }

  // input - computed: false, optional: true, required: false
  private _input = new VirtualmachineInputList(this, "input", false);
  public get input() {
    return this._input;
  }
  public putInput(value: VirtualmachineInput[] | cdktf.IResolvable) {
    this._input.internalValue = value;
  }
  public resetInput() {
    this._input.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputInput() {
    return this._input.internalValue;
  }

  // network_interface - computed: false, optional: false, required: true
  private _networkInterface = new VirtualmachineNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: VirtualmachineNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new VirtualmachineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: VirtualmachineTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tpm - computed: false, optional: true, required: false
  private _tpm = new VirtualmachineTpmOutputReference(this, "tpm");
  public get tpm() {
    return this._tpm;
  }
  public putTpm(value: VirtualmachineTpm) {
    this._tpm.internalValue = value;
  }
  public resetTpm() {
    this._tpm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpmInput() {
    return this._tpm.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cpu: cdktf.numberToTerraform(this._cpu),
      cpu_pinning: cdktf.booleanToTerraform(this._cpuPinning),
      description: cdktf.stringToTerraform(this._description),
      efi: cdktf.booleanToTerraform(this._efi),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      isolate_emulator_thread: cdktf.booleanToTerraform(this._isolateEmulatorThread),
      machine_type: cdktf.stringToTerraform(this._machineType),
      memory: cdktf.stringToTerraform(this._memory),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      reserved_memory: cdktf.stringToTerraform(this._reservedMemory),
      restart_after_update: cdktf.booleanToTerraform(this._restartAfterUpdate),
      run_strategy: cdktf.stringToTerraform(this._runStrategy),
      secure_boot: cdktf.booleanToTerraform(this._secureBoot),
      ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshKeys),
      start: cdktf.booleanToTerraform(this._start),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      cloudinit: virtualmachineCloudinitToTerraform(this._cloudinit.internalValue),
      disk: cdktf.listMapper(virtualmachineDiskToTerraform, true)(this._disk.internalValue),
      input: cdktf.listMapper(virtualmachineInputToTerraform, true)(this._input.internalValue),
      network_interface: cdktf.listMapper(virtualmachineNetworkInterfaceToTerraform, true)(this._networkInterface.internalValue),
      timeouts: virtualmachineTimeoutsToTerraform(this._timeouts.internalValue),
      tpm: virtualmachineTpmToTerraform(this._tpm.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cpu_pinning: {
        value: cdktf.booleanToHclTerraform(this._cpuPinning),
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
      efi: {
        value: cdktf.booleanToHclTerraform(this._efi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      isolate_emulator_thread: {
        value: cdktf.booleanToHclTerraform(this._isolateEmulatorThread),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      machine_type: {
        value: cdktf.stringToHclTerraform(this._machineType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.stringToHclTerraform(this._memory),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserved_memory: {
        value: cdktf.stringToHclTerraform(this._reservedMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      restart_after_update: {
        value: cdktf.booleanToHclTerraform(this._restartAfterUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      run_strategy: {
        value: cdktf.stringToHclTerraform(this._runStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secure_boot: {
        value: cdktf.booleanToHclTerraform(this._secureBoot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssh_keys: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshKeys),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      start: {
        value: cdktf.booleanToHclTerraform(this._start),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      cloudinit: {
        value: virtualmachineCloudinitToHclTerraform(this._cloudinit.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualmachineCloudinitList",
      },
      disk: {
        value: cdktf.listMapperHcl(virtualmachineDiskToHclTerraform, true)(this._disk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualmachineDiskList",
      },
      input: {
        value: cdktf.listMapperHcl(virtualmachineInputToHclTerraform, true)(this._input.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualmachineInputList",
      },
      network_interface: {
        value: cdktf.listMapperHcl(virtualmachineNetworkInterfaceToHclTerraform, true)(this._networkInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualmachineNetworkInterfaceList",
      },
      timeouts: {
        value: virtualmachineTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VirtualmachineTimeouts",
      },
      tpm: {
        value: virtualmachineTpmToHclTerraform(this._tpm.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VirtualmachineTpmList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
