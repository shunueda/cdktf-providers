// https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeInstanceV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#access_ip_v4 ComputeInstanceV2#access_ip_v4}
  */
  readonly accessIpV4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#access_ip_v6 ComputeInstanceV2#access_ip_v6}
  */
  readonly accessIpV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#admin_pass ComputeInstanceV2#admin_pass}
  */
  readonly adminPass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#availability_zone ComputeInstanceV2#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#availability_zone_hints ComputeInstanceV2#availability_zone_hints}
  */
  readonly availabilityZoneHints?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#config_drive ComputeInstanceV2#config_drive}
  */
  readonly configDrive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#flavor_id ComputeInstanceV2#flavor_id}
  */
  readonly flavorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#flavor_name ComputeInstanceV2#flavor_name}
  */
  readonly flavorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#floating_ip ComputeInstanceV2#floating_ip}
  */
  readonly floatingIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#force_delete ComputeInstanceV2#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#id ComputeInstanceV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#image_id ComputeInstanceV2#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#image_name ComputeInstanceV2#image_name}
  */
  readonly imageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#key_pair ComputeInstanceV2#key_pair}
  */
  readonly keyPair?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#metadata ComputeInstanceV2#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#name ComputeInstanceV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#network_mode ComputeInstanceV2#network_mode}
  */
  readonly networkMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#power_state ComputeInstanceV2#power_state}
  */
  readonly powerState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#region ComputeInstanceV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#security_groups ComputeInstanceV2#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#stop_before_destroy ComputeInstanceV2#stop_before_destroy}
  */
  readonly stopBeforeDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#tags ComputeInstanceV2#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#user_data ComputeInstanceV2#user_data}
  */
  readonly userData?: string;
  /**
  * block_device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#block_device ComputeInstanceV2#block_device}
  */
  readonly blockDevice?: ComputeInstanceV2BlockDevice[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#network ComputeInstanceV2#network}
  */
  readonly network?: ComputeInstanceV2Network[] | cdktf.IResolvable;
  /**
  * personality block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#personality ComputeInstanceV2#personality}
  */
  readonly personality?: ComputeInstanceV2Personality[] | cdktf.IResolvable;
  /**
  * scheduler_hints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#scheduler_hints ComputeInstanceV2#scheduler_hints}
  */
  readonly schedulerHints?: ComputeInstanceV2SchedulerHints[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#timeouts ComputeInstanceV2#timeouts}
  */
  readonly timeouts?: ComputeInstanceV2Timeouts;
  /**
  * vendor_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#vendor_options ComputeInstanceV2#vendor_options}
  */
  readonly vendorOptions?: ComputeInstanceV2VendorOptions;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#volume ComputeInstanceV2#volume}
  */
  readonly volume?: ComputeInstanceV2Volume[] | cdktf.IResolvable;
}
export interface ComputeInstanceV2BlockDeviceNhnEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#skm_appkey ComputeInstanceV2#skm_appkey}
  */
  readonly skmAppkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#skm_key_id ComputeInstanceV2#skm_key_id}
  */
  readonly skmKeyId: string;
}

export function computeInstanceV2BlockDeviceNhnEncryptionToTerraform(struct?: ComputeInstanceV2BlockDeviceNhnEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    skm_appkey: cdktf.stringToTerraform(struct!.skmAppkey),
    skm_key_id: cdktf.stringToTerraform(struct!.skmKeyId),
  }
}


