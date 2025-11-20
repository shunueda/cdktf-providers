// https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafExclusionPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#annotations WafExclusionPolicy#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#description WafExclusionPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#disable WafExclusionPolicy#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#id WafExclusionPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#labels WafExclusionPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#name WafExclusionPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#namespace WafExclusionPolicy#namespace}
  */
  readonly namespace: string;
  /**
  * waf_exclusion_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#waf_exclusion_rules WafExclusionPolicy#waf_exclusion_rules}
  */
  readonly wafExclusionRules: WafExclusionPolicyWafExclusionRules[] | cdktf.IResolvable;
}
export interface WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#context WafExclusionPolicy#context}
  */
  readonly context: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#context_name WafExclusionPolicy#context_name}
  */
  readonly contextName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#exclude_attack_type WafExclusionPolicy#exclude_attack_type}
  */
  readonly excludeAttackType: string;
}

export function wafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsToTerraform(struct?: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    context_name: cdktf.stringToTerraform(struct!.contextName),
    exclude_attack_type: cdktf.stringToTerraform(struct!.excludeAttackType),
  }
}


export function wafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsToHclTerraform(struct?: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_name: {
      value: cdktf.stringToHclTerraform(struct!.contextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_attack_type: {
      value: cdktf.stringToHclTerraform(struct!.excludeAttackType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._contextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextName = this._contextName;
    }
    if (this._excludeAttackType !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeAttackType = this._excludeAttackType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._contextName = undefined;
      this._excludeAttackType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._contextName = value.contextName;
      this._excludeAttackType = value.excludeAttackType;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // context_name - computed: false, optional: true, required: false
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  public resetContextName() {
    this._contextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // exclude_attack_type - computed: false, optional: false, required: true
  private _excludeAttackType?: string; 
  public get excludeAttackType() {
    return this.getStringAttribute('exclude_attack_type');
  }
  public set excludeAttackType(value: string) {
    this._excludeAttackType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAttackTypeInput() {
    return this._excludeAttackType;
  }
}

export class WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsList extends cdktf.ComplexList {
  public internalValue? : WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts[] | cdktf.IResolvable

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
  public get(index: number): WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsOutputReference {
    return new WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#bot_name WafExclusionPolicy#bot_name}
  */
  readonly botName: string;
}

export function wafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsToTerraform(struct?: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bot_name: cdktf.stringToTerraform(struct!.botName),
  }
}


export function wafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsToHclTerraform(struct?: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bot_name: {
      value: cdktf.stringToHclTerraform(struct!.botName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._botName !== undefined) {
      hasAnyValues = true;
      internalValueResult.botName = this._botName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._botName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._botName = value.botName;
    }
  }

  // bot_name - computed: false, optional: false, required: true
  private _botName?: string; 
  public get botName() {
    return this.getStringAttribute('bot_name');
  }
  public set botName(value: string) {
    this._botName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botNameInput() {
    return this._botName;
  }
}

export class WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsList extends cdktf.ComplexList {
  public internalValue? : WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts[] | cdktf.IResolvable

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
  public get(index: number): WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsOutputReference {
    return new WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#context WafExclusionPolicy#context}
  */
  readonly context: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#context_name WafExclusionPolicy#context_name}
  */
  readonly contextName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#signature_id WafExclusionPolicy#signature_id}
  */
  readonly signatureId: number;
}

export function wafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsToTerraform(struct?: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    context_name: cdktf.stringToTerraform(struct!.contextName),
    signature_id: cdktf.numberToTerraform(struct!.signatureId),
  }
}


export function wafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsToHclTerraform(struct?: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_name: {
      value: cdktf.stringToHclTerraform(struct!.contextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_id: {
      value: cdktf.numberToHclTerraform(struct!.signatureId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._contextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextName = this._contextName;
    }
    if (this._signatureId !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureId = this._signatureId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._contextName = undefined;
      this._signatureId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._contextName = value.contextName;
      this._signatureId = value.signatureId;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // context_name - computed: false, optional: true, required: false
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  public resetContextName() {
    this._contextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // signature_id - computed: false, optional: false, required: true
  private _signatureId?: number; 
  public get signatureId() {
    return this.getNumberAttribute('signature_id');
  }
  public set signatureId(value: number) {
    this._signatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureIdInput() {
    return this._signatureId;
  }
}

export class WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsList extends cdktf.ComplexList {
  public internalValue? : WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts[] | cdktf.IResolvable

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
  public get(index: number): WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsOutputReference {
    return new WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#context WafExclusionPolicy#context}
  */
  readonly context: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#context_name WafExclusionPolicy#context_name}
  */
  readonly contextName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#exclude_violation WafExclusionPolicy#exclude_violation}
  */
  readonly excludeViolation: string;
}

export function wafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsToTerraform(struct?: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    context_name: cdktf.stringToTerraform(struct!.contextName),
    exclude_violation: cdktf.stringToTerraform(struct!.excludeViolation),
  }
}


export function wafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsToHclTerraform(struct?: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_name: {
      value: cdktf.stringToHclTerraform(struct!.contextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_violation: {
      value: cdktf.stringToHclTerraform(struct!.excludeViolation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._contextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextName = this._contextName;
    }
    if (this._excludeViolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeViolation = this._excludeViolation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._contextName = undefined;
      this._excludeViolation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._contextName = value.contextName;
      this._excludeViolation = value.excludeViolation;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // context_name - computed: false, optional: true, required: false
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  public resetContextName() {
    this._contextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // exclude_violation - computed: false, optional: false, required: true
  private _excludeViolation?: string; 
  public get excludeViolation() {
    return this.getStringAttribute('exclude_violation');
  }
  public set excludeViolation(value: string) {
    this._excludeViolation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeViolationInput() {
    return this._excludeViolation;
  }
}

export class WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsList extends cdktf.ComplexList {
  public internalValue? : WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts[] | cdktf.IResolvable

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
  public get(index: number): WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsOutputReference {
    return new WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControl {
  /**
  * exclude_attack_type_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#exclude_attack_type_contexts WafExclusionPolicy#exclude_attack_type_contexts}
  */
  readonly excludeAttackTypeContexts?: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts[] | cdktf.IResolvable;
  /**
  * exclude_bot_name_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#exclude_bot_name_contexts WafExclusionPolicy#exclude_bot_name_contexts}
  */
  readonly excludeBotNameContexts?: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts[] | cdktf.IResolvable;
  /**
  * exclude_signature_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#exclude_signature_contexts WafExclusionPolicy#exclude_signature_contexts}
  */
  readonly excludeSignatureContexts?: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts[] | cdktf.IResolvable;
  /**
  * exclude_violation_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#exclude_violation_contexts WafExclusionPolicy#exclude_violation_contexts}
  */
  readonly excludeViolationContexts?: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts[] | cdktf.IResolvable;
}

export function wafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlToTerraform(struct?: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlOutputReference | WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_attack_type_contexts: cdktf.listMapper(wafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsToTerraform, true)(struct!.excludeAttackTypeContexts),
    exclude_bot_name_contexts: cdktf.listMapper(wafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsToTerraform, true)(struct!.excludeBotNameContexts),
    exclude_signature_contexts: cdktf.listMapper(wafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsToTerraform, true)(struct!.excludeSignatureContexts),
    exclude_violation_contexts: cdktf.listMapper(wafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsToTerraform, true)(struct!.excludeViolationContexts),
  }
}


export function wafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlToHclTerraform(struct?: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlOutputReference | WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_attack_type_contexts: {
      value: cdktf.listMapperHcl(wafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsToHclTerraform, true)(struct!.excludeAttackTypeContexts),
      isBlock: true,
      type: "list",
      storageClassType: "WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsList",
    },
    exclude_bot_name_contexts: {
      value: cdktf.listMapperHcl(wafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsToHclTerraform, true)(struct!.excludeBotNameContexts),
      isBlock: true,
      type: "list",
      storageClassType: "WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsList",
    },
    exclude_signature_contexts: {
      value: cdktf.listMapperHcl(wafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsToHclTerraform, true)(struct!.excludeSignatureContexts),
      isBlock: true,
      type: "list",
      storageClassType: "WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsList",
    },
    exclude_violation_contexts: {
      value: cdktf.listMapperHcl(wafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsToHclTerraform, true)(struct!.excludeViolationContexts),
      isBlock: true,
      type: "list",
      storageClassType: "WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeAttackTypeContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeAttackTypeContexts = this._excludeAttackTypeContexts?.internalValue;
    }
    if (this._excludeBotNameContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeBotNameContexts = this._excludeBotNameContexts?.internalValue;
    }
    if (this._excludeSignatureContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeSignatureContexts = this._excludeSignatureContexts?.internalValue;
    }
    if (this._excludeViolationContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeViolationContexts = this._excludeViolationContexts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeAttackTypeContexts.internalValue = undefined;
      this._excludeBotNameContexts.internalValue = undefined;
      this._excludeSignatureContexts.internalValue = undefined;
      this._excludeViolationContexts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeAttackTypeContexts.internalValue = value.excludeAttackTypeContexts;
      this._excludeBotNameContexts.internalValue = value.excludeBotNameContexts;
      this._excludeSignatureContexts.internalValue = value.excludeSignatureContexts;
      this._excludeViolationContexts.internalValue = value.excludeViolationContexts;
    }
  }

  // exclude_attack_type_contexts - computed: false, optional: true, required: false
  private _excludeAttackTypeContexts = new WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsList(this, "exclude_attack_type_contexts", false);
  public get excludeAttackTypeContexts() {
    return this._excludeAttackTypeContexts;
  }
  public putExcludeAttackTypeContexts(value: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts[] | cdktf.IResolvable) {
    this._excludeAttackTypeContexts.internalValue = value;
  }
  public resetExcludeAttackTypeContexts() {
    this._excludeAttackTypeContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAttackTypeContextsInput() {
    return this._excludeAttackTypeContexts.internalValue;
  }

  // exclude_bot_name_contexts - computed: false, optional: true, required: false
  private _excludeBotNameContexts = new WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsList(this, "exclude_bot_name_contexts", false);
  public get excludeBotNameContexts() {
    return this._excludeBotNameContexts;
  }
  public putExcludeBotNameContexts(value: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts[] | cdktf.IResolvable) {
    this._excludeBotNameContexts.internalValue = value;
  }
  public resetExcludeBotNameContexts() {
    this._excludeBotNameContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeBotNameContextsInput() {
    return this._excludeBotNameContexts.internalValue;
  }

  // exclude_signature_contexts - computed: false, optional: true, required: false
  private _excludeSignatureContexts = new WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsList(this, "exclude_signature_contexts", false);
  public get excludeSignatureContexts() {
    return this._excludeSignatureContexts;
  }
  public putExcludeSignatureContexts(value: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts[] | cdktf.IResolvable) {
    this._excludeSignatureContexts.internalValue = value;
  }
  public resetExcludeSignatureContexts() {
    this._excludeSignatureContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeSignatureContextsInput() {
    return this._excludeSignatureContexts.internalValue;
  }

  // exclude_violation_contexts - computed: false, optional: true, required: false
  private _excludeViolationContexts = new WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsList(this, "exclude_violation_contexts", false);
  public get excludeViolationContexts() {
    return this._excludeViolationContexts;
  }
  public putExcludeViolationContexts(value: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts[] | cdktf.IResolvable) {
    this._excludeViolationContexts.internalValue = value;
  }
  public resetExcludeViolationContexts() {
    this._excludeViolationContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeViolationContextsInput() {
    return this._excludeViolationContexts.internalValue;
  }
}
export interface WafExclusionPolicyWafExclusionRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#description WafExclusionPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#disable WafExclusionPolicy#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#name WafExclusionPolicy#name}
  */
  readonly name: string;
}

export function wafExclusionPolicyWafExclusionRulesMetadataToTerraform(struct?: WafExclusionPolicyWafExclusionRulesMetadataOutputReference | WafExclusionPolicyWafExclusionRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    disable: cdktf.booleanToTerraform(struct!.disable),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function wafExclusionPolicyWafExclusionRulesMetadataToHclTerraform(struct?: WafExclusionPolicyWafExclusionRulesMetadataOutputReference | WafExclusionPolicyWafExclusionRulesMetadata): any {
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
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class WafExclusionPolicyWafExclusionRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WafExclusionPolicyWafExclusionRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafExclusionPolicyWafExclusionRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._disable = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._disable = value.disable;
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
export interface WafExclusionPolicyWafExclusionRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#any_domain WafExclusionPolicy#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#any_path WafExclusionPolicy#any_path}
  */
  readonly anyPath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#exact_value WafExclusionPolicy#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#expiration_timestamp WafExclusionPolicy#expiration_timestamp}
  */
  readonly expirationTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#methods WafExclusionPolicy#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#path_prefix WafExclusionPolicy#path_prefix}
  */
  readonly pathPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#path_regex WafExclusionPolicy#path_regex}
  */
  readonly pathRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#suffix_value WafExclusionPolicy#suffix_value}
  */
  readonly suffixValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#waf_skip_processing WafExclusionPolicy#waf_skip_processing}
  */
  readonly wafSkipProcessing?: boolean | cdktf.IResolvable;
  /**
  * app_firewall_detection_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#app_firewall_detection_control WafExclusionPolicy#app_firewall_detection_control}
  */
  readonly appFirewallDetectionControl?: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControl;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#metadata WafExclusionPolicy#metadata}
  */
  readonly metadata: WafExclusionPolicyWafExclusionRulesMetadata;
}

export function wafExclusionPolicyWafExclusionRulesToTerraform(struct?: WafExclusionPolicyWafExclusionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    any_path: cdktf.booleanToTerraform(struct!.anyPath),
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    expiration_timestamp: cdktf.stringToTerraform(struct!.expirationTimestamp),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path_prefix: cdktf.stringToTerraform(struct!.pathPrefix),
    path_regex: cdktf.stringToTerraform(struct!.pathRegex),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
    waf_skip_processing: cdktf.booleanToTerraform(struct!.wafSkipProcessing),
    app_firewall_detection_control: wafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlToTerraform(struct!.appFirewallDetectionControl),
    metadata: wafExclusionPolicyWafExclusionRulesMetadataToTerraform(struct!.metadata),
  }
}


export function wafExclusionPolicyWafExclusionRulesToHclTerraform(struct?: WafExclusionPolicyWafExclusionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_path: {
      value: cdktf.booleanToHclTerraform(struct!.anyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.expirationTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_regex: {
      value: cdktf.stringToHclTerraform(struct!.pathRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    waf_skip_processing: {
      value: cdktf.booleanToHclTerraform(struct!.wafSkipProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_firewall_detection_control: {
      value: wafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlToHclTerraform(struct!.appFirewallDetectionControl),
      isBlock: true,
      type: "list",
      storageClassType: "WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlList",
    },
    metadata: {
      value: wafExclusionPolicyWafExclusionRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "WafExclusionPolicyWafExclusionRulesMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafExclusionPolicyWafExclusionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WafExclusionPolicyWafExclusionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._anyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyPath = this._anyPath;
    }
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._expirationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTimestamp = this._expirationTimestamp;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._pathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefix = this._pathPrefix;
    }
    if (this._pathRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRegex = this._pathRegex;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    if (this._wafSkipProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafSkipProcessing = this._wafSkipProcessing;
    }
    if (this._appFirewallDetectionControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appFirewallDetectionControl = this._appFirewallDetectionControl?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafExclusionPolicyWafExclusionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._anyPath = undefined;
      this._exactValue = undefined;
      this._expirationTimestamp = undefined;
      this._methods = undefined;
      this._pathPrefix = undefined;
      this._pathRegex = undefined;
      this._suffixValue = undefined;
      this._wafSkipProcessing = undefined;
      this._appFirewallDetectionControl.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._anyPath = value.anyPath;
      this._exactValue = value.exactValue;
      this._expirationTimestamp = value.expirationTimestamp;
      this._methods = value.methods;
      this._pathPrefix = value.pathPrefix;
      this._pathRegex = value.pathRegex;
      this._suffixValue = value.suffixValue;
      this._wafSkipProcessing = value.wafSkipProcessing;
      this._appFirewallDetectionControl.internalValue = value.appFirewallDetectionControl;
      this._metadata.internalValue = value.metadata;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // any_path - computed: false, optional: true, required: false
  private _anyPath?: boolean | cdktf.IResolvable; 
  public get anyPath() {
    return this.getBooleanAttribute('any_path');
  }
  public set anyPath(value: boolean | cdktf.IResolvable) {
    this._anyPath = value;
  }
  public resetAnyPath() {
    this._anyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyPathInput() {
    return this._anyPath;
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // expiration_timestamp - computed: false, optional: true, required: false
  private _expirationTimestamp?: string; 
  public get expirationTimestamp() {
    return this.getStringAttribute('expiration_timestamp');
  }
  public set expirationTimestamp(value: string) {
    this._expirationTimestamp = value;
  }
  public resetExpirationTimestamp() {
    this._expirationTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimestampInput() {
    return this._expirationTimestamp;
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // path_prefix - computed: false, optional: true, required: false
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  public resetPathPrefix() {
    this._pathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
  }

  // path_regex - computed: false, optional: true, required: false
  private _pathRegex?: string; 
  public get pathRegex() {
    return this.getStringAttribute('path_regex');
  }
  public set pathRegex(value: string) {
    this._pathRegex = value;
  }
  public resetPathRegex() {
    this._pathRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRegexInput() {
    return this._pathRegex;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }

  // waf_skip_processing - computed: false, optional: true, required: false
  private _wafSkipProcessing?: boolean | cdktf.IResolvable; 
  public get wafSkipProcessing() {
    return this.getBooleanAttribute('waf_skip_processing');
  }
  public set wafSkipProcessing(value: boolean | cdktf.IResolvable) {
    this._wafSkipProcessing = value;
  }
  public resetWafSkipProcessing() {
    this._wafSkipProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafSkipProcessingInput() {
    return this._wafSkipProcessing;
  }

  // app_firewall_detection_control - computed: false, optional: true, required: false
  private _appFirewallDetectionControl = new WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControlOutputReference(this, "app_firewall_detection_control");
  public get appFirewallDetectionControl() {
    return this._appFirewallDetectionControl;
  }
  public putAppFirewallDetectionControl(value: WafExclusionPolicyWafExclusionRulesAppFirewallDetectionControl) {
    this._appFirewallDetectionControl.internalValue = value;
  }
  public resetAppFirewallDetectionControl() {
    this._appFirewallDetectionControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appFirewallDetectionControlInput() {
    return this._appFirewallDetectionControl.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new WafExclusionPolicyWafExclusionRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: WafExclusionPolicyWafExclusionRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class WafExclusionPolicyWafExclusionRulesList extends cdktf.ComplexList {
  public internalValue? : WafExclusionPolicyWafExclusionRules[] | cdktf.IResolvable

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
  public get(index: number): WafExclusionPolicyWafExclusionRulesOutputReference {
    return new WafExclusionPolicyWafExclusionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy volterra_waf_exclusion_policy}
*/
export class WafExclusionPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_waf_exclusion_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafExclusionPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafExclusionPolicy to import
  * @param importFromId The id of the existing WafExclusionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafExclusionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_waf_exclusion_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/waf_exclusion_policy volterra_waf_exclusion_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafExclusionPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: WafExclusionPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_waf_exclusion_policy',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.45',
        providerVersionConstraint: '0.11.45'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._wafExclusionRules.internalValue = config.wafExclusionRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // waf_exclusion_rules - computed: false, optional: false, required: true
  private _wafExclusionRules = new WafExclusionPolicyWafExclusionRulesList(this, "waf_exclusion_rules", false);
  public get wafExclusionRules() {
    return this._wafExclusionRules;
  }
  public putWafExclusionRules(value: WafExclusionPolicyWafExclusionRules[] | cdktf.IResolvable) {
    this._wafExclusionRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wafExclusionRulesInput() {
    return this._wafExclusionRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      waf_exclusion_rules: cdktf.listMapper(wafExclusionPolicyWafExclusionRulesToTerraform, true)(this._wafExclusionRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      waf_exclusion_rules: {
        value: cdktf.listMapperHcl(wafExclusionPolicyWafExclusionRulesToHclTerraform, true)(this._wafExclusionRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WafExclusionPolicyWafExclusionRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
