// https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BgpTestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Switch for pausing Test alerts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#alerts_paused BgpTest#alerts_paused}
  */
  readonly alertsPaused?: boolean | cdktf.IResolvable;
  /**
  * The Division where the Test will be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#division_id BgpTest#division_id}
  */
  readonly divisionId: number;
  /**
  * Optional. Switch for enabling test data webhook feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#enable_test_data_webhook BgpTest#enable_test_data_webhook}
  */
  readonly enableTestDataWebhook?: boolean | cdktf.IResolvable;
  /**
  * End time for the Test in ISO format like 2024-12-30T04:59:00Z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#end_time BgpTest#end_time}
  */
  readonly endTime: string;
  /**
  * Optional. The Folder under which the Test will be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#folder_id BgpTest#folder_id}
  */
  readonly folderId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#id BgpTest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The monitor to use for the BGP Test. Supported: 'bgp','bgp basic'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#monitor BgpTest#monitor}
  */
  readonly monitor?: string;
  /**
  * IPV4 address with a netmask range from 8 to 24 or IPV6 address with a netmask range from 28 to 128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#prefix BgpTest#prefix}
  */
  readonly prefix: string;
  /**
  * The parent Product under which the Test will be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#product_id BgpTest#product_id}
  */
  readonly productId: number;
  /**
  * Start time for the Test in ISO format like 2024-12-30T04:59:00Z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#start_time BgpTest#start_time}
  */
  readonly startTime?: string;
  /**
  * Optional. Test status: active or inactive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#status BgpTest#status}
  */
  readonly status?: string;
  /**
  * Optional. The Test description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#test_description BgpTest#test_description}
  */
  readonly testDescription?: string;
  /**
  * The name of the Test
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#test_name BgpTest#test_name}
  */
  readonly testName: string;
  /**
  * alert_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#alert_settings BgpTest#alert_settings}
  */
  readonly alertSettings?: BgpTestAlertSettings;
  /**
  * label block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#label BgpTest#label}
  */
  readonly label?: BgpTestLabel[] | cdktf.IResolvable;
}
export interface BgpTestAlertSettingsAlertRuleNotificationGroup {
  /**
  * Optional. List of contact groups to receive alert notifications. To ensure either recipient_email_ids or contact_groups is provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#contact_groups BgpTest#contact_groups}
  */
  readonly contactGroups?: string[];
  /**
  * Optional. Set to true to include critical alerts in notifications. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#notify_on_critical BgpTest#notify_on_critical}
  */
  readonly notifyOnCritical?: boolean | cdktf.IResolvable;
  /**
  * Optional. Set to true to include improved alerts in notifications. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#notify_on_improved BgpTest#notify_on_improved}
  */
  readonly notifyOnImproved?: boolean | cdktf.IResolvable;
  /**
  * Optional. Set to true to include warning alerts in notifications. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#notify_on_warning BgpTest#notify_on_warning}
  */
  readonly notifyOnWarning?: boolean | cdktf.IResolvable;
  /**
  * Optional. List of email addresses to receive alert notifications. To ensure either recipient_email_ids or contact_groups is provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#recipient_email_ids BgpTest#recipient_email_ids}
  */
  readonly recipientEmailIds?: string[];
  /**
  * Email subject for the alert notifications. Required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#subject BgpTest#subject}
  */
  readonly subject: string;
}

export function bgpTestAlertSettingsAlertRuleNotificationGroupToTerraform(struct?: BgpTestAlertSettingsAlertRuleNotificationGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contact_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contactGroups),
    notify_on_critical: cdktf.booleanToTerraform(struct!.notifyOnCritical),
    notify_on_improved: cdktf.booleanToTerraform(struct!.notifyOnImproved),
    notify_on_warning: cdktf.booleanToTerraform(struct!.notifyOnWarning),
    recipient_email_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipientEmailIds),
    subject: cdktf.stringToTerraform(struct!.subject),
  }
}


