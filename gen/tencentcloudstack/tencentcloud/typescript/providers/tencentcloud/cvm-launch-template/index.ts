// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CvmLaunchTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The role name of CAM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#cam_role_name CvmLaunchTemplate#cam_role_name}
  */
  readonly camRoleName?: string;
  /**
  * A string to used guarantee request idempotency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#client_token CvmLaunchTemplate#client_token}
  */
  readonly clientToken?: string;
  /**
  * Instance destruction protection flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#disable_api_termination CvmLaunchTemplate#disable_api_termination}
  */
  readonly disableApiTermination?: boolean | cdktf.IResolvable;
  /**
  * The ID of disaster recover group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#disaster_recover_group_ids CvmLaunchTemplate#disaster_recover_group_ids}
  */
  readonly disasterRecoverGroupIds?: string[];
  /**
  * Whether to preflight only this request, true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#dry_run CvmLaunchTemplate#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * The host name of CVM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#host_name CvmLaunchTemplate#host_name}
  */
  readonly hostName?: string;
  /**
  * The ID of HPC cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#hpc_cluster_id CvmLaunchTemplate#hpc_cluster_id}
  */
  readonly hpcClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#id CvmLaunchTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Image ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#image_id CvmLaunchTemplate#image_id}
  */
  readonly imageId: string;
  /**
  * The charge type of instance. Default value: POSTPAID_BY_HOUR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#instance_charge_type CvmLaunchTemplate#instance_charge_type}
  */
  readonly instanceChargeType?: string;
  /**
  * The number of instances purchased.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#instance_count CvmLaunchTemplate#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * The name of instance. If you do not specify an instance display name, 'Unnamed' is displayed by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#instance_name CvmLaunchTemplate#instance_name}
  */
  readonly instanceName?: string;
  /**
  * The type of the instance. If this parameter is not specified, the system will dynamically specify the default model according to the resource sales in the current region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#instance_type CvmLaunchTemplate#instance_type}
  */
  readonly instanceType?: string;
  /**
  * The name of launch template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#launch_template_name CvmLaunchTemplate#launch_template_name}
  */
  readonly launchTemplateName: string;
  /**
  * Instance launch template version description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#launch_template_version_description CvmLaunchTemplate#launch_template_version_description}
  */
  readonly launchTemplateVersionDescription?: string;
  /**
  * The security group ID of instance. If this parameter is not specified, the default security group is bound.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#security_group_ids CvmLaunchTemplate#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Tag description list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#tags CvmLaunchTemplate#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The data of users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#user_data CvmLaunchTemplate#user_data}
  */
  readonly userData?: string;
  /**
  * action_timer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#action_timer CvmLaunchTemplate#action_timer}
  */
  readonly actionTimer?: CvmLaunchTemplateActionTimer;
  /**
  * data_disks block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#data_disks CvmLaunchTemplate#data_disks}
  */
  readonly dataDisks?: CvmLaunchTemplateDataDisks[] | cdktf.IResolvable;
  /**
  * enhanced_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#enhanced_service CvmLaunchTemplate#enhanced_service}
  */
  readonly enhancedService?: CvmLaunchTemplateEnhancedService;
  /**
  * instance_charge_prepaid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#instance_charge_prepaid CvmLaunchTemplate#instance_charge_prepaid}
  */
  readonly instanceChargePrepaid?: CvmLaunchTemplateInstanceChargePrepaid;
  /**
  * instance_market_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#instance_market_options CvmLaunchTemplate#instance_market_options}
  */
  readonly instanceMarketOptions?: CvmLaunchTemplateInstanceMarketOptions;
  /**
  * internet_accessible block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#internet_accessible CvmLaunchTemplate#internet_accessible}
  */
  readonly internetAccessible?: CvmLaunchTemplateInternetAccessible;
  /**
  * login_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#login_settings CvmLaunchTemplate#login_settings}
  */
  readonly loginSettings?: CvmLaunchTemplateLoginSettings;
  /**
  * placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#placement CvmLaunchTemplate#placement}
  */
  readonly placement: CvmLaunchTemplatePlacement;
  /**
  * system_disk block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#system_disk CvmLaunchTemplate#system_disk}
  */
  readonly systemDisk?: CvmLaunchTemplateSystemDisk;
  /**
  * tag_specification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#tag_specification CvmLaunchTemplate#tag_specification}
  */
  readonly tagSpecification?: CvmLaunchTemplateTagSpecification[] | cdktf.IResolvable;
  /**
  * virtual_private_cloud block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#virtual_private_cloud CvmLaunchTemplate#virtual_private_cloud}
  */
  readonly virtualPrivateCloud?: CvmLaunchTemplateVirtualPrivateCloud;
}
export interface CvmLaunchTemplateActionTimerExternalsStorageBlockAttr {
  /**
  * The maximum capacity of HDD local storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#max_size CvmLaunchTemplate#max_size}
  */
  readonly maxSize: number;
  /**
  * The minimum capacity of HDD local storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#min_size CvmLaunchTemplate#min_size}
  */
  readonly minSize: number;
  /**
  * The type of HDD local storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#type CvmLaunchTemplate#type}
  */
  readonly type: string;
}

