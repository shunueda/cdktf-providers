// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnhancedFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#allow_all EnhancedFirewallPolicy#allow_all}
  */
  readonly allowAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#annotations EnhancedFirewallPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#deny_all EnhancedFirewallPolicy#deny_all}
  */
  readonly denyAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#description EnhancedFirewallPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#disable EnhancedFirewallPolicy#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#id EnhancedFirewallPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#labels EnhancedFirewallPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#name EnhancedFirewallPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#namespace EnhancedFirewallPolicy#namespace}
  */
  readonly namespace: string;
  /**
  * allowed_destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#allowed_destinations EnhancedFirewallPolicy#allowed_destinations}
  */
  readonly allowedDestinations?: EnhancedFirewallPolicyAllowedDestinations;
  /**
  * allowed_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#allowed_sources EnhancedFirewallPolicy#allowed_sources}
  */
  readonly allowedSources?: EnhancedFirewallPolicyAllowedSources;
  /**
  * denied_destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#denied_destinations EnhancedFirewallPolicy#denied_destinations}
  */
  readonly deniedDestinations?: EnhancedFirewallPolicyDeniedDestinations;
  /**
  * denied_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#denied_sources EnhancedFirewallPolicy#denied_sources}
  */
  readonly deniedSources?: EnhancedFirewallPolicyDeniedSources;
  /**
  * rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#rule_list EnhancedFirewallPolicy#rule_list}
  */
  readonly ruleList?: EnhancedFirewallPolicyRuleListStruct;
  /**
  * segment_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#segment_policy EnhancedFirewallPolicy#segment_policy}
  */
  readonly segmentPolicy?: EnhancedFirewallPolicySegmentPolicy;
}
export interface EnhancedFirewallPolicyAllowedDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#ipv6_prefix EnhancedFirewallPolicy#ipv6_prefix}
  */
  readonly ipv6Prefix?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#prefix EnhancedFirewallPolicy#prefix}
  */
  readonly prefix?: string[];
}

export function enhancedFirewallPolicyAllowedDestinationsToTerraform(struct?: EnhancedFirewallPolicyAllowedDestinationsOutputReference | EnhancedFirewallPolicyAllowedDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefix),
    prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefix),
  }
}


export function enhancedFirewallPolicyAllowedDestinationsToHclTerraform(struct?: EnhancedFirewallPolicyAllowedDestinationsOutputReference | EnhancedFirewallPolicyAllowedDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicyAllowedDestinationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedFirewallPolicyAllowedDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefix = this._ipv6Prefix;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicyAllowedDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Prefix = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Prefix = value.ipv6Prefix;
      this._prefix = value.prefix;
    }
  }

  // ipv6_prefix - computed: false, optional: true, required: false
  private _ipv6Prefix?: string[]; 
  public get ipv6Prefix() {
    return this.getListAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: string[]) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string[]; 
  public get prefix() {
    return this.getListAttribute('prefix');
  }
  public set prefix(value: string[]) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface EnhancedFirewallPolicyAllowedSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#ipv6_prefix EnhancedFirewallPolicy#ipv6_prefix}
  */
  readonly ipv6Prefix?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#prefix EnhancedFirewallPolicy#prefix}
  */
  readonly prefix?: string[];
}

export function enhancedFirewallPolicyAllowedSourcesToTerraform(struct?: EnhancedFirewallPolicyAllowedSourcesOutputReference | EnhancedFirewallPolicyAllowedSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefix),
    prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefix),
  }
}


export function enhancedFirewallPolicyAllowedSourcesToHclTerraform(struct?: EnhancedFirewallPolicyAllowedSourcesOutputReference | EnhancedFirewallPolicyAllowedSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicyAllowedSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedFirewallPolicyAllowedSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefix = this._ipv6Prefix;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicyAllowedSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Prefix = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Prefix = value.ipv6Prefix;
      this._prefix = value.prefix;
    }
  }

  // ipv6_prefix - computed: false, optional: true, required: false
  private _ipv6Prefix?: string[]; 
  public get ipv6Prefix() {
    return this.getListAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: string[]) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string[]; 
  public get prefix() {
    return this.getListAttribute('prefix');
  }
  public set prefix(value: string[]) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface EnhancedFirewallPolicyDeniedDestinations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#ipv6_prefix EnhancedFirewallPolicy#ipv6_prefix}
  */
  readonly ipv6Prefix?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#prefix EnhancedFirewallPolicy#prefix}
  */
  readonly prefix?: string[];
}

export function enhancedFirewallPolicyDeniedDestinationsToTerraform(struct?: EnhancedFirewallPolicyDeniedDestinationsOutputReference | EnhancedFirewallPolicyDeniedDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefix),
    prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefix),
  }
}


export function enhancedFirewallPolicyDeniedDestinationsToHclTerraform(struct?: EnhancedFirewallPolicyDeniedDestinationsOutputReference | EnhancedFirewallPolicyDeniedDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicyDeniedDestinationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedFirewallPolicyDeniedDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefix = this._ipv6Prefix;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicyDeniedDestinations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Prefix = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Prefix = value.ipv6Prefix;
      this._prefix = value.prefix;
    }
  }

  // ipv6_prefix - computed: false, optional: true, required: false
  private _ipv6Prefix?: string[]; 
  public get ipv6Prefix() {
    return this.getListAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: string[]) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string[]; 
  public get prefix() {
    return this.getListAttribute('prefix');
  }
  public set prefix(value: string[]) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface EnhancedFirewallPolicyDeniedSources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#ipv6_prefix EnhancedFirewallPolicy#ipv6_prefix}
  */
  readonly ipv6Prefix?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#prefix EnhancedFirewallPolicy#prefix}
  */
  readonly prefix?: string[];
}

export function enhancedFirewallPolicyDeniedSourcesToTerraform(struct?: EnhancedFirewallPolicyDeniedSourcesOutputReference | EnhancedFirewallPolicyDeniedSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefix),
    prefix: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefix),
  }
}


export function enhancedFirewallPolicyDeniedSourcesToHclTerraform(struct?: EnhancedFirewallPolicyDeniedSourcesOutputReference | EnhancedFirewallPolicyDeniedSources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefix: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefix),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicyDeniedSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedFirewallPolicyDeniedSources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefix = this._ipv6Prefix;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicyDeniedSources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Prefix = undefined;
      this._prefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Prefix = value.ipv6Prefix;
      this._prefix = value.prefix;
    }
  }

  // ipv6_prefix - computed: false, optional: true, required: false
  private _ipv6Prefix?: string[]; 
  public get ipv6Prefix() {
    return this.getListAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: string[]) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string[]; 
  public get prefix() {
    return this.getListAttribute('prefix');
  }
  public set prefix(value: string[]) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}
export interface EnhancedFirewallPolicyRuleListRulesAdvancedAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#action EnhancedFirewallPolicy#action}
  */
  readonly action?: string;
}

export function enhancedFirewallPolicyRuleListRulesAdvancedActionToTerraform(struct?: EnhancedFirewallPolicyRuleListRulesAdvancedActionOutputReference | EnhancedFirewallPolicyRuleListRulesAdvancedAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
  }
}


export function enhancedFirewallPolicyRuleListRulesAdvancedActionToHclTerraform(struct?: EnhancedFirewallPolicyRuleListRulesAdvancedActionOutputReference | EnhancedFirewallPolicyRuleListRulesAdvancedAction): any {
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

export class EnhancedFirewallPolicyRuleListRulesAdvancedActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedFirewallPolicyRuleListRulesAdvancedAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicyRuleListRulesAdvancedAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
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
}
export interface EnhancedFirewallPolicyRuleListRulesApplications {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#applications EnhancedFirewallPolicy#applications}
  */
  readonly applications?: string[];
}

export function enhancedFirewallPolicyRuleListRulesApplicationsToTerraform(struct?: EnhancedFirewallPolicyRuleListRulesApplicationsOutputReference | EnhancedFirewallPolicyRuleListRulesApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applications),
  }
}


export function enhancedFirewallPolicyRuleListRulesApplicationsToHclTerraform(struct?: EnhancedFirewallPolicyRuleListRulesApplicationsOutputReference | EnhancedFirewallPolicyRuleListRulesApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicyRuleListRulesApplicationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedFirewallPolicyRuleListRulesApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicyRuleListRulesApplications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._applications = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._applications = value.applications;
    }
  }

  // applications - computed: false, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return this.getListAttribute('applications');
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }
}
export interface EnhancedFirewallPolicyRuleListRulesDestinationAwsVpcIds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#vpc_id EnhancedFirewallPolicy#vpc_id}
  */
  readonly vpcId: string[];
}

export function enhancedFirewallPolicyRuleListRulesDestinationAwsVpcIdsToTerraform(struct?: EnhancedFirewallPolicyRuleListRulesDestinationAwsVpcIdsOutputReference | EnhancedFirewallPolicyRuleListRulesDestinationAwsVpcIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vpc_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpcId),
  }
}


