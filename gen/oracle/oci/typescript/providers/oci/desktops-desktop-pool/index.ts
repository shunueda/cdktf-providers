// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DesktopsDesktopPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#are_privileged_users DesktopsDesktopPool#are_privileged_users}
  */
  readonly arePrivilegedUsers: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#are_volumes_preserved DesktopsDesktopPool#are_volumes_preserved}
  */
  readonly areVolumesPreserved?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#availability_domain DesktopsDesktopPool#availability_domain}
  */
  readonly availabilityDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#compartment_id DesktopsDesktopPool#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#contact_details DesktopsDesktopPool#contact_details}
  */
  readonly contactDetails: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#defined_tags DesktopsDesktopPool#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#description DesktopsDesktopPool#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#display_name DesktopsDesktopPool#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#freeform_tags DesktopsDesktopPool#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#id DesktopsDesktopPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#is_storage_enabled DesktopsDesktopPool#is_storage_enabled}
  */
  readonly isStorageEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#maximum_size DesktopsDesktopPool#maximum_size}
  */
  readonly maximumSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#nsg_ids DesktopsDesktopPool#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#shape_name DesktopsDesktopPool#shape_name}
  */
  readonly shapeName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#standby_size DesktopsDesktopPool#standby_size}
  */
  readonly standbySize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#storage_backup_policy_id DesktopsDesktopPool#storage_backup_policy_id}
  */
  readonly storageBackupPolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#storage_size_in_gbs DesktopsDesktopPool#storage_size_in_gbs}
  */
  readonly storageSizeInGbs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#time_start_scheduled DesktopsDesktopPool#time_start_scheduled}
  */
  readonly timeStartScheduled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#time_stop_scheduled DesktopsDesktopPool#time_stop_scheduled}
  */
  readonly timeStopScheduled?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#use_dedicated_vm_host DesktopsDesktopPool#use_dedicated_vm_host}
  */
  readonly useDedicatedVmHost?: string;
  /**
  * availability_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#availability_policy DesktopsDesktopPool#availability_policy}
  */
  readonly availabilityPolicy: DesktopsDesktopPoolAvailabilityPolicy;
  /**
  * device_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#device_policy DesktopsDesktopPool#device_policy}
  */
  readonly devicePolicy: DesktopsDesktopPoolDevicePolicy;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#image DesktopsDesktopPool#image}
  */
  readonly image: DesktopsDesktopPoolImage;
  /**
  * network_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#network_configuration DesktopsDesktopPool#network_configuration}
  */
  readonly networkConfiguration: DesktopsDesktopPoolNetworkConfiguration;
  /**
  * private_access_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#private_access_details DesktopsDesktopPool#private_access_details}
  */
  readonly privateAccessDetails?: DesktopsDesktopPoolPrivateAccessDetails;
  /**
  * session_lifecycle_actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#session_lifecycle_actions DesktopsDesktopPool#session_lifecycle_actions}
  */
  readonly sessionLifecycleActions?: DesktopsDesktopPoolSessionLifecycleActions;
  /**
  * shape_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#shape_config DesktopsDesktopPool#shape_config}
  */
  readonly shapeConfig?: DesktopsDesktopPoolShapeConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#timeouts DesktopsDesktopPool#timeouts}
  */
  readonly timeouts?: DesktopsDesktopPoolTimeouts;
}
export interface DesktopsDesktopPoolAvailabilityPolicyStartSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#cron_expression DesktopsDesktopPool#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#timezone DesktopsDesktopPool#timezone}
  */
  readonly timezone: string;
}

export function desktopsDesktopPoolAvailabilityPolicyStartScheduleToTerraform(struct?: DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference | DesktopsDesktopPoolAvailabilityPolicyStartSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function desktopsDesktopPoolAvailabilityPolicyStartScheduleToHclTerraform(struct?: DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference | DesktopsDesktopPoolAvailabilityPolicyStartSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DesktopsDesktopPoolAvailabilityPolicyStartSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesktopsDesktopPoolAvailabilityPolicyStartSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cronExpression = undefined;
      this._timezone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cronExpression = value.cronExpression;
      this._timezone = value.timezone;
    }
  }

  // cron_expression - computed: false, optional: false, required: true
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface DesktopsDesktopPoolAvailabilityPolicyStopSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#cron_expression DesktopsDesktopPool#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#timezone DesktopsDesktopPool#timezone}
  */
  readonly timezone: string;
}

export function desktopsDesktopPoolAvailabilityPolicyStopScheduleToTerraform(struct?: DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference | DesktopsDesktopPoolAvailabilityPolicyStopSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function desktopsDesktopPoolAvailabilityPolicyStopScheduleToHclTerraform(struct?: DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference | DesktopsDesktopPoolAvailabilityPolicyStopSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DesktopsDesktopPoolAvailabilityPolicyStopSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesktopsDesktopPoolAvailabilityPolicyStopSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cronExpression = undefined;
      this._timezone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cronExpression = value.cronExpression;
      this._timezone = value.timezone;
    }
  }

  // cron_expression - computed: false, optional: false, required: true
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // timezone - computed: false, optional: false, required: true
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface DesktopsDesktopPoolAvailabilityPolicy {
  /**
  * start_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#start_schedule DesktopsDesktopPool#start_schedule}
  */
  readonly startSchedule?: DesktopsDesktopPoolAvailabilityPolicyStartSchedule;
  /**
  * stop_schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#stop_schedule DesktopsDesktopPool#stop_schedule}
  */
  readonly stopSchedule?: DesktopsDesktopPoolAvailabilityPolicyStopSchedule;
}

