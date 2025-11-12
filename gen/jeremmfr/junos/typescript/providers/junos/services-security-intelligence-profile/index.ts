// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_security_intelligence_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicesSecurityIntelligenceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Profile category name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_security_intelligence_profile#category ServicesSecurityIntelligenceProfile#category}
  */
  readonly category: string;
  /**
  * Text description of profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_security_intelligence_profile#description ServicesSecurityIntelligenceProfile#description}
  */
  readonly description?: string;
  /**
  * Security intelligence profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_security_intelligence_profile#name ServicesSecurityIntelligenceProfile#name}
  */
  readonly name: string;
  /**
  * default_rule_then block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_security_intelligence_profile#default_rule_then ServicesSecurityIntelligenceProfile#default_rule_then}
  */
  readonly defaultRuleThen?: ServicesSecurityIntelligenceProfileDefaultRuleThen;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_security_intelligence_profile#rule ServicesSecurityIntelligenceProfile#rule}
  */
  readonly rule?: ServicesSecurityIntelligenceProfileRule[] | cdktf.IResolvable;
}
export interface ServicesSecurityIntelligenceProfileDefaultRuleThen {
  /**
  * Security intelligence profile action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_security_intelligence_profile#action ServicesSecurityIntelligenceProfile#action}
  */
  readonly action?: string;
  /**
  * Log security intelligence block action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_security_intelligence_profile#log ServicesSecurityIntelligenceProfile#log}
  */
  readonly log?: boolean | cdktf.IResolvable;
  /**
  * Don't log security intelligence block action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_security_intelligence_profile#no_log ServicesSecurityIntelligenceProfile#no_log}
  */
  readonly noLog?: boolean | cdktf.IResolvable;
}

export function servicesSecurityIntelligenceProfileDefaultRuleThenToTerraform(struct?: ServicesSecurityIntelligenceProfileDefaultRuleThen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    log: cdktf.booleanToTerraform(struct!.log),
    no_log: cdktf.booleanToTerraform(struct!.noLog),
  }
}


export function servicesSecurityIntelligenceProfileDefaultRuleThenToHclTerraform(struct?: ServicesSecurityIntelligenceProfileDefaultRuleThen | cdktf.IResolvable): any {
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
    log: {
      value: cdktf.booleanToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_log: {
      value: cdktf.booleanToHclTerraform(struct!.noLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesSecurityIntelligenceProfileDefaultRuleThenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicesSecurityIntelligenceProfileDefaultRuleThen | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._noLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.noLog = this._noLog;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesSecurityIntelligenceProfileDefaultRuleThen | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._log = undefined;
      this._noLog = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._log = value.log;
      this._noLog = value.noLog;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // log - computed: false, optional: true, required: false
  private _log?: boolean | cdktf.IResolvable; 
  public get log() {
    return this.getBooleanAttribute('log');
  }
  public set log(value: boolean | cdktf.IResolvable) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // no_log - computed: false, optional: true, required: false
  private _noLog?: boolean | cdktf.IResolvable; 
  public get noLog() {
    return this.getBooleanAttribute('no_log');
  }
  public set noLog(value: boolean | cdktf.IResolvable) {
    this._noLog = value;
  }
  public resetNoLog() {
    this._noLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noLogInput() {
    return this._noLog;
  }
}
export interface ServicesSecurityIntelligenceProfileRuleMatch {
  /**
  * Profile matching feed name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_security_intelligence_profile#feed_name ServicesSecurityIntelligenceProfile#feed_name}
  */
  readonly feedName?: string[];
  /**
  * Profile matching threat levels, higher number is more severe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_security_intelligence_profile#threat_level ServicesSecurityIntelligenceProfile#threat_level}
  */
  readonly threatLevel: number[];
}

export function servicesSecurityIntelligenceProfileRuleMatchToTerraform(struct?: ServicesSecurityIntelligenceProfileRuleMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feed_name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.feedName),
    threat_level: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.threatLevel),
  }
}


export function servicesSecurityIntelligenceProfileRuleMatchToHclTerraform(struct?: ServicesSecurityIntelligenceProfileRuleMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feed_name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.feedName),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    threat_level: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.threatLevel),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesSecurityIntelligenceProfileRuleMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServicesSecurityIntelligenceProfileRuleMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._feedName !== undefined) {
      hasAnyValues = true;
      internalValueResult.feedName = this._feedName;
    }
    if (this._threatLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatLevel = this._threatLevel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesSecurityIntelligenceProfileRuleMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._feedName = undefined;
      this._threatLevel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._feedName = value.feedName;
      this._threatLevel = value.threatLevel;
    }
  }

  // feed_name - computed: false, optional: true, required: false
  private _feedName?: string[]; 
  public get feedName() {
    return this.getListAttribute('feed_name');
  }
  public set feedName(value: string[]) {
    this._feedName = value;
  }
  public resetFeedName() {
    this._feedName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedNameInput() {
    return this._feedName;
  }

  // threat_level - computed: false, optional: false, required: true
  private _threatLevel?: number[]; 
  public get threatLevel() {
    return this.getNumberListAttribute('threat_level');
  }
  public set threatLevel(value: number[]) {
    this._threatLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threatLevelInput() {
    return this._threatLevel;
  }
}
export interface ServicesSecurityIntelligenceProfileRule {
  /**
  * Profile rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_security_intelligence_profile#name ServicesSecurityIntelligenceProfile#name}
  */
  readonly name: string;
  /**
  * Security intelligence profile action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_security_intelligence_profile#then_action ServicesSecurityIntelligenceProfile#then_action}
  */
  readonly thenAction: string;
  /**
  * Log security intelligence block action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_security_intelligence_profile#then_log ServicesSecurityIntelligenceProfile#then_log}
  */
  readonly thenLog?: boolean | cdktf.IResolvable;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_security_intelligence_profile#match ServicesSecurityIntelligenceProfile#match}
  */
  readonly match?: ServicesSecurityIntelligenceProfileRuleMatch;
}

export function servicesSecurityIntelligenceProfileRuleToTerraform(struct?: ServicesSecurityIntelligenceProfileRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    then_action: cdktf.stringToTerraform(struct!.thenAction),
    then_log: cdktf.booleanToTerraform(struct!.thenLog),
    match: servicesSecurityIntelligenceProfileRuleMatchToTerraform(struct!.match),
  }
}


