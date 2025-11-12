// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementThreatProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Protections with this performance impact only will be activated in the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#active_protections_performance_impact ManagementThreatProfile#active_protections_performance_impact}
  */
  readonly activeProtectionsPerformanceImpact?: string;
  /**
  * Protections with this severity only will be activated in the profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#active_protections_severity ManagementThreatProfile#active_protections_severity}
  */
  readonly activeProtectionsSeverity?: string;
  /**
  * Is Anti-Bot blade activated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#anti_bot ManagementThreatProfile#anti_bot}
  */
  readonly antiBot?: boolean | cdktf.IResolvable;
  /**
  * Is Anti-Virus blade activated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#anti_virus ManagementThreatProfile#anti_virus}
  */
  readonly antiVirus?: boolean | cdktf.IResolvable;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#color ManagementThreatProfile#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#comments ManagementThreatProfile#comments}
  */
  readonly comments?: string;
  /**
  * Action for protections with high confidence level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#confidence_level_high ManagementThreatProfile#confidence_level_high}
  */
  readonly confidenceLevelHigh?: string;
  /**
  * Action for protections with low confidence level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#confidence_level_low ManagementThreatProfile#confidence_level_low}
  */
  readonly confidenceLevelLow?: string;
  /**
  * Action for protections with medium confidence level.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#confidence_level_medium ManagementThreatProfile#confidence_level_medium}
  */
  readonly confidenceLevelMedium?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#id ManagementThreatProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#ignore_errors ManagementThreatProfile#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#ignore_warnings ManagementThreatProfile#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Is IPS blade activated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#ips ManagementThreatProfile#ips}
  */
  readonly ips?: boolean | cdktf.IResolvable;
  /**
  * IPS blade settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#ips_settings ManagementThreatProfile#ips_settings}
  */
  readonly ipsSettings?: { [key: string]: string };
  /**
  * Malicious Mail Policy for MTA Gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#malicious_mail_policy_settings ManagementThreatProfile#malicious_mail_policy_settings}
  */
  readonly maliciousMailPolicySettings?: { [key: string]: string };
  /**
  * Object name. Should be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#name ManagementThreatProfile#name}
  */
  readonly name: string;
  /**
  * Scans malicious links (URLs) inside email messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#scan_malicious_links ManagementThreatProfile#scan_malicious_links}
  */
  readonly scanMaliciousLinks?: { [key: string]: string };
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#tags ManagementThreatProfile#tags}
  */
  readonly tags?: string[];
  /**
  * Is Threat Emulation blade activated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#threat_emulation ManagementThreatProfile#threat_emulation}
  */
  readonly threatEmulation?: boolean | cdktf.IResolvable;
  /**
  * Is Threat-Extraction blade activated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#threat_extraction ManagementThreatProfile#threat_extraction}
  */
  readonly threatExtraction?: boolean | cdktf.IResolvable;
  /**
  * Whether to activate/deactivate IPS protections according to the extended attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#use_extended_attributes ManagementThreatProfile#use_extended_attributes}
  */
  readonly useExtendedAttributes?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the profile should make use of indicators.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#use_indicators ManagementThreatProfile#use_indicators}
  */
  readonly useIndicators?: boolean | cdktf.IResolvable;
  /**
  * Is Zero-Phishing blade activated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#zero_phishing ManagementThreatProfile#zero_phishing}
  */
  readonly zeroPhishing?: boolean | cdktf.IResolvable;
  /**
  * deactivate_protections_by_extended_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#deactivate_protections_by_extended_attributes ManagementThreatProfile#deactivate_protections_by_extended_attributes}
  */
  readonly deactivateProtectionsByExtendedAttributes?: ManagementThreatProfileDeactivateProtectionsByExtendedAttributes[] | cdktf.IResolvable;
  /**
  * indicator_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#indicator_overrides ManagementThreatProfile#indicator_overrides}
  */
  readonly indicatorOverrides?: ManagementThreatProfileIndicatorOverrides[] | cdktf.IResolvable;
  /**
  * overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#overrides ManagementThreatProfile#overrides}
  */
  readonly overrides?: ManagementThreatProfileOverrides[] | cdktf.IResolvable;
}
export interface ManagementThreatProfileActivateProtectionsByExtendedAttributesValues {
}

