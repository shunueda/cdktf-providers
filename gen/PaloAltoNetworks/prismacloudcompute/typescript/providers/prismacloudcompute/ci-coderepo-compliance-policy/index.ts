// https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/ci_coderepo_compliance_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiCoderepoCompliancePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/ci_coderepo_compliance_policy#rule CiCoderepoCompliancePolicy#rule}
  */
  readonly rule?: CiCoderepoCompliancePolicyRule[] | cdktf.IResolvable;
}
export interface CiCoderepoCompliancePolicyRuleLicenseAlertThreshold {
  /**
  * Whether or not to disable compliance alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/ci_coderepo_compliance_policy#enabled CiCoderepoCompliancePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Minimum compliance severity to generate an alert. Can be set to 0=off, 1=low, 4=medium, 7=high, and 9=critical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/ci_coderepo_compliance_policy#value CiCoderepoCompliancePolicy#value}
  */
  readonly value?: number;
}

export function ciCoderepoCompliancePolicyRuleLicenseAlertThresholdToTerraform(struct?: CiCoderepoCompliancePolicyRuleLicenseAlertThresholdOutputReference | CiCoderepoCompliancePolicyRuleLicenseAlertThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function ciCoderepoCompliancePolicyRuleLicenseAlertThresholdToHclTerraform(struct?: CiCoderepoCompliancePolicyRuleLicenseAlertThresholdOutputReference | CiCoderepoCompliancePolicyRuleLicenseAlertThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiCoderepoCompliancePolicyRuleLicenseAlertThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiCoderepoCompliancePolicyRuleLicenseAlertThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiCoderepoCompliancePolicyRuleLicenseAlertThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
    }
  }

  // enabled - computed: false, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CiCoderepoCompliancePolicyRuleLicenseBlockThreshold {
  /**
  * Whether or not to disable compliance alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/ci_coderepo_compliance_policy#enabled CiCoderepoCompliancePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Minimum compliance severity to generate an alert. Can be set to 0=off, 1=low, 4=medium, 7=high, and 9=critical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/ci_coderepo_compliance_policy#value CiCoderepoCompliancePolicy#value}
  */
  readonly value?: number;
}

export function ciCoderepoCompliancePolicyRuleLicenseBlockThresholdToTerraform(struct?: CiCoderepoCompliancePolicyRuleLicenseBlockThresholdOutputReference | CiCoderepoCompliancePolicyRuleLicenseBlockThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function ciCoderepoCompliancePolicyRuleLicenseBlockThresholdToHclTerraform(struct?: CiCoderepoCompliancePolicyRuleLicenseBlockThresholdOutputReference | CiCoderepoCompliancePolicyRuleLicenseBlockThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiCoderepoCompliancePolicyRuleLicenseBlockThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiCoderepoCompliancePolicyRuleLicenseBlockThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiCoderepoCompliancePolicyRuleLicenseBlockThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._value = value.value;
    }
  }

  // enabled - computed: false, optional: true, required: false
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface CiCoderepoCompliancePolicyRuleLicense {
  /**
  * List of licenses with critical level of violation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/ci_coderepo_compliance_policy#critical CiCoderepoCompliancePolicy#critical}
  */
  readonly critical?: string[];
  /**
  * List of licenses with high level of violation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/ci_coderepo_compliance_policy#high CiCoderepoCompliancePolicy#high}
  */
  readonly high?: string[];
  /**
  * List of licenses with low level of violation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/ci_coderepo_compliance_policy#low CiCoderepoCompliancePolicy#low}
  */
  readonly low?: string[];
  /**
  * List of licenses with medium level of violation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/ci_coderepo_compliance_policy#medium CiCoderepoCompliancePolicy#medium}
  */
  readonly medium?: string[];
  /**
  * alert_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/ci_coderepo_compliance_policy#alert_threshold CiCoderepoCompliancePolicy#alert_threshold}
  */
  readonly alertThreshold?: CiCoderepoCompliancePolicyRuleLicenseAlertThreshold;
  /**
  * block_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/ci_coderepo_compliance_policy#block_threshold CiCoderepoCompliancePolicy#block_threshold}
  */
  readonly blockThreshold?: CiCoderepoCompliancePolicyRuleLicenseBlockThreshold;
}