export function desktopsDesktopPoolAvailabilityPolicyToTerraform(struct?: DesktopsDesktopPoolAvailabilityPolicyOutputReference | DesktopsDesktopPoolAvailabilityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    start_schedule: desktopsDesktopPoolAvailabilityPolicyStartScheduleToTerraform(struct!.startSchedule),
    stop_schedule: desktopsDesktopPoolAvailabilityPolicyStopScheduleToTerraform(struct!.stopSchedule),
  }
}


export function desktopsDesktopPoolAvailabilityPolicyToHclTerraform(struct?: DesktopsDesktopPoolAvailabilityPolicyOutputReference | DesktopsDesktopPoolAvailabilityPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    start_schedule: {
      value: desktopsDesktopPoolAvailabilityPolicyStartScheduleToHclTerraform(struct!.startSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DesktopsDesktopPoolAvailabilityPolicyStartScheduleList",
    },
    stop_schedule: {
      value: desktopsDesktopPoolAvailabilityPolicyStopScheduleToHclTerraform(struct!.stopSchedule),
      isBlock: true,
      type: "list",
      storageClassType: "DesktopsDesktopPoolAvailabilityPolicyStopScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesktopsDesktopPoolAvailabilityPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DesktopsDesktopPoolAvailabilityPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._startSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startSchedule = this._startSchedule?.internalValue;
    }
    if (this._stopSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopSchedule = this._stopSchedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesktopsDesktopPoolAvailabilityPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._startSchedule.internalValue = undefined;
      this._stopSchedule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._startSchedule.internalValue = value.startSchedule;
      this._stopSchedule.internalValue = value.stopSchedule;
    }
  }

  // start_schedule - computed: false, optional: true, required: false
  private _startSchedule = new DesktopsDesktopPoolAvailabilityPolicyStartScheduleOutputReference(this, "start_schedule");
  public get startSchedule() {
    return this._startSchedule;
  }
  public putStartSchedule(value: DesktopsDesktopPoolAvailabilityPolicyStartSchedule) {
    this._startSchedule.internalValue = value;
  }
  public resetStartSchedule() {
    this._startSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startScheduleInput() {
    return this._startSchedule.internalValue;
  }

  // stop_schedule - computed: false, optional: true, required: false
  private _stopSchedule = new DesktopsDesktopPoolAvailabilityPolicyStopScheduleOutputReference(this, "stop_schedule");
  public get stopSchedule() {
    return this._stopSchedule;
  }
  public putStopSchedule(value: DesktopsDesktopPoolAvailabilityPolicyStopSchedule) {
    this._stopSchedule.internalValue = value;
  }
  public resetStopSchedule() {
    this._stopSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopScheduleInput() {
    return this._stopSchedule.internalValue;
  }
}
export interface DesktopsDesktopPoolDevicePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#audio_mode DesktopsDesktopPool#audio_mode}
  */
  readonly audioMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#cdm_mode DesktopsDesktopPool#cdm_mode}
  */
  readonly cdmMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#clipboard_mode DesktopsDesktopPool#clipboard_mode}
  */
  readonly clipboardMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#is_display_enabled DesktopsDesktopPool#is_display_enabled}
  */
  readonly isDisplayEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#is_keyboard_enabled DesktopsDesktopPool#is_keyboard_enabled}
  */
  readonly isKeyboardEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#is_pointer_enabled DesktopsDesktopPool#is_pointer_enabled}
  */
  readonly isPointerEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#is_printing_enabled DesktopsDesktopPool#is_printing_enabled}
  */
  readonly isPrintingEnabled: boolean | cdktf.IResolvable;
}

export function desktopsDesktopPoolDevicePolicyToTerraform(struct?: DesktopsDesktopPoolDevicePolicyOutputReference | DesktopsDesktopPoolDevicePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_mode: cdktf.stringToTerraform(struct!.audioMode),
    cdm_mode: cdktf.stringToTerraform(struct!.cdmMode),
    clipboard_mode: cdktf.stringToTerraform(struct!.clipboardMode),
    is_display_enabled: cdktf.booleanToTerraform(struct!.isDisplayEnabled),
    is_keyboard_enabled: cdktf.booleanToTerraform(struct!.isKeyboardEnabled),
    is_pointer_enabled: cdktf.booleanToTerraform(struct!.isPointerEnabled),
    is_printing_enabled: cdktf.booleanToTerraform(struct!.isPrintingEnabled),
  }
}


