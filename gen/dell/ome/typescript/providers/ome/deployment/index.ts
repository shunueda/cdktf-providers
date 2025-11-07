// https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Boot To Network ISO deployment details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#boot_to_network_iso Deployment#boot_to_network_iso}
  */
  readonly bootToNetworkIso?: DeploymentBootToNetworkIso;
  /**
  * Cron to schedule the deployment task. Cron expression should be of future datetime.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#cron Deployment#cron}
  */
  readonly cron?: string;
  /**
  * List of template attributes associated with the target devices for deploymnent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#device_attributes Deployment#device_attributes}
  */
  readonly deviceAttributes?: DeploymentDeviceAttributes[] | cdktf.IResolvable;
  /**
  * List of the device id(s). Conflicts with `device_servicetags`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#device_ids Deployment#device_ids}
  */
  readonly deviceIds?: number[];
  /**
  * List of the device servicetags. Conflicts with `device_ids`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#device_servicetags Deployment#device_servicetags}
  */
  readonly deviceServicetags?: string[];
  /**
  * Force shutdown after deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#forced_shutdown Deployment#forced_shutdown}
  */
  readonly forcedShutdown?: boolean | cdktf.IResolvable;
  /**
  * Number of times the job has to be polled to get the final status of the resource. Default value is `20`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#job_retry_count Deployment#job_retry_count}
  */
  readonly jobRetryCount?: number;
  /**
  * Continue to run the job on warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#options_continue_on_warning Deployment#options_continue_on_warning}
  */
  readonly optionsContinueOnWarning?: boolean | cdktf.IResolvable;
  /**
  * Option to precheck
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#options_precheck_only Deployment#options_precheck_only}
  */
  readonly optionsPrecheckOnly?: boolean | cdktf.IResolvable;
  /**
  * Checks the strict association of vlan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#options_strict_checking_vlan Deployment#options_strict_checking_vlan}
  */
  readonly optionsStrictCheckingVlan?: boolean | cdktf.IResolvable;
  /**
  * Option to specify the time to wait before shutdown in seconds. Default and minimum value is 300 and maximum is 3600 seconds respectively. Default value is `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#options_time_to_wait_before_shutdown Deployment#options_time_to_wait_before_shutdown}
  */
  readonly optionsTimeToWaitBeforeShutdown?: number;
  /**
  * End power state of a target devices. Default power state is ON. Make it true to switch it to OFF state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#power_state_off Deployment#power_state_off}
  */
  readonly powerStateOff?: boolean | cdktf.IResolvable;
  /**
  * Provides options to schedule the deployment task immediately, or at a specified time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#run_later Deployment#run_later}
  */
  readonly runLater?: boolean | cdktf.IResolvable;
  /**
  * Sleep time interval for job polling in seconds. Default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#sleep_interval Deployment#sleep_interval}
  */
  readonly sleepInterval?: number;
  /**
  * ID of the existing template. If a template with this ID is found, `template_name` will be ignored. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#template_id Deployment#template_id}
  */
  readonly templateId?: number;
  /**
  * Name of the existing template. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#template_name Deployment#template_name}
  */
  readonly templateName?: string;
}
export interface DeploymentBootToNetworkIsoShareDetail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#ip_address Deployment#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#password Deployment#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#share_name Deployment#share_name}
  */
  readonly shareName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#user Deployment#user}
  */
  readonly user?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#work_group Deployment#work_group}
  */
  readonly workGroup?: string;
}

export function deploymentBootToNetworkIsoShareDetailToTerraform(struct?: DeploymentBootToNetworkIsoShareDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    password: cdktf.stringToTerraform(struct!.password),
    share_name: cdktf.stringToTerraform(struct!.shareName),
    user: cdktf.stringToTerraform(struct!.user),
    work_group: cdktf.stringToTerraform(struct!.workGroup),
  }
}


