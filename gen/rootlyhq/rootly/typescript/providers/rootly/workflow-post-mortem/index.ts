// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowPostMortemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#cause_ids WorkflowPostMortem#cause_ids}
  */
  readonly causeIds?: string[];
  /**
  * Workflow command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#command WorkflowPostMortem#command}
  */
  readonly command?: string;
  /**
  * This will notify you back when the workflow is starting. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#command_feedback_enabled WorkflowPostMortem#command_feedback_enabled}
  */
  readonly commandFeedbackEnabled?: boolean | cdktf.IResolvable;
  /**
  * When continuously repeat is true, repeat workflows aren't automatically stopped when conditions aren't met. This setting won't override your conditions set by repeat_condition_duration_since_first_run and repeat_condition_number_of_repeats parameters.. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#continuously_repeat WorkflowPostMortem#continuously_repeat}
  */
  readonly continuouslyRepeat?: boolean | cdktf.IResolvable;
  /**
  * The description of the workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#description WorkflowPostMortem#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#enabled WorkflowPostMortem#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#environment_ids WorkflowPostMortem#environment_ids}
  */
  readonly environmentIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#functionality_ids WorkflowPostMortem#functionality_ids}
  */
  readonly functionalityIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#group_ids WorkflowPostMortem#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#id WorkflowPostMortem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_role_ids WorkflowPostMortem#incident_role_ids}
  */
  readonly incidentRoleIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_type_ids WorkflowPostMortem#incident_type_ids}
  */
  readonly incidentTypeIds?: string[];
  /**
  * Restricts workflow edits to admins when turned on. Only admins can set this field.. Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#locked WorkflowPostMortem#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * The title of the workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#name WorkflowPostMortem#name}
  */
  readonly name: string;
  /**
  * The order which the workflow should run with other workflows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#position WorkflowPostMortem#position}
  */
  readonly position?: number;
  /**
  * The workflow will stop repeating if its runtime since it's first workflow run exceeds the duration set in this field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#repeat_condition_duration_since_first_run WorkflowPostMortem#repeat_condition_duration_since_first_run}
  */
  readonly repeatConditionDurationSinceFirstRun?: string;
  /**
  * The workflow will stop repeating if the number of repeats exceeds the value set in this field
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#repeat_condition_number_of_repeats WorkflowPostMortem#repeat_condition_number_of_repeats}
  */
  readonly repeatConditionNumberOfRepeats?: number;
  /**
  * Repeat workflow every duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#repeat_every_duration WorkflowPostMortem#repeat_every_duration}
  */
  readonly repeatEveryDuration?: string;
  /**
  * Repeat on weekdays. Value must be one of `S`, `M`, `T`, `W`, `R`, `F`, `U`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#repeat_on WorkflowPostMortem#repeat_on}
  */
  readonly repeatOn?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#service_ids WorkflowPostMortem#service_ids}
  */
  readonly serviceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#severity_ids WorkflowPostMortem#severity_ids}
  */
  readonly severityIds?: string[];
  /**
  * The slug of the workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#slug WorkflowPostMortem#slug}
  */
  readonly slug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#sub_status_ids WorkflowPostMortem#sub_status_ids}
  */
  readonly subStatusIds?: string[];
  /**
  * Wait this duration before executing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#wait WorkflowPostMortem#wait}
  */
  readonly wait?: string;
  /**
  * The group this workflow belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#workflow_group_id WorkflowPostMortem#workflow_group_id}
  */
  readonly workflowGroupId?: string;
  /**
  * trigger_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#trigger_params WorkflowPostMortem#trigger_params}
  */
  readonly triggerParams?: WorkflowPostMortemTriggerParams;
}
export interface WorkflowPostMortemTriggerParams {
  /**
  * Value must be one off `ALL`, `ANY`, `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_condition WorkflowPostMortem#incident_condition}
  */
  readonly incidentCondition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_condition_acknowledged_at WorkflowPostMortem#incident_condition_acknowledged_at}
  */
  readonly incidentConditionAcknowledgedAt?: string;
  /**
  * Value must be one off `IS`, `ANY`, `CONTAINS`, `CONTAINS_ALL`, `CONTAINS_NONE`, `NONE`, `SET`, `UNSET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_condition_cause WorkflowPostMortem#incident_condition_cause}
  */
  readonly incidentConditionCause?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_condition_detected_at WorkflowPostMortem#incident_condition_detected_at}
  */
  readonly incidentConditionDetectedAt?: string;
  /**
  * Value must be one off `IS`, `ANY`, `CONTAINS`, `CONTAINS_ALL`, `CONTAINS_NONE`, `NONE`, `SET`, `UNSET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_condition_environment WorkflowPostMortem#incident_condition_environment}
  */
  readonly incidentConditionEnvironment?: string;
  /**
  * Value must be one off `IS`, `ANY`, `CONTAINS`, `CONTAINS_ALL`, `CONTAINS_NONE`, `NONE`, `SET`, `UNSET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_condition_functionality WorkflowPostMortem#incident_condition_functionality}
  */
  readonly incidentConditionFunctionality?: string;
  /**
  * Value must be one off `IS`, `ANY`, `CONTAINS`, `CONTAINS_ALL`, `CONTAINS_NONE`, `NONE`, `SET`, `UNSET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_condition_group WorkflowPostMortem#incident_condition_group}
  */
  readonly incidentConditionGroup?: string;
  /**
  * Value must be one off `IS`, `ANY`, `CONTAINS`, `CONTAINS_ALL`, `CONTAINS_NONE`, `NONE`, `SET`, `UNSET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_condition_incident_roles WorkflowPostMortem#incident_condition_incident_roles}
  */
  readonly incidentConditionIncidentRoles?: string;
  /**
  * Value must be one off `IS`, `ANY`, `CONTAINS`, `CONTAINS_ALL`, `CONTAINS_NONE`, `NONE`, `SET`, `UNSET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_condition_incident_type WorkflowPostMortem#incident_condition_incident_type}
  */
  readonly incidentConditionIncidentType?: string;
  /**
  * Value must be one off `IS`, `ANY`, `CONTAINS`, `CONTAINS_ALL`, `CONTAINS_NONE`, `NONE`, `SET`, `UNSET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_condition_kind WorkflowPostMortem#incident_condition_kind}
  */
  readonly incidentConditionKind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_condition_mitigated_at WorkflowPostMortem#incident_condition_mitigated_at}
  */
  readonly incidentConditionMitigatedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_condition_resolved_at WorkflowPostMortem#incident_condition_resolved_at}
  */
  readonly incidentConditionResolvedAt?: string;
  /**
  * Value must be one off `IS`, `ANY`, `CONTAINS`, `CONTAINS_ALL`, `CONTAINS_NONE`, `NONE`, `SET`, `UNSET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_condition_service WorkflowPostMortem#incident_condition_service}
  */
  readonly incidentConditionService?: string;
  /**
  * Value must be one off `IS`, `ANY`, `CONTAINS`, `CONTAINS_ALL`, `CONTAINS_NONE`, `NONE`, `SET`, `UNSET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_condition_severity WorkflowPostMortem#incident_condition_severity}
  */
  readonly incidentConditionSeverity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_condition_started_at WorkflowPostMortem#incident_condition_started_at}
  */
  readonly incidentConditionStartedAt?: string;
  /**
  * Value must be one off `IS`, `ANY`, `CONTAINS`, `CONTAINS_ALL`, `CONTAINS_NONE`, `NONE`, `SET`, `UNSET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_condition_status WorkflowPostMortem#incident_condition_status}
  */
  readonly incidentConditionStatus?: string;
  /**
  * Value must be one off `IS`, `ANY`, `CONTAINS`, `CONTAINS_ALL`, `CONTAINS_NONE`, `NONE`, `SET`, `UNSET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_condition_sub_status WorkflowPostMortem#incident_condition_sub_status}
  */
  readonly incidentConditionSubStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_condition_summary WorkflowPostMortem#incident_condition_summary}
  */
  readonly incidentConditionSummary?: string;
  /**
  * Value must be one off `IS`, `ANY`, `CONTAINS`, `CONTAINS_ALL`, `CONTAINS_NONE`, `NONE`, `SET`, `UNSET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_condition_visibility WorkflowPostMortem#incident_condition_visibility}
  */
  readonly incidentConditionVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_conditional_inactivity WorkflowPostMortem#incident_conditional_inactivity}
  */
  readonly incidentConditionalInactivity?: string;
  /**
  * ex. 10 min, 1h, 3 days, 2 weeks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_inactivity_duration WorkflowPostMortem#incident_inactivity_duration}
  */
  readonly incidentInactivityDuration?: string;
  /**
  * Value must be one of `test`, `test_sub`, `example`, `example_sub`, `normal`, `normal_sub`, `backfilled`, `scheduled`, `scheduled_sub`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_kinds WorkflowPostMortem#incident_kinds}
  */
  readonly incidentKinds?: string[];
  /**
  * Value must be one off `ALL`, `ANY`, `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_post_mortem_condition WorkflowPostMortem#incident_post_mortem_condition}
  */
  readonly incidentPostMortemCondition?: string;
  /**
  * [DEPRECATED] Use incident_condition_cause instead. Value must be one off `IS`, `ANY`, `CONTAINS`, `CONTAINS_ALL`, `CONTAINS_NONE`, `NONE`, `SET`, `UNSET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_post_mortem_condition_cause WorkflowPostMortem#incident_post_mortem_condition_cause}
  */
  readonly incidentPostMortemConditionCause?: string;
  /**
  * Value must be one off `IS`, `ANY`, `CONTAINS`, `CONTAINS_ALL`, `CONTAINS_NONE`, `NONE`, `SET`, `UNSET`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_post_mortem_condition_status WorkflowPostMortem#incident_post_mortem_condition_status}
  */
  readonly incidentPostMortemConditionStatus?: string;
  /**
  * Value must be one of `draft`, `published`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_post_mortem_statuses WorkflowPostMortem#incident_post_mortem_statuses}
  */
  readonly incidentPostMortemStatuses?: string[];
  /**
  * Value must be one of `in_triage`, `started`, `detected`, `acknowledged`, `mitigated`, `resolved`, `closed`, `cancelled`, `scheduled`, `in_progress`, `completed`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_statuses WorkflowPostMortem#incident_statuses}
  */
  readonly incidentStatuses?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#incident_visibilities WorkflowPostMortem#incident_visibilities}
  */
  readonly incidentVisibilities?: string[];
  /**
  * Value must be one off `post_mortem`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#trigger_type WorkflowPostMortem#trigger_type}
  */
  readonly triggerType?: string;
  /**
  * Actions that trigger the workflow. One of custom_fields.<slug>.updated, post_mortem_created, post_mortem_updated, status_updated, slack_command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#triggers WorkflowPostMortem#triggers}
  */
  readonly triggers?: string[];
}

