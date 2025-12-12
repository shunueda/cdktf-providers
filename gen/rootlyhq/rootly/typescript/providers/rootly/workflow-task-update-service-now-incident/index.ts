// https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_service_now_incident
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowTaskUpdateServiceNowIncidentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable this workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_service_now_incident#enabled WorkflowTaskUpdateServiceNowIncident#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_service_now_incident#id WorkflowTaskUpdateServiceNowIncident#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the workflow task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_service_now_incident#name WorkflowTaskUpdateServiceNowIncident#name}
  */
  readonly name?: string;
  /**
  * The position of the workflow task (1 being top of list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_service_now_incident#position WorkflowTaskUpdateServiceNowIncident#position}
  */
  readonly position?: number;
  /**
  * Skip workflow task if any failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_service_now_incident#skip_on_failure WorkflowTaskUpdateServiceNowIncident#skip_on_failure}
  */
  readonly skipOnFailure?: boolean | cdktf.IResolvable;
  /**
  * The ID of the parent workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_service_now_incident#workflow_id WorkflowTaskUpdateServiceNowIncident#workflow_id}
  */
  readonly workflowId: string;
  /**
  * task_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_service_now_incident#task_params WorkflowTaskUpdateServiceNowIncident#task_params}
  */
  readonly taskParams: WorkflowTaskUpdateServiceNowIncidentTaskParams;
}
export interface WorkflowTaskUpdateServiceNowIncidentTaskParams {
  /**
  * Map must contain two fields, `id` and `name`. The completion id and display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_service_now_incident#completion WorkflowTaskUpdateServiceNowIncident#completion}
  */
  readonly completion?: { [key: string]: string };
  /**
  * Custom field mappings. Can contain liquid markup and need to be valid JSON
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_service_now_incident#custom_fields_mapping WorkflowTaskUpdateServiceNowIncident#custom_fields_mapping}
  */
  readonly customFieldsMapping?: string;
  /**
  * The incident description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_service_now_incident#description WorkflowTaskUpdateServiceNowIncident#description}
  */
  readonly description?: string;
  /**
  * The incident id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_service_now_incident#incident_id WorkflowTaskUpdateServiceNowIncident#incident_id}
  */
  readonly incidentId: string;
  /**
  * Map must contain two fields, `id` and `name`. The priority id and display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_service_now_incident#priority WorkflowTaskUpdateServiceNowIncident#priority}
  */
  readonly priority?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_service_now_incident#task_type WorkflowTaskUpdateServiceNowIncident#task_type}
  */
  readonly taskType?: string;
  /**
  * The incident title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_service_now_incident#title WorkflowTaskUpdateServiceNowIncident#title}
  */
  readonly title?: string;
}

export function workflowTaskUpdateServiceNowIncidentTaskParamsToTerraform(struct?: WorkflowTaskUpdateServiceNowIncidentTaskParamsOutputReference | WorkflowTaskUpdateServiceNowIncidentTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    completion: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.completion),
    custom_fields_mapping: cdktf.stringToTerraform(struct!.customFieldsMapping),
    description: cdktf.stringToTerraform(struct!.description),
    incident_id: cdktf.stringToTerraform(struct!.incidentId),
    priority: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.priority),
    task_type: cdktf.stringToTerraform(struct!.taskType),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function workflowTaskUpdateServiceNowIncidentTaskParamsToHclTerraform(struct?: WorkflowTaskUpdateServiceNowIncidentTaskParamsOutputReference | WorkflowTaskUpdateServiceNowIncidentTaskParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    completion: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.completion),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    custom_fields_mapping: {
      value: cdktf.stringToHclTerraform(struct!.customFieldsMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incident_id: {
      value: cdktf.stringToHclTerraform(struct!.incidentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.priority),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class WorkflowTaskUpdateServiceNowIncidentTaskParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkflowTaskUpdateServiceNowIncidentTaskParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._completion !== undefined) {
      hasAnyValues = true;
      internalValueResult.completion = this._completion;
    }
    if (this._customFieldsMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFieldsMapping = this._customFieldsMapping;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._incidentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.incidentId = this._incidentId;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
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

  public set internalValue(value: WorkflowTaskUpdateServiceNowIncidentTaskParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._completion = undefined;
      this._customFieldsMapping = undefined;
      this._description = undefined;
      this._incidentId = undefined;
      this._priority = undefined;
      this._taskType = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._completion = value.completion;
      this._customFieldsMapping = value.customFieldsMapping;
      this._description = value.description;
      this._incidentId = value.incidentId;
      this._priority = value.priority;
      this._taskType = value.taskType;
      this._title = value.title;
    }
  }

  // completion - computed: false, optional: true, required: false
  private _completion?: { [key: string]: string }; 
  public get completion() {
    return this.getStringMapAttribute('completion');
  }
  public set completion(value: { [key: string]: string }) {
    this._completion = value;
  }
  public resetCompletion() {
    this._completion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completionInput() {
    return this._completion;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: { [key: string]: string }; 
  public get priority() {
    return this.getStringMapAttribute('priority');
  }
  public set priority(value: { [key: string]: string }) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
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
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_service_now_incident rootly_workflow_task_update_service_now_incident}
*/
export class WorkflowTaskUpdateServiceNowIncident extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_workflow_task_update_service_now_incident";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkflowTaskUpdateServiceNowIncident resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkflowTaskUpdateServiceNowIncident to import
  * @param importFromId The id of the existing WorkflowTaskUpdateServiceNowIncident that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_service_now_incident#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkflowTaskUpdateServiceNowIncident to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_workflow_task_update_service_now_incident", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.0.0/docs/resources/workflow_task_update_service_now_incident rootly_workflow_task_update_service_now_incident} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowTaskUpdateServiceNowIncidentConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowTaskUpdateServiceNowIncidentConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_workflow_task_update_service_now_incident',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.0.0',
        providerVersionConstraint: '5.0.0'
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
  private _taskParams = new WorkflowTaskUpdateServiceNowIncidentTaskParamsOutputReference(this, "task_params");
  public get taskParams() {
    return this._taskParams;
  }
  public putTaskParams(value: WorkflowTaskUpdateServiceNowIncidentTaskParams) {
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
      task_params: workflowTaskUpdateServiceNowIncidentTaskParamsToTerraform(this._taskParams.internalValue),
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
        value: workflowTaskUpdateServiceNowIncidentTaskParamsToHclTerraform(this._taskParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkflowTaskUpdateServiceNowIncidentTaskParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
