// https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/observability_logalertgroup
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObservabilityLogalertgroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Observability instance ID to which the log alert group is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/observability_logalertgroup#instance_id ObservabilityLogalertgroup#instance_id}
  */
  readonly instanceId: string;
  /**
  * Specifies the frequency at which rules within the group are evaluated. The interval must be at least 60 seconds and defaults to 60 seconds if not set. Supported formats include hours, minutes, and seconds, either singly or in combination. Examples of valid formats are: '5h30m40s', '5h', '5h30m', '60m', and '60s'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/observability_logalertgroup#interval ObservabilityLogalertgroup#interval}
  */
  readonly interval?: string;
  /**
  * The name of the log alert group. Is the identifier and must be unique in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/observability_logalertgroup#name ObservabilityLogalertgroup#name}
  */
  readonly name: string;
  /**
  * STACKIT project ID to which the log alert group is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/observability_logalertgroup#project_id ObservabilityLogalertgroup#project_id}
  */
  readonly projectId: string;
  /**
  * Rules for the log alert group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/observability_logalertgroup#rules ObservabilityLogalertgroup#rules}
  */
  readonly rules: ObservabilityLogalertgroupRules[] | cdktf.IResolvable;
}
export interface ObservabilityLogalertgroupRules {
  /**
  * The name of the alert rule. Is the identifier and must be unique in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/observability_logalertgroup#alert ObservabilityLogalertgroup#alert}
  */
  readonly alert: string;
  /**
  * A map of key:value. Annotations to add or overwrite for each alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/observability_logalertgroup#annotations ObservabilityLogalertgroup#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * The LogQL expression to evaluate. Every evaluation cycle this is evaluated at the current time, and all resultant time series become pending/firing alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/observability_logalertgroup#expression ObservabilityLogalertgroup#expression}
  */
  readonly expression: string;
  /**
  * Alerts are considered firing once they have been returned for this long. Alerts which have not yet fired for long enough are considered pending. Default is 0s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/observability_logalertgroup#for ObservabilityLogalertgroup#for}
  */
  readonly for?: string;
  /**
  * A map of key:value. Labels to add or overwrite for each alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/observability_logalertgroup#labels ObservabilityLogalertgroup#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function observabilityLogalertgroupRulesToTerraform(struct?: ObservabilityLogalertgroupRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert: cdktf.stringToTerraform(struct!.alert),
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    expression: cdktf.stringToTerraform(struct!.expression),
    for: cdktf.stringToTerraform(struct!.for),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function observabilityLogalertgroupRulesToHclTerraform(struct?: ObservabilityLogalertgroupRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert: {
      value: cdktf.stringToHclTerraform(struct!.alert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    for: {
      value: cdktf.stringToHclTerraform(struct!.for),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObservabilityLogalertgroupRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObservabilityLogalertgroupRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alert !== undefined) {
      hasAnyValues = true;
      internalValueResult.alert = this._alert;
    }
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._for !== undefined) {
      hasAnyValues = true;
      internalValueResult.for = this._for;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObservabilityLogalertgroupRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alert = undefined;
      this._annotations = undefined;
      this._expression = undefined;
      this._for = undefined;
      this._labels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alert = value.alert;
      this._annotations = value.annotations;
      this._expression = value.expression;
      this._for = value.for;
      this._labels = value.labels;
    }
  }

  // alert - computed: false, optional: false, required: true
  private _alert?: string; 
  public get alert() {
    return this.getStringAttribute('alert');
  }
  public set alert(value: string) {
    this._alert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert;
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // for - computed: false, optional: true, required: false
  private _for?: string; 
  public get for() {
    return this.getStringAttribute('for');
  }
  public set for(value: string) {
    this._for = value;
  }
  public resetFor() {
    this._for = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forInput() {
    return this._for;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }
}

export class ObservabilityLogalertgroupRulesList extends cdktf.ComplexList {
  public internalValue? : ObservabilityLogalertgroupRules[] | cdktf.IResolvable

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
  public get(index: number): ObservabilityLogalertgroupRulesOutputReference {
    return new ObservabilityLogalertgroupRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/observability_logalertgroup stackit_observability_logalertgroup}
*/
export class ObservabilityLogalertgroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_observability_logalertgroup";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObservabilityLogalertgroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObservabilityLogalertgroup to import
  * @param importFromId The id of the existing ObservabilityLogalertgroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/observability_logalertgroup#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObservabilityLogalertgroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_observability_logalertgroup", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.72.0/docs/resources/observability_logalertgroup stackit_observability_logalertgroup} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObservabilityLogalertgroupConfig
  */
  public constructor(scope: Construct, id: string, config: ObservabilityLogalertgroupConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_observability_logalertgroup',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.72.0',
        providerVersionConstraint: '0.72.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._instanceId = config.instanceId;
    this._interval = config.interval;
    this._name = config.name;
    this._projectId = config.projectId;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // interval - computed: true, optional: true, required: false
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new ObservabilityLogalertgroupRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ObservabilityLogalertgroupRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_id: cdktf.stringToTerraform(this._instanceId),
      interval: cdktf.stringToTerraform(this._interval),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.stringToTerraform(this._projectId),
      rules: cdktf.listMapper(observabilityLogalertgroupRulesToTerraform, false)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.stringToHclTerraform(this._interval),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(observabilityLogalertgroupRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObservabilityLogalertgroupRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
