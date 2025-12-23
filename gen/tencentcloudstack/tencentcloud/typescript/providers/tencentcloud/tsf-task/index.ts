// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TsfTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * execution type, unicast/broadcast.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#execute_type TsfTask#execute_type}
  */
  readonly executeType: string;
  /**
  * deployment group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#group_id TsfTask#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#id TsfTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Program id list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#program_id_list TsfTask#program_id_list}
  */
  readonly programIdList?: string[];
  /**
  * number of retries, 0 &amp;lt;= RetryCount&amp;lt;= 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#retry_count TsfTask#retry_count}
  */
  readonly retryCount?: number;
  /**
  * retry interval, 0 &amp;lt;= RetryInterval &amp;lt;= 600000, time unit ms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#retry_interval TsfTask#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * number of shards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#shard_count TsfTask#shard_count}
  */
  readonly shardCount?: number;
  /**
  * the operator to judge the success of the task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#success_operator TsfTask#success_operator}
  */
  readonly successOperator?: string;
  /**
  * The threshold for judging the success rate of the task, such as 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#success_ratio TsfTask#success_ratio}
  */
  readonly successRatio?: string;
  /**
  * task parameters, the length limit is 10000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#task_argument TsfTask#task_argument}
  */
  readonly taskArgument?: string;
  /**
  * task content, length limit 65536 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#task_content TsfTask#task_content}
  */
  readonly taskContent: string;
  /**
  * task name, task length 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#task_name TsfTask#task_name}
  */
  readonly taskName: string;
  /**
  * task type, java.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#task_type TsfTask#task_type}
  */
  readonly taskType: string;
  /**
  * task timeout, time unit ms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#time_out TsfTask#time_out}
  */
  readonly timeOut: number;
  /**
  * advance_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#advance_settings TsfTask#advance_settings}
  */
  readonly advanceSettings?: TsfTaskAdvanceSettings;
  /**
  * shard_arguments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#shard_arguments TsfTask#shard_arguments}
  */
  readonly shardArguments?: TsfTaskShardArguments[] | cdktf.IResolvable;
  /**
  * task_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#task_rule TsfTask#task_rule}
  */
  readonly taskRule?: TsfTaskTaskRule;
}
export interface TsfTaskAdvanceSettings {
  /**
  * Subtask single-machine concurrency limit, the default value is 2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#sub_task_concurrency TsfTask#sub_task_concurrency}
  */
  readonly subTaskConcurrency?: number;
}

export function tsfTaskAdvanceSettingsToTerraform(struct?: TsfTaskAdvanceSettingsOutputReference | TsfTaskAdvanceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sub_task_concurrency: cdktf.numberToTerraform(struct!.subTaskConcurrency),
  }
}


export function tsfTaskAdvanceSettingsToHclTerraform(struct?: TsfTaskAdvanceSettingsOutputReference | TsfTaskAdvanceSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sub_task_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.subTaskConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfTaskAdvanceSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TsfTaskAdvanceSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subTaskConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.subTaskConcurrency = this._subTaskConcurrency;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfTaskAdvanceSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subTaskConcurrency = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subTaskConcurrency = value.subTaskConcurrency;
    }
  }

  // sub_task_concurrency - computed: false, optional: true, required: false
  private _subTaskConcurrency?: number; 
  public get subTaskConcurrency() {
    return this.getNumberAttribute('sub_task_concurrency');
  }
  public set subTaskConcurrency(value: number) {
    this._subTaskConcurrency = value;
  }
  public resetSubTaskConcurrency() {
    this._subTaskConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subTaskConcurrencyInput() {
    return this._subTaskConcurrency;
  }
}
export interface TsfTaskShardArguments {
  /**
  * Sharding parameter KEY, integer, range [1,1000].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#shard_key TsfTask#shard_key}
  */
  readonly shardKey: number;
  /**
  * Shard parameter VALUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#shard_value TsfTask#shard_value}
  */
  readonly shardValue: string;
}

