// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fleet_apps_management_compliance_policy_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFleetAppsManagementCompliancePolicyRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fleet_apps_management_compliance_policy_rule#compliance_policy_rule_id DataOciFleetAppsManagementCompliancePolicyRule#compliance_policy_rule_id}
  */
  readonly compliancePolicyRuleId: string;
}
export interface DataOciFleetAppsManagementCompliancePolicyRulePatchSelection {
}

export function dataOciFleetAppsManagementCompliancePolicyRulePatchSelectionToTerraform(struct?: DataOciFleetAppsManagementCompliancePolicyRulePatchSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementCompliancePolicyRulePatchSelectionToHclTerraform(struct?: DataOciFleetAppsManagementCompliancePolicyRulePatchSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementCompliancePolicyRulePatchSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementCompliancePolicyRulePatchSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementCompliancePolicyRulePatchSelection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // days_since_release - computed: true, optional: false, required: false
  public get daysSinceRelease() {
    return this.getNumberAttribute('days_since_release');
  }

  // patch_level - computed: true, optional: false, required: false
  public get patchLevel() {
    return this.getStringAttribute('patch_level');
  }

  // patch_name - computed: true, optional: false, required: false
  public get patchName() {
    return this.getStringAttribute('patch_name');
  }

  // selection_type - computed: true, optional: false, required: false
  public get selectionType() {
    return this.getStringAttribute('selection_type');
  }
}

export class DataOciFleetAppsManagementCompliancePolicyRulePatchSelectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementCompliancePolicyRulePatchSelectionOutputReference {
    return new DataOciFleetAppsManagementCompliancePolicyRulePatchSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementCompliancePolicyRuleProductVersion {
}

export function dataOciFleetAppsManagementCompliancePolicyRuleProductVersionToTerraform(struct?: DataOciFleetAppsManagementCompliancePolicyRuleProductVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementCompliancePolicyRuleProductVersionToHclTerraform(struct?: DataOciFleetAppsManagementCompliancePolicyRuleProductVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementCompliancePolicyRuleProductVersionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementCompliancePolicyRuleProductVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementCompliancePolicyRuleProductVersion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_applicable_for_all_higher_versions - computed: true, optional: false, required: false
  public get isApplicableForAllHigherVersions() {
    return this.getBooleanAttribute('is_applicable_for_all_higher_versions');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataOciFleetAppsManagementCompliancePolicyRuleProductVersionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementCompliancePolicyRuleProductVersionOutputReference {
    return new DataOciFleetAppsManagementCompliancePolicyRuleProductVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fleet_apps_management_compliance_policy_rule oci_fleet_apps_management_compliance_policy_rule}
*/
export class DataOciFleetAppsManagementCompliancePolicyRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_compliance_policy_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFleetAppsManagementCompliancePolicyRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFleetAppsManagementCompliancePolicyRule to import
  * @param importFromId The id of the existing DataOciFleetAppsManagementCompliancePolicyRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fleet_apps_management_compliance_policy_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFleetAppsManagementCompliancePolicyRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_compliance_policy_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/fleet_apps_management_compliance_policy_rule oci_fleet_apps_management_compliance_policy_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFleetAppsManagementCompliancePolicyRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciFleetAppsManagementCompliancePolicyRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_compliance_policy_rule',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compliancePolicyRuleId = config.compliancePolicyRuleId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compliance_policy_id - computed: true, optional: false, required: false
  public get compliancePolicyId() {
    return this.getStringAttribute('compliance_policy_id');
  }

  // compliance_policy_rule_id - computed: false, optional: false, required: true
  private _compliancePolicyRuleId?: string; 
  public get compliancePolicyRuleId() {
    return this.getStringAttribute('compliance_policy_rule_id');
  }
  public set compliancePolicyRuleId(value: string) {
    this._compliancePolicyRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compliancePolicyRuleIdInput() {
    return this._compliancePolicyRuleId;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // grace_period - computed: true, optional: false, required: false
  public get gracePeriod() {
    return this.getStringAttribute('grace_period');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // patch_selection - computed: true, optional: false, required: false
  private _patchSelection = new DataOciFleetAppsManagementCompliancePolicyRulePatchSelectionList(this, "patch_selection", false);
  public get patchSelection() {
    return this._patchSelection;
  }

  // patch_type_id - computed: true, optional: false, required: false
  public get patchTypeId() {
    return this.getListAttribute('patch_type_id');
  }

  // product_version - computed: true, optional: false, required: false
  private _productVersion = new DataOciFleetAppsManagementCompliancePolicyRuleProductVersionList(this, "product_version", false);
  public get productVersion() {
    return this._productVersion;
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getListAttribute('severity');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compliance_policy_rule_id: cdktf.stringToTerraform(this._compliancePolicyRuleId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compliance_policy_rule_id: {
        value: cdktf.stringToHclTerraform(this._compliancePolicyRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