export function bgpTestAlertSettingsAlertRuleNotificationGroupToHclTerraform(struct?: BgpTestAlertSettingsAlertRuleNotificationGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contact_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contactGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    notify_on_critical: {
      value: cdktf.booleanToHclTerraform(struct!.notifyOnCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notify_on_improved: {
      value: cdktf.booleanToHclTerraform(struct!.notifyOnImproved),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notify_on_warning: {
      value: cdktf.booleanToHclTerraform(struct!.notifyOnWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    recipient_email_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipientEmailIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpTestAlertSettingsAlertRuleNotificationGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpTestAlertSettingsAlertRuleNotificationGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contactGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactGroups = this._contactGroups;
    }
    if (this._notifyOnCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyOnCritical = this._notifyOnCritical;
    }
    if (this._notifyOnImproved !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyOnImproved = this._notifyOnImproved;
    }
    if (this._notifyOnWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyOnWarning = this._notifyOnWarning;
    }
    if (this._recipientEmailIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipientEmailIds = this._recipientEmailIds;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpTestAlertSettingsAlertRuleNotificationGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contactGroups = undefined;
      this._notifyOnCritical = undefined;
      this._notifyOnImproved = undefined;
      this._notifyOnWarning = undefined;
      this._recipientEmailIds = undefined;
      this._subject = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contactGroups = value.contactGroups;
      this._notifyOnCritical = value.notifyOnCritical;
      this._notifyOnImproved = value.notifyOnImproved;
      this._notifyOnWarning = value.notifyOnWarning;
      this._recipientEmailIds = value.recipientEmailIds;
      this._subject = value.subject;
    }
  }

  // contact_groups - computed: false, optional: true, required: false
  private _contactGroups?: string[]; 
  public get contactGroups() {
    return this.getListAttribute('contact_groups');
  }
  public set contactGroups(value: string[]) {
    this._contactGroups = value;
  }
  public resetContactGroups() {
    this._contactGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupsInput() {
    return this._contactGroups;
  }

  // notify_on_critical - computed: false, optional: true, required: false
  private _notifyOnCritical?: boolean | cdktf.IResolvable; 
  public get notifyOnCritical() {
    return this.getBooleanAttribute('notify_on_critical');
  }
  public set notifyOnCritical(value: boolean | cdktf.IResolvable) {
    this._notifyOnCritical = value;
  }
  public resetNotifyOnCritical() {
    this._notifyOnCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnCriticalInput() {
    return this._notifyOnCritical;
  }

  // notify_on_improved - computed: false, optional: true, required: false
  private _notifyOnImproved?: boolean | cdktf.IResolvable; 
  public get notifyOnImproved() {
    return this.getBooleanAttribute('notify_on_improved');
  }
  public set notifyOnImproved(value: boolean | cdktf.IResolvable) {
    this._notifyOnImproved = value;
  }
  public resetNotifyOnImproved() {
    this._notifyOnImproved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnImprovedInput() {
    return this._notifyOnImproved;
  }

  // notify_on_warning - computed: false, optional: true, required: false
  private _notifyOnWarning?: boolean | cdktf.IResolvable; 
  public get notifyOnWarning() {
    return this.getBooleanAttribute('notify_on_warning');
  }
  public set notifyOnWarning(value: boolean | cdktf.IResolvable) {
    this._notifyOnWarning = value;
  }
  public resetNotifyOnWarning() {
    this._notifyOnWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnWarningInput() {
    return this._notifyOnWarning;
  }

  // recipient_email_ids - computed: false, optional: true, required: false
  private _recipientEmailIds?: string[]; 
  public get recipientEmailIds() {
    return this.getListAttribute('recipient_email_ids');
  }
  public set recipientEmailIds(value: string[]) {
    this._recipientEmailIds = value;
  }
  public resetRecipientEmailIds() {
    this._recipientEmailIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientEmailIdsInput() {
    return this._recipientEmailIds;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }
}

export class BgpTestAlertSettingsAlertRuleNotificationGroupList extends cdktf.ComplexList {
  public internalValue? : BgpTestAlertSettingsAlertRuleNotificationGroup[] | cdktf.IResolvable

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
  public get(index: number): BgpTestAlertSettingsAlertRuleNotificationGroupOutputReference {
    return new BgpTestAlertSettingsAlertRuleNotificationGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpTestAlertSettingsAlertRule {
  /**
  * Optional. Sets the sub alert type: 'origin as', 'path as', 'origin neighbor', 'prefix mismatch'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#alert_sub_type BgpTest#alert_sub_type}
  */
  readonly alertSubType?: string;
  /**
  * Sets the alert type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#alert_type BgpTest#alert_type}
  */
  readonly alertType: string;
  /**
  * Optional. Sets the number of consecutive runs only if enable_consecutive field is true and node_threshold_type is node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#consecutive_number_of_runs BgpTest#consecutive_number_of_runs}
  */
  readonly consecutiveNumberOfRuns?: number;
  /**
  * Optional. Sets alert critical reminder interval: 'none', '1 minute', '5 minutes', '10 minutes', '15 minutes', '30 minutes', '1 hour', 'daily'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#critical_reminder BgpTest#critical_reminder}
  */
  readonly criticalReminder?: string;
  /**
  * Optional. Critical trigger value for 'specific value' and 'trailing value' trigger types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#critical_trigger BgpTest#critical_trigger}
  */
  readonly criticalTrigger?: number;
  /**
  * Optional. Checks consecutive number of runs or nodes for triggering alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#enable_consecutive BgpTest#enable_consecutive}
  */
  readonly enableConsecutive?: boolean | cdktf.IResolvable;
  /**
  * Optional. Sets enforce test failure property for an alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#enforce_test_failure BgpTest#enforce_test_failure}
  */
  readonly enforceTestFailure?: boolean | cdktf.IResolvable;
  /**
  * Optional. Sets trigger expression for ASN alert type 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#expression BgpTest#expression}
  */
  readonly expression?: string;
  /**
  * Optional. Sets the historical interval for 'trailing value' trigger type: '5 minutes', '10 minutes', '15 minutes', '30 minutes', '1 hour', '2 hours', '6 hours', '12 hours', '1 day', '1 week'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#historical_interval BgpTest#historical_interval}
  */
  readonly historicalInterval?: string;
  /**
  * Sets the node threshold type for alert: 'runs', 'average across node' or 'node'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#node_threshold_type BgpTest#node_threshold_type}
  */
  readonly nodeThresholdType: string;
  /**
  * Optional. Notification group type to alert. Supports only default contacts for now.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#notification_type BgpTest#notification_type}
  */
  readonly notificationType?: string;
  /**
  * Optional. Sets the number of failed nodes the alert should trigger if node_threshold_type is 'average across nodes'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#number_of_failing_nodes BgpTest#number_of_failing_nodes}
  */
  readonly numberOfFailingNodes?: number;
  /**
  * Optional. Omits scatterplot image from alert emails if set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#omit_scatterplot BgpTest#omit_scatterplot}
  */
  readonly omitScatterplot?: boolean | cdktf.IResolvable;
  /**
  * Optional. Sets the operation type:'equals', 'not equals', 'greater than', 'greater than or equals', 'less than', 'less than or equals'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#operation_type BgpTest#operation_type}
  */
  readonly operationType?: string;
  /**
  * Optional. Sets the statistical type for 'trailing value' trigger type. Supports only 'average' for now
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#statistical_type BgpTest#statistical_type}
  */
  readonly statisticalType?: string;
  /**
  * Optional. Sets the alert time threshold: 'default', '5 minutes', '10 minutes', '15 minutes', '30 minutes', '1 hour', '2 hours', '6 hours', '12 hours'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#threshold_interval BgpTest#threshold_interval}
  */
  readonly thresholdInterval?: string;
  /**
  * Optional. Sets the threshold for the number of runs or nodes the alert should trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#threshold_number_of_runs BgpTest#threshold_number_of_runs}
  */
  readonly thresholdNumberOfRuns?: number;
  /**
  * Optional. Sets the threshold for the percentage of runs the alert should trigger
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#threshold_percentage_of_runs BgpTest#threshold_percentage_of_runs}
  */
  readonly thresholdPercentageOfRuns?: number;
  /**
  * Optional. Sets the trigger type: 'specific value', 'trailing value', 'trendshift'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#trigger_type BgpTest#trigger_type}
  */
  readonly triggerType?: string;
  /**
  * Optional. Set to true for using rolling window instead of schedule time threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#use_rolling_window BgpTest#use_rolling_window}
  */
  readonly useRollingWindow?: boolean | cdktf.IResolvable;
  /**
  * Optional. Sets alert warning reminder interval: 'none', '1 minute', '5 minutes', '10 minutes', '15 minutes', '30 minutes', '1 hour', 'daily'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#warning_reminder BgpTest#warning_reminder}
  */
  readonly warningReminder?: string;
  /**
  * Optional. Warning trigger value for 'specific value' and 'trailing value' trigger types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#warning_trigger BgpTest#warning_trigger}
  */
  readonly warningTrigger?: number;
  /**
  * notification_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#notification_group BgpTest#notification_group}
  */
  readonly notificationGroup: BgpTestAlertSettingsAlertRuleNotificationGroup[] | cdktf.IResolvable;
}

export function bgpTestAlertSettingsAlertRuleToTerraform(struct?: BgpTestAlertSettingsAlertRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_sub_type: cdktf.stringToTerraform(struct!.alertSubType),
    alert_type: cdktf.stringToTerraform(struct!.alertType),
    consecutive_number_of_runs: cdktf.numberToTerraform(struct!.consecutiveNumberOfRuns),
    critical_reminder: cdktf.stringToTerraform(struct!.criticalReminder),
    critical_trigger: cdktf.numberToTerraform(struct!.criticalTrigger),
    enable_consecutive: cdktf.booleanToTerraform(struct!.enableConsecutive),
    enforce_test_failure: cdktf.booleanToTerraform(struct!.enforceTestFailure),
    expression: cdktf.stringToTerraform(struct!.expression),
    historical_interval: cdktf.stringToTerraform(struct!.historicalInterval),
    node_threshold_type: cdktf.stringToTerraform(struct!.nodeThresholdType),
    notification_type: cdktf.stringToTerraform(struct!.notificationType),
    number_of_failing_nodes: cdktf.numberToTerraform(struct!.numberOfFailingNodes),
    omit_scatterplot: cdktf.booleanToTerraform(struct!.omitScatterplot),
    operation_type: cdktf.stringToTerraform(struct!.operationType),
    statistical_type: cdktf.stringToTerraform(struct!.statisticalType),
    threshold_interval: cdktf.stringToTerraform(struct!.thresholdInterval),
    threshold_number_of_runs: cdktf.numberToTerraform(struct!.thresholdNumberOfRuns),
    threshold_percentage_of_runs: cdktf.numberToTerraform(struct!.thresholdPercentageOfRuns),
    trigger_type: cdktf.stringToTerraform(struct!.triggerType),
    use_rolling_window: cdktf.booleanToTerraform(struct!.useRollingWindow),
    warning_reminder: cdktf.stringToTerraform(struct!.warningReminder),
    warning_trigger: cdktf.numberToTerraform(struct!.warningTrigger),
    notification_group: cdktf.listMapper(bgpTestAlertSettingsAlertRuleNotificationGroupToTerraform, true)(struct!.notificationGroup),
  }
}


export function bgpTestAlertSettingsAlertRuleToHclTerraform(struct?: BgpTestAlertSettingsAlertRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_sub_type: {
      value: cdktf.stringToHclTerraform(struct!.alertSubType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_type: {
      value: cdktf.stringToHclTerraform(struct!.alertType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    consecutive_number_of_runs: {
      value: cdktf.numberToHclTerraform(struct!.consecutiveNumberOfRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    critical_reminder: {
      value: cdktf.stringToHclTerraform(struct!.criticalReminder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    critical_trigger: {
      value: cdktf.numberToHclTerraform(struct!.criticalTrigger),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_consecutive: {
      value: cdktf.booleanToHclTerraform(struct!.enableConsecutive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enforce_test_failure: {
      value: cdktf.booleanToHclTerraform(struct!.enforceTestFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    historical_interval: {
      value: cdktf.stringToHclTerraform(struct!.historicalInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_threshold_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeThresholdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_type: {
      value: cdktf.stringToHclTerraform(struct!.notificationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_failing_nodes: {
      value: cdktf.numberToHclTerraform(struct!.numberOfFailingNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    omit_scatterplot: {
      value: cdktf.booleanToHclTerraform(struct!.omitScatterplot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operation_type: {
      value: cdktf.stringToHclTerraform(struct!.operationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    statistical_type: {
      value: cdktf.stringToHclTerraform(struct!.statisticalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_interval: {
      value: cdktf.stringToHclTerraform(struct!.thresholdInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold_number_of_runs: {
      value: cdktf.numberToHclTerraform(struct!.thresholdNumberOfRuns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_percentage_of_runs: {
      value: cdktf.numberToHclTerraform(struct!.thresholdPercentageOfRuns),
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
    use_rolling_window: {
      value: cdktf.booleanToHclTerraform(struct!.useRollingWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    warning_reminder: {
      value: cdktf.stringToHclTerraform(struct!.warningReminder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    warning_trigger: {
      value: cdktf.numberToHclTerraform(struct!.warningTrigger),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notification_group: {
      value: cdktf.listMapperHcl(bgpTestAlertSettingsAlertRuleNotificationGroupToHclTerraform, true)(struct!.notificationGroup),
      isBlock: true,
      type: "set",
      storageClassType: "BgpTestAlertSettingsAlertRuleNotificationGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpTestAlertSettingsAlertRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpTestAlertSettingsAlertRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertSubType !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertSubType = this._alertSubType;
    }
    if (this._alertType !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertType = this._alertType;
    }
    if (this._consecutiveNumberOfRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.consecutiveNumberOfRuns = this._consecutiveNumberOfRuns;
    }
    if (this._criticalReminder !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalReminder = this._criticalReminder;
    }
    if (this._criticalTrigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.criticalTrigger = this._criticalTrigger;
    }
    if (this._enableConsecutive !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConsecutive = this._enableConsecutive;
    }
    if (this._enforceTestFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceTestFailure = this._enforceTestFailure;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._historicalInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.historicalInterval = this._historicalInterval;
    }
    if (this._nodeThresholdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeThresholdType = this._nodeThresholdType;
    }
    if (this._notificationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationType = this._notificationType;
    }
    if (this._numberOfFailingNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfFailingNodes = this._numberOfFailingNodes;
    }
    if (this._omitScatterplot !== undefined) {
      hasAnyValues = true;
      internalValueResult.omitScatterplot = this._omitScatterplot;
    }
    if (this._operationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationType = this._operationType;
    }
    if (this._statisticalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.statisticalType = this._statisticalType;
    }
    if (this._thresholdInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdInterval = this._thresholdInterval;
    }
    if (this._thresholdNumberOfRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdNumberOfRuns = this._thresholdNumberOfRuns;
    }
    if (this._thresholdPercentageOfRuns !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdPercentageOfRuns = this._thresholdPercentageOfRuns;
    }
    if (this._triggerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerType = this._triggerType;
    }
    if (this._useRollingWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRollingWindow = this._useRollingWindow;
    }
    if (this._warningReminder !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningReminder = this._warningReminder;
    }
    if (this._warningTrigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.warningTrigger = this._warningTrigger;
    }
    if (this._notificationGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationGroup = this._notificationGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpTestAlertSettingsAlertRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertSubType = undefined;
      this._alertType = undefined;
      this._consecutiveNumberOfRuns = undefined;
      this._criticalReminder = undefined;
      this._criticalTrigger = undefined;
      this._enableConsecutive = undefined;
      this._enforceTestFailure = undefined;
      this._expression = undefined;
      this._historicalInterval = undefined;
      this._nodeThresholdType = undefined;
      this._notificationType = undefined;
      this._numberOfFailingNodes = undefined;
      this._omitScatterplot = undefined;
      this._operationType = undefined;
      this._statisticalType = undefined;
      this._thresholdInterval = undefined;
      this._thresholdNumberOfRuns = undefined;
      this._thresholdPercentageOfRuns = undefined;
      this._triggerType = undefined;
      this._useRollingWindow = undefined;
      this._warningReminder = undefined;
      this._warningTrigger = undefined;
      this._notificationGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertSubType = value.alertSubType;
      this._alertType = value.alertType;
      this._consecutiveNumberOfRuns = value.consecutiveNumberOfRuns;
      this._criticalReminder = value.criticalReminder;
      this._criticalTrigger = value.criticalTrigger;
      this._enableConsecutive = value.enableConsecutive;
      this._enforceTestFailure = value.enforceTestFailure;
      this._expression = value.expression;
      this._historicalInterval = value.historicalInterval;
      this._nodeThresholdType = value.nodeThresholdType;
      this._notificationType = value.notificationType;
      this._numberOfFailingNodes = value.numberOfFailingNodes;
      this._omitScatterplot = value.omitScatterplot;
      this._operationType = value.operationType;
      this._statisticalType = value.statisticalType;
      this._thresholdInterval = value.thresholdInterval;
      this._thresholdNumberOfRuns = value.thresholdNumberOfRuns;
      this._thresholdPercentageOfRuns = value.thresholdPercentageOfRuns;
      this._triggerType = value.triggerType;
      this._useRollingWindow = value.useRollingWindow;
      this._warningReminder = value.warningReminder;
      this._warningTrigger = value.warningTrigger;
      this._notificationGroup.internalValue = value.notificationGroup;
    }
  }

  // alert_sub_type - computed: false, optional: true, required: false
  private _alertSubType?: string; 
  public get alertSubType() {
    return this.getStringAttribute('alert_sub_type');
  }
  public set alertSubType(value: string) {
    this._alertSubType = value;
  }
  public resetAlertSubType() {
    this._alertSubType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSubTypeInput() {
    return this._alertSubType;
  }

  // alert_type - computed: false, optional: false, required: true
  private _alertType?: string; 
  public get alertType() {
    return this.getStringAttribute('alert_type');
  }
  public set alertType(value: string) {
    this._alertType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertTypeInput() {
    return this._alertType;
  }

  // consecutive_number_of_runs - computed: false, optional: true, required: false
  private _consecutiveNumberOfRuns?: number; 
  public get consecutiveNumberOfRuns() {
    return this.getNumberAttribute('consecutive_number_of_runs');
  }
  public set consecutiveNumberOfRuns(value: number) {
    this._consecutiveNumberOfRuns = value;
  }
  public resetConsecutiveNumberOfRuns() {
    this._consecutiveNumberOfRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consecutiveNumberOfRunsInput() {
    return this._consecutiveNumberOfRuns;
  }

  // critical_reminder - computed: false, optional: true, required: false
  private _criticalReminder?: string; 
  public get criticalReminder() {
    return this.getStringAttribute('critical_reminder');
  }
  public set criticalReminder(value: string) {
    this._criticalReminder = value;
  }
  public resetCriticalReminder() {
    this._criticalReminder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalReminderInput() {
    return this._criticalReminder;
  }

  // critical_trigger - computed: false, optional: true, required: false
  private _criticalTrigger?: number; 
  public get criticalTrigger() {
    return this.getNumberAttribute('critical_trigger');
  }
  public set criticalTrigger(value: number) {
    this._criticalTrigger = value;
  }
  public resetCriticalTrigger() {
    this._criticalTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalTriggerInput() {
    return this._criticalTrigger;
  }

  // enable_consecutive - computed: false, optional: true, required: false
  private _enableConsecutive?: boolean | cdktf.IResolvable; 
  public get enableConsecutive() {
    return this.getBooleanAttribute('enable_consecutive');
  }
  public set enableConsecutive(value: boolean | cdktf.IResolvable) {
    this._enableConsecutive = value;
  }
  public resetEnableConsecutive() {
    this._enableConsecutive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConsecutiveInput() {
    return this._enableConsecutive;
  }

  // enforce_test_failure - computed: false, optional: true, required: false
  private _enforceTestFailure?: boolean | cdktf.IResolvable; 
  public get enforceTestFailure() {
    return this.getBooleanAttribute('enforce_test_failure');
  }
  public set enforceTestFailure(value: boolean | cdktf.IResolvable) {
    this._enforceTestFailure = value;
  }
  public resetEnforceTestFailure() {
    this._enforceTestFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceTestFailureInput() {
    return this._enforceTestFailure;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // historical_interval - computed: false, optional: true, required: false
  private _historicalInterval?: string; 
  public get historicalInterval() {
    return this.getStringAttribute('historical_interval');
  }
  public set historicalInterval(value: string) {
    this._historicalInterval = value;
  }
  public resetHistoricalInterval() {
    this._historicalInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get historicalIntervalInput() {
    return this._historicalInterval;
  }

  // node_threshold_type - computed: false, optional: false, required: true
  private _nodeThresholdType?: string; 
  public get nodeThresholdType() {
    return this.getStringAttribute('node_threshold_type');
  }
  public set nodeThresholdType(value: string) {
    this._nodeThresholdType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeThresholdTypeInput() {
    return this._nodeThresholdType;
  }

  // notification_type - computed: false, optional: true, required: false
  private _notificationType?: string; 
  public get notificationType() {
    return this.getStringAttribute('notification_type');
  }
  public set notificationType(value: string) {
    this._notificationType = value;
  }
  public resetNotificationType() {
    this._notificationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTypeInput() {
    return this._notificationType;
  }

  // number_of_failing_nodes - computed: false, optional: true, required: false
  private _numberOfFailingNodes?: number; 
  public get numberOfFailingNodes() {
    return this.getNumberAttribute('number_of_failing_nodes');
  }
  public set numberOfFailingNodes(value: number) {
    this._numberOfFailingNodes = value;
  }
  public resetNumberOfFailingNodes() {
    this._numberOfFailingNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfFailingNodesInput() {
    return this._numberOfFailingNodes;
  }

  // omit_scatterplot - computed: false, optional: true, required: false
  private _omitScatterplot?: boolean | cdktf.IResolvable; 
  public get omitScatterplot() {
    return this.getBooleanAttribute('omit_scatterplot');
  }
  public set omitScatterplot(value: boolean | cdktf.IResolvable) {
    this._omitScatterplot = value;
  }
  public resetOmitScatterplot() {
    this._omitScatterplot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get omitScatterplotInput() {
    return this._omitScatterplot;
  }

  // operation_type - computed: false, optional: true, required: false
  private _operationType?: string; 
  public get operationType() {
    return this.getStringAttribute('operation_type');
  }
  public set operationType(value: string) {
    this._operationType = value;
  }
  public resetOperationType() {
    this._operationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationTypeInput() {
    return this._operationType;
  }

  // statistical_type - computed: false, optional: true, required: false
  private _statisticalType?: string; 
  public get statisticalType() {
    return this.getStringAttribute('statistical_type');
  }
  public set statisticalType(value: string) {
    this._statisticalType = value;
  }
  public resetStatisticalType() {
    this._statisticalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticalTypeInput() {
    return this._statisticalType;
  }

  // threshold_interval - computed: false, optional: true, required: false
  private _thresholdInterval?: string; 
  public get thresholdInterval() {
    return this.getStringAttribute('threshold_interval');
  }
  public set thresholdInterval(value: string) {
    this._thresholdInterval = value;
  }
  public resetThresholdInterval() {
    this._thresholdInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdIntervalInput() {
    return this._thresholdInterval;
  }

  // threshold_number_of_runs - computed: false, optional: true, required: false
  private _thresholdNumberOfRuns?: number; 
  public get thresholdNumberOfRuns() {
    return this.getNumberAttribute('threshold_number_of_runs');
  }
  public set thresholdNumberOfRuns(value: number) {
    this._thresholdNumberOfRuns = value;
  }
  public resetThresholdNumberOfRuns() {
    this._thresholdNumberOfRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdNumberOfRunsInput() {
    return this._thresholdNumberOfRuns;
  }

  // threshold_percentage_of_runs - computed: false, optional: true, required: false
  private _thresholdPercentageOfRuns?: number; 
  public get thresholdPercentageOfRuns() {
    return this.getNumberAttribute('threshold_percentage_of_runs');
  }
  public set thresholdPercentageOfRuns(value: number) {
    this._thresholdPercentageOfRuns = value;
  }
  public resetThresholdPercentageOfRuns() {
    this._thresholdPercentageOfRuns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdPercentageOfRunsInput() {
    return this._thresholdPercentageOfRuns;
  }

  // trigger_type - computed: false, optional: true, required: false
  private _triggerType?: string; 
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }
  public set triggerType(value: string) {
    this._triggerType = value;
  }
  public resetTriggerType() {
    this._triggerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerTypeInput() {
    return this._triggerType;
  }

  // use_rolling_window - computed: false, optional: true, required: false
  private _useRollingWindow?: boolean | cdktf.IResolvable; 
  public get useRollingWindow() {
    return this.getBooleanAttribute('use_rolling_window');
  }
  public set useRollingWindow(value: boolean | cdktf.IResolvable) {
    this._useRollingWindow = value;
  }
  public resetUseRollingWindow() {
    this._useRollingWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRollingWindowInput() {
    return this._useRollingWindow;
  }

  // warning_reminder - computed: false, optional: true, required: false
  private _warningReminder?: string; 
  public get warningReminder() {
    return this.getStringAttribute('warning_reminder');
  }
  public set warningReminder(value: string) {
    this._warningReminder = value;
  }
  public resetWarningReminder() {
    this._warningReminder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningReminderInput() {
    return this._warningReminder;
  }

  // warning_trigger - computed: false, optional: true, required: false
  private _warningTrigger?: number; 
  public get warningTrigger() {
    return this.getNumberAttribute('warning_trigger');
  }
  public set warningTrigger(value: number) {
    this._warningTrigger = value;
  }
  public resetWarningTrigger() {
    this._warningTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warningTriggerInput() {
    return this._warningTrigger;
  }

  // notification_group - computed: false, optional: false, required: true
  private _notificationGroup = new BgpTestAlertSettingsAlertRuleNotificationGroupList(this, "notification_group", true);
  public get notificationGroup() {
    return this._notificationGroup;
  }
  public putNotificationGroup(value: BgpTestAlertSettingsAlertRuleNotificationGroup[] | cdktf.IResolvable) {
    this._notificationGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationGroupInput() {
    return this._notificationGroup.internalValue;
  }
}

export class BgpTestAlertSettingsAlertRuleList extends cdktf.ComplexList {
  public internalValue? : BgpTestAlertSettingsAlertRule[] | cdktf.IResolvable

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
  public get(index: number): BgpTestAlertSettingsAlertRuleOutputReference {
    return new BgpTestAlertSettingsAlertRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpTestAlertSettingsNotificationGroupContactGroups {
  /**
  * The unique ID of the contact group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#contact_group_id BgpTest#contact_group_id}
  */
  readonly contactGroupId: number;
  /**
  * The name of the contact group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#contact_group_name BgpTest#contact_group_name}
  */
  readonly contactGroupName: string;
}

export function bgpTestAlertSettingsNotificationGroupContactGroupsToTerraform(struct?: BgpTestAlertSettingsNotificationGroupContactGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contact_group_id: cdktf.numberToTerraform(struct!.contactGroupId),
    contact_group_name: cdktf.stringToTerraform(struct!.contactGroupName),
  }
}


export function bgpTestAlertSettingsNotificationGroupContactGroupsToHclTerraform(struct?: BgpTestAlertSettingsNotificationGroupContactGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contact_group_id: {
      value: cdktf.numberToHclTerraform(struct!.contactGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    contact_group_name: {
      value: cdktf.stringToHclTerraform(struct!.contactGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpTestAlertSettingsNotificationGroupContactGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpTestAlertSettingsNotificationGroupContactGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contactGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactGroupId = this._contactGroupId;
    }
    if (this._contactGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactGroupName = this._contactGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpTestAlertSettingsNotificationGroupContactGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contactGroupId = undefined;
      this._contactGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contactGroupId = value.contactGroupId;
      this._contactGroupName = value.contactGroupName;
    }
  }

  // contact_group_id - computed: false, optional: false, required: true
  private _contactGroupId?: number; 
  public get contactGroupId() {
    return this.getNumberAttribute('contact_group_id');
  }
  public set contactGroupId(value: number) {
    this._contactGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupIdInput() {
    return this._contactGroupId;
  }

  // contact_group_name - computed: false, optional: false, required: true
  private _contactGroupName?: string; 
  public get contactGroupName() {
    return this.getStringAttribute('contact_group_name');
  }
  public set contactGroupName(value: string) {
    this._contactGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupNameInput() {
    return this._contactGroupName;
  }
}

export class BgpTestAlertSettingsNotificationGroupContactGroupsList extends cdktf.ComplexList {
  public internalValue? : BgpTestAlertSettingsNotificationGroupContactGroups[] | cdktf.IResolvable

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
  public get(index: number): BgpTestAlertSettingsNotificationGroupContactGroupsOutputReference {
    return new BgpTestAlertSettingsNotificationGroupContactGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BgpTestAlertSettingsNotificationGroup {
  /**
  * Optional. Alert webhook ids for the webhook endpoints to associate with this alert setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#alert_webhook_ids BgpTest#alert_webhook_ids}
  */
  readonly alertWebhookIds?: number[];
  /**
  * Optional. List of emails to alert. To ensure either recipient_email_ids or contact_groups is provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#recipient_email_ids BgpTest#recipient_email_ids}
  */
  readonly recipientEmailIds?: string[];
  /**
  * Email subject for the alert notifications. Required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#subject BgpTest#subject}
  */
  readonly subject: string;
  /**
  * contact_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#contact_groups BgpTest#contact_groups}
  */
  readonly contactGroups?: BgpTestAlertSettingsNotificationGroupContactGroups[] | cdktf.IResolvable;
}

export function bgpTestAlertSettingsNotificationGroupToTerraform(struct?: BgpTestAlertSettingsNotificationGroupOutputReference | BgpTestAlertSettingsNotificationGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_webhook_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.alertWebhookIds),
    recipient_email_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.recipientEmailIds),
    subject: cdktf.stringToTerraform(struct!.subject),
    contact_groups: cdktf.listMapper(bgpTestAlertSettingsNotificationGroupContactGroupsToTerraform, true)(struct!.contactGroups),
  }
}


export function bgpTestAlertSettingsNotificationGroupToHclTerraform(struct?: BgpTestAlertSettingsNotificationGroupOutputReference | BgpTestAlertSettingsNotificationGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_webhook_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.alertWebhookIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    recipient_email_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.recipientEmailIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subject: {
      value: cdktf.stringToHclTerraform(struct!.subject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contact_groups: {
      value: cdktf.listMapperHcl(bgpTestAlertSettingsNotificationGroupContactGroupsToHclTerraform, true)(struct!.contactGroups),
      isBlock: true,
      type: "set",
      storageClassType: "BgpTestAlertSettingsNotificationGroupContactGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpTestAlertSettingsNotificationGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpTestAlertSettingsNotificationGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertWebhookIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertWebhookIds = this._alertWebhookIds;
    }
    if (this._recipientEmailIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.recipientEmailIds = this._recipientEmailIds;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._contactGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactGroups = this._contactGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpTestAlertSettingsNotificationGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertWebhookIds = undefined;
      this._recipientEmailIds = undefined;
      this._subject = undefined;
      this._contactGroups.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertWebhookIds = value.alertWebhookIds;
      this._recipientEmailIds = value.recipientEmailIds;
      this._subject = value.subject;
      this._contactGroups.internalValue = value.contactGroups;
    }
  }

  // alert_webhook_ids - computed: false, optional: true, required: false
  private _alertWebhookIds?: number[]; 
  public get alertWebhookIds() {
    return this.getNumberListAttribute('alert_webhook_ids');
  }
  public set alertWebhookIds(value: number[]) {
    this._alertWebhookIds = value;
  }
  public resetAlertWebhookIds() {
    this._alertWebhookIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertWebhookIdsInput() {
    return this._alertWebhookIds;
  }

  // recipient_email_ids - computed: false, optional: true, required: false
  private _recipientEmailIds?: string[]; 
  public get recipientEmailIds() {
    return this.getListAttribute('recipient_email_ids');
  }
  public set recipientEmailIds(value: string[]) {
    this._recipientEmailIds = value;
  }
  public resetRecipientEmailIds() {
    this._recipientEmailIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recipientEmailIdsInput() {
    return this._recipientEmailIds;
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // contact_groups - computed: false, optional: true, required: false
  private _contactGroups = new BgpTestAlertSettingsNotificationGroupContactGroupsList(this, "contact_groups", true);
  public get contactGroups() {
    return this._contactGroups;
  }
  public putContactGroups(value: BgpTestAlertSettingsNotificationGroupContactGroups[] | cdktf.IResolvable) {
    this._contactGroups.internalValue = value;
  }
  public resetContactGroups() {
    this._contactGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupsInput() {
    return this._contactGroups.internalValue;
  }
}
export interface BgpTestAlertSettings {
  /**
  * Specifies the type of alert setting: 'override','inherit & add'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#alert_setting_type BgpTest#alert_setting_type}
  */
  readonly alertSettingType?: string;
  /**
  * alert_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#alert_rule BgpTest#alert_rule}
  */
  readonly alertRule?: BgpTestAlertSettingsAlertRule[] | cdktf.IResolvable;
  /**
  * notification_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#notification_group BgpTest#notification_group}
  */
  readonly notificationGroup: BgpTestAlertSettingsNotificationGroup;
}

export function bgpTestAlertSettingsToTerraform(struct?: BgpTestAlertSettingsOutputReference | BgpTestAlertSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_setting_type: cdktf.stringToTerraform(struct!.alertSettingType),
    alert_rule: cdktf.listMapper(bgpTestAlertSettingsAlertRuleToTerraform, true)(struct!.alertRule),
    notification_group: bgpTestAlertSettingsNotificationGroupToTerraform(struct!.notificationGroup),
  }
}


export function bgpTestAlertSettingsToHclTerraform(struct?: BgpTestAlertSettingsOutputReference | BgpTestAlertSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_setting_type: {
      value: cdktf.stringToHclTerraform(struct!.alertSettingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_rule: {
      value: cdktf.listMapperHcl(bgpTestAlertSettingsAlertRuleToHclTerraform, true)(struct!.alertRule),
      isBlock: true,
      type: "set",
      storageClassType: "BgpTestAlertSettingsAlertRuleList",
    },
    notification_group: {
      value: bgpTestAlertSettingsNotificationGroupToHclTerraform(struct!.notificationGroup),
      isBlock: true,
      type: "set",
      storageClassType: "BgpTestAlertSettingsNotificationGroupList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BgpTestAlertSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BgpTestAlertSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertSettingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertSettingType = this._alertSettingType;
    }
    if (this._alertRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertRule = this._alertRule?.internalValue;
    }
    if (this._notificationGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationGroup = this._notificationGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BgpTestAlertSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertSettingType = undefined;
      this._alertRule.internalValue = undefined;
      this._notificationGroup.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertSettingType = value.alertSettingType;
      this._alertRule.internalValue = value.alertRule;
      this._notificationGroup.internalValue = value.notificationGroup;
    }
  }

  // alert_setting_type - computed: false, optional: true, required: false
  private _alertSettingType?: string; 
  public get alertSettingType() {
    return this.getStringAttribute('alert_setting_type');
  }
  public set alertSettingType(value: string) {
    this._alertSettingType = value;
  }
  public resetAlertSettingType() {
    this._alertSettingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSettingTypeInput() {
    return this._alertSettingType;
  }

  // alert_rule - computed: false, optional: true, required: false
  private _alertRule = new BgpTestAlertSettingsAlertRuleList(this, "alert_rule", true);
  public get alertRule() {
    return this._alertRule;
  }
  public putAlertRule(value: BgpTestAlertSettingsAlertRule[] | cdktf.IResolvable) {
    this._alertRule.internalValue = value;
  }
  public resetAlertRule() {
    this._alertRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertRuleInput() {
    return this._alertRule.internalValue;
  }

  // notification_group - computed: false, optional: false, required: true
  private _notificationGroup = new BgpTestAlertSettingsNotificationGroupOutputReference(this, "notification_group");
  public get notificationGroup() {
    return this._notificationGroup;
  }
  public putNotificationGroup(value: BgpTestAlertSettingsNotificationGroup) {
    this._notificationGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationGroupInput() {
    return this._notificationGroup.internalValue;
  }
}
export interface BgpTestLabel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#key BgpTest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#values BgpTest#values}
  */
  readonly values: string[];
}

export function bgpTestLabelToTerraform(struct?: BgpTestLabel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function bgpTestLabelToHclTerraform(struct?: BgpTestLabel | cdktf.IResolvable): any {
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

export class BgpTestLabelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BgpTestLabel | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BgpTestLabel | cdktf.IResolvable | undefined) {
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

export class BgpTestLabelList extends cdktf.ComplexList {
  public internalValue? : BgpTestLabel[] | cdktf.IResolvable

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
  public get(index: number): BgpTestLabelOutputReference {
    return new BgpTestLabelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test bgp_test}
*/
export class BgpTest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bgp_test";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BgpTest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BgpTest to import
  * @param importFromId The id of the existing BgpTest that should be imported. Refer to the {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BgpTest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bgp_test", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/catchpoint/catchpoint/1.5.0/docs/resources/bgp_test bgp_test} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BgpTestConfig
  */
  public constructor(scope: Construct, id: string, config: BgpTestConfig) {
    super(scope, id, {
      terraformResourceType: 'bgp_test',
      terraformGeneratorMetadata: {
        providerName: 'catchpoint',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertsPaused = config.alertsPaused;
    this._divisionId = config.divisionId;
    this._enableTestDataWebhook = config.enableTestDataWebhook;
    this._endTime = config.endTime;
    this._folderId = config.folderId;
    this._id = config.id;
    this._monitor = config.monitor;
    this._prefix = config.prefix;
    this._productId = config.productId;
    this._startTime = config.startTime;
    this._status = config.status;
    this._testDescription = config.testDescription;
    this._testName = config.testName;
    this._alertSettings.internalValue = config.alertSettings;
    this._label.internalValue = config.label;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts_paused - computed: false, optional: true, required: false
  private _alertsPaused?: boolean | cdktf.IResolvable; 
  public get alertsPaused() {
    return this.getBooleanAttribute('alerts_paused');
  }
  public set alertsPaused(value: boolean | cdktf.IResolvable) {
    this._alertsPaused = value;
  }
  public resetAlertsPaused() {
    this._alertsPaused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsPausedInput() {
    return this._alertsPaused;
  }

  // division_id - computed: false, optional: false, required: true
  private _divisionId?: number; 
  public get divisionId() {
    return this.getNumberAttribute('division_id');
  }
  public set divisionId(value: number) {
    this._divisionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get divisionIdInput() {
    return this._divisionId;
  }

  // enable_test_data_webhook - computed: false, optional: true, required: false
  private _enableTestDataWebhook?: boolean | cdktf.IResolvable; 
  public get enableTestDataWebhook() {
    return this.getBooleanAttribute('enable_test_data_webhook');
  }
  public set enableTestDataWebhook(value: boolean | cdktf.IResolvable) {
    this._enableTestDataWebhook = value;
  }
  public resetEnableTestDataWebhook() {
    this._enableTestDataWebhook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTestDataWebhookInput() {
    return this._enableTestDataWebhook;
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: number; 
  public get folderId() {
    return this.getNumberAttribute('folder_id');
  }
  public set folderId(value: number) {
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

  // monitor - computed: false, optional: true, required: false
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // product_id - computed: false, optional: false, required: true
  private _productId?: number; 
  public get productId() {
    return this.getNumberAttribute('product_id');
  }
  public set productId(value: number) {
    this._productId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productIdInput() {
    return this._productId;
  }

  // start_time - computed: true, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // test_description - computed: false, optional: true, required: false
  private _testDescription?: string; 
  public get testDescription() {
    return this.getStringAttribute('test_description');
  }
  public set testDescription(value: string) {
    this._testDescription = value;
  }
  public resetTestDescription() {
    this._testDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testDescriptionInput() {
    return this._testDescription;
  }

  // test_name - computed: false, optional: false, required: true
  private _testName?: string; 
  public get testName() {
    return this.getStringAttribute('test_name');
  }
  public set testName(value: string) {
    this._testName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get testNameInput() {
    return this._testName;
  }

  // alert_settings - computed: false, optional: true, required: false
  private _alertSettings = new BgpTestAlertSettingsOutputReference(this, "alert_settings");
  public get alertSettings() {
    return this._alertSettings;
  }
  public putAlertSettings(value: BgpTestAlertSettings) {
    this._alertSettings.internalValue = value;
  }
  public resetAlertSettings() {
    this._alertSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSettingsInput() {
    return this._alertSettings.internalValue;
  }

  // label - computed: false, optional: true, required: false
  private _label = new BgpTestLabelList(this, "label", true);
  public get label() {
    return this._label;
  }
  public putLabel(value: BgpTestLabel[] | cdktf.IResolvable) {
    this._label.internalValue = value;
  }
  public resetLabel() {
    this._label.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alerts_paused: cdktf.booleanToTerraform(this._alertsPaused),
      division_id: cdktf.numberToTerraform(this._divisionId),
      enable_test_data_webhook: cdktf.booleanToTerraform(this._enableTestDataWebhook),
      end_time: cdktf.stringToTerraform(this._endTime),
      folder_id: cdktf.numberToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      monitor: cdktf.stringToTerraform(this._monitor),
      prefix: cdktf.stringToTerraform(this._prefix),
      product_id: cdktf.numberToTerraform(this._productId),
      start_time: cdktf.stringToTerraform(this._startTime),
      status: cdktf.stringToTerraform(this._status),
      test_description: cdktf.stringToTerraform(this._testDescription),
      test_name: cdktf.stringToTerraform(this._testName),
      alert_settings: bgpTestAlertSettingsToTerraform(this._alertSettings.internalValue),
      label: cdktf.listMapper(bgpTestLabelToTerraform, true)(this._label.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alerts_paused: {
        value: cdktf.booleanToHclTerraform(this._alertsPaused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      division_id: {
        value: cdktf.numberToHclTerraform(this._divisionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_test_data_webhook: {
        value: cdktf.booleanToHclTerraform(this._enableTestDataWebhook),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.numberToHclTerraform(this._folderId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor: {
        value: cdktf.stringToHclTerraform(this._monitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_id: {
        value: cdktf.numberToHclTerraform(this._productId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_description: {
        value: cdktf.stringToHclTerraform(this._testDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_name: {
        value: cdktf.stringToHclTerraform(this._testName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alert_settings: {
        value: bgpTestAlertSettingsToHclTerraform(this._alertSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BgpTestAlertSettingsList",
      },
      label: {
        value: cdktf.listMapperHcl(bgpTestLabelToHclTerraform, true)(this._label.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BgpTestLabelList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
