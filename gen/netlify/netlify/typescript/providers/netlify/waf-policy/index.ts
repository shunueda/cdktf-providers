// https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/waf_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/waf_policy#description WafPolicy#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/waf_policy#name WafPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/waf_policy#rule_sets WafPolicy#rule_sets}
  */
  readonly ruleSets: WafPolicyRuleSets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/waf_policy#team_id WafPolicy#team_id}
  */
  readonly teamId: string;
}
export interface WafPolicyRuleSetsRuleOverrides {
  /**
  * log_only or none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/waf_policy#action WafPolicy#action}
  */
  readonly action: string;
}

export function wafPolicyRuleSetsRuleOverridesToTerraform(struct?: WafPolicyRuleSetsRuleOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function wafPolicyRuleSetsRuleOverridesToHclTerraform(struct?: WafPolicyRuleSetsRuleOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafPolicyRuleSetsRuleOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): WafPolicyRuleSetsRuleOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafPolicyRuleSetsRuleOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
    }
  }

  // action - computed: true, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }
}

export class WafPolicyRuleSetsRuleOverridesMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: WafPolicyRuleSetsRuleOverrides } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): WafPolicyRuleSetsRuleOverridesOutputReference {
    return new WafPolicyRuleSetsRuleOverridesOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface WafPolicyRuleSets {
  /**
  * Thresholds for each category, e.g. fixation, injection-generic, injection-java, injection-php, lfi, protocol, rce, reputation-scanner, rfi, sqli, ssrf, xss
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/waf_policy#category_thresholds WafPolicy#category_thresholds}
  */
  readonly categoryThresholds?: { [key: string]: number };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/waf_policy#excluded_patterns WafPolicy#excluded_patterns}
  */
  readonly excludedPatterns?: string[];
  /**
  * The managed ID of the rule set. Currently, only crs-basic is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/waf_policy#managed_id WafPolicy#managed_id}
  */
  readonly managedId: string;
  /**
  * Recommended default value is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/waf_policy#overall_threshold WafPolicy#overall_threshold}
  */
  readonly overallThreshold: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/waf_policy#passive_mode WafPolicy#passive_mode}
  */
  readonly passiveMode: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/waf_policy#rule_overrides WafPolicy#rule_overrides}
  */
  readonly ruleOverrides?: { [key: string]: WafPolicyRuleSetsRuleOverrides } | cdktf.IResolvable;
}

export function wafPolicyRuleSetsToTerraform(struct?: WafPolicyRuleSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category_thresholds: cdktf.hashMapper(cdktf.numberToTerraform)(struct!.categoryThresholds),
    excluded_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedPatterns),
    managed_id: cdktf.stringToTerraform(struct!.managedId),
    overall_threshold: cdktf.numberToTerraform(struct!.overallThreshold),
    passive_mode: cdktf.booleanToTerraform(struct!.passiveMode),
    rule_overrides: cdktf.hashMapper(wafPolicyRuleSetsRuleOverridesToTerraform)(struct!.ruleOverrides),
  }
}


