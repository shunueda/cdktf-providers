// https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/coderepo_compliance_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoderepoCompliancePolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/coderepo_compliance_policy#rule CoderepoCompliancePolicy#rule}
  */
  readonly rule?: CoderepoCompliancePolicyRule[] | cdktf.IResolvable;
}
export interface CoderepoCompliancePolicyRuleLicenseAlertThreshold {
  /**
  * Whether or not to disable compliance alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/coderepo_compliance_policy#enabled CoderepoCompliancePolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Minimum compliance severity to generate an alert. Can be set to 0=off, 1=low, 4=medium, 7=high, and 9=critical.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/coderepo_compliance_policy#value CoderepoCompliancePolicy#value}
  */
  readonly value?: number;
}

export function coderepoCompliancePolicyRuleLicenseAlertThresholdToTerraform(struct?: CoderepoCompliancePolicyRuleLicenseAlertThresholdOutputReference | CoderepoCompliancePolicyRuleLicenseAlertThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function coderepoCompliancePolicyRuleLicenseAlertThresholdToHclTerraform(struct?: CoderepoCompliancePolicyRuleLicenseAlertThresholdOutputReference | CoderepoCompliancePolicyRuleLicenseAlertThreshold): any {
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

export class CoderepoCompliancePolicyRuleLicenseAlertThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoderepoCompliancePolicyRuleLicenseAlertThreshold | undefined {
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

  public set internalValue(value: CoderepoCompliancePolicyRuleLicenseAlertThreshold | undefined) {
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
export interface CoderepoCompliancePolicyRuleLicense {
  /**
  * List of licenses with critical level of violation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/coderepo_compliance_policy#critical CoderepoCompliancePolicy#critical}
  */
  readonly critical?: string[];
  /**
  * List of licenses with high level of violation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/coderepo_compliance_policy#high CoderepoCompliancePolicy#high}
  */
  readonly high?: string[];
  /**
  * List of licenses with low level of violation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/coderepo_compliance_policy#low CoderepoCompliancePolicy#low}
  */
  readonly low?: string[];
  /**
  * List of licenses with medium level of violation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/coderepo_compliance_policy#medium CoderepoCompliancePolicy#medium}
  */
  readonly medium?: string[];
  /**
  * alert_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/coderepo_compliance_policy#alert_threshold CoderepoCompliancePolicy#alert_threshold}
  */
  readonly alertThreshold?: CoderepoCompliancePolicyRuleLicenseAlertThreshold;
}

export function coderepoCompliancePolicyRuleLicenseToTerraform(struct?: CoderepoCompliancePolicyRuleLicenseOutputReference | CoderepoCompliancePolicyRuleLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.critical),
    high: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.high),
    low: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.low),
    medium: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.medium),
    alert_threshold: coderepoCompliancePolicyRuleLicenseAlertThresholdToTerraform(struct!.alertThreshold),
  }
}


export function coderepoCompliancePolicyRuleLicenseToHclTerraform(struct?: CoderepoCompliancePolicyRuleLicenseOutputReference | CoderepoCompliancePolicyRuleLicense): any {
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
      value: coderepoCompliancePolicyRuleLicenseAlertThresholdToHclTerraform(struct!.alertThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "CoderepoCompliancePolicyRuleLicenseAlertThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoderepoCompliancePolicyRuleLicenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CoderepoCompliancePolicyRuleLicense | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoderepoCompliancePolicyRuleLicense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._critical = undefined;
      this._high = undefined;
      this._low = undefined;
      this._medium = undefined;
      this._alertThreshold.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._critical = value.critical;
      this._high = value.high;
      this._low = value.low;
      this._medium = value.medium;
      this._alertThreshold.internalValue = value.alertThreshold;
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
  private _alertThreshold = new CoderepoCompliancePolicyRuleLicenseAlertThresholdOutputReference(this, "alert_threshold");
  public get alertThreshold() {
    return this._alertThreshold;
  }
  public putAlertThreshold(value: CoderepoCompliancePolicyRuleLicenseAlertThreshold) {
    this._alertThreshold.internalValue = value;
  }
  public resetAlertThreshold() {
    this._alertThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertThresholdInput() {
    return this._alertThreshold.internalValue;
  }
}
export interface CoderepoCompliancePolicyRule {
  /**
  * Collections used to scope the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/coderepo_compliance_policy#collections CoderepoCompliancePolicy#collections}
  */
  readonly collections?: string[];
  /**
  * Whether or not to disable the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/coderepo_compliance_policy#disabled CoderepoCompliancePolicy#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The effect of the rule. Can be set to 'ignore' or 'alert'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/coderepo_compliance_policy#effect CoderepoCompliancePolicy#effect}
  */
  readonly effect?: string;
  /**
  * Unique name of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/coderepo_compliance_policy#name CoderepoCompliancePolicy#name}
  */
  readonly name?: string;
  /**
  * Free-form text field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/coderepo_compliance_policy#notes CoderepoCompliancePolicy#notes}
  */
  readonly notes?: string;
  /**
  * license block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/coderepo_compliance_policy#license CoderepoCompliancePolicy#license}
  */
  readonly license?: CoderepoCompliancePolicyRuleLicense;
}

export function coderepoCompliancePolicyRuleToTerraform(struct?: CoderepoCompliancePolicyRule | cdktf.IResolvable): any {
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
    license: coderepoCompliancePolicyRuleLicenseToTerraform(struct!.license),
  }
}


export function coderepoCompliancePolicyRuleToHclTerraform(struct?: CoderepoCompliancePolicyRule | cdktf.IResolvable): any {
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
      value: coderepoCompliancePolicyRuleLicenseToHclTerraform(struct!.license),
      isBlock: true,
      type: "list",
      storageClassType: "CoderepoCompliancePolicyRuleLicenseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoderepoCompliancePolicyRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CoderepoCompliancePolicyRule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CoderepoCompliancePolicyRule | cdktf.IResolvable | undefined) {
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
  private _license = new CoderepoCompliancePolicyRuleLicenseOutputReference(this, "license");
  public get license() {
    return this._license;
  }
  public putLicense(value: CoderepoCompliancePolicyRuleLicense) {
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

export class CoderepoCompliancePolicyRuleList extends cdktf.ComplexList {
  public internalValue? : CoderepoCompliancePolicyRule[] | cdktf.IResolvable

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
  public get(index: number): CoderepoCompliancePolicyRuleOutputReference {
    return new CoderepoCompliancePolicyRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/coderepo_compliance_policy prismacloudcompute_coderepo_compliance_policy}
*/
export class CoderepoCompliancePolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloudcompute_coderepo_compliance_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoderepoCompliancePolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoderepoCompliancePolicy to import
  * @param importFromId The id of the existing CoderepoCompliancePolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/coderepo_compliance_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoderepoCompliancePolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloudcompute_coderepo_compliance_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/coderepo_compliance_policy prismacloudcompute_coderepo_compliance_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoderepoCompliancePolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CoderepoCompliancePolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'prismacloudcompute_coderepo_compliance_policy',
      terraformGeneratorMetadata: {
        providerName: 'prismacloudcompute',
        providerVersion: '0.8.0',
        providerVersionConstraint: '0.8.0'
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
  private _rule = new CoderepoCompliancePolicyRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: CoderepoCompliancePolicyRule[] | cdktf.IResolvable) {
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
      rule: cdktf.listMapper(coderepoCompliancePolicyRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      rule: {
        value: cdktf.listMapperHcl(coderepoCompliancePolicyRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoderepoCompliancePolicyRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
