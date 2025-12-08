// https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether firewall is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#enabled FirewallConfig#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The ID of the project this configuration belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#project_id FirewallConfig#project_id}
  */
  readonly projectId: string;
  /**
  * The ID of the team this project belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#team_id FirewallConfig#team_id}
  */
  readonly teamId?: string;
  /**
  * ip_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#ip_rules FirewallConfig#ip_rules}
  */
  readonly ipRules?: FirewallConfigIpRules;
  /**
  * managed_rulesets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#managed_rulesets FirewallConfig#managed_rulesets}
  */
  readonly managedRulesets?: FirewallConfigManagedRulesets;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#rules FirewallConfig#rules}
  */
  readonly rules?: FirewallConfigRules;
}
export interface FirewallConfigIpRulesRule {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#action FirewallConfig#action}
  */
  readonly action: string;
  /**
  * Hosts to apply these rules to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#hostname FirewallConfig#hostname}
  */
  readonly hostname: string;
  /**
  * IP or CIDR to block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#ip FirewallConfig#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#notes FirewallConfig#notes}
  */
  readonly notes?: string;
}

export function firewallConfigIpRulesRuleToTerraform(struct?: FirewallConfigIpRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip: cdktf.stringToTerraform(struct!.ip),
    notes: cdktf.stringToTerraform(struct!.notes),
  }
}


export function firewallConfigIpRulesRuleToHclTerraform(struct?: FirewallConfigIpRulesRule | cdktf.IResolvable): any {
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
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notes: {
      value: cdktf.stringToHclTerraform(struct!.notes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigIpRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallConfigIpRulesRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigIpRulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._hostname = undefined;
      this._ip = undefined;
      this._notes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._hostname = value.hostname;
      this._ip = value.ip;
      this._notes = value.notes;
    }
  }

  // action - computed: false, optional: false, required: true
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

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // notes - computed: false, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }
}

export class FirewallConfigIpRulesRuleList extends cdktf.ComplexList {
  public internalValue? : FirewallConfigIpRulesRule[] | cdktf.IResolvable

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
  public get(index: number): FirewallConfigIpRulesRuleOutputReference {
    return new FirewallConfigIpRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallConfigIpRules {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#rule FirewallConfig#rule}
  */
  readonly rule?: FirewallConfigIpRulesRule[] | cdktf.IResolvable;
}

export function firewallConfigIpRulesToTerraform(struct?: FirewallConfigIpRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(firewallConfigIpRulesRuleToTerraform, true)(struct!.rule),
  }
}


export function firewallConfigIpRulesToHclTerraform(struct?: FirewallConfigIpRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(firewallConfigIpRulesRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "FirewallConfigIpRulesRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigIpRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallConfigIpRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigIpRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new FirewallConfigIpRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: FirewallConfigIpRulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface FirewallConfigManagedRulesetsAiBots {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#action FirewallConfig#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#active FirewallConfig#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
}

export function firewallConfigManagedRulesetsAiBotsToTerraform(struct?: FirewallConfigManagedRulesetsAiBots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    active: cdktf.booleanToTerraform(struct!.active),
  }
}


export function firewallConfigManagedRulesetsAiBotsToHclTerraform(struct?: FirewallConfigManagedRulesetsAiBots | cdktf.IResolvable): any {
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
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigManagedRulesetsAiBotsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallConfigManagedRulesetsAiBots | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigManagedRulesetsAiBots | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._active = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._active = value.active;
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

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }
}
export interface FirewallConfigManagedRulesetsBotFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#action FirewallConfig#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#active FirewallConfig#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
}

export function firewallConfigManagedRulesetsBotFilterToTerraform(struct?: FirewallConfigManagedRulesetsBotFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    active: cdktf.booleanToTerraform(struct!.active),
  }
}


export function firewallConfigManagedRulesetsBotFilterToHclTerraform(struct?: FirewallConfigManagedRulesetsBotFilter | cdktf.IResolvable): any {
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
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigManagedRulesetsBotFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallConfigManagedRulesetsBotFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigManagedRulesetsBotFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._active = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._active = value.active;
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

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }
}
export interface FirewallConfigManagedRulesetsBotProtection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#action FirewallConfig#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#active FirewallConfig#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
}

export function firewallConfigManagedRulesetsBotProtectionToTerraform(struct?: FirewallConfigManagedRulesetsBotProtection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    active: cdktf.booleanToTerraform(struct!.active),
  }
}


export function firewallConfigManagedRulesetsBotProtectionToHclTerraform(struct?: FirewallConfigManagedRulesetsBotProtection | cdktf.IResolvable): any {
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
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigManagedRulesetsBotProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallConfigManagedRulesetsBotProtection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigManagedRulesetsBotProtection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._active = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._active = value.active;
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

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }
}
export interface FirewallConfigManagedRulesetsOwaspGen {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#action FirewallConfig#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#active FirewallConfig#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
}

export function firewallConfigManagedRulesetsOwaspGenToTerraform(struct?: FirewallConfigManagedRulesetsOwaspGen | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    active: cdktf.booleanToTerraform(struct!.active),
  }
}


export function firewallConfigManagedRulesetsOwaspGenToHclTerraform(struct?: FirewallConfigManagedRulesetsOwaspGen | cdktf.IResolvable): any {
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
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigManagedRulesetsOwaspGenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallConfigManagedRulesetsOwaspGen | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigManagedRulesetsOwaspGen | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._active = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._active = value.active;
    }
  }

  // action - computed: false, optional: false, required: true
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

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }
}
export interface FirewallConfigManagedRulesetsOwaspJava {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#action FirewallConfig#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#active FirewallConfig#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
}

