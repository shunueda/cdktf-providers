// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowAlertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#cause_ids WorkflowAlert#cause_ids}
  */
  readonly causeIds?: string[];
  /**
  * Workflow command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#command WorkflowAlert#command}
  */
  readonly command?: string;
  /**
  * This will notify you back when the workflow is starting. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#command_feedback_enabled WorkflowAlert#command_feedback_enabled}
  */
  readonly commandFeedbackEnabled?: boolean | cdktf.IResolvable;
  /**
  * When continuously repeat is true, repeat workflows aren't automatically stopped when conditions aren't met. This setting won't override your conditions set by repeat_condition_duration_since_first_run and repeat_condition_number_of_repeats parameters.. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#continuously_repeat WorkflowAlert#continuously_repeat}
  */
  readonly continuouslyRepeat?: boolean | cdktf.IResolvable;
  /**
  * The description of the workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#description WorkflowAlert#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#enabled WorkflowAlert#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#environment_ids WorkflowAlert#environment_ids}
  */
  readonly environmentIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#functionality_ids WorkflowAlert#functionality_ids}
  */
  readonly functionalityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#group_ids WorkflowAlert#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#id WorkflowAlert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#incident_role_ids WorkflowAlert#incident_role_ids}
  */
  readonly incidentRoleIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#incident_type_ids WorkflowAlert#incident_type_ids}
  */
  readonly incidentTypeIds?: string[];
  /**
  * Restricts workflow edits to admins when turned on. Only admins can set this field.. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#locked WorkflowAlert#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * The title of the workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#name WorkflowAlert#name}
  */
  readonly name: string;
  /**
  * The order which the workflow should run with other workflows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#position WorkflowAlert#position}
  */
  readonly position?: number;
  /**
  * The workflow will stop repeating if its runtime since it's first workflow run exceeds the duration set in this field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#repeat_condition_duration_since_first_run WorkflowAlert#repeat_condition_duration_since_first_run}
  */
  readonly repeatConditionDurationSinceFirstRun?: string;
  /**
  * The workflow will stop repeating if the number of repeats exceeds the value set in this field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#repeat_condition_number_of_repeats WorkflowAlert#repeat_condition_number_of_repeats}
  */
  readonly repeatConditionNumberOfRepeats?: number;
  /**
  * Repeat workflow every duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#repeat_every_duration WorkflowAlert#repeat_every_duration}
  */
  readonly repeatEveryDuration?: string;
  /**
  * Repeat on weekdays. Value must be one of `S`, `M`, `T`, `W`, `R`, `F`, `U`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#repeat_on WorkflowAlert#repeat_on}
  */
  readonly repeatOn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#service_ids WorkflowAlert#service_ids}
  */
  readonly serviceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#severity_ids WorkflowAlert#severity_ids}
  */
  readonly severityIds?: string[];
  /**
  * The slug of the workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#slug WorkflowAlert#slug}
  */
  readonly slug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#sub_status_ids WorkflowAlert#sub_status_ids}
  */
  readonly subStatusIds?: string[];
  /**
  * Wait this duration before executing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#wait WorkflowAlert#wait}
  */
  readonly wait?: string;
  /**
  * The group this workflow belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#workflow_group_id WorkflowAlert#workflow_group_id}
  */
  readonly workflowGroupId?: string;
  /**
  * trigger_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#trigger_params WorkflowAlert#trigger_params}
  */
  readonly triggerParams?: WorkflowAlertTriggerParams;
}
export interface WorkflowAlertTriggerParams {
  /**
  * Value must be one off `ALL`, `ANY`, `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#alert_condition WorkflowAlert#alert_condition}
  */
  readonly alertCondition?: string;
  /**
  * Value must be one off `IS`, `ANY`, `CONTAINS`, `CONTAINS_ALL`, `CONTAINS_NONE`, `NONE`, `SET`, `UNSET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#alert_condition_label WorkflowAlert#alert_condition_label}
  */
  readonly alertConditionLabel?: string;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#alert_condition_label_use_regexp WorkflowAlert#alert_condition_label_use_regexp}
  */
  readonly alertConditionLabelUseRegexp?: boolean | cdktf.IResolvable;
  /**
  * Value must be one off `IS`, `ANY`, `CONTAINS`, `CONTAINS_ALL`, `CONTAINS_NONE`, `NONE`, `SET`, `UNSET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#alert_condition_payload WorkflowAlert#alert_condition_payload}
  */
  readonly alertConditionPayload?: string;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#alert_condition_payload_use_regexp WorkflowAlert#alert_condition_payload_use_regexp}
  */
  readonly alertConditionPayloadUseRegexp?: boolean | cdktf.IResolvable;
  /**
  * Value must be one off `IS`, `ANY`, `CONTAINS`, `CONTAINS_ALL`, `CONTAINS_NONE`, `NONE`, `SET`, `UNSET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#alert_condition_source WorkflowAlert#alert_condition_source}
  */
  readonly alertConditionSource?: string;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#alert_condition_source_use_regexp WorkflowAlert#alert_condition_source_use_regexp}
  */
  readonly alertConditionSourceUseRegexp?: boolean | cdktf.IResolvable;
  /**
  * Value must be one off `IS`, `ANY`, `CONTAINS`, `CONTAINS_ALL`, `CONTAINS_NONE`, `NONE`, `SET`, `UNSET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#alert_condition_status WorkflowAlert#alert_condition_status}
  */
  readonly alertConditionStatus?: string;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#alert_condition_status_use_regexp WorkflowAlert#alert_condition_status_use_regexp}
  */
  readonly alertConditionStatusUseRegexp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#alert_labels WorkflowAlert#alert_labels}
  */
  readonly alertLabels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#alert_payload WorkflowAlert#alert_payload}
  */
  readonly alertPayload?: string[];
  /**
  * You can use jsonpath syntax. eg: $.incident.teams[*]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#alert_query_payload WorkflowAlert#alert_query_payload}
  */
  readonly alertQueryPayload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#alert_sources WorkflowAlert#alert_sources}
  */
  readonly alertSources?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#alert_statuses WorkflowAlert#alert_statuses}
  */
  readonly alertStatuses?: string[];
  /**
  * Value must be one off `alert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#trigger_type WorkflowAlert#trigger_type}
  */
  readonly triggerType?: string;
  /**
  * Actions that trigger the workflow. Value must be one of `alert_created`, `alert_status_updated`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#triggers WorkflowAlert#triggers}
  */
  readonly triggers?: string[];
}

