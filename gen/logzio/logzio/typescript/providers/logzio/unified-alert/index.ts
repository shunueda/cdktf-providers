// https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UnifiedAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#dashboard_id UnifiedAlert#dashboard_id}
  */
  readonly dashboardId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#description UnifiedAlert#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#enabled UnifiedAlert#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#folder_id UnifiedAlert#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#id UnifiedAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#panel_id UnifiedAlert#panel_id}
  */
  readonly panelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#rca UnifiedAlert#rca}
  */
  readonly rca?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#rca_notification_endpoint_ids UnifiedAlert#rca_notification_endpoint_ids}
  */
  readonly rcaNotificationEndpointIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#runbook UnifiedAlert#runbook}
  */
  readonly runbook?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#tags UnifiedAlert#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#title UnifiedAlert#title}
  */
  readonly title: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#type UnifiedAlert#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#use_alert_notification_endpoints_for_rca UnifiedAlert#use_alert_notification_endpoints_for_rca}
  */
  readonly useAlertNotificationEndpointsForRca?: boolean | cdktf.IResolvable;
  /**
  * log_alert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#log_alert UnifiedAlert#log_alert}
  */
  readonly logAlert?: UnifiedAlertLogAlert;
  /**
  * metric_alert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#metric_alert UnifiedAlert#metric_alert}
  */
  readonly metricAlert?: UnifiedAlertMetricAlert;
}
export interface UnifiedAlertLogAlertCorrelations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#correlation_operators UnifiedAlert#correlation_operators}
  */
  readonly correlationOperators?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#joins UnifiedAlert#joins}
  */
  readonly joins?: { [key: string]: string }[] | cdktf.IResolvable;
}

export function unifiedAlertLogAlertCorrelationsToTerraform(struct?: UnifiedAlertLogAlertCorrelationsOutputReference | UnifiedAlertLogAlertCorrelations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    correlation_operators: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.correlationOperators),
    joins: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.joins),
  }
}


export function unifiedAlertLogAlertCorrelationsToHclTerraform(struct?: UnifiedAlertLogAlertCorrelationsOutputReference | UnifiedAlertLogAlertCorrelations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    correlation_operators: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.correlationOperators),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    joins: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.joins),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedAlertLogAlertCorrelationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnifiedAlertLogAlertCorrelations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._correlationOperators !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlationOperators = this._correlationOperators;
    }
    if (this._joins !== undefined) {
      hasAnyValues = true;
      internalValueResult.joins = this._joins;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedAlertLogAlertCorrelations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._correlationOperators = undefined;
      this._joins = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._correlationOperators = value.correlationOperators;
      this._joins = value.joins;
    }
  }

  // correlation_operators - computed: true, optional: true, required: false
  private _correlationOperators?: string[]; 
  public get correlationOperators() {
    return this.getListAttribute('correlation_operators');
  }
  public set correlationOperators(value: string[]) {
    this._correlationOperators = value;
  }
  public resetCorrelationOperators() {
    this._correlationOperators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationOperatorsInput() {
    return this._correlationOperators;
  }

  // joins - computed: true, optional: true, required: false
  private _joins?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get joins() {
    return this.interpolationForAttribute('joins');
  }
  public set joins(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._joins = value;
  }
  public resetJoins() {
    this._joins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinsInput() {
    return this._joins;
  }
}
export interface UnifiedAlertLogAlertOutputRecipients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#emails UnifiedAlert#emails}
  */
  readonly emails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#notification_endpoint_ids UnifiedAlert#notification_endpoint_ids}
  */
  readonly notificationEndpointIds?: number[];
}

export function unifiedAlertLogAlertOutputRecipientsToTerraform(struct?: UnifiedAlertLogAlertOutputRecipientsOutputReference | UnifiedAlertLogAlertOutputRecipients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    emails: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emails),
    notification_endpoint_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.notificationEndpointIds),
  }
}


export function unifiedAlertLogAlertOutputRecipientsToHclTerraform(struct?: UnifiedAlertLogAlertOutputRecipientsOutputReference | UnifiedAlertLogAlertOutputRecipients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    emails: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emails),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    notification_endpoint_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.notificationEndpointIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedAlertLogAlertOutputRecipientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnifiedAlertLogAlertOutputRecipients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emails !== undefined) {
      hasAnyValues = true;
      internalValueResult.emails = this._emails;
    }
    if (this._notificationEndpointIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationEndpointIds = this._notificationEndpointIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedAlertLogAlertOutputRecipients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._emails = undefined;
      this._notificationEndpointIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._emails = value.emails;
      this._notificationEndpointIds = value.notificationEndpointIds;
    }
  }

  // emails - computed: false, optional: true, required: false
  private _emails?: string[]; 
  public get emails() {
    return this.getListAttribute('emails');
  }
  public set emails(value: string[]) {
    this._emails = value;
  }
  public resetEmails() {
    this._emails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsInput() {
    return this._emails;
  }

  // notification_endpoint_ids - computed: true, optional: true, required: false
  private _notificationEndpointIds?: number[]; 
  public get notificationEndpointIds() {
    return this.getNumberListAttribute('notification_endpoint_ids');
  }
  public set notificationEndpointIds(value: number[]) {
    this._notificationEndpointIds = value;
  }
  public resetNotificationEndpointIds() {
    this._notificationEndpointIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEndpointIdsInput() {
    return this._notificationEndpointIds;
  }
}
export interface UnifiedAlertLogAlertOutput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#suppress_notifications_minutes UnifiedAlert#suppress_notifications_minutes}
  */
  readonly suppressNotificationsMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#type UnifiedAlert#type}
  */
  readonly type: string;
  /**
  * recipients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#recipients UnifiedAlert#recipients}
  */
  readonly recipients: UnifiedAlertLogAlertOutputRecipients;
}

export function unifiedAlertLogAlertOutputToTerraform(struct?: UnifiedAlertLogAlertOutputOutputReference | UnifiedAlertLogAlertOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    suppress_notifications_minutes: cdktf.numberToTerraform(struct!.suppressNotificationsMinutes),
    type: cdktf.stringToTerraform(struct!.type),
    recipients: unifiedAlertLogAlertOutputRecipientsToTerraform(struct!.recipients),
  }
}


