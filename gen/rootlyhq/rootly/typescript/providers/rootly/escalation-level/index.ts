// https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_level
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EscalationLevelConfig extends cdktf.TerraformMetaArguments {
  /**
  * Delay before notification targets will be alerted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_level#delay EscalationLevel#delay}
  */
  readonly delay?: number;
  /**
  * The ID of the escalation policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_level#escalation_policy_id EscalationLevel#escalation_policy_id}
  */
  readonly escalationPolicyId?: string;
  /**
  * The ID of the dynamic escalation policy path the level will belong to. If nothing is specified it will add the level to your default path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_level#escalation_policy_path_id EscalationLevel#escalation_policy_path_id}
  */
  readonly escalationPolicyPathId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_level#id EscalationLevel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Value must be one of `on_call_only`, `everyone`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_level#paging_strategy_configuration_schedule_strategy EscalationLevel#paging_strategy_configuration_schedule_strategy}
  */
  readonly pagingStrategyConfigurationScheduleStrategy?: string;
  /**
  * Value must be one of `default`, `random`, `cycle`, `alert`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_level#paging_strategy_configuration_strategy EscalationLevel#paging_strategy_configuration_strategy}
  */
  readonly pagingStrategyConfigurationStrategy?: string;
  /**
  * Position of the escalation policy level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_level#position EscalationLevel#position}
  */
  readonly position: number;
  /**
  * notification_target_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_level#notification_target_params EscalationLevel#notification_target_params}
  */
  readonly notificationTargetParams: EscalationLevelNotificationTargetParams[] | cdktf.IResolvable;
}
export interface EscalationLevelNotificationTargetParams {
  /**
  * The ID of notification target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_level#id EscalationLevel#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * For targets with type=team, controls whether to notify admins, all team members, or escalate to team EP.. Value must be one of `all`, `admins`, `escalate`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_level#team_members EscalationLevel#team_members}
  */
  readonly teamMembers?: string;
  /**
  * The type of the notification target. Value must be one of `team`, `user`, `schedule`, `slack_channel`, `service`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_level#type EscalationLevel#type}
  */
  readonly type?: string;
}

