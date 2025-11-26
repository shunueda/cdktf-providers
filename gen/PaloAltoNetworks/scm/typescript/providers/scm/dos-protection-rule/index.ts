// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DosProtectionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action to take on rule match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#action DosProtectionRule#action}
  */
  readonly action?: DosProtectionRuleAction;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#description DosProtectionRule#description}
  */
  readonly description?: string;
  /**
  * List of destination addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#destination DosProtectionRule#destination}
  */
  readonly destination?: string[];
  /**
  * The device in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#device DosProtectionRule#device}
  */
  readonly device?: string;
  /**
  * Rule disabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#disabled DosProtectionRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The folder in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#folder DosProtectionRule#folder}
  */
  readonly folder?: string;
  /**
  * List of source zones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#from DosProtectionRule#from}
  */
  readonly from?: string[];
  /**
  * Log forwarding profile name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#log_setting DosProtectionRule#log_setting}
  */
  readonly logSetting?: string;
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#name DosProtectionRule#name}
  */
  readonly name: string;
  /**
  * Position relative to local device rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#position DosProtectionRule#position}
  */
  readonly position?: string;
  /**
  * Protection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#protection DosProtectionRule#protection}
  */
  readonly protection?: DosProtectionRuleProtection;
  /**
  * Schedule on which to enforce the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#schedule DosProtectionRule#schedule}
  */
  readonly schedule?: string;
  /**
  * List of services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#service DosProtectionRule#service}
  */
  readonly service?: string[];
  /**
  * The snippet in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#snippet DosProtectionRule#snippet}
  */
  readonly snippet?: string;
  /**
  * List of source addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#source DosProtectionRule#source}
  */
  readonly source?: string[];
  /**
  * List of source users and/or groups.  Reserved words include `any`, `pre-login`, `known-user`, and `unknown`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#source_user DosProtectionRule#source_user}
  */
  readonly sourceUser?: string[];
  /**
  * List of tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#tag DosProtectionRule#tag}
  */
  readonly tag?: string[];
  /**
  * List of destination zones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#to DosProtectionRule#to}
  */
  readonly to?: string[];
}
export interface DosProtectionRuleActionAllow {
}

