// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FleetAppsManagementCompliancePolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule#compliance_policy_id FleetAppsManagementCompliancePolicyRule#compliance_policy_id}
  */
  readonly compliancePolicyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule#defined_tags FleetAppsManagementCompliancePolicyRule#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule#display_name FleetAppsManagementCompliancePolicyRule#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule#freeform_tags FleetAppsManagementCompliancePolicyRule#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule#grace_period FleetAppsManagementCompliancePolicyRule#grace_period}
  */
  readonly gracePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule#id FleetAppsManagementCompliancePolicyRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule#patch_type_id FleetAppsManagementCompliancePolicyRule#patch_type_id}
  */
  readonly patchTypeId: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule#severity FleetAppsManagementCompliancePolicyRule#severity}
  */
  readonly severity?: string[];
  /**
  * patch_selection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule#patch_selection FleetAppsManagementCompliancePolicyRule#patch_selection}
  */
  readonly patchSelection: FleetAppsManagementCompliancePolicyRulePatchSelection;
  /**
  * product_version block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule#product_version FleetAppsManagementCompliancePolicyRule#product_version}
  */
  readonly productVersion: FleetAppsManagementCompliancePolicyRuleProductVersion;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule#timeouts FleetAppsManagementCompliancePolicyRule#timeouts}
  */
  readonly timeouts?: FleetAppsManagementCompliancePolicyRuleTimeouts;
}
export interface FleetAppsManagementCompliancePolicyRulePatchSelection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule#days_since_release FleetAppsManagementCompliancePolicyRule#days_since_release}
  */
  readonly daysSinceRelease?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule#patch_level FleetAppsManagementCompliancePolicyRule#patch_level}
  */
  readonly patchLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule#patch_name FleetAppsManagementCompliancePolicyRule#patch_name}
  */
  readonly patchName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule#selection_type FleetAppsManagementCompliancePolicyRule#selection_type}
  */
  readonly selectionType: string;
}

export function fleetAppsManagementCompliancePolicyRulePatchSelectionToTerraform(struct?: FleetAppsManagementCompliancePolicyRulePatchSelectionOutputReference | FleetAppsManagementCompliancePolicyRulePatchSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days_since_release: cdktf.numberToTerraform(struct!.daysSinceRelease),
    patch_level: cdktf.stringToTerraform(struct!.patchLevel),
    patch_name: cdktf.stringToTerraform(struct!.patchName),
    selection_type: cdktf.stringToTerraform(struct!.selectionType),
  }
}


