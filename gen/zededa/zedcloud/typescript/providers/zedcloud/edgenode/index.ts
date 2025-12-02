// https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgenodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * administrative state of device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#admin_state Edgenode#admin_state}
  */
  readonly adminState?: string;
  /**
  * Device asset ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#asset_id Edgenode#asset_id}
  */
  readonly assetId?: string;
  /**
  * Force upgrade base OS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#base_os_force_upgrade Edgenode#base_os_force_upgrade}
  */
  readonly baseOsForceUpgrade?: boolean | cdktf.IResolvable;
  /**
  * device baseos retry counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#base_os_retry_counter Edgenode#base_os_retry_counter}
  */
  readonly baseOsRetryCounter?: number;
  /**
  * device baseos retry time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#base_os_retry_time Edgenode#base_os_retry_time}
  */
  readonly baseOsRetryTime?: string;
  /**
  * Client IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#client_ip Edgenode#client_ip}
  */
  readonly clientIp?: string;
  /**
  * System defined universally unique clusterInstance ID, unique across the enterprise.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#cluster_id Edgenode#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Cluster Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#cluster_interface Edgenode#cluster_interface}
  */
  readonly clusterInterface?: string;
  /**
  * device configuration lock setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#config_lock Edgenode#config_lock}
  */
  readonly configLock?: string;
  /**
  * CPU (configured values)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#cpu Edgenode#cpu}
  */
  readonly cpu?: number;
  /**
  * user defined tag for the device, which is used while deploying policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#deployment_tag Edgenode#deployment_tag}
  */
  readonly deploymentTag?: string;
  /**
  * deprecated field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#deprecated Edgenode#deprecated}
  */
  readonly deprecated?: string;
  /**
  * user specified description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#description Edgenode#description}
  */
  readonly description?: string;
  /**
  * Allow device to enable Edgeview
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#edgeview_allow Edgenode#edgeview_allow}
  */
  readonly edgeviewAllow?: boolean | cdktf.IResolvable;
  /**
  * indicates whether a soft serial should be generated; it will work ONLY when device is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#generate_soft_serial Edgenode#generate_soft_serial}
  */
  readonly generateSoftSerial?: boolean | cdktf.IResolvable;
  /**
  * Device identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#identity Edgenode#identity}
  */
  readonly identity?: string;
  /**
  * local operator console url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#local_operator_console_url Edgenode#local_operator_console_url}
  */
  readonly localOperatorConsoleUrl?: string;
  /**
  * Device location: deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#location Edgenode#location}
  */
  readonly location?: string;
  /**
  * Device memory in MBs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#memory Edgenode#memory}
  */
  readonly memory?: number;
  /**
  * device model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#model_id Edgenode#model_id}
  */
  readonly modelId: string;
  /**
  * user specified device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#name Edgenode#name}
  */
  readonly name: string;
  /**
  * Object key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#onboarding_key Edgenode#onboarding_key}
  */
  readonly onboardingKey?: string;
  /**
  * prepare poweroff counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#prepare_power_off_counter Edgenode#prepare_power_off_counter}
  */
  readonly preparePowerOffCounter?: number;
  /**
  * prepare poweroff time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#prepare_power_off_time Edgenode#prepare_power_off_time}
  */
  readonly preparePowerOffTime?: string;
  /**
  * project name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#project_id Edgenode#project_id}
  */
  readonly projectId: string;
  /**
  * devicereset counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#reset_counter Edgenode#reset_counter}
  */
  readonly resetCounter?: number;
  /**
  * device reset time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#reset_time Edgenode#reset_time}
  */
  readonly resetTime?: string;
  /**
  * Device serial number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#serialno Edgenode#serialno}
  */
  readonly serialno?: string;
  /**
  * Site captured pictures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#site_pictures Edgenode#site_pictures}
  */
  readonly sitePictures?: string[];
  /**
  * Device storage in GBs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#storage Edgenode#storage}
  */
  readonly storage?: number;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#tags Edgenode#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Threads
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#thread Edgenode#thread}
  */
  readonly thread?: number;
  /**
  * user specified title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#title Edgenode#title}
  */
  readonly title: string;
  /**
  * Single use token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#token Edgenode#token}
  */
  readonly token?: string;
  /**
  * device model arch type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#utype Edgenode#utype}
  */
  readonly utype?: string;
  /**
  * base_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#base_image Edgenode#base_image}
  */
  readonly baseImage?: EdgenodeBaseImage[] | cdktf.IResolvable;
  /**
  * config_item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#config_item Edgenode#config_item}
  */
  readonly configItem?: EdgenodeConfigItem[] | cdktf.IResolvable;
  /**
  * default_net_inst block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#default_net_inst Edgenode#default_net_inst}
  */
  readonly defaultNetInst?: EdgenodeDefaultNetInst[] | cdktf.IResolvable;
  /**
  * dev_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#dev_location Edgenode#dev_location}
  */
  readonly devLocation?: EdgenodeDevLocation[] | cdktf.IResolvable;
  /**
  * dlisp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#dlisp Edgenode#dlisp}
  */
  readonly dlisp?: EdgenodeDlisp[] | cdktf.IResolvable;
  /**
  * edge_node_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#edge_node_cluster Edgenode#edge_node_cluster}
  */
  readonly edgeNodeCluster?: EdgenodeEdgeNodeCluster[] | cdktf.IResolvable;
  /**
  * edgeviewconfig block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#edgeviewconfig Edgenode#edgeviewconfig}
  */
  readonly edgeviewconfig?: EdgenodeEdgeviewconfig[] | cdktf.IResolvable;
  /**
  * interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#interfaces Edgenode#interfaces}
  */
  readonly interfaces: EdgenodeInterfaces[] | cdktf.IResolvable;
  /**
  * revision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#revision Edgenode#revision}
  */
  readonly revision?: EdgenodeRevision[] | cdktf.IResolvable;
  /**
  * vlan_adapters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#vlan_adapters Edgenode#vlan_adapters}
  */
  readonly vlanAdapters?: EdgenodeVlanAdapters[] | cdktf.IResolvable;
}
export interface EdgenodeDebugKnob {
}