export function workflowPostMortemTriggerParamsToTerraform(struct?: WorkflowPostMortemTriggerParamsOutputReference | WorkflowPostMortemTriggerParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    incident_condition: cdktf.stringToTerraform(struct!.incidentCondition),
    incident_condition_acknowledged_at: cdktf.stringToTerraform(struct!.incidentConditionAcknowledgedAt),
    incident_condition_cause: cdktf.stringToTerraform(struct!.incidentConditionCause),
    incident_condition_detected_at: cdktf.stringToTerraform(struct!.incidentConditionDetectedAt),
    incident_condition_environment: cdktf.stringToTerraform(struct!.incidentConditionEnvironment),
    incident_condition_functionality: cdktf.stringToTerraform(struct!.incidentConditionFunctionality),
    incident_condition_group: cdktf.stringToTerraform(struct!.incidentConditionGroup),
    incident_condition_incident_roles: cdktf.stringToTerraform(struct!.incidentConditionIncidentRoles),
    incident_condition_incident_type: cdktf.stringToTerraform(struct!.incidentConditionIncidentType),
    incident_condition_kind: cdktf.stringToTerraform(struct!.incidentConditionKind),
    incident_condition_mitigated_at: cdktf.stringToTerraform(struct!.incidentConditionMitigatedAt),
    incident_condition_resolved_at: cdktf.stringToTerraform(struct!.incidentConditionResolvedAt),
    incident_condition_service: cdktf.stringToTerraform(struct!.incidentConditionService),
    incident_condition_severity: cdktf.stringToTerraform(struct!.incidentConditionSeverity),
    incident_condition_started_at: cdktf.stringToTerraform(struct!.incidentConditionStartedAt),
    incident_condition_status: cdktf.stringToTerraform(struct!.incidentConditionStatus),
    incident_condition_sub_status: cdktf.stringToTerraform(struct!.incidentConditionSubStatus),
    incident_condition_summary: cdktf.stringToTerraform(struct!.incidentConditionSummary),
    incident_condition_visibility: cdktf.stringToTerraform(struct!.incidentConditionVisibility),
    incident_conditional_inactivity: cdktf.stringToTerraform(struct!.incidentConditionalInactivity),
    incident_inactivity_duration: cdktf.stringToTerraform(struct!.incidentInactivityDuration),
    incident_kinds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.incidentKinds),
    incident_post_mortem_condition: cdktf.stringToTerraform(struct!.incidentPostMortemCondition),
    incident_post_mortem_condition_cause: cdktf.stringToTerraform(struct!.incidentPostMortemConditionCause),
    incident_post_mortem_condition_status: cdktf.stringToTerraform(struct!.incidentPostMortemConditionStatus),
    incident_post_mortem_statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.incidentPostMortemStatuses),
    incident_statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.incidentStatuses),
    incident_visibilities: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.incidentVisibilities),
    trigger_type: cdktf.stringToTerraform(struct!.triggerType),
    triggers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.triggers),
  }
}