export function workflowAlertTriggerParamsToTerraform(struct?: WorkflowAlertTriggerParamsOutputReference | WorkflowAlertTriggerParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_condition: cdktf.stringToTerraform(struct!.alertCondition),
    alert_condition_label: cdktf.stringToTerraform(struct!.alertConditionLabel),
    alert_condition_label_use_regexp: cdktf.booleanToTerraform(struct!.alertConditionLabelUseRegexp),
    alert_condition_payload: cdktf.stringToTerraform(struct!.alertConditionPayload),
    alert_condition_payload_use_regexp: cdktf.booleanToTerraform(struct!.alertConditionPayloadUseRegexp),
    alert_condition_source: cdktf.stringToTerraform(struct!.alertConditionSource),
    alert_condition_source_use_regexp: cdktf.booleanToTerraform(struct!.alertConditionSourceUseRegexp),
    alert_condition_status: cdktf.stringToTerraform(struct!.alertConditionStatus),
    alert_condition_status_use_regexp: cdktf.booleanToTerraform(struct!.alertConditionStatusUseRegexp),
    alert_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alertLabels),
    alert_payload: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alertPayload),
    alert_query_payload: cdktf.stringToTerraform(struct!.alertQueryPayload),
    alert_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alertSources),
    alert_statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alertStatuses),
    trigger_type: cdktf.stringToTerraform(struct!.triggerType),
    triggers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.triggers),
  }
}