export function enhancedFirewallPolicyRuleListRulesDestinationAwsVpcIdsToHclTerraform(struct?: EnhancedFirewallPolicyRuleListRulesDestinationAwsVpcIdsOutputReference | EnhancedFirewallPolicyRuleListRulesDestinationAwsVpcIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vpc_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpcId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicyRuleListRulesDestinationAwsVpcIdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedFirewallPolicyRuleListRulesDestinationAwsVpcIds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicyRuleListRulesDestinationAwsVpcIds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vpcId = value.vpcId;
    }
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string[]; 
  public get vpcId() {
    return this.getListAttribute('vpc_id');
  }
  public set vpcId(value: string[]) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#name EnhancedFirewallPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#namespace EnhancedFirewallPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#tenant EnhancedFirewallPolicy#tenant}
  */
  readonly tenant?: string;
}

export function enhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetRefToTerraform(struct?: EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function enhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetRefToHclTerraform(struct?: EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetRef | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetRefList extends cdktf.ComplexList {
  public internalValue? : EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetRef[] | cdktf.IResolvable

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
  public get(index: number): EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetRefOutputReference {
    return new EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSet {
  /**
  * ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#ref EnhancedFirewallPolicy#ref}
  */
  readonly ref?: EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetRef[] | cdktf.IResolvable;
}

export function enhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetToTerraform(struct?: EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetOutputReference | EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: cdktf.listMapper(enhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetRefToTerraform, true)(struct!.ref),
  }
}


export function enhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetToHclTerraform(struct?: EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetOutputReference | EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: cdktf.listMapperHcl(enhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetRefToHclTerraform, true)(struct!.ref),
      isBlock: true,
      type: "list",
      storageClassType: "EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ref.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ref.internalValue = value.ref;
    }
  }

  // ref - computed: false, optional: true, required: false
  private _ref = new EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetRefList(this, "ref", false);
  public get ref() {
    return this._ref;
  }
  public putRef(value: EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetRef[] | cdktf.IResolvable) {
    this._ref.internalValue = value;
  }
  public resetRef() {
    this._ref.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface EnhancedFirewallPolicyRuleListRulesDestinationLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#expressions EnhancedFirewallPolicy#expressions}
  */
  readonly expressions: string[];
}

export function enhancedFirewallPolicyRuleListRulesDestinationLabelSelectorToTerraform(struct?: EnhancedFirewallPolicyRuleListRulesDestinationLabelSelectorOutputReference | EnhancedFirewallPolicyRuleListRulesDestinationLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function enhancedFirewallPolicyRuleListRulesDestinationLabelSelectorToHclTerraform(struct?: EnhancedFirewallPolicyRuleListRulesDestinationLabelSelectorOutputReference | EnhancedFirewallPolicyRuleListRulesDestinationLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicyRuleListRulesDestinationLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedFirewallPolicyRuleListRulesDestinationLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicyRuleListRulesDestinationLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions?: string[]; 
  public get expressions() {
    return this.getListAttribute('expressions');
  }
  public set expressions(value: string[]) {
    this._expressions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }
}
export interface EnhancedFirewallPolicyRuleListRulesDestinationPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#ipv6_prefixes EnhancedFirewallPolicy#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#prefixes EnhancedFirewallPolicy#prefixes}
  */
  readonly prefixes?: string[];
}

export function enhancedFirewallPolicyRuleListRulesDestinationPrefixListStructToTerraform(struct?: EnhancedFirewallPolicyRuleListRulesDestinationPrefixListStructOutputReference | EnhancedFirewallPolicyRuleListRulesDestinationPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function enhancedFirewallPolicyRuleListRulesDestinationPrefixListStructToHclTerraform(struct?: EnhancedFirewallPolicyRuleListRulesDestinationPrefixListStructOutputReference | EnhancedFirewallPolicyRuleListRulesDestinationPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicyRuleListRulesDestinationPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedFirewallPolicyRuleListRulesDestinationPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicyRuleListRulesDestinationPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Prefixes = undefined;
      this._prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Prefixes = value.ipv6Prefixes;
      this._prefixes = value.prefixes;
    }
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}
export interface EnhancedFirewallPolicyRuleListRulesInsertServiceNfvService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#name EnhancedFirewallPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#namespace EnhancedFirewallPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#tenant EnhancedFirewallPolicy#tenant}
  */
  readonly tenant?: string;
}

export function enhancedFirewallPolicyRuleListRulesInsertServiceNfvServiceToTerraform(struct?: EnhancedFirewallPolicyRuleListRulesInsertServiceNfvServiceOutputReference | EnhancedFirewallPolicyRuleListRulesInsertServiceNfvService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function enhancedFirewallPolicyRuleListRulesInsertServiceNfvServiceToHclTerraform(struct?: EnhancedFirewallPolicyRuleListRulesInsertServiceNfvServiceOutputReference | EnhancedFirewallPolicyRuleListRulesInsertServiceNfvService): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicyRuleListRulesInsertServiceNfvServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedFirewallPolicyRuleListRulesInsertServiceNfvService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicyRuleListRulesInsertServiceNfvService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface EnhancedFirewallPolicyRuleListRulesInsertService {
  /**
  * nfv_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#nfv_service EnhancedFirewallPolicy#nfv_service}
  */
  readonly nfvService: EnhancedFirewallPolicyRuleListRulesInsertServiceNfvService;
}

export function enhancedFirewallPolicyRuleListRulesInsertServiceToTerraform(struct?: EnhancedFirewallPolicyRuleListRulesInsertServiceOutputReference | EnhancedFirewallPolicyRuleListRulesInsertService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nfv_service: enhancedFirewallPolicyRuleListRulesInsertServiceNfvServiceToTerraform(struct!.nfvService),
  }
}


export function enhancedFirewallPolicyRuleListRulesInsertServiceToHclTerraform(struct?: EnhancedFirewallPolicyRuleListRulesInsertServiceOutputReference | EnhancedFirewallPolicyRuleListRulesInsertService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nfv_service: {
      value: enhancedFirewallPolicyRuleListRulesInsertServiceNfvServiceToHclTerraform(struct!.nfvService),
      isBlock: true,
      type: "list",
      storageClassType: "EnhancedFirewallPolicyRuleListRulesInsertServiceNfvServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicyRuleListRulesInsertServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedFirewallPolicyRuleListRulesInsertService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nfvService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfvService = this._nfvService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicyRuleListRulesInsertService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nfvService.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nfvService.internalValue = value.nfvService;
    }
  }

  // nfv_service - computed: false, optional: false, required: true
  private _nfvService = new EnhancedFirewallPolicyRuleListRulesInsertServiceNfvServiceOutputReference(this, "nfv_service");
  public get nfvService() {
    return this._nfvService;
  }
  public putNfvService(value: EnhancedFirewallPolicyRuleListRulesInsertServiceNfvService) {
    this._nfvService.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nfvServiceInput() {
    return this._nfvService.internalValue;
  }
}
export interface EnhancedFirewallPolicyRuleListRulesLabelMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#keys EnhancedFirewallPolicy#keys}
  */
  readonly keys?: string[];
}

export function enhancedFirewallPolicyRuleListRulesLabelMatcherToTerraform(struct?: EnhancedFirewallPolicyRuleListRulesLabelMatcherOutputReference | EnhancedFirewallPolicyRuleListRulesLabelMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.keys),
  }
}


export function enhancedFirewallPolicyRuleListRulesLabelMatcherToHclTerraform(struct?: EnhancedFirewallPolicyRuleListRulesLabelMatcherOutputReference | EnhancedFirewallPolicyRuleListRulesLabelMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.keys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicyRuleListRulesLabelMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedFirewallPolicyRuleListRulesLabelMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keys !== undefined) {
      hasAnyValues = true;
      internalValueResult.keys = this._keys;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicyRuleListRulesLabelMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keys = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keys = value.keys;
    }
  }

  // keys - computed: false, optional: true, required: false
  private _keys?: string[]; 
  public get keys() {
    return this.getListAttribute('keys');
  }
  public set keys(value: string[]) {
    this._keys = value;
  }
  public resetKeys() {
    this._keys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys;
  }
}
export interface EnhancedFirewallPolicyRuleListRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#description EnhancedFirewallPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#name EnhancedFirewallPolicy#name}
  */
  readonly name: string;
}

export function enhancedFirewallPolicyRuleListRulesMetadataToTerraform(struct?: EnhancedFirewallPolicyRuleListRulesMetadataOutputReference | EnhancedFirewallPolicyRuleListRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function enhancedFirewallPolicyRuleListRulesMetadataToHclTerraform(struct?: EnhancedFirewallPolicyRuleListRulesMetadataOutputReference | EnhancedFirewallPolicyRuleListRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class EnhancedFirewallPolicyRuleListRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedFirewallPolicyRuleListRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: EnhancedFirewallPolicyRuleListRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
    }
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
export interface EnhancedFirewallPolicyRuleListRulesProtocolPortRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#port_ranges EnhancedFirewallPolicy#port_ranges}
  */
  readonly portRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#protocol EnhancedFirewallPolicy#protocol}
  */
  readonly protocol?: string;
}