export function firewallConfigManagedRulesetsOwaspJavaToTerraform(struct?: FirewallConfigManagedRulesetsOwaspJava | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    active: cdktf.booleanToTerraform(struct!.active),
  }
}


export function firewallConfigManagedRulesetsOwaspJavaToHclTerraform(struct?: FirewallConfigManagedRulesetsOwaspJava | cdktf.IResolvable): any {
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
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigManagedRulesetsOwaspJavaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallConfigManagedRulesetsOwaspJava | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigManagedRulesetsOwaspJava | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._active = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._active = value.active;
    }
  }

  // action - computed: false, optional: false, required: true
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

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }
}
export interface FirewallConfigManagedRulesetsOwaspLfi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#action FirewallConfig#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#active FirewallConfig#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
}

export function firewallConfigManagedRulesetsOwaspLfiToTerraform(struct?: FirewallConfigManagedRulesetsOwaspLfi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    active: cdktf.booleanToTerraform(struct!.active),
  }
}


export function firewallConfigManagedRulesetsOwaspLfiToHclTerraform(struct?: FirewallConfigManagedRulesetsOwaspLfi | cdktf.IResolvable): any {
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
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigManagedRulesetsOwaspLfiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallConfigManagedRulesetsOwaspLfi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigManagedRulesetsOwaspLfi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._active = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._active = value.active;
    }
  }

  // action - computed: false, optional: false, required: true
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

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }
}
export interface FirewallConfigManagedRulesetsOwaspMa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#action FirewallConfig#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#active FirewallConfig#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
}

export function firewallConfigManagedRulesetsOwaspMaToTerraform(struct?: FirewallConfigManagedRulesetsOwaspMa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    active: cdktf.booleanToTerraform(struct!.active),
  }
}


export function firewallConfigManagedRulesetsOwaspMaToHclTerraform(struct?: FirewallConfigManagedRulesetsOwaspMa | cdktf.IResolvable): any {
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
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigManagedRulesetsOwaspMaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallConfigManagedRulesetsOwaspMa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigManagedRulesetsOwaspMa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._active = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._active = value.active;
    }
  }

  // action - computed: false, optional: false, required: true
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

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }
}
export interface FirewallConfigManagedRulesetsOwaspPhp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#action FirewallConfig#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#active FirewallConfig#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
}

export function firewallConfigManagedRulesetsOwaspPhpToTerraform(struct?: FirewallConfigManagedRulesetsOwaspPhp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    active: cdktf.booleanToTerraform(struct!.active),
  }
}


export function firewallConfigManagedRulesetsOwaspPhpToHclTerraform(struct?: FirewallConfigManagedRulesetsOwaspPhp | cdktf.IResolvable): any {
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
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigManagedRulesetsOwaspPhpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallConfigManagedRulesetsOwaspPhp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigManagedRulesetsOwaspPhp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._active = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._active = value.active;
    }
  }

  // action - computed: false, optional: false, required: true
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

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }
}
export interface FirewallConfigManagedRulesetsOwaspRce {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#action FirewallConfig#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#active FirewallConfig#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
}

export function firewallConfigManagedRulesetsOwaspRceToTerraform(struct?: FirewallConfigManagedRulesetsOwaspRce | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    active: cdktf.booleanToTerraform(struct!.active),
  }
}


export function firewallConfigManagedRulesetsOwaspRceToHclTerraform(struct?: FirewallConfigManagedRulesetsOwaspRce | cdktf.IResolvable): any {
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
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigManagedRulesetsOwaspRceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallConfigManagedRulesetsOwaspRce | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigManagedRulesetsOwaspRce | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._active = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._active = value.active;
    }
  }

  // action - computed: false, optional: false, required: true
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

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }
}
export interface FirewallConfigManagedRulesetsOwaspRfi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#action FirewallConfig#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#active FirewallConfig#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
}

export function firewallConfigManagedRulesetsOwaspRfiToTerraform(struct?: FirewallConfigManagedRulesetsOwaspRfi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    active: cdktf.booleanToTerraform(struct!.active),
  }
}


export function firewallConfigManagedRulesetsOwaspRfiToHclTerraform(struct?: FirewallConfigManagedRulesetsOwaspRfi | cdktf.IResolvable): any {
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
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigManagedRulesetsOwaspRfiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallConfigManagedRulesetsOwaspRfi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigManagedRulesetsOwaspRfi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._active = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._active = value.active;
    }
  }

  // action - computed: false, optional: false, required: true
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

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }
}
export interface FirewallConfigManagedRulesetsOwaspSd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#action FirewallConfig#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#active FirewallConfig#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
}

export function firewallConfigManagedRulesetsOwaspSdToTerraform(struct?: FirewallConfigManagedRulesetsOwaspSd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    active: cdktf.booleanToTerraform(struct!.active),
  }
}


export function firewallConfigManagedRulesetsOwaspSdToHclTerraform(struct?: FirewallConfigManagedRulesetsOwaspSd | cdktf.IResolvable): any {
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
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigManagedRulesetsOwaspSdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallConfigManagedRulesetsOwaspSd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigManagedRulesetsOwaspSd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._active = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._active = value.active;
    }
  }

  // action - computed: false, optional: false, required: true
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

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }
}
export interface FirewallConfigManagedRulesetsOwaspSqli {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#action FirewallConfig#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#active FirewallConfig#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
}

export function firewallConfigManagedRulesetsOwaspSqliToTerraform(struct?: FirewallConfigManagedRulesetsOwaspSqli | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    active: cdktf.booleanToTerraform(struct!.active),
  }
}


