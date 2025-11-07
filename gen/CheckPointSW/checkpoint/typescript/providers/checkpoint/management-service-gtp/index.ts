// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementServiceGtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Match by Access Point Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#access_point_name ManagementServiceGtp#access_point_name}
  */
  readonly accessPointName?: { [key: string]: string };
  /**
  * Allow usage of static IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#allow_usage_of_static_ip ManagementServiceGtp#allow_usage_of_static_ip}
  */
  readonly allowUsageOfStaticIp?: boolean | cdktf.IResolvable;
  /**
  * Apply Access Policy on user traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#apply_access_policy_on_user_traffic ManagementServiceGtp#apply_access_policy_on_user_traffic}
  */
  readonly applyAccessPolicyOnUserTraffic?: { [key: string]: string };
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#color ManagementServiceGtp#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#comments ManagementServiceGtp#comments}
  */
  readonly comments?: string;
  /**
  * CS Fallback and SRVCC (Relevant for V2 only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#cs_fallback_and_srvcc ManagementServiceGtp#cs_fallback_and_srvcc}
  */
  readonly csFallbackAndSrvcc?: boolean | cdktf.IResolvable;
  /**
  * Collection of group identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#groups ManagementServiceGtp#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#id ManagementServiceGtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#ignore_errors ManagementServiceGtp#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#ignore_warnings ManagementServiceGtp#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Match by IMSI prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#imsi_prefix ManagementServiceGtp#imsi_prefix}
  */
  readonly imsiPrefix?: { [key: string]: string };
  /**
  * Match only message types relevant to the given GTP interface. Relevant only for GTP V1 or V2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#interface_profile ManagementServiceGtp#interface_profile}
  */
  readonly interfaceProfile?: { [key: string]: string };
  /**
  * Match by an LDAP Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#ldap_group ManagementServiceGtp#ldap_group}
  */
  readonly ldapGroup?: { [key: string]: string };
  /**
  * Match by an MS-ISDN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#ms_isdn ManagementServiceGtp#ms_isdn}
  */
  readonly msIsdn?: { [key: string]: string };
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#name ManagementServiceGtp#name}
  */
  readonly name: string;
  /**
  * Restoration and Recovery (Relevant for V2 only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#restoration_and_recovery ManagementServiceGtp#restoration_and_recovery}
  */
  readonly restorationAndRecovery?: boolean | cdktf.IResolvable;
  /**
  * Accept PDUs from the GGSN/PGW to the SGSN/SGW on a previously established PDP context, even if different ports are used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#reverse_service ManagementServiceGtp#reverse_service}
  */
  readonly reverseService?: boolean | cdktf.IResolvable;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#tags ManagementServiceGtp#tags}
  */
  readonly tags?: string[];
  /**
  * Trace Management (Relevant for V2 only).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#trace_management ManagementServiceGtp#trace_management}
  */
  readonly traceManagement?: boolean | cdktf.IResolvable;
  /**
  * GTP version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#version ManagementServiceGtp#version}
  */
  readonly version?: string;
  /**
  * radio_access_technology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#radio_access_technology ManagementServiceGtp#radio_access_technology}
  */
  readonly radioAccessTechnology?: ManagementServiceGtpRadioAccessTechnology;
  /**
  * selection_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#selection_mode ManagementServiceGtp#selection_mode}
  */
  readonly selectionMode?: ManagementServiceGtpSelectionMode;
}
export interface ManagementServiceGtpRadioAccessTechnologyOtherTypesRange {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#enable ManagementServiceGtp#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Other RAT Types. To specify other RAT ranges, add a hyphen between the lowest and the highest numbers, for example: 11-15. Multiple Ranges can be chosen when separated with comma.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#types ManagementServiceGtp#types}
  */
  readonly types?: string;
}

export function managementServiceGtpRadioAccessTechnologyOtherTypesRangeToTerraform(struct?: ManagementServiceGtpRadioAccessTechnologyOtherTypesRangeOutputReference | ManagementServiceGtpRadioAccessTechnologyOtherTypesRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    types: cdktf.stringToTerraform(struct!.types),
  }
}


