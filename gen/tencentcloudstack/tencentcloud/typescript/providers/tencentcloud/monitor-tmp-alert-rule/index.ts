// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_alert_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MonitorTmpAlertRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Rule alarm duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_alert_rule#duration MonitorTmpAlertRule#duration}
  */
  readonly duration?: string;
  /**
  * Rule expression, reference documentation: `https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_alert_rule#expr MonitorTmpAlertRule#expr}
  */
  readonly expr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_alert_rule#id MonitorTmpAlertRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_alert_rule#instance_id MonitorTmpAlertRule#instance_id}
  */
  readonly instanceId: string;
  /**
  * Alarm notification template id list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_alert_rule#receivers MonitorTmpAlertRule#receivers}
  */
  readonly receivers: string[];
  /**
  * Rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_alert_rule#rule_name MonitorTmpAlertRule#rule_name}
  */
  readonly ruleName: string;
  /**
  * Rule state code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_alert_rule#rule_state MonitorTmpAlertRule#rule_state}
  */
  readonly ruleState?: number;
  /**
  * Alarm Policy Template Classification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_alert_rule#type MonitorTmpAlertRule#type}
  */
  readonly type?: string;
  /**
  * annotations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_alert_rule#annotations MonitorTmpAlertRule#annotations}
  */
  readonly annotations?: MonitorTmpAlertRuleAnnotations[] | cdktf.IResolvable;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_alert_rule#labels MonitorTmpAlertRule#labels}
  */
  readonly labels?: MonitorTmpAlertRuleLabels[] | cdktf.IResolvable;
}
export interface MonitorTmpAlertRuleAnnotations {
  /**
  * key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_alert_rule#key MonitorTmpAlertRule#key}
  */
  readonly key: string;
  /**
  * value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_alert_rule#value MonitorTmpAlertRule#value}
  */
  readonly value: string;
}

export function monitorTmpAlertRuleAnnotationsToTerraform(struct?: MonitorTmpAlertRuleAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function monitorTmpAlertRuleAnnotationsToHclTerraform(struct?: MonitorTmpAlertRuleAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpAlertRuleAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTmpAlertRuleAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpAlertRuleAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MonitorTmpAlertRuleAnnotationsList extends cdktf.ComplexList {
  public internalValue? : MonitorTmpAlertRuleAnnotations[] | cdktf.IResolvable

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
  public get(index: number): MonitorTmpAlertRuleAnnotationsOutputReference {
    return new MonitorTmpAlertRuleAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MonitorTmpAlertRuleLabels {
  /**
  * key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_alert_rule#key MonitorTmpAlertRule#key}
  */
  readonly key: string;
  /**
  * value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_alert_rule#value MonitorTmpAlertRule#value}
  */
  readonly value: string;
}

export function monitorTmpAlertRuleLabelsToTerraform(struct?: MonitorTmpAlertRuleLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function monitorTmpAlertRuleLabelsToHclTerraform(struct?: MonitorTmpAlertRuleLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MonitorTmpAlertRuleLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MonitorTmpAlertRuleLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MonitorTmpAlertRuleLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class MonitorTmpAlertRuleLabelsList extends cdktf.ComplexList {
  public internalValue? : MonitorTmpAlertRuleLabels[] | cdktf.IResolvable

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
  public get(index: number): MonitorTmpAlertRuleLabelsOutputReference {
    return new MonitorTmpAlertRuleLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_alert_rule tencentcloud_monitor_tmp_alert_rule}
*/
export class MonitorTmpAlertRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_monitor_tmp_alert_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MonitorTmpAlertRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MonitorTmpAlertRule to import
  * @param importFromId The id of the existing MonitorTmpAlertRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_alert_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MonitorTmpAlertRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_monitor_tmp_alert_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/monitor_tmp_alert_rule tencentcloud_monitor_tmp_alert_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MonitorTmpAlertRuleConfig
  */
  public constructor(scope: Construct, id: string, config: MonitorTmpAlertRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_monitor_tmp_alert_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._duration = config.duration;
    this._expr = config.expr;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._receivers = config.receivers;
    this._ruleName = config.ruleName;
    this._ruleState = config.ruleState;
    this._type = config.type;
    this._annotations.internalValue = config.annotations;
    this._labels.internalValue = config.labels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // expr - computed: false, optional: false, required: true
  private _expr?: string; 
  public get expr() {
    return this.getStringAttribute('expr');
  }
  public set expr(value: string) {
    this._expr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // receivers - computed: false, optional: false, required: true
  private _receivers?: string[]; 
  public get receivers() {
    return cdktf.Fn.tolist(this.getListAttribute('receivers'));
  }
  public set receivers(value: string[]) {
    this._receivers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get receiversInput() {
    return this._receivers;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // rule_state - computed: false, optional: true, required: false
  private _ruleState?: number; 
  public get ruleState() {
    return this.getNumberAttribute('rule_state');
  }
  public set ruleState(value: number) {
    this._ruleState = value;
  }
  public resetRuleState() {
    this._ruleState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleStateInput() {
    return this._ruleState;
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

  // annotations - computed: false, optional: true, required: false
  private _annotations = new MonitorTmpAlertRuleAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: MonitorTmpAlertRuleAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new MonitorTmpAlertRuleLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: MonitorTmpAlertRuleLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      duration: cdktf.stringToTerraform(this._duration),
      expr: cdktf.stringToTerraform(this._expr),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      receivers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._receivers),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      rule_state: cdktf.numberToTerraform(this._ruleState),
      type: cdktf.stringToTerraform(this._type),
      annotations: cdktf.listMapper(monitorTmpAlertRuleAnnotationsToTerraform, true)(this._annotations.internalValue),
      labels: cdktf.listMapper(monitorTmpAlertRuleLabelsToTerraform, true)(this._labels.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      duration: {
        value: cdktf.stringToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expr: {
        value: cdktf.stringToHclTerraform(this._expr),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      receivers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._receivers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_state: {
        value: cdktf.numberToHclTerraform(this._ruleState),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotations: {
        value: cdktf.listMapperHcl(monitorTmpAlertRuleAnnotationsToHclTerraform, true)(this._annotations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MonitorTmpAlertRuleAnnotationsList",
      },
      labels: {
        value: cdktf.listMapperHcl(monitorTmpAlertRuleLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MonitorTmpAlertRuleLabelsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
