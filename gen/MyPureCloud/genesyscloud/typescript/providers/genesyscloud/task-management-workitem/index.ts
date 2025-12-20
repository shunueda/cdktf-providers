// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TaskManagementWorkitemConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the assignee of the Workitem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#assignee_id TaskManagementWorkitem#assignee_id}
  */
  readonly assigneeId?: string;
  /**
  * Set it to false to disable auto status transition. By default, it is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#auto_status_transition TaskManagementWorkitem#auto_status_transition}
  */
  readonly autoStatusTransition?: boolean | cdktf.IResolvable;
  /**
  * JSON formatted object for custom field values defined in the schema referenced by the worktype of the workitem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#custom_fields TaskManagementWorkitem#custom_fields}
  */
  readonly customFields?: string;
  /**
  * The due date of the Workitem. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#date_due TaskManagementWorkitem#date_due}
  */
  readonly dateDue?: string;
  /**
  * The expiry date of the Workitem. Date time is represented as an ISO-8601 string. For example: yyyy-MM-ddTHH:mm:ss[.mmm]Z
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#date_expires TaskManagementWorkitem#date_expires}
  */
  readonly dateExpires?: string;
  /**
  * The description of the Workitem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#description TaskManagementWorkitem#description}
  */
  readonly description?: string;
  /**
  * The estimated duration in seconds to complete the workitem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#duration_seconds TaskManagementWorkitem#duration_seconds}
  */
  readonly durationSeconds?: number;
  /**
  * The id of the external contact of the Workitem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#external_contact_id TaskManagementWorkitem#external_contact_id}
  */
  readonly externalContactId?: string;
  /**
  * The external tag of the Workitem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#external_tag TaskManagementWorkitem#external_tag}
  */
  readonly externalTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#id TaskManagementWorkitem#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The language of the Workitem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#language_id TaskManagementWorkitem#language_id}
  */
  readonly languageId?: string;
  /**
  * The name of the Workitem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#name TaskManagementWorkitem#name}
  */
  readonly name: string;
  /**
  * Ids of the preferred agents of the Workitem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#preferred_agents_ids TaskManagementWorkitem#preferred_agents_ids}
  */
  readonly preferredAgentsIds?: string[];
  /**
  * The priority of the Workitem. The valid range is between -25,000,000 and 25,000,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#priority TaskManagementWorkitem#priority}
  */
  readonly priority?: number;
  /**
  * The Workitem's queue id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#queue_id TaskManagementWorkitem#queue_id}
  */
  readonly queueId?: string;
  /**
  * The ids of skills of the Workitem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#skills_ids TaskManagementWorkitem#skills_ids}
  */
  readonly skillsIds?: string[];
  /**
  * The id of the current status of the Workitem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#status_id TaskManagementWorkitem#status_id}
  */
  readonly statusId?: string;
  /**
  * The time to live of the Workitem in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#ttl TaskManagementWorkitem#ttl}
  */
  readonly ttl?: number;
  /**
  * The id of the Workbin that contains the Workitem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#workbin_id TaskManagementWorkitem#workbin_id}
  */
  readonly workbinId?: string;
  /**
  * The Worktype ID of the Workitem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#worktype_id TaskManagementWorkitem#worktype_id}
  */
  readonly worktypeId: string;
  /**
  * scored_agents block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#scored_agents TaskManagementWorkitem#scored_agents}
  */
  readonly scoredAgents?: TaskManagementWorkitemScoredAgents[] | cdktf.IResolvable;
}
export interface TaskManagementWorkitemScoredAgents {
  /**
  * The agent id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#agent_id TaskManagementWorkitem#agent_id}
  */
  readonly agentId: string;
  /**
  * Agent's score for the workitem, from 0 - 100, higher being better
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#score TaskManagementWorkitem#score}
  */
  readonly score: number;
}

export function taskManagementWorkitemScoredAgentsToTerraform(struct?: TaskManagementWorkitemScoredAgents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_id: cdktf.stringToTerraform(struct!.agentId),
    score: cdktf.numberToTerraform(struct!.score),
  }
}


export function taskManagementWorkitemScoredAgentsToHclTerraform(struct?: TaskManagementWorkitemScoredAgents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_id: {
      value: cdktf.stringToHclTerraform(struct!.agentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    score: {
      value: cdktf.numberToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TaskManagementWorkitemScoredAgentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TaskManagementWorkitemScoredAgents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentId = this._agentId;
    }
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskManagementWorkitemScoredAgents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentId = undefined;
      this._score = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentId = value.agentId;
      this._score = value.score;
    }
  }

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // score - computed: false, optional: false, required: true
  private _score?: number; 
  public get score() {
    return this.getNumberAttribute('score');
  }
  public set score(value: number) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}

