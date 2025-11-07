// https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NotificationProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Execute configured IT automations during an escalation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#escalation_automations NotificationProfile#escalation_automations}
  */
  readonly escalationAutomations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#id NotificationProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configuration to raise alerts for downtime only after executing the pre-configured monitor actions. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#notify_after_executing_actions NotificationProfile#notify_after_executing_actions}
  */
  readonly notifyAfterExecutingActions?: boolean | cdktf.IResolvable;
  /**
  * Display Name for the notification profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#profile_name NotificationProfile#profile_name}
  */
  readonly profileName: string;
  /**
  * Configuration to send root cause analysis when the monitor is down. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#rca_needed NotificationProfile#rca_needed}
  */
  readonly rcaNeeded?: boolean | cdktf.IResolvable;
  /**
  * Configuration to stop automation from being executed on the dependent monitors. Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#suppress_automation NotificationProfile#suppress_automation}
  */
  readonly suppressAutomation?: boolean | cdktf.IResolvable;
  /**
  * Email template ID for notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#template_id NotificationProfile#template_id}
  */
  readonly templateId?: string;
  /**
  * alert_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#alert_configuration NotificationProfile#alert_configuration}
  */
  readonly alertConfiguration?: NotificationProfileAlertConfiguration[] | cdktf.IResolvable;
  /**
  * escalation_levels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#escalation_levels NotificationProfile#escalation_levels}
  */
  readonly escalationLevels?: NotificationProfileEscalationLevels[] | cdktf.IResolvable;
  /**
  * notification_delay_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#notification_delay_configuration NotificationProfile#notification_delay_configuration}
  */
  readonly notificationDelayConfiguration?: NotificationProfileNotificationDelayConfiguration[] | cdktf.IResolvable;
  /**
  * persistent_alert_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#persistent_alert_configuration NotificationProfile#persistent_alert_configuration}
  */
  readonly persistentAlertConfiguration?: NotificationProfilePersistentAlertConfiguration[] | cdktf.IResolvable;
}
export interface NotificationProfileAlertConfiguration {
  /**
  * Alerting Period - Predefined business hours during which alerts should be sent. Default value is '-1' and it denotes 'All Hours'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#business_hours_id NotificationProfile#business_hours_id}
  */
  readonly businessHoursId?: string;
  /**
  * Medium through which you’d wish to receive the notifications. Default value is 1. '1' denotes 'Email', '2' denotes 'SMS', '3' denotes 'Voice Call' and '6' denotes 'Mobile push notification'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#notification_medium NotificationProfile#notification_medium}
  */
  readonly notificationMedium: number[];
  /**
  * To specify whether the user would receive alerts within or beyond business hours. Default value is '0' and it denotes 'Time within the business_hours_id configured', '1' denotes 'Time outside the business_hours_id configured'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#outside_business_hours NotificationProfile#outside_business_hours}
  */
  readonly outsideBusinessHours?: string;
  /**
  * Status for which alerts should be raised. '-1' denotes 'Any', '0' denotes 'Down', '1' denotes 'Up', '2' denotes 'Trouble' and '3' denotes 'Critical'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#status NotificationProfile#status}
  */
  readonly status?: number;
}

export function notificationProfileAlertConfigurationToTerraform(struct?: NotificationProfileAlertConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    business_hours_id: cdktf.stringToTerraform(struct!.businessHoursId),
    notification_medium: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.notificationMedium),
    outside_business_hours: cdktf.stringToTerraform(struct!.outsideBusinessHours),
    status: cdktf.numberToTerraform(struct!.status),
  }
}