export function servicesSecurityIntelligenceProfileRuleToHclTerraform(struct?: ServicesSecurityIntelligenceProfileRule | cdktf.IResolvable): any {
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
    then_action: {
      value: cdktf.stringToHclTerraform(struct!.thenAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    then_log: {
      value: cdktf.booleanToHclTerraform(struct!.thenLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: servicesSecurityIntelligenceProfileRuleMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "ServicesSecurityIntelligenceProfileRuleMatch",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServicesSecurityIntelligenceProfileRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServicesSecurityIntelligenceProfileRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._thenAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.thenAction = this._thenAction;
    }
    if (this._thenLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.thenLog = this._thenLog;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServicesSecurityIntelligenceProfileRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._thenAction = undefined;
      this._thenLog = undefined;
      this._match.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._thenAction = value.thenAction;
      this._thenLog = value.thenLog;
      this._match.internalValue = value.match;
    }
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

  // then_action - computed: false, optional: false, required: true
  private _thenAction?: string; 
  public get thenAction() {
    return this.getStringAttribute('then_action');
  }
  public set thenAction(value: string) {
    this._thenAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thenActionInput() {
    return this._thenAction;
  }

  // then_log - computed: false, optional: true, required: false
  private _thenLog?: boolean | cdktf.IResolvable; 
  public get thenLog() {
    return this.getBooleanAttribute('then_log');
  }
  public set thenLog(value: boolean | cdktf.IResolvable) {
    this._thenLog = value;
  }
  public resetThenLog() {
    this._thenLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thenLogInput() {
    return this._thenLog;
  }

  // match - computed: false, optional: true, required: false
  private _match = new ServicesSecurityIntelligenceProfileRuleMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: ServicesSecurityIntelligenceProfileRuleMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }
}

export class ServicesSecurityIntelligenceProfileRuleList extends cdktf.ComplexList {
  public internalValue? : ServicesSecurityIntelligenceProfileRule[] | cdktf.IResolvable

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
  public get(index: number): ServicesSecurityIntelligenceProfileRuleOutputReference {
    return new ServicesSecurityIntelligenceProfileRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_security_intelligence_profile junos_services_security_intelligence_profile}
*/
export class ServicesSecurityIntelligenceProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_services_security_intelligence_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServicesSecurityIntelligenceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServicesSecurityIntelligenceProfile to import
  * @param importFromId The id of the existing ServicesSecurityIntelligenceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_security_intelligence_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServicesSecurityIntelligenceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_services_security_intelligence_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/services_security_intelligence_profile junos_services_security_intelligence_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicesSecurityIntelligenceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ServicesSecurityIntelligenceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_services_security_intelligence_profile',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0',
        providerVersionConstraint: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._description = config.description;
    this._name = config.name;
    this._defaultRuleThen.internalValue = config.defaultRuleThen;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: false, optional: false, required: true
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // default_rule_then - computed: false, optional: true, required: false
  private _defaultRuleThen = new ServicesSecurityIntelligenceProfileDefaultRuleThenOutputReference(this, "default_rule_then");
  public get defaultRuleThen() {
    return this._defaultRuleThen;
  }
  public putDefaultRuleThen(value: ServicesSecurityIntelligenceProfileDefaultRuleThen) {
    this._defaultRuleThen.internalValue = value;
  }
  public resetDefaultRuleThen() {
    this._defaultRuleThen.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRuleThenInput() {
    return this._defaultRuleThen.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new ServicesSecurityIntelligenceProfileRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: ServicesSecurityIntelligenceProfileRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
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
      category: cdktf.stringToTerraform(this._category),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      default_rule_then: servicesSecurityIntelligenceProfileDefaultRuleThenToTerraform(this._defaultRuleThen.internalValue),
      rule: cdktf.listMapper(servicesSecurityIntelligenceProfileRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      default_rule_then: {
        value: servicesSecurityIntelligenceProfileDefaultRuleThenToHclTerraform(this._defaultRuleThen.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServicesSecurityIntelligenceProfileDefaultRuleThen",
      },
      rule: {
        value: cdktf.listMapperHcl(servicesSecurityIntelligenceProfileRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServicesSecurityIntelligenceProfileRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
