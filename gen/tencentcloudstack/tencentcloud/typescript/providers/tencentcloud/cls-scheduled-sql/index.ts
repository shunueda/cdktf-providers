// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_scheduled_sql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClsScheduledSqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * task enable flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_scheduled_sql#enable_flag ClsScheduledSql#enable_flag}
  */
  readonly enableFlag: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_scheduled_sql#id ClsScheduledSql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * task name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_scheduled_sql#name ClsScheduledSql#name}
  */
  readonly name: string;
  /**
  * process delay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_scheduled_sql#process_delay ClsScheduledSql#process_delay}
  */
  readonly processDelay: number;
  /**
  * process end timestamp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_scheduled_sql#process_end_time ClsScheduledSql#process_end_time}
  */
  readonly processEndTime?: number;
  /**
  * process period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_scheduled_sql#process_period ClsScheduledSql#process_period}
  */
  readonly processPeriod: number;
  /**
  * process start timestamp.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_scheduled_sql#process_start_time ClsScheduledSql#process_start_time}
  */
  readonly processStartTime: number;
  /**
  * process time window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_scheduled_sql#process_time_window ClsScheduledSql#process_time_window}
  */
  readonly processTimeWindow: string;
  /**
  * process type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_scheduled_sql#process_type ClsScheduledSql#process_type}
  */
  readonly processType: number;
  /**
  * scheduled sql content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_scheduled_sql#scheduled_sql_content ClsScheduledSql#scheduled_sql_content}
  */
  readonly scheduledSqlContent: string;
  /**
  * src topic id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_scheduled_sql#src_topic_id ClsScheduledSql#src_topic_id}
  */
  readonly srcTopicId: string;
  /**
  * src topic region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_scheduled_sql#src_topic_region ClsScheduledSql#src_topic_region}
  */
  readonly srcTopicRegion: string;
  /**
  * syntax rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_scheduled_sql#syntax_rule ClsScheduledSql#syntax_rule}
  */
  readonly syntaxRule?: number;
  /**
  * dst_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_scheduled_sql#dst_resource ClsScheduledSql#dst_resource}
  */
  readonly dstResource: ClsScheduledSqlDstResource;
}
export interface ClsScheduledSqlDstResource {
  /**
  * topic type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_scheduled_sql#biz_type ClsScheduledSql#biz_type}
  */
  readonly bizType?: number;
  /**
  * metric name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_scheduled_sql#metric_name ClsScheduledSql#metric_name}
  */
  readonly metricName?: string;
  /**
  * topic region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_scheduled_sql#region ClsScheduledSql#region}
  */
  readonly region?: string;
  /**
  * dst topic id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_scheduled_sql#topic_id ClsScheduledSql#topic_id}
  */
  readonly topicId: string;
}

export function clsScheduledSqlDstResourceToTerraform(struct?: ClsScheduledSqlDstResourceOutputReference | ClsScheduledSqlDstResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    biz_type: cdktf.numberToTerraform(struct!.bizType),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    region: cdktf.stringToTerraform(struct!.region),
    topic_id: cdktf.stringToTerraform(struct!.topicId),
  }
}