export function tsfTaskShardArgumentsToTerraform(struct?: TsfTaskShardArguments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shard_key: cdktf.numberToTerraform(struct!.shardKey),
    shard_value: cdktf.stringToTerraform(struct!.shardValue),
  }
}


export function tsfTaskShardArgumentsToHclTerraform(struct?: TsfTaskShardArguments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shard_key: {
      value: cdktf.numberToHclTerraform(struct!.shardKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shard_value: {
      value: cdktf.stringToHclTerraform(struct!.shardValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfTaskShardArgumentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TsfTaskShardArguments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shardKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardKey = this._shardKey;
    }
    if (this._shardValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardValue = this._shardValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfTaskShardArguments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shardKey = undefined;
      this._shardValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shardKey = value.shardKey;
      this._shardValue = value.shardValue;
    }
  }

  // shard_key - computed: false, optional: false, required: true
  private _shardKey?: number; 
  public get shardKey() {
    return this.getNumberAttribute('shard_key');
  }
  public set shardKey(value: number) {
    this._shardKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardKeyInput() {
    return this._shardKey;
  }

  // shard_value - computed: false, optional: false, required: true
  private _shardValue?: string; 
  public get shardValue() {
    return this.getStringAttribute('shard_value');
  }
  public set shardValue(value: string) {
    this._shardValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardValueInput() {
    return this._shardValue;
  }
}

export class TsfTaskShardArgumentsList extends cdktf.ComplexList {
  public internalValue? : TsfTaskShardArguments[] | cdktf.IResolvable

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
  public get(index: number): TsfTaskShardArgumentsOutputReference {
    return new TsfTaskShardArgumentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TsfTaskTaskRule {
  /**
  * Cron type rule, cron expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#expression TsfTask#expression}
  */
  readonly expression?: string;
  /**
  * time interval, in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#repeat_interval TsfTask#repeat_interval}
  */
  readonly repeatInterval?: number;
  /**
  * trigger rule type, Cron/Repeat.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#rule_type TsfTask#rule_type}
  */
  readonly ruleType: string;
}

export function tsfTaskTaskRuleToTerraform(struct?: TsfTaskTaskRuleOutputReference | TsfTaskTaskRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression: cdktf.stringToTerraform(struct!.expression),
    repeat_interval: cdktf.numberToTerraform(struct!.repeatInterval),
    rule_type: cdktf.stringToTerraform(struct!.ruleType),
  }
}


export function tsfTaskTaskRuleToHclTerraform(struct?: TsfTaskTaskRuleOutputReference | TsfTaskTaskRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repeat_interval: {
      value: cdktf.numberToHclTerraform(struct!.repeatInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_type: {
      value: cdktf.stringToHclTerraform(struct!.ruleType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfTaskTaskRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TsfTaskTaskRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._repeatInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeatInterval = this._repeatInterval;
    }
    if (this._ruleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleType = this._ruleType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfTaskTaskRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expression = undefined;
      this._repeatInterval = undefined;
      this._ruleType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expression = value.expression;
      this._repeatInterval = value.repeatInterval;
      this._ruleType = value.ruleType;
    }
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // repeat_interval - computed: false, optional: true, required: false
  private _repeatInterval?: number; 
  public get repeatInterval() {
    return this.getNumberAttribute('repeat_interval');
  }
  public set repeatInterval(value: number) {
    this._repeatInterval = value;
  }
  public resetRepeatInterval() {
    this._repeatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatIntervalInput() {
    return this._repeatInterval;
  }

  // rule_type - computed: false, optional: false, required: true
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task tencentcloud_tsf_task}
*/
export class TsfTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TsfTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TsfTask to import
  * @param importFromId The id of the existing TsfTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TsfTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/tsf_task tencentcloud_tsf_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TsfTaskConfig
  */
  public constructor(scope: Construct, id: string, config: TsfTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_task',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._executeType = config.executeType;
    this._groupId = config.groupId;
    this._id = config.id;
    this._programIdList = config.programIdList;
    this._retryCount = config.retryCount;
    this._retryInterval = config.retryInterval;
    this._shardCount = config.shardCount;
    this._successOperator = config.successOperator;
    this._successRatio = config.successRatio;
    this._taskArgument = config.taskArgument;
    this._taskContent = config.taskContent;
    this._taskName = config.taskName;
    this._taskType = config.taskType;
    this._timeOut = config.timeOut;
    this._advanceSettings.internalValue = config.advanceSettings;
    this._shardArguments.internalValue = config.shardArguments;
    this._taskRule.internalValue = config.taskRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // belong_flow_ids - computed: true, optional: false, required: false
  public get belongFlowIds() {
    return cdktf.Fn.tolist(this.getListAttribute('belong_flow_ids'));
  }

  // execute_type - computed: false, optional: false, required: true
  private _executeType?: string; 
  public get executeType() {
    return this.getStringAttribute('execute_type');
  }
  public set executeType(value: string) {
    this._executeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executeTypeInput() {
    return this._executeType;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // program_id_list - computed: false, optional: true, required: false
  private _programIdList?: string[]; 
  public get programIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('program_id_list'));
  }
  public set programIdList(value: string[]) {
    this._programIdList = value;
  }
  public resetProgramIdList() {
    this._programIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programIdListInput() {
    return this._programIdList;
  }

  // retry_count - computed: true, optional: true, required: false
  private _retryCount?: number; 
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }
  public set retryCount(value: number) {
    this._retryCount = value;
  }
  public resetRetryCount() {
    this._retryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryCountInput() {
    return this._retryCount;
  }

  // retry_interval - computed: true, optional: true, required: false
  private _retryInterval?: number; 
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }
  public set retryInterval(value: number) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // shard_count - computed: true, optional: true, required: false
  private _shardCount?: number; 
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }
  public set shardCount(value: number) {
    this._shardCount = value;
  }
  public resetShardCount() {
    this._shardCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardCountInput() {
    return this._shardCount;
  }

  // success_operator - computed: true, optional: true, required: false
  private _successOperator?: string; 
  public get successOperator() {
    return this.getStringAttribute('success_operator');
  }
  public set successOperator(value: string) {
    this._successOperator = value;
  }
  public resetSuccessOperator() {
    this._successOperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successOperatorInput() {
    return this._successOperator;
  }

  // success_ratio - computed: true, optional: true, required: false
  private _successRatio?: string; 
  public get successRatio() {
    return this.getStringAttribute('success_ratio');
  }
  public set successRatio(value: string) {
    this._successRatio = value;
  }
  public resetSuccessRatio() {
    this._successRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successRatioInput() {
    return this._successRatio;
  }

  // task_argument - computed: true, optional: true, required: false
  private _taskArgument?: string; 
  public get taskArgument() {
    return this.getStringAttribute('task_argument');
  }
  public set taskArgument(value: string) {
    this._taskArgument = value;
  }
  public resetTaskArgument() {
    this._taskArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskArgumentInput() {
    return this._taskArgument;
  }

  // task_content - computed: false, optional: false, required: true
  private _taskContent?: string; 
  public get taskContent() {
    return this.getStringAttribute('task_content');
  }
  public set taskContent(value: string) {
    this._taskContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskContentInput() {
    return this._taskContent;
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // task_log_id - computed: true, optional: false, required: false
  public get taskLogId() {
    return this.getStringAttribute('task_log_id');
  }

  // task_name - computed: false, optional: false, required: true
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
  }

  // task_state - computed: true, optional: false, required: false
  public get taskState() {
    return this.getStringAttribute('task_state');
  }

  // task_type - computed: false, optional: false, required: true
  private _taskType?: string; 
  public get taskType() {
    return this.getStringAttribute('task_type');
  }
  public set taskType(value: string) {
    this._taskType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskTypeInput() {
    return this._taskType;
  }

  // time_out - computed: false, optional: false, required: true
  private _timeOut?: number; 
  public get timeOut() {
    return this.getNumberAttribute('time_out');
  }
  public set timeOut(value: number) {
    this._timeOut = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOutInput() {
    return this._timeOut;
  }

  // trigger_type - computed: true, optional: false, required: false
  public get triggerType() {
    return this.getStringAttribute('trigger_type');
  }

  // advance_settings - computed: false, optional: true, required: false
  private _advanceSettings = new TsfTaskAdvanceSettingsOutputReference(this, "advance_settings");
  public get advanceSettings() {
    return this._advanceSettings;
  }
  public putAdvanceSettings(value: TsfTaskAdvanceSettings) {
    this._advanceSettings.internalValue = value;
  }
  public resetAdvanceSettings() {
    this._advanceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advanceSettingsInput() {
    return this._advanceSettings.internalValue;
  }

  // shard_arguments - computed: false, optional: true, required: false
  private _shardArguments = new TsfTaskShardArgumentsList(this, "shard_arguments", false);
  public get shardArguments() {
    return this._shardArguments;
  }
  public putShardArguments(value: TsfTaskShardArguments[] | cdktf.IResolvable) {
    this._shardArguments.internalValue = value;
  }
  public resetShardArguments() {
    this._shardArguments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardArgumentsInput() {
    return this._shardArguments.internalValue;
  }

  // task_rule - computed: false, optional: true, required: false
  private _taskRule = new TsfTaskTaskRuleOutputReference(this, "task_rule");
  public get taskRule() {
    return this._taskRule;
  }
  public putTaskRule(value: TsfTaskTaskRule) {
    this._taskRule.internalValue = value;
  }
  public resetTaskRule() {
    this._taskRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskRuleInput() {
    return this._taskRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      execute_type: cdktf.stringToTerraform(this._executeType),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      program_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._programIdList),
      retry_count: cdktf.numberToTerraform(this._retryCount),
      retry_interval: cdktf.numberToTerraform(this._retryInterval),
      shard_count: cdktf.numberToTerraform(this._shardCount),
      success_operator: cdktf.stringToTerraform(this._successOperator),
      success_ratio: cdktf.stringToTerraform(this._successRatio),
      task_argument: cdktf.stringToTerraform(this._taskArgument),
      task_content: cdktf.stringToTerraform(this._taskContent),
      task_name: cdktf.stringToTerraform(this._taskName),
      task_type: cdktf.stringToTerraform(this._taskType),
      time_out: cdktf.numberToTerraform(this._timeOut),
      advance_settings: tsfTaskAdvanceSettingsToTerraform(this._advanceSettings.internalValue),
      shard_arguments: cdktf.listMapper(tsfTaskShardArgumentsToTerraform, true)(this._shardArguments.internalValue),
      task_rule: tsfTaskTaskRuleToTerraform(this._taskRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      execute_type: {
        value: cdktf.stringToHclTerraform(this._executeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      program_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._programIdList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      retry_count: {
        value: cdktf.numberToHclTerraform(this._retryCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_interval: {
        value: cdktf.numberToHclTerraform(this._retryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shard_count: {
        value: cdktf.numberToHclTerraform(this._shardCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      success_operator: {
        value: cdktf.stringToHclTerraform(this._successOperator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      success_ratio: {
        value: cdktf.stringToHclTerraform(this._successRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_argument: {
        value: cdktf.stringToHclTerraform(this._taskArgument),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_content: {
        value: cdktf.stringToHclTerraform(this._taskContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_name: {
        value: cdktf.stringToHclTerraform(this._taskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_type: {
        value: cdktf.stringToHclTerraform(this._taskType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_out: {
        value: cdktf.numberToHclTerraform(this._timeOut),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      advance_settings: {
        value: tsfTaskAdvanceSettingsToHclTerraform(this._advanceSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TsfTaskAdvanceSettingsList",
      },
      shard_arguments: {
        value: cdktf.listMapperHcl(tsfTaskShardArgumentsToHclTerraform, true)(this._shardArguments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TsfTaskShardArgumentsList",
      },
      task_rule: {
        value: tsfTaskTaskRuleToHclTerraform(this._taskRule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TsfTaskTaskRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
