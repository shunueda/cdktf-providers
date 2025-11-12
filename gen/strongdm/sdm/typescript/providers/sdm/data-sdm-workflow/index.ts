// https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/workflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdmWorkflowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Fixed Duration of access requests bound to this workflow. If fixed duration is provided, max duration must be empty. If neither max nor fixed duration are provided, requests that bind to this workflow will use the organization-level settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/workflow#access_request_fixed_duration DataSdmWorkflow#access_request_fixed_duration}
  */
  readonly accessRequestFixedDuration?: string;
  /**
  * Maximum Duration of access requests bound to this workflow. If max duration is provided, fixed duration must be empty. If neither max nor fixed duration are provided, requests that bind to this workflow will use the organization-level settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/workflow#access_request_max_duration DataSdmWorkflow#access_request_max_duration}
  */
  readonly accessRequestMaxDuration?: string;
  /**
  * Optional approval flow ID identifies an approval flow that linked to the workflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/workflow#approval_flow_id DataSdmWorkflow#approval_flow_id}
  */
  readonly approvalFlowId?: string;
  /**
  * Optional auto grant setting to automatically approve requests or not, defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/workflow#auto_grant DataSdmWorkflow#auto_grant}
  */
  readonly autoGrant?: boolean | cdktf.IResolvable;
  /**
  * Optional description of the Workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/workflow#description DataSdmWorkflow#description}
  */
  readonly description?: string;
  /**
  * Optional enabled state for workflow. This setting may be overridden by the system if the workflow doesn't meet the requirements to be enabled or if other conditions prevent enabling the workflow. The requirements to enable a workflow are that the workflow must be either set up for with auto grant enabled or have one or more WorkflowApprovers created for the workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/workflow#enabled DataSdmWorkflow#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Unique identifier of the Workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/workflow#id DataSdmWorkflow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique human-readable name of the Workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/workflow#name DataSdmWorkflow#name}
  */
  readonly name?: string;
  /**
  * Optional weight for workflow to specify it's priority in matching a request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/workflow#weight DataSdmWorkflow#weight}
  */
  readonly weight?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/workflow#timeouts DataSdmWorkflow#timeouts}
  */
  readonly timeouts?: DataSdmWorkflowTimeouts;
}
export interface DataSdmWorkflowWorkflows {
}

export function dataSdmWorkflowWorkflowsToTerraform(struct?: DataSdmWorkflowWorkflows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmWorkflowWorkflowsToHclTerraform(struct?: DataSdmWorkflowWorkflows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmWorkflowWorkflowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmWorkflowWorkflows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmWorkflowWorkflows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_request_fixed_duration - computed: true, optional: false, required: false
  public get accessRequestFixedDuration() {
    return this.getStringAttribute('access_request_fixed_duration');
  }

  // access_request_max_duration - computed: true, optional: false, required: false
  public get accessRequestMaxDuration() {
    return this.getStringAttribute('access_request_max_duration');
  }

  // access_rules - computed: true, optional: false, required: false
  public get accessRules() {
    return this.getStringAttribute('access_rules');
  }

  // approval_flow_id - computed: true, optional: false, required: false
  public get approvalFlowId() {
    return this.getStringAttribute('approval_flow_id');
  }

  // auto_grant - computed: true, optional: false, required: false
  public get autoGrant() {
    return this.getBooleanAttribute('auto_grant');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataSdmWorkflowWorkflowsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmWorkflowWorkflowsOutputReference {
    return new DataSdmWorkflowWorkflowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmWorkflowTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/workflow#default DataSdmWorkflow#default}
  */
  readonly default?: string;
}

export function dataSdmWorkflowTimeoutsToTerraform(struct?: DataSdmWorkflowTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function dataSdmWorkflowTimeoutsToHclTerraform(struct?: DataSdmWorkflowTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSdmWorkflowTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSdmWorkflowTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmWorkflowTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/workflow sdm_workflow}
*/
export class DataSdmWorkflow extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdm_workflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdmWorkflow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdmWorkflow to import
  * @param importFromId The id of the existing DataSdmWorkflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/workflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdmWorkflow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdm_workflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/strongdm/sdm/15.27.0/docs/data-sources/workflow sdm_workflow} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdmWorkflowConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdmWorkflowConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdm_workflow',
      terraformGeneratorMetadata: {
        providerName: 'sdm',
        providerVersion: '15.27.0',
        providerVersionConstraint: '15.27.0'
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

  // id - computed: false, optional: true, required: false
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // name - computed: false, optional: true, required: false
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

  // weight - computed: false, optional: true, required: false
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

  // workflows - computed: true, optional: false, required: false
  private _workflows = new DataSdmWorkflowWorkflowsList(this, "workflows", false);
  public get workflows() {
    return this._workflows;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataSdmWorkflowTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataSdmWorkflowTimeouts) {
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
      approval_flow_id: cdktf.stringToTerraform(this._approvalFlowId),
      auto_grant: cdktf.booleanToTerraform(this._autoGrant),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      weight: cdktf.numberToTerraform(this._weight),
      timeouts: dataSdmWorkflowTimeoutsToTerraform(this._timeouts.internalValue),
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
        value: dataSdmWorkflowTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataSdmWorkflowTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
