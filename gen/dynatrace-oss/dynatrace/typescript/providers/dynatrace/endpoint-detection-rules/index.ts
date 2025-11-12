// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/endpoint_detection_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointDetectionRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/endpoint_detection_rules#enabled EndpointDetectionRules#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/endpoint_detection_rules#id EndpointDetectionRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/endpoint_detection_rules#insert_after EndpointDetectionRules#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * The scope of this setting (CLOUD_APPLICATION_NAMESPACE, KUBERNETES_CLUSTER, HOST_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/endpoint_detection_rules#scope EndpointDetectionRules#scope}
  */
  readonly scope?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/endpoint_detection_rules#rule EndpointDetectionRules#rule}
  */
  readonly rule: EndpointDetectionRulesRule;
}
export interface EndpointDetectionRulesRule {
  /**
  * Limits the scope of the endpoint detection rule using [DQL matcher](https://dt-url.net/l603wby) conditions on span and resource attributes.. A rule is applied only if the condition matches, otherwise the ruleset evaluation continues.
  * 
  * If empty, the condition will always match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/endpoint_detection_rules#condition EndpointDetectionRules#condition}
  */
  readonly condition?: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/endpoint_detection_rules#description EndpointDetectionRules#description}
  */
  readonly description?: string;
  /**
  * Specify attribute placeholders in curly braces, e.g. {http.route} or {rpc.method}.. Attribute value placeholders should be specified in curly braces, e.g. {http.route}, {rpc.method}. All attributes used in the placeholder are required for the rule to apply. If any of them is missing, the rule will not be applied and ruleset evaluation continues.
  * 
  * If the resolved endpoint name on a given span is empty, the request will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/endpoint_detection_rules#endpoint_name_template EndpointDetectionRules#endpoint_name_template}
  */
  readonly endpointNameTemplate?: string;
  /**
  * Possible Values: `DETECT_REQUEST_ON_ENDPOINT`, `SUPPRESS_REQUEST`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/endpoint_detection_rules#if_condition_matches EndpointDetectionRules#if_condition_matches}
  */
  readonly ifConditionMatches: string;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/endpoint_detection_rules#rule_name EndpointDetectionRules#rule_name}
  */
  readonly ruleName: string;
}

export function endpointDetectionRulesRuleToTerraform(struct?: EndpointDetectionRulesRuleOutputReference | EndpointDetectionRulesRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    description: cdktf.stringToTerraform(struct!.description),
    endpoint_name_template: cdktf.stringToTerraform(struct!.endpointNameTemplate),
    if_condition_matches: cdktf.stringToTerraform(struct!.ifConditionMatches),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
  }
}


export function endpointDetectionRulesRuleToHclTerraform(struct?: EndpointDetectionRulesRuleOutputReference | EndpointDetectionRulesRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_name_template: {
      value: cdktf.stringToHclTerraform(struct!.endpointNameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    if_condition_matches: {
      value: cdktf.stringToHclTerraform(struct!.ifConditionMatches),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointDetectionRulesRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EndpointDetectionRulesRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._endpointNameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointNameTemplate = this._endpointNameTemplate;
    }
    if (this._ifConditionMatches !== undefined) {
      hasAnyValues = true;
      internalValueResult.ifConditionMatches = this._ifConditionMatches;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointDetectionRulesRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._description = undefined;
      this._endpointNameTemplate = undefined;
      this._ifConditionMatches = undefined;
      this._ruleName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._description = value.description;
      this._endpointNameTemplate = value.endpointNameTemplate;
      this._ifConditionMatches = value.ifConditionMatches;
      this._ruleName = value.ruleName;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
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

  // endpoint_name_template - computed: false, optional: true, required: false
  private _endpointNameTemplate?: string; 
  public get endpointNameTemplate() {
    return this.getStringAttribute('endpoint_name_template');
  }
  public set endpointNameTemplate(value: string) {
    this._endpointNameTemplate = value;
  }
  public resetEndpointNameTemplate() {
    this._endpointNameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointNameTemplateInput() {
    return this._endpointNameTemplate;
  }

  // if_condition_matches - computed: false, optional: false, required: true
  private _ifConditionMatches?: string; 
  public get ifConditionMatches() {
    return this.getStringAttribute('if_condition_matches');
  }
  public set ifConditionMatches(value: string) {
    this._ifConditionMatches = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifConditionMatchesInput() {
    return this._ifConditionMatches;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/endpoint_detection_rules dynatrace_endpoint_detection_rules}
*/
export class EndpointDetectionRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_endpoint_detection_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EndpointDetectionRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EndpointDetectionRules to import
  * @param importFromId The id of the existing EndpointDetectionRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/endpoint_detection_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EndpointDetectionRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_endpoint_detection_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/endpoint_detection_rules dynatrace_endpoint_detection_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointDetectionRulesConfig
  */
  public constructor(scope: Construct, id: string, config: EndpointDetectionRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_endpoint_detection_rules',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._insertAfter = config.insertAfter;
    this._scope = config.scope;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // insert_after - computed: true, optional: true, required: false
  private _insertAfter?: string; 
  public get insertAfter() {
    return this.getStringAttribute('insert_after');
  }
  public set insertAfter(value: string) {
    this._insertAfter = value;
  }
  public resetInsertAfter() {
    this._insertAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertAfterInput() {
    return this._insertAfter;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new EndpointDetectionRulesRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: EndpointDetectionRulesRule) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      insert_after: cdktf.stringToTerraform(this._insertAfter),
      scope: cdktf.stringToTerraform(this._scope),
      rule: endpointDetectionRulesRuleToTerraform(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      insert_after: {
        value: cdktf.stringToHclTerraform(this._insertAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: endpointDetectionRulesRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EndpointDetectionRulesRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