export function desktopsDesktopPoolDevicePolicyToHclTerraform(struct?: DesktopsDesktopPoolDevicePolicyOutputReference | DesktopsDesktopPoolDevicePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio_mode: {
      value: cdktf.stringToHclTerraform(struct!.audioMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cdm_mode: {
      value: cdktf.stringToHclTerraform(struct!.cdmMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clipboard_mode: {
      value: cdktf.stringToHclTerraform(struct!.clipboardMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_display_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isDisplayEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_keyboard_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isKeyboardEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_pointer_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isPointerEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_printing_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isPrintingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesktopsDesktopPoolDevicePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DesktopsDesktopPoolDevicePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioMode = this._audioMode;
    }
    if (this._cdmMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdmMode = this._cdmMode;
    }
    if (this._clipboardMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.clipboardMode = this._clipboardMode;
    }
    if (this._isDisplayEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDisplayEnabled = this._isDisplayEnabled;
    }
    if (this._isKeyboardEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isKeyboardEnabled = this._isKeyboardEnabled;
    }
    if (this._isPointerEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPointerEnabled = this._isPointerEnabled;
    }
    if (this._isPrintingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrintingEnabled = this._isPrintingEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesktopsDesktopPoolDevicePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioMode = undefined;
      this._cdmMode = undefined;
      this._clipboardMode = undefined;
      this._isDisplayEnabled = undefined;
      this._isKeyboardEnabled = undefined;
      this._isPointerEnabled = undefined;
      this._isPrintingEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioMode = value.audioMode;
      this._cdmMode = value.cdmMode;
      this._clipboardMode = value.clipboardMode;
      this._isDisplayEnabled = value.isDisplayEnabled;
      this._isKeyboardEnabled = value.isKeyboardEnabled;
      this._isPointerEnabled = value.isPointerEnabled;
      this._isPrintingEnabled = value.isPrintingEnabled;
    }
  }

  // audio_mode - computed: false, optional: false, required: true
  private _audioMode?: string; 
  public get audioMode() {
    return this.getStringAttribute('audio_mode');
  }
  public set audioMode(value: string) {
    this._audioMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audioModeInput() {
    return this._audioMode;
  }

  // cdm_mode - computed: false, optional: false, required: true
  private _cdmMode?: string; 
  public get cdmMode() {
    return this.getStringAttribute('cdm_mode');
  }
  public set cdmMode(value: string) {
    this._cdmMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cdmModeInput() {
    return this._cdmMode;
  }

  // clipboard_mode - computed: false, optional: false, required: true
  private _clipboardMode?: string; 
  public get clipboardMode() {
    return this.getStringAttribute('clipboard_mode');
  }
  public set clipboardMode(value: string) {
    this._clipboardMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clipboardModeInput() {
    return this._clipboardMode;
  }

  // is_display_enabled - computed: false, optional: false, required: true
  private _isDisplayEnabled?: boolean | cdktf.IResolvable; 
  public get isDisplayEnabled() {
    return this.getBooleanAttribute('is_display_enabled');
  }
  public set isDisplayEnabled(value: boolean | cdktf.IResolvable) {
    this._isDisplayEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isDisplayEnabledInput() {
    return this._isDisplayEnabled;
  }

  // is_keyboard_enabled - computed: false, optional: false, required: true
  private _isKeyboardEnabled?: boolean | cdktf.IResolvable; 
  public get isKeyboardEnabled() {
    return this.getBooleanAttribute('is_keyboard_enabled');
  }
  public set isKeyboardEnabled(value: boolean | cdktf.IResolvable) {
    this._isKeyboardEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isKeyboardEnabledInput() {
    return this._isKeyboardEnabled;
  }

  // is_pointer_enabled - computed: false, optional: false, required: true
  private _isPointerEnabled?: boolean | cdktf.IResolvable; 
  public get isPointerEnabled() {
    return this.getBooleanAttribute('is_pointer_enabled');
  }
  public set isPointerEnabled(value: boolean | cdktf.IResolvable) {
    this._isPointerEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isPointerEnabledInput() {
    return this._isPointerEnabled;
  }

  // is_printing_enabled - computed: false, optional: false, required: true
  private _isPrintingEnabled?: boolean | cdktf.IResolvable; 
  public get isPrintingEnabled() {
    return this.getBooleanAttribute('is_printing_enabled');
  }
  public set isPrintingEnabled(value: boolean | cdktf.IResolvable) {
    this._isPrintingEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrintingEnabledInput() {
    return this._isPrintingEnabled;
  }
}
export interface DesktopsDesktopPoolImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#image_id DesktopsDesktopPool#image_id}
  */
  readonly imageId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#image_name DesktopsDesktopPool#image_name}
  */
  readonly imageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#operating_system DesktopsDesktopPool#operating_system}
  */
  readonly operatingSystem?: string;
}

export function desktopsDesktopPoolImageToTerraform(struct?: DesktopsDesktopPoolImageOutputReference | DesktopsDesktopPoolImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_id: cdktf.stringToTerraform(struct!.imageId),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    operating_system: cdktf.stringToTerraform(struct!.operatingSystem),
  }
}


export function desktopsDesktopPoolImageToHclTerraform(struct?: DesktopsDesktopPoolImageOutputReference | DesktopsDesktopPoolImage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operating_system: {
      value: cdktf.stringToHclTerraform(struct!.operatingSystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesktopsDesktopPoolImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DesktopsDesktopPoolImage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._operatingSystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatingSystem = this._operatingSystem;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesktopsDesktopPoolImage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imageId = undefined;
      this._imageName = undefined;
      this._operatingSystem = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imageId = value.imageId;
      this._imageName = value.imageName;
      this._operatingSystem = value.operatingSystem;
    }
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

  // operating_system - computed: true, optional: true, required: false
  private _operatingSystem?: string; 
  public get operatingSystem() {
    return this.getStringAttribute('operating_system');
  }
  public set operatingSystem(value: string) {
    this._operatingSystem = value;
  }
  public resetOperatingSystem() {
    this._operatingSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatingSystemInput() {
    return this._operatingSystem;
  }
}
export interface DesktopsDesktopPoolNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#subnet_id DesktopsDesktopPool#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#vcn_id DesktopsDesktopPool#vcn_id}
  */
  readonly vcnId: string;
}

export function desktopsDesktopPoolNetworkConfigurationToTerraform(struct?: DesktopsDesktopPoolNetworkConfigurationOutputReference | DesktopsDesktopPoolNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    vcn_id: cdktf.stringToTerraform(struct!.vcnId),
  }
}


export function desktopsDesktopPoolNetworkConfigurationToHclTerraform(struct?: DesktopsDesktopPoolNetworkConfigurationOutputReference | DesktopsDesktopPoolNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcn_id: {
      value: cdktf.stringToHclTerraform(struct!.vcnId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesktopsDesktopPoolNetworkConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DesktopsDesktopPoolNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._vcnId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcnId = this._vcnId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesktopsDesktopPoolNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subnetId = undefined;
      this._vcnId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subnetId = value.subnetId;
      this._vcnId = value.vcnId;
    }
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

  // vcn_id - computed: false, optional: false, required: true
  private _vcnId?: string; 
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
  public set vcnId(value: string) {
    this._vcnId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcnIdInput() {
    return this._vcnId;
  }
}
export interface DesktopsDesktopPoolPrivateAccessDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#nsg_ids DesktopsDesktopPool#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#private_ip DesktopsDesktopPool#private_ip}
  */
  readonly privateIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#subnet_id DesktopsDesktopPool#subnet_id}
  */
  readonly subnetId: string;
}

export function desktopsDesktopPoolPrivateAccessDetailsToTerraform(struct?: DesktopsDesktopPoolPrivateAccessDetailsOutputReference | DesktopsDesktopPoolPrivateAccessDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nsgIds),
    private_ip: cdktf.stringToTerraform(struct!.privateIp),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function desktopsDesktopPoolPrivateAccessDetailsToHclTerraform(struct?: DesktopsDesktopPoolPrivateAccessDetailsOutputReference | DesktopsDesktopPoolPrivateAccessDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nsg_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nsgIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    private_ip: {
      value: cdktf.stringToHclTerraform(struct!.privateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesktopsDesktopPoolPrivateAccessDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DesktopsDesktopPoolPrivateAccessDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nsgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsgIds = this._nsgIds;
    }
    if (this._privateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIp = this._privateIp;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesktopsDesktopPoolPrivateAccessDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nsgIds = undefined;
      this._privateIp = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nsgIds = value.nsgIds;
      this._privateIp = value.privateIp;
      this._subnetId = value.subnetId;
    }
  }

  // endpoint_fqdn - computed: true, optional: false, required: false
  public get endpointFqdn() {
    return this.getStringAttribute('endpoint_fqdn');
  }

  // nsg_ids - computed: false, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // private_ip - computed: false, optional: true, required: false
  private _privateIp?: string; 
  public get privateIp() {
    return this.getStringAttribute('private_ip');
  }
  public set privateIp(value: string) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
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

  // vcn_id - computed: true, optional: false, required: false
  public get vcnId() {
    return this.getStringAttribute('vcn_id');
  }
}
export interface DesktopsDesktopPoolSessionLifecycleActionsDisconnect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#action DesktopsDesktopPool#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#grace_period_in_minutes DesktopsDesktopPool#grace_period_in_minutes}
  */
  readonly gracePeriodInMinutes?: number;
}

export function desktopsDesktopPoolSessionLifecycleActionsDisconnectToTerraform(struct?: DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference | DesktopsDesktopPoolSessionLifecycleActionsDisconnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    grace_period_in_minutes: cdktf.numberToTerraform(struct!.gracePeriodInMinutes),
  }
}


export function desktopsDesktopPoolSessionLifecycleActionsDisconnectToHclTerraform(struct?: DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference | DesktopsDesktopPoolSessionLifecycleActionsDisconnect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grace_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DesktopsDesktopPoolSessionLifecycleActionsDisconnect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._gracePeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriodInMinutes = this._gracePeriodInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesktopsDesktopPoolSessionLifecycleActionsDisconnect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._gracePeriodInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._gracePeriodInMinutes = value.gracePeriodInMinutes;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // grace_period_in_minutes - computed: true, optional: true, required: false
  private _gracePeriodInMinutes?: number; 
  public get gracePeriodInMinutes() {
    return this.getNumberAttribute('grace_period_in_minutes');
  }
  public set gracePeriodInMinutes(value: number) {
    this._gracePeriodInMinutes = value;
  }
  public resetGracePeriodInMinutes() {
    this._gracePeriodInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInMinutesInput() {
    return this._gracePeriodInMinutes;
  }
}
export interface DesktopsDesktopPoolSessionLifecycleActionsInactivity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#action DesktopsDesktopPool#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#grace_period_in_minutes DesktopsDesktopPool#grace_period_in_minutes}
  */
  readonly gracePeriodInMinutes?: number;
}

export function desktopsDesktopPoolSessionLifecycleActionsInactivityToTerraform(struct?: DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference | DesktopsDesktopPoolSessionLifecycleActionsInactivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    grace_period_in_minutes: cdktf.numberToTerraform(struct!.gracePeriodInMinutes),
  }
}


export function desktopsDesktopPoolSessionLifecycleActionsInactivityToHclTerraform(struct?: DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference | DesktopsDesktopPoolSessionLifecycleActionsInactivity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grace_period_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.gracePeriodInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DesktopsDesktopPoolSessionLifecycleActionsInactivity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._gracePeriodInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriodInMinutes = this._gracePeriodInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesktopsDesktopPoolSessionLifecycleActionsInactivity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._gracePeriodInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._gracePeriodInMinutes = value.gracePeriodInMinutes;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // grace_period_in_minutes - computed: true, optional: true, required: false
  private _gracePeriodInMinutes?: number; 
  public get gracePeriodInMinutes() {
    return this.getNumberAttribute('grace_period_in_minutes');
  }
  public set gracePeriodInMinutes(value: number) {
    this._gracePeriodInMinutes = value;
  }
  public resetGracePeriodInMinutes() {
    this._gracePeriodInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInMinutesInput() {
    return this._gracePeriodInMinutes;
  }
}
export interface DesktopsDesktopPoolSessionLifecycleActions {
  /**
  * disconnect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#disconnect DesktopsDesktopPool#disconnect}
  */
  readonly disconnect?: DesktopsDesktopPoolSessionLifecycleActionsDisconnect;
  /**
  * inactivity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#inactivity DesktopsDesktopPool#inactivity}
  */
  readonly inactivity?: DesktopsDesktopPoolSessionLifecycleActionsInactivity;
}

export function desktopsDesktopPoolSessionLifecycleActionsToTerraform(struct?: DesktopsDesktopPoolSessionLifecycleActionsOutputReference | DesktopsDesktopPoolSessionLifecycleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disconnect: desktopsDesktopPoolSessionLifecycleActionsDisconnectToTerraform(struct!.disconnect),
    inactivity: desktopsDesktopPoolSessionLifecycleActionsInactivityToTerraform(struct!.inactivity),
  }
}


export function desktopsDesktopPoolSessionLifecycleActionsToHclTerraform(struct?: DesktopsDesktopPoolSessionLifecycleActionsOutputReference | DesktopsDesktopPoolSessionLifecycleActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disconnect: {
      value: desktopsDesktopPoolSessionLifecycleActionsDisconnectToHclTerraform(struct!.disconnect),
      isBlock: true,
      type: "list",
      storageClassType: "DesktopsDesktopPoolSessionLifecycleActionsDisconnectList",
    },
    inactivity: {
      value: desktopsDesktopPoolSessionLifecycleActionsInactivityToHclTerraform(struct!.inactivity),
      isBlock: true,
      type: "list",
      storageClassType: "DesktopsDesktopPoolSessionLifecycleActionsInactivityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesktopsDesktopPoolSessionLifecycleActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DesktopsDesktopPoolSessionLifecycleActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disconnect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disconnect = this._disconnect?.internalValue;
    }
    if (this._inactivity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactivity = this._inactivity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesktopsDesktopPoolSessionLifecycleActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disconnect.internalValue = undefined;
      this._inactivity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disconnect.internalValue = value.disconnect;
      this._inactivity.internalValue = value.inactivity;
    }
  }

  // disconnect - computed: false, optional: true, required: false
  private _disconnect = new DesktopsDesktopPoolSessionLifecycleActionsDisconnectOutputReference(this, "disconnect");
  public get disconnect() {
    return this._disconnect;
  }
  public putDisconnect(value: DesktopsDesktopPoolSessionLifecycleActionsDisconnect) {
    this._disconnect.internalValue = value;
  }
  public resetDisconnect() {
    this._disconnect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectInput() {
    return this._disconnect.internalValue;
  }

  // inactivity - computed: false, optional: true, required: false
  private _inactivity = new DesktopsDesktopPoolSessionLifecycleActionsInactivityOutputReference(this, "inactivity");
  public get inactivity() {
    return this._inactivity;
  }
  public putInactivity(value: DesktopsDesktopPoolSessionLifecycleActionsInactivity) {
    this._inactivity.internalValue = value;
  }
  public resetInactivity() {
    this._inactivity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityInput() {
    return this._inactivity.internalValue;
  }
}
export interface DesktopsDesktopPoolShapeConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#baseline_ocpu_utilization DesktopsDesktopPool#baseline_ocpu_utilization}
  */
  readonly baselineOcpuUtilization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#memory_in_gbs DesktopsDesktopPool#memory_in_gbs}
  */
  readonly memoryInGbs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#ocpus DesktopsDesktopPool#ocpus}
  */
  readonly ocpus?: string;
}

export function desktopsDesktopPoolShapeConfigToTerraform(struct?: DesktopsDesktopPoolShapeConfigOutputReference | DesktopsDesktopPoolShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    baseline_ocpu_utilization: cdktf.stringToTerraform(struct!.baselineOcpuUtilization),
    memory_in_gbs: cdktf.stringToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.stringToTerraform(struct!.ocpus),
  }
}


export function desktopsDesktopPoolShapeConfigToHclTerraform(struct?: DesktopsDesktopPoolShapeConfigOutputReference | DesktopsDesktopPoolShapeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    baseline_ocpu_utilization: {
      value: cdktf.stringToHclTerraform(struct!.baselineOcpuUtilization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_in_gbs: {
      value: cdktf.stringToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ocpus: {
      value: cdktf.stringToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DesktopsDesktopPoolShapeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DesktopsDesktopPoolShapeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baselineOcpuUtilization !== undefined) {
      hasAnyValues = true;
      internalValueResult.baselineOcpuUtilization = this._baselineOcpuUtilization;
    }
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DesktopsDesktopPoolShapeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baselineOcpuUtilization = undefined;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baselineOcpuUtilization = value.baselineOcpuUtilization;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
    }
  }

  // baseline_ocpu_utilization - computed: true, optional: true, required: false
  private _baselineOcpuUtilization?: string; 
  public get baselineOcpuUtilization() {
    return this.getStringAttribute('baseline_ocpu_utilization');
  }
  public set baselineOcpuUtilization(value: string) {
    this._baselineOcpuUtilization = value;
  }
  public resetBaselineOcpuUtilization() {
    this._baselineOcpuUtilization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineOcpuUtilizationInput() {
    return this._baselineOcpuUtilization;
  }

  // memory_in_gbs - computed: true, optional: true, required: false
  private _memoryInGbs?: string; 
  public get memoryInGbs() {
    return this.getStringAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: string) {
    this._memoryInGbs = value;
  }
  public resetMemoryInGbs() {
    this._memoryInGbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: true, optional: true, required: false
  private _ocpus?: string; 
  public get ocpus() {
    return this.getStringAttribute('ocpus');
  }
  public set ocpus(value: string) {
    this._ocpus = value;
  }
  public resetOcpus() {
    this._ocpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }
}
export interface DesktopsDesktopPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#create DesktopsDesktopPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#delete DesktopsDesktopPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#update DesktopsDesktopPool#update}
  */
  readonly update?: string;
}

export function desktopsDesktopPoolTimeoutsToTerraform(struct?: DesktopsDesktopPoolTimeouts | cdktf.IResolvable): any {
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


export function desktopsDesktopPoolTimeoutsToHclTerraform(struct?: DesktopsDesktopPoolTimeouts | cdktf.IResolvable): any {
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

export class DesktopsDesktopPoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DesktopsDesktopPoolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DesktopsDesktopPoolTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool oci_desktops_desktop_pool}
*/
export class DesktopsDesktopPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_desktops_desktop_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DesktopsDesktopPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DesktopsDesktopPool to import
  * @param importFromId The id of the existing DesktopsDesktopPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DesktopsDesktopPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_desktops_desktop_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/resources/desktops_desktop_pool oci_desktops_desktop_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DesktopsDesktopPoolConfig
  */
  public constructor(scope: Construct, id: string, config: DesktopsDesktopPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_desktops_desktop_pool',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arePrivilegedUsers = config.arePrivilegedUsers;
    this._areVolumesPreserved = config.areVolumesPreserved;
    this._availabilityDomain = config.availabilityDomain;
    this._compartmentId = config.compartmentId;
    this._contactDetails = config.contactDetails;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._isStorageEnabled = config.isStorageEnabled;
    this._maximumSize = config.maximumSize;
    this._nsgIds = config.nsgIds;
    this._shapeName = config.shapeName;
    this._standbySize = config.standbySize;
    this._storageBackupPolicyId = config.storageBackupPolicyId;
    this._storageSizeInGbs = config.storageSizeInGbs;
    this._timeStartScheduled = config.timeStartScheduled;
    this._timeStopScheduled = config.timeStopScheduled;
    this._useDedicatedVmHost = config.useDedicatedVmHost;
    this._availabilityPolicy.internalValue = config.availabilityPolicy;
    this._devicePolicy.internalValue = config.devicePolicy;
    this._image.internalValue = config.image;
    this._networkConfiguration.internalValue = config.networkConfiguration;
    this._privateAccessDetails.internalValue = config.privateAccessDetails;
    this._sessionLifecycleActions.internalValue = config.sessionLifecycleActions;
    this._shapeConfig.internalValue = config.shapeConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_desktops - computed: true, optional: false, required: false
  public get activeDesktops() {
    return this.getNumberAttribute('active_desktops');
  }

  // are_privileged_users - computed: false, optional: false, required: true
  private _arePrivilegedUsers?: boolean | cdktf.IResolvable; 
  public get arePrivilegedUsers() {
    return this.getBooleanAttribute('are_privileged_users');
  }
  public set arePrivilegedUsers(value: boolean | cdktf.IResolvable) {
    this._arePrivilegedUsers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arePrivilegedUsersInput() {
    return this._arePrivilegedUsers;
  }

  // are_volumes_preserved - computed: false, optional: true, required: false
  private _areVolumesPreserved?: boolean | cdktf.IResolvable; 
  public get areVolumesPreserved() {
    return this.getBooleanAttribute('are_volumes_preserved');
  }
  public set areVolumesPreserved(value: boolean | cdktf.IResolvable) {
    this._areVolumesPreserved = value;
  }
  public resetAreVolumesPreserved() {
    this._areVolumesPreserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areVolumesPreservedInput() {
    return this._areVolumesPreserved;
  }

  // availability_domain - computed: false, optional: false, required: true
  private _availabilityDomain?: string; 
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }
  public set availabilityDomain(value: string) {
    this._availabilityDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityDomainInput() {
    return this._availabilityDomain;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // contact_details - computed: false, optional: false, required: true
  private _contactDetails?: string; 
  public get contactDetails() {
    return this.getStringAttribute('contact_details');
  }
  public set contactDetails(value: string) {
    this._contactDetails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactDetailsInput() {
    return this._contactDetails;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // description - computed: true, optional: true, required: false
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // is_storage_enabled - computed: false, optional: false, required: true
  private _isStorageEnabled?: boolean | cdktf.IResolvable; 
  public get isStorageEnabled() {
    return this.getBooleanAttribute('is_storage_enabled');
  }
  public set isStorageEnabled(value: boolean | cdktf.IResolvable) {
    this._isStorageEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isStorageEnabledInput() {
    return this._isStorageEnabled;
  }

  // maximum_size - computed: false, optional: false, required: true
  private _maximumSize?: number; 
  public get maximumSize() {
    return this.getNumberAttribute('maximum_size');
  }
  public set maximumSize(value: number) {
    this._maximumSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumSizeInput() {
    return this._maximumSize;
  }

  // nsg_ids - computed: false, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // shape_name - computed: false, optional: false, required: true
  private _shapeName?: string; 
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }
  public set shapeName(value: string) {
    this._shapeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeNameInput() {
    return this._shapeName;
  }

  // standby_size - computed: false, optional: false, required: true
  private _standbySize?: number; 
  public get standbySize() {
    return this.getNumberAttribute('standby_size');
  }
  public set standbySize(value: number) {
    this._standbySize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standbySizeInput() {
    return this._standbySize;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // storage_backup_policy_id - computed: false, optional: false, required: true
  private _storageBackupPolicyId?: string; 
  public get storageBackupPolicyId() {
    return this.getStringAttribute('storage_backup_policy_id');
  }
  public set storageBackupPolicyId(value: string) {
    this._storageBackupPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBackupPolicyIdInput() {
    return this._storageBackupPolicyId;
  }

  // storage_size_in_gbs - computed: false, optional: false, required: true
  private _storageSizeInGbs?: number; 
  public get storageSizeInGbs() {
    return this.getNumberAttribute('storage_size_in_gbs');
  }
  public set storageSizeInGbs(value: number) {
    this._storageSizeInGbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInGbsInput() {
    return this._storageSizeInGbs;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_start_scheduled - computed: false, optional: true, required: false
  private _timeStartScheduled?: string; 
  public get timeStartScheduled() {
    return this.getStringAttribute('time_start_scheduled');
  }
  public set timeStartScheduled(value: string) {
    this._timeStartScheduled = value;
  }
  public resetTimeStartScheduled() {
    this._timeStartScheduled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStartScheduledInput() {
    return this._timeStartScheduled;
  }

  // time_stop_scheduled - computed: false, optional: true, required: false
  private _timeStopScheduled?: string; 
  public get timeStopScheduled() {
    return this.getStringAttribute('time_stop_scheduled');
  }
  public set timeStopScheduled(value: string) {
    this._timeStopScheduled = value;
  }
  public resetTimeStopScheduled() {
    this._timeStopScheduled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStopScheduledInput() {
    return this._timeStopScheduled;
  }

  // use_dedicated_vm_host - computed: true, optional: true, required: false
  private _useDedicatedVmHost?: string; 
  public get useDedicatedVmHost() {
    return this.getStringAttribute('use_dedicated_vm_host');
  }
  public set useDedicatedVmHost(value: string) {
    this._useDedicatedVmHost = value;
  }
  public resetUseDedicatedVmHost() {
    this._useDedicatedVmHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDedicatedVmHostInput() {
    return this._useDedicatedVmHost;
  }

  // availability_policy - computed: false, optional: false, required: true
  private _availabilityPolicy = new DesktopsDesktopPoolAvailabilityPolicyOutputReference(this, "availability_policy");
  public get availabilityPolicy() {
    return this._availabilityPolicy;
  }
  public putAvailabilityPolicy(value: DesktopsDesktopPoolAvailabilityPolicy) {
    this._availabilityPolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityPolicyInput() {
    return this._availabilityPolicy.internalValue;
  }

  // device_policy - computed: false, optional: false, required: true
  private _devicePolicy = new DesktopsDesktopPoolDevicePolicyOutputReference(this, "device_policy");
  public get devicePolicy() {
    return this._devicePolicy;
  }
  public putDevicePolicy(value: DesktopsDesktopPoolDevicePolicy) {
    this._devicePolicy.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePolicyInput() {
    return this._devicePolicy.internalValue;
  }

  // image - computed: false, optional: false, required: true
  private _image = new DesktopsDesktopPoolImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DesktopsDesktopPoolImage) {
    this._image.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // network_configuration - computed: false, optional: false, required: true
  private _networkConfiguration = new DesktopsDesktopPoolNetworkConfigurationOutputReference(this, "network_configuration");
  public get networkConfiguration() {
    return this._networkConfiguration;
  }
  public putNetworkConfiguration(value: DesktopsDesktopPoolNetworkConfiguration) {
    this._networkConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration.internalValue;
  }

  // private_access_details - computed: false, optional: true, required: false
  private _privateAccessDetails = new DesktopsDesktopPoolPrivateAccessDetailsOutputReference(this, "private_access_details");
  public get privateAccessDetails() {
    return this._privateAccessDetails;
  }
  public putPrivateAccessDetails(value: DesktopsDesktopPoolPrivateAccessDetails) {
    this._privateAccessDetails.internalValue = value;
  }
  public resetPrivateAccessDetails() {
    this._privateAccessDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessDetailsInput() {
    return this._privateAccessDetails.internalValue;
  }

  // session_lifecycle_actions - computed: false, optional: true, required: false
  private _sessionLifecycleActions = new DesktopsDesktopPoolSessionLifecycleActionsOutputReference(this, "session_lifecycle_actions");
  public get sessionLifecycleActions() {
    return this._sessionLifecycleActions;
  }
  public putSessionLifecycleActions(value: DesktopsDesktopPoolSessionLifecycleActions) {
    this._sessionLifecycleActions.internalValue = value;
  }
  public resetSessionLifecycleActions() {
    this._sessionLifecycleActions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLifecycleActionsInput() {
    return this._sessionLifecycleActions.internalValue;
  }

  // shape_config - computed: false, optional: true, required: false
  private _shapeConfig = new DesktopsDesktopPoolShapeConfigOutputReference(this, "shape_config");
  public get shapeConfig() {
    return this._shapeConfig;
  }
  public putShapeConfig(value: DesktopsDesktopPoolShapeConfig) {
    this._shapeConfig.internalValue = value;
  }
  public resetShapeConfig() {
    this._shapeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeConfigInput() {
    return this._shapeConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DesktopsDesktopPoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DesktopsDesktopPoolTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      are_privileged_users: cdktf.booleanToTerraform(this._arePrivilegedUsers),
      are_volumes_preserved: cdktf.booleanToTerraform(this._areVolumesPreserved),
      availability_domain: cdktf.stringToTerraform(this._availabilityDomain),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      contact_details: cdktf.stringToTerraform(this._contactDetails),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      is_storage_enabled: cdktf.booleanToTerraform(this._isStorageEnabled),
      maximum_size: cdktf.numberToTerraform(this._maximumSize),
      nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nsgIds),
      shape_name: cdktf.stringToTerraform(this._shapeName),
      standby_size: cdktf.numberToTerraform(this._standbySize),
      storage_backup_policy_id: cdktf.stringToTerraform(this._storageBackupPolicyId),
      storage_size_in_gbs: cdktf.numberToTerraform(this._storageSizeInGbs),
      time_start_scheduled: cdktf.stringToTerraform(this._timeStartScheduled),
      time_stop_scheduled: cdktf.stringToTerraform(this._timeStopScheduled),
      use_dedicated_vm_host: cdktf.stringToTerraform(this._useDedicatedVmHost),
      availability_policy: desktopsDesktopPoolAvailabilityPolicyToTerraform(this._availabilityPolicy.internalValue),
      device_policy: desktopsDesktopPoolDevicePolicyToTerraform(this._devicePolicy.internalValue),
      image: desktopsDesktopPoolImageToTerraform(this._image.internalValue),
      network_configuration: desktopsDesktopPoolNetworkConfigurationToTerraform(this._networkConfiguration.internalValue),
      private_access_details: desktopsDesktopPoolPrivateAccessDetailsToTerraform(this._privateAccessDetails.internalValue),
      session_lifecycle_actions: desktopsDesktopPoolSessionLifecycleActionsToTerraform(this._sessionLifecycleActions.internalValue),
      shape_config: desktopsDesktopPoolShapeConfigToTerraform(this._shapeConfig.internalValue),
      timeouts: desktopsDesktopPoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      are_privileged_users: {
        value: cdktf.booleanToHclTerraform(this._arePrivilegedUsers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      are_volumes_preserved: {
        value: cdktf.booleanToHclTerraform(this._areVolumesPreserved),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      availability_domain: {
        value: cdktf.stringToHclTerraform(this._availabilityDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_details: {
        value: cdktf.stringToHclTerraform(this._contactDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_storage_enabled: {
        value: cdktf.booleanToHclTerraform(this._isStorageEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maximum_size: {
        value: cdktf.numberToHclTerraform(this._maximumSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nsg_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nsgIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      shape_name: {
        value: cdktf.stringToHclTerraform(this._shapeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      standby_size: {
        value: cdktf.numberToHclTerraform(this._standbySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_backup_policy_id: {
        value: cdktf.stringToHclTerraform(this._storageBackupPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_size_in_gbs: {
        value: cdktf.numberToHclTerraform(this._storageSizeInGbs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_start_scheduled: {
        value: cdktf.stringToHclTerraform(this._timeStartScheduled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_stop_scheduled: {
        value: cdktf.stringToHclTerraform(this._timeStopScheduled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_dedicated_vm_host: {
        value: cdktf.stringToHclTerraform(this._useDedicatedVmHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_policy: {
        value: desktopsDesktopPoolAvailabilityPolicyToHclTerraform(this._availabilityPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DesktopsDesktopPoolAvailabilityPolicyList",
      },
      device_policy: {
        value: desktopsDesktopPoolDevicePolicyToHclTerraform(this._devicePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DesktopsDesktopPoolDevicePolicyList",
      },
      image: {
        value: desktopsDesktopPoolImageToHclTerraform(this._image.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DesktopsDesktopPoolImageList",
      },
      network_configuration: {
        value: desktopsDesktopPoolNetworkConfigurationToHclTerraform(this._networkConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DesktopsDesktopPoolNetworkConfigurationList",
      },
      private_access_details: {
        value: desktopsDesktopPoolPrivateAccessDetailsToHclTerraform(this._privateAccessDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DesktopsDesktopPoolPrivateAccessDetailsList",
      },
      session_lifecycle_actions: {
        value: desktopsDesktopPoolSessionLifecycleActionsToHclTerraform(this._sessionLifecycleActions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DesktopsDesktopPoolSessionLifecycleActionsList",
      },
      shape_config: {
        value: desktopsDesktopPoolShapeConfigToHclTerraform(this._shapeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DesktopsDesktopPoolShapeConfigList",
      },
      timeouts: {
        value: desktopsDesktopPoolTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DesktopsDesktopPoolTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