export function managementThreatProfileActivateProtectionsByExtendedAttributesValuesToTerraform(struct?: ManagementThreatProfileActivateProtectionsByExtendedAttributesValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managementThreatProfileActivateProtectionsByExtendedAttributesValuesToHclTerraform(struct?: ManagementThreatProfileActivateProtectionsByExtendedAttributesValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagementThreatProfileActivateProtectionsByExtendedAttributesValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagementThreatProfileActivateProtectionsByExtendedAttributesValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementThreatProfileActivateProtectionsByExtendedAttributesValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class ManagementThreatProfileActivateProtectionsByExtendedAttributesValuesList extends cdktf.ComplexList {

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
  public get(index: number): ManagementThreatProfileActivateProtectionsByExtendedAttributesValuesOutputReference {
    return new ManagementThreatProfileActivateProtectionsByExtendedAttributesValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementThreatProfileActivateProtectionsByExtendedAttributes {
}

export function managementThreatProfileActivateProtectionsByExtendedAttributesToTerraform(struct?: ManagementThreatProfileActivateProtectionsByExtendedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managementThreatProfileActivateProtectionsByExtendedAttributesToHclTerraform(struct?: ManagementThreatProfileActivateProtectionsByExtendedAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagementThreatProfileActivateProtectionsByExtendedAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagementThreatProfileActivateProtectionsByExtendedAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementThreatProfileActivateProtectionsByExtendedAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getStringAttribute('category');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // values - computed: true, optional: false, required: false
  private _values = new ManagementThreatProfileActivateProtectionsByExtendedAttributesValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
}

export class ManagementThreatProfileActivateProtectionsByExtendedAttributesList extends cdktf.ComplexList {

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
  public get(index: number): ManagementThreatProfileActivateProtectionsByExtendedAttributesOutputReference {
    return new ManagementThreatProfileActivateProtectionsByExtendedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementThreatProfileDeactivateProtectionsByExtendedAttributesValues {
}

export function managementThreatProfileDeactivateProtectionsByExtendedAttributesValuesToTerraform(struct?: ManagementThreatProfileDeactivateProtectionsByExtendedAttributesValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function managementThreatProfileDeactivateProtectionsByExtendedAttributesValuesToHclTerraform(struct?: ManagementThreatProfileDeactivateProtectionsByExtendedAttributesValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ManagementThreatProfileDeactivateProtectionsByExtendedAttributesValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ManagementThreatProfileDeactivateProtectionsByExtendedAttributesValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementThreatProfileDeactivateProtectionsByExtendedAttributesValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class ManagementThreatProfileDeactivateProtectionsByExtendedAttributesValuesList extends cdktf.ComplexList {

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
  public get(index: number): ManagementThreatProfileDeactivateProtectionsByExtendedAttributesValuesOutputReference {
    return new ManagementThreatProfileDeactivateProtectionsByExtendedAttributesValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementThreatProfileDeactivateProtectionsByExtendedAttributes {
  /**
  * IPS tag category name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#category ManagementThreatProfile#category}
  */
  readonly category?: string;
  /**
  * IPS tag name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#name ManagementThreatProfile#name}
  */
  readonly name?: string;
  /**
  * IPS tag unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#uid ManagementThreatProfile#uid}
  */
  readonly uid?: string;
}

export function managementThreatProfileDeactivateProtectionsByExtendedAttributesToTerraform(struct?: ManagementThreatProfileDeactivateProtectionsByExtendedAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    name: cdktf.stringToTerraform(struct!.name),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function managementThreatProfileDeactivateProtectionsByExtendedAttributesToHclTerraform(struct?: ManagementThreatProfileDeactivateProtectionsByExtendedAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
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
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementThreatProfileDeactivateProtectionsByExtendedAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementThreatProfileDeactivateProtectionsByExtendedAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementThreatProfileDeactivateProtectionsByExtendedAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
      this._name = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
      this._name = value.name;
      this._uid = value.uid;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // values - computed: true, optional: false, required: false
  private _values = new ManagementThreatProfileDeactivateProtectionsByExtendedAttributesValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
}

export class ManagementThreatProfileDeactivateProtectionsByExtendedAttributesList extends cdktf.ComplexList {
  public internalValue? : ManagementThreatProfileDeactivateProtectionsByExtendedAttributes[] | cdktf.IResolvable

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
  public get(index: number): ManagementThreatProfileDeactivateProtectionsByExtendedAttributesOutputReference {
    return new ManagementThreatProfileDeactivateProtectionsByExtendedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementThreatProfileIndicatorOverrides {
  /**
  * The indicator's action in this profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#action ManagementThreatProfile#action}
  */
  readonly action?: string;
  /**
  * The indicator whose action is to be overriden.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#indicator ManagementThreatProfile#indicator}
  */
  readonly indicator?: string;
}

export function managementThreatProfileIndicatorOverridesToTerraform(struct?: ManagementThreatProfileIndicatorOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    indicator: cdktf.stringToTerraform(struct!.indicator),
  }
}


export function managementThreatProfileIndicatorOverridesToHclTerraform(struct?: ManagementThreatProfileIndicatorOverrides | cdktf.IResolvable): any {
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
    indicator: {
      value: cdktf.stringToHclTerraform(struct!.indicator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementThreatProfileIndicatorOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementThreatProfileIndicatorOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._indicator !== undefined) {
      hasAnyValues = true;
      internalValueResult.indicator = this._indicator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementThreatProfileIndicatorOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._indicator = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._indicator = value.indicator;
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

  // indicator - computed: false, optional: true, required: false
  private _indicator?: string; 
  public get indicator() {
    return this.getStringAttribute('indicator');
  }
  public set indicator(value: string) {
    this._indicator = value;
  }
  public resetIndicator() {
    this._indicator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorInput() {
    return this._indicator;
  }
}

export class ManagementThreatProfileIndicatorOverridesList extends cdktf.ComplexList {
  public internalValue? : ManagementThreatProfileIndicatorOverrides[] | cdktf.IResolvable

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
  public get(index: number): ManagementThreatProfileIndicatorOverridesOutputReference {
    return new ManagementThreatProfileIndicatorOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ManagementThreatProfileOverrides {
  /**
  * Protection action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#action ManagementThreatProfile#action}
  */
  readonly action: string;
  /**
  * Capture packets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#capture_packets ManagementThreatProfile#capture_packets}
  */
  readonly capturePackets?: boolean | cdktf.IResolvable;
  /**
  * IPS protection identified by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#protection ManagementThreatProfile#protection}
  */
  readonly protection: string;
  /**
  * Tracking method for protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#track ManagementThreatProfile#track}
  */
  readonly track?: string;
}

export function managementThreatProfileOverridesToTerraform(struct?: ManagementThreatProfileOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    capture_packets: cdktf.booleanToTerraform(struct!.capturePackets),
    protection: cdktf.stringToTerraform(struct!.protection),
    track: cdktf.stringToTerraform(struct!.track),
  }
}


export function managementThreatProfileOverridesToHclTerraform(struct?: ManagementThreatProfileOverrides | cdktf.IResolvable): any {
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
    capture_packets: {
      value: cdktf.booleanToHclTerraform(struct!.capturePackets),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protection: {
      value: cdktf.stringToHclTerraform(struct!.protection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track: {
      value: cdktf.stringToHclTerraform(struct!.track),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementThreatProfileOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementThreatProfileOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._capturePackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.capturePackets = this._capturePackets;
    }
    if (this._protection !== undefined) {
      hasAnyValues = true;
      internalValueResult.protection = this._protection;
    }
    if (this._track !== undefined) {
      hasAnyValues = true;
      internalValueResult.track = this._track;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementThreatProfileOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._capturePackets = undefined;
      this._protection = undefined;
      this._track = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._capturePackets = value.capturePackets;
      this._protection = value.protection;
      this._track = value.track;
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

  // capture_packets - computed: false, optional: true, required: false
  private _capturePackets?: boolean | cdktf.IResolvable; 
  public get capturePackets() {
    return this.getBooleanAttribute('capture_packets');
  }
  public set capturePackets(value: boolean | cdktf.IResolvable) {
    this._capturePackets = value;
  }
  public resetCapturePackets() {
    this._capturePackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capturePacketsInput() {
    return this._capturePackets;
  }

  // default - computed: true, optional: false, required: false
  private _default = new cdktf.StringMap(this, "default");
  public get default() {
    return this._default;
  }

  // final - computed: true, optional: false, required: false
  private _final = new cdktf.StringMap(this, "final");
  public get final() {
    return this._final;
  }

  // protection - computed: false, optional: false, required: true
  private _protection?: string; 
  public get protection() {
    return this.getStringAttribute('protection');
  }
  public set protection(value: string) {
    this._protection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionInput() {
    return this._protection;
  }

  // protection_external_info - computed: true, optional: false, required: false
  public get protectionExternalInfo() {
    return cdktf.Fn.tolist(this.getListAttribute('protection_external_info'));
  }

  // protection_uid - computed: true, optional: false, required: false
  public get protectionUid() {
    return this.getStringAttribute('protection_uid');
  }

  // track - computed: false, optional: true, required: false
  private _track?: string; 
  public get track() {
    return this.getStringAttribute('track');
  }
  public set track(value: string) {
    this._track = value;
  }
  public resetTrack() {
    this._track = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackInput() {
    return this._track;
  }
}

export class ManagementThreatProfileOverridesList extends cdktf.ComplexList {
  public internalValue? : ManagementThreatProfileOverrides[] | cdktf.IResolvable

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
  public get(index: number): ManagementThreatProfileOverridesOutputReference {
    return new ManagementThreatProfileOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile checkpoint_management_threat_profile}
*/
export class ManagementThreatProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_threat_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementThreatProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementThreatProfile to import
  * @param importFromId The id of the existing ManagementThreatProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementThreatProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_threat_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_threat_profile checkpoint_management_threat_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementThreatProfileConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementThreatProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_threat_profile',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeProtectionsPerformanceImpact = config.activeProtectionsPerformanceImpact;
    this._activeProtectionsSeverity = config.activeProtectionsSeverity;
    this._antiBot = config.antiBot;
    this._antiVirus = config.antiVirus;
    this._color = config.color;
    this._comments = config.comments;
    this._confidenceLevelHigh = config.confidenceLevelHigh;
    this._confidenceLevelLow = config.confidenceLevelLow;
    this._confidenceLevelMedium = config.confidenceLevelMedium;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._ips = config.ips;
    this._ipsSettings = config.ipsSettings;
    this._maliciousMailPolicySettings = config.maliciousMailPolicySettings;
    this._name = config.name;
    this._scanMaliciousLinks = config.scanMaliciousLinks;
    this._tags = config.tags;
    this._threatEmulation = config.threatEmulation;
    this._threatExtraction = config.threatExtraction;
    this._useExtendedAttributes = config.useExtendedAttributes;
    this._useIndicators = config.useIndicators;
    this._zeroPhishing = config.zeroPhishing;
    this._deactivateProtectionsByExtendedAttributes.internalValue = config.deactivateProtectionsByExtendedAttributes;
    this._indicatorOverrides.internalValue = config.indicatorOverrides;
    this._overrides.internalValue = config.overrides;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activate_protections_by_extended_attributes - computed: true, optional: false, required: false
  private _activateProtectionsByExtendedAttributes = new ManagementThreatProfileActivateProtectionsByExtendedAttributesList(this, "activate_protections_by_extended_attributes", false);
  public get activateProtectionsByExtendedAttributes() {
    return this._activateProtectionsByExtendedAttributes;
  }

  // active_protections_performance_impact - computed: false, optional: true, required: false
  private _activeProtectionsPerformanceImpact?: string; 
  public get activeProtectionsPerformanceImpact() {
    return this.getStringAttribute('active_protections_performance_impact');
  }
  public set activeProtectionsPerformanceImpact(value: string) {
    this._activeProtectionsPerformanceImpact = value;
  }
  public resetActiveProtectionsPerformanceImpact() {
    this._activeProtectionsPerformanceImpact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeProtectionsPerformanceImpactInput() {
    return this._activeProtectionsPerformanceImpact;
  }

  // active_protections_severity - computed: false, optional: true, required: false
  private _activeProtectionsSeverity?: string; 
  public get activeProtectionsSeverity() {
    return this.getStringAttribute('active_protections_severity');
  }
  public set activeProtectionsSeverity(value: string) {
    this._activeProtectionsSeverity = value;
  }
  public resetActiveProtectionsSeverity() {
    this._activeProtectionsSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeProtectionsSeverityInput() {
    return this._activeProtectionsSeverity;
  }

  // anti_bot - computed: false, optional: true, required: false
  private _antiBot?: boolean | cdktf.IResolvable; 
  public get antiBot() {
    return this.getBooleanAttribute('anti_bot');
  }
  public set antiBot(value: boolean | cdktf.IResolvable) {
    this._antiBot = value;
  }
  public resetAntiBot() {
    this._antiBot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiBotInput() {
    return this._antiBot;
  }

  // anti_virus - computed: false, optional: true, required: false
  private _antiVirus?: boolean | cdktf.IResolvable; 
  public get antiVirus() {
    return this.getBooleanAttribute('anti_virus');
  }
  public set antiVirus(value: boolean | cdktf.IResolvable) {
    this._antiVirus = value;
  }
  public resetAntiVirus() {
    this._antiVirus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiVirusInput() {
    return this._antiVirus;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // confidence_level_high - computed: false, optional: true, required: false
  private _confidenceLevelHigh?: string; 
  public get confidenceLevelHigh() {
    return this.getStringAttribute('confidence_level_high');
  }
  public set confidenceLevelHigh(value: string) {
    this._confidenceLevelHigh = value;
  }
  public resetConfidenceLevelHigh() {
    this._confidenceLevelHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceLevelHighInput() {
    return this._confidenceLevelHigh;
  }

  // confidence_level_low - computed: false, optional: true, required: false
  private _confidenceLevelLow?: string; 
  public get confidenceLevelLow() {
    return this.getStringAttribute('confidence_level_low');
  }
  public set confidenceLevelLow(value: string) {
    this._confidenceLevelLow = value;
  }
  public resetConfidenceLevelLow() {
    this._confidenceLevelLow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceLevelLowInput() {
    return this._confidenceLevelLow;
  }

  // confidence_level_medium - computed: false, optional: true, required: false
  private _confidenceLevelMedium?: string; 
  public get confidenceLevelMedium() {
    return this.getStringAttribute('confidence_level_medium');
  }
  public set confidenceLevelMedium(value: string) {
    this._confidenceLevelMedium = value;
  }
  public resetConfidenceLevelMedium() {
    this._confidenceLevelMedium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidenceLevelMediumInput() {
    return this._confidenceLevelMedium;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // ips - computed: false, optional: true, required: false
  private _ips?: boolean | cdktf.IResolvable; 
  public get ips() {
    return this.getBooleanAttribute('ips');
  }
  public set ips(value: boolean | cdktf.IResolvable) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // ips_settings - computed: false, optional: true, required: false
  private _ipsSettings?: { [key: string]: string }; 
  public get ipsSettings() {
    return this.getStringMapAttribute('ips_settings');
  }
  public set ipsSettings(value: { [key: string]: string }) {
    this._ipsSettings = value;
  }
  public resetIpsSettings() {
    this._ipsSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsSettingsInput() {
    return this._ipsSettings;
  }

  // malicious_mail_policy_settings - computed: false, optional: true, required: false
  private _maliciousMailPolicySettings?: { [key: string]: string }; 
  public get maliciousMailPolicySettings() {
    return this.getStringMapAttribute('malicious_mail_policy_settings');
  }
  public set maliciousMailPolicySettings(value: { [key: string]: string }) {
    this._maliciousMailPolicySettings = value;
  }
  public resetMaliciousMailPolicySettings() {
    this._maliciousMailPolicySettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maliciousMailPolicySettingsInput() {
    return this._maliciousMailPolicySettings;
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

  // scan_malicious_links - computed: false, optional: true, required: false
  private _scanMaliciousLinks?: { [key: string]: string }; 
  public get scanMaliciousLinks() {
    return this.getStringMapAttribute('scan_malicious_links');
  }
  public set scanMaliciousLinks(value: { [key: string]: string }) {
    this._scanMaliciousLinks = value;
  }
  public resetScanMaliciousLinks() {
    this._scanMaliciousLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanMaliciousLinksInput() {
    return this._scanMaliciousLinks;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // threat_emulation - computed: false, optional: true, required: false
  private _threatEmulation?: boolean | cdktf.IResolvable; 
  public get threatEmulation() {
    return this.getBooleanAttribute('threat_emulation');
  }
  public set threatEmulation(value: boolean | cdktf.IResolvable) {
    this._threatEmulation = value;
  }
  public resetThreatEmulation() {
    this._threatEmulation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatEmulationInput() {
    return this._threatEmulation;
  }

  // threat_extraction - computed: false, optional: true, required: false
  private _threatExtraction?: boolean | cdktf.IResolvable; 
  public get threatExtraction() {
    return this.getBooleanAttribute('threat_extraction');
  }
  public set threatExtraction(value: boolean | cdktf.IResolvable) {
    this._threatExtraction = value;
  }
  public resetThreatExtraction() {
    this._threatExtraction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatExtractionInput() {
    return this._threatExtraction;
  }

  // use_extended_attributes - computed: false, optional: true, required: false
  private _useExtendedAttributes?: boolean | cdktf.IResolvable; 
  public get useExtendedAttributes() {
    return this.getBooleanAttribute('use_extended_attributes');
  }
  public set useExtendedAttributes(value: boolean | cdktf.IResolvable) {
    this._useExtendedAttributes = value;
  }
  public resetUseExtendedAttributes() {
    this._useExtendedAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useExtendedAttributesInput() {
    return this._useExtendedAttributes;
  }

  // use_indicators - computed: false, optional: true, required: false
  private _useIndicators?: boolean | cdktf.IResolvable; 
  public get useIndicators() {
    return this.getBooleanAttribute('use_indicators');
  }
  public set useIndicators(value: boolean | cdktf.IResolvable) {
    this._useIndicators = value;
  }
  public resetUseIndicators() {
    this._useIndicators = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIndicatorsInput() {
    return this._useIndicators;
  }

  // zero_phishing - computed: false, optional: true, required: false
  private _zeroPhishing?: boolean | cdktf.IResolvable; 
  public get zeroPhishing() {
    return this.getBooleanAttribute('zero_phishing');
  }
  public set zeroPhishing(value: boolean | cdktf.IResolvable) {
    this._zeroPhishing = value;
  }
  public resetZeroPhishing() {
    this._zeroPhishing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroPhishingInput() {
    return this._zeroPhishing;
  }

  // deactivate_protections_by_extended_attributes - computed: false, optional: true, required: false
  private _deactivateProtectionsByExtendedAttributes = new ManagementThreatProfileDeactivateProtectionsByExtendedAttributesList(this, "deactivate_protections_by_extended_attributes", false);
  public get deactivateProtectionsByExtendedAttributes() {
    return this._deactivateProtectionsByExtendedAttributes;
  }
  public putDeactivateProtectionsByExtendedAttributes(value: ManagementThreatProfileDeactivateProtectionsByExtendedAttributes[] | cdktf.IResolvable) {
    this._deactivateProtectionsByExtendedAttributes.internalValue = value;
  }
  public resetDeactivateProtectionsByExtendedAttributes() {
    this._deactivateProtectionsByExtendedAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deactivateProtectionsByExtendedAttributesInput() {
    return this._deactivateProtectionsByExtendedAttributes.internalValue;
  }

  // indicator_overrides - computed: false, optional: true, required: false
  private _indicatorOverrides = new ManagementThreatProfileIndicatorOverridesList(this, "indicator_overrides", false);
  public get indicatorOverrides() {
    return this._indicatorOverrides;
  }
  public putIndicatorOverrides(value: ManagementThreatProfileIndicatorOverrides[] | cdktf.IResolvable) {
    this._indicatorOverrides.internalValue = value;
  }
  public resetIndicatorOverrides() {
    this._indicatorOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorOverridesInput() {
    return this._indicatorOverrides.internalValue;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new ManagementThreatProfileOverridesList(this, "overrides", false);
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: ManagementThreatProfileOverrides[] | cdktf.IResolvable) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_protections_performance_impact: cdktf.stringToTerraform(this._activeProtectionsPerformanceImpact),
      active_protections_severity: cdktf.stringToTerraform(this._activeProtectionsSeverity),
      anti_bot: cdktf.booleanToTerraform(this._antiBot),
      anti_virus: cdktf.booleanToTerraform(this._antiVirus),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      confidence_level_high: cdktf.stringToTerraform(this._confidenceLevelHigh),
      confidence_level_low: cdktf.stringToTerraform(this._confidenceLevelLow),
      confidence_level_medium: cdktf.stringToTerraform(this._confidenceLevelMedium),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      ips: cdktf.booleanToTerraform(this._ips),
      ips_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._ipsSettings),
      malicious_mail_policy_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._maliciousMailPolicySettings),
      name: cdktf.stringToTerraform(this._name),
      scan_malicious_links: cdktf.hashMapper(cdktf.stringToTerraform)(this._scanMaliciousLinks),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      threat_emulation: cdktf.booleanToTerraform(this._threatEmulation),
      threat_extraction: cdktf.booleanToTerraform(this._threatExtraction),
      use_extended_attributes: cdktf.booleanToTerraform(this._useExtendedAttributes),
      use_indicators: cdktf.booleanToTerraform(this._useIndicators),
      zero_phishing: cdktf.booleanToTerraform(this._zeroPhishing),
      deactivate_protections_by_extended_attributes: cdktf.listMapper(managementThreatProfileDeactivateProtectionsByExtendedAttributesToTerraform, true)(this._deactivateProtectionsByExtendedAttributes.internalValue),
      indicator_overrides: cdktf.listMapper(managementThreatProfileIndicatorOverridesToTerraform, true)(this._indicatorOverrides.internalValue),
      overrides: cdktf.listMapper(managementThreatProfileOverridesToTerraform, true)(this._overrides.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_protections_performance_impact: {
        value: cdktf.stringToHclTerraform(this._activeProtectionsPerformanceImpact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      active_protections_severity: {
        value: cdktf.stringToHclTerraform(this._activeProtectionsSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      anti_bot: {
        value: cdktf.booleanToHclTerraform(this._antiBot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      anti_virus: {
        value: cdktf.booleanToHclTerraform(this._antiVirus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      confidence_level_high: {
        value: cdktf.stringToHclTerraform(this._confidenceLevelHigh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      confidence_level_low: {
        value: cdktf.stringToHclTerraform(this._confidenceLevelLow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      confidence_level_medium: {
        value: cdktf.stringToHclTerraform(this._confidenceLevelMedium),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ips: {
        value: cdktf.booleanToHclTerraform(this._ips),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ips_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._ipsSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      malicious_mail_policy_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._maliciousMailPolicySettings),
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
      scan_malicious_links: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._scanMaliciousLinks),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      threat_emulation: {
        value: cdktf.booleanToHclTerraform(this._threatEmulation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      threat_extraction: {
        value: cdktf.booleanToHclTerraform(this._threatExtraction),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_extended_attributes: {
        value: cdktf.booleanToHclTerraform(this._useExtendedAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_indicators: {
        value: cdktf.booleanToHclTerraform(this._useIndicators),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zero_phishing: {
        value: cdktf.booleanToHclTerraform(this._zeroPhishing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deactivate_protections_by_extended_attributes: {
        value: cdktf.listMapperHcl(managementThreatProfileDeactivateProtectionsByExtendedAttributesToHclTerraform, true)(this._deactivateProtectionsByExtendedAttributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementThreatProfileDeactivateProtectionsByExtendedAttributesList",
      },
      indicator_overrides: {
        value: cdktf.listMapperHcl(managementThreatProfileIndicatorOverridesToHclTerraform, true)(this._indicatorOverrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementThreatProfileIndicatorOverridesList",
      },
      overrides: {
        value: cdktf.listMapperHcl(managementThreatProfileOverridesToHclTerraform, true)(this._overrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementThreatProfileOverridesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
