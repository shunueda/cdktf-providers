// https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The first detected Fixed IPv4 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#access_ip_v4 ComputeInstance#access_ip_v4}
  */
  readonly accessIpV4?: string;
  /**
  * The administrative password to assign to the server. For some images, the password must meet certain requirements, which can be found here: https://cloud.vk.com/docs/en/computing/iaas/service-management/vm/vm-manage. _note_ If the password does not meet these requirements, the resource creation may hang until the timeout due to repeated attempts to set the password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#admin_pass ComputeInstance#admin_pass}
  */
  readonly adminPass?: string;
  /**
  * The availability zone in which to create the server. Conflicts with `availability_zone_hints`. Changing this creates a new server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#availability_zone ComputeInstance#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Whether to use the config_drive feature to configure the instance. Changing this creates a new server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#config_drive ComputeInstance#config_drive}
  */
  readonly configDrive?: boolean | cdktf.IResolvable;
  /**
  * The flavor ID of the desired flavor for the server. Required if `flavor_name` is empty. Changing this resizes the existing server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#flavor_id ComputeInstance#flavor_id}
  */
  readonly flavorId?: string;
  /**
  * The name of the desired flavor for the server. Required if `flavor_id` is empty. Changing this resizes the existing server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#flavor_name ComputeInstance#flavor_name}
  */
  readonly flavorName?: string;
  /**
  * Whether to force the compute instance to be forcefully deleted. This is useful for environments that have reclaim / soft deletion enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#force_delete ComputeInstance#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#id ComputeInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The image ID of the desired image for the server. Required if `image_name` is empty and not booting from a volume. Do not specify if booting from a volume. Changing this creates a new server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#image_id ComputeInstance#image_id}
  */
  readonly imageId?: string;
  /**
  * The name of the desired image for the server. Required if `image_id` is empty and not booting from a volume. Do not specify if booting from a volume. Changing this creates a new server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#image_name ComputeInstance#image_name}
  */
  readonly imageName?: string;
  /**
  * The name of a key pair to put on the server. The key pair must already be created and associated with the tenant's account. Changing this creates a new server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#key_pair ComputeInstance#key_pair}
  */
  readonly keyPair?: string;
  /**
  * Metadata key/value pairs to make available from within the instance. Changing this updates the existing server metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#metadata ComputeInstance#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * A unique name for the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#name ComputeInstance#name}
  */
  readonly name: string;
  /**
  * Special string for `network` option to create the server. `network_mode` can be `"auto"` or `"none"`. Please see the following [reference](https://docs.openstack.org/api-ref/compute/?expanded=create-server-detail#id11) for more information. Conflicts with `network`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#network_mode ComputeInstance#network_mode}
  */
  readonly networkMode?: string;
  /**
  * Provide the VM state. Only 'active' and 'shutoff' are supported values. _note_ If the initial power_state is the shutoff the VM will be stopped immediately after build and the provisioners like remote-exec or files are not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#power_state ComputeInstance#power_state}
  */
  readonly powerState?: string;
  /**
  * The region in which to create the server instance. If omitted, the `region` argument of the provider is used. Changing this creates a new server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#region ComputeInstance#region}
  */
  readonly region?: string;
  /**
  * An array of one or more security group ids to associate with the server. Changing this results in adding/removing security groups from the existing server. _note_ When attaching the instance to networks using Ports, place the security groups on the Port and not the instance._new_since_v0.7.3_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#security_group_ids ComputeInstance#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * An array of one or more security group names to associate with the server. Changing this results in adding/removing security groups from the existing server. _note_ When attaching the instance to networks using Ports, place the security groups on the Port and not the instance. **Deprecated** Configure `security_group_ids` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#security_groups ComputeInstance#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Whether to try stop instance gracefully before destroying it, thus giving chance for guest OS daemons to stop correctly. If instance doesn't stop within timeout, it will be destroyed anyway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#stop_before_destroy ComputeInstance#stop_before_destroy}
  */
  readonly stopBeforeDestroy?: boolean | cdktf.IResolvable;
  /**
  * A set of string tags for the instance. Changing this updates the existing instance tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#tags ComputeInstance#tags}
  */
  readonly tags?: string[];
  /**
  * The user data to provide when launching the instance. When cloud_monitoring enabled only #!/bin/bash, #cloud-config, #ps1 user_data formats are supported. Changing this creates a new server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#user_data ComputeInstance#user_data}
  */
  readonly userData?: string;
  /**
  * block_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#block_device ComputeInstance#block_device}
  */
  readonly blockDevice?: ComputeInstanceBlockDevice[] | cdktf.IResolvable;
  /**
  * cloud_monitoring block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#cloud_monitoring ComputeInstance#cloud_monitoring}
  */
  readonly cloudMonitoring?: ComputeInstanceCloudMonitoring;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#network ComputeInstance#network}
  */
  readonly network?: ComputeInstanceNetwork[] | cdktf.IResolvable;
  /**
  * personality block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#personality ComputeInstance#personality}
  */
  readonly personality?: ComputeInstancePersonality[] | cdktf.IResolvable;
  /**
  * scheduler_hints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#scheduler_hints ComputeInstance#scheduler_hints}
  */
  readonly schedulerHints?: ComputeInstanceSchedulerHints[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#timeouts ComputeInstance#timeouts}
  */
  readonly timeouts?: ComputeInstanceTimeouts;
  /**
  * vendor_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#vendor_options ComputeInstance#vendor_options}
  */
  readonly vendorOptions?: ComputeInstanceVendorOptions;
}
export interface ComputeInstanceBlockDevice {
  /**
  * The boot index of the volume. It defaults to 0 if only one `block_device` is specified, and to -1 if more than one is configured. Changing this creates a new server. _note_ You must set the boot index to 0 for one of the block devices if more than one is defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#boot_index ComputeInstance#boot_index}
  */
  readonly bootIndex?: number;
  /**
  * Delete the volume / block device upon termination of the instance. Defaults to false. Changing this creates a new server. __note__ It is important to enable `delete_on_termination` for volumes created with instance. If `delete_on_termination` is disabled for such volumes, then after instance deletion such volumes will stay orphaned and uncontrolled by terraform. __note__ It is important to disable `delete_on_termination` if volume is created as separate terraform resource and is attached to instance. Enabling `delete_on_termination` for such volumes will result in mismanagement between two terraform resources in case of instance deletion
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#delete_on_termination ComputeInstance#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * The type that gets created. Possible values are "volume" and "local". Changing this creates a new server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#destination_type ComputeInstance#destination_type}
  */
  readonly destinationType?: string;
  /**
  * The low-level device type that will be used. Most common thing is to leave this empty. Changing this creates a new server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#device_type ComputeInstance#device_type}
  */
  readonly deviceType?: string;
  /**
  * The low-level disk bus that will be used. Most common thing is to leave this empty. Changing this creates a new server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#disk_bus ComputeInstance#disk_bus}
  */
  readonly diskBus?: string;
  /**
  * Specifies the guest server disk file system format, such as `ext2`, `ext3`, `ext4`, `xfs` or `swap`. Swap block device mappings have the following restrictions: source_type must be blank and destination_type must be local and only one swap disk per server and the size of the swap disk must be less than or equal to the swap size of the flavor. Changing this creates a new server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#guest_format ComputeInstance#guest_format}
  */
  readonly guestFormat?: string;
  /**
  * The source type of the device. Must be one of "blank", "image", "volume", or "snapshot". Changing this creates a new server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#source_type ComputeInstance#source_type}
  */
  readonly sourceType: string;
  /**
  * The UUID of the image, volume, or snapshot. Optional if `source_type` is set to `"blank"`. Changing this creates a new server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#uuid ComputeInstance#uuid}
  */
  readonly uuid?: string;
  /**
  * The size of the volume to create (in gigabytes). Required in the following combinations: source=image and destination=volume, source=blank and destination=local, and source=blank and destination=volume. Changing this creates a new server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#volume_size ComputeInstance#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * The volume type that will be used. Changing this creates a new server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#volume_type ComputeInstance#volume_type}
  */
  readonly volumeType?: string;
}

