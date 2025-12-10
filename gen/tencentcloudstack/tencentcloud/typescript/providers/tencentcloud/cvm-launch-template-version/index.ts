// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CvmLaunchTemplateVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The role name of CAM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#cam_role_name CvmLaunchTemplateVersion#cam_role_name}
  */
  readonly camRoleName?: string;
  /**
  * A unique string supplied by the client to ensure that the request is idempotent. Its maximum length is 64 ASCII characters. If this parameter is not specified, the idem-potency of the request cannot be guaranteed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#client_token CvmLaunchTemplateVersion#client_token}
  */
  readonly clientToken?: string;
  /**
  * Whether the termination protection is enabled. `TRUE`: Enable instance protection, which means that this instance can not be deleted by an API action.`FALSE`: Do not enable the instance protection. Default value: `FALSE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#disable_api_termination CvmLaunchTemplateVersion#disable_api_termination}
  */
  readonly disableApiTermination?: boolean | cdktf.IResolvable;
  /**
  * Placement group ID. You can only specify one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#disaster_recover_group_ids CvmLaunchTemplateVersion#disaster_recover_group_ids}
  */
  readonly disasterRecoverGroupIds?: string[];
  /**
  * Whether the request is a dry run only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#dry_run CvmLaunchTemplateVersion#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Hostname of a CVM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#host_name CvmLaunchTemplateVersion#host_name}
  */
  readonly hostName?: string;
  /**
  * HPC cluster ID. The HPC cluster must and can only be specified for a high-performance computing instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#hpc_cluster_id CvmLaunchTemplateVersion#hpc_cluster_id}
  */
  readonly hpcClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#id CvmLaunchTemplateVersion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Image ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#image_id CvmLaunchTemplateVersion#image_id}
  */
  readonly imageId?: string;
  /**
  * The charge type of instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#instance_charge_type CvmLaunchTemplateVersion#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * The number of instances to be purchased.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#instance_count CvmLaunchTemplateVersion#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Instance name to be displayed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#instance_name CvmLaunchTemplateVersion#instance_name}
  */
  readonly instanceName?: string;
  /**
  * The type of the instance. If this parameter is not specified, the system will dynamically specify the default model according to the resource sales in the current region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#instance_type CvmLaunchTemplateVersion#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Instance launch template ID. This parameter is used as a basis for creating new template versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#launch_template_id CvmLaunchTemplateVersion#launch_template_id}
  */
  readonly launchTemplateId: string;
  /**
  * This parameter, when specified, is used to create instance launch templates. If this parameter is not specified, the default version will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#launch_template_version CvmLaunchTemplateVersion#launch_template_version}
  */
  readonly launchTemplateVersion?: number;
  /**
  * Description of instance launch template versions. This parameter can contain 2-256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#launch_template_version_description CvmLaunchTemplateVersion#launch_template_version_description}
  */
  readonly launchTemplateVersionDescription?: string;
  /**
  * Security groups to which the instance belongs. If this parameter is not specified, the instance will be associated with default security groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#security_group_ids CvmLaunchTemplateVersion#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * User data provided to the instance. This parameter needs to be encoded in base64 format with the maximum size of 16 KB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#user_data CvmLaunchTemplateVersion#user_data}
  */
  readonly userData?: string;
  /**
  * action_timer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#action_timer CvmLaunchTemplateVersion#action_timer}
  */
  readonly actionTimer?: CvmLaunchTemplateVersionActionTimer;
  /**
  * data_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#data_disks CvmLaunchTemplateVersion#data_disks}
  */
  readonly dataDisks?: CvmLaunchTemplateVersionDataDisks[] | cdktf.IResolvable;
  /**
  * enhanced_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#enhanced_service CvmLaunchTemplateVersion#enhanced_service}
  */
  readonly enhancedService?: CvmLaunchTemplateVersionEnhancedService;
  /**
  * instance_charge_prepaid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#instance_charge_prepaid CvmLaunchTemplateVersion#instance_charge_prepaid}
  */
  readonly instanceChargePrepaid?: CvmLaunchTemplateVersionInstanceChargePrepaid;
  /**
  * instance_market_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#instance_market_options CvmLaunchTemplateVersion#instance_market_options}
  */
  readonly instanceMarketOptions?: CvmLaunchTemplateVersionInstanceMarketOptions;
  /**
  * internet_accessible block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#internet_accessible CvmLaunchTemplateVersion#internet_accessible}
  */
  readonly internetAccessible?: CvmLaunchTemplateVersionInternetAccessible;
  /**
  * login_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#login_settings CvmLaunchTemplateVersion#login_settings}
  */
  readonly loginSettings?: CvmLaunchTemplateVersionLoginSettings;
  /**
  * placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#placement CvmLaunchTemplateVersion#placement}
  */
  readonly placement: CvmLaunchTemplateVersionPlacement;
  /**
  * system_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#system_disk CvmLaunchTemplateVersion#system_disk}
  */
  readonly systemDisk?: CvmLaunchTemplateVersionSystemDisk;
  /**
  * tag_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#tag_specification CvmLaunchTemplateVersion#tag_specification}
  */
  readonly tagSpecification?: CvmLaunchTemplateVersionTagSpecification[] | cdktf.IResolvable;
  /**
  * virtual_private_cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#virtual_private_cloud CvmLaunchTemplateVersion#virtual_private_cloud}
  */
  readonly virtualPrivateCloud?: CvmLaunchTemplateVersionVirtualPrivateCloud;
}
export interface CvmLaunchTemplateVersionActionTimerExternalsStorageBlockAttr {
  /**
  * Maximum capacity of local HDD storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#max_size CvmLaunchTemplateVersion#max_size}
  */
  readonly maxSize: number;
  /**
  * Minimum capacity of local HDD storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#min_size CvmLaunchTemplateVersion#min_size}
  */
  readonly minSize: number;
  /**
  * Local HDD storage type. Value: LOCAL_PRO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#type CvmLaunchTemplateVersion#type}
  */
  readonly type: string;
}

export function cvmLaunchTemplateVersionActionTimerExternalsStorageBlockAttrToTerraform(struct?: CvmLaunchTemplateVersionActionTimerExternalsStorageBlockAttrOutputReference | CvmLaunchTemplateVersionActionTimerExternalsStorageBlockAttr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cvmLaunchTemplateVersionActionTimerExternalsStorageBlockAttrToHclTerraform(struct?: CvmLaunchTemplateVersionActionTimerExternalsStorageBlockAttrOutputReference | CvmLaunchTemplateVersionActionTimerExternalsStorageBlockAttr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_size: {
      value: cdktf.numberToHclTerraform(struct!.minSize),
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

export class CvmLaunchTemplateVersionActionTimerExternalsStorageBlockAttrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateVersionActionTimerExternalsStorageBlockAttr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmLaunchTemplateVersionActionTimerExternalsStorageBlockAttr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxSize = undefined;
      this._minSize = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
      this._type = value.type;
    }
  }

  // max_size - computed: false, optional: false, required: true
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: false, optional: false, required: true
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface CvmLaunchTemplateVersionActionTimerExternals {
  /**
  * Release address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#release_address CvmLaunchTemplateVersion#release_address}
  */
  readonly releaseAddress?: boolean | cdktf.IResolvable;
  /**
  * Not supported network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#unsupport_networks CvmLaunchTemplateVersion#unsupport_networks}
  */
  readonly unsupportNetworks?: string[];
  /**
  * storage_block_attr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#storage_block_attr CvmLaunchTemplateVersion#storage_block_attr}
  */
  readonly storageBlockAttr?: CvmLaunchTemplateVersionActionTimerExternalsStorageBlockAttr;
}

export function cvmLaunchTemplateVersionActionTimerExternalsToTerraform(struct?: CvmLaunchTemplateVersionActionTimerExternalsOutputReference | CvmLaunchTemplateVersionActionTimerExternals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    release_address: cdktf.booleanToTerraform(struct!.releaseAddress),
    unsupport_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.unsupportNetworks),
    storage_block_attr: cvmLaunchTemplateVersionActionTimerExternalsStorageBlockAttrToTerraform(struct!.storageBlockAttr),
  }
}