export function computeInstanceV2BlockDeviceNhnEncryptionToHclTerraform(struct?: ComputeInstanceV2BlockDeviceNhnEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    skm_appkey: {
      value: cdktf.stringToHclTerraform(struct!.skmAppkey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skm_key_id: {
      value: cdktf.stringToHclTerraform(struct!.skmKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceV2BlockDeviceNhnEncryptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceV2BlockDeviceNhnEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._skmAppkey !== undefined) {
      hasAnyValues = true;
      internalValueResult.skmAppkey = this._skmAppkey;
    }
    if (this._skmKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.skmKeyId = this._skmKeyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceV2BlockDeviceNhnEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._skmAppkey = undefined;
      this._skmKeyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._skmAppkey = value.skmAppkey;
      this._skmKeyId = value.skmKeyId;
    }
  }

  // skm_appkey - computed: false, optional: false, required: true
  private _skmAppkey?: string; 
  public get skmAppkey() {
    return this.getStringAttribute('skm_appkey');
  }
  public set skmAppkey(value: string) {
    this._skmAppkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skmAppkeyInput() {
    return this._skmAppkey;
  }

  // skm_key_id - computed: false, optional: false, required: true
  private _skmKeyId?: string; 
  public get skmKeyId() {
    return this.getStringAttribute('skm_key_id');
  }
  public set skmKeyId(value: string) {
    this._skmKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skmKeyIdInput() {
    return this._skmKeyId;
  }
}

export class ComputeInstanceV2BlockDeviceNhnEncryptionList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceV2BlockDeviceNhnEncryption[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceV2BlockDeviceNhnEncryptionOutputReference {
    return new ComputeInstanceV2BlockDeviceNhnEncryptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceV2BlockDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#boot_index ComputeInstanceV2#boot_index}
  */
  readonly bootIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#delete_on_termination ComputeInstanceV2#delete_on_termination}
  */
  readonly deleteOnTermination?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#destination_type ComputeInstanceV2#destination_type}
  */
  readonly destinationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#device_type ComputeInstanceV2#device_type}
  */
  readonly deviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#disk_bus ComputeInstanceV2#disk_bus}
  */
  readonly diskBus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#guest_format ComputeInstanceV2#guest_format}
  */
  readonly guestFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#source_type ComputeInstanceV2#source_type}
  */
  readonly sourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#test ComputeInstanceV2#test}
  */
  readonly test?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#uuid ComputeInstanceV2#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#volume_size ComputeInstanceV2#volume_size}
  */
  readonly volumeSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#volume_type ComputeInstanceV2#volume_type}
  */
  readonly volumeType?: string;
  /**
  * nhn_encryption block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#nhn_encryption ComputeInstanceV2#nhn_encryption}
  */
  readonly nhnEncryption?: ComputeInstanceV2BlockDeviceNhnEncryption[] | cdktf.IResolvable;
}

export function computeInstanceV2BlockDeviceToTerraform(struct?: ComputeInstanceV2BlockDevice | cdktf.IResolvable): any {
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
    test: cdktf.stringToTerraform(struct!.test),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    volume_size: cdktf.numberToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
    nhn_encryption: cdktf.listMapper(computeInstanceV2BlockDeviceNhnEncryptionToTerraform, true)(struct!.nhnEncryption),
  }
}


export function computeInstanceV2BlockDeviceToHclTerraform(struct?: ComputeInstanceV2BlockDevice | cdktf.IResolvable): any {
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
    test: {
      value: cdktf.stringToHclTerraform(struct!.test),
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
    nhn_encryption: {
      value: cdktf.listMapperHcl(computeInstanceV2BlockDeviceNhnEncryptionToHclTerraform, true)(struct!.nhnEncryption),
      isBlock: true,
      type: "list",
      storageClassType: "ComputeInstanceV2BlockDeviceNhnEncryptionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceV2BlockDeviceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceV2BlockDevice | cdktf.IResolvable | undefined {
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
    if (this._test !== undefined) {
      hasAnyValues = true;
      internalValueResult.test = this._test;
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
    if (this._nhnEncryption?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nhnEncryption = this._nhnEncryption?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceV2BlockDevice | cdktf.IResolvable | undefined) {
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
      this._test = undefined;
      this._uuid = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
      this._nhnEncryption.internalValue = undefined;
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
      this._test = value.test;
      this._uuid = value.uuid;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
      this._nhnEncryption.internalValue = value.nhnEncryption;
    }
  }

  // boot_index - computed: false, optional: true, required: false
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

  // test - computed: false, optional: true, required: false
  private _test?: string; 
  public get test() {
    return this.getStringAttribute('test');
  }
  public set test(value: string) {
    this._test = value;
  }
  public resetTest() {
    this._test = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testInput() {
    return this._test;
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

  // nhn_encryption - computed: false, optional: true, required: false
  private _nhnEncryption = new ComputeInstanceV2BlockDeviceNhnEncryptionList(this, "nhn_encryption", false);
  public get nhnEncryption() {
    return this._nhnEncryption;
  }
  public putNhnEncryption(value: ComputeInstanceV2BlockDeviceNhnEncryption[] | cdktf.IResolvable) {
    this._nhnEncryption.internalValue = value;
  }
  public resetNhnEncryption() {
    this._nhnEncryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nhnEncryptionInput() {
    return this._nhnEncryption.internalValue;
  }
}

export class ComputeInstanceV2BlockDeviceList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceV2BlockDevice[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceV2BlockDeviceOutputReference {
    return new ComputeInstanceV2BlockDeviceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceV2Network {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#access_network ComputeInstanceV2#access_network}
  */
  readonly accessNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#fixed_ip_v4 ComputeInstanceV2#fixed_ip_v4}
  */
  readonly fixedIpV4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#fixed_ip_v6 ComputeInstanceV2#fixed_ip_v6}
  */
  readonly fixedIpV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#floating_ip ComputeInstanceV2#floating_ip}
  */
  readonly floatingIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#name ComputeInstanceV2#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#port ComputeInstanceV2#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#uuid ComputeInstanceV2#uuid}
  */
  readonly uuid?: string;
}

export function computeInstanceV2NetworkToTerraform(struct?: ComputeInstanceV2Network | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_network: cdktf.booleanToTerraform(struct!.accessNetwork),
    fixed_ip_v4: cdktf.stringToTerraform(struct!.fixedIpV4),
    fixed_ip_v6: cdktf.stringToTerraform(struct!.fixedIpV6),
    floating_ip: cdktf.stringToTerraform(struct!.floatingIp),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.stringToTerraform(struct!.port),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function computeInstanceV2NetworkToHclTerraform(struct?: ComputeInstanceV2Network | cdktf.IResolvable): any {
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
    fixed_ip_v6: {
      value: cdktf.stringToHclTerraform(struct!.fixedIpV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    floating_ip: {
      value: cdktf.stringToHclTerraform(struct!.floatingIp),
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

export class ComputeInstanceV2NetworkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceV2Network | cdktf.IResolvable | undefined {
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
    if (this._fixedIpV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedIpV6 = this._fixedIpV6;
    }
    if (this._floatingIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIp = this._floatingIp;
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

  public set internalValue(value: ComputeInstanceV2Network | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessNetwork = undefined;
      this._fixedIpV4 = undefined;
      this._fixedIpV6 = undefined;
      this._floatingIp = undefined;
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
      this._fixedIpV6 = value.fixedIpV6;
      this._floatingIp = value.floatingIp;
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

  // fixed_ip_v6 - computed: true, optional: true, required: false
  private _fixedIpV6?: string; 
  public get fixedIpV6() {
    return this.getStringAttribute('fixed_ip_v6');
  }
  public set fixedIpV6(value: string) {
    this._fixedIpV6 = value;
  }
  public resetFixedIpV6() {
    this._fixedIpV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedIpV6Input() {
    return this._fixedIpV6;
  }

  // floating_ip - computed: true, optional: true, required: false
  private _floatingIp?: string; 
  public get floatingIp() {
    return this.getStringAttribute('floating_ip');
  }
  public set floatingIp(value: string) {
    this._floatingIp = value;
  }
  public resetFloatingIp() {
    this._floatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp;
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

export class ComputeInstanceV2NetworkList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceV2Network[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceV2NetworkOutputReference {
    return new ComputeInstanceV2NetworkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceV2Personality {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#content ComputeInstanceV2#content}
  */
  readonly content: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#file ComputeInstanceV2#file}
  */
  readonly file: string;
}

export function computeInstanceV2PersonalityToTerraform(struct?: ComputeInstanceV2Personality | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    file: cdktf.stringToTerraform(struct!.file),
  }
}


export function computeInstanceV2PersonalityToHclTerraform(struct?: ComputeInstanceV2Personality | cdktf.IResolvable): any {
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

export class ComputeInstanceV2PersonalityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceV2Personality | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeInstanceV2Personality | cdktf.IResolvable | undefined) {
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

export class ComputeInstanceV2PersonalityList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceV2Personality[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceV2PersonalityOutputReference {
    return new ComputeInstanceV2PersonalityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceV2SchedulerHints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#additional_properties ComputeInstanceV2#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#build_near_host_ip ComputeInstanceV2#build_near_host_ip}
  */
  readonly buildNearHostIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#different_cell ComputeInstanceV2#different_cell}
  */
  readonly differentCell?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#different_host ComputeInstanceV2#different_host}
  */
  readonly differentHost?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#group ComputeInstanceV2#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#query ComputeInstanceV2#query}
  */
  readonly query?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#same_host ComputeInstanceV2#same_host}
  */
  readonly sameHost?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#target_cell ComputeInstanceV2#target_cell}
  */
  readonly targetCell?: string;
}

export function computeInstanceV2SchedulerHintsToTerraform(struct?: ComputeInstanceV2SchedulerHints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalProperties),
    build_near_host_ip: cdktf.stringToTerraform(struct!.buildNearHostIp),
    different_cell: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.differentCell),
    different_host: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.differentHost),
    group: cdktf.stringToTerraform(struct!.group),
    query: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.query),
    same_host: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sameHost),
    target_cell: cdktf.stringToTerraform(struct!.targetCell),
  }
}


export function computeInstanceV2SchedulerHintsToHclTerraform(struct?: ComputeInstanceV2SchedulerHints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    build_near_host_ip: {
      value: cdktf.stringToHclTerraform(struct!.buildNearHostIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    different_cell: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.differentCell),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    different_host: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.differentHost),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.query),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    same_host: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sameHost),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    target_cell: {
      value: cdktf.stringToHclTerraform(struct!.targetCell),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceV2SchedulerHintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceV2SchedulerHints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._buildNearHostIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.buildNearHostIp = this._buildNearHostIp;
    }
    if (this._differentCell !== undefined) {
      hasAnyValues = true;
      internalValueResult.differentCell = this._differentCell;
    }
    if (this._differentHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.differentHost = this._differentHost;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._sameHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameHost = this._sameHost;
    }
    if (this._targetCell !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetCell = this._targetCell;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceV2SchedulerHints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._buildNearHostIp = undefined;
      this._differentCell = undefined;
      this._differentHost = undefined;
      this._group = undefined;
      this._query = undefined;
      this._sameHost = undefined;
      this._targetCell = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._buildNearHostIp = value.buildNearHostIp;
      this._differentCell = value.differentCell;
      this._differentHost = value.differentHost;
      this._group = value.group;
      this._query = value.query;
      this._sameHost = value.sameHost;
      this._targetCell = value.targetCell;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // build_near_host_ip - computed: false, optional: true, required: false
  private _buildNearHostIp?: string; 
  public get buildNearHostIp() {
    return this.getStringAttribute('build_near_host_ip');
  }
  public set buildNearHostIp(value: string) {
    this._buildNearHostIp = value;
  }
  public resetBuildNearHostIp() {
    this._buildNearHostIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildNearHostIpInput() {
    return this._buildNearHostIp;
  }

  // different_cell - computed: false, optional: true, required: false
  private _differentCell?: string[]; 
  public get differentCell() {
    return this.getListAttribute('different_cell');
  }
  public set differentCell(value: string[]) {
    this._differentCell = value;
  }
  public resetDifferentCell() {
    this._differentCell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get differentCellInput() {
    return this._differentCell;
  }

  // different_host - computed: false, optional: true, required: false
  private _differentHost?: string[]; 
  public get differentHost() {
    return this.getListAttribute('different_host');
  }
  public set differentHost(value: string[]) {
    this._differentHost = value;
  }
  public resetDifferentHost() {
    this._differentHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get differentHostInput() {
    return this._differentHost;
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

  // query - computed: false, optional: true, required: false
  private _query?: string[]; 
  public get query() {
    return this.getListAttribute('query');
  }
  public set query(value: string[]) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // same_host - computed: false, optional: true, required: false
  private _sameHost?: string[]; 
  public get sameHost() {
    return this.getListAttribute('same_host');
  }
  public set sameHost(value: string[]) {
    this._sameHost = value;
  }
  public resetSameHost() {
    this._sameHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sameHostInput() {
    return this._sameHost;
  }

  // target_cell - computed: false, optional: true, required: false
  private _targetCell?: string; 
  public get targetCell() {
    return this.getStringAttribute('target_cell');
  }
  public set targetCell(value: string) {
    this._targetCell = value;
  }
  public resetTargetCell() {
    this._targetCell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetCellInput() {
    return this._targetCell;
  }
}

export class ComputeInstanceV2SchedulerHintsList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceV2SchedulerHints[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceV2SchedulerHintsOutputReference {
    return new ComputeInstanceV2SchedulerHintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#create ComputeInstanceV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#delete ComputeInstanceV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#update ComputeInstanceV2#update}
  */
  readonly update?: string;
}

export function computeInstanceV2TimeoutsToTerraform(struct?: ComputeInstanceV2Timeouts | cdktf.IResolvable): any {
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


export function computeInstanceV2TimeoutsToHclTerraform(struct?: ComputeInstanceV2Timeouts | cdktf.IResolvable): any {
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

export class ComputeInstanceV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeInstanceV2Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeInstanceV2Timeouts | cdktf.IResolvable | undefined) {
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
export interface ComputeInstanceV2VendorOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#detach_ports_before_destroy ComputeInstanceV2#detach_ports_before_destroy}
  */
  readonly detachPortsBeforeDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#ignore_resize_confirmation ComputeInstanceV2#ignore_resize_confirmation}
  */
  readonly ignoreResizeConfirmation?: boolean | cdktf.IResolvable;
}

export function computeInstanceV2VendorOptionsToTerraform(struct?: ComputeInstanceV2VendorOptionsOutputReference | ComputeInstanceV2VendorOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detach_ports_before_destroy: cdktf.booleanToTerraform(struct!.detachPortsBeforeDestroy),
    ignore_resize_confirmation: cdktf.booleanToTerraform(struct!.ignoreResizeConfirmation),
  }
}


export function computeInstanceV2VendorOptionsToHclTerraform(struct?: ComputeInstanceV2VendorOptionsOutputReference | ComputeInstanceV2VendorOptions): any {
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

export class ComputeInstanceV2VendorOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeInstanceV2VendorOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._detachPortsBeforeDestroy !== undefined) {
      hasAnyValues = true;
      internalValueResult.detachPortsBeforeDestroy = this._detachPortsBeforeDestroy;
    }
    if (this._ignoreResizeConfirmation !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreResizeConfirmation = this._ignoreResizeConfirmation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceV2VendorOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._detachPortsBeforeDestroy = undefined;
      this._ignoreResizeConfirmation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._detachPortsBeforeDestroy = value.detachPortsBeforeDestroy;
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
export interface ComputeInstanceV2Volume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#device ComputeInstanceV2#device}
  */
  readonly device?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#id ComputeInstanceV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#volume_id ComputeInstanceV2#volume_id}
  */
  readonly volumeId: string;
}

export function computeInstanceV2VolumeToTerraform(struct?: ComputeInstanceV2Volume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device: cdktf.stringToTerraform(struct!.device),
    id: cdktf.stringToTerraform(struct!.id),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function computeInstanceV2VolumeToHclTerraform(struct?: ComputeInstanceV2Volume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device: {
      value: cdktf.stringToHclTerraform(struct!.device),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeInstanceV2VolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeInstanceV2Volume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._device !== undefined) {
      hasAnyValues = true;
      internalValueResult.device = this._device;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceV2Volume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._device = undefined;
      this._id = undefined;
      this._volumeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._device = value.device;
      this._id = value.id;
      this._volumeId = value.volumeId;
    }
  }

  // device - computed: true, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
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

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}

export class ComputeInstanceV2VolumeList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceV2Volume[] | cdktf.IResolvable

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
  public get(index: number): ComputeInstanceV2VolumeOutputReference {
    return new ComputeInstanceV2VolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2 nhncloud_compute_instance_v2}
*/
export class ComputeInstanceV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nhncloud_compute_instance_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeInstanceV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeInstanceV2 to import
  * @param importFromId The id of the existing ComputeInstanceV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeInstanceV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nhncloud_compute_instance_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nhn-cloud/nhncloud/1.0.7/docs/resources/compute_instance_v2 nhncloud_compute_instance_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeInstanceV2Config
  */
  public constructor(scope: Construct, id: string, config: ComputeInstanceV2Config) {
    super(scope, id, {
      terraformResourceType: 'nhncloud_compute_instance_v2',
      terraformGeneratorMetadata: {
        providerName: 'nhncloud',
        providerVersion: '1.0.7',
        providerVersionConstraint: '1.0.7'
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
    this._accessIpV6 = config.accessIpV6;
    this._adminPass = config.adminPass;
    this._availabilityZone = config.availabilityZone;
    this._availabilityZoneHints = config.availabilityZoneHints;
    this._configDrive = config.configDrive;
    this._flavorId = config.flavorId;
    this._flavorName = config.flavorName;
    this._floatingIp = config.floatingIp;
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
    this._securityGroups = config.securityGroups;
    this._stopBeforeDestroy = config.stopBeforeDestroy;
    this._tags = config.tags;
    this._userData = config.userData;
    this._blockDevice.internalValue = config.blockDevice;
    this._network.internalValue = config.network;
    this._personality.internalValue = config.personality;
    this._schedulerHints.internalValue = config.schedulerHints;
    this._timeouts.internalValue = config.timeouts;
    this._vendorOptions.internalValue = config.vendorOptions;
    this._volume.internalValue = config.volume;
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

  // access_ip_v6 - computed: true, optional: true, required: false
  private _accessIpV6?: string; 
  public get accessIpV6() {
    return this.getStringAttribute('access_ip_v6');
  }
  public set accessIpV6(value: string) {
    this._accessIpV6 = value;
  }
  public resetAccessIpV6() {
    this._accessIpV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIpV6Input() {
    return this._accessIpV6;
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

  // availability_zone_hints - computed: false, optional: true, required: false
  private _availabilityZoneHints?: string; 
  public get availabilityZoneHints() {
    return this.getStringAttribute('availability_zone_hints');
  }
  public set availabilityZoneHints(value: string) {
    this._availabilityZoneHints = value;
  }
  public resetAvailabilityZoneHints() {
    this._availabilityZoneHints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneHintsInput() {
    return this._availabilityZoneHints;
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

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
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

  // floating_ip - computed: false, optional: true, required: false
  private _floatingIp?: string; 
  public get floatingIp() {
    return this.getStringAttribute('floating_ip');
  }
  public set floatingIp(value: string) {
    this._floatingIp = value;
  }
  public resetFloatingIp() {
    this._floatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp;
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

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
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
  private _blockDevice = new ComputeInstanceV2BlockDeviceList(this, "block_device", false);
  public get blockDevice() {
    return this._blockDevice;
  }
  public putBlockDevice(value: ComputeInstanceV2BlockDevice[] | cdktf.IResolvable) {
    this._blockDevice.internalValue = value;
  }
  public resetBlockDevice() {
    this._blockDevice.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDeviceInput() {
    return this._blockDevice.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new ComputeInstanceV2NetworkList(this, "network", false);
  public get network() {
    return this._network;
  }
  public putNetwork(value: ComputeInstanceV2Network[] | cdktf.IResolvable) {
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
  private _personality = new ComputeInstanceV2PersonalityList(this, "personality", true);
  public get personality() {
    return this._personality;
  }
  public putPersonality(value: ComputeInstanceV2Personality[] | cdktf.IResolvable) {
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
  private _schedulerHints = new ComputeInstanceV2SchedulerHintsList(this, "scheduler_hints", true);
  public get schedulerHints() {
    return this._schedulerHints;
  }
  public putSchedulerHints(value: ComputeInstanceV2SchedulerHints[] | cdktf.IResolvable) {
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
  private _timeouts = new ComputeInstanceV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeInstanceV2Timeouts) {
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
  private _vendorOptions = new ComputeInstanceV2VendorOptionsOutputReference(this, "vendor_options");
  public get vendorOptions() {
    return this._vendorOptions;
  }
  public putVendorOptions(value: ComputeInstanceV2VendorOptions) {
    this._vendorOptions.internalValue = value;
  }
  public resetVendorOptions() {
    this._vendorOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorOptionsInput() {
    return this._vendorOptions.internalValue;
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new ComputeInstanceV2VolumeList(this, "volume", true);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: ComputeInstanceV2Volume[] | cdktf.IResolvable) {
    this._volume.internalValue = value;
  }
  public resetVolume() {
    this._volume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_ip_v4: cdktf.stringToTerraform(this._accessIpV4),
      access_ip_v6: cdktf.stringToTerraform(this._accessIpV6),
      admin_pass: cdktf.stringToTerraform(this._adminPass),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      availability_zone_hints: cdktf.stringToTerraform(this._availabilityZoneHints),
      config_drive: cdktf.booleanToTerraform(this._configDrive),
      flavor_id: cdktf.stringToTerraform(this._flavorId),
      flavor_name: cdktf.stringToTerraform(this._flavorName),
      floating_ip: cdktf.stringToTerraform(this._floatingIp),
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
      security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroups),
      stop_before_destroy: cdktf.booleanToTerraform(this._stopBeforeDestroy),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      user_data: cdktf.stringToTerraform(this._userData),
      block_device: cdktf.listMapper(computeInstanceV2BlockDeviceToTerraform, true)(this._blockDevice.internalValue),
      network: cdktf.listMapper(computeInstanceV2NetworkToTerraform, true)(this._network.internalValue),
      personality: cdktf.listMapper(computeInstanceV2PersonalityToTerraform, true)(this._personality.internalValue),
      scheduler_hints: cdktf.listMapper(computeInstanceV2SchedulerHintsToTerraform, true)(this._schedulerHints.internalValue),
      timeouts: computeInstanceV2TimeoutsToTerraform(this._timeouts.internalValue),
      vendor_options: computeInstanceV2VendorOptionsToTerraform(this._vendorOptions.internalValue),
      volume: cdktf.listMapper(computeInstanceV2VolumeToTerraform, true)(this._volume.internalValue),
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
      access_ip_v6: {
        value: cdktf.stringToHclTerraform(this._accessIpV6),
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
      availability_zone_hints: {
        value: cdktf.stringToHclTerraform(this._availabilityZoneHints),
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
      floating_ip: {
        value: cdktf.stringToHclTerraform(this._floatingIp),
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
        value: cdktf.listMapperHcl(computeInstanceV2BlockDeviceToHclTerraform, true)(this._blockDevice.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeInstanceV2BlockDeviceList",
      },
      network: {
        value: cdktf.listMapperHcl(computeInstanceV2NetworkToHclTerraform, true)(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeInstanceV2NetworkList",
      },
      personality: {
        value: cdktf.listMapperHcl(computeInstanceV2PersonalityToHclTerraform, true)(this._personality.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeInstanceV2PersonalityList",
      },
      scheduler_hints: {
        value: cdktf.listMapperHcl(computeInstanceV2SchedulerHintsToHclTerraform, true)(this._schedulerHints.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeInstanceV2SchedulerHintsList",
      },
      timeouts: {
        value: computeInstanceV2TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeInstanceV2Timeouts",
      },
      vendor_options: {
        value: computeInstanceV2VendorOptionsToHclTerraform(this._vendorOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeInstanceV2VendorOptionsList",
      },
      volume: {
        value: cdktf.listMapperHcl(computeInstanceV2VolumeToHclTerraform, true)(this._volume.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ComputeInstanceV2VolumeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
