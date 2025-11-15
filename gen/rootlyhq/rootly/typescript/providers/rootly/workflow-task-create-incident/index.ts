// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_create_incident
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskCreateIncidentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_create_incident#enabled WorkflowTaskCreateIncident#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_create_incident#id WorkflowTaskCreateIncident#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_create_incident#name WorkflowTaskCreateIncident#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_create_incident#position WorkflowTaskCreateIncident#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_create_incident#skip_on_failure WorkflowTaskCreateIncident#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_create_incident#workflow_id WorkflowTaskCreateIncident#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_create_incident#task_params WorkflowTaskCreateIncident#task_params}
  */
  readonly taskParams: WorkflowTaskCreateIncidentTaskParams;
}
export interface WorkflowTaskCreateIncidentTaskParams {
  /**
  * Custom field mappings. Can contain liquid markup and need to be valid JSON. Use 'services', 'functionalities', or 'groups' keys with arrays of names/slugs for name/slug lookup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_create_incident#custom_fields_mapping WorkflowTaskCreateIncident#custom_fields_mapping}
  */
  readonly customFieldsMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_create_incident#environment_ids WorkflowTaskCreateIncident#environment_ids}
  */
  readonly environmentIds?: string[];
  /**
  * Array of functionality UUIDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_create_incident#functionality_ids WorkflowTaskCreateIncident#functionality_ids}
  */
  readonly functionalityIds?: string[];
  /**
  * Array of group/team UUIDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_create_incident#group_ids WorkflowTaskCreateIncident#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_create_incident#incident_type_ids WorkflowTaskCreateIncident#incident_type_ids}
  */
  readonly incidentTypeIds?: string[];
  /**
  * Value must be one of true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_create_incident#private WorkflowTaskCreateIncident#private}
  */
  readonly private?: boolean | cdktf.IResolvable;
  /**
  * Array of service UUIDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_create_incident#service_ids WorkflowTaskCreateIncident#service_ids}
  */
  readonly serviceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_create_incident#severity_id WorkflowTaskCreateIncident#severity_id}
  */
  readonly severityId?: string;
  /**
  * The incident summary
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_create_incident#summary WorkflowTaskCreateIncident#summary}
  */
  readonly summary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_create_incident#task_type WorkflowTaskCreateIncident#task_type}
  */
  readonly taskType?: string;
  /**
  * The incident title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_create_incident#title WorkflowTaskCreateIncident#title}
  */
  readonly title: string;
}

export function workflowTaskCreateIncidentTaskParamsToTerraform(struct?: WorkflowTaskCreateIncidentTaskParamsOutputReference | WorkflowTaskCreateIncidentTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_fields_mapping: cdktf.stringToTerraform(struct!.customFieldsMapping),
    environment_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.environmentIds),
    functionality_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.functionalityIds),
    group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupIds),
    incident_type_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.incidentTypeIds),
    private: cdktf.booleanToTerraform(struct!.private),
    service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceIds),
    severity_id: cdktf.stringToTerraform(struct!.severityId),
    summary: cdktf.stringToTerraform(struct!.summary),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function workflowTaskCreateIncidentTaskParamsToHclTerraform(struct?: WorkflowTaskCreateIncidentTaskParamsOutputReference | WorkflowTaskCreateIncidentTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_fields_mapping: {
      value: cdktf.stringToHclTerraform(struct!.customFieldsMapping),
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
    incident_type_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.incidentTypeIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    private: {
      value: cdktf.booleanToHclTerraform(struct!.private),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class WorkflowTaskCreateIncidentTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskCreateIncidentTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customFieldsMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFieldsMapping = this._customFieldsMapping;
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
    if (this._incidentTypeIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentTypeIds = this._incidentTypeIds;
    }
    if (this._private !== undefined) {
      hasAnyValues = true;
      internalValueResult.private = this._private;
    }
    if (this._serviceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIds = this._serviceIds;
    }
    if (this._severityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.severityId = this._severityId;
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

  public set internalValue(value: WorkflowTaskCreateIncidentTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customFieldsMapping = undefined;
      this._environmentIds = undefined;
      this._functionalityIds = undefined;
      this._groupIds = undefined;
      this._incidentTypeIds = undefined;
      this._private = undefined;
      this._serviceIds = undefined;
      this._severityId = undefined;
      this._summary = undefined;
      this._taskType = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customFieldsMapping = value.customFieldsMapping;
      this._environmentIds = value.environmentIds;
      this._functionalityIds = value.functionalityIds;
      this._groupIds = value.groupIds;
      this._incidentTypeIds = value.incidentTypeIds;
      this._private = value.private;
      this._serviceIds = value.serviceIds;
      this._severityId = value.severityId;
      this._summary = value.summary;
      this._taskType = value.taskType;
      this._title = value.title;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_create_incident rootly_workflow_task_create_incident}
*/
export class WorkflowTaskCreateIncident extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_create_incident";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskCreateIncident resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskCreateIncident to import
  * @param importFromId The id of the existing WorkflowTaskCreateIncident that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_create_incident#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskCreateIncident to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_create_incident", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.8/docs/resources/workflow_task_create_incident rootly_workflow_task_create_incident} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskCreateIncidentConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskCreateIncidentConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_create_incident',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.8',
        providerVersionConstraint: '4.3.8'
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
  private _taskParams = new WorkflowTaskCreateIncidentTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskCreateIncidentTaskParams) {
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
      task_params: workflowTaskCreateIncidentTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskCreateIncidentTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskCreateIncidentTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