export function wafPolicyRuleSetsToHclTerraform(struct?: WafPolicyRuleSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category_thresholds: {
      value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(struct!.categoryThresholds),
      isBlock: false,
      type: "map",
      storageClassType: "numberMap",
    },
    excluded_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedPatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    managed_id: {
      value: cdktf.stringToHclTerraform(struct!.managedId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    overall_threshold: {
      value: cdktf.numberToHclTerraform(struct!.overallThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    passive_mode: {
      value: cdktf.booleanToHclTerraform(struct!.passiveMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rule_overrides: {
      value: cdktf.hashMapperHcl(wafPolicyRuleSetsRuleOverridesToHclTerraform)(struct!.ruleOverrides),
      isBlock: true,
      type: "map",
      storageClassType: "WafPolicyRuleSetsRuleOverridesMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafPolicyRuleSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafPolicyRuleSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categoryThresholds !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryThresholds = this._categoryThresholds;
    }
    if (this._excludedPatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedPatterns = this._excludedPatterns;
    }
    if (this._managedId !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedId = this._managedId;
    }
    if (this._overallThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.overallThreshold = this._overallThreshold;
    }
    if (this._passiveMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.passiveMode = this._passiveMode;
    }
    if (this._ruleOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleOverrides = this._ruleOverrides?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafPolicyRuleSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categoryThresholds = undefined;
      this._excludedPatterns = undefined;
      this._managedId = undefined;
      this._overallThreshold = undefined;
      this._passiveMode = undefined;
      this._ruleOverrides.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categoryThresholds = value.categoryThresholds;
      this._excludedPatterns = value.excludedPatterns;
      this._managedId = value.managedId;
      this._overallThreshold = value.overallThreshold;
      this._passiveMode = value.passiveMode;
      this._ruleOverrides.internalValue = value.ruleOverrides;
    }
  }

  // category_thresholds - computed: true, optional: true, required: false
  private _categoryThresholds?: { [key: string]: number }; 
  public get categoryThresholds() {
    return this.getNumberMapAttribute('category_thresholds');
  }
  public set categoryThresholds(value: { [key: string]: number }) {
    this._categoryThresholds = value;
  }
  public resetCategoryThresholds() {
    this._categoryThresholds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryThresholdsInput() {
    return this._categoryThresholds;
  }

  // excluded_patterns - computed: false, optional: true, required: false
  private _excludedPatterns?: string[]; 
  public get excludedPatterns() {
    return this.getListAttribute('excluded_patterns');
  }
  public set excludedPatterns(value: string[]) {
    this._excludedPatterns = value;
  }
  public resetExcludedPatterns() {
    this._excludedPatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPatternsInput() {
    return this._excludedPatterns;
  }

  // managed_id - computed: false, optional: false, required: true
  private _managedId?: string; 
  public get managedId() {
    return this.getStringAttribute('managed_id');
  }
  public set managedId(value: string) {
    this._managedId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedIdInput() {
    return this._managedId;
  }

  // overall_threshold - computed: false, optional: false, required: true
  private _overallThreshold?: number; 
  public get overallThreshold() {
    return this.getNumberAttribute('overall_threshold');
  }
  public set overallThreshold(value: number) {
    this._overallThreshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get overallThresholdInput() {
    return this._overallThreshold;
  }

  // passive_mode - computed: false, optional: false, required: true
  private _passiveMode?: boolean | cdktf.IResolvable; 
  public get passiveMode() {
    return this.getBooleanAttribute('passive_mode');
  }
  public set passiveMode(value: boolean | cdktf.IResolvable) {
    this._passiveMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveModeInput() {
    return this._passiveMode;
  }

  // rule_overrides - computed: true, optional: true, required: false
  private _ruleOverrides = new WafPolicyRuleSetsRuleOverridesMap(this, "rule_overrides");
  public get ruleOverrides() {
    return this._ruleOverrides;
  }
  public putRuleOverrides(value: { [key: string]: WafPolicyRuleSetsRuleOverrides } | cdktf.IResolvable) {
    this._ruleOverrides.internalValue = value;
  }
  public resetRuleOverrides() {
    this._ruleOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleOverridesInput() {
    return this._ruleOverrides.internalValue;
  }
}

export class WafPolicyRuleSetsList extends cdktf.ComplexList {
  public internalValue? : WafPolicyRuleSets[] | cdktf.IResolvable

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
  public get(index: number): WafPolicyRuleSetsOutputReference {
    return new WafPolicyRuleSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/waf_policy netlify_waf_policy}
*/
export class WafPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netlify_waf_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafPolicy to import
  * @param importFromId The id of the existing WafPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/waf_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netlify_waf_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netlify/netlify/0.3.2/docs/resources/waf_policy netlify_waf_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: WafPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'netlify_waf_policy',
      terraformGeneratorMetadata: {
        providerName: 'netlify',
        providerVersion: '0.3.2'
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
    this._ruleSets.internalValue = config.ruleSets;
    this._teamId = config.teamId;
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

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
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

  // rule_sets - computed: false, optional: false, required: true
  private _ruleSets = new WafPolicyRuleSetsList(this, "rule_sets", false);
  public get ruleSets() {
    return this._ruleSets;
  }
  public putRuleSets(value: WafPolicyRuleSets[] | cdktf.IResolvable) {
    this._ruleSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetsInput() {
    return this._ruleSets.internalValue;
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      rule_sets: cdktf.listMapper(wafPolicyRuleSetsToTerraform, false)(this._ruleSets.internalValue),
      team_id: cdktf.stringToTerraform(this._teamId),
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
      rule_sets: {
        value: cdktf.listMapperHcl(wafPolicyRuleSetsToHclTerraform, false)(this._ruleSets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafPolicyRuleSetsList",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
