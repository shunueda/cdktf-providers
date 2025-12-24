// https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskUpdateIncidentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#enabled WorkflowTaskUpdateIncident#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#id WorkflowTaskUpdateIncident#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#name WorkflowTaskUpdateIncident#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#position WorkflowTaskUpdateIncident#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#skip_on_failure WorkflowTaskUpdateIncident#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#workflow_id WorkflowTaskUpdateIncident#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#task_params WorkflowTaskUpdateIncident#task_params}
  */
  readonly taskParams: WorkflowTaskUpdateIncidentTaskParams;
}
export interface WorkflowTaskUpdateIncidentTaskParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#acknowledged_at WorkflowTaskUpdateIncident#acknowledged_at}
  */
  readonly acknowledgedAt?: string;
  /**
  * Value must be one of `id`, `slug`, `sequential_id`, `pagerduty_incident_id`, `opsgenie_incident_id`, `victor_ops_incident_id`, `jira_issue_id`, `asana_task_id`, `shortcut_task_id`, `linear_issue_id`, `zendesk_ticket_id`, `motion_task_id`, `trello_card_id`, `airtable_record_id`, `shortcut_story_id`, `github_issue_id`, `gitlab_issue_id`, `freshservice_ticket_id`, `freshservice_task_id`, `clickup_task_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#attribute_to_query_by WorkflowTaskUpdateIncident#attribute_to_query_by}
  */
  readonly attributeToQueryBy?: string;
  /**
  * Custom field mappings. Can contain liquid markup and need to be valid JSON. Use 'services', 'functionalities', or 'groups' keys with arrays of names/slugs for name/slug lookup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#custom_fields_mapping WorkflowTaskUpdateIncident#custom_fields_mapping}
  */
  readonly customFieldsMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#detected_at WorkflowTaskUpdateIncident#detected_at}
  */
  readonly detectedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#environment_ids WorkflowTaskUpdateIncident#environment_ids}
  */
  readonly environmentIds?: string[];
  /**
  * Array of functionality UUIDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#functionality_ids WorkflowTaskUpdateIncident#functionality_ids}
  */
  readonly functionalityIds?: string[];
  /**
  * Array of group/team UUIDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#group_ids WorkflowTaskUpdateIncident#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * The incident id to update or id of any attribute on the incident
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#incident_id WorkflowTaskUpdateIncident#incident_id}
  */
  readonly incidentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#incident_type_ids WorkflowTaskUpdateIncident#incident_type_ids}
  */
  readonly incidentTypeIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#mitigated_at WorkflowTaskUpdateIncident#mitigated_at}
  */
  readonly mitigatedAt?: string;
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#private WorkflowTaskUpdateIncident#private}
  */
  readonly private?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#resolved_at WorkflowTaskUpdateIncident#resolved_at}
  */
  readonly resolvedAt?: string;
  /**
  * Array of service UUIDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#service_ids WorkflowTaskUpdateIncident#service_ids}
  */
  readonly serviceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#severity_id WorkflowTaskUpdateIncident#severity_id}
  */
  readonly severityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#started_at WorkflowTaskUpdateIncident#started_at}
  */
  readonly startedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#status WorkflowTaskUpdateIncident#status}
  */
  readonly status?: string;
  /**
  * The incident summary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#summary WorkflowTaskUpdateIncident#summary}
  */
  readonly summary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#task_type WorkflowTaskUpdateIncident#task_type}
  */
  readonly taskType?: string;
  /**
  * The incident title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#title WorkflowTaskUpdateIncident#title}
  */
  readonly title?: string;
}

