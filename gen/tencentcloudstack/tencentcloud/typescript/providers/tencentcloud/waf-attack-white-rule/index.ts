// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/waf_attack_white_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafAttackWhiteRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/waf_attack_white_rule#domain WafAttackWhiteRule#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/waf_attack_white_rule#id WafAttackWhiteRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 0: Whiten according to a specific rule ID, 1: Whiten according to the rule type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/waf_attack_white_rule#mode WafAttackWhiteRule#mode}
  */
  readonly mode?: number;
  /**
  * Rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/waf_attack_white_rule#name WafAttackWhiteRule#name}
  */
  readonly name?: string;
  /**
  * Whitelist of rule IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/waf_attack_white_rule#signature_ids WafAttackWhiteRule#signature_ids}
  */
  readonly signatureIds?: string[];
  /**
  * Rule status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/waf_attack_white_rule#status WafAttackWhiteRule#status}
  */
  readonly status: number;
  /**
  * The whitened category rule ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/waf_attack_white_rule#type_ids WafAttackWhiteRule#type_ids}
  */
  readonly typeIds?: string[];
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/waf_attack_white_rule#rules WafAttackWhiteRule#rules}
  */
  readonly rules: WafAttackWhiteRuleRules[] | cdktf.IResolvable;
}
export interface WafAttackWhiteRuleRules {
  /**
  * Matching content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/waf_attack_white_rule#match_content WafAttackWhiteRule#match_content}
  */
  readonly matchContent: string;
  /**
  * Matching domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/waf_attack_white_rule#match_field WafAttackWhiteRule#match_field}
  */
  readonly matchField: string;
  /**
  * Matching method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/waf_attack_white_rule#match_method WafAttackWhiteRule#match_method}
  */
  readonly matchMethod: string;
  /**
  * Matching params.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/waf_attack_white_rule#match_params WafAttackWhiteRule#match_params}
  */
  readonly matchParams?: string;
}

export function wafAttackWhiteRuleRulesToTerraform(struct?: WafAttackWhiteRuleRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_content: cdktf.stringToTerraform(struct!.matchContent),
    match_field: cdktf.stringToTerraform(struct!.matchField),
    match_method: cdktf.stringToTerraform(struct!.matchMethod),
    match_params: cdktf.stringToTerraform(struct!.matchParams),
  }
}


export function wafAttackWhiteRuleRulesToHclTerraform(struct?: WafAttackWhiteRuleRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_content: {
      value: cdktf.stringToHclTerraform(struct!.matchContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_field: {
      value: cdktf.stringToHclTerraform(struct!.matchField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_method: {
      value: cdktf.stringToHclTerraform(struct!.matchMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_params: {
      value: cdktf.stringToHclTerraform(struct!.matchParams),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafAttackWhiteRuleRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafAttackWhiteRuleRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchContent = this._matchContent;
    }
    if (this._matchField !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchField = this._matchField;
    }
    if (this._matchMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchMethod = this._matchMethod;
    }
    if (this._matchParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchParams = this._matchParams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafAttackWhiteRuleRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchContent = undefined;
      this._matchField = undefined;
      this._matchMethod = undefined;
      this._matchParams = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchContent = value.matchContent;
      this._matchField = value.matchField;
      this._matchMethod = value.matchMethod;
      this._matchParams = value.matchParams;
    }
  }

  // match_content - computed: false, optional: false, required: true
  private _matchContent?: string; 
  public get matchContent() {
    return this.getStringAttribute('match_content');
  }
  public set matchContent(value: string) {
    this._matchContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchContentInput() {
    return this._matchContent;
  }

  // match_field - computed: false, optional: false, required: true
  private _matchField?: string; 
  public get matchField() {
    return this.getStringAttribute('match_field');
  }
  public set matchField(value: string) {
    this._matchField = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldInput() {
    return this._matchField;
  }

  // match_method - computed: false, optional: false, required: true
  private _matchMethod?: string; 
  public get matchMethod() {
    return this.getStringAttribute('match_method');
  }
  public set matchMethod(value: string) {
    this._matchMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchMethodInput() {
    return this._matchMethod;
  }

  // match_params - computed: false, optional: true, required: false
  private _matchParams?: string; 
  public get matchParams() {
    return this.getStringAttribute('match_params');
  }
  public set matchParams(value: string) {
    this._matchParams = value;
  }
  public resetMatchParams() {
    this._matchParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchParamsInput() {
    return this._matchParams;
  }
}

export class WafAttackWhiteRuleRulesList extends cdktf.ComplexList {
  public internalValue? : WafAttackWhiteRuleRules[] | cdktf.IResolvable

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
  public get(index: number): WafAttackWhiteRuleRulesOutputReference {
    return new WafAttackWhiteRuleRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/waf_attack_white_rule tencentcloud_waf_attack_white_rule}
*/
export class WafAttackWhiteRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_waf_attack_white_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafAttackWhiteRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafAttackWhiteRule to import
  * @param importFromId The id of the existing WafAttackWhiteRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/waf_attack_white_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafAttackWhiteRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_waf_attack_white_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/waf_attack_white_rule tencentcloud_waf_attack_white_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafAttackWhiteRuleConfig
  */
  public constructor(scope: Construct, id: string, config: WafAttackWhiteRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_waf_attack_white_rule',
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
    this._domain = config.domain;
    this._id = config.id;
    this._mode = config.mode;
    this._name = config.name;
    this._signatureIds = config.signatureIds;
    this._status = config.status;
    this._typeIds = config.typeIds;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // mode - computed: true, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: true, optional: true, required: false
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

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }

  // signature_ids - computed: true, optional: true, required: false
  private _signatureIds?: string[]; 
  public get signatureIds() {
    return cdktf.Fn.tolist(this.getListAttribute('signature_ids'));
  }
  public set signatureIds(value: string[]) {
    this._signatureIds = value;
  }
  public resetSignatureIds() {
    this._signatureIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureIdsInput() {
    return this._signatureIds;
  }

  // status - computed: false, optional: false, required: true
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // type_ids - computed: true, optional: true, required: false
  private _typeIds?: string[]; 
  public get typeIds() {
    return cdktf.Fn.tolist(this.getListAttribute('type_ids'));
  }
  public set typeIds(value: string[]) {
    this._typeIds = value;
  }
  public resetTypeIds() {
    this._typeIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeIdsInput() {
    return this._typeIds;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new WafAttackWhiteRuleRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: WafAttackWhiteRuleRules[] | cdktf.IResolvable) {
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
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.numberToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      signature_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._signatureIds),
      status: cdktf.numberToTerraform(this._status),
      type_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._typeIds),
      rules: cdktf.listMapper(wafAttackWhiteRuleRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      mode: {
        value: cdktf.numberToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._signatureIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._typeIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rules: {
        value: cdktf.listMapperHcl(wafAttackWhiteRuleRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafAttackWhiteRuleRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
