// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype_flow_datebased_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TaskManagementWorktypeFlowDatebasedRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype_flow_datebased_rule#id TaskManagementWorktypeFlowDatebasedRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype_flow_datebased_rule#name TaskManagementWorktypeFlowDatebasedRule#name}
  */
  readonly name: string;
  /**
  * The Worktype ID of the Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype_flow_datebased_rule#worktype_id TaskManagementWorktypeFlowDatebasedRule#worktype_id}
  */
  readonly worktypeId: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype_flow_datebased_rule#condition TaskManagementWorktypeFlowDatebasedRule#condition}
  */
  readonly condition: TaskManagementWorktypeFlowDatebasedRuleCondition;
}
export interface TaskManagementWorktypeFlowDatebasedRuleCondition {
  /**
  * The name of the workitem date attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype_flow_datebased_rule#attribute TaskManagementWorktypeFlowDatebasedRule#attribute}
  */
  readonly attribute: string;
  /**
  * The time in minutes before or after the date attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype_flow_datebased_rule#relative_minutes_to_invocation TaskManagementWorktypeFlowDatebasedRule#relative_minutes_to_invocation}
  */
  readonly relativeMinutesToInvocation: number;
}

export function taskManagementWorktypeFlowDatebasedRuleConditionToTerraform(struct?: TaskManagementWorktypeFlowDatebasedRuleConditionOutputReference | TaskManagementWorktypeFlowDatebasedRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    relative_minutes_to_invocation: cdktf.numberToTerraform(struct!.relativeMinutesToInvocation),
  }
}


export function taskManagementWorktypeFlowDatebasedRuleConditionToHclTerraform(struct?: TaskManagementWorktypeFlowDatebasedRuleConditionOutputReference | TaskManagementWorktypeFlowDatebasedRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_minutes_to_invocation: {
      value: cdktf.numberToHclTerraform(struct!.relativeMinutesToInvocation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TaskManagementWorktypeFlowDatebasedRuleConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TaskManagementWorktypeFlowDatebasedRuleCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._relativeMinutesToInvocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeMinutesToInvocation = this._relativeMinutesToInvocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskManagementWorktypeFlowDatebasedRuleCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attribute = undefined;
      this._relativeMinutesToInvocation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attribute = value.attribute;
      this._relativeMinutesToInvocation = value.relativeMinutesToInvocation;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // relative_minutes_to_invocation - computed: false, optional: false, required: true
  private _relativeMinutesToInvocation?: number; 
  public get relativeMinutesToInvocation() {
    return this.getNumberAttribute('relative_minutes_to_invocation');
  }
  public set relativeMinutesToInvocation(value: number) {
    this._relativeMinutesToInvocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeMinutesToInvocationInput() {
    return this._relativeMinutesToInvocation;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype_flow_datebased_rule genesyscloud_task_management_worktype_flow_datebased_rule}
*/
export class TaskManagementWorktypeFlowDatebasedRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_task_management_worktype_flow_datebased_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TaskManagementWorktypeFlowDatebasedRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TaskManagementWorktypeFlowDatebasedRule to import
  * @param importFromId The id of the existing TaskManagementWorktypeFlowDatebasedRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype_flow_datebased_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TaskManagementWorktypeFlowDatebasedRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_task_management_worktype_flow_datebased_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.70.0/docs/resources/task_management_worktype_flow_datebased_rule genesyscloud_task_management_worktype_flow_datebased_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TaskManagementWorktypeFlowDatebasedRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TaskManagementWorktypeFlowDatebasedRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_task_management_worktype_flow_datebased_rule',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
    this._worktypeId = config.worktypeId;
    this._condition.internalValue = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // condition - computed: false, optional: false, required: true
  private _condition = new TaskManagementWorktypeFlowDatebasedRuleConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: TaskManagementWorktypeFlowDatebasedRuleCondition) {
    this._condition.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      worktype_id: cdktf.stringToTerraform(this._worktypeId),
      condition: taskManagementWorktypeFlowDatebasedRuleConditionToTerraform(this._condition.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      worktype_id: {
        value: cdktf.stringToHclTerraform(this._worktypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      condition: {
        value: taskManagementWorktypeFlowDatebasedRuleConditionToHclTerraform(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TaskManagementWorktypeFlowDatebasedRuleConditionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