export function managementServiceGtpRadioAccessTechnologyOtherTypesRangeToHclTerraform(struct?: ManagementServiceGtpRadioAccessTechnologyOtherTypesRangeOutputReference | ManagementServiceGtpRadioAccessTechnologyOtherTypesRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    types: {
      value: cdktf.stringToHclTerraform(struct!.types),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementServiceGtpRadioAccessTechnologyOtherTypesRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementServiceGtpRadioAccessTechnologyOtherTypesRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementServiceGtpRadioAccessTechnologyOtherTypesRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._types = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._types = value.types;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string; 
  public get types() {
    return this.getStringAttribute('types');
  }
  public set types(value: string) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}
export interface ManagementServiceGtpRadioAccessTechnology {
  /**
  * (6).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#eutran ManagementServiceGtp#eutran}
  */
  readonly eutran?: boolean | cdktf.IResolvable;
  /**
  * (4).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#gan ManagementServiceGtp#gan}
  */
  readonly gan?: boolean | cdktf.IResolvable;
  /**
  * (2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#geran ManagementServiceGtp#geran}
  */
  readonly geran?: boolean | cdktf.IResolvable;
  /**
  * (5).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#hspa_evolution ManagementServiceGtp#hspa_evolution}
  */
  readonly hspaEvolution?: boolean | cdktf.IResolvable;
  /**
  * (8).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#nb_iot ManagementServiceGtp#nb_iot}
  */
  readonly nbIot?: boolean | cdktf.IResolvable;
  /**
  * (1).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#utran ManagementServiceGtp#utran}
  */
  readonly utran?: boolean | cdktf.IResolvable;
  /**
  * (7).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#virtual ManagementServiceGtp#virtual}
  */
  readonly virtual?: boolean | cdktf.IResolvable;
  /**
  * (3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#wlan ManagementServiceGtp#wlan}
  */
  readonly wlan?: boolean | cdktf.IResolvable;
  /**
  * other_types_range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#other_types_range ManagementServiceGtp#other_types_range}
  */
  readonly otherTypesRange?: ManagementServiceGtpRadioAccessTechnologyOtherTypesRange;
}

export function managementServiceGtpRadioAccessTechnologyToTerraform(struct?: ManagementServiceGtpRadioAccessTechnologyOutputReference | ManagementServiceGtpRadioAccessTechnology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eutran: cdktf.booleanToTerraform(struct!.eutran),
    gan: cdktf.booleanToTerraform(struct!.gan),
    geran: cdktf.booleanToTerraform(struct!.geran),
    hspa_evolution: cdktf.booleanToTerraform(struct!.hspaEvolution),
    nb_iot: cdktf.booleanToTerraform(struct!.nbIot),
    utran: cdktf.booleanToTerraform(struct!.utran),
    virtual: cdktf.booleanToTerraform(struct!.virtual),
    wlan: cdktf.booleanToTerraform(struct!.wlan),
    other_types_range: managementServiceGtpRadioAccessTechnologyOtherTypesRangeToTerraform(struct!.otherTypesRange),
  }
}