export function cvmLaunchTemplateVersionActionTimerExternalsToHclTerraform(struct?: CvmLaunchTemplateVersionActionTimerExternalsOutputReference | CvmLaunchTemplateVersionActionTimerExternals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    release_address: {
      value: cdktf.booleanToHclTerraform(struct!.releaseAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unsupport_networks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.unsupportNetworks),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    storage_block_attr: {
      value: cvmLaunchTemplateVersionActionTimerExternalsStorageBlockAttrToHclTerraform(struct!.storageBlockAttr),
      isBlock: true,
      type: "list",
      storageClassType: "CvmLaunchTemplateVersionActionTimerExternalsStorageBlockAttrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmLaunchTemplateVersionActionTimerExternalsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateVersionActionTimerExternals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._releaseAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseAddress = this._releaseAddress;
    }
    if (this._unsupportNetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportNetworks = this._unsupportNetworks;
    }
    if (this._storageBlockAttr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageBlockAttr = this._storageBlockAttr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmLaunchTemplateVersionActionTimerExternals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._releaseAddress = undefined;
      this._unsupportNetworks = undefined;
      this._storageBlockAttr.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._releaseAddress = value.releaseAddress;
      this._unsupportNetworks = value.unsupportNetworks;
      this._storageBlockAttr.internalValue = value.storageBlockAttr;
    }
  }

  // release_address - computed: true, optional: true, required: false
  private _releaseAddress?: boolean | cdktf.IResolvable; 
  public get releaseAddress() {
    return this.getBooleanAttribute('release_address');
  }
  public set releaseAddress(value: boolean | cdktf.IResolvable) {
    this._releaseAddress = value;
  }
  public resetReleaseAddress() {
    this._releaseAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseAddressInput() {
    return this._releaseAddress;
  }

  // unsupport_networks - computed: true, optional: true, required: false
  private _unsupportNetworks?: string[]; 
  public get unsupportNetworks() {
    return cdktf.Fn.tolist(this.getListAttribute('unsupport_networks'));
  }
  public set unsupportNetworks(value: string[]) {
    this._unsupportNetworks = value;
  }
  public resetUnsupportNetworks() {
    this._unsupportNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportNetworksInput() {
    return this._unsupportNetworks;
  }

  // storage_block_attr - computed: false, optional: true, required: false
  private _storageBlockAttr = new CvmLaunchTemplateVersionActionTimerExternalsStorageBlockAttrOutputReference(this, "storage_block_attr");
  public get storageBlockAttr() {
    return this._storageBlockAttr;
  }
  public putStorageBlockAttr(value: CvmLaunchTemplateVersionActionTimerExternalsStorageBlockAttr) {
    this._storageBlockAttr.internalValue = value;
  }
  public resetStorageBlockAttr() {
    this._storageBlockAttr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBlockAttrInput() {
    return this._storageBlockAttr.internalValue;
  }
}
export interface CvmLaunchTemplateVersionActionTimer {
  /**
  * Execution time, displayed according to ISO8601 standard, and UTC time is used. The format is YYYY-MM-DDThh:mm:ssZ. For example, 2018-05-29T11:26:40Z, the execution must be at least 5 minutes later than the current time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#action_time CvmLaunchTemplateVersion#action_time}
  */
  readonly actionTime?: string;
  /**
  * Timer name. Currently TerminateInstances is the only supported value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#timer_action CvmLaunchTemplateVersion#timer_action}
  */
  readonly timerAction?: string;
  /**
  * externals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#externals CvmLaunchTemplateVersion#externals}
  */
  readonly externals?: CvmLaunchTemplateVersionActionTimerExternals;
}

export function cvmLaunchTemplateVersionActionTimerToTerraform(struct?: CvmLaunchTemplateVersionActionTimerOutputReference | CvmLaunchTemplateVersionActionTimer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_time: cdktf.stringToTerraform(struct!.actionTime),
    timer_action: cdktf.stringToTerraform(struct!.timerAction),
    externals: cvmLaunchTemplateVersionActionTimerExternalsToTerraform(struct!.externals),
  }
}


export function cvmLaunchTemplateVersionActionTimerToHclTerraform(struct?: CvmLaunchTemplateVersionActionTimerOutputReference | CvmLaunchTemplateVersionActionTimer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_time: {
      value: cdktf.stringToHclTerraform(struct!.actionTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timer_action: {
      value: cdktf.stringToHclTerraform(struct!.timerAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    externals: {
      value: cvmLaunchTemplateVersionActionTimerExternalsToHclTerraform(struct!.externals),
      isBlock: true,
      type: "list",
      storageClassType: "CvmLaunchTemplateVersionActionTimerExternalsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmLaunchTemplateVersionActionTimerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateVersionActionTimer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionTime = this._actionTime;
    }
    if (this._timerAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.timerAction = this._timerAction;
    }
    if (this._externals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externals = this._externals?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmLaunchTemplateVersionActionTimer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionTime = undefined;
      this._timerAction = undefined;
      this._externals.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionTime = value.actionTime;
      this._timerAction = value.timerAction;
      this._externals.internalValue = value.externals;
    }
  }

  // action_time - computed: true, optional: true, required: false
  private _actionTime?: string; 
  public get actionTime() {
    return this.getStringAttribute('action_time');
  }
  public set actionTime(value: string) {
    this._actionTime = value;
  }
  public resetActionTime() {
    this._actionTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTimeInput() {
    return this._actionTime;
  }

  // timer_action - computed: true, optional: true, required: false
  private _timerAction?: string; 
  public get timerAction() {
    return this.getStringAttribute('timer_action');
  }
  public set timerAction(value: string) {
    this._timerAction = value;
  }
  public resetTimerAction() {
    this._timerAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timerActionInput() {
    return this._timerAction;
  }

  // externals - computed: false, optional: true, required: false
  private _externals = new CvmLaunchTemplateVersionActionTimerExternalsOutputReference(this, "externals");
  public get externals() {
    return this._externals;
  }
  public putExternals(value: CvmLaunchTemplateVersionActionTimerExternals) {
    this._externals.internalValue = value;
  }
  public resetExternals() {
    this._externals.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalsInput() {
    return this._externals.internalValue;
  }
}
export interface CvmLaunchTemplateVersionDataDisks {
  /**
  * ID of the dedicated cluster to which the instance belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#cdc_id CvmLaunchTemplateVersion#cdc_id}
  */
  readonly cdcId?: string;
  /**
  * Whether to terminate the data disk when its CVM is terminated. Default value: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#delete_with_instance CvmLaunchTemplateVersion#delete_with_instance}
  */
  readonly deleteWithInstance?: boolean | cdktf.IResolvable;
  /**
  * Data disk size (in GB). The minimum adjustment increment is 10 GB. The value range varies by data disk type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#disk_size CvmLaunchTemplateVersion#disk_size}
  */
  readonly diskSize: number;
  /**
  * The type of data disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#disk_type CvmLaunchTemplateVersion#disk_type}
  */
  readonly diskType?: string;
  /**
  * Specifies whether the data disk is encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#encrypt CvmLaunchTemplateVersion#encrypt}
  */
  readonly encrypt?: boolean | cdktf.IResolvable;
  /**
  * ID of the custom CMK in the format of UUID or `kms-abcd1234`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#kms_key_id CvmLaunchTemplateVersion#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Data disk snapshot ID. The size of the selected data disk snapshot must be smaller than that of the data disk. Note: This field may return null, indicating that no valid value is found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#snapshot_id CvmLaunchTemplateVersion#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Cloud disk performance in MB/s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#throughput_performance CvmLaunchTemplateVersion#throughput_performance}
  */
  readonly throughputPerformance?: number;
}

export function cvmLaunchTemplateVersionDataDisksToTerraform(struct?: CvmLaunchTemplateVersionDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cdc_id: cdktf.stringToTerraform(struct!.cdcId),
    delete_with_instance: cdktf.booleanToTerraform(struct!.deleteWithInstance),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
    encrypt: cdktf.booleanToTerraform(struct!.encrypt),
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    snapshot_id: cdktf.stringToTerraform(struct!.snapshotId),
    throughput_performance: cdktf.numberToTerraform(struct!.throughputPerformance),
  }
}


export function cvmLaunchTemplateVersionDataDisksToHclTerraform(struct?: CvmLaunchTemplateVersionDataDisks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cdc_id: {
      value: cdktf.stringToHclTerraform(struct!.cdcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_with_instance: {
      value: cdktf.booleanToHclTerraform(struct!.deleteWithInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
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
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot_id: {
      value: cdktf.stringToHclTerraform(struct!.snapshotId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throughput_performance: {
      value: cdktf.numberToHclTerraform(struct!.throughputPerformance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmLaunchTemplateVersionDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CvmLaunchTemplateVersionDataDisks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cdcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdcId = this._cdcId;
    }
    if (this._deleteWithInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteWithInstance = this._deleteWithInstance;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    if (this._encrypt !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypt = this._encrypt;
    }
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._snapshotId !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotId = this._snapshotId;
    }
    if (this._throughputPerformance !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughputPerformance = this._throughputPerformance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmLaunchTemplateVersionDataDisks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cdcId = undefined;
      this._deleteWithInstance = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
      this._encrypt = undefined;
      this._kmsKeyId = undefined;
      this._snapshotId = undefined;
      this._throughputPerformance = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cdcId = value.cdcId;
      this._deleteWithInstance = value.deleteWithInstance;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
      this._encrypt = value.encrypt;
      this._kmsKeyId = value.kmsKeyId;
      this._snapshotId = value.snapshotId;
      this._throughputPerformance = value.throughputPerformance;
    }
  }

  // cdc_id - computed: true, optional: true, required: false
  private _cdcId?: string; 
  public get cdcId() {
    return this.getStringAttribute('cdc_id');
  }
  public set cdcId(value: string) {
    this._cdcId = value;
  }
  public resetCdcId() {
    this._cdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcIdInput() {
    return this._cdcId;
  }

  // delete_with_instance - computed: true, optional: true, required: false
  private _deleteWithInstance?: boolean | cdktf.IResolvable; 
  public get deleteWithInstance() {
    return this.getBooleanAttribute('delete_with_instance');
  }
  public set deleteWithInstance(value: boolean | cdktf.IResolvable) {
    this._deleteWithInstance = value;
  }
  public resetDeleteWithInstance() {
    this._deleteWithInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteWithInstanceInput() {
    return this._deleteWithInstance;
  }

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }

  // disk_size - computed: false, optional: false, required: true
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }

  // encrypt - computed: true, optional: true, required: false
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

  // kms_key_id - computed: true, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // snapshot_id - computed: true, optional: true, required: false
  private _snapshotId?: string; 
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }
  public set snapshotId(value: string) {
    this._snapshotId = value;
  }
  public resetSnapshotId() {
    this._snapshotId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotIdInput() {
    return this._snapshotId;
  }

  // throughput_performance - computed: true, optional: true, required: false
  private _throughputPerformance?: number; 
  public get throughputPerformance() {
    return this.getNumberAttribute('throughput_performance');
  }
  public set throughputPerformance(value: number) {
    this._throughputPerformance = value;
  }
  public resetThroughputPerformance() {
    this._throughputPerformance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputPerformanceInput() {
    return this._throughputPerformance;
  }
}

export class CvmLaunchTemplateVersionDataDisksList extends cdktf.ComplexList {
  public internalValue? : CvmLaunchTemplateVersionDataDisks[] | cdktf.IResolvable

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
  public get(index: number): CvmLaunchTemplateVersionDataDisksOutputReference {
    return new CvmLaunchTemplateVersionDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CvmLaunchTemplateVersionEnhancedServiceAutomationService {
  /**
  * Whether to enable the TAT service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#enabled CvmLaunchTemplateVersion#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function cvmLaunchTemplateVersionEnhancedServiceAutomationServiceToTerraform(struct?: CvmLaunchTemplateVersionEnhancedServiceAutomationServiceOutputReference | CvmLaunchTemplateVersionEnhancedServiceAutomationService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cvmLaunchTemplateVersionEnhancedServiceAutomationServiceToHclTerraform(struct?: CvmLaunchTemplateVersionEnhancedServiceAutomationServiceOutputReference | CvmLaunchTemplateVersionEnhancedServiceAutomationService): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmLaunchTemplateVersionEnhancedServiceAutomationServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateVersionEnhancedServiceAutomationService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmLaunchTemplateVersionEnhancedServiceAutomationService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
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
}
export interface CvmLaunchTemplateVersionEnhancedServiceMonitorService {
  /**
  * Whether to enable Cloud Monitor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#enabled CvmLaunchTemplateVersion#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function cvmLaunchTemplateVersionEnhancedServiceMonitorServiceToTerraform(struct?: CvmLaunchTemplateVersionEnhancedServiceMonitorServiceOutputReference | CvmLaunchTemplateVersionEnhancedServiceMonitorService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cvmLaunchTemplateVersionEnhancedServiceMonitorServiceToHclTerraform(struct?: CvmLaunchTemplateVersionEnhancedServiceMonitorServiceOutputReference | CvmLaunchTemplateVersionEnhancedServiceMonitorService): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmLaunchTemplateVersionEnhancedServiceMonitorServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateVersionEnhancedServiceMonitorService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmLaunchTemplateVersionEnhancedServiceMonitorService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
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
}
export interface CvmLaunchTemplateVersionEnhancedServiceSecurityService {
  /**
  * Whether to enable Cloud Security.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#enabled CvmLaunchTemplateVersion#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function cvmLaunchTemplateVersionEnhancedServiceSecurityServiceToTerraform(struct?: CvmLaunchTemplateVersionEnhancedServiceSecurityServiceOutputReference | CvmLaunchTemplateVersionEnhancedServiceSecurityService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cvmLaunchTemplateVersionEnhancedServiceSecurityServiceToHclTerraform(struct?: CvmLaunchTemplateVersionEnhancedServiceSecurityServiceOutputReference | CvmLaunchTemplateVersionEnhancedServiceSecurityService): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmLaunchTemplateVersionEnhancedServiceSecurityServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateVersionEnhancedServiceSecurityService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmLaunchTemplateVersionEnhancedServiceSecurityService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
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
}
export interface CvmLaunchTemplateVersionEnhancedService {
  /**
  * automation_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#automation_service CvmLaunchTemplateVersion#automation_service}
  */
  readonly automationService?: CvmLaunchTemplateVersionEnhancedServiceAutomationService;
  /**
  * monitor_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#monitor_service CvmLaunchTemplateVersion#monitor_service}
  */
  readonly monitorService?: CvmLaunchTemplateVersionEnhancedServiceMonitorService;
  /**
  * security_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#security_service CvmLaunchTemplateVersion#security_service}
  */
  readonly securityService?: CvmLaunchTemplateVersionEnhancedServiceSecurityService;
}

export function cvmLaunchTemplateVersionEnhancedServiceToTerraform(struct?: CvmLaunchTemplateVersionEnhancedServiceOutputReference | CvmLaunchTemplateVersionEnhancedService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automation_service: cvmLaunchTemplateVersionEnhancedServiceAutomationServiceToTerraform(struct!.automationService),
    monitor_service: cvmLaunchTemplateVersionEnhancedServiceMonitorServiceToTerraform(struct!.monitorService),
    security_service: cvmLaunchTemplateVersionEnhancedServiceSecurityServiceToTerraform(struct!.securityService),
  }
}


export function cvmLaunchTemplateVersionEnhancedServiceToHclTerraform(struct?: CvmLaunchTemplateVersionEnhancedServiceOutputReference | CvmLaunchTemplateVersionEnhancedService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automation_service: {
      value: cvmLaunchTemplateVersionEnhancedServiceAutomationServiceToHclTerraform(struct!.automationService),
      isBlock: true,
      type: "list",
      storageClassType: "CvmLaunchTemplateVersionEnhancedServiceAutomationServiceList",
    },
    monitor_service: {
      value: cvmLaunchTemplateVersionEnhancedServiceMonitorServiceToHclTerraform(struct!.monitorService),
      isBlock: true,
      type: "list",
      storageClassType: "CvmLaunchTemplateVersionEnhancedServiceMonitorServiceList",
    },
    security_service: {
      value: cvmLaunchTemplateVersionEnhancedServiceSecurityServiceToHclTerraform(struct!.securityService),
      isBlock: true,
      type: "list",
      storageClassType: "CvmLaunchTemplateVersionEnhancedServiceSecurityServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmLaunchTemplateVersionEnhancedServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateVersionEnhancedService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automationService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automationService = this._automationService?.internalValue;
    }
    if (this._monitorService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorService = this._monitorService?.internalValue;
    }
    if (this._securityService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityService = this._securityService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmLaunchTemplateVersionEnhancedService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automationService.internalValue = undefined;
      this._monitorService.internalValue = undefined;
      this._securityService.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automationService.internalValue = value.automationService;
      this._monitorService.internalValue = value.monitorService;
      this._securityService.internalValue = value.securityService;
    }
  }

  // automation_service - computed: false, optional: true, required: false
  private _automationService = new CvmLaunchTemplateVersionEnhancedServiceAutomationServiceOutputReference(this, "automation_service");
  public get automationService() {
    return this._automationService;
  }
  public putAutomationService(value: CvmLaunchTemplateVersionEnhancedServiceAutomationService) {
    this._automationService.internalValue = value;
  }
  public resetAutomationService() {
    this._automationService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automationServiceInput() {
    return this._automationService.internalValue;
  }

  // monitor_service - computed: false, optional: true, required: false
  private _monitorService = new CvmLaunchTemplateVersionEnhancedServiceMonitorServiceOutputReference(this, "monitor_service");
  public get monitorService() {
    return this._monitorService;
  }
  public putMonitorService(value: CvmLaunchTemplateVersionEnhancedServiceMonitorService) {
    this._monitorService.internalValue = value;
  }
  public resetMonitorService() {
    this._monitorService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorServiceInput() {
    return this._monitorService.internalValue;
  }

  // security_service - computed: false, optional: true, required: false
  private _securityService = new CvmLaunchTemplateVersionEnhancedServiceSecurityServiceOutputReference(this, "security_service");
  public get securityService() {
    return this._securityService;
  }
  public putSecurityService(value: CvmLaunchTemplateVersionEnhancedServiceSecurityService) {
    this._securityService.internalValue = value;
  }
  public resetSecurityService() {
    this._securityService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityServiceInput() {
    return this._securityService.internalValue;
  }
}
export interface CvmLaunchTemplateVersionInstanceChargePrepaid {
  /**
  * Subscription period; unit: month; valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 24, 36, 48, 60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#period CvmLaunchTemplateVersion#period}
  */
  readonly period: number;
  /**
  * Auto renewal flag. Valid values: NOTIFY_AND_AUTO_RENEW: notify upon expiration and renew automatically NOTIFY_AND_MANUAL_RENEW: notify upon expiration but do not renew automatically DISABLE_NOTIFY_AND_MANUAL_RENEW: neither notify upon expiration nor renew automatically &lt;br&gt;&lt;br&gt;Default value: NOTIFY_AND_MANUAL_RENEW. If this parameter is specified as NOTIFY_AND_AUTO_RENEW, the instance will be automatically renewed on a monthly basis if the account balance is sufficient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#renew_flag CvmLaunchTemplateVersion#renew_flag}
  */
  readonly renewFlag?: string;
}

export function cvmLaunchTemplateVersionInstanceChargePrepaidToTerraform(struct?: CvmLaunchTemplateVersionInstanceChargePrepaidOutputReference | CvmLaunchTemplateVersionInstanceChargePrepaid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period: cdktf.numberToTerraform(struct!.period),
    renew_flag: cdktf.stringToTerraform(struct!.renewFlag),
  }
}


export function cvmLaunchTemplateVersionInstanceChargePrepaidToHclTerraform(struct?: CvmLaunchTemplateVersionInstanceChargePrepaidOutputReference | CvmLaunchTemplateVersionInstanceChargePrepaid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    renew_flag: {
      value: cdktf.stringToHclTerraform(struct!.renewFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmLaunchTemplateVersionInstanceChargePrepaidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateVersionInstanceChargePrepaid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._renewFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewFlag = this._renewFlag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmLaunchTemplateVersionInstanceChargePrepaid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._period = undefined;
      this._renewFlag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._period = value.period;
      this._renewFlag = value.renewFlag;
    }
  }

  // period - computed: false, optional: false, required: true
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // renew_flag - computed: true, optional: true, required: false
  private _renewFlag?: string; 
  public get renewFlag() {
    return this.getStringAttribute('renew_flag');
  }
  public set renewFlag(value: string) {
    this._renewFlag = value;
  }
  public resetRenewFlag() {
    this._renewFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewFlagInput() {
    return this._renewFlag;
  }
}
export interface CvmLaunchTemplateVersionInstanceMarketOptionsSpotOptions {
  /**
  * Bidding price.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#max_price CvmLaunchTemplateVersion#max_price}
  */
  readonly maxPrice: string;
  /**
  * Bidding request type. Currently only one-time is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#spot_instance_type CvmLaunchTemplateVersion#spot_instance_type}
  */
  readonly spotInstanceType?: string;
}

export function cvmLaunchTemplateVersionInstanceMarketOptionsSpotOptionsToTerraform(struct?: CvmLaunchTemplateVersionInstanceMarketOptionsSpotOptionsOutputReference | CvmLaunchTemplateVersionInstanceMarketOptionsSpotOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_price: cdktf.stringToTerraform(struct!.maxPrice),
    spot_instance_type: cdktf.stringToTerraform(struct!.spotInstanceType),
  }
}


export function cvmLaunchTemplateVersionInstanceMarketOptionsSpotOptionsToHclTerraform(struct?: CvmLaunchTemplateVersionInstanceMarketOptionsSpotOptionsOutputReference | CvmLaunchTemplateVersionInstanceMarketOptionsSpotOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_price: {
      value: cdktf.stringToHclTerraform(struct!.maxPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_instance_type: {
      value: cdktf.stringToHclTerraform(struct!.spotInstanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmLaunchTemplateVersionInstanceMarketOptionsSpotOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateVersionInstanceMarketOptionsSpotOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPrice = this._maxPrice;
    }
    if (this._spotInstanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotInstanceType = this._spotInstanceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmLaunchTemplateVersionInstanceMarketOptionsSpotOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxPrice = undefined;
      this._spotInstanceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxPrice = value.maxPrice;
      this._spotInstanceType = value.spotInstanceType;
    }
  }

  // max_price - computed: false, optional: false, required: true
  private _maxPrice?: string; 
  public get maxPrice() {
    return this.getStringAttribute('max_price');
  }
  public set maxPrice(value: string) {
    this._maxPrice = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPriceInput() {
    return this._maxPrice;
  }

  // spot_instance_type - computed: true, optional: true, required: false
  private _spotInstanceType?: string; 
  public get spotInstanceType() {
    return this.getStringAttribute('spot_instance_type');
  }
  public set spotInstanceType(value: string) {
    this._spotInstanceType = value;
  }
  public resetSpotInstanceType() {
    this._spotInstanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInstanceTypeInput() {
    return this._spotInstanceType;
  }
}
export interface CvmLaunchTemplateVersionInstanceMarketOptions {
  /**
  * Market option type. Currently spot is the only supported value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#market_type CvmLaunchTemplateVersion#market_type}
  */
  readonly marketType?: string;
  /**
  * spot_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#spot_options CvmLaunchTemplateVersion#spot_options}
  */
  readonly spotOptions: CvmLaunchTemplateVersionInstanceMarketOptionsSpotOptions;
}

export function cvmLaunchTemplateVersionInstanceMarketOptionsToTerraform(struct?: CvmLaunchTemplateVersionInstanceMarketOptionsOutputReference | CvmLaunchTemplateVersionInstanceMarketOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    market_type: cdktf.stringToTerraform(struct!.marketType),
    spot_options: cvmLaunchTemplateVersionInstanceMarketOptionsSpotOptionsToTerraform(struct!.spotOptions),
  }
}


export function cvmLaunchTemplateVersionInstanceMarketOptionsToHclTerraform(struct?: CvmLaunchTemplateVersionInstanceMarketOptionsOutputReference | CvmLaunchTemplateVersionInstanceMarketOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    market_type: {
      value: cdktf.stringToHclTerraform(struct!.marketType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_options: {
      value: cvmLaunchTemplateVersionInstanceMarketOptionsSpotOptionsToHclTerraform(struct!.spotOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CvmLaunchTemplateVersionInstanceMarketOptionsSpotOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmLaunchTemplateVersionInstanceMarketOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateVersionInstanceMarketOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._marketType !== undefined) {
      hasAnyValues = true;
      internalValueResult.marketType = this._marketType;
    }
    if (this._spotOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotOptions = this._spotOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmLaunchTemplateVersionInstanceMarketOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._marketType = undefined;
      this._spotOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._marketType = value.marketType;
      this._spotOptions.internalValue = value.spotOptions;
    }
  }

  // market_type - computed: true, optional: true, required: false
  private _marketType?: string; 
  public get marketType() {
    return this.getStringAttribute('market_type');
  }
  public set marketType(value: string) {
    this._marketType = value;
  }
  public resetMarketType() {
    this._marketType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get marketTypeInput() {
    return this._marketType;
  }

  // spot_options - computed: false, optional: false, required: true
  private _spotOptions = new CvmLaunchTemplateVersionInstanceMarketOptionsSpotOptionsOutputReference(this, "spot_options");
  public get spotOptions() {
    return this._spotOptions;
  }
  public putSpotOptions(value: CvmLaunchTemplateVersionInstanceMarketOptionsSpotOptions) {
    this._spotOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spotOptionsInput() {
    return this._spotOptions.internalValue;
  }
}
export interface CvmLaunchTemplateVersionInternetAccessible {
  /**
  * Bandwidth package ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#bandwidth_package_id CvmLaunchTemplateVersion#bandwidth_package_id}
  */
  readonly bandwidthPackageId?: string;
  /**
  * Network connection billing plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#internet_charge_type CvmLaunchTemplateVersion#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * The maximum outbound bandwidth of the public network, in Mbps. The default value is 0 Mbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#internet_max_bandwidth_out CvmLaunchTemplateVersion#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * Whether to assign a public IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#public_ip_assigned CvmLaunchTemplateVersion#public_ip_assigned}
  */
  readonly publicIpAssigned?: boolean | cdktf.IResolvable;
}

export function cvmLaunchTemplateVersionInternetAccessibleToTerraform(struct?: CvmLaunchTemplateVersionInternetAccessibleOutputReference | CvmLaunchTemplateVersionInternetAccessible): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_package_id: cdktf.stringToTerraform(struct!.bandwidthPackageId),
    internet_charge_type: cdktf.stringToTerraform(struct!.internetChargeType),
    internet_max_bandwidth_out: cdktf.numberToTerraform(struct!.internetMaxBandwidthOut),
    public_ip_assigned: cdktf.booleanToTerraform(struct!.publicIpAssigned),
  }
}


export function cvmLaunchTemplateVersionInternetAccessibleToHclTerraform(struct?: CvmLaunchTemplateVersionInternetAccessibleOutputReference | CvmLaunchTemplateVersionInternetAccessible): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_package_id: {
      value: cdktf.stringToHclTerraform(struct!.bandwidthPackageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_charge_type: {
      value: cdktf.stringToHclTerraform(struct!.internetChargeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    internet_max_bandwidth_out: {
      value: cdktf.numberToHclTerraform(struct!.internetMaxBandwidthOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    public_ip_assigned: {
      value: cdktf.booleanToHclTerraform(struct!.publicIpAssigned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmLaunchTemplateVersionInternetAccessibleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateVersionInternetAccessible | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthPackageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthPackageId = this._bandwidthPackageId;
    }
    if (this._internetChargeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetChargeType = this._internetChargeType;
    }
    if (this._internetMaxBandwidthOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.internetMaxBandwidthOut = this._internetMaxBandwidthOut;
    }
    if (this._publicIpAssigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpAssigned = this._publicIpAssigned;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmLaunchTemplateVersionInternetAccessible | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bandwidthPackageId = undefined;
      this._internetChargeType = undefined;
      this._internetMaxBandwidthOut = undefined;
      this._publicIpAssigned = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bandwidthPackageId = value.bandwidthPackageId;
      this._internetChargeType = value.internetChargeType;
      this._internetMaxBandwidthOut = value.internetMaxBandwidthOut;
      this._publicIpAssigned = value.publicIpAssigned;
    }
  }

  // bandwidth_package_id - computed: true, optional: true, required: false
  private _bandwidthPackageId?: string; 
  public get bandwidthPackageId() {
    return this.getStringAttribute('bandwidth_package_id');
  }
  public set bandwidthPackageId(value: string) {
    this._bandwidthPackageId = value;
  }
  public resetBandwidthPackageId() {
    this._bandwidthPackageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthPackageIdInput() {
    return this._bandwidthPackageId;
  }

  // internet_charge_type - computed: true, optional: true, required: false
  private _internetChargeType?: string; 
  public get internetChargeType() {
    return this.getStringAttribute('internet_charge_type');
  }
  public set internetChargeType(value: string) {
    this._internetChargeType = value;
  }
  public resetInternetChargeType() {
    this._internetChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetChargeTypeInput() {
    return this._internetChargeType;
  }

  // internet_max_bandwidth_out - computed: true, optional: true, required: false
  private _internetMaxBandwidthOut?: number; 
  public get internetMaxBandwidthOut() {
    return this.getNumberAttribute('internet_max_bandwidth_out');
  }
  public set internetMaxBandwidthOut(value: number) {
    this._internetMaxBandwidthOut = value;
  }
  public resetInternetMaxBandwidthOut() {
    this._internetMaxBandwidthOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetMaxBandwidthOutInput() {
    return this._internetMaxBandwidthOut;
  }

  // public_ip_assigned - computed: true, optional: true, required: false
  private _publicIpAssigned?: boolean | cdktf.IResolvable; 
  public get publicIpAssigned() {
    return this.getBooleanAttribute('public_ip_assigned');
  }
  public set publicIpAssigned(value: boolean | cdktf.IResolvable) {
    this._publicIpAssigned = value;
  }
  public resetPublicIpAssigned() {
    this._publicIpAssigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpAssignedInput() {
    return this._publicIpAssigned;
  }
}
export interface CvmLaunchTemplateVersionLoginSettings {
  /**
  * Whether to keep the original settings of an image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#keep_image_login CvmLaunchTemplateVersion#keep_image_login}
  */
  readonly keepImageLogin?: string;
  /**
  * List of key IDs. After an instance is associated with a key, you can access the instance with the private key in the key pair.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#key_ids CvmLaunchTemplateVersion#key_ids}
  */
  readonly keyIds?: string[];
  /**
  * Login password of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#password CvmLaunchTemplateVersion#password}
  */
  readonly password?: string;
}

export function cvmLaunchTemplateVersionLoginSettingsToTerraform(struct?: CvmLaunchTemplateVersionLoginSettingsOutputReference | CvmLaunchTemplateVersionLoginSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_image_login: cdktf.stringToTerraform(struct!.keepImageLogin),
    key_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keyIds),
    password: cdktf.stringToTerraform(struct!.password),
  }
}


export function cvmLaunchTemplateVersionLoginSettingsToHclTerraform(struct?: CvmLaunchTemplateVersionLoginSettingsOutputReference | CvmLaunchTemplateVersionLoginSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keep_image_login: {
      value: cdktf.stringToHclTerraform(struct!.keepImageLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keyIds),
      isBlock: false,
      type: "set",
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

export class CvmLaunchTemplateVersionLoginSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateVersionLoginSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepImageLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepImageLogin = this._keepImageLogin;
    }
    if (this._keyIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyIds = this._keyIds;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmLaunchTemplateVersionLoginSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keepImageLogin = undefined;
      this._keyIds = undefined;
      this._password = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keepImageLogin = value.keepImageLogin;
      this._keyIds = value.keyIds;
      this._password = value.password;
    }
  }

  // keep_image_login - computed: true, optional: true, required: false
  private _keepImageLogin?: string; 
  public get keepImageLogin() {
    return this.getStringAttribute('keep_image_login');
  }
  public set keepImageLogin(value: string) {
    this._keepImageLogin = value;
  }
  public resetKeepImageLogin() {
    this._keepImageLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepImageLoginInput() {
    return this._keepImageLogin;
  }

  // key_ids - computed: true, optional: true, required: false
  private _keyIds?: string[]; 
  public get keyIds() {
    return cdktf.Fn.tolist(this.getListAttribute('key_ids'));
  }
  public set keyIds(value: string[]) {
    this._keyIds = value;
  }
  public resetKeyIds() {
    this._keyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdsInput() {
    return this._keyIds;
  }

  // password - computed: true, optional: true, required: false
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
export interface CvmLaunchTemplateVersionPlacement {
  /**
  * ID list of CDHs from which the instance can be created. If you have purchased CDHs and specify this parameter, the instances you purchase will be randomly deployed on the CDHs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#host_ids CvmLaunchTemplateVersion#host_ids}
  */
  readonly hostIds?: string[];
  /**
  * IPs of the hosts to create CVMs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#host_ips CvmLaunchTemplateVersion#host_ips}
  */
  readonly hostIps?: string[];
  /**
  * ID of the project to which the instance belongs. This parameter can be obtained from the projectId returned by DescribeProject. If this is left empty, the default project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#project_id CvmLaunchTemplateVersion#project_id}
  */
  readonly projectId?: number;
  /**
  * ID of the availability zone where the instance resides. You can call the DescribeZones API and obtain the ID in the returned Zone field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#zone CvmLaunchTemplateVersion#zone}
  */
  readonly zone: string;
}

export function cvmLaunchTemplateVersionPlacementToTerraform(struct?: CvmLaunchTemplateVersionPlacementOutputReference | CvmLaunchTemplateVersionPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostIds),
    host_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hostIps),
    project_id: cdktf.numberToTerraform(struct!.projectId),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function cvmLaunchTemplateVersionPlacementToHclTerraform(struct?: CvmLaunchTemplateVersionPlacementOutputReference | CvmLaunchTemplateVersionPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    host_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hostIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    project_id: {
      value: cdktf.numberToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmLaunchTemplateVersionPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateVersionPlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIds = this._hostIds;
    }
    if (this._hostIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIps = this._hostIps;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmLaunchTemplateVersionPlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostIds = undefined;
      this._hostIps = undefined;
      this._projectId = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostIds = value.hostIds;
      this._hostIps = value.hostIps;
      this._projectId = value.projectId;
      this._zone = value.zone;
    }
  }

  // host_ids - computed: true, optional: true, required: false
  private _hostIds?: string[]; 
  public get hostIds() {
    return cdktf.Fn.tolist(this.getListAttribute('host_ids'));
  }
  public set hostIds(value: string[]) {
    this._hostIds = value;
  }
  public resetHostIds() {
    this._hostIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdsInput() {
    return this._hostIds;
  }

  // host_ips - computed: true, optional: true, required: false
  private _hostIps?: string[]; 
  public get hostIps() {
    return cdktf.Fn.tolist(this.getListAttribute('host_ips'));
  }
  public set hostIps(value: string[]) {
    this._hostIps = value;
  }
  public resetHostIps() {
    this._hostIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpsInput() {
    return this._hostIps;
  }

  // project_id - computed: true, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface CvmLaunchTemplateVersionSystemDisk {
  /**
  * ID of the dedicated cluster to which the instance belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#cdc_id CvmLaunchTemplateVersion#cdc_id}
  */
  readonly cdcId?: string;
  /**
  * System disk size; unit: GB; default value: 50 GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#disk_size CvmLaunchTemplateVersion#disk_size}
  */
  readonly diskSize?: number;
  /**
  * The type of system disk. Default value: the type of hard disk currently in stock.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#disk_type CvmLaunchTemplateVersion#disk_type}
  */
  readonly diskType?: string;
}

export function cvmLaunchTemplateVersionSystemDiskToTerraform(struct?: CvmLaunchTemplateVersionSystemDiskOutputReference | CvmLaunchTemplateVersionSystemDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cdc_id: cdktf.stringToTerraform(struct!.cdcId),
    disk_size: cdktf.numberToTerraform(struct!.diskSize),
    disk_type: cdktf.stringToTerraform(struct!.diskType),
  }
}


export function cvmLaunchTemplateVersionSystemDiskToHclTerraform(struct?: CvmLaunchTemplateVersionSystemDiskOutputReference | CvmLaunchTemplateVersionSystemDisk): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cdc_id: {
      value: cdktf.stringToHclTerraform(struct!.cdcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.numberToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disk_type: {
      value: cdktf.stringToHclTerraform(struct!.diskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmLaunchTemplateVersionSystemDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateVersionSystemDisk | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cdcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdcId = this._cdcId;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._diskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskType = this._diskType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmLaunchTemplateVersionSystemDisk | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cdcId = undefined;
      this._diskSize = undefined;
      this._diskType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cdcId = value.cdcId;
      this._diskSize = value.diskSize;
      this._diskType = value.diskType;
    }
  }

  // cdc_id - computed: true, optional: true, required: false
  private _cdcId?: string; 
  public get cdcId() {
    return this.getStringAttribute('cdc_id');
  }
  public set cdcId(value: string) {
    this._cdcId = value;
  }
  public resetCdcId() {
    this._cdcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdcIdInput() {
    return this._cdcId;
  }

  // disk_id - computed: true, optional: false, required: false
  public get diskId() {
    return this.getStringAttribute('disk_id');
  }

  // disk_size - computed: true, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // disk_type - computed: true, optional: true, required: false
  private _diskType?: string; 
  public get diskType() {
    return this.getStringAttribute('disk_type');
  }
  public set diskType(value: string) {
    this._diskType = value;
  }
  public resetDiskType() {
    this._diskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskTypeInput() {
    return this._diskType;
  }
}
export interface CvmLaunchTemplateVersionTagSpecificationTags {
  /**
  * Tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#key CvmLaunchTemplateVersion#key}
  */
  readonly key: string;
  /**
  * Tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#value CvmLaunchTemplateVersion#value}
  */
  readonly value: string;
}

export function cvmLaunchTemplateVersionTagSpecificationTagsToTerraform(struct?: CvmLaunchTemplateVersionTagSpecificationTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cvmLaunchTemplateVersionTagSpecificationTagsToHclTerraform(struct?: CvmLaunchTemplateVersionTagSpecificationTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class CvmLaunchTemplateVersionTagSpecificationTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CvmLaunchTemplateVersionTagSpecificationTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmLaunchTemplateVersionTagSpecificationTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CvmLaunchTemplateVersionTagSpecificationTagsList extends cdktf.ComplexList {
  public internalValue? : CvmLaunchTemplateVersionTagSpecificationTags[] | cdktf.IResolvable

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
  public get(index: number): CvmLaunchTemplateVersionTagSpecificationTagsOutputReference {
    return new CvmLaunchTemplateVersionTagSpecificationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CvmLaunchTemplateVersionTagSpecification {
  /**
  * The type of resource that the tag is bound to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#resource_type CvmLaunchTemplateVersion#resource_type}
  */
  readonly resourceType: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#tags CvmLaunchTemplateVersion#tags}
  */
  readonly tags: CvmLaunchTemplateVersionTagSpecificationTags[] | cdktf.IResolvable;
}

export function cvmLaunchTemplateVersionTagSpecificationToTerraform(struct?: CvmLaunchTemplateVersionTagSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    tags: cdktf.listMapper(cvmLaunchTemplateVersionTagSpecificationTagsToTerraform, true)(struct!.tags),
  }
}


export function cvmLaunchTemplateVersionTagSpecificationToHclTerraform(struct?: CvmLaunchTemplateVersionTagSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cvmLaunchTemplateVersionTagSpecificationTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "CvmLaunchTemplateVersionTagSpecificationTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmLaunchTemplateVersionTagSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CvmLaunchTemplateVersionTagSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmLaunchTemplateVersionTagSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceType = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceType = value.resourceType;
      this._tags.internalValue = value.tags;
    }
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // tags - computed: false, optional: false, required: true
  private _tags = new CvmLaunchTemplateVersionTagSpecificationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CvmLaunchTemplateVersionTagSpecificationTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class CvmLaunchTemplateVersionTagSpecificationList extends cdktf.ComplexList {
  public internalValue? : CvmLaunchTemplateVersionTagSpecification[] | cdktf.IResolvable

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
  public get(index: number): CvmLaunchTemplateVersionTagSpecificationOutputReference {
    return new CvmLaunchTemplateVersionTagSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CvmLaunchTemplateVersionVirtualPrivateCloud {
  /**
  * Whether to use a CVM instance as a public gateway. The public gateway is only available when the instance has a public IP and resides in a VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#as_vpc_gateway CvmLaunchTemplateVersion#as_vpc_gateway}
  */
  readonly asVpcGateway?: boolean | cdktf.IResolvable;
  /**
  * Number of IPv6 addresses randomly generated for the ENI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#ipv6_address_count CvmLaunchTemplateVersion#ipv6_address_count}
  */
  readonly ipv6AddressCount?: number;
  /**
  * Array of VPC subnet IPs. You can use this parameter when creating instances or modifying VPC attributes of instances. Currently you can specify multiple IPs in one subnet only when creating multiple instances at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#private_ip_addresses CvmLaunchTemplateVersion#private_ip_addresses}
  */
  readonly privateIpAddresses?: string[];
  /**
  * VPC subnet ID in the format subnet-xxx, if you specify DEFAULT for both VpcId and SubnetId when creating an instance, the default VPC will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#subnet_id CvmLaunchTemplateVersion#subnet_id}
  */
  readonly subnetId: string;
  /**
  * VPC ID in the format of vpc-xxx, if you specify DEFAULT for both VpcId and SubnetId when creating an instance, the default VPC will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#vpc_id CvmLaunchTemplateVersion#vpc_id}
  */
  readonly vpcId: string;
}

export function cvmLaunchTemplateVersionVirtualPrivateCloudToTerraform(struct?: CvmLaunchTemplateVersionVirtualPrivateCloudOutputReference | CvmLaunchTemplateVersionVirtualPrivateCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_vpc_gateway: cdktf.booleanToTerraform(struct!.asVpcGateway),
    ipv6_address_count: cdktf.numberToTerraform(struct!.ipv6AddressCount),
    private_ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privateIpAddresses),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
  }
}


export function cvmLaunchTemplateVersionVirtualPrivateCloudToHclTerraform(struct?: CvmLaunchTemplateVersionVirtualPrivateCloudOutputReference | CvmLaunchTemplateVersionVirtualPrivateCloud): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_vpc_gateway: {
      value: cdktf.booleanToHclTerraform(struct!.asVpcGateway),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipv6_address_count: {
      value: cdktf.numberToHclTerraform(struct!.ipv6AddressCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_ip_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privateIpAddresses),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmLaunchTemplateVersionVirtualPrivateCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateVersionVirtualPrivateCloud | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asVpcGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.asVpcGateway = this._asVpcGateway;
    }
    if (this._ipv6AddressCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressCount = this._ipv6AddressCount;
    }
    if (this._privateIpAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddresses = this._privateIpAddresses;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmLaunchTemplateVersionVirtualPrivateCloud | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asVpcGateway = undefined;
      this._ipv6AddressCount = undefined;
      this._privateIpAddresses = undefined;
      this._subnetId = undefined;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asVpcGateway = value.asVpcGateway;
      this._ipv6AddressCount = value.ipv6AddressCount;
      this._privateIpAddresses = value.privateIpAddresses;
      this._subnetId = value.subnetId;
      this._vpcId = value.vpcId;
    }
  }

  // as_vpc_gateway - computed: true, optional: true, required: false
  private _asVpcGateway?: boolean | cdktf.IResolvable; 
  public get asVpcGateway() {
    return this.getBooleanAttribute('as_vpc_gateway');
  }
  public set asVpcGateway(value: boolean | cdktf.IResolvable) {
    this._asVpcGateway = value;
  }
  public resetAsVpcGateway() {
    this._asVpcGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asVpcGatewayInput() {
    return this._asVpcGateway;
  }

  // ipv6_address_count - computed: true, optional: true, required: false
  private _ipv6AddressCount?: number; 
  public get ipv6AddressCount() {
    return this.getNumberAttribute('ipv6_address_count');
  }
  public set ipv6AddressCount(value: number) {
    this._ipv6AddressCount = value;
  }
  public resetIpv6AddressCount() {
    this._ipv6AddressCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressCountInput() {
    return this._ipv6AddressCount;
  }

  // private_ip_addresses - computed: true, optional: true, required: false
  private _privateIpAddresses?: string[]; 
  public get privateIpAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('private_ip_addresses'));
  }
  public set privateIpAddresses(value: string[]) {
    this._privateIpAddresses = value;
  }
  public resetPrivateIpAddresses() {
    this._privateIpAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressesInput() {
    return this._privateIpAddresses;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version tencentcloud_cvm_launch_template_version}
*/
export class CvmLaunchTemplateVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cvm_launch_template_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CvmLaunchTemplateVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CvmLaunchTemplateVersion to import
  * @param importFromId The id of the existing CvmLaunchTemplateVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CvmLaunchTemplateVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cvm_launch_template_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.43/docs/resources/cvm_launch_template_version tencentcloud_cvm_launch_template_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CvmLaunchTemplateVersionConfig
  */
  public constructor(scope: Construct, id: string, config: CvmLaunchTemplateVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cvm_launch_template_version',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.43',
        providerVersionConstraint: '1.82.43'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._camRoleName = config.camRoleName;
    this._clientToken = config.clientToken;
    this._disableApiTermination = config.disableApiTermination;
    this._disasterRecoverGroupIds = config.disasterRecoverGroupIds;
    this._dryRun = config.dryRun;
    this._hostName = config.hostName;
    this._hpcClusterId = config.hpcClusterId;
    this._id = config.id;
    this._imageId = config.imageId;
    this._instanceChargeType = config.instanceChargeType;
    this._instanceCount = config.instanceCount;
    this._instanceName = config.instanceName;
    this._instanceType = config.instanceType;
    this._launchTemplateId = config.launchTemplateId;
    this._launchTemplateVersion = config.launchTemplateVersion;
    this._launchTemplateVersionDescription = config.launchTemplateVersionDescription;
    this._securityGroupIds = config.securityGroupIds;
    this._userData = config.userData;
    this._actionTimer.internalValue = config.actionTimer;
    this._dataDisks.internalValue = config.dataDisks;
    this._enhancedService.internalValue = config.enhancedService;
    this._instanceChargePrepaid.internalValue = config.instanceChargePrepaid;
    this._instanceMarketOptions.internalValue = config.instanceMarketOptions;
    this._internetAccessible.internalValue = config.internetAccessible;
    this._loginSettings.internalValue = config.loginSettings;
    this._placement.internalValue = config.placement;
    this._systemDisk.internalValue = config.systemDisk;
    this._tagSpecification.internalValue = config.tagSpecification;
    this._virtualPrivateCloud.internalValue = config.virtualPrivateCloud;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cam_role_name - computed: true, optional: true, required: false
  private _camRoleName?: string; 
  public get camRoleName() {
    return this.getStringAttribute('cam_role_name');
  }
  public set camRoleName(value: string) {
    this._camRoleName = value;
  }
  public resetCamRoleName() {
    this._camRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get camRoleNameInput() {
    return this._camRoleName;
  }

  // client_token - computed: true, optional: true, required: false
  private _clientToken?: string; 
  public get clientToken() {
    return this.getStringAttribute('client_token');
  }
  public set clientToken(value: string) {
    this._clientToken = value;
  }
  public resetClientToken() {
    this._clientToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTokenInput() {
    return this._clientToken;
  }

  // disable_api_termination - computed: true, optional: true, required: false
  private _disableApiTermination?: boolean | cdktf.IResolvable; 
  public get disableApiTermination() {
    return this.getBooleanAttribute('disable_api_termination');
  }
  public set disableApiTermination(value: boolean | cdktf.IResolvable) {
    this._disableApiTermination = value;
  }
  public resetDisableApiTermination() {
    this._disableApiTermination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableApiTerminationInput() {
    return this._disableApiTermination;
  }

  // disaster_recover_group_ids - computed: false, optional: true, required: false
  private _disasterRecoverGroupIds?: string[]; 
  public get disasterRecoverGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('disaster_recover_group_ids'));
  }
  public set disasterRecoverGroupIds(value: string[]) {
    this._disasterRecoverGroupIds = value;
  }
  public resetDisasterRecoverGroupIds() {
    this._disasterRecoverGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disasterRecoverGroupIdsInput() {
    return this._disasterRecoverGroupIds;
  }

  // dry_run - computed: true, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // host_name - computed: true, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
  }

  // hpc_cluster_id - computed: true, optional: true, required: false
  private _hpcClusterId?: string; 
  public get hpcClusterId() {
    return this.getStringAttribute('hpc_cluster_id');
  }
  public set hpcClusterId(value: string) {
    this._hpcClusterId = value;
  }
  public resetHpcClusterId() {
    this._hpcClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpcClusterIdInput() {
    return this._hpcClusterId;
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

  // instance_charge_type - computed: true, optional: true, required: false
  private _instanceChargeType?: string; 
  public get instanceChargeType() {
    return this.getStringAttribute('instance_charge_type');
  }
  public set instanceChargeType(value: string) {
    this._instanceChargeType = value;
  }
  public resetInstanceChargeType() {
    this._instanceChargeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargeTypeInput() {
    return this._instanceChargeType;
  }

  // instance_count - computed: true, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // instance_name - computed: true, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // instance_type - computed: true, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // launch_template_id - computed: false, optional: false, required: true
  private _launchTemplateId?: string; 
  public get launchTemplateId() {
    return this.getStringAttribute('launch_template_id');
  }
  public set launchTemplateId(value: string) {
    this._launchTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateIdInput() {
    return this._launchTemplateId;
  }

  // launch_template_version - computed: true, optional: true, required: false
  private _launchTemplateVersion?: number; 
  public get launchTemplateVersion() {
    return this.getNumberAttribute('launch_template_version');
  }
  public set launchTemplateVersion(value: number) {
    this._launchTemplateVersion = value;
  }
  public resetLaunchTemplateVersion() {
    this._launchTemplateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateVersionInput() {
    return this._launchTemplateVersion;
  }

  // launch_template_version_description - computed: true, optional: true, required: false
  private _launchTemplateVersionDescription?: string; 
  public get launchTemplateVersionDescription() {
    return this.getStringAttribute('launch_template_version_description');
  }
  public set launchTemplateVersionDescription(value: string) {
    this._launchTemplateVersionDescription = value;
  }
  public resetLaunchTemplateVersionDescription() {
    this._launchTemplateVersionDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateVersionDescriptionInput() {
    return this._launchTemplateVersionDescription;
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

  // user_data - computed: true, optional: true, required: false
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

  // action_timer - computed: false, optional: true, required: false
  private _actionTimer = new CvmLaunchTemplateVersionActionTimerOutputReference(this, "action_timer");
  public get actionTimer() {
    return this._actionTimer;
  }
  public putActionTimer(value: CvmLaunchTemplateVersionActionTimer) {
    this._actionTimer.internalValue = value;
  }
  public resetActionTimer() {
    this._actionTimer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTimerInput() {
    return this._actionTimer.internalValue;
  }

  // data_disks - computed: false, optional: true, required: false
  private _dataDisks = new CvmLaunchTemplateVersionDataDisksList(this, "data_disks", false);
  public get dataDisks() {
    return this._dataDisks;
  }
  public putDataDisks(value: CvmLaunchTemplateVersionDataDisks[] | cdktf.IResolvable) {
    this._dataDisks.internalValue = value;
  }
  public resetDataDisks() {
    this._dataDisks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataDisksInput() {
    return this._dataDisks.internalValue;
  }

  // enhanced_service - computed: false, optional: true, required: false
  private _enhancedService = new CvmLaunchTemplateVersionEnhancedServiceOutputReference(this, "enhanced_service");
  public get enhancedService() {
    return this._enhancedService;
  }
  public putEnhancedService(value: CvmLaunchTemplateVersionEnhancedService) {
    this._enhancedService.internalValue = value;
  }
  public resetEnhancedService() {
    this._enhancedService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedServiceInput() {
    return this._enhancedService.internalValue;
  }

  // instance_charge_prepaid - computed: false, optional: true, required: false
  private _instanceChargePrepaid = new CvmLaunchTemplateVersionInstanceChargePrepaidOutputReference(this, "instance_charge_prepaid");
  public get instanceChargePrepaid() {
    return this._instanceChargePrepaid;
  }
  public putInstanceChargePrepaid(value: CvmLaunchTemplateVersionInstanceChargePrepaid) {
    this._instanceChargePrepaid.internalValue = value;
  }
  public resetInstanceChargePrepaid() {
    this._instanceChargePrepaid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceChargePrepaidInput() {
    return this._instanceChargePrepaid.internalValue;
  }

  // instance_market_options - computed: false, optional: true, required: false
  private _instanceMarketOptions = new CvmLaunchTemplateVersionInstanceMarketOptionsOutputReference(this, "instance_market_options");
  public get instanceMarketOptions() {
    return this._instanceMarketOptions;
  }
  public putInstanceMarketOptions(value: CvmLaunchTemplateVersionInstanceMarketOptions) {
    this._instanceMarketOptions.internalValue = value;
  }
  public resetInstanceMarketOptions() {
    this._instanceMarketOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceMarketOptionsInput() {
    return this._instanceMarketOptions.internalValue;
  }

  // internet_accessible - computed: false, optional: true, required: false
  private _internetAccessible = new CvmLaunchTemplateVersionInternetAccessibleOutputReference(this, "internet_accessible");
  public get internetAccessible() {
    return this._internetAccessible;
  }
  public putInternetAccessible(value: CvmLaunchTemplateVersionInternetAccessible) {
    this._internetAccessible.internalValue = value;
  }
  public resetInternetAccessible() {
    this._internetAccessible.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetAccessibleInput() {
    return this._internetAccessible.internalValue;
  }

  // login_settings - computed: false, optional: true, required: false
  private _loginSettings = new CvmLaunchTemplateVersionLoginSettingsOutputReference(this, "login_settings");
  public get loginSettings() {
    return this._loginSettings;
  }
  public putLoginSettings(value: CvmLaunchTemplateVersionLoginSettings) {
    this._loginSettings.internalValue = value;
  }
  public resetLoginSettings() {
    this._loginSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginSettingsInput() {
    return this._loginSettings.internalValue;
  }

  // placement - computed: false, optional: false, required: true
  private _placement = new CvmLaunchTemplateVersionPlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: CvmLaunchTemplateVersionPlacement) {
    this._placement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // system_disk - computed: false, optional: true, required: false
  private _systemDisk = new CvmLaunchTemplateVersionSystemDiskOutputReference(this, "system_disk");
  public get systemDisk() {
    return this._systemDisk;
  }
  public putSystemDisk(value: CvmLaunchTemplateVersionSystemDisk) {
    this._systemDisk.internalValue = value;
  }
  public resetSystemDisk() {
    this._systemDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiskInput() {
    return this._systemDisk.internalValue;
  }

  // tag_specification - computed: false, optional: true, required: false
  private _tagSpecification = new CvmLaunchTemplateVersionTagSpecificationList(this, "tag_specification", false);
  public get tagSpecification() {
    return this._tagSpecification;
  }
  public putTagSpecification(value: CvmLaunchTemplateVersionTagSpecification[] | cdktf.IResolvable) {
    this._tagSpecification.internalValue = value;
  }
  public resetTagSpecification() {
    this._tagSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagSpecificationInput() {
    return this._tagSpecification.internalValue;
  }

  // virtual_private_cloud - computed: false, optional: true, required: false
  private _virtualPrivateCloud = new CvmLaunchTemplateVersionVirtualPrivateCloudOutputReference(this, "virtual_private_cloud");
  public get virtualPrivateCloud() {
    return this._virtualPrivateCloud;
  }
  public putVirtualPrivateCloud(value: CvmLaunchTemplateVersionVirtualPrivateCloud) {
    this._virtualPrivateCloud.internalValue = value;
  }
  public resetVirtualPrivateCloud() {
    this._virtualPrivateCloud.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPrivateCloudInput() {
    return this._virtualPrivateCloud.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cam_role_name: cdktf.stringToTerraform(this._camRoleName),
      client_token: cdktf.stringToTerraform(this._clientToken),
      disable_api_termination: cdktf.booleanToTerraform(this._disableApiTermination),
      disaster_recover_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._disasterRecoverGroupIds),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      host_name: cdktf.stringToTerraform(this._hostName),
      hpc_cluster_id: cdktf.stringToTerraform(this._hpcClusterId),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_charge_type: cdktf.stringToTerraform(this._instanceChargeType),
      instance_count: cdktf.numberToTerraform(this._instanceCount),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      instance_type: cdktf.stringToTerraform(this._instanceType),
      launch_template_id: cdktf.stringToTerraform(this._launchTemplateId),
      launch_template_version: cdktf.numberToTerraform(this._launchTemplateVersion),
      launch_template_version_description: cdktf.stringToTerraform(this._launchTemplateVersionDescription),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      user_data: cdktf.stringToTerraform(this._userData),
      action_timer: cvmLaunchTemplateVersionActionTimerToTerraform(this._actionTimer.internalValue),
      data_disks: cdktf.listMapper(cvmLaunchTemplateVersionDataDisksToTerraform, true)(this._dataDisks.internalValue),
      enhanced_service: cvmLaunchTemplateVersionEnhancedServiceToTerraform(this._enhancedService.internalValue),
      instance_charge_prepaid: cvmLaunchTemplateVersionInstanceChargePrepaidToTerraform(this._instanceChargePrepaid.internalValue),
      instance_market_options: cvmLaunchTemplateVersionInstanceMarketOptionsToTerraform(this._instanceMarketOptions.internalValue),
      internet_accessible: cvmLaunchTemplateVersionInternetAccessibleToTerraform(this._internetAccessible.internalValue),
      login_settings: cvmLaunchTemplateVersionLoginSettingsToTerraform(this._loginSettings.internalValue),
      placement: cvmLaunchTemplateVersionPlacementToTerraform(this._placement.internalValue),
      system_disk: cvmLaunchTemplateVersionSystemDiskToTerraform(this._systemDisk.internalValue),
      tag_specification: cdktf.listMapper(cvmLaunchTemplateVersionTagSpecificationToTerraform, true)(this._tagSpecification.internalValue),
      virtual_private_cloud: cvmLaunchTemplateVersionVirtualPrivateCloudToTerraform(this._virtualPrivateCloud.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cam_role_name: {
        value: cdktf.stringToHclTerraform(this._camRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_token: {
        value: cdktf.stringToHclTerraform(this._clientToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_api_termination: {
        value: cdktf.booleanToHclTerraform(this._disableApiTermination),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disaster_recover_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._disasterRecoverGroupIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hpc_cluster_id: {
        value: cdktf.stringToHclTerraform(this._hpcClusterId),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_charge_type: {
        value: cdktf.stringToHclTerraform(this._instanceChargeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_count: {
        value: cdktf.numberToHclTerraform(this._instanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      launch_template_id: {
        value: cdktf.stringToHclTerraform(this._launchTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      launch_template_version: {
        value: cdktf.numberToHclTerraform(this._launchTemplateVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      launch_template_version_description: {
        value: cdktf.stringToHclTerraform(this._launchTemplateVersionDescription),
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
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_timer: {
        value: cvmLaunchTemplateVersionActionTimerToHclTerraform(this._actionTimer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmLaunchTemplateVersionActionTimerList",
      },
      data_disks: {
        value: cdktf.listMapperHcl(cvmLaunchTemplateVersionDataDisksToHclTerraform, true)(this._dataDisks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmLaunchTemplateVersionDataDisksList",
      },
      enhanced_service: {
        value: cvmLaunchTemplateVersionEnhancedServiceToHclTerraform(this._enhancedService.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmLaunchTemplateVersionEnhancedServiceList",
      },
      instance_charge_prepaid: {
        value: cvmLaunchTemplateVersionInstanceChargePrepaidToHclTerraform(this._instanceChargePrepaid.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmLaunchTemplateVersionInstanceChargePrepaidList",
      },
      instance_market_options: {
        value: cvmLaunchTemplateVersionInstanceMarketOptionsToHclTerraform(this._instanceMarketOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmLaunchTemplateVersionInstanceMarketOptionsList",
      },
      internet_accessible: {
        value: cvmLaunchTemplateVersionInternetAccessibleToHclTerraform(this._internetAccessible.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmLaunchTemplateVersionInternetAccessibleList",
      },
      login_settings: {
        value: cvmLaunchTemplateVersionLoginSettingsToHclTerraform(this._loginSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmLaunchTemplateVersionLoginSettingsList",
      },
      placement: {
        value: cvmLaunchTemplateVersionPlacementToHclTerraform(this._placement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmLaunchTemplateVersionPlacementList",
      },
      system_disk: {
        value: cvmLaunchTemplateVersionSystemDiskToHclTerraform(this._systemDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmLaunchTemplateVersionSystemDiskList",
      },
      tag_specification: {
        value: cdktf.listMapperHcl(cvmLaunchTemplateVersionTagSpecificationToHclTerraform, true)(this._tagSpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmLaunchTemplateVersionTagSpecificationList",
      },
      virtual_private_cloud: {
        value: cvmLaunchTemplateVersionVirtualPrivateCloudToHclTerraform(this._virtualPrivateCloud.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmLaunchTemplateVersionVirtualPrivateCloudList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
