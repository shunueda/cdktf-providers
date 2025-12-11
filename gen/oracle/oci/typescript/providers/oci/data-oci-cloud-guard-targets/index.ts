// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_guard_targets
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCloudGuardTargetsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_guard_targets#access_level DataOciCloudGuardTargets#access_level}
  */
  readonly accessLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_guard_targets#compartment_id DataOciCloudGuardTargets#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_guard_targets#compartment_id_in_subtree DataOciCloudGuardTargets#compartment_id_in_subtree}
  */
  readonly compartmentIdInSubtree?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_guard_targets#display_name DataOciCloudGuardTargets#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_guard_targets#id DataOciCloudGuardTargets#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_guard_targets#is_non_security_zone_targets_only_query DataOciCloudGuardTargets#is_non_security_zone_targets_only_query}
  */
  readonly isNonSecurityZoneTargetsOnlyQuery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_guard_targets#state DataOciCloudGuardTargets#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_guard_targets#filter DataOciCloudGuardTargets#filter}
  */
  readonly filter?: DataOciCloudGuardTargetsFilter[] | cdktf.IResolvable;
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipes | undefined) {
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

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // security_policies - computed: true, optional: false, required: false
  public get securityPolicies() {
    return this.getListAttribute('security_policies');
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

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // security_zone_display_name - computed: true, optional: false, required: false
  public get securityZoneDisplayName() {
    return this.getStringAttribute('security_zone_display_name');
  }

  // security_zone_id - computed: true, optional: false, required: false
  public get securityZoneId() {
    return this.getStringAttribute('security_zone_id');
  }

  // target_resource_type - computed: true, optional: false, required: false
  public get targetResourceType() {
    return this.getStringAttribute('target_resource_type');
  }

  // target_security_zone_recipes - computed: true, optional: false, required: false
  private _targetSecurityZoneRecipes = new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsTargetSecurityZoneRecipesList(this, "target_security_zone_recipes", false);
  public get targetSecurityZoneRecipes() {
    return this._targetSecurityZoneRecipes;
  }
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroups | undefined) {
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

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalProperties {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalPropertiesToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalPropertiesToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValues {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValuesToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValuesToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValuesOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // list_type - computed: true, optional: false, required: false
  public get listType() {
    return this.getStringAttribute('list_type');
  }

  // managed_list_type - computed: true, optional: false, required: false
  public get managedListType() {
    return this.getStringAttribute('managed_list_type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAdditionalPropertiesList(this, "additional_properties", false);
  public get additionalProperties() {
    return this._additionalProperties;
  }

  // allowed_values - computed: true, optional: false, required: false
  private _allowedValues = new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsAllowedValuesList(this, "allowed_values", false);
  public get allowedValues() {
    return this._allowedValues;
  }

  // allowed_values_data_type - computed: true, optional: false, required: false
  public get allowedValuesDataType() {
    return this.getStringAttribute('allowed_values_data_type');
  }

  // config_key - computed: true, optional: false, required: false
  public get configKey() {
    return this.getStringAttribute('config_key');
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // values - computed: true, optional: false, required: false
  private _values = new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_groups - computed: true, optional: false, required: false
  private _conditionGroups = new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList(this, "condition_groups", false);
  public get conditionGroups() {
    return this._conditionGroups;
  }

  // configurations - computed: true, optional: false, required: false
  private _configurations = new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsConfigurationsList(this, "configurations", false);
  public get configurations() {
    return this._configurations;
  }

  // is_configuration_allowed - computed: true, optional: false, required: false
  public get isConfigurationAllowed() {
    return this.getBooleanAttribute('is_configuration_allowed');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getListAttribute('labels');
  }

  // risk_level - computed: true, optional: false, required: false
  public get riskLevel() {
    return this.getStringAttribute('risk_level');
  }
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // query_field - computed: true, optional: false, required: false
  public get queryField() {
    return this.getStringAttribute('query_field');
  }
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesRuleType {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesRuleTypeToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesRuleTypeToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesRuleTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesRuleType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesRuleType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesRuleTypeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesRuleTypeOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesRuleTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_id - computed: true, optional: false, required: false
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // details - computed: true, optional: false, required: false
  private _details = new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesDetailsList(this, "details", false);
  public get details() {
    return this._details;
  }

  // detector - computed: true, optional: false, required: false
  public get detector() {
    return this.getStringAttribute('detector');
  }

  // detector_rule_id - computed: true, optional: false, required: false
  public get detectorRuleId() {
    return this.getStringAttribute('detector_rule_id');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // entities_mappings - computed: true, optional: false, required: false
  private _entitiesMappings = new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesEntitiesMappingsList(this, "entities_mappings", false);
  public get entitiesMappings() {
    return this._entitiesMappings;
  }

  // is_cloneable - computed: true, optional: false, required: false
  public get isCloneable() {
    return this.getBooleanAttribute('is_cloneable');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // managed_list_types - computed: true, optional: false, required: false
  public get managedListTypes() {
    return this.getListAttribute('managed_list_types');
  }

  // recommendation - computed: true, optional: false, required: false
  public get recommendation() {
    return this.getStringAttribute('recommendation');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // rule_type - computed: true, optional: false, required: false
  private _ruleType = new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesRuleTypeList(this, "rule_type", false);
  public get ruleType() {
    return this._ruleType;
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups | undefined) {
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

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // property_type - computed: true, optional: false, required: false
  public get propertyType() {
    return this.getStringAttribute('property_type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValues {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValuesToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValuesToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValuesOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // list_type - computed: true, optional: false, required: false
  public get listType() {
    return this.getStringAttribute('list_type');
  }

  // managed_list_type - computed: true, optional: false, required: false
  public get managedListType() {
    return this.getStringAttribute('managed_list_type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_properties - computed: true, optional: false, required: false
  private _additionalProperties = new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAdditionalPropertiesList(this, "additional_properties", false);
  public get additionalProperties() {
    return this._additionalProperties;
  }

  // allowed_values - computed: true, optional: false, required: false
  private _allowedValues = new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsAllowedValuesList(this, "allowed_values", false);
  public get allowedValues() {
    return this._allowedValues;
  }

  // allowed_values_data_type - computed: true, optional: false, required: false
  public get allowedValuesDataType() {
    return this.getStringAttribute('allowed_values_data_type');
  }

  // config_key - computed: true, optional: false, required: false
  public get configKey() {
    return this.getStringAttribute('config_key');
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // values - computed: true, optional: false, required: false
  private _values = new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList(this, "values", false);
  public get values() {
    return this._values;
  }
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_groups - computed: true, optional: false, required: false
  private _conditionGroups = new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList(this, "condition_groups", false);
  public get conditionGroups() {
    return this._conditionGroups;
  }

  // configurations - computed: true, optional: false, required: false
  private _configurations = new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList(this, "configurations", false);
  public get configurations() {
    return this._configurations;
  }

  // is_configuration_allowed - computed: true, optional: false, required: false
  public get isConfigurationAllowed() {
    return this.getBooleanAttribute('is_configuration_allowed');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getListAttribute('labels');
  }

  // risk_level - computed: true, optional: false, required: false
  public get riskLevel() {
    return this.getStringAttribute('risk_level');
  }
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // entity_type - computed: true, optional: false, required: false
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }

  // query_field - computed: true, optional: false, required: false
  public get queryField() {
    return this.getStringAttribute('query_field');
  }
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesRuleType {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesRuleTypeToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesRuleTypeToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesRuleType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesRuleTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesRuleType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesRuleType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getListAttribute('value');
  }
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesRuleTypeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesRuleTypeOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesRuleTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // data_source_id - computed: true, optional: false, required: false
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // details - computed: true, optional: false, required: false
  private _details = new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesDetailsList(this, "details", false);
  public get details() {
    return this._details;
  }

  // detector - computed: true, optional: false, required: false
  public get detector() {
    return this.getStringAttribute('detector');
  }

  // detector_rule_id - computed: true, optional: false, required: false
  public get detectorRuleId() {
    return this.getStringAttribute('detector_rule_id');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // entities_mappings - computed: true, optional: false, required: false
  private _entitiesMappings = new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList(this, "entities_mappings", false);
  public get entitiesMappings() {
    return this._entitiesMappings;
  }

  // is_cloneable - computed: true, optional: false, required: false
  public get isCloneable() {
    return this.getBooleanAttribute('is_cloneable');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // managed_list_types - computed: true, optional: false, required: false
  public get managedListTypes() {
    return this.getListAttribute('managed_list_types');
  }

  // recommendation - computed: true, optional: false, required: false
  public get recommendation() {
    return this.getStringAttribute('recommendation');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // rule_type - computed: true, optional: false, required: false
  private _ruleType = new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesRuleTypeList(this, "rule_type", false);
  public get ruleType() {
    return this._ruleType;
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipes | undefined) {
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // detector - computed: true, optional: false, required: false
  public get detector() {
    return this.getStringAttribute('detector');
  }

  // detector_recipe_id - computed: true, optional: false, required: false
  public get detectorRecipeId() {
    return this.getStringAttribute('detector_recipe_id');
  }

  // detector_recipe_type - computed: true, optional: false, required: false
  public get detectorRecipeType() {
    return this.getStringAttribute('detector_recipe_type');
  }

  // detector_rules - computed: true, optional: false, required: false
  private _detectorRules = new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesDetectorRulesList(this, "detector_rules", false);
  public get detectorRules() {
    return this._detectorRules;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // effective_detector_rules - computed: true, optional: false, required: false
  private _effectiveDetectorRules = new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesEffectiveDetectorRulesList(this, "effective_detector_rules", false);
  public get effectiveDetectorRules() {
    return this._effectiveDetectorRules;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_key - computed: true, optional: false, required: false
  public get configKey() {
    return this.getStringAttribute('config_key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // configurations - computed: true, optional: false, required: false
  private _configurations = new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList(this, "configurations", false);
  public get configurations() {
    return this._configurations;
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRules | undefined) {
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // details - computed: true, optional: false, required: false
  private _details = new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesDetailsList(this, "details", false);
  public get details() {
    return this._details;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // policies - computed: true, optional: false, required: false
  public get policies() {
    return this.getListAttribute('policies');
  }

  // responder_rule_id - computed: true, optional: false, required: false
  public get responderRuleId() {
    return this.getStringAttribute('responder_rule_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // supported_modes - computed: true, optional: false, required: false
  public get supportedModes() {
    return this.getListAttribute('supported_modes');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_key - computed: true, optional: false, required: false
  public get configKey() {
    return this.getStringAttribute('config_key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // configurations - computed: true, optional: false, required: false
  private _configurations = new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsConfigurationsList(this, "configurations", false);
  public get configurations() {
    return this._configurations;
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRules | undefined) {
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // details - computed: true, optional: false, required: false
  private _details = new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesDetailsList(this, "details", false);
  public get details() {
    return this._details;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // policies - computed: true, optional: false, required: false
  public get policies() {
    return this.getListAttribute('policies');
  }

  // responder_rule_id - computed: true, optional: false, required: false
  public get responderRuleId() {
    return this.getStringAttribute('responder_rule_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // supported_modes - computed: true, optional: false, required: false
  public get supportedModes() {
    return this.getListAttribute('supported_modes');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipes | undefined) {
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

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // effective_responder_rules - computed: true, optional: false, required: false
  private _effectiveResponderRules = new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesEffectiveResponderRulesList(this, "effective_responder_rules", false);
  public get effectiveResponderRules() {
    return this._effectiveResponderRules;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // responder_recipe_id - computed: true, optional: false, required: false
  public get responderRecipeId() {
    return this.getStringAttribute('responder_recipe_id');
  }

  // responder_rules - computed: true, optional: false, required: false
  private _responderRules = new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesResponderRulesList(this, "responder_rules", false);
  public get responderRules() {
    return this._responderRules;
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

export class DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollectionItems {
}

export function dataOciCloudGuardTargetsTargetCollectionItemsToTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionItemsToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollectionItems | undefined) {
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

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inherited_by_compartments - computed: true, optional: false, required: false
  public get inheritedByCompartments() {
    return this.getListAttribute('inherited_by_compartments');
  }

  // lifecyle_details - computed: true, optional: false, required: false
  public get lifecyleDetails() {
    return this.getStringAttribute('lifecyle_details');
  }

  // recipe_count - computed: true, optional: false, required: false
  public get recipeCount() {
    return this.getNumberAttribute('recipe_count');
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

  // target_details - computed: true, optional: false, required: false
  private _targetDetails = new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetailsList(this, "target_details", false);
  public get targetDetails() {
    return this._targetDetails;
  }

  // target_detector_recipes - computed: true, optional: false, required: false
  private _targetDetectorRecipes = new DataOciCloudGuardTargetsTargetCollectionItemsTargetDetectorRecipesList(this, "target_detector_recipes", false);
  public get targetDetectorRecipes() {
    return this._targetDetectorRecipes;
  }

  // target_resource_id - computed: true, optional: false, required: false
  public get targetResourceId() {
    return this.getStringAttribute('target_resource_id');
  }

  // target_resource_type - computed: true, optional: false, required: false
  public get targetResourceType() {
    return this.getStringAttribute('target_resource_type');
  }

  // target_responder_recipes - computed: true, optional: false, required: false
  private _targetResponderRecipes = new DataOciCloudGuardTargetsTargetCollectionItemsTargetResponderRecipesList(this, "target_responder_recipes", false);
  public get targetResponderRecipes() {
    return this._targetResponderRecipes;
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

export class DataOciCloudGuardTargetsTargetCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionItemsOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsTargetCollection {
}

export function dataOciCloudGuardTargetsTargetCollectionToTerraform(struct?: DataOciCloudGuardTargetsTargetCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardTargetsTargetCollectionToHclTerraform(struct?: DataOciCloudGuardTargetsTargetCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardTargetsTargetCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsTargetCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardTargetsTargetCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciCloudGuardTargetsTargetCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciCloudGuardTargetsTargetCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardTargetsTargetCollectionOutputReference {
    return new DataOciCloudGuardTargetsTargetCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardTargetsFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_guard_targets#name DataOciCloudGuardTargets#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_guard_targets#regex DataOciCloudGuardTargets#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_guard_targets#values DataOciCloudGuardTargets#values}
  */
  readonly values: string[];
}

export function dataOciCloudGuardTargetsFilterToTerraform(struct?: DataOciCloudGuardTargetsFilter | cdktf.IResolvable): any {
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


export function dataOciCloudGuardTargetsFilterToHclTerraform(struct?: DataOciCloudGuardTargetsFilter | cdktf.IResolvable): any {
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

export class DataOciCloudGuardTargetsFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardTargetsFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciCloudGuardTargetsFilter | cdktf.IResolvable | undefined) {
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

export class DataOciCloudGuardTargetsFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciCloudGuardTargetsFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciCloudGuardTargetsFilterOutputReference {
    return new DataOciCloudGuardTargetsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_guard_targets oci_cloud_guard_targets}
*/
export class DataOciCloudGuardTargets extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_cloud_guard_targets";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCloudGuardTargets resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCloudGuardTargets to import
  * @param importFromId The id of the existing DataOciCloudGuardTargets that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_guard_targets#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCloudGuardTargets to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_cloud_guard_targets", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/cloud_guard_targets oci_cloud_guard_targets} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCloudGuardTargetsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCloudGuardTargetsConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_cloud_guard_targets',
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
    this._accessLevel = config.accessLevel;
    this._compartmentId = config.compartmentId;
    this._compartmentIdInSubtree = config.compartmentIdInSubtree;
    this._displayName = config.displayName;
    this._id = config.id;
    this._isNonSecurityZoneTargetsOnlyQuery = config.isNonSecurityZoneTargetsOnlyQuery;
    this._state = config.state;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: true, required: false
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  public resetAccessLevel() {
    this._accessLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // compartment_id_in_subtree - computed: false, optional: true, required: false
  private _compartmentIdInSubtree?: boolean | cdktf.IResolvable; 
  public get compartmentIdInSubtree() {
    return this.getBooleanAttribute('compartment_id_in_subtree');
  }
  public set compartmentIdInSubtree(value: boolean | cdktf.IResolvable) {
    this._compartmentIdInSubtree = value;
  }
  public resetCompartmentIdInSubtree() {
    this._compartmentIdInSubtree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInSubtreeInput() {
    return this._compartmentIdInSubtree;
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

  // is_non_security_zone_targets_only_query - computed: false, optional: true, required: false
  private _isNonSecurityZoneTargetsOnlyQuery?: boolean | cdktf.IResolvable; 
  public get isNonSecurityZoneTargetsOnlyQuery() {
    return this.getBooleanAttribute('is_non_security_zone_targets_only_query');
  }
  public set isNonSecurityZoneTargetsOnlyQuery(value: boolean | cdktf.IResolvable) {
    this._isNonSecurityZoneTargetsOnlyQuery = value;
  }
  public resetIsNonSecurityZoneTargetsOnlyQuery() {
    this._isNonSecurityZoneTargetsOnlyQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isNonSecurityZoneTargetsOnlyQueryInput() {
    return this._isNonSecurityZoneTargetsOnlyQuery;
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

  // target_collection - computed: true, optional: false, required: false
  private _targetCollection = new DataOciCloudGuardTargetsTargetCollectionList(this, "target_collection", false);
  public get targetCollection() {
    return this._targetCollection;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciCloudGuardTargetsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciCloudGuardTargetsFilter[] | cdktf.IResolvable) {
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
      access_level: cdktf.stringToTerraform(this._accessLevel),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      compartment_id_in_subtree: cdktf.booleanToTerraform(this._compartmentIdInSubtree),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      is_non_security_zone_targets_only_query: cdktf.booleanToTerraform(this._isNonSecurityZoneTargetsOnlyQuery),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciCloudGuardTargetsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level: {
        value: cdktf.stringToHclTerraform(this._accessLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id_in_subtree: {
        value: cdktf.booleanToHclTerraform(this._compartmentIdInSubtree),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      is_non_security_zone_targets_only_query: {
        value: cdktf.booleanToHclTerraform(this._isNonSecurityZoneTargetsOnlyQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciCloudGuardTargetsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciCloudGuardTargetsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