export function firewallConfigManagedRulesetsOwaspSqliToHclTerraform(struct?: FirewallConfigManagedRulesetsOwaspSqli | cdktf.IResolvable): any {
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
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigManagedRulesetsOwaspSqliOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallConfigManagedRulesetsOwaspSqli | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigManagedRulesetsOwaspSqli | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._active = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._active = value.active;
    }
  }

  // action - computed: false, optional: false, required: true
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

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }
}
export interface FirewallConfigManagedRulesetsOwaspXss {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#action FirewallConfig#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#active FirewallConfig#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
}

export function firewallConfigManagedRulesetsOwaspXssToTerraform(struct?: FirewallConfigManagedRulesetsOwaspXss | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    active: cdktf.booleanToTerraform(struct!.active),
  }
}


export function firewallConfigManagedRulesetsOwaspXssToHclTerraform(struct?: FirewallConfigManagedRulesetsOwaspXss | cdktf.IResolvable): any {
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
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigManagedRulesetsOwaspXssOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallConfigManagedRulesetsOwaspXss | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigManagedRulesetsOwaspXss | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._active = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._active = value.active;
    }
  }

  // action - computed: false, optional: false, required: true
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

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }
}
export interface FirewallConfigManagedRulesetsOwasp {
  /**
  * Generic Attack Detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#gen FirewallConfig#gen}
  */
  readonly gen?: FirewallConfigManagedRulesetsOwaspGen;
  /**
  * Java Attack Detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#java FirewallConfig#java}
  */
  readonly java?: FirewallConfigManagedRulesetsOwaspJava;
  /**
  * Local File Inclusion Rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#lfi FirewallConfig#lfi}
  */
  readonly lfi?: FirewallConfigManagedRulesetsOwaspLfi;
  /**
  * Multipart Rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#ma FirewallConfig#ma}
  */
  readonly ma?: FirewallConfigManagedRulesetsOwaspMa;
  /**
  * PHP Attack Detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#php FirewallConfig#php}
  */
  readonly php?: FirewallConfigManagedRulesetsOwaspPhp;
  /**
  * Remote Code Execution Rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#rce FirewallConfig#rce}
  */
  readonly rce?: FirewallConfigManagedRulesetsOwaspRce;
  /**
  * Remote File Inclusion Rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#rfi FirewallConfig#rfi}
  */
  readonly rfi?: FirewallConfigManagedRulesetsOwaspRfi;
  /**
  * Scanner Detection Rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#sd FirewallConfig#sd}
  */
  readonly sd?: FirewallConfigManagedRulesetsOwaspSd;
  /**
  * SQL Injection Rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#sqli FirewallConfig#sqli}
  */
  readonly sqli?: FirewallConfigManagedRulesetsOwaspSqli;
  /**
  * Cross Site Scripting Rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#xss FirewallConfig#xss}
  */
  readonly xss?: FirewallConfigManagedRulesetsOwaspXss;
}

export function firewallConfigManagedRulesetsOwaspToTerraform(struct?: FirewallConfigManagedRulesetsOwasp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gen: firewallConfigManagedRulesetsOwaspGenToTerraform(struct!.gen),
    java: firewallConfigManagedRulesetsOwaspJavaToTerraform(struct!.java),
    lfi: firewallConfigManagedRulesetsOwaspLfiToTerraform(struct!.lfi),
    ma: firewallConfigManagedRulesetsOwaspMaToTerraform(struct!.ma),
    php: firewallConfigManagedRulesetsOwaspPhpToTerraform(struct!.php),
    rce: firewallConfigManagedRulesetsOwaspRceToTerraform(struct!.rce),
    rfi: firewallConfigManagedRulesetsOwaspRfiToTerraform(struct!.rfi),
    sd: firewallConfigManagedRulesetsOwaspSdToTerraform(struct!.sd),
    sqli: firewallConfigManagedRulesetsOwaspSqliToTerraform(struct!.sqli),
    xss: firewallConfigManagedRulesetsOwaspXssToTerraform(struct!.xss),
  }
}