export function unifiedAlertLogAlertOutputToHclTerraform(struct?: UnifiedAlertLogAlertOutputOutputReference | UnifiedAlertLogAlertOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    suppress_notifications_minutes: {
      value: cdktf.numberToHclTerraform(struct!.suppressNotificationsMinutes),
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
    recipients: {
      value: unifiedAlertLogAlertOutputRecipientsToHclTerraform(struct!.recipients),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedAlertLogAlertOutputRecipientsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedAlertLogAlertOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnifiedAlertLogAlertOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._suppressNotificationsMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.suppressNotificationsMinutes = this._suppressNotificationsMinutes;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._recipients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedAlertLogAlertOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._suppressNotificationsMinutes = undefined;
      this._type = undefined;
      this._recipients.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._suppressNotificationsMinutes = value.suppressNotificationsMinutes;
      this._type = value.type;
      this._recipients.internalValue = value.recipients;
    }
  }

  // suppress_notifications_minutes - computed: true, optional: true, required: false
  private _suppressNotificationsMinutes?: number; 
  public get suppressNotificationsMinutes() {
    return this.getNumberAttribute('suppress_notifications_minutes');
  }
  public set suppressNotificationsMinutes(value: number) {
    this._suppressNotificationsMinutes = value;
  }
  public resetSuppressNotificationsMinutes() {
    this._suppressNotificationsMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressNotificationsMinutesInput() {
    return this._suppressNotificationsMinutes;
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

  // recipients - computed: false, optional: false, required: true
  private _recipients = new UnifiedAlertLogAlertOutputRecipientsOutputReference(this, "recipients");
  public get recipients() {
    return this._recipients;
  }
  public putRecipients(value: UnifiedAlertLogAlertOutputRecipients) {
    this._recipients.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients.internalValue;
  }
}
export interface UnifiedAlertLogAlertSchedule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#cron_expression UnifiedAlert#cron_expression}
  */
  readonly cronExpression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#timezone UnifiedAlert#timezone}
  */
  readonly timezone?: string;
}

export function unifiedAlertLogAlertScheduleToTerraform(struct?: UnifiedAlertLogAlertScheduleOutputReference | UnifiedAlertLogAlertSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function unifiedAlertLogAlertScheduleToHclTerraform(struct?: UnifiedAlertLogAlertScheduleOutputReference | UnifiedAlertLogAlertSchedule): any {
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

export class UnifiedAlertLogAlertScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnifiedAlertLogAlertSchedule | undefined {
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

  public set internalValue(value: UnifiedAlertLogAlertSchedule | undefined) {
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

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }
}
export interface UnifiedAlertLogAlertSubComponentsOutputColumns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#field_name UnifiedAlert#field_name}
  */
  readonly fieldName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#regex UnifiedAlert#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#sort UnifiedAlert#sort}
  */
  readonly sort?: string;
}

export function unifiedAlertLogAlertSubComponentsOutputColumnsToTerraform(struct?: UnifiedAlertLogAlertSubComponentsOutputColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    regex: cdktf.stringToTerraform(struct!.regex),
    sort: cdktf.stringToTerraform(struct!.sort),
  }
}


export function unifiedAlertLogAlertSubComponentsOutputColumnsToHclTerraform(struct?: UnifiedAlertLogAlertSubComponentsOutputColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_name: {
      value: cdktf.stringToHclTerraform(struct!.fieldName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sort: {
      value: cdktf.stringToHclTerraform(struct!.sort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedAlertLogAlertSubComponentsOutputColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnifiedAlertLogAlertSubComponentsOutputColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldName = this._fieldName;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._sort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sort = this._sort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedAlertLogAlertSubComponentsOutputColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldName = undefined;
      this._regex = undefined;
      this._sort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldName = value.fieldName;
      this._regex = value.regex;
      this._sort = value.sort;
    }
  }

  // field_name - computed: false, optional: false, required: true
  private _fieldName?: string; 
  public get fieldName() {
    return this.getStringAttribute('field_name');
  }
  public set fieldName(value: string) {
    this._fieldName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldNameInput() {
    return this._fieldName;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // sort - computed: false, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }
}

export class UnifiedAlertLogAlertSubComponentsOutputColumnsList extends cdktf.ComplexList {
  public internalValue? : UnifiedAlertLogAlertSubComponentsOutputColumns[] | cdktf.IResolvable

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
  public get(index: number): UnifiedAlertLogAlertSubComponentsOutputColumnsOutputReference {
    return new UnifiedAlertLogAlertSubComponentsOutputColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnifiedAlertLogAlertSubComponentsOutput {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#should_use_all_fields UnifiedAlert#should_use_all_fields}
  */
  readonly shouldUseAllFields?: boolean | cdktf.IResolvable;
  /**
  * columns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#columns UnifiedAlert#columns}
  */
  readonly columns?: UnifiedAlertLogAlertSubComponentsOutputColumns[] | cdktf.IResolvable;
}

export function unifiedAlertLogAlertSubComponentsOutputToTerraform(struct?: UnifiedAlertLogAlertSubComponentsOutputOutputReference | UnifiedAlertLogAlertSubComponentsOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    should_use_all_fields: cdktf.booleanToTerraform(struct!.shouldUseAllFields),
    columns: cdktf.listMapper(unifiedAlertLogAlertSubComponentsOutputColumnsToTerraform, true)(struct!.columns),
  }
}


export function unifiedAlertLogAlertSubComponentsOutputToHclTerraform(struct?: UnifiedAlertLogAlertSubComponentsOutputOutputReference | UnifiedAlertLogAlertSubComponentsOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    should_use_all_fields: {
      value: cdktf.booleanToHclTerraform(struct!.shouldUseAllFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    columns: {
      value: cdktf.listMapperHcl(unifiedAlertLogAlertSubComponentsOutputColumnsToHclTerraform, true)(struct!.columns),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedAlertLogAlertSubComponentsOutputColumnsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedAlertLogAlertSubComponentsOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnifiedAlertLogAlertSubComponentsOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shouldUseAllFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldUseAllFields = this._shouldUseAllFields;
    }
    if (this._columns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedAlertLogAlertSubComponentsOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._shouldUseAllFields = undefined;
      this._columns.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._shouldUseAllFields = value.shouldUseAllFields;
      this._columns.internalValue = value.columns;
    }
  }

  // should_use_all_fields - computed: false, optional: true, required: false
  private _shouldUseAllFields?: boolean | cdktf.IResolvable; 
  public get shouldUseAllFields() {
    return this.getBooleanAttribute('should_use_all_fields');
  }
  public set shouldUseAllFields(value: boolean | cdktf.IResolvable) {
    this._shouldUseAllFields = value;
  }
  public resetShouldUseAllFields() {
    this._shouldUseAllFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldUseAllFieldsInput() {
    return this._shouldUseAllFields;
  }

  // columns - computed: false, optional: true, required: false
  private _columns = new UnifiedAlertLogAlertSubComponentsOutputColumnsList(this, "columns", false);
  public get columns() {
    return this._columns;
  }
  public putColumns(value: UnifiedAlertLogAlertSubComponentsOutputColumns[] | cdktf.IResolvable) {
    this._columns.internalValue = value;
  }
  public resetColumns() {
    this._columns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns.internalValue;
  }
}
export interface UnifiedAlertLogAlertSubComponentsQueryDefinitionAggregation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#aggregation_type UnifiedAlert#aggregation_type}
  */
  readonly aggregationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#field_to_aggregate_on UnifiedAlert#field_to_aggregate_on}
  */
  readonly fieldToAggregateOn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#value_to_aggregate_on UnifiedAlert#value_to_aggregate_on}
  */
  readonly valueToAggregateOn?: string;
}

export function unifiedAlertLogAlertSubComponentsQueryDefinitionAggregationToTerraform(struct?: UnifiedAlertLogAlertSubComponentsQueryDefinitionAggregationOutputReference | UnifiedAlertLogAlertSubComponentsQueryDefinitionAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation_type: cdktf.stringToTerraform(struct!.aggregationType),
    field_to_aggregate_on: cdktf.stringToTerraform(struct!.fieldToAggregateOn),
    value_to_aggregate_on: cdktf.stringToTerraform(struct!.valueToAggregateOn),
  }
}


export function unifiedAlertLogAlertSubComponentsQueryDefinitionAggregationToHclTerraform(struct?: UnifiedAlertLogAlertSubComponentsQueryDefinitionAggregationOutputReference | UnifiedAlertLogAlertSubComponentsQueryDefinitionAggregation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregation_type: {
      value: cdktf.stringToHclTerraform(struct!.aggregationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_to_aggregate_on: {
      value: cdktf.stringToHclTerraform(struct!.fieldToAggregateOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_to_aggregate_on: {
      value: cdktf.stringToHclTerraform(struct!.valueToAggregateOn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedAlertLogAlertSubComponentsQueryDefinitionAggregationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnifiedAlertLogAlertSubComponentsQueryDefinitionAggregation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregationType = this._aggregationType;
    }
    if (this._fieldToAggregateOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldToAggregateOn = this._fieldToAggregateOn;
    }
    if (this._valueToAggregateOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueToAggregateOn = this._valueToAggregateOn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedAlertLogAlertSubComponentsQueryDefinitionAggregation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aggregationType = undefined;
      this._fieldToAggregateOn = undefined;
      this._valueToAggregateOn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aggregationType = value.aggregationType;
      this._fieldToAggregateOn = value.fieldToAggregateOn;
      this._valueToAggregateOn = value.valueToAggregateOn;
    }
  }

  // aggregation_type - computed: false, optional: false, required: true
  private _aggregationType?: string; 
  public get aggregationType() {
    return this.getStringAttribute('aggregation_type');
  }
  public set aggregationType(value: string) {
    this._aggregationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationTypeInput() {
    return this._aggregationType;
  }

  // field_to_aggregate_on - computed: false, optional: true, required: false
  private _fieldToAggregateOn?: string; 
  public get fieldToAggregateOn() {
    return this.getStringAttribute('field_to_aggregate_on');
  }
  public set fieldToAggregateOn(value: string) {
    this._fieldToAggregateOn = value;
  }
  public resetFieldToAggregateOn() {
    this._fieldToAggregateOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldToAggregateOnInput() {
    return this._fieldToAggregateOn;
  }

  // value_to_aggregate_on - computed: false, optional: true, required: false
  private _valueToAggregateOn?: string; 
  public get valueToAggregateOn() {
    return this.getStringAttribute('value_to_aggregate_on');
  }
  public set valueToAggregateOn(value: string) {
    this._valueToAggregateOn = value;
  }
  public resetValueToAggregateOn() {
    this._valueToAggregateOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueToAggregateOnInput() {
    return this._valueToAggregateOn;
  }
}
export interface UnifiedAlertLogAlertSubComponentsQueryDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#account_ids_to_query_on UnifiedAlert#account_ids_to_query_on}
  */
  readonly accountIdsToQueryOn?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#filters UnifiedAlert#filters}
  */
  readonly filters?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#group_by UnifiedAlert#group_by}
  */
  readonly groupBy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#query UnifiedAlert#query}
  */
  readonly query: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#should_query_on_all_accounts UnifiedAlert#should_query_on_all_accounts}
  */
  readonly shouldQueryOnAllAccounts?: boolean | cdktf.IResolvable;
  /**
  * aggregation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#aggregation UnifiedAlert#aggregation}
  */
  readonly aggregation?: UnifiedAlertLogAlertSubComponentsQueryDefinitionAggregation;
}

export function unifiedAlertLogAlertSubComponentsQueryDefinitionToTerraform(struct?: UnifiedAlertLogAlertSubComponentsQueryDefinitionOutputReference | UnifiedAlertLogAlertSubComponentsQueryDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_ids_to_query_on: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.accountIdsToQueryOn),
    filters: cdktf.stringToTerraform(struct!.filters),
    group_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupBy),
    query: cdktf.stringToTerraform(struct!.query),
    should_query_on_all_accounts: cdktf.booleanToTerraform(struct!.shouldQueryOnAllAccounts),
    aggregation: unifiedAlertLogAlertSubComponentsQueryDefinitionAggregationToTerraform(struct!.aggregation),
  }
}


export function unifiedAlertLogAlertSubComponentsQueryDefinitionToHclTerraform(struct?: UnifiedAlertLogAlertSubComponentsQueryDefinitionOutputReference | UnifiedAlertLogAlertSubComponentsQueryDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_ids_to_query_on: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.accountIdsToQueryOn),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    filters: {
      value: cdktf.stringToHclTerraform(struct!.filters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_query_on_all_accounts: {
      value: cdktf.booleanToHclTerraform(struct!.shouldQueryOnAllAccounts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aggregation: {
      value: unifiedAlertLogAlertSubComponentsQueryDefinitionAggregationToHclTerraform(struct!.aggregation),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedAlertLogAlertSubComponentsQueryDefinitionAggregationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedAlertLogAlertSubComponentsQueryDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnifiedAlertLogAlertSubComponentsQueryDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountIdsToQueryOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIdsToQueryOn = this._accountIdsToQueryOn;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    if (this._groupBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupBy = this._groupBy;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._shouldQueryOnAllAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldQueryOnAllAccounts = this._shouldQueryOnAllAccounts;
    }
    if (this._aggregation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregation = this._aggregation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedAlertLogAlertSubComponentsQueryDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountIdsToQueryOn = undefined;
      this._filters = undefined;
      this._groupBy = undefined;
      this._query = undefined;
      this._shouldQueryOnAllAccounts = undefined;
      this._aggregation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountIdsToQueryOn = value.accountIdsToQueryOn;
      this._filters = value.filters;
      this._groupBy = value.groupBy;
      this._query = value.query;
      this._shouldQueryOnAllAccounts = value.shouldQueryOnAllAccounts;
      this._aggregation.internalValue = value.aggregation;
    }
  }

  // account_ids_to_query_on - computed: true, optional: true, required: false
  private _accountIdsToQueryOn?: number[]; 
  public get accountIdsToQueryOn() {
    return this.getNumberListAttribute('account_ids_to_query_on');
  }
  public set accountIdsToQueryOn(value: number[]) {
    this._accountIdsToQueryOn = value;
  }
  public resetAccountIdsToQueryOn() {
    this._accountIdsToQueryOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsToQueryOnInput() {
    return this._accountIdsToQueryOn;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: string; 
  public get filters() {
    return this.getStringAttribute('filters');
  }
  public set filters(value: string) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // group_by - computed: true, optional: true, required: false
  private _groupBy?: string[]; 
  public get groupBy() {
    return this.getListAttribute('group_by');
  }
  public set groupBy(value: string[]) {
    this._groupBy = value;
  }
  public resetGroupBy() {
    this._groupBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByInput() {
    return this._groupBy;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // should_query_on_all_accounts - computed: false, optional: true, required: false
  private _shouldQueryOnAllAccounts?: boolean | cdktf.IResolvable; 
  public get shouldQueryOnAllAccounts() {
    return this.getBooleanAttribute('should_query_on_all_accounts');
  }
  public set shouldQueryOnAllAccounts(value: boolean | cdktf.IResolvable) {
    this._shouldQueryOnAllAccounts = value;
  }
  public resetShouldQueryOnAllAccounts() {
    this._shouldQueryOnAllAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldQueryOnAllAccountsInput() {
    return this._shouldQueryOnAllAccounts;
  }

  // aggregation - computed: false, optional: true, required: false
  private _aggregation = new UnifiedAlertLogAlertSubComponentsQueryDefinitionAggregationOutputReference(this, "aggregation");
  public get aggregation() {
    return this._aggregation;
  }
  public putAggregation(value: UnifiedAlertLogAlertSubComponentsQueryDefinitionAggregation) {
    this._aggregation.internalValue = value;
  }
  public resetAggregation() {
    this._aggregation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationInput() {
    return this._aggregation.internalValue;
  }
}
export interface UnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#severity UnifiedAlert#severity}
  */
  readonly severity: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#threshold UnifiedAlert#threshold}
  */
  readonly threshold: number;
}

export function unifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiersToTerraform(struct?: UnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    severity: cdktf.stringToTerraform(struct!.severity),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function unifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiersToHclTerraform(struct?: UnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._severity = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._severity = value.severity;
      this._threshold = value.threshold;
    }
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class UnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiersList extends cdktf.ComplexList {
  public internalValue? : UnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiers[] | cdktf.IResolvable

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
  public get(index: number): UnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiersOutputReference {
    return new UnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnifiedAlertLogAlertSubComponentsTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#operator UnifiedAlert#operator}
  */
  readonly operator: string;
  /**
  * severity_threshold_tiers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#severity_threshold_tiers UnifiedAlert#severity_threshold_tiers}
  */
  readonly severityThresholdTiers: UnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiers[] | cdktf.IResolvable;
}

export function unifiedAlertLogAlertSubComponentsTriggerToTerraform(struct?: UnifiedAlertLogAlertSubComponentsTriggerOutputReference | UnifiedAlertLogAlertSubComponentsTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    severity_threshold_tiers: cdktf.listMapper(unifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiersToTerraform, true)(struct!.severityThresholdTiers),
  }
}


export function unifiedAlertLogAlertSubComponentsTriggerToHclTerraform(struct?: UnifiedAlertLogAlertSubComponentsTriggerOutputReference | UnifiedAlertLogAlertSubComponentsTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity_threshold_tiers: {
      value: cdktf.listMapperHcl(unifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiersToHclTerraform, true)(struct!.severityThresholdTiers),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedAlertLogAlertSubComponentsTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnifiedAlertLogAlertSubComponentsTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._severityThresholdTiers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityThresholdTiers = this._severityThresholdTiers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedAlertLogAlertSubComponentsTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operator = undefined;
      this._severityThresholdTiers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operator = value.operator;
      this._severityThresholdTiers.internalValue = value.severityThresholdTiers;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // severity_threshold_tiers - computed: false, optional: false, required: true
  private _severityThresholdTiers = new UnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiersList(this, "severity_threshold_tiers", false);
  public get severityThresholdTiers() {
    return this._severityThresholdTiers;
  }
  public putSeverityThresholdTiers(value: UnifiedAlertLogAlertSubComponentsTriggerSeverityThresholdTiers[] | cdktf.IResolvable) {
    this._severityThresholdTiers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityThresholdTiersInput() {
    return this._severityThresholdTiers.internalValue;
  }
}
export interface UnifiedAlertLogAlertSubComponents {
  /**
  * output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#output UnifiedAlert#output}
  */
  readonly output?: UnifiedAlertLogAlertSubComponentsOutput;
  /**
  * query_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#query_definition UnifiedAlert#query_definition}
  */
  readonly queryDefinition: UnifiedAlertLogAlertSubComponentsQueryDefinition;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#trigger UnifiedAlert#trigger}
  */
  readonly trigger: UnifiedAlertLogAlertSubComponentsTrigger;
}

export function unifiedAlertLogAlertSubComponentsToTerraform(struct?: UnifiedAlertLogAlertSubComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output: unifiedAlertLogAlertSubComponentsOutputToTerraform(struct!.output),
    query_definition: unifiedAlertLogAlertSubComponentsQueryDefinitionToTerraform(struct!.queryDefinition),
    trigger: unifiedAlertLogAlertSubComponentsTriggerToTerraform(struct!.trigger),
  }
}


export function unifiedAlertLogAlertSubComponentsToHclTerraform(struct?: UnifiedAlertLogAlertSubComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    output: {
      value: unifiedAlertLogAlertSubComponentsOutputToHclTerraform(struct!.output),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedAlertLogAlertSubComponentsOutputList",
    },
    query_definition: {
      value: unifiedAlertLogAlertSubComponentsQueryDefinitionToHclTerraform(struct!.queryDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedAlertLogAlertSubComponentsQueryDefinitionList",
    },
    trigger: {
      value: unifiedAlertLogAlertSubComponentsTriggerToHclTerraform(struct!.trigger),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedAlertLogAlertSubComponentsTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedAlertLogAlertSubComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnifiedAlertLogAlertSubComponents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._output?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output?.internalValue;
    }
    if (this._queryDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryDefinition = this._queryDefinition?.internalValue;
    }
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedAlertLogAlertSubComponents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._output.internalValue = undefined;
      this._queryDefinition.internalValue = undefined;
      this._trigger.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._output.internalValue = value.output;
      this._queryDefinition.internalValue = value.queryDefinition;
      this._trigger.internalValue = value.trigger;
    }
  }

  // output - computed: false, optional: true, required: false
  private _output = new UnifiedAlertLogAlertSubComponentsOutputOutputReference(this, "output");
  public get output() {
    return this._output;
  }
  public putOutput(value: UnifiedAlertLogAlertSubComponentsOutput) {
    this._output.internalValue = value;
  }
  public resetOutput() {
    this._output.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
  }

  // query_definition - computed: false, optional: false, required: true
  private _queryDefinition = new UnifiedAlertLogAlertSubComponentsQueryDefinitionOutputReference(this, "query_definition");
  public get queryDefinition() {
    return this._queryDefinition;
  }
  public putQueryDefinition(value: UnifiedAlertLogAlertSubComponentsQueryDefinition) {
    this._queryDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryDefinitionInput() {
    return this._queryDefinition.internalValue;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger = new UnifiedAlertLogAlertSubComponentsTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: UnifiedAlertLogAlertSubComponentsTrigger) {
    this._trigger.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}

export class UnifiedAlertLogAlertSubComponentsList extends cdktf.ComplexList {
  public internalValue? : UnifiedAlertLogAlertSubComponents[] | cdktf.IResolvable

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
  public get(index: number): UnifiedAlertLogAlertSubComponentsOutputReference {
    return new UnifiedAlertLogAlertSubComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnifiedAlertLogAlert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#search_timeframe_minutes UnifiedAlert#search_timeframe_minutes}
  */
  readonly searchTimeframeMinutes: number;
  /**
  * correlations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#correlations UnifiedAlert#correlations}
  */
  readonly correlations?: UnifiedAlertLogAlertCorrelations;
  /**
  * output block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#output UnifiedAlert#output}
  */
  readonly output: UnifiedAlertLogAlertOutput;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#schedule UnifiedAlert#schedule}
  */
  readonly schedule?: UnifiedAlertLogAlertSchedule;
  /**
  * sub_components block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#sub_components UnifiedAlert#sub_components}
  */
  readonly subComponents: UnifiedAlertLogAlertSubComponents[] | cdktf.IResolvable;
}

export function unifiedAlertLogAlertToTerraform(struct?: UnifiedAlertLogAlertOutputReference | UnifiedAlertLogAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    search_timeframe_minutes: cdktf.numberToTerraform(struct!.searchTimeframeMinutes),
    correlations: unifiedAlertLogAlertCorrelationsToTerraform(struct!.correlations),
    output: unifiedAlertLogAlertOutputToTerraform(struct!.output),
    schedule: unifiedAlertLogAlertScheduleToTerraform(struct!.schedule),
    sub_components: cdktf.listMapper(unifiedAlertLogAlertSubComponentsToTerraform, true)(struct!.subComponents),
  }
}


export function unifiedAlertLogAlertToHclTerraform(struct?: UnifiedAlertLogAlertOutputReference | UnifiedAlertLogAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    search_timeframe_minutes: {
      value: cdktf.numberToHclTerraform(struct!.searchTimeframeMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    correlations: {
      value: unifiedAlertLogAlertCorrelationsToHclTerraform(struct!.correlations),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedAlertLogAlertCorrelationsList",
    },
    output: {
      value: unifiedAlertLogAlertOutputToHclTerraform(struct!.output),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedAlertLogAlertOutputList",
    },
    schedule: {
      value: unifiedAlertLogAlertScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedAlertLogAlertScheduleList",
    },
    sub_components: {
      value: cdktf.listMapperHcl(unifiedAlertLogAlertSubComponentsToHclTerraform, true)(struct!.subComponents),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedAlertLogAlertSubComponentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedAlertLogAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnifiedAlertLogAlert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._searchTimeframeMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchTimeframeMinutes = this._searchTimeframeMinutes;
    }
    if (this._correlations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.correlations = this._correlations?.internalValue;
    }
    if (this._output?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.output = this._output?.internalValue;
    }
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    if (this._subComponents?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subComponents = this._subComponents?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedAlertLogAlert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._searchTimeframeMinutes = undefined;
      this._correlations.internalValue = undefined;
      this._output.internalValue = undefined;
      this._schedule.internalValue = undefined;
      this._subComponents.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._searchTimeframeMinutes = value.searchTimeframeMinutes;
      this._correlations.internalValue = value.correlations;
      this._output.internalValue = value.output;
      this._schedule.internalValue = value.schedule;
      this._subComponents.internalValue = value.subComponents;
    }
  }

  // search_timeframe_minutes - computed: false, optional: false, required: true
  private _searchTimeframeMinutes?: number; 
  public get searchTimeframeMinutes() {
    return this.getNumberAttribute('search_timeframe_minutes');
  }
  public set searchTimeframeMinutes(value: number) {
    this._searchTimeframeMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTimeframeMinutesInput() {
    return this._searchTimeframeMinutes;
  }

  // correlations - computed: false, optional: true, required: false
  private _correlations = new UnifiedAlertLogAlertCorrelationsOutputReference(this, "correlations");
  public get correlations() {
    return this._correlations;
  }
  public putCorrelations(value: UnifiedAlertLogAlertCorrelations) {
    this._correlations.internalValue = value;
  }
  public resetCorrelations() {
    this._correlations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get correlationsInput() {
    return this._correlations.internalValue;
  }

  // output - computed: false, optional: false, required: true
  private _output = new UnifiedAlertLogAlertOutputOutputReference(this, "output");
  public get output() {
    return this._output;
  }
  public putOutput(value: UnifiedAlertLogAlertOutput) {
    this._output.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new UnifiedAlertLogAlertScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: UnifiedAlertLogAlertSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // sub_components - computed: false, optional: false, required: true
  private _subComponents = new UnifiedAlertLogAlertSubComponentsList(this, "sub_components", false);
  public get subComponents() {
    return this._subComponents;
  }
  public putSubComponents(value: UnifiedAlertLogAlertSubComponents[] | cdktf.IResolvable) {
    this._subComponents.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subComponentsInput() {
    return this._subComponents.internalValue;
  }
}
export interface UnifiedAlertMetricAlertQueriesQueryDefinition {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#datasource_uid UnifiedAlert#datasource_uid}
  */
  readonly datasourceUid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#promql_query UnifiedAlert#promql_query}
  */
  readonly promqlQuery: string;
}

export function unifiedAlertMetricAlertQueriesQueryDefinitionToTerraform(struct?: UnifiedAlertMetricAlertQueriesQueryDefinitionOutputReference | UnifiedAlertMetricAlertQueriesQueryDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datasource_uid: cdktf.stringToTerraform(struct!.datasourceUid),
    promql_query: cdktf.stringToTerraform(struct!.promqlQuery),
  }
}


export function unifiedAlertMetricAlertQueriesQueryDefinitionToHclTerraform(struct?: UnifiedAlertMetricAlertQueriesQueryDefinitionOutputReference | UnifiedAlertMetricAlertQueriesQueryDefinition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datasource_uid: {
      value: cdktf.stringToHclTerraform(struct!.datasourceUid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    promql_query: {
      value: cdktf.stringToHclTerraform(struct!.promqlQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedAlertMetricAlertQueriesQueryDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnifiedAlertMetricAlertQueriesQueryDefinition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasourceUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceUid = this._datasourceUid;
    }
    if (this._promqlQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.promqlQuery = this._promqlQuery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedAlertMetricAlertQueriesQueryDefinition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasourceUid = undefined;
      this._promqlQuery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasourceUid = value.datasourceUid;
      this._promqlQuery = value.promqlQuery;
    }
  }

  // datasource_uid - computed: false, optional: false, required: true
  private _datasourceUid?: string; 
  public get datasourceUid() {
    return this.getStringAttribute('datasource_uid');
  }
  public set datasourceUid(value: string) {
    this._datasourceUid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceUidInput() {
    return this._datasourceUid;
  }

  // promql_query - computed: false, optional: false, required: true
  private _promqlQuery?: string; 
  public get promqlQuery() {
    return this.getStringAttribute('promql_query');
  }
  public set promqlQuery(value: string) {
    this._promqlQuery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promqlQueryInput() {
    return this._promqlQuery;
  }
}
export interface UnifiedAlertMetricAlertQueries {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#ref_id UnifiedAlert#ref_id}
  */
  readonly refId: string;
  /**
  * query_definition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#query_definition UnifiedAlert#query_definition}
  */
  readonly queryDefinition: UnifiedAlertMetricAlertQueriesQueryDefinition;
}

export function unifiedAlertMetricAlertQueriesToTerraform(struct?: UnifiedAlertMetricAlertQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref_id: cdktf.stringToTerraform(struct!.refId),
    query_definition: unifiedAlertMetricAlertQueriesQueryDefinitionToTerraform(struct!.queryDefinition),
  }
}


export function unifiedAlertMetricAlertQueriesToHclTerraform(struct?: UnifiedAlertMetricAlertQueries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref_id: {
      value: cdktf.stringToHclTerraform(struct!.refId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_definition: {
      value: unifiedAlertMetricAlertQueriesQueryDefinitionToHclTerraform(struct!.queryDefinition),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedAlertMetricAlertQueriesQueryDefinitionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedAlertMetricAlertQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UnifiedAlertMetricAlertQueries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._refId !== undefined) {
      hasAnyValues = true;
      internalValueResult.refId = this._refId;
    }
    if (this._queryDefinition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryDefinition = this._queryDefinition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedAlertMetricAlertQueries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._refId = undefined;
      this._queryDefinition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._refId = value.refId;
      this._queryDefinition.internalValue = value.queryDefinition;
    }
  }

  // ref_id - computed: false, optional: false, required: true
  private _refId?: string; 
  public get refId() {
    return this.getStringAttribute('ref_id');
  }
  public set refId(value: string) {
    this._refId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refIdInput() {
    return this._refId;
  }

  // query_definition - computed: false, optional: false, required: true
  private _queryDefinition = new UnifiedAlertMetricAlertQueriesQueryDefinitionOutputReference(this, "query_definition");
  public get queryDefinition() {
    return this._queryDefinition;
  }
  public putQueryDefinition(value: UnifiedAlertMetricAlertQueriesQueryDefinition) {
    this._queryDefinition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryDefinitionInput() {
    return this._queryDefinition.internalValue;
  }
}

export class UnifiedAlertMetricAlertQueriesList extends cdktf.ComplexList {
  public internalValue? : UnifiedAlertMetricAlertQueries[] | cdktf.IResolvable

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
  public get(index: number): UnifiedAlertMetricAlertQueriesOutputReference {
    return new UnifiedAlertMetricAlertQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UnifiedAlertMetricAlertRecipients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#emails UnifiedAlert#emails}
  */
  readonly emails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#notification_endpoint_ids UnifiedAlert#notification_endpoint_ids}
  */
  readonly notificationEndpointIds?: number[];
}

export function unifiedAlertMetricAlertRecipientsToTerraform(struct?: UnifiedAlertMetricAlertRecipientsOutputReference | UnifiedAlertMetricAlertRecipients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    emails: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emails),
    notification_endpoint_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.notificationEndpointIds),
  }
}


export function unifiedAlertMetricAlertRecipientsToHclTerraform(struct?: UnifiedAlertMetricAlertRecipientsOutputReference | UnifiedAlertMetricAlertRecipients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    emails: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emails),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    notification_endpoint_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.notificationEndpointIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedAlertMetricAlertRecipientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnifiedAlertMetricAlertRecipients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emails !== undefined) {
      hasAnyValues = true;
      internalValueResult.emails = this._emails;
    }
    if (this._notificationEndpointIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationEndpointIds = this._notificationEndpointIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedAlertMetricAlertRecipients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._emails = undefined;
      this._notificationEndpointIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._emails = value.emails;
      this._notificationEndpointIds = value.notificationEndpointIds;
    }
  }

  // emails - computed: false, optional: true, required: false
  private _emails?: string[]; 
  public get emails() {
    return this.getListAttribute('emails');
  }
  public set emails(value: string[]) {
    this._emails = value;
  }
  public resetEmails() {
    this._emails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailsInput() {
    return this._emails;
  }

  // notification_endpoint_ids - computed: true, optional: true, required: false
  private _notificationEndpointIds?: number[]; 
  public get notificationEndpointIds() {
    return this.getNumberListAttribute('notification_endpoint_ids');
  }
  public set notificationEndpointIds(value: number[]) {
    this._notificationEndpointIds = value;
  }
  public resetNotificationEndpointIds() {
    this._notificationEndpointIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationEndpointIdsInput() {
    return this._notificationEndpointIds;
  }
}
export interface UnifiedAlertMetricAlertTrigger {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#math_expression UnifiedAlert#math_expression}
  */
  readonly mathExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#max_threshold UnifiedAlert#max_threshold}
  */
  readonly maxThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#metric_operator UnifiedAlert#metric_operator}
  */
  readonly metricOperator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#min_threshold UnifiedAlert#min_threshold}
  */
  readonly minThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#search_timeframe_minutes UnifiedAlert#search_timeframe_minutes}
  */
  readonly searchTimeframeMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#trigger_type UnifiedAlert#trigger_type}
  */
  readonly triggerType: string;
}

export function unifiedAlertMetricAlertTriggerToTerraform(struct?: UnifiedAlertMetricAlertTriggerOutputReference | UnifiedAlertMetricAlertTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    math_expression: cdktf.stringToTerraform(struct!.mathExpression),
    max_threshold: cdktf.numberToTerraform(struct!.maxThreshold),
    metric_operator: cdktf.stringToTerraform(struct!.metricOperator),
    min_threshold: cdktf.numberToTerraform(struct!.minThreshold),
    search_timeframe_minutes: cdktf.numberToTerraform(struct!.searchTimeframeMinutes),
    trigger_type: cdktf.stringToTerraform(struct!.triggerType),
  }
}


export function unifiedAlertMetricAlertTriggerToHclTerraform(struct?: UnifiedAlertMetricAlertTriggerOutputReference | UnifiedAlertMetricAlertTrigger): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    math_expression: {
      value: cdktf.stringToHclTerraform(struct!.mathExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_threshold: {
      value: cdktf.numberToHclTerraform(struct!.maxThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_operator: {
      value: cdktf.stringToHclTerraform(struct!.metricOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_threshold: {
      value: cdktf.numberToHclTerraform(struct!.minThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    search_timeframe_minutes: {
      value: cdktf.numberToHclTerraform(struct!.searchTimeframeMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trigger_type: {
      value: cdktf.stringToHclTerraform(struct!.triggerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedAlertMetricAlertTriggerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnifiedAlertMetricAlertTrigger | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mathExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.mathExpression = this._mathExpression;
    }
    if (this._maxThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxThreshold = this._maxThreshold;
    }
    if (this._metricOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricOperator = this._metricOperator;
    }
    if (this._minThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.minThreshold = this._minThreshold;
    }
    if (this._searchTimeframeMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchTimeframeMinutes = this._searchTimeframeMinutes;
    }
    if (this._triggerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerType = this._triggerType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedAlertMetricAlertTrigger | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mathExpression = undefined;
      this._maxThreshold = undefined;
      this._metricOperator = undefined;
      this._minThreshold = undefined;
      this._searchTimeframeMinutes = undefined;
      this._triggerType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mathExpression = value.mathExpression;
      this._maxThreshold = value.maxThreshold;
      this._metricOperator = value.metricOperator;
      this._minThreshold = value.minThreshold;
      this._searchTimeframeMinutes = value.searchTimeframeMinutes;
      this._triggerType = value.triggerType;
    }
  }

  // math_expression - computed: false, optional: true, required: false
  private _mathExpression?: string; 
  public get mathExpression() {
    return this.getStringAttribute('math_expression');
  }
  public set mathExpression(value: string) {
    this._mathExpression = value;
  }
  public resetMathExpression() {
    this._mathExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mathExpressionInput() {
    return this._mathExpression;
  }

  // max_threshold - computed: false, optional: true, required: false
  private _maxThreshold?: number; 
  public get maxThreshold() {
    return this.getNumberAttribute('max_threshold');
  }
  public set maxThreshold(value: number) {
    this._maxThreshold = value;
  }
  public resetMaxThreshold() {
    this._maxThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxThresholdInput() {
    return this._maxThreshold;
  }

  // metric_operator - computed: false, optional: true, required: false
  private _metricOperator?: string; 
  public get metricOperator() {
    return this.getStringAttribute('metric_operator');
  }
  public set metricOperator(value: string) {
    this._metricOperator = value;
  }
  public resetMetricOperator() {
    this._metricOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricOperatorInput() {
    return this._metricOperator;
  }

  // min_threshold - computed: false, optional: true, required: false
  private _minThreshold?: number; 
  public get minThreshold() {
    return this.getNumberAttribute('min_threshold');
  }
  public set minThreshold(value: number) {
    this._minThreshold = value;
  }
  public resetMinThreshold() {
    this._minThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minThresholdInput() {
    return this._minThreshold;
  }

  // search_timeframe_minutes - computed: false, optional: false, required: true
  private _searchTimeframeMinutes?: number; 
  public get searchTimeframeMinutes() {
    return this.getNumberAttribute('search_timeframe_minutes');
  }
  public set searchTimeframeMinutes(value: number) {
    this._searchTimeframeMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchTimeframeMinutesInput() {
    return this._searchTimeframeMinutes;
  }

  // trigger_type - computed: false, optional: false, required: true
  private _triggerType?: string; 
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
  public set triggerType(value: string) {
    this._triggerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
  }
}
export interface UnifiedAlertMetricAlert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#severity UnifiedAlert#severity}
  */
  readonly severity: string;
  /**
  * queries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#queries UnifiedAlert#queries}
  */
  readonly queries: UnifiedAlertMetricAlertQueries[] | cdktf.IResolvable;
  /**
  * recipients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#recipients UnifiedAlert#recipients}
  */
  readonly recipients: UnifiedAlertMetricAlertRecipients;
  /**
  * trigger block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#trigger UnifiedAlert#trigger}
  */
  readonly trigger: UnifiedAlertMetricAlertTrigger;
}

export function unifiedAlertMetricAlertToTerraform(struct?: UnifiedAlertMetricAlertOutputReference | UnifiedAlertMetricAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    severity: cdktf.stringToTerraform(struct!.severity),
    queries: cdktf.listMapper(unifiedAlertMetricAlertQueriesToTerraform, true)(struct!.queries),
    recipients: unifiedAlertMetricAlertRecipientsToTerraform(struct!.recipients),
    trigger: unifiedAlertMetricAlertTriggerToTerraform(struct!.trigger),
  }
}


export function unifiedAlertMetricAlertToHclTerraform(struct?: UnifiedAlertMetricAlertOutputReference | UnifiedAlertMetricAlert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    queries: {
      value: cdktf.listMapperHcl(unifiedAlertMetricAlertQueriesToHclTerraform, true)(struct!.queries),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedAlertMetricAlertQueriesList",
    },
    recipients: {
      value: unifiedAlertMetricAlertRecipientsToHclTerraform(struct!.recipients),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedAlertMetricAlertRecipientsList",
    },
    trigger: {
      value: unifiedAlertMetricAlertTriggerToHclTerraform(struct!.trigger),
      isBlock: true,
      type: "list",
      storageClassType: "UnifiedAlertMetricAlertTriggerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UnifiedAlertMetricAlertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UnifiedAlertMetricAlert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._queries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queries = this._queries?.internalValue;
    }
    if (this._recipients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients?.internalValue;
    }
    if (this._trigger?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UnifiedAlertMetricAlert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._severity = undefined;
      this._queries.internalValue = undefined;
      this._recipients.internalValue = undefined;
      this._trigger.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._severity = value.severity;
      this._queries.internalValue = value.queries;
      this._recipients.internalValue = value.recipients;
      this._trigger.internalValue = value.trigger;
    }
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // queries - computed: false, optional: false, required: true
  private _queries = new UnifiedAlertMetricAlertQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }
  public putQueries(value: UnifiedAlertMetricAlertQueries[] | cdktf.IResolvable) {
    this._queries.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queriesInput() {
    return this._queries.internalValue;
  }

  // recipients - computed: false, optional: false, required: true
  private _recipients = new UnifiedAlertMetricAlertRecipientsOutputReference(this, "recipients");
  public get recipients() {
    return this._recipients;
  }
  public putRecipients(value: UnifiedAlertMetricAlertRecipients) {
    this._recipients.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients.internalValue;
  }

  // trigger - computed: false, optional: false, required: true
  private _trigger = new UnifiedAlertMetricAlertTriggerOutputReference(this, "trigger");
  public get trigger() {
    return this._trigger;
  }
  public putTrigger(value: UnifiedAlertMetricAlertTrigger) {
    this._trigger.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert logzio_unified_alert}
*/
export class UnifiedAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logzio_unified_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UnifiedAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UnifiedAlert to import
  * @param importFromId The id of the existing UnifiedAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UnifiedAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logzio_unified_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/unified_alert logzio_unified_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UnifiedAlertConfig
  */
  public constructor(scope: Construct, id: string, config: UnifiedAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'logzio_unified_alert',
      terraformGeneratorMetadata: {
        providerName: 'logzio',
        providerVersion: '1.26.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dashboardId = config.dashboardId;
    this._description = config.description;
    this._enabled = config.enabled;
    this._folderId = config.folderId;
    this._id = config.id;
    this._panelId = config.panelId;
    this._rca = config.rca;
    this._rcaNotificationEndpointIds = config.rcaNotificationEndpointIds;
    this._runbook = config.runbook;
    this._tags = config.tags;
    this._title = config.title;
    this._type = config.type;
    this._useAlertNotificationEndpointsForRca = config.useAlertNotificationEndpointsForRca;
    this._logAlert.internalValue = config.logAlert;
    this._metricAlert.internalValue = config.metricAlert;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_id - computed: true, optional: false, required: false
  public get alertId() {
    return this.getStringAttribute('alert_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // dashboard_id - computed: false, optional: true, required: false
  private _dashboardId?: string; 
  public get dashboardId() {
    return this.getStringAttribute('dashboard_id');
  }
  public set dashboardId(value: string) {
    this._dashboardId = value;
  }
  public resetDashboardId() {
    this._dashboardId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardIdInput() {
    return this._dashboardId;
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

  // folder_id - computed: false, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // panel_id - computed: false, optional: true, required: false
  private _panelId?: string; 
  public get panelId() {
    return this.getStringAttribute('panel_id');
  }
  public set panelId(value: string) {
    this._panelId = value;
  }
  public resetPanelId() {
    this._panelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get panelIdInput() {
    return this._panelId;
  }

  // rca - computed: false, optional: true, required: false
  private _rca?: boolean | cdktf.IResolvable; 
  public get rca() {
    return this.getBooleanAttribute('rca');
  }
  public set rca(value: boolean | cdktf.IResolvable) {
    this._rca = value;
  }
  public resetRca() {
    this._rca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcaInput() {
    return this._rca;
  }

  // rca_notification_endpoint_ids - computed: false, optional: true, required: false
  private _rcaNotificationEndpointIds?: number[]; 
  public get rcaNotificationEndpointIds() {
    return this.getNumberListAttribute('rca_notification_endpoint_ids');
  }
  public set rcaNotificationEndpointIds(value: number[]) {
    this._rcaNotificationEndpointIds = value;
  }
  public resetRcaNotificationEndpointIds() {
    this._rcaNotificationEndpointIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcaNotificationEndpointIdsInput() {
    return this._rcaNotificationEndpointIds;
  }

  // runbook - computed: false, optional: true, required: false
  private _runbook?: string; 
  public get runbook() {
    return this.getStringAttribute('runbook');
  }
  public set runbook(value: string) {
    this._runbook = value;
  }
  public resetRunbook() {
    this._runbook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookInput() {
    return this._runbook;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // use_alert_notification_endpoints_for_rca - computed: false, optional: true, required: false
  private _useAlertNotificationEndpointsForRca?: boolean | cdktf.IResolvable; 
  public get useAlertNotificationEndpointsForRca() {
    return this.getBooleanAttribute('use_alert_notification_endpoints_for_rca');
  }
  public set useAlertNotificationEndpointsForRca(value: boolean | cdktf.IResolvable) {
    this._useAlertNotificationEndpointsForRca = value;
  }
  public resetUseAlertNotificationEndpointsForRca() {
    this._useAlertNotificationEndpointsForRca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useAlertNotificationEndpointsForRcaInput() {
    return this._useAlertNotificationEndpointsForRca;
  }

  // log_alert - computed: false, optional: true, required: false
  private _logAlert = new UnifiedAlertLogAlertOutputReference(this, "log_alert");
  public get logAlert() {
    return this._logAlert;
  }
  public putLogAlert(value: UnifiedAlertLogAlert) {
    this._logAlert.internalValue = value;
  }
  public resetLogAlert() {
    this._logAlert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAlertInput() {
    return this._logAlert.internalValue;
  }

  // metric_alert - computed: false, optional: true, required: false
  private _metricAlert = new UnifiedAlertMetricAlertOutputReference(this, "metric_alert");
  public get metricAlert() {
    return this._metricAlert;
  }
  public putMetricAlert(value: UnifiedAlertMetricAlert) {
    this._metricAlert.internalValue = value;
  }
  public resetMetricAlert() {
    this._metricAlert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricAlertInput() {
    return this._metricAlert.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dashboard_id: cdktf.stringToTerraform(this._dashboardId),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      panel_id: cdktf.stringToTerraform(this._panelId),
      rca: cdktf.booleanToTerraform(this._rca),
      rca_notification_endpoint_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._rcaNotificationEndpointIds),
      runbook: cdktf.stringToTerraform(this._runbook),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      title: cdktf.stringToTerraform(this._title),
      type: cdktf.stringToTerraform(this._type),
      use_alert_notification_endpoints_for_rca: cdktf.booleanToTerraform(this._useAlertNotificationEndpointsForRca),
      log_alert: unifiedAlertLogAlertToTerraform(this._logAlert.internalValue),
      metric_alert: unifiedAlertMetricAlertToTerraform(this._metricAlert.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dashboard_id: {
        value: cdktf.stringToHclTerraform(this._dashboardId),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      panel_id: {
        value: cdktf.stringToHclTerraform(this._panelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rca: {
        value: cdktf.booleanToHclTerraform(this._rca),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rca_notification_endpoint_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._rcaNotificationEndpointIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      runbook: {
        value: cdktf.stringToHclTerraform(this._runbook),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_alert_notification_endpoints_for_rca: {
        value: cdktf.booleanToHclTerraform(this._useAlertNotificationEndpointsForRca),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_alert: {
        value: unifiedAlertLogAlertToHclTerraform(this._logAlert.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UnifiedAlertLogAlertList",
      },
      metric_alert: {
        value: unifiedAlertMetricAlertToHclTerraform(this._metricAlert.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UnifiedAlertMetricAlertList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