export function deploymentBootToNetworkIsoShareDetailToHclTerraform(struct?: DeploymentBootToNetworkIsoShareDetail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_name: {
      value: cdktf.stringToHclTerraform(struct!.shareName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_group: {
      value: cdktf.stringToHclTerraform(struct!.workGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentBootToNetworkIsoShareDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentBootToNetworkIsoShareDetail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._shareName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareName = this._shareName;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._workGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.workGroup = this._workGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentBootToNetworkIsoShareDetail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._password = undefined;
      this._shareName = undefined;
      this._user = undefined;
      this._workGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._password = value.password;
      this._shareName = value.shareName;
      this._user = value.user;
      this._workGroup = value.workGroup;
    }
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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

  // share_name - computed: false, optional: true, required: false
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  public resetShareName() {
    this._shareName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // work_group - computed: false, optional: true, required: false
  private _workGroup?: string; 
  public get workGroup() {
    return this.getStringAttribute('work_group');
  }
  public set workGroup(value: string) {
    this._workGroup = value;
  }
  public resetWorkGroup() {
    this._workGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workGroupInput() {
    return this._workGroup;
  }
}
export interface DeploymentBootToNetworkIso {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#boot_to_network Deployment#boot_to_network}
  */
  readonly bootToNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#iso_path Deployment#iso_path}
  */
  readonly isoPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#iso_timeout Deployment#iso_timeout}
  */
  readonly isoTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#share_detail Deployment#share_detail}
  */
  readonly shareDetail?: DeploymentBootToNetworkIsoShareDetail;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#share_type Deployment#share_type}
  */
  readonly shareType?: string;
}

export function deploymentBootToNetworkIsoToTerraform(struct?: DeploymentBootToNetworkIso | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_to_network: cdktf.booleanToTerraform(struct!.bootToNetwork),
    iso_path: cdktf.stringToTerraform(struct!.isoPath),
    iso_timeout: cdktf.numberToTerraform(struct!.isoTimeout),
    share_detail: deploymentBootToNetworkIsoShareDetailToTerraform(struct!.shareDetail),
    share_type: cdktf.stringToTerraform(struct!.shareType),
  }
}


export function deploymentBootToNetworkIsoToHclTerraform(struct?: DeploymentBootToNetworkIso | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_to_network: {
      value: cdktf.booleanToHclTerraform(struct!.bootToNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    iso_path: {
      value: cdktf.stringToHclTerraform(struct!.isoPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iso_timeout: {
      value: cdktf.numberToHclTerraform(struct!.isoTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    share_detail: {
      value: deploymentBootToNetworkIsoShareDetailToHclTerraform(struct!.shareDetail),
      isBlock: true,
      type: "struct",
      storageClassType: "DeploymentBootToNetworkIsoShareDetail",
    },
    share_type: {
      value: cdktf.stringToHclTerraform(struct!.shareType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentBootToNetworkIsoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DeploymentBootToNetworkIso | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootToNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootToNetwork = this._bootToNetwork;
    }
    if (this._isoPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.isoPath = this._isoPath;
    }
    if (this._isoTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.isoTimeout = this._isoTimeout;
    }
    if (this._shareDetail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareDetail = this._shareDetail?.internalValue;
    }
    if (this._shareType !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareType = this._shareType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentBootToNetworkIso | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootToNetwork = undefined;
      this._isoPath = undefined;
      this._isoTimeout = undefined;
      this._shareDetail.internalValue = undefined;
      this._shareType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootToNetwork = value.bootToNetwork;
      this._isoPath = value.isoPath;
      this._isoTimeout = value.isoTimeout;
      this._shareDetail.internalValue = value.shareDetail;
      this._shareType = value.shareType;
    }
  }

  // boot_to_network - computed: false, optional: true, required: false
  private _bootToNetwork?: boolean | cdktf.IResolvable; 
  public get bootToNetwork() {
    return this.getBooleanAttribute('boot_to_network');
  }
  public set bootToNetwork(value: boolean | cdktf.IResolvable) {
    this._bootToNetwork = value;
  }
  public resetBootToNetwork() {
    this._bootToNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootToNetworkInput() {
    return this._bootToNetwork;
  }

  // iso_path - computed: false, optional: true, required: false
  private _isoPath?: string; 
  public get isoPath() {
    return this.getStringAttribute('iso_path');
  }
  public set isoPath(value: string) {
    this._isoPath = value;
  }
  public resetIsoPath() {
    this._isoPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isoPathInput() {
    return this._isoPath;
  }

  // iso_timeout - computed: false, optional: true, required: false
  private _isoTimeout?: number; 
  public get isoTimeout() {
    return this.getNumberAttribute('iso_timeout');
  }
  public set isoTimeout(value: number) {
    this._isoTimeout = value;
  }
  public resetIsoTimeout() {
    this._isoTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isoTimeoutInput() {
    return this._isoTimeout;
  }

  // share_detail - computed: false, optional: true, required: false
  private _shareDetail = new DeploymentBootToNetworkIsoShareDetailOutputReference(this, "share_detail");
  public get shareDetail() {
    return this._shareDetail;
  }
  public putShareDetail(value: DeploymentBootToNetworkIsoShareDetail) {
    this._shareDetail.internalValue = value;
  }
  public resetShareDetail() {
    this._shareDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareDetailInput() {
    return this._shareDetail.internalValue;
  }

  // share_type - computed: false, optional: true, required: false
  private _shareType?: string; 
  public get shareType() {
    return this.getStringAttribute('share_type');
  }
  public set shareType(value: string) {
    this._shareType = value;
  }
  public resetShareType() {
    this._shareType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareTypeInput() {
    return this._shareType;
  }
}
export interface DeploymentDeviceAttributesAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#attribute_id Deployment#attribute_id}
  */
  readonly attributeId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#display_name Deployment#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#is_ignored Deployment#is_ignored}
  */
  readonly isIgnored?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#value Deployment#value}
  */
  readonly value?: string;
}

export function deploymentDeviceAttributesAttributesToTerraform(struct?: DeploymentDeviceAttributesAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_id: cdktf.numberToTerraform(struct!.attributeId),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    is_ignored: cdktf.booleanToTerraform(struct!.isIgnored),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deploymentDeviceAttributesAttributesToHclTerraform(struct?: DeploymentDeviceAttributesAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_id: {
      value: cdktf.numberToHclTerraform(struct!.attributeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_ignored: {
      value: cdktf.booleanToHclTerraform(struct!.isIgnored),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DeploymentDeviceAttributesAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentDeviceAttributesAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeId = this._attributeId;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._isIgnored !== undefined) {
      hasAnyValues = true;
      internalValueResult.isIgnored = this._isIgnored;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentDeviceAttributesAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeId = undefined;
      this._displayName = undefined;
      this._isIgnored = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeId = value.attributeId;
      this._displayName = value.displayName;
      this._isIgnored = value.isIgnored;
      this._value = value.value;
    }
  }

  // attribute_id - computed: false, optional: true, required: false
  private _attributeId?: number; 
  public get attributeId() {
    return this.getNumberAttribute('attribute_id');
  }
  public set attributeId(value: number) {
    this._attributeId = value;
  }
  public resetAttributeId() {
    this._attributeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeIdInput() {
    return this._attributeId;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // is_ignored - computed: false, optional: true, required: false
  private _isIgnored?: boolean | cdktf.IResolvable; 
  public get isIgnored() {
    return this.getBooleanAttribute('is_ignored');
  }
  public set isIgnored(value: boolean | cdktf.IResolvable) {
    this._isIgnored = value;
  }
  public resetIsIgnored() {
    this._isIgnored = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isIgnoredInput() {
    return this._isIgnored;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DeploymentDeviceAttributesAttributesList extends cdktf.ComplexList {
  public internalValue? : DeploymentDeviceAttributesAttributes[] | cdktf.IResolvable

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
  public get(index: number): DeploymentDeviceAttributesAttributesOutputReference {
    return new DeploymentDeviceAttributesAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeploymentDeviceAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#attributes Deployment#attributes}
  */
  readonly attributes?: DeploymentDeviceAttributesAttributes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#device_servicetags Deployment#device_servicetags}
  */
  readonly deviceServicetags?: string[];
}

export function deploymentDeviceAttributesToTerraform(struct?: DeploymentDeviceAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.listMapper(deploymentDeviceAttributesAttributesToTerraform, false)(struct!.attributes),
    device_servicetags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deviceServicetags),
  }
}


export function deploymentDeviceAttributesToHclTerraform(struct?: DeploymentDeviceAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.listMapperHcl(deploymentDeviceAttributesAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "list",
      storageClassType: "DeploymentDeviceAttributesAttributesList",
    },
    device_servicetags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deviceServicetags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeploymentDeviceAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DeploymentDeviceAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._deviceServicetags !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceServicetags = this._deviceServicetags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeploymentDeviceAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._deviceServicetags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._deviceServicetags = value.deviceServicetags;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new DeploymentDeviceAttributesAttributesList(this, "attributes", false);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: DeploymentDeviceAttributesAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // device_servicetags - computed: false, optional: true, required: false
  private _deviceServicetags?: string[]; 
  public get deviceServicetags() {
    return cdktf.Fn.tolist(this.getListAttribute('device_servicetags'));
  }
  public set deviceServicetags(value: string[]) {
    this._deviceServicetags = value;
  }
  public resetDeviceServicetags() {
    this._deviceServicetags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceServicetagsInput() {
    return this._deviceServicetags;
  }
}

export class DeploymentDeviceAttributesList extends cdktf.ComplexList {
  public internalValue? : DeploymentDeviceAttributes[] | cdktf.IResolvable

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
  public get(index: number): DeploymentDeviceAttributesOutputReference {
    return new DeploymentDeviceAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment ome_deployment}
*/
export class Deployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ome_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Deployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Deployment to import
  * @param importFromId The id of the existing Deployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Deployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ome_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/ome/1.2.3/docs/resources/deployment ome_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeploymentConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DeploymentConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ome_deployment',
      terraformGeneratorMetadata: {
        providerName: 'ome',
        providerVersion: '1.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bootToNetworkIso.internalValue = config.bootToNetworkIso;
    this._cron = config.cron;
    this._deviceAttributes.internalValue = config.deviceAttributes;
    this._deviceIds = config.deviceIds;
    this._deviceServicetags = config.deviceServicetags;
    this._forcedShutdown = config.forcedShutdown;
    this._jobRetryCount = config.jobRetryCount;
    this._optionsContinueOnWarning = config.optionsContinueOnWarning;
    this._optionsPrecheckOnly = config.optionsPrecheckOnly;
    this._optionsStrictCheckingVlan = config.optionsStrictCheckingVlan;
    this._optionsTimeToWaitBeforeShutdown = config.optionsTimeToWaitBeforeShutdown;
    this._powerStateOff = config.powerStateOff;
    this._runLater = config.runLater;
    this._sleepInterval = config.sleepInterval;
    this._templateId = config.templateId;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // boot_to_network_iso - computed: false, optional: true, required: false
  private _bootToNetworkIso = new DeploymentBootToNetworkIsoOutputReference(this, "boot_to_network_iso");
  public get bootToNetworkIso() {
    return this._bootToNetworkIso;
  }
  public putBootToNetworkIso(value: DeploymentBootToNetworkIso) {
    this._bootToNetworkIso.internalValue = value;
  }
  public resetBootToNetworkIso() {
    this._bootToNetworkIso.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootToNetworkIsoInput() {
    return this._bootToNetworkIso.internalValue;
  }

  // cron - computed: false, optional: true, required: false
  private _cron?: string; 
  public get cron() {
    return this.getStringAttribute('cron');
  }
  public set cron(value: string) {
    this._cron = value;
  }
  public resetCron() {
    this._cron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronInput() {
    return this._cron;
  }

  // device_attributes - computed: false, optional: true, required: false
  private _deviceAttributes = new DeploymentDeviceAttributesList(this, "device_attributes", false);
  public get deviceAttributes() {
    return this._deviceAttributes;
  }
  public putDeviceAttributes(value: DeploymentDeviceAttributes[] | cdktf.IResolvable) {
    this._deviceAttributes.internalValue = value;
  }
  public resetDeviceAttributes() {
    this._deviceAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceAttributesInput() {
    return this._deviceAttributes.internalValue;
  }

  // device_ids - computed: false, optional: true, required: false
  private _deviceIds?: number[]; 
  public get deviceIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('device_ids')));
  }
  public set deviceIds(value: number[]) {
    this._deviceIds = value;
  }
  public resetDeviceIds() {
    this._deviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdsInput() {
    return this._deviceIds;
  }

  // device_servicetags - computed: false, optional: true, required: false
  private _deviceServicetags?: string[]; 
  public get deviceServicetags() {
    return cdktf.Fn.tolist(this.getListAttribute('device_servicetags'));
  }
  public set deviceServicetags(value: string[]) {
    this._deviceServicetags = value;
  }
  public resetDeviceServicetags() {
    this._deviceServicetags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceServicetagsInput() {
    return this._deviceServicetags;
  }

  // forced_shutdown - computed: false, optional: true, required: false
  private _forcedShutdown?: boolean | cdktf.IResolvable; 
  public get forcedShutdown() {
    return this.getBooleanAttribute('forced_shutdown');
  }
  public set forcedShutdown(value: boolean | cdktf.IResolvable) {
    this._forcedShutdown = value;
  }
  public resetForcedShutdown() {
    this._forcedShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcedShutdownInput() {
    return this._forcedShutdown;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // job_retry_count - computed: true, optional: true, required: false
  private _jobRetryCount?: number; 
  public get jobRetryCount() {
    return this.getNumberAttribute('job_retry_count');
  }
  public set jobRetryCount(value: number) {
    this._jobRetryCount = value;
  }
  public resetJobRetryCount() {
    this._jobRetryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobRetryCountInput() {
    return this._jobRetryCount;
  }

  // options_continue_on_warning - computed: false, optional: true, required: false
  private _optionsContinueOnWarning?: boolean | cdktf.IResolvable; 
  public get optionsContinueOnWarning() {
    return this.getBooleanAttribute('options_continue_on_warning');
  }
  public set optionsContinueOnWarning(value: boolean | cdktf.IResolvable) {
    this._optionsContinueOnWarning = value;
  }
  public resetOptionsContinueOnWarning() {
    this._optionsContinueOnWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsContinueOnWarningInput() {
    return this._optionsContinueOnWarning;
  }

  // options_precheck_only - computed: false, optional: true, required: false
  private _optionsPrecheckOnly?: boolean | cdktf.IResolvable; 
  public get optionsPrecheckOnly() {
    return this.getBooleanAttribute('options_precheck_only');
  }
  public set optionsPrecheckOnly(value: boolean | cdktf.IResolvable) {
    this._optionsPrecheckOnly = value;
  }
  public resetOptionsPrecheckOnly() {
    this._optionsPrecheckOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsPrecheckOnlyInput() {
    return this._optionsPrecheckOnly;
  }

  // options_strict_checking_vlan - computed: false, optional: true, required: false
  private _optionsStrictCheckingVlan?: boolean | cdktf.IResolvable; 
  public get optionsStrictCheckingVlan() {
    return this.getBooleanAttribute('options_strict_checking_vlan');
  }
  public set optionsStrictCheckingVlan(value: boolean | cdktf.IResolvable) {
    this._optionsStrictCheckingVlan = value;
  }
  public resetOptionsStrictCheckingVlan() {
    this._optionsStrictCheckingVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsStrictCheckingVlanInput() {
    return this._optionsStrictCheckingVlan;
  }

  // options_time_to_wait_before_shutdown - computed: true, optional: true, required: false
  private _optionsTimeToWaitBeforeShutdown?: number; 
  public get optionsTimeToWaitBeforeShutdown() {
    return this.getNumberAttribute('options_time_to_wait_before_shutdown');
  }
  public set optionsTimeToWaitBeforeShutdown(value: number) {
    this._optionsTimeToWaitBeforeShutdown = value;
  }
  public resetOptionsTimeToWaitBeforeShutdown() {
    this._optionsTimeToWaitBeforeShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsTimeToWaitBeforeShutdownInput() {
    return this._optionsTimeToWaitBeforeShutdown;
  }

  // power_state_off - computed: false, optional: true, required: false
  private _powerStateOff?: boolean | cdktf.IResolvable; 
  public get powerStateOff() {
    return this.getBooleanAttribute('power_state_off');
  }
  public set powerStateOff(value: boolean | cdktf.IResolvable) {
    this._powerStateOff = value;
  }
  public resetPowerStateOff() {
    this._powerStateOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powerStateOffInput() {
    return this._powerStateOff;
  }

  // run_later - computed: false, optional: true, required: false
  private _runLater?: boolean | cdktf.IResolvable; 
  public get runLater() {
    return this.getBooleanAttribute('run_later');
  }
  public set runLater(value: boolean | cdktf.IResolvable) {
    this._runLater = value;
  }
  public resetRunLater() {
    this._runLater = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runLaterInput() {
    return this._runLater;
  }

  // sleep_interval - computed: true, optional: true, required: false
  private _sleepInterval?: number; 
  public get sleepInterval() {
    return this.getNumberAttribute('sleep_interval');
  }
  public set sleepInterval(value: number) {
    this._sleepInterval = value;
  }
  public resetSleepInterval() {
    this._sleepInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepIntervalInput() {
    return this._sleepInterval;
  }

  // template_id - computed: true, optional: true, required: false
  private _templateId?: number; 
  public get templateId() {
    return this.getNumberAttribute('template_id');
  }
  public set templateId(value: number) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // template_name - computed: true, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      boot_to_network_iso: deploymentBootToNetworkIsoToTerraform(this._bootToNetworkIso.internalValue),
      cron: cdktf.stringToTerraform(this._cron),
      device_attributes: cdktf.listMapper(deploymentDeviceAttributesToTerraform, false)(this._deviceAttributes.internalValue),
      device_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._deviceIds),
      device_servicetags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceServicetags),
      forced_shutdown: cdktf.booleanToTerraform(this._forcedShutdown),
      job_retry_count: cdktf.numberToTerraform(this._jobRetryCount),
      options_continue_on_warning: cdktf.booleanToTerraform(this._optionsContinueOnWarning),
      options_precheck_only: cdktf.booleanToTerraform(this._optionsPrecheckOnly),
      options_strict_checking_vlan: cdktf.booleanToTerraform(this._optionsStrictCheckingVlan),
      options_time_to_wait_before_shutdown: cdktf.numberToTerraform(this._optionsTimeToWaitBeforeShutdown),
      power_state_off: cdktf.booleanToTerraform(this._powerStateOff),
      run_later: cdktf.booleanToTerraform(this._runLater),
      sleep_interval: cdktf.numberToTerraform(this._sleepInterval),
      template_id: cdktf.numberToTerraform(this._templateId),
      template_name: cdktf.stringToTerraform(this._templateName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      boot_to_network_iso: {
        value: deploymentBootToNetworkIsoToHclTerraform(this._bootToNetworkIso.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DeploymentBootToNetworkIso",
      },
      cron: {
        value: cdktf.stringToHclTerraform(this._cron),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_attributes: {
        value: cdktf.listMapperHcl(deploymentDeviceAttributesToHclTerraform, false)(this._deviceAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DeploymentDeviceAttributesList",
      },
      device_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._deviceIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      device_servicetags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceServicetags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      forced_shutdown: {
        value: cdktf.booleanToHclTerraform(this._forcedShutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      job_retry_count: {
        value: cdktf.numberToHclTerraform(this._jobRetryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      options_continue_on_warning: {
        value: cdktf.booleanToHclTerraform(this._optionsContinueOnWarning),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      options_precheck_only: {
        value: cdktf.booleanToHclTerraform(this._optionsPrecheckOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      options_strict_checking_vlan: {
        value: cdktf.booleanToHclTerraform(this._optionsStrictCheckingVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      options_time_to_wait_before_shutdown: {
        value: cdktf.numberToHclTerraform(this._optionsTimeToWaitBeforeShutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      power_state_off: {
        value: cdktf.booleanToHclTerraform(this._powerStateOff),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      run_later: {
        value: cdktf.booleanToHclTerraform(this._runLater),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sleep_interval: {
        value: cdktf.numberToHclTerraform(this._sleepInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_id: {
        value: cdktf.numberToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
