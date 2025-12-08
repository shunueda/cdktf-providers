// https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DetectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Team IDs that have write access to this dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#authorized_writer_teams Detector#authorized_writer_teams}
  */
  readonly authorizedWriterTeams?: string[];
  /**
  * User IDs that have write access to this dashboard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#authorized_writer_users Detector#authorized_writer_users}
  */
  readonly authorizedWriterUsers?: string[];
  /**
  * Description of the detector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#description Detector#description}
  */
  readonly description?: string;
  /**
  * Indicates how a detector was created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#detector_origin Detector#detector_origin}
  */
  readonly detectorOrigin?: string;
  /**
  * (false by default) When false, samples a subset of the output MTS in the visualization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#disable_sampling Detector#disable_sampling}
  */
  readonly disableSampling?: boolean | cdktf.IResolvable;
  /**
  * Seconds since epoch. Used for visualization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#end_time Detector#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#id Detector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum time (in seconds) to wait for late datapoints. Max value is 900 (15m)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#max_delay Detector#max_delay}
  */
  readonly maxDelay?: number;
  /**
  * Minimum time (in seconds) for the computation to wait even if the datapoints are arriving in a timely fashion. Max value is 900 (15m)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#min_delay Detector#min_delay}
  */
  readonly minDelay?: number;
  /**
  * Name of the detector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#name Detector#name}
  */
  readonly name: string;
  /**
  * ID of the parent AutoDetect detector from which this detector is customized and created. This property is required for detectors with detector_origin of type AutoDetectCustomization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#parent_detector_id Detector#parent_detector_id}
  */
  readonly parentDetectorId?: string;
  /**
  * Signalflow program text for the detector. More info at "https://developers.signalfx.com/docs/signalflow-overview"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#program_text Detector#program_text}
  */
  readonly programText: string;
  /**
  * (true by default) When true, markers will be drawn for each datapoint within the visualization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#show_data_markers Detector#show_data_markers}
  */
  readonly showDataMarkers?: boolean | cdktf.IResolvable;
  /**
  * (false by default) When true, vertical lines will be drawn for each triggered event within the visualization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#show_event_lines Detector#show_event_lines}
  */
  readonly showEventLines?: boolean | cdktf.IResolvable;
  /**
  * Seconds since epoch. Used for visualization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#start_time Detector#start_time}
  */
  readonly startTime?: number;
  /**
  * Tags associated with the detector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#tags Detector#tags}
  */
  readonly tags?: string[];
  /**
  * Team IDs to associate the detector to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#teams Detector#teams}
  */
  readonly teams?: string[];
  /**
  * Seconds to display in the visualization. This is a rolling range from the current time. Example: 3600 = `-1h`. Defaults to 3600
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#time_range Detector#time_range}
  */
  readonly timeRange?: number;
  /**
  * The property value is a string that denotes the geographic region associated with the time zone, (e.g. Australia/Sydney)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#timezone Detector#timezone}
  */
  readonly timezone?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#rule Detector#rule}
  */
  readonly rule: DetectorRule[] | cdktf.IResolvable;
  /**
  * viz_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#viz_options Detector#viz_options}
  */
  readonly vizOptions?: DetectorVizOptions[] | cdktf.IResolvable;
}
export interface DetectorRuleReminderNotification {
  /**
  * The interval at which you want to receive the notifications, in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#interval_ms Detector#interval_ms}
  */
  readonly intervalMs: number;
  /**
  * The duration during which repeat notifications are sent, in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#timeout_ms Detector#timeout_ms}
  */
  readonly timeoutMs?: number;
  /**
  * Type of reminder notification. Currently, the only supported value is TIMEOUT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#type Detector#type}
  */
  readonly type: string;
}

