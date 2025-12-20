// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_worktype_flow_onattributechange_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TaskManagementWorktypeFlowOnattributechangeRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_worktype_flow_onattributechange_rule#id TaskManagementWorktypeFlowOnattributechangeRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_worktype_flow_onattributechange_rule#name TaskManagementWorktypeFlowOnattributechangeRule#name}
  */
  readonly name: string;
  /**
  * The Worktype ID of the Rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_worktype_flow_onattributechange_rule#worktype_id TaskManagementWorktypeFlowOnattributechangeRule#worktype_id}
  */
  readonly worktypeId: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_worktype_flow_onattributechange_rule#condition TaskManagementWorktypeFlowOnattributechangeRule#condition}
  */
  readonly condition: TaskManagementWorktypeFlowOnattributechangeRuleCondition;
}
export interface TaskManagementWorktypeFlowOnattributechangeRuleCondition {
  /**
  * The name of the workitem attribute whose change will be evaluated as part of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_worktype_flow_onattributechange_rule#attribute TaskManagementWorktypeFlowOnattributechangeRule#attribute}
  */
  readonly attribute: string;
  /**
  * The new value of the attribute. If the attribute is updated to this value this part of the condition will be met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_worktype_flow_onattributechange_rule#new_value TaskManagementWorktypeFlowOnattributechangeRule#new_value}
  */
  readonly newValue: string;
  /**
  * The old value of the attribute. If the attribute was updated from this value this part of the condition will be met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_worktype_flow_onattributechange_rule#old_value TaskManagementWorktypeFlowOnattributechangeRule#old_value}
  */
  readonly oldValue?: string;
}

export function taskManagementWorktypeFlowOnattributechangeRuleConditionToTerraform(struct?: TaskManagementWorktypeFlowOnattributechangeRuleConditionOutputReference | TaskManagementWorktypeFlowOnattributechangeRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    new_value: cdktf.stringToTerraform(struct!.newValue),
    old_value: cdktf.stringToTerraform(struct!.oldValue),
  }
}


export function taskManagementWorktypeFlowOnattributechangeRuleConditionToHclTerraform(struct?: TaskManagementWorktypeFlowOnattributechangeRuleConditionOutputReference | TaskManagementWorktypeFlowOnattributechangeRuleCondition): any {
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
    new_value: {
      value: cdktf.stringToHclTerraform(struct!.newValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_value: {
      value: cdktf.stringToHclTerraform(struct!.oldValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TaskManagementWorktypeFlowOnattributechangeRuleConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TaskManagementWorktypeFlowOnattributechangeRuleCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._newValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newValue = this._newValue;
    }
    if (this._oldValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldValue = this._oldValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskManagementWorktypeFlowOnattributechangeRuleCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._attribute = undefined;
      this._newValue = undefined;
      this._oldValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._attribute = value.attribute;
      this._newValue = value.newValue;
      this._oldValue = value.oldValue;
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

  // new_value - computed: false, optional: false, required: true
  private _newValue?: string; 
  public get newValue() {
    return this.getStringAttribute('new_value');
  }
  public set newValue(value: string) {
    this._newValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newValueInput() {
    return this._newValue;
  }

  // old_value - computed: false, optional: true, required: false
  private _oldValue?: string; 
  public get oldValue() {
    return this.getStringAttribute('old_value');
  }
  public set oldValue(value: string) {
    this._oldValue = value;
  }
  public resetOldValue() {
    this._oldValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldValueInput() {
    return this._oldValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_worktype_flow_onattributechange_rule genesyscloud_task_management_worktype_flow_onattributechange_rule}
*/
export class TaskManagementWorktypeFlowOnattributechangeRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_task_management_worktype_flow_onattributechange_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TaskManagementWorktypeFlowOnattributechangeRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TaskManagementWorktypeFlowOnattributechangeRule to import
  * @param importFromId The id of the existing TaskManagementWorktypeFlowOnattributechangeRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_worktype_flow_onattributechange_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TaskManagementWorktypeFlowOnattributechangeRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_task_management_worktype_flow_onattributechange_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.73.0/docs/resources/task_management_worktype_flow_onattributechange_rule genesyscloud_task_management_worktype_flow_onattributechange_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TaskManagementWorktypeFlowOnattributechangeRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TaskManagementWorktypeFlowOnattributechangeRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_task_management_worktype_flow_onattributechange_rule',
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
  private _condition = new TaskManagementWorktypeFlowOnattributechangeRuleConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: TaskManagementWorktypeFlowOnattributechangeRuleCondition) {
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
      condition: taskManagementWorktypeFlowOnattributechangeRuleConditionToTerraform(this._condition.internalValue),
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
        value: taskManagementWorktypeFlowOnattributechangeRuleConditionToHclTerraform(this._condition.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TaskManagementWorktypeFlowOnattributechangeRuleConditionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