export function computeInstanceBlockDeviceToTerraform(struct?: ComputeInstanceBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_index: cdktf.numberToTerraform(struct!.bootIndex),
    delete_on_termination: cdktf.booleanToTerraform(struct!.deleteOnTermination),
    destination_type: cdktf.stringToTerraform(struct!.destinationType),
    device_type: cdktf.stringToTerraform(struct!.deviceType),
    disk_bus: cdktf.stringToTerraform(struct!.diskBus),
    guest_format: cdktf.stringToTerraform(struct!.guestFormat),
    source_type: cdktf.stringToTerraform(struct!.sourceType),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function computeInstanceBlockDeviceToHclTerraform(struct?: ComputeInstanceBlockDevice | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_index: {
      value: cdktf.numberToHclTerraform(struct!.bootIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delete_on_termination: {
      value: cdktf.booleanToHclTerraform(struct!.deleteOnTermination),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    destination_type: {
      value: cdktf.stringToHclTerraform(struct!.destinationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_type: {
      value: cdktf.stringToHclTerraform(struct!.deviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_bus: {
      value: cdktf.stringToHclTerraform(struct!.diskBus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    guest_format: {
      value: cdktf.stringToHclTerraform(struct!.guestFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_type: {
      value: cdktf.stringToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size: {
      value: cdktf.numberToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceBlockDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceBlockDevice | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootIndex = this._bootIndex;
    }
    if (this._deleteOnTermination !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOnTermination = this._deleteOnTermination;
    }
    if (this._destinationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationType = this._destinationType;
    }
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._diskBus !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskBus = this._diskBus;
    }
    if (this._guestFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.guestFormat = this._guestFormat;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceBlockDevice | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootIndex = undefined;
      this._deleteOnTermination = undefined;
      this._destinationType = undefined;
      this._deviceType = undefined;
      this._diskBus = undefined;
      this._guestFormat = undefined;
      this._sourceType = undefined;
      this._uuid = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootIndex = value.bootIndex;
      this._deleteOnTermination = value.deleteOnTermination;
      this._destinationType = value.destinationType;
      this._deviceType = value.deviceType;
      this._diskBus = value.diskBus;
      this._guestFormat = value.guestFormat;
      this._sourceType = value.sourceType;
      this._uuid = value.uuid;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
    }
  }

  // boot_index - computed: true, optional: true, required: false
  private _bootIndex?: number; 
  public get bootIndex() {
    return this.getNumberAttribute('boot_index');
  }
  public set bootIndex(value: number) {
    this._bootIndex = value;
  }
  public resetBootIndex() {
    this._bootIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootIndexInput() {
    return this._bootIndex;
  }

  // delete_on_termination - computed: false, optional: true, required: false
  private _deleteOnTermination?: boolean | cdktf.IResolvable; 
  public get deleteOnTermination() {
    return this.getBooleanAttribute('delete_on_termination');
  }
  public set deleteOnTermination(value: boolean | cdktf.IResolvable) {
    this._deleteOnTermination = value;
  }
  public resetDeleteOnTermination() {
    this._deleteOnTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnTerminationInput() {
    return this._deleteOnTermination;
  }

  // destination_type - computed: false, optional: true, required: false
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  public resetDestinationType() {
    this._destinationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
  }

  // device_type - computed: false, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

  // disk_bus - computed: false, optional: true, required: false
  private _diskBus?: string; 
  public get diskBus() {
    return this.getStringAttribute('disk_bus');
  }
  public set diskBus(value: string) {
    this._diskBus = value;
  }
  public resetDiskBus() {
    this._diskBus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskBusInput() {
    return this._diskBus;
  }

  // guest_format - computed: false, optional: true, required: false
  private _guestFormat?: string; 
  public get guestFormat() {
    return this.getStringAttribute('guest_format');
  }
  public set guestFormat(value: string) {
    this._guestFormat = value;
  }
  public resetGuestFormat() {
    this._guestFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestFormatInput() {
    return this._guestFormat;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // volume_size - computed: false, optional: true, required: false
  private _volumeSize?: number; 
  public get volumeSize() {
    return this.getNumberAttribute('volume_size');
  }
  public set volumeSize(value: number) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_type - computed: false, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}

export class ComputeInstanceBlockDeviceList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceBlockDevice[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceBlockDeviceOutputReference {
    return new ComputeInstanceBlockDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceCloudMonitoring {
  /**
  * The script of the cloud monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#script ComputeInstance#script}
  */
  readonly script: string;
  /**
  * The id of the service monitoring user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#service_user_id ComputeInstance#service_user_id}
  */
  readonly serviceUserId: string;
}

export function computeInstanceCloudMonitoringToTerraform(struct?: ComputeInstanceCloudMonitoringOutputReference | ComputeInstanceCloudMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    script: cdktf.stringToTerraform(struct!.script),
    service_user_id: cdktf.stringToTerraform(struct!.serviceUserId),
  }
}


export function computeInstanceCloudMonitoringToHclTerraform(struct?: ComputeInstanceCloudMonitoringOutputReference | ComputeInstanceCloudMonitoring): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_user_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceUserId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceCloudMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceCloudMonitoring | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._serviceUserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceUserId = this._serviceUserId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceCloudMonitoring | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._script = undefined;
      this._serviceUserId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._script = value.script;
      this._serviceUserId = value.serviceUserId;
    }
  }

  // script - computed: false, optional: false, required: true
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // service_user_id - computed: false, optional: false, required: true
  private _serviceUserId?: string; 
  public get serviceUserId() {
    return this.getStringAttribute('service_user_id');
  }
  public set serviceUserId(value: string) {
    this._serviceUserId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUserIdInput() {
    return this._serviceUserId;
  }
}
export interface ComputeInstanceNetwork {
  /**
  * Specifies if this network should be used for provisioning access. Accepts true or false. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#access_network ComputeInstance#access_network}
  */
  readonly accessNetwork?: boolean | cdktf.IResolvable;
  /**
  * Specifies a fixed IPv4 address to be used on this network. Changing this creates a new server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#fixed_ip_v4 ComputeInstance#fixed_ip_v4}
  */
  readonly fixedIpV4?: string;
  /**
  * The human-readable name of the network. Optional if `uuid` or `port` is provided. Changing this creates a new server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#name ComputeInstance#name}
  */
  readonly name?: string;
  /**
  * The port UUID of a network to attach to the server. Optional if `uuid` or `name` is provided. Changing this creates a new server. _note_ If port is used, only its security groups will be applied instead of security_groups instance argument.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#port ComputeInstance#port}
  */
  readonly port?: string;
  /**
  * The network UUID to attach to the server. Optional if `port` or `name` is provided. Changing this creates a new server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#uuid ComputeInstance#uuid}
  */
  readonly uuid?: string;
}

export function computeInstanceNetworkToTerraform(struct?: ComputeInstanceNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_network: cdktf.booleanToTerraform(struct!.accessNetwork),
    fixed_ip_v4: cdktf.stringToTerraform(struct!.fixedIpV4),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.stringToTerraform(struct!.port),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function computeInstanceNetworkToHclTerraform(struct?: ComputeInstanceNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_network: {
      value: cdktf.booleanToHclTerraform(struct!.accessNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fixed_ip_v4: {
      value: cdktf.stringToHclTerraform(struct!.fixedIpV4),
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceNetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessNetwork = this._accessNetwork;
    }
    if (this._fixedIpV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIpV4 = this._fixedIpV4;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessNetwork = undefined;
      this._fixedIpV4 = undefined;
      this._name = undefined;
      this._port = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessNetwork = value.accessNetwork;
      this._fixedIpV4 = value.fixedIpV4;
      this._name = value.name;
      this._port = value.port;
      this._uuid = value.uuid;
    }
  }

  // access_network - computed: false, optional: true, required: false
  private _accessNetwork?: boolean | cdktf.IResolvable; 
  public get accessNetwork() {
    return this.getBooleanAttribute('access_network');
  }
  public set accessNetwork(value: boolean | cdktf.IResolvable) {
    this._accessNetwork = value;
  }
  public resetAccessNetwork() {
    this._accessNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessNetworkInput() {
    return this._accessNetwork;
  }

  // fixed_ip_v4 - computed: true, optional: true, required: false
  private _fixedIpV4?: string; 
  public get fixedIpV4() {
    return this.getStringAttribute('fixed_ip_v4');
  }
  public set fixedIpV4(value: string) {
    this._fixedIpV4 = value;
  }
  public resetFixedIpV4() {
    this._fixedIpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpV4Input() {
    return this._fixedIpV4;
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // name - computed: true, optional: true, required: false
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

  // port - computed: true, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

export class ComputeInstanceNetworkList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceNetwork[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceNetworkOutputReference {
    return new ComputeInstanceNetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstancePersonality {
  /**
  * The contents of the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#content ComputeInstance#content}
  */
  readonly content: string;
  /**
  * The absolute path of the destination file. Limited to 255 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#file ComputeInstance#file}
  */
  readonly file: string;
}

export function computeInstancePersonalityToTerraform(struct?: ComputeInstancePersonality | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    file: cdktf.stringToTerraform(struct!.file),
  }
}


export function computeInstancePersonalityToHclTerraform(struct?: ComputeInstancePersonality | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstancePersonalityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstancePersonality | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstancePersonality | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._content = undefined;
      this._file = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._content = value.content;
      this._file = value.file;
    }
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // file - computed: false, optional: false, required: true
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }
}

export class ComputeInstancePersonalityList extends cdktf.ComplexList {
  public internalValue? : ComputeInstancePersonality[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstancePersonalityOutputReference {
    return new ComputeInstancePersonalityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceSchedulerHints {
  /**
  * A UUID of a Server Group. The instance will be placed into that group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#group ComputeInstance#group}
  */
  readonly group?: string;
}

export function computeInstanceSchedulerHintsToTerraform(struct?: ComputeInstanceSchedulerHints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
  }
}


export function computeInstanceSchedulerHintsToHclTerraform(struct?: ComputeInstanceSchedulerHints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceSchedulerHintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceSchedulerHints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceSchedulerHints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }
}

export class ComputeInstanceSchedulerHintsList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceSchedulerHints[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceSchedulerHintsOutputReference {
    return new ComputeInstanceSchedulerHintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#create ComputeInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#delete ComputeInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#update ComputeInstance#update}
  */
  readonly update?: string;
}

export function computeInstanceTimeoutsToTerraform(struct?: ComputeInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function computeInstanceTimeoutsToHclTerraform(struct?: ComputeInstanceTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
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

export class ComputeInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
      this._delete = value.delete;
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
export interface ComputeInstanceVendorOptions {
  /**
  * Whether to try to detach all attached ports to the vm before destroying it to make sure the port state is correct after the vm destruction. This is helpful when the port is not deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#detach_ports_before_destroy ComputeInstance#detach_ports_before_destroy}
  */
  readonly detachPortsBeforeDestroy?: boolean | cdktf.IResolvable;
  /**
  * If true, wait for initial windows admin password to be generated and retrieve it. Use this attribute only for instances running Microsoft Windows. The password data is exported to the `password_data` attribute. The password will be generated only if you specify the instance `key_pair`. The password will be read only once when the instance is created._new_since_v0.9.3_.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#get_password_data ComputeInstance#get_password_data}
  */
  readonly fetchPasswordData?: boolean | cdktf.IResolvable;
  /**
  * Boolean to control whether to ignore manual confirmation of the instance resizing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#ignore_resize_confirmation ComputeInstance#ignore_resize_confirmation}
  */
  readonly ignoreResizeConfirmation?: boolean | cdktf.IResolvable;
}

export function computeInstanceVendorOptionsToTerraform(struct?: ComputeInstanceVendorOptionsOutputReference | ComputeInstanceVendorOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detach_ports_before_destroy: cdktf.booleanToTerraform(struct!.detachPortsBeforeDestroy),
    get_password_data: cdktf.booleanToTerraform(struct!.fetchPasswordData),
    ignore_resize_confirmation: cdktf.booleanToTerraform(struct!.ignoreResizeConfirmation),
  }
}


export function computeInstanceVendorOptionsToHclTerraform(struct?: ComputeInstanceVendorOptionsOutputReference | ComputeInstanceVendorOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    detach_ports_before_destroy: {
      value: cdktf.booleanToHclTerraform(struct!.detachPortsBeforeDestroy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    get_password_data: {
      value: cdktf.booleanToHclTerraform(struct!.fetchPasswordData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_resize_confirmation: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreResizeConfirmation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceVendorOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceVendorOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detachPortsBeforeDestroy !== undefined) {
      hasAnyValues = true;
      internalValueResult.detachPortsBeforeDestroy = this._detachPortsBeforeDestroy;
    }
    if (this._getPasswordData !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchPasswordData = this._getPasswordData;
    }
    if (this._ignoreResizeConfirmation !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreResizeConfirmation = this._ignoreResizeConfirmation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceVendorOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detachPortsBeforeDestroy = undefined;
      this._getPasswordData = undefined;
      this._ignoreResizeConfirmation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detachPortsBeforeDestroy = value.detachPortsBeforeDestroy;
      this._getPasswordData = value.fetchPasswordData;
      this._ignoreResizeConfirmation = value.ignoreResizeConfirmation;
    }
  }

  // detach_ports_before_destroy - computed: false, optional: true, required: false
  private _detachPortsBeforeDestroy?: boolean | cdktf.IResolvable; 
  public get detachPortsBeforeDestroy() {
    return this.getBooleanAttribute('detach_ports_before_destroy');
  }
  public set detachPortsBeforeDestroy(value: boolean | cdktf.IResolvable) {
    this._detachPortsBeforeDestroy = value;
  }
  public resetDetachPortsBeforeDestroy() {
    this._detachPortsBeforeDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detachPortsBeforeDestroyInput() {
    return this._detachPortsBeforeDestroy;
  }

  // get_password_data - computed: false, optional: true, required: false
  private _getPasswordData?: boolean | cdktf.IResolvable; 
  public get fetchPasswordData() {
    return this.getBooleanAttribute('get_password_data');
  }
  public set fetchPasswordData(value: boolean | cdktf.IResolvable) {
    this._getPasswordData = value;
  }
  public resetFetchPasswordData() {
    this._getPasswordData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchPasswordDataInput() {
    return this._getPasswordData;
  }

  // ignore_resize_confirmation - computed: false, optional: true, required: false
  private _ignoreResizeConfirmation?: boolean | cdktf.IResolvable; 
  public get ignoreResizeConfirmation() {
    return this.getBooleanAttribute('ignore_resize_confirmation');
  }
  public set ignoreResizeConfirmation(value: boolean | cdktf.IResolvable) {
    this._ignoreResizeConfirmation = value;
  }
  public resetIgnoreResizeConfirmation() {
    this._ignoreResizeConfirmation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreResizeConfirmationInput() {
    return this._ignoreResizeConfirmation;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance vkcs_compute_instance}
*/
export class ComputeInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vkcs_compute_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeInstance to import
  * @param importFromId The id of the existing ComputeInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vkcs_compute_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vk-cs/vkcs/0.13.0/docs/resources/compute_instance vkcs_compute_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'vkcs_compute_instance',
      terraformGeneratorMetadata: {
        providerName: 'vkcs',
        providerVersion: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessIpV4 = config.accessIpV4;
    this._adminPass = config.adminPass;
    this._availabilityZone = config.availabilityZone;
    this._configDrive = config.configDrive;
    this._flavorId = config.flavorId;
    this._flavorName = config.flavorName;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._imageId = config.imageId;
    this._imageName = config.imageName;
    this._keyPair = config.keyPair;
    this._metadata = config.metadata;
    this._name = config.name;
    this._networkMode = config.networkMode;
    this._powerState = config.powerState;
    this._region = config.region;
    this._securityGroupIds = config.securityGroupIds;
    this._securityGroups = config.securityGroups;
    this._stopBeforeDestroy = config.stopBeforeDestroy;
    this._tags = config.tags;
    this._userData = config.userData;
    this._blockDevice.internalValue = config.blockDevice;
    this._cloudMonitoring.internalValue = config.cloudMonitoring;
    this._network.internalValue = config.network;
    this._personality.internalValue = config.personality;
    this._schedulerHints.internalValue = config.schedulerHints;
    this._timeouts.internalValue = config.timeouts;
    this._vendorOptions.internalValue = config.vendorOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_ip_v4 - computed: true, optional: true, required: false
  private _accessIpV4?: string; 
  public get accessIpV4() {
    return this.getStringAttribute('access_ip_v4');
  }
  public set accessIpV4(value: string) {
    this._accessIpV4 = value;
  }
  public resetAccessIpV4() {
    this._accessIpV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIpV4Input() {
    return this._accessIpV4;
  }

  // admin_pass - computed: false, optional: true, required: false
  private _adminPass?: string; 
  public get adminPass() {
    return this.getStringAttribute('admin_pass');
  }
  public set adminPass(value: string) {
    this._adminPass = value;
  }
  public resetAdminPass() {
    this._adminPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPassInput() {
    return this._adminPass;
  }

  // all_metadata - computed: true, optional: false, required: false
  private _allMetadata = new cdktf.StringMap(this, "all_metadata");
  public get allMetadata() {
    return this._allMetadata;
  }

  // all_tags - computed: true, optional: false, required: false
  public get allTags() {
    return cdktf.Fn.tolist(this.getListAttribute('all_tags'));
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // config_drive - computed: false, optional: true, required: false
  private _configDrive?: boolean | cdktf.IResolvable; 
  public get configDrive() {
    return this.getBooleanAttribute('config_drive');
  }
  public set configDrive(value: boolean | cdktf.IResolvable) {
    this._configDrive = value;
  }
  public resetConfigDrive() {
    this._configDrive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configDriveInput() {
    return this._configDrive;
  }

  // flavor_id - computed: true, optional: true, required: false
  private _flavorId?: string; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string) {
    this._flavorId = value;
  }
  public resetFlavorId() {
    this._flavorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId;
  }

  // flavor_name - computed: true, optional: true, required: false
  private _flavorName?: string; 
  public get flavorName() {
    return this.getStringAttribute('flavor_name');
  }
  public set flavorName(value: string) {
    this._flavorName = value;
  }
  public resetFlavorName() {
    this._flavorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorNameInput() {
    return this._flavorName;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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

  // image_id - computed: true, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // image_name - computed: true, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // key_pair - computed: false, optional: true, required: false
  private _keyPair?: string; 
  public get keyPair() {
    return this.getStringAttribute('key_pair');
  }
  public set keyPair(value: string) {
    this._keyPair = value;
  }
  public resetKeyPair() {
    this._keyPair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairInput() {
    return this._keyPair;
  }

  // metadata - computed: false, optional: true, required: false
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

  // network_mode - computed: false, optional: true, required: false
  private _networkMode?: string; 
  public get networkMode() {
    return this.getStringAttribute('network_mode');
  }
  public set networkMode(value: string) {
    this._networkMode = value;
  }
  public resetNetworkMode() {
    this._networkMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModeInput() {
    return this._networkMode;
  }

  // password_data - computed: true, optional: false, required: false
  public get passwordData() {
    return this.getStringAttribute('password_data');
  }

  // power_state - computed: false, optional: true, required: false
  private _powerState?: string; 
  public get powerState() {
    return this.getStringAttribute('power_state');
  }
  public set powerState(value: string) {
    this._powerState = value;
  }
  public resetPowerState() {
    this._powerState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerStateInput() {
    return this._powerState;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_group_ids - computed: true, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('security_groups'));
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // stop_before_destroy - computed: false, optional: true, required: false
  private _stopBeforeDestroy?: boolean | cdktf.IResolvable; 
  public get stopBeforeDestroy() {
    return this.getBooleanAttribute('stop_before_destroy');
  }
  public set stopBeforeDestroy(value: boolean | cdktf.IResolvable) {
    this._stopBeforeDestroy = value;
  }
  public resetStopBeforeDestroy() {
    this._stopBeforeDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopBeforeDestroyInput() {
    return this._stopBeforeDestroy;
  }

  // tags - computed: false, optional: true, required: false
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

  // block_device - computed: false, optional: true, required: false
  private _blockDevice = new ComputeInstanceBlockDeviceList(this, "block_device", false);
  public get blockDevice() {
    return this._blockDevice;
  }
  public putBlockDevice(value: ComputeInstanceBlockDevice[] | cdktf.IResolvable) {
    this._blockDevice.internalValue = value;
  }
  public resetBlockDevice() {
    this._blockDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDeviceInput() {
    return this._blockDevice.internalValue;
  }

  // cloud_monitoring - computed: false, optional: true, required: false
  private _cloudMonitoring = new ComputeInstanceCloudMonitoringOutputReference(this, "cloud_monitoring");
  public get cloudMonitoring() {
    return this._cloudMonitoring;
  }
  public putCloudMonitoring(value: ComputeInstanceCloudMonitoring) {
    this._cloudMonitoring.internalValue = value;
  }
  public resetCloudMonitoring() {
    this._cloudMonitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudMonitoringInput() {
    return this._cloudMonitoring.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new ComputeInstanceNetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: ComputeInstanceNetwork[] | cdktf.IResolvable) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // personality - computed: false, optional: true, required: false
  private _personality = new ComputeInstancePersonalityList(this, "personality", true);
  public get personality() {
    return this._personality;
  }
  public putPersonality(value: ComputeInstancePersonality[] | cdktf.IResolvable) {
    this._personality.internalValue = value;
  }
  public resetPersonality() {
    this._personality.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalityInput() {
    return this._personality.internalValue;
  }

  // scheduler_hints - computed: false, optional: true, required: false
  private _schedulerHints = new ComputeInstanceSchedulerHintsList(this, "scheduler_hints", true);
  public get schedulerHints() {
    return this._schedulerHints;
  }
  public putSchedulerHints(value: ComputeInstanceSchedulerHints[] | cdktf.IResolvable) {
    this._schedulerHints.internalValue = value;
  }
  public resetSchedulerHints() {
    this._schedulerHints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerHintsInput() {
    return this._schedulerHints.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vendor_options - computed: false, optional: true, required: false
  private _vendorOptions = new ComputeInstanceVendorOptionsOutputReference(this, "vendor_options");
  public get vendorOptions() {
    return this._vendorOptions;
  }
  public putVendorOptions(value: ComputeInstanceVendorOptions) {
    this._vendorOptions.internalValue = value;
  }
  public resetVendorOptions() {
    this._vendorOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorOptionsInput() {
    return this._vendorOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_ip_v4: cdktf.stringToTerraform(this._accessIpV4),
      admin_pass: cdktf.stringToTerraform(this._adminPass),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      config_drive: cdktf.booleanToTerraform(this._configDrive),
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      flavor_name: cdktf.stringToTerraform(this._flavorName),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      image_name: cdktf.stringToTerraform(this._imageName),
      key_pair: cdktf.stringToTerraform(this._keyPair),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      network_mode: cdktf.stringToTerraform(this._networkMode),
      power_state: cdktf.stringToTerraform(this._powerState),
      region: cdktf.stringToTerraform(this._region),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      stop_before_destroy: cdktf.booleanToTerraform(this._stopBeforeDestroy),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      user_data: cdktf.stringToTerraform(this._userData),
      block_device: cdktf.listMapper(computeInstanceBlockDeviceToTerraform, true)(this._blockDevice.internalValue),
      cloud_monitoring: computeInstanceCloudMonitoringToTerraform(this._cloudMonitoring.internalValue),
      network: cdktf.listMapper(computeInstanceNetworkToTerraform, true)(this._network.internalValue),
      personality: cdktf.listMapper(computeInstancePersonalityToTerraform, true)(this._personality.internalValue),
      scheduler_hints: cdktf.listMapper(computeInstanceSchedulerHintsToTerraform, true)(this._schedulerHints.internalValue),
      timeouts: computeInstanceTimeoutsToTerraform(this._timeouts.internalValue),
      vendor_options: computeInstanceVendorOptionsToTerraform(this._vendorOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_ip_v4: {
        value: cdktf.stringToHclTerraform(this._accessIpV4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_pass: {
        value: cdktf.stringToHclTerraform(this._adminPass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_drive: {
        value: cdktf.booleanToHclTerraform(this._configDrive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      flavor_id: {
        value: cdktf.stringToHclTerraform(this._flavorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flavor_name: {
        value: cdktf.stringToHclTerraform(this._flavorName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_name: {
        value: cdktf.stringToHclTerraform(this._imageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_pair: {
        value: cdktf.stringToHclTerraform(this._keyPair),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      network_mode: {
        value: cdktf.stringToHclTerraform(this._networkMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      power_state: {
        value: cdktf.stringToHclTerraform(this._powerState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      security_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._securityGroups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      stop_before_destroy: {
        value: cdktf.booleanToHclTerraform(this._stopBeforeDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_device: {
        value: cdktf.listMapperHcl(computeInstanceBlockDeviceToHclTerraform, true)(this._blockDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeInstanceBlockDeviceList",
      },
      cloud_monitoring: {
        value: computeInstanceCloudMonitoringToHclTerraform(this._cloudMonitoring.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeInstanceCloudMonitoringList",
      },
      network: {
        value: cdktf.listMapperHcl(computeInstanceNetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeInstanceNetworkList",
      },
      personality: {
        value: cdktf.listMapperHcl(computeInstancePersonalityToHclTerraform, true)(this._personality.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeInstancePersonalityList",
      },
      scheduler_hints: {
        value: cdktf.listMapperHcl(computeInstanceSchedulerHintsToHclTerraform, true)(this._schedulerHints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeInstanceSchedulerHintsList",
      },
      timeouts: {
        value: computeInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeInstanceTimeouts",
      },
      vendor_options: {
        value: computeInstanceVendorOptionsToHclTerraform(this._vendorOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeInstanceVendorOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
