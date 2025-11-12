// https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AlertRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow auto-remediation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#allow_auto_remediate AlertRule#allow_auto_remediate}
  */
  readonly allowAutoRemediate?: boolean | cdktf.IResolvable;
  /**
  * Delay notifications by the specified milliseconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#delay_notification_ms AlertRule#delay_notification_ms}
  */
  readonly delayNotificationMs?: number;
  /**
  * Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#deleted AlertRule#deleted}
  */
  readonly deleted?: boolean | cdktf.IResolvable;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#description AlertRule#description}
  */
  readonly description?: string;
  /**
  * Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#enabled AlertRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * List of policies to exclude from scan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#excluded_policies AlertRule#excluded_policies}
  */
  readonly excludedPolicies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#id AlertRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rule/Scan name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#name AlertRule#name}
  */
  readonly name: string;
  /**
  * Include dismissed alerts in notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#notify_on_dismissed AlertRule#notify_on_dismissed}
  */
  readonly notifyOnDismissed?: boolean | cdktf.IResolvable;
  /**
  * Include open alerts in notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#notify_on_open AlertRule#notify_on_open}
  */
  readonly notifyOnOpen?: boolean | cdktf.IResolvable;
  /**
  * Include resolved alerts in notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#notify_on_resolved AlertRule#notify_on_resolved}
  */
  readonly notifyOnResolved?: boolean | cdktf.IResolvable;
  /**
  * Include snoozed alerts in notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#notify_on_snoozed AlertRule#notify_on_snoozed}
  */
  readonly notifyOnSnoozed?: boolean | cdktf.IResolvable;
  /**
  * List of specific policies to scan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#policies AlertRule#policies}
  */
  readonly policies?: string[];
  /**
  * Policy labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#policy_labels AlertRule#policy_labels}
  */
  readonly policyLabels?: string[];
  /**
  * Scan all policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#scan_all AlertRule#scan_all}
  */
  readonly scanAll?: boolean | cdktf.IResolvable;
  /**
  * notification_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#notification_config AlertRule#notification_config}
  */
  readonly notificationConfig?: AlertRuleNotificationConfig[] | cdktf.IResolvable;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#target AlertRule#target}
  */
  readonly target: AlertRuleTarget;
}
export interface AlertRuleNotificationConfigDaysOfWeek {
}

export function alertRuleNotificationConfigDaysOfWeekToTerraform(struct?: AlertRuleNotificationConfigDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function alertRuleNotificationConfigDaysOfWeekToHclTerraform(struct?: AlertRuleNotificationConfigDaysOfWeek): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AlertRuleNotificationConfigDaysOfWeekOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRuleNotificationConfigDaysOfWeek | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRuleNotificationConfigDaysOfWeek | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // day - computed: true, optional: false, required: false
  public get day() {
    return this.getStringAttribute('day');
  }

  // offset - computed: true, optional: false, required: false
  public get offset() {
    return this.getNumberAttribute('offset');
  }
}

export class AlertRuleNotificationConfigDaysOfWeekList extends cdktf.ComplexList {

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
  public get(index: number): AlertRuleNotificationConfigDaysOfWeekOutputReference {
    return new AlertRuleNotificationConfigDaysOfWeekOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRuleNotificationConfig {
  /**
  * Config type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#config_type AlertRule#config_type}
  */
  readonly configType?: string;
  /**
  * Provide CSV detailed report
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#detailed_report AlertRule#detailed_report}
  */
  readonly detailedReport?: boolean | cdktf.IResolvable;
  /**
  * Scan enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#enabled AlertRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Frequency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#frequency AlertRule#frequency}
  */
  readonly frequency?: string;
  /**
  * Include remediation in detailed report
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#include_remediation AlertRule#include_remediation}
  */
  readonly includeRemediation?: boolean | cdktf.IResolvable;
  /**
  * R rule schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#r_rule_schedule AlertRule#r_rule_schedule}
  */
  readonly rRuleSchedule?: string;
  /**
  * List of unique email addresses to notify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#recipients AlertRule#recipients}
  */
  readonly recipients?: string[];
  /**
  * Template ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#template_id AlertRule#template_id}
  */
  readonly templateId?: string;
  /**
  * Compress detailed report
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#with_compression AlertRule#with_compression}
  */
  readonly withCompression?: boolean | cdktf.IResolvable;
}

export function alertRuleNotificationConfigToTerraform(struct?: AlertRuleNotificationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_type: cdktf.stringToTerraform(struct!.configType),
    detailed_report: cdktf.booleanToTerraform(struct!.detailedReport),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    include_remediation: cdktf.booleanToTerraform(struct!.includeRemediation),
    r_rule_schedule: cdktf.stringToTerraform(struct!.rRuleSchedule),
    recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipients),
    template_id: cdktf.stringToTerraform(struct!.templateId),
    with_compression: cdktf.booleanToTerraform(struct!.withCompression),
  }
}