export function notificationProfileAlertConfigurationToHclTerraform(struct?: NotificationProfileAlertConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    business_hours_id: {
      value: cdktf.stringToHclTerraform(struct!.businessHoursId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_medium: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.notificationMedium),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    outside_business_hours: {
      value: cdktf.stringToHclTerraform(struct!.outsideBusinessHours),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationProfileAlertConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationProfileAlertConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._businessHoursId !== undefined) {
      hasAnyValues = true;
      internalValueResult.businessHoursId = this._businessHoursId;
    }
    if (this._notificationMedium !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationMedium = this._notificationMedium;
    }
    if (this._outsideBusinessHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideBusinessHours = this._outsideBusinessHours;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationProfileAlertConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._businessHoursId = undefined;
      this._notificationMedium = undefined;
      this._outsideBusinessHours = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._businessHoursId = value.businessHoursId;
      this._notificationMedium = value.notificationMedium;
      this._outsideBusinessHours = value.outsideBusinessHours;
      this._status = value.status;
    }
  }

  // business_hours_id - computed: false, optional: true, required: false
  private _businessHoursId?: string; 
  public get businessHoursId() {
    return this.getStringAttribute('business_hours_id');
  }
  public set businessHoursId(value: string) {
    this._businessHoursId = value;
  }
  public resetBusinessHoursId() {
    this._businessHoursId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessHoursIdInput() {
    return this._businessHoursId;
  }

  // notification_medium - computed: false, optional: false, required: true
  private _notificationMedium?: number[]; 
  public get notificationMedium() {
    return this.getNumberListAttribute('notification_medium');
  }
  public set notificationMedium(value: number[]) {
    this._notificationMedium = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationMediumInput() {
    return this._notificationMedium;
  }

  // outside_business_hours - computed: false, optional: true, required: false
  private _outsideBusinessHours?: string; 
  public get outsideBusinessHours() {
    return this.getStringAttribute('outside_business_hours');
  }
  public set outsideBusinessHours(value: string) {
    this._outsideBusinessHours = value;
  }
  public resetOutsideBusinessHours() {
    this._outsideBusinessHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideBusinessHoursInput() {
    return this._outsideBusinessHours;
  }

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class NotificationProfileAlertConfigurationList extends cdktf.ComplexList {
  public internalValue? : NotificationProfileAlertConfiguration[] | cdktf.IResolvable

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
  public get(index: number): NotificationProfileAlertConfigurationOutputReference {
    return new NotificationProfileAlertConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationProfileEscalationLevels {
  /**
  * Mandatory, if any User Alert Group is added for escalation Downtime duration for escalation in mins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#escalation_wait_time NotificationProfile#escalation_wait_time}
  */
  readonly escalationWaitTime: number;
  /**
  * Medium through which you’d wish to receive the notifications. Default value is 1. '1' denotes 'Email', '2' denotes 'SMS', '3' denotes 'Voice Call' and '6' denotes 'Mobile push notification'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#notification_medium NotificationProfile#notification_medium}
  */
  readonly notificationMedium: number[];
  /**
  * Third-party services through which you’d wish to receive the notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#third_party_services NotificationProfile#third_party_services}
  */
  readonly thirdPartyServices?: string[];
  /**
  * User group ID for downtime escalation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#user_group_id NotificationProfile#user_group_id}
  */
  readonly userGroupId: string;
}

export function notificationProfileEscalationLevelsToTerraform(struct?: NotificationProfileEscalationLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    escalation_wait_time: cdktf.numberToTerraform(struct!.escalationWaitTime),
    notification_medium: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.notificationMedium),
    third_party_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.thirdPartyServices),
    user_group_id: cdktf.stringToTerraform(struct!.userGroupId),
  }
}


export function notificationProfileEscalationLevelsToHclTerraform(struct?: NotificationProfileEscalationLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    escalation_wait_time: {
      value: cdktf.numberToHclTerraform(struct!.escalationWaitTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notification_medium: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.notificationMedium),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    third_party_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.thirdPartyServices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_group_id: {
      value: cdktf.stringToHclTerraform(struct!.userGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationProfileEscalationLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationProfileEscalationLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._escalationWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.escalationWaitTime = this._escalationWaitTime;
    }
    if (this._notificationMedium !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationMedium = this._notificationMedium;
    }
    if (this._thirdPartyServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdPartyServices = this._thirdPartyServices;
    }
    if (this._userGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroupId = this._userGroupId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationProfileEscalationLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._escalationWaitTime = undefined;
      this._notificationMedium = undefined;
      this._thirdPartyServices = undefined;
      this._userGroupId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._escalationWaitTime = value.escalationWaitTime;
      this._notificationMedium = value.notificationMedium;
      this._thirdPartyServices = value.thirdPartyServices;
      this._userGroupId = value.userGroupId;
    }
  }

  // escalation_wait_time - computed: false, optional: false, required: true
  private _escalationWaitTime?: number; 
  public get escalationWaitTime() {
    return this.getNumberAttribute('escalation_wait_time');
  }
  public set escalationWaitTime(value: number) {
    this._escalationWaitTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationWaitTimeInput() {
    return this._escalationWaitTime;
  }

  // notification_medium - computed: false, optional: false, required: true
  private _notificationMedium?: number[]; 
  public get notificationMedium() {
    return this.getNumberListAttribute('notification_medium');
  }
  public set notificationMedium(value: number[]) {
    this._notificationMedium = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationMediumInput() {
    return this._notificationMedium;
  }

  // third_party_services - computed: false, optional: true, required: false
  private _thirdPartyServices?: string[]; 
  public get thirdPartyServices() {
    return this.getListAttribute('third_party_services');
  }
  public set thirdPartyServices(value: string[]) {
    this._thirdPartyServices = value;
  }
  public resetThirdPartyServices() {
    this._thirdPartyServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyServicesInput() {
    return this._thirdPartyServices;
  }

  // user_group_id - computed: false, optional: false, required: true
  private _userGroupId?: string; 
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }
  public set userGroupId(value: string) {
    this._userGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdInput() {
    return this._userGroupId;
  }
}

export class NotificationProfileEscalationLevelsList extends cdktf.ComplexList {
  public internalValue? : NotificationProfileEscalationLevels[] | cdktf.IResolvable

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
  public get(index: number): NotificationProfileEscalationLevelsOutputReference {
    return new NotificationProfileEscalationLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationProfileNotificationDelayConfiguration {
  /**
  * Alerting Period - Predefined business hours during which alerts should be sent. Default value is '-1' and it denotes 'All Hours'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#business_hours_id NotificationProfile#business_hours_id}
  */
  readonly businessHoursId?: string;
  /**
  * Notify based on the downtime delay constants define here - https://www.site24x7.com/help/api/#notification-profile-constants. Default value is '1' and it denotes 'Notify immediately after failure'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#notification_delay NotificationProfile#notification_delay}
  */
  readonly notificationDelay?: number;
  /**
  * To specify whether the user would receive alerts within or beyond business hours. Default value is '0' and it denotes 'Time within the business_hours_id configured', '1' denotes 'Time outside the business_hours_id configured'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#outside_business_hours NotificationProfile#outside_business_hours}
  */
  readonly outsideBusinessHours?: string;
  /**
  * Status for which alerts should be raised. '0' denotes 'Down', '2' denotes 'Trouble' and '3' denotes 'Critical'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#status NotificationProfile#status}
  */
  readonly status?: number;
}

export function notificationProfileNotificationDelayConfigurationToTerraform(struct?: NotificationProfileNotificationDelayConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    business_hours_id: cdktf.stringToTerraform(struct!.businessHoursId),
    notification_delay: cdktf.numberToTerraform(struct!.notificationDelay),
    outside_business_hours: cdktf.stringToTerraform(struct!.outsideBusinessHours),
    status: cdktf.numberToTerraform(struct!.status),
  }
}


export function notificationProfileNotificationDelayConfigurationToHclTerraform(struct?: NotificationProfileNotificationDelayConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    business_hours_id: {
      value: cdktf.stringToHclTerraform(struct!.businessHoursId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_delay: {
      value: cdktf.numberToHclTerraform(struct!.notificationDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outside_business_hours: {
      value: cdktf.stringToHclTerraform(struct!.outsideBusinessHours),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationProfileNotificationDelayConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationProfileNotificationDelayConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._businessHoursId !== undefined) {
      hasAnyValues = true;
      internalValueResult.businessHoursId = this._businessHoursId;
    }
    if (this._notificationDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationDelay = this._notificationDelay;
    }
    if (this._outsideBusinessHours !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideBusinessHours = this._outsideBusinessHours;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationProfileNotificationDelayConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._businessHoursId = undefined;
      this._notificationDelay = undefined;
      this._outsideBusinessHours = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._businessHoursId = value.businessHoursId;
      this._notificationDelay = value.notificationDelay;
      this._outsideBusinessHours = value.outsideBusinessHours;
      this._status = value.status;
    }
  }

  // business_hours_id - computed: false, optional: true, required: false
  private _businessHoursId?: string; 
  public get businessHoursId() {
    return this.getStringAttribute('business_hours_id');
  }
  public set businessHoursId(value: string) {
    this._businessHoursId = value;
  }
  public resetBusinessHoursId() {
    this._businessHoursId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessHoursIdInput() {
    return this._businessHoursId;
  }

  // notification_delay - computed: false, optional: true, required: false
  private _notificationDelay?: number; 
  public get notificationDelay() {
    return this.getNumberAttribute('notification_delay');
  }
  public set notificationDelay(value: number) {
    this._notificationDelay = value;
  }
  public resetNotificationDelay() {
    this._notificationDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationDelayInput() {
    return this._notificationDelay;
  }

  // outside_business_hours - computed: false, optional: true, required: false
  private _outsideBusinessHours?: string; 
  public get outsideBusinessHours() {
    return this.getStringAttribute('outside_business_hours');
  }
  public set outsideBusinessHours(value: string) {
    this._outsideBusinessHours = value;
  }
  public resetOutsideBusinessHours() {
    this._outsideBusinessHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideBusinessHoursInput() {
    return this._outsideBusinessHours;
  }

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class NotificationProfileNotificationDelayConfigurationList extends cdktf.ComplexList {
  public internalValue? : NotificationProfileNotificationDelayConfiguration[] | cdktf.IResolvable

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
  public get(index: number): NotificationProfileNotificationDelayConfigurationOutputReference {
    return new NotificationProfileNotificationDelayConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NotificationProfilePersistentAlertConfiguration {
  /**
  * Medium through which you’d wish to receive the notifications. Default value is 1. '1' denotes 'Email', '2' denotes 'SMS', '3' denotes 'Voice Call' and '6' denotes 'Mobile push notification'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#notification_medium NotificationProfile#notification_medium}
  */
  readonly notificationMedium: number[];
  /**
  * Denotes the number of times the error has to be ignored before sending a notification. Value ranges from 0-60.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#notify_every NotificationProfile#notify_every}
  */
  readonly notifyEvery: number;
  /**
  * Third-party services through which you’d wish to receive the notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#third_party_services NotificationProfile#third_party_services}
  */
  readonly thirdPartyServices?: string[];
}

export function notificationProfilePersistentAlertConfigurationToTerraform(struct?: NotificationProfilePersistentAlertConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification_medium: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.notificationMedium),
    notify_every: cdktf.numberToTerraform(struct!.notifyEvery),
    third_party_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.thirdPartyServices),
  }
}


export function notificationProfilePersistentAlertConfigurationToHclTerraform(struct?: NotificationProfilePersistentAlertConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notification_medium: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.notificationMedium),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    notify_every: {
      value: cdktf.numberToHclTerraform(struct!.notifyEvery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    third_party_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.thirdPartyServices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NotificationProfilePersistentAlertConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NotificationProfilePersistentAlertConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationMedium !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationMedium = this._notificationMedium;
    }
    if (this._notifyEvery !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyEvery = this._notifyEvery;
    }
    if (this._thirdPartyServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.thirdPartyServices = this._thirdPartyServices;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NotificationProfilePersistentAlertConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notificationMedium = undefined;
      this._notifyEvery = undefined;
      this._thirdPartyServices = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notificationMedium = value.notificationMedium;
      this._notifyEvery = value.notifyEvery;
      this._thirdPartyServices = value.thirdPartyServices;
    }
  }

  // notification_medium - computed: false, optional: false, required: true
  private _notificationMedium?: number[]; 
  public get notificationMedium() {
    return this.getNumberListAttribute('notification_medium');
  }
  public set notificationMedium(value: number[]) {
    this._notificationMedium = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationMediumInput() {
    return this._notificationMedium;
  }

  // notify_every - computed: false, optional: false, required: true
  private _notifyEvery?: number; 
  public get notifyEvery() {
    return this.getNumberAttribute('notify_every');
  }
  public set notifyEvery(value: number) {
    this._notifyEvery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyEveryInput() {
    return this._notifyEvery;
  }

  // third_party_services - computed: false, optional: true, required: false
  private _thirdPartyServices?: string[]; 
  public get thirdPartyServices() {
    return this.getListAttribute('third_party_services');
  }
  public set thirdPartyServices(value: string[]) {
    this._thirdPartyServices = value;
  }
  public resetThirdPartyServices() {
    this._thirdPartyServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdPartyServicesInput() {
    return this._thirdPartyServices;
  }
}

export class NotificationProfilePersistentAlertConfigurationList extends cdktf.ComplexList {
  public internalValue? : NotificationProfilePersistentAlertConfiguration[] | cdktf.IResolvable

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
  public get(index: number): NotificationProfilePersistentAlertConfigurationOutputReference {
    return new NotificationProfilePersistentAlertConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile site24x7_notification_profile}
*/
export class NotificationProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "site24x7_notification_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NotificationProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NotificationProfile to import
  * @param importFromId The id of the existing NotificationProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NotificationProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "site24x7_notification_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/site24x7/site24x7/2.0.3/docs/resources/notification_profile site24x7_notification_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NotificationProfileConfig
  */
  public constructor(scope: Construct, id: string, config: NotificationProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'site24x7_notification_profile',
      terraformGeneratorMetadata: {
        providerName: 'site24x7',
        providerVersion: '2.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._escalationAutomations = config.escalationAutomations;
    this._id = config.id;
    this._notifyAfterExecutingActions = config.notifyAfterExecutingActions;
    this._profileName = config.profileName;
    this._rcaNeeded = config.rcaNeeded;
    this._suppressAutomation = config.suppressAutomation;
    this._templateId = config.templateId;
    this._alertConfiguration.internalValue = config.alertConfiguration;
    this._escalationLevels.internalValue = config.escalationLevels;
    this._notificationDelayConfiguration.internalValue = config.notificationDelayConfiguration;
    this._persistentAlertConfiguration.internalValue = config.persistentAlertConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // escalation_automations - computed: false, optional: true, required: false
  private _escalationAutomations?: string[]; 
  public get escalationAutomations() {
    return cdktf.Fn.tolist(this.getListAttribute('escalation_automations'));
  }
  public set escalationAutomations(value: string[]) {
    this._escalationAutomations = value;
  }
  public resetEscalationAutomations() {
    this._escalationAutomations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationAutomationsInput() {
    return this._escalationAutomations;
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

  // notify_after_executing_actions - computed: false, optional: true, required: false
  private _notifyAfterExecutingActions?: boolean | cdktf.IResolvable; 
  public get notifyAfterExecutingActions() {
    return this.getBooleanAttribute('notify_after_executing_actions');
  }
  public set notifyAfterExecutingActions(value: boolean | cdktf.IResolvable) {
    this._notifyAfterExecutingActions = value;
  }
  public resetNotifyAfterExecutingActions() {
    this._notifyAfterExecutingActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyAfterExecutingActionsInput() {
    return this._notifyAfterExecutingActions;
  }

  // profile_name - computed: false, optional: false, required: true
  private _profileName?: string; 
  public get profileName() {
    return this.getStringAttribute('profile_name');
  }
  public set profileName(value: string) {
    this._profileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileNameInput() {
    return this._profileName;
  }

  // rca_needed - computed: false, optional: true, required: false
  private _rcaNeeded?: boolean | cdktf.IResolvable; 
  public get rcaNeeded() {
    return this.getBooleanAttribute('rca_needed');
  }
  public set rcaNeeded(value: boolean | cdktf.IResolvable) {
    this._rcaNeeded = value;
  }
  public resetRcaNeeded() {
    this._rcaNeeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcaNeededInput() {
    return this._rcaNeeded;
  }

  // suppress_automation - computed: false, optional: true, required: false
  private _suppressAutomation?: boolean | cdktf.IResolvable; 
  public get suppressAutomation() {
    return this.getBooleanAttribute('suppress_automation');
  }
  public set suppressAutomation(value: boolean | cdktf.IResolvable) {
    this._suppressAutomation = value;
  }
  public resetSuppressAutomation() {
    this._suppressAutomation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressAutomationInput() {
    return this._suppressAutomation;
  }

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // alert_configuration - computed: false, optional: true, required: false
  private _alertConfiguration = new NotificationProfileAlertConfigurationList(this, "alert_configuration", true);
  public get alertConfiguration() {
    return this._alertConfiguration;
  }
  public putAlertConfiguration(value: NotificationProfileAlertConfiguration[] | cdktf.IResolvable) {
    this._alertConfiguration.internalValue = value;
  }
  public resetAlertConfiguration() {
    this._alertConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConfigurationInput() {
    return this._alertConfiguration.internalValue;
  }

  // escalation_levels - computed: false, optional: true, required: false
  private _escalationLevels = new NotificationProfileEscalationLevelsList(this, "escalation_levels", true);
  public get escalationLevels() {
    return this._escalationLevels;
  }
  public putEscalationLevels(value: NotificationProfileEscalationLevels[] | cdktf.IResolvable) {
    this._escalationLevels.internalValue = value;
  }
  public resetEscalationLevels() {
    this._escalationLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationLevelsInput() {
    return this._escalationLevels.internalValue;
  }

  // notification_delay_configuration - computed: false, optional: true, required: false
  private _notificationDelayConfiguration = new NotificationProfileNotificationDelayConfigurationList(this, "notification_delay_configuration", true);
  public get notificationDelayConfiguration() {
    return this._notificationDelayConfiguration;
  }
  public putNotificationDelayConfiguration(value: NotificationProfileNotificationDelayConfiguration[] | cdktf.IResolvable) {
    this._notificationDelayConfiguration.internalValue = value;
  }
  public resetNotificationDelayConfiguration() {
    this._notificationDelayConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationDelayConfigurationInput() {
    return this._notificationDelayConfiguration.internalValue;
  }

  // persistent_alert_configuration - computed: false, optional: true, required: false
  private _persistentAlertConfiguration = new NotificationProfilePersistentAlertConfigurationList(this, "persistent_alert_configuration", true);
  public get persistentAlertConfiguration() {
    return this._persistentAlertConfiguration;
  }
  public putPersistentAlertConfiguration(value: NotificationProfilePersistentAlertConfiguration[] | cdktf.IResolvable) {
    this._persistentAlertConfiguration.internalValue = value;
  }
  public resetPersistentAlertConfiguration() {
    this._persistentAlertConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentAlertConfigurationInput() {
    return this._persistentAlertConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      escalation_automations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._escalationAutomations),
      id: cdktf.stringToTerraform(this._id),
      notify_after_executing_actions: cdktf.booleanToTerraform(this._notifyAfterExecutingActions),
      profile_name: cdktf.stringToTerraform(this._profileName),
      rca_needed: cdktf.booleanToTerraform(this._rcaNeeded),
      suppress_automation: cdktf.booleanToTerraform(this._suppressAutomation),
      template_id: cdktf.stringToTerraform(this._templateId),
      alert_configuration: cdktf.listMapper(notificationProfileAlertConfigurationToTerraform, true)(this._alertConfiguration.internalValue),
      escalation_levels: cdktf.listMapper(notificationProfileEscalationLevelsToTerraform, true)(this._escalationLevels.internalValue),
      notification_delay_configuration: cdktf.listMapper(notificationProfileNotificationDelayConfigurationToTerraform, true)(this._notificationDelayConfiguration.internalValue),
      persistent_alert_configuration: cdktf.listMapper(notificationProfilePersistentAlertConfigurationToTerraform, true)(this._persistentAlertConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      escalation_automations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._escalationAutomations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_after_executing_actions: {
        value: cdktf.booleanToHclTerraform(this._notifyAfterExecutingActions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      profile_name: {
        value: cdktf.stringToHclTerraform(this._profileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rca_needed: {
        value: cdktf.booleanToHclTerraform(this._rcaNeeded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      suppress_automation: {
        value: cdktf.booleanToHclTerraform(this._suppressAutomation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      template_id: {
        value: cdktf.stringToHclTerraform(this._templateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_configuration: {
        value: cdktf.listMapperHcl(notificationProfileAlertConfigurationToHclTerraform, true)(this._alertConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NotificationProfileAlertConfigurationList",
      },
      escalation_levels: {
        value: cdktf.listMapperHcl(notificationProfileEscalationLevelsToHclTerraform, true)(this._escalationLevels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NotificationProfileEscalationLevelsList",
      },
      notification_delay_configuration: {
        value: cdktf.listMapperHcl(notificationProfileNotificationDelayConfigurationToHclTerraform, true)(this._notificationDelayConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NotificationProfileNotificationDelayConfigurationList",
      },
      persistent_alert_configuration: {
        value: cdktf.listMapperHcl(notificationProfilePersistentAlertConfigurationToHclTerraform, true)(this._persistentAlertConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NotificationProfilePersistentAlertConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
