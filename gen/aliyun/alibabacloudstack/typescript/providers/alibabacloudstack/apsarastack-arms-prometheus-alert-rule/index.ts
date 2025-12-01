// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_prometheus_alert_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackArmsPrometheusAlertRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_prometheus_alert_rule#cluster_id ApsarastackArmsPrometheusAlertRule#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_prometheus_alert_rule#dispatch_rule_id ApsarastackArmsPrometheusAlertRule#dispatch_rule_id}
  */
  readonly dispatchRuleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_prometheus_alert_rule#duration ApsarastackArmsPrometheusAlertRule#duration}
  */
  readonly duration: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_prometheus_alert_rule#expression ApsarastackArmsPrometheusAlertRule#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_prometheus_alert_rule#id ApsarastackArmsPrometheusAlertRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_prometheus_alert_rule#message ApsarastackArmsPrometheusAlertRule#message}
  */
  readonly message: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_prometheus_alert_rule#notify_type ApsarastackArmsPrometheusAlertRule#notify_type}
  */
  readonly notifyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_prometheus_alert_rule#prometheus_alert_rule_name ApsarastackArmsPrometheusAlertRule#prometheus_alert_rule_name}
  */
  readonly prometheusAlertRuleName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_prometheus_alert_rule#type ApsarastackArmsPrometheusAlertRule#type}
  */
  readonly type?: string;
  /**
  * annotations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_prometheus_alert_rule#annotations ApsarastackArmsPrometheusAlertRule#annotations}
  */
  readonly annotations?: ApsarastackArmsPrometheusAlertRuleAnnotations[] | cdktf.IResolvable;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_prometheus_alert_rule#labels ApsarastackArmsPrometheusAlertRule#labels}
  */
  readonly labels?: ApsarastackArmsPrometheusAlertRuleLabels[] | cdktf.IResolvable;
}
export interface ApsarastackArmsPrometheusAlertRuleAnnotations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_prometheus_alert_rule#name ApsarastackArmsPrometheusAlertRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_prometheus_alert_rule#value ApsarastackArmsPrometheusAlertRule#value}
  */
  readonly value?: string;
}

