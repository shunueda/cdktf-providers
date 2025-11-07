// https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/workflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkflowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Fixed Duration of access requests bound to this workflow. If fixed duration is provided, max duration must be empty. If neither max nor fixed duration are provided, requests that bind to this workflow will use the organization-level settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/workflow#access_request_fixed_duration Workflow#access_request_fixed_duration}
  */
  readonly accessRequestFixedDuration?: string;
  /**
  * Maximum Duration of access requests bound to this workflow. If max duration is provided, fixed duration must be empty. If neither max nor fixed duration are provided, requests that bind to this workflow will use the organization-level settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/workflow#access_request_max_duration Workflow#access_request_max_duration}
  */
  readonly accessRequestMaxDuration?: string;
  /**
  * AccessRules is a list of access rules defining the resources this Workflow provides access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/workflow#access_rules Workflow#access_rules}
  */
  readonly accessRules?: string;
  /**
  * Optional approval flow ID identifies an approval flow that linked to the workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/workflow#approval_flow_id Workflow#approval_flow_id}
  */
  readonly approvalFlowId?: string;
  /**
  * Optional auto grant setting to automatically approve requests or not, defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/workflow#auto_grant Workflow#auto_grant}
  */
  readonly autoGrant?: boolean | cdktf.IResolvable;
  /**
  * Optional description of the Workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/workflow#description Workflow#description}
  */
  readonly description?: string;
  /**
  * Optional enabled state for workflow. This setting may be overridden by the system if the workflow doesn't meet the requirements to be enabled or if other conditions prevent enabling the workflow. The requirements to enable a workflow are that the workflow must be either set up for with auto grant enabled or have one or more WorkflowApprovers created for the workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/workflow#enabled Workflow#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/workflow#id Workflow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique human-readable name of the Workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/workflow#name Workflow#name}
  */
  readonly name: string;
  /**
  * Optional weight for workflow to specify it's priority in matching a request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/workflow#weight Workflow#weight}
  */
  readonly weight?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/workflow#timeouts Workflow#timeouts}
  */
  readonly timeouts?: WorkflowTimeouts;
}
export interface WorkflowTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/workflow#create Workflow#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/workflow#default Workflow#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/workflow#delete Workflow#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/workflow#read Workflow#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/workflow#update Workflow#update}
  */
  readonly update?: string;
}

export function workflowTimeoutsToTerraform(struct?: WorkflowTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function workflowTimeoutsToHclTerraform(struct?: WorkflowTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkflowTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkflowTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkflowTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/workflow sdm_workflow}
*/
export class Workflow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdm_workflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Workflow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Workflow to import
  * @param importFromId The id of the existing Workflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/workflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Workflow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdm_workflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/resources/workflow sdm_workflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkflowConfig
  */
  public constructor(scope: Construct, id: string, config: WorkflowConfig) {
    super(scope, id, {
      terraformResourceType: 'sdm_workflow',
      terraformGeneratorMetadata: {
        providerName: 'sdm',
        providerVersion: '15.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessRequestFixedDuration = config.accessRequestFixedDuration;
    this._accessRequestMaxDuration = config.accessRequestMaxDuration;
    this._accessRules = config.accessRules;
    this._approvalFlowId = config.approvalFlowId;
    this._autoGrant = config.autoGrant;
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._name = config.name;
    this._weight = config.weight;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_request_fixed_duration - computed: false, optional: true, required: false
  private _accessRequestFixedDuration?: string; 
  public get accessRequestFixedDuration() {
    return this.getStringAttribute('access_request_fixed_duration');
  }
  public set accessRequestFixedDuration(value: string) {
    this._accessRequestFixedDuration = value;
  }
  public resetAccessRequestFixedDuration() {
    this._accessRequestFixedDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRequestFixedDurationInput() {
    return this._accessRequestFixedDuration;
  }

  // access_request_max_duration - computed: false, optional: true, required: false
  private _accessRequestMaxDuration?: string; 
  public get accessRequestMaxDuration() {
    return this.getStringAttribute('access_request_max_duration');
  }
  public set accessRequestMaxDuration(value: string) {
    this._accessRequestMaxDuration = value;
  }
  public resetAccessRequestMaxDuration() {
    this._accessRequestMaxDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRequestMaxDurationInput() {
    return this._accessRequestMaxDuration;
  }

  // access_rules - computed: true, optional: true, required: false
  private _accessRules?: string; 
  public get accessRules() {
    return this.getStringAttribute('access_rules');
  }
  public set accessRules(value: string) {
    this._accessRules = value;
  }
  public resetAccessRules() {
    this._accessRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessRulesInput() {
    return this._accessRules;
  }

  // approval_flow_id - computed: false, optional: true, required: false
  private _approvalFlowId?: string; 
  public get approvalFlowId() {
    return this.getStringAttribute('approval_flow_id');
  }
  public set approvalFlowId(value: string) {
    this._approvalFlowId = value;
  }
  public resetApprovalFlowId() {
    this._approvalFlowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalFlowIdInput() {
    return this._approvalFlowId;
  }

  // auto_grant - computed: false, optional: true, required: false
  private _autoGrant?: boolean | cdktf.IResolvable; 
  public get autoGrant() {
    return this.getBooleanAttribute('auto_grant');
  }
  public set autoGrant(value: boolean | cdktf.IResolvable) {
    this._autoGrant = value;
  }
  public resetAutoGrant() {
    this._autoGrant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoGrantInput() {
    return this._autoGrant;
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

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WorkflowTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WorkflowTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_request_fixed_duration: cdktf.stringToTerraform(this._accessRequestFixedDuration),
      access_request_max_duration: cdktf.stringToTerraform(this._accessRequestMaxDuration),
      access_rules: cdktf.stringToTerraform(this._accessRules),
      approval_flow_id: cdktf.stringToTerraform(this._approvalFlowId),
      auto_grant: cdktf.booleanToTerraform(this._autoGrant),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      weight: cdktf.numberToTerraform(this._weight),
      timeouts: workflowTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_request_fixed_duration: {
        value: cdktf.stringToHclTerraform(this._accessRequestFixedDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_request_max_duration: {
        value: cdktf.stringToHclTerraform(this._accessRequestMaxDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_rules: {
        value: cdktf.stringToHclTerraform(this._accessRules),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      approval_flow_id: {
        value: cdktf.stringToHclTerraform(this._approvalFlowId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_grant: {
        value: cdktf.booleanToHclTerraform(this._autoGrant),
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
      weight: {
        value: cdktf.numberToHclTerraform(this._weight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: workflowTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkflowTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