export function fleetAppsManagementCompliancePolicyRulePatchSelectionToHclTerraform(struct?: FleetAppsManagementCompliancePolicyRulePatchSelectionOutputReference | FleetAppsManagementCompliancePolicyRulePatchSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days_since_release: {
      value: cdktf.numberToHclTerraform(struct!.daysSinceRelease),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    patch_level: {
      value: cdktf.stringToHclTerraform(struct!.patchLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patch_name: {
      value: cdktf.stringToHclTerraform(struct!.patchName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection_type: {
      value: cdktf.stringToHclTerraform(struct!.selectionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementCompliancePolicyRulePatchSelectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementCompliancePolicyRulePatchSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daysSinceRelease !== undefined) {
      hasAnyValues = true;
      internalValueResult.daysSinceRelease = this._daysSinceRelease;
    }
    if (this._patchLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchLevel = this._patchLevel;
    }
    if (this._patchName !== undefined) {
      hasAnyValues = true;
      internalValueResult.patchName = this._patchName;
    }
    if (this._selectionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectionType = this._selectionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementCompliancePolicyRulePatchSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._daysSinceRelease = undefined;
      this._patchLevel = undefined;
      this._patchName = undefined;
      this._selectionType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._daysSinceRelease = value.daysSinceRelease;
      this._patchLevel = value.patchLevel;
      this._patchName = value.patchName;
      this._selectionType = value.selectionType;
    }
  }

  // days_since_release - computed: true, optional: true, required: false
  private _daysSinceRelease?: number; 
  public get daysSinceRelease() {
    return this.getNumberAttribute('days_since_release');
  }
  public set daysSinceRelease(value: number) {
    this._daysSinceRelease = value;
  }
  public resetDaysSinceRelease() {
    this._daysSinceRelease = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysSinceReleaseInput() {
    return this._daysSinceRelease;
  }

  // patch_level - computed: true, optional: true, required: false
  private _patchLevel?: string; 
  public get patchLevel() {
    return this.getStringAttribute('patch_level');
  }
  public set patchLevel(value: string) {
    this._patchLevel = value;
  }
  public resetPatchLevel() {
    this._patchLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchLevelInput() {
    return this._patchLevel;
  }

  // patch_name - computed: true, optional: true, required: false
  private _patchName?: string; 
  public get patchName() {
    return this.getStringAttribute('patch_name');
  }
  public set patchName(value: string) {
    this._patchName = value;
  }
  public resetPatchName() {
    this._patchName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchNameInput() {
    return this._patchName;
  }

  // selection_type - computed: false, optional: false, required: true
  private _selectionType?: string; 
  public get selectionType() {
    return this.getStringAttribute('selection_type');
  }
  public set selectionType(value: string) {
    this._selectionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionTypeInput() {
    return this._selectionType;
  }
}
export interface FleetAppsManagementCompliancePolicyRuleProductVersion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule#is_applicable_for_all_higher_versions FleetAppsManagementCompliancePolicyRule#is_applicable_for_all_higher_versions}
  */
  readonly isApplicableForAllHigherVersions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule#version FleetAppsManagementCompliancePolicyRule#version}
  */
  readonly version: string;
}

export function fleetAppsManagementCompliancePolicyRuleProductVersionToTerraform(struct?: FleetAppsManagementCompliancePolicyRuleProductVersionOutputReference | FleetAppsManagementCompliancePolicyRuleProductVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_applicable_for_all_higher_versions: cdktf.booleanToTerraform(struct!.isApplicableForAllHigherVersions),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function fleetAppsManagementCompliancePolicyRuleProductVersionToHclTerraform(struct?: FleetAppsManagementCompliancePolicyRuleProductVersionOutputReference | FleetAppsManagementCompliancePolicyRuleProductVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_applicable_for_all_higher_versions: {
      value: cdktf.booleanToHclTerraform(struct!.isApplicableForAllHigherVersions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementCompliancePolicyRuleProductVersionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FleetAppsManagementCompliancePolicyRuleProductVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isApplicableForAllHigherVersions !== undefined) {
      hasAnyValues = true;
      internalValueResult.isApplicableForAllHigherVersions = this._isApplicableForAllHigherVersions;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementCompliancePolicyRuleProductVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isApplicableForAllHigherVersions = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isApplicableForAllHigherVersions = value.isApplicableForAllHigherVersions;
      this._version = value.version;
    }
  }

  // is_applicable_for_all_higher_versions - computed: true, optional: true, required: false
  private _isApplicableForAllHigherVersions?: boolean | cdktf.IResolvable; 
  public get isApplicableForAllHigherVersions() {
    return this.getBooleanAttribute('is_applicable_for_all_higher_versions');
  }
  public set isApplicableForAllHigherVersions(value: boolean | cdktf.IResolvable) {
    this._isApplicableForAllHigherVersions = value;
  }
  public resetIsApplicableForAllHigherVersions() {
    this._isApplicableForAllHigherVersions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isApplicableForAllHigherVersionsInput() {
    return this._isApplicableForAllHigherVersions;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface FleetAppsManagementCompliancePolicyRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule#create FleetAppsManagementCompliancePolicyRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule#delete FleetAppsManagementCompliancePolicyRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule#update FleetAppsManagementCompliancePolicyRule#update}
  */
  readonly update?: string;
}

export function fleetAppsManagementCompliancePolicyRuleTimeoutsToTerraform(struct?: FleetAppsManagementCompliancePolicyRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function fleetAppsManagementCompliancePolicyRuleTimeoutsToHclTerraform(struct?: FleetAppsManagementCompliancePolicyRuleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FleetAppsManagementCompliancePolicyRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FleetAppsManagementCompliancePolicyRuleTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FleetAppsManagementCompliancePolicyRuleTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule oci_fleet_apps_management_compliance_policy_rule}
*/
export class FleetAppsManagementCompliancePolicyRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_compliance_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FleetAppsManagementCompliancePolicyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetAppsManagementCompliancePolicyRule to import
  * @param importFromId The id of the existing FleetAppsManagementCompliancePolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetAppsManagementCompliancePolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_compliance_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/fleet_apps_management_compliance_policy_rule oci_fleet_apps_management_compliance_policy_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetAppsManagementCompliancePolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: FleetAppsManagementCompliancePolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_compliance_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compliancePolicyId = config.compliancePolicyId;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._gracePeriod = config.gracePeriod;
    this._id = config.id;
    this._patchTypeId = config.patchTypeId;
    this._severity = config.severity;
    this._patchSelection.internalValue = config.patchSelection;
    this._productVersion.internalValue = config.productVersion;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compliance_policy_id - computed: false, optional: false, required: true
  private _compliancePolicyId?: string; 
  public get compliancePolicyId() {
    return this.getStringAttribute('compliance_policy_id');
  }
  public set compliancePolicyId(value: string) {
    this._compliancePolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compliancePolicyIdInput() {
    return this._compliancePolicyId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // grace_period - computed: true, optional: true, required: false
  private _gracePeriod?: string; 
  public get gracePeriod() {
    return this.getStringAttribute('grace_period');
  }
  public set gracePeriod(value: string) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // patch_type_id - computed: false, optional: false, required: true
  private _patchTypeId?: string[]; 
  public get patchTypeId() {
    return this.getListAttribute('patch_type_id');
  }
  public set patchTypeId(value: string[]) {
    this._patchTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchTypeIdInput() {
    return this._patchTypeId;
  }

  // severity - computed: true, optional: true, required: false
  private _severity?: string[]; 
  public get severity() {
    return this.getListAttribute('severity');
  }
  public set severity(value: string[]) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // patch_selection - computed: false, optional: false, required: true
  private _patchSelection = new FleetAppsManagementCompliancePolicyRulePatchSelectionOutputReference(this, "patch_selection");
  public get patchSelection() {
    return this._patchSelection;
  }
  public putPatchSelection(value: FleetAppsManagementCompliancePolicyRulePatchSelection) {
    this._patchSelection.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patchSelectionInput() {
    return this._patchSelection.internalValue;
  }

  // product_version - computed: false, optional: false, required: true
  private _productVersion = new FleetAppsManagementCompliancePolicyRuleProductVersionOutputReference(this, "product_version");
  public get productVersion() {
    return this._productVersion;
  }
  public putProductVersion(value: FleetAppsManagementCompliancePolicyRuleProductVersion) {
    this._productVersion.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productVersionInput() {
    return this._productVersion.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FleetAppsManagementCompliancePolicyRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FleetAppsManagementCompliancePolicyRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compliance_policy_id: cdktf.stringToTerraform(this._compliancePolicyId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      grace_period: cdktf.stringToTerraform(this._gracePeriod),
      id: cdktf.stringToTerraform(this._id),
      patch_type_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._patchTypeId),
      severity: cdktf.listMapper(cdktf.stringToTerraform, false)(this._severity),
      patch_selection: fleetAppsManagementCompliancePolicyRulePatchSelectionToTerraform(this._patchSelection.internalValue),
      product_version: fleetAppsManagementCompliancePolicyRuleProductVersionToTerraform(this._productVersion.internalValue),
      timeouts: fleetAppsManagementCompliancePolicyRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compliance_policy_id: {
        value: cdktf.stringToHclTerraform(this._compliancePolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      grace_period: {
        value: cdktf.stringToHclTerraform(this._gracePeriod),
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
      patch_type_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._patchTypeId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      severity: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._severity),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      patch_selection: {
        value: fleetAppsManagementCompliancePolicyRulePatchSelectionToHclTerraform(this._patchSelection.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementCompliancePolicyRulePatchSelectionList",
      },
      product_version: {
        value: fleetAppsManagementCompliancePolicyRuleProductVersionToHclTerraform(this._productVersion.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FleetAppsManagementCompliancePolicyRuleProductVersionList",
      },
      timeouts: {
        value: fleetAppsManagementCompliancePolicyRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FleetAppsManagementCompliancePolicyRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