export function clsScheduledSqlDstResourceToHclTerraform(struct?: ClsScheduledSqlDstResourceOutputReference | ClsScheduledSqlDstResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    biz_type: {
      value: cdktf.numberToHclTerraform(struct!.bizType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_id: {
      value: cdktf.stringToHclTerraform(struct!.topicId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClsScheduledSqlDstResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClsScheduledSqlDstResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bizType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bizType = this._bizType;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._topicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicId = this._topicId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClsScheduledSqlDstResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bizType = undefined;
      this._metricName = undefined;
      this._region = undefined;
      this._topicId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bizType = value.bizType;
      this._metricName = value.metricName;
      this._region = value.region;
      this._topicId = value.topicId;
    }
  }

  // biz_type - computed: false, optional: true, required: false
  private _bizType?: number; 
  public get bizType() {
    return this.getNumberAttribute('biz_type');
  }
  public set bizType(value: number) {
    this._bizType = value;
  }
  public resetBizType() {
    this._bizType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bizTypeInput() {
    return this._bizType;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // topic_id - computed: false, optional: false, required: true
  private _topicId?: string; 
  public get topicId() {
    return this.getStringAttribute('topic_id');
  }
  public set topicId(value: string) {
    this._topicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicIdInput() {
    return this._topicId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_scheduled_sql tencentcloud_cls_scheduled_sql}
*/
export class ClsScheduledSql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cls_scheduled_sql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClsScheduledSql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClsScheduledSql to import
  * @param importFromId The id of the existing ClsScheduledSql that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_scheduled_sql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClsScheduledSql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cls_scheduled_sql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/cls_scheduled_sql tencentcloud_cls_scheduled_sql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClsScheduledSqlConfig
  */
  public constructor(scope: Construct, id: string, config: ClsScheduledSqlConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cls_scheduled_sql',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableFlag = config.enableFlag;
    this._id = config.id;
    this._name = config.name;
    this._processDelay = config.processDelay;
    this._processEndTime = config.processEndTime;
    this._processPeriod = config.processPeriod;
    this._processStartTime = config.processStartTime;
    this._processTimeWindow = config.processTimeWindow;
    this._processType = config.processType;
    this._scheduledSqlContent = config.scheduledSqlContent;
    this._srcTopicId = config.srcTopicId;
    this._srcTopicRegion = config.srcTopicRegion;
    this._syntaxRule = config.syntaxRule;
    this._dstResource.internalValue = config.dstResource;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_flag - computed: false, optional: false, required: true
  private _enableFlag?: number; 
  public get enableFlag() {
    return this.getNumberAttribute('enable_flag');
  }
  public set enableFlag(value: number) {
    this._enableFlag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFlagInput() {
    return this._enableFlag;
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

  // process_delay - computed: false, optional: false, required: true
  private _processDelay?: number; 
  public get processDelay() {
    return this.getNumberAttribute('process_delay');
  }
  public set processDelay(value: number) {
    this._processDelay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processDelayInput() {
    return this._processDelay;
  }

  // process_end_time - computed: true, optional: true, required: false
  private _processEndTime?: number; 
  public get processEndTime() {
    return this.getNumberAttribute('process_end_time');
  }
  public set processEndTime(value: number) {
    this._processEndTime = value;
  }
  public resetProcessEndTime() {
    this._processEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processEndTimeInput() {
    return this._processEndTime;
  }

  // process_period - computed: false, optional: false, required: true
  private _processPeriod?: number; 
  public get processPeriod() {
    return this.getNumberAttribute('process_period');
  }
  public set processPeriod(value: number) {
    this._processPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processPeriodInput() {
    return this._processPeriod;
  }

  // process_start_time - computed: false, optional: false, required: true
  private _processStartTime?: number; 
  public get processStartTime() {
    return this.getNumberAttribute('process_start_time');
  }
  public set processStartTime(value: number) {
    this._processStartTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processStartTimeInput() {
    return this._processStartTime;
  }

  // process_time_window - computed: false, optional: false, required: true
  private _processTimeWindow?: string; 
  public get processTimeWindow() {
    return this.getStringAttribute('process_time_window');
  }
  public set processTimeWindow(value: string) {
    this._processTimeWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processTimeWindowInput() {
    return this._processTimeWindow;
  }

  // process_type - computed: false, optional: false, required: true
  private _processType?: number; 
  public get processType() {
    return this.getNumberAttribute('process_type');
  }
  public set processType(value: number) {
    this._processType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processTypeInput() {
    return this._processType;
  }

  // scheduled_sql_content - computed: false, optional: false, required: true
  private _scheduledSqlContent?: string; 
  public get scheduledSqlContent() {
    return this.getStringAttribute('scheduled_sql_content');
  }
  public set scheduledSqlContent(value: string) {
    this._scheduledSqlContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledSqlContentInput() {
    return this._scheduledSqlContent;
  }

  // src_topic_id - computed: false, optional: false, required: true
  private _srcTopicId?: string; 
  public get srcTopicId() {
    return this.getStringAttribute('src_topic_id');
  }
  public set srcTopicId(value: string) {
    this._srcTopicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTopicIdInput() {
    return this._srcTopicId;
  }

  // src_topic_region - computed: false, optional: false, required: true
  private _srcTopicRegion?: string; 
  public get srcTopicRegion() {
    return this.getStringAttribute('src_topic_region');
  }
  public set srcTopicRegion(value: string) {
    this._srcTopicRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTopicRegionInput() {
    return this._srcTopicRegion;
  }

  // syntax_rule - computed: false, optional: true, required: false
  private _syntaxRule?: number; 
  public get syntaxRule() {
    return this.getNumberAttribute('syntax_rule');
  }
  public set syntaxRule(value: number) {
    this._syntaxRule = value;
  }
  public resetSyntaxRule() {
    this._syntaxRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntaxRuleInput() {
    return this._syntaxRule;
  }

  // dst_resource - computed: false, optional: false, required: true
  private _dstResource = new ClsScheduledSqlDstResourceOutputReference(this, "dst_resource");
  public get dstResource() {
    return this._dstResource;
  }
  public putDstResource(value: ClsScheduledSqlDstResource) {
    this._dstResource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstResourceInput() {
    return this._dstResource.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_flag: cdktf.numberToTerraform(this._enableFlag),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      process_delay: cdktf.numberToTerraform(this._processDelay),
      process_end_time: cdktf.numberToTerraform(this._processEndTime),
      process_period: cdktf.numberToTerraform(this._processPeriod),
      process_start_time: cdktf.numberToTerraform(this._processStartTime),
      process_time_window: cdktf.stringToTerraform(this._processTimeWindow),
      process_type: cdktf.numberToTerraform(this._processType),
      scheduled_sql_content: cdktf.stringToTerraform(this._scheduledSqlContent),
      src_topic_id: cdktf.stringToTerraform(this._srcTopicId),
      src_topic_region: cdktf.stringToTerraform(this._srcTopicRegion),
      syntax_rule: cdktf.numberToTerraform(this._syntaxRule),
      dst_resource: clsScheduledSqlDstResourceToTerraform(this._dstResource.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_flag: {
        value: cdktf.numberToHclTerraform(this._enableFlag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      process_delay: {
        value: cdktf.numberToHclTerraform(this._processDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      process_end_time: {
        value: cdktf.numberToHclTerraform(this._processEndTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      process_period: {
        value: cdktf.numberToHclTerraform(this._processPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      process_start_time: {
        value: cdktf.numberToHclTerraform(this._processStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      process_time_window: {
        value: cdktf.stringToHclTerraform(this._processTimeWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      process_type: {
        value: cdktf.numberToHclTerraform(this._processType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scheduled_sql_content: {
        value: cdktf.stringToHclTerraform(this._scheduledSqlContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_topic_id: {
        value: cdktf.stringToHclTerraform(this._srcTopicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_topic_region: {
        value: cdktf.stringToHclTerraform(this._srcTopicRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syntax_rule: {
        value: cdktf.numberToHclTerraform(this._syntaxRule),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dst_resource: {
        value: clsScheduledSqlDstResourceToHclTerraform(this._dstResource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClsScheduledSqlDstResourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