export function apsarastackArmsPrometheusAlertRuleAnnotationsToTerraform(struct?: ApsarastackArmsPrometheusAlertRuleAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apsarastackArmsPrometheusAlertRuleAnnotationsToHclTerraform(struct?: ApsarastackArmsPrometheusAlertRuleAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class ApsarastackArmsPrometheusAlertRuleAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackArmsPrometheusAlertRuleAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackArmsPrometheusAlertRuleAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApsarastackArmsPrometheusAlertRuleAnnotationsList extends cdktf.ComplexList {
  public internalValue? : ApsarastackArmsPrometheusAlertRuleAnnotations[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackArmsPrometheusAlertRuleAnnotationsOutputReference {
    return new ApsarastackArmsPrometheusAlertRuleAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackArmsPrometheusAlertRuleLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_prometheus_alert_rule#name ApsarastackArmsPrometheusAlertRule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_prometheus_alert_rule#value ApsarastackArmsPrometheusAlertRule#value}
  */
  readonly value?: string;
}

export function apsarastackArmsPrometheusAlertRuleLabelsToTerraform(struct?: ApsarastackArmsPrometheusAlertRuleLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apsarastackArmsPrometheusAlertRuleLabelsToHclTerraform(struct?: ApsarastackArmsPrometheusAlertRuleLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class ApsarastackArmsPrometheusAlertRuleLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApsarastackArmsPrometheusAlertRuleLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackArmsPrometheusAlertRuleLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApsarastackArmsPrometheusAlertRuleLabelsList extends cdktf.ComplexList {
  public internalValue? : ApsarastackArmsPrometheusAlertRuleLabels[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackArmsPrometheusAlertRuleLabelsOutputReference {
    return new ApsarastackArmsPrometheusAlertRuleLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_prometheus_alert_rule apsarastack_arms_prometheus_alert_rule}
*/
export class ApsarastackArmsPrometheusAlertRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_arms_prometheus_alert_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackArmsPrometheusAlertRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackArmsPrometheusAlertRule to import
  * @param importFromId The id of the existing ApsarastackArmsPrometheusAlertRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_prometheus_alert_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackArmsPrometheusAlertRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_arms_prometheus_alert_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_arms_prometheus_alert_rule apsarastack_arms_prometheus_alert_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackArmsPrometheusAlertRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackArmsPrometheusAlertRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_arms_prometheus_alert_rule',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._dispatchRuleId = config.dispatchRuleId;
    this._duration = config.duration;
    this._expression = config.expression;
    this._id = config.id;
    this._message = config.message;
    this._notifyType = config.notifyType;
    this._prometheusAlertRuleName = config.prometheusAlertRuleName;
    this._type = config.type;
    this._annotations.internalValue = config.annotations;
    this._labels.internalValue = config.labels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // dispatch_rule_id - computed: false, optional: true, required: false
  private _dispatchRuleId?: string; 
  public get dispatchRuleId() {
    return this.getStringAttribute('dispatch_rule_id');
  }
  public set dispatchRuleId(value: string) {
    this._dispatchRuleId = value;
  }
  public resetDispatchRuleId() {
    this._dispatchRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dispatchRuleIdInput() {
    return this._dispatchRuleId;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // notify_type - computed: false, optional: true, required: false
  private _notifyType?: string; 
  public get notifyType() {
    return this.getStringAttribute('notify_type');
  }
  public set notifyType(value: string) {
    this._notifyType = value;
  }
  public resetNotifyType() {
    this._notifyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyTypeInput() {
    return this._notifyType;
  }

  // prometheus_alert_rule_name - computed: false, optional: false, required: true
  private _prometheusAlertRuleName?: string; 
  public get prometheusAlertRuleName() {
    return this.getStringAttribute('prometheus_alert_rule_name');
  }
  public set prometheusAlertRuleName(value: string) {
    this._prometheusAlertRuleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusAlertRuleNameInput() {
    return this._prometheusAlertRuleName;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // type - computed: true, optional: true, required: false
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
  private _annotations = new ApsarastackArmsPrometheusAlertRuleAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: ApsarastackArmsPrometheusAlertRuleAnnotations[] | cdktf.IResolvable) {
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
  private _labels = new ApsarastackArmsPrometheusAlertRuleLabelsList(this, "labels", true);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: ApsarastackArmsPrometheusAlertRuleLabels[] | cdktf.IResolvable) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      dispatch_rule_id: cdktf.stringToTerraform(this._dispatchRuleId),
      duration: cdktf.stringToTerraform(this._duration),
      expression: cdktf.stringToTerraform(this._expression),
      id: cdktf.stringToTerraform(this._id),
      message: cdktf.stringToTerraform(this._message),
      notify_type: cdktf.stringToTerraform(this._notifyType),
      prometheus_alert_rule_name: cdktf.stringToTerraform(this._prometheusAlertRuleName),
      type: cdktf.stringToTerraform(this._type),
      annotations: cdktf.listMapper(apsarastackArmsPrometheusAlertRuleAnnotationsToTerraform, true)(this._annotations.internalValue),
      labels: cdktf.listMapper(apsarastackArmsPrometheusAlertRuleLabelsToTerraform, true)(this._labels.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dispatch_rule_id: {
        value: cdktf.stringToHclTerraform(this._dispatchRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration: {
        value: cdktf.stringToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expression: {
        value: cdktf.stringToHclTerraform(this._expression),
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
      message: {
        value: cdktf.stringToHclTerraform(this._message),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notify_type: {
        value: cdktf.stringToHclTerraform(this._notifyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prometheus_alert_rule_name: {
        value: cdktf.stringToHclTerraform(this._prometheusAlertRuleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotations: {
        value: cdktf.listMapperHcl(apsarastackArmsPrometheusAlertRuleAnnotationsToHclTerraform, true)(this._annotations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackArmsPrometheusAlertRuleAnnotationsList",
      },
      labels: {
        value: cdktf.listMapperHcl(apsarastackArmsPrometheusAlertRuleLabelsToHclTerraform, true)(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackArmsPrometheusAlertRuleLabelsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
