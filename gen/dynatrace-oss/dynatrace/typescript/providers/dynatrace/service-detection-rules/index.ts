// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_detection_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceDetectionRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * This setting is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_detection_rules#enabled ServiceDetectionRules#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_detection_rules#id ServiceDetectionRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Because this resource allows for ordering you may specify the ID of the resource instance that comes before this instance regarding order. If not specified when creating the setting will be added to the end of the list. If not specified during update the order will remain untouched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_detection_rules#insert_after ServiceDetectionRules#insert_after}
  */
  readonly insertAfter?: string;
  /**
  * The scope of this setting (CLOUD_APPLICATION_NAMESPACE, KUBERNETES_CLUSTER, HOST_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_detection_rules#scope ServiceDetectionRules#scope}
  */
  readonly scope?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_detection_rules#rule ServiceDetectionRules#rule}
  */
  readonly rule: ServiceDetectionRulesRule;
}
export interface ServiceDetectionRulesRule {
  /**
  * Define resource attributes that should not be part of the name but are required to detect the service, e.g. service.namespace or k8s.workload.kind.. Attributes specified here are required to apply the rule. If any of them is missing, the rule will not be applied and ruleset evaluation continues.
  * 
  * All attribute values contribute to the final service ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_detection_rules#additional_required_attributes ServiceDetectionRules#additional_required_attributes}
  */
  readonly additionalRequiredAttributes?: string[];
  /**
  * Limits the scope of the service detection rule using [DQL matcher](https://dt-url.net/l603wby) conditions on resource attributes.. A rule is applied only if the condition matches, otherwise the ruleset evaluation continues.
  * 
  * If empty, the condition will always match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_detection_rules#condition ServiceDetectionRules#condition}
  */
  readonly condition?: string;
  /**
  * no documentation available
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_detection_rules#description ServiceDetectionRules#description}
  */
  readonly description?: string;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_detection_rules#rule_name ServiceDetectionRules#rule_name}
  */
  readonly ruleName: string;
  /**
  * Specify resource attribute placeholders in curly braces, e.g. {service.name} or {k8s.workload.name}.. All attributes used in the placeholder are required for the rule to apply. If any of them is missing, the rule will not be applied and ruleset evaluation continues.
  * 
  * All resolved attribute values contribute to the final service ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_detection_rules#service_name_template ServiceDetectionRules#service_name_template}
  */
  readonly serviceNameTemplate: string;
}

export function serviceDetectionRulesRuleToTerraform(struct?: ServiceDetectionRulesRuleOutputReference | ServiceDetectionRulesRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_required_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalRequiredAttributes),
    condition: cdktf.stringToTerraform(struct!.condition),
    description: cdktf.stringToTerraform(struct!.description),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    service_name_template: cdktf.stringToTerraform(struct!.serviceNameTemplate),
  }
}


export function serviceDetectionRulesRuleToHclTerraform(struct?: ServiceDetectionRulesRuleOutputReference | ServiceDetectionRulesRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_required_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalRequiredAttributes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
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
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name_template: {
      value: cdktf.stringToHclTerraform(struct!.serviceNameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceDetectionRulesRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ServiceDetectionRulesRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalRequiredAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalRequiredAttributes = this._additionalRequiredAttributes;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._serviceNameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNameTemplate = this._serviceNameTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceDetectionRulesRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalRequiredAttributes = undefined;
      this._condition = undefined;
      this._description = undefined;
      this._ruleName = undefined;
      this._serviceNameTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalRequiredAttributes = value.additionalRequiredAttributes;
      this._condition = value.condition;
      this._description = value.description;
      this._ruleName = value.ruleName;
      this._serviceNameTemplate = value.serviceNameTemplate;
    }
  }

  // additional_required_attributes - computed: false, optional: true, required: false
  private _additionalRequiredAttributes?: string[]; 
  public get additionalRequiredAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('additional_required_attributes'));
  }
  public set additionalRequiredAttributes(value: string[]) {
    this._additionalRequiredAttributes = value;
  }
  public resetAdditionalRequiredAttributes() {
    this._additionalRequiredAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalRequiredAttributesInput() {
    return this._additionalRequiredAttributes;
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

  // service_name_template - computed: false, optional: false, required: true
  private _serviceNameTemplate?: string; 
  public get serviceNameTemplate() {
    return this.getStringAttribute('service_name_template');
  }
  public set serviceNameTemplate(value: string) {
    this._serviceNameTemplate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameTemplateInput() {
    return this._serviceNameTemplate;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_detection_rules dynatrace_service_detection_rules}
*/
export class ServiceDetectionRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_service_detection_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceDetectionRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceDetectionRules to import
  * @param importFromId The id of the existing ServiceDetectionRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_detection_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceDetectionRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_service_detection_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/service_detection_rules dynatrace_service_detection_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceDetectionRulesConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceDetectionRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_service_detection_rules',
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
  private _rule = new ServiceDetectionRulesRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: ServiceDetectionRulesRule) {
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
      rule: serviceDetectionRulesRuleToTerraform(this._rule.internalValue),
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
        value: serviceDetectionRulesRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceDetectionRulesRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