export function firewallConfigManagedRulesetsOwaspToHclTerraform(struct?: FirewallConfigManagedRulesetsOwasp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gen: {
      value: firewallConfigManagedRulesetsOwaspGenToHclTerraform(struct!.gen),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallConfigManagedRulesetsOwaspGen",
    },
    java: {
      value: firewallConfigManagedRulesetsOwaspJavaToHclTerraform(struct!.java),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallConfigManagedRulesetsOwaspJava",
    },
    lfi: {
      value: firewallConfigManagedRulesetsOwaspLfiToHclTerraform(struct!.lfi),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallConfigManagedRulesetsOwaspLfi",
    },
    ma: {
      value: firewallConfigManagedRulesetsOwaspMaToHclTerraform(struct!.ma),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallConfigManagedRulesetsOwaspMa",
    },
    php: {
      value: firewallConfigManagedRulesetsOwaspPhpToHclTerraform(struct!.php),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallConfigManagedRulesetsOwaspPhp",
    },
    rce: {
      value: firewallConfigManagedRulesetsOwaspRceToHclTerraform(struct!.rce),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallConfigManagedRulesetsOwaspRce",
    },
    rfi: {
      value: firewallConfigManagedRulesetsOwaspRfiToHclTerraform(struct!.rfi),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallConfigManagedRulesetsOwaspRfi",
    },
    sd: {
      value: firewallConfigManagedRulesetsOwaspSdToHclTerraform(struct!.sd),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallConfigManagedRulesetsOwaspSd",
    },
    sqli: {
      value: firewallConfigManagedRulesetsOwaspSqliToHclTerraform(struct!.sqli),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallConfigManagedRulesetsOwaspSqli",
    },
    xss: {
      value: firewallConfigManagedRulesetsOwaspXssToHclTerraform(struct!.xss),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallConfigManagedRulesetsOwaspXss",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigManagedRulesetsOwaspOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallConfigManagedRulesetsOwasp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gen?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gen = this._gen?.internalValue;
    }
    if (this._java?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.java = this._java?.internalValue;
    }
    if (this._lfi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lfi = this._lfi?.internalValue;
    }
    if (this._ma?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ma = this._ma?.internalValue;
    }
    if (this._php?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.php = this._php?.internalValue;
    }
    if (this._rce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rce = this._rce?.internalValue;
    }
    if (this._rfi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rfi = this._rfi?.internalValue;
    }
    if (this._sd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sd = this._sd?.internalValue;
    }
    if (this._sqli?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqli = this._sqli?.internalValue;
    }
    if (this._xss?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xss = this._xss?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigManagedRulesetsOwasp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gen.internalValue = undefined;
      this._java.internalValue = undefined;
      this._lfi.internalValue = undefined;
      this._ma.internalValue = undefined;
      this._php.internalValue = undefined;
      this._rce.internalValue = undefined;
      this._rfi.internalValue = undefined;
      this._sd.internalValue = undefined;
      this._sqli.internalValue = undefined;
      this._xss.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gen.internalValue = value.gen;
      this._java.internalValue = value.java;
      this._lfi.internalValue = value.lfi;
      this._ma.internalValue = value.ma;
      this._php.internalValue = value.php;
      this._rce.internalValue = value.rce;
      this._rfi.internalValue = value.rfi;
      this._sd.internalValue = value.sd;
      this._sqli.internalValue = value.sqli;
      this._xss.internalValue = value.xss;
    }
  }

  // gen - computed: false, optional: true, required: false
  private _gen = new FirewallConfigManagedRulesetsOwaspGenOutputReference(this, "gen");
  public get gen() {
    return this._gen;
  }
  public putGen(value: FirewallConfigManagedRulesetsOwaspGen) {
    this._gen.internalValue = value;
  }
  public resetGen() {
    this._gen.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genInput() {
    return this._gen.internalValue;
  }

  // java - computed: false, optional: true, required: false
  private _java = new FirewallConfigManagedRulesetsOwaspJavaOutputReference(this, "java");
  public get java() {
    return this._java;
  }
  public putJava(value: FirewallConfigManagedRulesetsOwaspJava) {
    this._java.internalValue = value;
  }
  public resetJava() {
    this._java.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaInput() {
    return this._java.internalValue;
  }

  // lfi - computed: false, optional: true, required: false
  private _lfi = new FirewallConfigManagedRulesetsOwaspLfiOutputReference(this, "lfi");
  public get lfi() {
    return this._lfi;
  }
  public putLfi(value: FirewallConfigManagedRulesetsOwaspLfi) {
    this._lfi.internalValue = value;
  }
  public resetLfi() {
    this._lfi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lfiInput() {
    return this._lfi.internalValue;
  }

  // ma - computed: false, optional: true, required: false
  private _ma = new FirewallConfigManagedRulesetsOwaspMaOutputReference(this, "ma");
  public get ma() {
    return this._ma;
  }
  public putMa(value: FirewallConfigManagedRulesetsOwaspMa) {
    this._ma.internalValue = value;
  }
  public resetMa() {
    this._ma.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maInput() {
    return this._ma.internalValue;
  }

  // php - computed: false, optional: true, required: false
  private _php = new FirewallConfigManagedRulesetsOwaspPhpOutputReference(this, "php");
  public get php() {
    return this._php;
  }
  public putPhp(value: FirewallConfigManagedRulesetsOwaspPhp) {
    this._php.internalValue = value;
  }
  public resetPhp() {
    this._php.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phpInput() {
    return this._php.internalValue;
  }

  // rce - computed: false, optional: true, required: false
  private _rce = new FirewallConfigManagedRulesetsOwaspRceOutputReference(this, "rce");
  public get rce() {
    return this._rce;
  }
  public putRce(value: FirewallConfigManagedRulesetsOwaspRce) {
    this._rce.internalValue = value;
  }
  public resetRce() {
    this._rce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rceInput() {
    return this._rce.internalValue;
  }

  // rfi - computed: false, optional: true, required: false
  private _rfi = new FirewallConfigManagedRulesetsOwaspRfiOutputReference(this, "rfi");
  public get rfi() {
    return this._rfi;
  }
  public putRfi(value: FirewallConfigManagedRulesetsOwaspRfi) {
    this._rfi.internalValue = value;
  }
  public resetRfi() {
    this._rfi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rfiInput() {
    return this._rfi.internalValue;
  }

  // sd - computed: false, optional: true, required: false
  private _sd = new FirewallConfigManagedRulesetsOwaspSdOutputReference(this, "sd");
  public get sd() {
    return this._sd;
  }
  public putSd(value: FirewallConfigManagedRulesetsOwaspSd) {
    this._sd.internalValue = value;
  }
  public resetSd() {
    this._sd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdInput() {
    return this._sd.internalValue;
  }

  // sqli - computed: false, optional: true, required: false
  private _sqli = new FirewallConfigManagedRulesetsOwaspSqliOutputReference(this, "sqli");
  public get sqli() {
    return this._sqli;
  }
  public putSqli(value: FirewallConfigManagedRulesetsOwaspSqli) {
    this._sqli.internalValue = value;
  }
  public resetSqli() {
    this._sqli.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqliInput() {
    return this._sqli.internalValue;
  }

  // xss - computed: false, optional: true, required: false
  private _xss = new FirewallConfigManagedRulesetsOwaspXssOutputReference(this, "xss");
  public get xss() {
    return this._xss;
  }
  public putXss(value: FirewallConfigManagedRulesetsOwaspXss) {
    this._xss.internalValue = value;
  }
  public resetXss() {
    this._xss.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xssInput() {
    return this._xss.internalValue;
  }
}
export interface FirewallConfigManagedRulesets {
  /**
  * ai_bots block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#ai_bots FirewallConfig#ai_bots}
  */
  readonly aiBots?: FirewallConfigManagedRulesetsAiBots;
  /**
  * bot_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#bot_filter FirewallConfig#bot_filter}
  */
  readonly botFilter?: FirewallConfigManagedRulesetsBotFilter;
  /**
  * bot_protection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#bot_protection FirewallConfig#bot_protection}
  */
  readonly botProtection?: FirewallConfigManagedRulesetsBotProtection;
  /**
  * owasp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#owasp FirewallConfig#owasp}
  */
  readonly owasp?: FirewallConfigManagedRulesetsOwasp;
}

export function firewallConfigManagedRulesetsToTerraform(struct?: FirewallConfigManagedRulesets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ai_bots: firewallConfigManagedRulesetsAiBotsToTerraform(struct!.aiBots),
    bot_filter: firewallConfigManagedRulesetsBotFilterToTerraform(struct!.botFilter),
    bot_protection: firewallConfigManagedRulesetsBotProtectionToTerraform(struct!.botProtection),
    owasp: firewallConfigManagedRulesetsOwaspToTerraform(struct!.owasp),
  }
}


export function firewallConfigManagedRulesetsToHclTerraform(struct?: FirewallConfigManagedRulesets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ai_bots: {
      value: firewallConfigManagedRulesetsAiBotsToHclTerraform(struct!.aiBots),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallConfigManagedRulesetsAiBots",
    },
    bot_filter: {
      value: firewallConfigManagedRulesetsBotFilterToHclTerraform(struct!.botFilter),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallConfigManagedRulesetsBotFilter",
    },
    bot_protection: {
      value: firewallConfigManagedRulesetsBotProtectionToHclTerraform(struct!.botProtection),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallConfigManagedRulesetsBotProtection",
    },
    owasp: {
      value: firewallConfigManagedRulesetsOwaspToHclTerraform(struct!.owasp),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallConfigManagedRulesetsOwasp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigManagedRulesetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallConfigManagedRulesets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aiBots?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiBots = this._aiBots?.internalValue;
    }
    if (this._botFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.botFilter = this._botFilter?.internalValue;
    }
    if (this._botProtection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.botProtection = this._botProtection?.internalValue;
    }
    if (this._owasp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.owasp = this._owasp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigManagedRulesets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aiBots.internalValue = undefined;
      this._botFilter.internalValue = undefined;
      this._botProtection.internalValue = undefined;
      this._owasp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aiBots.internalValue = value.aiBots;
      this._botFilter.internalValue = value.botFilter;
      this._botProtection.internalValue = value.botProtection;
      this._owasp.internalValue = value.owasp;
    }
  }

  // ai_bots - computed: false, optional: true, required: false
  private _aiBots = new FirewallConfigManagedRulesetsAiBotsOutputReference(this, "ai_bots");
  public get aiBots() {
    return this._aiBots;
  }
  public putAiBots(value: FirewallConfigManagedRulesetsAiBots) {
    this._aiBots.internalValue = value;
  }
  public resetAiBots() {
    this._aiBots.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiBotsInput() {
    return this._aiBots.internalValue;
  }

  // bot_filter - computed: false, optional: true, required: false
  private _botFilter = new FirewallConfigManagedRulesetsBotFilterOutputReference(this, "bot_filter");
  public get botFilter() {
    return this._botFilter;
  }
  public putBotFilter(value: FirewallConfigManagedRulesetsBotFilter) {
    this._botFilter.internalValue = value;
  }
  public resetBotFilter() {
    this._botFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botFilterInput() {
    return this._botFilter.internalValue;
  }

  // bot_protection - computed: false, optional: true, required: false
  private _botProtection = new FirewallConfigManagedRulesetsBotProtectionOutputReference(this, "bot_protection");
  public get botProtection() {
    return this._botProtection;
  }
  public putBotProtection(value: FirewallConfigManagedRulesetsBotProtection) {
    this._botProtection.internalValue = value;
  }
  public resetBotProtection() {
    this._botProtection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get botProtectionInput() {
    return this._botProtection.internalValue;
  }

  // owasp - computed: false, optional: true, required: false
  private _owasp = new FirewallConfigManagedRulesetsOwaspOutputReference(this, "owasp");
  public get owasp() {
    return this._owasp;
  }
  public putOwasp(value: FirewallConfigManagedRulesetsOwasp) {
    this._owasp.internalValue = value;
  }
  public resetOwasp() {
    this._owasp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get owaspInput() {
    return this._owasp.internalValue;
  }
}
export interface FirewallConfigRulesRuleActionRateLimit {
  /**
  * Action to take when rate limit is exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#action FirewallConfig#action}
  */
  readonly action: string;
  /**
  * Rate limiting algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#algo FirewallConfig#algo}
  */
  readonly algo: string;
  /**
  * Keys used to bucket an individual client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#keys FirewallConfig#keys}
  */
  readonly keys: string[];
  /**
  * number of requests allowed in the window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#limit FirewallConfig#limit}
  */
  readonly limit: number;
  /**
  * Time window in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#window FirewallConfig#window}
  */
  readonly window: number;
}

export function firewallConfigRulesRuleActionRateLimitToTerraform(struct?: FirewallConfigRulesRuleActionRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    algo: cdktf.stringToTerraform(struct!.algo),
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
    limit: cdktf.numberToTerraform(struct!.limit),
    window: cdktf.numberToTerraform(struct!.window),
  }
}


export function firewallConfigRulesRuleActionRateLimitToHclTerraform(struct?: FirewallConfigRulesRuleActionRateLimit | cdktf.IResolvable): any {
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
    algo: {
      value: cdktf.stringToHclTerraform(struct!.algo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window: {
      value: cdktf.numberToHclTerraform(struct!.window),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigRulesRuleActionRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallConfigRulesRuleActionRateLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._algo !== undefined) {
      hasAnyValues = true;
      internalValueResult.algo = this._algo;
    }
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._window !== undefined) {
      hasAnyValues = true;
      internalValueResult.window = this._window;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigRulesRuleActionRateLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._algo = undefined;
      this._keys = undefined;
      this._limit = undefined;
      this._window = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._algo = value.algo;
      this._keys = value.keys;
      this._limit = value.limit;
      this._window = value.window;
    }
  }

  // action - computed: false, optional: false, required: true
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

  // algo - computed: false, optional: false, required: true
  private _algo?: string; 
  public get algo() {
    return this.getStringAttribute('algo');
  }
  public set algo(value: string) {
    this._algo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get algoInput() {
    return this._algo;
  }

  // keys - computed: false, optional: false, required: true
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }

  // limit - computed: false, optional: false, required: true
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // window - computed: false, optional: false, required: true
  private _window?: number; 
  public get window() {
    return this.getNumberAttribute('window');
  }
  public set window(value: number) {
    this._window = value;
  }
  // Temporarily expose input value. Use with caution.
  public get windowInput() {
    return this._window;
  }
}
export interface FirewallConfigRulesRuleActionRedirect {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#location FirewallConfig#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#permanent FirewallConfig#permanent}
  */
  readonly permanent: boolean | cdktf.IResolvable;
}

export function firewallConfigRulesRuleActionRedirectToTerraform(struct?: FirewallConfigRulesRuleActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    permanent: cdktf.booleanToTerraform(struct!.permanent),
  }
}


export function firewallConfigRulesRuleActionRedirectToHclTerraform(struct?: FirewallConfigRulesRuleActionRedirect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permanent: {
      value: cdktf.booleanToHclTerraform(struct!.permanent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigRulesRuleActionRedirectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallConfigRulesRuleActionRedirect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._permanent !== undefined) {
      hasAnyValues = true;
      internalValueResult.permanent = this._permanent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigRulesRuleActionRedirect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._permanent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._permanent = value.permanent;
    }
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // permanent - computed: false, optional: false, required: true
  private _permanent?: boolean | cdktf.IResolvable; 
  public get permanent() {
    return this.getBooleanAttribute('permanent');
  }
  public set permanent(value: boolean | cdktf.IResolvable) {
    this._permanent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentInput() {
    return this._permanent;
  }
}
export interface FirewallConfigRulesRuleAction {
  /**
  * Base action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#action FirewallConfig#action}
  */
  readonly action: string;
  /**
  * Forward persistence of a rule action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#action_duration FirewallConfig#action_duration}
  */
  readonly actionDuration?: string;
  /**
  * Behavior or a rate limiting action. Required if action is rate_limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#rate_limit FirewallConfig#rate_limit}
  */
  readonly rateLimit?: FirewallConfigRulesRuleActionRateLimit;
  /**
  * How to redirect a request. Required if action is redirect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#redirect FirewallConfig#redirect}
  */
  readonly redirect?: FirewallConfigRulesRuleActionRedirect;
}

export function firewallConfigRulesRuleActionToTerraform(struct?: FirewallConfigRulesRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    action_duration: cdktf.stringToTerraform(struct!.actionDuration),
    rate_limit: firewallConfigRulesRuleActionRateLimitToTerraform(struct!.rateLimit),
    redirect: firewallConfigRulesRuleActionRedirectToTerraform(struct!.redirect),
  }
}


export function firewallConfigRulesRuleActionToHclTerraform(struct?: FirewallConfigRulesRuleAction | cdktf.IResolvable): any {
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
    action_duration: {
      value: cdktf.stringToHclTerraform(struct!.actionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_limit: {
      value: firewallConfigRulesRuleActionRateLimitToHclTerraform(struct!.rateLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallConfigRulesRuleActionRateLimit",
    },
    redirect: {
      value: firewallConfigRulesRuleActionRedirectToHclTerraform(struct!.redirect),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallConfigRulesRuleActionRedirect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigRulesRuleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallConfigRulesRuleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._actionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionDuration = this._actionDuration;
    }
    if (this._rateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimit = this._rateLimit?.internalValue;
    }
    if (this._redirect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigRulesRuleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._actionDuration = undefined;
      this._rateLimit.internalValue = undefined;
      this._redirect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._actionDuration = value.actionDuration;
      this._rateLimit.internalValue = value.rateLimit;
      this._redirect.internalValue = value.redirect;
    }
  }

  // action - computed: false, optional: false, required: true
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

  // action_duration - computed: false, optional: true, required: false
  private _actionDuration?: string; 
  public get actionDuration() {
    return this.getStringAttribute('action_duration');
  }
  public set actionDuration(value: string) {
    this._actionDuration = value;
  }
  public resetActionDuration() {
    this._actionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionDurationInput() {
    return this._actionDuration;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit = new FirewallConfigRulesRuleActionRateLimitOutputReference(this, "rate_limit");
  public get rateLimit() {
    return this._rateLimit;
  }
  public putRateLimit(value: FirewallConfigRulesRuleActionRateLimit) {
    this._rateLimit.internalValue = value;
  }
  public resetRateLimit() {
    this._rateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit.internalValue;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect = new FirewallConfigRulesRuleActionRedirectOutputReference(this, "redirect");
  public get redirect() {
    return this._redirect;
  }
  public putRedirect(value: FirewallConfigRulesRuleActionRedirect) {
    this._redirect.internalValue = value;
  }
  public resetRedirect() {
    this._redirect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect.internalValue;
  }
}
export interface FirewallConfigRulesRuleConditionGroupConditions {
  /**
  * Key within type to match against
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#key FirewallConfig#key}
  */
  readonly key?: string;
  /**
  * Negate the condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#neg FirewallConfig#neg}
  */
  readonly neg?: boolean | cdktf.IResolvable;
  /**
  * Operator to use for comparison. Options: `re` (regex), `eq` (equals), `neq` (not equals), `ex` (exists), `nex` (not exists), `inc` (includes), `ninc` (not includes), `pre` (prefix), `suf` (suffix), `sub` (substring), `gt` (greater than), `gte` (greater than or equal), `lt` (less than), `lte` (less than or equal). Note: `ex` and `nex` don't require a `value` field, only `key`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#op FirewallConfig#op}
  */
  readonly op: string;
  /**
  * Request key type to match against
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#type FirewallConfig#type}
  */
  readonly type: string;
  /**
  * Value to match against. Not required for existence operators (`ex`, `nex`). Use `values` instead for `inc` and `ninc` operators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#value FirewallConfig#value}
  */
  readonly value?: string;
  /**
  * Values to match against if op is inc, ninc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#values FirewallConfig#values}
  */
  readonly values?: string[];
}

export function firewallConfigRulesRuleConditionGroupConditionsToTerraform(struct?: FirewallConfigRulesRuleConditionGroupConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    neg: cdktf.booleanToTerraform(struct!.neg),
    op: cdktf.stringToTerraform(struct!.op),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function firewallConfigRulesRuleConditionGroupConditionsToHclTerraform(struct?: FirewallConfigRulesRuleConditionGroupConditions | cdktf.IResolvable): any {
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
    neg: {
      value: cdktf.booleanToHclTerraform(struct!.neg),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigRulesRuleConditionGroupConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallConfigRulesRuleConditionGroupConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._neg !== undefined) {
      hasAnyValues = true;
      internalValueResult.neg = this._neg;
    }
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigRulesRuleConditionGroupConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._neg = undefined;
      this._op = undefined;
      this._type = undefined;
      this._value = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._neg = value.neg;
      this._op = value.op;
      this._type = value.type;
      this._value = value.value;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // neg - computed: false, optional: true, required: false
  private _neg?: boolean | cdktf.IResolvable; 
  public get neg() {
    return this.getBooleanAttribute('neg');
  }
  public set neg(value: boolean | cdktf.IResolvable) {
    this._neg = value;
  }
  public resetNeg() {
    this._neg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negInput() {
    return this._neg;
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class FirewallConfigRulesRuleConditionGroupConditionsList extends cdktf.ComplexList {
  public internalValue? : FirewallConfigRulesRuleConditionGroupConditions[] | cdktf.IResolvable

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
  public get(index: number): FirewallConfigRulesRuleConditionGroupConditionsOutputReference {
    return new FirewallConfigRulesRuleConditionGroupConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallConfigRulesRuleConditionGroup {
  /**
  * Conditions that must all match within a group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#conditions FirewallConfig#conditions}
  */
  readonly conditions: FirewallConfigRulesRuleConditionGroupConditions[] | cdktf.IResolvable;
}

export function firewallConfigRulesRuleConditionGroupToTerraform(struct?: FirewallConfigRulesRuleConditionGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditions: cdktf.listMapper(firewallConfigRulesRuleConditionGroupConditionsToTerraform, false)(struct!.conditions),
  }
}


export function firewallConfigRulesRuleConditionGroupToHclTerraform(struct?: FirewallConfigRulesRuleConditionGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditions: {
      value: cdktf.listMapperHcl(firewallConfigRulesRuleConditionGroupConditionsToHclTerraform, false)(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "FirewallConfigRulesRuleConditionGroupConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigRulesRuleConditionGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallConfigRulesRuleConditionGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigRulesRuleConditionGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditions.internalValue = value.conditions;
    }
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new FirewallConfigRulesRuleConditionGroupConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: FirewallConfigRulesRuleConditionGroupConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class FirewallConfigRulesRuleConditionGroupList extends cdktf.ComplexList {
  public internalValue? : FirewallConfigRulesRuleConditionGroup[] | cdktf.IResolvable

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
  public get(index: number): FirewallConfigRulesRuleConditionGroupOutputReference {
    return new FirewallConfigRulesRuleConditionGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallConfigRulesRule {
  /**
  * Actions to take when the condition groups match a request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#action FirewallConfig#action}
  */
  readonly action: FirewallConfigRulesRuleAction;
  /**
  * Rule is active or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#active FirewallConfig#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Sets of conditions that may match a request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#condition_group FirewallConfig#condition_group}
  */
  readonly conditionGroup: FirewallConfigRulesRuleConditionGroup[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#description FirewallConfig#description}
  */
  readonly description?: string;
  /**
  * Name to identify the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#name FirewallConfig#name}
  */
  readonly name: string;
}

export function firewallConfigRulesRuleToTerraform(struct?: FirewallConfigRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: firewallConfigRulesRuleActionToTerraform(struct!.action),
    active: cdktf.booleanToTerraform(struct!.active),
    condition_group: cdktf.listMapper(firewallConfigRulesRuleConditionGroupToTerraform, false)(struct!.conditionGroup),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallConfigRulesRuleToHclTerraform(struct?: FirewallConfigRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: firewallConfigRulesRuleActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "FirewallConfigRulesRuleAction",
    },
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    condition_group: {
      value: cdktf.listMapperHcl(firewallConfigRulesRuleConditionGroupToHclTerraform, false)(struct!.conditionGroup),
      isBlock: true,
      type: "list",
      storageClassType: "FirewallConfigRulesRuleConditionGroupList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FirewallConfigRulesRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._conditionGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionGroup = this._conditionGroup?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigRulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._active = undefined;
      this._conditionGroup.internalValue = undefined;
      this._description = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._active = value.active;
      this._conditionGroup.internalValue = value.conditionGroup;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new FirewallConfigRulesRuleActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: FirewallConfigRulesRuleAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // condition_group - computed: false, optional: false, required: true
  private _conditionGroup = new FirewallConfigRulesRuleConditionGroupList(this, "condition_group", false);
  public get conditionGroup() {
    return this._conditionGroup;
  }
  public putConditionGroup(value: FirewallConfigRulesRuleConditionGroup[] | cdktf.IResolvable) {
    this._conditionGroup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionGroupInput() {
    return this._conditionGroup.internalValue;
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
}

export class FirewallConfigRulesRuleList extends cdktf.ComplexList {
  public internalValue? : FirewallConfigRulesRule[] | cdktf.IResolvable

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
  public get(index: number): FirewallConfigRulesRuleOutputReference {
    return new FirewallConfigRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallConfigRules {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#rule FirewallConfig#rule}
  */
  readonly rule?: FirewallConfigRulesRule[] | cdktf.IResolvable;
}

export function firewallConfigRulesToTerraform(struct?: FirewallConfigRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rule: cdktf.listMapper(firewallConfigRulesRuleToTerraform, true)(struct!.rule),
  }
}


export function firewallConfigRulesToHclTerraform(struct?: FirewallConfigRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rule: {
      value: cdktf.listMapperHcl(firewallConfigRulesRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "FirewallConfigRulesRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallConfigRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FirewallConfigRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallConfigRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rule.internalValue = value.rule;
    }
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new FirewallConfigRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: FirewallConfigRulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config vercel_firewall_config}
*/
export class FirewallConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vercel_firewall_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallConfig to import
  * @param importFromId The id of the existing FirewallConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vercel_firewall_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vercel/vercel/4.0.2/docs/resources/firewall_config vercel_firewall_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallConfigConfig
  */
  public constructor(scope: Construct, id: string, config: FirewallConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'vercel_firewall_config',
      terraformGeneratorMetadata: {
        providerName: 'vercel',
        providerVersion: '4.0.2',
        providerVersionConstraint: '4.0.2'
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
    this._projectId = config.projectId;
    this._teamId = config.teamId;
    this._ipRules.internalValue = config.ipRules;
    this._managedRulesets.internalValue = config.managedRulesets;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // team_id - computed: true, optional: true, required: false
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  public resetTeamId() {
    this._teamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // ip_rules - computed: false, optional: true, required: false
  private _ipRules = new FirewallConfigIpRulesOutputReference(this, "ip_rules");
  public get ipRules() {
    return this._ipRules;
  }
  public putIpRules(value: FirewallConfigIpRules) {
    this._ipRules.internalValue = value;
  }
  public resetIpRules() {
    this._ipRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRulesInput() {
    return this._ipRules.internalValue;
  }

  // managed_rulesets - computed: false, optional: true, required: false
  private _managedRulesets = new FirewallConfigManagedRulesetsOutputReference(this, "managed_rulesets");
  public get managedRulesets() {
    return this._managedRulesets;
  }
  public putManagedRulesets(value: FirewallConfigManagedRulesets) {
    this._managedRulesets.internalValue = value;
  }
  public resetManagedRulesets() {
    this._managedRulesets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedRulesetsInput() {
    return this._managedRulesets.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new FirewallConfigRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: FirewallConfigRules) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      project_id: cdktf.stringToTerraform(this._projectId),
      team_id: cdktf.stringToTerraform(this._teamId),
      ip_rules: firewallConfigIpRulesToTerraform(this._ipRules.internalValue),
      managed_rulesets: firewallConfigManagedRulesetsToTerraform(this._managedRulesets.internalValue),
      rules: firewallConfigRulesToTerraform(this._rules.internalValue),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      team_id: {
        value: cdktf.stringToHclTerraform(this._teamId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_rules: {
        value: firewallConfigIpRulesToHclTerraform(this._ipRules.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirewallConfigIpRules",
      },
      managed_rulesets: {
        value: firewallConfigManagedRulesetsToHclTerraform(this._managedRulesets.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirewallConfigManagedRulesets",
      },
      rules: {
        value: firewallConfigRulesToHclTerraform(this._rules.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FirewallConfigRules",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