export class TaskManagementWorkitemScoredAgentsList extends cdktf.ComplexList {
  public internalValue? : TaskManagementWorkitemScoredAgents[] | cdktf.IResolvable

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
  public get(index: number): TaskManagementWorkitemScoredAgentsOutputReference {
    return new TaskManagementWorkitemScoredAgentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem genesyscloud_task_management_workitem}
*/
export class TaskManagementWorkitem extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_task_management_workitem";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TaskManagementWorkitem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TaskManagementWorkitem to import
  * @param importFromId The id of the existing TaskManagementWorkitem that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TaskManagementWorkitem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_task_management_workitem", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_workitem genesyscloud_task_management_workitem} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TaskManagementWorkitemConfig
  */
  public constructor(scope: Construct, id: string, config: TaskManagementWorkitemConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_task_management_workitem',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.73.0',
        providerVersionConstraint: '1.73.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assigneeId = config.assigneeId;
    this._autoStatusTransition = config.autoStatusTransition;
    this._customFields = config.customFields;
    this._dateDue = config.dateDue;
    this._dateExpires = config.dateExpires;
    this._description = config.description;
    this._durationSeconds = config.durationSeconds;
    this._externalContactId = config.externalContactId;
    this._externalTag = config.externalTag;
    this._id = config.id;
    this._languageId = config.languageId;
    this._name = config.name;
    this._preferredAgentsIds = config.preferredAgentsIds;
    this._priority = config.priority;
    this._queueId = config.queueId;
    this._skillsIds = config.skillsIds;
    this._statusId = config.statusId;
    this._ttl = config.ttl;
    this._workbinId = config.workbinId;
    this._worktypeId = config.worktypeId;
    this._scoredAgents.internalValue = config.scoredAgents;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignee_id - computed: false, optional: true, required: false
  private _assigneeId?: string; 
  public get assigneeId() {
    return this.getStringAttribute('assignee_id');
  }
  public set assigneeId(value: string) {
    this._assigneeId = value;
  }
  public resetAssigneeId() {
    this._assigneeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assigneeIdInput() {
    return this._assigneeId;
  }

  // auto_status_transition - computed: true, optional: true, required: false
  private _autoStatusTransition?: boolean | cdktf.IResolvable; 
  public get autoStatusTransition() {
    return this.getBooleanAttribute('auto_status_transition');
  }
  public set autoStatusTransition(value: boolean | cdktf.IResolvable) {
    this._autoStatusTransition = value;
  }
  public resetAutoStatusTransition() {
    this._autoStatusTransition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoStatusTransitionInput() {
    return this._autoStatusTransition;
  }

  // custom_fields - computed: true, optional: true, required: false
  private _customFields?: string; 
  public get customFields() {
    return this.getStringAttribute('custom_fields');
  }
  public set customFields(value: string) {
    this._customFields = value;
  }
  public resetCustomFields() {
    this._customFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFieldsInput() {
    return this._customFields;
  }

  // date_due - computed: true, optional: true, required: false
  private _dateDue?: string; 
  public get dateDue() {
    return this.getStringAttribute('date_due');
  }
  public set dateDue(value: string) {
    this._dateDue = value;
  }
  public resetDateDue() {
    this._dateDue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateDueInput() {
    return this._dateDue;
  }

  // date_expires - computed: true, optional: true, required: false
  private _dateExpires?: string; 
  public get dateExpires() {
    return this.getStringAttribute('date_expires');
  }
  public set dateExpires(value: string) {
    this._dateExpires = value;
  }
  public resetDateExpires() {
    this._dateExpires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateExpiresInput() {
    return this._dateExpires;
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

  // duration_seconds - computed: true, optional: true, required: false
  private _durationSeconds?: number; 
  public get durationSeconds() {
    return this.getNumberAttribute('duration_seconds');
  }
  public set durationSeconds(value: number) {
    this._durationSeconds = value;
  }
  public resetDurationSeconds() {
    this._durationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationSecondsInput() {
    return this._durationSeconds;
  }

  // external_contact_id - computed: false, optional: true, required: false
  private _externalContactId?: string; 
  public get externalContactId() {
    return this.getStringAttribute('external_contact_id');
  }
  public set externalContactId(value: string) {
    this._externalContactId = value;
  }
  public resetExternalContactId() {
    this._externalContactId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalContactIdInput() {
    return this._externalContactId;
  }

  // external_tag - computed: false, optional: true, required: false
  private _externalTag?: string; 
  public get externalTag() {
    return this.getStringAttribute('external_tag');
  }
  public set externalTag(value: string) {
    this._externalTag = value;
  }
  public resetExternalTag() {
    this._externalTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTagInput() {
    return this._externalTag;
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

  // language_id - computed: true, optional: true, required: false
  private _languageId?: string; 
  public get languageId() {
    return this.getStringAttribute('language_id');
  }
  public set languageId(value: string) {
    this._languageId = value;
  }
  public resetLanguageId() {
    this._languageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageIdInput() {
    return this._languageId;
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

  // preferred_agents_ids - computed: true, optional: true, required: false
  private _preferredAgentsIds?: string[]; 
  public get preferredAgentsIds() {
    return this.getListAttribute('preferred_agents_ids');
  }
  public set preferredAgentsIds(value: string[]) {
    this._preferredAgentsIds = value;
  }
  public resetPreferredAgentsIds() {
    this._preferredAgentsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredAgentsIdsInput() {
    return this._preferredAgentsIds;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // queue_id - computed: true, optional: true, required: false
  private _queueId?: string; 
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }
  public set queueId(value: string) {
    this._queueId = value;
  }
  public resetQueueId() {
    this._queueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueIdInput() {
    return this._queueId;
  }

  // skills_ids - computed: true, optional: true, required: false
  private _skillsIds?: string[]; 
  public get skillsIds() {
    return this.getListAttribute('skills_ids');
  }
  public set skillsIds(value: string[]) {
    this._skillsIds = value;
  }
  public resetSkillsIds() {
    this._skillsIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skillsIdsInput() {
    return this._skillsIds;
  }

  // status_id - computed: true, optional: true, required: false
  private _statusId?: string; 
  public get statusId() {
    return this.getStringAttribute('status_id');
  }
  public set statusId(value: string) {
    this._statusId = value;
  }
  public resetStatusId() {
    this._statusId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusIdInput() {
    return this._statusId;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // workbin_id - computed: true, optional: true, required: false
  private _workbinId?: string; 
  public get workbinId() {
    return this.getStringAttribute('workbin_id');
  }
  public set workbinId(value: string) {
    this._workbinId = value;
  }
  public resetWorkbinId() {
    this._workbinId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workbinIdInput() {
    return this._workbinId;
  }

  // worktype_id - computed: false, optional: false, required: true
  private _worktypeId?: string; 
  public get worktypeId() {
    return this.getStringAttribute('worktype_id');
  }
  public set worktypeId(value: string) {
    this._worktypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get worktypeIdInput() {
    return this._worktypeId;
  }

  // scored_agents - computed: false, optional: true, required: false
  private _scoredAgents = new TaskManagementWorkitemScoredAgentsList(this, "scored_agents", false);
  public get scoredAgents() {
    return this._scoredAgents;
  }
  public putScoredAgents(value: TaskManagementWorkitemScoredAgents[] | cdktf.IResolvable) {
    this._scoredAgents.internalValue = value;
  }
  public resetScoredAgents() {
    this._scoredAgents.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scoredAgentsInput() {
    return this._scoredAgents.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assignee_id: cdktf.stringToTerraform(this._assigneeId),
      auto_status_transition: cdktf.booleanToTerraform(this._autoStatusTransition),
      custom_fields: cdktf.stringToTerraform(this._customFields),
      date_due: cdktf.stringToTerraform(this._dateDue),
      date_expires: cdktf.stringToTerraform(this._dateExpires),
      description: cdktf.stringToTerraform(this._description),
      duration_seconds: cdktf.numberToTerraform(this._durationSeconds),
      external_contact_id: cdktf.stringToTerraform(this._externalContactId),
      external_tag: cdktf.stringToTerraform(this._externalTag),
      id: cdktf.stringToTerraform(this._id),
      language_id: cdktf.stringToTerraform(this._languageId),
      name: cdktf.stringToTerraform(this._name),
      preferred_agents_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredAgentsIds),
      priority: cdktf.numberToTerraform(this._priority),
      queue_id: cdktf.stringToTerraform(this._queueId),
      skills_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._skillsIds),
      status_id: cdktf.stringToTerraform(this._statusId),
      ttl: cdktf.numberToTerraform(this._ttl),
      workbin_id: cdktf.stringToTerraform(this._workbinId),
      worktype_id: cdktf.stringToTerraform(this._worktypeId),
      scored_agents: cdktf.listMapper(taskManagementWorkitemScoredAgentsToTerraform, true)(this._scoredAgents.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assignee_id: {
        value: cdktf.stringToHclTerraform(this._assigneeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_status_transition: {
        value: cdktf.booleanToHclTerraform(this._autoStatusTransition),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_fields: {
        value: cdktf.stringToHclTerraform(this._customFields),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      date_due: {
        value: cdktf.stringToHclTerraform(this._dateDue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      date_expires: {
        value: cdktf.stringToHclTerraform(this._dateExpires),
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
      duration_seconds: {
        value: cdktf.numberToHclTerraform(this._durationSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      external_contact_id: {
        value: cdktf.stringToHclTerraform(this._externalContactId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_tag: {
        value: cdktf.stringToHclTerraform(this._externalTag),
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
      language_id: {
        value: cdktf.stringToHclTerraform(this._languageId),
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
      preferred_agents_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredAgentsIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      queue_id: {
        value: cdktf.stringToHclTerraform(this._queueId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skills_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._skillsIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      status_id: {
        value: cdktf.stringToHclTerraform(this._statusId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      workbin_id: {
        value: cdktf.stringToHclTerraform(this._workbinId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worktype_id: {
        value: cdktf.stringToHclTerraform(this._worktypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scored_agents: {
        value: cdktf.listMapperHcl(taskManagementWorkitemScoredAgentsToHclTerraform, true)(this._scoredAgents.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TaskManagementWorkitemScoredAgentsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