export function workflowTaskUpdateIncidentTaskParamsToTerraform(struct?: WorkflowTaskUpdateIncidentTaskParamsOutputReference | WorkflowTaskUpdateIncidentTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acknowledged_at: cdktf.stringToTerraform(struct!.acknowledgedAt),
    attribute_to_query_by: cdktf.stringToTerraform(struct!.attributeToQueryBy),
    custom_fields_mapping: cdktf.stringToTerraform(struct!.customFieldsMapping),
    detected_at: cdktf.stringToTerraform(struct!.detectedAt),
    environment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environmentIds),
    functionality_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.functionalityIds),
    group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupIds),
    incident_id: cdktf.stringToTerraform(struct!.incidentId),
    incident_type_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.incidentTypeIds),
    mitigated_at: cdktf.stringToTerraform(struct!.mitigatedAt),
    private: cdktf.booleanToTerraform(struct!.private),
    resolved_at: cdktf.stringToTerraform(struct!.resolvedAt),
    service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceIds),
    severity_id: cdktf.stringToTerraform(struct!.severityId),
    started_at: cdktf.stringToTerraform(struct!.startedAt),
    status: cdktf.stringToTerraform(struct!.status),
    summary: cdktf.stringToTerraform(struct!.summary),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function workflowTaskUpdateIncidentTaskParamsToHclTerraform(struct?: WorkflowTaskUpdateIncidentTaskParamsOutputReference | WorkflowTaskUpdateIncidentTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acknowledged_at: {
      value: cdktf.stringToHclTerraform(struct!.acknowledgedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    attribute_to_query_by: {
      value: cdktf.stringToHclTerraform(struct!.attributeToQueryBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_fields_mapping: {
      value: cdktf.stringToHclTerraform(struct!.customFieldsMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    detected_at: {
      value: cdktf.stringToHclTerraform(struct!.detectedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.environmentIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    functionality_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.functionalityIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    incident_id: {
      value: cdktf.stringToHclTerraform(struct!.incidentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_type_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.incidentTypeIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mitigated_at: {
      value: cdktf.stringToHclTerraform(struct!.mitigatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private: {
      value: cdktf.booleanToHclTerraform(struct!.private),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resolved_at: {
      value: cdktf.stringToHclTerraform(struct!.resolvedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    severity_id: {
      value: cdktf.stringToHclTerraform(struct!.severityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    started_at: {
      value: cdktf.stringToHclTerraform(struct!.startedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary: {
      value: cdktf.stringToHclTerraform(struct!.summary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_type: {
      value: cdktf.stringToHclTerraform(struct!.taskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTaskUpdateIncidentTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskUpdateIncidentTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acknowledgedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.acknowledgedAt = this._acknowledgedAt;
    }
    if (this._attributeToQueryBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeToQueryBy = this._attributeToQueryBy;
    }
    if (this._customFieldsMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFieldsMapping = this._customFieldsMapping;
    }
    if (this._detectedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectedAt = this._detectedAt;
    }
    if (this._environmentIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentIds = this._environmentIds;
    }
    if (this._functionalityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionalityIds = this._functionalityIds;
    }
    if (this._groupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIds = this._groupIds;
    }
    if (this._incidentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentId = this._incidentId;
    }
    if (this._incidentTypeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentTypeIds = this._incidentTypeIds;
    }
    if (this._mitigatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.mitigatedAt = this._mitigatedAt;
    }
    if (this._private !== undefined) {
      hasAnyValues = true;
      internalValueResult.private = this._private;
    }
    if (this._resolvedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolvedAt = this._resolvedAt;
    }
    if (this._serviceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIds = this._serviceIds;
    }
    if (this._severityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityId = this._severityId;
    }
    if (this._startedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.startedAt = this._startedAt;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._summary !== undefined) {
      hasAnyValues = true;
      internalValueResult.summary = this._summary;
    }
    if (this._taskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskType = this._taskType;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTaskUpdateIncidentTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acknowledgedAt = undefined;
      this._attributeToQueryBy = undefined;
      this._customFieldsMapping = undefined;
      this._detectedAt = undefined;
      this._environmentIds = undefined;
      this._functionalityIds = undefined;
      this._groupIds = undefined;
      this._incidentId = undefined;
      this._incidentTypeIds = undefined;
      this._mitigatedAt = undefined;
      this._private = undefined;
      this._resolvedAt = undefined;
      this._serviceIds = undefined;
      this._severityId = undefined;
      this._startedAt = undefined;
      this._status = undefined;
      this._summary = undefined;
      this._taskType = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acknowledgedAt = value.acknowledgedAt;
      this._attributeToQueryBy = value.attributeToQueryBy;
      this._customFieldsMapping = value.customFieldsMapping;
      this._detectedAt = value.detectedAt;
      this._environmentIds = value.environmentIds;
      this._functionalityIds = value.functionalityIds;
      this._groupIds = value.groupIds;
      this._incidentId = value.incidentId;
      this._incidentTypeIds = value.incidentTypeIds;
      this._mitigatedAt = value.mitigatedAt;
      this._private = value.private;
      this._resolvedAt = value.resolvedAt;
      this._serviceIds = value.serviceIds;
      this._severityId = value.severityId;
      this._startedAt = value.startedAt;
      this._status = value.status;
      this._summary = value.summary;
      this._taskType = value.taskType;
      this._title = value.title;
    }
  }

  // acknowledged_at - computed: false, optional: true, required: false
  private _acknowledgedAt?: string; 
  public get acknowledgedAt() {
    return this.getStringAttribute('acknowledged_at');
  }
  public set acknowledgedAt(value: string) {
    this._acknowledgedAt = value;
  }
  public resetAcknowledgedAt() {
    this._acknowledgedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acknowledgedAtInput() {
    return this._acknowledgedAt;
  }

  // attribute_to_query_by - computed: false, optional: true, required: false
  private _attributeToQueryBy?: string; 
  public get attributeToQueryBy() {
    return this.getStringAttribute('attribute_to_query_by');
  }
  public set attributeToQueryBy(value: string) {
    this._attributeToQueryBy = value;
  }
  public resetAttributeToQueryBy() {
    this._attributeToQueryBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeToQueryByInput() {
    return this._attributeToQueryBy;
  }

  // custom_fields_mapping - computed: false, optional: true, required: false
  private _customFieldsMapping?: string; 
  public get customFieldsMapping() {
    return this.getStringAttribute('custom_fields_mapping');
  }
  public set customFieldsMapping(value: string) {
    this._customFieldsMapping = value;
  }
  public resetCustomFieldsMapping() {
    this._customFieldsMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsMappingInput() {
    return this._customFieldsMapping;
  }

  // detected_at - computed: false, optional: true, required: false
  private _detectedAt?: string; 
  public get detectedAt() {
    return this.getStringAttribute('detected_at');
  }
  public set detectedAt(value: string) {
    this._detectedAt = value;
  }
  public resetDetectedAt() {
    this._detectedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectedAtInput() {
    return this._detectedAt;
  }

  // environment_ids - computed: false, optional: true, required: false
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

  // functionality_ids - computed: false, optional: true, required: false
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

  // group_ids - computed: false, optional: true, required: false
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

  // incident_id - computed: false, optional: false, required: true
  private _incidentId?: string; 
  public get incidentId() {
    return this.getStringAttribute('incident_id');
  }
  public set incidentId(value: string) {
    this._incidentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get incidentIdInput() {
    return this._incidentId;
  }

  // incident_type_ids - computed: false, optional: true, required: false
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

  // mitigated_at - computed: false, optional: true, required: false
  private _mitigatedAt?: string; 
  public get mitigatedAt() {
    return this.getStringAttribute('mitigated_at');
  }
  public set mitigatedAt(value: string) {
    this._mitigatedAt = value;
  }
  public resetMitigatedAt() {
    this._mitigatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigatedAtInput() {
    return this._mitigatedAt;
  }

  // private - computed: false, optional: true, required: false
  private _private?: boolean | cdktf.IResolvable; 
  public get private() {
    return this.getBooleanAttribute('private');
  }
  public set private(value: boolean | cdktf.IResolvable) {
    this._private = value;
  }
  public resetPrivate() {
    this._private = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateInput() {
    return this._private;
  }

  // resolved_at - computed: false, optional: true, required: false
  private _resolvedAt?: string; 
  public get resolvedAt() {
    return this.getStringAttribute('resolved_at');
  }
  public set resolvedAt(value: string) {
    this._resolvedAt = value;
  }
  public resetResolvedAt() {
    this._resolvedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedAtInput() {
    return this._resolvedAt;
  }

  // service_ids - computed: false, optional: true, required: false
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

  // severity_id - computed: false, optional: true, required: false
  private _severityId?: string; 
  public get severityId() {
    return this.getStringAttribute('severity_id');
  }
  public set severityId(value: string) {
    this._severityId = value;
  }
  public resetSeverityId() {
    this._severityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityIdInput() {
    return this._severityId;
  }

  // started_at - computed: false, optional: true, required: false
  private _startedAt?: string; 
  public get startedAt() {
    return this.getStringAttribute('started_at');
  }
  public set startedAt(value: string) {
    this._startedAt = value;
  }
  public resetStartedAt() {
    this._startedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedAtInput() {
    return this._startedAt;
  }

  // status - computed: false, optional: true, required: false
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

  // summary - computed: false, optional: true, required: false
  private _summary?: string; 
  public get summary() {
    return this.getStringAttribute('summary');
  }
  public set summary(value: string) {
    this._summary = value;
  }
  public resetSummary() {
    this._summary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryInput() {
    return this._summary;
  }

  // task_type - computed: false, optional: true, required: false
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  public resetTaskType() {
    this._taskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident rootly_workflow_task_update_incident}
*/
export class WorkflowTaskUpdateIncident extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_update_incident";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskUpdateIncident resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskUpdateIncident to import
  * @param importFromId The id of the existing WorkflowTaskUpdateIncident that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskUpdateIncident to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_update_incident", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.2.1/docs/resources/workflow_task_update_incident rootly_workflow_task_update_incident} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskUpdateIncidentConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskUpdateIncidentConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_update_incident',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.2.1',
        providerVersionConstraint: '5.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._position = config.position;
    this._skipOnFailure = config.skipOnFailure;
    this._workflowId = config.workflowId;
    this._taskParams.internalValue = config.taskParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
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

  // skip_on_failure - computed: false, optional: true, required: false
  private _skipOnFailure?: boolean | cdktf.IResolvable; 
  public get skipOnFailure() {
    return this.getBooleanAttribute('skip_on_failure');
  }
  public set skipOnFailure(value: boolean | cdktf.IResolvable) {
    this._skipOnFailure = value;
  }
  public resetSkipOnFailure() {
    this._skipOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipOnFailureInput() {
    return this._skipOnFailure;
  }

  // workflow_id - computed: false, optional: false, required: true
  private _workflowId?: string; 
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
  public set workflowId(value: string) {
    this._workflowId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowIdInput() {
    return this._workflowId;
  }

  // task_params - computed: false, optional: false, required: true
  private _taskParams = new WorkflowTaskUpdateIncidentTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskUpdateIncidentTaskParams) {
    this._taskParams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskParamsInput() {
    return this._taskParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      position: cdktf.numberToTerraform(this._position),
      skip_on_failure: cdktf.booleanToTerraform(this._skipOnFailure),
      workflow_id: cdktf.stringToTerraform(this._workflowId),
      task_params: workflowTaskUpdateIncidentTaskParamsToTerraform(this._taskParams.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      position: {
        value: cdktf.numberToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skip_on_failure: {
        value: cdktf.booleanToHclTerraform(this._skipOnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      workflow_id: {
        value: cdktf.stringToHclTerraform(this._workflowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_params: {
        value: workflowTaskUpdateIncidentTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskUpdateIncidentTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