export function ciCoderepoCompliancePolicyRuleLicenseToTerraform(struct?: CiCoderepoCompliancePolicyRuleLicenseOutputReference | CiCoderepoCompliancePolicyRuleLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.critical),
    high: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.high),
    low: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.low),
    medium: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.medium),
    alert_threshold: ciCoderepoCompliancePolicyRuleLicenseAlertThresholdToTerraform(struct!.alertThreshold),
    block_threshold: ciCoderepoCompliancePolicyRuleLicenseBlockThresholdToTerraform(struct!.blockThreshold),
  }
}


export function ciCoderepoCompliancePolicyRuleLicenseToHclTerraform(struct?: CiCoderepoCompliancePolicyRuleLicenseOutputReference | CiCoderepoCompliancePolicyRuleLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    critical: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.critical),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    high: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.high),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    low: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.low),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    medium: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.medium),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    alert_threshold: {
      value: ciCoderepoCompliancePolicyRuleLicenseAlertThresholdToHclTerraform(struct!.alertThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "CiCoderepoCompliancePolicyRuleLicenseAlertThresholdList",
    },
    block_threshold: {
      value: ciCoderepoCompliancePolicyRuleLicenseBlockThresholdToHclTerraform(struct!.blockThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "CiCoderepoCompliancePolicyRuleLicenseBlockThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiCoderepoCompliancePolicyRuleLicenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CiCoderepoCompliancePolicyRuleLicense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
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
    if (this._alertThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertThreshold = this._alertThreshold?.internalValue;
    }
    if (this._blockThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockThreshold = this._blockThreshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiCoderepoCompliancePolicyRuleLicense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._critical = undefined;
      this._high = undefined;
      this._low = undefined;
      this._medium = undefined;
      this._alertThreshold.internalValue = undefined;
      this._blockThreshold.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._critical = value.critical;
      this._high = value.high;
      this._low = value.low;
      this._medium = value.medium;
      this._alertThreshold.internalValue = value.alertThreshold;
      this._blockThreshold.internalValue = value.blockThreshold;
    }
  }

  // critical - computed: false, optional: true, required: false
  private _critical?: string[]; 
  public get critical() {
    return this.getListAttribute('critical');
  }
  public set critical(value: string[]) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // high - computed: false, optional: true, required: false
  private _high?: string[]; 
  public get high() {
    return this.getListAttribute('high');
  }
  public set high(value: string[]) {
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
  private _low?: string[]; 
  public get low() {
    return this.getListAttribute('low');
  }
  public set low(value: string[]) {
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
  private _medium?: string[]; 
  public get medium() {
    return this.getListAttribute('medium');
  }
  public set medium(value: string[]) {
    this._medium = value;
  }
  public resetMedium() {
    this._medium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium;
  }

  // alert_threshold - computed: false, optional: true, required: false
  private _alertThreshold = new CiCoderepoCompliancePolicyRuleLicenseAlertThresholdOutputReference(this, "alert_threshold");
  public get alertThreshold() {
    return this._alertThreshold;
  }
  public putAlertThreshold(value: CiCoderepoCompliancePolicyRuleLicenseAlertThreshold) {
    this._alertThreshold.internalValue = value;
  }
  public resetAlertThreshold() {
    this._alertThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertThresholdInput() {
    return this._alertThreshold.internalValue;
  }

  // block_threshold - computed: false, optional: true, required: false
  private _blockThreshold = new CiCoderepoCompliancePolicyRuleLicenseBlockThresholdOutputReference(this, "block_threshold");
  public get blockThreshold() {
    return this._blockThreshold;
  }
  public putBlockThreshold(value: CiCoderepoCompliancePolicyRuleLicenseBlockThreshold) {
    this._blockThreshold.internalValue = value;
  }
  public resetBlockThreshold() {
    this._blockThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockThresholdInput() {
    return this._blockThreshold.internalValue;
  }
}
export interface CiCoderepoCompliancePolicyRule {
  /**
  * Collections used to scope the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/ci_coderepo_compliance_policy#collections CiCoderepoCompliancePolicy#collections}
  */
  readonly collections?: string[];
  /**
  * Whether or not to disable the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/ci_coderepo_compliance_policy#disabled CiCoderepoCompliancePolicy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The effect of the rule. Can be set to 'ignore' or 'alert'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/ci_coderepo_compliance_policy#effect CiCoderepoCompliancePolicy#effect}
  */
  readonly effect?: string;
  /**
  * Unique name of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/ci_coderepo_compliance_policy#name CiCoderepoCompliancePolicy#name}
  */
  readonly name?: string;
  /**
  * Free-form text field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/ci_coderepo_compliance_policy#notes CiCoderepoCompliancePolicy#notes}
  */
  readonly notes?: string;
  /**
  * license block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/ci_coderepo_compliance_policy#license CiCoderepoCompliancePolicy#license}
  */
  readonly license?: CiCoderepoCompliancePolicyRuleLicense;
}

export function ciCoderepoCompliancePolicyRuleToTerraform(struct?: CiCoderepoCompliancePolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collections: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.collections),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    effect: cdktf.stringToTerraform(struct!.effect),
    name: cdktf.stringToTerraform(struct!.name),
    notes: cdktf.stringToTerraform(struct!.notes),
    license: ciCoderepoCompliancePolicyRuleLicenseToTerraform(struct!.license),
  }
}


export function ciCoderepoCompliancePolicyRuleToHclTerraform(struct?: CiCoderepoCompliancePolicyRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collections: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.collections),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
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
    notes: {
      value: cdktf.stringToHclTerraform(struct!.notes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license: {
      value: ciCoderepoCompliancePolicyRuleLicenseToHclTerraform(struct!.license),
      isBlock: true,
      type: "list",
      storageClassType: "CiCoderepoCompliancePolicyRuleLicenseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiCoderepoCompliancePolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiCoderepoCompliancePolicyRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collections !== undefined) {
      hasAnyValues = true;
      internalValueResult.collections = this._collections;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._notes !== undefined) {
      hasAnyValues = true;
      internalValueResult.notes = this._notes;
    }
    if (this._license?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.license = this._license?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiCoderepoCompliancePolicyRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collections = undefined;
      this._disabled = undefined;
      this._effect = undefined;
      this._name = undefined;
      this._notes = undefined;
      this._license.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collections = value.collections;
      this._disabled = value.disabled;
      this._effect = value.effect;
      this._name = value.name;
      this._notes = value.notes;
      this._license.internalValue = value.license;
    }
  }

  // collections - computed: false, optional: true, required: false
  private _collections?: string[]; 
  public get collections() {
    return this.getListAttribute('collections');
  }
  public set collections(value: string[]) {
    this._collections = value;
  }
  public resetCollections() {
    this._collections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionsInput() {
    return this._collections;
  }

  // disabled - computed: false, optional: true, required: false
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

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // license - computed: false, optional: true, required: false
  private _license = new CiCoderepoCompliancePolicyRuleLicenseOutputReference(this, "license");
  public get license() {
    return this._license;
  }
  public putLicense(value: CiCoderepoCompliancePolicyRuleLicense) {
    this._license.internalValue = value;
  }
  public resetLicense() {
    this._license.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license.internalValue;
  }
}

export class CiCoderepoCompliancePolicyRuleList extends cdktf.ComplexList {
  public internalValue? : CiCoderepoCompliancePolicyRule[] | cdktf.IResolvable

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
  public get(index: number): CiCoderepoCompliancePolicyRuleOutputReference {
    return new CiCoderepoCompliancePolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/ci_coderepo_compliance_policy prismacloudcompute_ci_coderepo_compliance_policy}
*/
export class CiCoderepoCompliancePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloudcompute_ci_coderepo_compliance_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiCoderepoCompliancePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiCoderepoCompliancePolicy to import
  * @param importFromId The id of the existing CiCoderepoCompliancePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/ci_coderepo_compliance_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiCoderepoCompliancePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloudcompute_ci_coderepo_compliance_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/ci_coderepo_compliance_policy prismacloudcompute_ci_coderepo_compliance_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiCoderepoCompliancePolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CiCoderepoCompliancePolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prismacloudcompute_ci_coderepo_compliance_policy',
      terraformGeneratorMetadata: {
        providerName: 'prismacloudcompute',
        providerVersion: '0.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new CiCoderepoCompliancePolicyRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: CiCoderepoCompliancePolicyRule[] | cdktf.IResolvable) {
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
      rule: cdktf.listMapper(ciCoderepoCompliancePolicyRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      rule: {
        value: cdktf.listMapperHcl(ciCoderepoCompliancePolicyRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiCoderepoCompliancePolicyRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
