// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/grail_metrics_allowlist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrailMetricsAllowlistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/grail_metrics_allowlist#id GrailMetricsAllowlist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * allow_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/grail_metrics_allowlist#allow_rules GrailMetricsAllowlist#allow_rules}
  */
  readonly allowRules?: GrailMetricsAllowlistAllowRules;
}
export interface GrailMetricsAllowlistAllowRulesAllowRule {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/grail_metrics_allowlist#enabled GrailMetricsAllowlist#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Metric key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/grail_metrics_allowlist#metric_key GrailMetricsAllowlist#metric_key}
  */
  readonly metricKey: string;
  /**
  * Possible Values: `CONTAINS`, `EQUALS`, `STARTSWITH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/grail_metrics_allowlist#pattern GrailMetricsAllowlist#pattern}
  */
  readonly pattern: string;
}

export function grailMetricsAllowlistAllowRulesAllowRuleToTerraform(struct?: GrailMetricsAllowlistAllowRulesAllowRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    metric_key: cdktf.stringToTerraform(struct!.metricKey),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function grailMetricsAllowlistAllowRulesAllowRuleToHclTerraform(struct?: GrailMetricsAllowlistAllowRulesAllowRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_key: {
      value: cdktf.stringToHclTerraform(struct!.metricKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrailMetricsAllowlistAllowRulesAllowRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GrailMetricsAllowlistAllowRulesAllowRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._metricKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricKey = this._metricKey;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrailMetricsAllowlistAllowRulesAllowRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._metricKey = undefined;
      this._pattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._metricKey = value.metricKey;
      this._pattern = value.pattern;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // metric_key - computed: false, optional: false, required: true
  private _metricKey?: string; 
  public get metricKey() {
    return this.getStringAttribute('metric_key');
  }
  public set metricKey(value: string) {
    this._metricKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricKeyInput() {
    return this._metricKey;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}

export class GrailMetricsAllowlistAllowRulesAllowRuleList extends cdktf.ComplexList {
  public internalValue? : GrailMetricsAllowlistAllowRulesAllowRule[] | cdktf.IResolvable

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
  public get(index: number): GrailMetricsAllowlistAllowRulesAllowRuleOutputReference {
    return new GrailMetricsAllowlistAllowRulesAllowRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GrailMetricsAllowlistAllowRules {
  /**
  * allow_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/grail_metrics_allowlist#allow_rule GrailMetricsAllowlist#allow_rule}
  */
  readonly allowRule: GrailMetricsAllowlistAllowRulesAllowRule[] | cdktf.IResolvable;
}

export function grailMetricsAllowlistAllowRulesToTerraform(struct?: GrailMetricsAllowlistAllowRulesOutputReference | GrailMetricsAllowlistAllowRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_rule: cdktf.listMapper(grailMetricsAllowlistAllowRulesAllowRuleToTerraform, true)(struct!.allowRule),
  }
}


export function grailMetricsAllowlistAllowRulesToHclTerraform(struct?: GrailMetricsAllowlistAllowRulesOutputReference | GrailMetricsAllowlistAllowRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_rule: {
      value: cdktf.listMapperHcl(grailMetricsAllowlistAllowRulesAllowRuleToHclTerraform, true)(struct!.allowRule),
      isBlock: true,
      type: "set",
      storageClassType: "GrailMetricsAllowlistAllowRulesAllowRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GrailMetricsAllowlistAllowRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GrailMetricsAllowlistAllowRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRule = this._allowRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GrailMetricsAllowlistAllowRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowRule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowRule.internalValue = value.allowRule;
    }
  }

  // allow_rule - computed: false, optional: false, required: true
  private _allowRule = new GrailMetricsAllowlistAllowRulesAllowRuleList(this, "allow_rule", true);
  public get allowRule() {
    return this._allowRule;
  }
  public putAllowRule(value: GrailMetricsAllowlistAllowRulesAllowRule[] | cdktf.IResolvable) {
    this._allowRule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRuleInput() {
    return this._allowRule.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/grail_metrics_allowlist dynatrace_grail_metrics_allowlist}
*/
export class GrailMetricsAllowlist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_grail_metrics_allowlist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GrailMetricsAllowlist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GrailMetricsAllowlist to import
  * @param importFromId The id of the existing GrailMetricsAllowlist that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/grail_metrics_allowlist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GrailMetricsAllowlist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_grail_metrics_allowlist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.1/docs/resources/grail_metrics_allowlist dynatrace_grail_metrics_allowlist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrailMetricsAllowlistConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GrailMetricsAllowlistConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_grail_metrics_allowlist',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.1',
        providerVersionConstraint: '1.88.1'
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
    this._allowRules.internalValue = config.allowRules;
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

  // allow_rules - computed: false, optional: true, required: false
  private _allowRules = new GrailMetricsAllowlistAllowRulesOutputReference(this, "allow_rules");
  public get allowRules() {
    return this._allowRules;
  }
  public putAllowRules(value: GrailMetricsAllowlistAllowRules) {
    this._allowRules.internalValue = value;
  }
  public resetAllowRules() {
    this._allowRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRulesInput() {
    return this._allowRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      allow_rules: grailMetricsAllowlistAllowRulesToTerraform(this._allowRules.internalValue),
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
      allow_rules: {
        value: grailMetricsAllowlistAllowRulesToHclTerraform(this._allowRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GrailMetricsAllowlistAllowRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