export function workflowPostMortemTriggerParamsToHclTerraform(struct?: WorkflowPostMortemTriggerParamsOutputReference | WorkflowPostMortemTriggerParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    incident_condition: {
      value: cdktf.stringToHclTerraform(struct!.incidentCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_condition_acknowledged_at: {
      value: cdktf.stringToHclTerraform(struct!.incidentConditionAcknowledgedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_condition_cause: {
      value: cdktf.stringToHclTerraform(struct!.incidentConditionCause),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_condition_detected_at: {
      value: cdktf.stringToHclTerraform(struct!.incidentConditionDetectedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_condition_environment: {
      value: cdktf.stringToHclTerraform(struct!.incidentConditionEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_condition_functionality: {
      value: cdktf.stringToHclTerraform(struct!.incidentConditionFunctionality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_condition_group: {
      value: cdktf.stringToHclTerraform(struct!.incidentConditionGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_condition_incident_roles: {
      value: cdktf.stringToHclTerraform(struct!.incidentConditionIncidentRoles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_condition_incident_type: {
      value: cdktf.stringToHclTerraform(struct!.incidentConditionIncidentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_condition_kind: {
      value: cdktf.stringToHclTerraform(struct!.incidentConditionKind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_condition_mitigated_at: {
      value: cdktf.stringToHclTerraform(struct!.incidentConditionMitigatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_condition_resolved_at: {
      value: cdktf.stringToHclTerraform(struct!.incidentConditionResolvedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_condition_service: {
      value: cdktf.stringToHclTerraform(struct!.incidentConditionService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_condition_severity: {
      value: cdktf.stringToHclTerraform(struct!.incidentConditionSeverity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_condition_started_at: {
      value: cdktf.stringToHclTerraform(struct!.incidentConditionStartedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_condition_status: {
      value: cdktf.stringToHclTerraform(struct!.incidentConditionStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_condition_sub_status: {
      value: cdktf.stringToHclTerraform(struct!.incidentConditionSubStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_condition_summary: {
      value: cdktf.stringToHclTerraform(struct!.incidentConditionSummary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_condition_visibility: {
      value: cdktf.stringToHclTerraform(struct!.incidentConditionVisibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_conditional_inactivity: {
      value: cdktf.stringToHclTerraform(struct!.incidentConditionalInactivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_inactivity_duration: {
      value: cdktf.stringToHclTerraform(struct!.incidentInactivityDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_kinds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.incidentKinds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    incident_post_mortem_condition: {
      value: cdktf.stringToHclTerraform(struct!.incidentPostMortemCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_post_mortem_condition_cause: {
      value: cdktf.stringToHclTerraform(struct!.incidentPostMortemConditionCause),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_post_mortem_condition_status: {
      value: cdktf.stringToHclTerraform(struct!.incidentPostMortemConditionStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_post_mortem_statuses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.incidentPostMortemStatuses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    incident_statuses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.incidentStatuses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    incident_visibilities: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.incidentVisibilities),
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

export class WorkflowPostMortemTriggerParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowPostMortemTriggerParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._incidentCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentCondition = this._incidentCondition;
    }
    if (this._incidentConditionAcknowledgedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentConditionAcknowledgedAt = this._incidentConditionAcknowledgedAt;
    }
    if (this._incidentConditionCause !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentConditionCause = this._incidentConditionCause;
    }
    if (this._incidentConditionDetectedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentConditionDetectedAt = this._incidentConditionDetectedAt;
    }
    if (this._incidentConditionEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentConditionEnvironment = this._incidentConditionEnvironment;
    }
    if (this._incidentConditionFunctionality !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentConditionFunctionality = this._incidentConditionFunctionality;
    }
    if (this._incidentConditionGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentConditionGroup = this._incidentConditionGroup;
    }
    if (this._incidentConditionIncidentRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentConditionIncidentRoles = this._incidentConditionIncidentRoles;
    }
    if (this._incidentConditionIncidentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentConditionIncidentType = this._incidentConditionIncidentType;
    }
    if (this._incidentConditionKind !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentConditionKind = this._incidentConditionKind;
    }
    if (this._incidentConditionMitigatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentConditionMitigatedAt = this._incidentConditionMitigatedAt;
    }
    if (this._incidentConditionResolvedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentConditionResolvedAt = this._incidentConditionResolvedAt;
    }
    if (this._incidentConditionService !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentConditionService = this._incidentConditionService;
    }
    if (this._incidentConditionSeverity !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentConditionSeverity = this._incidentConditionSeverity;
    }
    if (this._incidentConditionStartedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentConditionStartedAt = this._incidentConditionStartedAt;
    }
    if (this._incidentConditionStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentConditionStatus = this._incidentConditionStatus;
    }
    if (this._incidentConditionSubStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentConditionSubStatus = this._incidentConditionSubStatus;
    }
    if (this._incidentConditionSummary !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentConditionSummary = this._incidentConditionSummary;
    }
    if (this._incidentConditionVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentConditionVisibility = this._incidentConditionVisibility;
    }
    if (this._incidentConditionalInactivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentConditionalInactivity = this._incidentConditionalInactivity;
    }
    if (this._incidentInactivityDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentInactivityDuration = this._incidentInactivityDuration;
    }
    if (this._incidentKinds !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentKinds = this._incidentKinds;
    }
    if (this._incidentPostMortemCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentPostMortemCondition = this._incidentPostMortemCondition;
    }
    if (this._incidentPostMortemConditionCause !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentPostMortemConditionCause = this._incidentPostMortemConditionCause;
    }
    if (this._incidentPostMortemConditionStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentPostMortemConditionStatus = this._incidentPostMortemConditionStatus;
    }
    if (this._incidentPostMortemStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentPostMortemStatuses = this._incidentPostMortemStatuses;
    }
    if (this._incidentStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentStatuses = this._incidentStatuses;
    }
    if (this._incidentVisibilities !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentVisibilities = this._incidentVisibilities;
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

  public set internalValue(value: WorkflowPostMortemTriggerParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._incidentCondition = undefined;
      this._incidentConditionAcknowledgedAt = undefined;
      this._incidentConditionCause = undefined;
      this._incidentConditionDetectedAt = undefined;
      this._incidentConditionEnvironment = undefined;
      this._incidentConditionFunctionality = undefined;
      this._incidentConditionGroup = undefined;
      this._incidentConditionIncidentRoles = undefined;
      this._incidentConditionIncidentType = undefined;
      this._incidentConditionKind = undefined;
      this._incidentConditionMitigatedAt = undefined;
      this._incidentConditionResolvedAt = undefined;
      this._incidentConditionService = undefined;
      this._incidentConditionSeverity = undefined;
      this._incidentConditionStartedAt = undefined;
      this._incidentConditionStatus = undefined;
      this._incidentConditionSubStatus = undefined;
      this._incidentConditionSummary = undefined;
      this._incidentConditionVisibility = undefined;
      this._incidentConditionalInactivity = undefined;
      this._incidentInactivityDuration = undefined;
      this._incidentKinds = undefined;
      this._incidentPostMortemCondition = undefined;
      this._incidentPostMortemConditionCause = undefined;
      this._incidentPostMortemConditionStatus = undefined;
      this._incidentPostMortemStatuses = undefined;
      this._incidentStatuses = undefined;
      this._incidentVisibilities = undefined;
      this._triggerType = undefined;
      this._triggers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._incidentCondition = value.incidentCondition;
      this._incidentConditionAcknowledgedAt = value.incidentConditionAcknowledgedAt;
      this._incidentConditionCause = value.incidentConditionCause;
      this._incidentConditionDetectedAt = value.incidentConditionDetectedAt;
      this._incidentConditionEnvironment = value.incidentConditionEnvironment;
      this._incidentConditionFunctionality = value.incidentConditionFunctionality;
      this._incidentConditionGroup = value.incidentConditionGroup;
      this._incidentConditionIncidentRoles = value.incidentConditionIncidentRoles;
      this._incidentConditionIncidentType = value.incidentConditionIncidentType;
      this._incidentConditionKind = value.incidentConditionKind;
      this._incidentConditionMitigatedAt = value.incidentConditionMitigatedAt;
      this._incidentConditionResolvedAt = value.incidentConditionResolvedAt;
      this._incidentConditionService = value.incidentConditionService;
      this._incidentConditionSeverity = value.incidentConditionSeverity;
      this._incidentConditionStartedAt = value.incidentConditionStartedAt;
      this._incidentConditionStatus = value.incidentConditionStatus;
      this._incidentConditionSubStatus = value.incidentConditionSubStatus;
      this._incidentConditionSummary = value.incidentConditionSummary;
      this._incidentConditionVisibility = value.incidentConditionVisibility;
      this._incidentConditionalInactivity = value.incidentConditionalInactivity;
      this._incidentInactivityDuration = value.incidentInactivityDuration;
      this._incidentKinds = value.incidentKinds;
      this._incidentPostMortemCondition = value.incidentPostMortemCondition;
      this._incidentPostMortemConditionCause = value.incidentPostMortemConditionCause;
      this._incidentPostMortemConditionStatus = value.incidentPostMortemConditionStatus;
      this._incidentPostMortemStatuses = value.incidentPostMortemStatuses;
      this._incidentStatuses = value.incidentStatuses;
      this._incidentVisibilities = value.incidentVisibilities;
      this._triggerType = value.triggerType;
      this._triggers = value.triggers;
    }
  }

  // incident_condition - computed: false, optional: true, required: false
  private _incidentCondition?: string; 
  public get incidentCondition() {
    return this.getStringAttribute('incident_condition');
  }
  public set incidentCondition(value: string) {
    this._incidentCondition = value;
  }
  public resetIncidentCondition() {
    this._incidentCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConditionInput() {
    return this._incidentCondition;
  }

  // incident_condition_acknowledged_at - computed: true, optional: true, required: false
  private _incidentConditionAcknowledgedAt?: string; 
  public get incidentConditionAcknowledgedAt() {
    return this.getStringAttribute('incident_condition_acknowledged_at');
  }
  public set incidentConditionAcknowledgedAt(value: string) {
    this._incidentConditionAcknowledgedAt = value;
  }
  public resetIncidentConditionAcknowledgedAt() {
    this._incidentConditionAcknowledgedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConditionAcknowledgedAtInput() {
    return this._incidentConditionAcknowledgedAt;
  }

  // incident_condition_cause - computed: false, optional: true, required: false
  private _incidentConditionCause?: string; 
  public get incidentConditionCause() {
    return this.getStringAttribute('incident_condition_cause');
  }
  public set incidentConditionCause(value: string) {
    this._incidentConditionCause = value;
  }
  public resetIncidentConditionCause() {
    this._incidentConditionCause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConditionCauseInput() {
    return this._incidentConditionCause;
  }

  // incident_condition_detected_at - computed: true, optional: true, required: false
  private _incidentConditionDetectedAt?: string; 
  public get incidentConditionDetectedAt() {
    return this.getStringAttribute('incident_condition_detected_at');
  }
  public set incidentConditionDetectedAt(value: string) {
    this._incidentConditionDetectedAt = value;
  }
  public resetIncidentConditionDetectedAt() {
    this._incidentConditionDetectedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConditionDetectedAtInput() {
    return this._incidentConditionDetectedAt;
  }

  // incident_condition_environment - computed: false, optional: true, required: false
  private _incidentConditionEnvironment?: string; 
  public get incidentConditionEnvironment() {
    return this.getStringAttribute('incident_condition_environment');
  }
  public set incidentConditionEnvironment(value: string) {
    this._incidentConditionEnvironment = value;
  }
  public resetIncidentConditionEnvironment() {
    this._incidentConditionEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConditionEnvironmentInput() {
    return this._incidentConditionEnvironment;
  }

  // incident_condition_functionality - computed: false, optional: true, required: false
  private _incidentConditionFunctionality?: string; 
  public get incidentConditionFunctionality() {
    return this.getStringAttribute('incident_condition_functionality');
  }
  public set incidentConditionFunctionality(value: string) {
    this._incidentConditionFunctionality = value;
  }
  public resetIncidentConditionFunctionality() {
    this._incidentConditionFunctionality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConditionFunctionalityInput() {
    return this._incidentConditionFunctionality;
  }

  // incident_condition_group - computed: false, optional: true, required: false
  private _incidentConditionGroup?: string; 
  public get incidentConditionGroup() {
    return this.getStringAttribute('incident_condition_group');
  }
  public set incidentConditionGroup(value: string) {
    this._incidentConditionGroup = value;
  }
  public resetIncidentConditionGroup() {
    this._incidentConditionGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConditionGroupInput() {
    return this._incidentConditionGroup;
  }

  // incident_condition_incident_roles - computed: false, optional: true, required: false
  private _incidentConditionIncidentRoles?: string; 
  public get incidentConditionIncidentRoles() {
    return this.getStringAttribute('incident_condition_incident_roles');
  }
  public set incidentConditionIncidentRoles(value: string) {
    this._incidentConditionIncidentRoles = value;
  }
  public resetIncidentConditionIncidentRoles() {
    this._incidentConditionIncidentRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConditionIncidentRolesInput() {
    return this._incidentConditionIncidentRoles;
  }

  // incident_condition_incident_type - computed: false, optional: true, required: false
  private _incidentConditionIncidentType?: string; 
  public get incidentConditionIncidentType() {
    return this.getStringAttribute('incident_condition_incident_type');
  }
  public set incidentConditionIncidentType(value: string) {
    this._incidentConditionIncidentType = value;
  }
  public resetIncidentConditionIncidentType() {
    this._incidentConditionIncidentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConditionIncidentTypeInput() {
    return this._incidentConditionIncidentType;
  }

  // incident_condition_kind - computed: false, optional: true, required: false
  private _incidentConditionKind?: string; 
  public get incidentConditionKind() {
    return this.getStringAttribute('incident_condition_kind');
  }
  public set incidentConditionKind(value: string) {
    this._incidentConditionKind = value;
  }
  public resetIncidentConditionKind() {
    this._incidentConditionKind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConditionKindInput() {
    return this._incidentConditionKind;
  }

  // incident_condition_mitigated_at - computed: true, optional: true, required: false
  private _incidentConditionMitigatedAt?: string; 
  public get incidentConditionMitigatedAt() {
    return this.getStringAttribute('incident_condition_mitigated_at');
  }
  public set incidentConditionMitigatedAt(value: string) {
    this._incidentConditionMitigatedAt = value;
  }
  public resetIncidentConditionMitigatedAt() {
    this._incidentConditionMitigatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConditionMitigatedAtInput() {
    return this._incidentConditionMitigatedAt;
  }

  // incident_condition_resolved_at - computed: true, optional: true, required: false
  private _incidentConditionResolvedAt?: string; 
  public get incidentConditionResolvedAt() {
    return this.getStringAttribute('incident_condition_resolved_at');
  }
  public set incidentConditionResolvedAt(value: string) {
    this._incidentConditionResolvedAt = value;
  }
  public resetIncidentConditionResolvedAt() {
    this._incidentConditionResolvedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConditionResolvedAtInput() {
    return this._incidentConditionResolvedAt;
  }

  // incident_condition_service - computed: false, optional: true, required: false
  private _incidentConditionService?: string; 
  public get incidentConditionService() {
    return this.getStringAttribute('incident_condition_service');
  }
  public set incidentConditionService(value: string) {
    this._incidentConditionService = value;
  }
  public resetIncidentConditionService() {
    this._incidentConditionService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConditionServiceInput() {
    return this._incidentConditionService;
  }

  // incident_condition_severity - computed: false, optional: true, required: false
  private _incidentConditionSeverity?: string; 
  public get incidentConditionSeverity() {
    return this.getStringAttribute('incident_condition_severity');
  }
  public set incidentConditionSeverity(value: string) {
    this._incidentConditionSeverity = value;
  }
  public resetIncidentConditionSeverity() {
    this._incidentConditionSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConditionSeverityInput() {
    return this._incidentConditionSeverity;
  }

  // incident_condition_started_at - computed: true, optional: true, required: false
  private _incidentConditionStartedAt?: string; 
  public get incidentConditionStartedAt() {
    return this.getStringAttribute('incident_condition_started_at');
  }
  public set incidentConditionStartedAt(value: string) {
    this._incidentConditionStartedAt = value;
  }
  public resetIncidentConditionStartedAt() {
    this._incidentConditionStartedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConditionStartedAtInput() {
    return this._incidentConditionStartedAt;
  }

  // incident_condition_status - computed: false, optional: true, required: false
  private _incidentConditionStatus?: string; 
  public get incidentConditionStatus() {
    return this.getStringAttribute('incident_condition_status');
  }
  public set incidentConditionStatus(value: string) {
    this._incidentConditionStatus = value;
  }
  public resetIncidentConditionStatus() {
    this._incidentConditionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConditionStatusInput() {
    return this._incidentConditionStatus;
  }

  // incident_condition_sub_status - computed: false, optional: true, required: false
  private _incidentConditionSubStatus?: string; 
  public get incidentConditionSubStatus() {
    return this.getStringAttribute('incident_condition_sub_status');
  }
  public set incidentConditionSubStatus(value: string) {
    this._incidentConditionSubStatus = value;
  }
  public resetIncidentConditionSubStatus() {
    this._incidentConditionSubStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConditionSubStatusInput() {
    return this._incidentConditionSubStatus;
  }

  // incident_condition_summary - computed: true, optional: true, required: false
  private _incidentConditionSummary?: string; 
  public get incidentConditionSummary() {
    return this.getStringAttribute('incident_condition_summary');
  }
  public set incidentConditionSummary(value: string) {
    this._incidentConditionSummary = value;
  }
  public resetIncidentConditionSummary() {
    this._incidentConditionSummary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConditionSummaryInput() {
    return this._incidentConditionSummary;
  }

  // incident_condition_visibility - computed: false, optional: true, required: false
  private _incidentConditionVisibility?: string; 
  public get incidentConditionVisibility() {
    return this.getStringAttribute('incident_condition_visibility');
  }
  public set incidentConditionVisibility(value: string) {
    this._incidentConditionVisibility = value;
  }
  public resetIncidentConditionVisibility() {
    this._incidentConditionVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConditionVisibilityInput() {
    return this._incidentConditionVisibility;
  }

  // incident_conditional_inactivity - computed: true, optional: true, required: false
  private _incidentConditionalInactivity?: string; 
  public get incidentConditionalInactivity() {
    return this.getStringAttribute('incident_conditional_inactivity');
  }
  public set incidentConditionalInactivity(value: string) {
    this._incidentConditionalInactivity = value;
  }
  public resetIncidentConditionalInactivity() {
    this._incidentConditionalInactivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentConditionalInactivityInput() {
    return this._incidentConditionalInactivity;
  }

  // incident_inactivity_duration - computed: true, optional: true, required: false
  private _incidentInactivityDuration?: string; 
  public get incidentInactivityDuration() {
    return this.getStringAttribute('incident_inactivity_duration');
  }
  public set incidentInactivityDuration(value: string) {
    this._incidentInactivityDuration = value;
  }
  public resetIncidentInactivityDuration() {
    this._incidentInactivityDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentInactivityDurationInput() {
    return this._incidentInactivityDuration;
  }

  // incident_kinds - computed: true, optional: true, required: false
  private _incidentKinds?: string[]; 
  public get incidentKinds() {
    return this.getListAttribute('incident_kinds');
  }
  public set incidentKinds(value: string[]) {
    this._incidentKinds = value;
  }
  public resetIncidentKinds() {
    this._incidentKinds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentKindsInput() {
    return this._incidentKinds;
  }

  // incident_post_mortem_condition - computed: false, optional: true, required: false
  private _incidentPostMortemCondition?: string; 
  public get incidentPostMortemCondition() {
    return this.getStringAttribute('incident_post_mortem_condition');
  }
  public set incidentPostMortemCondition(value: string) {
    this._incidentPostMortemCondition = value;
  }
  public resetIncidentPostMortemCondition() {
    this._incidentPostMortemCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentPostMortemConditionInput() {
    return this._incidentPostMortemCondition;
  }

  // incident_post_mortem_condition_cause - computed: false, optional: true, required: false
  private _incidentPostMortemConditionCause?: string; 
  public get incidentPostMortemConditionCause() {
    return this.getStringAttribute('incident_post_mortem_condition_cause');
  }
  public set incidentPostMortemConditionCause(value: string) {
    this._incidentPostMortemConditionCause = value;
  }
  public resetIncidentPostMortemConditionCause() {
    this._incidentPostMortemConditionCause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentPostMortemConditionCauseInput() {
    return this._incidentPostMortemConditionCause;
  }

  // incident_post_mortem_condition_status - computed: false, optional: true, required: false
  private _incidentPostMortemConditionStatus?: string; 
  public get incidentPostMortemConditionStatus() {
    return this.getStringAttribute('incident_post_mortem_condition_status');
  }
  public set incidentPostMortemConditionStatus(value: string) {
    this._incidentPostMortemConditionStatus = value;
  }
  public resetIncidentPostMortemConditionStatus() {
    this._incidentPostMortemConditionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentPostMortemConditionStatusInput() {
    return this._incidentPostMortemConditionStatus;
  }

  // incident_post_mortem_statuses - computed: true, optional: true, required: false
  private _incidentPostMortemStatuses?: string[]; 
  public get incidentPostMortemStatuses() {
    return this.getListAttribute('incident_post_mortem_statuses');
  }
  public set incidentPostMortemStatuses(value: string[]) {
    this._incidentPostMortemStatuses = value;
  }
  public resetIncidentPostMortemStatuses() {
    this._incidentPostMortemStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentPostMortemStatusesInput() {
    return this._incidentPostMortemStatuses;
  }

  // incident_statuses - computed: true, optional: true, required: false
  private _incidentStatuses?: string[]; 
  public get incidentStatuses() {
    return this.getListAttribute('incident_statuses');
  }
  public set incidentStatuses(value: string[]) {
    this._incidentStatuses = value;
  }
  public resetIncidentStatuses() {
    this._incidentStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentStatusesInput() {
    return this._incidentStatuses;
  }

  // incident_visibilities - computed: true, optional: true, required: false
  private _incidentVisibilities?: string[]; 
  public get incidentVisibilities() {
    return this.getListAttribute('incident_visibilities');
  }
  public set incidentVisibilities(value: string[]) {
    this._incidentVisibilities = value;
  }
  public resetIncidentVisibilities() {
    this._incidentVisibilities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentVisibilitiesInput() {
    return this._incidentVisibilities;
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
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem rootly_workflow_post_mortem}
*/
export class WorkflowPostMortem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_post_mortem";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowPostMortem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowPostMortem to import
  * @param importFromId The id of the existing WorkflowPostMortem that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowPostMortem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_post_mortem", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.10/docs/resources/workflow_post_mortem rootly_workflow_post_mortem} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowPostMortemConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowPostMortemConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_post_mortem',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.10',
        providerVersionConstraint: '4.3.10'
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
  private _triggerParams = new WorkflowPostMortemTriggerParamsOutputReference(this, "trigger_params");
  public get triggerParams() {
    return this._triggerParams;
  }
  public putTriggerParams(value: WorkflowPostMortemTriggerParams) {
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
      trigger_params: workflowPostMortemTriggerParamsToTerraform(this._triggerParams.internalValue),
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
        value: workflowPostMortemTriggerParamsToHclTerraform(this._triggerParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowPostMortemTriggerParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