export function workflowAlertTriggerParamsToHclTerraform(struct?: WorkflowAlertTriggerParamsOutputReference | WorkflowAlertTriggerParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_condition: {
      value: cdktf.stringToHclTerraform(struct!.alertCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_condition_label: {
      value: cdktf.stringToHclTerraform(struct!.alertConditionLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_condition_label_use_regexp: {
      value: cdktf.booleanToHclTerraform(struct!.alertConditionLabelUseRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alert_condition_payload: {
      value: cdktf.stringToHclTerraform(struct!.alertConditionPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_condition_payload_use_regexp: {
      value: cdktf.booleanToHclTerraform(struct!.alertConditionPayloadUseRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alert_condition_source: {
      value: cdktf.stringToHclTerraform(struct!.alertConditionSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_condition_source_use_regexp: {
      value: cdktf.booleanToHclTerraform(struct!.alertConditionSourceUseRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alert_condition_status: {
      value: cdktf.stringToHclTerraform(struct!.alertConditionStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_condition_status_use_regexp: {
      value: cdktf.booleanToHclTerraform(struct!.alertConditionStatusUseRegexp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alert_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alertLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    alert_payload: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alertPayload),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    alert_query_payload: {
      value: cdktf.stringToHclTerraform(struct!.alertQueryPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alert_sources: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alertSources),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    alert_statuses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alertStatuses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    trigger_type: {
      value: cdktf.stringToHclTerraform(struct!.triggerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    triggers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.triggers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowAlertTriggerParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowAlertTriggerParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertCondition = this._alertCondition;
    }
    if (this._alertConditionLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertConditionLabel = this._alertConditionLabel;
    }
    if (this._alertConditionLabelUseRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertConditionLabelUseRegexp = this._alertConditionLabelUseRegexp;
    }
    if (this._alertConditionPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertConditionPayload = this._alertConditionPayload;
    }
    if (this._alertConditionPayloadUseRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertConditionPayloadUseRegexp = this._alertConditionPayloadUseRegexp;
    }
    if (this._alertConditionSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertConditionSource = this._alertConditionSource;
    }
    if (this._alertConditionSourceUseRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertConditionSourceUseRegexp = this._alertConditionSourceUseRegexp;
    }
    if (this._alertConditionStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertConditionStatus = this._alertConditionStatus;
    }
    if (this._alertConditionStatusUseRegexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertConditionStatusUseRegexp = this._alertConditionStatusUseRegexp;
    }
    if (this._alertLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertLabels = this._alertLabels;
    }
    if (this._alertPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertPayload = this._alertPayload;
    }
    if (this._alertQueryPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertQueryPayload = this._alertQueryPayload;
    }
    if (this._alertSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertSources = this._alertSources;
    }
    if (this._alertStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertStatuses = this._alertStatuses;
    }
    if (this._triggerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerType = this._triggerType;
    }
    if (this._triggers !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggers = this._triggers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowAlertTriggerParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertCondition = undefined;
      this._alertConditionLabel = undefined;
      this._alertConditionLabelUseRegexp = undefined;
      this._alertConditionPayload = undefined;
      this._alertConditionPayloadUseRegexp = undefined;
      this._alertConditionSource = undefined;
      this._alertConditionSourceUseRegexp = undefined;
      this._alertConditionStatus = undefined;
      this._alertConditionStatusUseRegexp = undefined;
      this._alertLabels = undefined;
      this._alertPayload = undefined;
      this._alertQueryPayload = undefined;
      this._alertSources = undefined;
      this._alertStatuses = undefined;
      this._triggerType = undefined;
      this._triggers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertCondition = value.alertCondition;
      this._alertConditionLabel = value.alertConditionLabel;
      this._alertConditionLabelUseRegexp = value.alertConditionLabelUseRegexp;
      this._alertConditionPayload = value.alertConditionPayload;
      this._alertConditionPayloadUseRegexp = value.alertConditionPayloadUseRegexp;
      this._alertConditionSource = value.alertConditionSource;
      this._alertConditionSourceUseRegexp = value.alertConditionSourceUseRegexp;
      this._alertConditionStatus = value.alertConditionStatus;
      this._alertConditionStatusUseRegexp = value.alertConditionStatusUseRegexp;
      this._alertLabels = value.alertLabels;
      this._alertPayload = value.alertPayload;
      this._alertQueryPayload = value.alertQueryPayload;
      this._alertSources = value.alertSources;
      this._alertStatuses = value.alertStatuses;
      this._triggerType = value.triggerType;
      this._triggers = value.triggers;
    }
  }

  // alert_condition - computed: false, optional: true, required: false
  private _alertCondition?: string; 
  public get alertCondition() {
    return this.getStringAttribute('alert_condition');
  }
  public set alertCondition(value: string) {
    this._alertCondition = value;
  }
  public resetAlertCondition() {
    this._alertCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConditionInput() {
    return this._alertCondition;
  }

  // alert_condition_label - computed: false, optional: true, required: false
  private _alertConditionLabel?: string; 
  public get alertConditionLabel() {
    return this.getStringAttribute('alert_condition_label');
  }
  public set alertConditionLabel(value: string) {
    this._alertConditionLabel = value;
  }
  public resetAlertConditionLabel() {
    this._alertConditionLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConditionLabelInput() {
    return this._alertConditionLabel;
  }

  // alert_condition_label_use_regexp - computed: true, optional: true, required: false
  private _alertConditionLabelUseRegexp?: boolean | cdktf.IResolvable; 
  public get alertConditionLabelUseRegexp() {
    return this.getBooleanAttribute('alert_condition_label_use_regexp');
  }
  public set alertConditionLabelUseRegexp(value: boolean | cdktf.IResolvable) {
    this._alertConditionLabelUseRegexp = value;
  }
  public resetAlertConditionLabelUseRegexp() {
    this._alertConditionLabelUseRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConditionLabelUseRegexpInput() {
    return this._alertConditionLabelUseRegexp;
  }

  // alert_condition_payload - computed: false, optional: true, required: false
  private _alertConditionPayload?: string; 
  public get alertConditionPayload() {
    return this.getStringAttribute('alert_condition_payload');
  }
  public set alertConditionPayload(value: string) {
    this._alertConditionPayload = value;
  }
  public resetAlertConditionPayload() {
    this._alertConditionPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConditionPayloadInput() {
    return this._alertConditionPayload;
  }

  // alert_condition_payload_use_regexp - computed: true, optional: true, required: false
  private _alertConditionPayloadUseRegexp?: boolean | cdktf.IResolvable; 
  public get alertConditionPayloadUseRegexp() {
    return this.getBooleanAttribute('alert_condition_payload_use_regexp');
  }
  public set alertConditionPayloadUseRegexp(value: boolean | cdktf.IResolvable) {
    this._alertConditionPayloadUseRegexp = value;
  }
  public resetAlertConditionPayloadUseRegexp() {
    this._alertConditionPayloadUseRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConditionPayloadUseRegexpInput() {
    return this._alertConditionPayloadUseRegexp;
  }

  // alert_condition_source - computed: false, optional: true, required: false
  private _alertConditionSource?: string; 
  public get alertConditionSource() {
    return this.getStringAttribute('alert_condition_source');
  }
  public set alertConditionSource(value: string) {
    this._alertConditionSource = value;
  }
  public resetAlertConditionSource() {
    this._alertConditionSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConditionSourceInput() {
    return this._alertConditionSource;
  }

  // alert_condition_source_use_regexp - computed: true, optional: true, required: false
  private _alertConditionSourceUseRegexp?: boolean | cdktf.IResolvable; 
  public get alertConditionSourceUseRegexp() {
    return this.getBooleanAttribute('alert_condition_source_use_regexp');
  }
  public set alertConditionSourceUseRegexp(value: boolean | cdktf.IResolvable) {
    this._alertConditionSourceUseRegexp = value;
  }
  public resetAlertConditionSourceUseRegexp() {
    this._alertConditionSourceUseRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConditionSourceUseRegexpInput() {
    return this._alertConditionSourceUseRegexp;
  }

  // alert_condition_status - computed: false, optional: true, required: false
  private _alertConditionStatus?: string; 
  public get alertConditionStatus() {
    return this.getStringAttribute('alert_condition_status');
  }
  public set alertConditionStatus(value: string) {
    this._alertConditionStatus = value;
  }
  public resetAlertConditionStatus() {
    this._alertConditionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConditionStatusInput() {
    return this._alertConditionStatus;
  }

  // alert_condition_status_use_regexp - computed: true, optional: true, required: false
  private _alertConditionStatusUseRegexp?: boolean | cdktf.IResolvable; 
  public get alertConditionStatusUseRegexp() {
    return this.getBooleanAttribute('alert_condition_status_use_regexp');
  }
  public set alertConditionStatusUseRegexp(value: boolean | cdktf.IResolvable) {
    this._alertConditionStatusUseRegexp = value;
  }
  public resetAlertConditionStatusUseRegexp() {
    this._alertConditionStatusUseRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertConditionStatusUseRegexpInput() {
    return this._alertConditionStatusUseRegexp;
  }

  // alert_labels - computed: true, optional: true, required: false
  private _alertLabels?: string[]; 
  public get alertLabels() {
    return this.getListAttribute('alert_labels');
  }
  public set alertLabels(value: string[]) {
    this._alertLabels = value;
  }
  public resetAlertLabels() {
    this._alertLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertLabelsInput() {
    return this._alertLabels;
  }

  // alert_payload - computed: true, optional: true, required: false
  private _alertPayload?: string[]; 
  public get alertPayload() {
    return this.getListAttribute('alert_payload');
  }
  public set alertPayload(value: string[]) {
    this._alertPayload = value;
  }
  public resetAlertPayload() {
    this._alertPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertPayloadInput() {
    return this._alertPayload;
  }

  // alert_query_payload - computed: true, optional: true, required: false
  private _alertQueryPayload?: string; 
  public get alertQueryPayload() {
    return this.getStringAttribute('alert_query_payload');
  }
  public set alertQueryPayload(value: string) {
    this._alertQueryPayload = value;
  }
  public resetAlertQueryPayload() {
    this._alertQueryPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertQueryPayloadInput() {
    return this._alertQueryPayload;
  }

  // alert_sources - computed: true, optional: true, required: false
  private _alertSources?: string[]; 
  public get alertSources() {
    return this.getListAttribute('alert_sources');
  }
  public set alertSources(value: string[]) {
    this._alertSources = value;
  }
  public resetAlertSources() {
    this._alertSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertSourcesInput() {
    return this._alertSources;
  }

  // alert_statuses - computed: true, optional: true, required: false
  private _alertStatuses?: string[]; 
  public get alertStatuses() {
    return this.getListAttribute('alert_statuses');
  }
  public set alertStatuses(value: string[]) {
    this._alertStatuses = value;
  }
  public resetAlertStatuses() {
    this._alertStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertStatusesInput() {
    return this._alertStatuses;
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

  // triggers - computed: true, optional: true, required: false
  private _triggers?: string[]; 
  public get triggers() {
    return this.getListAttribute('triggers');
  }
  public set triggers(value: string[]) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert rootly_workflow_alert}
*/
export class WorkflowAlert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_alert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowAlert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowAlert to import
  * @param importFromId The id of the existing WorkflowAlert that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowAlert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_alert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.7/docs/resources/workflow_alert rootly_workflow_alert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowAlertConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowAlertConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_alert',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.7',
        providerVersionConstraint: '4.3.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._causeIds = config.causeIds;
    this._command = config.command;
    this._commandFeedbackEnabled = config.commandFeedbackEnabled;
    this._continuouslyRepeat = config.continuouslyRepeat;
    this._description = config.description;
    this._enabled = config.enabled;
    this._environmentIds = config.environmentIds;
    this._functionalityIds = config.functionalityIds;
    this._groupIds = config.groupIds;
    this._id = config.id;
    this._incidentRoleIds = config.incidentRoleIds;
    this._incidentTypeIds = config.incidentTypeIds;
    this._locked = config.locked;
    this._name = config.name;
    this._position = config.position;
    this._repeatConditionDurationSinceFirstRun = config.repeatConditionDurationSinceFirstRun;
    this._repeatConditionNumberOfRepeats = config.repeatConditionNumberOfRepeats;
    this._repeatEveryDuration = config.repeatEveryDuration;
    this._repeatOn = config.repeatOn;
    this._serviceIds = config.serviceIds;
    this._severityIds = config.severityIds;
    this._slug = config.slug;
    this._subStatusIds = config.subStatusIds;
    this._wait = config.wait;
    this._workflowGroupId = config.workflowGroupId;
    this._triggerParams.internalValue = config.triggerParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cause_ids - computed: true, optional: true, required: false
  private _causeIds?: string[]; 
  public get causeIds() {
    return this.getListAttribute('cause_ids');
  }
  public set causeIds(value: string[]) {
    this._causeIds = value;
  }
  public resetCauseIds() {
    this._causeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get causeIdsInput() {
    return this._causeIds;
  }

  // command - computed: true, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // command_feedback_enabled - computed: true, optional: true, required: false
  private _commandFeedbackEnabled?: boolean | cdktf.IResolvable; 
  public get commandFeedbackEnabled() {
    return this.getBooleanAttribute('command_feedback_enabled');
  }
  public set commandFeedbackEnabled(value: boolean | cdktf.IResolvable) {
    this._commandFeedbackEnabled = value;
  }
  public resetCommandFeedbackEnabled() {
    this._commandFeedbackEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandFeedbackEnabledInput() {
    return this._commandFeedbackEnabled;
  }

  // continuously_repeat - computed: true, optional: true, required: false
  private _continuouslyRepeat?: boolean | cdktf.IResolvable; 
  public get continuouslyRepeat() {
    return this.getBooleanAttribute('continuously_repeat');
  }
  public set continuouslyRepeat(value: boolean | cdktf.IResolvable) {
    this._continuouslyRepeat = value;
  }
  public resetContinuouslyRepeat() {
    this._continuouslyRepeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuouslyRepeatInput() {
    return this._continuouslyRepeat;
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

  // environment_ids - computed: true, optional: true, required: false
  private _environmentIds?: string[]; 
  public get environmentIds() {
    return this.getListAttribute('environment_ids');
  }
  public set environmentIds(value: string[]) {
    this._environmentIds = value;
  }
  public resetEnvironmentIds() {
    this._environmentIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdsInput() {
    return this._environmentIds;
  }

  // functionality_ids - computed: true, optional: true, required: false
  private _functionalityIds?: string[]; 
  public get functionalityIds() {
    return this.getListAttribute('functionality_ids');
  }
  public set functionalityIds(value: string[]) {
    this._functionalityIds = value;
  }
  public resetFunctionalityIds() {
    this._functionalityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionalityIdsInput() {
    return this._functionalityIds;
  }

  // group_ids - computed: true, optional: true, required: false
  private _groupIds?: string[]; 
  public get groupIds() {
    return this.getListAttribute('group_ids');
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
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

  // incident_role_ids - computed: true, optional: true, required: false
  private _incidentRoleIds?: string[]; 
  public get incidentRoleIds() {
    return this.getListAttribute('incident_role_ids');
  }
  public set incidentRoleIds(value: string[]) {
    this._incidentRoleIds = value;
  }
  public resetIncidentRoleIds() {
    this._incidentRoleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentRoleIdsInput() {
    return this._incidentRoleIds;
  }

  // incident_type_ids - computed: true, optional: true, required: false
  private _incidentTypeIds?: string[]; 
  public get incidentTypeIds() {
    return this.getListAttribute('incident_type_ids');
  }
  public set incidentTypeIds(value: string[]) {
    this._incidentTypeIds = value;
  }
  public resetIncidentTypeIds() {
    this._incidentTypeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentTypeIdsInput() {
    return this._incidentTypeIds;
  }

  // locked - computed: true, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
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

  // position - computed: true, optional: true, required: false
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // repeat_condition_duration_since_first_run - computed: true, optional: true, required: false
  private _repeatConditionDurationSinceFirstRun?: string; 
  public get repeatConditionDurationSinceFirstRun() {
    return this.getStringAttribute('repeat_condition_duration_since_first_run');
  }
  public set repeatConditionDurationSinceFirstRun(value: string) {
    this._repeatConditionDurationSinceFirstRun = value;
  }
  public resetRepeatConditionDurationSinceFirstRun() {
    this._repeatConditionDurationSinceFirstRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatConditionDurationSinceFirstRunInput() {
    return this._repeatConditionDurationSinceFirstRun;
  }

  // repeat_condition_number_of_repeats - computed: true, optional: true, required: false
  private _repeatConditionNumberOfRepeats?: number; 
  public get repeatConditionNumberOfRepeats() {
    return this.getNumberAttribute('repeat_condition_number_of_repeats');
  }
  public set repeatConditionNumberOfRepeats(value: number) {
    this._repeatConditionNumberOfRepeats = value;
  }
  public resetRepeatConditionNumberOfRepeats() {
    this._repeatConditionNumberOfRepeats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatConditionNumberOfRepeatsInput() {
    return this._repeatConditionNumberOfRepeats;
  }

  // repeat_every_duration - computed: true, optional: true, required: false
  private _repeatEveryDuration?: string; 
  public get repeatEveryDuration() {
    return this.getStringAttribute('repeat_every_duration');
  }
  public set repeatEveryDuration(value: string) {
    this._repeatEveryDuration = value;
  }
  public resetRepeatEveryDuration() {
    this._repeatEveryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatEveryDurationInput() {
    return this._repeatEveryDuration;
  }

  // repeat_on - computed: true, optional: true, required: false
  private _repeatOn?: string[]; 
  public get repeatOn() {
    return this.getListAttribute('repeat_on');
  }
  public set repeatOn(value: string[]) {
    this._repeatOn = value;
  }
  public resetRepeatOn() {
    this._repeatOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatOnInput() {
    return this._repeatOn;
  }

  // service_ids - computed: true, optional: true, required: false
  private _serviceIds?: string[]; 
  public get serviceIds() {
    return this.getListAttribute('service_ids');
  }
  public set serviceIds(value: string[]) {
    this._serviceIds = value;
  }
  public resetServiceIds() {
    this._serviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdsInput() {
    return this._serviceIds;
  }

  // severity_ids - computed: true, optional: true, required: false
  private _severityIds?: string[]; 
  public get severityIds() {
    return this.getListAttribute('severity_ids');
  }
  public set severityIds(value: string[]) {
    this._severityIds = value;
  }
  public resetSeverityIds() {
    this._severityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityIdsInput() {
    return this._severityIds;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // sub_status_ids - computed: true, optional: true, required: false
  private _subStatusIds?: string[]; 
  public get subStatusIds() {
    return this.getListAttribute('sub_status_ids');
  }
  public set subStatusIds(value: string[]) {
    this._subStatusIds = value;
  }
  public resetSubStatusIds() {
    this._subStatusIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subStatusIdsInput() {
    return this._subStatusIds;
  }

  // wait - computed: true, optional: true, required: false
  private _wait?: string; 
  public get wait() {
    return this.getStringAttribute('wait');
  }
  public set wait(value: string) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }

  // workflow_group_id - computed: true, optional: true, required: false
  private _workflowGroupId?: string; 
  public get workflowGroupId() {
    return this.getStringAttribute('workflow_group_id');
  }
  public set workflowGroupId(value: string) {
    this._workflowGroupId = value;
  }
  public resetWorkflowGroupId() {
    this._workflowGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowGroupIdInput() {
    return this._workflowGroupId;
  }

  // trigger_params - computed: false, optional: true, required: false
  private _triggerParams = new WorkflowAlertTriggerParamsOutputReference(this, "trigger_params");
  public get triggerParams() {
    return this._triggerParams;
  }
  public putTriggerParams(value: WorkflowAlertTriggerParams) {
    this._triggerParams.internalValue = value;
  }
  public resetTriggerParams() {
    this._triggerParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerParamsInput() {
    return this._triggerParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cause_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._causeIds),
      command: cdktf.stringToTerraform(this._command),
      command_feedback_enabled: cdktf.booleanToTerraform(this._commandFeedbackEnabled),
      continuously_repeat: cdktf.booleanToTerraform(this._continuouslyRepeat),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      environment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._environmentIds),
      functionality_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._functionalityIds),
      group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groupIds),
      id: cdktf.stringToTerraform(this._id),
      incident_role_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._incidentRoleIds),
      incident_type_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._incidentTypeIds),
      locked: cdktf.booleanToTerraform(this._locked),
      name: cdktf.stringToTerraform(this._name),
      position: cdktf.numberToTerraform(this._position),
      repeat_condition_duration_since_first_run: cdktf.stringToTerraform(this._repeatConditionDurationSinceFirstRun),
      repeat_condition_number_of_repeats: cdktf.numberToTerraform(this._repeatConditionNumberOfRepeats),
      repeat_every_duration: cdktf.stringToTerraform(this._repeatEveryDuration),
      repeat_on: cdktf.listMapper(cdktf.stringToTerraform, false)(this._repeatOn),
      service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serviceIds),
      severity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._severityIds),
      slug: cdktf.stringToTerraform(this._slug),
      sub_status_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subStatusIds),
      wait: cdktf.stringToTerraform(this._wait),
      workflow_group_id: cdktf.stringToTerraform(this._workflowGroupId),
      trigger_params: workflowAlertTriggerParamsToTerraform(this._triggerParams.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cause_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._causeIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      command: {
        value: cdktf.stringToHclTerraform(this._command),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command_feedback_enabled: {
        value: cdktf.booleanToHclTerraform(this._commandFeedbackEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      continuously_repeat: {
        value: cdktf.booleanToHclTerraform(this._continuouslyRepeat),
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
      environment_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._environmentIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      functionality_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._functionalityIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      incident_role_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._incidentRoleIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      incident_type_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._incidentTypeIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      locked: {
        value: cdktf.booleanToHclTerraform(this._locked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      repeat_condition_duration_since_first_run: {
        value: cdktf.stringToHclTerraform(this._repeatConditionDurationSinceFirstRun),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repeat_condition_number_of_repeats: {
        value: cdktf.numberToHclTerraform(this._repeatConditionNumberOfRepeats),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      repeat_every_duration: {
        value: cdktf.stringToHclTerraform(this._repeatEveryDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repeat_on: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._repeatOn),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      service_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serviceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      severity_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._severityIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_status_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subStatusIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      wait: {
        value: cdktf.stringToHclTerraform(this._wait),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workflow_group_id: {
        value: cdktf.stringToHclTerraform(this._workflowGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_params: {
        value: workflowAlertTriggerParamsToHclTerraform(this._triggerParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowAlertTriggerParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
