// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_compliance_policy_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciFleetAppsManagementCompliancePolicyRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_compliance_policy_rules#compartment_id DataOciFleetAppsManagementCompliancePolicyRules#compartment_id}
  */
  readonly compartmentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_compliance_policy_rules#compliance_policy_id DataOciFleetAppsManagementCompliancePolicyRules#compliance_policy_id}
  */
  readonly compliancePolicyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_compliance_policy_rules#display_name DataOciFleetAppsManagementCompliancePolicyRules#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_compliance_policy_rules#id DataOciFleetAppsManagementCompliancePolicyRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_compliance_policy_rules#patch_name DataOciFleetAppsManagementCompliancePolicyRules#patch_name}
  */
  readonly patchName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_compliance_policy_rules#state DataOciFleetAppsManagementCompliancePolicyRules#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_compliance_policy_rules#filter DataOciFleetAppsManagementCompliancePolicyRules#filter}
  */
  readonly filter?: DataOciFleetAppsManagementCompliancePolicyRulesFilter[] | cdktf.IResolvable;
}
export interface DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsPatchSelection {
}

export function dataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsPatchSelectionToTerraform(struct?: DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsPatchSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsPatchSelectionToHclTerraform(struct?: DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsPatchSelection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsPatchSelectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsPatchSelection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsPatchSelection | undefined) {
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

export class DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsPatchSelectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsPatchSelectionOutputReference {
    return new DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsPatchSelectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsProductVersion {
}

export function dataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsProductVersionToTerraform(struct?: DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsProductVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsProductVersionToHclTerraform(struct?: DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsProductVersion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsProductVersionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsProductVersion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsProductVersion | undefined) {
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

export class DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsProductVersionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsProductVersionOutputReference {
    return new DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsProductVersionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItems {
}

export function dataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsToTerraform(struct?: DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsToHclTerraform(struct?: DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // compliance_policy_id - computed: true, optional: false, required: false
  public get compliancePolicyId() {
    return this.getStringAttribute('compliance_policy_id');
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
  private _patchSelection = new DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsPatchSelectionList(this, "patch_selection", false);
  public get patchSelection() {
    return this._patchSelection;
  }

  // patch_type_id - computed: true, optional: false, required: false
  public get patchTypeId() {
    return this.getListAttribute('patch_type_id');
  }

  // product_version - computed: true, optional: false, required: false
  private _productVersion = new DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsProductVersionList(this, "product_version", false);
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
}

export class DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsOutputReference {
    return new DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollection {
}

export function dataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionToTerraform(struct?: DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionToHclTerraform(struct?: DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionOutputReference {
    return new DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciFleetAppsManagementCompliancePolicyRulesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_compliance_policy_rules#name DataOciFleetAppsManagementCompliancePolicyRules#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_compliance_policy_rules#regex DataOciFleetAppsManagementCompliancePolicyRules#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_compliance_policy_rules#values DataOciFleetAppsManagementCompliancePolicyRules#values}
  */
  readonly values: string[];
}

export function dataOciFleetAppsManagementCompliancePolicyRulesFilterToTerraform(struct?: DataOciFleetAppsManagementCompliancePolicyRulesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciFleetAppsManagementCompliancePolicyRulesFilterToHclTerraform(struct?: DataOciFleetAppsManagementCompliancePolicyRulesFilter | cdktf.IResolvable): any {
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
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciFleetAppsManagementCompliancePolicyRulesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciFleetAppsManagementCompliancePolicyRulesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciFleetAppsManagementCompliancePolicyRulesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciFleetAppsManagementCompliancePolicyRulesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciFleetAppsManagementCompliancePolicyRulesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciFleetAppsManagementCompliancePolicyRulesFilterOutputReference {
    return new DataOciFleetAppsManagementCompliancePolicyRulesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_compliance_policy_rules oci_fleet_apps_management_compliance_policy_rules}
*/
export class DataOciFleetAppsManagementCompliancePolicyRules extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_fleet_apps_management_compliance_policy_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciFleetAppsManagementCompliancePolicyRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciFleetAppsManagementCompliancePolicyRules to import
  * @param importFromId The id of the existing DataOciFleetAppsManagementCompliancePolicyRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_compliance_policy_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciFleetAppsManagementCompliancePolicyRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_fleet_apps_management_compliance_policy_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/fleet_apps_management_compliance_policy_rules oci_fleet_apps_management_compliance_policy_rules} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciFleetAppsManagementCompliancePolicyRulesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOciFleetAppsManagementCompliancePolicyRulesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oci_fleet_apps_management_compliance_policy_rules',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._compliancePolicyId = config.compliancePolicyId;
    this._displayName = config.displayName;
    this._id = config.id;
    this._patchName = config.patchName;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: true, required: false
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  public resetCompartmentId() {
    this._compartmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // compliance_policy_id - computed: false, optional: true, required: false
  private _compliancePolicyId?: string; 
  public get compliancePolicyId() {
    return this.getStringAttribute('compliance_policy_id');
  }
  public set compliancePolicyId(value: string) {
    this._compliancePolicyId = value;
  }
  public resetCompliancePolicyId() {
    this._compliancePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compliancePolicyIdInput() {
    return this._compliancePolicyId;
  }

  // compliance_policy_rule_collection - computed: true, optional: false, required: false
  private _compliancePolicyRuleCollection = new DataOciFleetAppsManagementCompliancePolicyRulesCompliancePolicyRuleCollectionList(this, "compliance_policy_rule_collection", false);
  public get compliancePolicyRuleCollection() {
    return this._compliancePolicyRuleCollection;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: false, optional: true, required: false
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

  // patch_name - computed: false, optional: true, required: false
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciFleetAppsManagementCompliancePolicyRulesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciFleetAppsManagementCompliancePolicyRulesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compliance_policy_id: cdktf.stringToTerraform(this._compliancePolicyId),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      patch_name: cdktf.stringToTerraform(this._patchName),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciFleetAppsManagementCompliancePolicyRulesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compliance_policy_id: {
        value: cdktf.stringToHclTerraform(this._compliancePolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      patch_name: {
        value: cdktf.stringToHclTerraform(this._patchName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciFleetAppsManagementCompliancePolicyRulesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciFleetAppsManagementCompliancePolicyRulesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