export function dosProtectionRuleActionAllowToTerraform(struct?: DosProtectionRuleActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dosProtectionRuleActionAllowToHclTerraform(struct?: DosProtectionRuleActionAllow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DosProtectionRuleActionAllowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionRuleActionAllow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionRuleActionAllow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DosProtectionRuleActionDeny {
}

export function dosProtectionRuleActionDenyToTerraform(struct?: DosProtectionRuleActionDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dosProtectionRuleActionDenyToHclTerraform(struct?: DosProtectionRuleActionDeny | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DosProtectionRuleActionDenyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionRuleActionDeny | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionRuleActionDeny | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DosProtectionRuleActionProtect {
}

export function dosProtectionRuleActionProtectToTerraform(struct?: DosProtectionRuleActionProtect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dosProtectionRuleActionProtectToHclTerraform(struct?: DosProtectionRuleActionProtect | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DosProtectionRuleActionProtectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionRuleActionProtect | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionRuleActionProtect | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}
export interface DosProtectionRuleAction {
  /**
  * Allow
  * 
  * > ℹ️ **Note:** You must specify exactly one of `allow`, `deny`, and `protect`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#allow DosProtectionRule#allow}
  */
  readonly allow?: DosProtectionRuleActionAllow;
  /**
  * Deny
  * 
  * > ℹ️ **Note:** You must specify exactly one of `allow`, `deny`, and `protect`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#deny DosProtectionRule#deny}
  */
  readonly deny?: DosProtectionRuleActionDeny;
  /**
  * Protect
  * 
  * > ℹ️ **Note:** You must specify exactly one of `allow`, `deny`, and `protect`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#protect DosProtectionRule#protect}
  */
  readonly protect?: DosProtectionRuleActionProtect;
}

export function dosProtectionRuleActionToTerraform(struct?: DosProtectionRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: dosProtectionRuleActionAllowToTerraform(struct!.allow),
    deny: dosProtectionRuleActionDenyToTerraform(struct!.deny),
    protect: dosProtectionRuleActionProtectToTerraform(struct!.protect),
  }
}


export function dosProtectionRuleActionToHclTerraform(struct?: DosProtectionRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: dosProtectionRuleActionAllowToHclTerraform(struct!.allow),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionRuleActionAllow",
    },
    deny: {
      value: dosProtectionRuleActionDenyToHclTerraform(struct!.deny),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionRuleActionDeny",
    },
    protect: {
      value: dosProtectionRuleActionProtectToHclTerraform(struct!.protect),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionRuleActionProtect",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionRuleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionRuleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow?.internalValue;
    }
    if (this._deny?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deny = this._deny?.internalValue;
    }
    if (this._protect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.protect = this._protect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionRuleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allow.internalValue = undefined;
      this._deny.internalValue = undefined;
      this._protect.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allow.internalValue = value.allow;
      this._deny.internalValue = value.deny;
      this._protect.internalValue = value.protect;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow = new DosProtectionRuleActionAllowOutputReference(this, "allow");
  public get allow() {
    return this._allow;
  }
  public putAllow(value: DosProtectionRuleActionAllow) {
    this._allow.internalValue = value;
  }
  public resetAllow() {
    this._allow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow.internalValue;
  }

  // deny - computed: false, optional: true, required: false
  private _deny = new DosProtectionRuleActionDenyOutputReference(this, "deny");
  public get deny() {
    return this._deny;
  }
  public putDeny(value: DosProtectionRuleActionDeny) {
    this._deny.internalValue = value;
  }
  public resetDeny() {
    this._deny.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny.internalValue;
  }

  // protect - computed: false, optional: true, required: false
  private _protect = new DosProtectionRuleActionProtectOutputReference(this, "protect");
  public get protect() {
    return this._protect;
  }
  public putProtect(value: DosProtectionRuleActionProtect) {
    this._protect.internalValue = value;
  }
  public resetProtect() {
    this._protect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectInput() {
    return this._protect.internalValue;
  }
}
export interface DosProtectionRuleProtectionAggregate {
  /**
  * Aggregate DoS protection profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#profile DosProtectionRule#profile}
  */
  readonly profile: string;
}

export function dosProtectionRuleProtectionAggregateToTerraform(struct?: DosProtectionRuleProtectionAggregate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dosProtectionRuleProtectionAggregateToHclTerraform(struct?: DosProtectionRuleProtectionAggregate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionRuleProtectionAggregateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionRuleProtectionAggregate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionRuleProtectionAggregate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profile = value.profile;
    }
  }

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface DosProtectionRuleProtectionClassifiedClassificationCriteria {
  /**
  * Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#address DosProtectionRule#address}
  */
  readonly address?: string;
}

export function dosProtectionRuleProtectionClassifiedClassificationCriteriaToTerraform(struct?: DosProtectionRuleProtectionClassifiedClassificationCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
  }
}


export function dosProtectionRuleProtectionClassifiedClassificationCriteriaToHclTerraform(struct?: DosProtectionRuleProtectionClassifiedClassificationCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionRuleProtectionClassifiedClassificationCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionRuleProtectionClassifiedClassificationCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionRuleProtectionClassifiedClassificationCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }
}
export interface DosProtectionRuleProtectionClassified {
  /**
  * Classification criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#classification_criteria DosProtectionRule#classification_criteria}
  */
  readonly classificationCriteria?: DosProtectionRuleProtectionClassifiedClassificationCriteria;
  /**
  * Classified DoS protection profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#profile DosProtectionRule#profile}
  */
  readonly profile: string;
}

export function dosProtectionRuleProtectionClassifiedToTerraform(struct?: DosProtectionRuleProtectionClassified | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classification_criteria: dosProtectionRuleProtectionClassifiedClassificationCriteriaToTerraform(struct!.classificationCriteria),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function dosProtectionRuleProtectionClassifiedToHclTerraform(struct?: DosProtectionRuleProtectionClassified | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classification_criteria: {
      value: dosProtectionRuleProtectionClassifiedClassificationCriteriaToHclTerraform(struct!.classificationCriteria),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionRuleProtectionClassifiedClassificationCriteria",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionRuleProtectionClassifiedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionRuleProtectionClassified | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classificationCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classificationCriteria = this._classificationCriteria?.internalValue;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionRuleProtectionClassified | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classificationCriteria.internalValue = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classificationCriteria.internalValue = value.classificationCriteria;
      this._profile = value.profile;
    }
  }

  // classification_criteria - computed: false, optional: true, required: false
  private _classificationCriteria = new DosProtectionRuleProtectionClassifiedClassificationCriteriaOutputReference(this, "classification_criteria");
  public get classificationCriteria() {
    return this._classificationCriteria;
  }
  public putClassificationCriteria(value: DosProtectionRuleProtectionClassifiedClassificationCriteria) {
    this._classificationCriteria.internalValue = value;
  }
  public resetClassificationCriteria() {
    this._classificationCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classificationCriteriaInput() {
    return this._classificationCriteria.internalValue;
  }

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}
export interface DosProtectionRuleProtection {
  /**
  * Aggregate
  * 
  * > ℹ️ **Note:** You must specify exactly one of `aggregate` and `classified`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#aggregate DosProtectionRule#aggregate}
  */
  readonly aggregate?: DosProtectionRuleProtectionAggregate;
  /**
  * Classified
  * 
  * > ℹ️ **Note:** You must specify exactly one of `aggregate` and `classified`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#classified DosProtectionRule#classified}
  */
  readonly classified?: DosProtectionRuleProtectionClassified;
}

export function dosProtectionRuleProtectionToTerraform(struct?: DosProtectionRuleProtection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregate: dosProtectionRuleProtectionAggregateToTerraform(struct!.aggregate),
    classified: dosProtectionRuleProtectionClassifiedToTerraform(struct!.classified),
  }
}


export function dosProtectionRuleProtectionToHclTerraform(struct?: DosProtectionRuleProtection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregate: {
      value: dosProtectionRuleProtectionAggregateToHclTerraform(struct!.aggregate),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionRuleProtectionAggregate",
    },
    classified: {
      value: dosProtectionRuleProtectionClassifiedToHclTerraform(struct!.classified),
      isBlock: true,
      type: "struct",
      storageClassType: "DosProtectionRuleProtectionClassified",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DosProtectionRuleProtectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DosProtectionRuleProtection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregate = this._aggregate?.internalValue;
    }
    if (this._classified?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classified = this._classified?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DosProtectionRuleProtection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregate.internalValue = undefined;
      this._classified.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregate.internalValue = value.aggregate;
      this._classified.internalValue = value.classified;
    }
  }

  // aggregate - computed: false, optional: true, required: false
  private _aggregate = new DosProtectionRuleProtectionAggregateOutputReference(this, "aggregate");
  public get aggregate() {
    return this._aggregate;
  }
  public putAggregate(value: DosProtectionRuleProtectionAggregate) {
    this._aggregate.internalValue = value;
  }
  public resetAggregate() {
    this._aggregate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregateInput() {
    return this._aggregate.internalValue;
  }

  // classified - computed: false, optional: true, required: false
  private _classified = new DosProtectionRuleProtectionClassifiedOutputReference(this, "classified");
  public get classified() {
    return this._classified;
  }
  public putClassified(value: DosProtectionRuleProtectionClassified) {
    this._classified.internalValue = value;
  }
  public resetClassified() {
    this._classified.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classifiedInput() {
    return this._classified.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule scm_dos_protection_rule}
*/
export class DosProtectionRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_dos_protection_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DosProtectionRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DosProtectionRule to import
  * @param importFromId The id of the existing DosProtectionRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DosProtectionRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_dos_protection_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/dos_protection_rule scm_dos_protection_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DosProtectionRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DosProtectionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_dos_protection_rule',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action.internalValue = config.action;
    this._description = config.description;
    this._destination = config.destination;
    this._device = config.device;
    this._disabled = config.disabled;
    this._folder = config.folder;
    this._from = config.from;
    this._logSetting = config.logSetting;
    this._name = config.name;
    this._position = config.position;
    this._protection.internalValue = config.protection;
    this._schedule = config.schedule;
    this._service = config.service;
    this._snippet = config.snippet;
    this._source = config.source;
    this._sourceUser = config.sourceUser;
    this._tag = config.tag;
    this._to = config.to;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action = new DosProtectionRuleActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DosProtectionRuleAction) {
    this._action.internalValue = value;
  }
  public resetAction() {
    this._action.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
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

  // destination - computed: false, optional: true, required: false
  private _destination?: string[]; 
  public get destination() {
    return this.getListAttribute('destination');
  }
  public set destination(value: string[]) {
    this._destination = value;
  }
  public resetDestination() {
    this._destination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // disabled - computed: true, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // from - computed: false, optional: true, required: false
  private _from?: string[]; 
  public get from() {
    return this.getListAttribute('from');
  }
  public set from(value: string[]) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_setting - computed: true, optional: true, required: false
  private _logSetting?: string; 
  public get logSetting() {
    return this.getStringAttribute('log_setting');
  }
  public set logSetting(value: string) {
    this._logSetting = value;
  }
  public resetLogSetting() {
    this._logSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSettingInput() {
    return this._logSetting;
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

  // position - computed: true, optional: true, required: false
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // protection - computed: false, optional: true, required: false
  private _protection = new DosProtectionRuleProtectionOutputReference(this, "protection");
  public get protection() {
    return this._protection;
  }
  public putProtection(value: DosProtectionRuleProtection) {
    this._protection.internalValue = value;
  }
  public resetProtection() {
    this._protection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionInput() {
    return this._protection.internalValue;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string[]; 
  public get service() {
    return this.getListAttribute('service');
  }
  public set service(value: string[]) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string[]; 
  public get source() {
    return this.getListAttribute('source');
  }
  public set source(value: string[]) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_user - computed: false, optional: true, required: false
  private _sourceUser?: string[]; 
  public get sourceUser() {
    return this.getListAttribute('source_user');
  }
  public set sourceUser(value: string[]) {
    this._sourceUser = value;
  }
  public resetSourceUser() {
    this._sourceUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUserInput() {
    return this._sourceUser;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string[]; 
  public get tag() {
    return this.getListAttribute('tag');
  }
  public set tag(value: string[]) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // to - computed: false, optional: true, required: false
  private _to?: string[]; 
  public get to() {
    return this.getListAttribute('to');
  }
  public set to(value: string[]) {
    this._to = value;
  }
  public resetTo() {
    this._to = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: dosProtectionRuleActionToTerraform(this._action.internalValue),
      description: cdktf.stringToTerraform(this._description),
      destination: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destination),
      device: cdktf.stringToTerraform(this._device),
      disabled: cdktf.booleanToTerraform(this._disabled),
      folder: cdktf.stringToTerraform(this._folder),
      from: cdktf.listMapper(cdktf.stringToTerraform, false)(this._from),
      log_setting: cdktf.stringToTerraform(this._logSetting),
      name: cdktf.stringToTerraform(this._name),
      position: cdktf.stringToTerraform(this._position),
      protection: dosProtectionRuleProtectionToTerraform(this._protection.internalValue),
      schedule: cdktf.stringToTerraform(this._schedule),
      service: cdktf.listMapper(cdktf.stringToTerraform, false)(this._service),
      snippet: cdktf.stringToTerraform(this._snippet),
      source: cdktf.listMapper(cdktf.stringToTerraform, false)(this._source),
      source_user: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceUser),
      tag: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tag),
      to: cdktf.listMapper(cdktf.stringToTerraform, false)(this._to),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: dosProtectionRuleActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DosProtectionRuleAction",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destination),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._from),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      log_setting: {
        value: cdktf.stringToHclTerraform(this._logSetting),
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
      position: {
        value: cdktf.stringToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protection: {
        value: dosProtectionRuleProtectionToHclTerraform(this._protection.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DosProtectionRuleProtection",
      },
      schedule: {
        value: cdktf.stringToHclTerraform(this._schedule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._service),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._source),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      source_user: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceUser),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tag: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tag),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      to: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._to),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
