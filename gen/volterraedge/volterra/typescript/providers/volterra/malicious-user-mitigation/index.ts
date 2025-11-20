// https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/malicious_user_mitigation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaliciousUserMitigationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/malicious_user_mitigation#annotations MaliciousUserMitigation#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/malicious_user_mitigation#description MaliciousUserMitigation#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/malicious_user_mitigation#disable MaliciousUserMitigation#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/malicious_user_mitigation#id MaliciousUserMitigation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/malicious_user_mitigation#labels MaliciousUserMitigation#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/malicious_user_mitigation#name MaliciousUserMitigation#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/malicious_user_mitigation#namespace MaliciousUserMitigation#namespace}
  */
  readonly namespace: string;
  /**
  * mitigation_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/malicious_user_mitigation#mitigation_type MaliciousUserMitigation#mitigation_type}
  */
  readonly mitigationType?: MaliciousUserMitigationMitigationType;
}
export interface MaliciousUserMitigationMitigationTypeRulesMitigationAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/malicious_user_mitigation#alert_only MaliciousUserMitigation#alert_only}
  */
  readonly alertOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/malicious_user_mitigation#block_temporarily MaliciousUserMitigation#block_temporarily}
  */
  readonly blockTemporarily?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/malicious_user_mitigation#captcha_challenge MaliciousUserMitigation#captcha_challenge}
  */
  readonly captchaChallenge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/malicious_user_mitigation#javascript_challenge MaliciousUserMitigation#javascript_challenge}
  */
  readonly javascriptChallenge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/malicious_user_mitigation#none MaliciousUserMitigation#none}
  */
  readonly none?: boolean | cdktf.IResolvable;
}

export function maliciousUserMitigationMitigationTypeRulesMitigationActionToTerraform(struct?: MaliciousUserMitigationMitigationTypeRulesMitigationActionOutputReference | MaliciousUserMitigationMitigationTypeRulesMitigationAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_only: cdktf.booleanToTerraform(struct!.alertOnly),
    block_temporarily: cdktf.booleanToTerraform(struct!.blockTemporarily),
    captcha_challenge: cdktf.booleanToTerraform(struct!.captchaChallenge),
    javascript_challenge: cdktf.booleanToTerraform(struct!.javascriptChallenge),
    none: cdktf.booleanToTerraform(struct!.none),
  }
}