export function detectorRuleReminderNotificationToTerraform(struct?: DetectorRuleReminderNotificationOutputReference | DetectorRuleReminderNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval_ms: cdktf.numberToTerraform(struct!.intervalMs),
    timeout_ms: cdktf.numberToTerraform(struct!.timeoutMs),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function detectorRuleReminderNotificationToHclTerraform(struct?: DetectorRuleReminderNotificationOutputReference | DetectorRuleReminderNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval_ms: {
      value: cdktf.numberToHclTerraform(struct!.intervalMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_ms: {
      value: cdktf.numberToHclTerraform(struct!.timeoutMs),
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

export class DetectorRuleReminderNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DetectorRuleReminderNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._intervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalMs = this._intervalMs;
    }
    if (this._timeoutMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutMs = this._timeoutMs;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DetectorRuleReminderNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._intervalMs = undefined;
      this._timeoutMs = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._intervalMs = value.intervalMs;
      this._timeoutMs = value.timeoutMs;
      this._type = value.type;
    }
  }

  // interval_ms - computed: false, optional: false, required: true
  private _intervalMs?: number; 
  public get intervalMs() {
    return this.getNumberAttribute('interval_ms');
  }
  public set intervalMs(value: number) {
    this._intervalMs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalMsInput() {
    return this._intervalMs;
  }

  // timeout_ms - computed: false, optional: true, required: false
  private _timeoutMs?: number; 
  public get timeoutMs() {
    return this.getNumberAttribute('timeout_ms');
  }
  public set timeoutMs(value: number) {
    this._timeoutMs = value;
  }
  public resetTimeoutMs() {
    this._timeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMsInput() {
    return this._timeoutMs;
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
export interface DetectorRule {
  /**
  * Description of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#description Detector#description}
  */
  readonly description?: string;
  /**
  * A detect label which matches a detect label within the program text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#detect_label Detector#detect_label}
  */
  readonly detectLabel: string;
  /**
  * (default: false) When true, notifications and events will not be generated for the detect label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#disabled Detector#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * List of strings specifying where notifications will be sent when an incident occurs. See https://developers.signalfx.com/v2/docs/detector-model#notifications-models for more info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#notifications Detector#notifications}
  */
  readonly notifications?: string[];
  /**
  * Custom notification message body when an alert is triggered. See https://developers.signalfx.com/v2/reference#detector-model for more info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#parameterized_body Detector#parameterized_body}
  */
  readonly parameterizedBody?: string;
  /**
  * Custom notification message subject when an alert is triggered. See https://developers.signalfx.com/v2/reference#detector-model for more info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#parameterized_subject Detector#parameterized_subject}
  */
  readonly parameterizedSubject?: string;
  /**
  * URL of page to consult when an alert is triggered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#runbook_url Detector#runbook_url}
  */
  readonly runbookUrl?: string;
  /**
  * The severity of the rule, must be one of: Critical, Warning, Major, Minor, Info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#severity Detector#severity}
  */
  readonly severity: string;
  /**
  * Plain text suggested first course of action, such as a command to execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#tip Detector#tip}
  */
  readonly tip?: string;
  /**
  * reminder_notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#reminder_notification Detector#reminder_notification}
  */
  readonly reminderNotification?: DetectorRuleReminderNotification;
}

export function detectorRuleToTerraform(struct?: DetectorRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    detect_label: cdktf.stringToTerraform(struct!.detectLabel),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    notifications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.notifications),
    parameterized_body: cdktf.stringToTerraform(struct!.parameterizedBody),
    parameterized_subject: cdktf.stringToTerraform(struct!.parameterizedSubject),
    runbook_url: cdktf.stringToTerraform(struct!.runbookUrl),
    severity: cdktf.stringToTerraform(struct!.severity),
    tip: cdktf.stringToTerraform(struct!.tip),
    reminder_notification: detectorRuleReminderNotificationToTerraform(struct!.reminderNotification),
  }
}


export function detectorRuleToHclTerraform(struct?: DetectorRule | cdktf.IResolvable): any {
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
    detect_label: {
      value: cdktf.stringToHclTerraform(struct!.detectLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notifications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.notifications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    parameterized_body: {
      value: cdktf.stringToHclTerraform(struct!.parameterizedBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameterized_subject: {
      value: cdktf.stringToHclTerraform(struct!.parameterizedSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runbook_url: {
      value: cdktf.stringToHclTerraform(struct!.runbookUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tip: {
      value: cdktf.stringToHclTerraform(struct!.tip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reminder_notification: {
      value: detectorRuleReminderNotificationToHclTerraform(struct!.reminderNotification),
      isBlock: true,
      type: "list",
      storageClassType: "DetectorRuleReminderNotificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DetectorRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DetectorRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._detectLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectLabel = this._detectLabel;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._notifications !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifications = this._notifications;
    }
    if (this._parameterizedBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterizedBody = this._parameterizedBody;
    }
    if (this._parameterizedSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterizedSubject = this._parameterizedSubject;
    }
    if (this._runbookUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.runbookUrl = this._runbookUrl;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    if (this._tip !== undefined) {
      hasAnyValues = true;
      internalValueResult.tip = this._tip;
    }
    if (this._reminderNotification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reminderNotification = this._reminderNotification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DetectorRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._detectLabel = undefined;
      this._disabled = undefined;
      this._notifications = undefined;
      this._parameterizedBody = undefined;
      this._parameterizedSubject = undefined;
      this._runbookUrl = undefined;
      this._severity = undefined;
      this._tip = undefined;
      this._reminderNotification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._detectLabel = value.detectLabel;
      this._disabled = value.disabled;
      this._notifications = value.notifications;
      this._parameterizedBody = value.parameterizedBody;
      this._parameterizedSubject = value.parameterizedSubject;
      this._runbookUrl = value.runbookUrl;
      this._severity = value.severity;
      this._tip = value.tip;
      this._reminderNotification.internalValue = value.reminderNotification;
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

  // detect_label - computed: false, optional: false, required: true
  private _detectLabel?: string; 
  public get detectLabel() {
    return this.getStringAttribute('detect_label');
  }
  public set detectLabel(value: string) {
    this._detectLabel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get detectLabelInput() {
    return this._detectLabel;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // notifications - computed: false, optional: true, required: false
  private _notifications?: string[]; 
  public get notifications() {
    return this.getListAttribute('notifications');
  }
  public set notifications(value: string[]) {
    this._notifications = value;
  }
  public resetNotifications() {
    this._notifications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationsInput() {
    return this._notifications;
  }

  // parameterized_body - computed: false, optional: true, required: false
  private _parameterizedBody?: string; 
  public get parameterizedBody() {
    return this.getStringAttribute('parameterized_body');
  }
  public set parameterizedBody(value: string) {
    this._parameterizedBody = value;
  }
  public resetParameterizedBody() {
    this._parameterizedBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterizedBodyInput() {
    return this._parameterizedBody;
  }

  // parameterized_subject - computed: false, optional: true, required: false
  private _parameterizedSubject?: string; 
  public get parameterizedSubject() {
    return this.getStringAttribute('parameterized_subject');
  }
  public set parameterizedSubject(value: string) {
    this._parameterizedSubject = value;
  }
  public resetParameterizedSubject() {
    this._parameterizedSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterizedSubjectInput() {
    return this._parameterizedSubject;
  }

  // runbook_url - computed: false, optional: true, required: false
  private _runbookUrl?: string; 
  public get runbookUrl() {
    return this.getStringAttribute('runbook_url');
  }
  public set runbookUrl(value: string) {
    this._runbookUrl = value;
  }
  public resetRunbookUrl() {
    this._runbookUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runbookUrlInput() {
    return this._runbookUrl;
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

  // tip - computed: false, optional: true, required: false
  private _tip?: string; 
  public get tip() {
    return this.getStringAttribute('tip');
  }
  public set tip(value: string) {
    this._tip = value;
  }
  public resetTip() {
    this._tip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tipInput() {
    return this._tip;
  }

  // reminder_notification - computed: false, optional: true, required: false
  private _reminderNotification = new DetectorRuleReminderNotificationOutputReference(this, "reminder_notification");
  public get reminderNotification() {
    return this._reminderNotification;
  }
  public putReminderNotification(value: DetectorRuleReminderNotification) {
    this._reminderNotification.internalValue = value;
  }
  public resetReminderNotification() {
    this._reminderNotification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reminderNotificationInput() {
    return this._reminderNotification.internalValue;
  }
}

export class DetectorRuleList extends cdktf.ComplexList {
  public internalValue? : DetectorRule[] | cdktf.IResolvable

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
  public get(index: number): DetectorRuleOutputReference {
    return new DetectorRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DetectorVizOptions {
  /**
  * Color to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#color Detector#color}
  */
  readonly color?: string;
  /**
  * Specifies an alternate value for the Plot Name column of the Data Table associated with the chart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#display_name Detector#display_name}
  */
  readonly displayName?: string;
  /**
  * The label used in the publish statement that displays the plot (metric time series data) you want to customize
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#label Detector#label}
  */
  readonly label: string;
  /**
  * An arbitrary prefix to display with the value of this plot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#value_prefix Detector#value_prefix}
  */
  readonly valuePrefix?: string;
  /**
  * An arbitrary suffix to display with the value of this plot
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#value_suffix Detector#value_suffix}
  */
  readonly valueSuffix?: string;
  /**
  * A unit to attach to this plot. Units support automatic scaling (eg thousands of bytes will be displayed as kilobytes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#value_unit Detector#value_unit}
  */
  readonly valueUnit?: string;
}

export function detectorVizOptionsToTerraform(struct?: DetectorVizOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    color: cdktf.stringToTerraform(struct!.color),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    label: cdktf.stringToTerraform(struct!.label),
    value_prefix: cdktf.stringToTerraform(struct!.valuePrefix),
    value_suffix: cdktf.stringToTerraform(struct!.valueSuffix),
    value_unit: cdktf.stringToTerraform(struct!.valueUnit),
  }
}


export function detectorVizOptionsToHclTerraform(struct?: DetectorVizOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    color: {
      value: cdktf.stringToHclTerraform(struct!.color),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_prefix: {
      value: cdktf.stringToHclTerraform(struct!.valuePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_suffix: {
      value: cdktf.stringToHclTerraform(struct!.valueSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_unit: {
      value: cdktf.stringToHclTerraform(struct!.valueUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DetectorVizOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DetectorVizOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._color !== undefined) {
      hasAnyValues = true;
      internalValueResult.color = this._color;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._valuePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuePrefix = this._valuePrefix;
    }
    if (this._valueSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueSuffix = this._valueSuffix;
    }
    if (this._valueUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueUnit = this._valueUnit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DetectorVizOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._color = undefined;
      this._displayName = undefined;
      this._label = undefined;
      this._valuePrefix = undefined;
      this._valueSuffix = undefined;
      this._valueUnit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._color = value.color;
      this._displayName = value.displayName;
      this._label = value.label;
      this._valuePrefix = value.valuePrefix;
      this._valueSuffix = value.valueSuffix;
      this._valueUnit = value.valueUnit;
    }
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
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

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // value_prefix - computed: false, optional: true, required: false
  private _valuePrefix?: string; 
  public get valuePrefix() {
    return this.getStringAttribute('value_prefix');
  }
  public set valuePrefix(value: string) {
    this._valuePrefix = value;
  }
  public resetValuePrefix() {
    this._valuePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuePrefixInput() {
    return this._valuePrefix;
  }

  // value_suffix - computed: false, optional: true, required: false
  private _valueSuffix?: string; 
  public get valueSuffix() {
    return this.getStringAttribute('value_suffix');
  }
  public set valueSuffix(value: string) {
    this._valueSuffix = value;
  }
  public resetValueSuffix() {
    this._valueSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSuffixInput() {
    return this._valueSuffix;
  }

  // value_unit - computed: false, optional: true, required: false
  private _valueUnit?: string; 
  public get valueUnit() {
    return this.getStringAttribute('value_unit');
  }
  public set valueUnit(value: string) {
    this._valueUnit = value;
  }
  public resetValueUnit() {
    this._valueUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueUnitInput() {
    return this._valueUnit;
  }
}

export class DetectorVizOptionsList extends cdktf.ComplexList {
  public internalValue? : DetectorVizOptions[] | cdktf.IResolvable

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
  public get(index: number): DetectorVizOptionsOutputReference {
    return new DetectorVizOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector signalfx_detector}
*/
export class Detector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "signalfx_detector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Detector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Detector to import
  * @param importFromId The id of the existing Detector that should be imported. Refer to the {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Detector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "signalfx_detector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/splunk-terraform/signalfx/9.23.0/docs/resources/detector signalfx_detector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DetectorConfig
  */
  public constructor(scope: Construct, id: string, config: DetectorConfig) {
    super(scope, id, {
      terraformResourceType: 'signalfx_detector',
      terraformGeneratorMetadata: {
        providerName: 'signalfx',
        providerVersion: '9.23.0',
        providerVersionConstraint: '9.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorizedWriterTeams = config.authorizedWriterTeams;
    this._authorizedWriterUsers = config.authorizedWriterUsers;
    this._description = config.description;
    this._detectorOrigin = config.detectorOrigin;
    this._disableSampling = config.disableSampling;
    this._endTime = config.endTime;
    this._id = config.id;
    this._maxDelay = config.maxDelay;
    this._minDelay = config.minDelay;
    this._name = config.name;
    this._parentDetectorId = config.parentDetectorId;
    this._programText = config.programText;
    this._showDataMarkers = config.showDataMarkers;
    this._showEventLines = config.showEventLines;
    this._startTime = config.startTime;
    this._tags = config.tags;
    this._teams = config.teams;
    this._timeRange = config.timeRange;
    this._timezone = config.timezone;
    this._rule.internalValue = config.rule;
    this._vizOptions.internalValue = config.vizOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorized_writer_teams - computed: false, optional: true, required: false
  private _authorizedWriterTeams?: string[]; 
  public get authorizedWriterTeams() {
    return cdktf.Fn.tolist(this.getListAttribute('authorized_writer_teams'));
  }
  public set authorizedWriterTeams(value: string[]) {
    this._authorizedWriterTeams = value;
  }
  public resetAuthorizedWriterTeams() {
    this._authorizedWriterTeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedWriterTeamsInput() {
    return this._authorizedWriterTeams;
  }

  // authorized_writer_users - computed: false, optional: true, required: false
  private _authorizedWriterUsers?: string[]; 
  public get authorizedWriterUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('authorized_writer_users'));
  }
  public set authorizedWriterUsers(value: string[]) {
    this._authorizedWriterUsers = value;
  }
  public resetAuthorizedWriterUsers() {
    this._authorizedWriterUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedWriterUsersInput() {
    return this._authorizedWriterUsers;
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

  // detector_origin - computed: false, optional: true, required: false
  private _detectorOrigin?: string; 
  public get detectorOrigin() {
    return this.getStringAttribute('detector_origin');
  }
  public set detectorOrigin(value: string) {
    this._detectorOrigin = value;
  }
  public resetDetectorOrigin() {
    this._detectorOrigin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorOriginInput() {
    return this._detectorOrigin;
  }

  // disable_sampling - computed: false, optional: true, required: false
  private _disableSampling?: boolean | cdktf.IResolvable; 
  public get disableSampling() {
    return this.getBooleanAttribute('disable_sampling');
  }
  public set disableSampling(value: boolean | cdktf.IResolvable) {
    this._disableSampling = value;
  }
  public resetDisableSampling() {
    this._disableSampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSamplingInput() {
    return this._disableSampling;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // label_resolutions - computed: true, optional: false, required: false
  private _labelResolutions = new cdktf.NumberMap(this, "label_resolutions");
  public get labelResolutions() {
    return this._labelResolutions;
  }

  // max_delay - computed: false, optional: true, required: false
  private _maxDelay?: number; 
  public get maxDelay() {
    return this.getNumberAttribute('max_delay');
  }
  public set maxDelay(value: number) {
    this._maxDelay = value;
  }
  public resetMaxDelay() {
    this._maxDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDelayInput() {
    return this._maxDelay;
  }

  // min_delay - computed: false, optional: true, required: false
  private _minDelay?: number; 
  public get minDelay() {
    return this.getNumberAttribute('min_delay');
  }
  public set minDelay(value: number) {
    this._minDelay = value;
  }
  public resetMinDelay() {
    this._minDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDelayInput() {
    return this._minDelay;
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

  // parent_detector_id - computed: false, optional: true, required: false
  private _parentDetectorId?: string; 
  public get parentDetectorId() {
    return this.getStringAttribute('parent_detector_id');
  }
  public set parentDetectorId(value: string) {
    this._parentDetectorId = value;
  }
  public resetParentDetectorId() {
    this._parentDetectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDetectorIdInput() {
    return this._parentDetectorId;
  }

  // program_text - computed: false, optional: false, required: true
  private _programText?: string; 
  public get programText() {
    return this.getStringAttribute('program_text');
  }
  public set programText(value: string) {
    this._programText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get programTextInput() {
    return this._programText;
  }

  // show_data_markers - computed: false, optional: true, required: false
  private _showDataMarkers?: boolean | cdktf.IResolvable; 
  public get showDataMarkers() {
    return this.getBooleanAttribute('show_data_markers');
  }
  public set showDataMarkers(value: boolean | cdktf.IResolvable) {
    this._showDataMarkers = value;
  }
  public resetShowDataMarkers() {
    this._showDataMarkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDataMarkersInput() {
    return this._showDataMarkers;
  }

  // show_event_lines - computed: false, optional: true, required: false
  private _showEventLines?: boolean | cdktf.IResolvable; 
  public get showEventLines() {
    return this.getBooleanAttribute('show_event_lines');
  }
  public set showEventLines(value: boolean | cdktf.IResolvable) {
    this._showEventLines = value;
  }
  public resetShowEventLines() {
    this._showEventLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showEventLinesInput() {
    return this._showEventLines;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
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

  // teams - computed: false, optional: true, required: false
  private _teams?: string[]; 
  public get teams() {
    return cdktf.Fn.tolist(this.getListAttribute('teams'));
  }
  public set teams(value: string[]) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }

  // time_range - computed: false, optional: true, required: false
  private _timeRange?: number; 
  public get timeRange() {
    return this.getNumberAttribute('time_range');
  }
  public set timeRange(value: number) {
    this._timeRange = value;
  }
  public resetTimeRange() {
    this._timeRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeRangeInput() {
    return this._timeRange;
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

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new DetectorRuleList(this, "rule", true);
  public get rule() {
    return this._rule;
  }
  public putRule(value: DetectorRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // viz_options - computed: false, optional: true, required: false
  private _vizOptions = new DetectorVizOptionsList(this, "viz_options", true);
  public get vizOptions() {
    return this._vizOptions;
  }
  public putVizOptions(value: DetectorVizOptions[] | cdktf.IResolvable) {
    this._vizOptions.internalValue = value;
  }
  public resetVizOptions() {
    this._vizOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vizOptionsInput() {
    return this._vizOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorized_writer_teams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizedWriterTeams),
      authorized_writer_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizedWriterUsers),
      description: cdktf.stringToTerraform(this._description),
      detector_origin: cdktf.stringToTerraform(this._detectorOrigin),
      disable_sampling: cdktf.booleanToTerraform(this._disableSampling),
      end_time: cdktf.numberToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      max_delay: cdktf.numberToTerraform(this._maxDelay),
      min_delay: cdktf.numberToTerraform(this._minDelay),
      name: cdktf.stringToTerraform(this._name),
      parent_detector_id: cdktf.stringToTerraform(this._parentDetectorId),
      program_text: cdktf.stringToTerraform(this._programText),
      show_data_markers: cdktf.booleanToTerraform(this._showDataMarkers),
      show_event_lines: cdktf.booleanToTerraform(this._showEventLines),
      start_time: cdktf.numberToTerraform(this._startTime),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      teams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._teams),
      time_range: cdktf.numberToTerraform(this._timeRange),
      timezone: cdktf.stringToTerraform(this._timezone),
      rule: cdktf.listMapper(detectorRuleToTerraform, true)(this._rule.internalValue),
      viz_options: cdktf.listMapper(detectorVizOptionsToTerraform, true)(this._vizOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorized_writer_teams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorizedWriterTeams),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      authorized_writer_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorizedWriterUsers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      detector_origin: {
        value: cdktf.stringToHclTerraform(this._detectorOrigin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_sampling: {
        value: cdktf.booleanToHclTerraform(this._disableSampling),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      end_time: {
        value: cdktf.numberToHclTerraform(this._endTime),
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
      max_delay: {
        value: cdktf.numberToHclTerraform(this._maxDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_delay: {
        value: cdktf.numberToHclTerraform(this._minDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_detector_id: {
        value: cdktf.stringToHclTerraform(this._parentDetectorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      program_text: {
        value: cdktf.stringToHclTerraform(this._programText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_data_markers: {
        value: cdktf.booleanToHclTerraform(this._showDataMarkers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_event_lines: {
        value: cdktf.booleanToHclTerraform(this._showEventLines),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      start_time: {
        value: cdktf.numberToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      teams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._teams),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      time_range: {
        value: cdktf.numberToHclTerraform(this._timeRange),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.listMapperHcl(detectorRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DetectorRuleList",
      },
      viz_options: {
        value: cdktf.listMapperHcl(detectorVizOptionsToHclTerraform, true)(this._vizOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DetectorVizOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