export function enhancedFirewallPolicyRuleListRulesProtocolPortRangeToTerraform(struct?: EnhancedFirewallPolicyRuleListRulesProtocolPortRangeOutputReference | EnhancedFirewallPolicyRuleListRulesProtocolPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portRanges),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function enhancedFirewallPolicyRuleListRulesProtocolPortRangeToHclTerraform(struct?: EnhancedFirewallPolicyRuleListRulesProtocolPortRangeOutputReference | EnhancedFirewallPolicyRuleListRulesProtocolPortRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicyRuleListRulesProtocolPortRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedFirewallPolicyRuleListRulesProtocolPortRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicyRuleListRulesProtocolPortRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._portRanges = undefined;
      this._protocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._portRanges = value.portRanges;
      this._protocol = value.protocol;
    }
  }

  // port_ranges - computed: false, optional: true, required: false
  private _portRanges?: string[]; 
  public get portRanges() {
    return this.getListAttribute('port_ranges');
  }
  public set portRanges(value: string[]) {
    this._portRanges = value;
  }
  public resetPortRanges() {
    this._portRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface EnhancedFirewallPolicyRuleListRulesSourceAwsVpcIds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#vpc_id EnhancedFirewallPolicy#vpc_id}
  */
  readonly vpcId: string[];
}

export function enhancedFirewallPolicyRuleListRulesSourceAwsVpcIdsToTerraform(struct?: EnhancedFirewallPolicyRuleListRulesSourceAwsVpcIdsOutputReference | EnhancedFirewallPolicyRuleListRulesSourceAwsVpcIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vpc_id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpcId),
  }
}


export function enhancedFirewallPolicyRuleListRulesSourceAwsVpcIdsToHclTerraform(struct?: EnhancedFirewallPolicyRuleListRulesSourceAwsVpcIdsOutputReference | EnhancedFirewallPolicyRuleListRulesSourceAwsVpcIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vpc_id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpcId),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicyRuleListRulesSourceAwsVpcIdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedFirewallPolicyRuleListRulesSourceAwsVpcIds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicyRuleListRulesSourceAwsVpcIds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._vpcId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._vpcId = value.vpcId;
    }
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string[]; 
  public get vpcId() {
    return this.getListAttribute('vpc_id');
  }
  public set vpcId(value: string[]) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }
}
export interface EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSetRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#name EnhancedFirewallPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#namespace EnhancedFirewallPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#tenant EnhancedFirewallPolicy#tenant}
  */
  readonly tenant?: string;
}

export function enhancedFirewallPolicyRuleListRulesSourceIpPrefixSetRefToTerraform(struct?: EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function enhancedFirewallPolicyRuleListRulesSourceIpPrefixSetRefToHclTerraform(struct?: EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSetRef | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSetRefOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSetRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSetRefList extends cdktf.ComplexList {
  public internalValue? : EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSetRef[] | cdktf.IResolvable

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
  public get(index: number): EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSetRefOutputReference {
    return new EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSetRefOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSet {
  /**
  * ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#ref EnhancedFirewallPolicy#ref}
  */
  readonly ref?: EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSetRef[] | cdktf.IResolvable;
}

export function enhancedFirewallPolicyRuleListRulesSourceIpPrefixSetToTerraform(struct?: EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSetOutputReference | EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: cdktf.listMapper(enhancedFirewallPolicyRuleListRulesSourceIpPrefixSetRefToTerraform, true)(struct!.ref),
  }
}


export function enhancedFirewallPolicyRuleListRulesSourceIpPrefixSetToHclTerraform(struct?: EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSetOutputReference | EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: cdktf.listMapperHcl(enhancedFirewallPolicyRuleListRulesSourceIpPrefixSetRefToHclTerraform, true)(struct!.ref),
      isBlock: true,
      type: "list",
      storageClassType: "EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSetRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ref.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ref.internalValue = value.ref;
    }
  }

  // ref - computed: false, optional: true, required: false
  private _ref = new EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSetRefList(this, "ref", false);
  public get ref() {
    return this._ref;
  }
  public putRef(value: EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSetRef[] | cdktf.IResolvable) {
    this._ref.internalValue = value;
  }
  public resetRef() {
    this._ref.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface EnhancedFirewallPolicyRuleListRulesSourceLabelSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#expressions EnhancedFirewallPolicy#expressions}
  */
  readonly expressions: string[];
}

export function enhancedFirewallPolicyRuleListRulesSourceLabelSelectorToTerraform(struct?: EnhancedFirewallPolicyRuleListRulesSourceLabelSelectorOutputReference | EnhancedFirewallPolicyRuleListRulesSourceLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function enhancedFirewallPolicyRuleListRulesSourceLabelSelectorToHclTerraform(struct?: EnhancedFirewallPolicyRuleListRulesSourceLabelSelectorOutputReference | EnhancedFirewallPolicyRuleListRulesSourceLabelSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicyRuleListRulesSourceLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedFirewallPolicyRuleListRulesSourceLabelSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicyRuleListRulesSourceLabelSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions?: string[]; 
  public get expressions() {
    return this.getListAttribute('expressions');
  }
  public set expressions(value: string[]) {
    this._expressions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }
}
export interface EnhancedFirewallPolicyRuleListRulesSourcePrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#ipv6_prefixes EnhancedFirewallPolicy#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#prefixes EnhancedFirewallPolicy#prefixes}
  */
  readonly prefixes?: string[];
}

export function enhancedFirewallPolicyRuleListRulesSourcePrefixListStructToTerraform(struct?: EnhancedFirewallPolicyRuleListRulesSourcePrefixListStructOutputReference | EnhancedFirewallPolicyRuleListRulesSourcePrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function enhancedFirewallPolicyRuleListRulesSourcePrefixListStructToHclTerraform(struct?: EnhancedFirewallPolicyRuleListRulesSourcePrefixListStructOutputReference | EnhancedFirewallPolicyRuleListRulesSourcePrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicyRuleListRulesSourcePrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedFirewallPolicyRuleListRulesSourcePrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicyRuleListRulesSourcePrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Prefixes = undefined;
      this._prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Prefixes = value.ipv6Prefixes;
      this._prefixes = value.prefixes;
    }
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}
export interface EnhancedFirewallPolicyRuleListRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#all_destinations EnhancedFirewallPolicy#all_destinations}
  */
  readonly allDestinations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#all_sli_vips EnhancedFirewallPolicy#all_sli_vips}
  */
  readonly allSliVips?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#all_slo_vips EnhancedFirewallPolicy#all_slo_vips}
  */
  readonly allSloVips?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#all_sources EnhancedFirewallPolicy#all_sources}
  */
  readonly allSources?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#all_tcp_traffic EnhancedFirewallPolicy#all_tcp_traffic}
  */
  readonly allTcpTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#all_traffic EnhancedFirewallPolicy#all_traffic}
  */
  readonly allTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#all_udp_traffic EnhancedFirewallPolicy#all_udp_traffic}
  */
  readonly allUdpTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#allow EnhancedFirewallPolicy#allow}
  */
  readonly allow?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#deny EnhancedFirewallPolicy#deny}
  */
  readonly deny?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#inside_destinations EnhancedFirewallPolicy#inside_destinations}
  */
  readonly insideDestinations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#inside_sources EnhancedFirewallPolicy#inside_sources}
  */
  readonly insideSources?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#outside_destinations EnhancedFirewallPolicy#outside_destinations}
  */
  readonly outsideDestinations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#outside_sources EnhancedFirewallPolicy#outside_sources}
  */
  readonly outsideSources?: boolean | cdktf.IResolvable;
  /**
  * advanced_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#advanced_action EnhancedFirewallPolicy#advanced_action}
  */
  readonly advancedAction?: EnhancedFirewallPolicyRuleListRulesAdvancedAction;
  /**
  * applications block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#applications EnhancedFirewallPolicy#applications}
  */
  readonly applications?: EnhancedFirewallPolicyRuleListRulesApplications;
  /**
  * destination_aws_vpc_ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#destination_aws_vpc_ids EnhancedFirewallPolicy#destination_aws_vpc_ids}
  */
  readonly destinationAwsVpcIds?: EnhancedFirewallPolicyRuleListRulesDestinationAwsVpcIds;
  /**
  * destination_ip_prefix_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#destination_ip_prefix_set EnhancedFirewallPolicy#destination_ip_prefix_set}
  */
  readonly destinationIpPrefixSet?: EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSet;
  /**
  * destination_label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#destination_label_selector EnhancedFirewallPolicy#destination_label_selector}
  */
  readonly destinationLabelSelector?: EnhancedFirewallPolicyRuleListRulesDestinationLabelSelector;
  /**
  * destination_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#destination_prefix_list EnhancedFirewallPolicy#destination_prefix_list}
  */
  readonly destinationPrefixList?: EnhancedFirewallPolicyRuleListRulesDestinationPrefixListStruct;
  /**
  * insert_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#insert_service EnhancedFirewallPolicy#insert_service}
  */
  readonly insertService?: EnhancedFirewallPolicyRuleListRulesInsertService;
  /**
  * label_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#label_matcher EnhancedFirewallPolicy#label_matcher}
  */
  readonly labelMatcher?: EnhancedFirewallPolicyRuleListRulesLabelMatcher;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#metadata EnhancedFirewallPolicy#metadata}
  */
  readonly metadata: EnhancedFirewallPolicyRuleListRulesMetadata;
  /**
  * protocol_port_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#protocol_port_range EnhancedFirewallPolicy#protocol_port_range}
  */
  readonly protocolPortRange?: EnhancedFirewallPolicyRuleListRulesProtocolPortRange;
  /**
  * source_aws_vpc_ids block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#source_aws_vpc_ids EnhancedFirewallPolicy#source_aws_vpc_ids}
  */
  readonly sourceAwsVpcIds?: EnhancedFirewallPolicyRuleListRulesSourceAwsVpcIds;
  /**
  * source_ip_prefix_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#source_ip_prefix_set EnhancedFirewallPolicy#source_ip_prefix_set}
  */
  readonly sourceIpPrefixSet?: EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSet;
  /**
  * source_label_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#source_label_selector EnhancedFirewallPolicy#source_label_selector}
  */
  readonly sourceLabelSelector?: EnhancedFirewallPolicyRuleListRulesSourceLabelSelector;
  /**
  * source_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#source_prefix_list EnhancedFirewallPolicy#source_prefix_list}
  */
  readonly sourcePrefixList?: EnhancedFirewallPolicyRuleListRulesSourcePrefixListStruct;
}

export function enhancedFirewallPolicyRuleListRulesToTerraform(struct?: EnhancedFirewallPolicyRuleListRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_destinations: cdktf.booleanToTerraform(struct!.allDestinations),
    all_sli_vips: cdktf.booleanToTerraform(struct!.allSliVips),
    all_slo_vips: cdktf.booleanToTerraform(struct!.allSloVips),
    all_sources: cdktf.booleanToTerraform(struct!.allSources),
    all_tcp_traffic: cdktf.booleanToTerraform(struct!.allTcpTraffic),
    all_traffic: cdktf.booleanToTerraform(struct!.allTraffic),
    all_udp_traffic: cdktf.booleanToTerraform(struct!.allUdpTraffic),
    allow: cdktf.booleanToTerraform(struct!.allow),
    deny: cdktf.booleanToTerraform(struct!.deny),
    inside_destinations: cdktf.booleanToTerraform(struct!.insideDestinations),
    inside_sources: cdktf.booleanToTerraform(struct!.insideSources),
    outside_destinations: cdktf.booleanToTerraform(struct!.outsideDestinations),
    outside_sources: cdktf.booleanToTerraform(struct!.outsideSources),
    advanced_action: enhancedFirewallPolicyRuleListRulesAdvancedActionToTerraform(struct!.advancedAction),
    applications: enhancedFirewallPolicyRuleListRulesApplicationsToTerraform(struct!.applications),
    destination_aws_vpc_ids: enhancedFirewallPolicyRuleListRulesDestinationAwsVpcIdsToTerraform(struct!.destinationAwsVpcIds),
    destination_ip_prefix_set: enhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetToTerraform(struct!.destinationIpPrefixSet),
    destination_label_selector: enhancedFirewallPolicyRuleListRulesDestinationLabelSelectorToTerraform(struct!.destinationLabelSelector),
    destination_prefix_list: enhancedFirewallPolicyRuleListRulesDestinationPrefixListStructToTerraform(struct!.destinationPrefixList),
    insert_service: enhancedFirewallPolicyRuleListRulesInsertServiceToTerraform(struct!.insertService),
    label_matcher: enhancedFirewallPolicyRuleListRulesLabelMatcherToTerraform(struct!.labelMatcher),
    metadata: enhancedFirewallPolicyRuleListRulesMetadataToTerraform(struct!.metadata),
    protocol_port_range: enhancedFirewallPolicyRuleListRulesProtocolPortRangeToTerraform(struct!.protocolPortRange),
    source_aws_vpc_ids: enhancedFirewallPolicyRuleListRulesSourceAwsVpcIdsToTerraform(struct!.sourceAwsVpcIds),
    source_ip_prefix_set: enhancedFirewallPolicyRuleListRulesSourceIpPrefixSetToTerraform(struct!.sourceIpPrefixSet),
    source_label_selector: enhancedFirewallPolicyRuleListRulesSourceLabelSelectorToTerraform(struct!.sourceLabelSelector),
    source_prefix_list: enhancedFirewallPolicyRuleListRulesSourcePrefixListStructToTerraform(struct!.sourcePrefixList),
  }
}