export function managementServiceGtpRadioAccessTechnologyToHclTerraform(struct?: ManagementServiceGtpRadioAccessTechnologyOutputReference | ManagementServiceGtpRadioAccessTechnology): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eutran: {
      value: cdktf.booleanToHclTerraform(struct!.eutran),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gan: {
      value: cdktf.booleanToHclTerraform(struct!.gan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    geran: {
      value: cdktf.booleanToHclTerraform(struct!.geran),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    hspa_evolution: {
      value: cdktf.booleanToHclTerraform(struct!.hspaEvolution),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nb_iot: {
      value: cdktf.booleanToHclTerraform(struct!.nbIot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    utran: {
      value: cdktf.booleanToHclTerraform(struct!.utran),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    virtual: {
      value: cdktf.booleanToHclTerraform(struct!.virtual),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wlan: {
      value: cdktf.booleanToHclTerraform(struct!.wlan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    other_types_range: {
      value: managementServiceGtpRadioAccessTechnologyOtherTypesRangeToHclTerraform(struct!.otherTypesRange),
      isBlock: true,
      type: "list",
      storageClassType: "ManagementServiceGtpRadioAccessTechnologyOtherTypesRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementServiceGtpRadioAccessTechnologyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementServiceGtpRadioAccessTechnology | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eutran !== undefined) {
      hasAnyValues = true;
      internalValueResult.eutran = this._eutran;
    }
    if (this._gan !== undefined) {
      hasAnyValues = true;
      internalValueResult.gan = this._gan;
    }
    if (this._geran !== undefined) {
      hasAnyValues = true;
      internalValueResult.geran = this._geran;
    }
    if (this._hspaEvolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.hspaEvolution = this._hspaEvolution;
    }
    if (this._nbIot !== undefined) {
      hasAnyValues = true;
      internalValueResult.nbIot = this._nbIot;
    }
    if (this._utran !== undefined) {
      hasAnyValues = true;
      internalValueResult.utran = this._utran;
    }
    if (this._virtual !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtual = this._virtual;
    }
    if (this._wlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.wlan = this._wlan;
    }
    if (this._otherTypesRange?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherTypesRange = this._otherTypesRange?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementServiceGtpRadioAccessTechnology | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eutran = undefined;
      this._gan = undefined;
      this._geran = undefined;
      this._hspaEvolution = undefined;
      this._nbIot = undefined;
      this._utran = undefined;
      this._virtual = undefined;
      this._wlan = undefined;
      this._otherTypesRange.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eutran = value.eutran;
      this._gan = value.gan;
      this._geran = value.geran;
      this._hspaEvolution = value.hspaEvolution;
      this._nbIot = value.nbIot;
      this._utran = value.utran;
      this._virtual = value.virtual;
      this._wlan = value.wlan;
      this._otherTypesRange.internalValue = value.otherTypesRange;
    }
  }

  // eutran - computed: false, optional: true, required: false
  private _eutran?: boolean | cdktf.IResolvable; 
  public get eutran() {
    return this.getBooleanAttribute('eutran');
  }
  public set eutran(value: boolean | cdktf.IResolvable) {
    this._eutran = value;
  }
  public resetEutran() {
    this._eutran = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eutranInput() {
    return this._eutran;
  }

  // gan - computed: false, optional: true, required: false
  private _gan?: boolean | cdktf.IResolvable; 
  public get gan() {
    return this.getBooleanAttribute('gan');
  }
  public set gan(value: boolean | cdktf.IResolvable) {
    this._gan = value;
  }
  public resetGan() {
    this._gan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ganInput() {
    return this._gan;
  }

  // geran - computed: false, optional: true, required: false
  private _geran?: boolean | cdktf.IResolvable; 
  public get geran() {
    return this.getBooleanAttribute('geran');
  }
  public set geran(value: boolean | cdktf.IResolvable) {
    this._geran = value;
  }
  public resetGeran() {
    this._geran = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geranInput() {
    return this._geran;
  }

  // hspa_evolution - computed: false, optional: true, required: false
  private _hspaEvolution?: boolean | cdktf.IResolvable; 
  public get hspaEvolution() {
    return this.getBooleanAttribute('hspa_evolution');
  }
  public set hspaEvolution(value: boolean | cdktf.IResolvable) {
    this._hspaEvolution = value;
  }
  public resetHspaEvolution() {
    this._hspaEvolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hspaEvolutionInput() {
    return this._hspaEvolution;
  }

  // nb_iot - computed: false, optional: true, required: false
  private _nbIot?: boolean | cdktf.IResolvable; 
  public get nbIot() {
    return this.getBooleanAttribute('nb_iot');
  }
  public set nbIot(value: boolean | cdktf.IResolvable) {
    this._nbIot = value;
  }
  public resetNbIot() {
    this._nbIot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nbIotInput() {
    return this._nbIot;
  }

  // utran - computed: false, optional: true, required: false
  private _utran?: boolean | cdktf.IResolvable; 
  public get utran() {
    return this.getBooleanAttribute('utran');
  }
  public set utran(value: boolean | cdktf.IResolvable) {
    this._utran = value;
  }
  public resetUtran() {
    this._utran = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utranInput() {
    return this._utran;
  }

  // virtual - computed: false, optional: true, required: false
  private _virtual?: boolean | cdktf.IResolvable; 
  public get virtual() {
    return this.getBooleanAttribute('virtual');
  }
  public set virtual(value: boolean | cdktf.IResolvable) {
    this._virtual = value;
  }
  public resetVirtual() {
    this._virtual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualInput() {
    return this._virtual;
  }

  // wlan - computed: false, optional: true, required: false
  private _wlan?: boolean | cdktf.IResolvable; 
  public get wlan() {
    return this.getBooleanAttribute('wlan');
  }
  public set wlan(value: boolean | cdktf.IResolvable) {
    this._wlan = value;
  }
  public resetWlan() {
    this._wlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wlanInput() {
    return this._wlan;
  }

  // other_types_range - computed: false, optional: true, required: false
  private _otherTypesRange = new ManagementServiceGtpRadioAccessTechnologyOtherTypesRangeOutputReference(this, "other_types_range");
  public get otherTypesRange() {
    return this._otherTypesRange;
  }
  public putOtherTypesRange(value: ManagementServiceGtpRadioAccessTechnologyOtherTypesRange) {
    this._otherTypesRange.internalValue = value;
  }
  public resetOtherTypesRange() {
    this._otherTypesRange.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherTypesRangeInput() {
    return this._otherTypesRange.internalValue;
  }
}
export interface ManagementServiceGtpSelectionMode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#enable ManagementServiceGtp#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * The mode as integer. [0 - Verified, 1 - MS - Not verified, 2 - Network - Not verified].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#mode ManagementServiceGtp#mode}
  */
  readonly mode?: number;
}

export function managementServiceGtpSelectionModeToTerraform(struct?: ManagementServiceGtpSelectionModeOutputReference | ManagementServiceGtpSelectionMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.booleanToTerraform(struct!.enable),
    mode: cdktf.numberToTerraform(struct!.mode),
  }
}


export function managementServiceGtpSelectionModeToHclTerraform(struct?: ManagementServiceGtpSelectionModeOutputReference | ManagementServiceGtpSelectionMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementServiceGtpSelectionModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ManagementServiceGtpSelectionMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementServiceGtpSelectionMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._mode = value.mode;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp checkpoint_management_service_gtp}
*/
export class ManagementServiceGtp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_service_gtp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementServiceGtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementServiceGtp to import
  * @param importFromId The id of the existing ManagementServiceGtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementServiceGtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_service_gtp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_service_gtp checkpoint_management_service_gtp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementServiceGtpConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementServiceGtpConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_service_gtp',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessPointName = config.accessPointName;
    this._allowUsageOfStaticIp = config.allowUsageOfStaticIp;
    this._applyAccessPolicyOnUserTraffic = config.applyAccessPolicyOnUserTraffic;
    this._color = config.color;
    this._comments = config.comments;
    this._csFallbackAndSrvcc = config.csFallbackAndSrvcc;
    this._groups = config.groups;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._imsiPrefix = config.imsiPrefix;
    this._interfaceProfile = config.interfaceProfile;
    this._ldapGroup = config.ldapGroup;
    this._msIsdn = config.msIsdn;
    this._name = config.name;
    this._restorationAndRecovery = config.restorationAndRecovery;
    this._reverseService = config.reverseService;
    this._tags = config.tags;
    this._traceManagement = config.traceManagement;
    this._version = config.version;
    this._radioAccessTechnology.internalValue = config.radioAccessTechnology;
    this._selectionMode.internalValue = config.selectionMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_point_name - computed: false, optional: true, required: false
  private _accessPointName?: { [key: string]: string }; 
  public get accessPointName() {
    return this.getStringMapAttribute('access_point_name');
  }
  public set accessPointName(value: { [key: string]: string }) {
    this._accessPointName = value;
  }
  public resetAccessPointName() {
    this._accessPointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPointNameInput() {
    return this._accessPointName;
  }

  // allow_usage_of_static_ip - computed: false, optional: true, required: false
  private _allowUsageOfStaticIp?: boolean | cdktf.IResolvable; 
  public get allowUsageOfStaticIp() {
    return this.getBooleanAttribute('allow_usage_of_static_ip');
  }
  public set allowUsageOfStaticIp(value: boolean | cdktf.IResolvable) {
    this._allowUsageOfStaticIp = value;
  }
  public resetAllowUsageOfStaticIp() {
    this._allowUsageOfStaticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUsageOfStaticIpInput() {
    return this._allowUsageOfStaticIp;
  }

  // apply_access_policy_on_user_traffic - computed: false, optional: true, required: false
  private _applyAccessPolicyOnUserTraffic?: { [key: string]: string }; 
  public get applyAccessPolicyOnUserTraffic() {
    return this.getStringMapAttribute('apply_access_policy_on_user_traffic');
  }
  public set applyAccessPolicyOnUserTraffic(value: { [key: string]: string }) {
    this._applyAccessPolicyOnUserTraffic = value;
  }
  public resetApplyAccessPolicyOnUserTraffic() {
    this._applyAccessPolicyOnUserTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyAccessPolicyOnUserTrafficInput() {
    return this._applyAccessPolicyOnUserTraffic;
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

  // cs_fallback_and_srvcc - computed: false, optional: true, required: false
  private _csFallbackAndSrvcc?: boolean | cdktf.IResolvable; 
  public get csFallbackAndSrvcc() {
    return this.getBooleanAttribute('cs_fallback_and_srvcc');
  }
  public set csFallbackAndSrvcc(value: boolean | cdktf.IResolvable) {
    this._csFallbackAndSrvcc = value;
  }
  public resetCsFallbackAndSrvcc() {
    this._csFallbackAndSrvcc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csFallbackAndSrvccInput() {
    return this._csFallbackAndSrvcc;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // imsi_prefix - computed: false, optional: true, required: false
  private _imsiPrefix?: { [key: string]: string }; 
  public get imsiPrefix() {
    return this.getStringMapAttribute('imsi_prefix');
  }
  public set imsiPrefix(value: { [key: string]: string }) {
    this._imsiPrefix = value;
  }
  public resetImsiPrefix() {
    this._imsiPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imsiPrefixInput() {
    return this._imsiPrefix;
  }

  // interface_profile - computed: false, optional: true, required: false
  private _interfaceProfile?: { [key: string]: string }; 
  public get interfaceProfile() {
    return this.getStringMapAttribute('interface_profile');
  }
  public set interfaceProfile(value: { [key: string]: string }) {
    this._interfaceProfile = value;
  }
  public resetInterfaceProfile() {
    this._interfaceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceProfileInput() {
    return this._interfaceProfile;
  }

  // ldap_group - computed: false, optional: true, required: false
  private _ldapGroup?: { [key: string]: string }; 
  public get ldapGroup() {
    return this.getStringMapAttribute('ldap_group');
  }
  public set ldapGroup(value: { [key: string]: string }) {
    this._ldapGroup = value;
  }
  public resetLdapGroup() {
    this._ldapGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupInput() {
    return this._ldapGroup;
  }

  // ms_isdn - computed: false, optional: true, required: false
  private _msIsdn?: { [key: string]: string }; 
  public get msIsdn() {
    return this.getStringMapAttribute('ms_isdn');
  }
  public set msIsdn(value: { [key: string]: string }) {
    this._msIsdn = value;
  }
  public resetMsIsdn() {
    this._msIsdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msIsdnInput() {
    return this._msIsdn;
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

  // restoration_and_recovery - computed: false, optional: true, required: false
  private _restorationAndRecovery?: boolean | cdktf.IResolvable; 
  public get restorationAndRecovery() {
    return this.getBooleanAttribute('restoration_and_recovery');
  }
  public set restorationAndRecovery(value: boolean | cdktf.IResolvable) {
    this._restorationAndRecovery = value;
  }
  public resetRestorationAndRecovery() {
    this._restorationAndRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restorationAndRecoveryInput() {
    return this._restorationAndRecovery;
  }

  // reverse_service - computed: false, optional: true, required: false
  private _reverseService?: boolean | cdktf.IResolvable; 
  public get reverseService() {
    return this.getBooleanAttribute('reverse_service');
  }
  public set reverseService(value: boolean | cdktf.IResolvable) {
    this._reverseService = value;
  }
  public resetReverseService() {
    this._reverseService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseServiceInput() {
    return this._reverseService;
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

  // trace_management - computed: false, optional: true, required: false
  private _traceManagement?: boolean | cdktf.IResolvable; 
  public get traceManagement() {
    return this.getBooleanAttribute('trace_management');
  }
  public set traceManagement(value: boolean | cdktf.IResolvable) {
    this._traceManagement = value;
  }
  public resetTraceManagement() {
    this._traceManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceManagementInput() {
    return this._traceManagement;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // radio_access_technology - computed: false, optional: true, required: false
  private _radioAccessTechnology = new ManagementServiceGtpRadioAccessTechnologyOutputReference(this, "radio_access_technology");
  public get radioAccessTechnology() {
    return this._radioAccessTechnology;
  }
  public putRadioAccessTechnology(value: ManagementServiceGtpRadioAccessTechnology) {
    this._radioAccessTechnology.internalValue = value;
  }
  public resetRadioAccessTechnology() {
    this._radioAccessTechnology.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radioAccessTechnologyInput() {
    return this._radioAccessTechnology.internalValue;
  }

  // selection_mode - computed: false, optional: true, required: false
  private _selectionMode = new ManagementServiceGtpSelectionModeOutputReference(this, "selection_mode");
  public get selectionMode() {
    return this._selectionMode;
  }
  public putSelectionMode(value: ManagementServiceGtpSelectionMode) {
    this._selectionMode.internalValue = value;
  }
  public resetSelectionMode() {
    this._selectionMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionModeInput() {
    return this._selectionMode.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_point_name: cdktf.hashMapper(cdktf.stringToTerraform)(this._accessPointName),
      allow_usage_of_static_ip: cdktf.booleanToTerraform(this._allowUsageOfStaticIp),
      apply_access_policy_on_user_traffic: cdktf.hashMapper(cdktf.stringToTerraform)(this._applyAccessPolicyOnUserTraffic),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      cs_fallback_and_srvcc: cdktf.booleanToTerraform(this._csFallbackAndSrvcc),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      imsi_prefix: cdktf.hashMapper(cdktf.stringToTerraform)(this._imsiPrefix),
      interface_profile: cdktf.hashMapper(cdktf.stringToTerraform)(this._interfaceProfile),
      ldap_group: cdktf.hashMapper(cdktf.stringToTerraform)(this._ldapGroup),
      ms_isdn: cdktf.hashMapper(cdktf.stringToTerraform)(this._msIsdn),
      name: cdktf.stringToTerraform(this._name),
      restoration_and_recovery: cdktf.booleanToTerraform(this._restorationAndRecovery),
      reverse_service: cdktf.booleanToTerraform(this._reverseService),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      trace_management: cdktf.booleanToTerraform(this._traceManagement),
      version: cdktf.stringToTerraform(this._version),
      radio_access_technology: managementServiceGtpRadioAccessTechnologyToTerraform(this._radioAccessTechnology.internalValue),
      selection_mode: managementServiceGtpSelectionModeToTerraform(this._selectionMode.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_point_name: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._accessPointName),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      allow_usage_of_static_ip: {
        value: cdktf.booleanToHclTerraform(this._allowUsageOfStaticIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      apply_access_policy_on_user_traffic: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._applyAccessPolicyOnUserTraffic),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      cs_fallback_and_srvcc: {
        value: cdktf.booleanToHclTerraform(this._csFallbackAndSrvcc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      imsi_prefix: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._imsiPrefix),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      interface_profile: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._interfaceProfile),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ldap_group: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._ldapGroup),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      ms_isdn: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._msIsdn),
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
      restoration_and_recovery: {
        value: cdktf.booleanToHclTerraform(this._restorationAndRecovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reverse_service: {
        value: cdktf.booleanToHclTerraform(this._reverseService),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      trace_management: {
        value: cdktf.booleanToHclTerraform(this._traceManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radio_access_technology: {
        value: managementServiceGtpRadioAccessTechnologyToHclTerraform(this._radioAccessTechnology.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementServiceGtpRadioAccessTechnologyList",
      },
      selection_mode: {
        value: managementServiceGtpSelectionModeToHclTerraform(this._selectionMode.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementServiceGtpSelectionModeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