export function alertRuleNotificationConfigToHclTerraform(struct?: AlertRuleNotificationConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_type: {
      value: cdktf.stringToHclTerraform(struct!.configType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detailed_report: {
      value: cdktf.booleanToHclTerraform(struct!.detailedReport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_remediation: {
      value: cdktf.booleanToHclTerraform(struct!.includeRemediation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    r_rule_schedule: {
      value: cdktf.stringToHclTerraform(struct!.rRuleSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    template_id: {
      value: cdktf.stringToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    with_compression: {
      value: cdktf.booleanToHclTerraform(struct!.withCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRuleNotificationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRuleNotificationConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configType !== undefined) {
      hasAnyValues = true;
      internalValueResult.configType = this._configType;
    }
    if (this._detailedReport !== undefined) {
      hasAnyValues = true;
      internalValueResult.detailedReport = this._detailedReport;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._includeRemediation !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRemediation = this._includeRemediation;
    }
    if (this._rRuleSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rRuleSchedule = this._rRuleSchedule;
    }
    if (this._recipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipients = this._recipients;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    if (this._withCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.withCompression = this._withCompression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRuleNotificationConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configType = undefined;
      this._detailedReport = undefined;
      this._enabled = undefined;
      this._frequency = undefined;
      this._includeRemediation = undefined;
      this._rRuleSchedule = undefined;
      this._recipients = undefined;
      this._templateId = undefined;
      this._withCompression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configType = value.configType;
      this._detailedReport = value.detailedReport;
      this._enabled = value.enabled;
      this._frequency = value.frequency;
      this._includeRemediation = value.includeRemediation;
      this._rRuleSchedule = value.rRuleSchedule;
      this._recipients = value.recipients;
      this._templateId = value.templateId;
      this._withCompression = value.withCompression;
    }
  }

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // config_type - computed: false, optional: true, required: false
  private _configType?: string; 
  public get configType() {
    return this.getStringAttribute('config_type');
  }
  public set configType(value: string) {
    this._configType = value;
  }
  public resetConfigType() {
    this._configType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configTypeInput() {
    return this._configType;
  }

  // day_of_month - computed: true, optional: false, required: false
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }

  // days_of_week - computed: true, optional: false, required: false
  private _daysOfWeek = new AlertRuleNotificationConfigDaysOfWeekList(this, "days_of_week", false);
  public get daysOfWeek() {
    return this._daysOfWeek;
  }

  // detailed_report - computed: false, optional: true, required: false
  private _detailedReport?: boolean | cdktf.IResolvable; 
  public get detailedReport() {
    return this.getBooleanAttribute('detailed_report');
  }
  public set detailedReport(value: boolean | cdktf.IResolvable) {
    this._detailedReport = value;
  }
  public resetDetailedReport() {
    this._detailedReport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detailedReportInput() {
    return this._detailedReport;
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

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // frequency_from_r_rule - computed: true, optional: false, required: false
  public get frequencyFromRRule() {
    return this.getStringAttribute('frequency_from_r_rule');
  }

  // hour_of_day - computed: true, optional: false, required: false
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }

  // include_remediation - computed: false, optional: true, required: false
  private _includeRemediation?: boolean | cdktf.IResolvable; 
  public get includeRemediation() {
    return this.getBooleanAttribute('include_remediation');
  }
  public set includeRemediation(value: boolean | cdktf.IResolvable) {
    this._includeRemediation = value;
  }
  public resetIncludeRemediation() {
    this._includeRemediation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRemediationInput() {
    return this._includeRemediation;
  }

  // last_sent_ts - computed: true, optional: false, required: false
  public get lastSentTs() {
    return this.getNumberAttribute('last_sent_ts');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getNumberAttribute('last_updated');
  }

  // r_rule_schedule - computed: false, optional: true, required: false
  private _rRuleSchedule?: string; 
  public get rRuleSchedule() {
    return this.getStringAttribute('r_rule_schedule');
  }
  public set rRuleSchedule(value: string) {
    this._rRuleSchedule = value;
  }
  public resetRRuleSchedule() {
    this._rRuleSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rRuleScheduleInput() {
    return this._rRuleSchedule;
  }

  // recipients - computed: false, optional: true, required: false
  private _recipients?: string[]; 
  public get recipients() {
    return cdktf.Fn.tolist(this.getListAttribute('recipients'));
  }
  public set recipients(value: string[]) {
    this._recipients = value;
  }
  public resetRecipients() {
    this._recipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientsInput() {
    return this._recipients;
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

  // timezone_id - computed: true, optional: false, required: false
  public get timezoneId() {
    return this.getStringAttribute('timezone_id');
  }

  // with_compression - computed: false, optional: true, required: false
  private _withCompression?: boolean | cdktf.IResolvable; 
  public get withCompression() {
    return this.getBooleanAttribute('with_compression');
  }
  public set withCompression(value: boolean | cdktf.IResolvable) {
    this._withCompression = value;
  }
  public resetWithCompression() {
    this._withCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withCompressionInput() {
    return this._withCompression;
  }
}

export class AlertRuleNotificationConfigList extends cdktf.ComplexList {
  public internalValue? : AlertRuleNotificationConfig[] | cdktf.IResolvable

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
  public get(index: number): AlertRuleNotificationConfigOutputReference {
    return new AlertRuleNotificationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRuleTargetAlertRulePolicyFilter {
  /**
  * Cloud Type Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#cloud_type AlertRule#cloud_type}
  */
  readonly cloudType?: string[];
  /**
  * Compliance Standard Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#policy_compliance_standard AlertRule#policy_compliance_standard}
  */
  readonly policyComplianceStandard?: string[];
  /**
  * Policy Label Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#policy_label AlertRule#policy_label}
  */
  readonly policyLabel?: string[];
  /**
  * Cloud Type Filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#policy_severity AlertRule#policy_severity}
  */
  readonly policySeverity?: string[];
}

export function alertRuleTargetAlertRulePolicyFilterToTerraform(struct?: AlertRuleTargetAlertRulePolicyFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cloudType),
    policy_compliance_standard: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyComplianceStandard),
    policy_label: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyLabel),
    policy_severity: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policySeverity),
  }
}


export function alertRuleTargetAlertRulePolicyFilterToHclTerraform(struct?: AlertRuleTargetAlertRulePolicyFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cloudType),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    policy_compliance_standard: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policyComplianceStandard),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    policy_label: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policyLabel),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    policy_severity: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policySeverity),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRuleTargetAlertRulePolicyFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRuleTargetAlertRulePolicyFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudType = this._cloudType;
    }
    if (this._policyComplianceStandard !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyComplianceStandard = this._policyComplianceStandard;
    }
    if (this._policyLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyLabel = this._policyLabel;
    }
    if (this._policySeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.policySeverity = this._policySeverity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRuleTargetAlertRulePolicyFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloudType = undefined;
      this._policyComplianceStandard = undefined;
      this._policyLabel = undefined;
      this._policySeverity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloudType = value.cloudType;
      this._policyComplianceStandard = value.policyComplianceStandard;
      this._policyLabel = value.policyLabel;
      this._policySeverity = value.policySeverity;
    }
  }

  // cloud_type - computed: false, optional: true, required: false
  private _cloudType?: string[]; 
  public get cloudType() {
    return cdktf.Fn.tolist(this.getListAttribute('cloud_type'));
  }
  public set cloudType(value: string[]) {
    this._cloudType = value;
  }
  public resetCloudType() {
    this._cloudType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType;
  }

  // policy_compliance_standard - computed: false, optional: true, required: false
  private _policyComplianceStandard?: string[]; 
  public get policyComplianceStandard() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_compliance_standard'));
  }
  public set policyComplianceStandard(value: string[]) {
    this._policyComplianceStandard = value;
  }
  public resetPolicyComplianceStandard() {
    this._policyComplianceStandard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyComplianceStandardInput() {
    return this._policyComplianceStandard;
  }

  // policy_label - computed: false, optional: true, required: false
  private _policyLabel?: string[]; 
  public get policyLabel() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_label'));
  }
  public set policyLabel(value: string[]) {
    this._policyLabel = value;
  }
  public resetPolicyLabel() {
    this._policyLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyLabelInput() {
    return this._policyLabel;
  }

  // policy_severity - computed: false, optional: true, required: false
  private _policySeverity?: string[]; 
  public get policySeverity() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_severity'));
  }
  public set policySeverity(value: string[]) {
    this._policySeverity = value;
  }
  public resetPolicySeverity() {
    this._policySeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policySeverityInput() {
    return this._policySeverity;
  }
}

export class AlertRuleTargetAlertRulePolicyFilterList extends cdktf.ComplexList {
  public internalValue? : AlertRuleTargetAlertRulePolicyFilter[] | cdktf.IResolvable

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
  public get(index: number): AlertRuleTargetAlertRulePolicyFilterOutputReference {
    return new AlertRuleTargetAlertRulePolicyFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRuleTargetResourceListStruct {
  /**
  * List of compute access group ids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#compute_access_group_ids AlertRule#compute_access_group_ids}
  */
  readonly computeAccessGroupIds?: string[];
}

export function alertRuleTargetResourceListStructToTerraform(struct?: AlertRuleTargetResourceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compute_access_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.computeAccessGroupIds),
  }
}


export function alertRuleTargetResourceListStructToHclTerraform(struct?: AlertRuleTargetResourceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compute_access_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.computeAccessGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRuleTargetResourceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRuleTargetResourceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._computeAccessGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeAccessGroupIds = this._computeAccessGroupIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRuleTargetResourceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._computeAccessGroupIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._computeAccessGroupIds = value.computeAccessGroupIds;
    }
  }

  // compute_access_group_ids - computed: false, optional: true, required: false
  private _computeAccessGroupIds?: string[]; 
  public get computeAccessGroupIds() {
    return this.getListAttribute('compute_access_group_ids');
  }
  public set computeAccessGroupIds(value: string[]) {
    this._computeAccessGroupIds = value;
  }
  public resetComputeAccessGroupIds() {
    this._computeAccessGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeAccessGroupIdsInput() {
    return this._computeAccessGroupIds;
  }
}

export class AlertRuleTargetResourceListStructList extends cdktf.ComplexList {
  public internalValue? : AlertRuleTargetResourceListStruct[] | cdktf.IResolvable

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
  public get(index: number): AlertRuleTargetResourceListStructOutputReference {
    return new AlertRuleTargetResourceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRuleTargetTags {
  /**
  * Resource tag target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#key AlertRule#key}
  */
  readonly key: string;
  /**
  * List of values for resource tag key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#values AlertRule#values}
  */
  readonly values: string[];
}

export function alertRuleTargetTagsToTerraform(struct?: AlertRuleTargetTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function alertRuleTargetTagsToHclTerraform(struct?: AlertRuleTargetTags | cdktf.IResolvable): any {
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRuleTargetTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AlertRuleTargetTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRuleTargetTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class AlertRuleTargetTagsList extends cdktf.ComplexList {
  public internalValue? : AlertRuleTargetTags[] | cdktf.IResolvable

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
  public get(index: number): AlertRuleTargetTagsOutputReference {
    return new AlertRuleTargetTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AlertRuleTarget {
  /**
  * List of account groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#account_groups AlertRule#account_groups}
  */
  readonly accountGroups?: string[];
  /**
  * List of excluded accounts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#excluded_accounts AlertRule#excluded_accounts}
  */
  readonly excludedAccounts?: string[];
  /**
  * List of regions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#regions AlertRule#regions}
  */
  readonly regions?: string[];
  /**
  * alert_rule_policy_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#alert_rule_policy_filter AlertRule#alert_rule_policy_filter}
  */
  readonly alertRulePolicyFilter?: AlertRuleTargetAlertRulePolicyFilter[] | cdktf.IResolvable;
  /**
  * resource_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#resource_list AlertRule#resource_list}
  */
  readonly resourceList?: AlertRuleTargetResourceListStruct[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#tags AlertRule#tags}
  */
  readonly tags?: AlertRuleTargetTags[] | cdktf.IResolvable;
}

export function alertRuleTargetToTerraform(struct?: AlertRuleTargetOutputReference | AlertRuleTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accountGroups),
    excluded_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedAccounts),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    alert_rule_policy_filter: cdktf.listMapper(alertRuleTargetAlertRulePolicyFilterToTerraform, true)(struct!.alertRulePolicyFilter),
    resource_list: cdktf.listMapper(alertRuleTargetResourceListStructToTerraform, true)(struct!.resourceList),
    tags: cdktf.listMapper(alertRuleTargetTagsToTerraform, true)(struct!.tags),
  }
}


export function alertRuleTargetToHclTerraform(struct?: AlertRuleTargetOutputReference | AlertRuleTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accountGroups),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    excluded_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedAccounts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    alert_rule_policy_filter: {
      value: cdktf.listMapperHcl(alertRuleTargetAlertRulePolicyFilterToHclTerraform, true)(struct!.alertRulePolicyFilter),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRuleTargetAlertRulePolicyFilterList",
    },
    resource_list: {
      value: cdktf.listMapperHcl(alertRuleTargetResourceListStructToHclTerraform, true)(struct!.resourceList),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRuleTargetResourceListStructList",
    },
    tags: {
      value: cdktf.listMapperHcl(alertRuleTargetTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "AlertRuleTargetTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AlertRuleTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AlertRuleTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountGroups = this._accountGroups;
    }
    if (this._excludedAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedAccounts = this._excludedAccounts;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._alertRulePolicyFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertRulePolicyFilter = this._alertRulePolicyFilter?.internalValue;
    }
    if (this._resourceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceList = this._resourceList?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AlertRuleTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accountGroups = undefined;
      this._excludedAccounts = undefined;
      this._regions = undefined;
      this._alertRulePolicyFilter.internalValue = undefined;
      this._resourceList.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accountGroups = value.accountGroups;
      this._excludedAccounts = value.excludedAccounts;
      this._regions = value.regions;
      this._alertRulePolicyFilter.internalValue = value.alertRulePolicyFilter;
      this._resourceList.internalValue = value.resourceList;
      this._tags.internalValue = value.tags;
    }
  }

  // account_groups - computed: false, optional: true, required: false
  private _accountGroups?: string[]; 
  public get accountGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('account_groups'));
  }
  public set accountGroups(value: string[]) {
    this._accountGroups = value;
  }
  public resetAccountGroups() {
    this._accountGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountGroupsInput() {
    return this._accountGroups;
  }

  // excluded_accounts - computed: false, optional: true, required: false
  private _excludedAccounts?: string[]; 
  public get excludedAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_accounts'));
  }
  public set excludedAccounts(value: string[]) {
    this._excludedAccounts = value;
  }
  public resetExcludedAccounts() {
    this._excludedAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedAccountsInput() {
    return this._excludedAccounts;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return cdktf.Fn.tolist(this.getListAttribute('regions'));
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // alert_rule_policy_filter - computed: false, optional: true, required: false
  private _alertRulePolicyFilter = new AlertRuleTargetAlertRulePolicyFilterList(this, "alert_rule_policy_filter", false);
  public get alertRulePolicyFilter() {
    return this._alertRulePolicyFilter;
  }
  public putAlertRulePolicyFilter(value: AlertRuleTargetAlertRulePolicyFilter[] | cdktf.IResolvable) {
    this._alertRulePolicyFilter.internalValue = value;
  }
  public resetAlertRulePolicyFilter() {
    this._alertRulePolicyFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRulePolicyFilterInput() {
    return this._alertRulePolicyFilter.internalValue;
  }

  // resource_list - computed: false, optional: true, required: false
  private _resourceList = new AlertRuleTargetResourceListStructList(this, "resource_list", false);
  public get resourceList() {
    return this._resourceList;
  }
  public putResourceList(value: AlertRuleTargetResourceListStruct[] | cdktf.IResolvable) {
    this._resourceList.internalValue = value;
  }
  public resetResourceList() {
    this._resourceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceListInput() {
    return this._resourceList.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new AlertRuleTargetTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AlertRuleTargetTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule prismacloud_alert_rule}
*/
export class AlertRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud_alert_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AlertRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AlertRule to import
  * @param importFromId The id of the existing AlertRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AlertRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud_alert_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud/1.7.0/docs/resources/alert_rule prismacloud_alert_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AlertRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AlertRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud_alert_rule',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAutoRemediate = config.allowAutoRemediate;
    this._delayNotificationMs = config.delayNotificationMs;
    this._deleted = config.deleted;
    this._description = config.description;
    this._enabled = config.enabled;
    this._excludedPolicies = config.excludedPolicies;
    this._id = config.id;
    this._name = config.name;
    this._notifyOnDismissed = config.notifyOnDismissed;
    this._notifyOnOpen = config.notifyOnOpen;
    this._notifyOnResolved = config.notifyOnResolved;
    this._notifyOnSnoozed = config.notifyOnSnoozed;
    this._policies = config.policies;
    this._policyLabels = config.policyLabels;
    this._scanAll = config.scanAll;
    this._notificationConfig.internalValue = config.notificationConfig;
    this._target.internalValue = config.target;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_auto_remediate - computed: false, optional: true, required: false
  private _allowAutoRemediate?: boolean | cdktf.IResolvable; 
  public get allowAutoRemediate() {
    return this.getBooleanAttribute('allow_auto_remediate');
  }
  public set allowAutoRemediate(value: boolean | cdktf.IResolvable) {
    this._allowAutoRemediate = value;
  }
  public resetAllowAutoRemediate() {
    this._allowAutoRemediate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAutoRemediateInput() {
    return this._allowAutoRemediate;
  }

  // delay_notification_ms - computed: false, optional: true, required: false
  private _delayNotificationMs?: number; 
  public get delayNotificationMs() {
    return this.getNumberAttribute('delay_notification_ms');
  }
  public set delayNotificationMs(value: number) {
    this._delayNotificationMs = value;
  }
  public resetDelayNotificationMs() {
    this._delayNotificationMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayNotificationMsInput() {
    return this._delayNotificationMs;
  }

  // deleted - computed: false, optional: true, required: false
  private _deleted?: boolean | cdktf.IResolvable; 
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }
  public set deleted(value: boolean | cdktf.IResolvable) {
    this._deleted = value;
  }
  public resetDeleted() {
    this._deleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletedInput() {
    return this._deleted;
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

  // excluded_policies - computed: false, optional: true, required: false
  private _excludedPolicies?: string[]; 
  public get excludedPolicies() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_policies'));
  }
  public set excludedPolicies(value: string[]) {
    this._excludedPolicies = value;
  }
  public resetExcludedPolicies() {
    this._excludedPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPoliciesInput() {
    return this._excludedPolicies;
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

  // last_modified_by - computed: true, optional: false, required: false
  public get lastModifiedBy() {
    return this.getStringAttribute('last_modified_by');
  }

  // last_modified_on - computed: true, optional: false, required: false
  public get lastModifiedOn() {
    return this.getNumberAttribute('last_modified_on');
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

  // notification_channels - computed: true, optional: false, required: false
  public get notificationChannels() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_channels'));
  }

  // notify_on_dismissed - computed: false, optional: true, required: false
  private _notifyOnDismissed?: boolean | cdktf.IResolvable; 
  public get notifyOnDismissed() {
    return this.getBooleanAttribute('notify_on_dismissed');
  }
  public set notifyOnDismissed(value: boolean | cdktf.IResolvable) {
    this._notifyOnDismissed = value;
  }
  public resetNotifyOnDismissed() {
    this._notifyOnDismissed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnDismissedInput() {
    return this._notifyOnDismissed;
  }

  // notify_on_open - computed: false, optional: true, required: false
  private _notifyOnOpen?: boolean | cdktf.IResolvable; 
  public get notifyOnOpen() {
    return this.getBooleanAttribute('notify_on_open');
  }
  public set notifyOnOpen(value: boolean | cdktf.IResolvable) {
    this._notifyOnOpen = value;
  }
  public resetNotifyOnOpen() {
    this._notifyOnOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnOpenInput() {
    return this._notifyOnOpen;
  }

  // notify_on_resolved - computed: false, optional: true, required: false
  private _notifyOnResolved?: boolean | cdktf.IResolvable; 
  public get notifyOnResolved() {
    return this.getBooleanAttribute('notify_on_resolved');
  }
  public set notifyOnResolved(value: boolean | cdktf.IResolvable) {
    this._notifyOnResolved = value;
  }
  public resetNotifyOnResolved() {
    this._notifyOnResolved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnResolvedInput() {
    return this._notifyOnResolved;
  }

  // notify_on_snoozed - computed: false, optional: true, required: false
  private _notifyOnSnoozed?: boolean | cdktf.IResolvable; 
  public get notifyOnSnoozed() {
    return this.getBooleanAttribute('notify_on_snoozed');
  }
  public set notifyOnSnoozed(value: boolean | cdktf.IResolvable) {
    this._notifyOnSnoozed = value;
  }
  public resetNotifyOnSnoozed() {
    this._notifyOnSnoozed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnSnoozedInput() {
    return this._notifyOnSnoozed;
  }

  // open_alerts_count - computed: true, optional: false, required: false
  public get openAlertsCount() {
    return this.getNumberAttribute('open_alerts_count');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return cdktf.Fn.tolist(this.getListAttribute('policies'));
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // policy_labels - computed: false, optional: true, required: false
  private _policyLabels?: string[]; 
  public get policyLabels() {
    return cdktf.Fn.tolist(this.getListAttribute('policy_labels'));
  }
  public set policyLabels(value: string[]) {
    this._policyLabels = value;
  }
  public resetPolicyLabels() {
    this._policyLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyLabelsInput() {
    return this._policyLabels;
  }

  // policy_scan_config_id - computed: true, optional: false, required: false
  public get policyScanConfigId() {
    return this.getStringAttribute('policy_scan_config_id');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // scan_all - computed: false, optional: true, required: false
  private _scanAll?: boolean | cdktf.IResolvable; 
  public get scanAll() {
    return this.getBooleanAttribute('scan_all');
  }
  public set scanAll(value: boolean | cdktf.IResolvable) {
    this._scanAll = value;
  }
  public resetScanAll() {
    this._scanAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanAllInput() {
    return this._scanAll;
  }

  // notification_config - computed: false, optional: true, required: false
  private _notificationConfig = new AlertRuleNotificationConfigList(this, "notification_config", false);
  public get notificationConfig() {
    return this._notificationConfig;
  }
  public putNotificationConfig(value: AlertRuleNotificationConfig[] | cdktf.IResolvable) {
    this._notificationConfig.internalValue = value;
  }
  public resetNotificationConfig() {
    this._notificationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationConfigInput() {
    return this._notificationConfig.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new AlertRuleTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: AlertRuleTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_auto_remediate: cdktf.booleanToTerraform(this._allowAutoRemediate),
      delay_notification_ms: cdktf.numberToTerraform(this._delayNotificationMs),
      deleted: cdktf.booleanToTerraform(this._deleted),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      excluded_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedPolicies),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notify_on_dismissed: cdktf.booleanToTerraform(this._notifyOnDismissed),
      notify_on_open: cdktf.booleanToTerraform(this._notifyOnOpen),
      notify_on_resolved: cdktf.booleanToTerraform(this._notifyOnResolved),
      notify_on_snoozed: cdktf.booleanToTerraform(this._notifyOnSnoozed),
      policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policies),
      policy_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policyLabels),
      scan_all: cdktf.booleanToTerraform(this._scanAll),
      notification_config: cdktf.listMapper(alertRuleNotificationConfigToTerraform, true)(this._notificationConfig.internalValue),
      target: alertRuleTargetToTerraform(this._target.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_auto_remediate: {
        value: cdktf.booleanToHclTerraform(this._allowAutoRemediate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      delay_notification_ms: {
        value: cdktf.numberToHclTerraform(this._delayNotificationMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deleted: {
        value: cdktf.booleanToHclTerraform(this._deleted),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      excluded_policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedPolicies),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_on_dismissed: {
        value: cdktf.booleanToHclTerraform(this._notifyOnDismissed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_on_open: {
        value: cdktf.booleanToHclTerraform(this._notifyOnOpen),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_on_resolved: {
        value: cdktf.booleanToHclTerraform(this._notifyOnResolved),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notify_on_snoozed: {
        value: cdktf.booleanToHclTerraform(this._notifyOnSnoozed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policies: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policies),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      policy_labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._policyLabels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scan_all: {
        value: cdktf.booleanToHclTerraform(this._scanAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      notification_config: {
        value: cdktf.listMapperHcl(alertRuleNotificationConfigToHclTerraform, true)(this._notificationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertRuleNotificationConfigList",
      },
      target: {
        value: alertRuleTargetToHclTerraform(this._target.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AlertRuleTargetList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