export function edgenodeDebugKnobToTerraform(struct?: EdgenodeDebugKnob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function edgenodeDebugKnobToHclTerraform(struct?: EdgenodeDebugKnob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EdgenodeDebugKnobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EdgenodeDebugKnob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeDebugKnob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // debug_knob - computed: true, optional: false, required: false
  public get debugKnob() {
    return this.getBooleanAttribute('debug_knob');
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

  // expiry - computed: true, optional: false, required: false
  public get expiry() {
    return this.getStringAttribute('expiry');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class EdgenodeDebugKnobList extends cdktf.ComplexList {

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
  public get(index: number): EdgenodeDebugKnobOutputReference {
    return new EdgenodeDebugKnobOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeBaseImage {
  /**
  * activation flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#activate Edgenode#activate}
  */
  readonly activate: boolean | cdktf.IResolvable;
  /**
  * image name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#image_name Edgenode#image_name}
  */
  readonly imageName: string;
  /**
  * immutable Volume for this base image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#imvol_id Edgenode#imvol_id}
  */
  readonly imvolId?: string;
  /**
  * system generated unique id for an image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#uuid Edgenode#uuid}
  */
  readonly uuid?: string;
  /**
  * image version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#version Edgenode#version}
  */
  readonly version: string;
}

export function edgenodeBaseImageToTerraform(struct?: EdgenodeBaseImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activate: cdktf.booleanToTerraform(struct!.activate),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    imvol_id: cdktf.stringToTerraform(struct!.imvolId),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function edgenodeBaseImageToHclTerraform(struct?: EdgenodeBaseImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activate: {
      value: cdktf.booleanToHclTerraform(struct!.activate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imvol_id: {
      value: cdktf.stringToHclTerraform(struct!.imvolId),
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeBaseImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeBaseImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activate !== undefined) {
      hasAnyValues = true;
      internalValueResult.activate = this._activate;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imvolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imvolId = this._imvolId;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeBaseImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activate = undefined;
      this._imageName = undefined;
      this._imvolId = undefined;
      this._uuid = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activate = value.activate;
      this._imageName = value.imageName;
      this._imvolId = value.imvolId;
      this._uuid = value.uuid;
      this._version = value.version;
    }
  }

  // activate - computed: false, optional: false, required: true
  private _activate?: boolean | cdktf.IResolvable; 
  public get activate() {
    return this.getBooleanAttribute('activate');
  }
  public set activate(value: boolean | cdktf.IResolvable) {
    this._activate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activateInput() {
    return this._activate;
  }

  // image_name - computed: false, optional: false, required: true
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // imvol_id - computed: false, optional: true, required: false
  private _imvolId?: string; 
  public get imvolId() {
    return this.getStringAttribute('imvol_id');
  }
  public set imvolId(value: string) {
    this._imvolId = value;
  }
  public resetImvolId() {
    this._imvolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imvolIdInput() {
    return this._imvolId;
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class EdgenodeBaseImageList extends cdktf.ComplexList {
  public internalValue? : EdgenodeBaseImage[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeBaseImageOutputReference {
    return new EdgenodeBaseImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeConfigItem {
  /**
  * boolean value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#bool_value Edgenode#bool_value}
  */
  readonly boolValue?: boolean | cdktf.IResolvable;
  /**
  * float value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#float_value Edgenode#float_value}
  */
  readonly floatValue?: number;
  /**
  * key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#key Edgenode#key}
  */
  readonly key?: string;
  /**
  * string value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#string_value Edgenode#string_value}
  */
  readonly stringValue?: string;
  /**
  * uint32 value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#uint32_value Edgenode#uint32_value}
  */
  readonly uint32Value?: number;
  /**
  * uint64 value in string format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#uint64_value Edgenode#uint64_value}
  */
  readonly uint64Value?: string;
  /**
  * value type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#value_type Edgenode#value_type}
  */
  readonly valueType?: string;
}

export function edgenodeConfigItemToTerraform(struct?: EdgenodeConfigItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bool_value: cdktf.booleanToTerraform(struct!.boolValue),
    float_value: cdktf.numberToTerraform(struct!.floatValue),
    key: cdktf.stringToTerraform(struct!.key),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    uint32_value: cdktf.numberToTerraform(struct!.uint32Value),
    uint64_value: cdktf.stringToTerraform(struct!.uint64Value),
    value_type: cdktf.stringToTerraform(struct!.valueType),
  }
}


export function edgenodeConfigItemToHclTerraform(struct?: EdgenodeConfigItem | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bool_value: {
      value: cdktf.booleanToHclTerraform(struct!.boolValue),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    float_value: {
      value: cdktf.numberToHclTerraform(struct!.floatValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uint32_value: {
      value: cdktf.numberToHclTerraform(struct!.uint32Value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uint64_value: {
      value: cdktf.stringToHclTerraform(struct!.uint64Value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeConfigItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeConfigItem | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boolValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.boolValue = this._boolValue;
    }
    if (this._floatValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatValue = this._floatValue;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    if (this._uint32Value !== undefined) {
      hasAnyValues = true;
      internalValueResult.uint32Value = this._uint32Value;
    }
    if (this._uint64Value !== undefined) {
      hasAnyValues = true;
      internalValueResult.uint64Value = this._uint64Value;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeConfigItem | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._boolValue = undefined;
      this._floatValue = undefined;
      this._key = undefined;
      this._stringValue = undefined;
      this._uint32Value = undefined;
      this._uint64Value = undefined;
      this._valueType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._boolValue = value.boolValue;
      this._floatValue = value.floatValue;
      this._key = value.key;
      this._stringValue = value.stringValue;
      this._uint32Value = value.uint32Value;
      this._uint64Value = value.uint64Value;
      this._valueType = value.valueType;
    }
  }

  // bool_value - computed: false, optional: true, required: false
  private _boolValue?: boolean | cdktf.IResolvable; 
  public get boolValue() {
    return this.getBooleanAttribute('bool_value');
  }
  public set boolValue(value: boolean | cdktf.IResolvable) {
    this._boolValue = value;
  }
  public resetBoolValue() {
    this._boolValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boolValueInput() {
    return this._boolValue;
  }

  // float_value - computed: false, optional: true, required: false
  private _floatValue?: number; 
  public get floatValue() {
    return this.getNumberAttribute('float_value');
  }
  public set floatValue(value: number) {
    this._floatValue = value;
  }
  public resetFloatValue() {
    this._floatValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatValueInput() {
    return this._floatValue;
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

  // string_value - computed: false, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }

  // uint32_value - computed: false, optional: true, required: false
  private _uint32Value?: number; 
  public get uint32Value() {
    return this.getNumberAttribute('uint32_value');
  }
  public set uint32Value(value: number) {
    this._uint32Value = value;
  }
  public resetUint32Value() {
    this._uint32Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uint32ValueInput() {
    return this._uint32Value;
  }

  // uint64_value - computed: false, optional: true, required: false
  private _uint64Value?: string; 
  public get uint64Value() {
    return this.getStringAttribute('uint64_value');
  }
  public set uint64Value(value: string) {
    this._uint64Value = value;
  }
  public resetUint64Value() {
    this._uint64Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uint64ValueInput() {
    return this._uint64Value;
  }

  // value_type - computed: false, optional: true, required: false
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  public resetValueType() {
    this._valueType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }
}

export class EdgenodeConfigItemList extends cdktf.ComplexList {
  public internalValue? : EdgenodeConfigItem[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeConfigItemOutputReference {
    return new EdgenodeConfigItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeDefaultNetInstLispSp {
}

export function edgenodeDefaultNetInstLispSpToTerraform(struct?: EdgenodeDefaultNetInstLispSp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function edgenodeDefaultNetInstLispSpToHclTerraform(struct?: EdgenodeDefaultNetInstLispSp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EdgenodeDefaultNetInstLispSpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EdgenodeDefaultNetInstLispSp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeDefaultNetInstLispSp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // credential - computed: true, optional: false, required: false
  public get credential() {
    return this.getStringAttribute('credential');
  }

  // name_or_ip - computed: true, optional: false, required: false
  public get nameOrIp() {
    return this.getStringAttribute('name_or_ip');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class EdgenodeDefaultNetInstLispSpList extends cdktf.ComplexList {

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
  public get(index: number): EdgenodeDefaultNetInstLispSpOutputReference {
    return new EdgenodeDefaultNetInstLispSpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeDefaultNetInstLisp {
}

export function edgenodeDefaultNetInstLispToTerraform(struct?: EdgenodeDefaultNetInstLisp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function edgenodeDefaultNetInstLispToHclTerraform(struct?: EdgenodeDefaultNetInstLisp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EdgenodeDefaultNetInstLispOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EdgenodeDefaultNetInstLisp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeDefaultNetInstLisp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allocate - computed: true, optional: false, required: false
  public get allocate() {
    return this.getBooleanAttribute('allocate');
  }

  // allocationprefix - computed: true, optional: false, required: false
  public get allocationprefix() {
    return this.getStringAttribute('allocationprefix');
  }

  // allocationprefixlen - computed: true, optional: false, required: false
  public get allocationprefixlen() {
    return this.getNumberAttribute('allocationprefixlen');
  }

  // exportprivate - computed: true, optional: false, required: false
  public get exportprivate() {
    return this.getBooleanAttribute('exportprivate');
  }

  // lispiid - computed: true, optional: false, required: false
  public get lispiid() {
    return this.getNumberAttribute('lispiid');
  }

  // sp - computed: true, optional: false, required: false
  private _sp = new EdgenodeDefaultNetInstLispSpList(this, "sp", false);
  public get sp() {
    return this._sp;
  }
}

export class EdgenodeDefaultNetInstLispList extends cdktf.ComplexList {

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
  public get(index: number): EdgenodeDefaultNetInstLispOutputReference {
    return new EdgenodeDefaultNetInstLispOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeDefaultNetInstRevision {
}

export function edgenodeDefaultNetInstRevisionToTerraform(struct?: EdgenodeDefaultNetInstRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function edgenodeDefaultNetInstRevisionToHclTerraform(struct?: EdgenodeDefaultNetInstRevision): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EdgenodeDefaultNetInstRevisionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EdgenodeDefaultNetInstRevision | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeDefaultNetInstRevision | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class EdgenodeDefaultNetInstRevisionList extends cdktf.ComplexList {

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
  public get(index: number): EdgenodeDefaultNetInstRevisionOutputReference {
    return new EdgenodeDefaultNetInstRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeDefaultNetInstDnsListStruct {
  /**
  * Addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#addrs Edgenode#addrs}
  */
  readonly addrs?: string[];
  /**
  * Host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#hostname Edgenode#hostname}
  */
  readonly hostname?: string;
}

export function edgenodeDefaultNetInstDnsListStructToTerraform(struct?: EdgenodeDefaultNetInstDnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addrs),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function edgenodeDefaultNetInstDnsListStructToHclTerraform(struct?: EdgenodeDefaultNetInstDnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeDefaultNetInstDnsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeDefaultNetInstDnsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrs = this._addrs;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeDefaultNetInstDnsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrs = undefined;
      this._hostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrs = value.addrs;
      this._hostname = value.hostname;
    }
  }

  // addrs - computed: false, optional: true, required: false
  private _addrs?: string[]; 
  public get addrs() {
    return this.getListAttribute('addrs');
  }
  public set addrs(value: string[]) {
    this._addrs = value;
  }
  public resetAddrs() {
    this._addrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrsInput() {
    return this._addrs;
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
}

export class EdgenodeDefaultNetInstDnsListStructList extends cdktf.ComplexList {
  public internalValue? : EdgenodeDefaultNetInstDnsListStruct[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeDefaultNetInstDnsListStructOutputReference {
    return new EdgenodeDefaultNetInstDnsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeDefaultNetInstEdgeNodeCluster {
  /**
  * Id of the designated Edge Node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#designated_node_id Edgenode#designated_node_id}
  */
  readonly designatedNodeId?: string;
  /**
  * Id of the Edge Node Cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#id Edgenode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function edgenodeDefaultNetInstEdgeNodeClusterToTerraform(struct?: EdgenodeDefaultNetInstEdgeNodeCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    designated_node_id: cdktf.stringToTerraform(struct!.designatedNodeId),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function edgenodeDefaultNetInstEdgeNodeClusterToHclTerraform(struct?: EdgenodeDefaultNetInstEdgeNodeCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    designated_node_id: {
      value: cdktf.stringToHclTerraform(struct!.designatedNodeId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeDefaultNetInstEdgeNodeClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeDefaultNetInstEdgeNodeCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._designatedNodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.designatedNodeId = this._designatedNodeId;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeDefaultNetInstEdgeNodeCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._designatedNodeId = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._designatedNodeId = value.designatedNodeId;
      this._id = value.id;
    }
  }

  // designated_node_id - computed: false, optional: true, required: false
  private _designatedNodeId?: string; 
  public get designatedNodeId() {
    return this.getStringAttribute('designated_node_id');
  }
  public set designatedNodeId(value: string) {
    this._designatedNodeId = value;
  }
  public resetDesignatedNodeId() {
    this._designatedNodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get designatedNodeIdInput() {
    return this._designatedNodeId;
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

export class EdgenodeDefaultNetInstEdgeNodeClusterList extends cdktf.ComplexList {
  public internalValue? : EdgenodeDefaultNetInstEdgeNodeCluster[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeDefaultNetInstEdgeNodeClusterOutputReference {
    return new EdgenodeDefaultNetInstEdgeNodeClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeDefaultNetInstIpDhcpRange {
  /**
  * ending IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#end Edgenode#end}
  */
  readonly end?: string;
  /**
  * starting IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#start Edgenode#start}
  */
  readonly start?: string;
}

export function edgenodeDefaultNetInstIpDhcpRangeToTerraform(struct?: EdgenodeDefaultNetInstIpDhcpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function edgenodeDefaultNetInstIpDhcpRangeToHclTerraform(struct?: EdgenodeDefaultNetInstIpDhcpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeDefaultNetInstIpDhcpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeDefaultNetInstIpDhcpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeDefaultNetInstIpDhcpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class EdgenodeDefaultNetInstIpDhcpRangeList extends cdktf.ComplexList {
  public internalValue? : EdgenodeDefaultNetInstIpDhcpRange[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeDefaultNetInstIpDhcpRangeOutputReference {
    return new EdgenodeDefaultNetInstIpDhcpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeDefaultNetInstIp {
  /**
  * IP Addresses of DNS servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#dns Edgenode#dns}
  */
  readonly dns?: string[];
  /**
  * Network domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#domain Edgenode#domain}
  */
  readonly domain?: string;
  /**
  * IP Address of Network Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#gateway Edgenode#gateway}
  */
  readonly gateway?: string;
  /**
  * Subnet Mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#mask Edgenode#mask}
  */
  readonly mask?: string;
  /**
  * IP Address of NTP Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#ntp Edgenode#ntp}
  */
  readonly ntp?: string;
  /**
  * Subnet address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#subnet Edgenode#subnet}
  */
  readonly subnet?: string;
  /**
  * dhcp_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#dhcp_range Edgenode#dhcp_range}
  */
  readonly dhcpRange?: EdgenodeDefaultNetInstIpDhcpRange[] | cdktf.IResolvable;
}

export function edgenodeDefaultNetInstIpToTerraform(struct?: EdgenodeDefaultNetInstIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dns),
    domain: cdktf.stringToTerraform(struct!.domain),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    mask: cdktf.stringToTerraform(struct!.mask),
    ntp: cdktf.stringToTerraform(struct!.ntp),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    dhcp_range: cdktf.listMapper(edgenodeDefaultNetInstIpDhcpRangeToTerraform, true)(struct!.dhcpRange),
  }
}


export function edgenodeDefaultNetInstIpToHclTerraform(struct?: EdgenodeDefaultNetInstIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
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
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp: {
      value: cdktf.stringToHclTerraform(struct!.ntp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_range: {
      value: cdktf.listMapperHcl(edgenodeDefaultNetInstIpDhcpRangeToHclTerraform, true)(struct!.dhcpRange),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeDefaultNetInstIpDhcpRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeDefaultNetInstIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeDefaultNetInstIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ntp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntp = this._ntp;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._dhcpRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRange = this._dhcpRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeDefaultNetInstIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns = undefined;
      this._domain = undefined;
      this._gateway = undefined;
      this._mask = undefined;
      this._ntp = undefined;
      this._subnet = undefined;
      this._dhcpRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns = value.dns;
      this._domain = value.domain;
      this._gateway = value.gateway;
      this._mask = value.mask;
      this._ntp = value.ntp;
      this._subnet = value.subnet;
      this._dhcpRange.internalValue = value.dhcpRange;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string[]; 
  public get dns() {
    return this.getListAttribute('dns');
  }
  public set dns(value: string[]) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
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

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ntp - computed: false, optional: true, required: false
  private _ntp?: string; 
  public get ntp() {
    return this.getStringAttribute('ntp');
  }
  public set ntp(value: string) {
    this._ntp = value;
  }
  public resetNtp() {
    this._ntp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpInput() {
    return this._ntp;
  }

  // subnet - computed: true, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // dhcp_range - computed: false, optional: true, required: false
  private _dhcpRange = new EdgenodeDefaultNetInstIpDhcpRangeList(this, "dhcp_range", false);
  public get dhcpRange() {
    return this._dhcpRange;
  }
  public putDhcpRange(value: EdgenodeDefaultNetInstIpDhcpRange[] | cdktf.IResolvable) {
    this._dhcpRange.internalValue = value;
  }
  public resetDhcpRange() {
    this._dhcpRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRangeInput() {
    return this._dhcpRange.internalValue;
  }
}

export class EdgenodeDefaultNetInstIpList extends cdktf.ComplexList {
  public internalValue? : EdgenodeDefaultNetInstIp[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeDefaultNetInstIpOutputReference {
    return new EdgenodeDefaultNetInstIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeDefaultNetInstOpaqueLispSp {
  /**
  * Service credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#credential Edgenode#credential}
  */
  readonly credential?: string;
  /**
  * Service name/ service name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#name_or_ip Edgenode#name_or_ip}
  */
  readonly nameOrIp?: string;
  /**
  * Service Point Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#type Edgenode#type}
  */
  readonly type?: string;
}

export function edgenodeDefaultNetInstOpaqueLispSpToTerraform(struct?: EdgenodeDefaultNetInstOpaqueLispSp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential: cdktf.stringToTerraform(struct!.credential),
    name_or_ip: cdktf.stringToTerraform(struct!.nameOrIp),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function edgenodeDefaultNetInstOpaqueLispSpToHclTerraform(struct?: EdgenodeDefaultNetInstOpaqueLispSp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential: {
      value: cdktf.stringToHclTerraform(struct!.credential),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_or_ip: {
      value: cdktf.stringToHclTerraform(struct!.nameOrIp),
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

export class EdgenodeDefaultNetInstOpaqueLispSpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeDefaultNetInstOpaqueLispSp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credential !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential;
    }
    if (this._nameOrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameOrIp = this._nameOrIp;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeDefaultNetInstOpaqueLispSp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credential = undefined;
      this._nameOrIp = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credential = value.credential;
      this._nameOrIp = value.nameOrIp;
      this._type = value.type;
    }
  }

  // credential - computed: false, optional: true, required: false
  private _credential?: string; 
  public get credential() {
    return this.getStringAttribute('credential');
  }
  public set credential(value: string) {
    this._credential = value;
  }
  public resetCredential() {
    this._credential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential;
  }

  // name_or_ip - computed: false, optional: true, required: false
  private _nameOrIp?: string; 
  public get nameOrIp() {
    return this.getStringAttribute('name_or_ip');
  }
  public set nameOrIp(value: string) {
    this._nameOrIp = value;
  }
  public resetNameOrIp() {
    this._nameOrIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameOrIpInput() {
    return this._nameOrIp;
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

export class EdgenodeDefaultNetInstOpaqueLispSpList extends cdktf.ComplexList {
  public internalValue? : EdgenodeDefaultNetInstOpaqueLispSp[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeDefaultNetInstOpaqueLispSpOutputReference {
    return new EdgenodeDefaultNetInstOpaqueLispSpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeDefaultNetInstOpaqueLisp {
  /**
  * Allocate flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#allocate Edgenode#allocate}
  */
  readonly allocate?: boolean | cdktf.IResolvable;
  /**
  * Allocation Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#allocationprefix Edgenode#allocationprefix}
  */
  readonly allocationprefix?: string;
  /**
  * Allocation Prefix Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#allocationprefixlen Edgenode#allocationprefixlen}
  */
  readonly allocationprefixlen?: number;
  /**
  * Export Private flag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#exportprivate Edgenode#exportprivate}
  */
  readonly exportprivate?: boolean | cdktf.IResolvable;
  /**
  * lisp id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#lispiid Edgenode#lispiid}
  */
  readonly lispiid?: number;
  /**
  * sp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#sp Edgenode#sp}
  */
  readonly sp?: EdgenodeDefaultNetInstOpaqueLispSp[] | cdktf.IResolvable;
}

export function edgenodeDefaultNetInstOpaqueLispToTerraform(struct?: EdgenodeDefaultNetInstOpaqueLisp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allocate: cdktf.booleanToTerraform(struct!.allocate),
    allocationprefix: cdktf.stringToTerraform(struct!.allocationprefix),
    allocationprefixlen: cdktf.numberToTerraform(struct!.allocationprefixlen),
    exportprivate: cdktf.booleanToTerraform(struct!.exportprivate),
    lispiid: cdktf.numberToTerraform(struct!.lispiid),
    sp: cdktf.listMapper(edgenodeDefaultNetInstOpaqueLispSpToTerraform, true)(struct!.sp),
  }
}


export function edgenodeDefaultNetInstOpaqueLispToHclTerraform(struct?: EdgenodeDefaultNetInstOpaqueLisp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allocate: {
      value: cdktf.booleanToHclTerraform(struct!.allocate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allocationprefix: {
      value: cdktf.stringToHclTerraform(struct!.allocationprefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allocationprefixlen: {
      value: cdktf.numberToHclTerraform(struct!.allocationprefixlen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exportprivate: {
      value: cdktf.booleanToHclTerraform(struct!.exportprivate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lispiid: {
      value: cdktf.numberToHclTerraform(struct!.lispiid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sp: {
      value: cdktf.listMapperHcl(edgenodeDefaultNetInstOpaqueLispSpToHclTerraform, true)(struct!.sp),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeDefaultNetInstOpaqueLispSpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeDefaultNetInstOpaqueLispOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeDefaultNetInstOpaqueLisp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocate !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocate = this._allocate;
    }
    if (this._allocationprefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationprefix = this._allocationprefix;
    }
    if (this._allocationprefixlen !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocationprefixlen = this._allocationprefixlen;
    }
    if (this._exportprivate !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportprivate = this._exportprivate;
    }
    if (this._lispiid !== undefined) {
      hasAnyValues = true;
      internalValueResult.lispiid = this._lispiid;
    }
    if (this._sp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sp = this._sp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeDefaultNetInstOpaqueLisp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocate = undefined;
      this._allocationprefix = undefined;
      this._allocationprefixlen = undefined;
      this._exportprivate = undefined;
      this._lispiid = undefined;
      this._sp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocate = value.allocate;
      this._allocationprefix = value.allocationprefix;
      this._allocationprefixlen = value.allocationprefixlen;
      this._exportprivate = value.exportprivate;
      this._lispiid = value.lispiid;
      this._sp.internalValue = value.sp;
    }
  }

  // allocate - computed: false, optional: true, required: false
  private _allocate?: boolean | cdktf.IResolvable; 
  public get allocate() {
    return this.getBooleanAttribute('allocate');
  }
  public set allocate(value: boolean | cdktf.IResolvable) {
    this._allocate = value;
  }
  public resetAllocate() {
    this._allocate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocateInput() {
    return this._allocate;
  }

  // allocationprefix - computed: false, optional: true, required: false
  private _allocationprefix?: string; 
  public get allocationprefix() {
    return this.getStringAttribute('allocationprefix');
  }
  public set allocationprefix(value: string) {
    this._allocationprefix = value;
  }
  public resetAllocationprefix() {
    this._allocationprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationprefixInput() {
    return this._allocationprefix;
  }

  // allocationprefixlen - computed: false, optional: true, required: false
  private _allocationprefixlen?: number; 
  public get allocationprefixlen() {
    return this.getNumberAttribute('allocationprefixlen');
  }
  public set allocationprefixlen(value: number) {
    this._allocationprefixlen = value;
  }
  public resetAllocationprefixlen() {
    this._allocationprefixlen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocationprefixlenInput() {
    return this._allocationprefixlen;
  }

  // exportprivate - computed: false, optional: true, required: false
  private _exportprivate?: boolean | cdktf.IResolvable; 
  public get exportprivate() {
    return this.getBooleanAttribute('exportprivate');
  }
  public set exportprivate(value: boolean | cdktf.IResolvable) {
    this._exportprivate = value;
  }
  public resetExportprivate() {
    this._exportprivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportprivateInput() {
    return this._exportprivate;
  }

  // lispiid - computed: false, optional: true, required: false
  private _lispiid?: number; 
  public get lispiid() {
    return this.getNumberAttribute('lispiid');
  }
  public set lispiid(value: number) {
    this._lispiid = value;
  }
  public resetLispiid() {
    this._lispiid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lispiidInput() {
    return this._lispiid;
  }

  // sp - computed: false, optional: true, required: false
  private _sp = new EdgenodeDefaultNetInstOpaqueLispSpList(this, "sp", false);
  public get sp() {
    return this._sp;
  }
  public putSp(value: EdgenodeDefaultNetInstOpaqueLispSp[] | cdktf.IResolvable) {
    this._sp.internalValue = value;
  }
  public resetSp() {
    this._sp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spInput() {
    return this._sp.internalValue;
  }
}

export class EdgenodeDefaultNetInstOpaqueLispList extends cdktf.ComplexList {
  public internalValue? : EdgenodeDefaultNetInstOpaqueLisp[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeDefaultNetInstOpaqueLispOutputReference {
    return new EdgenodeDefaultNetInstOpaqueLispOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeDefaultNetInstOpaque {
  /**
  * base64 encoded string of opaque config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#oconfig Edgenode#oconfig}
  */
  readonly oconfig?: string;
  /**
  * type of Opaque config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#type Edgenode#type}
  */
  readonly type?: string;
  /**
  * lisp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#lisp Edgenode#lisp}
  */
  readonly lisp?: EdgenodeDefaultNetInstOpaqueLisp[] | cdktf.IResolvable;
}

export function edgenodeDefaultNetInstOpaqueToTerraform(struct?: EdgenodeDefaultNetInstOpaque | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oconfig: cdktf.stringToTerraform(struct!.oconfig),
    type: cdktf.stringToTerraform(struct!.type),
    lisp: cdktf.listMapper(edgenodeDefaultNetInstOpaqueLispToTerraform, true)(struct!.lisp),
  }
}


export function edgenodeDefaultNetInstOpaqueToHclTerraform(struct?: EdgenodeDefaultNetInstOpaque | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oconfig: {
      value: cdktf.stringToHclTerraform(struct!.oconfig),
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
    lisp: {
      value: cdktf.listMapperHcl(edgenodeDefaultNetInstOpaqueLispToHclTerraform, true)(struct!.lisp),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeDefaultNetInstOpaqueLispList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeDefaultNetInstOpaqueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeDefaultNetInstOpaque | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.oconfig = this._oconfig;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._lisp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lisp = this._lisp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeDefaultNetInstOpaque | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._oconfig = undefined;
      this._type = undefined;
      this._lisp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._oconfig = value.oconfig;
      this._type = value.type;
      this._lisp.internalValue = value.lisp;
    }
  }

  // oconfig - computed: false, optional: true, required: false
  private _oconfig?: string; 
  public get oconfig() {
    return this.getStringAttribute('oconfig');
  }
  public set oconfig(value: string) {
    this._oconfig = value;
  }
  public resetOconfig() {
    this._oconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oconfigInput() {
    return this._oconfig;
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

  // lisp - computed: false, optional: true, required: false
  private _lisp = new EdgenodeDefaultNetInstOpaqueLispList(this, "lisp", false);
  public get lisp() {
    return this._lisp;
  }
  public putLisp(value: EdgenodeDefaultNetInstOpaqueLisp[] | cdktf.IResolvable) {
    this._lisp.internalValue = value;
  }
  public resetLisp() {
    this._lisp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lispInput() {
    return this._lisp.internalValue;
  }
}

export class EdgenodeDefaultNetInstOpaqueList extends cdktf.ComplexList {
  public internalValue? : EdgenodeDefaultNetInstOpaque[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeDefaultNetInstOpaqueOutputReference {
    return new EdgenodeDefaultNetInstOpaqueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint {
  /**
  * IP address or FQDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#host Edgenode#host}
  */
  readonly host?: string;
  /**
  * TCP port required for CONNECTIVITY_PROBE_METHOD_TCP.
  * Leave empty for CONNECTIVITY_PROBE_METHOD_ICMP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#port Edgenode#port}
  */
  readonly port?: number;
}

export function edgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigProbeEndpointToTerraform(struct?: EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function edgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigProbeEndpointToHclTerraform(struct?: EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigProbeEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigProbeEndpointList extends cdktf.ComplexList {
  public internalValue? : EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigProbeEndpointOutputReference {
    return new EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigProbeEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfig {
  /**
  * Method to use to determine the connectivity status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#probe_method Edgenode#probe_method}
  */
  readonly probeMethod?: string;
  /**
  * probe_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#probe_endpoint Edgenode#probe_endpoint}
  */
  readonly probeEndpoint?: EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint[] | cdktf.IResolvable;
}

export function edgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigToTerraform(struct?: EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    probe_method: cdktf.stringToTerraform(struct!.probeMethod),
    probe_endpoint: cdktf.listMapper(edgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigProbeEndpointToTerraform, true)(struct!.probeEndpoint),
  }
}


export function edgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigToHclTerraform(struct?: EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    probe_method: {
      value: cdktf.stringToHclTerraform(struct!.probeMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probe_endpoint: {
      value: cdktf.listMapperHcl(edgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigProbeEndpointToHclTerraform, true)(struct!.probeEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigProbeEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._probeMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeMethod = this._probeMethod;
    }
    if (this._probeEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeEndpoint = this._probeEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._probeMethod = undefined;
      this._probeEndpoint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._probeMethod = value.probeMethod;
      this._probeEndpoint.internalValue = value.probeEndpoint;
    }
  }

  // probe_method - computed: false, optional: true, required: false
  private _probeMethod?: string; 
  public get probeMethod() {
    return this.getStringAttribute('probe_method');
  }
  public set probeMethod(value: string) {
    this._probeMethod = value;
  }
  public resetProbeMethod() {
    this._probeMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeMethodInput() {
    return this._probeMethod;
  }

  // probe_endpoint - computed: false, optional: true, required: false
  private _probeEndpoint = new EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigProbeEndpointList(this, "probe_endpoint", false);
  public get probeEndpoint() {
    return this._probeEndpoint;
  }
  public putProbeEndpoint(value: EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigProbeEndpoint[] | cdktf.IResolvable) {
    this._probeEndpoint.internalValue = value;
  }
  public resetProbeEndpoint() {
    this._probeEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeEndpointInput() {
    return this._probeEndpoint.internalValue;
  }
}

export class EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigList extends cdktf.ComplexList {
  public internalValue? : EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfig[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigOutputReference {
    return new EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeDefaultNetInstStaticRoutesProbeConfig {
  /**
  * Enable gateway ping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#enable_gateway_ping Edgenode#enable_gateway_ping}
  */
  readonly enableGatewayPing?: boolean | cdktf.IResolvable;
  /**
  * Ping max cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#ping_max_cost Edgenode#ping_max_cost}
  */
  readonly pingMaxCost?: number;
  /**
  * Prefer lower cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#prefer_lower_cost Edgenode#prefer_lower_cost}
  */
  readonly preferLowerCost?: boolean | cdktf.IResolvable;
  /**
  * Prefer stronger WWAN signal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#prefer_stronger_wwan_signal Edgenode#prefer_stronger_wwan_signal}
  */
  readonly preferStrongerWwanSignal?: boolean | cdktf.IResolvable;
  /**
  * custom_probe_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#custom_probe_config Edgenode#custom_probe_config}
  */
  readonly customProbeConfig?: EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfig[] | cdktf.IResolvable;
}

export function edgenodeDefaultNetInstStaticRoutesProbeConfigToTerraform(struct?: EdgenodeDefaultNetInstStaticRoutesProbeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_gateway_ping: cdktf.booleanToTerraform(struct!.enableGatewayPing),
    ping_max_cost: cdktf.numberToTerraform(struct!.pingMaxCost),
    prefer_lower_cost: cdktf.booleanToTerraform(struct!.preferLowerCost),
    prefer_stronger_wwan_signal: cdktf.booleanToTerraform(struct!.preferStrongerWwanSignal),
    custom_probe_config: cdktf.listMapper(edgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigToTerraform, true)(struct!.customProbeConfig),
  }
}


export function edgenodeDefaultNetInstStaticRoutesProbeConfigToHclTerraform(struct?: EdgenodeDefaultNetInstStaticRoutesProbeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_gateway_ping: {
      value: cdktf.booleanToHclTerraform(struct!.enableGatewayPing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ping_max_cost: {
      value: cdktf.numberToHclTerraform(struct!.pingMaxCost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefer_lower_cost: {
      value: cdktf.booleanToHclTerraform(struct!.preferLowerCost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefer_stronger_wwan_signal: {
      value: cdktf.booleanToHclTerraform(struct!.preferStrongerWwanSignal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_probe_config: {
      value: cdktf.listMapperHcl(edgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigToHclTerraform, true)(struct!.customProbeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeDefaultNetInstStaticRoutesProbeConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeDefaultNetInstStaticRoutesProbeConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableGatewayPing !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableGatewayPing = this._enableGatewayPing;
    }
    if (this._pingMaxCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingMaxCost = this._pingMaxCost;
    }
    if (this._preferLowerCost !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferLowerCost = this._preferLowerCost;
    }
    if (this._preferStrongerWwanSignal !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferStrongerWwanSignal = this._preferStrongerWwanSignal;
    }
    if (this._customProbeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProbeConfig = this._customProbeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeDefaultNetInstStaticRoutesProbeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableGatewayPing = undefined;
      this._pingMaxCost = undefined;
      this._preferLowerCost = undefined;
      this._preferStrongerWwanSignal = undefined;
      this._customProbeConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableGatewayPing = value.enableGatewayPing;
      this._pingMaxCost = value.pingMaxCost;
      this._preferLowerCost = value.preferLowerCost;
      this._preferStrongerWwanSignal = value.preferStrongerWwanSignal;
      this._customProbeConfig.internalValue = value.customProbeConfig;
    }
  }

  // enable_gateway_ping - computed: false, optional: true, required: false
  private _enableGatewayPing?: boolean | cdktf.IResolvable; 
  public get enableGatewayPing() {
    return this.getBooleanAttribute('enable_gateway_ping');
  }
  public set enableGatewayPing(value: boolean | cdktf.IResolvable) {
    this._enableGatewayPing = value;
  }
  public resetEnableGatewayPing() {
    this._enableGatewayPing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGatewayPingInput() {
    return this._enableGatewayPing;
  }

  // ping_max_cost - computed: false, optional: true, required: false
  private _pingMaxCost?: number; 
  public get pingMaxCost() {
    return this.getNumberAttribute('ping_max_cost');
  }
  public set pingMaxCost(value: number) {
    this._pingMaxCost = value;
  }
  public resetPingMaxCost() {
    this._pingMaxCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingMaxCostInput() {
    return this._pingMaxCost;
  }

  // prefer_lower_cost - computed: false, optional: true, required: false
  private _preferLowerCost?: boolean | cdktf.IResolvable; 
  public get preferLowerCost() {
    return this.getBooleanAttribute('prefer_lower_cost');
  }
  public set preferLowerCost(value: boolean | cdktf.IResolvable) {
    this._preferLowerCost = value;
  }
  public resetPreferLowerCost() {
    this._preferLowerCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferLowerCostInput() {
    return this._preferLowerCost;
  }

  // prefer_stronger_wwan_signal - computed: false, optional: true, required: false
  private _preferStrongerWwanSignal?: boolean | cdktf.IResolvable; 
  public get preferStrongerWwanSignal() {
    return this.getBooleanAttribute('prefer_stronger_wwan_signal');
  }
  public set preferStrongerWwanSignal(value: boolean | cdktf.IResolvable) {
    this._preferStrongerWwanSignal = value;
  }
  public resetPreferStrongerWwanSignal() {
    this._preferStrongerWwanSignal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferStrongerWwanSignalInput() {
    return this._preferStrongerWwanSignal;
  }

  // custom_probe_config - computed: false, optional: true, required: false
  private _customProbeConfig = new EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfigList(this, "custom_probe_config", false);
  public get customProbeConfig() {
    return this._customProbeConfig;
  }
  public putCustomProbeConfig(value: EdgenodeDefaultNetInstStaticRoutesProbeConfigCustomProbeConfig[] | cdktf.IResolvable) {
    this._customProbeConfig.internalValue = value;
  }
  public resetCustomProbeConfig() {
    this._customProbeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProbeConfigInput() {
    return this._customProbeConfig.internalValue;
  }
}

export class EdgenodeDefaultNetInstStaticRoutesProbeConfigList extends cdktf.ComplexList {
  public internalValue? : EdgenodeDefaultNetInstStaticRoutesProbeConfig[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeDefaultNetInstStaticRoutesProbeConfigOutputReference {
    return new EdgenodeDefaultNetInstStaticRoutesProbeConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeDefaultNetInstStaticRoutes {
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#gateway Edgenode#gateway}
  */
  readonly gateway?: string;
  /**
  * Output Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#output_port Edgenode#output_port}
  */
  readonly outputPort?: string;
  /**
  * IP Prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#prefix Edgenode#prefix}
  */
  readonly prefix?: string;
  /**
  * probe_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#probe_config Edgenode#probe_config}
  */
  readonly probeConfig?: EdgenodeDefaultNetInstStaticRoutesProbeConfig[] | cdktf.IResolvable;
}

export function edgenodeDefaultNetInstStaticRoutesToTerraform(struct?: EdgenodeDefaultNetInstStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.stringToTerraform(struct!.gateway),
    output_port: cdktf.stringToTerraform(struct!.outputPort),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    probe_config: cdktf.listMapper(edgenodeDefaultNetInstStaticRoutesProbeConfigToTerraform, true)(struct!.probeConfig),
  }
}


export function edgenodeDefaultNetInstStaticRoutesToHclTerraform(struct?: EdgenodeDefaultNetInstStaticRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_port: {
      value: cdktf.stringToHclTerraform(struct!.outputPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probe_config: {
      value: cdktf.listMapperHcl(edgenodeDefaultNetInstStaticRoutesProbeConfigToHclTerraform, true)(struct!.probeConfig),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeDefaultNetInstStaticRoutesProbeConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeDefaultNetInstStaticRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeDefaultNetInstStaticRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._outputPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputPort = this._outputPort;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._probeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeConfig = this._probeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeDefaultNetInstStaticRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway = undefined;
      this._outputPort = undefined;
      this._prefix = undefined;
      this._probeConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway = value.gateway;
      this._outputPort = value.outputPort;
      this._prefix = value.prefix;
      this._probeConfig.internalValue = value.probeConfig;
    }
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

  // output_port - computed: false, optional: true, required: false
  private _outputPort?: string; 
  public get outputPort() {
    return this.getStringAttribute('output_port');
  }
  public set outputPort(value: string) {
    this._outputPort = value;
  }
  public resetOutputPort() {
    this._outputPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputPortInput() {
    return this._outputPort;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // probe_config - computed: false, optional: true, required: false
  private _probeConfig = new EdgenodeDefaultNetInstStaticRoutesProbeConfigList(this, "probe_config", false);
  public get probeConfig() {
    return this._probeConfig;
  }
  public putProbeConfig(value: EdgenodeDefaultNetInstStaticRoutesProbeConfig[] | cdktf.IResolvable) {
    this._probeConfig.internalValue = value;
  }
  public resetProbeConfig() {
    this._probeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeConfigInput() {
    return this._probeConfig.internalValue;
  }
}

export class EdgenodeDefaultNetInstStaticRoutesList extends cdktf.ComplexList {
  public internalValue? : EdgenodeDefaultNetInstStaticRoutes[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeDefaultNetInstStaticRoutesOutputReference {
    return new EdgenodeDefaultNetInstStaticRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeDefaultNetInst {
  /**
  * ID of the Cluster in which the network instance is configured
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#cluster_id Edgenode#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * Detailed description of the network instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#description Edgenode#description}
  */
  readonly description?: string;
  /**
  * Flag to indicate if this is the default network instance for the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#device_default Edgenode#device_default}
  */
  readonly deviceDefault?: boolean | cdktf.IResolvable;
  /**
  * ID of the device on which network instance is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#device_id Edgenode#device_id}
  */
  readonly deviceId?: string;
  /**
  * Deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#dhcp Edgenode#dhcp}
  */
  readonly dhcp?: boolean | cdktf.IResolvable;
  /**
  * Kind of Network Instance:
  * NETWORK_INSTANCE_KIND_UNSPECIFIED
  * NETWORK_INSTANCE_KIND_TRANSPARENT
  * NETWORK_INSTANCE_KIND_SWITCH
  * NETWORK_INSTANCE_KIND_LOCAL
  * NETWORK_INSTANCE_KIND_CLOUD
  * NETWORK_INSTANCE_KIND_MESH
  * NETWORK_INSTANCE_KIND_HONEYPOT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#kind Edgenode#kind}
  */
  readonly kind: string;
  /**
  * Maximum transmission unit (MTU) to set for the network instance and all application interfaces connected to it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#mtu Edgenode#mtu}
  */
  readonly mtu?: number;
  /**
  * User defined name of the network instance, unique across the enterprise. Once object is created, name can’t be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#name Edgenode#name}
  */
  readonly name: string;
  /**
  * id of the network policy to be attached to this network instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#network_policy_id Edgenode#network_policy_id}
  */
  readonly networkPolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#oconfig Edgenode#oconfig}
  */
  readonly oconfig?: string;
  /**
  * name of port mapping in the model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#port Edgenode#port}
  */
  readonly port?: string;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#port_tags Edgenode#port_tags}
  */
  readonly portTags?: { [key: string]: string };
  /**
  * id of the project in which network instance is created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#project_id Edgenode#project_id}
  */
  readonly projectId?: string;
  /**
  * Automatically propagate connected routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#propagate_connected_routes Edgenode#propagate_connected_routes}
  */
  readonly propagateConnectedRoutes?: boolean | cdktf.IResolvable;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#tags Edgenode#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * User defined title of the network instance. Title can be changed at any time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#title Edgenode#title}
  */
  readonly title: string;
  /**
  * Type of DHCP for this Network Instance:
  * NETWORK_INSTANCE_DHCP_TYPE_V4
  * NETWORK_INSTANCE_DHCP_TYPE_V6
  * NETWORK_INSTANCE_DHCP_TYPE_CRYPTOEID
  * NETWORK_INSTANCE_DHCP_TYPE_CRYPTOV4
  * NETWORK_INSTANCE_DHCP_TYPE_CRYPTOV6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#type Edgenode#type}
  */
  readonly type?: string;
  /**
  * dns_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#dns_list Edgenode#dns_list}
  */
  readonly dnsList?: EdgenodeDefaultNetInstDnsListStruct[] | cdktf.IResolvable;
  /**
  * edge_node_cluster block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#edge_node_cluster Edgenode#edge_node_cluster}
  */
  readonly edgeNodeCluster?: EdgenodeDefaultNetInstEdgeNodeCluster[] | cdktf.IResolvable;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#ip Edgenode#ip}
  */
  readonly ip?: EdgenodeDefaultNetInstIp[] | cdktf.IResolvable;
  /**
  * opaque block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#opaque Edgenode#opaque}
  */
  readonly opaque?: EdgenodeDefaultNetInstOpaque[] | cdktf.IResolvable;
  /**
  * static_routes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#static_routes Edgenode#static_routes}
  */
  readonly staticRoutes?: EdgenodeDefaultNetInstStaticRoutes[] | cdktf.IResolvable;
}

export function edgenodeDefaultNetInstToTerraform(struct?: EdgenodeDefaultNetInst | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    description: cdktf.stringToTerraform(struct!.description),
    device_default: cdktf.booleanToTerraform(struct!.deviceDefault),
    device_id: cdktf.stringToTerraform(struct!.deviceId),
    dhcp: cdktf.booleanToTerraform(struct!.dhcp),
    kind: cdktf.stringToTerraform(struct!.kind),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
    network_policy_id: cdktf.stringToTerraform(struct!.networkPolicyId),
    oconfig: cdktf.stringToTerraform(struct!.oconfig),
    port: cdktf.stringToTerraform(struct!.port),
    port_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.portTags),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    propagate_connected_routes: cdktf.booleanToTerraform(struct!.propagateConnectedRoutes),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    title: cdktf.stringToTerraform(struct!.title),
    type: cdktf.stringToTerraform(struct!.type),
    dns_list: cdktf.listMapper(edgenodeDefaultNetInstDnsListStructToTerraform, true)(struct!.dnsList),
    edge_node_cluster: cdktf.listMapper(edgenodeDefaultNetInstEdgeNodeClusterToTerraform, true)(struct!.edgeNodeCluster),
    ip: cdktf.listMapper(edgenodeDefaultNetInstIpToTerraform, true)(struct!.ip),
    opaque: cdktf.listMapper(edgenodeDefaultNetInstOpaqueToTerraform, true)(struct!.opaque),
    static_routes: cdktf.listMapper(edgenodeDefaultNetInstStaticRoutesToTerraform, true)(struct!.staticRoutes),
  }
}


export function edgenodeDefaultNetInstToHclTerraform(struct?: EdgenodeDefaultNetInst | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_default: {
      value: cdktf.booleanToHclTerraform(struct!.deviceDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device_id: {
      value: cdktf.stringToHclTerraform(struct!.deviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    network_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.networkPolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oconfig: {
      value: cdktf.stringToHclTerraform(struct!.oconfig),
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
    port_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.portTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    propagate_connected_routes: {
      value: cdktf.booleanToHclTerraform(struct!.propagateConnectedRoutes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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
    dns_list: {
      value: cdktf.listMapperHcl(edgenodeDefaultNetInstDnsListStructToHclTerraform, true)(struct!.dnsList),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeDefaultNetInstDnsListStructList",
    },
    edge_node_cluster: {
      value: cdktf.listMapperHcl(edgenodeDefaultNetInstEdgeNodeClusterToHclTerraform, true)(struct!.edgeNodeCluster),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeDefaultNetInstEdgeNodeClusterList",
    },
    ip: {
      value: cdktf.listMapperHcl(edgenodeDefaultNetInstIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeDefaultNetInstIpList",
    },
    opaque: {
      value: cdktf.listMapperHcl(edgenodeDefaultNetInstOpaqueToHclTerraform, true)(struct!.opaque),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeDefaultNetInstOpaqueList",
    },
    static_routes: {
      value: cdktf.listMapperHcl(edgenodeDefaultNetInstStaticRoutesToHclTerraform, true)(struct!.staticRoutes),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeDefaultNetInstStaticRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeDefaultNetInstOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeDefaultNetInst | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._deviceDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDefault = this._deviceDefault;
    }
    if (this._deviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceId = this._deviceId;
    }
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkPolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPolicyId = this._networkPolicyId;
    }
    if (this._oconfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.oconfig = this._oconfig;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.portTags = this._portTags;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._propagateConnectedRoutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.propagateConnectedRoutes = this._propagateConnectedRoutes;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._dnsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsList = this._dnsList?.internalValue;
    }
    if (this._edgeNodeCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.edgeNodeCluster = this._edgeNodeCluster?.internalValue;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._opaque?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.opaque = this._opaque?.internalValue;
    }
    if (this._staticRoutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRoutes = this._staticRoutes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeDefaultNetInst | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterId = undefined;
      this._description = undefined;
      this._deviceDefault = undefined;
      this._deviceId = undefined;
      this._dhcp = undefined;
      this._kind = undefined;
      this._mtu = undefined;
      this._name = undefined;
      this._networkPolicyId = undefined;
      this._oconfig = undefined;
      this._port = undefined;
      this._portTags = undefined;
      this._projectId = undefined;
      this._propagateConnectedRoutes = undefined;
      this._tags = undefined;
      this._title = undefined;
      this._type = undefined;
      this._dnsList.internalValue = undefined;
      this._edgeNodeCluster.internalValue = undefined;
      this._ip.internalValue = undefined;
      this._opaque.internalValue = undefined;
      this._staticRoutes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterId = value.clusterId;
      this._description = value.description;
      this._deviceDefault = value.deviceDefault;
      this._deviceId = value.deviceId;
      this._dhcp = value.dhcp;
      this._kind = value.kind;
      this._mtu = value.mtu;
      this._name = value.name;
      this._networkPolicyId = value.networkPolicyId;
      this._oconfig = value.oconfig;
      this._port = value.port;
      this._portTags = value.portTags;
      this._projectId = value.projectId;
      this._propagateConnectedRoutes = value.propagateConnectedRoutes;
      this._tags = value.tags;
      this._title = value.title;
      this._type = value.type;
      this._dnsList.internalValue = value.dnsList;
      this._edgeNodeCluster.internalValue = value.edgeNodeCluster;
      this._ip.internalValue = value.ip;
      this._opaque.internalValue = value.opaque;
      this._staticRoutes.internalValue = value.staticRoutes;
    }
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // device_default - computed: false, optional: true, required: false
  private _deviceDefault?: boolean | cdktf.IResolvable; 
  public get deviceDefault() {
    return this.getBooleanAttribute('device_default');
  }
  public set deviceDefault(value: boolean | cdktf.IResolvable) {
    this._deviceDefault = value;
  }
  public resetDeviceDefault() {
    this._deviceDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDefaultInput() {
    return this._deviceDefault;
  }

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: string; 
  public get deviceId() {
    return this.getStringAttribute('device_id');
  }
  public set deviceId(value: string) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: boolean | cdktf.IResolvable; 
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }
  public set dhcp(value: boolean | cdktf.IResolvable) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // lisp - computed: true, optional: false, required: false
  private _lisp = new EdgenodeDefaultNetInstLispList(this, "lisp", false);
  public get lisp() {
    return this._lisp;
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

  // network_policy_id - computed: false, optional: true, required: false
  private _networkPolicyId?: string; 
  public get networkPolicyId() {
    return this.getStringAttribute('network_policy_id');
  }
  public set networkPolicyId(value: string) {
    this._networkPolicyId = value;
  }
  public resetNetworkPolicyId() {
    this._networkPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyIdInput() {
    return this._networkPolicyId;
  }

  // oconfig - computed: false, optional: true, required: false
  private _oconfig?: string; 
  public get oconfig() {
    return this.getStringAttribute('oconfig');
  }
  public set oconfig(value: string) {
    this._oconfig = value;
  }
  public resetOconfig() {
    this._oconfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oconfigInput() {
    return this._oconfig;
  }

  // port - computed: false, optional: true, required: false
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

  // port_tags - computed: false, optional: true, required: false
  private _portTags?: { [key: string]: string }; 
  public get portTags() {
    return this.getStringMapAttribute('port_tags');
  }
  public set portTags(value: { [key: string]: string }) {
    this._portTags = value;
  }
  public resetPortTags() {
    this._portTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portTagsInput() {
    return this._portTags;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // propagate_connected_routes - computed: false, optional: true, required: false
  private _propagateConnectedRoutes?: boolean | cdktf.IResolvable; 
  public get propagateConnectedRoutes() {
    return this.getBooleanAttribute('propagate_connected_routes');
  }
  public set propagateConnectedRoutes(value: boolean | cdktf.IResolvable) {
    this._propagateConnectedRoutes = value;
  }
  public resetPropagateConnectedRoutes() {
    this._propagateConnectedRoutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propagateConnectedRoutesInput() {
    return this._propagateConnectedRoutes;
  }

  // revision - computed: true, optional: false, required: false
  private _revision = new EdgenodeDefaultNetInstRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
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

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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

  // dns_list - computed: false, optional: true, required: false
  private _dnsList = new EdgenodeDefaultNetInstDnsListStructList(this, "dns_list", false);
  public get dnsList() {
    return this._dnsList;
  }
  public putDnsList(value: EdgenodeDefaultNetInstDnsListStruct[] | cdktf.IResolvable) {
    this._dnsList.internalValue = value;
  }
  public resetDnsList() {
    this._dnsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsListInput() {
    return this._dnsList.internalValue;
  }

  // edge_node_cluster - computed: false, optional: true, required: false
  private _edgeNodeCluster = new EdgenodeDefaultNetInstEdgeNodeClusterList(this, "edge_node_cluster", false);
  public get edgeNodeCluster() {
    return this._edgeNodeCluster;
  }
  public putEdgeNodeCluster(value: EdgenodeDefaultNetInstEdgeNodeCluster[] | cdktf.IResolvable) {
    this._edgeNodeCluster.internalValue = value;
  }
  public resetEdgeNodeCluster() {
    this._edgeNodeCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeNodeClusterInput() {
    return this._edgeNodeCluster.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new EdgenodeDefaultNetInstIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
  public putIp(value: EdgenodeDefaultNetInstIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // opaque - computed: false, optional: true, required: false
  private _opaque = new EdgenodeDefaultNetInstOpaqueList(this, "opaque", false);
  public get opaque() {
    return this._opaque;
  }
  public putOpaque(value: EdgenodeDefaultNetInstOpaque[] | cdktf.IResolvable) {
    this._opaque.internalValue = value;
  }
  public resetOpaque() {
    this._opaque.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opaqueInput() {
    return this._opaque.internalValue;
  }

  // static_routes - computed: false, optional: true, required: false
  private _staticRoutes = new EdgenodeDefaultNetInstStaticRoutesList(this, "static_routes", false);
  public get staticRoutes() {
    return this._staticRoutes;
  }
  public putStaticRoutes(value: EdgenodeDefaultNetInstStaticRoutes[] | cdktf.IResolvable) {
    this._staticRoutes.internalValue = value;
  }
  public resetStaticRoutes() {
    this._staticRoutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes.internalValue;
  }
}

export class EdgenodeDefaultNetInstList extends cdktf.ComplexList {
  public internalValue? : EdgenodeDefaultNetInst[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeDefaultNetInstOutputReference {
    return new EdgenodeDefaultNetInstOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeDevLocation {
  /**
  * City
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#city Edgenode#city}
  */
  readonly city?: string;
  /**
  * Country code consisting of 2 capital letters as per ISO 3166-1 alpha2 standard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#country Edgenode#country}
  */
  readonly country?: string;
  /**
  * Free formatted location string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#freeloc Edgenode#freeloc}
  */
  readonly freeloc?: string;
  /**
  * Host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#hostname Edgenode#hostname}
  */
  readonly hostname?: string;
  /**
  * Deprecated field: comma, separated lat, long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#latlong Edgenode#latlong}
  */
  readonly latlong?: string;
  /**
  * Ordered pair of (latitude, longitude) separated by comma (,). Latitude is the horizontal component used for geographic positioning; it is the angle between 0° (the equator) and ±90° (north or south) at the poles measured in decimal degrees. It is the first value in an ordered pair. A negative number denotes a location south of the equator; a positive number is north. Longitude is the vertical component used for geographic positioning; it is the angle between 0° (the Prime Meridian) and ±180° (westward or eastward) measured in decimal degrees. It is the second number in an ordered pair. A negative number indicates a location west of Greenwich, England; a positive number east.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#loc Edgenode#loc}
  */
  readonly loc?: string;
  /**
  * The name of the recipient, firm, or company at this geographical location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#org Edgenode#org}
  */
  readonly org?: string;
  /**
  * Postal code (ZIP code for USA) of the geographical location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#postal Edgenode#postal}
  */
  readonly postal?: string;
  /**
  * Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#region Edgenode#region}
  */
  readonly region?: string;
  /**
  * Single IP address, either in IPv4 or in IPv6 format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#underlay_ip Edgenode#underlay_ip}
  */
  readonly underlayIp?: string;
}

export function edgenodeDevLocationToTerraform(struct?: EdgenodeDevLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    city: cdktf.stringToTerraform(struct!.city),
    country: cdktf.stringToTerraform(struct!.country),
    freeloc: cdktf.stringToTerraform(struct!.freeloc),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    latlong: cdktf.stringToTerraform(struct!.latlong),
    loc: cdktf.stringToTerraform(struct!.loc),
    org: cdktf.stringToTerraform(struct!.org),
    postal: cdktf.stringToTerraform(struct!.postal),
    region: cdktf.stringToTerraform(struct!.region),
    underlay_ip: cdktf.stringToTerraform(struct!.underlayIp),
  }
}


export function edgenodeDevLocationToHclTerraform(struct?: EdgenodeDevLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    city: {
      value: cdktf.stringToHclTerraform(struct!.city),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country: {
      value: cdktf.stringToHclTerraform(struct!.country),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    freeloc: {
      value: cdktf.stringToHclTerraform(struct!.freeloc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latlong: {
      value: cdktf.stringToHclTerraform(struct!.latlong),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loc: {
      value: cdktf.stringToHclTerraform(struct!.loc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org: {
      value: cdktf.stringToHclTerraform(struct!.org),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postal: {
      value: cdktf.stringToHclTerraform(struct!.postal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    underlay_ip: {
      value: cdktf.stringToHclTerraform(struct!.underlayIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeDevLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeDevLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._city !== undefined) {
      hasAnyValues = true;
      internalValueResult.city = this._city;
    }
    if (this._country !== undefined) {
      hasAnyValues = true;
      internalValueResult.country = this._country;
    }
    if (this._freeloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeloc = this._freeloc;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._latlong !== undefined) {
      hasAnyValues = true;
      internalValueResult.latlong = this._latlong;
    }
    if (this._loc !== undefined) {
      hasAnyValues = true;
      internalValueResult.loc = this._loc;
    }
    if (this._org !== undefined) {
      hasAnyValues = true;
      internalValueResult.org = this._org;
    }
    if (this._postal !== undefined) {
      hasAnyValues = true;
      internalValueResult.postal = this._postal;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._underlayIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.underlayIp = this._underlayIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeDevLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._city = undefined;
      this._country = undefined;
      this._freeloc = undefined;
      this._hostname = undefined;
      this._latlong = undefined;
      this._loc = undefined;
      this._org = undefined;
      this._postal = undefined;
      this._region = undefined;
      this._underlayIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._city = value.city;
      this._country = value.country;
      this._freeloc = value.freeloc;
      this._hostname = value.hostname;
      this._latlong = value.latlong;
      this._loc = value.loc;
      this._org = value.org;
      this._postal = value.postal;
      this._region = value.region;
      this._underlayIp = value.underlayIp;
    }
  }

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // freeloc - computed: false, optional: true, required: false
  private _freeloc?: string; 
  public get freeloc() {
    return this.getStringAttribute('freeloc');
  }
  public set freeloc(value: string) {
    this._freeloc = value;
  }
  public resetFreeloc() {
    this._freeloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freelocInput() {
    return this._freeloc;
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

  // latlong - computed: false, optional: true, required: false
  private _latlong?: string; 
  public get latlong() {
    return this.getStringAttribute('latlong');
  }
  public set latlong(value: string) {
    this._latlong = value;
  }
  public resetLatlong() {
    this._latlong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latlongInput() {
    return this._latlong;
  }

  // loc - computed: false, optional: true, required: false
  private _loc?: string; 
  public get loc() {
    return this.getStringAttribute('loc');
  }
  public set loc(value: string) {
    this._loc = value;
  }
  public resetLoc() {
    this._loc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locInput() {
    return this._loc;
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

  // postal - computed: false, optional: true, required: false
  private _postal?: string; 
  public get postal() {
    return this.getStringAttribute('postal');
  }
  public set postal(value: string) {
    this._postal = value;
  }
  public resetPostal() {
    this._postal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalInput() {
    return this._postal;
  }

  // region - computed: false, optional: true, required: false
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

  // underlay_ip - computed: false, optional: true, required: false
  private _underlayIp?: string; 
  public get underlayIp() {
    return this.getStringAttribute('underlay_ip');
  }
  public set underlayIp(value: string) {
    this._underlayIp = value;
  }
  public resetUnderlayIp() {
    this._underlayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get underlayIpInput() {
    return this._underlayIp;
  }
}

export class EdgenodeDevLocationList extends cdktf.ComplexList {
  public internalValue? : EdgenodeDevLocation[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeDevLocationOutputReference {
    return new EdgenodeDevLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeDlispLispMapServers {
  /**
  * lisp credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#credential Edgenode#credential}
  */
  readonly credential: string;
  /**
  * name/IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#name_or_ip Edgenode#name_or_ip}
  */
  readonly nameOrIp: string;
}

export function edgenodeDlispLispMapServersToTerraform(struct?: EdgenodeDlispLispMapServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    credential: cdktf.stringToTerraform(struct!.credential),
    name_or_ip: cdktf.stringToTerraform(struct!.nameOrIp),
  }
}


export function edgenodeDlispLispMapServersToHclTerraform(struct?: EdgenodeDlispLispMapServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    credential: {
      value: cdktf.stringToHclTerraform(struct!.credential),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_or_ip: {
      value: cdktf.stringToHclTerraform(struct!.nameOrIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeDlispLispMapServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeDlispLispMapServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._credential !== undefined) {
      hasAnyValues = true;
      internalValueResult.credential = this._credential;
    }
    if (this._nameOrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameOrIp = this._nameOrIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeDlispLispMapServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._credential = undefined;
      this._nameOrIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._credential = value.credential;
      this._nameOrIp = value.nameOrIp;
    }
  }

  // credential - computed: false, optional: false, required: true
  private _credential?: string; 
  public get credential() {
    return this.getStringAttribute('credential');
  }
  public set credential(value: string) {
    this._credential = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialInput() {
    return this._credential;
  }

  // name_or_ip - computed: false, optional: false, required: true
  private _nameOrIp?: string; 
  public get nameOrIp() {
    return this.getStringAttribute('name_or_ip');
  }
  public set nameOrIp(value: string) {
    this._nameOrIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameOrIpInput() {
    return this._nameOrIp;
  }
}

export class EdgenodeDlispLispMapServersList extends cdktf.ComplexList {
  public internalValue? : EdgenodeDlispLispMapServers[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeDlispLispMapServersOutputReference {
    return new EdgenodeDlispLispMapServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeDlispZedServers {
  /**
  * EID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#e_id Edgenode#e_id}
  */
  readonly eId: string[];
  /**
  * Hostname for dev zed server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#host_name Edgenode#host_name}
  */
  readonly hostName: string;
}

export function edgenodeDlispZedServersToTerraform(struct?: EdgenodeDlispZedServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    e_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.eId),
    host_name: cdktf.stringToTerraform(struct!.hostName),
  }
}


export function edgenodeDlispZedServersToHclTerraform(struct?: EdgenodeDlispZedServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    e_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.eId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    host_name: {
      value: cdktf.stringToHclTerraform(struct!.hostName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeDlispZedServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeDlispZedServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eId !== undefined) {
      hasAnyValues = true;
      internalValueResult.eId = this._eId;
    }
    if (this._hostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostName = this._hostName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeDlispZedServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eId = undefined;
      this._hostName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eId = value.eId;
      this._hostName = value.hostName;
    }
  }

  // e_id - computed: false, optional: false, required: true
  private _eId?: string[]; 
  public get eId() {
    return this.getListAttribute('e_id');
  }
  public set eId(value: string[]) {
    this._eId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eIdInput() {
    return this._eId;
  }

  // host_name - computed: false, optional: false, required: true
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }
}

export class EdgenodeDlispZedServersList extends cdktf.ComplexList {
  public internalValue? : EdgenodeDlispZedServers[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeDlispZedServersOutputReference {
    return new EdgenodeDlispZedServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeDlisp {
  /**
  * Client Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#client_addr Edgenode#client_addr}
  */
  readonly clientAddr: string;
  /**
  * EID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#e_id Edgenode#e_id}
  */
  readonly eId: string;
  /**
  * EID hash length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#e_id_hash_len Edgenode#e_id_hash_len}
  */
  readonly eIdHashLen: number;
  /**
  * EID allocation prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#eid_allocation_prefix Edgenode#eid_allocation_prefix}
  */
  readonly eidAllocationPrefix: string;
  /**
  * EID allocation prefix length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#eid_allocation_prefix_len Edgenode#eid_allocation_prefix_len}
  */
  readonly eidAllocationPrefixLen: number;
  /**
  * LISP instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#lisp_instance Edgenode#lisp_instance}
  */
  readonly lispInstance: number;
  /**
  * TEMP : flag to indicate which version of LISP data plane should be running on the device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#mode Edgenode#mode}
  */
  readonly mode: string;
  /**
  * lisp_map_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#lisp_map_servers Edgenode#lisp_map_servers}
  */
  readonly lispMapServers: EdgenodeDlispLispMapServers[] | cdktf.IResolvable;
  /**
  * zed_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#zed_servers Edgenode#zed_servers}
  */
  readonly zedServers: EdgenodeDlispZedServers[] | cdktf.IResolvable;
}

export function edgenodeDlispToTerraform(struct?: EdgenodeDlisp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_addr: cdktf.stringToTerraform(struct!.clientAddr),
    e_id: cdktf.stringToTerraform(struct!.eId),
    e_id_hash_len: cdktf.numberToTerraform(struct!.eIdHashLen),
    eid_allocation_prefix: cdktf.stringToTerraform(struct!.eidAllocationPrefix),
    eid_allocation_prefix_len: cdktf.numberToTerraform(struct!.eidAllocationPrefixLen),
    lisp_instance: cdktf.numberToTerraform(struct!.lispInstance),
    mode: cdktf.stringToTerraform(struct!.mode),
    lisp_map_servers: cdktf.listMapper(edgenodeDlispLispMapServersToTerraform, true)(struct!.lispMapServers),
    zed_servers: cdktf.listMapper(edgenodeDlispZedServersToTerraform, true)(struct!.zedServers),
  }
}


export function edgenodeDlispToHclTerraform(struct?: EdgenodeDlisp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_addr: {
      value: cdktf.stringToHclTerraform(struct!.clientAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e_id: {
      value: cdktf.stringToHclTerraform(struct!.eId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    e_id_hash_len: {
      value: cdktf.numberToHclTerraform(struct!.eIdHashLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eid_allocation_prefix: {
      value: cdktf.stringToHclTerraform(struct!.eidAllocationPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eid_allocation_prefix_len: {
      value: cdktf.numberToHclTerraform(struct!.eidAllocationPrefixLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lisp_instance: {
      value: cdktf.numberToHclTerraform(struct!.lispInstance),
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
    lisp_map_servers: {
      value: cdktf.listMapperHcl(edgenodeDlispLispMapServersToHclTerraform, true)(struct!.lispMapServers),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeDlispLispMapServersList",
    },
    zed_servers: {
      value: cdktf.listMapperHcl(edgenodeDlispZedServersToHclTerraform, true)(struct!.zedServers),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeDlispZedServersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeDlispOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeDlisp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAddr = this._clientAddr;
    }
    if (this._eId !== undefined) {
      hasAnyValues = true;
      internalValueResult.eId = this._eId;
    }
    if (this._eIdHashLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.eIdHashLen = this._eIdHashLen;
    }
    if (this._eidAllocationPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.eidAllocationPrefix = this._eidAllocationPrefix;
    }
    if (this._eidAllocationPrefixLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.eidAllocationPrefixLen = this._eidAllocationPrefixLen;
    }
    if (this._lispInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.lispInstance = this._lispInstance;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._lispMapServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lispMapServers = this._lispMapServers?.internalValue;
    }
    if (this._zedServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zedServers = this._zedServers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeDlisp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientAddr = undefined;
      this._eId = undefined;
      this._eIdHashLen = undefined;
      this._eidAllocationPrefix = undefined;
      this._eidAllocationPrefixLen = undefined;
      this._lispInstance = undefined;
      this._mode = undefined;
      this._lispMapServers.internalValue = undefined;
      this._zedServers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientAddr = value.clientAddr;
      this._eId = value.eId;
      this._eIdHashLen = value.eIdHashLen;
      this._eidAllocationPrefix = value.eidAllocationPrefix;
      this._eidAllocationPrefixLen = value.eidAllocationPrefixLen;
      this._lispInstance = value.lispInstance;
      this._mode = value.mode;
      this._lispMapServers.internalValue = value.lispMapServers;
      this._zedServers.internalValue = value.zedServers;
    }
  }

  // client_addr - computed: false, optional: false, required: true
  private _clientAddr?: string; 
  public get clientAddr() {
    return this.getStringAttribute('client_addr');
  }
  public set clientAddr(value: string) {
    this._clientAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAddrInput() {
    return this._clientAddr;
  }

  // e_id - computed: false, optional: false, required: true
  private _eId?: string; 
  public get eId() {
    return this.getStringAttribute('e_id');
  }
  public set eId(value: string) {
    this._eId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eIdInput() {
    return this._eId;
  }

  // e_id_hash_len - computed: false, optional: false, required: true
  private _eIdHashLen?: number; 
  public get eIdHashLen() {
    return this.getNumberAttribute('e_id_hash_len');
  }
  public set eIdHashLen(value: number) {
    this._eIdHashLen = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eIdHashLenInput() {
    return this._eIdHashLen;
  }

  // eid_allocation_prefix - computed: false, optional: false, required: true
  private _eidAllocationPrefix?: string; 
  public get eidAllocationPrefix() {
    return this.getStringAttribute('eid_allocation_prefix');
  }
  public set eidAllocationPrefix(value: string) {
    this._eidAllocationPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eidAllocationPrefixInput() {
    return this._eidAllocationPrefix;
  }

  // eid_allocation_prefix_len - computed: false, optional: false, required: true
  private _eidAllocationPrefixLen?: number; 
  public get eidAllocationPrefixLen() {
    return this.getNumberAttribute('eid_allocation_prefix_len');
  }
  public set eidAllocationPrefixLen(value: number) {
    this._eidAllocationPrefixLen = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eidAllocationPrefixLenInput() {
    return this._eidAllocationPrefixLen;
  }

  // lisp_instance - computed: false, optional: false, required: true
  private _lispInstance?: number; 
  public get lispInstance() {
    return this.getNumberAttribute('lisp_instance');
  }
  public set lispInstance(value: number) {
    this._lispInstance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lispInstanceInput() {
    return this._lispInstance;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // lisp_map_servers - computed: false, optional: false, required: true
  private _lispMapServers = new EdgenodeDlispLispMapServersList(this, "lisp_map_servers", false);
  public get lispMapServers() {
    return this._lispMapServers;
  }
  public putLispMapServers(value: EdgenodeDlispLispMapServers[] | cdktf.IResolvable) {
    this._lispMapServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lispMapServersInput() {
    return this._lispMapServers.internalValue;
  }

  // zed_servers - computed: false, optional: false, required: true
  private _zedServers = new EdgenodeDlispZedServersList(this, "zed_servers", false);
  public get zedServers() {
    return this._zedServers;
  }
  public putZedServers(value: EdgenodeDlispZedServers[] | cdktf.IResolvable) {
    this._zedServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zedServersInput() {
    return this._zedServers.internalValue;
  }
}

export class EdgenodeDlispList extends cdktf.ComplexList {
  public internalValue? : EdgenodeDlisp[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeDlispOutputReference {
    return new EdgenodeDlispOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeEdgeNodeCluster {
  /**
  * A cluster prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#cluster_prefix Edgenode#cluster_prefix}
  */
  readonly clusterPrefix?: string;
  /**
  * Is it a master node?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#is_master Edgenode#is_master}
  */
  readonly isMaster?: boolean | cdktf.IResolvable;
  /**
  * ZKS instance manifest
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#manifest Edgenode#manifest}
  */
  readonly manifest?: string;
  /**
  * User defined name of the cluster, unique across the enterprise. Once cluster is created, name can’t be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#name Edgenode#name}
  */
  readonly name?: string;
  /**
  * Foreign key to the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#project_id Edgenode#project_id}
  */
  readonly projectId?: string;
  /**
  * Seed node id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#seed_node_id Edgenode#seed_node_id}
  */
  readonly seedNodeId?: string;
  /**
  * Seed node ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#seed_node_ip Edgenode#seed_node_ip}
  */
  readonly seedNodeIp?: string;
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#tags Edgenode#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Tiebreaker node id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#tie_breaker_node_id Edgenode#tie_breaker_node_id}
  */
  readonly tieBreakerNodeId?: string;
  /**
  * Cluster token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#token Edgenode#token}
  */
  readonly token?: string;
}

export function edgenodeEdgeNodeClusterToTerraform(struct?: EdgenodeEdgeNodeCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_prefix: cdktf.stringToTerraform(struct!.clusterPrefix),
    is_master: cdktf.booleanToTerraform(struct!.isMaster),
    manifest: cdktf.stringToTerraform(struct!.manifest),
    name: cdktf.stringToTerraform(struct!.name),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    seed_node_id: cdktf.stringToTerraform(struct!.seedNodeId),
    seed_node_ip: cdktf.stringToTerraform(struct!.seedNodeIp),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    tie_breaker_node_id: cdktf.stringToTerraform(struct!.tieBreakerNodeId),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function edgenodeEdgeNodeClusterToHclTerraform(struct?: EdgenodeEdgeNodeCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_prefix: {
      value: cdktf.stringToHclTerraform(struct!.clusterPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_master: {
      value: cdktf.booleanToHclTerraform(struct!.isMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manifest: {
      value: cdktf.stringToHclTerraform(struct!.manifest),
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
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seed_node_id: {
      value: cdktf.stringToHclTerraform(struct!.seedNodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seed_node_ip: {
      value: cdktf.stringToHclTerraform(struct!.seedNodeIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tie_breaker_node_id: {
      value: cdktf.stringToHclTerraform(struct!.tieBreakerNodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeEdgeNodeClusterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeEdgeNodeCluster | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterPrefix = this._clusterPrefix;
    }
    if (this._isMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMaster = this._isMaster;
    }
    if (this._manifest !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifest = this._manifest;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._seedNodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.seedNodeId = this._seedNodeId;
    }
    if (this._seedNodeIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.seedNodeIp = this._seedNodeIp;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._tieBreakerNodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tieBreakerNodeId = this._tieBreakerNodeId;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeEdgeNodeCluster | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterPrefix = undefined;
      this._isMaster = undefined;
      this._manifest = undefined;
      this._name = undefined;
      this._projectId = undefined;
      this._seedNodeId = undefined;
      this._seedNodeIp = undefined;
      this._tags = undefined;
      this._tieBreakerNodeId = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterPrefix = value.clusterPrefix;
      this._isMaster = value.isMaster;
      this._manifest = value.manifest;
      this._name = value.name;
      this._projectId = value.projectId;
      this._seedNodeId = value.seedNodeId;
      this._seedNodeIp = value.seedNodeIp;
      this._tags = value.tags;
      this._tieBreakerNodeId = value.tieBreakerNodeId;
      this._token = value.token;
    }
  }

  // cluster_prefix - computed: false, optional: true, required: false
  private _clusterPrefix?: string; 
  public get clusterPrefix() {
    return this.getStringAttribute('cluster_prefix');
  }
  public set clusterPrefix(value: string) {
    this._clusterPrefix = value;
  }
  public resetClusterPrefix() {
    this._clusterPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPrefixInput() {
    return this._clusterPrefix;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_master - computed: false, optional: true, required: false
  private _isMaster?: boolean | cdktf.IResolvable; 
  public get isMaster() {
    return this.getBooleanAttribute('is_master');
  }
  public set isMaster(value: boolean | cdktf.IResolvable) {
    this._isMaster = value;
  }
  public resetIsMaster() {
    this._isMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMasterInput() {
    return this._isMaster;
  }

  // manifest - computed: false, optional: true, required: false
  private _manifest?: string; 
  public get manifest() {
    return this.getStringAttribute('manifest');
  }
  public set manifest(value: string) {
    this._manifest = value;
  }
  public resetManifest() {
    this._manifest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestInput() {
    return this._manifest;
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // seed_node_id - computed: false, optional: true, required: false
  private _seedNodeId?: string; 
  public get seedNodeId() {
    return this.getStringAttribute('seed_node_id');
  }
  public set seedNodeId(value: string) {
    this._seedNodeId = value;
  }
  public resetSeedNodeId() {
    this._seedNodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedNodeIdInput() {
    return this._seedNodeId;
  }

  // seed_node_ip - computed: false, optional: true, required: false
  private _seedNodeIp?: string; 
  public get seedNodeIp() {
    return this.getStringAttribute('seed_node_ip');
  }
  public set seedNodeIp(value: string) {
    this._seedNodeIp = value;
  }
  public resetSeedNodeIp() {
    this._seedNodeIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seedNodeIpInput() {
    return this._seedNodeIp;
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

  // tie_breaker_node_id - computed: false, optional: true, required: false
  private _tieBreakerNodeId?: string; 
  public get tieBreakerNodeId() {
    return this.getStringAttribute('tie_breaker_node_id');
  }
  public set tieBreakerNodeId(value: string) {
    this._tieBreakerNodeId = value;
  }
  public resetTieBreakerNodeId() {
    this._tieBreakerNodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tieBreakerNodeIdInput() {
    return this._tieBreakerNodeId;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}

export class EdgenodeEdgeNodeClusterList extends cdktf.ComplexList {
  public internalValue? : EdgenodeEdgeNodeCluster[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeEdgeNodeClusterOutputReference {
    return new EdgenodeEdgeNodeClusterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeEdgeviewconfigAppPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#allow_app Edgenode#allow_app}
  */
  readonly allowApp?: boolean | cdktf.IResolvable;
}

export function edgenodeEdgeviewconfigAppPolicyToTerraform(struct?: EdgenodeEdgeviewconfigAppPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_app: cdktf.booleanToTerraform(struct!.allowApp),
  }
}


export function edgenodeEdgeviewconfigAppPolicyToHclTerraform(struct?: EdgenodeEdgeviewconfigAppPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_app: {
      value: cdktf.booleanToHclTerraform(struct!.allowApp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeEdgeviewconfigAppPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeEdgeviewconfigAppPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowApp = this._allowApp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeEdgeviewconfigAppPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowApp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowApp = value.allowApp;
    }
  }

  // allow_app - computed: false, optional: true, required: false
  private _allowApp?: boolean | cdktf.IResolvable; 
  public get allowApp() {
    return this.getBooleanAttribute('allow_app');
  }
  public set allowApp(value: boolean | cdktf.IResolvable) {
    this._allowApp = value;
  }
  public resetAllowApp() {
    this._allowApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAppInput() {
    return this._allowApp;
  }
}

export class EdgenodeEdgeviewconfigAppPolicyList extends cdktf.ComplexList {
  public internalValue? : EdgenodeEdgeviewconfigAppPolicy[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeEdgeviewconfigAppPolicyOutputReference {
    return new EdgenodeEdgeviewconfigAppPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeEdgeviewconfigDevPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#allow_dev Edgenode#allow_dev}
  */
  readonly allowDev?: boolean | cdktf.IResolvable;
}

export function edgenodeEdgeviewconfigDevPolicyToTerraform(struct?: EdgenodeEdgeviewconfigDevPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_dev: cdktf.booleanToTerraform(struct!.allowDev),
  }
}


export function edgenodeEdgeviewconfigDevPolicyToHclTerraform(struct?: EdgenodeEdgeviewconfigDevPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_dev: {
      value: cdktf.booleanToHclTerraform(struct!.allowDev),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeEdgeviewconfigDevPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeEdgeviewconfigDevPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowDev !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDev = this._allowDev;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeEdgeviewconfigDevPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowDev = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowDev = value.allowDev;
    }
  }

  // allow_dev - computed: false, optional: true, required: false
  private _allowDev?: boolean | cdktf.IResolvable; 
  public get allowDev() {
    return this.getBooleanAttribute('allow_dev');
  }
  public set allowDev(value: boolean | cdktf.IResolvable) {
    this._allowDev = value;
  }
  public resetAllowDev() {
    this._allowDev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDevInput() {
    return this._allowDev;
  }
}

export class EdgenodeEdgeviewconfigDevPolicyList extends cdktf.ComplexList {
  public internalValue? : EdgenodeEdgeviewconfigDevPolicy[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeEdgeviewconfigDevPolicyOutputReference {
    return new EdgenodeEdgeviewconfigDevPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeEdgeviewconfigExtPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#allow_ext Edgenode#allow_ext}
  */
  readonly allowExt?: boolean | cdktf.IResolvable;
}

export function edgenodeEdgeviewconfigExtPolicyToTerraform(struct?: EdgenodeEdgeviewconfigExtPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_ext: cdktf.booleanToTerraform(struct!.allowExt),
  }
}


export function edgenodeEdgeviewconfigExtPolicyToHclTerraform(struct?: EdgenodeEdgeviewconfigExtPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_ext: {
      value: cdktf.booleanToHclTerraform(struct!.allowExt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeEdgeviewconfigExtPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeEdgeviewconfigExtPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowExt !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowExt = this._allowExt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeEdgeviewconfigExtPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowExt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowExt = value.allowExt;
    }
  }

  // allow_ext - computed: false, optional: true, required: false
  private _allowExt?: boolean | cdktf.IResolvable; 
  public get allowExt() {
    return this.getBooleanAttribute('allow_ext');
  }
  public set allowExt(value: boolean | cdktf.IResolvable) {
    this._allowExt = value;
  }
  public resetAllowExt() {
    this._allowExt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExtInput() {
    return this._allowExt;
  }
}

export class EdgenodeEdgeviewconfigExtPolicyList extends cdktf.ComplexList {
  public internalValue? : EdgenodeEdgeviewconfigExtPolicy[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeEdgeviewconfigExtPolicyOutputReference {
    return new EdgenodeEdgeviewconfigExtPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeEdgeviewconfigJwtInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#allow_sec Edgenode#allow_sec}
  */
  readonly allowSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#disp_url Edgenode#disp_url}
  */
  readonly dispUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#encrypt Edgenode#encrypt}
  */
  readonly encrypt?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#expire_sec Edgenode#expire_sec}
  */
  readonly expireSec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#num_inst Edgenode#num_inst}
  */
  readonly numInst?: number;
}

export function edgenodeEdgeviewconfigJwtInfoToTerraform(struct?: EdgenodeEdgeviewconfigJwtInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_sec: cdktf.numberToTerraform(struct!.allowSec),
    disp_url: cdktf.stringToTerraform(struct!.dispUrl),
    encrypt: cdktf.booleanToTerraform(struct!.encrypt),
    expire_sec: cdktf.stringToTerraform(struct!.expireSec),
    num_inst: cdktf.numberToTerraform(struct!.numInst),
  }
}


export function edgenodeEdgeviewconfigJwtInfoToHclTerraform(struct?: EdgenodeEdgeviewconfigJwtInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_sec: {
      value: cdktf.numberToHclTerraform(struct!.allowSec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disp_url: {
      value: cdktf.stringToHclTerraform(struct!.dispUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypt: {
      value: cdktf.booleanToHclTerraform(struct!.encrypt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expire_sec: {
      value: cdktf.stringToHclTerraform(struct!.expireSec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_inst: {
      value: cdktf.numberToHclTerraform(struct!.numInst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeEdgeviewconfigJwtInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeEdgeviewconfigJwtInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSec = this._allowSec;
    }
    if (this._dispUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dispUrl = this._dispUrl;
    }
    if (this._encrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypt = this._encrypt;
    }
    if (this._expireSec !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireSec = this._expireSec;
    }
    if (this._numInst !== undefined) {
      hasAnyValues = true;
      internalValueResult.numInst = this._numInst;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeEdgeviewconfigJwtInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowSec = undefined;
      this._dispUrl = undefined;
      this._encrypt = undefined;
      this._expireSec = undefined;
      this._numInst = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowSec = value.allowSec;
      this._dispUrl = value.dispUrl;
      this._encrypt = value.encrypt;
      this._expireSec = value.expireSec;
      this._numInst = value.numInst;
    }
  }

  // allow_sec - computed: false, optional: true, required: false
  private _allowSec?: number; 
  public get allowSec() {
    return this.getNumberAttribute('allow_sec');
  }
  public set allowSec(value: number) {
    this._allowSec = value;
  }
  public resetAllowSec() {
    this._allowSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSecInput() {
    return this._allowSec;
  }

  // disp_url - computed: false, optional: true, required: false
  private _dispUrl?: string; 
  public get dispUrl() {
    return this.getStringAttribute('disp_url');
  }
  public set dispUrl(value: string) {
    this._dispUrl = value;
  }
  public resetDispUrl() {
    this._dispUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispUrlInput() {
    return this._dispUrl;
  }

  // encrypt - computed: false, optional: true, required: false
  private _encrypt?: boolean | cdktf.IResolvable; 
  public get encrypt() {
    return this.getBooleanAttribute('encrypt');
  }
  public set encrypt(value: boolean | cdktf.IResolvable) {
    this._encrypt = value;
  }
  public resetEncrypt() {
    this._encrypt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptInput() {
    return this._encrypt;
  }

  // expire_sec - computed: true, optional: true, required: false
  private _expireSec?: string; 
  public get expireSec() {
    return this.getStringAttribute('expire_sec');
  }
  public set expireSec(value: string) {
    this._expireSec = value;
  }
  public resetExpireSec() {
    this._expireSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireSecInput() {
    return this._expireSec;
  }

  // num_inst - computed: false, optional: true, required: false
  private _numInst?: number; 
  public get numInst() {
    return this.getNumberAttribute('num_inst');
  }
  public set numInst(value: number) {
    this._numInst = value;
  }
  public resetNumInst() {
    this._numInst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInstInput() {
    return this._numInst;
  }
}

export class EdgenodeEdgeviewconfigJwtInfoList extends cdktf.ComplexList {
  public internalValue? : EdgenodeEdgeviewconfigJwtInfo[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeEdgeviewconfigJwtInfoOutputReference {
    return new EdgenodeEdgeviewconfigJwtInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeEdgeviewconfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#generation_id Edgenode#generation_id}
  */
  readonly generationId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#token Edgenode#token}
  */
  readonly token?: string;
  /**
  * app_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#app_policy Edgenode#app_policy}
  */
  readonly appPolicy?: EdgenodeEdgeviewconfigAppPolicy[] | cdktf.IResolvable;
  /**
  * dev_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#dev_policy Edgenode#dev_policy}
  */
  readonly devPolicy?: EdgenodeEdgeviewconfigDevPolicy[] | cdktf.IResolvable;
  /**
  * ext_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#ext_policy Edgenode#ext_policy}
  */
  readonly extPolicy?: EdgenodeEdgeviewconfigExtPolicy[] | cdktf.IResolvable;
  /**
  * jwt_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#jwt_info Edgenode#jwt_info}
  */
  readonly jwtInfo?: EdgenodeEdgeviewconfigJwtInfo[] | cdktf.IResolvable;
}

export function edgenodeEdgeviewconfigToTerraform(struct?: EdgenodeEdgeviewconfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    generation_id: cdktf.numberToTerraform(struct!.generationId),
    token: cdktf.stringToTerraform(struct!.token),
    app_policy: cdktf.listMapper(edgenodeEdgeviewconfigAppPolicyToTerraform, true)(struct!.appPolicy),
    dev_policy: cdktf.listMapper(edgenodeEdgeviewconfigDevPolicyToTerraform, true)(struct!.devPolicy),
    ext_policy: cdktf.listMapper(edgenodeEdgeviewconfigExtPolicyToTerraform, true)(struct!.extPolicy),
    jwt_info: cdktf.listMapper(edgenodeEdgeviewconfigJwtInfoToTerraform, true)(struct!.jwtInfo),
  }
}


export function edgenodeEdgeviewconfigToHclTerraform(struct?: EdgenodeEdgeviewconfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    generation_id: {
      value: cdktf.numberToHclTerraform(struct!.generationId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_policy: {
      value: cdktf.listMapperHcl(edgenodeEdgeviewconfigAppPolicyToHclTerraform, true)(struct!.appPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeEdgeviewconfigAppPolicyList",
    },
    dev_policy: {
      value: cdktf.listMapperHcl(edgenodeEdgeviewconfigDevPolicyToHclTerraform, true)(struct!.devPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeEdgeviewconfigDevPolicyList",
    },
    ext_policy: {
      value: cdktf.listMapperHcl(edgenodeEdgeviewconfigExtPolicyToHclTerraform, true)(struct!.extPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeEdgeviewconfigExtPolicyList",
    },
    jwt_info: {
      value: cdktf.listMapperHcl(edgenodeEdgeviewconfigJwtInfoToHclTerraform, true)(struct!.jwtInfo),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeEdgeviewconfigJwtInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeEdgeviewconfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeEdgeviewconfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._generationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.generationId = this._generationId;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._appPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appPolicy = this._appPolicy?.internalValue;
    }
    if (this._devPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devPolicy = this._devPolicy?.internalValue;
    }
    if (this._extPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extPolicy = this._extPolicy?.internalValue;
    }
    if (this._jwtInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtInfo = this._jwtInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeEdgeviewconfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._generationId = undefined;
      this._token = undefined;
      this._appPolicy.internalValue = undefined;
      this._devPolicy.internalValue = undefined;
      this._extPolicy.internalValue = undefined;
      this._jwtInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._generationId = value.generationId;
      this._token = value.token;
      this._appPolicy.internalValue = value.appPolicy;
      this._devPolicy.internalValue = value.devPolicy;
      this._extPolicy.internalValue = value.extPolicy;
      this._jwtInfo.internalValue = value.jwtInfo;
    }
  }

  // generation_id - computed: false, optional: true, required: false
  private _generationId?: number; 
  public get generationId() {
    return this.getNumberAttribute('generation_id');
  }
  public set generationId(value: number) {
    this._generationId = value;
  }
  public resetGenerationId() {
    this._generationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationIdInput() {
    return this._generationId;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // app_policy - computed: false, optional: true, required: false
  private _appPolicy = new EdgenodeEdgeviewconfigAppPolicyList(this, "app_policy", false);
  public get appPolicy() {
    return this._appPolicy;
  }
  public putAppPolicy(value: EdgenodeEdgeviewconfigAppPolicy[] | cdktf.IResolvable) {
    this._appPolicy.internalValue = value;
  }
  public resetAppPolicy() {
    this._appPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPolicyInput() {
    return this._appPolicy.internalValue;
  }

  // dev_policy - computed: false, optional: true, required: false
  private _devPolicy = new EdgenodeEdgeviewconfigDevPolicyList(this, "dev_policy", false);
  public get devPolicy() {
    return this._devPolicy;
  }
  public putDevPolicy(value: EdgenodeEdgeviewconfigDevPolicy[] | cdktf.IResolvable) {
    this._devPolicy.internalValue = value;
  }
  public resetDevPolicy() {
    this._devPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devPolicyInput() {
    return this._devPolicy.internalValue;
  }

  // ext_policy - computed: false, optional: true, required: false
  private _extPolicy = new EdgenodeEdgeviewconfigExtPolicyList(this, "ext_policy", false);
  public get extPolicy() {
    return this._extPolicy;
  }
  public putExtPolicy(value: EdgenodeEdgeviewconfigExtPolicy[] | cdktf.IResolvable) {
    this._extPolicy.internalValue = value;
  }
  public resetExtPolicy() {
    this._extPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extPolicyInput() {
    return this._extPolicy.internalValue;
  }

  // jwt_info - computed: false, optional: true, required: false
  private _jwtInfo = new EdgenodeEdgeviewconfigJwtInfoList(this, "jwt_info", false);
  public get jwtInfo() {
    return this._jwtInfo;
  }
  public putJwtInfo(value: EdgenodeEdgeviewconfigJwtInfo[] | cdktf.IResolvable) {
    this._jwtInfo.internalValue = value;
  }
  public resetJwtInfo() {
    this._jwtInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtInfoInput() {
    return this._jwtInfo.internalValue;
  }
}

export class EdgenodeEdgeviewconfigList extends cdktf.ComplexList {
  public internalValue? : EdgenodeEdgeviewconfig[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeEdgeviewconfigOutputReference {
    return new EdgenodeEdgeviewconfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeInterfacesAdapterSpecificNetDnsListStruct {
  /**
  * Addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#addrs Edgenode#addrs}
  */
  readonly addrs?: string[];
  /**
  * Host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#hostname Edgenode#hostname}
  */
  readonly hostname?: string;
}

export function edgenodeInterfacesAdapterSpecificNetDnsListStructToTerraform(struct?: EdgenodeInterfacesAdapterSpecificNetDnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addrs),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function edgenodeInterfacesAdapterSpecificNetDnsListStructToHclTerraform(struct?: EdgenodeInterfacesAdapterSpecificNetDnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeInterfacesAdapterSpecificNetDnsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeInterfacesAdapterSpecificNetDnsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrs = this._addrs;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeInterfacesAdapterSpecificNetDnsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrs = undefined;
      this._hostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrs = value.addrs;
      this._hostname = value.hostname;
    }
  }

  // addrs - computed: false, optional: true, required: false
  private _addrs?: string[]; 
  public get addrs() {
    return this.getListAttribute('addrs');
  }
  public set addrs(value: string[]) {
    this._addrs = value;
  }
  public resetAddrs() {
    this._addrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrsInput() {
    return this._addrs;
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
}

export class EdgenodeInterfacesAdapterSpecificNetDnsListStructList extends cdktf.ComplexList {
  public internalValue? : EdgenodeInterfacesAdapterSpecificNetDnsListStruct[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeInterfacesAdapterSpecificNetDnsListStructOutputReference {
    return new EdgenodeInterfacesAdapterSpecificNetDnsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeInterfacesAdapterSpecificNetIpDhcpRange {
  /**
  * ending IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#end Edgenode#end}
  */
  readonly end?: string;
  /**
  * starting IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#start Edgenode#start}
  */
  readonly start?: string;
}

export function edgenodeInterfacesAdapterSpecificNetIpDhcpRangeToTerraform(struct?: EdgenodeInterfacesAdapterSpecificNetIpDhcpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function edgenodeInterfacesAdapterSpecificNetIpDhcpRangeToHclTerraform(struct?: EdgenodeInterfacesAdapterSpecificNetIpDhcpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeInterfacesAdapterSpecificNetIpDhcpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeInterfacesAdapterSpecificNetIpDhcpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeInterfacesAdapterSpecificNetIpDhcpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class EdgenodeInterfacesAdapterSpecificNetIpDhcpRangeList extends cdktf.ComplexList {
  public internalValue? : EdgenodeInterfacesAdapterSpecificNetIpDhcpRange[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeInterfacesAdapterSpecificNetIpDhcpRangeOutputReference {
    return new EdgenodeInterfacesAdapterSpecificNetIpDhcpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeInterfacesAdapterSpecificNetIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#deprecated_dhcp Edgenode#deprecated_dhcp}
  */
  readonly deprecatedDhcp?: boolean | cdktf.IResolvable;
  /**
  * DHCP type:
  * NETWORK_DHCP_TYPE_STATIC
  * NETWORK_DHCP_TYPE_PASSTHROUGH
  * NETWORK_DHCP_TYPE_CLIENT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#dhcp Edgenode#dhcp}
  */
  readonly dhcp?: string;
  /**
  * List of IP Addresses of DNS servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#dns Edgenode#dns}
  */
  readonly dns?: string[];
  /**
  * Network domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#domain Edgenode#domain}
  */
  readonly domain?: string;
  /**
  * IP Address of Network Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#gateway Edgenode#gateway}
  */
  readonly gateway?: string;
  /**
  * Subnet Mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#mask Edgenode#mask}
  */
  readonly mask?: string;
  /**
  * IP Address of NTP Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#ntp Edgenode#ntp}
  */
  readonly ntp?: string;
  /**
  * Subnet address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#subnet Edgenode#subnet}
  */
  readonly subnet?: string;
  /**
  * dhcp_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#dhcp_range Edgenode#dhcp_range}
  */
  readonly dhcpRange?: EdgenodeInterfacesAdapterSpecificNetIpDhcpRange[] | cdktf.IResolvable;
}

export function edgenodeInterfacesAdapterSpecificNetIpToTerraform(struct?: EdgenodeInterfacesAdapterSpecificNetIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deprecated_dhcp: cdktf.booleanToTerraform(struct!.deprecatedDhcp),
    dhcp: cdktf.stringToTerraform(struct!.dhcp),
    dns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dns),
    domain: cdktf.stringToTerraform(struct!.domain),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    mask: cdktf.stringToTerraform(struct!.mask),
    ntp: cdktf.stringToTerraform(struct!.ntp),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    dhcp_range: cdktf.listMapper(edgenodeInterfacesAdapterSpecificNetIpDhcpRangeToTerraform, true)(struct!.dhcpRange),
  }
}


export function edgenodeInterfacesAdapterSpecificNetIpToHclTerraform(struct?: EdgenodeInterfacesAdapterSpecificNetIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deprecated_dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.deprecatedDhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dhcp: {
      value: cdktf.stringToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
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
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp: {
      value: cdktf.stringToHclTerraform(struct!.ntp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_range: {
      value: cdktf.listMapperHcl(edgenodeInterfacesAdapterSpecificNetIpDhcpRangeToHclTerraform, true)(struct!.dhcpRange),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeInterfacesAdapterSpecificNetIpDhcpRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeInterfacesAdapterSpecificNetIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeInterfacesAdapterSpecificNetIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deprecatedDhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprecatedDhcp = this._deprecatedDhcp;
    }
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ntp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntp = this._ntp;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._dhcpRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRange = this._dhcpRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeInterfacesAdapterSpecificNetIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deprecatedDhcp = undefined;
      this._dhcp = undefined;
      this._dns = undefined;
      this._domain = undefined;
      this._gateway = undefined;
      this._mask = undefined;
      this._ntp = undefined;
      this._subnet = undefined;
      this._dhcpRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deprecatedDhcp = value.deprecatedDhcp;
      this._dhcp = value.dhcp;
      this._dns = value.dns;
      this._domain = value.domain;
      this._gateway = value.gateway;
      this._mask = value.mask;
      this._ntp = value.ntp;
      this._subnet = value.subnet;
      this._dhcpRange.internalValue = value.dhcpRange;
    }
  }

  // deprecated_dhcp - computed: false, optional: true, required: false
  private _deprecatedDhcp?: boolean | cdktf.IResolvable; 
  public get deprecatedDhcp() {
    return this.getBooleanAttribute('deprecated_dhcp');
  }
  public set deprecatedDhcp(value: boolean | cdktf.IResolvable) {
    this._deprecatedDhcp = value;
  }
  public resetDeprecatedDhcp() {
    this._deprecatedDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedDhcpInput() {
    return this._deprecatedDhcp;
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: string; 
  public get dhcp() {
    return this.getStringAttribute('dhcp');
  }
  public set dhcp(value: string) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string[]; 
  public get dns() {
    return this.getListAttribute('dns');
  }
  public set dns(value: string[]) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
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

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ntp - computed: false, optional: true, required: false
  private _ntp?: string; 
  public get ntp() {
    return this.getStringAttribute('ntp');
  }
  public set ntp(value: string) {
    this._ntp = value;
  }
  public resetNtp() {
    this._ntp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpInput() {
    return this._ntp;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // dhcp_range - computed: false, optional: true, required: false
  private _dhcpRange = new EdgenodeInterfacesAdapterSpecificNetIpDhcpRangeList(this, "dhcp_range", false);
  public get dhcpRange() {
    return this._dhcpRange;
  }
  public putDhcpRange(value: EdgenodeInterfacesAdapterSpecificNetIpDhcpRange[] | cdktf.IResolvable) {
    this._dhcpRange.internalValue = value;
  }
  public resetDhcpRange() {
    this._dhcpRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRangeInput() {
    return this._dhcpRange.internalValue;
  }
}

export class EdgenodeInterfacesAdapterSpecificNetIpList extends cdktf.ComplexList {
  public internalValue? : EdgenodeInterfacesAdapterSpecificNetIp[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeInterfacesAdapterSpecificNetIpOutputReference {
    return new EdgenodeInterfacesAdapterSpecificNetIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeInterfacesAdapterSpecificNetProxyProxies {
  /**
  * Net Proxy Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#port Edgenode#port}
  */
  readonly port?: number;
  /**
  * Net Proxy protocol:
  * NETWORK_PROXY_PROTO_HTTP
  * NETWORK_PROXY_PROTO_HTTPS
  * NETWORK_PROXY_PROTO_SOCKS
  * NETWORK_PROXY_PROTO_FTP
  * NETWORK_PROXY_PROTO_OTHER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#proto Edgenode#proto}
  */
  readonly proto?: string;
  /**
  * Net Proxy Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#server Edgenode#server}
  */
  readonly server?: string;
}

export function edgenodeInterfacesAdapterSpecificNetProxyProxiesToTerraform(struct?: EdgenodeInterfacesAdapterSpecificNetProxyProxies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    proto: cdktf.stringToTerraform(struct!.proto),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function edgenodeInterfacesAdapterSpecificNetProxyProxiesToHclTerraform(struct?: EdgenodeInterfacesAdapterSpecificNetProxyProxies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeInterfacesAdapterSpecificNetProxyProxiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeInterfacesAdapterSpecificNetProxyProxies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeInterfacesAdapterSpecificNetProxyProxies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._proto = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._proto = value.proto;
      this._server = value.server;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
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
}

export class EdgenodeInterfacesAdapterSpecificNetProxyProxiesList extends cdktf.ComplexList {
  public internalValue? : EdgenodeInterfacesAdapterSpecificNetProxyProxies[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeInterfacesAdapterSpecificNetProxyProxiesOutputReference {
    return new EdgenodeInterfacesAdapterSpecificNetProxyProxiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeInterfacesAdapterSpecificNetProxy {
  /**
  * Proxy exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#exceptions Edgenode#exceptions}
  */
  readonly exceptions?: string;
  /**
  * Enable WPAD (Web Proxy Auto Discovery) protocol to discover and download PAC file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#network_proxy Edgenode#network_proxy}
  */
  readonly networkProxy?: boolean | cdktf.IResolvable;
  /**
  * Network Proxy Certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#network_proxy_certs Edgenode#network_proxy_certs}
  */
  readonly networkProxyCerts?: string[];
  /**
  * URL for wpad.dat file to be downloaded. Used when network_proxy is set to False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#network_proxy_url Edgenode#network_proxy_url}
  */
  readonly networkProxyUrl?: string;
  /**
  * Proxy configuration in a pacfile. Used when network_proxy is set to False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#pacfile Edgenode#pacfile}
  */
  readonly pacfile?: string;
  /**
  * proxies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#proxies Edgenode#proxies}
  */
  readonly proxies?: EdgenodeInterfacesAdapterSpecificNetProxyProxies[] | cdktf.IResolvable;
}

export function edgenodeInterfacesAdapterSpecificNetProxyToTerraform(struct?: EdgenodeInterfacesAdapterSpecificNetProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exceptions: cdktf.stringToTerraform(struct!.exceptions),
    network_proxy: cdktf.booleanToTerraform(struct!.networkProxy),
    network_proxy_certs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkProxyCerts),
    network_proxy_url: cdktf.stringToTerraform(struct!.networkProxyUrl),
    pacfile: cdktf.stringToTerraform(struct!.pacfile),
    proxies: cdktf.listMapper(edgenodeInterfacesAdapterSpecificNetProxyProxiesToTerraform, true)(struct!.proxies),
  }
}


export function edgenodeInterfacesAdapterSpecificNetProxyToHclTerraform(struct?: EdgenodeInterfacesAdapterSpecificNetProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exceptions: {
      value: cdktf.stringToHclTerraform(struct!.exceptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.networkProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_proxy_certs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkProxyCerts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    network_proxy_url: {
      value: cdktf.stringToHclTerraform(struct!.networkProxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pacfile: {
      value: cdktf.stringToHclTerraform(struct!.pacfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxies: {
      value: cdktf.listMapperHcl(edgenodeInterfacesAdapterSpecificNetProxyProxiesToHclTerraform, true)(struct!.proxies),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeInterfacesAdapterSpecificNetProxyProxiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeInterfacesAdapterSpecificNetProxyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeInterfacesAdapterSpecificNetProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exceptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptions = this._exceptions;
    }
    if (this._networkProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProxy = this._networkProxy;
    }
    if (this._networkProxyCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProxyCerts = this._networkProxyCerts;
    }
    if (this._networkProxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProxyUrl = this._networkProxyUrl;
    }
    if (this._pacfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.pacfile = this._pacfile;
    }
    if (this._proxies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxies = this._proxies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeInterfacesAdapterSpecificNetProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exceptions = undefined;
      this._networkProxy = undefined;
      this._networkProxyCerts = undefined;
      this._networkProxyUrl = undefined;
      this._pacfile = undefined;
      this._proxies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exceptions = value.exceptions;
      this._networkProxy = value.networkProxy;
      this._networkProxyCerts = value.networkProxyCerts;
      this._networkProxyUrl = value.networkProxyUrl;
      this._pacfile = value.pacfile;
      this._proxies.internalValue = value.proxies;
    }
  }

  // exceptions - computed: false, optional: true, required: false
  private _exceptions?: string; 
  public get exceptions() {
    return this.getStringAttribute('exceptions');
  }
  public set exceptions(value: string) {
    this._exceptions = value;
  }
  public resetExceptions() {
    this._exceptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionsInput() {
    return this._exceptions;
  }

  // network_proxy - computed: false, optional: true, required: false
  private _networkProxy?: boolean | cdktf.IResolvable; 
  public get networkProxy() {
    return this.getBooleanAttribute('network_proxy');
  }
  public set networkProxy(value: boolean | cdktf.IResolvable) {
    this._networkProxy = value;
  }
  public resetNetworkProxy() {
    this._networkProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProxyInput() {
    return this._networkProxy;
  }

  // network_proxy_certs - computed: false, optional: true, required: false
  private _networkProxyCerts?: string[]; 
  public get networkProxyCerts() {
    return this.getListAttribute('network_proxy_certs');
  }
  public set networkProxyCerts(value: string[]) {
    this._networkProxyCerts = value;
  }
  public resetNetworkProxyCerts() {
    this._networkProxyCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProxyCertsInput() {
    return this._networkProxyCerts;
  }

  // network_proxy_url - computed: false, optional: true, required: false
  private _networkProxyUrl?: string; 
  public get networkProxyUrl() {
    return this.getStringAttribute('network_proxy_url');
  }
  public set networkProxyUrl(value: string) {
    this._networkProxyUrl = value;
  }
  public resetNetworkProxyUrl() {
    this._networkProxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProxyUrlInput() {
    return this._networkProxyUrl;
  }

  // pacfile - computed: false, optional: true, required: false
  private _pacfile?: string; 
  public get pacfile() {
    return this.getStringAttribute('pacfile');
  }
  public set pacfile(value: string) {
    this._pacfile = value;
  }
  public resetPacfile() {
    this._pacfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pacfileInput() {
    return this._pacfile;
  }

  // proxies - computed: false, optional: true, required: false
  private _proxies = new EdgenodeInterfacesAdapterSpecificNetProxyProxiesList(this, "proxies", false);
  public get proxies() {
    return this._proxies;
  }
  public putProxies(value: EdgenodeInterfacesAdapterSpecificNetProxyProxies[] | cdktf.IResolvable) {
    this._proxies.internalValue = value;
  }
  public resetProxies() {
    this._proxies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxiesInput() {
    return this._proxies.internalValue;
  }
}

export class EdgenodeInterfacesAdapterSpecificNetProxyList extends cdktf.ComplexList {
  public internalValue? : EdgenodeInterfacesAdapterSpecificNetProxy[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeInterfacesAdapterSpecificNetProxyOutputReference {
    return new EdgenodeInterfacesAdapterSpecificNetProxyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeInterfacesAdapterSpecificNetRevision {
}

export function edgenodeInterfacesAdapterSpecificNetRevisionToTerraform(struct?: EdgenodeInterfacesAdapterSpecificNetRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function edgenodeInterfacesAdapterSpecificNetRevisionToHclTerraform(struct?: EdgenodeInterfacesAdapterSpecificNetRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EdgenodeInterfacesAdapterSpecificNetRevisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeInterfacesAdapterSpecificNetRevision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeInterfacesAdapterSpecificNetRevision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class EdgenodeInterfacesAdapterSpecificNetRevisionList extends cdktf.ComplexList {
  public internalValue? : EdgenodeInterfacesAdapterSpecificNetRevision[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeInterfacesAdapterSpecificNetRevisionOutputReference {
    return new EdgenodeInterfacesAdapterSpecificNetRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeInterfacesAdapterSpecificNetWirelessCellular {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#apn Edgenode#apn}
  */
  readonly apn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#location_tracking Edgenode#location_tracking}
  */
  readonly locationTracking?: boolean | cdktf.IResolvable;
}

export function edgenodeInterfacesAdapterSpecificNetWirelessCellularToTerraform(struct?: EdgenodeInterfacesAdapterSpecificNetWirelessCellular | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apn: cdktf.stringToTerraform(struct!.apn),
    location_tracking: cdktf.booleanToTerraform(struct!.locationTracking),
  }
}


export function edgenodeInterfacesAdapterSpecificNetWirelessCellularToHclTerraform(struct?: EdgenodeInterfacesAdapterSpecificNetWirelessCellular | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apn: {
      value: cdktf.stringToHclTerraform(struct!.apn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_tracking: {
      value: cdktf.booleanToHclTerraform(struct!.locationTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeInterfacesAdapterSpecificNetWirelessCellularOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeInterfacesAdapterSpecificNetWirelessCellular | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apn !== undefined) {
      hasAnyValues = true;
      internalValueResult.apn = this._apn;
    }
    if (this._locationTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationTracking = this._locationTracking;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeInterfacesAdapterSpecificNetWirelessCellular | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apn = undefined;
      this._locationTracking = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apn = value.apn;
      this._locationTracking = value.locationTracking;
    }
  }

  // apn - computed: false, optional: true, required: false
  private _apn?: string; 
  public get apn() {
    return this.getStringAttribute('apn');
  }
  public set apn(value: string) {
    this._apn = value;
  }
  public resetApn() {
    this._apn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnInput() {
    return this._apn;
  }

  // location_tracking - computed: true, optional: true, required: false
  private _locationTracking?: boolean | cdktf.IResolvable; 
  public get locationTracking() {
    return this.getBooleanAttribute('location_tracking');
  }
  public set locationTracking(value: boolean | cdktf.IResolvable) {
    this._locationTracking = value;
  }
  public resetLocationTracking() {
    this._locationTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationTrackingInput() {
    return this._locationTracking;
  }
}

export class EdgenodeInterfacesAdapterSpecificNetWirelessCellularList extends cdktf.ComplexList {
  public internalValue? : EdgenodeInterfacesAdapterSpecificNetWirelessCellular[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeInterfacesAdapterSpecificNetWirelessCellularOutputReference {
    return new EdgenodeInterfacesAdapterSpecificNetWirelessCellularOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeInterfacesAdapterSpecificNetWirelessWifi {
  /**
  * WPA2 enterprise user identity/username. Use value from Vault.	This field will not be published by terraform import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#identity Edgenode#identity}
  */
  readonly identity?: string;
  /**
  * Key management scheme:
  * NETWORK_WIFIKEY_SCHEME_WPAPSK
  * NETWORK_WIFIKEY_SCHEME_WPAEAPPSK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#key_scheme Edgenode#key_scheme}
  */
  readonly keyScheme?: string;
  /**
  * Priority of connection, default is 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#priority Edgenode#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#wifi_ssid Edgenode#wifi_ssid}
  */
  readonly wifiSsid?: string;
}

export function edgenodeInterfacesAdapterSpecificNetWirelessWifiToTerraform(struct?: EdgenodeInterfacesAdapterSpecificNetWirelessWifi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity: cdktf.stringToTerraform(struct!.identity),
    key_scheme: cdktf.stringToTerraform(struct!.keyScheme),
    priority: cdktf.numberToTerraform(struct!.priority),
    wifi_ssid: cdktf.stringToTerraform(struct!.wifiSsid),
  }
}


export function edgenodeInterfacesAdapterSpecificNetWirelessWifiToHclTerraform(struct?: EdgenodeInterfacesAdapterSpecificNetWirelessWifi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity: {
      value: cdktf.stringToHclTerraform(struct!.identity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_scheme: {
      value: cdktf.stringToHclTerraform(struct!.keyScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wifi_ssid: {
      value: cdktf.stringToHclTerraform(struct!.wifiSsid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeInterfacesAdapterSpecificNetWirelessWifiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeInterfacesAdapterSpecificNetWirelessWifi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identity !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity;
    }
    if (this._keyScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyScheme = this._keyScheme;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._wifiSsid !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiSsid = this._wifiSsid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeInterfacesAdapterSpecificNetWirelessWifi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identity = undefined;
      this._keyScheme = undefined;
      this._priority = undefined;
      this._wifiSsid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identity = value.identity;
      this._keyScheme = value.keyScheme;
      this._priority = value.priority;
      this._wifiSsid = value.wifiSsid;
    }
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // key_scheme - computed: false, optional: true, required: false
  private _keyScheme?: string; 
  public get keyScheme() {
    return this.getStringAttribute('key_scheme');
  }
  public set keyScheme(value: string) {
    this._keyScheme = value;
  }
  public resetKeyScheme() {
    this._keyScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySchemeInput() {
    return this._keyScheme;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // wifi_ssid - computed: false, optional: true, required: false
  private _wifiSsid?: string; 
  public get wifiSsid() {
    return this.getStringAttribute('wifi_ssid');
  }
  public set wifiSsid(value: string) {
    this._wifiSsid = value;
  }
  public resetWifiSsid() {
    this._wifiSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiSsidInput() {
    return this._wifiSsid;
  }
}

export class EdgenodeInterfacesAdapterSpecificNetWirelessWifiList extends cdktf.ComplexList {
  public internalValue? : EdgenodeInterfacesAdapterSpecificNetWirelessWifi[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeInterfacesAdapterSpecificNetWirelessWifiOutputReference {
    return new EdgenodeInterfacesAdapterSpecificNetWirelessWifiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeInterfacesAdapterSpecificNetWireless {
  /**
  * Type of Wireless Network:
  * NETWORK_WIRELESS_TYPE_WIFI
  * NETWORK_WIRELESS_TYPE_CELLULAR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#type Edgenode#type}
  */
  readonly type?: string;
  /**
  * cellular block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#cellular Edgenode#cellular}
  */
  readonly cellular?: EdgenodeInterfacesAdapterSpecificNetWirelessCellular[] | cdktf.IResolvable;
  /**
  * wifi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#wifi Edgenode#wifi}
  */
  readonly wifi?: EdgenodeInterfacesAdapterSpecificNetWirelessWifi[] | cdktf.IResolvable;
}

export function edgenodeInterfacesAdapterSpecificNetWirelessToTerraform(struct?: EdgenodeInterfacesAdapterSpecificNetWireless | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cellular: cdktf.listMapper(edgenodeInterfacesAdapterSpecificNetWirelessCellularToTerraform, true)(struct!.cellular),
    wifi: cdktf.listMapper(edgenodeInterfacesAdapterSpecificNetWirelessWifiToTerraform, true)(struct!.wifi),
  }
}


export function edgenodeInterfacesAdapterSpecificNetWirelessToHclTerraform(struct?: EdgenodeInterfacesAdapterSpecificNetWireless | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cellular: {
      value: cdktf.listMapperHcl(edgenodeInterfacesAdapterSpecificNetWirelessCellularToHclTerraform, true)(struct!.cellular),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeInterfacesAdapterSpecificNetWirelessCellularList",
    },
    wifi: {
      value: cdktf.listMapperHcl(edgenodeInterfacesAdapterSpecificNetWirelessWifiToHclTerraform, true)(struct!.wifi),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeInterfacesAdapterSpecificNetWirelessWifiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeInterfacesAdapterSpecificNetWirelessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeInterfacesAdapterSpecificNetWireless | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cellular?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cellular = this._cellular?.internalValue;
    }
    if (this._wifi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifi = this._wifi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeInterfacesAdapterSpecificNetWireless | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._cellular.internalValue = undefined;
      this._wifi.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._cellular.internalValue = value.cellular;
      this._wifi.internalValue = value.wifi;
    }
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

  // cellular - computed: false, optional: true, required: false
  private _cellular = new EdgenodeInterfacesAdapterSpecificNetWirelessCellularList(this, "cellular", false);
  public get cellular() {
    return this._cellular;
  }
  public putCellular(value: EdgenodeInterfacesAdapterSpecificNetWirelessCellular[] | cdktf.IResolvable) {
    this._cellular.internalValue = value;
  }
  public resetCellular() {
    this._cellular.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellularInput() {
    return this._cellular.internalValue;
  }

  // wifi - computed: false, optional: true, required: false
  private _wifi = new EdgenodeInterfacesAdapterSpecificNetWirelessWifiList(this, "wifi", false);
  public get wifi() {
    return this._wifi;
  }
  public putWifi(value: EdgenodeInterfacesAdapterSpecificNetWirelessWifi[] | cdktf.IResolvable) {
    this._wifi.internalValue = value;
  }
  public resetWifi() {
    this._wifi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiInput() {
    return this._wifi.internalValue;
  }
}

export class EdgenodeInterfacesAdapterSpecificNetWirelessList extends cdktf.ComplexList {
  public internalValue? : EdgenodeInterfacesAdapterSpecificNetWireless[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeInterfacesAdapterSpecificNetWirelessOutputReference {
    return new EdgenodeInterfacesAdapterSpecificNetWirelessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeInterfacesAdapterSpecificNet {
  /**
  * Detailed description of the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#description Edgenode#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#enterprise_default Edgenode#enterprise_default}
  */
  readonly enterpriseDefault?: boolean | cdktf.IResolvable;
  /**
  * Kind of network:
  * NETWORK_KIND_V4
  * NETWORK_KIND_V6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#kind Edgenode#kind}
  */
  readonly kind?: string;
  /**
  * Maximum Transmission Unit (MTU) for the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#mtu Edgenode#mtu}
  */
  readonly mtu?: number;
  /**
  * User defined name of the network, unique across the enterprise. Once object is created, name can’t be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#name Edgenode#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#project_id Edgenode#project_id}
  */
  readonly projectId?: string;
  /**
  * User defined title of the network. Title can be changed at any time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#title Edgenode#title}
  */
  readonly title?: string;
  /**
  * dns_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#dns_list Edgenode#dns_list}
  */
  readonly dnsList?: EdgenodeInterfacesAdapterSpecificNetDnsListStruct[] | cdktf.IResolvable;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#ip Edgenode#ip}
  */
  readonly ip?: EdgenodeInterfacesAdapterSpecificNetIp[] | cdktf.IResolvable;
  /**
  * proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#proxy Edgenode#proxy}
  */
  readonly proxy?: EdgenodeInterfacesAdapterSpecificNetProxy[] | cdktf.IResolvable;
  /**
  * revision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#revision Edgenode#revision}
  */
  readonly revision?: EdgenodeInterfacesAdapterSpecificNetRevision[] | cdktf.IResolvable;
  /**
  * wireless block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#wireless Edgenode#wireless}
  */
  readonly wireless?: EdgenodeInterfacesAdapterSpecificNetWireless[] | cdktf.IResolvable;
}

export function edgenodeInterfacesAdapterSpecificNetToTerraform(struct?: EdgenodeInterfacesAdapterSpecificNet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enterprise_default: cdktf.booleanToTerraform(struct!.enterpriseDefault),
    kind: cdktf.stringToTerraform(struct!.kind),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    title: cdktf.stringToTerraform(struct!.title),
    dns_list: cdktf.listMapper(edgenodeInterfacesAdapterSpecificNetDnsListStructToTerraform, true)(struct!.dnsList),
    ip: cdktf.listMapper(edgenodeInterfacesAdapterSpecificNetIpToTerraform, true)(struct!.ip),
    proxy: cdktf.listMapper(edgenodeInterfacesAdapterSpecificNetProxyToTerraform, true)(struct!.proxy),
    revision: cdktf.listMapper(edgenodeInterfacesAdapterSpecificNetRevisionToTerraform, true)(struct!.revision),
    wireless: cdktf.listMapper(edgenodeInterfacesAdapterSpecificNetWirelessToTerraform, true)(struct!.wireless),
  }
}


export function edgenodeInterfacesAdapterSpecificNetToHclTerraform(struct?: EdgenodeInterfacesAdapterSpecificNet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enterprise_default: {
      value: cdktf.booleanToHclTerraform(struct!.enterpriseDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_list: {
      value: cdktf.listMapperHcl(edgenodeInterfacesAdapterSpecificNetDnsListStructToHclTerraform, true)(struct!.dnsList),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeInterfacesAdapterSpecificNetDnsListStructList",
    },
    ip: {
      value: cdktf.listMapperHcl(edgenodeInterfacesAdapterSpecificNetIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeInterfacesAdapterSpecificNetIpList",
    },
    proxy: {
      value: cdktf.listMapperHcl(edgenodeInterfacesAdapterSpecificNetProxyToHclTerraform, true)(struct!.proxy),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeInterfacesAdapterSpecificNetProxyList",
    },
    revision: {
      value: cdktf.listMapperHcl(edgenodeInterfacesAdapterSpecificNetRevisionToHclTerraform, true)(struct!.revision),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeInterfacesAdapterSpecificNetRevisionList",
    },
    wireless: {
      value: cdktf.listMapperHcl(edgenodeInterfacesAdapterSpecificNetWirelessToHclTerraform, true)(struct!.wireless),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeInterfacesAdapterSpecificNetWirelessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeInterfacesAdapterSpecificNetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeInterfacesAdapterSpecificNet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enterpriseDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.enterpriseDefault = this._enterpriseDefault;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._dnsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsList = this._dnsList?.internalValue;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._revision?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision?.internalValue;
    }
    if (this._wireless?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wireless = this._wireless?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeInterfacesAdapterSpecificNet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enterpriseDefault = undefined;
      this._kind = undefined;
      this._mtu = undefined;
      this._name = undefined;
      this._projectId = undefined;
      this._title = undefined;
      this._dnsList.internalValue = undefined;
      this._ip.internalValue = undefined;
      this._proxy.internalValue = undefined;
      this._revision.internalValue = undefined;
      this._wireless.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enterpriseDefault = value.enterpriseDefault;
      this._kind = value.kind;
      this._mtu = value.mtu;
      this._name = value.name;
      this._projectId = value.projectId;
      this._title = value.title;
      this._dnsList.internalValue = value.dnsList;
      this._ip.internalValue = value.ip;
      this._proxy.internalValue = value.proxy;
      this._revision.internalValue = value.revision;
      this._wireless.internalValue = value.wireless;
    }
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

  // enterprise_default - computed: false, optional: true, required: false
  private _enterpriseDefault?: boolean | cdktf.IResolvable; 
  public get enterpriseDefault() {
    return this.getBooleanAttribute('enterprise_default');
  }
  public set enterpriseDefault(value: boolean | cdktf.IResolvable) {
    this._enterpriseDefault = value;
  }
  public resetEnterpriseDefault() {
    this._enterpriseDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseDefaultInput() {
    return this._enterpriseDefault;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // dns_list - computed: false, optional: true, required: false
  private _dnsList = new EdgenodeInterfacesAdapterSpecificNetDnsListStructList(this, "dns_list", false);
  public get dnsList() {
    return this._dnsList;
  }
  public putDnsList(value: EdgenodeInterfacesAdapterSpecificNetDnsListStruct[] | cdktf.IResolvable) {
    this._dnsList.internalValue = value;
  }
  public resetDnsList() {
    this._dnsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsListInput() {
    return this._dnsList.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new EdgenodeInterfacesAdapterSpecificNetIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
  public putIp(value: EdgenodeInterfacesAdapterSpecificNetIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new EdgenodeInterfacesAdapterSpecificNetProxyList(this, "proxy", false);
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: EdgenodeInterfacesAdapterSpecificNetProxy[] | cdktf.IResolvable) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // revision - computed: false, optional: true, required: false
  private _revision = new EdgenodeInterfacesAdapterSpecificNetRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }
  public putRevision(value: EdgenodeInterfacesAdapterSpecificNetRevision[] | cdktf.IResolvable) {
    this._revision.internalValue = value;
  }
  public resetRevision() {
    this._revision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision.internalValue;
  }

  // wireless - computed: false, optional: true, required: false
  private _wireless = new EdgenodeInterfacesAdapterSpecificNetWirelessList(this, "wireless", false);
  public get wireless() {
    return this._wireless;
  }
  public putWireless(value: EdgenodeInterfacesAdapterSpecificNetWireless[] | cdktf.IResolvable) {
    this._wireless.internalValue = value;
  }
  public resetWireless() {
    this._wireless.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wirelessInput() {
    return this._wireless.internalValue;
  }
}

export class EdgenodeInterfacesAdapterSpecificNetList extends cdktf.ComplexList {
  public internalValue? : EdgenodeInterfacesAdapterSpecificNet[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeInterfacesAdapterSpecificNetOutputReference {
    return new EdgenodeInterfacesAdapterSpecificNetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeInterfaces {
  /**
  * Allow the local operator to make (limited) configuration changes to this network adapter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#allow_local_modifications Edgenode#allow_local_modifications}
  */
  readonly allowLocalModifications?: boolean | cdktf.IResolvable;
  /**
  * cost of using this interface. Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#cost Edgenode#cost}
  */
  readonly cost?: number;
  /**
  * Adapter Usage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#intf_usage Edgenode#intf_usage}
  */
  readonly intfUsage?: string;
  /**
  * name of interface in the manifest to which this network or adapter maps to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#intfname Edgenode#intfname}
  */
  readonly intfname: string;
  /**
  * IP address: we will be needing this in cae of static network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#ipaddr Edgenode#ipaddr}
  */
  readonly ipaddr?: string;
  /**
  * mac address needs to be over-written in some cases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#macaddr Edgenode#macaddr}
  */
  readonly macaddr?: string;
  /**
  * Network DHCP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#net_dhcp Edgenode#net_dhcp}
  */
  readonly netDhcp?: string;
  /**
  * network identifier has to have value if the netname is not empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#netid Edgenode#netid}
  */
  readonly netid?: string;
  /**
  * network name: if attaching a network use netname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#netname Edgenode#netname}
  */
  readonly netname?: string;
  /**
  * A set of user-defined shared labels attached to the adapter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#shared_labels Edgenode#shared_labels}
  */
  readonly sharedLabels?: string[];
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#tags Edgenode#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Z Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#ztype Edgenode#ztype}
  */
  readonly ztype?: string;
  /**
  * adapter_specific_net block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#adapter_specific_net Edgenode#adapter_specific_net}
  */
  readonly adapterSpecificNet?: EdgenodeInterfacesAdapterSpecificNet[] | cdktf.IResolvable;
}

export function edgenodeInterfacesToTerraform(struct?: EdgenodeInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_local_modifications: cdktf.booleanToTerraform(struct!.allowLocalModifications),
    cost: cdktf.numberToTerraform(struct!.cost),
    intf_usage: cdktf.stringToTerraform(struct!.intfUsage),
    intfname: cdktf.stringToTerraform(struct!.intfname),
    ipaddr: cdktf.stringToTerraform(struct!.ipaddr),
    macaddr: cdktf.stringToTerraform(struct!.macaddr),
    net_dhcp: cdktf.stringToTerraform(struct!.netDhcp),
    netid: cdktf.stringToTerraform(struct!.netid),
    netname: cdktf.stringToTerraform(struct!.netname),
    shared_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sharedLabels),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    ztype: cdktf.stringToTerraform(struct!.ztype),
    adapter_specific_net: cdktf.listMapper(edgenodeInterfacesAdapterSpecificNetToTerraform, true)(struct!.adapterSpecificNet),
  }
}


export function edgenodeInterfacesToHclTerraform(struct?: EdgenodeInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_local_modifications: {
      value: cdktf.booleanToHclTerraform(struct!.allowLocalModifications),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    intf_usage: {
      value: cdktf.stringToHclTerraform(struct!.intfUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intfname: {
      value: cdktf.stringToHclTerraform(struct!.intfname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipaddr: {
      value: cdktf.stringToHclTerraform(struct!.ipaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    macaddr: {
      value: cdktf.stringToHclTerraform(struct!.macaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    net_dhcp: {
      value: cdktf.stringToHclTerraform(struct!.netDhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netid: {
      value: cdktf.stringToHclTerraform(struct!.netid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netname: {
      value: cdktf.stringToHclTerraform(struct!.netname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sharedLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ztype: {
      value: cdktf.stringToHclTerraform(struct!.ztype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adapter_specific_net: {
      value: cdktf.listMapperHcl(edgenodeInterfacesAdapterSpecificNetToHclTerraform, true)(struct!.adapterSpecificNet),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeInterfacesAdapterSpecificNetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowLocalModifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowLocalModifications = this._allowLocalModifications;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._intfUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.intfUsage = this._intfUsage;
    }
    if (this._intfname !== undefined) {
      hasAnyValues = true;
      internalValueResult.intfname = this._intfname;
    }
    if (this._ipaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddr = this._ipaddr;
    }
    if (this._macaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.macaddr = this._macaddr;
    }
    if (this._netDhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.netDhcp = this._netDhcp;
    }
    if (this._netid !== undefined) {
      hasAnyValues = true;
      internalValueResult.netid = this._netid;
    }
    if (this._netname !== undefined) {
      hasAnyValues = true;
      internalValueResult.netname = this._netname;
    }
    if (this._sharedLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedLabels = this._sharedLabels;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._ztype !== undefined) {
      hasAnyValues = true;
      internalValueResult.ztype = this._ztype;
    }
    if (this._adapterSpecificNet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adapterSpecificNet = this._adapterSpecificNet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowLocalModifications = undefined;
      this._cost = undefined;
      this._intfUsage = undefined;
      this._intfname = undefined;
      this._ipaddr = undefined;
      this._macaddr = undefined;
      this._netDhcp = undefined;
      this._netid = undefined;
      this._netname = undefined;
      this._sharedLabels = undefined;
      this._tags = undefined;
      this._ztype = undefined;
      this._adapterSpecificNet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowLocalModifications = value.allowLocalModifications;
      this._cost = value.cost;
      this._intfUsage = value.intfUsage;
      this._intfname = value.intfname;
      this._ipaddr = value.ipaddr;
      this._macaddr = value.macaddr;
      this._netDhcp = value.netDhcp;
      this._netid = value.netid;
      this._netname = value.netname;
      this._sharedLabels = value.sharedLabels;
      this._tags = value.tags;
      this._ztype = value.ztype;
      this._adapterSpecificNet.internalValue = value.adapterSpecificNet;
    }
  }

  // allow_local_modifications - computed: false, optional: true, required: false
  private _allowLocalModifications?: boolean | cdktf.IResolvable; 
  public get allowLocalModifications() {
    return this.getBooleanAttribute('allow_local_modifications');
  }
  public set allowLocalModifications(value: boolean | cdktf.IResolvable) {
    this._allowLocalModifications = value;
  }
  public resetAllowLocalModifications() {
    this._allowLocalModifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowLocalModificationsInput() {
    return this._allowLocalModifications;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // intf_usage - computed: false, optional: true, required: false
  private _intfUsage?: string; 
  public get intfUsage() {
    return this.getStringAttribute('intf_usage');
  }
  public set intfUsage(value: string) {
    this._intfUsage = value;
  }
  public resetIntfUsage() {
    this._intfUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfUsageInput() {
    return this._intfUsage;
  }

  // intfname - computed: false, optional: false, required: true
  private _intfname?: string; 
  public get intfname() {
    return this.getStringAttribute('intfname');
  }
  public set intfname(value: string) {
    this._intfname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intfnameInput() {
    return this._intfname;
  }

  // ipaddr - computed: false, optional: true, required: false
  private _ipaddr?: string; 
  public get ipaddr() {
    return this.getStringAttribute('ipaddr');
  }
  public set ipaddr(value: string) {
    this._ipaddr = value;
  }
  public resetIpaddr() {
    this._ipaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddrInput() {
    return this._ipaddr;
  }

  // macaddr - computed: false, optional: true, required: false
  private _macaddr?: string; 
  public get macaddr() {
    return this.getStringAttribute('macaddr');
  }
  public set macaddr(value: string) {
    this._macaddr = value;
  }
  public resetMacaddr() {
    this._macaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macaddrInput() {
    return this._macaddr;
  }

  // net_dhcp - computed: false, optional: true, required: false
  private _netDhcp?: string; 
  public get netDhcp() {
    return this.getStringAttribute('net_dhcp');
  }
  public set netDhcp(value: string) {
    this._netDhcp = value;
  }
  public resetNetDhcp() {
    this._netDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netDhcpInput() {
    return this._netDhcp;
  }

  // netid - computed: true, optional: true, required: false
  private _netid?: string; 
  public get netid() {
    return this.getStringAttribute('netid');
  }
  public set netid(value: string) {
    this._netid = value;
  }
  public resetNetid() {
    this._netid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netidInput() {
    return this._netid;
  }

  // netname - computed: false, optional: true, required: false
  private _netname?: string; 
  public get netname() {
    return this.getStringAttribute('netname');
  }
  public set netname(value: string) {
    this._netname = value;
  }
  public resetNetname() {
    this._netname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netnameInput() {
    return this._netname;
  }

  // shared_labels - computed: false, optional: true, required: false
  private _sharedLabels?: string[]; 
  public get sharedLabels() {
    return this.getListAttribute('shared_labels');
  }
  public set sharedLabels(value: string[]) {
    this._sharedLabels = value;
  }
  public resetSharedLabels() {
    this._sharedLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedLabelsInput() {
    return this._sharedLabels;
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

  // ztype - computed: false, optional: true, required: false
  private _ztype?: string; 
  public get ztype() {
    return this.getStringAttribute('ztype');
  }
  public set ztype(value: string) {
    this._ztype = value;
  }
  public resetZtype() {
    this._ztype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztypeInput() {
    return this._ztype;
  }

  // adapter_specific_net - computed: false, optional: true, required: false
  private _adapterSpecificNet = new EdgenodeInterfacesAdapterSpecificNetList(this, "adapter_specific_net", false);
  public get adapterSpecificNet() {
    return this._adapterSpecificNet;
  }
  public putAdapterSpecificNet(value: EdgenodeInterfacesAdapterSpecificNet[] | cdktf.IResolvable) {
    this._adapterSpecificNet.internalValue = value;
  }
  public resetAdapterSpecificNet() {
    this._adapterSpecificNet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adapterSpecificNetInput() {
    return this._adapterSpecificNet.internalValue;
  }
}

export class EdgenodeInterfacesList extends cdktf.ComplexList {
  public internalValue? : EdgenodeInterfaces[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeInterfacesOutputReference {
    return new EdgenodeInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeRevision {
}

export function edgenodeRevisionToTerraform(struct?: EdgenodeRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function edgenodeRevisionToHclTerraform(struct?: EdgenodeRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EdgenodeRevisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeRevision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeRevision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class EdgenodeRevisionList extends cdktf.ComplexList {
  public internalValue? : EdgenodeRevision[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeRevisionOutputReference {
    return new EdgenodeRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeVlanAdaptersInterfaceAdapterSpecificNetDnsListStruct {
  /**
  * Addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#addrs Edgenode#addrs}
  */
  readonly addrs?: string[];
  /**
  * Host name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#hostname Edgenode#hostname}
  */
  readonly hostname?: string;
}

export function edgenodeVlanAdaptersInterfaceAdapterSpecificNetDnsListStructToTerraform(struct?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetDnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addrs),
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function edgenodeVlanAdaptersInterfaceAdapterSpecificNetDnsListStructToHclTerraform(struct?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetDnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeVlanAdaptersInterfaceAdapterSpecificNetDnsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeVlanAdaptersInterfaceAdapterSpecificNetDnsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.addrs = this._addrs;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetDnsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addrs = undefined;
      this._hostname = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addrs = value.addrs;
      this._hostname = value.hostname;
    }
  }

  // addrs - computed: false, optional: true, required: false
  private _addrs?: string[]; 
  public get addrs() {
    return this.getListAttribute('addrs');
  }
  public set addrs(value: string[]) {
    this._addrs = value;
  }
  public resetAddrs() {
    this._addrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrsInput() {
    return this._addrs;
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
}

export class EdgenodeVlanAdaptersInterfaceAdapterSpecificNetDnsListStructList extends cdktf.ComplexList {
  public internalValue? : EdgenodeVlanAdaptersInterfaceAdapterSpecificNetDnsListStruct[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeVlanAdaptersInterfaceAdapterSpecificNetDnsListStructOutputReference {
    return new EdgenodeVlanAdaptersInterfaceAdapterSpecificNetDnsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIpDhcpRange {
  /**
  * ending IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#end Edgenode#end}
  */
  readonly end?: string;
  /**
  * starting IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#start Edgenode#start}
  */
  readonly start?: string;
}

export function edgenodeVlanAdaptersInterfaceAdapterSpecificNetIpDhcpRangeToTerraform(struct?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIpDhcpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.stringToTerraform(struct!.end),
    start: cdktf.stringToTerraform(struct!.start),
  }
}


export function edgenodeVlanAdaptersInterfaceAdapterSpecificNetIpDhcpRangeToHclTerraform(struct?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIpDhcpRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.stringToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start: {
      value: cdktf.stringToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIpDhcpRangeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIpDhcpRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIpDhcpRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: string; 
  public get end() {
    return this.getStringAttribute('end');
  }
  public set end(value: string) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: string; 
  public get start() {
    return this.getStringAttribute('start');
  }
  public set start(value: string) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

export class EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIpDhcpRangeList extends cdktf.ComplexList {
  public internalValue? : EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIpDhcpRange[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIpDhcpRangeOutputReference {
    return new EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIpDhcpRangeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#deprecated_dhcp Edgenode#deprecated_dhcp}
  */
  readonly deprecatedDhcp?: boolean | cdktf.IResolvable;
  /**
  * DHCP type:
  * NETWORK_DHCP_TYPE_STATIC
  * NETWORK_DHCP_TYPE_PASSTHROUGH
  * NETWORK_DHCP_TYPE_CLIENT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#dhcp Edgenode#dhcp}
  */
  readonly dhcp?: string;
  /**
  * List of IP Addresses of DNS servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#dns Edgenode#dns}
  */
  readonly dns?: string[];
  /**
  * Network domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#domain Edgenode#domain}
  */
  readonly domain?: string;
  /**
  * IP Address of Network Gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#gateway Edgenode#gateway}
  */
  readonly gateway?: string;
  /**
  * Subnet Mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#mask Edgenode#mask}
  */
  readonly mask?: string;
  /**
  * IP Address of NTP Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#ntp Edgenode#ntp}
  */
  readonly ntp?: string;
  /**
  * Subnet address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#subnet Edgenode#subnet}
  */
  readonly subnet?: string;
  /**
  * dhcp_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#dhcp_range Edgenode#dhcp_range}
  */
  readonly dhcpRange?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIpDhcpRange[] | cdktf.IResolvable;
}

export function edgenodeVlanAdaptersInterfaceAdapterSpecificNetIpToTerraform(struct?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deprecated_dhcp: cdktf.booleanToTerraform(struct!.deprecatedDhcp),
    dhcp: cdktf.stringToTerraform(struct!.dhcp),
    dns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dns),
    domain: cdktf.stringToTerraform(struct!.domain),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    mask: cdktf.stringToTerraform(struct!.mask),
    ntp: cdktf.stringToTerraform(struct!.ntp),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    dhcp_range: cdktf.listMapper(edgenodeVlanAdaptersInterfaceAdapterSpecificNetIpDhcpRangeToTerraform, true)(struct!.dhcpRange),
  }
}


export function edgenodeVlanAdaptersInterfaceAdapterSpecificNetIpToHclTerraform(struct?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deprecated_dhcp: {
      value: cdktf.booleanToHclTerraform(struct!.deprecatedDhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dhcp: {
      value: cdktf.stringToHclTerraform(struct!.dhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
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
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ntp: {
      value: cdktf.stringToHclTerraform(struct!.ntp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_range: {
      value: cdktf.listMapperHcl(edgenodeVlanAdaptersInterfaceAdapterSpecificNetIpDhcpRangeToHclTerraform, true)(struct!.dhcpRange),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIpDhcpRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deprecatedDhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprecatedDhcp = this._deprecatedDhcp;
    }
    if (this._dhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp = this._dhcp;
    }
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._ntp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntp = this._ntp;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._dhcpRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpRange = this._dhcpRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deprecatedDhcp = undefined;
      this._dhcp = undefined;
      this._dns = undefined;
      this._domain = undefined;
      this._gateway = undefined;
      this._mask = undefined;
      this._ntp = undefined;
      this._subnet = undefined;
      this._dhcpRange.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deprecatedDhcp = value.deprecatedDhcp;
      this._dhcp = value.dhcp;
      this._dns = value.dns;
      this._domain = value.domain;
      this._gateway = value.gateway;
      this._mask = value.mask;
      this._ntp = value.ntp;
      this._subnet = value.subnet;
      this._dhcpRange.internalValue = value.dhcpRange;
    }
  }

  // deprecated_dhcp - computed: false, optional: true, required: false
  private _deprecatedDhcp?: boolean | cdktf.IResolvable; 
  public get deprecatedDhcp() {
    return this.getBooleanAttribute('deprecated_dhcp');
  }
  public set deprecatedDhcp(value: boolean | cdktf.IResolvable) {
    this._deprecatedDhcp = value;
  }
  public resetDeprecatedDhcp() {
    this._deprecatedDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedDhcpInput() {
    return this._deprecatedDhcp;
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: string; 
  public get dhcp() {
    return this.getStringAttribute('dhcp');
  }
  public set dhcp(value: string) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: string[]; 
  public get dns() {
    return this.getListAttribute('dns');
  }
  public set dns(value: string[]) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
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

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // ntp - computed: false, optional: true, required: false
  private _ntp?: string; 
  public get ntp() {
    return this.getStringAttribute('ntp');
  }
  public set ntp(value: string) {
    this._ntp = value;
  }
  public resetNtp() {
    this._ntp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpInput() {
    return this._ntp;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // dhcp_range - computed: false, optional: true, required: false
  private _dhcpRange = new EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIpDhcpRangeList(this, "dhcp_range", false);
  public get dhcpRange() {
    return this._dhcpRange;
  }
  public putDhcpRange(value: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIpDhcpRange[] | cdktf.IResolvable) {
    this._dhcpRange.internalValue = value;
  }
  public resetDhcpRange() {
    this._dhcpRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpRangeInput() {
    return this._dhcpRange.internalValue;
  }
}

export class EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIpList extends cdktf.ComplexList {
  public internalValue? : EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIp[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIpOutputReference {
    return new EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyProxies {
  /**
  * Net Proxy Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#port Edgenode#port}
  */
  readonly port?: number;
  /**
  * Net Proxy protocol:
  * NETWORK_PROXY_PROTO_HTTP
  * NETWORK_PROXY_PROTO_HTTPS
  * NETWORK_PROXY_PROTO_SOCKS
  * NETWORK_PROXY_PROTO_FTP
  * NETWORK_PROXY_PROTO_OTHER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#proto Edgenode#proto}
  */
  readonly proto?: string;
  /**
  * Net Proxy Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#server Edgenode#server}
  */
  readonly server?: string;
}

export function edgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyProxiesToTerraform(struct?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyProxies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    proto: cdktf.stringToTerraform(struct!.proto),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function edgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyProxiesToHclTerraform(struct?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyProxies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proto: {
      value: cdktf.stringToHclTerraform(struct!.proto),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyProxiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyProxies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proto !== undefined) {
      hasAnyValues = true;
      internalValueResult.proto = this._proto;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyProxies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._proto = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._proto = value.proto;
      this._server = value.server;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // proto - computed: false, optional: true, required: false
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  public resetProto() {
    this._proto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
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
}

export class EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyProxiesList extends cdktf.ComplexList {
  public internalValue? : EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyProxies[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyProxiesOutputReference {
    return new EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyProxiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxy {
  /**
  * Proxy exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#exceptions Edgenode#exceptions}
  */
  readonly exceptions?: string;
  /**
  * Enable WPAD (Web Proxy Auto Discovery) protocol to discover and download PAC file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#network_proxy Edgenode#network_proxy}
  */
  readonly networkProxy?: boolean | cdktf.IResolvable;
  /**
  * Network Proxy Certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#network_proxy_certs Edgenode#network_proxy_certs}
  */
  readonly networkProxyCerts?: string[];
  /**
  * URL for wpad.dat file to be downloaded. Used when network_proxy is set to False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#network_proxy_url Edgenode#network_proxy_url}
  */
  readonly networkProxyUrl?: string;
  /**
  * Proxy configuration in a pacfile. Used when network_proxy is set to False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#pacfile Edgenode#pacfile}
  */
  readonly pacfile?: string;
  /**
  * proxies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#proxies Edgenode#proxies}
  */
  readonly proxies?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyProxies[] | cdktf.IResolvable;
}

export function edgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyToTerraform(struct?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exceptions: cdktf.stringToTerraform(struct!.exceptions),
    network_proxy: cdktf.booleanToTerraform(struct!.networkProxy),
    network_proxy_certs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkProxyCerts),
    network_proxy_url: cdktf.stringToTerraform(struct!.networkProxyUrl),
    pacfile: cdktf.stringToTerraform(struct!.pacfile),
    proxies: cdktf.listMapper(edgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyProxiesToTerraform, true)(struct!.proxies),
  }
}


export function edgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyToHclTerraform(struct?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exceptions: {
      value: cdktf.stringToHclTerraform(struct!.exceptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.networkProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network_proxy_certs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkProxyCerts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    network_proxy_url: {
      value: cdktf.stringToHclTerraform(struct!.networkProxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pacfile: {
      value: cdktf.stringToHclTerraform(struct!.pacfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proxies: {
      value: cdktf.listMapperHcl(edgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyProxiesToHclTerraform, true)(struct!.proxies),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyProxiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exceptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceptions = this._exceptions;
    }
    if (this._networkProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProxy = this._networkProxy;
    }
    if (this._networkProxyCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProxyCerts = this._networkProxyCerts;
    }
    if (this._networkProxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkProxyUrl = this._networkProxyUrl;
    }
    if (this._pacfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.pacfile = this._pacfile;
    }
    if (this._proxies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxies = this._proxies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exceptions = undefined;
      this._networkProxy = undefined;
      this._networkProxyCerts = undefined;
      this._networkProxyUrl = undefined;
      this._pacfile = undefined;
      this._proxies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exceptions = value.exceptions;
      this._networkProxy = value.networkProxy;
      this._networkProxyCerts = value.networkProxyCerts;
      this._networkProxyUrl = value.networkProxyUrl;
      this._pacfile = value.pacfile;
      this._proxies.internalValue = value.proxies;
    }
  }

  // exceptions - computed: false, optional: true, required: false
  private _exceptions?: string; 
  public get exceptions() {
    return this.getStringAttribute('exceptions');
  }
  public set exceptions(value: string) {
    this._exceptions = value;
  }
  public resetExceptions() {
    this._exceptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionsInput() {
    return this._exceptions;
  }

  // network_proxy - computed: false, optional: true, required: false
  private _networkProxy?: boolean | cdktf.IResolvable; 
  public get networkProxy() {
    return this.getBooleanAttribute('network_proxy');
  }
  public set networkProxy(value: boolean | cdktf.IResolvable) {
    this._networkProxy = value;
  }
  public resetNetworkProxy() {
    this._networkProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProxyInput() {
    return this._networkProxy;
  }

  // network_proxy_certs - computed: false, optional: true, required: false
  private _networkProxyCerts?: string[]; 
  public get networkProxyCerts() {
    return this.getListAttribute('network_proxy_certs');
  }
  public set networkProxyCerts(value: string[]) {
    this._networkProxyCerts = value;
  }
  public resetNetworkProxyCerts() {
    this._networkProxyCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProxyCertsInput() {
    return this._networkProxyCerts;
  }

  // network_proxy_url - computed: false, optional: true, required: false
  private _networkProxyUrl?: string; 
  public get networkProxyUrl() {
    return this.getStringAttribute('network_proxy_url');
  }
  public set networkProxyUrl(value: string) {
    this._networkProxyUrl = value;
  }
  public resetNetworkProxyUrl() {
    this._networkProxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkProxyUrlInput() {
    return this._networkProxyUrl;
  }

  // pacfile - computed: false, optional: true, required: false
  private _pacfile?: string; 
  public get pacfile() {
    return this.getStringAttribute('pacfile');
  }
  public set pacfile(value: string) {
    this._pacfile = value;
  }
  public resetPacfile() {
    this._pacfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pacfileInput() {
    return this._pacfile;
  }

  // proxies - computed: false, optional: true, required: false
  private _proxies = new EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyProxiesList(this, "proxies", false);
  public get proxies() {
    return this._proxies;
  }
  public putProxies(value: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyProxies[] | cdktf.IResolvable) {
    this._proxies.internalValue = value;
  }
  public resetProxies() {
    this._proxies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxiesInput() {
    return this._proxies.internalValue;
  }
}

export class EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyList extends cdktf.ComplexList {
  public internalValue? : EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxy[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyOutputReference {
    return new EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeVlanAdaptersInterfaceAdapterSpecificNetRevision {
}

export function edgenodeVlanAdaptersInterfaceAdapterSpecificNetRevisionToTerraform(struct?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function edgenodeVlanAdaptersInterfaceAdapterSpecificNetRevisionToHclTerraform(struct?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetRevision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class EdgenodeVlanAdaptersInterfaceAdapterSpecificNetRevisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeVlanAdaptersInterfaceAdapterSpecificNetRevision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetRevision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curr - computed: true, optional: false, required: false
  public get curr() {
    return this.getStringAttribute('curr');
  }

  // prev - computed: true, optional: false, required: false
  public get prev() {
    return this.getStringAttribute('prev');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
}

export class EdgenodeVlanAdaptersInterfaceAdapterSpecificNetRevisionList extends cdktf.ComplexList {
  public internalValue? : EdgenodeVlanAdaptersInterfaceAdapterSpecificNetRevision[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeVlanAdaptersInterfaceAdapterSpecificNetRevisionOutputReference {
    return new EdgenodeVlanAdaptersInterfaceAdapterSpecificNetRevisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessCellular {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#apn Edgenode#apn}
  */
  readonly apn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#location_tracking Edgenode#location_tracking}
  */
  readonly locationTracking?: boolean | cdktf.IResolvable;
}

export function edgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessCellularToTerraform(struct?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessCellular | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apn: cdktf.stringToTerraform(struct!.apn),
    location_tracking: cdktf.booleanToTerraform(struct!.locationTracking),
  }
}


export function edgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessCellularToHclTerraform(struct?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessCellular | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apn: {
      value: cdktf.stringToHclTerraform(struct!.apn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_tracking: {
      value: cdktf.booleanToHclTerraform(struct!.locationTracking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessCellularOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessCellular | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apn !== undefined) {
      hasAnyValues = true;
      internalValueResult.apn = this._apn;
    }
    if (this._locationTracking !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationTracking = this._locationTracking;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessCellular | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apn = undefined;
      this._locationTracking = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apn = value.apn;
      this._locationTracking = value.locationTracking;
    }
  }

  // apn - computed: false, optional: true, required: false
  private _apn?: string; 
  public get apn() {
    return this.getStringAttribute('apn');
  }
  public set apn(value: string) {
    this._apn = value;
  }
  public resetApn() {
    this._apn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnInput() {
    return this._apn;
  }

  // location_tracking - computed: true, optional: true, required: false
  private _locationTracking?: boolean | cdktf.IResolvable; 
  public get locationTracking() {
    return this.getBooleanAttribute('location_tracking');
  }
  public set locationTracking(value: boolean | cdktf.IResolvable) {
    this._locationTracking = value;
  }
  public resetLocationTracking() {
    this._locationTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationTrackingInput() {
    return this._locationTracking;
  }
}

export class EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessCellularList extends cdktf.ComplexList {
  public internalValue? : EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessCellular[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessCellularOutputReference {
    return new EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessCellularOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessWifi {
  /**
  * WPA2 enterprise user identity/username. Use value from Vault.	This field will not be published by terraform import
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#identity Edgenode#identity}
  */
  readonly identity?: string;
  /**
  * Key management scheme:
  * NETWORK_WIFIKEY_SCHEME_WPAPSK
  * NETWORK_WIFIKEY_SCHEME_WPAEAPPSK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#key_scheme Edgenode#key_scheme}
  */
  readonly keyScheme?: string;
  /**
  * Priority of connection, default is 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#priority Edgenode#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#wifi_ssid Edgenode#wifi_ssid}
  */
  readonly wifiSsid?: string;
}

export function edgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessWifiToTerraform(struct?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessWifi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity: cdktf.stringToTerraform(struct!.identity),
    key_scheme: cdktf.stringToTerraform(struct!.keyScheme),
    priority: cdktf.numberToTerraform(struct!.priority),
    wifi_ssid: cdktf.stringToTerraform(struct!.wifiSsid),
  }
}


export function edgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessWifiToHclTerraform(struct?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessWifi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity: {
      value: cdktf.stringToHclTerraform(struct!.identity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_scheme: {
      value: cdktf.stringToHclTerraform(struct!.keyScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wifi_ssid: {
      value: cdktf.stringToHclTerraform(struct!.wifiSsid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessWifiOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessWifi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identity !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity;
    }
    if (this._keyScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyScheme = this._keyScheme;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._wifiSsid !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifiSsid = this._wifiSsid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessWifi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identity = undefined;
      this._keyScheme = undefined;
      this._priority = undefined;
      this._wifiSsid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identity = value.identity;
      this._keyScheme = value.keyScheme;
      this._priority = value.priority;
      this._wifiSsid = value.wifiSsid;
    }
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // key_scheme - computed: false, optional: true, required: false
  private _keyScheme?: string; 
  public get keyScheme() {
    return this.getStringAttribute('key_scheme');
  }
  public set keyScheme(value: string) {
    this._keyScheme = value;
  }
  public resetKeyScheme() {
    this._keyScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySchemeInput() {
    return this._keyScheme;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // wifi_ssid - computed: false, optional: true, required: false
  private _wifiSsid?: string; 
  public get wifiSsid() {
    return this.getStringAttribute('wifi_ssid');
  }
  public set wifiSsid(value: string) {
    this._wifiSsid = value;
  }
  public resetWifiSsid() {
    this._wifiSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiSsidInput() {
    return this._wifiSsid;
  }
}

export class EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessWifiList extends cdktf.ComplexList {
  public internalValue? : EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessWifi[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessWifiOutputReference {
    return new EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessWifiOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWireless {
  /**
  * Type of Wireless Network:
  * NETWORK_WIRELESS_TYPE_WIFI
  * NETWORK_WIRELESS_TYPE_CELLULAR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#type Edgenode#type}
  */
  readonly type?: string;
  /**
  * cellular block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#cellular Edgenode#cellular}
  */
  readonly cellular?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessCellular[] | cdktf.IResolvable;
  /**
  * wifi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#wifi Edgenode#wifi}
  */
  readonly wifi?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessWifi[] | cdktf.IResolvable;
}

export function edgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessToTerraform(struct?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWireless | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    cellular: cdktf.listMapper(edgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessCellularToTerraform, true)(struct!.cellular),
    wifi: cdktf.listMapper(edgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessWifiToTerraform, true)(struct!.wifi),
  }
}


export function edgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessToHclTerraform(struct?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWireless | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cellular: {
      value: cdktf.listMapperHcl(edgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessCellularToHclTerraform, true)(struct!.cellular),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessCellularList",
    },
    wifi: {
      value: cdktf.listMapperHcl(edgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessWifiToHclTerraform, true)(struct!.wifi),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessWifiList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWireless | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._cellular?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cellular = this._cellular?.internalValue;
    }
    if (this._wifi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wifi = this._wifi?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWireless | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._type = undefined;
      this._cellular.internalValue = undefined;
      this._wifi.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._type = value.type;
      this._cellular.internalValue = value.cellular;
      this._wifi.internalValue = value.wifi;
    }
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

  // cellular - computed: false, optional: true, required: false
  private _cellular = new EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessCellularList(this, "cellular", false);
  public get cellular() {
    return this._cellular;
  }
  public putCellular(value: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessCellular[] | cdktf.IResolvable) {
    this._cellular.internalValue = value;
  }
  public resetCellular() {
    this._cellular.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cellularInput() {
    return this._cellular.internalValue;
  }

  // wifi - computed: false, optional: true, required: false
  private _wifi = new EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessWifiList(this, "wifi", false);
  public get wifi() {
    return this._wifi;
  }
  public putWifi(value: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessWifi[] | cdktf.IResolvable) {
    this._wifi.internalValue = value;
  }
  public resetWifi() {
    this._wifi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiInput() {
    return this._wifi.internalValue;
  }
}

export class EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessList extends cdktf.ComplexList {
  public internalValue? : EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWireless[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessOutputReference {
    return new EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeVlanAdaptersInterfaceAdapterSpecificNet {
  /**
  * Detailed description of the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#description Edgenode#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#enterprise_default Edgenode#enterprise_default}
  */
  readonly enterpriseDefault?: boolean | cdktf.IResolvable;
  /**
  * Kind of network:
  * NETWORK_KIND_V4
  * NETWORK_KIND_V6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#kind Edgenode#kind}
  */
  readonly kind?: string;
  /**
  * Maximum Transmission Unit (MTU) for the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#mtu Edgenode#mtu}
  */
  readonly mtu?: number;
  /**
  * User defined name of the network, unique across the enterprise. Once object is created, name can’t be changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#name Edgenode#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#project_id Edgenode#project_id}
  */
  readonly projectId?: string;
  /**
  * User defined title of the network. Title can be changed at any time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#title Edgenode#title}
  */
  readonly title?: string;
  /**
  * dns_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#dns_list Edgenode#dns_list}
  */
  readonly dnsList?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetDnsListStruct[] | cdktf.IResolvable;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#ip Edgenode#ip}
  */
  readonly ip?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIp[] | cdktf.IResolvable;
  /**
  * proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#proxy Edgenode#proxy}
  */
  readonly proxy?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxy[] | cdktf.IResolvable;
  /**
  * revision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#revision Edgenode#revision}
  */
  readonly revision?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetRevision[] | cdktf.IResolvable;
  /**
  * wireless block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#wireless Edgenode#wireless}
  */
  readonly wireless?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWireless[] | cdktf.IResolvable;
}

export function edgenodeVlanAdaptersInterfaceAdapterSpecificNetToTerraform(struct?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    enterprise_default: cdktf.booleanToTerraform(struct!.enterpriseDefault),
    kind: cdktf.stringToTerraform(struct!.kind),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    name: cdktf.stringToTerraform(struct!.name),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    title: cdktf.stringToTerraform(struct!.title),
    dns_list: cdktf.listMapper(edgenodeVlanAdaptersInterfaceAdapterSpecificNetDnsListStructToTerraform, true)(struct!.dnsList),
    ip: cdktf.listMapper(edgenodeVlanAdaptersInterfaceAdapterSpecificNetIpToTerraform, true)(struct!.ip),
    proxy: cdktf.listMapper(edgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyToTerraform, true)(struct!.proxy),
    revision: cdktf.listMapper(edgenodeVlanAdaptersInterfaceAdapterSpecificNetRevisionToTerraform, true)(struct!.revision),
    wireless: cdktf.listMapper(edgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessToTerraform, true)(struct!.wireless),
  }
}


export function edgenodeVlanAdaptersInterfaceAdapterSpecificNetToHclTerraform(struct?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enterprise_default: {
      value: cdktf.booleanToHclTerraform(struct!.enterpriseDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_list: {
      value: cdktf.listMapperHcl(edgenodeVlanAdaptersInterfaceAdapterSpecificNetDnsListStructToHclTerraform, true)(struct!.dnsList),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeVlanAdaptersInterfaceAdapterSpecificNetDnsListStructList",
    },
    ip: {
      value: cdktf.listMapperHcl(edgenodeVlanAdaptersInterfaceAdapterSpecificNetIpToHclTerraform, true)(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIpList",
    },
    proxy: {
      value: cdktf.listMapperHcl(edgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyToHclTerraform, true)(struct!.proxy),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyList",
    },
    revision: {
      value: cdktf.listMapperHcl(edgenodeVlanAdaptersInterfaceAdapterSpecificNetRevisionToHclTerraform, true)(struct!.revision),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeVlanAdaptersInterfaceAdapterSpecificNetRevisionList",
    },
    wireless: {
      value: cdktf.listMapperHcl(edgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessToHclTerraform, true)(struct!.wireless),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeVlanAdaptersInterfaceAdapterSpecificNetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeVlanAdaptersInterfaceAdapterSpecificNet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enterpriseDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.enterpriseDefault = this._enterpriseDefault;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._dnsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsList = this._dnsList?.internalValue;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._revision?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision?.internalValue;
    }
    if (this._wireless?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wireless = this._wireless?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeVlanAdaptersInterfaceAdapterSpecificNet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._enterpriseDefault = undefined;
      this._kind = undefined;
      this._mtu = undefined;
      this._name = undefined;
      this._projectId = undefined;
      this._title = undefined;
      this._dnsList.internalValue = undefined;
      this._ip.internalValue = undefined;
      this._proxy.internalValue = undefined;
      this._revision.internalValue = undefined;
      this._wireless.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._enterpriseDefault = value.enterpriseDefault;
      this._kind = value.kind;
      this._mtu = value.mtu;
      this._name = value.name;
      this._projectId = value.projectId;
      this._title = value.title;
      this._dnsList.internalValue = value.dnsList;
      this._ip.internalValue = value.ip;
      this._proxy.internalValue = value.proxy;
      this._revision.internalValue = value.revision;
      this._wireless.internalValue = value.wireless;
    }
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

  // enterprise_default - computed: false, optional: true, required: false
  private _enterpriseDefault?: boolean | cdktf.IResolvable; 
  public get enterpriseDefault() {
    return this.getBooleanAttribute('enterprise_default');
  }
  public set enterpriseDefault(value: boolean | cdktf.IResolvable) {
    this._enterpriseDefault = value;
  }
  public resetEnterpriseDefault() {
    this._enterpriseDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enterpriseDefaultInput() {
    return this._enterpriseDefault;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // dns_list - computed: false, optional: true, required: false
  private _dnsList = new EdgenodeVlanAdaptersInterfaceAdapterSpecificNetDnsListStructList(this, "dns_list", false);
  public get dnsList() {
    return this._dnsList;
  }
  public putDnsList(value: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetDnsListStruct[] | cdktf.IResolvable) {
    this._dnsList.internalValue = value;
  }
  public resetDnsList() {
    this._dnsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsListInput() {
    return this._dnsList.internalValue;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIpList(this, "ip", false);
  public get ip() {
    return this._ip;
  }
  public putIp(value: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetIp[] | cdktf.IResolvable) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxyList(this, "proxy", false);
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetProxy[] | cdktf.IResolvable) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // revision - computed: false, optional: true, required: false
  private _revision = new EdgenodeVlanAdaptersInterfaceAdapterSpecificNetRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }
  public putRevision(value: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetRevision[] | cdktf.IResolvable) {
    this._revision.internalValue = value;
  }
  public resetRevision() {
    this._revision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision.internalValue;
  }

  // wireless - computed: false, optional: true, required: false
  private _wireless = new EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWirelessList(this, "wireless", false);
  public get wireless() {
    return this._wireless;
  }
  public putWireless(value: EdgenodeVlanAdaptersInterfaceAdapterSpecificNetWireless[] | cdktf.IResolvable) {
    this._wireless.internalValue = value;
  }
  public resetWireless() {
    this._wireless.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wirelessInput() {
    return this._wireless.internalValue;
  }
}

export class EdgenodeVlanAdaptersInterfaceAdapterSpecificNetList extends cdktf.ComplexList {
  public internalValue? : EdgenodeVlanAdaptersInterfaceAdapterSpecificNet[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeVlanAdaptersInterfaceAdapterSpecificNetOutputReference {
    return new EdgenodeVlanAdaptersInterfaceAdapterSpecificNetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeVlanAdaptersInterface {
  /**
  * Allow the local operator to make (limited) configuration changes to this network adapter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#allow_local_modifications Edgenode#allow_local_modifications}
  */
  readonly allowLocalModifications?: boolean | cdktf.IResolvable;
  /**
  * cost of using this interface. Default is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#cost Edgenode#cost}
  */
  readonly cost?: number;
  /**
  * Adapter Usage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#intf_usage Edgenode#intf_usage}
  */
  readonly intfUsage?: string;
  /**
  * name of interface in the manifest to which this network or adapter maps to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#intfname Edgenode#intfname}
  */
  readonly intfname: string;
  /**
  * IP address: we will be needing this in cae of static network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#ipaddr Edgenode#ipaddr}
  */
  readonly ipaddr?: string;
  /**
  * mac address needs to be over-written in some cases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#macaddr Edgenode#macaddr}
  */
  readonly macaddr?: string;
  /**
  * Network DHCP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#net_dhcp Edgenode#net_dhcp}
  */
  readonly netDhcp?: string;
  /**
  * network identifier has to have value if the netname is not empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#netid Edgenode#netid}
  */
  readonly netid?: string;
  /**
  * network name: if attaching a network use netname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#netname Edgenode#netname}
  */
  readonly netname?: string;
  /**
  * A set of user-defined shared labels attached to the adapter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#shared_labels Edgenode#shared_labels}
  */
  readonly sharedLabels?: string[];
  /**
  * Tags are name/value pairs that enable you to categorize resources. Tag names are case insensitive with max_length 512 and min_length 3. Tag values are case sensitive with max_length 256 and min_length 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#tags Edgenode#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Z Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#ztype Edgenode#ztype}
  */
  readonly ztype?: string;
  /**
  * adapter_specific_net block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#adapter_specific_net Edgenode#adapter_specific_net}
  */
  readonly adapterSpecificNet?: EdgenodeVlanAdaptersInterfaceAdapterSpecificNet[] | cdktf.IResolvable;
}

export function edgenodeVlanAdaptersInterfaceToTerraform(struct?: EdgenodeVlanAdaptersInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_local_modifications: cdktf.booleanToTerraform(struct!.allowLocalModifications),
    cost: cdktf.numberToTerraform(struct!.cost),
    intf_usage: cdktf.stringToTerraform(struct!.intfUsage),
    intfname: cdktf.stringToTerraform(struct!.intfname),
    ipaddr: cdktf.stringToTerraform(struct!.ipaddr),
    macaddr: cdktf.stringToTerraform(struct!.macaddr),
    net_dhcp: cdktf.stringToTerraform(struct!.netDhcp),
    netid: cdktf.stringToTerraform(struct!.netid),
    netname: cdktf.stringToTerraform(struct!.netname),
    shared_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sharedLabels),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    ztype: cdktf.stringToTerraform(struct!.ztype),
    adapter_specific_net: cdktf.listMapper(edgenodeVlanAdaptersInterfaceAdapterSpecificNetToTerraform, true)(struct!.adapterSpecificNet),
  }
}


export function edgenodeVlanAdaptersInterfaceToHclTerraform(struct?: EdgenodeVlanAdaptersInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_local_modifications: {
      value: cdktf.booleanToHclTerraform(struct!.allowLocalModifications),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    intf_usage: {
      value: cdktf.stringToHclTerraform(struct!.intfUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    intfname: {
      value: cdktf.stringToHclTerraform(struct!.intfname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipaddr: {
      value: cdktf.stringToHclTerraform(struct!.ipaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    macaddr: {
      value: cdktf.stringToHclTerraform(struct!.macaddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    net_dhcp: {
      value: cdktf.stringToHclTerraform(struct!.netDhcp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netid: {
      value: cdktf.stringToHclTerraform(struct!.netid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netname: {
      value: cdktf.stringToHclTerraform(struct!.netname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sharedLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    ztype: {
      value: cdktf.stringToHclTerraform(struct!.ztype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adapter_specific_net: {
      value: cdktf.listMapperHcl(edgenodeVlanAdaptersInterfaceAdapterSpecificNetToHclTerraform, true)(struct!.adapterSpecificNet),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeVlanAdaptersInterfaceAdapterSpecificNetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeVlanAdaptersInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeVlanAdaptersInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowLocalModifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowLocalModifications = this._allowLocalModifications;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._intfUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.intfUsage = this._intfUsage;
    }
    if (this._intfname !== undefined) {
      hasAnyValues = true;
      internalValueResult.intfname = this._intfname;
    }
    if (this._ipaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddr = this._ipaddr;
    }
    if (this._macaddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.macaddr = this._macaddr;
    }
    if (this._netDhcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.netDhcp = this._netDhcp;
    }
    if (this._netid !== undefined) {
      hasAnyValues = true;
      internalValueResult.netid = this._netid;
    }
    if (this._netname !== undefined) {
      hasAnyValues = true;
      internalValueResult.netname = this._netname;
    }
    if (this._sharedLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedLabels = this._sharedLabels;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._ztype !== undefined) {
      hasAnyValues = true;
      internalValueResult.ztype = this._ztype;
    }
    if (this._adapterSpecificNet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adapterSpecificNet = this._adapterSpecificNet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeVlanAdaptersInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowLocalModifications = undefined;
      this._cost = undefined;
      this._intfUsage = undefined;
      this._intfname = undefined;
      this._ipaddr = undefined;
      this._macaddr = undefined;
      this._netDhcp = undefined;
      this._netid = undefined;
      this._netname = undefined;
      this._sharedLabels = undefined;
      this._tags = undefined;
      this._ztype = undefined;
      this._adapterSpecificNet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowLocalModifications = value.allowLocalModifications;
      this._cost = value.cost;
      this._intfUsage = value.intfUsage;
      this._intfname = value.intfname;
      this._ipaddr = value.ipaddr;
      this._macaddr = value.macaddr;
      this._netDhcp = value.netDhcp;
      this._netid = value.netid;
      this._netname = value.netname;
      this._sharedLabels = value.sharedLabels;
      this._tags = value.tags;
      this._ztype = value.ztype;
      this._adapterSpecificNet.internalValue = value.adapterSpecificNet;
    }
  }

  // allow_local_modifications - computed: false, optional: true, required: false
  private _allowLocalModifications?: boolean | cdktf.IResolvable; 
  public get allowLocalModifications() {
    return this.getBooleanAttribute('allow_local_modifications');
  }
  public set allowLocalModifications(value: boolean | cdktf.IResolvable) {
    this._allowLocalModifications = value;
  }
  public resetAllowLocalModifications() {
    this._allowLocalModifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowLocalModificationsInput() {
    return this._allowLocalModifications;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // intf_usage - computed: false, optional: true, required: false
  private _intfUsage?: string; 
  public get intfUsage() {
    return this.getStringAttribute('intf_usage');
  }
  public set intfUsage(value: string) {
    this._intfUsage = value;
  }
  public resetIntfUsage() {
    this._intfUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intfUsageInput() {
    return this._intfUsage;
  }

  // intfname - computed: false, optional: false, required: true
  private _intfname?: string; 
  public get intfname() {
    return this.getStringAttribute('intfname');
  }
  public set intfname(value: string) {
    this._intfname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intfnameInput() {
    return this._intfname;
  }

  // ipaddr - computed: false, optional: true, required: false
  private _ipaddr?: string; 
  public get ipaddr() {
    return this.getStringAttribute('ipaddr');
  }
  public set ipaddr(value: string) {
    this._ipaddr = value;
  }
  public resetIpaddr() {
    this._ipaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddrInput() {
    return this._ipaddr;
  }

  // macaddr - computed: false, optional: true, required: false
  private _macaddr?: string; 
  public get macaddr() {
    return this.getStringAttribute('macaddr');
  }
  public set macaddr(value: string) {
    this._macaddr = value;
  }
  public resetMacaddr() {
    this._macaddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macaddrInput() {
    return this._macaddr;
  }

  // net_dhcp - computed: false, optional: true, required: false
  private _netDhcp?: string; 
  public get netDhcp() {
    return this.getStringAttribute('net_dhcp');
  }
  public set netDhcp(value: string) {
    this._netDhcp = value;
  }
  public resetNetDhcp() {
    this._netDhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netDhcpInput() {
    return this._netDhcp;
  }

  // netid - computed: true, optional: true, required: false
  private _netid?: string; 
  public get netid() {
    return this.getStringAttribute('netid');
  }
  public set netid(value: string) {
    this._netid = value;
  }
  public resetNetid() {
    this._netid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netidInput() {
    return this._netid;
  }

  // netname - computed: false, optional: true, required: false
  private _netname?: string; 
  public get netname() {
    return this.getStringAttribute('netname');
  }
  public set netname(value: string) {
    this._netname = value;
  }
  public resetNetname() {
    this._netname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netnameInput() {
    return this._netname;
  }

  // shared_labels - computed: false, optional: true, required: false
  private _sharedLabels?: string[]; 
  public get sharedLabels() {
    return this.getListAttribute('shared_labels');
  }
  public set sharedLabels(value: string[]) {
    this._sharedLabels = value;
  }
  public resetSharedLabels() {
    this._sharedLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedLabelsInput() {
    return this._sharedLabels;
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

  // ztype - computed: false, optional: true, required: false
  private _ztype?: string; 
  public get ztype() {
    return this.getStringAttribute('ztype');
  }
  public set ztype(value: string) {
    this._ztype = value;
  }
  public resetZtype() {
    this._ztype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztypeInput() {
    return this._ztype;
  }

  // adapter_specific_net - computed: false, optional: true, required: false
  private _adapterSpecificNet = new EdgenodeVlanAdaptersInterfaceAdapterSpecificNetList(this, "adapter_specific_net", false);
  public get adapterSpecificNet() {
    return this._adapterSpecificNet;
  }
  public putAdapterSpecificNet(value: EdgenodeVlanAdaptersInterfaceAdapterSpecificNet[] | cdktf.IResolvable) {
    this._adapterSpecificNet.internalValue = value;
  }
  public resetAdapterSpecificNet() {
    this._adapterSpecificNet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adapterSpecificNetInput() {
    return this._adapterSpecificNet.internalValue;
  }
}

export class EdgenodeVlanAdaptersInterfaceList extends cdktf.ComplexList {
  public internalValue? : EdgenodeVlanAdaptersInterface[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeVlanAdaptersInterfaceOutputReference {
    return new EdgenodeVlanAdaptersInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EdgenodeVlanAdapters {
  /**
  * A physical name of the VLAN sub-interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#interface_name Edgenode#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Logical name of this VLAN adapter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#logical_label Edgenode#logical_label}
  */
  readonly logicalLabel?: string;
  /**
  * Logical name of the lower layer adapter (bond or physicalIO)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#lower_layer_name Edgenode#lower_layer_name}
  */
  readonly lowerLayerName?: string;
  /**
  * Valid values are from 1 to 4094
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#vlan_id Edgenode#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#interface Edgenode#interface}
  */
  readonly interface?: EdgenodeVlanAdaptersInterface[] | cdktf.IResolvable;
}

export function edgenodeVlanAdaptersToTerraform(struct?: EdgenodeVlanAdapters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    logical_label: cdktf.stringToTerraform(struct!.logicalLabel),
    lower_layer_name: cdktf.stringToTerraform(struct!.lowerLayerName),
    vlan_id: cdktf.numberToTerraform(struct!.vlanId),
    interface: cdktf.listMapper(edgenodeVlanAdaptersInterfaceToTerraform, true)(struct!.interface),
  }
}


export function edgenodeVlanAdaptersToHclTerraform(struct?: EdgenodeVlanAdapters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_label: {
      value: cdktf.stringToHclTerraform(struct!.logicalLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lower_layer_name: {
      value: cdktf.stringToHclTerraform(struct!.lowerLayerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_id: {
      value: cdktf.numberToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interface: {
      value: cdktf.listMapperHcl(edgenodeVlanAdaptersInterfaceToHclTerraform, true)(struct!.interface),
      isBlock: true,
      type: "list",
      storageClassType: "EdgenodeVlanAdaptersInterfaceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdgenodeVlanAdaptersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EdgenodeVlanAdapters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._logicalLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalLabel = this._logicalLabel;
    }
    if (this._lowerLayerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerLayerName = this._lowerLayerName;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    if (this._interface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdgenodeVlanAdapters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
      this._logicalLabel = undefined;
      this._lowerLayerName = undefined;
      this._vlanId = undefined;
      this._interface.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
      this._logicalLabel = value.logicalLabel;
      this._lowerLayerName = value.lowerLayerName;
      this._vlanId = value.vlanId;
      this._interface.internalValue = value.interface;
    }
  }

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // logical_label - computed: false, optional: true, required: false
  private _logicalLabel?: string; 
  public get logicalLabel() {
    return this.getStringAttribute('logical_label');
  }
  public set logicalLabel(value: string) {
    this._logicalLabel = value;
  }
  public resetLogicalLabel() {
    this._logicalLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalLabelInput() {
    return this._logicalLabel;
  }

  // lower_layer_name - computed: false, optional: true, required: false
  private _lowerLayerName?: string; 
  public get lowerLayerName() {
    return this.getStringAttribute('lower_layer_name');
  }
  public set lowerLayerName(value: string) {
    this._lowerLayerName = value;
  }
  public resetLowerLayerName() {
    this._lowerLayerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerLayerNameInput() {
    return this._lowerLayerName;
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

  // interface - computed: false, optional: true, required: false
  private _interface = new EdgenodeVlanAdaptersInterfaceList(this, "interface", false);
  public get interface() {
    return this._interface;
  }
  public putInterface(value: EdgenodeVlanAdaptersInterface[] | cdktf.IResolvable) {
    this._interface.internalValue = value;
  }
  public resetInterface() {
    this._interface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface.internalValue;
  }
}

export class EdgenodeVlanAdaptersList extends cdktf.ComplexList {
  public internalValue? : EdgenodeVlanAdapters[] | cdktf.IResolvable

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
  public get(index: number): EdgenodeVlanAdaptersOutputReference {
    return new EdgenodeVlanAdaptersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode zedcloud_edgenode}
*/
export class Edgenode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_edgenode";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Edgenode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Edgenode to import
  * @param importFromId The id of the existing Edgenode that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Edgenode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_edgenode", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.6.0/docs/resources/edgenode zedcloud_edgenode} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgenodeConfig
  */
  public constructor(scope: Construct, id: string, config: EdgenodeConfig) {
    super(scope, id, {
      terraformResourceType: 'zedcloud_edgenode',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.6.0',
        providerVersionConstraint: '2.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminState = config.adminState;
    this._assetId = config.assetId;
    this._baseOsForceUpgrade = config.baseOsForceUpgrade;
    this._baseOsRetryCounter = config.baseOsRetryCounter;
    this._baseOsRetryTime = config.baseOsRetryTime;
    this._clientIp = config.clientIp;
    this._clusterId = config.clusterId;
    this._clusterInterface = config.clusterInterface;
    this._configLock = config.configLock;
    this._cpu = config.cpu;
    this._deploymentTag = config.deploymentTag;
    this._deprecated = config.deprecated;
    this._description = config.description;
    this._edgeviewAllow = config.edgeviewAllow;
    this._generateSoftSerial = config.generateSoftSerial;
    this._identity = config.identity;
    this._localOperatorConsoleUrl = config.localOperatorConsoleUrl;
    this._location = config.location;
    this._memory = config.memory;
    this._modelId = config.modelId;
    this._name = config.name;
    this._onboardingKey = config.onboardingKey;
    this._preparePowerOffCounter = config.preparePowerOffCounter;
    this._preparePowerOffTime = config.preparePowerOffTime;
    this._projectId = config.projectId;
    this._resetCounter = config.resetCounter;
    this._resetTime = config.resetTime;
    this._serialno = config.serialno;
    this._sitePictures = config.sitePictures;
    this._storage = config.storage;
    this._tags = config.tags;
    this._thread = config.thread;
    this._title = config.title;
    this._token = config.token;
    this._utype = config.utype;
    this._baseImage.internalValue = config.baseImage;
    this._configItem.internalValue = config.configItem;
    this._defaultNetInst.internalValue = config.defaultNetInst;
    this._devLocation.internalValue = config.devLocation;
    this._dlisp.internalValue = config.dlisp;
    this._edgeNodeCluster.internalValue = config.edgeNodeCluster;
    this._edgeviewconfig.internalValue = config.edgeviewconfig;
    this._interfaces.internalValue = config.interfaces;
    this._revision.internalValue = config.revision;
    this._vlanAdapters.internalValue = config.vlanAdapters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state - computed: false, optional: true, required: false
  private _adminState?: string; 
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }
  public set adminState(value: string) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // asset_id - computed: false, optional: true, required: false
  private _assetId?: string; 
  public get assetId() {
    return this.getStringAttribute('asset_id');
  }
  public set assetId(value: string) {
    this._assetId = value;
  }
  public resetAssetId() {
    this._assetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetIdInput() {
    return this._assetId;
  }

  // base_os_force_upgrade - computed: false, optional: true, required: false
  private _baseOsForceUpgrade?: boolean | cdktf.IResolvable; 
  public get baseOsForceUpgrade() {
    return this.getBooleanAttribute('base_os_force_upgrade');
  }
  public set baseOsForceUpgrade(value: boolean | cdktf.IResolvable) {
    this._baseOsForceUpgrade = value;
  }
  public resetBaseOsForceUpgrade() {
    this._baseOsForceUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseOsForceUpgradeInput() {
    return this._baseOsForceUpgrade;
  }

  // base_os_retry_counter - computed: false, optional: true, required: false
  private _baseOsRetryCounter?: number; 
  public get baseOsRetryCounter() {
    return this.getNumberAttribute('base_os_retry_counter');
  }
  public set baseOsRetryCounter(value: number) {
    this._baseOsRetryCounter = value;
  }
  public resetBaseOsRetryCounter() {
    this._baseOsRetryCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseOsRetryCounterInput() {
    return this._baseOsRetryCounter;
  }

  // base_os_retry_time - computed: false, optional: true, required: false
  private _baseOsRetryTime?: string; 
  public get baseOsRetryTime() {
    return this.getStringAttribute('base_os_retry_time');
  }
  public set baseOsRetryTime(value: string) {
    this._baseOsRetryTime = value;
  }
  public resetBaseOsRetryTime() {
    this._baseOsRetryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseOsRetryTimeInput() {
    return this._baseOsRetryTime;
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp?: string; 
  public get clientIp() {
    return this.getStringAttribute('client_ip');
  }
  public set clientIp(value: string) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // cluster_interface - computed: false, optional: true, required: false
  private _clusterInterface?: string; 
  public get clusterInterface() {
    return this.getStringAttribute('cluster_interface');
  }
  public set clusterInterface(value: string) {
    this._clusterInterface = value;
  }
  public resetClusterInterface() {
    this._clusterInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInterfaceInput() {
    return this._clusterInterface;
  }

  // config_lock - computed: false, optional: true, required: false
  private _configLock?: string; 
  public get configLock() {
    return this.getStringAttribute('config_lock');
  }
  public set configLock(value: string) {
    this._configLock = value;
  }
  public resetConfigLock() {
    this._configLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configLockInput() {
    return this._configLock;
  }

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

  // debug_knob - computed: true, optional: false, required: false
  private _debugKnob = new EdgenodeDebugKnobList(this, "debug_knob", false);
  public get debugKnob() {
    return this._debugKnob;
  }

  // deployment_tag - computed: false, optional: true, required: false
  private _deploymentTag?: string; 
  public get deploymentTag() {
    return this.getStringAttribute('deployment_tag');
  }
  public set deploymentTag(value: string) {
    this._deploymentTag = value;
  }
  public resetDeploymentTag() {
    this._deploymentTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTagInput() {
    return this._deploymentTag;
  }

  // deprecated - computed: false, optional: true, required: false
  private _deprecated?: string; 
  public get deprecated() {
    return this.getStringAttribute('deprecated');
  }
  public set deprecated(value: string) {
    this._deprecated = value;
  }
  public resetDeprecated() {
    this._deprecated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedInput() {
    return this._deprecated;
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

  // edgeview_allow - computed: false, optional: true, required: false
  private _edgeviewAllow?: boolean | cdktf.IResolvable; 
  public get edgeviewAllow() {
    return this.getBooleanAttribute('edgeview_allow');
  }
  public set edgeviewAllow(value: boolean | cdktf.IResolvable) {
    this._edgeviewAllow = value;
  }
  public resetEdgeviewAllow() {
    this._edgeviewAllow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeviewAllowInput() {
    return this._edgeviewAllow;
  }

  // generate_soft_serial - computed: false, optional: true, required: false
  private _generateSoftSerial?: boolean | cdktf.IResolvable; 
  public get generateSoftSerial() {
    return this.getBooleanAttribute('generate_soft_serial');
  }
  public set generateSoftSerial(value: boolean | cdktf.IResolvable) {
    this._generateSoftSerial = value;
  }
  public resetGenerateSoftSerial() {
    this._generateSoftSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateSoftSerialInput() {
    return this._generateSoftSerial;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: false, optional: true, required: false
  private _identity?: string; 
  public get identity() {
    return this.getStringAttribute('identity');
  }
  public set identity(value: string) {
    this._identity = value;
  }
  public resetIdentity() {
    this._identity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity;
  }

  // local_operator_console_url - computed: false, optional: true, required: false
  private _localOperatorConsoleUrl?: string; 
  public get localOperatorConsoleUrl() {
    return this.getStringAttribute('local_operator_console_url');
  }
  public set localOperatorConsoleUrl(value: string) {
    this._localOperatorConsoleUrl = value;
  }
  public resetLocalOperatorConsoleUrl() {
    this._localOperatorConsoleUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localOperatorConsoleUrlInput() {
    return this._localOperatorConsoleUrl;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // memory - computed: false, optional: true, required: false
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

  // model_id - computed: false, optional: false, required: true
  private _modelId?: string; 
  public get modelId() {
    return this.getStringAttribute('model_id');
  }
  public set modelId(value: string) {
    this._modelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modelIdInput() {
    return this._modelId;
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

  // onboarding_key - computed: true, optional: true, required: false
  private _onboardingKey?: string; 
  public get onboardingKey() {
    return this.getStringAttribute('onboarding_key');
  }
  public set onboardingKey(value: string) {
    this._onboardingKey = value;
  }
  public resetOnboardingKey() {
    this._onboardingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onboardingKeyInput() {
    return this._onboardingKey;
  }

  // prepare_power_off_counter - computed: false, optional: true, required: false
  private _preparePowerOffCounter?: number; 
  public get preparePowerOffCounter() {
    return this.getNumberAttribute('prepare_power_off_counter');
  }
  public set preparePowerOffCounter(value: number) {
    this._preparePowerOffCounter = value;
  }
  public resetPreparePowerOffCounter() {
    this._preparePowerOffCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preparePowerOffCounterInput() {
    return this._preparePowerOffCounter;
  }

  // prepare_power_off_time - computed: false, optional: true, required: false
  private _preparePowerOffTime?: string; 
  public get preparePowerOffTime() {
    return this.getStringAttribute('prepare_power_off_time');
  }
  public set preparePowerOffTime(value: string) {
    this._preparePowerOffTime = value;
  }
  public resetPreparePowerOffTime() {
    this._preparePowerOffTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preparePowerOffTimeInput() {
    return this._preparePowerOffTime;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // reset_counter - computed: true, optional: true, required: false
  private _resetCounter?: number; 
  public get resetCounter() {
    return this.getNumberAttribute('reset_counter');
  }
  public set resetCounter(value: number) {
    this._resetCounter = value;
  }
  public resetResetCounter() {
    this._resetCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetCounterInput() {
    return this._resetCounter;
  }

  // reset_time - computed: true, optional: true, required: false
  private _resetTime?: string; 
  public get resetTime() {
    return this.getStringAttribute('reset_time');
  }
  public set resetTime(value: string) {
    this._resetTime = value;
  }
  public resetResetTime() {
    this._resetTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetTimeInput() {
    return this._resetTime;
  }

  // serialno - computed: false, optional: true, required: false
  private _serialno?: string; 
  public get serialno() {
    return this.getStringAttribute('serialno');
  }
  public set serialno(value: string) {
    this._serialno = value;
  }
  public resetSerialno() {
    this._serialno = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialnoInput() {
    return this._serialno;
  }

  // site_pictures - computed: false, optional: true, required: false
  private _sitePictures?: string[]; 
  public get sitePictures() {
    return cdktf.Fn.tolist(this.getListAttribute('site_pictures'));
  }
  public set sitePictures(value: string[]) {
    this._sitePictures = value;
  }
  public resetSitePictures() {
    this._sitePictures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitePicturesInput() {
    return this._sitePictures;
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: number; 
  public get storage() {
    return this.getNumberAttribute('storage');
  }
  public set storage(value: number) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
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

  // thread - computed: false, optional: true, required: false
  private _thread?: number; 
  public get thread() {
    return this.getNumberAttribute('thread');
  }
  public set thread(value: number) {
    this._thread = value;
  }
  public resetThread() {
    this._thread = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadInput() {
    return this._thread;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // utype - computed: false, optional: true, required: false
  private _utype?: string; 
  public get utype() {
    return this.getStringAttribute('utype');
  }
  public set utype(value: string) {
    this._utype = value;
  }
  public resetUtype() {
    this._utype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utypeInput() {
    return this._utype;
  }

  // base_image - computed: false, optional: true, required: false
  private _baseImage = new EdgenodeBaseImageList(this, "base_image", false);
  public get baseImage() {
    return this._baseImage;
  }
  public putBaseImage(value: EdgenodeBaseImage[] | cdktf.IResolvable) {
    this._baseImage.internalValue = value;
  }
  public resetBaseImage() {
    this._baseImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseImageInput() {
    return this._baseImage.internalValue;
  }

  // config_item - computed: false, optional: true, required: false
  private _configItem = new EdgenodeConfigItemList(this, "config_item", false);
  public get configItem() {
    return this._configItem;
  }
  public putConfigItem(value: EdgenodeConfigItem[] | cdktf.IResolvable) {
    this._configItem.internalValue = value;
  }
  public resetConfigItem() {
    this._configItem.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configItemInput() {
    return this._configItem.internalValue;
  }

  // default_net_inst - computed: false, optional: true, required: false
  private _defaultNetInst = new EdgenodeDefaultNetInstList(this, "default_net_inst", false);
  public get defaultNetInst() {
    return this._defaultNetInst;
  }
  public putDefaultNetInst(value: EdgenodeDefaultNetInst[] | cdktf.IResolvable) {
    this._defaultNetInst.internalValue = value;
  }
  public resetDefaultNetInst() {
    this._defaultNetInst.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNetInstInput() {
    return this._defaultNetInst.internalValue;
  }

  // dev_location - computed: false, optional: true, required: false
  private _devLocation = new EdgenodeDevLocationList(this, "dev_location", false);
  public get devLocation() {
    return this._devLocation;
  }
  public putDevLocation(value: EdgenodeDevLocation[] | cdktf.IResolvable) {
    this._devLocation.internalValue = value;
  }
  public resetDevLocation() {
    this._devLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devLocationInput() {
    return this._devLocation.internalValue;
  }

  // dlisp - computed: false, optional: true, required: false
  private _dlisp = new EdgenodeDlispList(this, "dlisp", false);
  public get dlisp() {
    return this._dlisp;
  }
  public putDlisp(value: EdgenodeDlisp[] | cdktf.IResolvable) {
    this._dlisp.internalValue = value;
  }
  public resetDlisp() {
    this._dlisp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlispInput() {
    return this._dlisp.internalValue;
  }

  // edge_node_cluster - computed: false, optional: true, required: false
  private _edgeNodeCluster = new EdgenodeEdgeNodeClusterList(this, "edge_node_cluster", false);
  public get edgeNodeCluster() {
    return this._edgeNodeCluster;
  }
  public putEdgeNodeCluster(value: EdgenodeEdgeNodeCluster[] | cdktf.IResolvable) {
    this._edgeNodeCluster.internalValue = value;
  }
  public resetEdgeNodeCluster() {
    this._edgeNodeCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeNodeClusterInput() {
    return this._edgeNodeCluster.internalValue;
  }

  // edgeviewconfig - computed: false, optional: true, required: false
  private _edgeviewconfig = new EdgenodeEdgeviewconfigList(this, "edgeviewconfig", false);
  public get edgeviewconfig() {
    return this._edgeviewconfig;
  }
  public putEdgeviewconfig(value: EdgenodeEdgeviewconfig[] | cdktf.IResolvable) {
    this._edgeviewconfig.internalValue = value;
  }
  public resetEdgeviewconfig() {
    this._edgeviewconfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeviewconfigInput() {
    return this._edgeviewconfig.internalValue;
  }

  // interfaces - computed: false, optional: false, required: true
  private _interfaces = new EdgenodeInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: EdgenodeInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // revision - computed: false, optional: true, required: false
  private _revision = new EdgenodeRevisionList(this, "revision", false);
  public get revision() {
    return this._revision;
  }
  public putRevision(value: EdgenodeRevision[] | cdktf.IResolvable) {
    this._revision.internalValue = value;
  }
  public resetRevision() {
    this._revision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision.internalValue;
  }

  // vlan_adapters - computed: false, optional: true, required: false
  private _vlanAdapters = new EdgenodeVlanAdaptersList(this, "vlan_adapters", false);
  public get vlanAdapters() {
    return this._vlanAdapters;
  }
  public putVlanAdapters(value: EdgenodeVlanAdapters[] | cdktf.IResolvable) {
    this._vlanAdapters.internalValue = value;
  }
  public resetVlanAdapters() {
    this._vlanAdapters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanAdaptersInput() {
    return this._vlanAdapters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state: cdktf.stringToTerraform(this._adminState),
      asset_id: cdktf.stringToTerraform(this._assetId),
      base_os_force_upgrade: cdktf.booleanToTerraform(this._baseOsForceUpgrade),
      base_os_retry_counter: cdktf.numberToTerraform(this._baseOsRetryCounter),
      base_os_retry_time: cdktf.stringToTerraform(this._baseOsRetryTime),
      client_ip: cdktf.stringToTerraform(this._clientIp),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      cluster_interface: cdktf.stringToTerraform(this._clusterInterface),
      config_lock: cdktf.stringToTerraform(this._configLock),
      cpu: cdktf.numberToTerraform(this._cpu),
      deployment_tag: cdktf.stringToTerraform(this._deploymentTag),
      deprecated: cdktf.stringToTerraform(this._deprecated),
      description: cdktf.stringToTerraform(this._description),
      edgeview_allow: cdktf.booleanToTerraform(this._edgeviewAllow),
      generate_soft_serial: cdktf.booleanToTerraform(this._generateSoftSerial),
      identity: cdktf.stringToTerraform(this._identity),
      local_operator_console_url: cdktf.stringToTerraform(this._localOperatorConsoleUrl),
      location: cdktf.stringToTerraform(this._location),
      memory: cdktf.numberToTerraform(this._memory),
      model_id: cdktf.stringToTerraform(this._modelId),
      name: cdktf.stringToTerraform(this._name),
      onboarding_key: cdktf.stringToTerraform(this._onboardingKey),
      prepare_power_off_counter: cdktf.numberToTerraform(this._preparePowerOffCounter),
      prepare_power_off_time: cdktf.stringToTerraform(this._preparePowerOffTime),
      project_id: cdktf.stringToTerraform(this._projectId),
      reset_counter: cdktf.numberToTerraform(this._resetCounter),
      reset_time: cdktf.stringToTerraform(this._resetTime),
      serialno: cdktf.stringToTerraform(this._serialno),
      site_pictures: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sitePictures),
      storage: cdktf.numberToTerraform(this._storage),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      thread: cdktf.numberToTerraform(this._thread),
      title: cdktf.stringToTerraform(this._title),
      token: cdktf.stringToTerraform(this._token),
      utype: cdktf.stringToTerraform(this._utype),
      base_image: cdktf.listMapper(edgenodeBaseImageToTerraform, true)(this._baseImage.internalValue),
      config_item: cdktf.listMapper(edgenodeConfigItemToTerraform, true)(this._configItem.internalValue),
      default_net_inst: cdktf.listMapper(edgenodeDefaultNetInstToTerraform, true)(this._defaultNetInst.internalValue),
      dev_location: cdktf.listMapper(edgenodeDevLocationToTerraform, true)(this._devLocation.internalValue),
      dlisp: cdktf.listMapper(edgenodeDlispToTerraform, true)(this._dlisp.internalValue),
      edge_node_cluster: cdktf.listMapper(edgenodeEdgeNodeClusterToTerraform, true)(this._edgeNodeCluster.internalValue),
      edgeviewconfig: cdktf.listMapper(edgenodeEdgeviewconfigToTerraform, true)(this._edgeviewconfig.internalValue),
      interfaces: cdktf.listMapper(edgenodeInterfacesToTerraform, true)(this._interfaces.internalValue),
      revision: cdktf.listMapper(edgenodeRevisionToTerraform, true)(this._revision.internalValue),
      vlan_adapters: cdktf.listMapper(edgenodeVlanAdaptersToTerraform, true)(this._vlanAdapters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_state: {
        value: cdktf.stringToHclTerraform(this._adminState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asset_id: {
        value: cdktf.stringToHclTerraform(this._assetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_os_force_upgrade: {
        value: cdktf.booleanToHclTerraform(this._baseOsForceUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      base_os_retry_counter: {
        value: cdktf.numberToHclTerraform(this._baseOsRetryCounter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      base_os_retry_time: {
        value: cdktf.stringToHclTerraform(this._baseOsRetryTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_ip: {
        value: cdktf.stringToHclTerraform(this._clientIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_interface: {
        value: cdktf.stringToHclTerraform(this._clusterInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_lock: {
        value: cdktf.stringToHclTerraform(this._configLock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu: {
        value: cdktf.numberToHclTerraform(this._cpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deployment_tag: {
        value: cdktf.stringToHclTerraform(this._deploymentTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deprecated: {
        value: cdktf.stringToHclTerraform(this._deprecated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edgeview_allow: {
        value: cdktf.booleanToHclTerraform(this._edgeviewAllow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      generate_soft_serial: {
        value: cdktf.booleanToHclTerraform(this._generateSoftSerial),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      identity: {
        value: cdktf.stringToHclTerraform(this._identity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_operator_console_url: {
        value: cdktf.stringToHclTerraform(this._localOperatorConsoleUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.numberToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      model_id: {
        value: cdktf.stringToHclTerraform(this._modelId),
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
      onboarding_key: {
        value: cdktf.stringToHclTerraform(this._onboardingKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prepare_power_off_counter: {
        value: cdktf.numberToHclTerraform(this._preparePowerOffCounter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prepare_power_off_time: {
        value: cdktf.stringToHclTerraform(this._preparePowerOffTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reset_counter: {
        value: cdktf.numberToHclTerraform(this._resetCounter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reset_time: {
        value: cdktf.stringToHclTerraform(this._resetTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serialno: {
        value: cdktf.stringToHclTerraform(this._serialno),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_pictures: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sitePictures),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      storage: {
        value: cdktf.numberToHclTerraform(this._storage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      thread: {
        value: cdktf.numberToHclTerraform(this._thread),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      utype: {
        value: cdktf.stringToHclTerraform(this._utype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_image: {
        value: cdktf.listMapperHcl(edgenodeBaseImageToHclTerraform, true)(this._baseImage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgenodeBaseImageList",
      },
      config_item: {
        value: cdktf.listMapperHcl(edgenodeConfigItemToHclTerraform, true)(this._configItem.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgenodeConfigItemList",
      },
      default_net_inst: {
        value: cdktf.listMapperHcl(edgenodeDefaultNetInstToHclTerraform, true)(this._defaultNetInst.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgenodeDefaultNetInstList",
      },
      dev_location: {
        value: cdktf.listMapperHcl(edgenodeDevLocationToHclTerraform, true)(this._devLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgenodeDevLocationList",
      },
      dlisp: {
        value: cdktf.listMapperHcl(edgenodeDlispToHclTerraform, true)(this._dlisp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgenodeDlispList",
      },
      edge_node_cluster: {
        value: cdktf.listMapperHcl(edgenodeEdgeNodeClusterToHclTerraform, true)(this._edgeNodeCluster.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgenodeEdgeNodeClusterList",
      },
      edgeviewconfig: {
        value: cdktf.listMapperHcl(edgenodeEdgeviewconfigToHclTerraform, true)(this._edgeviewconfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgenodeEdgeviewconfigList",
      },
      interfaces: {
        value: cdktf.listMapperHcl(edgenodeInterfacesToHclTerraform, true)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgenodeInterfacesList",
      },
      revision: {
        value: cdktf.listMapperHcl(edgenodeRevisionToHclTerraform, true)(this._revision.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgenodeRevisionList",
      },
      vlan_adapters: {
        value: cdktf.listMapperHcl(edgenodeVlanAdaptersToHclTerraform, true)(this._vlanAdapters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgenodeVlanAdaptersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