export function maliciousUserMitigationMitigationTypeRulesMitigationActionToHclTerraform(struct?: MaliciousUserMitigationMitigationTypeRulesMitigationActionOutputReference | MaliciousUserMitigationMitigationTypeRulesMitigationAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_only: {
      value: cdktf.booleanToHclTerraform(struct!.alertOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_temporarily: {
      value: cdktf.booleanToHclTerraform(struct!.blockTemporarily),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    captcha_challenge: {
      value: cdktf.booleanToHclTerraform(struct!.captchaChallenge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    javascript_challenge: {
      value: cdktf.booleanToHclTerraform(struct!.javascriptChallenge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    none: {
      value: cdktf.booleanToHclTerraform(struct!.none),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaliciousUserMitigationMitigationTypeRulesMitigationActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaliciousUserMitigationMitigationTypeRulesMitigationAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertOnly = this._alertOnly;
    }
    if (this._blockTemporarily !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockTemporarily = this._blockTemporarily;
    }
    if (this._captchaChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaChallenge = this._captchaChallenge;
    }
    if (this._javascriptChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.javascriptChallenge = this._javascriptChallenge;
    }
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaliciousUserMitigationMitigationTypeRulesMitigationAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alertOnly = undefined;
      this._blockTemporarily = undefined;
      this._captchaChallenge = undefined;
      this._javascriptChallenge = undefined;
      this._none = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alertOnly = value.alertOnly;
      this._blockTemporarily = value.blockTemporarily;
      this._captchaChallenge = value.captchaChallenge;
      this._javascriptChallenge = value.javascriptChallenge;
      this._none = value.none;
    }
  }

  // alert_only - computed: false, optional: true, required: false
  private _alertOnly?: boolean | cdktf.IResolvable; 
  public get alertOnly() {
    return this.getBooleanAttribute('alert_only');
  }
  public set alertOnly(value: boolean | cdktf.IResolvable) {
    this._alertOnly = value;
  }
  public resetAlertOnly() {
    this._alertOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertOnlyInput() {
    return this._alertOnly;
  }

  // block_temporarily - computed: false, optional: true, required: false
  private _blockTemporarily?: boolean | cdktf.IResolvable; 
  public get blockTemporarily() {
    return this.getBooleanAttribute('block_temporarily');
  }
  public set blockTemporarily(value: boolean | cdktf.IResolvable) {
    this._blockTemporarily = value;
  }
  public resetBlockTemporarily() {
    this._blockTemporarily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockTemporarilyInput() {
    return this._blockTemporarily;
  }

  // captcha_challenge - computed: false, optional: true, required: false
  private _captchaChallenge?: boolean | cdktf.IResolvable; 
  public get captchaChallenge() {
    return this.getBooleanAttribute('captcha_challenge');
  }
  public set captchaChallenge(value: boolean | cdktf.IResolvable) {
    this._captchaChallenge = value;
  }
  public resetCaptchaChallenge() {
    this._captchaChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaChallengeInput() {
    return this._captchaChallenge;
  }

  // javascript_challenge - computed: false, optional: true, required: false
  private _javascriptChallenge?: boolean | cdktf.IResolvable; 
  public get javascriptChallenge() {
    return this.getBooleanAttribute('javascript_challenge');
  }
  public set javascriptChallenge(value: boolean | cdktf.IResolvable) {
    this._javascriptChallenge = value;
  }
  public resetJavascriptChallenge() {
    this._javascriptChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javascriptChallengeInput() {
    return this._javascriptChallenge;
  }

  // none - computed: false, optional: true, required: false
  private _none?: boolean | cdktf.IResolvable; 
  public get none() {
    return this.getBooleanAttribute('none');
  }
  public set none(value: boolean | cdktf.IResolvable) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }
}
export interface MaliciousUserMitigationMitigationTypeRulesThreatLevel {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/malicious_user_mitigation#high MaliciousUserMitigation#high}
  */
  readonly high?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/malicious_user_mitigation#low MaliciousUserMitigation#low}
  */
  readonly low?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/malicious_user_mitigation#medium MaliciousUserMitigation#medium}
  */
  readonly medium?: boolean | cdktf.IResolvable;
}

export function maliciousUserMitigationMitigationTypeRulesThreatLevelToTerraform(struct?: MaliciousUserMitigationMitigationTypeRulesThreatLevelOutputReference | MaliciousUserMitigationMitigationTypeRulesThreatLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high: cdktf.booleanToTerraform(struct!.high),
    low: cdktf.booleanToTerraform(struct!.low),
    medium: cdktf.booleanToTerraform(struct!.medium),
  }
}


export function maliciousUserMitigationMitigationTypeRulesThreatLevelToHclTerraform(struct?: MaliciousUserMitigationMitigationTypeRulesThreatLevelOutputReference | MaliciousUserMitigationMitigationTypeRulesThreatLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high: {
      value: cdktf.booleanToHclTerraform(struct!.high),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low: {
      value: cdktf.booleanToHclTerraform(struct!.low),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    medium: {
      value: cdktf.booleanToHclTerraform(struct!.medium),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaliciousUserMitigationMitigationTypeRulesThreatLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaliciousUserMitigationMitigationTypeRulesThreatLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._high !== undefined) {
      hasAnyValues = true;
      internalValueResult.high = this._high;
    }
    if (this._low !== undefined) {
      hasAnyValues = true;
      internalValueResult.low = this._low;
    }
    if (this._medium !== undefined) {
      hasAnyValues = true;
      internalValueResult.medium = this._medium;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaliciousUserMitigationMitigationTypeRulesThreatLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._high = undefined;
      this._low = undefined;
      this._medium = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._high = value.high;
      this._low = value.low;
      this._medium = value.medium;
    }
  }

  // high - computed: false, optional: true, required: false
  private _high?: boolean | cdktf.IResolvable; 
  public get high() {
    return this.getBooleanAttribute('high');
  }
  public set high(value: boolean | cdktf.IResolvable) {
    this._high = value;
  }
  public resetHigh() {
    this._high = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highInput() {
    return this._high;
  }

  // low - computed: false, optional: true, required: false
  private _low?: boolean | cdktf.IResolvable; 
  public get low() {
    return this.getBooleanAttribute('low');
  }
  public set low(value: boolean | cdktf.IResolvable) {
    this._low = value;
  }
  public resetLow() {
    this._low = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowInput() {
    return this._low;
  }

  // medium - computed: false, optional: true, required: false
  private _medium?: boolean | cdktf.IResolvable; 
  public get medium() {
    return this.getBooleanAttribute('medium');
  }
  public set medium(value: boolean | cdktf.IResolvable) {
    this._medium = value;
  }
  public resetMedium() {
    this._medium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium;
  }
}
export interface MaliciousUserMitigationMitigationTypeRules {
  /**
  * mitigation_action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/malicious_user_mitigation#mitigation_action MaliciousUserMitigation#mitigation_action}
  */
  readonly mitigationAction: MaliciousUserMitigationMitigationTypeRulesMitigationAction;
  /**
  * threat_level block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/malicious_user_mitigation#threat_level MaliciousUserMitigation#threat_level}
  */
  readonly threatLevel: MaliciousUserMitigationMitigationTypeRulesThreatLevel;
}

export function maliciousUserMitigationMitigationTypeRulesToTerraform(struct?: MaliciousUserMitigationMitigationTypeRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mitigation_action: maliciousUserMitigationMitigationTypeRulesMitigationActionToTerraform(struct!.mitigationAction),
    threat_level: maliciousUserMitigationMitigationTypeRulesThreatLevelToTerraform(struct!.threatLevel),
  }
}


export function maliciousUserMitigationMitigationTypeRulesToHclTerraform(struct?: MaliciousUserMitigationMitigationTypeRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mitigation_action: {
      value: maliciousUserMitigationMitigationTypeRulesMitigationActionToHclTerraform(struct!.mitigationAction),
      isBlock: true,
      type: "list",
      storageClassType: "MaliciousUserMitigationMitigationTypeRulesMitigationActionList",
    },
    threat_level: {
      value: maliciousUserMitigationMitigationTypeRulesThreatLevelToHclTerraform(struct!.threatLevel),
      isBlock: true,
      type: "list",
      storageClassType: "MaliciousUserMitigationMitigationTypeRulesThreatLevelList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaliciousUserMitigationMitigationTypeRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MaliciousUserMitigationMitigationTypeRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mitigationAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mitigationAction = this._mitigationAction?.internalValue;
    }
    if (this._threatLevel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatLevel = this._threatLevel?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaliciousUserMitigationMitigationTypeRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mitigationAction.internalValue = undefined;
      this._threatLevel.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mitigationAction.internalValue = value.mitigationAction;
      this._threatLevel.internalValue = value.threatLevel;
    }
  }

  // mitigation_action - computed: false, optional: false, required: true
  private _mitigationAction = new MaliciousUserMitigationMitigationTypeRulesMitigationActionOutputReference(this, "mitigation_action");
  public get mitigationAction() {
    return this._mitigationAction;
  }
  public putMitigationAction(value: MaliciousUserMitigationMitigationTypeRulesMitigationAction) {
    this._mitigationAction.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigationActionInput() {
    return this._mitigationAction.internalValue;
  }

  // threat_level - computed: false, optional: false, required: true
  private _threatLevel = new MaliciousUserMitigationMitigationTypeRulesThreatLevelOutputReference(this, "threat_level");
  public get threatLevel() {
    return this._threatLevel;
  }
  public putThreatLevel(value: MaliciousUserMitigationMitigationTypeRulesThreatLevel) {
    this._threatLevel.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get threatLevelInput() {
    return this._threatLevel.internalValue;
  }
}

export class MaliciousUserMitigationMitigationTypeRulesList extends cdktf.ComplexList {
  public internalValue? : MaliciousUserMitigationMitigationTypeRules[] | cdktf.IResolvable

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
  public get(index: number): MaliciousUserMitigationMitigationTypeRulesOutputReference {
    return new MaliciousUserMitigationMitigationTypeRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MaliciousUserMitigationMitigationType {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/malicious_user_mitigation#rules MaliciousUserMitigation#rules}
  */
  readonly rules: MaliciousUserMitigationMitigationTypeRules[] | cdktf.IResolvable;
}

export function maliciousUserMitigationMitigationTypeToTerraform(struct?: MaliciousUserMitigationMitigationTypeOutputReference | MaliciousUserMitigationMitigationType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(maliciousUserMitigationMitigationTypeRulesToTerraform, true)(struct!.rules),
  }
}


export function maliciousUserMitigationMitigationTypeToHclTerraform(struct?: MaliciousUserMitigationMitigationTypeOutputReference | MaliciousUserMitigationMitigationType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(maliciousUserMitigationMitigationTypeRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "MaliciousUserMitigationMitigationTypeRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MaliciousUserMitigationMitigationTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MaliciousUserMitigationMitigationType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MaliciousUserMitigationMitigationType | undefined) {
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
  private _rules = new MaliciousUserMitigationMitigationTypeRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: MaliciousUserMitigationMitigationTypeRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/malicious_user_mitigation volterra_malicious_user_mitigation}
*/
export class MaliciousUserMitigation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_malicious_user_mitigation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MaliciousUserMitigation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MaliciousUserMitigation to import
  * @param importFromId The id of the existing MaliciousUserMitigation that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/malicious_user_mitigation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MaliciousUserMitigation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_malicious_user_mitigation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.45/docs/resources/malicious_user_mitigation volterra_malicious_user_mitigation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaliciousUserMitigationConfig
  */
  public constructor(scope: Construct, id: string, config: MaliciousUserMitigationConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_malicious_user_mitigation',
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
    this._mitigationType.internalValue = config.mitigationType;
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

  // mitigation_type - computed: false, optional: true, required: false
  private _mitigationType = new MaliciousUserMitigationMitigationTypeOutputReference(this, "mitigation_type");
  public get mitigationType() {
    return this._mitigationType;
  }
  public putMitigationType(value: MaliciousUserMitigationMitigationType) {
    this._mitigationType.internalValue = value;
  }
  public resetMitigationType() {
    this._mitigationType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigationTypeInput() {
    return this._mitigationType.internalValue;
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
      mitigation_type: maliciousUserMitigationMitigationTypeToTerraform(this._mitigationType.internalValue),
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
      mitigation_type: {
        value: maliciousUserMitigationMitigationTypeToHclTerraform(this._mitigationType.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MaliciousUserMitigationMitigationTypeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
