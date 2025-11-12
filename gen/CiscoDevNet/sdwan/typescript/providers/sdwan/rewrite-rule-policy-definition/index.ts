// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rewrite_rule_policy_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RewriteRulePolicyDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rewrite_rule_policy_definition#description RewriteRulePolicyDefinition#description}
  */
  readonly description: string;
  /**
  * The name of the policy definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rewrite_rule_policy_definition#name RewriteRulePolicyDefinition#name}
  */
  readonly name: string;
  /**
  * List of rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rewrite_rule_policy_definition#rules RewriteRulePolicyDefinition#rules}
  */
  readonly rules: RewriteRulePolicyDefinitionRules[] | cdktf.IResolvable;
}
export interface RewriteRulePolicyDefinitionRules {
  /**
  * Class map ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rewrite_rule_policy_definition#class_map_id RewriteRulePolicyDefinition#class_map_id}
  */
  readonly classMapId: string;
  /**
  * Class map version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rewrite_rule_policy_definition#class_map_version RewriteRulePolicyDefinition#class_map_version}
  */
  readonly classMapVersion?: number;
  /**
  * DSCP
  *   - Range: `0`-`63`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rewrite_rule_policy_definition#dscp RewriteRulePolicyDefinition#dscp}
  */
  readonly dscp: number;
  /**
  * Layer2 CoS
  *   - Range: `0`-`7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rewrite_rule_policy_definition#layer2_cos RewriteRulePolicyDefinition#layer2_cos}
  */
  readonly layer2Cos?: number;
  /**
  * Priority
  *   - Choices: `high`, `low`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rewrite_rule_policy_definition#priority RewriteRulePolicyDefinition#priority}
  */
  readonly priority: string;
}

export function rewriteRulePolicyDefinitionRulesToTerraform(struct?: RewriteRulePolicyDefinitionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_map_id: cdktf.stringToTerraform(struct!.classMapId),
    class_map_version: cdktf.numberToTerraform(struct!.classMapVersion),
    dscp: cdktf.numberToTerraform(struct!.dscp),
    layer2_cos: cdktf.numberToTerraform(struct!.layer2Cos),
    priority: cdktf.stringToTerraform(struct!.priority),
  }
}


export function rewriteRulePolicyDefinitionRulesToHclTerraform(struct?: RewriteRulePolicyDefinitionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_map_id: {
      value: cdktf.stringToHclTerraform(struct!.classMapId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_map_version: {
      value: cdktf.numberToHclTerraform(struct!.classMapVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dscp: {
      value: cdktf.numberToHclTerraform(struct!.dscp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    layer2_cos: {
      value: cdktf.numberToHclTerraform(struct!.layer2Cos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RewriteRulePolicyDefinitionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RewriteRulePolicyDefinitionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classMapId !== undefined) {
      hasAnyValues = true;
      internalValueResult.classMapId = this._classMapId;
    }
    if (this._classMapVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.classMapVersion = this._classMapVersion;
    }
    if (this._dscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dscp = this._dscp;
    }
    if (this._layer2Cos !== undefined) {
      hasAnyValues = true;
      internalValueResult.layer2Cos = this._layer2Cos;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RewriteRulePolicyDefinitionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classMapId = undefined;
      this._classMapVersion = undefined;
      this._dscp = undefined;
      this._layer2Cos = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classMapId = value.classMapId;
      this._classMapVersion = value.classMapVersion;
      this._dscp = value.dscp;
      this._layer2Cos = value.layer2Cos;
      this._priority = value.priority;
    }
  }

  // class_map_id - computed: false, optional: false, required: true
  private _classMapId?: string; 
  public get classMapId() {
    return this.getStringAttribute('class_map_id');
  }
  public set classMapId(value: string) {
    this._classMapId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classMapIdInput() {
    return this._classMapId;
  }

  // class_map_version - computed: false, optional: true, required: false
  private _classMapVersion?: number; 
  public get classMapVersion() {
    return this.getNumberAttribute('class_map_version');
  }
  public set classMapVersion(value: number) {
    this._classMapVersion = value;
  }
  public resetClassMapVersion() {
    this._classMapVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classMapVersionInput() {
    return this._classMapVersion;
  }

  // dscp - computed: false, optional: false, required: true
  private _dscp?: number; 
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }
  public set dscp(value: number) {
    this._dscp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dscpInput() {
    return this._dscp;
  }

  // layer2_cos - computed: false, optional: true, required: false
  private _layer2Cos?: number; 
  public get layer2Cos() {
    return this.getNumberAttribute('layer2_cos');
  }
  public set layer2Cos(value: number) {
    this._layer2Cos = value;
  }
  public resetLayer2Cos() {
    this._layer2Cos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer2CosInput() {
    return this._layer2Cos;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class RewriteRulePolicyDefinitionRulesList extends cdktf.ComplexList {
  public internalValue? : RewriteRulePolicyDefinitionRules[] | cdktf.IResolvable

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
  public get(index: number): RewriteRulePolicyDefinitionRulesOutputReference {
    return new RewriteRulePolicyDefinitionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rewrite_rule_policy_definition sdwan_rewrite_rule_policy_definition}
*/
export class RewriteRulePolicyDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_rewrite_rule_policy_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RewriteRulePolicyDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RewriteRulePolicyDefinition to import
  * @param importFromId The id of the existing RewriteRulePolicyDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rewrite_rule_policy_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RewriteRulePolicyDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_rewrite_rule_policy_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/rewrite_rule_policy_definition sdwan_rewrite_rule_policy_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RewriteRulePolicyDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: RewriteRulePolicyDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_rewrite_rule_policy_definition',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._name = config.name;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // rules - computed: false, optional: false, required: true
  private _rules = new RewriteRulePolicyDefinitionRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: RewriteRulePolicyDefinitionRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      rules: cdktf.listMapper(rewriteRulePolicyDefinitionRulesToTerraform, false)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      rules: {
        value: cdktf.listMapperHcl(rewriteRulePolicyDefinitionRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RewriteRulePolicyDefinitionRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