export function escalationLevelNotificationTargetParamsToTerraform(struct?: EscalationLevelNotificationTargetParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    team_members: cdktf.stringToTerraform(struct!.teamMembers),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function escalationLevelNotificationTargetParamsToHclTerraform(struct?: EscalationLevelNotificationTargetParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    team_members: {
      value: cdktf.stringToHclTerraform(struct!.teamMembers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EscalationLevelNotificationTargetParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EscalationLevelNotificationTargetParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._teamMembers !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamMembers = this._teamMembers;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EscalationLevelNotificationTargetParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._teamMembers = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._teamMembers = value.teamMembers;
      this._type = value.type;
    }
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

  // team_members - computed: false, optional: true, required: false
  private _teamMembers?: string; 
  public get teamMembers() {
    return this.getStringAttribute('team_members');
  }
  public set teamMembers(value: string) {
    this._teamMembers = value;
  }
  public resetTeamMembers() {
    this._teamMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamMembersInput() {
    return this._teamMembers;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class EscalationLevelNotificationTargetParamsList extends cdktf.ComplexList {
  public internalValue? : EscalationLevelNotificationTargetParams[] | cdktf.IResolvable

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
  public get(index: number): EscalationLevelNotificationTargetParamsOutputReference {
    return new EscalationLevelNotificationTargetParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_level rootly_escalation_level}
*/
export class EscalationLevel extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_escalation_level";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EscalationLevel resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EscalationLevel to import
  * @param importFromId The id of the existing EscalationLevel that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_level#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EscalationLevel to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_escalation_level", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/5.1.0/docs/resources/escalation_level rootly_escalation_level} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EscalationLevelConfig
  */
  public constructor(scope: Construct, id: string, config: EscalationLevelConfig) {
    super(scope, id, {
      terraformResourceType: 'rootly_escalation_level',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '5.1.0',
        providerVersionConstraint: '5.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delay = config.delay;
    this._escalationPolicyId = config.escalationPolicyId;
    this._escalationPolicyPathId = config.escalationPolicyPathId;
    this._id = config.id;
    this._pagingStrategyConfigurationScheduleStrategy = config.pagingStrategyConfigurationScheduleStrategy;
    this._pagingStrategyConfigurationStrategy = config.pagingStrategyConfigurationStrategy;
    this._position = config.position;
    this._notificationTargetParams.internalValue = config.notificationTargetParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delay - computed: true, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // escalation_policy_id - computed: true, optional: true, required: false
  private _escalationPolicyId?: string; 
  public get escalationPolicyId() {
    return this.getStringAttribute('escalation_policy_id');
  }
  public set escalationPolicyId(value: string) {
    this._escalationPolicyId = value;
  }
  public resetEscalationPolicyId() {
    this._escalationPolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationPolicyIdInput() {
    return this._escalationPolicyId;
  }

  // escalation_policy_path_id - computed: true, optional: true, required: false
  private _escalationPolicyPathId?: string; 
  public get escalationPolicyPathId() {
    return this.getStringAttribute('escalation_policy_path_id');
  }
  public set escalationPolicyPathId(value: string) {
    this._escalationPolicyPathId = value;
  }
  public resetEscalationPolicyPathId() {
    this._escalationPolicyPathId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalationPolicyPathIdInput() {
    return this._escalationPolicyPathId;
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

  // paging_strategy_configuration_schedule_strategy - computed: false, optional: true, required: false
  private _pagingStrategyConfigurationScheduleStrategy?: string; 
  public get pagingStrategyConfigurationScheduleStrategy() {
    return this.getStringAttribute('paging_strategy_configuration_schedule_strategy');
  }
  public set pagingStrategyConfigurationScheduleStrategy(value: string) {
    this._pagingStrategyConfigurationScheduleStrategy = value;
  }
  public resetPagingStrategyConfigurationScheduleStrategy() {
    this._pagingStrategyConfigurationScheduleStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagingStrategyConfigurationScheduleStrategyInput() {
    return this._pagingStrategyConfigurationScheduleStrategy;
  }

  // paging_strategy_configuration_strategy - computed: false, optional: true, required: false
  private _pagingStrategyConfigurationStrategy?: string; 
  public get pagingStrategyConfigurationStrategy() {
    return this.getStringAttribute('paging_strategy_configuration_strategy');
  }
  public set pagingStrategyConfigurationStrategy(value: string) {
    this._pagingStrategyConfigurationStrategy = value;
  }
  public resetPagingStrategyConfigurationStrategy() {
    this._pagingStrategyConfigurationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagingStrategyConfigurationStrategyInput() {
    return this._pagingStrategyConfigurationStrategy;
  }

  // position - computed: false, optional: false, required: true
  private _position?: number; 
  public get position() {
    return this.getNumberAttribute('position');
  }
  public set position(value: number) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // notification_target_params - computed: false, optional: false, required: true
  private _notificationTargetParams = new EscalationLevelNotificationTargetParamsList(this, "notification_target_params", false);
  public get notificationTargetParams() {
    return this._notificationTargetParams;
  }
  public putNotificationTargetParams(value: EscalationLevelNotificationTargetParams[] | cdktf.IResolvable) {
    this._notificationTargetParams.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTargetParamsInput() {
    return this._notificationTargetParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delay: cdktf.numberToTerraform(this._delay),
      escalation_policy_id: cdktf.stringToTerraform(this._escalationPolicyId),
      escalation_policy_path_id: cdktf.stringToTerraform(this._escalationPolicyPathId),
      id: cdktf.stringToTerraform(this._id),
      paging_strategy_configuration_schedule_strategy: cdktf.stringToTerraform(this._pagingStrategyConfigurationScheduleStrategy),
      paging_strategy_configuration_strategy: cdktf.stringToTerraform(this._pagingStrategyConfigurationStrategy),
      position: cdktf.numberToTerraform(this._position),
      notification_target_params: cdktf.listMapper(escalationLevelNotificationTargetParamsToTerraform, true)(this._notificationTargetParams.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delay: {
        value: cdktf.numberToHclTerraform(this._delay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      escalation_policy_id: {
        value: cdktf.stringToHclTerraform(this._escalationPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      escalation_policy_path_id: {
        value: cdktf.stringToHclTerraform(this._escalationPolicyPathId),
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
      paging_strategy_configuration_schedule_strategy: {
        value: cdktf.stringToHclTerraform(this._pagingStrategyConfigurationScheduleStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      paging_strategy_configuration_strategy: {
        value: cdktf.stringToHclTerraform(this._pagingStrategyConfigurationStrategy),
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
      notification_target_params: {
        value: cdktf.listMapperHcl(escalationLevelNotificationTargetParamsToHclTerraform, true)(this._notificationTargetParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EscalationLevelNotificationTargetParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