export function enhancedFirewallPolicyRuleListRulesToHclTerraform(struct?: EnhancedFirewallPolicyRuleListRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_destinations: {
      value: cdktf.booleanToHclTerraform(struct!.allDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_sli_vips: {
      value: cdktf.booleanToHclTerraform(struct!.allSliVips),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_slo_vips: {
      value: cdktf.booleanToHclTerraform(struct!.allSloVips),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_sources: {
      value: cdktf.booleanToHclTerraform(struct!.allSources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_tcp_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.allTcpTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.allTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    all_udp_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.allUdpTraffic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow: {
      value: cdktf.booleanToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny: {
      value: cdktf.booleanToHclTerraform(struct!.deny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inside_destinations: {
      value: cdktf.booleanToHclTerraform(struct!.insideDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inside_sources: {
      value: cdktf.booleanToHclTerraform(struct!.insideSources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outside_destinations: {
      value: cdktf.booleanToHclTerraform(struct!.outsideDestinations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    outside_sources: {
      value: cdktf.booleanToHclTerraform(struct!.outsideSources),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advanced_action: {
      value: enhancedFirewallPolicyRuleListRulesAdvancedActionToHclTerraform(struct!.advancedAction),
      isBlock: true,
      type: "list",
      storageClassType: "EnhancedFirewallPolicyRuleListRulesAdvancedActionList",
    },
    applications: {
      value: enhancedFirewallPolicyRuleListRulesApplicationsToHclTerraform(struct!.applications),
      isBlock: true,
      type: "list",
      storageClassType: "EnhancedFirewallPolicyRuleListRulesApplicationsList",
    },
    destination_aws_vpc_ids: {
      value: enhancedFirewallPolicyRuleListRulesDestinationAwsVpcIdsToHclTerraform(struct!.destinationAwsVpcIds),
      isBlock: true,
      type: "list",
      storageClassType: "EnhancedFirewallPolicyRuleListRulesDestinationAwsVpcIdsList",
    },
    destination_ip_prefix_set: {
      value: enhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetToHclTerraform(struct!.destinationIpPrefixSet),
      isBlock: true,
      type: "list",
      storageClassType: "EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetList",
    },
    destination_label_selector: {
      value: enhancedFirewallPolicyRuleListRulesDestinationLabelSelectorToHclTerraform(struct!.destinationLabelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnhancedFirewallPolicyRuleListRulesDestinationLabelSelectorList",
    },
    destination_prefix_list: {
      value: enhancedFirewallPolicyRuleListRulesDestinationPrefixListStructToHclTerraform(struct!.destinationPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "EnhancedFirewallPolicyRuleListRulesDestinationPrefixListStructList",
    },
    insert_service: {
      value: enhancedFirewallPolicyRuleListRulesInsertServiceToHclTerraform(struct!.insertService),
      isBlock: true,
      type: "list",
      storageClassType: "EnhancedFirewallPolicyRuleListRulesInsertServiceList",
    },
    label_matcher: {
      value: enhancedFirewallPolicyRuleListRulesLabelMatcherToHclTerraform(struct!.labelMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "EnhancedFirewallPolicyRuleListRulesLabelMatcherList",
    },
    metadata: {
      value: enhancedFirewallPolicyRuleListRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "EnhancedFirewallPolicyRuleListRulesMetadataList",
    },
    protocol_port_range: {
      value: enhancedFirewallPolicyRuleListRulesProtocolPortRangeToHclTerraform(struct!.protocolPortRange),
      isBlock: true,
      type: "list",
      storageClassType: "EnhancedFirewallPolicyRuleListRulesProtocolPortRangeList",
    },
    source_aws_vpc_ids: {
      value: enhancedFirewallPolicyRuleListRulesSourceAwsVpcIdsToHclTerraform(struct!.sourceAwsVpcIds),
      isBlock: true,
      type: "list",
      storageClassType: "EnhancedFirewallPolicyRuleListRulesSourceAwsVpcIdsList",
    },
    source_ip_prefix_set: {
      value: enhancedFirewallPolicyRuleListRulesSourceIpPrefixSetToHclTerraform(struct!.sourceIpPrefixSet),
      isBlock: true,
      type: "list",
      storageClassType: "EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSetList",
    },
    source_label_selector: {
      value: enhancedFirewallPolicyRuleListRulesSourceLabelSelectorToHclTerraform(struct!.sourceLabelSelector),
      isBlock: true,
      type: "list",
      storageClassType: "EnhancedFirewallPolicyRuleListRulesSourceLabelSelectorList",
    },
    source_prefix_list: {
      value: enhancedFirewallPolicyRuleListRulesSourcePrefixListStructToHclTerraform(struct!.sourcePrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "EnhancedFirewallPolicyRuleListRulesSourcePrefixListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicyRuleListRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnhancedFirewallPolicyRuleListRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allDestinations = this._allDestinations;
    }
    if (this._allSliVips !== undefined) {
      hasAnyValues = true;
      internalValueResult.allSliVips = this._allSliVips;
    }
    if (this._allSloVips !== undefined) {
      hasAnyValues = true;
      internalValueResult.allSloVips = this._allSloVips;
    }
    if (this._allSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.allSources = this._allSources;
    }
    if (this._allTcpTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.allTcpTraffic = this._allTcpTraffic;
    }
    if (this._allTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.allTraffic = this._allTraffic;
    }
    if (this._allUdpTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.allUdpTraffic = this._allUdpTraffic;
    }
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._deny !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny;
    }
    if (this._insideDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideDestinations = this._insideDestinations;
    }
    if (this._insideSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.insideSources = this._insideSources;
    }
    if (this._outsideDestinations !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideDestinations = this._outsideDestinations;
    }
    if (this._outsideSources !== undefined) {
      hasAnyValues = true;
      internalValueResult.outsideSources = this._outsideSources;
    }
    if (this._advancedAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advancedAction = this._advancedAction?.internalValue;
    }
    if (this._applications?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications?.internalValue;
    }
    if (this._destinationAwsVpcIds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationAwsVpcIds = this._destinationAwsVpcIds?.internalValue;
    }
    if (this._destinationIpPrefixSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationIpPrefixSet = this._destinationIpPrefixSet?.internalValue;
    }
    if (this._destinationLabelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationLabelSelector = this._destinationLabelSelector?.internalValue;
    }
    if (this._destinationPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPrefixList = this._destinationPrefixList?.internalValue;
    }
    if (this._insertService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertService = this._insertService?.internalValue;
    }
    if (this._labelMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelMatcher = this._labelMatcher?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._protocolPortRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolPortRange = this._protocolPortRange?.internalValue;
    }
    if (this._sourceAwsVpcIds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAwsVpcIds = this._sourceAwsVpcIds?.internalValue;
    }
    if (this._sourceIpPrefixSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpPrefixSet = this._sourceIpPrefixSet?.internalValue;
    }
    if (this._sourceLabelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLabelSelector = this._sourceLabelSelector?.internalValue;
    }
    if (this._sourcePrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePrefixList = this._sourcePrefixList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicyRuleListRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allDestinations = undefined;
      this._allSliVips = undefined;
      this._allSloVips = undefined;
      this._allSources = undefined;
      this._allTcpTraffic = undefined;
      this._allTraffic = undefined;
      this._allUdpTraffic = undefined;
      this._allow = undefined;
      this._deny = undefined;
      this._insideDestinations = undefined;
      this._insideSources = undefined;
      this._outsideDestinations = undefined;
      this._outsideSources = undefined;
      this._advancedAction.internalValue = undefined;
      this._applications.internalValue = undefined;
      this._destinationAwsVpcIds.internalValue = undefined;
      this._destinationIpPrefixSet.internalValue = undefined;
      this._destinationLabelSelector.internalValue = undefined;
      this._destinationPrefixList.internalValue = undefined;
      this._insertService.internalValue = undefined;
      this._labelMatcher.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._protocolPortRange.internalValue = undefined;
      this._sourceAwsVpcIds.internalValue = undefined;
      this._sourceIpPrefixSet.internalValue = undefined;
      this._sourceLabelSelector.internalValue = undefined;
      this._sourcePrefixList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allDestinations = value.allDestinations;
      this._allSliVips = value.allSliVips;
      this._allSloVips = value.allSloVips;
      this._allSources = value.allSources;
      this._allTcpTraffic = value.allTcpTraffic;
      this._allTraffic = value.allTraffic;
      this._allUdpTraffic = value.allUdpTraffic;
      this._allow = value.allow;
      this._deny = value.deny;
      this._insideDestinations = value.insideDestinations;
      this._insideSources = value.insideSources;
      this._outsideDestinations = value.outsideDestinations;
      this._outsideSources = value.outsideSources;
      this._advancedAction.internalValue = value.advancedAction;
      this._applications.internalValue = value.applications;
      this._destinationAwsVpcIds.internalValue = value.destinationAwsVpcIds;
      this._destinationIpPrefixSet.internalValue = value.destinationIpPrefixSet;
      this._destinationLabelSelector.internalValue = value.destinationLabelSelector;
      this._destinationPrefixList.internalValue = value.destinationPrefixList;
      this._insertService.internalValue = value.insertService;
      this._labelMatcher.internalValue = value.labelMatcher;
      this._metadata.internalValue = value.metadata;
      this._protocolPortRange.internalValue = value.protocolPortRange;
      this._sourceAwsVpcIds.internalValue = value.sourceAwsVpcIds;
      this._sourceIpPrefixSet.internalValue = value.sourceIpPrefixSet;
      this._sourceLabelSelector.internalValue = value.sourceLabelSelector;
      this._sourcePrefixList.internalValue = value.sourcePrefixList;
    }
  }

  // all_destinations - computed: false, optional: true, required: false
  private _allDestinations?: boolean | cdktf.IResolvable; 
  public get allDestinations() {
    return this.getBooleanAttribute('all_destinations');
  }
  public set allDestinations(value: boolean | cdktf.IResolvable) {
    this._allDestinations = value;
  }
  public resetAllDestinations() {
    this._allDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allDestinationsInput() {
    return this._allDestinations;
  }

  // all_sli_vips - computed: false, optional: true, required: false
  private _allSliVips?: boolean | cdktf.IResolvable; 
  public get allSliVips() {
    return this.getBooleanAttribute('all_sli_vips');
  }
  public set allSliVips(value: boolean | cdktf.IResolvable) {
    this._allSliVips = value;
  }
  public resetAllSliVips() {
    this._allSliVips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allSliVipsInput() {
    return this._allSliVips;
  }

  // all_slo_vips - computed: false, optional: true, required: false
  private _allSloVips?: boolean | cdktf.IResolvable; 
  public get allSloVips() {
    return this.getBooleanAttribute('all_slo_vips');
  }
  public set allSloVips(value: boolean | cdktf.IResolvable) {
    this._allSloVips = value;
  }
  public resetAllSloVips() {
    this._allSloVips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allSloVipsInput() {
    return this._allSloVips;
  }

  // all_sources - computed: false, optional: true, required: false
  private _allSources?: boolean | cdktf.IResolvable; 
  public get allSources() {
    return this.getBooleanAttribute('all_sources');
  }
  public set allSources(value: boolean | cdktf.IResolvable) {
    this._allSources = value;
  }
  public resetAllSources() {
    this._allSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allSourcesInput() {
    return this._allSources;
  }

  // all_tcp_traffic - computed: false, optional: true, required: false
  private _allTcpTraffic?: boolean | cdktf.IResolvable; 
  public get allTcpTraffic() {
    return this.getBooleanAttribute('all_tcp_traffic');
  }
  public set allTcpTraffic(value: boolean | cdktf.IResolvable) {
    this._allTcpTraffic = value;
  }
  public resetAllTcpTraffic() {
    this._allTcpTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allTcpTrafficInput() {
    return this._allTcpTraffic;
  }

  // all_traffic - computed: false, optional: true, required: false
  private _allTraffic?: boolean | cdktf.IResolvable; 
  public get allTraffic() {
    return this.getBooleanAttribute('all_traffic');
  }
  public set allTraffic(value: boolean | cdktf.IResolvable) {
    this._allTraffic = value;
  }
  public resetAllTraffic() {
    this._allTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allTrafficInput() {
    return this._allTraffic;
  }

  // all_udp_traffic - computed: false, optional: true, required: false
  private _allUdpTraffic?: boolean | cdktf.IResolvable; 
  public get allUdpTraffic() {
    return this.getBooleanAttribute('all_udp_traffic');
  }
  public set allUdpTraffic(value: boolean | cdktf.IResolvable) {
    this._allUdpTraffic = value;
  }
  public resetAllUdpTraffic() {
    this._allUdpTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allUdpTrafficInput() {
    return this._allUdpTraffic;
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: boolean | cdktf.IResolvable; 
  public get deny() {
    return this.getBooleanAttribute('deny');
  }
  public set deny(value: boolean | cdktf.IResolvable) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny;
  }

  // inside_destinations - computed: false, optional: true, required: false
  private _insideDestinations?: boolean | cdktf.IResolvable; 
  public get insideDestinations() {
    return this.getBooleanAttribute('inside_destinations');
  }
  public set insideDestinations(value: boolean | cdktf.IResolvable) {
    this._insideDestinations = value;
  }
  public resetInsideDestinations() {
    this._insideDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideDestinationsInput() {
    return this._insideDestinations;
  }

  // inside_sources - computed: false, optional: true, required: false
  private _insideSources?: boolean | cdktf.IResolvable; 
  public get insideSources() {
    return this.getBooleanAttribute('inside_sources');
  }
  public set insideSources(value: boolean | cdktf.IResolvable) {
    this._insideSources = value;
  }
  public resetInsideSources() {
    this._insideSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideSourcesInput() {
    return this._insideSources;
  }

  // outside_destinations - computed: false, optional: true, required: false
  private _outsideDestinations?: boolean | cdktf.IResolvable; 
  public get outsideDestinations() {
    return this.getBooleanAttribute('outside_destinations');
  }
  public set outsideDestinations(value: boolean | cdktf.IResolvable) {
    this._outsideDestinations = value;
  }
  public resetOutsideDestinations() {
    this._outsideDestinations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideDestinationsInput() {
    return this._outsideDestinations;
  }

  // outside_sources - computed: false, optional: true, required: false
  private _outsideSources?: boolean | cdktf.IResolvable; 
  public get outsideSources() {
    return this.getBooleanAttribute('outside_sources');
  }
  public set outsideSources(value: boolean | cdktf.IResolvable) {
    this._outsideSources = value;
  }
  public resetOutsideSources() {
    this._outsideSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideSourcesInput() {
    return this._outsideSources;
  }

  // advanced_action - computed: false, optional: true, required: false
  private _advancedAction = new EnhancedFirewallPolicyRuleListRulesAdvancedActionOutputReference(this, "advanced_action");
  public get advancedAction() {
    return this._advancedAction;
  }
  public putAdvancedAction(value: EnhancedFirewallPolicyRuleListRulesAdvancedAction) {
    this._advancedAction.internalValue = value;
  }
  public resetAdvancedAction() {
    this._advancedAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedActionInput() {
    return this._advancedAction.internalValue;
  }

  // applications - computed: false, optional: true, required: false
  private _applications = new EnhancedFirewallPolicyRuleListRulesApplicationsOutputReference(this, "applications");
  public get applications() {
    return this._applications;
  }
  public putApplications(value: EnhancedFirewallPolicyRuleListRulesApplications) {
    this._applications.internalValue = value;
  }
  public resetApplications() {
    this._applications.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications.internalValue;
  }

  // destination_aws_vpc_ids - computed: false, optional: true, required: false
  private _destinationAwsVpcIds = new EnhancedFirewallPolicyRuleListRulesDestinationAwsVpcIdsOutputReference(this, "destination_aws_vpc_ids");
  public get destinationAwsVpcIds() {
    return this._destinationAwsVpcIds;
  }
  public putDestinationAwsVpcIds(value: EnhancedFirewallPolicyRuleListRulesDestinationAwsVpcIds) {
    this._destinationAwsVpcIds.internalValue = value;
  }
  public resetDestinationAwsVpcIds() {
    this._destinationAwsVpcIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationAwsVpcIdsInput() {
    return this._destinationAwsVpcIds.internalValue;
  }

  // destination_ip_prefix_set - computed: false, optional: true, required: false
  private _destinationIpPrefixSet = new EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSetOutputReference(this, "destination_ip_prefix_set");
  public get destinationIpPrefixSet() {
    return this._destinationIpPrefixSet;
  }
  public putDestinationIpPrefixSet(value: EnhancedFirewallPolicyRuleListRulesDestinationIpPrefixSet) {
    this._destinationIpPrefixSet.internalValue = value;
  }
  public resetDestinationIpPrefixSet() {
    this._destinationIpPrefixSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationIpPrefixSetInput() {
    return this._destinationIpPrefixSet.internalValue;
  }

  // destination_label_selector - computed: false, optional: true, required: false
  private _destinationLabelSelector = new EnhancedFirewallPolicyRuleListRulesDestinationLabelSelectorOutputReference(this, "destination_label_selector");
  public get destinationLabelSelector() {
    return this._destinationLabelSelector;
  }
  public putDestinationLabelSelector(value: EnhancedFirewallPolicyRuleListRulesDestinationLabelSelector) {
    this._destinationLabelSelector.internalValue = value;
  }
  public resetDestinationLabelSelector() {
    this._destinationLabelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationLabelSelectorInput() {
    return this._destinationLabelSelector.internalValue;
  }

  // destination_prefix_list - computed: false, optional: true, required: false
  private _destinationPrefixList = new EnhancedFirewallPolicyRuleListRulesDestinationPrefixListStructOutputReference(this, "destination_prefix_list");
  public get destinationPrefixList() {
    return this._destinationPrefixList;
  }
  public putDestinationPrefixList(value: EnhancedFirewallPolicyRuleListRulesDestinationPrefixListStruct) {
    this._destinationPrefixList.internalValue = value;
  }
  public resetDestinationPrefixList() {
    this._destinationPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPrefixListInput() {
    return this._destinationPrefixList.internalValue;
  }

  // insert_service - computed: false, optional: true, required: false
  private _insertService = new EnhancedFirewallPolicyRuleListRulesInsertServiceOutputReference(this, "insert_service");
  public get insertService() {
    return this._insertService;
  }
  public putInsertService(value: EnhancedFirewallPolicyRuleListRulesInsertService) {
    this._insertService.internalValue = value;
  }
  public resetInsertService() {
    this._insertService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertServiceInput() {
    return this._insertService.internalValue;
  }

  // label_matcher - computed: false, optional: true, required: false
  private _labelMatcher = new EnhancedFirewallPolicyRuleListRulesLabelMatcherOutputReference(this, "label_matcher");
  public get labelMatcher() {
    return this._labelMatcher;
  }
  public putLabelMatcher(value: EnhancedFirewallPolicyRuleListRulesLabelMatcher) {
    this._labelMatcher.internalValue = value;
  }
  public resetLabelMatcher() {
    this._labelMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelMatcherInput() {
    return this._labelMatcher.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new EnhancedFirewallPolicyRuleListRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: EnhancedFirewallPolicyRuleListRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // protocol_port_range - computed: false, optional: true, required: false
  private _protocolPortRange = new EnhancedFirewallPolicyRuleListRulesProtocolPortRangeOutputReference(this, "protocol_port_range");
  public get protocolPortRange() {
    return this._protocolPortRange;
  }
  public putProtocolPortRange(value: EnhancedFirewallPolicyRuleListRulesProtocolPortRange) {
    this._protocolPortRange.internalValue = value;
  }
  public resetProtocolPortRange() {
    this._protocolPortRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolPortRangeInput() {
    return this._protocolPortRange.internalValue;
  }

  // source_aws_vpc_ids - computed: false, optional: true, required: false
  private _sourceAwsVpcIds = new EnhancedFirewallPolicyRuleListRulesSourceAwsVpcIdsOutputReference(this, "source_aws_vpc_ids");
  public get sourceAwsVpcIds() {
    return this._sourceAwsVpcIds;
  }
  public putSourceAwsVpcIds(value: EnhancedFirewallPolicyRuleListRulesSourceAwsVpcIds) {
    this._sourceAwsVpcIds.internalValue = value;
  }
  public resetSourceAwsVpcIds() {
    this._sourceAwsVpcIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAwsVpcIdsInput() {
    return this._sourceAwsVpcIds.internalValue;
  }

  // source_ip_prefix_set - computed: false, optional: true, required: false
  private _sourceIpPrefixSet = new EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSetOutputReference(this, "source_ip_prefix_set");
  public get sourceIpPrefixSet() {
    return this._sourceIpPrefixSet;
  }
  public putSourceIpPrefixSet(value: EnhancedFirewallPolicyRuleListRulesSourceIpPrefixSet) {
    this._sourceIpPrefixSet.internalValue = value;
  }
  public resetSourceIpPrefixSet() {
    this._sourceIpPrefixSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpPrefixSetInput() {
    return this._sourceIpPrefixSet.internalValue;
  }

  // source_label_selector - computed: false, optional: true, required: false
  private _sourceLabelSelector = new EnhancedFirewallPolicyRuleListRulesSourceLabelSelectorOutputReference(this, "source_label_selector");
  public get sourceLabelSelector() {
    return this._sourceLabelSelector;
  }
  public putSourceLabelSelector(value: EnhancedFirewallPolicyRuleListRulesSourceLabelSelector) {
    this._sourceLabelSelector.internalValue = value;
  }
  public resetSourceLabelSelector() {
    this._sourceLabelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLabelSelectorInput() {
    return this._sourceLabelSelector.internalValue;
  }

  // source_prefix_list - computed: false, optional: true, required: false
  private _sourcePrefixList = new EnhancedFirewallPolicyRuleListRulesSourcePrefixListStructOutputReference(this, "source_prefix_list");
  public get sourcePrefixList() {
    return this._sourcePrefixList;
  }
  public putSourcePrefixList(value: EnhancedFirewallPolicyRuleListRulesSourcePrefixListStruct) {
    this._sourcePrefixList.internalValue = value;
  }
  public resetSourcePrefixList() {
    this._sourcePrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePrefixListInput() {
    return this._sourcePrefixList.internalValue;
  }
}

export class EnhancedFirewallPolicyRuleListRulesList extends cdktf.ComplexList {
  public internalValue? : EnhancedFirewallPolicyRuleListRules[] | cdktf.IResolvable

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
  public get(index: number): EnhancedFirewallPolicyRuleListRulesOutputReference {
    return new EnhancedFirewallPolicyRuleListRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnhancedFirewallPolicyRuleListStruct {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#rules EnhancedFirewallPolicy#rules}
  */
  readonly rules: EnhancedFirewallPolicyRuleListRules[] | cdktf.IResolvable;
}

export function enhancedFirewallPolicyRuleListStructToTerraform(struct?: EnhancedFirewallPolicyRuleListStructOutputReference | EnhancedFirewallPolicyRuleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(enhancedFirewallPolicyRuleListRulesToTerraform, true)(struct!.rules),
  }
}


export function enhancedFirewallPolicyRuleListStructToHclTerraform(struct?: EnhancedFirewallPolicyRuleListStructOutputReference | EnhancedFirewallPolicyRuleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(enhancedFirewallPolicyRuleListRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "EnhancedFirewallPolicyRuleListRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicyRuleListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedFirewallPolicyRuleListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicyRuleListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new EnhancedFirewallPolicyRuleListRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: EnhancedFirewallPolicyRuleListRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface EnhancedFirewallPolicySegmentPolicyDstSegmentsSegments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#name EnhancedFirewallPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#namespace EnhancedFirewallPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#tenant EnhancedFirewallPolicy#tenant}
  */
  readonly tenant?: string;
}

export function enhancedFirewallPolicySegmentPolicyDstSegmentsSegmentsToTerraform(struct?: EnhancedFirewallPolicySegmentPolicyDstSegmentsSegments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function enhancedFirewallPolicySegmentPolicyDstSegmentsSegmentsToHclTerraform(struct?: EnhancedFirewallPolicySegmentPolicyDstSegmentsSegments | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicySegmentPolicyDstSegmentsSegmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnhancedFirewallPolicySegmentPolicyDstSegmentsSegments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicySegmentPolicyDstSegmentsSegments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class EnhancedFirewallPolicySegmentPolicyDstSegmentsSegmentsList extends cdktf.ComplexList {
  public internalValue? : EnhancedFirewallPolicySegmentPolicyDstSegmentsSegments[] | cdktf.IResolvable

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
  public get(index: number): EnhancedFirewallPolicySegmentPolicyDstSegmentsSegmentsOutputReference {
    return new EnhancedFirewallPolicySegmentPolicyDstSegmentsSegmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnhancedFirewallPolicySegmentPolicyDstSegments {
  /**
  * segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#segments EnhancedFirewallPolicy#segments}
  */
  readonly segments: EnhancedFirewallPolicySegmentPolicyDstSegmentsSegments[] | cdktf.IResolvable;
}

export function enhancedFirewallPolicySegmentPolicyDstSegmentsToTerraform(struct?: EnhancedFirewallPolicySegmentPolicyDstSegmentsOutputReference | EnhancedFirewallPolicySegmentPolicyDstSegments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    segments: cdktf.listMapper(enhancedFirewallPolicySegmentPolicyDstSegmentsSegmentsToTerraform, true)(struct!.segments),
  }
}


export function enhancedFirewallPolicySegmentPolicyDstSegmentsToHclTerraform(struct?: EnhancedFirewallPolicySegmentPolicyDstSegmentsOutputReference | EnhancedFirewallPolicySegmentPolicyDstSegments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    segments: {
      value: cdktf.listMapperHcl(enhancedFirewallPolicySegmentPolicyDstSegmentsSegmentsToHclTerraform, true)(struct!.segments),
      isBlock: true,
      type: "list",
      storageClassType: "EnhancedFirewallPolicySegmentPolicyDstSegmentsSegmentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicySegmentPolicyDstSegmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedFirewallPolicySegmentPolicyDstSegments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segments = this._segments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicySegmentPolicyDstSegments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._segments.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._segments.internalValue = value.segments;
    }
  }

  // segments - computed: false, optional: false, required: true
  private _segments = new EnhancedFirewallPolicySegmentPolicyDstSegmentsSegmentsList(this, "segments", false);
  public get segments() {
    return this._segments;
  }
  public putSegments(value: EnhancedFirewallPolicySegmentPolicyDstSegmentsSegments[] | cdktf.IResolvable) {
    this._segments.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentsInput() {
    return this._segments.internalValue;
  }
}
export interface EnhancedFirewallPolicySegmentPolicySrcSegmentsSegments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#name EnhancedFirewallPolicy#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#namespace EnhancedFirewallPolicy#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#tenant EnhancedFirewallPolicy#tenant}
  */
  readonly tenant?: string;
}

export function enhancedFirewallPolicySegmentPolicySrcSegmentsSegmentsToTerraform(struct?: EnhancedFirewallPolicySegmentPolicySrcSegmentsSegments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function enhancedFirewallPolicySegmentPolicySrcSegmentsSegmentsToHclTerraform(struct?: EnhancedFirewallPolicySegmentPolicySrcSegmentsSegments | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicySegmentPolicySrcSegmentsSegmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EnhancedFirewallPolicySegmentPolicySrcSegmentsSegments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicySegmentPolicySrcSegmentsSegments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class EnhancedFirewallPolicySegmentPolicySrcSegmentsSegmentsList extends cdktf.ComplexList {
  public internalValue? : EnhancedFirewallPolicySegmentPolicySrcSegmentsSegments[] | cdktf.IResolvable

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
  public get(index: number): EnhancedFirewallPolicySegmentPolicySrcSegmentsSegmentsOutputReference {
    return new EnhancedFirewallPolicySegmentPolicySrcSegmentsSegmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EnhancedFirewallPolicySegmentPolicySrcSegments {
  /**
  * segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#segments EnhancedFirewallPolicy#segments}
  */
  readonly segments: EnhancedFirewallPolicySegmentPolicySrcSegmentsSegments[] | cdktf.IResolvable;
}

export function enhancedFirewallPolicySegmentPolicySrcSegmentsToTerraform(struct?: EnhancedFirewallPolicySegmentPolicySrcSegmentsOutputReference | EnhancedFirewallPolicySegmentPolicySrcSegments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    segments: cdktf.listMapper(enhancedFirewallPolicySegmentPolicySrcSegmentsSegmentsToTerraform, true)(struct!.segments),
  }
}


export function enhancedFirewallPolicySegmentPolicySrcSegmentsToHclTerraform(struct?: EnhancedFirewallPolicySegmentPolicySrcSegmentsOutputReference | EnhancedFirewallPolicySegmentPolicySrcSegments): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    segments: {
      value: cdktf.listMapperHcl(enhancedFirewallPolicySegmentPolicySrcSegmentsSegmentsToHclTerraform, true)(struct!.segments),
      isBlock: true,
      type: "list",
      storageClassType: "EnhancedFirewallPolicySegmentPolicySrcSegmentsSegmentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicySegmentPolicySrcSegmentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedFirewallPolicySegmentPolicySrcSegments | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._segments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segments = this._segments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicySegmentPolicySrcSegments | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._segments.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._segments.internalValue = value.segments;
    }
  }

  // segments - computed: false, optional: false, required: true
  private _segments = new EnhancedFirewallPolicySegmentPolicySrcSegmentsSegmentsList(this, "segments", false);
  public get segments() {
    return this._segments;
  }
  public putSegments(value: EnhancedFirewallPolicySegmentPolicySrcSegmentsSegments[] | cdktf.IResolvable) {
    this._segments.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentsInput() {
    return this._segments.internalValue;
  }
}
export interface EnhancedFirewallPolicySegmentPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#dst_any EnhancedFirewallPolicy#dst_any}
  */
  readonly dstAny?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#intra_segment EnhancedFirewallPolicy#intra_segment}
  */
  readonly intraSegment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#src_any EnhancedFirewallPolicy#src_any}
  */
  readonly srcAny?: boolean | cdktf.IResolvable;
  /**
  * dst_segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#dst_segments EnhancedFirewallPolicy#dst_segments}
  */
  readonly dstSegments?: EnhancedFirewallPolicySegmentPolicyDstSegments;
  /**
  * src_segments block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#src_segments EnhancedFirewallPolicy#src_segments}
  */
  readonly srcSegments?: EnhancedFirewallPolicySegmentPolicySrcSegments;
}

export function enhancedFirewallPolicySegmentPolicyToTerraform(struct?: EnhancedFirewallPolicySegmentPolicyOutputReference | EnhancedFirewallPolicySegmentPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_any: cdktf.booleanToTerraform(struct!.dstAny),
    intra_segment: cdktf.booleanToTerraform(struct!.intraSegment),
    src_any: cdktf.booleanToTerraform(struct!.srcAny),
    dst_segments: enhancedFirewallPolicySegmentPolicyDstSegmentsToTerraform(struct!.dstSegments),
    src_segments: enhancedFirewallPolicySegmentPolicySrcSegmentsToTerraform(struct!.srcSegments),
  }
}


export function enhancedFirewallPolicySegmentPolicyToHclTerraform(struct?: EnhancedFirewallPolicySegmentPolicyOutputReference | EnhancedFirewallPolicySegmentPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_any: {
      value: cdktf.booleanToHclTerraform(struct!.dstAny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    intra_segment: {
      value: cdktf.booleanToHclTerraform(struct!.intraSegment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    src_any: {
      value: cdktf.booleanToHclTerraform(struct!.srcAny),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dst_segments: {
      value: enhancedFirewallPolicySegmentPolicyDstSegmentsToHclTerraform(struct!.dstSegments),
      isBlock: true,
      type: "list",
      storageClassType: "EnhancedFirewallPolicySegmentPolicyDstSegmentsList",
    },
    src_segments: {
      value: enhancedFirewallPolicySegmentPolicySrcSegmentsToHclTerraform(struct!.srcSegments),
      isBlock: true,
      type: "list",
      storageClassType: "EnhancedFirewallPolicySegmentPolicySrcSegmentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnhancedFirewallPolicySegmentPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EnhancedFirewallPolicySegmentPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAny = this._dstAny;
    }
    if (this._intraSegment !== undefined) {
      hasAnyValues = true;
      internalValueResult.intraSegment = this._intraSegment;
    }
    if (this._srcAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAny = this._srcAny;
    }
    if (this._dstSegments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSegments = this._dstSegments?.internalValue;
    }
    if (this._srcSegments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSegments = this._srcSegments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnhancedFirewallPolicySegmentPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstAny = undefined;
      this._intraSegment = undefined;
      this._srcAny = undefined;
      this._dstSegments.internalValue = undefined;
      this._srcSegments.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstAny = value.dstAny;
      this._intraSegment = value.intraSegment;
      this._srcAny = value.srcAny;
      this._dstSegments.internalValue = value.dstSegments;
      this._srcSegments.internalValue = value.srcSegments;
    }
  }

  // dst_any - computed: false, optional: true, required: false
  private _dstAny?: boolean | cdktf.IResolvable; 
  public get dstAny() {
    return this.getBooleanAttribute('dst_any');
  }
  public set dstAny(value: boolean | cdktf.IResolvable) {
    this._dstAny = value;
  }
  public resetDstAny() {
    this._dstAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAnyInput() {
    return this._dstAny;
  }

  // intra_segment - computed: false, optional: true, required: false
  private _intraSegment?: boolean | cdktf.IResolvable; 
  public get intraSegment() {
    return this.getBooleanAttribute('intra_segment');
  }
  public set intraSegment(value: boolean | cdktf.IResolvable) {
    this._intraSegment = value;
  }
  public resetIntraSegment() {
    this._intraSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intraSegmentInput() {
    return this._intraSegment;
  }

  // src_any - computed: false, optional: true, required: false
  private _srcAny?: boolean | cdktf.IResolvable; 
  public get srcAny() {
    return this.getBooleanAttribute('src_any');
  }
  public set srcAny(value: boolean | cdktf.IResolvable) {
    this._srcAny = value;
  }
  public resetSrcAny() {
    this._srcAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAnyInput() {
    return this._srcAny;
  }

  // dst_segments - computed: false, optional: true, required: false
  private _dstSegments = new EnhancedFirewallPolicySegmentPolicyDstSegmentsOutputReference(this, "dst_segments");
  public get dstSegments() {
    return this._dstSegments;
  }
  public putDstSegments(value: EnhancedFirewallPolicySegmentPolicyDstSegments) {
    this._dstSegments.internalValue = value;
  }
  public resetDstSegments() {
    this._dstSegments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSegmentsInput() {
    return this._dstSegments.internalValue;
  }

  // src_segments - computed: false, optional: true, required: false
  private _srcSegments = new EnhancedFirewallPolicySegmentPolicySrcSegmentsOutputReference(this, "src_segments");
  public get srcSegments() {
    return this._srcSegments;
  }
  public putSrcSegments(value: EnhancedFirewallPolicySegmentPolicySrcSegments) {
    this._srcSegments.internalValue = value;
  }
  public resetSrcSegments() {
    this._srcSegments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSegmentsInput() {
    return this._srcSegments.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy volterra_enhanced_firewall_policy}
*/
export class EnhancedFirewallPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_enhanced_firewall_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EnhancedFirewallPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EnhancedFirewallPolicy to import
  * @param importFromId The id of the existing EnhancedFirewallPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EnhancedFirewallPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_enhanced_firewall_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/enhanced_firewall_policy volterra_enhanced_firewall_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnhancedFirewallPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: EnhancedFirewallPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_enhanced_firewall_policy',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowAll = config.allowAll;
    this._annotations = config.annotations;
    this._denyAll = config.denyAll;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._allowedDestinations.internalValue = config.allowedDestinations;
    this._allowedSources.internalValue = config.allowedSources;
    this._deniedDestinations.internalValue = config.deniedDestinations;
    this._deniedSources.internalValue = config.deniedSources;
    this._ruleList.internalValue = config.ruleList;
    this._segmentPolicy.internalValue = config.segmentPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_all - computed: false, optional: true, required: false
  private _allowAll?: boolean | cdktf.IResolvable; 
  public get allowAll() {
    return this.getBooleanAttribute('allow_all');
  }
  public set allowAll(value: boolean | cdktf.IResolvable) {
    this._allowAll = value;
  }
  public resetAllowAll() {
    this._allowAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAllInput() {
    return this._allowAll;
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

  // deny_all - computed: false, optional: true, required: false
  private _denyAll?: boolean | cdktf.IResolvable; 
  public get denyAll() {
    return this.getBooleanAttribute('deny_all');
  }
  public set denyAll(value: boolean | cdktf.IResolvable) {
    this._denyAll = value;
  }
  public resetDenyAll() {
    this._denyAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyAllInput() {
    return this._denyAll;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // allowed_destinations - computed: false, optional: true, required: false
  private _allowedDestinations = new EnhancedFirewallPolicyAllowedDestinationsOutputReference(this, "allowed_destinations");
  public get allowedDestinations() {
    return this._allowedDestinations;
  }
  public putAllowedDestinations(value: EnhancedFirewallPolicyAllowedDestinations) {
    this._allowedDestinations.internalValue = value;
  }
  public resetAllowedDestinations() {
    this._allowedDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDestinationsInput() {
    return this._allowedDestinations.internalValue;
  }

  // allowed_sources - computed: false, optional: true, required: false
  private _allowedSources = new EnhancedFirewallPolicyAllowedSourcesOutputReference(this, "allowed_sources");
  public get allowedSources() {
    return this._allowedSources;
  }
  public putAllowedSources(value: EnhancedFirewallPolicyAllowedSources) {
    this._allowedSources.internalValue = value;
  }
  public resetAllowedSources() {
    this._allowedSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSourcesInput() {
    return this._allowedSources.internalValue;
  }

  // denied_destinations - computed: false, optional: true, required: false
  private _deniedDestinations = new EnhancedFirewallPolicyDeniedDestinationsOutputReference(this, "denied_destinations");
  public get deniedDestinations() {
    return this._deniedDestinations;
  }
  public putDeniedDestinations(value: EnhancedFirewallPolicyDeniedDestinations) {
    this._deniedDestinations.internalValue = value;
  }
  public resetDeniedDestinations() {
    this._deniedDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedDestinationsInput() {
    return this._deniedDestinations.internalValue;
  }

  // denied_sources - computed: false, optional: true, required: false
  private _deniedSources = new EnhancedFirewallPolicyDeniedSourcesOutputReference(this, "denied_sources");
  public get deniedSources() {
    return this._deniedSources;
  }
  public putDeniedSources(value: EnhancedFirewallPolicyDeniedSources) {
    this._deniedSources.internalValue = value;
  }
  public resetDeniedSources() {
    this._deniedSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedSourcesInput() {
    return this._deniedSources.internalValue;
  }

  // rule_list - computed: false, optional: true, required: false
  private _ruleList = new EnhancedFirewallPolicyRuleListStructOutputReference(this, "rule_list");
  public get ruleList() {
    return this._ruleList;
  }
  public putRuleList(value: EnhancedFirewallPolicyRuleListStruct) {
    this._ruleList.internalValue = value;
  }
  public resetRuleList() {
    this._ruleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleListInput() {
    return this._ruleList.internalValue;
  }

  // segment_policy - computed: false, optional: true, required: false
  private _segmentPolicy = new EnhancedFirewallPolicySegmentPolicyOutputReference(this, "segment_policy");
  public get segmentPolicy() {
    return this._segmentPolicy;
  }
  public putSegmentPolicy(value: EnhancedFirewallPolicySegmentPolicy) {
    this._segmentPolicy.internalValue = value;
  }
  public resetSegmentPolicy() {
    this._segmentPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentPolicyInput() {
    return this._segmentPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_all: cdktf.booleanToTerraform(this._allowAll),
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      deny_all: cdktf.booleanToTerraform(this._denyAll),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      allowed_destinations: enhancedFirewallPolicyAllowedDestinationsToTerraform(this._allowedDestinations.internalValue),
      allowed_sources: enhancedFirewallPolicyAllowedSourcesToTerraform(this._allowedSources.internalValue),
      denied_destinations: enhancedFirewallPolicyDeniedDestinationsToTerraform(this._deniedDestinations.internalValue),
      denied_sources: enhancedFirewallPolicyDeniedSourcesToTerraform(this._deniedSources.internalValue),
      rule_list: enhancedFirewallPolicyRuleListStructToTerraform(this._ruleList.internalValue),
      segment_policy: enhancedFirewallPolicySegmentPolicyToTerraform(this._segmentPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_all: {
        value: cdktf.booleanToHclTerraform(this._allowAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      deny_all: {
        value: cdktf.booleanToHclTerraform(this._denyAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_destinations: {
        value: enhancedFirewallPolicyAllowedDestinationsToHclTerraform(this._allowedDestinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnhancedFirewallPolicyAllowedDestinationsList",
      },
      allowed_sources: {
        value: enhancedFirewallPolicyAllowedSourcesToHclTerraform(this._allowedSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnhancedFirewallPolicyAllowedSourcesList",
      },
      denied_destinations: {
        value: enhancedFirewallPolicyDeniedDestinationsToHclTerraform(this._deniedDestinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnhancedFirewallPolicyDeniedDestinationsList",
      },
      denied_sources: {
        value: enhancedFirewallPolicyDeniedSourcesToHclTerraform(this._deniedSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnhancedFirewallPolicyDeniedSourcesList",
      },
      rule_list: {
        value: enhancedFirewallPolicyRuleListStructToHclTerraform(this._ruleList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnhancedFirewallPolicyRuleListStructList",
      },
      segment_policy: {
        value: enhancedFirewallPolicySegmentPolicyToHclTerraform(this._segmentPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EnhancedFirewallPolicySegmentPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