export function cvmLaunchTemplateActionTimerExternalsStorageBlockAttrToTerraform(struct?: CvmLaunchTemplateActionTimerExternalsStorageBlockAttrOutputReference | CvmLaunchTemplateActionTimerExternalsStorageBlockAttr): any {
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


export function cvmLaunchTemplateActionTimerExternalsStorageBlockAttrToHclTerraform(struct?: CvmLaunchTemplateActionTimerExternalsStorageBlockAttrOutputReference | CvmLaunchTemplateActionTimerExternalsStorageBlockAttr): any {
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

export class CvmLaunchTemplateActionTimerExternalsStorageBlockAttrOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateActionTimerExternalsStorageBlockAttr | undefined {
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

  public set internalValue(value: CvmLaunchTemplateActionTimerExternalsStorageBlockAttr | undefined) {
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
export interface CvmLaunchTemplateActionTimerExternals {
  /**
  * Release address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#release_address CvmLaunchTemplate#release_address}
  */
  readonly releaseAddress?: boolean | cdktf.IResolvable;
  /**
  * Unsupported network type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#unsupport_networks CvmLaunchTemplate#unsupport_networks}
  */
  readonly unsupportNetworks?: string[];
  /**
  * storage_block_attr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#storage_block_attr CvmLaunchTemplate#storage_block_attr}
  */
  readonly storageBlockAttr?: CvmLaunchTemplateActionTimerExternalsStorageBlockAttr;
}

export function cvmLaunchTemplateActionTimerExternalsToTerraform(struct?: CvmLaunchTemplateActionTimerExternalsOutputReference | CvmLaunchTemplateActionTimerExternals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    release_address: cdktf.booleanToTerraform(struct!.releaseAddress),
    unsupport_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.unsupportNetworks),
    storage_block_attr: cvmLaunchTemplateActionTimerExternalsStorageBlockAttrToTerraform(struct!.storageBlockAttr),
  }
}


export function cvmLaunchTemplateActionTimerExternalsToHclTerraform(struct?: CvmLaunchTemplateActionTimerExternalsOutputReference | CvmLaunchTemplateActionTimerExternals): any {
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
      value: cvmLaunchTemplateActionTimerExternalsStorageBlockAttrToHclTerraform(struct!.storageBlockAttr),
      isBlock: true,
      type: "list",
      storageClassType: "CvmLaunchTemplateActionTimerExternalsStorageBlockAttrList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmLaunchTemplateActionTimerExternalsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateActionTimerExternals | undefined {
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

  public set internalValue(value: CvmLaunchTemplateActionTimerExternals | undefined) {
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

  // release_address - computed: false, optional: true, required: false
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

  // unsupport_networks - computed: false, optional: true, required: false
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
  private _storageBlockAttr = new CvmLaunchTemplateActionTimerExternalsStorageBlockAttrOutputReference(this, "storage_block_attr");
  public get storageBlockAttr() {
    return this._storageBlockAttr;
  }
  public putStorageBlockAttr(value: CvmLaunchTemplateActionTimerExternalsStorageBlockAttr) {
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
export interface CvmLaunchTemplateActionTimer {
  /**
  * Execution time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#action_time CvmLaunchTemplate#action_time}
  */
  readonly actionTime?: string;
  /**
  * Timer name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#timer_action CvmLaunchTemplate#timer_action}
  */
  readonly timerAction?: string;
  /**
  * externals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#externals CvmLaunchTemplate#externals}
  */
  readonly externals?: CvmLaunchTemplateActionTimerExternals;
}

export function cvmLaunchTemplateActionTimerToTerraform(struct?: CvmLaunchTemplateActionTimerOutputReference | CvmLaunchTemplateActionTimer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_time: cdktf.stringToTerraform(struct!.actionTime),
    timer_action: cdktf.stringToTerraform(struct!.timerAction),
    externals: cvmLaunchTemplateActionTimerExternalsToTerraform(struct!.externals),
  }
}


export function cvmLaunchTemplateActionTimerToHclTerraform(struct?: CvmLaunchTemplateActionTimerOutputReference | CvmLaunchTemplateActionTimer): any {
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
      value: cvmLaunchTemplateActionTimerExternalsToHclTerraform(struct!.externals),
      isBlock: true,
      type: "list",
      storageClassType: "CvmLaunchTemplateActionTimerExternalsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmLaunchTemplateActionTimerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateActionTimer | undefined {
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

  public set internalValue(value: CvmLaunchTemplateActionTimer | undefined) {
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

  // action_time - computed: false, optional: true, required: false
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

  // timer_action - computed: false, optional: true, required: false
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
  private _externals = new CvmLaunchTemplateActionTimerExternalsOutputReference(this, "externals");
  public get externals() {
    return this._externals;
  }
  public putExternals(value: CvmLaunchTemplateActionTimerExternals) {
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
export interface CvmLaunchTemplateDataDisks {
  /**
  * Cloud Dedicated Cluster(CDC) ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#cdc_id CvmLaunchTemplate#cdc_id}
  */
  readonly cdcId?: string;
  /**
  * Whether the data disk is destroyed along with the instance, true or false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#delete_with_instance CvmLaunchTemplate#delete_with_instance}
  */
  readonly deleteWithInstance?: boolean | cdktf.IResolvable;
  /**
  * The size of the data disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#disk_size CvmLaunchTemplate#disk_size}
  */
  readonly diskSize: number;
  /**
  * The type of data disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#disk_type CvmLaunchTemplate#disk_type}
  */
  readonly diskType?: string;
  /**
  * Whether the data disk is encrypted, TRUE or FALSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#encrypt CvmLaunchTemplate#encrypt}
  */
  readonly encrypt?: boolean | cdktf.IResolvable;
  /**
  * The id of custom CMK.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#kms_key_id CvmLaunchTemplate#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * Data disk snapshot ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#snapshot_id CvmLaunchTemplate#snapshot_id}
  */
  readonly snapshotId?: string;
  /**
  * Cloud disk performance, MB/s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#throughput_performance CvmLaunchTemplate#throughput_performance}
  */
  readonly throughputPerformance?: number;
}

export function cvmLaunchTemplateDataDisksToTerraform(struct?: CvmLaunchTemplateDataDisks | cdktf.IResolvable): any {
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


export function cvmLaunchTemplateDataDisksToHclTerraform(struct?: CvmLaunchTemplateDataDisks | cdktf.IResolvable): any {
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

export class CvmLaunchTemplateDataDisksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CvmLaunchTemplateDataDisks | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CvmLaunchTemplateDataDisks | cdktf.IResolvable | undefined) {
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

  // cdc_id - computed: false, optional: true, required: false
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

  // delete_with_instance - computed: false, optional: true, required: false
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

  // disk_type - computed: false, optional: true, required: false
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

  // kms_key_id - computed: false, optional: true, required: false
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

  // snapshot_id - computed: false, optional: true, required: false
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

  // throughput_performance - computed: false, optional: true, required: false
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

export class CvmLaunchTemplateDataDisksList extends cdktf.ComplexList {
  public internalValue? : CvmLaunchTemplateDataDisks[] | cdktf.IResolvable

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
  public get(index: number): CvmLaunchTemplateDataDisksOutputReference {
    return new CvmLaunchTemplateDataDisksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CvmLaunchTemplateEnhancedServiceAutomationService {
  /**
  * Whether to enable TencentCloud Automation Tools(TAT), TRUE or FALSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#enabled CvmLaunchTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function cvmLaunchTemplateEnhancedServiceAutomationServiceToTerraform(struct?: CvmLaunchTemplateEnhancedServiceAutomationServiceOutputReference | CvmLaunchTemplateEnhancedServiceAutomationService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cvmLaunchTemplateEnhancedServiceAutomationServiceToHclTerraform(struct?: CvmLaunchTemplateEnhancedServiceAutomationServiceOutputReference | CvmLaunchTemplateEnhancedServiceAutomationService): any {
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

export class CvmLaunchTemplateEnhancedServiceAutomationServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateEnhancedServiceAutomationService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmLaunchTemplateEnhancedServiceAutomationService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
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
}
export interface CvmLaunchTemplateEnhancedServiceMonitorService {
  /**
  * Whether to enable cloud monitor service, TRUE or FALSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#enabled CvmLaunchTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function cvmLaunchTemplateEnhancedServiceMonitorServiceToTerraform(struct?: CvmLaunchTemplateEnhancedServiceMonitorServiceOutputReference | CvmLaunchTemplateEnhancedServiceMonitorService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cvmLaunchTemplateEnhancedServiceMonitorServiceToHclTerraform(struct?: CvmLaunchTemplateEnhancedServiceMonitorServiceOutputReference | CvmLaunchTemplateEnhancedServiceMonitorService): any {
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

export class CvmLaunchTemplateEnhancedServiceMonitorServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateEnhancedServiceMonitorService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmLaunchTemplateEnhancedServiceMonitorService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
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
}
export interface CvmLaunchTemplateEnhancedServiceSecurityService {
  /**
  * Whether to enable cloud security service, TRUE or FALSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#enabled CvmLaunchTemplate#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function cvmLaunchTemplateEnhancedServiceSecurityServiceToTerraform(struct?: CvmLaunchTemplateEnhancedServiceSecurityServiceOutputReference | CvmLaunchTemplateEnhancedServiceSecurityService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function cvmLaunchTemplateEnhancedServiceSecurityServiceToHclTerraform(struct?: CvmLaunchTemplateEnhancedServiceSecurityServiceOutputReference | CvmLaunchTemplateEnhancedServiceSecurityService): any {
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

export class CvmLaunchTemplateEnhancedServiceSecurityServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateEnhancedServiceSecurityService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CvmLaunchTemplateEnhancedServiceSecurityService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
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
}
export interface CvmLaunchTemplateEnhancedService {
  /**
  * automation_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#automation_service CvmLaunchTemplate#automation_service}
  */
  readonly automationService?: CvmLaunchTemplateEnhancedServiceAutomationService;
  /**
  * monitor_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#monitor_service CvmLaunchTemplate#monitor_service}
  */
  readonly monitorService?: CvmLaunchTemplateEnhancedServiceMonitorService;
  /**
  * security_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#security_service CvmLaunchTemplate#security_service}
  */
  readonly securityService?: CvmLaunchTemplateEnhancedServiceSecurityService;
}

export function cvmLaunchTemplateEnhancedServiceToTerraform(struct?: CvmLaunchTemplateEnhancedServiceOutputReference | CvmLaunchTemplateEnhancedService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automation_service: cvmLaunchTemplateEnhancedServiceAutomationServiceToTerraform(struct!.automationService),
    monitor_service: cvmLaunchTemplateEnhancedServiceMonitorServiceToTerraform(struct!.monitorService),
    security_service: cvmLaunchTemplateEnhancedServiceSecurityServiceToTerraform(struct!.securityService),
  }
}


export function cvmLaunchTemplateEnhancedServiceToHclTerraform(struct?: CvmLaunchTemplateEnhancedServiceOutputReference | CvmLaunchTemplateEnhancedService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automation_service: {
      value: cvmLaunchTemplateEnhancedServiceAutomationServiceToHclTerraform(struct!.automationService),
      isBlock: true,
      type: "list",
      storageClassType: "CvmLaunchTemplateEnhancedServiceAutomationServiceList",
    },
    monitor_service: {
      value: cvmLaunchTemplateEnhancedServiceMonitorServiceToHclTerraform(struct!.monitorService),
      isBlock: true,
      type: "list",
      storageClassType: "CvmLaunchTemplateEnhancedServiceMonitorServiceList",
    },
    security_service: {
      value: cvmLaunchTemplateEnhancedServiceSecurityServiceToHclTerraform(struct!.securityService),
      isBlock: true,
      type: "list",
      storageClassType: "CvmLaunchTemplateEnhancedServiceSecurityServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmLaunchTemplateEnhancedServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateEnhancedService | undefined {
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

  public set internalValue(value: CvmLaunchTemplateEnhancedService | undefined) {
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
  private _automationService = new CvmLaunchTemplateEnhancedServiceAutomationServiceOutputReference(this, "automation_service");
  public get automationService() {
    return this._automationService;
  }
  public putAutomationService(value: CvmLaunchTemplateEnhancedServiceAutomationService) {
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
  private _monitorService = new CvmLaunchTemplateEnhancedServiceMonitorServiceOutputReference(this, "monitor_service");
  public get monitorService() {
    return this._monitorService;
  }
  public putMonitorService(value: CvmLaunchTemplateEnhancedServiceMonitorService) {
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
  private _securityService = new CvmLaunchTemplateEnhancedServiceSecurityServiceOutputReference(this, "security_service");
  public get securityService() {
    return this._securityService;
  }
  public putSecurityService(value: CvmLaunchTemplateEnhancedServiceSecurityService) {
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
export interface CvmLaunchTemplateInstanceChargePrepaid {
  /**
  * The period of purchasing instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#period CvmLaunchTemplate#period}
  */
  readonly period: number;
  /**
  * Automatic renew flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#renew_flag CvmLaunchTemplate#renew_flag}
  */
  readonly renewFlag?: string;
}

export function cvmLaunchTemplateInstanceChargePrepaidToTerraform(struct?: CvmLaunchTemplateInstanceChargePrepaidOutputReference | CvmLaunchTemplateInstanceChargePrepaid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    period: cdktf.numberToTerraform(struct!.period),
    renew_flag: cdktf.stringToTerraform(struct!.renewFlag),
  }
}


export function cvmLaunchTemplateInstanceChargePrepaidToHclTerraform(struct?: CvmLaunchTemplateInstanceChargePrepaidOutputReference | CvmLaunchTemplateInstanceChargePrepaid): any {
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

export class CvmLaunchTemplateInstanceChargePrepaidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateInstanceChargePrepaid | undefined {
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

  public set internalValue(value: CvmLaunchTemplateInstanceChargePrepaid | undefined) {
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

  // renew_flag - computed: false, optional: true, required: false
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
export interface CvmLaunchTemplateInstanceMarketOptionsSpotOptions {
  /**
  * Bidding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#max_price CvmLaunchTemplate#max_price}
  */
  readonly maxPrice: string;
  /**
  * Bidding request type, currently only supported type: one-time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#spot_instance_type CvmLaunchTemplate#spot_instance_type}
  */
  readonly spotInstanceType?: string;
}

export function cvmLaunchTemplateInstanceMarketOptionsSpotOptionsToTerraform(struct?: CvmLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference | CvmLaunchTemplateInstanceMarketOptionsSpotOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_price: cdktf.stringToTerraform(struct!.maxPrice),
    spot_instance_type: cdktf.stringToTerraform(struct!.spotInstanceType),
  }
}


export function cvmLaunchTemplateInstanceMarketOptionsSpotOptionsToHclTerraform(struct?: CvmLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference | CvmLaunchTemplateInstanceMarketOptionsSpotOptions): any {
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

export class CvmLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateInstanceMarketOptionsSpotOptions | undefined {
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

  public set internalValue(value: CvmLaunchTemplateInstanceMarketOptionsSpotOptions | undefined) {
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

  // spot_instance_type - computed: false, optional: true, required: false
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
export interface CvmLaunchTemplateInstanceMarketOptions {
  /**
  * Market option type, currently only supports value: spot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#market_type CvmLaunchTemplate#market_type}
  */
  readonly marketType?: string;
  /**
  * spot_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#spot_options CvmLaunchTemplate#spot_options}
  */
  readonly spotOptions: CvmLaunchTemplateInstanceMarketOptionsSpotOptions;
}

export function cvmLaunchTemplateInstanceMarketOptionsToTerraform(struct?: CvmLaunchTemplateInstanceMarketOptionsOutputReference | CvmLaunchTemplateInstanceMarketOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    market_type: cdktf.stringToTerraform(struct!.marketType),
    spot_options: cvmLaunchTemplateInstanceMarketOptionsSpotOptionsToTerraform(struct!.spotOptions),
  }
}


export function cvmLaunchTemplateInstanceMarketOptionsToHclTerraform(struct?: CvmLaunchTemplateInstanceMarketOptionsOutputReference | CvmLaunchTemplateInstanceMarketOptions): any {
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
      value: cvmLaunchTemplateInstanceMarketOptionsSpotOptionsToHclTerraform(struct!.spotOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CvmLaunchTemplateInstanceMarketOptionsSpotOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmLaunchTemplateInstanceMarketOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateInstanceMarketOptions | undefined {
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

  public set internalValue(value: CvmLaunchTemplateInstanceMarketOptions | undefined) {
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

  // market_type - computed: false, optional: true, required: false
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
  private _spotOptions = new CvmLaunchTemplateInstanceMarketOptionsSpotOptionsOutputReference(this, "spot_options");
  public get spotOptions() {
    return this._spotOptions;
  }
  public putSpotOptions(value: CvmLaunchTemplateInstanceMarketOptionsSpotOptions) {
    this._spotOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spotOptionsInput() {
    return this._spotOptions.internalValue;
  }
}
export interface CvmLaunchTemplateInternetAccessible {
  /**
  * The ID of bandwidth package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#bandwidth_package_id CvmLaunchTemplate#bandwidth_package_id}
  */
  readonly bandwidthPackageId?: string;
  /**
  * The type of internet charge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#internet_charge_type CvmLaunchTemplate#internet_charge_type}
  */
  readonly internetChargeType?: string;
  /**
  * Internet outbound bandwidth upper limit, Mbps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#internet_max_bandwidth_out CvmLaunchTemplate#internet_max_bandwidth_out}
  */
  readonly internetMaxBandwidthOut?: number;
  /**
  * Whether to allocate public network IP, TRUE or FALSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#public_ip_assigned CvmLaunchTemplate#public_ip_assigned}
  */
  readonly publicIpAssigned?: boolean | cdktf.IResolvable;
}

export function cvmLaunchTemplateInternetAccessibleToTerraform(struct?: CvmLaunchTemplateInternetAccessibleOutputReference | CvmLaunchTemplateInternetAccessible): any {
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


export function cvmLaunchTemplateInternetAccessibleToHclTerraform(struct?: CvmLaunchTemplateInternetAccessibleOutputReference | CvmLaunchTemplateInternetAccessible): any {
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

export class CvmLaunchTemplateInternetAccessibleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateInternetAccessible | undefined {
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

  public set internalValue(value: CvmLaunchTemplateInternetAccessible | undefined) {
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

  // bandwidth_package_id - computed: false, optional: true, required: false
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

  // internet_charge_type - computed: false, optional: true, required: false
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

  // internet_max_bandwidth_out - computed: false, optional: true, required: false
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

  // public_ip_assigned - computed: false, optional: true, required: false
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
export interface CvmLaunchTemplateLoginSettings {
  /**
  * Keep the original settings of the mirror.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#keep_image_login CvmLaunchTemplate#keep_image_login}
  */
  readonly keepImageLogin?: string;
  /**
  * List of key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#key_ids CvmLaunchTemplate#key_ids}
  */
  readonly keyIds?: string[];
  /**
  * The login password of instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#password CvmLaunchTemplate#password}
  */
  readonly password?: string;
}

export function cvmLaunchTemplateLoginSettingsToTerraform(struct?: CvmLaunchTemplateLoginSettingsOutputReference | CvmLaunchTemplateLoginSettings): any {
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


export function cvmLaunchTemplateLoginSettingsToHclTerraform(struct?: CvmLaunchTemplateLoginSettingsOutputReference | CvmLaunchTemplateLoginSettings): any {
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

export class CvmLaunchTemplateLoginSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateLoginSettings | undefined {
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

  public set internalValue(value: CvmLaunchTemplateLoginSettings | undefined) {
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

  // keep_image_login - computed: false, optional: true, required: false
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

  // key_ids - computed: false, optional: true, required: false
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
export interface CvmLaunchTemplatePlacement {
  /**
  * The CDH ID list of the instance(input).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#host_ids CvmLaunchTemplate#host_ids}
  */
  readonly hostIds?: string[];
  /**
  * Specify the host machine ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#host_ips CvmLaunchTemplate#host_ips}
  */
  readonly hostIps?: string[];
  /**
  * The project ID of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#project_id CvmLaunchTemplate#project_id}
  */
  readonly projectId?: number;
  /**
  * The available zone ID of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#zone CvmLaunchTemplate#zone}
  */
  readonly zone: string;
}

export function cvmLaunchTemplatePlacementToTerraform(struct?: CvmLaunchTemplatePlacementOutputReference | CvmLaunchTemplatePlacement): any {
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


export function cvmLaunchTemplatePlacementToHclTerraform(struct?: CvmLaunchTemplatePlacementOutputReference | CvmLaunchTemplatePlacement): any {
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

export class CvmLaunchTemplatePlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplatePlacement | undefined {
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

  public set internalValue(value: CvmLaunchTemplatePlacement | undefined) {
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

  // host_ids - computed: false, optional: true, required: false
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

  // host_ips - computed: false, optional: true, required: false
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

  // project_id - computed: false, optional: true, required: false
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
export interface CvmLaunchTemplateSystemDisk {
  /**
  * Cloud Dedicated Cluster(CDC) ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#cdc_id CvmLaunchTemplate#cdc_id}
  */
  readonly cdcId?: string;
  /**
  * The size of system disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#disk_size CvmLaunchTemplate#disk_size}
  */
  readonly diskSize?: number;
  /**
  * The type of system disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#disk_type CvmLaunchTemplate#disk_type}
  */
  readonly diskType?: string;
}

export function cvmLaunchTemplateSystemDiskToTerraform(struct?: CvmLaunchTemplateSystemDiskOutputReference | CvmLaunchTemplateSystemDisk): any {
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


export function cvmLaunchTemplateSystemDiskToHclTerraform(struct?: CvmLaunchTemplateSystemDiskOutputReference | CvmLaunchTemplateSystemDisk): any {
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

export class CvmLaunchTemplateSystemDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateSystemDisk | undefined {
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

  public set internalValue(value: CvmLaunchTemplateSystemDisk | undefined) {
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

  // cdc_id - computed: false, optional: true, required: false
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

  // disk_size - computed: false, optional: true, required: false
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

  // disk_type - computed: false, optional: true, required: false
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
export interface CvmLaunchTemplateTagSpecificationTags {
  /**
  * The key of tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#key CvmLaunchTemplate#key}
  */
  readonly key: string;
  /**
  * The value of tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#value CvmLaunchTemplate#value}
  */
  readonly value: string;
}

export function cvmLaunchTemplateTagSpecificationTagsToTerraform(struct?: CvmLaunchTemplateTagSpecificationTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cvmLaunchTemplateTagSpecificationTagsToHclTerraform(struct?: CvmLaunchTemplateTagSpecificationTags | cdktf.IResolvable): any {
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

export class CvmLaunchTemplateTagSpecificationTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CvmLaunchTemplateTagSpecificationTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CvmLaunchTemplateTagSpecificationTags | cdktf.IResolvable | undefined) {
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

export class CvmLaunchTemplateTagSpecificationTagsList extends cdktf.ComplexList {
  public internalValue? : CvmLaunchTemplateTagSpecificationTags[] | cdktf.IResolvable

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
  public get(index: number): CvmLaunchTemplateTagSpecificationTagsOutputReference {
    return new CvmLaunchTemplateTagSpecificationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CvmLaunchTemplateTagSpecification {
  /**
  * The type of resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#resource_type CvmLaunchTemplate#resource_type}
  */
  readonly resourceType: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#tags CvmLaunchTemplate#tags}
  */
  readonly tags: CvmLaunchTemplateTagSpecificationTags[] | cdktf.IResolvable;
}

export function cvmLaunchTemplateTagSpecificationToTerraform(struct?: CvmLaunchTemplateTagSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    tags: cdktf.listMapper(cvmLaunchTemplateTagSpecificationTagsToTerraform, true)(struct!.tags),
  }
}


export function cvmLaunchTemplateTagSpecificationToHclTerraform(struct?: CvmLaunchTemplateTagSpecification | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(cvmLaunchTemplateTagSpecificationTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "CvmLaunchTemplateTagSpecificationTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CvmLaunchTemplateTagSpecificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CvmLaunchTemplateTagSpecification | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CvmLaunchTemplateTagSpecification | cdktf.IResolvable | undefined) {
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
  private _tags = new CvmLaunchTemplateTagSpecificationTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: CvmLaunchTemplateTagSpecificationTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class CvmLaunchTemplateTagSpecificationList extends cdktf.ComplexList {
  public internalValue? : CvmLaunchTemplateTagSpecification[] | cdktf.IResolvable

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
  public get(index: number): CvmLaunchTemplateTagSpecificationOutputReference {
    return new CvmLaunchTemplateTagSpecificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CvmLaunchTemplateVirtualPrivateCloud {
  /**
  * Is it used as a Public network gateway, TRUE or FALSE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#as_vpc_gateway CvmLaunchTemplate#as_vpc_gateway}
  */
  readonly asVpcGateway?: boolean | cdktf.IResolvable;
  /**
  * The number of ipv6 addresses for Elastic Network Interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#ipv6_address_count CvmLaunchTemplate#ipv6_address_count}
  */
  readonly ipv6AddressCount?: number;
  /**
  * The address of private ip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#private_ip_addresses CvmLaunchTemplate#private_ip_addresses}
  */
  readonly privateIpAddresses?: string[];
  /**
  * The id of subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#subnet_id CvmLaunchTemplate#subnet_id}
  */
  readonly subnetId: string;
  /**
  * The id of VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#vpc_id CvmLaunchTemplate#vpc_id}
  */
  readonly vpcId: string;
}

export function cvmLaunchTemplateVirtualPrivateCloudToTerraform(struct?: CvmLaunchTemplateVirtualPrivateCloudOutputReference | CvmLaunchTemplateVirtualPrivateCloud): any {
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


export function cvmLaunchTemplateVirtualPrivateCloudToHclTerraform(struct?: CvmLaunchTemplateVirtualPrivateCloudOutputReference | CvmLaunchTemplateVirtualPrivateCloud): any {
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

export class CvmLaunchTemplateVirtualPrivateCloudOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CvmLaunchTemplateVirtualPrivateCloud | undefined {
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

  public set internalValue(value: CvmLaunchTemplateVirtualPrivateCloud | undefined) {
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

  // as_vpc_gateway - computed: false, optional: true, required: false
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

  // ipv6_address_count - computed: false, optional: true, required: false
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

  // private_ip_addresses - computed: false, optional: true, required: false
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
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template tencentcloud_cvm_launch_template}
*/
export class CvmLaunchTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cvm_launch_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CvmLaunchTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CvmLaunchTemplate to import
  * @param importFromId The id of the existing CvmLaunchTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CvmLaunchTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cvm_launch_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/cvm_launch_template tencentcloud_cvm_launch_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CvmLaunchTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CvmLaunchTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cvm_launch_template',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
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
    this._launchTemplateName = config.launchTemplateName;
    this._launchTemplateVersionDescription = config.launchTemplateVersionDescription;
    this._securityGroupIds = config.securityGroupIds;
    this._tags = config.tags;
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

  // cam_role_name - computed: false, optional: true, required: false
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

  // client_token - computed: false, optional: true, required: false
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

  // disable_api_termination - computed: false, optional: true, required: false
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

  // dry_run - computed: false, optional: true, required: false
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

  // host_name - computed: false, optional: true, required: false
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

  // hpc_cluster_id - computed: false, optional: true, required: false
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

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
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

  // instance_count - computed: false, optional: true, required: false
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

  // launch_template_name - computed: false, optional: false, required: true
  private _launchTemplateName?: string; 
  public get launchTemplateName() {
    return this.getStringAttribute('launch_template_name');
  }
  public set launchTemplateName(value: string) {
    this._launchTemplateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get launchTemplateNameInput() {
    return this._launchTemplateName;
  }

  // launch_template_version_description - computed: false, optional: true, required: false
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

  // action_timer - computed: false, optional: true, required: false
  private _actionTimer = new CvmLaunchTemplateActionTimerOutputReference(this, "action_timer");
  public get actionTimer() {
    return this._actionTimer;
  }
  public putActionTimer(value: CvmLaunchTemplateActionTimer) {
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
  private _dataDisks = new CvmLaunchTemplateDataDisksList(this, "data_disks", false);
  public get dataDisks() {
    return this._dataDisks;
  }
  public putDataDisks(value: CvmLaunchTemplateDataDisks[] | cdktf.IResolvable) {
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
  private _enhancedService = new CvmLaunchTemplateEnhancedServiceOutputReference(this, "enhanced_service");
  public get enhancedService() {
    return this._enhancedService;
  }
  public putEnhancedService(value: CvmLaunchTemplateEnhancedService) {
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
  private _instanceChargePrepaid = new CvmLaunchTemplateInstanceChargePrepaidOutputReference(this, "instance_charge_prepaid");
  public get instanceChargePrepaid() {
    return this._instanceChargePrepaid;
  }
  public putInstanceChargePrepaid(value: CvmLaunchTemplateInstanceChargePrepaid) {
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
  private _instanceMarketOptions = new CvmLaunchTemplateInstanceMarketOptionsOutputReference(this, "instance_market_options");
  public get instanceMarketOptions() {
    return this._instanceMarketOptions;
  }
  public putInstanceMarketOptions(value: CvmLaunchTemplateInstanceMarketOptions) {
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
  private _internetAccessible = new CvmLaunchTemplateInternetAccessibleOutputReference(this, "internet_accessible");
  public get internetAccessible() {
    return this._internetAccessible;
  }
  public putInternetAccessible(value: CvmLaunchTemplateInternetAccessible) {
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
  private _loginSettings = new CvmLaunchTemplateLoginSettingsOutputReference(this, "login_settings");
  public get loginSettings() {
    return this._loginSettings;
  }
  public putLoginSettings(value: CvmLaunchTemplateLoginSettings) {
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
  private _placement = new CvmLaunchTemplatePlacementOutputReference(this, "placement");
  public get placement() {
    return this._placement;
  }
  public putPlacement(value: CvmLaunchTemplatePlacement) {
    this._placement.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get placementInput() {
    return this._placement.internalValue;
  }

  // system_disk - computed: false, optional: true, required: false
  private _systemDisk = new CvmLaunchTemplateSystemDiskOutputReference(this, "system_disk");
  public get systemDisk() {
    return this._systemDisk;
  }
  public putSystemDisk(value: CvmLaunchTemplateSystemDisk) {
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
  private _tagSpecification = new CvmLaunchTemplateTagSpecificationList(this, "tag_specification", false);
  public get tagSpecification() {
    return this._tagSpecification;
  }
  public putTagSpecification(value: CvmLaunchTemplateTagSpecification[] | cdktf.IResolvable) {
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
  private _virtualPrivateCloud = new CvmLaunchTemplateVirtualPrivateCloudOutputReference(this, "virtual_private_cloud");
  public get virtualPrivateCloud() {
    return this._virtualPrivateCloud;
  }
  public putVirtualPrivateCloud(value: CvmLaunchTemplateVirtualPrivateCloud) {
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
      launch_template_name: cdktf.stringToTerraform(this._launchTemplateName),
      launch_template_version_description: cdktf.stringToTerraform(this._launchTemplateVersionDescription),
      security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityGroupIds),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_data: cdktf.stringToTerraform(this._userData),
      action_timer: cvmLaunchTemplateActionTimerToTerraform(this._actionTimer.internalValue),
      data_disks: cdktf.listMapper(cvmLaunchTemplateDataDisksToTerraform, true)(this._dataDisks.internalValue),
      enhanced_service: cvmLaunchTemplateEnhancedServiceToTerraform(this._enhancedService.internalValue),
      instance_charge_prepaid: cvmLaunchTemplateInstanceChargePrepaidToTerraform(this._instanceChargePrepaid.internalValue),
      instance_market_options: cvmLaunchTemplateInstanceMarketOptionsToTerraform(this._instanceMarketOptions.internalValue),
      internet_accessible: cvmLaunchTemplateInternetAccessibleToTerraform(this._internetAccessible.internalValue),
      login_settings: cvmLaunchTemplateLoginSettingsToTerraform(this._loginSettings.internalValue),
      placement: cvmLaunchTemplatePlacementToTerraform(this._placement.internalValue),
      system_disk: cvmLaunchTemplateSystemDiskToTerraform(this._systemDisk.internalValue),
      tag_specification: cdktf.listMapper(cvmLaunchTemplateTagSpecificationToTerraform, true)(this._tagSpecification.internalValue),
      virtual_private_cloud: cvmLaunchTemplateVirtualPrivateCloudToTerraform(this._virtualPrivateCloud.internalValue),
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
      launch_template_name: {
        value: cdktf.stringToHclTerraform(this._launchTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user_data: {
        value: cdktf.stringToHclTerraform(this._userData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_timer: {
        value: cvmLaunchTemplateActionTimerToHclTerraform(this._actionTimer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmLaunchTemplateActionTimerList",
      },
      data_disks: {
        value: cdktf.listMapperHcl(cvmLaunchTemplateDataDisksToHclTerraform, true)(this._dataDisks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmLaunchTemplateDataDisksList",
      },
      enhanced_service: {
        value: cvmLaunchTemplateEnhancedServiceToHclTerraform(this._enhancedService.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmLaunchTemplateEnhancedServiceList",
      },
      instance_charge_prepaid: {
        value: cvmLaunchTemplateInstanceChargePrepaidToHclTerraform(this._instanceChargePrepaid.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmLaunchTemplateInstanceChargePrepaidList",
      },
      instance_market_options: {
        value: cvmLaunchTemplateInstanceMarketOptionsToHclTerraform(this._instanceMarketOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmLaunchTemplateInstanceMarketOptionsList",
      },
      internet_accessible: {
        value: cvmLaunchTemplateInternetAccessibleToHclTerraform(this._internetAccessible.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmLaunchTemplateInternetAccessibleList",
      },
      login_settings: {
        value: cvmLaunchTemplateLoginSettingsToHclTerraform(this._loginSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmLaunchTemplateLoginSettingsList",
      },
      placement: {
        value: cvmLaunchTemplatePlacementToHclTerraform(this._placement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmLaunchTemplatePlacementList",
      },
      system_disk: {
        value: cvmLaunchTemplateSystemDiskToHclTerraform(this._systemDisk.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmLaunchTemplateSystemDiskList",
      },
      tag_specification: {
        value: cdktf.listMapperHcl(cvmLaunchTemplateTagSpecificationToHclTerraform, true)(this._tagSpecification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmLaunchTemplateTagSpecificationList",
      },
      virtual_private_cloud: {
        value: cvmLaunchTemplateVirtualPrivateCloudToHclTerraform(this._virtualPrivateCloud.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CvmLaunchTemplateVirtualPrivateCloudList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
